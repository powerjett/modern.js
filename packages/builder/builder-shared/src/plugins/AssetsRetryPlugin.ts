import { fs } from '@modern-js/utils';
// @ts-expect-error
import { RawSource } from 'webpack-sources';
import { getSharedPkgCompiledPath } from '../utils';
import { COMPILATION_PROCESS_STAGE } from './util';
import type HtmlWebpackPlugin from 'html-webpack-plugin';
import type { WebpackPluginInstance, Compiler, Compilation } from 'webpack';
import type { AssetsRetryOptions } from '../types';
import path from 'path';
import { withPublicPath } from '../url';

export class AssetsRetryPlugin implements WebpackPluginInstance {
  readonly name: string;

  readonly distDir: string;

  readonly inlineScript: boolean;

  readonly HtmlPlugin: typeof HtmlWebpackPlugin;

  readonly #retryOptions: AssetsRetryOptions;

  scriptPath: string;

  constructor(
    options: AssetsRetryOptions & {
      distDir: string;
      HtmlPlugin: typeof HtmlWebpackPlugin;
    },
  ) {
    const {
      distDir,
      HtmlPlugin,
      inlineScript = true,
      ...retryOptions
    } = options;
    this.name = 'AssetsRetryPlugin';
    this.#retryOptions = retryOptions;
    this.distDir = distDir;
    this.HtmlPlugin = HtmlPlugin;
    this.inlineScript = inlineScript;
    this.scriptPath = '';
  }

  async getRetryCode() {
    const { default: serialize } = await import(
      '../../compiled/serialize-javascript'
    );
    const runtimeFilePath = getSharedPkgCompiledPath('assetsRetry.js');
    const runtimeCode = await fs.readFile(runtimeFilePath, 'utf-8');
    // Runtime code will include `Object.defineProperty(exports,"__esModule",{value:!0})` after compiled by tsc
    // So we inject `var exports={}` to avoid `exports is not defined` error
    return `var exports={};${runtimeCode}init(${serialize(
      this.#retryOptions,
    )})`;
  }

  async getScriptPath() {
    if (!this.scriptPath) {
      const pkgJson = await fs.readJSON(
        path.join(__dirname, '../../package.json'),
      );
      const version = pkgJson.version.replace(/\./g, '_');
      this.scriptPath = path.join(this.distDir, `assets-retry.${version}.js`);
    }

    return this.scriptPath;
  }

  apply(compiler: Compiler): void {
    if (!this.inlineScript) {
      compiler.hooks.thisCompilation.tap(
        this.name,
        (compilation: Compilation) => {
          compilation.hooks.processAssets.tapPromise(
            {
              name: this.name,
              stage: COMPILATION_PROCESS_STAGE.PROCESS_ASSETS_STAGE_PRE_PROCESS,
            },
            async assets => {
              const scriptPath = await this.getScriptPath();
              assets[scriptPath] = new RawSource(
                await this.getRetryCode(),
                false,
              );
            },
          );
        },
      );
    }

    compiler.hooks.compilation.tap(this.name, compilation => {
      this.HtmlPlugin.getHooks(compilation).afterTemplateExecution.tapPromise(
        this.name,
        async data => {
          const scriptTag = {
            tagName: 'script',
            attributes: {
              type: 'text/javascript',
            },
            voidTag: false,
            meta: {},
          };

          if (this.inlineScript) {
            data.headTags.unshift({
              ...scriptTag,
              innerHTML: await this.getRetryCode(),
            });
          } else {
            const publicPath =
              typeof compiler.options.output.publicPath === 'string'
                ? compiler.options.output.publicPath
                : '/';
            const url = withPublicPath(await this.getScriptPath(), publicPath);
            data.headTags.unshift({
              ...scriptTag,
              attributes: {
                ...scriptTag.attributes,
                src: url,
              },
            });
          }

          return data;
        },
      );
    });
  }
}

import path from 'path';
import {
  getEntryOptions,
  SERVER_RENDER_FUNCTION_NAME,
  LOADABLE_STATS_FILE,
  isUseSSRBundle,
  createRuntimeExportsUtils,
  isSSGEntry,
} from '@modern-js/utils';
import type {
  AppNormalizedConfig,
  ServerUserConfig,
  CliPlugin,
  AppTools,
} from '@modern-js/app-tools';
import type { RouterConfig } from '../../router';

const PLUGIN_IDENTIFIER = 'ssr';

const hasStringSSREntry = (userConfig: AppNormalizedConfig): boolean => {
  const isStreaming = (ssr: ServerUserConfig['ssr']) =>
    ssr && typeof ssr === 'object' && ssr.mode === 'stream';

  const { server } = userConfig;

  if (server?.ssr && !isStreaming(server.ssr)) {
    return true;
  }

  if (server?.ssrByEntries && typeof server.ssrByEntries === 'object') {
    for (const name of Object.keys(server.ssrByEntries)) {
      if (!isStreaming(server.ssrByEntries[name])) {
        return true;
      }
    }
  }

  return false;
};

export default (): CliPlugin<AppTools> => ({
  name: '@modern-js/plugin-ssr',
  required: ['@modern-js/runtime'],
  setup: api => {
    const ssrConfigMap = new Map<string, any>();

    let pluginsExportsUtils: any;

    return {
      config() {
        const appContext = api.useAppContext();
        pluginsExportsUtils = createRuntimeExportsUtils(
          appContext.internalDirectory,
          'plugins',
        );

        const { bundlerType = 'webpack' } = api.useAppContext();
        const babelConfig =
          bundlerType === 'webpack'
            ? (config: any) => {
                // Add id for useLoader method,
                // The useLoader can be used even if the SSR is not enabled
                config.plugins?.push(
                  path.join(__dirname, './babel-plugin-ssr-loader-id'),
                );

                const userConfig = api.useResolvedConfigContext();
                if (
                  isUseSSRBundle(userConfig) &&
                  hasStringSSREntry(userConfig)
                ) {
                  config.plugins?.push(
                    require.resolve('@loadable/babel-plugin'),
                  );
                }
              }
            : undefined;

        return {
          source: {
            alias: {
              // ensure that all packages use the same storage in @modern-js/utils/ssr
              '@modern-js/utils/ssr': require.resolve('@modern-js/utils/ssr'),
              '@modern-js/runtime/plugins': pluginsExportsUtils.getPath(),
            },
          },
          tools: {
            webpackChain: (chain, { isServer, isServiceWorker, CHAIN_ID }) => {
              const userConfig = api.useResolvedConfigContext();

              if (
                isUseSSRBundle(userConfig) &&
                !isServer &&
                !isServiceWorker &&
                hasStringSSREntry(userConfig)
              ) {
                // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
                const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
                chain
                  .plugin(CHAIN_ID.PLUGIN.LOADABLE)
                  .use(LoadableWebpackPlugin, [
                    { filename: LOADABLE_STATS_FILE },
                  ]);
              }

              // add environment variables to determine the node/browser
              const modernVars = {
                [`process.env.MODERN_TARGET`]: JSON.stringify(
                  isServer || isServiceWorker ? 'node' : 'browser',
                ),
              };
              chain.plugin(CHAIN_ID.PLUGIN.DEFINE).tap(args => {
                const [vars, ...rest] = args;
                return [
                  {
                    ...vars,
                    ...modernVars,
                  },
                  ...rest,
                ];
              });
            },
            babel: babelConfig,
          },
        };
      },
      modifyEntryImports({ entrypoint, imports }) {
        const { entryName, fileSystemRoutes } = entrypoint;
        const userConfig = api.useResolvedConfigContext();
        const { packageName, entrypoints } = api.useAppContext();
        pluginsExportsUtils.addExport(
          `export { default as ssr } from '@modern-js/runtime/ssr'`,
        );

        // if use ssg then set ssr config to true
        const ssrConfig = getEntryOptions(
          entryName,
          userConfig.server.ssr,
          userConfig.server.ssrByEntries,
          packageName,
        );

        if (typeof ssrConfig === 'object' && ssrConfig.mode === 'stream') {
          const runtimeConfig = getEntryOptions(
            entryName,
            userConfig.runtime,
            userConfig.runtimeByEntries,
            packageName,
          );
          if (
            (runtimeConfig?.router as RouterConfig)?.mode === 'react-router-5'
          ) {
            throw new Error(
              `router v5 plugin doesn't support streaming SSR, check your config 'runtime.router'`,
            );
          }

          if (fileSystemRoutes && !entrypoint.nestedRoutesEntry) {
            throw new Error(
              `You should switch to file-system based router to support streaming SSR.`,
            );
          }
        }

        const useSSG = isSSGEntry(userConfig, entryName, entrypoints);

        ssrConfigMap.set(entryName, ssrConfig || useSSG);
        if (ssrConfig || useSSG) {
          imports.push({
            value: '@modern-js/runtime/plugins',
            specifiers: [{ imported: PLUGIN_IDENTIFIER }],
          });
        }
        return {
          entrypoint,
          imports,
        };
      },
      modifyEntryRuntimePlugins({ entrypoint, plugins }: any) {
        if (ssrConfigMap.get(entrypoint.entryName)) {
          plugins.push({
            name: PLUGIN_IDENTIFIER,
            options: JSON.stringify(ssrConfigMap.get(entrypoint.entryName)),
          });
        }
        return {
          entrypoint,
          plugins,
        };
      },
      modifyEntryExport({ entrypoint, exportStatement }: any) {
        if (ssrConfigMap.get(entrypoint.entryName)) {
          return {
            entrypoint,
            exportStatement: [
              `export function ${SERVER_RENDER_FUNCTION_NAME}(context) {
              return bootstrap(AppWrapper, context)
            }`,
              exportStatement,
            ].join('\n'),
          };
        }
        return { entrypoint, exportStatement };
      },
    };
  },
});

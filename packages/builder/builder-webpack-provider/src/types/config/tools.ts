import type { IStyledComponentOptions } from '@modern-js/babel-preset-app';
import type {
  ArrayOrNot,
  ChainedConfig,
  FileFilterUtil,
  SharedToolsConfig,
  ToolsLessConfig,
  ToolsSassConfig,
} from '@modern-js/builder-shared';
import type {
  ModifyWebpackChainUtils,
  ModifyWebpackConfigUtils,
} from '../hooks';
import type {
  CSSExtractOptions,
  CSSLoaderOptions,
  CssMinimizerPluginOptions,
  ForkTSCheckerOptions,
  HTMLPluginOptions,
  InspectorPluginOptions,
  PostCSSLoaderOptions,
  PostCSSPlugin,
  PugOptions,
  StyleLoaderOptions,
  TerserPluginOptions,
  TSLoaderOptions,
  WebpackChain,
  WebpackConfig,
} from '../thirdParty';
import type { NormalizedCSSExtractOptions } from '../thirdParty/css';

export type ToolsTerserConfig = ChainedConfig<TerserPluginOptions>;

export type ToolsMinifyCssConfig = ChainedConfig<CssMinimizerPluginOptions>;

export type ToolsTSLoaderConfig = ChainedConfig<
  TSLoaderOptions,
  { addIncludes: FileFilterUtil; addExcludes: FileFilterUtil }
>;

export type ToolsStyledComponentConfig = ChainedConfig<IStyledComponentOptions>;

export type ToolsCSSLoaderConfig = ChainedConfig<CSSLoaderOptions>;

export type ToolsStyleLoaderConfig = ChainedConfig<StyleLoaderOptions>;

export type ToolsCssExtractConfig =
  | CSSExtractOptions
  | ((options: CSSExtractOptions) => CSSExtractOptions | void);

export type ToolsPostCSSLoaderConfig = ChainedConfig<
  PostCSSLoaderOptions,
  { addPlugins: (plugins: PostCSSPlugin | PostCSSPlugin[]) => void }
>;

export type ToolsPugConfig = true | ChainedConfig<PugOptions>;

export type ToolsTSCheckerConfig = ChainedConfig<ForkTSCheckerOptions>;

export type ToolsHtmlPluginConfig = ChainedConfig<
  HTMLPluginOptions,
  {
    entryName: string;
    entryValue: WebpackConfig['entry'];
  }
>;

export type ToolsInspectorPluginOptions = ChainedConfig<InspectorPluginOptions>;

export type ToolsWebpackConfig = ChainedConfig<
  WebpackConfig,
  ModifyWebpackConfigUtils
>;

export type ToolsWebpackChainConfig = ArrayOrNot<
  (chain: WebpackChain, utils: ModifyWebpackChainUtils) => void
>;

export interface ToolsConfig extends SharedToolsConfig {
  /**
   * Configure the [Pug](https://pugjs.org/) template engine.
   */
  pug?: ToolsPugConfig;
  /**
   * Modify the config of [sass-loader](https://github.com/webpack-contrib/sass-loader).
   */
  sass?: ToolsSassConfig;
  /**
   * Modify the config of [less-loader](https://github.com/webpack-contrib/less-loader).
   */
  less?: ToolsLessConfig;
  /**
   * Modify the options of [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin).
   */
  terser?: ToolsTerserConfig;
  /**
   * Modify the options of [ts-loader](https://github.com/TypeStrong/ts-loader).
   * When `tools.tsLoader` is not undefined, builder will use ts-loader instead of babel-loader to compile TypeScript code.
   */
  tsLoader?: ToolsTSLoaderConfig;
  /**
   * Modify the options of [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin).
   */
  tsChecker?: ToolsTSCheckerConfig;
  /**
   * Modify the options of [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin).
   */
  minifyCss?: ToolsMinifyCssConfig;
  /**
   * Modify the options of [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).
   */
  htmlPlugin?: false | ToolsHtmlPluginConfig;
  /**
   * Modify the options of [babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components).
   */
  styledComponents?: ToolsStyledComponentConfig;
  /**
   * Modify the options of [css-loader](https://github.com/webpack-contrib/css-loader).
   */
  cssLoader?: ToolsCSSLoaderConfig;
  /**
   * Modify the options of [style-loader](https://github.com/webpack-contrib/style-loader).
   */
  styleLoader?: ToolsStyleLoaderConfig;
  /**
   * Modify the options of [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin).
   */
  cssExtract?: CSSExtractOptions;
  /**
   * Modify the options of [postcss-loader](https://github.com/webpack-contrib/postcss-loader).
   */
  postcss?: ToolsPostCSSLoaderConfig;
  /**
   * Configure [webpack](https://webpack.js.org/).
   */
  webpack?: ToolsWebpackConfig;
  /**
   * Configure webpack by [webpack-chain](https://github.com/neutrinojs/webpack-chain).
   */
  webpackChain?: ToolsWebpackChainConfig;
  /**
   * Configure the [webpack inspector](https://github.com/web-infra-dev/webpack-inspector).
   */
  inspector?: ToolsInspectorPluginOptions;
}

export interface NormalizedToolsConfig extends ToolsConfig {
  cssExtract: NormalizedCSSExtractOptions;
}

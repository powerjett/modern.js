import type { ComponentType } from 'react';
import type { BuilderConfig } from '@modern-js/builder-rspack-provider';
import type { PluginConfig } from '@modern-js/core';
import _ from '@modern-js/utils/lodash';
import type { PluggableList } from 'unified';
import {
  Config as DefaultThemeConfig,
  NormalizedConfig as NormalizedDefaultThemeConfig,
} from './defaultTheme';
import { DocPlugin } from './Plugin';

export { DefaultThemeConfig, NormalizedDefaultThemeConfig };
export * from './defaultTheme';

export { DocPlugin };

export interface ReplaceRule {
  search: string | RegExp;
  replace: string;
}

export interface Header {
  id: string;
  text: string;
  depth: number;
  charIndex: number;
}

export interface DocConfig<ThemeConfig = DefaultThemeConfig> {
  /**
   * The root directory of the site.
   */
  root?: string;
  /**
   * Path to the logo file in nav bar.
   */
  logo?: string | { dark: string; light: string };
  /**
   * Base path of the site.
   */
  base?: string;
  /**
   * Path to html icon file.
   */
  icon?: string;
  /**
   * Language of the site.
   */
  lang?: string;
  /**
   * Title of the site.
   */
  title?: string;
  /**
   * Description of the site.
   */
  description?: string;
  /**
   * Head tags.
   */
  head?: string[];
  /**
   * Theme config.
   */
  themeConfig?: ThemeConfig;
  /**
   * Builder Configuration
   */
  builderConfig?: BuilderConfig;
  /**
   * The custom config of vite-plugin-route
   */
  route?: RouteOptions;
  /**
   * The custom config of markdown compile
   */
  markdown?: MarkdownOptions;
  /**
   * Doc plugins
   */
  plugins?: DocPlugin[];
  /**
   * Replace rule
   */
  replaceRules?: ReplaceRule[];
  /**
   * Output directory
   */
  outDir?: string;
  /**
   * Custom theme directory
   */
  themeDir?: string;
  /**
   * Global components
   */
  globalUIComponents?: string[];
  /**
   * Global styles, is a Absolute path
   */
  globalStyles?: string;
  /**
   * Search options
   */
  search?: SearchOptions;
}

export interface SiteData<ThemeConfig = NormalizedDefaultThemeConfig> {
  root: string;
  base: string;
  lang: string;
  title: string;
  description: string;
  icon: string;
  themeConfig: ThemeConfig;
  logo: string | { dark: string; light: string };
  pages: {
    routePath: string;
    toc: Header[];
  }[];
  search: SearchOptions;
}

export type PageIndexInfo = {
  id: number;
  title: string;
  routePath: string;
  toc: Header[];
  content: string;
  frontmatter: Record<string, unknown>;
  lang: string;
  domain: string;
};

export type RemotePageInfo = PageIndexInfo & {
  _matchesPosition: {
    content: {
      start: number;
      length: number;
    }[];
  };
};

export interface Hero {
  name: string;
  text: string;
  tagline: string;
  image?: {
    src: string;
    alt: string;
  };
  actions: {
    text: string;
    link: string;
    theme: 'brand' | 'alt';
  }[];
}

export interface Feature {
  icon: string;
  title: string;
  details: string;
  link?: string;
}

export interface PageModule<T extends ComponentType<unknown>> {
  default: T;
  frontmatter?: FrontMatterMeta;
  content?: string;
  [key: string]: unknown;
}

export type PageType = 'home' | 'doc' | 'custom' | '404';

export interface FrontMatterMeta {
  title?: string;
  description?: string;
  overview?: boolean;
  pageType?: PageType;
  features?: Feature[];
  hero?: Hero;
  sidebar?: boolean;
  outline?: boolean;
  lineNumbers?: boolean;
}

export interface PageData {
  siteData: SiteData<DefaultThemeConfig>;
  pagePath: string;
  relativePagePath: string;
  lastUpdatedTime?: string;
  title?: string;
  frontmatter?: FrontMatterMeta;
  description?: string;
  pageType: PageType;
  toc?: Header[];
  routePath: string;
  content?: string;
  lang: string;
  subModules?: PageModule<ComponentType<unknown>>[];
}

export interface RouteOptions {
  /**
   * The directory to search for pages
   */
  root?: string;
  /**
   * The basename of the site
   */
  prefix?: string;
  /**
   * The extension name of the filepath that will be converted to a route
   * @default ['js','jsx','ts','tsx','md','mdx']
   */
  extensions?: string[];
  /**
   * Include extra files from being converted to routes
   */
  include?: string[];
  /**
   * Exclude files from being converted to routes
   */
  exclude?: string[];
}

export type LocalSearchOptions = {
  mode: 'local';
};

export type RemoteSearchIndexInfo =
  | string
  | {
      value: string;
      label: string;
    };

export type RemoteSearchOptions = {
  mode: 'remote';
  apiUrl: string;
  domain?: string;
  indexName: string;
  searchIndexes?: RemoteSearchIndexInfo[];
};

export type SearchOptions = LocalSearchOptions | RemoteSearchOptions | false;

export interface MarkdownOptions {
  remarkPlugins?: PluggableList;
  rehypePlugins?: PluggableList;
  checkDeadLinks?: boolean;
  experimentalMdxRs?: boolean;
}

export interface UserConfig {
  doc?: DocConfig;
  // Modern.js Plugins
  plugins?: PluginConfig;
}

export type Config =
  | UserConfig
  | Promise<UserConfig>
  | ((env: any) => UserConfig | Promise<UserConfig>);

export const mergeDocConfig = (...configs: UserConfig[]): UserConfig =>
  _.mergeWith({}, ...configs, (target: UserConfig, source: UserConfig) => {
    const pair = [target, source];
    if (pair.some(_.isUndefined)) {
      // fallback to lodash default merge behavior
      return undefined;
    }
    if (pair.some(_.isArray)) {
      return [..._.castArray(target), ..._.castArray(source)];
    }
    // fallback to lodash default merge behavior
    return undefined;
  });

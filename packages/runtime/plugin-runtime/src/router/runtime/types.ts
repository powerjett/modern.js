import type { RouteProps, RouteObject } from 'react-router-dom';
import { PageRoute, NestedRoute } from '@modern-js/types';

declare global {
  interface Window {
    _SERVER_DATA?: {
      router: {
        baseUrl: string;
        params: Record<string, string>;
      };
    };
  }
}

export type SingleRouteConfig = RouteProps & {
  redirect?: string;
  routes?: SingleRouteConfig[];
  key?: string;

  /**
   * layout component
   */
  layout?: React.ComponentType;

  /**
   * component would be rendered when route macthed.
   */
  component?: React.ComponentType;
};

export type RouterConfig = {
  mode?: 'react-router-5';
  routesConfig: {
    globalApp?: React.ComponentType<any>;
    routes: (NestedRoute | PageRoute)[];
  };
  serverBase?: string[];
  supportHtml5History?: boolean;
  basename?: string;
  createRoutes?: () => RouteObject[];
};

export type Routes = RouterConfig['routesConfig']['routes'];

export interface RouteManifest {
  routeAssets: RouteAssets;
}

export interface RouteAssets {
  [routeId: string]: {
    chunkIds?: (string | number)[];
    assets?: string[];
  };
}

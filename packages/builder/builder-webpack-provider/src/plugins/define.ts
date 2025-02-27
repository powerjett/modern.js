import _ from '@modern-js/utils/lodash';
import type { BuilderPlugin, SourceConfig } from '../types';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { removeTailSlash } from '@modern-js/utils';

export const builderPluginDefine = (): BuilderPlugin => ({
  name: 'builder-plugin-define',

  async setup(api) {
    api.modifyWebpackChain(async (chain, { CHAIN_ID }) => {
      const config = api.getNormalizedConfig();

      const builtinVars: NonNullable<SourceConfig['globalVars']> = {
        'process.env.NODE_ENV': process.env.NODE_ENV,
        'process.env.ASSET_PREFIX': removeTailSlash(
          chain.output.get('publicPath') || '/',
        ),
      };

      // Serialize global vars. User can customize value of `builtinVars`.
      const globalVars = { ...builtinVars, ...config.source.globalVars };
      const serializedVars = _.mapValues(
        globalVars,
        value => JSON.stringify(value) ?? 'undefined',
      );
      // Macro defines.
      const defineExprs = config.source.define;

      const { DefinePlugin } = await import('webpack');
      chain
        .plugin(CHAIN_ID.PLUGIN.DEFINE)
        .use(DefinePlugin, [{ ...serializedVars, ...defineExprs }]);
    });
  },
});

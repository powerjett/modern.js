import { logger, chalk, isApiOnly, getTargetDir } from '@modern-js/utils';
import type { PluginAPI } from '@modern-js/core';
import server from '@modern-js/prod-server';
import { printInstructions } from '../utils/printInstructions';
import type { AppTools } from '../types';
import { injectDataLoaderPlugin } from '../utils/createServer';
import { getServerInternalPlugins } from '../utils/getServerInternalPlugins';

export const start = async (api: PluginAPI<AppTools<'shared'>>) => {
  const appContext = api.useAppContext();
  const userConfig = api.useResolvedConfigContext();
  const hookRunners = api.useHookRunners();

  const { appDirectory, port, serverConfigFile } = appContext;

  logger.log(chalk.cyan(`Starting the modern server...`));
  const apiOnly = await isApiOnly(
    appContext.appDirectory,
    userConfig?.source?.entriesDir,
  );
  const serverInternalPlugins = await getServerInternalPlugins(api);

  const app = await server({
    pwd: appDirectory,
    config: {
      ...userConfig,
      dev: userConfig.dev as any,
      output: {
        path: userConfig.output.distPath?.root,
        ...(userConfig.output || {}),
      },
    },
    appContext: {
      sharedDirectory: getTargetDir(
        appContext.sharedDirectory,
        appContext.appDirectory,
        appContext.distDirectory,
      ),
      apiDirectory: getTargetDir(
        appContext.apiDirectory,
        appContext.appDirectory,
        appContext.distDirectory,
      ),
      lambdaDirectory: getTargetDir(
        appContext.lambdaDirectory,
        appContext.appDirectory,
        appContext.distDirectory,
      ),
    },
    serverConfigFile,
    internalPlugins: injectDataLoaderPlugin(serverInternalPlugins),
    apiOnly,
  });

  app.listen(port, async (err: Error) => {
    if (err) {
      throw err;
    }
    await printInstructions(hookRunners, appContext, userConfig);
  });
};

import { chalk } from '@modern-js/utils';

const noDevTools = `暂无可用的 DevTools，你可以通过以下选项以及对应的链接来了解如何使用。
  - ${chalk.underline(
    chalk.blue('[Storybook]:'),
    'https://modernjs.dev/module-tools/guide/basic/using-storybook.html',
  )}
`;

export const ZH_LOCALE = {
  command: {
    build: {
      describe: '构建模块命令',
      watch: '使用 Watch 模式构建模块',
      tsconfig: '指定 tsconfig.json 文件的路径',
      styleOnly: '只构建样式文件',
      platform:
        '如果存在的话，执行指定的构建任务或者全部构建任务. (构建任务包括: "storybook", "文档")',
      noTsc: '关闭 tsc 编译（废弃）',
      dts: '开启 dts 文件的生成以及类型检查',
      noClear: '不清理产物目录',
      config: '指定配置文件路径，可以为相对路径或绝对路径',
    },
    dev: {
      describe: '本地开发命令',
      tsconfig: '指定 tsconfig.json 文件的路径',
    },
    new: {
      describe: '模块化工程方案中执行生成器',
      debug: '开启 Debug 模式，打印调试日志信息',
      config: '生成器运行默认配置(JSON 字符串)',
      distTag: '生成器使用特殊的 npm Tag 版本',
      registry: '生成器运行过程中定制 npm Registry',
      lang: '设置 new 命令执行语言(zh 或者 en)',
    },
  },
  log: {
    dev: {
      noDevtools: noDevTools,
    },
  },
  dts: {
    abortOnError:
      '当前关闭了 `dts.abortOnError` 配置，类型错误不会导致构建失败，但无法保证类型文件正常输出',
  },
};

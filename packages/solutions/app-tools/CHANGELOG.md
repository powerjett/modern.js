# @modern-js/app-tools

## 2.13.2

### Patch Changes

- Updated dependencies [106ac07]
- Updated dependencies [7f4fd56]
  - @modern-js/core@2.13.2
  - @modern-js/plugin-data-loader@2.13.2
  - @modern-js/plugin-lint@2.13.2
  - @modern-js/builder@2.13.2
  - @modern-js/builder-rspack-provider@2.13.2
  - @modern-js/builder-shared@2.13.2
  - @modern-js/builder-webpack-provider@2.13.2
  - @modern-js/builder-plugin-esbuild@2.13.2
  - @modern-js/builder-plugin-node-polyfill@2.13.2
  - @modern-js/plugin-i18n@2.13.2
  - @modern-js/new-action@2.13.2
  - @modern-js/prod-server@2.13.2
  - @modern-js/server@2.13.2
  - @modern-js/node-bundle-require@2.13.2
  - @modern-js/plugin@2.13.2
  - @modern-js/types@2.13.2
  - @modern-js/upgrade@2.13.2
  - @modern-js/utils@2.13.2

## 2.13.1

### Patch Changes

- Updated dependencies [ab79a7b]
  - @modern-js/core@2.13.1
  - @modern-js/plugin-data-loader@2.13.1
  - @modern-js/plugin-lint@2.13.1
  - @modern-js/builder@2.13.1
  - @modern-js/builder-rspack-provider@2.13.1
  - @modern-js/builder-shared@2.13.1
  - @modern-js/builder-webpack-provider@2.13.1
  - @modern-js/builder-plugin-esbuild@2.13.1
  - @modern-js/builder-plugin-node-polyfill@2.13.1
  - @modern-js/plugin-i18n@2.13.1
  - @modern-js/new-action@2.13.1
  - @modern-js/prod-server@2.13.1
  - @modern-js/server@2.13.1
  - @modern-js/node-bundle-require@2.13.1
  - @modern-js/plugin@2.13.1
  - @modern-js/types@2.13.1
  - @modern-js/upgrade@2.13.1
  - @modern-js/utils@2.13.1

## 2.13.0

### Minor Changes

- 3d5086b: feat: the rspack unsupport inline loader, so we move data-loader to bundler.module.rules
  feat: rspack 不支持 inline loader, 所以我们将 data-loader 移动到 bundler.module.rules 配置中去。

### Patch Changes

- 69eed51: refactor: move add builder-plugin-node-polyfill action to builder-generator
  refactor: 将添加 builder-plugin-node-polyfill 的行为移动到 builder-generator
- e9b1656: fix: plugin config hook can not get bundlerType, so we can't set babelConfig correctly in ssr plugin
  fix: 插件的 config 钩子不能获得 bundlerType，所以我们在 ssr 插件不能正确的设置 babelConfig
- e5e4ba0: refactor(app-tools): inject **assetPrefix** by entry

  refactor(app-tools): 通过 entry 来注入 **assetPrefix** 变量

- 20d694a: fix: the `defineLegacyConfig` should set autoLoadPlugins = true by default.
  fix: `defineLegacyConfig` 应该默认将 autoLoadPlugins 设置为 true
- e91ec97: feat(app-tools): export mergeConfig function

  feat(app-tools): 导出 mergeConfig 函数

- 034f36b: feat: set the default language of CLI to English

  feat: 将命令行的默认语言设置为英文

- 034f36b: fix(upgrade): i18n of upgrade command not work

  fix(upgrade): 修复 upgrade 命令的 i18n 配置不生效的问题

- Updated dependencies [1feacdc]
- Updated dependencies [384406c]
- Updated dependencies [e9b1656]
- Updated dependencies [c89de05]
- Updated dependencies [d69c0b9]
- Updated dependencies [3d5086b]
- Updated dependencies [5deb1fb]
- Updated dependencies [348306d]
- Updated dependencies [e91ec97]
- Updated dependencies [034f36b]
- Updated dependencies [384e393]
- Updated dependencies [78431f4]
- Updated dependencies [034f36b]
- Updated dependencies [9c0572e]
- Updated dependencies [538d1a8]
  - @modern-js/builder-shared@2.13.0
  - @modern-js/builder@2.13.0
  - @modern-js/core@2.13.0
  - @modern-js/builder-webpack-provider@2.13.0
  - @modern-js/builder-rspack-provider@2.13.0
  - @modern-js/plugin-data-loader@2.13.0
  - @modern-js/plugin-i18n@2.13.0
  - @modern-js/upgrade@2.13.0
  - @modern-js/plugin@2.13.0
  - @modern-js/builder-plugin-esbuild@2.13.0
  - @modern-js/builder-plugin-node-polyfill@2.13.0
  - @modern-js/plugin-lint@2.13.0
  - @modern-js/new-action@2.13.0
  - @modern-js/prod-server@2.13.0
  - @modern-js/server@2.13.0
  - @modern-js/node-bundle-require@2.13.0
  - @modern-js/types@2.13.0
  - @modern-js/utils@2.13.0

## 2.12.0

### Patch Changes

- c2ca6c8: fix(app-tools): failed to restart CLI

  fix(app-tools): 修复 CLI 重启失败的问题

- 8e64d03: fix: referenceCssAssets should not include publicPath in bundle
  fix: referenceCssAssets 不应该包含 publicPath 字段在 bundle 中
- 05493a7: feat: support noEmitOnError for ts compiler & remove assetsByChunkName from RouterPlugin
  feat: 支持 ts 编译器的 noEmitOnError 选项 & 从 RouterPlugin 中移除 assetsByChunkName
- Updated dependencies [cd1d966]
- Updated dependencies [c2ca6c8]
- Updated dependencies [7980842]
- Updated dependencies [6d86e34]
- Updated dependencies [fef3394]
- Updated dependencies [591f53a]
- Updated dependencies [6b30837]
  - @modern-js/builder-rspack-provider@2.12.0
  - @modern-js/utils@2.12.0
  - @modern-js/prod-server@2.12.0
  - @modern-js/builder-shared@2.12.0
  - @modern-js/builder-webpack-provider@2.12.0
  - @modern-js/builder@2.12.0
  - @modern-js/builder-plugin-esbuild@2.12.0
  - @modern-js/builder-plugin-node-polyfill@2.12.0
  - @modern-js/core@2.12.0
  - @modern-js/plugin-data-loader@2.12.0
  - @modern-js/plugin-i18n@2.12.0
  - @modern-js/plugin-lint@2.12.0
  - @modern-js/new-action@2.12.0
  - @modern-js/server@2.12.0
  - @modern-js/node-bundle-require@2.12.0
  - @modern-js/upgrade@2.12.0
  - @modern-js/plugin@2.12.0
  - @modern-js/types@2.12.0

## 2.11.0

### Patch Changes

- 415bee6: fix: load chunk while can not load all css asset, when streaming ssr.
  fix: 使用 streaming ssr 时，不能加载当前 chunk 的所有 css 资源
- c0ba89b: feat: 控制台输出 rspack 版本
  feat: Print the version of rspack in the console.
- 0bd018b: feat: support use node api run dev & build & deploy command
  feat: 支持通过 node api 运行 dev & build & deploy 命令
- 5d624fd: feat: assets and data prefetching is supported
  feat: 支持资源和数据预加载
- 7017909: fix: distpath.root not take effect when serve

  fix: 修复 distpath.root 在 run serve 时不生效的问题

- 381a3b9: feat(utils): move universal utils to the universal folder

  feat(utils): 将运行时使用的 utils 移动到 universal 目录

- a47543a: fix: should hide publicPath in injected manifest
  fix: 应该隐藏 publicPath 在注入的 manifest 中
- Updated dependencies [adcedad]
- Updated dependencies [cfb058f]
- Updated dependencies [a9c6083]
- Updated dependencies [55b07fd]
- Updated dependencies [c0ba89b]
- Updated dependencies [0bd018b]
- Updated dependencies [8b90c79]
- Updated dependencies [a8c08c3]
- Updated dependencies [3aa318d]
- Updated dependencies [5d624fd]
- Updated dependencies [e2466a1]
- Updated dependencies [58faba2]
- Updated dependencies [53b0a63]
- Updated dependencies [02bb383]
- Updated dependencies [3171c9d]
- Updated dependencies [381a3b9]
- Updated dependencies [7a60f10]
- Updated dependencies [73cfc9b]
- Updated dependencies [cd1040f]
- Updated dependencies [e262a99]
- Updated dependencies [7178795]
- Updated dependencies [1140a69]
- Updated dependencies [b71cef1]
- Updated dependencies [274b2e5]
- Updated dependencies [b9e1c54]
  - @modern-js/builder-shared@2.11.0
  - @modern-js/builder-webpack-provider@2.11.0
  - @modern-js/builder@2.11.0
  - @modern-js/utils@2.11.0
  - @modern-js/builder-rspack-provider@2.11.0
  - @modern-js/core@2.11.0
  - @modern-js/builder-plugin-node-polyfill@2.11.0
  - @modern-js/plugin-data-loader@2.11.0
  - @modern-js/plugin-lint@2.11.0
  - @modern-js/prod-server@2.11.0
  - @modern-js/server@2.11.0
  - @modern-js/builder-plugin-esbuild@2.11.0
  - @modern-js/plugin-i18n@2.11.0
  - @modern-js/new-action@2.11.0
  - @modern-js/node-bundle-require@2.11.0
  - @modern-js/upgrade@2.11.0
  - @modern-js/plugin@2.11.0
  - @modern-js/types@2.11.0

## 2.10.0

### Patch Changes

- 0da32d0: chore: upgrade jest and puppeteer
  chore: 升级 jest 和 puppeteer 到 latest
- 0d9962b: fix: add types field in package.json
  fix: 添加 package.json 中的 types 字段
- fbefa7e: chore(deps): bump webpack from 5.75.0 to 5.76.2

  chore(deps): 将 webpack 从 5.75.0 升级至 5.76.2

- 7b5dd99: feat(app-tools): support builder-plugin-node-polyfill & output.disableNodePolyfill false when use Rspack

  feat(app-tools): 在启动 Rspack 时，支持 builder-plugin-node-polyfill 插件以及将 output.disableNodePolyfill 设置为 false

- 6db4864: feat: add output.splitRouteChunks
  feat: 添加 output.splitRouteChunks 配置
- dcc5610: perf: improve routerPlugin performance
  perf: 优化 routerPlugin 的性能
- 84c4372: fix: should get publicPath from webpack stats in router-plugin
  fix: 应该从 webpack stats 获得 publicPath
- Updated dependencies [d8bbf28]
- Updated dependencies [a8db932]
- Updated dependencies [3e0bd50]
- Updated dependencies [92d247f]
- Updated dependencies [0da32d0]
- Updated dependencies [d3f0642]
- Updated dependencies [a16b9b0]
- Updated dependencies [0d9962b]
- Updated dependencies [fbefa7e]
- Updated dependencies [4d54233]
- Updated dependencies [6db4864]
- Updated dependencies [82326ee]
- Updated dependencies [d6b6e29]
- Updated dependencies [cfdbf80]
- Updated dependencies [ed55acb]
  - @modern-js/prod-server@2.10.0
  - @modern-js/builder-webpack-provider@2.10.0
  - @modern-js/builder-rspack-provider@2.10.0
  - @modern-js/builder-shared@2.10.0
  - @modern-js/plugin-data-loader@2.10.0
  - @modern-js/server@2.10.0
  - @modern-js/types@2.10.0
  - @modern-js/node-bundle-require@2.10.0
  - @modern-js/new-action@2.10.0
  - @modern-js/plugin-i18n@2.10.0
  - @modern-js/plugin-lint@2.10.0
  - @modern-js/upgrade@2.10.0
  - @modern-js/plugin@2.10.0
  - @modern-js/utils@2.10.0
  - @modern-js/core@2.10.0
  - @modern-js/builder-plugin-esbuild@2.10.0
  - @modern-js/builder-plugin-node-polyfill@2.10.0
  - @modern-js/builder@2.10.0

## 2.9.0

### Patch Changes

- 49bb8cd0ef: fix: move chunkmap.css comment to bottom of head
  fix: 将 chunkmap.css 标记移动到 head 底部
- 83423193bb: fix: fix chunk css location in template
  fix: 修复异步加载的 css 在模版文件中的位置
- e1b6881b39: fix: should not replace to alias when filePath is not in src
  fix: 不应该替换为别名，当 filePath 不在 src 目录中时
- 5cb90eddaf: fix: fix data-loader compat in windows
  fix: 修复 data loader 在 windows 下的兼容性问题
- e9ae517226: fix: optimize the regexp for route matching rules
  fix: 优化路由匹配正则
- 4d89ad2a86: fix: the asset may be removed by InlineChunkHtmlPlugin
  fix: asset 可能会被 InlineChunkHtmlPlugin 移除
- Updated dependencies [7035d5c22f]
- Updated dependencies [49bb8cd0ef]
- Updated dependencies [76b26883bb]
- Updated dependencies [f31a254d78]
- Updated dependencies [1f047183c3]
- Updated dependencies [88328d914b]
- Updated dependencies [dd56401486]
- Updated dependencies [07569e577e]
- Updated dependencies [da66232feb]
  - @modern-js/builder-webpack-provider@2.9.0
  - @modern-js/prod-server@2.9.0
  - @modern-js/server@2.9.0
  - @modern-js/builder-rspack-provider@2.9.0
  - @modern-js/builder@2.9.0
  - @modern-js/core@2.9.0
  - @modern-js/builder-plugin-esbuild@2.9.0
  - @modern-js/builder-plugin-node-polyfill@2.9.0
  - @modern-js/builder-shared@2.9.0
  - @modern-js/plugin-data-loader@2.9.0
  - @modern-js/plugin-lint@2.9.0
  - @modern-js/new-action@2.9.0
  - @modern-js/plugin-i18n@2.9.0
  - @modern-js/node-bundle-require@2.9.0
  - @modern-js/plugin@2.9.0
  - @modern-js/types@2.9.0
  - @modern-js/upgrade@2.9.0
  - @modern-js/utils@2.9.0

## 2.8.0

### Minor Changes

- ab1e8065cb: feat: support router-plugin in Rspack bundler.
  feat: 在 Rspack bundler 里支持 router-plugin

### Patch Changes

- a12b5b4ec8: fix: the adapterSSR builder plugin modifyChain Hooks is not async function
  fix: adapterSSR builder 插件的 adapterSSR Hooks 不是异步函数
- 1104a9f18b: feat: support start web service only
  feat: 支持只启动 web 服务
- 1f6ca2c7fb: fix: nested routes in ssg
  fix: 修复嵌套路由在 SSG 中的问题
- 2b6b1a014c: refactor: app-tools builder
  refactor: 重构 app-tools builder
- 250f794c40: fix: move the analyze webpackChain config to app-tools builder shared
  fix: 将 anylyze 的 `webpackChain` 配置项移植进 app-tools builder shared
- Updated dependencies [ea7bb41e30]
- Updated dependencies [65c56f43b9]
- Updated dependencies [0cf8540ffe]
- Updated dependencies [bd369a89a4]
- Updated dependencies [bc943c9b04]
- Updated dependencies [40f5039b17]
- Updated dependencies [1104a9f18b]
- Updated dependencies [70d82e1408]
- Updated dependencies [2c1151271d]
- Updated dependencies [481461a61d]
- Updated dependencies [1242f5d8d6]
- Updated dependencies [1f6ca2c7fb]
- Updated dependencies [457ee832b9]
  - @modern-js/server@2.8.0
  - @modern-js/builder-webpack-provider@2.8.0
  - @modern-js/plugin-data-loader@2.8.0
  - @modern-js/builder@2.8.0
  - @modern-js/builder-shared@2.8.0
  - @modern-js/builder-rspack-provider@2.8.0
  - @modern-js/prod-server@2.8.0
  - @modern-js/utils@2.8.0
  - @modern-js/types@2.8.0
  - @modern-js/builder-plugin-esbuild@2.8.0
  - @modern-js/builder-plugin-node-polyfill@2.8.0
  - @modern-js/core@2.8.0
  - @modern-js/plugin-i18n@2.8.0
  - @modern-js/plugin-lint@2.8.0
  - @modern-js/new-action@2.8.0
  - @modern-js/node-bundle-require@2.8.0
  - @modern-js/upgrade@2.8.0
  - @modern-js/plugin@2.8.0

## 2.7.0

### Minor Changes

- dcad887024: feat: support deferred data for streaming ssr
  feat: 流式渲染支持 deferred data
- 84bfb439b8: feat: support custom apiDir, lambdaDir and style of writing for bff
  feat: 支持定制 api 目录，lambda 目录，bff 的写法

### Patch Changes

- 0644f90567: feat: support optional params in file-based route
  feat: 约定式路由支持可选参数
- 6547de8dd4: fix: use api.useResolvedConfigContext instead useResolvedConfigContext from @modern-js/core
  fix: 使用 api.useResolvedConfigContext 代替从 @modern-js/core 中导出的 useResolvedConfigContext
- 1eea234fdd: chore: make test files naming consistent

  chore: 统一测试文件命名为小驼峰格式

- Updated dependencies [206c806efa]
- Updated dependencies [a729b0d366]
- Updated dependencies [dfece9dc1c]
- Updated dependencies [6378e26bf9]
- Updated dependencies [0f15fc597c]
- Updated dependencies [3a942a2472]
- Updated dependencies [5f899af53a]
- Updated dependencies [dcad887024]
- Updated dependencies [a4672f7c16]
- Updated dependencies [1b913372b4]
- Updated dependencies [ebe0d2dd6e]
- Updated dependencies [7fff9020e1]
- Updated dependencies [1eea234fdd]
- Updated dependencies [84bfb439b8]
  - @modern-js/builder-rspack-provider@2.7.0
  - @modern-js/builder-shared@2.7.0
  - @modern-js/builder-webpack-provider@2.7.0
  - @modern-js/core@2.7.0
  - @modern-js/builder@2.7.0
  - @modern-js/server@2.7.0
  - @modern-js/utils@2.7.0
  - @modern-js/plugin-data-loader@2.7.0
  - @modern-js/types@2.7.0
  - @modern-js/plugin-i18n@2.7.0
  - @modern-js/plugin-lint@2.7.0
  - @modern-js/prod-server@2.7.0
  - @modern-js/node-bundle-require@2.7.0
  - @modern-js/builder-plugin-esbuild@2.7.0
  - @modern-js/builder-plugin-node-polyfill@2.7.0
  - @modern-js/new-action@2.7.0
  - @modern-js/upgrade@2.7.0
  - @modern-js/plugin@2.7.0

## 2.6.0

### Patch Changes

- 88f7b34: fix(app-tools): incorrect tools.esbuild config

  fix(app-tools): 修复 tools.esbuild 格式与文档不一致的问题

- e1f799e: fix: use 0.0.0.0 instead of localhost as the default dev host
  fix: 使用 0.0.0.0 代替 localhost 作为默认的 dev host
- 7915ab3: fix: should not assign nestedRoutesEntry to entrypoint if use v5 router
  fix: 使用 v5 路由的时候，不应该在 entrypoint 上挂载 nestedRoutesEntry 属性
- 08cb975: feat: optimize worker build

  feat: 优化 worker 构建

- Updated dependencies [671477d]
- Updated dependencies [b92d6db]
- Updated dependencies [36164a2]
- Updated dependencies [d638438]
- Updated dependencies [ba6db6e]
- Updated dependencies [ba6db6e]
- Updated dependencies [e1f799e]
- Updated dependencies [107f674]
- Updated dependencies [7915ab3]
- Updated dependencies [03d7f7d]
- Updated dependencies [1c76d0e]
- Updated dependencies [fae9d1b]
- Updated dependencies [49fa0b1]
- Updated dependencies [0fe658a]
- Updated dependencies [62930b9]
  - @modern-js/builder-webpack-provider@2.6.0
  - @modern-js/builder-shared@2.6.0
  - @modern-js/prod-server@2.6.0
  - @modern-js/plugin-data-loader@2.6.0
  - @modern-js/server@2.6.0
  - @modern-js/utils@2.6.0
  - @modern-js/builder@2.6.0
  - @modern-js/types@2.6.0
  - @modern-js/builder-rspack-provider@2.6.0
  - @modern-js/builder-plugin-esbuild@2.6.0
  - @modern-js/builder-plugin-node-polyfill@2.6.0
  - @modern-js/core@2.6.0
  - @modern-js/plugin-i18n@2.6.0
  - @modern-js/plugin-lint@2.6.0
  - @modern-js/new-action@2.6.0
  - @modern-js/node-bundle-require@2.6.0
  - @modern-js/upgrade@2.6.0
  - @modern-js/plugin@2.6.0

## 2.5.0

### Patch Changes

- 89ca6cc: refactor: merge build-config into scripts/build

  refactor: 把 build-config 合并进 scripts/build

- 7cb8bb4: fix: use a more correctly params to cal document file

  fix: 使用更准确的参数去获取 docuemnt 文件

- 30614fa: chore: modify package.json entry fields and build config
  chore: 更改 package.json entry 字段以及构建配置
- 97cc2d0: feat: pass origin bootstrap function to custom render
  feat: 自定义渲染中传入原始 bootstrap 函数
- 840142c: fix: the `@modern-js/app-tools` hooks should set `webpack` as default type.
  fix: `@modern-js/app-tools` hooks 应该将 'webpack' 设置为默认类型
- 11c053b: feat: ssr support deploy worker

  feat: ssr 支持边缘部署

- Updated dependencies [58a9918]
- Updated dependencies [89ca6cc]
- Updated dependencies [7cb8bb4]
- Updated dependencies [442204a]
- Updated dependencies [bb4e712]
- Updated dependencies [6fca567]
- Updated dependencies [30614fa]
- Updated dependencies [038a23b]
- Updated dependencies [c4c10e7]
- Updated dependencies [84c21f9]
- Updated dependencies [1b0ce87]
- Updated dependencies [11c053b]
- Updated dependencies [577084d]
- Updated dependencies [f0b3d8c]
- Updated dependencies [c5ea222]
- Updated dependencies [28e7dc6]
- Updated dependencies [40230b3]
- Updated dependencies [169c58b]
  - @modern-js/builder-shared@2.5.0
  - @modern-js/plugin-data-loader@2.5.0
  - @modern-js/plugin-i18n@2.5.0
  - @modern-js/plugin-lint@2.5.0
  - @modern-js/new-action@2.5.0
  - @modern-js/prod-server@2.5.0
  - @modern-js/server@2.5.0
  - @modern-js/node-bundle-require@2.5.0
  - @modern-js/plugin@2.5.0
  - @modern-js/types@2.5.0
  - @modern-js/builder@2.5.0
  - @modern-js/builder-rspack-provider@2.5.0
  - @modern-js/builder-webpack-provider@2.5.0
  - @modern-js/builder-plugin-esbuild@2.5.0
  - @modern-js/builder-plugin-node-polyfill@2.5.0
  - @modern-js/core@2.5.0
  - @modern-js/utils@2.5.0
  - @modern-js/upgrade@2.5.0

## 2.4.0

### Minor Changes

- e84d16b: feat: support catch-all routing
  feat: 支持通配路由
- a914be8: feat: modern-js support Rspack bundler
  feat: modern-js 支持 Rspack 构建工具

### Patch Changes

- 6f83037: fix: change the builder resolve plugin
  fix: 修复 builder resolve 插件
- b4e01e7: chore: rename MWA to Web App

  chore: 将 MWA 重命名为 Web App

- 8c2db5f: feat(core): improve support for exporting a function in config file

  feat(core): 完善对配置文件中导出函数的支持

- 3144625: fix: sub root route should be matched by a splat route
  fix: 子根路由应该被通配路由匹配
- c53a0ff: fix: lazy import `rspack-provider`
  fix: 懒加载 `rspack-provider`
- Updated dependencies [d19484c]
- Updated dependencies [637f16b]
- Updated dependencies [6f83037]
- Updated dependencies [014d06b]
- Updated dependencies [98a2733]
- Updated dependencies [b3f2a7e]
- Updated dependencies [a5572b8]
- Updated dependencies [91db54e]
- Updated dependencies [a914be8]
- Updated dependencies [67b5a42]
- Updated dependencies [48b036e]
- Updated dependencies [8c2db5f]
  - @modern-js/server@2.4.0
  - @modern-js/builder-webpack-provider@2.4.0
  - @modern-js/builder-rspack-provider@2.4.0
  - @modern-js/builder-shared@2.4.0
  - @modern-js/builder@2.4.0
  - @modern-js/node-bundle-require@2.4.0
  - @modern-js/utils@2.4.0
  - @modern-js/core@2.4.0
  - @modern-js/builder-plugin-esbuild@2.4.0
  - @modern-js/builder-plugin-node-polyfill@2.4.0
  - @modern-js/new-action@2.4.0
  - @modern-js/plugin-data-loader@2.4.0
  - @modern-js/plugin-i18n@2.4.0
  - @modern-js/plugin-lint@2.4.0
  - @modern-js/prod-server@2.4.0
  - @modern-js/upgrade@2.4.0
  - @modern-js/plugin@2.4.0
  - @modern-js/types@2.4.0

## 2.3.0

### Patch Changes

- fd5a3ed: fix: failed to exit new command

  fix: 修复 new 命令执行完成后未退出进程的问题

- Updated dependencies [65f1322]
- Updated dependencies [7cd8185]
- Updated dependencies [fd5a3ed]
- Updated dependencies [362c9a8]
- Updated dependencies [67ba34a]
- Updated dependencies [2ad9fdf]
- Updated dependencies [7b2cdcb]
- Updated dependencies [1b0dd35]
- Updated dependencies [f9a26fe]
- Updated dependencies [6ca1c0b]
- Updated dependencies [89b6739]
- Updated dependencies [01e4a27]
- Updated dependencies [7736171]
- Updated dependencies [ff48fc2]
- Updated dependencies [b6c2eb8]
- Updated dependencies [3cdf48e]
  - @modern-js/core@2.3.0
  - @modern-js/builder@2.3.0
  - @modern-js/builder-webpack-provider@2.3.0
  - @modern-js/utils@2.3.0
  - @modern-js/builder-shared@2.3.0
  - @modern-js/server@2.3.0
  - @modern-js/plugin-data-loader@2.3.0
  - @modern-js/plugin-lint@2.3.0
  - @modern-js/builder-plugin-esbuild@2.3.0
  - @modern-js/builder-plugin-node-polyfill@2.3.0
  - @modern-js/plugin-i18n@2.3.0
  - @modern-js/new-action@2.3.0
  - @modern-js/prod-server@2.3.0
  - @modern-js/node-bundle-require@2.3.0
  - @modern-js/upgrade@2.3.0
  - @modern-js/plugin@2.3.0
  - @modern-js/types@2.3.0

## 2.2.0

### Minor Changes

- 12ef50f: feat: `modern-js/core` can watch files change
  feat: `modern-js/core` 可以监听文件变化

### Patch Changes

- 64ade69: fix(app-tools): dev --entry not work

  fix(app-tools): 修复 dev --entry 参数不生效的问题

- 16bdc0a: chore: adjust builder plugin name

  chore: 调整 builder 插件命名格式

- 19bb384: fix: when a child route does not exist, an empty layout should not be created
  fix: 子路由不存在时，不应该创建空的 layout
- Updated dependencies [f2f8a83]
- Updated dependencies [cb12ee7]
- Updated dependencies [49eff0c]
- Updated dependencies [2d3e3df]
- Updated dependencies [360a259]
- Updated dependencies [9fc6de9]
- Updated dependencies [d82b621]
- Updated dependencies [16bdc0a]
- Updated dependencies [12ef50f]
- Updated dependencies [19bb384]
  - @modern-js/builder-shared@2.2.0
  - @modern-js/builder-webpack-provider@2.2.0
  - @modern-js/core@2.2.0
  - @modern-js/plugin-data-loader@2.2.0
  - @modern-js/utils@2.2.0
  - @modern-js/prod-server@2.2.0
  - @modern-js/server@2.2.0
  - @modern-js/builder@2.2.0
  - @modern-js/builder-plugin-esbuild@2.2.0
  - @modern-js/builder-plugin-node-polyfill@2.2.0
  - @modern-js/types@2.2.0
  - @modern-js/plugin-lint@2.2.0
  - @modern-js/plugin-i18n@2.2.0
  - @modern-js/new-action@2.2.0
  - @modern-js/node-bundle-require@2.2.0
  - @modern-js/upgrade@2.2.0
  - @modern-js/plugin@2.2.0

## 2.1.0

### Patch Changes

- 2ad9642: feat: new command support --lang params

  feat: new 命令支持 --lang 参数

- bf38bda: feat(app-tools): allow to use dev.port config

  feat(app-tools): 支持使用 dev.port 配置

- 29fbc66: fix(app-tools): SVG default export type

  fix(app-tools): 修复 SVG 默认导出的类型错误

- 3a7da8c: fix(app-tools): server.port not work in development

  fix(app-tools): 修复开发环境下 server.port 不生效的问题

- 3d0fb38: fix: remove the prebundle for data loader
  fix: 移除 data loader 的预打包
- 6562578: chore: optimize the capitalization of plugin names

  chore: 规范引用插件时的命名格式，统一使用 camelCase 代替 PascalCase

- 0d2af52: docs: add docs for config and init
  docs: 添加 config 和 init 在嵌套路由下的文档
- 84ee9e9: fix: can't exit process after build
  fix: 在 build 后不退出程序
- 5b54418: fix(builder): no longer remove comments of HTML

  fix(builder): 不再默认移除 HTML 中的注释

- Updated dependencies [837620c]
- Updated dependencies [3d0fb38]
- Updated dependencies [3ad26c2]
- Updated dependencies [5b54418]
- Updated dependencies [bafa52e]
- Updated dependencies [ccbac43]
- Updated dependencies [8a9482c]
- Updated dependencies [679296d]
  - @modern-js/utils@2.1.0
  - @modern-js/plugin-data-loader@2.1.0
  - @modern-js/server@2.1.0
  - @modern-js/builder-shared@2.1.0
  - @modern-js/builder-webpack-provider@2.1.0
  - @modern-js/core@2.1.0
  - @modern-js/builder@2.1.0
  - @modern-js/builder-plugin-esbuild@2.1.0
  - @modern-js/builder-plugin-node-polyfill@2.1.0
  - @modern-js/plugin-i18n@2.1.0
  - @modern-js/plugin-lint@2.1.0
  - @modern-js/new-action@2.1.0
  - @modern-js/prod-server@2.1.0
  - @modern-js/node-bundle-require@2.1.0
  - @modern-js/upgrade@2.1.0
  - @modern-js/plugin@2.1.0
  - @modern-js/types@2.1.0

## 2.0.2

### Patch Changes

- 39988b2: feat: advance the timing of static resource loading
  feat: 将嵌套路由下静态资源加载时机提前
- Updated dependencies [39988b2]
  - @modern-js/types@2.0.2
  - @modern-js/new-action@2.0.2
  - @modern-js/builder-shared@2.0.2
  - @modern-js/builder-webpack-provider@2.0.2
  - @modern-js/core@2.0.2
  - @modern-js/plugin-data-loader@2.0.2
  - @modern-js/prod-server@2.0.2
  - @modern-js/server@2.0.2
  - @modern-js/utils@2.0.2
  - @modern-js/builder@2.0.2
  - @modern-js/builder-plugin-esbuild@2.0.2
  - @modern-js/builder-plugin-node-polyfill@2.0.2
  - @modern-js/plugin-i18n@2.0.2
  - @modern-js/plugin-lint@2.0.2
  - @modern-js/node-bundle-require@2.0.2
  - @modern-js/plugin@2.0.2
  - @modern-js/upgrade@2.0.2

## 2.0.1

### Patch Changes

- @modern-js/builder@2.0.1
- @modern-js/builder-shared@2.0.1
- @modern-js/builder-webpack-provider@2.0.1
- @modern-js/builder-plugin-esbuild@2.0.1
- @modern-js/builder-plugin-node-polyfill@2.0.1
- @modern-js/core@2.0.1
- @modern-js/plugin-data-loader@2.0.1
- @modern-js/plugin-i18n@2.0.1
- @modern-js/plugin-lint@2.0.1
- @modern-js/new-action@2.0.1
- @modern-js/prod-server@2.0.1
- @modern-js/server@2.0.1
- @modern-js/node-bundle-require@2.0.1
- @modern-js/plugin@2.0.1
- @modern-js/types@2.0.1
- @modern-js/upgrade@2.0.1
- @modern-js/utils@2.0.1

## 2.0.0

### Major Changes

- dda38c9c3e: chore: v2

### Minor Changes

- edd1cfb1af: feat: modernjs Access builder compiler
  feat: modernjs 接入 builder 构建
- bbe4c4ab64: feat: add @modern-js/plugin-swc

  feat: 新增 @modern-js/plugin-swc 插件

### Patch Changes

- d4a456659b: chore: rename plugin-jarvis to plugin-lint

  chore: 重命名 plugin-jarvis 为 plugin-lint

- 6bda14ed71: feat: refactor router with react-router@6.4

  feat: 使用 react-router@6.4 重构路由模块

- 8b8e1bb571: feat: support nested routes
  feat: 支持嵌套路由
- Updated dependencies [c9e800d39a]
- Updated dependencies [edd1cfb1af]
- Updated dependencies [d4a456659b]
- Updated dependencies [6bda14ed71]
- Updated dependencies [f680410886]
- Updated dependencies [dda38c9c3e]
- Updated dependencies [8b8e1bb571]
- Updated dependencies [ffb2ed4]
- Updated dependencies [bbe4c4ab64]
  - @modern-js/core@2.0.0
  - @modern-js/prod-server@2.0.0
  - @modern-js/builder-webpack-provider@2.0.0
  - @modern-js/builder-plugin-node-polyfill@2.0.0
  - @modern-js/utils@2.0.0
  - @modern-js/plugin-lint@2.0.0
  - @modern-js/types@2.0.0
  - @modern-js/builder@2.0.0
  - @modern-js/builder-shared@2.0.0
  - @modern-js/builder-plugin-esbuild@2.0.0
  - @modern-js/plugin-data-loader@2.0.0
  - @modern-js/plugin-i18n@2.0.0
  - @modern-js/new-action@2.0.0
  - @modern-js/server@2.0.0
  - @modern-js/node-bundle-require@2.0.0
  - @modern-js/plugin@2.0.0
  - @modern-js/upgrade@2.0.0

## 2.0.0-beta.7

### Major Changes

- dda38c9c3e: chore: v2

### Minor Changes

- edd1cfb1af: feat: modernjs Access builder compiler
  feat: modernjs 接入 builder 构建
- bbe4c4ab64: feat: add @modern-js/plugin-swc

  feat: 新增 @modern-js/plugin-swc 插件

### Patch Changes

- d4a456659b: chore: rename plugin-jarvis to plugin-lint

  chore: 重命名 plugin-jarvis 为 plugin-lint

- 6bda14ed71: feat: refactor router with react-router@6.4

  feat: 使用 react-router@6.4 重构路由模块

- 8b8e1bb571: feat: support nested routes
  feat: 支持嵌套路由
- Updated dependencies [c9e800d39a]
- Updated dependencies [edd1cfb1af]
- Updated dependencies [d4a456659b]
- Updated dependencies [6bda14ed71]
- Updated dependencies [f680410886]
- Updated dependencies [dda38c9c3e]
- Updated dependencies [8b8e1bb571]
- Updated dependencies [bbe4c4ab64]
  - @modern-js/core@2.0.0-beta.7
  - @modern-js/prod-server@2.0.0-beta.7
  - @modern-js/builder-webpack-provider@2.0.0-beta.7
  - @modern-js/builder-plugin-node-polyfill@2.0.0-beta.7
  - @modern-js/utils@2.0.0-beta.7
  - @modern-js/plugin-lint@2.0.0-beta.7
  - @modern-js/types@2.0.0-beta.7
  - @modern-js/builder@2.0.0-beta.7
  - @modern-js/builder-shared@2.0.0-beta.7
  - @modern-js/builder-plugin-esbuild@2.0.0-beta.7
  - @modern-js/plugin-data-loader@2.0.0-beta.7
  - @modern-js/plugin-i18n@2.0.0-beta.7
  - @modern-js/new-action@2.0.0-beta.7
  - @modern-js/server@2.0.0-beta.7
  - @modern-js/node-bundle-require@2.0.0-beta.7
  - @modern-js/plugin@2.0.0-beta.7
  - @modern-js/upgrade@2.0.0-beta.7

## 2.0.0-beta.6

### Major Changes

- dda38c9c3e: chore: v2

### Minor Changes

- df7ee2d: feat: runtime user config types extends
  feat: runtime 用户配置类型扩展
- edd1cfb1af: feat: modernjs Access builder compiler
  feat: modernjs 接入 builder 构建
- b710adb843: feat: extract the data loader
  feat: 提取 data loader
- bbe4c4ab64: feat: add @modern-js/plugin-swc

  feat: 新增 @modern-js/plugin-swc 插件

- e4558a0bc4: feat:

  1. add `runBin` function
  2. config internal plugins constants in the app/module/doc tools
  3. add app/module/doc tools internal plugins

  feat:

  1. 添加 `runBin` 函数
  2. 在 app/module/doc tools 里配置内部插件
  3. 增加 app/module/doc tools 使用的插件常量

- 543be9558e: feat: compile server loader and support handle loader request
  feat: 编译 server loader 并支持处理 loader 的请求

### Patch Changes

- c9f912ca4d: feat(app-tools): improve build logs of dev and build command

  feat(app-tools): 优化 dev 和 build 过程中的日志展示

- 0078da4c80: fix: remove webpack oneof rule in new config, save in legacy mode.
  fix: 在新模式下删除 webpack oneof 规则，兼容模式下保留
- 103973cde9: fix: builder tools.webpackChain config args not match the Modernjs tools.webpackChain
  fix: builder tools.webpackChain 配置传参无法匹配 Modernjs tools.webpackChain
- 7879e8f711: refactor: remove enableModernMode config

  refactor: 不再支持 enableModernMode 配置项

- 0be536decc: fix(app-tools): html.template config not work

  fix(app-tools): 修复 html.template 配置项不生效的问题

- d4e8e6fb90: fix: modernjs dev server can't start normaly
  fix: modernjs dev 服务端不能正常启动
- 0b2d1ef02b: fix: repeat register `babel-plugin-lodash`
  fix: 重复注册 `babel-plugin-lodash`
- 217c43a057: fix: should generate path correctly for data loader
  fix: 应该生成正确的路径给 data loader
- 82cef85ed7: fix: specify builder compiler framework
  fix: 指明 builder 构建时框架
- 1eeb052: fix: support set entry with file-system based router
  fix: 约定式路由支持设置 entry
- e011faf484: fix: the esbuild watcher should be stoped when cli restart
  fix: 当 cli 重启时，esbuild watcher 应该停止监听文件
- 3e57f2bd58: feat: add document feature with plugin

  feat: 增加 document 功能插件

- 3941653375: fix: add esbuild to dependencies
  fix: 将 esbuild 添加到依赖中
- 33aeb51544: feat: add manifest field for router config
  feat: 为 router 配置添加 manifest 字段
- 85edee888c: feat(app-tools): support tools.htmlPlugin config

  feat(app-tools): 支持 tools.htmlPlugin 配置项

- 2e6031955e: fix: some optimizations for router and loader
  fix: 一些 router 和 loader 的优化
  q
- 752480d: fix(app-tools): failed to copy public assets

  fix(app-tools): 修复拷贝 public 下的静态文件失败的问题

- a55b9656c4: fix: rename "loader routes" file to avoid influence ssr
  fix: 重命名 loader routes 避免影响 ssr
- 5402fdb0ca: feat(Builder): add output.disableTsChecker config

  feat(Builder): 新增 output.disableTsChecker 配置项

- dc8eeb9cbb: fix: clear distDirectory in prepare hook & inject data loader plugin to server
  fix: 在 prepare hook 中清理 dist 目录，并且向 server 中注入 data loader plugin
- cc971eabfc: refactor: move server plugin load logic in `@modern-js/core`
  refactor：移除在 `@modern-js/core` 中的 server 插件加载逻辑
- 5b9049f2e9: feat: inject async js chunk when streaming ssr
  feat: streaming ssr 时, 注入 async 类型的 js chunk
- d4a456659b: chore: rename plugin-jarvis to plugin-lint

  chore: 重命名 plugin-jarvis 为 plugin-lint

- 6bda14ed71: feat: refactor router with react-router@6.4

  feat: 使用 react-router@6.4 重构路由模块

- d36c6ee126: fix(app-tools): failed to run inspect command

  fix(app-tools): 修复运行 inspect 命令失败的问题

- 92004d1906: feat: support load chunks parallelly
  feat: 支持并行加载 chunks
- b8bbe036c7: feat: change type logic
  feat: 修改类型相关的逻辑
- 40ed5874c6: feat: inject css chunk into html for streaming ssr
  feat: streaming ssr 返回的 html 注入 css chunk
- af4422d67f: feat(builder): complete utils of tools.webpack

  feat(builder): 补全 tools.webpack 提供的 utils 方法

- 4293748b9d: fix: router config maybe not defined
  fix: router 配置可能不存在
- 87c1ff86b9: feat(app-tools): attach builder instance to appContext

  feat(app-tools): 将 builder 实例挂载到 appContext 上

- c258e34202: fix: add builder hooks `beforeBuild` params
  fix: 新增 builder hooks `beforeBuild` 的参数
- 3b3d709ee2: fix(app-tools): cli --analyze option not work

  fix(app-tools): 修复 --analyze 命令行参数不生效的问题

- 8b8e1bb571: feat: support nested routes
  feat: 支持嵌套路由
- f5178e19e0: fix(app-tools): dev.startUrl not work

  fix(app-tools): 修复 dev.startUrl 不生效的问题

- 88eb147ae1: fix(app-tools): builder's onBeforeCreateDevServer hook not work

  fix(app-tools): 修复 builder 的 onBeforeCreateDevServer hook 无法触发的问题

- 8c32dc4237: fix: builder should not be checked when apiOnly is true
  fix: 当 apiOnly 为 true 时，builder 不应该被校验
- a2c8cc3eb5: fix: change tools define userconfig type
  fix: 修改工程定义的 UserConfig 类型
- b7a96c35fc: fix(app-tools): loose CLI init options after restart

  fix(app-tools): 修复重启 CLI 后丢失 init options 的问题

- df62445d1b: fix: fix generateCode logic for windows
  fix: 兼容 generateCode 的逻辑在 windows 平台
- 7de97ae24f: fix: `deploy` command has't load `builder` instance
  fix: `deploy` 命令没有加载 builder 实例
- cce8ecee2d: fix: handle some `TODO` & `FIXME`, change some tests
  fix: 处理一些 `TODO` 和 `FIXME`, 修改了一些 tests
- c3b7de4bfb: fix(app-tools): dev.assetPrefix not work

  fix(app-tools): 修复 dev.assetPrefix 配置项不生效的问题

- 16a3441eea: fix(app-tools): remove duplicated port log

  fix(app-tools): 修复 port 重复的日志输出两遍的问题

- 92004d1906: fix: use loadable lazy instead of loadable
  fix: 使用 loadable lazy 组件替代 loadable
- ebf899f: feat(app-tools): support configure builder plugins

  feat(app-tools): 支持配置 builder 插件

- c677befc22: fix(app-tools): compat legacy resolve behavior

  fix(app-tools): 兼容旧版本 node_modules 解析逻辑

- f1b8e8a3da: fix(app-tools): failed to copy HTML from config/public dir

  fix(app-tools): 修复从 config/public 拷贝 HTML 文件时可能出现编译错误的问题

- 3f7cde5caa: fix: builder plugin setup can't get config
  fix: builder 插件在 setup 阶段无法拿到 config
- 99213e4bae: fix: process does't exit when exec command
  fix: 修复执行命令时进程未退出的问题
- b16fd964da: fix: `modern-js/app-tools` pass error config to builder.
  fix: `modern-js/app-tools` 传递错误的 config 给 builder.
- 16ef1a7c9b: fix(app-tools): should not increase port when restart

  fix(app-tools): 修复 restart 时端口号会增加的问题

- 7eefedd7ca: fix: add html-webpack-plugin `__internal__` options, for bottom template
  fix: 为了 bottom template, 增加 `html-webpack-plugin` `__internal__` 配置项，
- 14b712da84: fix: use consistent alias type and default value across packages

  fix: 在各个包中使用一致的 alias 类型定义和默认值

- Updated dependencies [c9f912ca4d]
- Updated dependencies [95be7cc49c]
- Updated dependencies [e439457a51]
- Updated dependencies [4d1545f8c0]
- Updated dependencies [4a7693fe6b]
- Updated dependencies [2bc090c089]
- Updated dependencies [ba5325731c]
- Updated dependencies [f0abb2e82f]
- Updated dependencies [f96a725211]
- Updated dependencies [7879e8f711]
- Updated dependencies [828f42f9ce]
- Updated dependencies [060abd4553]
- Updated dependencies [309cd71a1c]
- Updated dependencies [c7456864a8]
- Updated dependencies [c9e800d39a]
- Updated dependencies [d4e8e6fb90]
- Updated dependencies [0ff846fb56]
- Updated dependencies [3cf9633195]
- Updated dependencies [6604f1b8b3]
- Updated dependencies [57077b2c64]
- Updated dependencies [217c43a057]
- Updated dependencies [d032d49e09]
- Updated dependencies [6aca875011]
- Updated dependencies [2ff6167be0]
- Updated dependencies [287f298990]
- Updated dependencies [15bf09d9c8]
- Updated dependencies [423188db70]
- Updated dependencies [fd2d652c03]
- Updated dependencies [0c2d8dae31]
- Updated dependencies [2edad29dd7]
- Updated dependencies [85edee888c]
- Updated dependencies [2e6031955e]
- Updated dependencies [dc52ee8]
- Updated dependencies [a2509bfbdb]
- Updated dependencies [309f08bdf4]
- Updated dependencies [3998875791]
- Updated dependencies [752480d]
- Updated dependencies [b827e35aba]
- Updated dependencies [ab3924a70e]
- Updated dependencies [3998875791]
- Updated dependencies [ba86b8b711]
- Updated dependencies [61f21d1e77]
- Updated dependencies [7b7d12cf8f]
- Updated dependencies [5402fdb0ca]
- Updated dependencies [7efeed4]
- Updated dependencies [2ae58176fe]
- Updated dependencies [92f0eade39]
- Updated dependencies [edd1cfb1af]
- Updated dependencies [5d67c26cdb]
- Updated dependencies [cc971eabfc]
- Updated dependencies [5b9049f2e9]
- Updated dependencies [83ac356e15]
- Updated dependencies [a3af050486]
- Updated dependencies [d4a456659b]
- Updated dependencies [18360a38d7]
- Updated dependencies [6bda14ed71]
- Updated dependencies [0b314e6946]
- Updated dependencies [92004d1906]
- Updated dependencies [b8bbe036c7]
- Updated dependencies [5911154129]
- Updated dependencies [40ed5874c6]
- Updated dependencies [af4422d67f]
- Updated dependencies [705adc1dae]
- Updated dependencies [f680410886]
- Updated dependencies [87c1ff86b9]
- Updated dependencies [d5a31df781]
- Updated dependencies [dda38c9c3e]
- Updated dependencies [4f277fe288]
- Updated dependencies [102d32e4ba]
- Updated dependencies [c258e34202]
- Updated dependencies [812913ccdd]
- Updated dependencies [7248342e4d]
- Updated dependencies [568eab1e42]
- Updated dependencies [8b8e1bb571]
- Updated dependencies [3bbea92b2a]
- Updated dependencies [ae71096d45]
- Updated dependencies [73cd29dd9f]
- Updated dependencies [cd5cdd9]
- Updated dependencies [e06b9a2ec6]
- Updated dependencies [b710adb843]
- Updated dependencies [b7a96c35fc]
- Updated dependencies [a23010138d]
- Updated dependencies [75d1b2657c]
- Updated dependencies [cce8ecee2d]
- Updated dependencies [18aaf42249]
- Updated dependencies [f179749375]
- Updated dependencies [b8494ef33b]
- Updated dependencies [3fae2d03b3]
- Updated dependencies [ea7cf06257]
- Updated dependencies [8a6d45f105]
- Updated dependencies [143d8dd616]
- Updated dependencies [bbe4c4ab64]
- Updated dependencies [ebbeed1ece]
- Updated dependencies [6354cfa3ae]
- Updated dependencies [90e2879520]
- Updated dependencies [e4558a0bc4]
- Updated dependencies [df41d71ade]
- Updated dependencies [f727e5c6cc]
- Updated dependencies [5e3cecd523]
- Updated dependencies [92de772]
- Updated dependencies [abf3421a75]
- Updated dependencies [da2d1fc3c2]
- Updated dependencies [543be9558e]
- Updated dependencies [fd1d9fd3d3]
- Updated dependencies [14b712da84]
- Updated dependencies [a24f1c9058]
  - @modern-js/builder-webpack-provider@2.0.0-beta.6
  - @modern-js/builder-shared@2.0.0-beta.6
  - @modern-js/prod-server@2.0.0-beta.6
  - @modern-js/server@2.0.0-beta.6
  - @modern-js/types@2.0.0-beta.6
  - @modern-js/utils@2.0.0-beta.6
  - @modern-js/core@2.0.0-beta.6
  - @modern-js/builder-plugin-esbuild@2.0.0-beta.6
  - @modern-js/plugin-data-loader@2.0.0-beta.6
  - @modern-js/builder-plugin-node-polyfill@2.0.0-beta.6
  - @modern-js/node-bundle-require@2.0.0-beta.6
  - @modern-js/plugin-lint@2.0.0-beta.6
  - @modern-js/plugin@2.0.0-beta.6
  - @modern-js/builder@2.0.0-beta.6
  - @modern-js/plugin-i18n@2.0.0-beta.6
  - @modern-js/new-action@2.0.0-beta.6
  - @modern-js/upgrade@2.0.0-beta.6

## 2.0.0-beta.4

### Major Changes

- dda38c9c3e: chore: v2

### Minor Changes

- edd1cfb1af: feat: modernjs Access builder compiler
  feat: modernjs 接入 builder 构建
- b710adb843: feat: extract the data loader
  feat: 提取 data loader
- bbe4c4a: feat: add @modern-js/plugin-swc

  feat: 新增 @modern-js/plugin-swc 插件

- e4558a0: feat:

  1. add `runBin` function
  2. config internal plugins constants in the app/module/doc tools
  3. add app/module/doc tools internal plugins

  feat:

  1. 添加 `runBin` 函数
  2. 在 app/module/doc tools 里配置内部插件
  3. 增加 app/module/doc tools 使用的插件常量

- 543be9558e: feat: compile server loader and support handle loader request
  feat: 编译 server loader 并支持处理 loader 的请求

### Patch Changes

- c9f912ca4d: feat(app-tools): improve build logs of dev and build command

  feat(app-tools): 优化 dev 和 build 过程中的日志展示

- 0078da4c80: fix: remove webpack oneof rule in new config, save in legacy mode.
  fix: 在新模式下删除 webpack oneof 规则，兼容模式下保留
- 103973cde9: fix: builder tools.webpackChain config args not match the Modernjs tools.webpackChain
  fix: builder tools.webpackChain 配置传参无法匹配 Modernjs tools.webpackChain
- 7879e8f: refactor: remove enableModernMode config

  refactor: 不再支持 enableModernMode 配置项

- 0be536d: fix(app-tools): html.template config not work

  fix(app-tools): 修复 html.template 配置项不生效的问题

- d4e8e6fb90: fix: modernjs dev server can't start normaly
  fix: modernjs dev 服务端不能正常启动
- 0b2d1ef02b: fix: repeat register `babel-plugin-lodash`
  fix: 重复注册 `babel-plugin-lodash`
- 217c43a: fix: should generate path correctly for data loader
  fix: 应该生成正确的路径给 data loader
- 82cef85ed7: fix: specify builder compiler framework
  fix: 指明 builder 构建时框架
- 1eeb052: fix: support set entry with file-system based router
  fix: 约定式路由支持设置 entry
- e011faf: fix: the esbuild watcher should be stoped when cli restart
  fix: 当 cli 重启时，esbuild watcher 应该停止监听文件
- 3e57f2bd58: feat: add document feature with plugin

  feat: 增加 document 功能插件

- 3941653: fix: add esbuild to dependencies
  fix: 将 esbuild 添加到依赖中
- 33aeb51: feat: add manifest field for router config
  feat: 为 router 配置添加 manifest 字段
- 85edee888c: feat(app-tools): support tools.htmlPlugin config

  feat(app-tools): 支持 tools.htmlPlugin 配置项

- 2e6031955e: fix: some optimizations for router and loader
  fix: 一些 router 和 loader 的优化
  q
- 752480d: fix(app-tools): failed to copy public assets

  fix(app-tools): 修复拷贝 public 下的静态文件失败的问题

- a55b9656c4: fix: rename "loader routes" file to avoid influence ssr
  fix: 重命名 loader routes 避免影响 ssr
- 5402fdb0ca: feat(Builder): add output.disableTsChecker config

  feat(Builder): 新增 output.disableTsChecker 配置项

- dc8eeb9cbb: fix: clear distDirectory in prepare hook & inject data loader plugin to server
  fix: 在 prepare hook 中清理 dist 目录，并且向 server 中注入 data loader plugin
- cc971eabfc: refactor: move server plugin load logic in `@modern-js/core`
  refactor：移除在 `@modern-js/core` 中的 server 插件加载逻辑
- 5b9049f2e9: feat: inject async js chunk when streaming ssr
  feat: streaming ssr 时, 注入 async 类型的 js chunk
- d4a456659b: chore: rename plugin-jarvis to plugin-lint

  chore: 重命名 plugin-jarvis 为 plugin-lint

- 6bda14ed71: feat: refactor router with react-router@6.4

  feat: 使用 react-router@6.4 重构路由模块

- d36c6ee126: fix(app-tools): failed to run inspect command

  fix(app-tools): 修复运行 inspect 命令失败的问题

- 92004d1906: feat: support load chunks parallelly
  feat: 支持并行加载 chunks
- b8bbe036c7: feat: change type logic
  feat: 修改类型相关的逻辑
- 40ed5874c6: feat: inject css chunk into html for streaming ssr
  feat: streaming ssr 返回的 html 注入 css chunk
- af4422d67f: feat(builder): complete utils of tools.webpack

  feat(builder): 补全 tools.webpack 提供的 utils 方法

- 4293748: fix: router config maybe not defined
  fix: router 配置可能不存在
- 87c1ff86b9: feat(app-tools): attach builder instance to appContext

  feat(app-tools): 将 builder 实例挂载到 appContext 上

- c258e34202: fix: add builder hooks `beforeBuild` params
  fix: 新增 builder hooks `beforeBuild` 的参数
- 3b3d709ee2: fix(app-tools): cli --analyze option not work

  fix(app-tools): 修复 --analyze 命令行参数不生效的问题

- 8b8e1bb571: feat: support nested routes
  feat: 支持嵌套路由
- f5178e1: fix(app-tools): dev.startUrl not work

  fix(app-tools): 修复 dev.startUrl 不生效的问题

- 88eb147: fix(app-tools): builder's onBeforeCreateDevServer hook not work

  fix(app-tools): 修复 builder 的 onBeforeCreateDevServer hook 无法触发的问题

- 8c32dc4: fix: builder should not be checked when apiOnly is true
  fix: 当 apiOnly 为 true 时，builder 不应该被校验
- a2c8cc3eb5: fix: change tools define userconfig type
  fix: 修改工程定义的 UserConfig 类型
- b7a96c35fc: fix(app-tools): loose CLI init options after restart

  fix(app-tools): 修复重启 CLI 后丢失 init options 的问题

- df62445: fix: fix generateCode logic for windows
  fix: 兼容 generateCode 的逻辑在 windows 平台
- 7de97ae24f: fix: `deploy` command has't load `builder` instance
  fix: `deploy` 命令没有加载 builder 实例
- cce8ecee2d: fix: handle some `TODO` & `FIXME`, change some tests
  fix: 处理一些 `TODO` 和 `FIXME`, 修改了一些 tests
- c3b7de4bfb: fix(app-tools): dev.assetPrefix not work

  fix(app-tools): 修复 dev.assetPrefix 配置项不生效的问题

- 16a3441: fix(app-tools): remove duplicated port log

  fix(app-tools): 修复 port 重复的日志输出两遍的问题

- 92004d1906: fix: use loadable lazy instead of loadable
  fix: 使用 loadable lazy 组件替代 loadable
- c677befc22: fix(app-tools): compat legacy resolve behavior

  fix(app-tools): 兼容旧版本 node_modules 解析逻辑

- f1b8e8a: fix(app-tools): failed to copy HTML from config/public dir

  fix(app-tools): 修复从 config/public 拷贝 HTML 文件时可能出现编译错误的问题

- 3f7cde5caa: fix: builder plugin setup can't get config
  fix: builder 插件在 setup 阶段无法拿到 config
- 99213e4bae: fix: process does't exit when exec command
  fix: 修复执行命令时进程未退出的问题
- b16fd964da: fix: `modern-js/app-tools` pass error config to builder.
  fix: `modern-js/app-tools` 传递错误的 config 给 builder.
- 16ef1a7: fix(app-tools): should not increase port when restart

  fix(app-tools): 修复 restart 时端口号会增加的问题

- 7eefedd7ca: fix: add html-webpack-plugin `__internal__` options, for bottom template
  fix: 为了 bottom template, 增加 `html-webpack-plugin` `__internal__` 配置项，
- 14b712da84: fix: use consistent alias type and default value across packages

  fix: 在各个包中使用一致的 alias 类型定义和默认值

- Updated dependencies [c9f912ca4d]
- Updated dependencies [95be7cc49c]
- Updated dependencies [e439457a51]
- Updated dependencies [4d1545f8c0]
- Updated dependencies [4a7693f]
- Updated dependencies [2bc090c089]
- Updated dependencies [ba53257]
- Updated dependencies [f0abb2e]
- Updated dependencies [f96a725211]
- Updated dependencies [7879e8f]
- Updated dependencies [828f42f9ce]
- Updated dependencies [060abd4553]
- Updated dependencies [309cd71a1c]
- Updated dependencies [c7456864a8]
- Updated dependencies [c9e800d39a]
- Updated dependencies [d4e8e6fb90]
- Updated dependencies [0ff846fb56]
- Updated dependencies [3cf9633195]
- Updated dependencies [6604f1b]
- Updated dependencies [57077b2c64]
- Updated dependencies [217c43a]
- Updated dependencies [d032d49e09]
- Updated dependencies [6aca875]
- Updated dependencies [2ff6167be0]
- Updated dependencies [287f298990]
- Updated dependencies [15bf09d9c8]
- Updated dependencies [423188db70]
- Updated dependencies [fd2d652c03]
- Updated dependencies [0c2d8dae31]
- Updated dependencies [2edad29dd7]
- Updated dependencies [85edee888c]
- Updated dependencies [2e6031955e]
- Updated dependencies [a2509bfbdb]
- Updated dependencies [309f08b]
- Updated dependencies [3998875791]
- Updated dependencies [752480d]
- Updated dependencies [b827e35]
- Updated dependencies [ab3924a70e]
- Updated dependencies [3998875791]
- Updated dependencies [ba86b8b711]
- Updated dependencies [61f21d1e77]
- Updated dependencies [7b7d12c]
- Updated dependencies [5402fdb0ca]
- Updated dependencies [2ae58176fe]
- Updated dependencies [92f0eade39]
- Updated dependencies [edd1cfb1af]
- Updated dependencies [5d67c26cdb]
- Updated dependencies [cc971eabfc]
- Updated dependencies [5b9049f2e9]
- Updated dependencies [83ac356]
- Updated dependencies [a3af050486]
- Updated dependencies [d4a456659b]
- Updated dependencies [18360a38d7]
- Updated dependencies [6bda14ed71]
- Updated dependencies [0b314e6946]
- Updated dependencies [92004d1906]
- Updated dependencies [b8bbe036c7]
- Updated dependencies [5911154129]
- Updated dependencies [40ed5874c6]
- Updated dependencies [af4422d67f]
- Updated dependencies [705adc1dae]
- Updated dependencies [f680410886]
- Updated dependencies [87c1ff86b9]
- Updated dependencies [d5a31df781]
- Updated dependencies [dda38c9c3e]
- Updated dependencies [4f277fe]
- Updated dependencies [102d32e4ba]
- Updated dependencies [c258e34202]
- Updated dependencies [812913ccdd]
- Updated dependencies [7248342e4d]
- Updated dependencies [568eab1e42]
- Updated dependencies [8b8e1bb571]
- Updated dependencies [3bbea92b2a]
- Updated dependencies [ae71096d45]
- Updated dependencies [73cd29dd9f]
- Updated dependencies [e06b9a2]
- Updated dependencies [b710adb843]
- Updated dependencies [b7a96c35fc]
- Updated dependencies [a23010138d]
- Updated dependencies [75d1b2657c]
- Updated dependencies [cce8ecee2d]
- Updated dependencies [18aaf42249]
- Updated dependencies [f179749375]
- Updated dependencies [b8494ef]
- Updated dependencies [3fae2d03b3]
- Updated dependencies [ea7cf06]
- Updated dependencies [8a6d45f105]
- Updated dependencies [143d8dd]
- Updated dependencies [bbe4c4a]
- Updated dependencies [ebbeed1ece]
- Updated dependencies [6354cfa]
- Updated dependencies [90e2879520]
- Updated dependencies [e4558a0]
- Updated dependencies [df41d71ade]
- Updated dependencies [f727e5c6cc]
- Updated dependencies [5e3cecd523]
- Updated dependencies [92de772]
- Updated dependencies [abf3421a75]
- Updated dependencies [da2d1fc3c2]
- Updated dependencies [543be9558e]
- Updated dependencies [fd1d9fd]
- Updated dependencies [14b712da84]
- Updated dependencies [a24f1c9]
  - @modern-js/builder-webpack-provider@2.0.0-beta.4
  - @modern-js/builder-shared@2.0.0-beta.4
  - @modern-js/prod-server@2.0.0-beta.4
  - @modern-js/server@2.0.0-beta.4
  - @modern-js/types@2.0.0-beta.4
  - @modern-js/utils@2.0.0-beta.4
  - @modern-js/core@2.0.0-beta.4
  - @modern-js/builder-plugin-esbuild@2.0.0-beta.4
  - @modern-js/plugin-data-loader@2.0.0-beta.4
  - @modern-js/builder-plugin-node-polyfill@2.0.0-beta.4
  - @modern-js/node-bundle-require@2.0.0-beta.4
  - @modern-js/plugin-lint@2.0.0-beta.4
  - @modern-js/plugin@2.0.0-beta.4
  - @modern-js/builder@2.0.0-beta.4
  - @modern-js/plugin-i18n@2.0.0-beta.4
  - @modern-js/new-action@2.0.0-beta.4
  - @modern-js/upgrade@2.0.0-beta.4

## 2.0.0-beta.3

### Major Changes

- dda38c9c3e: chore: v2

### Minor Changes

- edd1cfb1af: feat: modernjs Access builder compiler
  feat: modernjs 接入 builder 构建
- b710adb: feat: extract the data loader
  feat: 提取 data loader
- bbe4c4a: feat: add @modern-js/plugin-swc

  feat: 新增 @modern-js/plugin-swc 插件

- e4558a0: feat:

  1. add `runBin` function
  2. config internal plugins constants in the app/module/doc tools
  3. add app/module/doc tools internal plugins

  feat:

  1. 添加 `runBin` 函数
  2. 在 app/module/doc tools 里配置内部插件
  3. 增加 app/module/doc tools 使用的插件常量

- 543be9558e: feat: compile server loader and support handle loader request
  feat: 编译 server loader 并支持处理 loader 的请求

### Patch Changes

- c9f912ca4d: feat(app-tools): improve build logs of dev and build command

  feat(app-tools): 优化 dev 和 build 过程中的日志展示

- 0078da4: fix: remove webpack oneof rule in new config, save in legacy mode.
  fix: 在新模式下删除 webpack oneof 规则，兼容模式下保留
- 103973cde9: fix: builder tools.webpackChain config args not match the Modernjs tools.webpackChain
  fix: builder tools.webpackChain 配置传参无法匹配 Modernjs tools.webpackChain
- d4e8e6f: fix: modernjs dev server can't start normaly
  fix: modernjs dev 服务端不能正常启动
- 0b2d1ef02b: fix: repeat register `babel-plugin-lodash`
  fix: 重复注册 `babel-plugin-lodash`
- 82cef85ed7: fix: specify builder compiler framework
  fix: 指明 builder 构建时框架
- 3e57f2bd58: feat: add document feature with plugin

  feat: 增加 document 功能插件

- 85edee888c: feat(app-tools): support tools.htmlPlugin config

  feat(app-tools): 支持 tools.htmlPlugin 配置项

- 2e60319: fix: some optimizations for router and loader
  fix: 一些 router 和 loader 的优化
  q
- a55b965: fix: rename "loader routes" file to avoid influence ssr
  fix: 重命名 loader routes 避免影响 ssr
- 5402fdb0ca: feat(Builder): add output.disableTsChecker config

  feat(Builder): 新增 output.disableTsChecker 配置项

- dc8eeb9cbb: fix: clear distDirectory in prepare hook & inject data loader plugin to server
  fix: 在 prepare hook 中清理 dist 目录，并且向 server 中注入 data loader plugin
- cc971eabfc: refactor: move server plugin load logic in `@modern-js/core`
  refactor：移除在 `@modern-js/core` 中的 server 插件加载逻辑
- 5b9049f2e9: feat: inject async js chunk when streaming ssr
  feat: streaming ssr 时, 注入 async 类型的 js chunk
- d4a456659b: chore: rename plugin-jarvis to plugin-lint

  chore: 重命名 plugin-jarvis 为 plugin-lint

- 6bda14ed71: feat: refactor router with react-router@6.4

  feat: 使用 react-router@6.4 重构路由模块

- d36c6ee126: fix(app-tools): failed to run inspect command

  fix(app-tools): 修复运行 inspect 命令失败的问题

- 92004d1906: feat: support load chunks parallelly
  feat: 支持并行加载 chunks
- b8bbe036c7: feat: change type logic
  feat: 修改类型相关的逻辑
- 40ed5874c6: feat: inject css chunk into html for streaming ssr
  feat: streaming ssr 返回的 html 注入 css chunk
- af4422d67f: feat(builder): complete utils of tools.webpack

  feat(builder): 补全 tools.webpack 提供的 utils 方法

- 87c1ff86b9: feat(app-tools): attach builder instance to appContext

  feat(app-tools): 将 builder 实例挂载到 appContext 上

- c258e34202: fix: add builder hooks `beforeBuild` params
  fix: 新增 builder hooks `beforeBuild` 的参数
- 3b3d709: fix(app-tools): cli --analyze option not work

  fix(app-tools): 修复 --analyze 命令行参数不生效的问题

- 8b8e1bb571: feat: support nested routes
  feat: 支持嵌套路由
- 88eb147: fix(app-tools): builder's onBeforeCreateDevServer hook not work

  fix(app-tools): 修复 builder 的 onBeforeCreateDevServer hook 无法触发的问题

- 8c32dc4: fix: builder should not be checked when apiOnly is true
  fix: 当 apiOnly 为 true 时，builder 不应该被校验
- a2c8cc3: fix: change tools define userconfig type
  fix: 修改工程定义的 UserConfig 类型
- b7a96c3: fix(app-tools): loose CLI init options after restart

  fix(app-tools): 修复重启 CLI 后丢失 init options 的问题

- 7de97ae24f: fix: `deploy` command has't load `builder` instance
  fix: `deploy` 命令没有加载 builder 实例
- cce8ece: fix: handle some `TODO` & `FIXME`, change some tests
  fix: 处理一些 `TODO` 和 `FIXME`, 修改了一些 tests
- c3b7de4bfb: fix(app-tools): dev.assetPrefix not work

  fix(app-tools): 修复 dev.assetPrefix 配置项不生效的问题

- 16a3441: fix(app-tools): remove duplicated port log

  fix(app-tools): 修复 port 重复的日志输出两遍的问题

- 92004d1906: fix: use loadable lazy instead of loadable
  fix: 使用 loadable lazy 组件替代 loadable
- c677befc22: fix(app-tools): compat legacy resolve behavior

  fix(app-tools): 兼容旧版本 node_modules 解析逻辑

- 3f7cde5caa: fix: builder plugin setup can't get config
  fix: builder 插件在 setup 阶段无法拿到 config
- 99213e4bae: fix: process does't exit when exec command
  fix: 修复执行命令时进程未退出的问题
- b16fd964da: fix: `modern-js/app-tools` pass error config to builder.
  fix: `modern-js/app-tools` 传递错误的 config 给 builder.
- 7eefedd7ca: fix: add html-webpack-plugin `__internal__` options, for bottom template
  fix: 为了 bottom template, 增加 `html-webpack-plugin` `__internal__` 配置项，
- 14b712da84: fix: use consistent alias type and default value across packages

  fix: 在各个包中使用一致的 alias 类型定义和默认值

- Updated dependencies [c9f912ca4d]
- Updated dependencies [95be7cc49c]
- Updated dependencies [e439457a51]
- Updated dependencies [4d1545f8c0]
- Updated dependencies [2bc090c089]
- Updated dependencies [f0abb2e]
- Updated dependencies [f96a725211]
- Updated dependencies [828f42f9ce]
- Updated dependencies [060abd4]
- Updated dependencies [309cd71]
- Updated dependencies [c7456864a8]
- Updated dependencies [c9e800d39a]
- Updated dependencies [d4e8e6f]
- Updated dependencies [0ff846fb56]
- Updated dependencies [3cf9633]
- Updated dependencies [6604f1b]
- Updated dependencies [57077b2c64]
- Updated dependencies [d032d49e09]
- Updated dependencies [6aca875]
- Updated dependencies [2ff6167be0]
- Updated dependencies [287f298990]
- Updated dependencies [15bf09d9c8]
- Updated dependencies [423188db70]
- Updated dependencies [fd2d652c03]
- Updated dependencies [0c2d8dae31]
- Updated dependencies [2edad29dd7]
- Updated dependencies [85edee888c]
- Updated dependencies [2e60319]
- Updated dependencies [a2509bfbdb]
- Updated dependencies [3998875791]
- Updated dependencies [ab3924a]
- Updated dependencies [3998875791]
- Updated dependencies [ba86b8b711]
- Updated dependencies [61f21d1e77]
- Updated dependencies [5402fdb0ca]
- Updated dependencies [2ae58176fe]
- Updated dependencies [92f0eade39]
- Updated dependencies [edd1cfb1af]
- Updated dependencies [5d67c26cdb]
- Updated dependencies [cc971eabfc]
- Updated dependencies [5b9049f2e9]
- Updated dependencies [a3af050]
- Updated dependencies [d4a456659b]
- Updated dependencies [18360a38d7]
- Updated dependencies [6bda14ed71]
- Updated dependencies [0b314e6946]
- Updated dependencies [92004d1906]
- Updated dependencies [b8bbe036c7]
- Updated dependencies [5911154]
- Updated dependencies [40ed5874c6]
- Updated dependencies [af4422d67f]
- Updated dependencies [705adc1]
- Updated dependencies [f680410]
- Updated dependencies [87c1ff86b9]
- Updated dependencies [d5a31df781]
- Updated dependencies [dda38c9c3e]
- Updated dependencies [102d32e4ba]
- Updated dependencies [c258e34202]
- Updated dependencies [812913ccdd]
- Updated dependencies [7248342e4d]
- Updated dependencies [568eab1e42]
- Updated dependencies [8b8e1bb571]
- Updated dependencies [3bbea92b2a]
- Updated dependencies [ae71096d45]
- Updated dependencies [73cd29dd9f]
- Updated dependencies [b710adb]
- Updated dependencies [b7a96c3]
- Updated dependencies [a23010138d]
- Updated dependencies [75d1b2657c]
- Updated dependencies [cce8ece]
- Updated dependencies [18aaf42249]
- Updated dependencies [f179749375]
- Updated dependencies [3fae2d03b3]
- Updated dependencies [ea7cf06]
- Updated dependencies [8a6d45f105]
- Updated dependencies [bbe4c4a]
- Updated dependencies [ebbeed1ece]
- Updated dependencies [90e2879520]
- Updated dependencies [e4558a0]
- Updated dependencies [df41d71ade]
- Updated dependencies [f727e5c6cc]
- Updated dependencies [5e3cecd523]
- Updated dependencies [abf3421a75]
- Updated dependencies [da2d1fc3c2]
- Updated dependencies [543be9558e]
- Updated dependencies [fd1d9fd]
- Updated dependencies [14b712da84]
  - @modern-js/builder-webpack-provider@2.0.0-beta.3
  - @modern-js/builder-shared@2.0.0-beta.3
  - @modern-js/core@2.0.0-beta.3
  - @modern-js/prod-server@2.0.0-beta.3
  - @modern-js/server@2.0.0-beta.3
  - @modern-js/builder-plugin-esbuild@2.0.0-beta.3
  - @modern-js/plugin-data-loader@2.0.0-beta.3
  - @modern-js/builder-plugin-node-polyfill@2.0.0-beta.3
  - @modern-js/utils@2.0.0-beta.3
  - @modern-js/types@2.0.0-beta.3
  - @modern-js/node-bundle-require@2.0.0-beta.3
  - @modern-js/plugin-lint@2.0.0-beta.3
  - @modern-js/plugin@2.0.0-beta.3
  - @modern-js/builder@2.0.0-beta.3
  - @modern-js/plugin-i18n@2.0.0-beta.3
  - @modern-js/new-action@2.0.0-beta.3
  - @modern-js/upgrade@2.0.0-beta.3

## 2.0.0-beta.2

### Major Changes

- dda38c9c3e: chore: v2

### Minor Changes

- edd1cfb1af: feat: modernjs Access builder compiler
  feat: modernjs 接入 builder 构建
- 543be9558e: feat: compile server loader and support handle loader request
  feat: 编译 server loader 并支持处理 loader 的请求

### Patch Changes

- c9f912ca4d: feat(app-tools): improve build logs of dev and build command

  feat(app-tools): 优化 dev 和 build 过程中的日志展示

- 103973cde9: fix: builder tools.webpackChain config args not match the Modernjs tools.webpackChain
  fix: builder tools.webpackChain 配置传参无法匹配 Modernjs tools.webpackChain
- 0b2d1ef02b: fix: repeat register `babel-plugin-lodash`
  fix: 重复注册 `babel-plugin-lodash`
- 82cef85ed7: fix: specify builder compiler framework
  fix: 指明 builder 构建时框架
- 3e57f2b: feat: add document feature with plugin

  feat: 增加 document 功能插件

- 85edee888c: feat(app-tools): support tools.htmlPlugin config

  feat(app-tools): 支持 tools.htmlPlugin 配置项

- 5402fdb: feat(Builder): add output.disableTsChecker config

  feat(Builder): 新增 output.disableTsChecker 配置项

- dc8eeb9cbb: fix: clear distDirectory in prepare hook & inject data loader plugin to server
  fix: 在 prepare hook 中清理 dist 目录，并且向 server 中注入 data loader plugin
- cc971eabfc: refactor: move server plugin load logic in `@modern-js/core`
  refactor：移除在 `@modern-js/core` 中的 server 插件加载逻辑
- 5b9049f2e9: feat: inject async js chunk when streaming ssr
  feat: streaming ssr 时, 注入 async 类型的 js chunk
- d4a4566: chore: rename plugin-jarvis to plugin-lint

  chore: 重命名 plugin-jarvis 为 plugin-lint

- 6bda14ed71: feat: refactor router with react-router@6.4

  feat: 使用 react-router@6.4 重构路由模块

- d36c6ee126: fix(app-tools): failed to run inspect command

  fix(app-tools): 修复运行 inspect 命令失败的问题

- 92004d1: feat: support load chunks parallelly
  feat: 支持并行加载 chunks
- b8bbe036c7: feat: change type logic
  feat: 修改类型相关的逻辑
- 40ed587: feat: inject css chunk into html for streaming ssr
  feat: streaming ssr 返回的 html 注入 css chunk
- af4422d67f: feat(builder): complete utils of tools.webpack

  feat(builder): 补全 tools.webpack 提供的 utils 方法

- 87c1ff8: feat(app-tools): attach builder instance to appContext

  feat(app-tools): 将 builder 实例挂载到 appContext 上

- c258e34202: fix: add builder hooks `beforeBuild` params
  fix: 新增 builder hooks `beforeBuild` 的参数
- 3b3d709: fix(app-tools): cli --analyze option not work

  fix(app-tools): 修复 --analyze 命令行参数不生效的问题

- 8b8e1bb571: feat: support nested routes
  feat: 支持嵌套路由
- a2c8cc3: fix: change tools define userconfig type
  fix: 修改工程定义的 UserConfig 类型
- 7de97ae: fix: `deploy` command has't load `builder` instance
  fix: `deploy` 命令没有加载 builder 实例
- c3b7de4: fix(app-tools): dev.assetPrefix not work

  fix(app-tools): 修复 dev.assetPrefix 配置项不生效的问题

- 92004d1: fix: use loadable lazy instead of loadable
  fix: 使用 loadable lazy 组件替代 loadable
- c677befc22: fix(app-tools): compat legacy resolve behavior

  fix(app-tools): 兼容旧版本 node_modules 解析逻辑

- 3f7cde5caa: fix: builder plugin setup can't get config
  fix: builder 插件在 setup 阶段无法拿到 config
- 99213e4bae: fix: process does't exit when exec command
  fix: 修复执行命令时进程未退出的问题
- b16fd964da: fix: `modern-js/app-tools` pass error config to builder.
  fix: `modern-js/app-tools` 传递错误的 config 给 builder.
- 7eefedd7ca: fix: add html-webpack-plugin `__internal__` options, for bottom template
  fix: 为了 bottom template, 增加 `html-webpack-plugin` `__internal__` 配置项，
- 14b712da84: fix: use consistent alias type and default value across packages

  fix: 在各个包中使用一致的 alias 类型定义和默认值

- Updated dependencies [c9f912ca4d]
- Updated dependencies [95be7cc49c]
- Updated dependencies [e439457a51]
- Updated dependencies [4d1545f8c0]
- Updated dependencies [2bc090c089]
- Updated dependencies [f96a725211]
- Updated dependencies [828f42f9ce]
- Updated dependencies [060abd4]
- Updated dependencies [309cd71]
- Updated dependencies [c7456864a8]
- Updated dependencies [c9e800d39a]
- Updated dependencies [0ff846fb56]
- Updated dependencies [3cf9633]
- Updated dependencies [57077b2c64]
- Updated dependencies [d032d49]
- Updated dependencies [2ff6167]
- Updated dependencies [287f298990]
- Updated dependencies [15bf09d9c8]
- Updated dependencies [423188db70]
- Updated dependencies [fd2d652c03]
- Updated dependencies [0c2d8dae31]
- Updated dependencies [2edad29]
- Updated dependencies [85edee888c]
- Updated dependencies [a2509bfbdb]
- Updated dependencies [3998875791]
- Updated dependencies [ab3924a]
- Updated dependencies [3998875791]
- Updated dependencies [ba86b8b711]
- Updated dependencies [61f21d1e77]
- Updated dependencies [5402fdb]
- Updated dependencies [2ae58176fe]
- Updated dependencies [92f0ead]
- Updated dependencies [edd1cfb1af]
- Updated dependencies [5d67c26cdb]
- Updated dependencies [cc971eabfc]
- Updated dependencies [5b9049f2e9]
- Updated dependencies [d4a4566]
- Updated dependencies [18360a38d7]
- Updated dependencies [6bda14ed71]
- Updated dependencies [0b314e6946]
- Updated dependencies [92004d1]
- Updated dependencies [b8bbe036c7]
- Updated dependencies [5911154]
- Updated dependencies [40ed587]
- Updated dependencies [af4422d67f]
- Updated dependencies [705adc1]
- Updated dependencies [87c1ff8]
- Updated dependencies [d5a31df781]
- Updated dependencies [dda38c9c3e]
- Updated dependencies [102d32e4ba]
- Updated dependencies [c258e34202]
- Updated dependencies [812913c]
- Updated dependencies [7248342e4d]
- Updated dependencies [568eab1e42]
- Updated dependencies [8b8e1bb571]
- Updated dependencies [3bbea92b2a]
- Updated dependencies [ae71096d45]
- Updated dependencies [73cd29dd9f]
- Updated dependencies [a23010138d]
- Updated dependencies [75d1b2657c]
- Updated dependencies [18aaf42]
- Updated dependencies [f179749]
- Updated dependencies [3fae2d0]
- Updated dependencies [8a6d45f105]
- Updated dependencies [ebbeed1]
- Updated dependencies [90e2879520]
- Updated dependencies [df41d71]
- Updated dependencies [f727e5c6cc]
- Updated dependencies [5e3cecd523]
- Updated dependencies [abf3421a75]
- Updated dependencies [da2d1fc3c2]
- Updated dependencies [543be9558e]
- Updated dependencies [14b712da84]
  - @modern-js/builder-webpack-provider@2.0.0-beta.2
  - @modern-js/builder-shared@2.0.0-beta.2
  - @modern-js/core@2.0.0-beta.2
  - @modern-js/prod-server@2.0.0-beta.2
  - @modern-js/builder-plugin-esbuild@2.0.0-beta.2
  - @modern-js/server@2.0.0-beta.2
  - @modern-js/node-bundle-require@2.0.0-beta.2
  - @modern-js/utils@2.0.0-beta.2
  - @modern-js/builder-plugin-node-polyfill@2.0.0-beta.2
  - @modern-js/types@2.0.0-beta.2
  - @modern-js/plugin-lint@2.0.0-beta.2
  - @modern-js/plugin@2.0.0-beta.2
  - @modern-js/builder@2.0.0-beta.2
  - @modern-js/plugin-data-loader@2.0.0-beta.2
  - @modern-js/plugin-i18n@2.0.0-beta.2
  - @modern-js/new-action@2.0.0-beta.2
  - @modern-js/upgrade@2.0.0-beta.2

## 2.0.0-beta.1

### Major Changes

- dda38c9: chore: v2

### Minor Changes

- edd1cfb1af: feat: modernjs Access builder compiler
  feat: modernjs 接入 builder 构建
- 543be9558e: feat: compile server loader and support handle loader request
  feat: 编译 server loader 并支持处理 loader 的请求

### Patch Changes

- c9f912ca4d: feat(app-tools): improve build logs of dev and build command

  feat(app-tools): 优化 dev 和 build 过程中的日志展示

- 103973cde9: fix: builder tools.webpackChain config args not match the Modernjs tools.webpackChain
  fix: builder tools.webpackChain 配置传参无法匹配 Modernjs tools.webpackChain
- 0b2d1ef02b: fix: repeat register `babel-plugin-lodash`
  fix: 重复注册 `babel-plugin-lodash`
- 82cef85ed7: fix: specify builder compiler framework
  fix: 指明 builder 构建时框架
- 3e57f2b: feat: add document feature with plugin

  feat: 增加 document 功能插件

- 85edee888c: feat(app-tools): support tools.htmlPlugin config

  feat(app-tools): 支持 tools.htmlPlugin 配置项

- 5402fdb: feat(Builder): add output.disableTsChecker config

  feat(Builder): 新增 output.disableTsChecker 配置项

- dc8eeb9cbb: fix: clear distDirectory in prepare hook & inject data loader plugin to server
  fix: 在 prepare hook 中清理 dist 目录，并且向 server 中注入 data loader plugin
- cc971eabfc: refactor: move server plugin load logic in `@modern-js/core`
  refactor：移除在 `@modern-js/core` 中的 server 插件加载逻辑
- 5b9049f: feat: inject async js chunk when streaming ssr
  feat: streaming ssr 时, 注入 async 类型的 js chunk
- d4a4566: chore: rename plugin-jarvis to plugin-lint

  chore: 重命名 plugin-jarvis 为 plugin-lint

- 6bda14ed71: feat: refactor router with react-router@6.4

  feat: 使用 react-router@6.4 重构路由模块

- d36c6ee126: fix(app-tools): failed to run inspect command

  fix(app-tools): 修复运行 inspect 命令失败的问题

- 92004d1: feat: support load chunks parallelly
  feat: 支持并行加载 chunks
- b8bbe036c7: feat: change type logic
  feat: 修改类型相关的逻辑
- 40ed587: feat: inject css chunk into html for streaming ssr
  feat: streaming ssr 返回的 html 注入 css chunk
- af4422d: feat(builder): complete utils of tools.webpack

  feat(builder): 补全 tools.webpack 提供的 utils 方法

- 87c1ff8: feat(app-tools): attach builder instance to appContext

  feat(app-tools): 将 builder 实例挂载到 appContext 上

- c258e34202: fix: add builder hooks `beforeBuild` params
  fix: 新增 builder hooks `beforeBuild` 的参数
- 8b8e1bb571: feat: support nested routes
  feat: 支持嵌套路由
- 7de97ae: fix: `deploy` command has't load `builder` instance
  fix: `deploy` 命令没有加载 builder 实例
- c3b7de4: fix(app-tools): dev.assetPrefix not work

  fix(app-tools): 修复 dev.assetPrefix 配置项不生效的问题

- 92004d1: fix: use loadable lazy instead of loadable
  fix: 使用 loadable lazy 组件替代 loadable
- c677befc22: fix(app-tools): compat legacy resolve behavior

  fix(app-tools): 兼容旧版本 node_modules 解析逻辑

- 3f7cde5caa: fix: builder plugin setup can't get config
  fix: builder 插件在 setup 阶段无法拿到 config
- 99213e4bae: fix: process does't exit when exec command
  fix: 修复执行命令时进程未退出的问题
- b16fd96: fix: `modern-js/app-tools` pass error config to builder.
  fix: `modern-js/app-tools` 传递错误的 config 给 builder.
- 7eefedd7ca: fix: add html-webpack-plugin `__internal__` options, for bottom template
  fix: 为了 bottom template, 增加 `html-webpack-plugin` `__internal__` 配置项，
- 14b712d: fix: use consistent alias type and default value across packages

  fix: 在各个包中使用一致的 alias 类型定义和默认值

- Updated dependencies [c9f912ca4d]
- Updated dependencies [95be7cc49c]
- Updated dependencies [e439457a51]
- Updated dependencies [4d1545f8c0]
- Updated dependencies [2bc090c089]
- Updated dependencies [f96a725211]
- Updated dependencies [828f42f9ce]
- Updated dependencies [c745686]
- Updated dependencies [c9e800d39a]
- Updated dependencies [0ff846f]
- Updated dependencies [57077b2]
- Updated dependencies [d032d49]
- Updated dependencies [2ff6167]
- Updated dependencies [287f298990]
- Updated dependencies [15bf09d9c8]
- Updated dependencies [423188db70]
- Updated dependencies [fd2d652]
- Updated dependencies [0c2d8dae31]
- Updated dependencies [2edad29]
- Updated dependencies [85edee888c]
- Updated dependencies [a2509bfbdb]
- Updated dependencies [3998875791]
- Updated dependencies [3998875791]
- Updated dependencies [ba86b8b711]
- Updated dependencies [61f21d1e77]
- Updated dependencies [5402fdb]
- Updated dependencies [2ae58176fe]
- Updated dependencies [92f0ead]
- Updated dependencies [edd1cfb1af]
- Updated dependencies [5d67c26]
- Updated dependencies [cc971eabfc]
- Updated dependencies [5b9049f]
- Updated dependencies [d4a4566]
- Updated dependencies [18360a38d7]
- Updated dependencies [6bda14ed71]
- Updated dependencies [0b314e6946]
- Updated dependencies [92004d1]
- Updated dependencies [b8bbe036c7]
- Updated dependencies [40ed587]
- Updated dependencies [af4422d]
- Updated dependencies [87c1ff8]
- Updated dependencies [d5a31df781]
- Updated dependencies [dda38c9]
- Updated dependencies [102d32e4ba]
- Updated dependencies [c258e34202]
- Updated dependencies [7248342e4d]
- Updated dependencies [568eab1e42]
- Updated dependencies [8b8e1bb571]
- Updated dependencies [3bbea92b2a]
- Updated dependencies [ae71096d45]
- Updated dependencies [73cd29dd9f]
- Updated dependencies [a23010138d]
- Updated dependencies [75d1b2657c]
- Updated dependencies [18aaf42]
- Updated dependencies [f179749]
- Updated dependencies [3fae2d0]
- Updated dependencies [8a6d45f]
- Updated dependencies [ebbeed1]
- Updated dependencies [90e2879520]
- Updated dependencies [df41d71]
- Updated dependencies [f727e5c6cc]
- Updated dependencies [5e3cecd523]
- Updated dependencies [abf3421]
- Updated dependencies [da2d1fc3c2]
- Updated dependencies [543be9558e]
- Updated dependencies [14b712d]
  - @modern-js/builder-webpack-provider@2.0.0-beta.1
  - @modern-js/builder-shared@2.0.0-beta.1
  - @modern-js/core@2.0.0-beta.1
  - @modern-js/prod-server@2.0.0-beta.1
  - @modern-js/builder-plugin-esbuild@2.0.0-beta.1
  - @modern-js/server@2.0.0-beta.1
  - @modern-js/node-bundle-require@2.0.0-beta.1
  - @modern-js/utils@2.0.0-beta.1
  - @modern-js/builder-plugin-node-polyfill@2.0.0-beta.1
  - @modern-js/types@2.0.0-beta.1
  - @modern-js/plugin-lint@2.0.0-beta.1
  - @modern-js/plugin@2.0.0-beta.1
  - @modern-js/builder@2.0.0-beta.1
  - @modern-js/plugin-data-loader@2.0.0-beta.1
  - @modern-js/plugin-i18n@2.0.0-beta.1
  - @modern-js/new-action@2.0.0-beta.1
  - @modern-js/upgrade@2.0.0-beta.1

## 2.0.0-beta.0

### Major Changes

- dda38c9: chore: v2

### Minor Changes

- edd1cfb1a: feat: modernjs Access builder compiler
  feat: modernjs 接入 builder 构建
- 543be95: feat: compile server loader and support handle loader request
  feat: 编译 server loader 并支持处理 loader 的请求

### Patch Changes

- c9f912c: feat(app-tools): improve build logs of dev and build command

  feat(app-tools): 优化 dev 和 build 过程中的日志展示

- 103973c: fix: builder tools.webpackChain config args not match the Modernjs tools.webpackChain
  fix: builder tools.webpackChain 配置传参无法匹配 Modernjs tools.webpackChain
- 0b2d1ef: fix: repeat register `babel-plugin-lodash`
  fix: 重复注册 `babel-plugin-lodash`
- 82cef85: fix: specify builder compiler framework
  fix: 指明 builder 构建时框架
- 85edee8: feat(app-tools): support tools.htmlPlugin config

  feat(app-tools): 支持 tools.htmlPlugin 配置项

- dc8eeb9: fix: clear distDirectory in prepare hook & inject data loader plugin to server
  fix: 在 prepare hook 中清理 dist 目录，并且向 server 中注入 data loader plugin
- cc971eabf: refactor: move server plugin load logic in `@modern-js/core`
  refactor：移除在 `@modern-js/core` 中的 server 插件加载逻辑
- 5b9049f: feat: inject async js chunk when streaming ssr
  feat: streaming ssr 时, 注入 async 类型的 js chunk
- 6bda14ed7: feat: refactor router with react-router@6.4

  feat: 使用 react-router@6.4 重构路由模块

- d36c6ee: fix(app-tools): failed to run inspect command

  fix(app-tools): 修复运行 inspect 命令失败的问题

- b8bbe036c: feat: change type logic
  feat: 修改类型相关的逻辑
- af4422d: feat(builder): complete utils of tools.webpack

  feat(builder): 补全 tools.webpack 提供的 utils 方法

- c258e34: fix: add builder hooks `beforeBuild` params
  fix: 新增 builder hooks `beforeBuild` 的参数
- 8b8e1bb57: feat: support nested routes
  feat: 支持嵌套路由
- c677bef: fix(app-tools): compat legacy resolve behavior

  fix(app-tools): 兼容旧版本 node_modules 解析逻辑

- 3f7cde5: fix: builder plugin setup can't get config
  fix: builder 插件在 setup 阶段无法拿到 config
- 99213e4: fix: process does't exit when exec command
  fix: 修复执行命令时进程未退出的问题
- b16fd96: fix: `modern-js/app-tools` pass error config to builder.
  fix: `modern-js/app-tools` 传递错误的 config 给 builder.
- 7eefedd: fix: add html-webpack-plugin `__internal__` options, for bottom template
  fix: 为了 bottom template, 增加 `html-webpack-plugin` `__internal__` 配置项，
- 14b712d: fix: use consistent alias type and default value across packages

  fix: 在各个包中使用一致的 alias 类型定义和默认值

- Updated dependencies [c9f912c]
- Updated dependencies [95be7cc49]
- Updated dependencies [e439457a5]
- Updated dependencies [4d1545f]
- Updated dependencies [2bc090c08]
- Updated dependencies [f96a725]
- Updated dependencies [828f42f9c]
- Updated dependencies [c745686]
- Updated dependencies [c9e800d39]
- Updated dependencies [0ff846f]
- Updated dependencies [57077b2]
- Updated dependencies [287f29899]
- Updated dependencies [15bf09d9c]
- Updated dependencies [423188db7]
- Updated dependencies [fd2d652]
- Updated dependencies [0c2d8dae3]
- Updated dependencies [85edee8]
- Updated dependencies [a2509bf]
- Updated dependencies [399887579]
- Updated dependencies [399887579]
- Updated dependencies [ba86b8b]
- Updated dependencies [61f21d1e7]
- Updated dependencies [2ae58176f]
- Updated dependencies [edd1cfb1a]
- Updated dependencies [5d67c26]
- Updated dependencies [cc971eabf]
- Updated dependencies [5b9049f]
- Updated dependencies [18360a38d]
- Updated dependencies [6bda14ed7]
- Updated dependencies [0b314e694]
- Updated dependencies [b8bbe036c]
- Updated dependencies [af4422d]
- Updated dependencies [d5a31df78]
- Updated dependencies [dda38c9]
- Updated dependencies [102d32e4b]
- Updated dependencies [c258e34]
- Updated dependencies [7248342e4]
- Updated dependencies [568eab1e4]
- Updated dependencies [8b8e1bb57]
- Updated dependencies [3bbea92b2]
- Updated dependencies [ae71096d4]
- Updated dependencies [73cd29dd9]
- Updated dependencies [a23010138]
- Updated dependencies [75d1b2657]
- Updated dependencies [8a6d45f]
- Updated dependencies [90e2879]
- Updated dependencies [f727e5c6c]
- Updated dependencies [5e3cecd52]
- Updated dependencies [abf3421]
- Updated dependencies [da2d1fc3c]
- Updated dependencies [543be95]
- Updated dependencies [14b712d]
  - @modern-js/builder-webpack-provider@2.0.0-beta.0
  - @modern-js/builder-shared@2.0.0-beta.0
  - @modern-js/core@2.0.0-beta.0
  - @modern-js/prod-server@2.0.0-beta.0
  - @modern-js/builder-plugin-esbuild@2.0.0-beta.0
  - @modern-js/server@2.0.0-beta.0
  - @modern-js/node-bundle-require@2.0.0-beta.0
  - @modern-js/builder-plugin-node-polyfill@2.0.0-beta.0
  - @modern-js/utils@2.0.0-beta.0
  - @modern-js/types@2.0.0-beta.0
  - @modern-js/plugin@2.0.0-beta.0
  - @modern-js/builder@2.0.0-beta.0
  - @modern-js/plugin-data-loader@2.0.0-beta.0
  - @modern-js/plugin-i18n@2.0.0-beta.0
  - @modern-js/plugin-jarvis@2.0.0-beta.0
  - @modern-js/new-action@2.0.0-beta.0
  - @modern-js/upgrade@2.0.0-beta.0

## 1.21.2

### Patch Changes

- Updated dependencies [9d4c0ba]
  - @modern-js/plugin@1.21.2
  - @modern-js/new-action@1.21.2
  - @modern-js/prod-server@1.21.2
  - @modern-js/server@1.21.2
  - @modern-js/core@1.21.2
  - @modern-js/plugin-jarvis@1.21.2
  - @modern-js/webpack@1.21.2
  - @modern-js/plugin-i18n@1.21.2
  - @modern-js/node-bundle-require@1.21.2
  - @modern-js/types@1.21.2
  - @modern-js/upgrade@1.21.2
  - @modern-js/utils@1.21.2

## 1.21.1

### Patch Changes

- @modern-js/core@1.21.1
- @modern-js/plugin-i18n@1.21.1
- @modern-js/plugin-jarvis@1.21.1
- @modern-js/webpack@1.21.1
- @modern-js/new-action@1.21.1
- @modern-js/prod-server@1.21.1
- @modern-js/server@1.21.1
- @modern-js/node-bundle-require@1.21.1
- @modern-js/plugin@1.21.1
- @modern-js/types@1.21.1
- @modern-js/upgrade@1.21.1
- @modern-js/utils@1.21.1

## 1.21.0

### Patch Changes

- Updated dependencies [f51c59a]
- Updated dependencies [7b3a482]
- Updated dependencies [cfd8557]
- Updated dependencies [17d1672]
- Updated dependencies [8f3674a]
- Updated dependencies [dca34c4]
- Updated dependencies [28f0a4f]
- Updated dependencies [b0597e3]
- Updated dependencies [519965e]
- Updated dependencies [67d80b7]
  - @modern-js/prod-server@1.21.0
  - @modern-js/server@1.21.0
  - @modern-js/types@1.21.0
  - @modern-js/node-bundle-require@1.21.0
  - @modern-js/new-action@1.21.0
  - @modern-js/upgrade@1.21.0
  - @modern-js/webpack@1.21.0
  - @modern-js/core@1.21.0
  - @modern-js/plugin@1.21.0
  - @modern-js/utils@1.21.0
  - @modern-js/plugin-jarvis@1.21.0
  - @modern-js/plugin-i18n@1.21.0

## 1.20.1

### Patch Changes

- Updated dependencies [49515c5]
  - @modern-js/utils@1.20.1
  - @modern-js/core@1.20.1
  - @modern-js/plugin-i18n@1.20.1
  - @modern-js/plugin-jarvis@1.20.1
  - @modern-js/webpack@1.20.1
  - @modern-js/new-action@1.20.1
  - @modern-js/prod-server@1.20.1
  - @modern-js/server@1.20.1
  - @modern-js/node-bundle-require@1.20.1
  - @modern-js/upgrade@1.20.1
  - @modern-js/plugin@1.20.1
  - @modern-js/types@1.20.1

## 1.20.0

### Patch Changes

- 0f9e16b: fix(app-tools): remove useless logging option

  fix(app-tools): 移除无效的 logging 选项

- Updated dependencies [35c0959]
- Updated dependencies [d5d570b]
- Updated dependencies [4ddc185]
- Updated dependencies [66e4817]
- Updated dependencies [df8ee7e]
- Updated dependencies [077aef8]
- Updated dependencies [8c05089]
- Updated dependencies [face165]
- Updated dependencies [baf7337]
- Updated dependencies [d5d570b]
  - @modern-js/server@1.20.0
  - @modern-js/utils@1.20.0
  - @modern-js/core@1.20.0
  - @modern-js/webpack@1.20.0
  - @modern-js/types@1.20.0
  - @modern-js/prod-server@1.20.0
  - @modern-js/plugin-i18n@1.20.0
  - @modern-js/plugin-jarvis@1.20.0
  - @modern-js/new-action@1.20.0
  - @modern-js/node-bundle-require@1.20.0
  - @modern-js/upgrade@1.20.0
  - @modern-js/plugin@1.20.0

## 1.19.0

### Patch Changes

- Updated dependencies [d2cfa69]
- Updated dependencies [d2fbefc]
- Updated dependencies [1903f68]
  - @modern-js/core@1.19.0
  - @modern-js/plugin-jarvis@1.19.0
  - @modern-js/prod-server@1.19.0
  - @modern-js/webpack@1.19.0
  - @modern-js/server@1.19.0
  - @modern-js/new-action@1.19.0
  - @modern-js/upgrade@1.19.0
  - @modern-js/plugin-i18n@1.19.0
  - @modern-js/node-bundle-require@1.19.0
  - @modern-js/plugin@1.19.0
  - @modern-js/types@1.19.0
  - @modern-js/utils@1.19.0

## 1.18.1

### Patch Changes

- Updated dependencies [3586707]
- Updated dependencies [318e149]
- Updated dependencies [c1a4d9b]
- Updated dependencies [60d95ad]
- Updated dependencies [8016a8a]
- Updated dependencies [f6a3aa1]
- Updated dependencies [9f7bfa6]
- Updated dependencies [23fa468]
- Updated dependencies [9fcfbd4]
- Updated dependencies [6c2c745]
- Updated dependencies [55988fa]
- Updated dependencies [bc3bbd8]
  - @modern-js/prod-server@1.18.1
  - @modern-js/core@1.18.1
  - @modern-js/server@1.18.1
  - @modern-js/types@1.18.1
  - @modern-js/plugin@1.18.1
  - @modern-js/utils@1.18.1
  - @modern-js/plugin-jarvis@1.18.1
  - @modern-js/webpack@1.18.1
  - @modern-js/plugin-i18n@1.18.1
  - @modern-js/new-action@1.18.1
  - @modern-js/node-bundle-require@1.18.1
  - @modern-js/upgrade@1.18.1

## 1.18.0

### Patch Changes

- 66ad36f: feat: add source.enableAsyncEntry config

  feat: 新增 source.enableAsyncEntry 配置项

- Updated dependencies [8280920]
- Updated dependencies [3d5e3a5]
- Updated dependencies [8280920]
- Updated dependencies [2b7406d]
- Updated dependencies [9f13d8c]
- Updated dependencies [fc7214d]
- Updated dependencies [60a2e3a]
- Updated dependencies [5227370]
- Updated dependencies [66ad36f]
- Updated dependencies [7928bae]
  - @modern-js/utils@1.18.0
  - @modern-js/prod-server@1.18.0
  - @modern-js/server@1.18.0
  - @modern-js/upgrade@1.18.0
  - @modern-js/core@1.18.0
  - @modern-js/plugin-i18n@1.18.0
  - @modern-js/plugin-jarvis@1.18.0
  - @modern-js/webpack@1.18.0
  - @modern-js/new-action@1.18.0
  - @modern-js/node-bundle-require@1.18.0
  - @modern-js/plugin@1.18.0
  - @modern-js/types@1.18.0

## 1.17.0

### Patch Changes

- fb30bca: feat: add upgrade tools and command

  feat: 增加升级工具和升级命令

- c3d4a6a: feat: support react 18 ssr
  feat: 支持 React 18 下使用 SSR
- Updated dependencies [1b9176f]
- Updated dependencies [77d3a38]
- Updated dependencies [fb30bca]
- Updated dependencies [f3fab28]
- Updated dependencies [151329d]
- Updated dependencies [367405a]
- Updated dependencies [5af9472]
- Updated dependencies [6b6a534]
- Updated dependencies [6b43a2b]
- Updated dependencies [9f4e5ce]
- Updated dependencies [58c53a7]
- Updated dependencies [a7be124]
- Updated dependencies [31547b4]
  - @modern-js/utils@1.17.0
  - @modern-js/upgrade@1.17.0
  - @modern-js/new-action@1.17.0
  - @modern-js/webpack@1.17.0
  - @modern-js/server@1.17.0
  - @modern-js/core@1.17.0
  - @modern-js/plugin-i18n@1.17.0
  - @modern-js/plugin-jarvis@1.17.0
  - @modern-js/prod-server@1.17.0
  - @modern-js/node-bundle-require@1.17.0
  - @modern-js/plugin@1.17.0
  - @modern-js/types@1.17.0

## 1.16.0

### Minor Changes

- 1100dd58c: chore: support react 18

  chore: 支持 React 18

### Patch Changes

- 3904b30a5: fix: check apiOnly while has source.entriesDir

  fix: 当配置 source.entriesDir 存在时，apiOnly 检查错误

- Updated dependencies [641592f52]
- Updated dependencies [3904b30a5]
- Updated dependencies [1100dd58c]
- Updated dependencies [e04e6e76a]
- Updated dependencies [2808ff5a2]
- Updated dependencies [81c66e4a4]
- Updated dependencies [2c305b6f5]
- Updated dependencies [9d9bbfd05]
  - @modern-js/utils@1.16.0
  - @modern-js/webpack@1.16.0
  - @modern-js/types@1.16.0
  - @modern-js/server@1.16.0
  - @modern-js/prod-server@1.16.0
  - @modern-js/new-action@1.16.0
  - @modern-js/core@1.16.0
  - @modern-js/plugin-i18n@1.16.0
  - @modern-js/plugin-jarvis@1.16.0
  - @modern-js/node-bundle-require@1.16.0
  - @modern-js/plugin@1.16.0

## 1.15.0

### Patch Changes

- d85a20d: fix(app-tools): should not modify entry when using disableDefaultEntries

  fix(app-tools): 修复开启 disableDefaultEntries 后 entry 名称被修改的问题

- 37cd159: feat(webpack): log more detailed error messages
- Updated dependencies [8658a78]
- Updated dependencies [0df4970]
- Updated dependencies [05d4a4f]
- Updated dependencies [b1f7000]
- Updated dependencies [ad05af9]
- Updated dependencies [5d53d1c]
- Updated dependencies [c087148]
- Updated dependencies [37cd159]
  - @modern-js/utils@1.15.0
  - @modern-js/webpack@1.15.0
  - @modern-js/server@1.15.0
  - @modern-js/types@1.15.0
  - @modern-js/prod-server@1.15.0
  - @modern-js/new-action@1.15.0
  - @modern-js/core@1.15.0
  - @modern-js/plugin-i18n@1.15.0
  - @modern-js/plugin-jarvis@1.15.0
  - @modern-js/node-bundle-require@1.15.0
  - @modern-js/plugin@1.15.0

## 1.8.4

### Patch Changes

- 3c20a5e: fix: `@modern-js/app-tools` export fields

  fix: 修复 `@modern-js/app-tools` 导出字段路径

- Updated dependencies [79e83ef]
- Updated dependencies [5f1a231]
- Updated dependencies [3c20a5e]
- Updated dependencies [22f4dca]
- Updated dependencies [7b9067f]
  - @modern-js/utils@1.9.0
  - @modern-js/webpack@1.12.4
  - @modern-js/node-bundle-require@1.3.8
  - @modern-js/core@1.14.0
  - @modern-js/plugin-jarvis@1.2.14
  - @modern-js/prod-server@1.2.2
  - @modern-js/server@1.6.0

## 1.8.3

### Patch Changes

- f4822c0: feat(app-tools): start and inspect command support specify config file

  feat(app-tools): start 和 inspect 命令支持指定配置文件

- Updated dependencies [4f1889d]
- Updated dependencies [c423820]
- Updated dependencies [f4822c0]
  - @modern-js/utils@1.8.1
  - @modern-js/types@1.6.2
  - @modern-js/core@1.13.3
  - @modern-js/webpack@1.12.3
  - @modern-js/prod-server@1.2.2
  - @modern-js/server@1.6.0
  - @modern-js/plugin-jarvis@1.2.14

## 1.8.2

### Patch Changes

- 44e3bb1: feat: support response headers
  feat: 支持设置响应头
- Updated dependencies [0e28456]
- Updated dependencies [bfc1264]
- Updated dependencies [9a173a7]
- Updated dependencies [44e3bb1]
  - @modern-js/prod-server@1.2.2
  - @modern-js/core@1.13.2
  - @modern-js/webpack@1.12.3
  - @modern-js/types@1.6.1
  - @modern-js/plugin-jarvis@1.2.14
  - @modern-js/server@1.6.0
  - @modern-js/utils@1.8.0

## 1.8.1

### Patch Changes

- 102b5e098: fix: fix not found `analyze/cli` when change config

  fix: 修复修改配置重启时找不到 `analyze/cli`

## 1.8.0

### Minor Changes

- 83660b6: chore(app-tools): merge `@modern-js/analyze` to `@modern-js/app-tools`

  chore(app-tools): 合并 `@modern-js/analyze` 到 `@modern-js/app-tools`

### Patch Changes

- c8614b8: fix: using typeof window to determine the browser environment is not accurate
  fix: 使用 typeof windows 判断浏览器环境不够准确
- Updated dependencies [1421965]
- Updated dependencies [02647d2]
- Updated dependencies [4fc801f]
- Updated dependencies [9d60891]
- Updated dependencies [5876e63]
- Updated dependencies [2ed8f7d]
- Updated dependencies [e4b73b2]
- Updated dependencies [83660b6]
- Updated dependencies [c8614b8]
- Updated dependencies [281edd5]
- Updated dependencies [df73691]
- Updated dependencies [52374e3]
  - @modern-js/webpack@1.12.2
  - @modern-js/utils@1.8.0
  - @modern-js/core@1.13.1
  - @modern-js/prod-server@1.2.1
  - @modern-js/server@1.6.0
  - @modern-js/new-action@1.4.0
  - @modern-js/plugin-jarvis@1.2.14

## 1.7.0

### Minor Changes

- 33cebd2: chore(plugin-i18n): merge `@modern-js/i18n-cli-language-detector` to `@modern-js/plugin-i18n`

  chore(plugin-i18n): 合并 `@modern-js/i18n-cli-language-detector` 包到 `@modern-js/plugin-i18n` 包作为子路径

### Patch Changes

- Updated dependencies [b74b0b6]
- Updated dependencies [33cebd2]
- Updated dependencies [33cebd2]
- Updated dependencies [7b902b3]
- Updated dependencies [33cebd2]
- Updated dependencies [a27ab8d]
- Updated dependencies [3d64b2f]
- Updated dependencies [8b2aa56]
- Updated dependencies [3e4a34f]
- Updated dependencies [33cebd2]
- Updated dependencies [74e74ee]
- Updated dependencies [33cebd2]
  - @modern-js/webpack@1.12.0
  - @modern-js/core@1.13.0
  - @modern-js/plugin-analyze@1.5.0
  - @modern-js/types@1.6.0
  - @modern-js/plugin-i18n@1.3.0
  - @modern-js/prod-server@1.2.0
  - @modern-js/server@1.5.1
  - @modern-js/new-action@1.3.12
  - @modern-js/plugin-jarvis@1.2.14
  - @modern-js/utils@1.7.12

## 1.6.10

### Patch Changes

- eeedc80: feat: add plugin-jarvis to dependencies of solutions
- f29e9ba: feat: simplify context usage, no longer depend on containers
- Updated dependencies [77a8e9e]
- Updated dependencies [550e2bd]
- Updated dependencies [87eb9f8]
- Updated dependencies [3050acc]
- Updated dependencies [2b06fe3]
- Updated dependencies [3050acc]
- Updated dependencies [f29e9ba]
- Updated dependencies [d9564f2]
- Updated dependencies [1a57595]
- Updated dependencies [2dacc89]
- Updated dependencies [341bb42]
- Updated dependencies [338496c]
- Updated dependencies [f29e9ba]
- Updated dependencies [a90bc96]
  - @modern-js/server@1.5.0
  - @modern-js/webpack@1.11.3
  - @modern-js/node-bundle-require@1.3.7
  - @modern-js/core@1.12.2
  - @modern-js/plugin-analyze@1.4.7
  - @modern-js/prod-server@1.1.9
  - @modern-js/plugin-jarvis@1.2.14
  - @modern-js/types@1.5.5
  - @modern-js/new-action@1.3.11
  - @modern-js/plugin@1.4.0
  - @modern-js/utils@1.7.9

## 1.6.9

### Patch Changes

- change getOutputFile from sync function to async function

## 1.6.8

### Patch Changes

- e0e708f83: perf(app-tools): speed up modern start command
- Updated dependencies [06b411dc3]
- Updated dependencies [5d4806f86]
- Updated dependencies [b255072f2]
- Updated dependencies [63c354ad5]
- Updated dependencies [4165e50c7]
- Updated dependencies [073e9ad78]
- Updated dependencies [cda99c441]
- Updated dependencies [7975bfa68]
- Updated dependencies [b7302f781]
- Updated dependencies [b96dcf364]
- Updated dependencies [f4a7d49e1]
- Updated dependencies [9e36d3a01]
- Updated dependencies [3172e1ee1]
- Updated dependencies [e0e708f83]
  - @modern-js/webpack@1.11.1
  - @modern-js/core@1.12.1
  - @modern-js/utils@1.7.8
  - @modern-js/plugin@1.3.8
  - @modern-js/server@1.4.21
  - @modern-js/plugin-analyze@1.4.6
  - @modern-js/prod-server@1.1.8

## 1.6.7

### Patch Changes

- 64cf62697: feat(app-tools): support modern inspect command
- b7a1cea52: feat: support utils in tools.babel
- Updated dependencies [ded45811c]
- Updated dependencies [209d0a927]
- Updated dependencies [9d649884b]
- Updated dependencies [9377d2d9d]
- Updated dependencies [8e1cedd8a]
- Updated dependencies [8c9ad1749]
- Updated dependencies [6b2523f44]
- Updated dependencies [b7a1cea52]
- Updated dependencies [002dab527]
- Updated dependencies [1ac68424f]
- Updated dependencies [3dfee700c]
  - @modern-js/webpack@1.11.0
  - @modern-js/server@1.4.20
  - @modern-js/core@1.12.0
  - @modern-js/utils@1.7.7
  - @modern-js/plugin@1.3.7
  - @modern-js/plugin-analyze@1.4.6
  - @modern-js/prod-server@1.1.8

## 1.6.6

### Patch Changes

- a1198d509: feat: bump babel 7.18.0
- d12686040: feat(app-tools): support dev --analyze
- 8ee2b1b29: fix: remove some unnecessary logs during dev
- 8f7c0f898: feat(app-tools): support specify config file in build and deploy command
- Updated dependencies [8d508c6ed]
- Updated dependencies [0eff2473c]
- Updated dependencies [a1198d509]
- Updated dependencies [29728812e]
- Updated dependencies [f25d6a62e]
- Updated dependencies [a18926bbd]
- Updated dependencies [c7e38b4e6]
- Updated dependencies [147e090f7]
- Updated dependencies [18892c65c]
- Updated dependencies [a1198d509]
- Updated dependencies [8f7c0f898]
  - @modern-js/core@1.11.2
  - @modern-js/webpack@1.10.0
  - @modern-js/server@1.4.18
  - @modern-js/i18n-cli-language-detector@1.2.4
  - @modern-js/plugin-analyze@1.4.6
  - @modern-js/plugin-i18n@1.2.7
  - @modern-js/new-action@1.3.10
  - @modern-js/prod-server@1.1.8
  - @modern-js/node-bundle-require@1.3.5
  - @modern-js/plugin@1.3.6

## 1.6.5

### Patch Changes

- da65bf12: chore: merge plugin-fast-refresh into webpack
- 437367c6: fix(server): hmr not working when using proxy
- 7394df61: feat: prebundle @loadable/webpack-plugin and fix peer deps warning
- Updated dependencies [5f7fccf0]
- Updated dependencies [02b0a22e]
- Updated dependencies [f730081c]
- Updated dependencies [d1ab1f05]
- Updated dependencies [da65bf12]
- Updated dependencies [2ec8181a]
- Updated dependencies [8854c600]
- Updated dependencies [f7cbc771]
- Updated dependencies [6451a098]
- Updated dependencies [cdc2df9c]
- Updated dependencies [f5c48c3f]
- Updated dependencies [b39b399e]
- Updated dependencies [192dbc78]
- Updated dependencies [430d417e]
- Updated dependencies [658b4dd5]
- Updated dependencies [7fcfd6cc]
- Updated dependencies [d5a2cfd8]
- Updated dependencies [45d5643a]
- Updated dependencies [0d161fa8]
- Updated dependencies [437367c6]
- Updated dependencies [280eebf9]
- Updated dependencies [2ba8d62f]
- Updated dependencies [7394df61]
  - @modern-js/webpack@1.9.0
  - @modern-js/core@1.11.1
  - @modern-js/server@1.4.16
  - @modern-js/utils@1.7.6
  - @modern-js/types@1.5.4
  - @modern-js/prod-server@1.1.6
  - @modern-js/plugin-analyze@1.4.5

## 1.6.4

### Patch Changes

- d32f35134: chore: add modern/jest/eslint/ts config files to .npmignore
- Updated dependencies [d2995e7d7]
- Updated dependencies [47934c4da]
- Updated dependencies [d5913bd96]
- Updated dependencies [d32f35134]
- Updated dependencies [43d9bb5fa]
- Updated dependencies [b1f7d2aa6]
- Updated dependencies [86fe5a657]
- Updated dependencies [d9d398e16]
- Updated dependencies [97086dde8]
- Updated dependencies [6ae4a34ae]
- Updated dependencies [97086dde8]
- Updated dependencies [97086dde8]
- Updated dependencies [b80229c79]
- Updated dependencies [ff6219909]
- Updated dependencies [948cc4436]
  - @modern-js/webpack@1.7.0
  - @modern-js/plugin@1.3.4
  - @modern-js/core@1.10.2
  - @modern-js/i18n-cli-language-detector@1.2.3
  - @modern-js/plugin-analyze@1.4.3
  - @modern-js/plugin-fast-refresh@1.2.6
  - @modern-js/plugin-i18n@1.2.6
  - @modern-js/new-action@1.3.9
  - @modern-js/prod-server@1.1.5
  - @modern-js/server@1.4.14
  - @modern-js/node-bundle-require@1.3.3
  - @modern-js/types@1.5.3
  - @modern-js/utils@1.7.3

## 1.6.3

### Patch Changes

- 69a728375: fix: remove exports.jsnext:source after publish
- Updated dependencies [b7b8075dc]
- Updated dependencies [cd7346b0d]
- Updated dependencies [0e0537005]
- Updated dependencies [6b0bb5e3b]
- Updated dependencies [738c55d39]
- Updated dependencies [69a728375]
  - @modern-js/webpack@1.6.2
  - @modern-js/utils@1.7.2
  - @modern-js/server@1.4.13
  - @modern-js/new-action@1.3.8
  - @modern-js/core@1.10.1
  - @modern-js/plugin-analyze@1.4.2
  - @modern-js/plugin-fast-refresh@1.2.5
  - @modern-js/plugin-i18n@1.2.5
  - @modern-js/prod-server@1.1.4
  - @modern-js/node-bundle-require@1.3.2

## 1.6.2

### Patch Changes

- 8cf0ca21: fix: build commands not work
- Updated dependencies [4697d1db]
- Updated dependencies [0ee4bb4e]
- Updated dependencies [a4c5fe78]
- Updated dependencies [6fa74d5f]
- Updated dependencies [a22d3ea8]
- Updated dependencies [5c00db22]
- Updated dependencies [92f4909e]
  - @modern-js/webpack@1.6.0
  - @modern-js/core@1.10.0
  - @modern-js/utils@1.7.0
  - @modern-js/prod-server@1.1.3
  - @modern-js/types@1.5.2
  - @modern-js/server@1.4.12
  - @modern-js/plugin-analyze@1.4.1
  - @modern-js/plugin-fast-refresh@1.2.4
  - @modern-js/node-bundle-require@1.3.2

## 1.6.1

### Patch Changes

- 77519490: refactor(webpack): remove `@modern-js/core`
- 592edabc: feat: prebundle url-join,mime-types,json5,fast-glob,globby,ora,inquirer
- 895fa0ff: chore: using "workspace:\*" in devDependencies
- 3d1fac2a: chore: app-tools no longer depend on webpack
- 247e2005: support devServer.devMiddleware, same as webpack-dev-server
- Updated dependencies [2d155c4c]
- Updated dependencies [a0475f1a]
- Updated dependencies [a0499e4f]
- Updated dependencies [123e432d]
- Updated dependencies [6c1438d2]
- Updated dependencies [e5a9b26d]
- Updated dependencies [0b26b93b]
- Updated dependencies [123e432d]
- Updated dependencies [f9f66ef9]
- Updated dependencies [71526621]
- Updated dependencies [77519490]
- Updated dependencies [592edabc]
- Updated dependencies [3578716a]
- Updated dependencies [895fa0ff]
- Updated dependencies [3d1fac2a]
- Updated dependencies [3578913e]
- Updated dependencies [247e2005]
- Updated dependencies [1c3beab3]
  - @modern-js/utils@1.6.0
  - @modern-js/webpack@1.5.7
  - @modern-js/server@1.4.11
  - @modern-js/prod-server@1.1.2
  - @modern-js/node-bundle-require@1.3.2
  - @modern-js/core@1.9.0
  - @modern-js/plugin-analyze@1.4.1
  - @modern-js/new-action@1.3.7
  - @modern-js/types@1.5.1
  - @modern-js/plugin-fast-refresh@1.2.4

## 1.6.0

### Minor Changes

- 3bf4f8b0: feat: support start api server only

### Patch Changes

- 04ae5262: chore: bump @modern-js/utils to v1.4.1 in dependencies
- 60f7d8bf: feat: add tests dir to npmignore
- 5dbbeb57: fix: export extended Command type
- 305e0bb4: fix: commander.commandsMap typing not work
- Updated dependencies [a4330c73]
- Updated dependencies [b8599d09]
- Updated dependencies [6cffe99d]
- Updated dependencies [04ae5262]
- Updated dependencies [60f7d8bf]
- Updated dependencies [e4cec1ce]
- Updated dependencies [3b7aa8bb]
- Updated dependencies [5dbbeb57]
- Updated dependencies [ebfcbb35]
- Updated dependencies [3bf4f8b0]
- Updated dependencies [305e0bb4]
- Updated dependencies [ebfcbb35]
- Updated dependencies [28ac120a]
  - @modern-js/core@1.8.0
  - @modern-js/node-bundle-require@1.3.1
  - @modern-js/utils@1.5.0
  - @modern-js/i18n-cli-language-detector@1.2.2
  - @modern-js/plugin-fast-refresh@1.2.4
  - @modern-js/plugin-i18n@1.2.4
  - @modern-js/webpack@1.5.5
  - @modern-js/new-action@1.3.6
  - @modern-js/prod-server@1.1.1
  - @modern-js/server@1.4.10
  - @modern-js/plugin@1.3.3
  - @modern-js/types@1.5.0
  - @modern-js/plugin-analyze@1.4.0

## 1.5.0

### Minor Changes

- d2d1d6b2: feat: support server config

### Patch Changes

- 6aa80baa: fix: Generate config helper file only config file exist
- Updated dependencies [60855eb2]
- Updated dependencies [046e58aa]
- Updated dependencies [ec1b7367]
- Updated dependencies [77ff9754]
- Updated dependencies [d2d1d6b2]
- Updated dependencies [07a4887e]
- Updated dependencies [ea2ae711]
- Updated dependencies [17d0cc46]
- Updated dependencies [d2d1d6b2]
  - @modern-js/core@1.7.0
  - @modern-js/plugin-analyze@1.3.6
  - @modern-js/webpack@1.5.4
  - @modern-js/utils@1.4.0
  - @modern-js/prod-server@1.1.0
  - @modern-js/node-bundle-require@1.3.0
  - @modern-js/types@1.4.0
  - @modern-js/plugin-i18n@1.2.3
  - @modern-js/new-action@1.3.5
  - @modern-js/plugin-fast-refresh@1.2.3
  - @modern-js/server@1.4.9

## 1.4.6

### Patch Changes

- 8491b6dd: fix: optimise "types" exports from plugin
- Updated dependencies [bebb39b6]
- Updated dependencies [4b4e73b7]
- Updated dependencies [da60172c]
- Updated dependencies [ef28a4e6]
- Updated dependencies [6cff93dc]
- Updated dependencies [132f7b53]
- Updated dependencies [ff73a5cc]
- Updated dependencies [9d4a005b]
  - @modern-js/plugin-analyze@1.3.5
  - @modern-js/plugin-fast-refresh@1.2.3
  - @modern-js/webpack@1.5.3
  - @modern-js/prod-server@1.0.6
  - @modern-js/server@1.4.9
  - @modern-js/core@1.6.1
  - @modern-js/types@1.3.6
  - @modern-js/utils@1.3.7

## 1.4.5

### Patch Changes

- 32c9772c: feat: convert to new plugin
- Updated dependencies [05ce88a0]
- Updated dependencies [a8df060e]
- Updated dependencies [c2046f37]
- Updated dependencies [dc88abf9]
- Updated dependencies [d2d0fa11]
- Updated dependencies [66cbef42]
- Updated dependencies [0462ff77]
- Updated dependencies [61e3f623]
- Updated dependencies [6a7acb81]
- Updated dependencies [681a1ff9]
- Updated dependencies [4e2026e4]
  - @modern-js/core@1.6.0
  - @modern-js/server@1.4.8
  - @modern-js/utils@1.3.6
  - @modern-js/plugin@1.3.2
  - @modern-js/prod-server@1.0.5
  - @modern-js/webpack@1.5.0
  - @modern-js/plugin-fast-refresh@1.2.2
  - @modern-js/plugin-analyze@1.3.4

## 1.4.4

### Patch Changes

- d5bf095a: fix: disable load webpack when apiOnly mode
- Updated dependencies [5bf5868d]
- Updated dependencies [80d3cfb7]
- Updated dependencies [42c6b136]
- Updated dependencies [80d8ddfe]
- Updated dependencies [4e7dcbd5]
- Updated dependencies [d95f28c3]
- Updated dependencies [d95f28c3]
- Updated dependencies [d5bf095a]
- Updated dependencies [9e8bc4ab]
- Updated dependencies [0923c182]
- Updated dependencies [0c556e59]
- Updated dependencies [80d8ddfe]
- Updated dependencies [491145e3]
- Updated dependencies [2008fdbd]
- Updated dependencies [ca0bcf13]
- Updated dependencies [9229dfd1]
  - @modern-js/utils@1.3.5
  - @modern-js/core@1.5.0
  - @modern-js/plugin@1.3.0
  - @modern-js/prod-server@1.0.4
  - @modern-js/types@1.3.5
  - @modern-js/server@1.4.7

## 1.4.3

### Patch Changes

- 4b5d4bf4: feat: add img resource's inline and url type declaration
- bdcf0865: fix: empty distDirectory for api service
- 02fb4146: support product server
- edc3bd3d: fix: @modern-js/core package not found
- Updated dependencies [969f172f]
- Updated dependencies [0ad75faa]
- Updated dependencies [4c792f68]
- Updated dependencies [83059b93]
- Updated dependencies [4b5d4bf4]
- Updated dependencies [0ad75faa]
- Updated dependencies [62f5b8c8]
- Updated dependencies [55e18278]
- Updated dependencies [4499a674]
- Updated dependencies [0ad75faa]
- Updated dependencies [02fb4146]
- Updated dependencies [403f5169]
- Updated dependencies [e37ea5b2]
- Updated dependencies [a7f42f48]
- Updated dependencies [83059b93]
  - @modern-js/core@1.4.4
  - @modern-js/webpack@1.4.1
  - @modern-js/utils@1.3.3
  - @modern-js/new-action@1.3.3
  - @modern-js/server@1.4.4
  - @modern-js/types@1.3.4
  - @modern-js/prod-server@1.0.1

## 1.4.2

### Patch Changes

- fab92861: fix: @modern-js/core phantom dep
- Updated dependencies [deeaa602]
- Updated dependencies [54786e58]
- Updated dependencies [6668a1bf]
- Updated dependencies [fab92861]
- Updated dependencies [3da3bf48]
  - @modern-js/plugin-analyze@1.3.3
  - @modern-js/server@1.4.3
  - @modern-js/types@1.3.3
  - @modern-js/utils@1.3.2
  - @modern-js/webpack@1.4.0
  - @modern-js/core@1.4.3
  - @modern-js/new-action@1.3.2

## 1.4.1

### Patch Changes

- 78279953: compiler entry bug fix and dev build console
- c78400c7: fix: remove stylus support
- 4d72edea: support dev compiler by entry
- Updated dependencies [75f4eeb8]
- Updated dependencies [b7a9eeba]
- Updated dependencies [2cfc4235]
- Updated dependencies [8d55e234]
- Updated dependencies [53aca274]
- Updated dependencies [78279953]
- Updated dependencies [e116ace5]
- Updated dependencies [4d72edea]
  - @modern-js/webpack@1.3.1
  - @modern-js/plugin-analyze@1.3.1
  - @modern-js/server@1.4.1
  - @modern-js/core@1.4.1
  - @modern-js/types@1.3.1
  - @modern-js/utils@1.3.1

## 1.4.0

### Minor Changes

- ec4dbffb: feat: support as a pure api service

### Patch Changes

- bd819a8d: fix: file route changed not trigger hot reload
- 62cd58c6: fix: create route.json failure
- d099e5c5: fix error when modify modern.config.js
- Updated dependencies [816fd721]
- Updated dependencies [d9cc5ea9]
- Updated dependencies [ddf0c3a6]
- Updated dependencies [bfbea9a7]
- Updated dependencies [bd819a8d]
- Updated dependencies [ec4dbffb]
- Updated dependencies [d099e5c5]
- Updated dependencies [bada2879]
- Updated dependencies [24f616ca]
- Updated dependencies [bd819a8d]
- Updated dependencies [272cab15]
  - @modern-js/server@1.4.0
  - @modern-js/types@1.3.0
  - @modern-js/core@1.4.0
  - @modern-js/plugin-analyze@1.3.0
  - @modern-js/webpack@1.3.0
  - @modern-js/utils@1.3.0

## 1.3.2

### Patch Changes

- 83166714: change .npmignore
- Updated dependencies [83166714]
- Updated dependencies [c3de9882]
- Updated dependencies [33ff48af]
- Updated dependencies [b7c48198]
  - @modern-js/core@1.3.2
  - @modern-js/i18n-cli-language-detector@1.2.1
  - @modern-js/plugin-analyze@1.2.1
  - @modern-js/plugin-fast-refresh@1.2.1
  - @modern-js/plugin-i18n@1.2.1
  - @modern-js/webpack@1.2.1
  - @modern-js/new-action@1.3.1
  - @modern-js/server@1.3.2
  - @modern-js/plugin@1.2.1
  - @modern-js/types@1.2.1
  - @modern-js/utils@1.2.2

## 1.3.1

### Patch Changes

- 823809c6: fix: remove plugin-polyfill from app-tools
- Updated dependencies [e2d3a575]
- Updated dependencies [823809c6]
- Updated dependencies [823809c6]
- Updated dependencies [4584cc04]
- Updated dependencies [7c19fd94]
- Updated dependencies [e2d3a575]
  - @modern-js/server@1.3.1
  - @modern-js/utils@1.2.1
  - @modern-js/core@1.3.1

## 1.3.0

### Minor Changes

- cfe11628: Make Modern.js self bootstraping

### Patch Changes

- Updated dependencies [2da09c69]
- Updated dependencies [e2464fe5]
- Updated dependencies [5597289b]
- Updated dependencies [fc71e36f]
- Updated dependencies [4a85378c]
- Updated dependencies [146dcd85]
- Updated dependencies [e453e421]
- Updated dependencies [2c049918]
- Updated dependencies [c3d46ee4]
- Updated dependencies [cfe11628]
- Updated dependencies [1ebc7ee2]
- Updated dependencies [146dcd85]
- Updated dependencies [146dcd85]
- Updated dependencies [1ebc7ee2]
  - @modern-js/utils@1.2.0
  - @modern-js/types@1.2.0
  - @modern-js/webpack@1.2.0
  - @modern-js/core@1.3.0
  - @modern-js/server@1.3.0
  - @modern-js/new-action@1.3.0
  - @modern-js/i18n-cli-language-detector@1.2.0
  - @modern-js/plugin-analyze@1.2.0
  - @modern-js/plugin-fast-refresh@1.2.0
  - @modern-js/plugin-i18n@1.2.0
  - @modern-js/plugin-polyfill@1.2.0
  - @modern-js/plugin@1.2.0

## 1.2.0

### Minor Changes

- 212f749f: fix(app-tools): app-tools exported types

### Patch Changes

- Updated dependencies [e51b1db3]
- Updated dependencies [5e3de7d8]
- Updated dependencies [4819a3c7]
- Updated dependencies [b7fb82ec]
- Updated dependencies [81d93503]
  - @modern-js/server@1.2.1
  - @modern-js/types@1.1.5
  - @modern-js/plugin-i18n@1.1.2
  - @modern-js/new-action@1.2.2
  - @modern-js/utils@1.1.6

## 1.1.5

### Patch Changes

- d927bc83: remove esbuild and use @modenr-js/esbuild-compiler
- Updated dependencies [d927bc83]
- Updated dependencies [d73ff455]
- Updated dependencies [9c1ab865]
- Updated dependencies [d73ff455]
- Updated dependencies [d73ff455]
- Updated dependencies [d73ff455]
- Updated dependencies [d73ff455]
  - @modern-js/utils@1.1.4
  - @modern-js/core@1.1.4
  - @modern-js/server@1.1.4
  - @modern-js/types@1.1.3

## 1.1.4

### Patch Changes

- ed1f6b12: feat: support build --analyze
- Updated dependencies [085a6a58]
- Updated dependencies [085a6a58]
- Updated dependencies [9a5e6d14]
- Updated dependencies [085a6a58]
- Updated dependencies [d280ea33]
- Updated dependencies [a37192b1]
- Updated dependencies [d4fcc73a]
- Updated dependencies [085a6a58]
- Updated dependencies [ed1f6b12]
- Updated dependencies [144145c7]
- Updated dependencies [a5ebbb00]
- Updated dependencies [b058c6fa]
- Updated dependencies [085a6a58]
  - @modern-js/core@1.1.3
  - @modern-js/server@1.1.3
  - @modern-js/utils@1.1.3
  - @modern-js/webpack@1.1.3
  - @modern-js/new-action@1.1.5

## 1.1.3

### Patch Changes

- 0fa83663: support more .env files
- Updated dependencies [6f7fe574]
- Updated dependencies [e4755134]
- Updated dependencies [0fa83663]
- Updated dependencies [19b4f79e]
- Updated dependencies [f594fbc8]
- Updated dependencies [d1fde77a]
  - @modern-js/core@1.1.2
  - @modern-js/webpack@1.1.2
  - @modern-js/i18n-cli-language-detector@1.1.1
  - @modern-js/plugin-analyze@1.1.1
  - @modern-js/plugin-fast-refresh@1.1.1
  - @modern-js/plugin-i18n@1.1.1
  - @modern-js/new-action@1.1.2
  - @modern-js/plugin-polyfill@1.1.1
  - @modern-js/server@1.1.2
  - @modern-js/plugin@1.1.2
  - @modern-js/types@1.1.2
  - @modern-js/utils@1.1.2

## 1.1.2

### Patch Changes

- c0fc0700: feat: support deploy plugin
- Updated dependencies [3b6856b8]
- Updated dependencies [687c92c7]
- Updated dependencies [c0fc0700]
- Updated dependencies [6ffd1a50]
- Updated dependencies [c7f4cafb]
  - @modern-js/new-action@1.1.1
  - @modern-js/core@1.1.1
  - @modern-js/webpack@1.1.1
  - @modern-js/server@1.1.1
  - @modern-js/types@1.1.1
  - @modern-js/utils@1.1.1
  - @modern-js/plugin@1.1.1

## 1.1.1

### Patch Changes

- 6cfc16e: add esbuild deps

## 1.1.0

### Minor Changes

- 96119db2: Relese v1.1.0

### Patch Changes

- Updated dependencies [96119db2]
- Updated dependencies [eb00b569]
  - @modern-js/core@1.1.0
  - @modern-js/i18n-cli-language-detector@1.1.0
  - @modern-js/plugin-analyze@1.1.0
  - @modern-js/plugin-fast-refresh@1.1.0
  - @modern-js/plugin-i18n@1.1.0
  - @modern-js/webpack@1.1.0
  - @modern-js/new-action@1.1.0
  - @modern-js/plugin-polyfill@1.1.0
  - @modern-js/server@1.1.0
  - @modern-js/plugin@1.1.0
  - @modern-js/types@1.1.0
  - @modern-js/utils@1.1.0

## 1.0.0

### Patch Changes

- 224f7fe: fix server route match
- 30ac27c: feat: add generator package description
- 0fd196e: feat: fix bugs
- 204c626: feat: initial
- 63be0a5: fix: #118 #104
- Updated dependencies [224f7fe]
- Updated dependencies [30ac27c]
- Updated dependencies [0fd196e]
- Updated dependencies [204c626]
- Updated dependencies [63be0a5]
  - @modern-js/core@1.0.0
  - @modern-js/i18n-cli-language-detector@1.0.0
  - @modern-js/plugin-analyze@1.0.0
  - @modern-js/plugin-fast-refresh@1.0.0
  - @modern-js/plugin-i18n@1.0.0
  - @modern-js/webpack@1.0.0
  - @modern-js/new-action@1.0.0
  - @modern-js/plugin-polyfill@1.0.0
  - @modern-js/server@1.0.0
  - @modern-js/plugin@1.0.0
  - @modern-js/types@1.0.0
  - @modern-js/utils@1.0.0

## 1.0.0-rc.23

### Patch Changes

- 224f7fe: fix server route match
- 30ac27c: feat: add generator package description
- 0fd196e: feat: fix bugs
- 204c626: feat: initial
- 63be0a5: fix: #118 #104
- Updated dependencies [224f7fe]
- Updated dependencies [30ac27c]
- Updated dependencies [0fd196e]
- Updated dependencies [204c626]
- Updated dependencies [63be0a5]
  - @modern-js/core@1.0.0-rc.23
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.23
  - @modern-js/plugin-analyze@1.0.0-rc.23
  - @modern-js/plugin-fast-refresh@1.0.0-rc.23
  - @modern-js/plugin-i18n@1.0.0-rc.23
  - @modern-js/webpack@1.0.0-rc.23
  - @modern-js/new-action@1.0.0-rc.23
  - @modern-js/plugin-polyfill@1.0.0-rc.23
  - @modern-js/server@1.0.0-rc.23
  - @modern-js/plugin@1.0.0-rc.23
  - @modern-js/types@1.0.0-rc.23
  - @modern-js/utils@1.0.0-rc.23

## 1.0.0-rc.22

### Patch Changes

- 224f7fe: fix server route match
- 30ac27c: feat: add generator package description
- 0fd196e: feat: fix bugs
- 204c626: feat: initial
- 63be0a5: fix: #118 #104
- Updated dependencies [224f7fe]
- Updated dependencies [30ac27c]
- Updated dependencies [0fd196e]
- Updated dependencies [204c626]
- Updated dependencies [63be0a5]
  - @modern-js/core@1.0.0-rc.22
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.22
  - @modern-js/plugin-analyze@1.0.0-rc.22
  - @modern-js/plugin-fast-refresh@1.0.0-rc.22
  - @modern-js/plugin-i18n@1.0.0-rc.22
  - @modern-js/webpack@1.0.0-rc.22
  - @modern-js/new-action@1.0.0-rc.22
  - @modern-js/plugin-polyfill@1.0.0-rc.22
  - @modern-js/server@1.0.0-rc.22
  - @modern-js/plugin@1.0.0-rc.22
  - @modern-js/types@1.0.0-rc.22
  - @modern-js/utils@1.0.0-rc.22

## 1.0.0-rc.21

### Patch Changes

- 224f7fe: fix server route match
- 30ac27c: feat: add generator package description
- 0fd196e: feat: fix bugs
- 204c626: feat: initial
- 63be0a5: fix: #118 #104
- Updated dependencies [224f7fe]
- Updated dependencies [30ac27c]
- Updated dependencies [0fd196e]
- Updated dependencies [204c626]
- Updated dependencies [63be0a5]
  - @modern-js/core@1.0.0-rc.21
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.21
  - @modern-js/plugin-analyze@1.0.0-rc.21
  - @modern-js/plugin-fast-refresh@1.0.0-rc.21
  - @modern-js/plugin-i18n@1.0.0-rc.21
  - @modern-js/webpack@1.0.0-rc.21
  - @modern-js/new-action@1.0.0-rc.21
  - @modern-js/plugin-polyfill@1.0.0-rc.21
  - @modern-js/server@1.0.0-rc.21
  - @modern-js/plugin@1.0.0-rc.21
  - @modern-js/types@1.0.0-rc.21
  - @modern-js/utils@1.0.0-rc.21

## 1.0.0-rc.20

### Patch Changes

- 224f7fe: fix server route match
- 30ac27c: feat: add generator package description
- feat: fix bugs
- 204c626: feat: initial
- 63be0a5: fix: #118 #104
- Updated dependencies [224f7fe]
- Updated dependencies [30ac27c]
- Updated dependencies [undefined]
- Updated dependencies [204c626]
- Updated dependencies [63be0a5]
  - @modern-js/core@1.0.0-rc.20
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.20
  - @modern-js/plugin-analyze@1.0.0-rc.20
  - @modern-js/plugin-fast-refresh@1.0.0-rc.20
  - @modern-js/plugin-i18n@1.0.0-rc.20
  - @modern-js/webpack@1.0.0-rc.20
  - @modern-js/new-action@1.0.0-rc.20
  - @modern-js/plugin-polyfill@1.0.0-rc.20
  - @modern-js/server@1.0.0-rc.20
  - @modern-js/plugin@1.0.0-rc.20
  - @modern-js/types@1.0.0-rc.20
  - @modern-js/utils@1.0.0-rc.20

## 1.0.0-rc.19

### Patch Changes

- 224f7fe: fix server route match
- 30ac27c: feat: add generator package description
- 204c626: feat: initial
- 63be0a5: fix: #118 #104
- Updated dependencies [224f7fe]
- Updated dependencies [30ac27c]
- Updated dependencies [204c626]
- Updated dependencies [63be0a5]
  - @modern-js/core@1.0.0-rc.19
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.19
  - @modern-js/plugin-analyze@1.0.0-rc.19
  - @modern-js/plugin-fast-refresh@1.0.0-rc.19
  - @modern-js/plugin-i18n@1.0.0-rc.19
  - @modern-js/webpack@1.0.0-rc.19
  - @modern-js/new-action@1.0.0-rc.19
  - @modern-js/plugin-polyfill@1.0.0-rc.19
  - @modern-js/server@1.0.0-rc.19
  - @modern-js/plugin@1.0.0-rc.19
  - @modern-js/types@1.0.0-rc.19
  - @modern-js/utils@1.0.0-rc.19

## 1.0.0-rc.18

### Patch Changes

- 224f7fe: fix server route match
- 30ac27c: feat: add generator package description
- 204c626: feat: initial
- 63be0a5: fix: #118 #104
- Updated dependencies [224f7fe]
- Updated dependencies [30ac27c]
- Updated dependencies [204c626]
- Updated dependencies [63be0a5]
  - @modern-js/core@1.0.0-rc.18
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.18
  - @modern-js/plugin-analyze@1.0.0-rc.18
  - @modern-js/plugin-fast-refresh@1.0.0-rc.18
  - @modern-js/plugin-i18n@1.0.0-rc.18
  - @modern-js/webpack@1.0.0-rc.18
  - @modern-js/new-action@1.0.0-rc.18
  - @modern-js/plugin-polyfill@1.0.0-rc.18
  - @modern-js/server@1.0.0-rc.18
  - @modern-js/plugin@1.0.0-rc.18
  - @modern-js/types@1.0.0-rc.18
  - @modern-js/utils@1.0.0-rc.18

## 1.0.0-rc.17

### Patch Changes

- 224f7fe: fix server route match
- 30ac27c: feat: add generator package description
- 204c626: feat: initial
- fix: #118 #104
- Updated dependencies [224f7fe]
- Updated dependencies [30ac27c]
- Updated dependencies [204c626]
- Updated dependencies [undefined]
  - @modern-js/core@1.0.0-rc.17
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.17
  - @modern-js/plugin-analyze@1.0.0-rc.17
  - @modern-js/plugin-fast-refresh@1.0.0-rc.17
  - @modern-js/plugin-i18n@1.0.0-rc.17
  - @modern-js/webpack@1.0.0-rc.17
  - @modern-js/new-action@1.0.0-rc.17
  - @modern-js/plugin-polyfill@1.0.0-rc.17
  - @modern-js/server@1.0.0-rc.17
  - @modern-js/plugin@1.0.0-rc.17
  - @modern-js/types@1.0.0-rc.17
  - @modern-js/utils@1.0.0-rc.17

## 1.0.0-rc.16

### Patch Changes

- 224f7fe: fix server route match
- 30ac27c: feat: add generator package description
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [30ac27c]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.16
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.16
  - @modern-js/plugin-analyze@1.0.0-rc.16
  - @modern-js/plugin-fast-refresh@1.0.0-rc.16
  - @modern-js/plugin-i18n@1.0.0-rc.16
  - @modern-js/webpack@1.0.0-rc.16
  - @modern-js/new-action@1.0.0-rc.16
  - @modern-js/plugin-polyfill@1.0.0-rc.16
  - @modern-js/server@1.0.0-rc.16
  - @modern-js/plugin@1.0.0-rc.16
  - @modern-js/types@1.0.0-rc.16
  - @modern-js/utils@1.0.0-rc.16

## 1.0.0-rc.15

### Patch Changes

- 224f7fe: fix server route match
- 30ac27c: feat: add generator package description
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [30ac27c]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.15
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.15
  - @modern-js/plugin-analyze@1.0.0-rc.15
  - @modern-js/plugin-fast-refresh@1.0.0-rc.15
  - @modern-js/plugin-i18n@1.0.0-rc.15
  - @modern-js/webpack@1.0.0-rc.15
  - @modern-js/new-action@1.0.0-rc.15
  - @modern-js/plugin-polyfill@1.0.0-rc.15
  - @modern-js/server@1.0.0-rc.15
  - @modern-js/plugin@1.0.0-rc.15
  - @modern-js/types@1.0.0-rc.15
  - @modern-js/utils@1.0.0-rc.15

## 1.0.0-rc.14

### Patch Changes

- 224f7fe: fix server route match
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.14
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.14
  - @modern-js/plugin-analyze@1.0.0-rc.14
  - @modern-js/plugin-fast-refresh@1.0.0-rc.14
  - @modern-js/plugin-i18n@1.0.0-rc.14
  - @modern-js/webpack@1.0.0-rc.14
  - @modern-js/new-action@1.0.0-rc.14
  - @modern-js/plugin-polyfill@1.0.0-rc.14
  - @modern-js/server@1.0.0-rc.14
  - @modern-js/plugin@1.0.0-rc.14
  - @modern-js/types@1.0.0-rc.14
  - @modern-js/utils@1.0.0-rc.14

## 1.0.0-rc.13

### Patch Changes

- 224f7fe: fix server route match
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.13
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.13
  - @modern-js/plugin-analyze@1.0.0-rc.13
  - @modern-js/plugin-fast-refresh@1.0.0-rc.13
  - @modern-js/plugin-i18n@1.0.0-rc.13
  - @modern-js/webpack@1.0.0-rc.13
  - @modern-js/new-action@1.0.0-rc.13
  - @modern-js/plugin-polyfill@1.0.0-rc.13
  - @modern-js/server@1.0.0-rc.13
  - @modern-js/plugin@1.0.0-rc.13
  - @modern-js/types@1.0.0-rc.13
  - @modern-js/utils@1.0.0-rc.13

## 1.0.0-rc.12

### Patch Changes

- 224f7fe: fix server route match
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.12
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.12
  - @modern-js/plugin-analyze@1.0.0-rc.12
  - @modern-js/plugin-fast-refresh@1.0.0-rc.12
  - @modern-js/plugin-i18n@1.0.0-rc.12
  - @modern-js/webpack@1.0.0-rc.12
  - @modern-js/new-action@1.0.0-rc.12
  - @modern-js/plugin-polyfill@1.0.0-rc.12
  - @modern-js/server@1.0.0-rc.12
  - @modern-js/plugin@1.0.0-rc.12
  - @modern-js/types@1.0.0-rc.12
  - @modern-js/utils@1.0.0-rc.12

## 1.0.0-rc.11

### Patch Changes

- 224f7fe: fix server route match
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.11
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.11
  - @modern-js/plugin-analyze@1.0.0-rc.11
  - @modern-js/plugin-fast-refresh@1.0.0-rc.11
  - @modern-js/plugin-i18n@1.0.0-rc.11
  - @modern-js/webpack@1.0.0-rc.11
  - @modern-js/new-action@1.0.0-rc.11
  - @modern-js/plugin-polyfill@1.0.0-rc.11
  - @modern-js/server@1.0.0-rc.11
  - @modern-js/plugin@1.0.0-rc.11
  - @modern-js/types@1.0.0-rc.11
  - @modern-js/utils@1.0.0-rc.11

## 1.0.0-rc.10

### Patch Changes

- 224f7fe: fix server route match
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.10
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.10
  - @modern-js/plugin-analyze@1.0.0-rc.10
  - @modern-js/plugin-fast-refresh@1.0.0-rc.10
  - @modern-js/plugin-i18n@1.0.0-rc.10
  - @modern-js/webpack@1.0.0-rc.10
  - @modern-js/new-action@1.0.0-rc.10
  - @modern-js/plugin-polyfill@1.0.0-rc.10
  - @modern-js/server@1.0.0-rc.10
  - @modern-js/plugin@1.0.0-rc.10
  - @modern-js/types@1.0.0-rc.10
  - @modern-js/utils@1.0.0-rc.10

## 1.0.0-rc.9

### Patch Changes

- 224f7fe: fix server route match
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.9
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.9
  - @modern-js/plugin-analyze@1.0.0-rc.9
  - @modern-js/plugin-fast-refresh@1.0.0-rc.9
  - @modern-js/plugin-i18n@1.0.0-rc.9
  - @modern-js/webpack@1.0.0-rc.9
  - @modern-js/new-action@1.0.0-rc.9
  - @modern-js/plugin-polyfill@1.0.0-rc.9
  - @modern-js/server@1.0.0-rc.9
  - @modern-js/plugin@1.0.0-rc.9
  - @modern-js/types@1.0.0-rc.9
  - @modern-js/utils@1.0.0-rc.9

## 1.0.0-rc.8

### Patch Changes

- 224f7fe: fix server route match
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.8
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.8
  - @modern-js/plugin-analyze@1.0.0-rc.8
  - @modern-js/plugin-fast-refresh@1.0.0-rc.8
  - @modern-js/plugin-i18n@1.0.0-rc.8
  - @modern-js/webpack@1.0.0-rc.8
  - @modern-js/new-action@1.0.0-rc.8
  - @modern-js/plugin-polyfill@1.0.0-rc.8
  - @modern-js/server@1.0.0-rc.8
  - @modern-js/plugin@1.0.0-rc.8
  - @modern-js/types@1.0.0-rc.8
  - @modern-js/utils@1.0.0-rc.8

## 1.0.0-rc.7

### Patch Changes

- 224f7fe: fix server route match
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.7
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.7
  - @modern-js/plugin-analyze@1.0.0-rc.7
  - @modern-js/plugin-fast-refresh@1.0.0-rc.7
  - @modern-js/plugin-i18n@1.0.0-rc.7
  - @modern-js/webpack@1.0.0-rc.7
  - @modern-js/new-action@1.0.0-rc.7
  - @modern-js/plugin-polyfill@1.0.0-rc.7
  - @modern-js/server@1.0.0-rc.7
  - @modern-js/plugin@1.0.0-rc.7
  - @modern-js/types@1.0.0-rc.7
  - @modern-js/utils@1.0.0-rc.7

## 1.0.0-rc.6

### Patch Changes

- 224f7fe: fix server route match
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.6
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.6
  - @modern-js/plugin-analyze@1.0.0-rc.6
  - @modern-js/plugin-fast-refresh@1.0.0-rc.6
  - @modern-js/plugin-i18n@1.0.0-rc.6
  - @modern-js/webpack@1.0.0-rc.6
  - @modern-js/new-action@1.0.0-rc.6
  - @modern-js/plugin-polyfill@1.0.0-rc.6
  - @modern-js/server@1.0.0-rc.6
  - @modern-js/plugin@1.0.0-rc.6
  - @modern-js/types@1.0.0-rc.6
  - @modern-js/utils@1.0.0-rc.6

## 1.0.0-rc.5

### Patch Changes

- 224f7fe: fix server route match
- 204c626: feat: initial
- Updated dependencies [224f7fe]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.5
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.5
  - @modern-js/plugin-analyze@1.0.0-rc.5
  - @modern-js/plugin-fast-refresh@1.0.0-rc.5
  - @modern-js/plugin-i18n@1.0.0-rc.5
  - @modern-js/webpack@1.0.0-rc.5
  - @modern-js/new-action@1.0.0-rc.5
  - @modern-js/plugin-polyfill@1.0.0-rc.5
  - @modern-js/server@1.0.0-rc.5
  - @modern-js/plugin@1.0.0-rc.5
  - @modern-js/types@1.0.0-rc.5
  - @modern-js/utils@1.0.0-rc.5

## 1.0.0-rc.4

### Patch Changes

- fix server route match
- 204c626: feat: initial
- Updated dependencies [undefined]
- Updated dependencies [204c626]
  - @modern-js/core@1.0.0-rc.4
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.4
  - @modern-js/plugin-analyze@1.0.0-rc.4
  - @modern-js/plugin-fast-refresh@1.0.0-rc.4
  - @modern-js/plugin-i18n@1.0.0-rc.4
  - @modern-js/webpack@1.0.0-rc.4
  - @modern-js/new-action@1.0.0-rc.4
  - @modern-js/plugin-polyfill@1.0.0-rc.4
  - @modern-js/server@1.0.0-rc.4
  - @modern-js/plugin@1.0.0-rc.4
  - @modern-js/types@1.0.0-rc.4
  - @modern-js/utils@1.0.0-rc.4

## 1.0.0-rc.3

### Patch Changes

- feat: initial
- Updated dependencies [undefined]
  - @modern-js/core@1.0.0-rc.3
  - @modern-js/i18n-cli-language-detector@1.0.0-rc.3
  - @modern-js/plugin-analyze@1.0.0-rc.3
  - @modern-js/plugin-fast-refresh@1.0.0-rc.3
  - @modern-js/plugin-i18n@1.0.0-rc.3
  - @modern-js/webpack@1.0.0-rc.3
  - @modern-js/new-action@1.0.0-rc.3
  - @modern-js/plugin-polyfill@1.0.0-rc.3
  - @modern-js/server@1.0.0-rc.3
  - @modern-js/plugin@1.0.0-rc.3
  - @modern-js/types@1.0.0-rc.3
  - @modern-js/utils@1.0.0-rc.3

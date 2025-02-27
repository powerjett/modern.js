# @modern-js/builder

## 2.13.2

### Patch Changes

- @modern-js/builder-shared@2.13.2
- @modern-js/utils@2.13.2

## 2.13.1

### Patch Changes

- @modern-js/builder-shared@2.13.1
- @modern-js/utils@2.13.1

## 2.13.0

### Patch Changes

- 1feacdc: feat(builder): support using RegExp to inline part of chunks

  feat(builder): 支持通过正则来内联部分资源

- 348306d: feat(builder): add html.scriptLoading config

  feat(builder): 新增 html.scriptLoading 配置

- 9c0572e: chore(builder): support get builder/shared compiled path in provider getCompiledPath api

  chore(builder): 支持通过 provider getCompiledPath api 获取 builder/shared 中预打包依赖路径

- Updated dependencies [1feacdc]
- Updated dependencies [384406c]
- Updated dependencies [c89de05]
- Updated dependencies [348306d]
- Updated dependencies [384e393]
- Updated dependencies [9c0572e]
  - @modern-js/builder-shared@2.13.0
  - @modern-js/utils@2.13.0

## 2.12.0

### Patch Changes

- Updated dependencies [c2ca6c8]
- Updated dependencies [6d86e34]
- Updated dependencies [fef3394]
  - @modern-js/utils@2.12.0
  - @modern-js/builder-shared@2.12.0

## 2.11.0

### Patch Changes

- cfb058f: fix(builder): remove duplicated babel-plugin-import

  fix(builder): 移除重复注册的 babel-plugin-import

- 55b07fd: feat(builder): support output.assetsRetry in rspack-provider

  feat(builder): 在 rspack-provider 中支持 output.assetsRetry 配置能力

- 8b90c79: fix(builder): should preserve viewBox when minify svg

  fix(builder): 修复压缩 svg 导致 viewBox 丢失的问题

- 3171c9d: feat(builder): print total file size after build

  feat(builder): 构建后输出文件体积的总和

- cd1040f: feat: use generated default config objects instead of global objects
  feat: 默认配置项使用动态生成替代全局对象
- b71cef1: feat(builder): support setting forceSplitting to be an object

  feat(builder): 支持将 forceSplitting 设置为一个对象

- Updated dependencies [adcedad]
- Updated dependencies [cfb058f]
- Updated dependencies [a9c6083]
- Updated dependencies [55b07fd]
- Updated dependencies [0bd018b]
- Updated dependencies [8b90c79]
- Updated dependencies [a8c08c3]
- Updated dependencies [3aa318d]
- Updated dependencies [5d624fd]
- Updated dependencies [e2466a1]
- Updated dependencies [53b0a63]
- Updated dependencies [02bb383]
- Updated dependencies [381a3b9]
- Updated dependencies [7a60f10]
- Updated dependencies [cd1040f]
- Updated dependencies [e262a99]
- Updated dependencies [b71cef1]
- Updated dependencies [274b2e5]
- Updated dependencies [b9e1c54]
  - @modern-js/builder-shared@2.11.0
  - @modern-js/utils@2.11.0

## 2.10.0

### Patch Changes

- Updated dependencies [a8db932]
- Updated dependencies [92d247f]
- Updated dependencies [0da32d0]
- Updated dependencies [0d9962b]
- Updated dependencies [fbefa7e]
- Updated dependencies [4d54233]
- Updated dependencies [6db4864]
  - @modern-js/builder-shared@2.10.0
  - @modern-js/utils@2.10.0

## 2.9.0

### Patch Changes

- f31a254d78: feat: improve vendor split chunk rule
  feat: 优化针对第三方库的拆包策略
- 1f047183c3: feat: enable svgo to avoid ID conflicts
  feat: 启用 svgo 以避免 ID 冲突
- da66232feb: fix: asset url using incorrect path seperator in windows

  fix: 修复 windows 中 asset url 使用错误的路径分隔符

  - @modern-js/builder-shared@2.9.0
  - @modern-js/utils@2.9.0

## 2.8.0

### Patch Changes

- bd369a89a4: fix(builder): failed to set CDN URL via html.tags

  fix(builder): 修复 html.tags 无法设置 CDN URL 的问题

- Updated dependencies [bd369a89a4]
- Updated dependencies [1104a9f18b]
- Updated dependencies [2c1151271d]
- Updated dependencies [481461a61d]
- Updated dependencies [1f6ca2c7fb]
  - @modern-js/builder-shared@2.8.0
  - @modern-js/utils@2.8.0

## 2.7.0

### Minor Changes

- dfece9dc1c: fix(builder): vendor library chunks include sources
  fix(builder): 用户源码被划分到第三方库所在 Chunk

### Patch Changes

- Updated dependencies [206c806efa]
- Updated dependencies [0f15fc597c]
- Updated dependencies [5f899af53a]
- Updated dependencies [dcad887024]
- Updated dependencies [a4672f7c16]
- Updated dependencies [ebe0d2dd6e]
- Updated dependencies [7fff9020e1]
- Updated dependencies [84bfb439b8]
  - @modern-js/builder-shared@2.7.0
  - @modern-js/utils@2.7.0

## 2.6.0

### Patch Changes

- 107f674: feat(builder): add dev.beforeStartUrl config

  feat(builder): 新增 dev.beforeStartUrl 配置项

- 0fe658a: feat(builder): support passing URL to html.favicon

  feat(builder): 支持在 html.favicon 中直接传入 URL

- Updated dependencies [b92d6db]
- Updated dependencies [e1f799e]
- Updated dependencies [107f674]
- Updated dependencies [7915ab3]
- Updated dependencies [03d7f7d]
- Updated dependencies [fae9d1b]
- Updated dependencies [0fe658a]
- Updated dependencies [62930b9]
  - @modern-js/builder-shared@2.6.0
  - @modern-js/utils@2.6.0

## 2.5.0

### Patch Changes

- 442204a: fix(builder): should not open startUrl multiple times

  fix(builder): 修复 startUrl 被重复打开的问题

- 30614fa: chore: modify package.json entry fields and build config
  chore: 更改 package.json entry 字段以及构建配置
- c4c10e7: refactor: refactor rules for static assets processing with rule.oneOf, reuse svg/font/image/media plugin

  refactor: 使用 oneOf 重构静态资源处理规则 & 复用 svg / font / media / img 插件

- Updated dependencies [58a9918]
- Updated dependencies [30614fa]
- Updated dependencies [c4c10e7]
- Updated dependencies [1b0ce87]
- Updated dependencies [11c053b]
- Updated dependencies [28e7dc6]
- Updated dependencies [40230b3]
  - @modern-js/builder-shared@2.5.0
  - @modern-js/utils@2.5.0

## 2.4.0

### Patch Changes

- 014d06b: feat: reuse bundleAnalyzer plugin, support performance.bundleAnalyze config in rspack-provider

  feat: 复用 bundleAnalyzer 插件，在 rspack-provider 中支持 performance.bundleAnalyze 配置项

- 91db54e: feat: use 'devtool: source-map' for ssr webpack bundle
  feat: 使用 'devtool: source-map' 作为 ssr 构建时的默认配置
- Updated dependencies [6f83037]
- Updated dependencies [014d06b]
- Updated dependencies [98a2733]
- Updated dependencies [a5572b8]
- Updated dependencies [a914be8]
- Updated dependencies [8c2db5f]
  - @modern-js/builder-shared@2.4.0
  - @modern-js/utils@2.4.0

## 2.3.0

### Minor Changes

- f9a26fe: fix(@modern-js/builder-shared): openBrowser add openChrome.applescript script

  fix(@modern-js/builder-shared): openBrowser 添加 openChrome.applescript 脚本

### Patch Changes

- 7cd8185: chore: reuse splitChunks plugin between rspack-provider and webpack-provider

  chore: 在 rspack-provider 和 webpack-provider 间复用 splitChunks plugin

- Updated dependencies [fd5a3ed]
- Updated dependencies [67ba34a]
- Updated dependencies [2ad9fdf]
- Updated dependencies [f9a26fe]
- Updated dependencies [6ca1c0b]
- Updated dependencies [89b6739]
  - @modern-js/utils@2.3.0
  - @modern-js/builder-shared@2.3.0

## 2.2.0

### Patch Changes

- d82b621: feat(builder): support port placeholder in dev.startUrl config

  feat(builder): 支持在 dev.startUrl 配置项中使用端口号占位符

- 16bdc0a: chore: adjust builder plugin name

  chore: 调整 builder 插件命名格式

- Updated dependencies [f2f8a83]
- Updated dependencies [49eff0c]
  - @modern-js/builder-shared@2.2.0
  - @modern-js/utils@2.2.0

## 2.1.0

### Patch Changes

- Updated dependencies [837620c]
- Updated dependencies [3ad26c2]
- Updated dependencies [5b54418]
- Updated dependencies [ccbac43]
- Updated dependencies [8a9482c]
- Updated dependencies [679296d]
  - @modern-js/utils@2.1.0
  - @modern-js/builder-shared@2.1.0

## 2.0.0

### Major Changes

Initial Release

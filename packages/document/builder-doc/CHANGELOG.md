# @modern-js/builder-doc

## 2.13.2

## 2.13.1

## 2.13.0

### Patch Changes

- 1feacdc: feat(builder): support using RegExp to inline part of chunks

  feat(builder): 支持通过正则来内联部分资源

- 348306d: feat(builder): add html.scriptLoading config

  feat(builder): 新增 html.scriptLoading 配置

- 42700c1: chore: improve ssr docs, add more use case for node/web code split
  chore: 优化 ssr 文档，为 node/web 代码分割添加更多使用场景

## 2.12.0

## 2.11.0

### Patch Changes

- a8c08c3: feat: 添加 `source.transformImoprt`

  feat: add `source.transformImoprt`

- b71cef1: feat(builder): support setting forceSplitting to be an object

  feat(builder): 支持将 forceSplitting 设置为一个对象

## 2.10.0

### Patch Changes

- cfdbf80: fix(builder): update source.define type and schema check in rspack-provider

  fix(builder): 更新 rspack-provider 中 source.define 的类型定义与校验

## 2.9.0

## 2.8.0

### Minor Changes

- 9736c6a43d: feat: enable swc css minify

  feat: 启用 swc css 压缩

### Patch Changes

- 2c1151271d: fix(builder): fix incorrect browserslist config

  fix(builder): 修复错误的 browserslist 配置

## 2.7.0

### Patch Changes

- 54caf43349: fix: performance.chunkSplit.strategy position

  fix: 修复 performance.chunkSplit.strategy 位置错误

## 2.6.0

### Minor Changes

- fae9d1b: feat(builder): support import .wasm assets

  feat(builder): 支持引用 .wasm 资源

### Patch Changes

- 88f7b34: fix(app-tools): incorrect tools.esbuild config

  fix(app-tools): 修复 tools.esbuild 格式与文档不一致的问题

- 107f674: feat(builder): add dev.beforeStartUrl config

  feat(builder): 新增 dev.beforeStartUrl 配置项

## 2.5.0

### Patch Changes

- c5ea222: feat(builder): support mergeConfig util in tools.webpack

  feat(builder): 支持在 tools.webpack 中使用 mergeConfig 工具函数

- 138a6b5: chore: update README and description of module-tools packages

  chore: 更新 module-tools 相关包的 README 和 description

## 2.4.0

### Patch Changes

- dfdd35a: docs: make v2 docs as default

  docs: 将 Modern.js v2 文档作为默认文档

- e787a45: feat: Add config to enable legacy decorator and 2 css-in-js plugins, update swc version

  feat: 以及 2 个 css-in-js 插件，升级 swc 版本

- ddc326a: feat: flatten mdx content

  feat: 对 mdx 的内容进行扁平化

## 2.3.0

### Patch Changes

- 01e4a27: feat(builder): improve error logs of syntax checker

  feat(builder): 优化 syntax 检查的错误日志

## 2.2.0

### Patch Changes

- d82b621: feat(builder): support port placeholder in dev.startUrl config

  feat(builder): 支持在 dev.startUrl 配置项中使用端口号占位符

- 9da67a2: docs(Builder): fix some keyword is replaced incorrectly

  docs(Builder): 修复个别关键词被错误替换的问题

- 16bdc0a: chore: adjust builder plugin name

  chore: 调整 builder 插件命名格式

## 2.1.0

### Minor Changes

- 8a9482c: feat(builder): add new option `html.tags` & `html.tagsByEntries`

  feat(builder): 添加新的配置项 `html.tags` 和 `html.tagsByEntries`

### Patch Changes

- 32b14f8: fix: fix doc description

  fix: 修复文档描述

- 837620c: fix: Disable detect tsconfig.json
  fix: 禁用探测 tsconfig.json
- 5b54418: fix(builder): no longer remove comments of HTML

  fix(builder): 不再默认移除 HTML 中的注释

- 6efa881: feat(doc-core): append main title as a suffix

  feat(doc-core): 将站点名称作为页面标题的后缀

## 2.0.0

### Major Changes

Initial Release

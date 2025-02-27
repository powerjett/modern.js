import { EN_US } from './enUS';

export const ZH_CN: Record<keyof typeof EN_US, string> = {
  introduction: '介绍',
  quickStart: '快速上手',

  // Slogans
  slogan: '基于 React 的渐进式 Web 开发框架',
  secondSlogan1: '享受愉悦的开发体验，',
  secondSlogan2: '让创新更快发生。',

  // Features
  feature1: 'Rust 构建',
  featureDesc1: '轻松切换到 Rspack 构建工具，编译飞快。',
  feature2: '一体化开发',
  featureDesc2: '在同一项目中完成 BFF 开发，享受简洁的函数调用。',
  feature3: '嵌套路由',
  featureDesc3: '文件系统即路由，附赠全套性能优化。',
  feature4: '多渲染模式',
  featureDesc4: 'SSR、SSG、SPR 等多种渲染模式，通通开箱即用。',
  feature5: 'CSS 方案',
  featureDesc5: 'CSS Modules、CSS-in-JS、TailwindCSS，任你挑选。',
  feature6: '易于配置',
  featureDesc6: '以零配置启动，然后一切皆可配置。',

  // Solutions
  solutions: '解决方案',
  solutionsDesc1: '基于 React 的渐进式 Web 开发框架。',
  solutionsDesc2: '简单、高性能的 npm 包开发方案。',
  solutionsDesc3: '现代文档站解决方案。',
  solutionsDesc4: '面向 Web 开发场景的构建引擎。',

  // Footer
  guide: '指南',
  topic: '专题',
  help: '帮助',
  coreConcept: '核心概念',
  basicFeatures: '基础功能',
  advancedFeatures: '进阶功能',
  configuration: '配置',
  command: '命令',
  runtime: '运行时',
  conventions: '目录约定',
  microFrontend: '微前端',
  stateManagement: '状态管理',
  pluginSystem: '插件系统',
  projectGenerator: '项目生成器',
  githubDiscussion: 'Github 讨论区',
  changelog: '更新日志',
};

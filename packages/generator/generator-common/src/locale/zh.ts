export const ZH_LOCALE = {
  solution: {
    self: '请选择你想创建的工程类型',
    mwa: '应用',
    module: '模块',
    monorepo: '项目组',
  },
  sub_solution: {
    self: '请选择你想创建的工程类型',
    mwa: '应用',
    mwa_test: '应用（测试）',
    module: '模块',
    inner_module: '模块（内部）',
  },
  action: {
    self: '请选择你想要的操作',
    function: {
      self: '启用可选功能',
      unbundle: '启用「Unbundle 开发」模式',
      tailwindcss: '启用 TailwindCSS 支持',
      less: '启用 Less 支持',
      sass: '启用 Sass 支持',
      bff: '启用「BFF」功能',
      micro_frontend: '启用「微前端」模式',
      electron: '启用「Electron」模式',
      i18n: '启用「国际化（i18n）」功能',
      test: '启用「单元测试 / 集成测试」功能',
      e2e_test: '启用「E2E 测试」功能',
      doc: '启用「文档站」功能',
      storybook: '启用 「Storybook」',
    },
    element: {
      self: '创建工程元素',
      entry: '新建「应用入口」',
      server: '新建「Server 自定义」源码目录',
      env: '生成「.env」文件',
    },
    refactor: {
      self: '自动重构',
      bff_to_app: 'BFF 切换框架模式',
    },
  },
  boolean: {
    yes: '是',
    no: '否',
  },
  language: {
    self: '请选择开发语言',
  },
  packageManager: {
    self: '请选择包管理工具',
  },
  runWay: {
    self: '是否需要支持以下类型应用',
    no: '不需要',
    electron: 'Electron',
  },
  needModifyConfig: {
    self: '是否需要调整默认配置?',
    enableLess: '是否启用 Less 支持?',
    enableSass: '是否启用 Sass 支持?',
  },
  entry: {
    name: '请填写入口名称',
    no_empty: '入口名称不能为空！',
    no_pages: '入口名称不支持 "pages"！',
    needModifyConfig: '是否需要调整默认配置?',
    disableStateManagement: '是否关闭「应用状态管理」功能?',
    clientRoute: {
      self: '请选择客户端路由方式',
      selfControlRoute: '启用自控路由',
      conventionalRoute: '启用约定式路由',
      no: '不启用',
    },
  },
  packageName: {
    self: '请填写项目名称',
    sub_name: '请填写子项目名称',
    no_empty: '项目名称不能为空！',
  },
  packagePath: {
    self: '请填写子项目目录名称',
    no_empty: '目录名称不能为空！',
    format:
      '目录名称只能使用小写字母、数字和分隔线（-）、下划线（_）和目录分隔符（/）',
  },
  module: {
    moduleContent: {
      self: '请选择模块内容',
      library: '工具库',
      component: 'UI 组件',
      model: '模型',
      Data: '数据',
    },
    libType: {
      self: '请选择代码用途',
      universal: 'Universal JS（既能在浏览器端运行，也能在服务器端运行）',
      browser: '专用于浏览器端的代码',
      nodejs: '专用于 Node.js 环境的代码',
    },
  },
  bff: {
    bffType: {
      self: 'BFF 类型',
      func: '函数模式',
      framework: '框架模式',
    },
    bffFramework: {
      self: '请选择你想使用的框架',
      egg: 'Egg',
      express: 'Express',
      koa: 'Koa',
      nest: 'Nest',
    },
  },
};
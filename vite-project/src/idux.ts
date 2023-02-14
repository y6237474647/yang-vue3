import { type App } from "vue";

// 示例导入的是 default 主题，如果需要使用其他主题或者定制主题，请参考定制主题的文档
// 如果需要 css 按需加载，移除下面 2 行代码
import "@idux/components/default.full.css";
import "@idux/pro/default.css";
// 如果需要 css 按需加载，则按需添加下面的代码
// import "@idux/cdk/index.css";
// import "@idux/components/style/core/reset.default.css";
// import "@idux/components/style/core/reset-scroll.default.css";

// 如果需要 js 按需加载，移除下面 3 行代码
import IduxCdk from "@idux/cdk";
import IduxComponents from "@idux/components";
import IduxPro from "@idux/pro";

import { createGlobalConfig } from "@idux/components/config";
import { IDUX_ICON_DEPENDENCIES, addIconDefinitions } from "@idux/components/icon";
// import { enUS } from "@idux/components/locales";

// 静态加载: `IDUX_ICON_DEPENDENCIES` 是 `@idux` 的部分组件默认所使用到图标，建议在此时静态引入。
addIconDefinitions(IDUX_ICON_DEPENDENCIES);

// 动态加载：不会被打包，可以减小包体积，需要加载的时候时候 http 请求加载
// 注意：请确认图标的 svg 资源被正确放入到 `public/idux-icons` 目录中, 可以参考下面的 vite 配置
const loadIconDynamically = (iconName: string) => {
  return fetch(`/idux-icons/${iconName}.svg`).then((res) => res.text());
};

const customConfig = { icon: { loadIconDynamically } }
// 如果是 seer 主题
// customConfig = merge(seerConfig, { icon: { loadIconDynamically } })
const globalConfig = createGlobalConfig(customConfig)

const install = (app: App): void => {
  app.use(IduxCdk).use(IduxComponents).use(IduxPro).use(globalConfig);
};

export default { install };
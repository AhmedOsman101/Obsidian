import DefaultTheme from "vitepress/theme-without-fonts";
import vitepressNprogress from "vitepress-plugin-nprogress";
import { EnhanceAppContext } from "vitepress/dist/client/index.js";

import "vitepress-plugin-nprogress/lib/css/index.css";
import "./main.css";

export default {
  ...DefaultTheme,
  enhanceApp: (ctx: EnhanceAppContext) => {
    vitepressNprogress(ctx);
  },
};

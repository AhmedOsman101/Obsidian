import { injectSpeedInsights } from "@vercel/speed-insights";
import type { EnhanceAppContext } from "vitepress/dist/client/index.js";
import DefaultTheme from "vitepress/theme-without-fonts";
import vitepressNprogress from "vitepress-plugin-nprogress";

import "vitepress-plugin-nprogress/lib/css/index.css";
import "./main.css";

export default {
  ...DefaultTheme,
  enhanceApp: (ctx: EnhanceAppContext) => {
    vitepressNprogress(ctx);
    injectSpeedInsights();
  },
};

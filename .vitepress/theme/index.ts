import type { EnhanceAppContext } from "vitepress/dist/client/index.js";
import DefaultTheme from "vitepress/theme-without-fonts";
import vitepressNprogress from "vitepress-plugin-nprogress";
import "vitepress-plugin-nprogress/lib/css/index.css";
import MyLayout from "./Layout.vue";
import "./main.css";
import "./layout.css";
export default {
...DefaultTheme,
Layout: MyLayout,
enhanceApp: (ctx: EnhanceAppContext) => {
vitepressNprogress(ctx);
},
};

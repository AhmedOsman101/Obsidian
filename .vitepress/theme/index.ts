// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme-without-fonts";
import { Theme } from "vitepress";

import "./my-fonts.css";
import "./center-images.css";

export default {
  extends: DefaultTheme,
} satisfies Theme;

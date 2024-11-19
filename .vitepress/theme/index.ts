// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme-without-fonts";
import { Theme } from "vitepress";
import "./main.css";

export default {
  extends: DefaultTheme,
} satisfies Theme;

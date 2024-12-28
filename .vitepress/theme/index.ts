import DefaultTheme from "vitepress/theme-without-fonts";
import ScriptX from "vue-scriptx";
import Ads from "vue-google-adsense";
import "./main.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(ScriptX);
    app.use(Ads.InArticleAdsense);
  },
};

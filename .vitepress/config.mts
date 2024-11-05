import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
// https://vitepress.dev/reference/site-config
// export default defineConfig({});

export default withMermaid({
  title: "Obsidian Notes",
  description: "A Website for all of my notes and thoughts",
  srcDir: "src",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  markdown: {
    image: {
      lazyLoading: true,
    },
    linkify: true,
    toc: {
      level: [2, 4],
    },
    math: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "College", link: "/College" },
      { text: "Courses", link: "/Courses" },
    ],

    sidebar: [
      {
        text: "Explore",
        items: [
          { text: "College", link: "/College" },
          { text: "Courses", link: "/Courses" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/AhmadOsman101/Obsidian",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/ahmad-ali-othman-5b503324a/",
      },
    ],
    outline: {
      level: [2, 4],
    },
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    theme: "neutral",
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {},
});

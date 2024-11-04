import { defineConfig } from "vitepress";
import markdownItMermaid from "markdown-it-mermaid";

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
    config: (md) => {
      md.use(markdownItMermaid);
      md.mermaid.loadPreferences({
        get: (key: string) => {
          if (key === "mermaid-theme") {
            return "neutral"; // setting a hypothetical neutral theme
          }
          return undefined;
        },
      });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Courses", link: "/Courses" },
      { text: "College", link: "/College" },
    ],

    sidebar: [
      {
        text: "Explore",
        items: [
          { text: "Courses", link: "/Courses" },
          { text: "College", link: "/College" },
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
});

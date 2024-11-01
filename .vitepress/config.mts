import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Obsidian Notes",
  description: "A Website for all of my notes and thoughts",
  srcDir: "src",
  markdown: {
    image: {
      lazyLoading: true, // image lazy loading is disabled by default
    },
    linkify: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Courses", link: "/Courses" },
      { text: "College", link: "/College" },
      { text: "Thoughts", link: "/Thoughts" },
    ],

    sidebar: [
      {
        text: "Explore",
        items: [
          { text: "Courses", link: "/Courses" },
          { text: "College", link: "/College" },
          { text: "Thoughts", link: "/Thoughts" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/AhmadOsman101/Obsidian" },
    ],
    outline: {
      level: [2, 3],
    },
  },
});

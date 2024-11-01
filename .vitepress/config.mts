import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Obsidian Notes",
  description: "A Website for all of my notes and thoughts",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Courses", link: "/courses" },
      { text: "College", link: "/college" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Courses", link: "/courses" },
          { text: "College", link: "/college" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/AhmadOsman101/Obsidian" },
    ],
  },
});

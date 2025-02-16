import { defineConfig } from "vitepress";
import { type UserConfig, withMermaid } from "vitepress-plugin-mermaid";
import { withSidebar } from "vitepress-sidebar";
import type { VitePressSidebarOptions } from "vitepress-sidebar/types";
// https://vitepress.dev/reference/site-config

const vitePressOptions: UserConfig = {
	title: "Othman Blog",
	description: "A Website for all of my notes and thoughts",
	srcDir: "src",
	lastUpdated: true,
	head: [["link", { rel: "icon", href: "/favicon.ico" }]],
	markdown: {
		theme: {
			dark: "github-dark",
			light: "catppuccin-latte",
		},
		breaks: true,
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
		search: {
			provider: "local",
		},
		outline: {
			level: [2, 4],
		},
		footer: {
			copyright: `Copyright © 2024-present <a href="https://github.com/AhmedOsman101">Ahmad Othman</a>`,
		},
		lastUpdated: {
			text: "Last updated",
			formatOptions: {
				dateStyle: "medium",
				timeStyle: "short",
			},
		},
		nav: [
			{ text: "Home", link: "/" },
			{ text: "College", link: "/College" },
			{ text: "Courses", link: "/Courses" },
			{ text: "General", link: "/General" },
			{ text: "Programming", link: "/Programming" },
		],

		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/AhmedOsman101/Obsidian",
			},
			{
				icon: "linkedin",
				link: "https://www.linkedin.com/in/ahmad-ali-othman-5b503324a/",
			},
		],
	},
	mermaid: {
		// refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
		theme: "neutral",
	},
	mermaidPlugin: {
		// optionally set additional config for plugin itself with MermaidPluginConfig
	},
};

const vitePressSidebarOptions: VitePressSidebarOptions = {
	documentRootPath: "/src",
	collapsed: true,
	capitalizeFirst: true,
	includeDotFiles: false,
	includeEmptyFolder: false,
	excludePattern: ["*draft.md"],
	hyphenToSpace: true,
	underscoreToSpace: true,
	includeRootIndexFile: false,
	includeFolderIndexFile: false,
	useTitleFromFileHeading: false,
	useTitleFromFrontmatter: true,
	useFolderLinkFromIndexFile: true,
	excludeFilesByFrontmatterFieldName: "ignore",
	frontmatterTitleFieldName: "title",
	useFolderTitleFromIndexFile: true,
};

export default defineConfig(
	withSidebar(withMermaid(vitePressOptions), vitePressSidebarOptions),
);

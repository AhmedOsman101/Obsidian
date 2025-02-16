import { withMermaid } from "vitepress-plugin-mermaid";
// https://vitepress.dev/reference/site-config

export default withMermaid({
	title: "Othman Blog",
	description: "A Website for all of my notes and thoughts",
	srcDir: "src",
	lastUpdated: true,
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		[
			"script",
			{
				async: "",
				src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2884049321298787",
				crossorigin: "anonymous",
			},
		],
		[
			"meta",
			{ name: "algolia-site-verification", content: "523F7DBEE71292A6" },
		],
	],
	markdown: {
		theme: {
			dark: "github-dark",
			light: "catppuccin-latte",
		},
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
			copyright:
				'Copyright © 2024-present <a href="https://github.com/AhmedOsman101">Ahmad Othman</a>',
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
		],

		sidebar: [
			{
				text: "Explore",
				items: [
					{
						text: "College",
						link: "/College",
						collapsed: true,
						items: [
							// Cybersecurity
							{
								text: "Intro to Cybersecurity",
								link: "/College/IntroToCyberSecurity",
								collapsed: true,
								items: [
									{
										text: "Lectures",
										link: "/College/IntroToCyberSecurity/Lectures",
									},
								],
							},
							// IT Essentials
							{
								text: "IT Essentials",
								link: "/College/IT-Essentials",
								collapsed: true,
								items: [
									{
										text: "Lectures",
										link: "/College/IT-Essentials/Lectures",
									},
									{
										text: "Sections",
										link: "/College/IT-Essentials/Sections",
									},
									{
										text: "Assignments (Tasks)",
										link: "/College/IT-Essentials/Assignments",
									},
									{
										text: "Exams",
										link: "/College/IT-Essentials/Exams",
									},
								],
							},
							// Python
							{
								text: "Python",
								link: "/College/Python",
								collapsed: true,
								items: [
									{
										text: "Lectures",
										link: "/College/Python/Lectures",
									},
									{
										text: "Sections",
										link: "/College/Python/Sections",
									},
									{
										text: "Assignments (Sheets)",
										link: "/College/Python/Assignments",
									},
									{
										text: "Exams",
										link: "/College/Python/Exams",
									},
								],
							},
							{
								text: "Math",
								link: "/College/Math",
								collapsed: true,
								items: [{ text: "Lectures", link: "/College/Math/Lectures" }],
							},
						],
					},
					{
						text: "Courses",
						link: "/Courses",
						collapsed: true,
						items: [
							{ text: "PHP Elzero", link: "/Courses/PHP-Elzero" },
							{ text: "Linux Crash Course", link: "/Courses/LinuxCrashCourse" },
							{
								text: "Laravel 10 - Database and Eloquent",
								link: "/Courses/Mastering_Laravel_10_Database_and_Eloquent",
							},
							{
								text: "Manara",
								link: "/Courses/Manara",
								collapsed: true,
								items: [
									{
										text: "Node JS",
										link: "/Courses/Manara/NodeJs/Chapters",
									},
								],
							},
						],
					},
					{ text: "General", link: "/General" },
				],
			},
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
	// optionally set additional config for plugin itself with MermaidPluginConfig
	mermaidPlugin: {},
});

var e = require("obsidian");
function t(e, t, i, s) {
	return new (i || (i = Promise))((n, a) => {
		function o(e) {
			try {
				d(s.next(e));
			} catch (e) {
				a(e);
			}
		}
		function l(e) {
			try {
				d(s.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function d(e) {
			var t;
			e.done
				? n(e.value)
				: ((t = e.value),
					t instanceof i
						? t
						: new i((e) => {
								e(t);
							})).then(o, l);
		}
		d((s = s.apply(e, t || [])).next());
	});
}
"function" == typeof SuppressedError && SuppressedError;
const i = {
	deleteOption: ".trash",
	logsModal: !0,
	excludedFolders: "",
	ribbonIcon: !1,
	excludeSubfolders: !1,
};
class s extends e.PluginSettingTab {
	constructor(e, t) {
		super(e, t), (this.plugin = t);
	}
	display() {
		const { containerEl: t } = this;
		t.empty(),
			t.createEl("h2", { text: "Clear Images Settings" }),
			new e.Setting(t)
				.setName("Ribbon Icon")
				.setDesc("Turn on if you want Ribbon Icon for clearing the images.")
				.addToggle((e) =>
					e.setValue(this.plugin.settings.ribbonIcon).onChange((e) => {
						(this.plugin.settings.ribbonIcon = e),
							this.plugin.saveSettings(),
							this.plugin.refreshIconRibbon();
					}),
				),
			new e.Setting(t)
				.setName("Delete Logs")
				.setDesc(
					"Turn off if you dont want to view the delete logs Modal to pop up after deletion is completed. It wont appear if no image is deleted",
				)
				.addToggle((e) =>
					e.setValue(this.plugin.settings.logsModal).onChange((e) => {
						(this.plugin.settings.logsModal = e), this.plugin.saveSettings();
					}),
				),
			new e.Setting(t)
				.setName("Deleted Image Destination")
				.setDesc(
					"Select where you want images to be moved once they are deleted",
				)
				.addDropdown((e) => {
					e.addOption("permanent", "Delete Permanently"),
						e.addOption(".trash", "Move to Obsidian Trash"),
						e.addOption("system-trash", "Move to System Trash"),
						e.setValue(this.plugin.settings.deleteOption),
						e.onChange((e) => {
							(this.plugin.settings.deleteOption = e),
								this.plugin.saveSettings();
						});
				}),
			new e.Setting(t)
				.setName("Excluded Folder Full Paths")
				.setDesc(
					"Provide the FULL path of the folder names (Case Sensitive) divided by comma (,) to be excluded from clearing. \n\t\t\t\t\ti.e. For images under Personal/Files/Zodiac -> Personal/Files/Zodiac should be used for exclusion",
				)
				.addTextArea((e) =>
					e.setValue(this.plugin.settings.excludedFolders).onChange((e) => {
						(this.plugin.settings.excludedFolders = e),
							this.plugin.saveSettings();
					}),
				),
			new e.Setting(t)
				.setName("Exclude Subfolders")
				.setDesc(
					"Turn on this option if you want to also exclude all subfolders of the folder paths provided above.",
				)
				.addToggle((e) =>
					e.setValue(this.plugin.settings.excludeSubfolders).onChange((e) => {
						(this.plugin.settings.excludeSubfolders = e),
							this.plugin.saveSettings();
					}),
				);
		const i = t.createDiv("coffee");
		i.addClass("oz-coffee-div");
		i.createEl("a", { href: "https://ko-fi.com/L3L356V6Q" }).createEl("img", {
			attr: { src: "https://cdn.ko-fi.com/cdn/kofi2.png?v=3" },
		}).height = 45;
	}
}
class n extends e.Modal {
	constructor(e, t) {
		super(t), (this.textToView = e);
	}
	onOpen() {
		const { contentEl: e } = this;
		const i = e.createEl("div");
		i.addClass("unused-images-center-wrapper");
		i.createEl("h1", { text: "Clear Unused Images - Logs" }).addClass(
			"modal-title",
		);
		const s = e.createEl("div");
		s.addClass("unused-images-logs"), (s.innerHTML = this.textToView);
		const n = e.createEl("div");
		n.addClass("unused-images-center-wrapper");
		const a = n.createEl("button", { text: "Close" });
		a.addClass("unused-images-button"),
			a.addEventListener("click", () => {
				this.close();
			});
	}
}
const a = (e, i, s) =>
		t(void 0, void 0, void 0, function* () {
			const t = [];
			void 0 === s && (s = yield i.vault.read(e));
			const n = s.match(/\[\[.*?\]\]/g);
			if (n) {
				const s = /(?<=\[\[).*?(?=(\]|\|))/;
				for (const a of n) {
					if (h(a)) {
						const s = u(a),
							n = i.metadataCache.getFirstLinkpathDest(s, e.path);
						if ("" !== s) {
							const i = {
								type: "wikiTransclusion",
								match: a,
								linkText: n ? n.path : s,
								sourceFilePath: e.path,
							};
							t.push(i);
							continue;
						}
					}
					const n = a.match(s);
					if (n) {
						if (n[0].startsWith("http")) continue;
						const s = i.metadataCache.getFirstLinkpathDest(n[0], e.path),
							o = {
								type: "wiki",
								match: a,
								linkText: s ? s.path : n[0],
								sourceFilePath: e.path,
							};
						t.push(o);
					}
				}
			}
			const a = s.match(/\[(^$|.*?)\]\((.*?)\)/g);
			if (a) {
				const s = /(?<=\().*(?=\))/;
				for (const n of a) {
					if (c(n)) {
						const s = u(n),
							a = i.metadataCache.getFirstLinkpathDest(s, e.path);
						if ("" !== s) {
							const i = {
								type: "mdTransclusion",
								match: n,
								linkText: a ? a.path : s,
								sourceFilePath: e.path,
							};
							t.push(i);
							continue;
						}
					}
					const a = n.match(s);
					if (a) {
						if (a[0].startsWith("http")) continue;
						const s = i.metadataCache.getFirstLinkpathDest(a[0], e.path),
							o = {
								type: "markdown",
								match: n,
								linkText: s ? s.path : a[0],
								sourceFilePath: e.path,
							};
						t.push(o);
					}
				}
			}
			return t;
		}),
	o = /\[\[(.*?)#.*?\]\]/,
	l = /(?<=\[\[)(.*)(?=#)/,
	d = /\[.*?]\((.*?)#.*?\)/,
	r = /(?<=\]\()(.*)(?=#)/,
	h = (e) => o.test(e),
	c = (e) => d.test(e),
	u = (e) => {
		const t = o.test(e),
			i = d.test(e);
		if (t || i) {
			const i = e.match(t ? l : r);
			if (i) return i[0];
		}
		return "";
	},
	g = /.*(jpe?g|png|gif|svg|bmp)/i,
	p = /!\[\[(.*?)\]\]/i,
	f = new Set(["jpeg", "jpg", "png", "gif", "svg", "bmp", "webp"]),
	m = (e, t) => {
		const i = e.vault.getFiles(),
			s = [];
		for (let e = 0; e < i.length; e++)
			["md", "canvas"].includes(i[e].extension) ||
				((f.has(i[e].extension.toLowerCase()) || "all" === t) && s.push(i[e]));
		return s;
	},
	v = (e) =>
		t(void 0, void 0, void 0, function* () {
			var t = new Set(),
				i = e.metadataCache.resolvedLinks;
			if (i)
				for (const [e, s] of Object.entries(i))
					for (const [s, n] of Object.entries(i[e]))
						s.endsWith(".md") || t.add(s);
			const s = e.vault.getFiles();
			for (let i = 0; i < s.length; i++) {
				const n = s[i];
				if ("md" === n.extension) {
					const i = e.metadataCache.getFileCache(n);
					if (i.frontmatter) {
						const s = i.frontmatter;
						for (const i of Object.keys(s))
							if ("string" == typeof s[i])
								if (s[i].match(p)) {
									const a = s[i].match(p)[1],
										o = e.metadataCache.getFirstLinkpathDest(a, n.path);
									o && w(t, o.path);
								} else b(s[i]) && w(t, s[i]);
					}
					const s = yield a(n, e);
					for (const e of s) w(t, e.linkText);
				} else if ("canvas" === n.extension) {
					const i = yield e.vault.cachedRead(n),
						s = JSON.parse(i);
					if (s.nodes && s.nodes.length > 0)
						for (const i of s.nodes)
							if ("file" === i.type) w(t, i.file);
							else if ("text" == i.type) {
								const s = yield a(n, e, i.text);
								for (const e of s) w(t, e.linkText);
							}
				}
			}
			return t;
		}),
	b = (e) => e.match(g),
	x = (e, t) => {
		var i = t.settings.excludedFolders,
			s = t.settings.excludeSubfolders;
		if ("" === i) return !1;
		var n = new Set(i.split(",").map((e) => e.trim()));
		if (s)
			for (const t of n) {
				var a = new RegExp(t + ".*");
				if (e.parent.path.match(a)) return !0;
			}
		else if (n.has(e.parent.path)) return !0;
		return !1;
	},
	y = () =>
		new Date().toLocaleDateString("en-GB", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
		}),
	w = (e, t) => {
		e.has(t) || e.add(t);
	};
class C extends e.Plugin {
	constructor() {
		super(...arguments),
			(this.ribbonIconEl = void 0),
			(this.refreshIconRibbon = () => {
				var e;
				null === (e = this.ribbonIconEl) || void 0 === e || e.remove(),
					this.settings.ribbonIcon &&
						(this.ribbonIconEl = this.addRibbonIcon(
							"image-file",
							"Clear Unused Images",
							(e) => {
								this.clearUnusedAttachments("image");
							},
						));
			}),
			(this.clearUnusedAttachments = (i) =>
				t(this, void 0, void 0, function* () {
					var s,
						a,
						o,
						l = yield ((e, i) =>
							t(void 0, void 0, void 0, function* () {
								var t,
									s = m(e, i),
									n = [];
								return (
									(t = yield v(e)),
									s.forEach((e) => {
										t.has(e.path) || n.push(e);
									}),
									n
								);
							}))(this.app, i);
					if (l.length > 0) {
						let e = "";
						(e += `[+] ${y()}: Clearing started.</br>`),
							((s = l),
							(a = this),
							(o = this.app),
							t(void 0, void 0, void 0, function* () {
								var e = a.settings.deleteOption,
									t = 0;
								let i = "";
								for (const n of s)
									x(n, a)
										? console.log("File not referenced but excluded: " + n.path)
										: (".trash" === e
												? (yield o.vault.trash(n, !1),
													(i +=
														"[+] Moved to Obsidian Trash: " + n.path + "</br>"))
												: "system-trash" === e
													? (yield o.vault.trash(n, !0),
														(i +=
															"[+] Moved to System Trash: " + n.path + "</br>"))
													: "permanent" === e &&
														(yield o.vault.delete(n),
														(i +=
															"[+] Deleted Permanently: " + n.path + "</br>")),
											t++);
								return { deletedImages: t, textToView: i };
							})).then(({ deletedImages: t, textToView: i }) => {
								if (
									((e += i),
									(e +=
										"[+] " + t.toString() + " image(s) in total deleted.</br>"),
									(e += `[+] ${y()}: Clearing completed.`),
									this.settings.logsModal)
								) {
									new n(e, this.app).open();
								}
							});
					} else
						new e.Notice(
							`All ${"image" === i ? "images" : "attachments"} are used. Nothing was deleted.`,
						);
				}));
	}
	onload() {
		return t(this, void 0, void 0, function* () {
			console.log("Clear Unused Images plugin loaded..."),
				this.addSettingTab(new s(this.app, this)),
				yield this.loadSettings(),
				this.addCommand({
					id: "clear-images-obsidian",
					name: "Clear Unused Images",
					callback: () => this.clearUnusedAttachments("image"),
				}),
				this.addCommand({
					id: "clear-unused-attachments",
					name: "Clear Unused Attachments",
					callback: () => this.clearUnusedAttachments("all"),
				}),
				this.refreshIconRibbon();
		});
	}
	onunload() {
		console.log("Clear Unused Images plugin unloaded...");
	}
	loadSettings() {
		return t(this, void 0, void 0, function* () {
			this.settings = Object.assign({}, i, yield this.loadData());
		});
	}
	saveSettings() {
		return t(this, void 0, void 0, function* () {
			yield this.saveData(this.settings);
		});
	}
}
module.exports = C;

/* nosourcemap */

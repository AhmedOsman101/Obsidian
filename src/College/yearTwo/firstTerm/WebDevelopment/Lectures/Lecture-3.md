# Web Programming - Lecture 3

## Headings

- Use `<Hn>...</Hn>` where `n` ranges from `1` to `6` (or `7` in legacy HTML).
- `<H1>` is the largest heading; `<H6>` is the smallest.
- Follow hierarchical order for readability and SEO:
  - Use `<H1>` for main titles.
  - Use `<H2>` for subsections, etc.
  - Avoid skipping heading levels.

### Example

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

---

## Paragraphs

- Use `<p>...</p>` to define paragraphs.
- Text automatically wraps based on browser window width.
- Each paragraph starts on a new line.

### Example

```html
<h1>Heading 1</h1>
<p>Paragraph 1...</p>

<h2>Heading 2</h2>
<p>Paragraph 2...</p>
```

---

## Line Breaks (`<br>`)

- `<br>` creates a single line break.
- It's an **empty tag** (no closing tag).
- Useful for forcing breaks within a paragraph.

### Example

```html
<p>Paragraph 1,<br />Line 2<br />Line 3</p>
```

---

## Horizontal Rule (`<hr>`)

- Creates a horizontal line separator.
- No closing tag required.

### Common Attributes

| Attribute | Description                           | Default |
| --------- | ------------------------------------- | ------- |
| `size`    | Height in pixels                      | 2px     |
| `width`   | Width in pixels or percentage         | 100%    |
| `noshade` | Removes 3D shading                    | Not set |
| `align`   | Alignment (`left`, `center`, `right`) | Center  |
| `color`   | Rule color (IE 3+)                    | Not set |

### Example

```html
<hr size="4" color="#0000FF" width="80%" align="center" />
```

---

## Character Formatting

Enhances page readability and appearance.

### Common Elements

| Tag        | Effect                                               |
| ---------- | ---------------------------------------------------- |
| `<b>`      | Bold text                                            |
| `<i>`      | Italic text                                          |
| `<u>`      | Underlined text                                      |
| `<em>`     | Emphasis (italic by default)                         |
| `<strong>` | Strong emphasis (bold)                               |
| `<tt>`     | Monospaced / teletype text                           |
| `<cite>`   | Citation (italic, for titles/books)                  |
| `<pre>`    | Preformatted text (preserves spaces and line breaks) |

### Font Customization

```html
<font size="+2" color="#FF0000" face="Courier">Styled Text</font>
```

- `size`: 1–7 or relative (`+n` / `-n`)
- `color`: Named or hex code
- `face`: Font family

---

## Text Alignment

- The `align` attribute can be used with `<p>` or heading tags.
  Options: `left`, `right`, `center`.

### Example

```html
<h1 align="center">The New York Times</h1>
```

---

## Comments

- Add notes to the code that are **ignored by browsers**.
- Useful for developers and documentation.

### Syntax

```html
<!-- This is a comment -->
```

---

## The `<blink>` Tag (Deprecated)

- Makes text blink: `<blink>Text</blink>`
- **Not supported** in most modern browsers.
- Avoid using — it's distracting and non-standard.

---

## Page Formatting

| Attribute             | Description           |
| --------------------- | --------------------- |
| `BGCOLOR`             | Page background color |
| `TEXT`                | Default text color    |
| `<basefont size="n">` | Sets global font size |

### Example

```html
<body bgcolor="black" text="white">
  <basefont size="7">
  Page content here.
</body>
```

---

## Inserting Images

Use the `<img>` tag:

```html
<img src="image.jpg" width="300" height="200" border="2" />
```

### Common Attributes

| Attribute         | Description                             |
| ----------------- | --------------------------------------- |
| `src`             | Path to image file                      |
| `width`, `height` | Size of image                           |
| `border`          | Border thickness (px)                   |
| `alt`             | Alternate text for unsupported browsers |

### Example

```html
<img src="satellite.jpg" alt="Picture of satellite" />
```

---

## Hyperlinks

- Create clickable links using `<a href="URL">label</a>`.
- Links can navigate to:
  - Another web page
  - A section of the same page (anchor)
  - An email address

### Examples

```html
<a href="http://www.cnn.com">CNN</a>
<a href="mailto:ktdunn@mit.edu">Email Katie Dunn</a>
```

### Link Color Customization

Defined in `<body>` tag:

```html
<body link="#0000FF" vlink="#800080" alink="#FFFF00"></body>
```

| Attribute | Meaning                     | Default    |
| --------- | --------------------------- | ---------- |
| `link`    | Unvisited link color        | Blue       |
| `vlink`   | Visited link color          | Purple     |
| `alink`   | Active (clicked) link color | Red/Yellow |

---

## Anchors

Used to **jump** to specific sections within a page.

### Steps

1. **Create the anchor target:**

   ```html
   <a name="chapter2">Chapter 2</a>
   ```

2. **Link to the anchor:**

   ```html
   <a href="#chapter2">Go to Chapter 2</a>
   ```

### Example

```html
<a href="#chap2">Chapter Two</a><br />
<a name="chap2">Chapter 2</a>
```

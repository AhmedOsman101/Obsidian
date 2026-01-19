# HTML Text Formatting & Links Exam Summary

## 1. Headings

- `<Hn>...</Hn>` where n = 1 (largest) to 6/7 (smallest).
- Use in order (H1 -> H2 -> H3); do not skip levels.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
...
```

## 2. Paragraphs & Line Breaks

- `<P>...</P>` – creates a paragraph; auto‑wraps to window width.
- `<BR>` – line break (empty element, no closing tag).

## 3. Horizontal Rule (`<HR>`)

- Inserts a horizontal line.
- No closing tag.
- Attributes:
  - `SIZE` – height in pixels (default 2)
  - `WIDTH` – width in pixels or % (default 100%)
  - `NOSHADE` – flat look (default 3D)
  - `ALIGN` – left, center, right (default center)
  - `COLOR` – sets line color

## 4. Character Formatting

### Font Size & Color

- Absolute size: `<FONT SIZE=n>` (n = 1–7; normal = 3).
- Relative size: `<FONT SIZE="+2">` or `"-1"`.
- Color: `<FONT COLOR="#RRGGBB">...</FONT>`

### Style Tags

- `<B>Bold</B>`
- `<I>Italic</I>`
- `<U>Underline</U>`
- `<EM>Emphasis</EM>` (usually italic)
- `<STRONG>Strong</STRONG>` (usually bold)
- `<TT>Teletype</TT>` (monospaced font)
- `<CITE>Citation</CITE>` (italics, for titles)
- `<PRE>Preformatted</PRE>` – preserves spaces/line breaks, monospaced.

### Alignment

- Use `ALIGN` in `<P>` or `<Hn>` tags: `ALIGN=CENTER|LEFT|RIGHT`.

```html
<h1 align="CENTER">The New York Times</h1>
```

## 5. Document‑Wide Color & Font

- `<BODY BGCOLOR="color" TEXT="color">`
- `<BASEFONT SIZE=n>` – sets base text size.

Example:

```html
<body bgcolor="black" text="white">
  <basefont size="7"></basefont>
</body>
```

## 6. Images

- Insert: `<IMG SRC="image.ext">`
- Attributes: `WIDTH=n`, `HEIGHT=n`, `BORDER=n`.
- Alternate text: `<IMG SRC="satellite.jpg" ALT="Picture of satellite">`

## 7. Links

### Basic Link

```html
<a href="page.html">label</a>
```

- **Destination:** `HREF` value (URL or file).
- **Label:** clickable text.

### External & Email Links

```html
<a href="http://www.cnn.com">CNN</a> <a href="mailto:email_address">Label</a>
```

### Link Colors (in BODY tag)

- `LINK` – unvisited link (default blue).
- `VLINK` – visited link (default purple).
- `ALINK` – active link when clicked (default yellow).

## 8. Anchors (Internal Links)

Two‑step process:

1. **Create anchor** at destination:
   ```html
   <a name="anchor_name">label</a>
   ```
2. **Link to anchor**:
   ```html
   <a href="#anchor_name">label</a>
   ```

Example:

```html
<a href="#chap2">Chapter Two</a> <a name="chap2">Chapter 2</a>
```

## 9. Comments & Blink Tag

- Comment: `<!-- comment -->`
- Blink: `<BLINK>...</BLINK>` (use sparingly; not supported in IE).

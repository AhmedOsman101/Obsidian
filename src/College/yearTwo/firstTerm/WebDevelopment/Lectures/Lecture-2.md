# Web Programming - Lecture 2

## Creating a Basic Starting Document

- The **`<head>`** section contains metadata about the page.
- The **`<title>`** appears:
  - On the browser's top bar.
  - In bookmarks and favorites lists.
  - As part of search engine indexing.

- The title should be **descriptive and keyword-rich** for better SEO visibility.

## Setting Document Properties

- Document appearance is controlled via **attributes of the `<body>` tag**.
- Common customizable elements:
  - Page background color
  - Text color
  - Link colors (normal, visited, active states)

## Color Codes

- Colors are defined using **RGB hexadecimal codes**:
  Format: `#RRGGBB`
  - `RR` = red intensity
  - `GG` = green intensity
  - `BB` = blue intensity

- Example:
  `#00FF00` -> green (no red, full green, no blue)

---

### 16 Basic HTML Colors

| Color Name        | Hex Code  |
| ----------------- | --------- |
| White             | `#FFFFFF` |
| Black             | `#000000` |
| Red               | `#FF0000` |
| Green             | `#00FF00` |
| Blue              | `#0000FF` |
| Magenta           | `#FF00FF` |
| Cyan              | `#00FFFF` |
| Yellow            | `#FFFF00` |
| Aquamarine        | `#70DB93` |
| Baker's Chocolate | `#5C3317` |
| Violet            | `#9F5F9F` |
| Brass             | `#B5A642` |
| Copper            | `#B87333` |
| Pink              | `#FF6EC7` |
| Orange            | `#FF7F00` |

## The `<body>` Element

Defines overall **appearance and content rendering** of the page.

Common attributes:

- `TEXT="#RRGGBB"` – sets default text color
- `BGCOLOR="#RRGGBB"` – sets background color
- `LINK`, `VLINK`, `ALINK` – define link colors for different states
- `BACKGROUND="image.gif"` – sets a background image

---

### Background Color Example

```html
<body bgcolor="#FFFFFF"></body>
```

Displays a white background.

---

### Text Color Example

```html
<body bgcolor="#FFFFFF" text="#FF0000"></body>
```

Displays white background and red text.

---

### Link Color Attributes

| Attribute | Meaning               | Default Color |
| --------- | --------------------- | ------------- |
| `LINK`    | Unvisited link        | Blue          |
| `VLINK`   | Visited link          | Purple        |
| `ALINK`   | Active (clicked) link | Yellow        |

Example:

```html
<body
  bgcolor="#FFFFFF"
  text="#FF0000"
  link="#0000FF"
  vlink="#FF00FF"
  alink="#FFFF00"
></body>
```

---

### Background Image Example

```html
<body background="hi.gif" bgcolor="#FFFFFF"></body>
```

## Text Formatting in HTML

Text formatting requires explicit HTML tags—**WYSIWYG doesn't apply** directly.

| Tag    | Purpose         |
| ------ | --------------- |
| `<b>`  | Bold text       |
| `<i>`  | Italic text     |
| `<u>`  | Underlined text |
| `<p>`  | New paragraph   |
| `<br>` | Line break      |

## Changing the Font

```html
<font face="Arial">Text</font>
<font size="4">Text</font>
<font color="red">Text</font>
```

### Font Attributes

| Attribute | Description                                    |
| --------- | ---------------------------------------------- |
| `FACE`    | Defines the font family (e.g., Courier, Arial) |
| `SIZE`    | Sets font size (1–7, default = 3)              |
| `COLOR`   | Sets text color (name or hex code)             |

Example combining all:

```html
<font size="4" face="Courier" color="red">Formatted Text</font>
```

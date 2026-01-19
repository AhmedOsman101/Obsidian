# HTML Document Structure & Styling Exam Summary

## 1. Document Head & Title

- `<HEAD>` contains information about the document.
- `<TITLE>` appears in the browser's top line and is used for bookmarks/favorites.
- Title text should be descriptive for search engine indexing.

## 2. Document Properties (BODY Attributes)

Controlled via attributes of the `<BODY>` element for colors and background.

## 3. Color Codes

- Set using RGB hexadecimal values (`#RRGGBB`).
- Each 2‑digit section = amount of Red, Green, Blue (e.g., `#FF0000` = red).

### Basic Color Examples

| Color Name | Hex Code  | Color Name | Hex Code  |
| ---------- | --------- | ---------- | --------- |
| Aqua       | `#00FFFF` | Navy       | `#000080` |
| Black      | `#000000` | Olive      | `#808000` |
| Blue       | `#0000FF` | Purple     | `#800080` |
| Fuchsia    | `#FF00FF` | Red        | `#FF0000` |
| Gray       | `#808080` | Silver     | `#C0C0C0` |
| Green      | `#008000` | Teal       | `#008080` |
| Lime       | `#00FF00` | White      | `#FFFFFF` |
| Maroon     | `#800000` | Yellow     | `#FFFF00` |

Additional examples: Magenta=`#FF00FF`, Cyan=`#00FFFF`, Pink=`#FF6EC7`, Orange=`#FF7F00`.

## 4. BODY Element Attributes

### Background Color

```html
<body bgcolor="#FFFFFF"></body>
```

### Text Color

```html
<body bgcolor="#FFFFFF" text="#FF0000"></body>
```

- Default text color is black.

### Link Colors

- `LINK` – initial (default blue).
- `VLINK` – visited (default purple).
- `ALINK` – active when clicked (default yellow).

Example:

```html
<body
  bgcolor="#FFFFFF"
  text="#FF0000"
  link="#0000FF"
  vlink="#FF00FF"
  alink="#FF00"
></body>
```

### Background Image

```html
<body background="hi.gif" bgcolor="#FFFFFF"></body>
```

## 5. Text Formatting Tags

- `<B>Bold Face</B>`
- `<I>Italics</I>`
- `<U>Underline</U>`
- `<P>New Paragraph</P>`
- `<BR>` Next Line

## 6. Changing Font

- **Face:** `<FONT FACE="fontname">...</FONT>`
- **Size:** `<FONT SIZE=n>...</FONT>` (n = 1 to 7)
- **Color:** `<FONT COLOR="red">...</FONT>` or hex e.g., `#ffffff`
- **Combined:**

```html
<font size="4" face="Courier" color="red">...</font>
```


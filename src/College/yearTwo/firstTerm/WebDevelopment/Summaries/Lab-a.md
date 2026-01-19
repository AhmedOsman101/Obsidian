# HTML Basics (Lab‑1) Exam Summary

## 1. HTML Element Structure

- **Element:** Opening tag + content + closing tag.
- Example: `<p>My cat is very grumpy</p>`

## 2. Required Tools

- **Text editor**
- **Web browser** (e.g., Chrome, Firefox, Edge, Safari, IE, Opera, Yandex)

## 3. HTML Page Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h2>Heading Content</h2>
    <p>Paragraph Content</p>
  </body>
</html>
```

- `<!DOCTYPE html>` – document type declaration.
- `<html>` – root element.
- `<head>` – contains metadata (e.g., `<title>`).
- `<body>` – holds visible content.

## 4. Paragraphs

- Defined with `<p>` tag.

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

## 5. Headings

- `<h1>` to `<h6>`; `<h1>` = most important.

```html
<h1>My Head 1</h1>
<h2>My Head 2</h2>
<h3>My Head 3</h3>
<h4>My Head 4</h4>
<h5>My Head 5</h5>
<h6>My Head 6</h6>
```

## 6. Comments

- Syntax: `<!-- comment -->`
- Can hide content:

```html
<p>This is a paragraph.</p>
<!-- <p>This is another paragraph </p> -->
<p>This is a paragraph too.</p>
```

## 7. Font Tag Attributes

- `<font>` has three attributes:
  1. `color`
  2. `face` – font type
  3. `size`
- `&nbsp;` – non‑breaking space entity.

## 8. Horizontal Rule & Line Breaks

- `<hr>` – thematic break (horizontal line).
- `<br>` – line break (empty tag, no closing tag).

## 9. Text Formatting

- `<b>` – bold text (no extra importance).
- `<i>` – italic text (alternate voice/mood).

Example:

```html
<b>This text is bold</b>
<br />
<i>This text is italic</i>
```

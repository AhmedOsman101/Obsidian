# CSS (Cascade Style Sheet) - Lab Summary

## What is CSS?

- **CSS (Cascade Style Sheet):** A language used to define the presentation and visual style of a web page.

## CSS Syntax

```css
selector {
  property: value;
  property: value;
}
```

- **Selector:** The HTML element(s) to be styled (e.g., `h1`, `p`).
- **Declaration:** The styling rule inside the curly braces `{}`.
- **Property:** The specific style attribute to change (e.g., `color`, `text-align`).
- **Value:** The setting for the property (e.g., `red`, `center`).

**Example:**

```css
p {
  color: red;
  text-align: center;
}
```

## CSS Selectors

| Selector Type                 | Syntax              | Description                                        | Example                           |
| :---------------------------- | :------------------ | :------------------------------------------------- | :-------------------------------- |
| **ID Selector**               | `#idname`           | Selects the **single** element with `id="idname"`. | `#para1 { color: red; }`          |
| **Class Selector**            | `.classname`        | Selects **all** elements with `class="classname"`. | `.center { text-align: center; }` |
| **Class Selector (Specific)** | `element.classname` | Selects only `<element>` with `class="classname"`. | `p.center { color: red; }`        |
| **Universal Selector**        | `*`                 | Selects **all** HTML elements on the page.         | `* { text-align: center; }`       |
| **Grouping Selector**         | `sel1, sel2, sel3`  | Groups multiple selectors to apply the same style. | `h1, h2, p { color: red; }`       |

## Three Ways to Insert CSS

### 1. External CSS

- Style rules are defined in a separate `.css` file.
- Linked in the HTML `<head>` using a `<link>` tag.

**HTML:**

```html
<head>
  <link rel="stylesheet" href="mystyle.css" />
</head>
```

**mystyle.css:**

```css
body {
  background-color: lightblue;
}
h1 {
  color: navy;
}
```

### 2. Internal CSS

- Style rules are defined inside a `<style>` element within the HTML `<head>`.

**Example:**

```html
<head>
  <style>
    body {
      background-color: lightblue;
    }
    h1 {
      color: navy;
    }
  </style>
</head>
```

### 3. Inline CSS

- Style rules are applied directly to an individual element using its `style` attribute.

**Example:**

```html
<h1 style="color: navy; margin-left: 20px;">This is a heading</h1>
```

## CSS Comments

- Comments are ignored by the browser.
- Syntax: `/* This is a comment */`
- Can be single-line or multi-line.

**Example:**

```css
p {
  color: red; /* Set text color to red */
}
```

## CSS Colors & Backgrounds

### Applying Colors

- **Background Color:** `background-color: DodgerBlue;`
- **Text Color:** `color: blueviolet;`
- **Border Color:** `border: 2px solid Tomato;`

### Opacity

- Controls the transparency of an element.
- Value range: `0.0` (fully transparent) to `1.0` (fully opaque).
- **Property:** `opacity: 0.6;`

### Background Images

- **Add an image:** `background-image: url(images.jfif);`
- **Control repetition:**
  - `background-repeat: repeat-x;` (horizontal)
  - `background-repeat: repeat-y;` (vertical)
  - `background-repeat: no-repeat;` (once)
- **Set position:** `background-position: right top;`
- **Set attachment:** `background-attachment: fixed;` (fixed during scroll) or `scroll` (default).

**Example CSS for Background:**

```css
body {
  background-image: url(images.jfif);
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}
```

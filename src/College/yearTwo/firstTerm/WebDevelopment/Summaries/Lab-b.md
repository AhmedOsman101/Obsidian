# HTML Lists (Lab‑2) Exam Summary

## 1. List Types

1. **Unordered List** – bulleted (`<ul>`)
2. **Ordered List** – numbered (`<ol>`)
3. **Description List** – terms & descriptions (`<dl>`)

## 2. Unordered List (`<ul>`)

- Starts with `<ul>`; each item `<li>`.
- **`type` attribute** for bullet style:
  - `disc` ● (default)
  - `circle` ○
  - `square` ■

**Example:**

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

**Nesting Example:**

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>
    JavaScript
    <ul>
      <li>Vuejs</li>
      <li>Reactjs</li>
    </ul>
  </li>
</ul>
```

## 3. Ordered List (`<ol>`)

- Starts with `<ol>`; each item `<li>`.
- **`type` attribute** for numbering style:

| Type       | Description              |
| ---------- | ------------------------ |
| `type="1"` | Numbers (default)        |
| `type="A"` | Uppercase letters        |
| `type="a"` | Lowercase letters        |
| `type="I"` | Uppercase Roman numerals |
| `type="i"` | Lowercase Roman numerals |

- **`start="n"`** – starts counting from `n`.

**Examples:**

```html
<ol type="i">
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn js</li>
</ol>
```

Output: i. Learn HTML, ii. Learn CSS, iii. Learn js

```html
<ol start="4">
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn js</li>
</ol>
```

Output: 4. Learn HTML, 5. Learn CSS, 6. Learn js

**Nested Ordered List:**

```html
<ol>
  <li>first item</li>
  <li>
    second item
    <ol>
      <li>second item first subitem</li>
      <li>second item second subitem</li>
    </ol>
  </li>
  <li>third item</li>
</ol>
```

## 4. Description List (`<dl>`)

- Starts with `<dl>`.
- `<dt>` – term.
- `<dd>` – description.

**Example:**

```html
<dl>
  <dt>HTML</dt>
  <dd>Language of the web</dd>
  <dt>CSS</dt>
  <dd>Language of the visual</dd>
</dl>
```

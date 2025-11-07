# Web Programming - Lecture 4

## Lists in HTML

HTML provides several types of lists to organize content:

- **Ordered lists (numbered)**
- **Unordered lists (bulleted)**
- **Definition lists (term/description pairs)**
- **Nested lists (lists within lists)**

---

## Ordered Lists (`<ol>`)

Used for **numbered sequences** of items.

### Basic Syntax

```html
<ol>
  <li>This is step one.</li>
  <li>This is step two.</li>
  <li>This is step three.</li>
</ol>
```

**Output:**

1. This is step one.
2. This is step two.
3. This is step three.

---

### Numbering Styles (`type` Attribute)

| Type Value | Description              | Example    |
| ---------- | ------------------------ | ---------- |
| `1`        | Arabic numerals          | 1, 2, 3    |
| `a`        | Lowercase letters        | a, b, c    |
| `A`        | Uppercase letters        | A, B, C    |
| `i`        | Lowercase Roman numerals | i, ii, iii |
| `I`        | Uppercase Roman numerals | I, II, III |

### Example

```html
<ol type="A">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ol>
```

---

### Starting from a Specific Number (`start` Attribute)

```html
<ol type="i" start="3">
  <li>Item one</li>
</ol>
```

**Output:**
iii. Item one

---

## Unordered Lists (`<ul>`)

Used for **bulleted** lists of items.

### Basic Syntax

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

**Output:**

- First item
- Second item
- Third item

---

### Bullet Types (`type` Attribute)

| Type Value | Bullet Style           |
| ---------- | ---------------------- |
| `disc`     | Solid circle (default) |
| `circle`   | Hollow circle          |
| `square`   | Solid square           |

### Example

```html
<ul type="square">
  <li>Item one</li>
  <li>Item two</li>
</ul>
```

---

## Definition Lists (`<dl>`)

Used for defining **terms and descriptions** (like glossaries).

### Syntax

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

**Output:**

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>

---

## Nested Lists

Lists can be **nested** by placing one list inside another `<li>`.

### Example

```html
<ul type="square">
  <li>List item 1</li>
  <li>
    List item 2
    <ol type="i" start="3">
      <li>Nested item 1</li>
      <li>Nested item 2</li>
    </ol>
  </li>
  <li>List item 3</li>
</ul>
```

**Output:**

- List item 1
- List item 2
  1. Nested item 1
  2. Nested item 2

- List item 3

---

## Complex Example

### HTML Code

```html
<h1 align="center">Safety Tips for Canoeists</h1>
<ol type="a" start="2">
  <li>Be able to swim</li>
  <li>Wear a life jacket at all times</li>
  <li>
    Don't stand up or move around. If canoe tips:
    <ul>
      <li>Hang on to the canoe</li>
      <li>
        Use the canoe for support
        <ol type="I" start="4">
          <li>Be careful</li>
          <li>Do not look around</li>
        </ol>
      </li>
      <li>Swim to shore</li>
    </ul>
  </li>
  <li>Don't overexert yourself</li>
  <li>Use a bow light at night</li>
</ol>
```

---

### Output (Simplified View)

<center> **Safety Tips for Canoeists** </center>

b. Be able to swim
c. Wear a life jacket at all times
d. Don’t stand up or move around. If canoe tips:

- Hang on to the canoe
- Use the canoe for support
  Ⅳ. Be careful
  Ⅴ. Do not look around
- Swim to shore
  e. Don’t overexert yourself
  f. Use a bow light at night

---

### Summary of Key Points

- `<ol>` → Ordered list (numbered)
- `<ul>` → Unordered list (bulleted)
- `<dl>` → Definition list (term and description)
- `<li>` → List item
- `<dt>` → Definition term
- `<dd>` → Definition description
- `type` → Controls bullet/number style
- `start` → Controls starting number
- Lists can be **nested** for structured information.

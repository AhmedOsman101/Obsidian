# CSS Box Model & Display - Lab Summary

## CSS Box Model Components

### 1. Padding

- **Definition:** Space inside the element, **between** the content and the border.
- **Properties:**
  - `padding-top`, `padding-right`, `padding-bottom`, `padding-left`
  - Shorthand `padding` (1-4 values, clockwise: **top, right, bottom, left**)
- **Shorthand Examples:**
  ```css
  padding: 10px; /* All sides */
  padding: 10px 20px; /* top/bottom, right/left */
  padding: 10px 20px 15px; /* top, right/left, bottom */
  padding: 10px 20px 15px 5px; /* top, right, bottom, left */
  ```

### 2. Margin

- **Definition:** Space **outside** the element, between the element and surrounding elements.
- **Properties:** `margin-top`, `margin-right`, `margin-bottom`, `margin-left`
- Shorthand `margin` follows the same 1-4 value rule as `padding`.
- **Centering an element:** `margin-left: auto; margin-right: auto;`
- Can accept **negative values** (e.g., `margin: -20px;`).

### 3. Border

- **Definition:** Line surrounding the padding (reviewed in Lab 9).
- **Example:** `border: 10px solid red;`

### 4. Outline

- **Definition:** A line drawn **outside** the element's border. It does **not** affect the element's size/position (unlike border).
- **Example:** `outline: 10px solid blue;`

### Complete Box Model Example

```css
div {
  background-color: #ddd;
  width: 300px;
  padding: 10px; /* Inside space */
  border: 10px solid red; /* Border */
  outline: 10px solid blue; /* Outside line (no layout impact) */
}
```

## CSS `display` Property

### 1. Block Elements (e.g., `<div>`, `<h1>`, `<p>`)

- **Behavior:**
  - Take full available width (if no width is set).
  - **Add a line break** before and after.
  - **Respect all box model properties:** `width`, `height`, `padding`, `margin`.
- **Example:**
  ```css
  div {
    background-color: #eee;
    padding: 10px;
    margin: 10px;
    width: 300px; /* Respected */
    height: 60px; /* Respected */
  }
  ```

### 2. Inline Elements (e.g., `<span>`, `<a>`)

- **Behavior:**
  - **Do NOT add a line break.** Flow within text.
  - **Do NOT respect `width` and `height`.**
  - **Respect horizontal `padding` and `margin` (left/right) only.** Vertical padding/margin do not affect surrounding element layout.
  - Allow other elements before and after them on the same line.
- **Example:**
  ```css
  span {
    background-color: grey;
    padding: 10px; /* Visible, but vertical padding doesn't push other lines */
    /* width: 300px; IGNORED */
    /* height: 60px; IGNORED */
  }
  ```

### 3. Inline-Block Elements

- **Behavior:**
  - **Do NOT add a line break** (like `inline`).
  - **Respect `width`, `height`, `padding`, `margin`** (like `block`).
- **Created with:** `display: inline-block;`
- **Example:**
  ```css
  span {
    background-color: grey;
    display: inline-block;
    padding: 30px; /* Respected */
    margin: 30px; /* Respected */
    width: 300px; /* Respected */
    height: 60px; /* Respected */
  }
  ```

## CSS Height & Width Properties

| Property                  | Description                                                       |
| :------------------------ | :---------------------------------------------------------------- |
| `width`, `height`         | Sets a fixed dimension.                                           |
| `min-width`, `min-height` | Sets a **minimum** dimension. Element will be at least this size. |
| `max-width`, `max-height` | Sets a **maximum** dimension. Element will not exceed this size.  |
| `width: fit-content;`     | Width shrinks to fit the content's intrinsic size.                |

**Example:**

```css
div {
  background-color: red;
  padding: 10px;
  display: inline-block;
  min-width: 400px; /* At least 400px wide */
  max-width: 400px; /* At most 400px wide */
  min-height: 20px;
  max-height: 60px;
}
```

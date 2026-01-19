# CSS Borders - Lab Summary

## CSS Border Properties

CSS borders are defined using three main properties: **style**, **width**, and **color**.

## 1. `border-style`

- Specifies the type of line for the border.
- **Common Values:**
  - `solid` - A solid line.
  - `dashed` - A dashed line.
  - `dotted` - A dotted line.
  - `double` - Two parallel solid lines.
  - `none` - No border.

### Example: Different Border Styles

```css
h1.solid {
  border-style: solid;
}
h1.dashed {
  border-style: dashed;
}
h1.dotted {
  border-style: dotted;
}
h1.double {
  border-style: double;
}
h1.none {
  border-style: none;
}
```

## 2. `border-width`

- Specifies the thickness of the border.
- Can be set with **1 to 4 values** (following CSS shorthand rules for sides).

### `border-width` Syntax:

```css
/* One value: All four sides */
border-width: 5px;

/* Two values: top/bottom, right/left */
border-width: 5px 20px; /* 5px top & bottom, 20px right & left */

/* Four values: top, right, bottom, left (clockwise) */
border-width: 25px 10px 4px 35px;
/* 25px top, 10px right, 4px bottom, 35px left */
```

## 3. `border-color`

- Specifies the color of the border.
- Supports all CSS color formats (name, HEX, RGB, HSL).
- Can also be set with **1 to 4 values** to color each side differently.

### `border-color` Syntax:

```css
/* One color: All sides */
border-color: blue;

/* Four colors: top, right, bottom, left */
border-color: red green blue yellow;
```

## Combining Properties

These properties can be combined to create complex borders for each side.

### Example: Custom Borders per Side

```css
h1.double {
  border-style: dotted solid double dashed;
  border-width: 15px 10px 5px 20px;
  border-color: red green blue yellow;
  /* Top: dotted, red, 15px */
  /* Right: solid, green, 10px */
  /* Bottom: double, blue, 5px */
  /* Left: dashed, yellow, 20px */
}
```

## The Shorthand `border` Property

- Combines `width`, `style`, and `color` in one declaration.
- **Syntax:** `border: width style color;`

### Example: Shorthand Border

```css
h1.solid {
  border: 8px solid red;
  border-radius: 5px; /* Rounds the corners */
}
```

## Individual Side Borders

- Target specific sides using `border-top`, `border-right`, `border-bottom`, `border-left`.
- **Syntax:** `border-[side]: width style color;`

### Examples: Individual Side Borders

```css
h1.dashed {
  border-left: 6px solid red; /* Only a left border */
}
h1.dotted {
  border-bottom: 6px solid red; /* Only a bottom border */
}
```

## Complete Working Example

**HTML:**

```html
<h1 class="solid">Hello World!</h1>
<h1 class="dotted">Hello World!</h1>
<h1 class="dashed">Hello World!</h1>
<h1 class="double">Hello World!</h1>
```

**CSS (css.css):**

```css
h1.solid {
  border: 8px solid red;
  border-radius: 5px;
}
h1.dashed {
  border-left: 6px solid red;
}
h1.dotted {
  border-bottom: 6px solid red;
}
h1.double {
  border-style: dotted solid double dashed;
  border-width: 15px 10px 5px 20px;
  border-color: red green blue yellow;
}
```

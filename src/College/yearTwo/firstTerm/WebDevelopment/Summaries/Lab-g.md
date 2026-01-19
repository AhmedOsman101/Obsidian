# HTML Container Elements - Lab Summary

## `<section>` Tag

- **Definition:** The `<section>` tag defines a thematic section in a document.
- **Purpose:** Used to group related content, typically with a heading.

### Example: `<section>` Tag

```html
<section>
  <h2>WWF History</h2>
  <p>
    The World Wide Fund for Nature (WWF) is an international organization...
  </p>
</section>
<section>
  <h2>WWF's Symbol</h2>
  <p>The Panda has become the symbol of WWF...</p>
</section>
```

## `<div>` Tag (Container)

- **Definition:** The `<div>` tag is a generic container for flow content.
- **Purpose:** Used for grouping and styling blocks of content, especially with CSS. It has no inherent visual effect.
- **Key Attribute:** `style` for inline CSS (e.g., `style="background-color: red; text-align:center;"`).
- **Common Practice:** Often used with the `class` attribute (`class="Action"`) to apply styles via CSS.

### Example: `<div>` Tag for Styling

```html
<!-- Without div (inefficient styling) -->
<h1 style="background-color: red; text-align:center;">Book Store</h1>
<p style="background-color: red; text-align:center;">
  This is my book store welcome
</p>

<!-- With div (efficient styling) -->
<div style="background-color: red; text-align:center;">
  <h1>Book Store</h1>
  <p>This is my book store welcome</p>
</div>
```

### Example: Nested `<div>` Structure with Classes

```html
<div>
  <h1>Book Store</h1>
  <p>This is my book store welcome</p>
</div>
<div class="Action" style="background-color: red;">
  <div class="Book">
    <h3>Book Title</h3>
    <p>Book Description</p>
  </div>
  <!-- More .Book divs -->
</div>
<div class="Police" style="background-color:#4e342e">
  <div class="Book">
    <h3>Book Title</h3>
    <p>Book Description</p>
  </div>
  <!-- More .Book divs -->
</div>
```

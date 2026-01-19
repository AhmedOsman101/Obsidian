# HTML Images & Links (Lab‑3) Exam Summary

## 1. Images (`<img>`)

- Embeds an image; **empty tag** (no closing tag).
- **Required attributes:**
  1. `src` – image path/URL.
  2. `alt` – alternate text.
  3. `width` – width in pixels.
  4. `height` – height in pixels.

**Syntax:**

```html
<img src="url" alt="alternatetext" />
```

**Examples:**

```html
<img src="Flowers.jpg" alt="Flowers Image" />
<img src="Flowers.jpg" alt="Flowers image" width="200" height="200" />
```

- Can use external URLs:

```html
<img
  src="https://www.w3schools.com/images/w3schools_green.jpg"
  alt="W3Schools.com"
/>
```

## 2. Links (`<a>`)

- Defines a hyperlink.
- **Required attribute:** `href` – destination URL.

**Syntax:**

```html
<a href="url">link text</a>
```

### Target Attribute

- `target="_self"` – opens in same window/tab (default).
- `target="_blank"` – opens in new window/tab.

**Examples:**

```html
<a href="https://www.w3schools.com/">Visit W3Schools.com</a>
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools.com</a>
```

### Email Links

- Use `mailto:` in `href`:

```html
<a href="mailto:rana.9237.gabr@gmail.com">Send email</a>
```

### Title Attribute

- Adds tooltip text:

```html
<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section"
  >Visit our HTML Tutorial</a
>
```

## 3. Complete Task Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>I love HTML</title>
  </head>
  <body>
    <h1 align="center">HTML Practice Exercise</h1>
    <br />
    <img src="Images/Picture1.png" alt="Flowers Image" height="50" width="50" />
    <a href="https://www.google.com/" target="_blank">Google</a>
    <br />
    <hr />
    <p>I love <i>HTML</i> because:</p>
    <ol>
      <li>I learned it quickly</li>
      <li>I can make web pages using code</li>
      <li>It is fun</li>
    </ol>
    <hr />
    <p>
      My professor's e-mail address is
      <a href="mailto:rana.9237.gabr@gmail.com">Send email</a>
    </p>
    <h2>Have a great day!</h2>
  </body>
</html>
```

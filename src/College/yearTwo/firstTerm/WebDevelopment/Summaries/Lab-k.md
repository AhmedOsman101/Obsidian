# JavaScript Introduction - Lab Summary

## What is JavaScript?

- A **programming language**.
- Works on **client side** (browser) and **server side**.
- Makes web pages **interactive** and implements complex features.
- Can control multimedia, create web games, and build mobile apps.

## Where to Put JavaScript Code

### 1. In the `<head>` Section

```html
<head>
  <script src="main.js"></script>
  <!-- OR -->
  <script>
    function myFunction() {
      document.getElementById("demo").innerHTML = "Paragraph changed.";
    }
  </script>
</head>
```

### 2. In the `<body>` Section (Recommended)

- Placed before the closing `</body>` tag ensures the HTML is loaded before the script runs.

```html
<body>
  <h1>Page Title</h1>
  <script src="main.js"></script>
</body>
```

### 3. Using `window.onload`

- Ensures code runs only after the entire page loads.

```html
<head>
  <script src="main.js"></script>
</head>
```

**main.js:**

```javascript
window.onload = function () {
  document.querySelector("h1").style.color = "Blue";
};
```

## JavaScript Output Methods

| Method                 | Description                                                                  | Example                                              |
| :--------------------- | :--------------------------------------------------------------------------- | :--------------------------------------------------- |
| **`innerHTML`**        | Write into an HTML element.                                                  | `document.getElementById("demo").innerHTML = 5 + 6;` |
| **`document.write()`** | Write directly into the HTML output (⚠️ Overwrites page if used after load). | `document.write(5 + 6);`                             |
| **`window.alert()`**   | Display an alert box.                                                        | `window.alert(5 + 6);` or `alert(5 + 6);`            |
| **`console.log()`**    | Write to the browser console (for debugging).                                | `console.log(5 + 6);`                                |

### Print Page

- `window.print()` opens the browser's print dialog.

## Variables: var, let, const

| Keyword     | Scope              | Re-declare? | Re-assign? | Hoisting                                            |
| :---------- | :----------------- | :---------- | :--------- | :-------------------------------------------------- |
| **`var`**   | Function scope     | **Yes**     | Yes        | Yes (initialized as `undefined`)                    |
| **`let`**   | Block scope (`{}`) | **No**      | Yes        | Yes (but not initialized -> **Temporal Dead Zone**) |
| **`const`** | Block scope (`{}`) | **No**      | **No**     | Yes (but not initialized -> **Temporal Dead Zone**) |

### Examples & Key Behaviors:

**`var`** (Can be re-declared):

```javascript
var a = 1;
var a = 2; // Allowed
console.log(a); // 2
```

**`let`** (Cannot be re-declared in same scope):

```javascript
let a = 1;
let a = 2; // ❌ SyntaxError: Identifier 'a' has already been declared
console.log(a); // 1
```

**Hoisting Issue with `let`/`const`:**

```javascript
console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
let a = 1;
```

**`const`** (Must be assigned at declaration, cannot be re-assigned):

```javascript
const a = 1;
a = 2; // ❌ TypeError: Assignment to constant variable.
```

## Events

- Allow JavaScript to react to user actions (e.g., clicks).

### Inline Event Handler:

```html
<button onclick="document.getElementById('demo').innerHTML = Date()">
  The time is?
</button>
```

### Using `this` in Events:

```html
<button onclick="this.innerHTML = Date()">The time is?</button>
```

### Event Handler via JavaScript:

```html
<button id="demo">Click</button>
<script>
  document.getElementById("demo").onclick = function () {
    console.log(this); // 'this' refers to the button element
  };
</script>
```

### Calling a Function:

```html
<button onclick="displayDate()">The time is?</button>
<script>
  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
</script>
```

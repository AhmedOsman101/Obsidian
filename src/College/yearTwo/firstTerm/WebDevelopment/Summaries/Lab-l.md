# Web Programming 1 Lab 13: DOM

## What is DOM?

- **Document Object Model**
- Standard object model & programming interface for HTML.
- Defines:
  - HTML elements as **objects**
  - Properties of all HTML elements
  - Methods to access all HTML elements
  - Events for all HTML elements
- Allows getting, changing, adding, or deleting HTML elements.

## DOM Selectors (with Example HTML Structure)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Learn Javascript</title>
  </head>
  <body>
    <span class="my-span">My span</span>
    <p>Hello paragraph 1</p>
    <p>Hello paragraph 2</p>
    <div id="my-div">Hello div</div>
    <form action="">
      <input type="text" name="one" value="Hello" />
    </form>
    <form action="">
      <input type="text" name="two" value="Hello" />
    </form>
    <a href="https://google.com">Google</a>
    <a href="https://facebook.com">Facebook</a>
    <script src="main.js"></script>
  </body>
</html>
```

### 1. Find Element By ID

- Returns a **single element**.

```javascript
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);
```

### 2. Find Element By Tag Name

- Returns an **HTMLCollection** (array-like).

```javascript
let myTagElement = document.getElementsByTagName("p");
console.log(myTagElement);
console.log(myTagElement[0]);
```

- Can modify content:

```javascript
myTagElement[0].innerHTML = "Test";
```

### 3. Find Element By Class Name

- Returns an **HTMLCollection**.

```javascript
let myClassName = document.getElementsByClassName("my-span");
console.log(myClassName);
```

### 4. Find Element By CSS Selectors

- `querySelector()` returns the **first** matching element.
- `querySelectorAll()` returns a **NodeList** of all matches.

```javascript
let myQueryElement = document.querySelector(".special");
let myQueryAll = document.querySelectorAll(".my-span");
```

### 5. Find Element By Collection

- Pre-defined document collections:
  - `document.title`
  - `document.body`
  - `document.images`
  - `document.forms`
  - `document.links`

```javascript
console.log(document.title);
console.log(document.body);
console.log(document.forms);
console.log(document.forms[0].one.value); // Access form input value
console.log(document.links);
console.log(document.links[0].href); // Access link URL
```

## Key Differences Between Selectors

| Selector Method            | Returns                | Access              |
| -------------------------- | ---------------------- | ------------------- |
| `getElementById()`         | Single element         | Direct              |
| `getElementsByTagName()`   | HTMLCollection         | Index (e.g., `[0]`) |
| `getElementsByClassName()` | HTMLCollection         | Index               |
| `querySelector()`          | First matching element | Direct              |
| `querySelectorAll()`       | NodeList               | Index               |
| `document.forms`, `.links` | Collection             | Index + property    |

## Important Notes

- `getElementById` is singular; others are plural (`Elements`).
- Collections are **live** (HTMLCollection) except `querySelectorAll` (static NodeList).
- Use `.innerHTML` to change element content.
- Form inputs can be accessed via `document.forms[index].inputName.value`.

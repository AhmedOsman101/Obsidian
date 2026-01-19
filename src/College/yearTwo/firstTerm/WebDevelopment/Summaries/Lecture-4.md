# HTML Lists Exam Summary

## 1. Ordered Lists (`<OL>`)

- Creates a numbered list.
- Syntax:

```html
<ol>
  <li>Item one</li>
  <li>Item two</li>
</ol>
```

### Attributes for `<OL>`

- `TYPE` – numbering style:
  - `1` = Arabic numbers (default): 1, 2, 3...
  - `a` = Lowercase letters: a, b, c...
  - `A` = Uppercase letters: A, B, C...
  - `i` = Lowercase Roman: i, ii, iii...
  - `I` = Uppercase Roman: I, II, III...
- `START="n"` – specifies starting number/letter.

## 2. Unordered Lists (`<UL>`)

- Creates a bulleted list.
- Syntax:

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>
```

### Attributes for `<UL>`

- `TYPE` – bullet shape:
  - `disc` = solid round bullet (default)
  - `circle` = empty round bullet
  - `square` = square bullet

## 3. Definition Lists (`<DL>`)

- Each item has a term (`<DT>`) and description (`<DD>`).

```html
<dl>
  <dt>Term</dt>
  <dd>Description</dd>
</dl>
```

## 4. Nesting Lists

- Place a list (`<UL>`, `<OL>`) inside a list item (`<LI>`).

Example:

```html
<ul type="square">
  <li>List item...</li>
  <li>
    List item...
    <ol type="i" start="3">
      <li>Nested item...</li>
    </ol>
  </li>
</ul>
```

## 5. Example Output

Given:

```html
<ol type="a" start="2">
  <li>Be able to swim</li>
  <li>Wear a life jacket</li>
  <li>
    Don't stand up...
    <ul>
      <li>Hang on to the canoe</li>
    </ul>
  </li>
</ol>
```

**Output:**
b. Be able to swim
c. Wear a life jacket
d. Don't stand up...

- Hang on to the canoe

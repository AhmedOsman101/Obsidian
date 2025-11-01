## Input Type: `hidden`

Used to store data that users don't see or edit.  
Commonly used for IDs, tokens, or metadata in forms.

```html
<form action="/profile">
  <input type="hidden" name="user_id" value="42" />
  <input type="submit" value="View Profile" />
</form>
```

- Hidden inputs are not visible but included in the form submission.

![hidden input preview](figure-15.png)

---

## Input Type: `color`

Provides a color picker for selecting colors.

```html
<label>Choose a color:</label>
<input type="color" name="themeColor" value="#1e90ff" />
```

- Returns a hex color code like `#1e90ff`.
- Supported by most modern browsers.

![color input preview](figure-16.png)

---

## Input Type: `reset`

Resets all inputs in a form to their initial values.

```html
<form>
  <input type="text" name="username" value="John" />
  <input type="color" value="#ff0000" />
  <input type="reset" value="Reset Form" />
</form>
```

- It doesn't clear the form completely; it restores defaults.
- Often used alongside a submit button.

![reset button preview](figure-17.png)

---

## Input Type: `range`

Creates a slider control for numeric values within a defined range.

```html
<label>Volume:</label>  <input type="range" min="0" max="100" value="50" /> 
```

- Uses `min`, `max`, and `value` attributes.
- Can be styled for better UX.
- Ideal for settings like brightness or volume.

![range input preview](figure-18.png)

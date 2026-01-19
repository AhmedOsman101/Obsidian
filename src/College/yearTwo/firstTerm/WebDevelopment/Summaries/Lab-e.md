# HTML Forms - Lab Summary

## Core Concepts

- The `<form>` element is a container for user input elements.
- The `<input>` element is the most used form element. Its appearance and behavior are defined by the `type` attribute.
- The `<label>` tag defines a label for form elements.

## Input Types & Attributes

### Common Input Types

| Type Attribute    | Description                                | Key Attributes / Notes                                 |
| :---------------- | :----------------------------------------- | :----------------------------------------------------- |
| `type="text"`     | Single-line text field.                    | `placeholder`, `required`, `readonly`, `value`, `name` |
| `type="password"` | Hides entered characters.                  | `required`, `minlength`, `maxlength`, `autofocus`      |
| `type="submit"`   | Button to submit the form.                 | `value` (changes button text)                          |
| `type="reset"`    | Button to reset form values to default.    | `value` (changes button text)                          |
| `type="radio"`    | For selecting **one** of multiple choices. | `name` (must be same for group), `value`, `checked`    |
| `type="checkbox"` | For selecting **zero or more** options.    | `name`, `value`, `checked`                             |
| `type="email"`    | For email input with built-in validation.  | `placeholder`, `value`, `disabled`                     |
| `type="number"`   | For numerical input.                       | `min`, `max`, `step`                                   |
| `type="range"`    | Slider control.                            | `min`, `max`, `step`, `value`                          |
| `type="color"`    | Color picker.                              | `name`                                                 |
| `type="date"`     | Date picker.                               |                                                        |
| `type="month"`    | Month and year picker.                     |                                                        |
| `type="time"`     | Time picker.                               |                                                        |
| `type="file"`     | File upload control.                       |                                                        |
| `type="url"`      | For URL input with validation.             |                                                        |
| `type="search"`   | Search field.                              |                                                        |
| `type="hidden"`   | Invisible field (e.g., for passing IDs).   | `value`, `name`                                        |
| `type="button"`   | Clickable button (no default action).      |                                                        |

### Key Global Attributes

- `required`: Field must be filled.
- `readonly`: Value cannot be changed.
- `disabled`: Field is non-interactive and value is not submitted.
- `placeholder`: Hint text inside the field.
- `value`: Default or pre-set value.
- `name`: Identifies the field's data when the form is submitted.
- `autofocus`: Automatically focuses the field on page load.

## Other Form Elements

### `<select>` Dropdown List

- Creates a dropdown menu.
- `<option>` defines each choice (`value`, text content).
- `multiple` attribute allows selecting more than one option.
- `<optgroup label="...">` groups options under a label.

**Example:**

```html
<select name="Book">
  <optgroup label="Action Books">
    <option value="1">Book 1</option>
    <option value="2">Book 2</option>
  </optgroup>
  <optgroup label="Police Books">
    <option value="4" selected>Book 4</option>
    <option value="5">Book 5</option>
  </optgroup>
</select>
```

### `<textarea>` Multi-line Text

- For longer text input.
- `cols` and `rows` define visible size.
- `placeholder` provides a hint.

**Example:**

```html
<textarea
  name="Subject"
  cols="30"
  rows="10"
  placeholder="Write Here"
></textarea>
```

## Key Code Examples

### Basic Login Form with Validation

```html
<form>
  <label>UserName</label>
  <input type="text" required placeholder="Username" name="user" />
  <br /><br />
  <label>Password</label>
  <input type="password" required name="pass" minlength="10" />
  <br /><br />
  <input type="submit" value="Save" />
</form>
```

### Form with Multiple Input Types

```html
<form>
  <input type="hidden" value="123456789" name="id" />
  <label>Email</label>
  <input type="email" placeholder="mail" value="rana@gmail.com" name="mail" />
  <br /><br />
  <label>Color</label>
  <input type="color" name="favcolor" />
  <br /><br />
  <label>Range</label>
  <input type="range" name="range" min="0" max="100" step="20" value="80" />
  <br /><br />
  <input type="reset" value="Reset" />
  <input type="submit" value="Save" />
</form>
```

### Radio Buttons & Checkboxes

```html
<form>
  <!-- Radio (Select One) -->
  <input type="radio" name="os" value="Windows" checked /> <label>Windows</label
  ><br />
  <input type="radio" name="os" value="Linux" /> <label>Linux</label><br />
  <!-- Checkboxes (Select Many) -->
  <input type="checkbox" name="software" value="Word" /> <label>Word</label
  ><br />
  <input type="checkbox" name="software" value="Excel" /> <label>Excel</label
  ><br />
  <input type="submit" />
</form>
```

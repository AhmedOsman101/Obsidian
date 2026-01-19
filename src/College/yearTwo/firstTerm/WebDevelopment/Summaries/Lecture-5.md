# HTML Forms Exam Summary

## 1. Form Basics

- **Form:** An area of a document where users enter information into fields.
- **Two components:**
  1. **Shell** – HTML part user fills out (text boxes, buttons, etc.).
  2. **Script** – processes the information.

## 2. Form Structure

- Three essential parts:
  1. `<FORM>` tag (includes script address).
  2. Form elements (text boxes, radio buttons, etc.).
  3. Submit button (triggers script to send data to server).

**Syntax:**

```html
<form method="POST" action="script_url">
  <!-- form elements -->
</form>
```

## 3. Form Elements & Syntax

### Text Box (`<INPUT TYPE="text">`)

```html
<input type="text" name="name" value="value" size="n" maxlength="n" />
```

- **NAME** – identifies field to script.
- **VALUE** – initial text.
- **SIZE** – width in characters.
- **MAXLENGTH** – max characters allowed.

**Example:**

```html
First Name: <input type="text" name="FirstName" value="First Name" size="20" />
```

### Text Area (`<TEXTAREA>`)

```html
<textarea name="name" rows="n1" cols="n2" wrap>Default Text</textarea>
```

- **ROWS** – height in rows.
- **COLS** – width in characters.
- **WRAP** – auto‑wraps text.

**Example:**

```html
<textarea name="Comments" rows="10" cols="50" wrap></textarea>
```

### Radio Button (`<INPUT TYPE="radio">`)

```html
<input type="radio" name="name" value="data" />Label
```

- **VALUE** – data sent if selected.
- **Label** – text shown to user.
- **Grouping:** Same `NAME` for multiple radio buttons -> only one can be selected.

**Example:**

```html
<input type="radio" name="Size" value="Large" />Large
```

### Checkbox (`<INPUT TYPE="checkbox">`)

```html
<input type="checkbox" name="name" value="value" />Label
```

- **Grouping:** Same `NAME` for checkboxes -> only one can be selected at a time (like radio buttons).

**Example:**

```html
<input type="checkbox" name="Color" value="Red" />Red
```

### Drop‑down Menu (`<SELECT>`)

```html
<select name="name" size="n" multiple>
  <option value="value">Label</option>
</select>
```

- **SIZE** – height in lines.
- **MULTIPLE** – allows multiple selections.
- `<OPTION>` defines each menu item.

**Example:**

```html
<select>
  <option value="MANGOES">MANGOES</option>
  <option value="PAPAYA">PAPAYA</option>
</select>
```

## 4. Buttons

### Submit Button

```html
<input type="submit" /> <input type="submit" value="Buy Now!" />
```

- `VALUE` changes button text.

### Reset Button

```html
<input type="reset" /> <input type="reset" value="Clear Form" />
```

- `VALUE` changes button text.

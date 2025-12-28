# Web Programming - Lecture 5: HTML Forms

## What are Forms?

- An HTML form is an area of a document that allows users to enter information into fields.
- Used to collect personal information, opinions, user preferences, etc.

## Components of a Web Form

1. **Shell**: The part the user fills out, created using HTML.
2. **Script**: Processes the form data.

## Form Elements

- Text boxes
- Radio buttons
- Checkboxes
- Drop-down menus
- Text areas
- Submit and reset buttons

## The `<form>` Tag

- Defines the form shell.
- Includes:
  - `method="post"`
  - `action="script_url"` (URL of the processing script)

Example:

```html
<form method="post" action="script_url">
  <!-- form elements go here -->
</form>
```

## Text Boxes

```html
<input type="text" name="name" value="value" size="n" maxlength="n" />
```

**Attributes:**

- `name`: Identifies the field to the script.
- `value`: Initial text in the box.
- `size`: Width in characters.
- `maxlength`: Maximum number of characters allowed.

## Text Areas

```html
<textarea name="name" rows="n1" cols="n2" wrap>Default Text</textarea>
```

- `rows`: Height in rows.
- `cols`: Width in characters.
- `wrap`: Enables text wrapping.

## Radio Buttons

```html
<input type="radio" name="name" value="data" /> Label
```

- All radio buttons in the same group must have the same `name`.
- Only one can be selected at a time.

## Checkboxes

```html
<input type="checkbox" name="name" value="value" /> Label
```

- Multiple checkboxes can be selected.
- Use the same `name` to group them.

## Drop-down Menus

```html
<select name="name" size="n" multiple>
  <option value="value">Label</option>
</select>
```

- `size`: Height in lines.
- `multiple`: Allows multiple selections.

## Submit Button

```html
<input type="submit" value="Custom Text" />
```

- Sends form data to the server.
- Use `value` to customize the button text.

## Reset Button

```html
<input type="reset" value="Custom Text" />
```

- Clears all form fields.
- Use `value` to customize the button text.

## Key Points

- All form elements must be enclosed within `<form>` tags
- The `method` attribute specifies how data is sent (usually "post")
- The `action` attribute points to the processing script
- Form elements are identified by their `name` attribute for processing

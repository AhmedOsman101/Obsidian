# HTML Forms - Lab Summary (Continued)

## Form Element Examples from Screenshots

### Input Field Types in Use

- **Search:** `type="search"` creates a search input field.
- **File Upload:** `type="file"` creates a control for selecting a file ("Choose File No file chosen").
- **URL:** `type="url"` creates a field for entering a web address.
- **Date:** `type="date"` creates a date picker (e.g., "10/25/1982").

### `<select>` Element with `<optgroup>`

- The `<select>` element can contain `<optgroup>` elements to group related `<option>` items.
- The `label` attribute of `<optgroup>` provides the group's visible heading.

**Implied Code Example (from screenshot):**

```html
<select name="Book">
  <optgroup label="PHP">
    <option value="5.0">v5.0</option>
    <option value="7.0">v7.0</option>
    <option value="8.0">v8.0</option>
  </optgroup>
  <optgroup label="Python">
    <option value="2.0">v2.0</option>
    <option value="3.0">v3.0</option>
    <option value="3.9">v3.9</option>
  </optgroup>
</select>
```

### `<textarea>` Element

- Creates a multi-line plain-text editing control.
- The placeholder text "Write Here" suggests the use of the `placeholder` attribute.

**Implied Code Example:**

```html
<textarea name="Subject" placeholder="Write Here"></textarea>
```

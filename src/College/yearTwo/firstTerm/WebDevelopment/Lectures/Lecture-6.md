# Web Programming - Lecture 6: HTML Tables

## Introduction to Tables

- Used to display rows and columns of data, create multi-column text, image captions, and sidebars
- Basic structure: `<table>`, `<tr>` (table row), `<td>` (table data/cell)

## Basic Table Structure

```html
<table>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
  <tr>
    <td>Cell 3</td>
    <td>Cell 4</td>
  </tr>
</table>
```

## Table Elements

- `<table>`: Defines the table
- `<tr>`: Defines a table row
- `<td>`: Defines a table data cell
- `<th>`: Defines a table header cell (centered and bold by default)
- `<caption>`: Adds a caption above or below the table

## Table Attributes

### Borders and Appearance

```html
<table bordercolor="color"></table>
<table bordercolordark="color" bordercolorlight="color"></table>
```

- `border="n"` - border thickness in pixels
- `bordercolor="color"` - solid border color
- `bordercolordark="color"` and `bordercolorlight="color"` - shaded border

### Sizing and Alignment

- `align="left|right|center"` - table alignment
- `hspace="n"` and `vspace="n"` - horizontal and vertical space around table
- Width: `<table width="n">` or `<table width="n%">`
- Centering:
  ```html
  <table align="center">
    <!-- or -->
    <center>
      <table>
        ...
      </table>
    </center>
  </table>
  ```

### Cell Spacing and Padding

- Cell spacing (space between cells): `<table cellspacing="n">`
- Cell padding (space around cell contents): `<table cellpadding="n">`

## Cell Spanning

```html
<td colspan="2">Spans 2 columns</td>
<td rowspan="3">Spans 3 rows</td>
```

- `colspan="n"` - span cell across multiple columns
- `rowspan="n"` - span cell across multiple rows

## Cell Content Alignment

```html
<td align="left|center|right"></td>
<td valign="top|middle|bottom|baseline"></td>
```

- `align` - horizontal alignment
- `valign` - vertical alignment

## Advanced Features

### Column Groups

```html
<colgroup span="2">
  <col span="3" />
</colgroup>
```

- Structural (`<colgroup>`) and non-structural (`<col>`) column groups

### Horizontal Sections

```html
<thead>
  ,
</thead>
<tbody>
  ,
</tbody>
<tfoot></tfoot>
```

- Group rows for formatting
- Note: Not supported in all browsers

### Cell Background

```html
<td bgcolor="color"></td>
```

- Changes background color of individual cells

### Line Breaks

```html
<td nowrap></td>
```

- Prevents text from wrapping within a cell

## Table Caption and Header

- Caption:
  ```html
  <caption align="top|bottom">
    Caption Text
  </caption>
  ```
- Centered above or below the table
- Table header: `<th>` instead of `<td>` for header cells

## Complete Table Example

```html
<table border="1" width="50%">
  <caption>
    <h1>Spare Parts</h1>
  </caption>
  <tr>
    <th>Stock Number</th>
    <th>Description</th>
    <th>List Price</th>
  </tr>
  <tr>
    <td bgcolor="red">3476-AB</td>
    <td>76mm Socket</td>
    <td>45.00</td>
  </tr>
</table>
```

## Important Notes

- **Always use end tags** for `th`, `td`, and `tr` (especially when nesting tables)
- **Default table has no borders** - use `border` attribute
- **Tables are left-aligned by default** - use `align="center"` or `<center>` tags to center
- **Avoid nesting too many tables** - can complicate layout
- Cell cannot be smaller than its contents
- Test tables in different browsers for compatibility

## Common Uses

- Data presentation
- Multi-column layouts
- Image captions
- Sidebars
- Page templates and complex layouts

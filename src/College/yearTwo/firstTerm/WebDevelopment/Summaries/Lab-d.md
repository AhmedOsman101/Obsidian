# HTML Tables (Lab‑4) Exam Summary

## 1. Table Structure

- **`<table>`** – defines a table.
- **`<tr>`** – table row.
- **`<td>`** – table data cell.
- **`<th>`** – table header cell (bold, centered).
- **`<caption>`** – table title.

**Basic Example:**

```html
<table>
  <tr>
    <td>Ahmed</td>
    <td>Omar</td>
    <td>Ali</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
```

## 2. Table Sections

- `<thead>` – groups header content.
- `<tbody>` – groups body content.
- `<tfoot>` – groups footer content.

## 3. Table Attributes

- `align` – left, center, right.
- `bgcolor` – background color.
- `border` – border width.
- `cellpadding` – space between cell content and its borders.
- `cellspacing` – space between cells.
- `height` / `width` – table dimensions (pixels or %).
- `colspan` – cell spans multiple columns.
- `rowspan` – cell spans multiple rows.

## 4. Complete Table Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Tables</title>
  </head>
  <body>
    <table border="5" bgcolor="yellow" align="center" cellpadding="10">
      <caption>
        Student Marks
      </caption>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Marks</th>
      </tr>
      <tr>
        <td>Ali</td>
        <td>Mohamed</td>
        <td>20</td>
      </tr>
      <tr>
        <td>Ahmed</td>
        <td>Mohamed</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Ahmed</td>
        <td>Omar</td>
        <td>30</td>
      </tr>
    </table>
  </body>
</html>
```

## 5. Rowspan Example

```html
<table border="3" bgcolor="green" align="center" cellpadding="5">
  <caption>
    Table Caption
  </caption>
  <tr>
    <th>Date</th>
    <th>Name</th>
    <th>Points</th>
  </tr>
  <tr>
    <td rowspan="4">Month</td>
    <td>Osama</td>
    <td>100</td>
  </tr>
  <tr>
    <td>Aya</td>
    <td>100</td>
  </tr>
  <tr>
    <td>Ali</td>
    <td>100</td>
  </tr>
  <tr>
    <td>Ahmed</td>
    <td>100</td>
  </tr>
</table>
```

- `rowspan="4"` makes the first cell span four rows.

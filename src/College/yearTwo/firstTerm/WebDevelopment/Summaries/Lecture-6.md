# HTML Tables Exam Summary

## 1. Table Structure

- **`<TABLE>`** – defines a table.
- **`<TR>`** – defines a table row.
- **`<TD>`** – defines a table data cell.
- **`<TH>`** – defines a table header cell (centered, bold).
- **`<CAPTION>`** – table title (above/below).

**Basic Example:**

```html
<table border="1">
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
</table>
```

## 2. Table Attributes

### Border & Color

- `BORDER=n` – border thickness in pixels.
- `BORDERCOLOR="color"` – solid border color.
- `BORDERCOLORDARK="color"` / `BORDERCOLORLIGHT="color"` – shaded border.

### Spacing

- `CELLSPACING=n` – space **between** cells.
- `CELLPADDING=n` – space **inside** cells (around content).
- `HSPACE=n` / `VSPACE=n` – space around the whole table.

### Sizing & Alignment

- `WIDTH=n` or `WIDTH="n%"` – table/cell width.
- `HEIGHT=n` – cell height.
- **Align table:** `<TABLE ALIGN=LEFT|CENTER|RIGHT>` or wrap in `<CENTER>`.
- **Wrap text:** `<TABLE ALIGN=LEFT>` (text flows to right).

## 3. Cell Attributes

### Spanning

- `COLSPAN=n` – cell spans `n` columns.
- `ROWSPAN=n` – cell spans `n` rows.

### Alignment

- `ALIGN=LEFT|CENTER|RIGHT` – horizontal alignment.
- `VALIGN=TOP|MIDDLE|BOTTOM|BASELINE` – vertical alignment.

### Color & Wrapping

- `BGCOLOR="color"` – cell background color.
- `NOWRAP` – prevents text wrapping inside cell.

## 4. Column & Row Groups

### Column Groups

- **Structural:** `<COLGROUP SPAN=n>` – controls dividing lines.
- **Non‑structural:** `<COL SPAN=n>` – formatting only.

### Horizontal Sections

- `<THEAD>` – header row group.
- `<TBODY>` – body row group.
- `<TFOOT>` – footer row group.
  _(Not supported in Netscape.)_

## 5. Caption & Headers

- `<CAPTION ALIGN=TOP|BOTTOM>` – centered title above/below table.
- `<TH>` – header cell (bold, centered).

## 6. Nesting Tables

- Place a full `<TABLE>...</TABLE>` inside a `<TD>`.
- **Caution:** Avoid deep nesting; test inner/outer tables separately.

## 7. Important Notes

- **Always close** `<TR>`, `<TH>`, `<TD>` tags (especially when nesting).
- Default table has **no border** (`BORDER` attribute needed).
- Default alignment is **flush left**.
- Table width > browser window -> parts hidden.

## 8. Example with Colspan/Rowspan

```html
<table border width="750">
  <tr>
    <td colspan="4" align="center">Page Banner</td>
  </tr>
  <tr>
    <td rowspan="2" width="25%">Nav Links</td>
    <td colspan="4">Feature Article</td>
    <td rowspan="2" width="25%">Linked Ads</td>
  </tr>
  <tr>
    <td width="25%">News Column 1</td>
    <td width="25%">News Column 2</td>
  </tr>
</table>
```

**Output:** A 3‑row layout with merged cells for banner, navigation, articles, and ads.

---
title: Section 5
prev:
  text: "Section 4"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-4"
next:
  text: "Section 6"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-6"
---

# Database Programming - Section 5

## Aggregate Functions

```sql
SELECT MIN(Price) AS SmallestPrice FROM Products;
SELECT MAX(Price) AS LargestPrice FROM Products;
SELECT COUNT(ProductID) FROM Products;   -- ignores NULL
SELECT AVG(Price) FROM Products;          -- ignores NULL
SELECT SUM(Quantity) FROM OrderDetails;   -- ignores NULL
```

| Function | Returns | NULL handling |
|----------|---------|---------------|
| `MIN(col)` | Smallest value | Ignores NULL |
| `MAX(col)` | Largest value | Ignores NULL |
| `COUNT(col)` | Number of rows matching criterion | Does not count NULL |
| `AVG(col)` | Average of numeric column | Ignores NULL |
| `SUM(col)` | Total sum of numeric column | Ignores NULL |

## Control Flow Functions

Evaluates conditions; usable in `SELECT`, `WHERE`, `ORDER BY`, `GROUP BY`.

### IF

```sql
SELECT IF(condition, val_if_true, val_if_false);
```

### IFNULL

Returns a specified value if the expression is NULL, otherwise returns the expression.

```sql
IFNULL(expression, alt_value);
```

### NULLIF

Returns NULL if `expr1 = expr2`, otherwise returns `expr1`.

```sql
NULLIF(expr1, expr2);
```

### CASE

Like IF-THEN-ELSE. Stops at the first true condition. Returns NULL if no condition matches and no ELSE.

```sql
CASE value
  WHEN condition1 THEN result1
  WHEN condition2 THEN result2
  ELSE result
END;
```

## String Functions

| Function | Syntax | Description |
|----------|--------|-------------|
| `CONCAT` | `CONCAT(s1, s2, ...)` | Adds strings together |
| `+` | `s1 + s2` | Alternative concatenation |
| `REPLACE` | `REPLACE(string, old, new)` | Replaces all occurrences (case-insensitive search) |
| `INSERT` | `INSERT(string, pos, num, s2)` | Inserts `s2` at `pos` for `num` characters |
| `LEFT` | `LEFT(string, n)` | Extracts `n` chars from left |
| `RIGHT` | `RIGHT(string, n)` | Extracts `n` chars from right |
| `MID` | `MID(string, start, len)` | Extracts substring starting at any position |
| `SUBSTRING` | `SUBSTRING(string, start, len)` | Same as MID — extracts characters |
| `LOCATE` | — | Finds position of substring |
| `LEN` | — | Returns length of string |
| `LOWER` / `LCASE` | — | Converts to lowercase |
| `UPPER` / `UCASE` | — | Converts to uppercase |
| `REVERSE` | — | Reverses the string |

> [!NOTE]
> `INSERT()` here is the string function (different from `INSERT INTO`). If `position` is outside the string length, it returns the original string. If `number` is higher than the remaining string length, it replaces from position to end.

---

*2 min read (source: 7 min)*

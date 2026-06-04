---
title: Lecture 6
prev:
  text: "Lecture 5"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-5"
next:
  text: "Lecture 7"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-7"
---

# Database Programming - Lecture 6

## String Functions

| Function | Signature | Purpose |
|----------|-----------|---------|
| **CONCAT** | `CONCAT(str1, str2, ...)` | Concatenates strings |
| **REPLACE** | `REPLACE(str, from, to)` | Replaces all occurrences of `from` with `to` |
| **LOCATE** | `LOCATE(substr, str)` | Returns position of first occurrence (1-indexed); 0 if not found |
| **LENGTH** | `LENGTH(str)` | Returns byte length of string |
| **INSERT** | `INSERT(str, pos, len, new)` | Replaces `len` characters starting at `pos` with `new` |
| **LEFT** | `LEFT(str, n)` | Returns first `n` characters |
| **RIGHT** | `RIGHT(str, n)` | Returns last `n` characters |
| **MID/SUBSTRING** | `MID(str, pos, len)` | Extracts `len` characters starting at `pos` (1-indexed) |
| **LCASE** | `LCASE(str)` | Converts to lowercase |
| **UCASE** | `UCASE(str)` | Converts to uppercase |
| **REVERSE** | `REVERSE(str)` | Reverses a string |

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
SELECT REPLACE('Hello World', 'World', 'MySQL');
SELECT LOCATE('is', 'This is a string');   -- 3
SELECT INSERT('Hello World', 6, 0, ' Beautiful');  -- insert at position 6
SELECT LEFT('Database', 4);   -- "Data"
```

> [!NOTE]
> `LOCATE` can be nested inside `INSERT` to insert before a dynamic position (e.g., before the first space).

## Numeric Functions

| Function | Behavior |
|----------|----------|
| **FLOOR(x)** | Rounds down to the nearest integer |
| **CEILING(x)** | Rounds up to the nearest integer |
| **ROUND(x, d)** | Rounds `x` to `d` decimal places |
| **TRUNCATE(x, d)** | Truncates `x` to `d` decimal places (no rounding) |

```sql
SELECT FLOOR(4.7);        -- 4
SELECT CEILING(4.2);      -- 5
SELECT ROUND(3.14159, 2); -- 3.14
SELECT TRUNCATE(3.14159, 2); -- 3.14 (but 3.149 → 3.14 vs ROUND → 3.15)
```

## Date and Time Functions

| Function | Returns |
|----------|---------|
| **NOW()** | Current date + time (`YYYY-MM-DD HH:MM:SS`) |
| **CURDATE()** | Current date only |
| **CURTIME()** | Current time only |
| **DATE_ADD(date, INTERVAL expr unit)** | Date + interval |
| **DATE_SUB(date, INTERVAL expr unit)** | Date - interval |

```sql
SELECT NOW();                                    -- 2026-04-06 14:30:00
SELECT DATE_ADD('2026-04-06', INTERVAL 10 DAY);  -- 2026-04-16
```

Interval units: `DAY`, `MONTH`, `YEAR`, `HOUR`, `MINUTE`, `SECOND`.

## User-Defined Functions (UDF)

Created externally in C/C++, compiled as a shared library, loaded into MySQL. Once loaded, used like any built-in function. Not created with SQL alone — requires external code and server-side registration.

---

*2 min read (source: 4 min)*

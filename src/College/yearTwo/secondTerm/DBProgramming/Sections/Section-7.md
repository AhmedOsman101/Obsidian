---
title: Section 7
prev:
  text: "Section 6"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-6"
next:
  text: "Section 8"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-8"
---

# Database Programming - Section 7

## String Functions (Continued)

| Function | Syntax | Description |
|----------|--------|-------------|
| `LOCATE` | `LOCATE(substring, string, start)` | Returns position of first occurrence (case-insensitive); returns 0 if not found |
| `LEN` | `LEN(string)` | Returns string length; trailing spaces excluded, leading spaces included |
| `LOWER` | `LOWER(text)` | Converts to lowercase |
| `UPPER` | `UPPER(text)` | Converts to uppercase |
| `REVERSE` | `REVERSE(string)` | Reverses the string |

```sql
SELECT LOCATE('world', 'Hello world');  -- 7
SELECT LEN('Hello ');                   -- 5 (trailing space excluded)
SELECT LOWER('SQL');                    -- sql
SELECT REVERSE('abc');                  -- cba
```

## Numeric Functions

| Function | Syntax | Description |
|----------|--------|-------------|
| `FLOOR` | `FLOOR(number)` | Rounds down to the nearest integer |
| `CEILING` | `CEILING(number)` | Rounds up to the nearest integer |
| `ROUND` | `ROUND(number, decimals)` | Rounds to specified decimal places |
| `TRUNCATE` | `TRUNCATE(number, decimals)` | Truncates (cuts off) to specified decimal places |

```sql
SELECT FLOOR(3.7);      -- 3
SELECT CEILING(3.2);    -- 4
SELECT ROUND(3.14159, 2);  -- 3.14
SELECT TRUNCATE(3.14159, 2);  -- 3.14
```

## Date and Time Functions

| Function | Returns |
|----------|---------|
| `NOW()` | Current date and time |
| `CURDATE()` | Current date |
| `CURTIME()` | Current time |
| `DATE_ADD(date, INTERVAL value unit)` | Adds an interval to a date |
| `DATE_SUB(date, INTERVAL value unit)` | Subtracts an interval from a date |

> [!NOTE]
> The source uses `DATEADD()` (SQL Server syntax). In MySQL, the equivalent is `DATE_ADD()`. Same for `DATE_SUB()`.

```sql
SELECT NOW();              -- 2026-06-04 14:30:00
SELECT CURDATE();          -- 2026-06-04
SELECT CURTIME();          -- 14:30:00
SELECT DATE_ADD('2026-06-04', INTERVAL 10 DAY);   -- 2026-06-14
SELECT DATE_SUB('2026-06-04', INTERVAL 1 MONTH);  -- 2026-05-04
```

---

*2 min read (source: 3 min)*

---
title: Lecture 4
prev:
  text: "Lecture 3"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-3"
next:
  text: "Lecture 5"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-5"
---

# Database Programming - Lecture 4

## SELECT & Clauses

```sql
SELECT column1, column2 FROM table_name;
SELECT * FROM table_name;
```

### WHERE — Filter rows

```sql
SELECT * FROM table WHERE condition;
```

Works with SELECT, INSERT, UPDATE, DELETE. Supports comparison operators, `AND`/`OR`/`NOT`, wildcards.

### DISTINCT — Remove duplicates

```sql
SELECT DISTINCT column FROM table;
```

Only used with SELECT. On multiple columns, returns unique combinations.

### ORDER BY — Sort results

```sql
SELECT * FROM table ORDER BY col1 ASC, col2 DESC;
```

Default sort is **ASC** (ascending). Use **DESC** for descending. Multiple columns: sorted left to right.

### GROUP BY — Aggregate groups

```sql
SELECT category, SUM(quantity) FROM sales GROUP BY category;
```

Groups rows that share a column value. Commonly used with aggregate functions: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.

### HAVING — Filter groups (after GROUP BY)

```sql
SELECT category, SUM(quantity) FROM sales GROUP BY category HAVING SUM(quantity) > 5;
```

`WHERE` filters rows **before** grouping. `HAVING` filters groups **after** grouping.

### FROM — Specify table(s)

```sql
SELECT * FROM table;
```

Can reference multiple tables using JOIN.

## Operators

### Arithmetic

`+`, `-`, `*`, `/`, `%` (modulo).

### Comparison

| Operator | Meaning |
|----------|---------|
| `=` | Equal |
| `<>` or `!=` | Not equal |
| `>` / `<` | Greater / less |
| `>=` / `<=` | Greater or equal / less or equal |
| `!<` / `!>` | Not less / not greater |

### Logical

| Operator | Behavior |
|----------|----------|
| **ALL** | True if comparison is true for every value in a subquery |
| **AND (`&&`)** | True if all conditions are true |
| **ANY** | True if comparison is true for any value in a subquery |
| **BETWEEN** | True if value is within a range (inclusive) |
| **EXISTS** | True if a subquery returns at least one row |
| **IN** | True if value matches any item in a list |
| **LIKE** | Pattern matching with wildcards |
| **NOT (`!`)** | Reverses a logical condition |
| **OR (`\|\|`)** | True if at least one condition is true |
| **IS NULL** | True if value is NULL |
| **UNIQUE** | True if every row in a subquery is unique (no duplicates) |

### LIKE Wildcards

| Pattern | Matches |
|---------|---------|
| `'200%'` | Starts with "200" |
| `'%200%'` | Contains "200" |
| `'_00%'` | "00" in positions 2–3 |
| `'2_%_%'` | Starts with "2", at least 3 chars |
| `'%2'` | Ends with "2" |
| `'_2%3'` | "2" in position 2, ends with "3" |
| `'2___3'` | 5-digit number starting with 2, ending with 3 |

`%` matches any sequence of characters. `_` matches exactly one character.

---

*4 min read (source: 9 min)*

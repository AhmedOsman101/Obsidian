---
title: Lecture 5
prev:
  text: "Lecture 4"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-4"
next:
  text: "Lecture 6"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-6"
---

# Database Programming - Lecture 5

## MySQL Functions

A function accepts input parameters, performs actions, and returns a single value or table.

- **Scalar function** — operates on individual input values
- **Aggregate function** — operates on a set of values, returns one computed result

## Aggregate Functions

| Function | Returns |
|----------|---------|
| **COUNT(expr)** | Number of rows with non-NULL values in the specified field |
| **SUM(expr)** | Total sum of a numeric column (non-NULL values) |
| **AVG(expr)** | Average of non-NULL values in a numeric column |
| **MIN(expr)** | Smallest value in the selected column |
| **MAX(expr)** | Largest value in the selected column |

All five ignore NULL values. `COUNT(DISTINCT expr)` counts unique non-NULL rows.

```sql
SELECT COUNT(emp_name) FROM employees;
SELECT COUNT(DISTINCT emp_age) FROM employees;
SELECT SUM(working_hours) FROM employees;
SELECT AVG(working_hours) AS Avg_working_hours FROM employees GROUP BY occupation;
SELECT MIN(salary), MAX(salary) FROM employees;
```

## Control Functions

Return values based on conditions — decision-making inside SQL statements.

| Function | Behavior |
|----------|----------|
| **IF(condition, val_true, val_false)** | Returns `val_true` if condition is true, `val_false` otherwise |
| **IFNULL(expr, alt)** | Returns `alt` if `expr` is NULL, otherwise returns `expr` |
| **NULLIF(expr1, expr2)** | Returns NULL if `expr1 = expr2`, otherwise returns `expr1` |
| **CASE** | Multi-condition branching; supports `WHEN ... THEN ... ELSE ... END` |

```sql
SELECT IF(age >= 18, 'Adult', 'Minor') FROM users;
SELECT name, IFNULL(phone, 'No Phone') FROM contacts;
SELECT NULLIF(quantity, 0) FROM inventory;  -- avoids division-by-zero
SELECT name,
  CASE
    WHEN score >= 90 THEN 'A'
    WHEN score >= 80 THEN 'B'
    ELSE 'C'
  END AS grade
FROM students;
```

> [!NOTE]
> Control functions are scalar, not aggregate. Each row is evaluated independently.

---

*2 min read (source: 5 min)*

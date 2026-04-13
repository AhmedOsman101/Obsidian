---
prev:
  text: "Lecture 4"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-4"
next:
  text: "Lecture 6"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-6"
title: Lecture 5
---

# Database Programming - Lecture 5

## MySQL Functions Overview

**MySQL functions** are SQL statements that accept input parameters, perform actions, and return a result. This matters because functions encapsulate reusable logic within queries, reducing repetition and improving readability. Functions are categorized by their operation type: scalar (single-value input/output), aggregate (multi-value input/single-value output), and control (conditional result selection).

| Function Type | Input Scope       | Output            | Examples                   |
| ------------- | ----------------- | ----------------- | -------------------------- |
| **Scalar**    | Single value(s)   | Single value      | UPPER(), LENGTH(), ROUND() |
| **Aggregate** | Complete dataset  | Single value      | COUNT(), SUM(), AVG()      |
| **Control**   | Conditional logic | Conditional value | IF(), CASE, IFNULL()       |

## Aggregate Functions

**Aggregate functions** perform calculations on multiple values and return a single value. This matters because they summarize data sets for reporting and analysis. They are primarily used with SELECT statements in Data Query Language (DQL).

| Function    | Purpose                             | NULL Handling |
| ----------- | ----------------------------------- | ------------- |
| **COUNT()** | Number of rows with non-NULL values | Ignores NULLs |
| **SUM()**   | Total of numeric values             | Ignores NULLs |
| **AVG()**   | Average of numeric values           | Ignores NULLs |
| **MIN()**   | Minimum value                       | Ignores NULLs |
| **MAX()**   | Maximum value                       | Ignores NULLs |

```sql
-- Count employees with recorded age
SELECT COUNT(emp_age) FROM employees WHERE emp_age IS NOT NULL;

-- Total working hours across all employees
SELECT SUM(working_hours) FROM employees;

-- Average salary per department
SELECT AVG(salary), department FROM employees GROUP BY department;
```

> [!IMPORTANT]
> _COUNT(_) counts all rows including NULLs, while COUNT(column) counts only non-NULL values in that column.\*

## String Functions

**String functions** manipulate text data. This matters because data often requires cleaning, formatting, or extraction before use or display.

| Function        | Purpose                        | Example                                |
| --------------- | ------------------------------ | -------------------------------------- |
| **UPPER()**     | Convert to uppercase           | UPPER('hello') -> 'HELLO'              |
| **LOWER()**     | Convert to lowercase           | LOWER('HELLO') -> 'hello'              |
| **LENGTH()**    | String length in bytes         | LENGTH('hello') -> 5                   |
| **CONCAT()**    | Join strings                   | CONCAT('first', 'last') -> 'firstlast' |
| **SUBSTRING()** | Extract substring              | SUBSTRING('hello', 2, 3) -> 'ell'      |
| **TRIM()**      | Remove leading/trailing spaces | TRIM(' hello ') -> 'hello'             |

```sql
-- Format employee names consistently
SELECT UPPER(CONCAT(first_name, ' ', last_name)) AS full_name FROM employees;

-- Extract domain from email addresses
SELECT SUBSTRING(email, LOCATE('@', email) + 1) AS domain FROM employees;
```

## Numeric Functions

**Numeric functions** perform mathematical operations on numeric data. This matters because calculations are frequently needed for reporting, scoring, or derived metrics.

| Function    | Purpose                  | Example                   |
| ----------- | ------------------------ | ------------------------- |
| **ROUND()** | Round to decimal places  | ROUND(3.14159, 2) -> 3.14 |
| **CEIL()**  | Round up to integer      | CEIL(3.14) -> 4           |
| **FLOOR()** | Round down to integer    | FLOOR(3.99) -> 3          |
| **ABS()**   | Absolute value           | ABS(-5) -> 5              |
| **MOD()**   | Remainder after division | MOD(10, 3) -> 1           |
| **POWER()** | Exponentiation           | POWER(2, 3) -> 8          |

```sql
-- Calculate price with tax (rounded to 2 decimals)
SELECT ROUND(price * 1.15, 2) AS price_with_tax FROM products;

-- Find employees with odd-numbered IDs
SELECT * FROM employees WHERE MOD(emp_id, 2) = 1;
```

## Date and Time Functions

**Date and time functions** manipulate temporal data. This matters because applications often need to calculate durations, extract components, or format dates for display.

| Function       | Purpose            | Example                                                |
| -------------- | ------------------ | ------------------------------------------------------ |
| **NOW()**      | Current date/time  | NOW() -> '2026-04-10 14:30:00'                         |
| **CURDATE()**  | Current date       | CURDATE() -> '2026-04-10'                              |
| **CURTIME()**  | Current time       | CURTIME() -> '14:30:00'                                |
| **DATE()**     | Extract date part  | DATE('2026-04-10 14:30:00') -> '2026-04-10'            |
| **YEAR()**     | Extract year       | YEAR('2026-04-10') -> 2026                             |
| **MONTH()**    | Extract month      | MONTH('2026-04-10') -> 4                               |
| **DAY()**      | Extract day        | DAY('2026-04-10') -> 10                                |
| **DATEDIFF()** | Days between dates | DATEDIFF('2026-12-31', '2026-04-10') -> 265            |
| **DATE_ADD()** | Add interval       | DATE_ADD('2026-04-10', INTERVAL 5 DAY) -> '2026-04-15' |

```sql
-- Employees hired in the last 30 days
SELECT * FROM employees
WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);

-- Age calculation from birth date
SELECT TIMESTAMPDIFF(YEAR, birth_date, CURDATE()) AS age FROM employees;
```

## Control Functions

**Control functions** enable conditional logic within SQL statements. This matters because they allow dynamic result sets based on data values without application-level processing.

| Function     | Purpose              | Syntax                                 |
| ------------ | -------------------- | -------------------------------------- |
| **IF()**     | If-then-else         | IF(condition, true_value, false_value) |
| **IFNULL()** | Replace NULL         | IFNULL(expression, replacement)        |
| **NULLIF()** | Return NULL if equal | NULLIF(expr1, expr2)                   |
| **CASE**     | Multi-condition      | CASE WHEN cond1 THEN val1 [...] END    |

```sql
-- Categorize employees by age group
SELECT
  emp_name,
  emp_age,
  IF(emp_age < 30, 'Junior',
    IF(emp_age < 50, 'Mid-level', 'Senior')
  ) AS age_group
FROM employees;

-- Display 'N/A' for missing phone numbers
SELECT
  emp_name,
  IFNULL(phone, 'N/A') AS contact_phone
FROM employees;

-- Show 0 for matching values, otherwise show actual value
SELECT
  product_id,
  NULLIF(stock, 0) AS available_stock  -- Returns NULL if stock=0
FROM inventory;

-- Grade students based on score
SELECT
  student_name,
  score,
  CASE
    WHEN score >= 90 THEN 'A'
    WHEN score >= 80 THEN 'B'
    WHEN score >= 70 THEN 'C'
    WHEN score >= 60 THEN 'D'
    ELSE 'F'
  END AS grade
FROM students;
```

> [!NOTE]
> _NULLIF(expr1, expr2) returns NULL only when expr1 = expr2; otherwise it returns expr1. Useful for preventing division by zero._

> [!WARNING]
> _The order of CASE evaluation matters: first matching condition wins. Place specific conditions before general ones._

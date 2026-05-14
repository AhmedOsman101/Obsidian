---
prev:
  text: "Section 4"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-4"
next:
  text: "Section 6"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-6"
title: Section 5
---

# Database Programming - Section 5

## Aggregate Functions: MIN, MAX, COUNT, AVG, and SUM

An **aggregate function** returns one summarized value from many rows. This matters because aggregate functions reduce a full column or filtered result-set into one measurable result such as smallest value, largest value, total count, average, or sum. The lecture covers **`MIN()`**, **`MAX()`**, **`COUNT()`**, **`AVG()`**, and **`SUM()`**.

**`MIN()`** returns the smallest value in the selected column, while **`MAX()`** returns the largest. **`COUNT()`** returns the number of rows matching a criterion. **`AVG()`** returns the average of a numeric column, and **`SUM()`** returns the total of a numeric column. The boundary is important: `AVG()` and `SUM()` are numeric summaries, while `MIN()` and `MAX()` depend on the column's ordering rules.

| Function      | Result returned         | Common trap                                   |
| ------------- | ----------------------- | --------------------------------------------- |
| **`MIN()`**   | Smallest value          | Not the row itself unless selected separately |
| **`MAX()`**   | Largest value           | Same trap as `MIN()`                          |
| **`COUNT()`** | Number of matching rows | May ignore `NULL` values in a counted column  |
| **`AVG()`**   | Average numeric value   | Ignores `NULL` values                         |
| **`SUM()`**   | Total numeric value     | Ignores `NULL` values                         |

## NULL Behavior in Aggregate Functions

The lecture explicitly notes that **`COUNT()`** does not count **`NULL`** values when applied to a column, and **`AVG()`** and **`SUM()`** also ignore `NULL` values. This matters because the result changes depending on whether the query counts rows directly or counts non-null entries in one field. If the data contains missing values, the aggregate result may be lower than expected.

The exam boundary is that `NULL` is treated as missing, not zero. A null degree does not behave like degree `0`, so aggregate functions skip it unless the query replaces it first with another function such as **`IFNULL()`**.

```sql
-- Purpose: Compute basic summaries from numeric or row data
SELECT MIN(Price), MAX(Price), AVG(Price)
FROM Products;

SELECT COUNT(ProductID), SUM(Quantity)
FROM OrderDetails;
```

> [!IMPORTANT]
> _`NULL` is ignored by `AVG()` and `SUM()`, and a counted column with nulls may produce a smaller count than `COUNT(*)`._

## Control Flow Functions: Decision Logic in Queries

A **control flow function** evaluates a condition and returns a value based on the result. This matters because SQL can label, transform, or substitute values inside a query without changing the stored data. The lecture states that these functions can be used in **`SELECT`**, **`WHERE`**, **`ORDER BY`**, and **`GROUP BY`** clauses.

The main control-flow tools in the lecture are **`IF()`**, **`CASE`**, **`IFNULL()`**, and **`NULLIF()`**. They all handle conditional logic, but they differ in purpose. `IF()` is a direct true/false test, `CASE` handles multiple conditions in order, `IFNULL()` substitutes a replacement when a value is null, and `NULLIF()` returns null when two expressions are equal.

```mermaid
flowchart TD
  A[Need conditional output] --> B{One condition or many?}
  B -->|One| C[Use IF()]
  B -->|Many| D[Use CASE]
  A --> E{Need null substitution?}
  E -->|Replace null| F[Use IFNULL()]
  E -->|Return null on equality| G[Use NULLIF()]
```

## IF and CASE: Single vs. Multi-Branch Conditions

The **`IF()`** function returns one value if the condition is true and another if it is false. This matters because it is the simplest way to classify data into two outcomes, such as pass versus fail. The syntax is **`IF(condition, if_true, if_false)`**.

The **`CASE`** expression handles multiple conditions in sequence. Once the first true condition is found, SQL stops checking later conditions and returns that result. If no condition is true, the **`ELSE`** value is returned; if no `ELSE` exists, the result is **`NULL`**. The order matters because earlier conditions take priority over later ones.

```sql
-- Purpose: Return pass/fail from one condition
SELECT IF(student_degree < 60, 'fail', 'pass') AS student_state
FROM student_degree;

-- Purpose: Return one result from multiple ordered conditions
SELECT CASE
  WHEN student_degree < 60 THEN 'fail'
  ELSE 'pass'
END AS student_state
FROM student_degree;
```

## IFNULL and NULLIF: Managing Missing or Matching Values

The **`IFNULL()`** function returns an alternative value when the expression is **`NULL`**; otherwise, it returns the original expression. This matters because missing data can be displayed as a default value such as **`Absent`** instead of remaining blank. The lecture task uses this idea for a student whose degree is null.

The **`NULLIF()`** function returns `NULL` if two expressions are equal; otherwise, it returns the first expression. This matters because it can convert a known unwanted match into null for later handling. The boundary is that `IFNULL()` replaces nulls, while `NULLIF()` can create a null when equality occurs.

| Function                   | What it does             | Typical use             |
| -------------------------- | ------------------------ | ----------------------- |
| **`IFNULL(expr, alt)`**    | Replaces null with `alt` | Show default value      |
| **`NULLIF(expr1, expr2)`** | Returns `NULL` if equal  | Suppress matching value |

## String Functions: Join, Replace, Insert, and Extract

**String functions** manipulate text values without changing the meaning of numeric or date operations. The lecture includes **`CONCAT()`**, **`REPLACE()`**, **`INSERT()`**, **`LEFT()`**, **`RIGHT()`**, **`MID()`**, and **`SUBSTRING()`**. `CONCAT()` joins strings together, while the plus operator may also be used in some SQL environments to combine strings. `REPLACE()` substitutes all occurrences of one substring with another and is noted in the lecture as case-insensitive.

`INSERT()` places a string into another string at a specified position for a specified number of characters. If the position is outside the string length, the original string is returned. If the number exceeds the remaining length, replacement continues to the end. `LEFT()`, `RIGHT()`, `MID()`, and `SUBSTRING()` extract characters from different positions.

```sql
-- Purpose: Combine, replace, insert, or extract text values
SELECT CONCAT(first_name, ' ', last_name);
SELECT REPLACE(city, 'old', 'new');
SELECT INSERT(name, 2, 3, 'XYZ');
SELECT LEFT(name, 3), RIGHT(name, 3), MID(name, 2, 4), SUBSTRING(name, 2, 4);
```

> [!NOTE]
> _Use `IF` or `CASE` for decision logic, `IFNULL` or `NULLIF` for null behavior, and string functions only for text transformation._

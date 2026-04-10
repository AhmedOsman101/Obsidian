---
prev:
  text: "Lecture 3"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-3"
next:
  text: "Lecture 5"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-5"
title: Lecture 4
---

# Database Programming - Lecture 4

## MySQL SELECT Statement Fundamentals

The **SELECT** statement retrieves data from one or more tables and returns a **result set**. This matters because it is the primary mechanism for querying data in MySQL. The basic syntax is `SELECT column1, column2 FROM table_name;`. To select all columns, use `SELECT * FROM table_name;` where `*` is the wildcard representing all columns. The result set is stored in memory for further processing or display to the user.

## MySQL WHERE Clause for Filtering

The **WHERE** clause filters rows based on specified conditions before they are included in the result set. This matters because it reduces unnecessary data transfer and improves query performance by only returning relevant rows. The syntax is `SELECT columns FROM table WHERE condition;`. Conditions can include comparison operators, logical operators, and special operators like LIKE, IN, BETWEEN, IS NULL. WHERE is applied after FROM but before GROUP BY in the query execution order.

## Comparison Operators in MySQL

**Comparison operators** test relationships between two expressions and return TRUE, FALSE, or NULL. This matters because they form the basis of filtering conditions in WHERE, HAVING, and JOIN clauses. The six standard comparison operators are: `=`, `!=` or `<>`, `<`, `>`, `<=`, `>=`. These work with numeric, string, and date/time data types following MySQL's type conversion rules. String comparisons are case-insensitive by default unless the column uses a binary collation.

## Logical Operators: AND, OR, NOT

**Logical operators** combine or negate boolean conditions to create complex filtering logic. This matters because real-world queries often require multiple criteria. **AND** returns TRUE only if both conditions are TRUE. **OR** returns TRUE if at least one condition is TRUE. **NOT** reverses the boolean value of its operand. Operator precedence: NOT highest, then AND, then OR lowest. Parentheses can override default precedence to force evaluation order.

## Special Operators: IN, BETWEEN, LIKE, IS NULL

**Special operators** provide shorthand for common comparison patterns. This matters because they simplify query writing and improve readability. **IN** checks if a value matches any value in a list: `column IN (val1, val2, val3)`. **BETWEEN** tests if a value falls within a range inclusive: `column BETWEEN low AND high`. **LIKE** performs pattern matching using wildcards: `%` matches zero or more characters, `_` matches exactly one character. **IS NULL** checks for NULL values since `= NULL` always returns UNKNOWN, not TRUE or FALSE.

## Arithmetic Operators in SQL

**Arithmetic operators** perform mathematical calculations on numeric expressions. This matters because they enable computed columns and value transformations in queries. The operators are: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulus/remainder). They follow standard mathematical precedence: multiplication/division before addition/subtraction. Parentheses can group operations to change evaluation order. Division by zero returns NULL in MySQL.

## MySQL DISTINCT Clause for Unique Results

The **DISTINCT** clause eliminates duplicate rows from the result set, returning only unique values. This matters because it prevents redundant data in reports and aggregations. Syntax: `SELECT DISTINCT column1, column2 FROM table;`. When applied to multiple columns, uniqueness is determined by the combination of values across all specified columns. DISTINCT must appear immediately after SELECT and before column names. It cannot be used with * in the same SELECT clause without specifying columns.

## MySQL ORDER BY Clause for Sorting

The **ORDER BY** clause sorts the result set by one or more columns in ascending or descending order. This matters because unsorted query results have no guaranteed order, making consistent presentation impossible. Syntax: `SELECT columns FROM table ORDER BY col1 [ASC|DESC], col2 [ASC|DESC];`. ASC is default if neither ASC nor DESC is specified. Sorting happens after WHERE, GROUP BY, and HAVING but before LIMIT. NULL values sort first in ascending order and last in descending order.

## MySQL GROUP BY Clause for Aggregation

The **GROUP BY** clause groups rows with identical values in specified columns into summary rows. This matters because it enables aggregate calculations on data subsets. Syntax: `SELECT column, AGG_FUNC(column) FROM table GROUP BY column;`. Aggregate functions like COUNT(), SUM(), AVG(), MIN(), MAX() operate on each group. Non-aggregated columns in SELECT must appear in GROUP BY or be functionally dependent on grouped columns. GROUP BY eliminates duplicate group combinations before applying aggregates.

## MySQL HAVING Clause for Group Filtering

The **HAVING** clause filters groups after aggregation, analogous to WHERE but for grouped data. This matters because WHERE cannot filter on aggregate results. Syntax: `SELECT columns FROM table GROUP BY column HAVING condition;`. HAVING conditions can include aggregate functions like `HAVING COUNT(*) > 5` or `HAVING AVG(salary) > 50000`. Logical flow: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT. HAVING is applied after GROUP BY creates the groups but before final result ordering.

## MySQL FROM Clause and Table Sources

The **FROM** clause specifies the source tables for data retrieval. This matters because it defines what data is available for selection and joining. Basic syntax: `SELECT columns FROM table_name;`. For multiple tables: `SELECT columns FROM table1, table2;` or using explicit JOIN syntax. Table aliases can be defined with `AS` or space: `FROM table_name tn`. The FROM clause is processed first in query execution, determining the initial row set before WHERE filtering.

## Query Execution Order in MySQL

Understanding query execution order prevents logical errors in complex statements. This matters because writing conditions in the wrong clause produces incorrect results. The standard MySQL SELECT execution order is:
1. FROM & JOINs - define working table set
2. WHERE - filter rows from working set
3. GROUP BY - create groups from filtered rows
4. HAVING - filter groups based on aggregates
5. SELECT - compute expressions and apply DISTINCT
6. ORDER BY - sort the final result set
7. LIMIT - restrict number of returned rows
Clauses must appear in this order; syntax errors occur if reordered.

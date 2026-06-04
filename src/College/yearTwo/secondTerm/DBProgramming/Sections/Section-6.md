---
title: Section 6
prev:
  text: "Section 5"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-5"
next:
  text: "Section 7"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-7"
---

# Database Programming - Section 6

## SELECT DISTINCT

Returns only distinct (different) values, removing duplicates.

```sql
SELECT DISTINCT Country FROM Customers;
SELECT COUNT(DISTINCT Country) FROM Customers;
```

## WHERE Clause

Filters records based on a condition. Used with SELECT, UPDATE, DELETE.

```sql
SELECT * FROM Customers WHERE Country = 'Mexico';  -- text in quotes
SELECT * FROM Customers WHERE CustomerID = 1;       -- numeric, no quotes
```

Text values require **single quotes**. Numeric fields should not be quoted.

## AND, OR, NOT

```sql
AND  -- true if ALL conditions are true
OR   -- true if ANY condition is true
NOT  -- true if condition is NOT true
```

```sql
SELECT * FROM Customers WHERE Country = 'Germany' AND City = 'Berlin';
SELECT * FROM Customers WHERE City = 'Berlin' OR City = 'München';
SELECT * FROM Customers WHERE NOT Country = 'Germany';

-- Combining (use parentheses for complex expressions)
SELECT * FROM Customers
WHERE Country = 'Germany' AND (City = 'Berlin' OR City = 'München');

SELECT * FROM Customers
WHERE NOT Country = 'Germany' AND NOT Country = 'USA';
```

## ORDER BY

Sorts result-set in **ascending** (default) or **descending** order.

```sql
SELECT * FROM Customers ORDER BY Country;
SELECT * FROM Customers ORDER BY Country DESC;

-- Multiple columns: sorts by first, then second on ties
SELECT * FROM Customers ORDER BY Country, CustomerName;
SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;
```

## INSERT INTO

```sql
-- Specify columns and values
INSERT INTO Customers (CustomerName, ContactName, Address, City)
VALUES ('Cardinal', 'Tom B.', 'Skagen 21', 'Stavanger');

-- Insert only specified columns (others get NULL or auto-value)
INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');

-- Omit column names (values for ALL columns, in table order)
INSERT INTO Customers
VALUES (NULL, 'Cardinal', 'Tom B.', 'Skagen 21', 'Stavanger', 'Norway');
```

> [!NOTE]
> Auto-increment fields (e.g., CustomerID) are generated automatically — pass `NULL` or omit them.

## NULL Values

A field with **no value**. Different from zero or spaces. Cannot test with `=`, `<`, `<>`.

```sql
SELECT * FROM Customers WHERE Address IS NULL;
SELECT * FROM Customers WHERE Address IS NOT NULL;
```

## UPDATE

Modifies existing records. **Always use WHERE** — omitting it updates all records.

```sql
UPDATE Customers SET ContactName = 'Alfred', City = 'Frankfurt' WHERE CustomerID = 1;

-- Update multiple records matching condition
UPDATE Customers SET ContactName = 'Juan' WHERE Country = 'Mexico';
```

> [!WARNING]
> Omitting the WHERE clause in an UPDATE updates **all** rows in the table.

## DELETE

Deletes records. **Always use WHERE** — omitting it deletes all records.

```sql
DELETE FROM Customers WHERE CustomerName = 'Alfreds Futterkiste';

-- Delete all rows (table structure remains intact)
DELETE FROM Customers;
```

> [!WARNING]
> Omitting WHERE in DELETE removes **all** rows. Use with caution.

---

*3 min read (source: 9 min)*

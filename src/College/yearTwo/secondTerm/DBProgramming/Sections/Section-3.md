---
title: Section 3
prev:
  text: "Section 2"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-2"
next:
  text: "Section 4"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-4"
---

# Database Programming - Section 3

## SQL Aliases

Temporary name for a column or table, existing only for the query duration. Created with `AS`.

```sql
-- Column alias
SELECT CustomerID AS ID FROM Customers;

-- With spaces (requires quotes or brackets)
SELECT CustomerName AS [Customer Name] FROM Customers;

-- Concatenated column alias
SELECT Address + ', ' + PostalCode + ', ' + City AS Address FROM Customers;

-- Table alias
SELECT o.OrderID, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerID = o.CustomerID;
```

Useful when: multiple tables involved, functions used, column names are long, or combining columns.

## GROUP BY

Groups rows with the same values into summary rows. Used with aggregate functions: `COUNT`, `MAX`, `MIN`, `SUM`, `AVG`.

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;

SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;
```

## IN Operator

Shorthand for multiple `OR` conditions.

```sql
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');

-- Equivalent OR:
SELECT * FROM Customers
WHERE Country = 'Germany' OR Country = 'France' OR Country = 'UK';

-- NOT IN
SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');

-- Subquery with IN
SELECT * FROM Customers
WHERE Country IN (SELECT Country FROM Suppliers);
```

## BETWEEN Operator

Selects values within an **inclusive** range (begin and end values are included). Works with numbers, text, and dates.

```sql
-- Numeric range
SELECT * FROM Products WHERE Price BETWEEN 10 AND 20;

-- NOT BETWEEN
SELECT * FROM Products WHERE Price NOT BETWEEN 10 AND 20;

-- Combined with IN
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20
  AND CategoryID NOT IN (1, 2, 3);

-- Text range
SELECT * FROM Products
WHERE ProductName BETWEEN 'Carnarvon Tigers' AND 'Mozzarella di Giovanni';

-- Date range
SELECT * FROM Orders
WHERE OrderDate BETWEEN '1996-07-01' AND '1996-07-31';
```

## LIKE Operator

Pattern matching in WHERE clause using wildcards.

| Wildcard | Matches |
|----------|---------|
| `%` | Zero, one, or multiple characters |
| `_` | Exactly one character |

```sql
-- Starts with "a"
SELECT * FROM Customers WHERE CustomerName LIKE 'a%';
-- Ends with "a"
SELECT * FROM Customers WHERE CustomerName LIKE '%a';
-- Contains "or" in any position
SELECT * FROM Customers WHERE CustomerName LIKE '%or%';
-- "r" in second position
SELECT * FROM Customers WHERE CustomerName LIKE '_r%';
-- Starts with "a", at least 3 characters
SELECT * FROM Customers WHERE CustomerName LIKE 'a_%_%';
-- Starts with "a" and ends with "o"
SELECT * FROM Customers WHERE ContactName LIKE 'a%o';
-- Does NOT start with "a"
SELECT * FROM Customers WHERE CustomerName NOT LIKE 'a%';
```

---

*2 min read (source: 6 min)*

---
title: Section 9
prev:
  text: "Section 8"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-8"
next: false
---

# Database Programming - Section 9

## SQL Joins

Combine rows from two or more tables based on a related column.

### INNER JOIN

Returns records with **matching values in both tables**.

```sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
```

If a record in Orders has no match in Customers, it is excluded.

### LEFT (OUTER) JOIN

Returns **all records from the left table**, plus matching records from the right. Non-matching right-side columns are NULL.

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
```

### RIGHT (OUTER) JOIN

Returns **all records from the right table**, plus matching records from the left.

```sql
SELECT Orders.OrderID, Employees.LastName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID;
```

### FULL OUTER JOIN

Returns all records where there is a match in **either** table. Can produce very large result-sets.

```sql
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
```

### SELF JOIN

Regular join where a table is joined with itself using different aliases.

```sql
SELECT A.CustomerName AS Customer1, B.CustomerName AS Customer2
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID;
```

### CROSS JOIN

Returns all records from both tables — rows from table1 × rows from table2 (Cartesian product). Adding a WHERE clause makes it behave like an INNER JOIN.

```sql
SELECT * FROM Customers CROSS JOIN Orders;
```

### JOIN Three Tables

```sql
SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders
  INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
  INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
```

## Stored Procedures

A collection of **pre-compiled SQL statements** stored inside the database. Contains a name, parameter lists, and SQL statements.

### Parameter Types

| Type | Description |
|------|-------------|
| `IN` | Input parameter (default) |
| `OUT` | Output parameter — returns a value to the caller |
| `INOUT` | Both input and output |

```sql
DELIMITER //
CREATE PROCEDURE GetCustomer(IN custID INT, OUT custName VARCHAR(100))
BEGIN
  SELECT CustomerName INTO custName FROM Customers WHERE CustomerID = custID;
END //
DELIMITER ;

CALL GetCustomer(1, @name);
SELECT @name;
```

---

*2 min read (source: 4 min)*

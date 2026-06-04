---
title: Section 4
prev:
  text: "Section 3"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-3"
next:
  text: "Section 5"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-5"
---

# Database Programming - Section 4

## PRIMARY KEY

Uniquely identifies each record. Must contain **UNIQUE** values, **cannot contain NULL**. One PRIMARY KEY per table, can span multiple columns.

```sql
-- Single column
CREATE TABLE Persons (
  ID int NOT NULL PRIMARY KEY,
  LastName varchar(255)
);

-- Named constraint on multiple columns (composite key)
CREATE TABLE Persons (
  ID int NOT NULL,
  LastName varchar(255) NOT NULL,
  CONSTRAINT PK_Person PRIMARY KEY (ID, LastName)
);

-- On ALTER TABLE
ALTER TABLE Persons ADD PRIMARY KEY (ID);

-- Composite on ALTER
ALTER TABLE Persons ADD CONSTRAINT PK_Person PRIMARY KEY (ID, LastName);

-- Drop PRIMARY KEY
ALTER TABLE Persons DROP PRIMARY KEY;
```

> [!WARNING]
> When adding a PRIMARY KEY via ALTER TABLE, the column(s) must already be NOT NULL.

## FOREIGN KEY

Prevents actions that would destroy links between tables. References the PRIMARY KEY in another table.

- **Child table** — table with the FOREIGN KEY
- **Parent (referenced) table** — table with the PRIMARY KEY

Prevents invalid data from being inserted into the foreign key column — must match an existing value in the parent table.

```sql
-- On CREATE TABLE (single column)
CREATE TABLE Orders (
  OrderID int NOT NULL PRIMARY KEY,
  PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
);

-- Named constraint on multiple columns
CREATE TABLE Orders (
  OrderID int NOT NULL,
  PersonID int,
  CONSTRAINT FK_OrderPerson FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);

-- On ALTER TABLE
ALTER TABLE Orders ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);

-- Drop FOREIGN KEY
ALTER TABLE Orders DROP FOREIGN KEY FK_OrderPerson;
```

## SQL Statements Overview

```sql
SELECT * FROM Customers;   -- Extract data
UPDATE table SET col=val WHERE condition;
DELETE FROM table WHERE condition;
INSERT INTO table (col1, col2) VALUES (val1, val2);
CREATE INDEX idx_name ON table (column);  -- Search key
```

SQL keywords are **not case-sensitive**. Semicolon separates statements.

## SQL Comments

```sql
-- Single-line comment
SELECT * FROM Customers;  -- inline comment

/* Multi-line
   comment */
SELECT * FROM Products;
```

## SQL Operators

### Arithmetic

`+`, `-`, `*`, `/`, `%`

### Comparison

`=`, `>`, `<`, `>=`, `<=`, `<>` (not equal)

### Logical

`ALL`, `AND`, `ANY`, `BETWEEN`, `EXISTS`, `IN`, `LIKE`, `NOT`, `OR`, `IS NULL`, `UNIQUE`

### Bitwise

`&` (AND), `|` (OR), `^` (XOR)

---

*2 min read (source: 6 min)*

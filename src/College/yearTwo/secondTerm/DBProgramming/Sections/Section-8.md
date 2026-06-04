---
title: Section 8
prev:
  text: "Section 7"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-7"
next:
  text: "Section 9"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-9"
---

# Database Programming - Section 8

## LIMIT Clause

Specifies the number of records to return. Useful on large tables to improve performance.

```sql
-- Return only the first 3 records
SELECT * FROM Customers LIMIT 3;

-- With WHERE clause
SELECT * FROM Customers WHERE Country = 'Germany' LIMIT 3;
```

## CHECK Constraint

Limits the value range that can be placed in a column. Can reference other columns in the same row when defined as a table-level constraint.

```sql
-- On CREATE TABLE (column-level)
CREATE TABLE Persons (
  ID int NOT NULL,
  Age int CHECK (Age >= 18)
);

-- Named constraint on multiple columns
CREATE TABLE Persons (
  ID int NOT NULL,
  Age int,
  CONSTRAINT CHK_Person CHECK (Age >= 18 AND City = 'Cairo')
);

-- On ALTER TABLE
ALTER TABLE Persons ADD CHECK (Age >= 18);
ALTER TABLE Persons ADD CONSTRAINT CHK_Person CHECK (Age >= 18 AND City = 'Cairo');

-- Drop CHECK
ALTER TABLE Persons DROP CHECK CHK_Person;
```

## Indexes

Used to retrieve data faster. Users cannot see indexes. Updating a table **takes longer** with indexes (indexes must be updated too). Only create indexes on columns frequently searched.

```sql
-- CREATE INDEX (allows duplicates)
CREATE INDEX idx_lastname ON Persons (LastName);

-- CREATE UNIQUE INDEX (no duplicates allowed)
CREATE UNIQUE INDEX idx_unique_id ON Persons (ID);

-- Composite index (multiple columns)
CREATE INDEX idx_name ON Persons (LastName, FirstName);

-- DROP INDEX
DROP INDEX idx_lastname ON Persons;
```

## AUTO_INCREMENT

Generates a unique number automatically when a new record is inserted. Default starts at **1**, increments by **1** for each new record.

```sql
CREATE TABLE Persons (
  Personid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  FirstName varchar(255)
);

-- Start from a different value
ALTER TABLE Persons AUTO_INCREMENT = 100;

-- Insert (do NOT specify the auto-increment column)
INSERT INTO Persons (FirstName) VALUES ('Lars');
```

---

*2 min read (source: 5 min)*

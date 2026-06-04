---
title: Section 2
prev:
  text: "Section 1"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-1"
next:
  text: "Section 3"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-3"
---

# Database Programming - Section 2

## SQL Data Types

Six categories:

| Category | Examples |
|----------|----------|
| Exact Numeric | `INT`, `SMALLINT`, `DECIMAL`, `NUMERIC`, `BIT` |
| Approximate Numeric | `FLOAT`, `REAL` |
| Date and Time | `DATE`, `DATETIME`, `TIMESTAMP`, `YEAR` |
| Character Strings | `CHAR`, `VARCHAR`, `TEXT` |
| Unicode Character Strings | `NCHAR`, `NVARCHAR`, `NTEXT` |

## Database Operations

```sql
CREATE DATABASE databasename;
DROP DATABASE databasename;     -- loses complete info, admin privilege required
SHOW DATABASES;
```

### Backup

```sql
-- Full backup
BACKUP DATABASE databasename TO DISK = 'filepath';

-- Differential (only changes since last full backup)
BACKUP DATABASE databasename TO DISK = 'filepath' WITH DIFFERENTIAL;
```

Always back up to a different drive than the actual DB.

## Table Operations

### CREATE TABLE

```sql
CREATE TABLE Persons (
  PersonID int,
  LastName varchar(255),
  FirstName varchar(255)
);
```

### Create Table From Another Table

```sql
CREATE TABLE TestTables AS
SELECT column1, column2
FROM Customers
WHERE condition;
```

### ALTER TABLE

```sql
-- Add column
ALTER TABLE table_name ADD column_name datatype;

-- Rename column
ALTER TABLE table_name RENAME COLUMN old_name TO new_name;

-- Change datatype
ALTER TABLE table_name ALTER COLUMN column_name datatype;

-- Drop column
ALTER TABLE table_name DROP COLUMN column_name;
```

## Constraints

Rules enforced on data columns. Can be **column-level** (one column) or **table-level** (entire table). If violated, the action is aborted.

| Constraint | Description |
|------------|-------------|
| **NOT NULL** | Column cannot have a NULL value |
| **UNIQUE** | All values in a column are different; can have many per table |
| **PRIMARY KEY** | NOT NULL + UNIQUE; uniquely identifies each row; one per table |
| **FOREIGN KEY** | Prevents actions that would destroy links between tables |
| **CHECK** | Ensures values satisfy a specific condition |

Specified at CREATE TABLE or added later with ALTER TABLE.

### NOT NULL

```sql
-- On CREATE TABLE
CREATE TABLE Persons (
  ID int NOT NULL,
  LastName varchar(255) NOT NULL,
  FirstName varchar(255) NOT NULL
);

-- On ALTER TABLE
ALTER TABLE Persons MODIFY Age int NOT NULL;
```

### UNIQUE

```sql
-- On CREATE TABLE (single column)
CREATE TABLE Persons (
  ID int UNIQUE,
  LastName varchar(255)
);

-- Named constraint on multiple columns
CREATE TABLE Persons (
  ID int,
  CONSTRAINT UC_Person UNIQUE (ID, LastName)
);

-- On ALTER TABLE
ALTER TABLE Persons ADD UNIQUE (ID);

-- Drop a UNIQUE constraint
ALTER TABLE Persons DROP INDEX UC_Person;
```

> [!NOTE]
> PRIMARY KEY automatically has UNIQUE. One PRIMARY KEY per table, many UNIQUE constraints per table.

---

*3 min read (source: 10 min)*

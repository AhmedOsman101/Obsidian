---
prev:
  text: "Section 1"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-1"
next:
  text: "Section 3"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-3"
title: Section 2
---

# Database Programming - Section 2

## SQL Data Types and Why They Matter

A **SQL data type** is an attribute that specifies what kind of data a column, variable, or expression can hold. This matters because the database uses the data type to decide valid values, storage rules, and operations that can be performed correctly. The lecture groups SQL Server data types into six categories, including **exact numeric**, **approximate numeric**, **date and time**, **character string**, and **Unicode character string** types.

The boundary is that a data type does not describe the business meaning of a column; it describes the allowed form of the value. If a column is defined with an incompatible type, insertion or later processing becomes incorrect or impossible.

| Category                     | What it stores         | Why it matters                                                   |
| ---------------------------- | ---------------------- | ---------------------------------------------------------------- |
| **Exact numeric**            | Precise numbers        | Needed when values must stay exact                               |
| **Approximate numeric**      | Rounded numeric values | Accepts approximation in exchange for representation flexibility |
| **Date and time**            | Temporal values        | Separates dates from plain text                                  |
| **Character string**         | Standard text          | Stores names and labels                                          |
| **Unicode character string** | Multilingual text      | Supports wider character sets                                    |

## CREATE and DROP DATABASE

**`CREATE DATABASE`** creates a new database, while **`DROP DATABASE`** removes an existing one completely. This matters because these commands act on the whole database, not on a single table. The required syntax is direct, and the lecture emphasizes that administrative privilege is needed before creating or dropping a database.

After creation or deletion, **`SHOW DATABASES;`** is used to verify the result. The order matters: create or drop first, then check the database list to confirm the system state. A dropped database causes loss of all stored information, so **`DROP DATABASE`** is destructive rather than reversible in normal use.

```sql
-- Purpose: Create a new database and verify it exists
CREATE DATABASE databasename;
SHOW DATABASES;

-- Purpose: Remove an existing database and verify removal
DROP DATABASE databasename;
SHOW DATABASES;
```

> [!WARNING]
> _Dropping a database removes the complete stored information, not just one table or one group of records._

## Full vs. Differential Backup

**`BACKUP DATABASE`** creates a full backup of an existing database. A **full backup** copies the complete database state, so it is the main recovery baseline. The lecture also introduces **`WITH DIFFERENTIAL`**, which creates a **differential backup** containing only the parts changed since the last full backup.

This distinction matters because the backup type changes both time and recovery strategy. A full backup is larger but self-contained. A differential backup is faster because only changed data is copied, but it depends on a previous full backup. The lecture also gives a critical storage rule: back up to a different drive than the original database so a disk crash does not destroy both the working database and its backup file.

| Backup type             | What it copies                 | Main advantage         | Main limit                  |
| ----------------------- | ------------------------------ | ---------------------- | --------------------------- |
| **Full backup**         | Entire database                | Complete recovery base | More time and storage       |
| **Differential backup** | Changes since last full backup | Faster backup          | Depends on last full backup |

## CREATE TABLE and Table Copy Logic

**`CREATE TABLE`** creates a new table inside a database. The column definitions include both the **column name** and its **data type**, so table structure is declared before data is inserted. This matters because SQL validates future records against the defined schema.

The lecture also shows **`CREATE TABLE ... AS SELECT ...`**, which creates a new table from an existing table. The boundary is important: this form copies selected column definitions and fills the new table with existing values returned by the `SELECT` query. It is not just an empty structure unless the query is designed that way.

```sql
-- Purpose: Create a table by defining its schema directly
CREATE TABLE table_name (
  column1 datatype,
  column2 datatype
);

-- Purpose: Create a new table from data selected from another table
CREATE TABLE new_table_name AS
SELECT column1, column2
FROM existing_table_name;
```

## ALTER TABLE Operations

**`ALTER TABLE`** changes an existing table without recreating it. The lecture covers four main operations: **`ADD`** a column, **`RENAME COLUMN`**, **`ALTER COLUMN`** to change the data type, and **`DROP COLUMN`** to remove a column. This matters because the schema can evolve after creation.

If the goal is to extend the table, use **`ADD`**. If the column name is wrong but the data purpose is the same, use **`RENAME COLUMN`**. If the stored value format must change, use **`ALTER COLUMN`**. If the field is no longer needed, use **`DROP COLUMN`**. The order matters because changing or deleting columns after data exists may affect later queries and stored values.

```sql
-- Purpose: Add, rename, modify, or remove columns in an existing table
ALTER TABLE table_name ADD column_name datatype;
ALTER TABLE table_name RENAME COLUMN old_name TO new_name;
ALTER TABLE table_name ALTER COLUMN column_name datatype;
ALTER TABLE table_name DROP COLUMN column_name;
```

## Constraints, NOT NULL, and UNIQUE vs. PRIMARY KEY

**SQL constraints** are rules that restrict what data can be stored in a table. They can be defined during **`CREATE TABLE`** or later with **`ALTER TABLE`**. If a data action violates a constraint, the action is aborted, so constraints protect accuracy and reliability before bad data is stored.

The lecture lists **`NOT NULL`**, **`UNIQUE`**, **`PRIMARY KEY`**, **`FOREIGN KEY`**, and **`CHECK`**. **`NOT NULL`** means a column cannot contain null values. **`UNIQUE`** means all values in the column must differ. **`PRIMARY KEY`** combines **`NOT NULL`** and **`UNIQUE`**, so it uniquely identifies each row. A table may have many **`UNIQUE`** constraints but only one **`PRIMARY KEY`**. A **`FOREIGN KEY`** preserves links between tables, and **`CHECK`** enforces a condition.

| Constraint      | Rule enforced                  | Boundary                      |
| --------------- | ------------------------------ | ----------------------------- |
| **NOT NULL**    | No null value allowed          | Does not guarantee uniqueness |
| **UNIQUE**      | No duplicate values            | Table can have many           |
| **PRIMARY KEY** | Unique and not null            | Table can have only one       |
| **FOREIGN KEY** | Protects table relationships   | Depends on referenced table   |
| **CHECK**       | Value must satisfy a condition | Rejects violating actions     |

> [!IMPORTANT]
> _Every primary key is unique and not null, but not every unique column is a primary key._

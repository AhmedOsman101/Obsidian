---
title: Lecture 2
prev:
  text: "Lecture 1"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-1"
next:
  text: "Lecture 3"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-3"
---

# Database Programming - Lecture 2

## MySQL Data Types

A **data type** specifies a kind of data (integer, float, Boolean), its possible values, operations, and storage. Each column in a table has one type. Categories: numeric, string, date/time, JSON.

### Numeric Types

| Type | Details |
|------|---------|
| **Integer** | Whole numbers; signed or unsigned; subdivided by size (length and range) |
| **FLOAT/DOUBLE** | Approximate decimal storage |
| **DECIMAL(M,D)** | Precise decimal; M = max digits, D = decimal places. Use for money |
| **BIT(n)** | Bit-field values (1–64 bits). BIT(1) uses 1 byte, BIT(8) uses 1 byte, BIT(9) uses 2 bytes |

### String Types

| Type | Details |
|------|---------|
| **CHAR(n)** | Fixed length — always stores n characters, pads with spaces |
| **VARCHAR(n)** | Variable length — stores only actual string length |
| **TEXT** | Large text storage (TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT) |
| **BINARY/VARBINARY** | Binary data (images, files, encrypted data) |
| **ENUM** | Choose exactly one value from a predefined list |
| **SET** | Choose multiple values from a predefined list |

### Date & Time Types

| Type | Format | Range | Storage | Notes |
|------|--------|-------|---------|-------|
| **DATE** | YYYY-MM-DD | 1000-01-01 to 9999-12-31 | 3 bytes | Date only |
| **DATETIME** | YYYY-MM-DD HH:MM:SS | 1000-01-01 00:00:00 to 9999-12-31 23:59:59 | 8 bytes | Date and time |
| **TIMESTAMP** | YYYY-MM-DD HH:MM:SS | 1970-01-01 00:00:01 UTC to 2038-01-19 03:14:07 UTC | 4 bytes | UTC conversion; adjusts to session time zone on retrieval |
| **TIME** | HH:MM:SS | -838:59:59 to 838:59:59 | 3 bytes | Time only |

> [!WARNING]
> TIMESTAMP range ends at **2038-01-19** (32-bit overflow). Use DATETIME for dates beyond that.

### JSON Type

Stores structured **JSON** objects. Objects use `{}` with key-value pairs; arrays use `[]` with value lists.

## Database Operations

| Command | Syntax | Notes |
|---------|--------|-------|
| **CREATE DATABASE** | `CREATE DATABASE [IF NOT EXISTS] db_name;` | DDL statement |
| **SHOW DATABASES** | `SHOW DATABASES;` | Lists all databases |
| **USE** | `USE db_name;` | Switch to database; semicolon optional |
| **DROP DATABASE** | `DROP DATABASE [IF EXISTS] db_name;` | Deletes database entirely |
| **Export** | `mysqldump -u user -p db_name > file.sql` | Backups via CLI tool |
| **Import** | `mysql -u user -p new_db < dumpfile.sql` | Restore from backup |

`mysqldump` can export specific tables (`mysqldump -u user -p db table1 table2 > file.sql`) or all databases (`--all-databases`).

## Table Operations

### CREATE TABLE

```sql
CREATE TABLE [IF NOT EXISTS] table_name (
  column1 datatype,
  column2 datatype,
  ...
  columnN datatype
);
```

Use `IF NOT EXISTS` to prevent errors if the table already exists.

### SHOW & DESCRIBE

| Command | Purpose |
|---------|---------|
| `SHOW TABLES;` | List tables in current database |
| `SHOW FULL TABLES;` | Include table type (BASE TABLE, VIEW, SYSTEM VIEW) |
| `SHOW TABLES IN db_name;` | List tables in a different database |
| `SHOW COLUMNS FROM table_name;` | Display column information |
| `DESCRIBE table_name;` | Show table structure (columns, types, constraints) |
| `DESC table_name;` | Shortcut for DESCRIBE |
| `EXPLAIN table_name;` | Synonym for DESCRIBE |

All three — `DESCRIBE`, `DESC`, `EXPLAIN` — return the same output.

### RENAME TABLE

```sql
RENAME TABLE old_name TO new_name;
-- Multiple tables:
RENAME TABLE t1 TO n1, t2 TO n2, t3 TO n3;
```

### TRUNCATE TABLE

```sql
TRUNCATE TABLE table_name;
```

Deletes **all data** from the table but keeps the table structure. Unlike `DROP TABLE`, which removes both data and structure.

### TEMPORARY TABLE

```sql
CREATE TEMPORARY TABLE table_name (...);
```

Automatically deleted when the current client session ends. Introduced in MySQL 3.23+.

```sql
DROP TEMPORARY TABLE table_name;
```

### DROP TABLE

```sql
DROP TABLE table_name;
```

Completely removes both data and table structure.

### ALTER TABLE

Modifies an existing table's structure.

| Operation | Syntax |
|-----------|--------|
| **Add column** | `ALTER TABLE t ADD col_name datatype;` |
| **Drop column** | `ALTER TABLE t DROP col_name;` — fails if it is the only column |
| **Reposition** | `ALTER TABLE t ADD col INT FIRST;` or `ALTER TABLE t ADD col INT AFTER other_col;` |
| **Modify definition** | `ALTER TABLE t MODIFY col new_datatype;` |
| **Rename column** | `ALTER TABLE t CHANGE old_name new_name definition;` |
| **Set default** | `ALTER TABLE t ALTER col SET DEFAULT value;` |
| **Drop default** | `ALTER TABLE t ALTER col DROP DEFAULT;` |
| **Rename table** | `ALTER TABLE t RENAME TO new_name;` |

---

*5 min read (source: 16 min)*

---
title: Lecture 3
prev:
  text: "Lecture 2"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-2"
next:
  text: "Lecture 4"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-4"
---

# Database Programming - Lecture 3

## Database Operations

| Command | Syntax | Notes |
|---------|--------|-------|
| **CREATE DATABASE** | `CREATE DATABASE [IF NOT EXISTS] db_name;` | DDL statement |
| **SHOW DATABASES** | `SHOW DATABASES;` | Lists all databases |
| **USE** | `USE db_name;` | Semicolon optional |
| **DROP DATABASE** | `DROP DATABASE [IF EXISTS] db_name;` | Irreversible; no rename command exists |
| **Export** | `mysqldump -u user -p db > file.sql` | Can export specific tables or all databases (`--all-databases`) |
| **Import** | `mysql -u user -p new_db < dumpfile.sql` | Restores from backup file |

`USE` and `QUIT` do not require semicolons.

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

```sql
CREATE TABLE users (
  user_id INT,
  username VARCHAR(50),
  email VARCHAR(100),
  registration_date DATE
);
```

### SHOW & DESCRIBE

| Command | Purpose |
|---------|---------|
| `SHOW TABLES;` | List tables in current database |
| `SHOW FULL TABLES;` | Includes type column (BASE TABLE, VIEW, SYSTEM VIEW) |
| `SHOW TABLES IN db_name;` or `FROM db_name` | List tables in another database |
| `SHOW COLUMNS FROM table_name;` | Column info for a table |
| `DESCRIBE table_name;` / `DESC table_name;` / `EXPLAIN table_name;` | Table structure (columns, types, constraints) |

`DESC` is shorthand for `DESCRIBE`. `EXPLAIN` is a synonym. All three produce identical output.

### RENAME TABLE

```sql
RENAME TABLE old_name TO new_name;
RENAME TABLE t1 TO n1, t2 TO n2, t3 TO n3;
```

### TRUNCATE TABLE

```sql
TRUNCATE TABLE table_name;
```

Deletes all data but keeps the table structure. Cannot be undone without a backup.

### DROP TABLE

```sql
DROP TABLE table_name;
```

Removes both data and structure. Irreversible without a backup.

### TEMPORARY TABLE

```sql
CREATE TEMPORARY TABLE table_name (...);
```

Auto-deleted when the client session ends. Available since MySQL 3.23.

```sql
DROP TEMPORARY TABLE table_name;
```

### ALTER TABLE

Modifies table structure. Supports these operations:

| Operation | Syntax Example |
|-----------|---------------|
| **ADD column** | `ALTER TABLE t ADD age INT;` |
| **Reposition column** | `ALTER TABLE t ADD id INT FIRST;` / `ALTER TABLE t ADD id INT AFTER name;` |
| **MODIFY column** (change datatype) | `ALTER TABLE t MODIFY age TINYINT;` |
| **CHANGE column** (rename + redefine) | `ALTER TABLE t CHANGE age student_age INT;` |
| **DROP column** | `ALTER TABLE t DROP age;` — fails if it is the last column |
| **ADD PRIMARY KEY** | `ALTER TABLE t ADD PRIMARY KEY(id);` |
| **DROP PRIMARY KEY** | `ALTER TABLE t DROP PRIMARY KEY;` |
| **ADD FOREIGN KEY** | `ALTER TABLE t ADD CONSTRAINT fk_name FOREIGN KEY(col) REFERENCES other(col);` |
| **ADD UNIQUE** | `ALTER TABLE t ADD UNIQUE(email);` |
| **SET DEFAULT** | `ALTER TABLE t ALTER col SET DEFAULT val;` |
| **DROP DEFAULT** | `ALTER TABLE t ALTER col DROP DEFAULT;` |
| **RENAME TO** | `ALTER TABLE t RENAME TO new_name;` |

> [!NOTE]
> `MODIFY` changes only the datatype/definition. `CHANGE` renames the column and can also change its definition — the old column name must be provided, then the new name and definition.

---

*4 min read (source: 12 min)*

---
title: Lecture 8
prev:
  text: "Lecture 7"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-7"
next:
  text: "Lecture 9"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-9"
---

# Database Programming - Lecture 8

## Stored Procedures

A **pre-compiled** collection of SQL statements stored inside the database. Accepts parameters, supports conditional logic. Introduced in MySQL 5.

```sql
DELIMITER &&
CREATE PROCEDURE procedure_name ([IN | OUT | INOUT] param datatype)
BEGIN
  declaration_section;
  executable_section;
END &&
DELIMITER ;
```

Called explicitly: `CALL procedure_name(args);`

### Parameter Modes

| Mode | Direction | Description |
|------|-----------|-------------|
| **IN** (default) | → procedure | Passes a value into the procedure (like a function argument) |
| **OUT** | procedure → | Returns a value to the caller via session variable (`@var`) |
| **INOUT** | ↔ | Passes value in and returns a modified value out |

```sql
CALL get_count_by_age(25, @total);  -- OUT param → @total
SELECT @total;
```

### Managing Procedures

```sql
SHOW PROCEDURE STATUS WHERE db = 'dbname';
DROP PROCEDURE [IF EXISTS] name;
-- ALTER PROCEDURE is very limited: can only change SQL SECURITY, COMMENT, DEFINER, NOT DETERMINISTIC
```

## Triggers

A **stored procedure invoked automatically** in response to a DML event (`INSERT`, `UPDATE`, `DELETE`). Unlike procedures: no parameters, cannot be called explicitly.

```sql
CREATE TRIGGER trigger_name
{BEFORE | AFTER} {INSERT | UPDATE | DELETE}
ON table_name FOR EACH ROW
BEGIN
  -- logic
END;
```

### Trigger Timing

- **BEFORE** — validate/modify data before it is written
- **AFTER** — perform actions after data is committed

### Managing Triggers

```sql
SHOW TRIGGERS;
SHOW TRIGGERS LIKE '%pattern%';
SHOW TRIGGERS WHERE condition;
DROP TRIGGER [IF EXISTS] trigger_name;
SHOW WARNINGS;  -- shows NOTE when dropping non-existent trigger with IF EXISTS
```

### Example: AFTER INSERT

```sql
CREATE TRIGGER after_insert_student
AFTER INSERT ON student_info FOR EACH ROW
BEGIN
  INSERT INTO student_detail (student_id, created_at)
  VALUES (NEW.id, NOW());
END;
```

Uses `NEW` keyword to reference the inserted row.

## Views

A **virtual table** based on the result set of a `SELECT` statement. Contains rows and columns like a real table. Use to structure data, restrict access, and summarize from multiple tables.

```sql
CREATE VIEW view_name AS
SELECT columns FROM table WHERE condition;
```

### WITH CHECK OPTION

Ensures `UPDATE` and `INSERT` operations satisfy the view's `WHERE` condition — rejects rows that would disappear from the view.

```sql
CREATE VIEW adult_users AS
SELECT * FROM users WHERE age >= 18
WITH CHECK OPTION;
```

### Managing Views

```sql
ALTER VIEW view_name AS SELECT ... ;   -- modify without dropping
DROP VIEW view_name;
```

Views can join multiple tables:

```sql
CREATE VIEW order_summary AS
SELECT o.id, c.name, o.total
FROM orders o JOIN customers c ON o.customer_id = c.id;
```

## Indexes

Speeds up data retrieval — like a book index. Creates an entry for each indexed column value.

- **Clustered index (PRIMARY)**: auto-created with PK or UNIQUE; determines physical data order
- **Non-clustered (secondary) index**: all other indexes; separate structure pointing to data rows

```sql
CREATE INDEX idx_name ON table (column);           -- allows duplicates
CREATE UNIQUE INDEX idx_name ON table (column);    -- no duplicates allowed
SHOW INDEX FROM table;
DROP INDEX idx_name ON table;
```

> [!NOTE]
> Without an index, MySQL scans the entire table row by row (full table scan). With an index, it locates matching rows directly from the index structure.

---

*4 min read (source: 12 min)*

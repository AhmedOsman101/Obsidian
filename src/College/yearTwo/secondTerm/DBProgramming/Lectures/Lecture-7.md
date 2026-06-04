---
title: Lecture 7
prev:
  text: "Lecture 6"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-6"
next:
  text: "Lecture 8"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-8"
---

# Database Programming - Lecture 7

## MySQL Constraints

Rules that allow/restrict values to ensure **data accuracy** and **integrity**. Defined on `CREATE TABLE` or added via `ALTER TABLE`.

| Level | Scope |
|-------|-------|
| **Column-level** | Single column |
| **Table-level** | Entire table |

### NOT NULL

Prevents NULL values in a column.

```sql
CREATE TABLE t (name VARCHAR(50) NOT NULL);
ALTER TABLE t MODIFY salary DECIMAL NOT NULL;
```

### DEFAULT

Supplies a default value when INSERT omits the column.

```sql
CREATE TABLE t (city VARCHAR(50) DEFAULT 'Cairo');
ALTER TABLE t ALTER city SET DEFAULT 'Cairo';
ALTER TABLE t ALTER city DROP DEFAULT;
```

Can use functions: `DEFAULT CURRENT_DATE()`.

### UNIQUE

Ensures all values in a column (or column set) are distinct.

```sql
CREATE TABLE t (age INT UNIQUE);
ALTER TABLE t ADD CONSTRAINT uc_unique UNIQUE (col1, col2);
ALTER TABLE t DROP INDEX uc_unique;
```

Multiple UNIQUE constraints per table allowed (unlike PK).

### PRIMARY KEY

Uniquely identifies each row. Must be **unique** and **NOT NULL**. One per table. Composite PK possible.

```sql
CREATE TABLE t (id INT PRIMARY KEY);
ALTER TABLE t ADD PRIMARY KEY (id);
ALTER TABLE t ADD PRIMARY KEY (id, names);    -- composite
ALTER TABLE t DROP PRIMARY KEY;
```

### FOREIGN KEY

Links a column to a **PRIMARY KEY** in another table (referencing key). Maintains **referential integrity**.

```sql
CREATE TABLE Orders (
  OrderID INT NOT NULL,
  PersonID INT,
  PRIMARY KEY (OrderID),
  FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);
ALTER TABLE Orders ADD CONSTRAINT fk_person
  FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);
ALTER TABLE Orders DROP FOREIGN KEY fk_person;
```

### CHECK

Validates that a column value satisfies a boolean condition. Insert/update fails if false.

```sql
CREATE TABLE Persons (
  Age INT CHECK (Age >= 18)
);
ALTER TABLE Persons ADD CONSTRAINT chk_age CHECK (Age >= 18);
ALTER TABLE Persons DROP CHECK chk_age;
```

### INDEX

Speeds up data retrieval. Creates a sorted reference with ROWIDs.

```sql
CREATE INDEX idx_age ON Customers (age);
DROP INDEX idx_age ON Customers;
```

### AUTO_INCREMENT

Generates sequential unique values automatically (starts at 1, increments by 1).

```sql
CREATE TABLE t (id INT AUTO_INCREMENT PRIMARY KEY);
ALTER TABLE t AUTO_INCREMENT = 100;
```

## MySQL Joins

Combine rows from two or more tables based on a related column.

| Join | Returns |
|------|---------|
| **INNER JOIN** | Only rows with matching values in **both** tables |
| **LEFT JOIN** | All rows from left table + matched rows from right (NULLs for non-matches) |
| **RIGHT JOIN** | All rows from right table + matched rows from left (NULLs for non-matches) |
| **FULL OUTER JOIN** | All rows from both tables (NULLs where no match) |
| **CROSS JOIN** | Cartesian product — every row of table A × every row of table B |

```sql
SELECT * FROM A INNER JOIN B ON A.id = B.id;
SELECT * FROM A LEFT JOIN B ON A.id = B.id;
SELECT * FROM A RIGHT JOIN B ON A.id = B.id;
SELECT * FROM A CROSS JOIN B;           -- Cartesian product
```

> [!NOTE]
> MySQL does not natively support `FULL OUTER JOIN`. Emulate via `LEFT JOIN UNION RIGHT JOIN`. `CROSS JOIN` with a `WHERE` clause behaves like `INNER JOIN`.

## User Management & Privileges

### CREATE USER

```sql
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```

Hostname is optional — omitting it allows connection from any host.

### GRANT

Assigns privileges to user accounts.

| Privilege | Allows |
|-----------|--------|
| `ALL PRIVILEGES` | Everything |
| `CREATE` | Create DBs and tables |
| `DROP` | Drop DBs and tables |
| `DELETE` | Delete rows |
| `INSERT` | Insert rows |
| `SELECT` | Read data |
| `UPDATE` | Update rows |

```sql
GRANT ALL PRIVILEGES ON db.* TO 'user'@'host';
GRANT SELECT, INSERT ON db.table TO 'user'@'host';
FLUSH PRIVILEGES;
```

`FLUSH PRIVILEGES` reloads grant tables so changes take effect immediately without restart.

### SHOW GRANTS

```sql
SHOW GRANTS FOR 'user'@'host';
```

### REVOKE

Removes previously granted privileges.

```sql
REVOKE privilege ON db.* FROM 'user'@'host';
```

### DROP USER

Removes a user account and its privileges. Requires `CREATE USER` or `DELETE` on `mysql` schema.

```sql
DROP USER 'user'@'host';
```

### SHOW USERS

```sql
SELECT user, host FROM mysql.user;
SELECT user, host, password_expired, account_locked FROM mysql.user;
```

### CURRENT USER

```sql
SELECT USER();
SELECT CURRENT_USER();
```

### Change Password

Three methods (MySQL 5.7.6+):

```sql
-- 1. UPDATE (mysql.user table)
USE mysql;
UPDATE user SET authentication_string = PASSWORD('newpass') WHERE user = 'peter' AND host = 'localhost';
FLUSH PRIVILEGES;

-- 2. SET PASSWORD
SET PASSWORD FOR 'peter'@'localhost' = PASSWORD('newpass');

-- 3. ALTER USER
ALTER USER 'peter'@'localhost' IDENTIFIED BY 'newpass';
```

> [!WARNING]
> Slide title says "Lec. 9" but file name is `Lecture-7.pdf`. Follow file numbering per course material rules.

---

*5 min read (source: 18 min)*

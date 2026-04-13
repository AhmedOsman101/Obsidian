---
prev:
  text: "Lecture 6"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-6"
next: false
title: Lecture 7
---

# Database Programming - Lecture 7

## MySQL Constraints: Definition and Scope

A **constraint** is a rule enforced on table columns that restricts what values can be stored. This matters because constraints ensure data accuracy and integrity by preventing invalid data from entering the table. If any operation violates a constraint, that operation fails.

MySQL classifies constraints into two levels. **Column-level constraints** apply only to a single column and limit that column's data. **Table-level constraints** apply to the entire table and can constrain multiple columns together.

> [!IMPORTANT]
> _A constraint violation causes the entire operation to fail. No partial data is inserted when a constraint is violated._

## NOT NULL and DEFAULT Constraints

**NOT NULL** ensures a column cannot hold a NULL value. This matters when a column must always contain data, such as an email or phone number. By default, MySQL allows NULL in columns unless NOT NULL is specified.

**DEFAULT** provides a preset value when an INSERT does not supply one. This matters when specific columns should have a known value for new records. The default can be a literal, an expression, or a function like CURRENT_DATE.

```sql
-- Purpose: Create table with NOT NULL and DEFAULT constraints
CREATE TABLE employees (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  city VARCHAR(50) DEFAULT 'Unknown',
  hired_date DATE DEFAULT (CURRENT_DATE)
);
```

## UNIQUE and PRIMARY KEY Constraints

**UNIQUE** ensures all values in a column differ from each other. This matters for columns that must not duplicate, such as email addresses or employee IDs. A table can have multiple UNIQUE constraints.

**PRIMARY KEY** uniquely identifies each row and has two rules: the column must contain unique values and cannot be NULL. A table can have only one PRIMARY KEY, which may consist of multiple columns forming a **composite key**. The primary key combines NOT NULL and UNIQUE automatically.

| Constraint      | Unique values | Allows NULL      | Table limit |
| --------------- | ------------- | ---------------- | ----------- |
| **UNIQUE**      | Yes           | Yes (per column) | Multiple    |
| **PRIMARY KEY** | Yes           | No               | One only    |

```sql
-- Purpose: Define PRIMARY KEY and UNIQUE at table level
CREATE TABLE users (
  id INT,
  email VARCHAR(100),
  CONSTRAINT pk_id PRIMARY KEY (id),
  CONSTRAINT uq_email UNIQUE (email)
);
```

## FOREIGN KEY Constraint

A **FOREIGN KEY** is a column or column combination in one table that references a PRIMARY KEY in another table. This matters because it creates a relationship between tables, ensuring referential integrity. A foreign key value must match an existing primary key value in the parent table, or be NULL.

**ON DELETE** and **ON UPDATE** actions control behavior when referenced rows change. Common actions include CASCADE (delete/update child rows), SET NULL (set foreign key to NULL), and RESTRICT (prevent the change).

```sql
-- Purpose: Create foreign key relationship
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
    ON DELETE CASCADE ON UPDATE CASCADE
);
```

> [!WARNING]
> _A foreign key column and its referenced primary key must have compatible data types. Mismatched types cause creation errors._

## CHECK and INDEX Constraints

**CHECK** ensures all values satisfy a condition. This matters when column values must meet specific rules, such as age being at least 18. MySQL evaluates the condition during INSERT and UPDATE; rows failing the check are rejected.

**INDEX** creates a data structure that speeds up data retrieval. This matters for frequently queried columns because the database can find rows without scanning the entire table. An index can be created on single or multiple columns.

```sql
-- Purpose: Create CHECK constraint and INDEX
CREATE TABLE products (
  id INT PRIMARY KEY,
  price DECIMAL(10,2),
  quantity INT,
  CONSTRAINT chk_price CHECK (price > 0),
  INDEX idx_price (price)
);
```

## AUTO_INCREMENT

**AUTO_INCREMENT** automatically generates sequential numbers for a column. This matters when each row needs a unique identifier without manual assignment. By default, it starts at 1 and increments by 1 for each new row. The starting value can be changed with AUTO_INCREMENT = n.

```sql
-- Purpose: Auto-increment primary key
CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);
```

## MySQL Joins: Combining Tables

A **JOIN** combines rows from two or more tables based on a related column. This matters because normalized databases store data across multiple tables, and joins reconstruct complete records.

**INNER JOIN** returns only rows with matching values in both tables. Rows without matches are excluded.

**LEFT JOIN** returns all rows from the left table and matching rows from the right table. Non-matching right-side columns show NULL.

**RIGHT JOIN** returns all rows from the right table and matching rows from the left table. Non-matching left-side columns show NULL.

**CROSS JOIN** produces the Cartesian product: every row from the first table combined with every row from the second. The result size equals rows in table A × rows in table B.

| Join type | Non-matching rows             | Result size         |
| --------- | ----------------------------- | ------------------- |
| **INNER** | Both excluded                 | Matching only       |
| **LEFT**  | Left preserved, NULL on right | All left + matches  |
| **RIGHT** | Right preserved, NULL on left | All right + matches |
| **CROSS** | None excluded                 | A × B rows          |

```sql
-- Purpose: Example joins
SELECT * FROM customers INNER JOIN orders ON customers.id = orders.cid;
SELECT * FROM customers LEFT JOIN orders ON customers.id = orders.cid;
SELECT * FROM customers CROSS JOIN products;
```

## User Management and Privileges

**CREATE USER** creates a new MySQL account. The account name consists of `username@hostname`, where hostname specifies where the user can connect from.

**GRANT** assigns privileges to a user. Common privileges include SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, and ALL PRIVILEGES.

**REVOKE** removes previously granted privileges from a user.

**FLUSH PRIVILEGES** reloads the grant tables to apply changes immediately without restarting the server.

```sql
-- Purpose: Create user and grant privileges
CREATE USER 'john'@'localhost' IDENTIFIED BY 'password123';
GRANT SELECT, INSERT ON mydb.* TO 'john'@'localhost';
FLUSH PRIVILEGES;
```

**DROP USER** deletes a user account and its privileges from the server.

**SET PASSWORD** or **ALTER USER** changes an existing user's password.

> [!NOTE]
> _The `@hostname` part of a username determines where they can connect from. `'user'@'localhost'` allows only local connections; `'user'@'%'` allows any host._

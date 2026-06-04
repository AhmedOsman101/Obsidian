---
title: Section 1
prev:
  text: "Sections"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/index"
next:
  text: "Section 2"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-2"
---

# Database Programming - Section 1

## SQL Overview

**SQL (Structured Query Language)** — language for storing and processing information in **relational databases** (tabular form, rows & columns). Used for store, update, remove, search, retrieve, and optimize DB performance.

**Advantages:** access data, describe/define/manipulate data, create/drop databases & tables, create views/stored procedures/functions, set permissions.

## SQL System Components

| Component | Description |
|-----------|-------------|
| **Table** | Basic element; rows & columns; related tables linked via keys (e.g., Product → Color via Color ID) |
| **Field / Attribute** | A column maintaining specific information about every record |
| **Record / Row** | Individual entry in a table |
| **Column** | Vertical entity containing all data for a specific field |
| **NULL** | A blank field with **no value** — distinct from zero or spaces |

## SQL Constraints

Rules enforced on columns to ensure data accuracy and reliability.

- **Column-level** — applies to one column
- **Table-level** — applies to entire table

Common constraints: NOT NULL, DEFAULT, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, INDEX.

## SQL Statements

Valid instructions composed of **SQL language elements** (identifiers, variables, search conditions).

```sql
INSERT INTO Mattress_table (brand_name, cost)
VALUES('A', '499');
```

### How SQL Works — Parser Stages

1. **Tokenizing** — replaces keywords with special symbols
2. **Correctness check** — verifies semantics (e.g., semi-colon required)
3. **Authorization check** — validates user permissions (e.g., only admin can delete)

## SQL Command Categories

| Category | Purpose | Examples |
|----------|---------|---------|
| **DDL** (Data Definition Language) | Design DB structure | CREATE, ALTER, DROP |
| **DQL** (Data Query Language) | Retrieve data | SELECT |
| **DML** (Data Manipulation Language) | Write/modify records | INSERT, UPDATE, DELETE, TRUNCATE |
| **DCL** (Data Control Language) | Manage user access | GRANT, REVOKE |
| **TCL** (Transaction Control Language) | Automatic DB changes | COMMIT, ROLLBACK, SAVEPOINT |

## Database Normalization

Process of efficiently organizing data to:
- **Eliminate redundant data** (same data in multiple tables)
- **Ensure data dependencies make sense** (only related data in one table)

Reduces storage space; ensures logical data organization.

**Data integrity — Entity Integrity:** no duplicate rows in a table.

## SQL Injection

Cyberattack inserting SQL queries into input fields to retrieve, modify, or corrupt data.

## SQL vs. MySQL vs. NoSQL

| | SQL | MySQL | NoSQL |
|---|---|---|---|
| **Definition** | Standard query language | Open-source RDBMS using SQL | Non-relational databases |
| **Storage** | Tabular | Tabular | Graphs, documents, columns, key-values |
| **Use case** | Transactional & analytical | Transactional & analytical | Responsive, heavy-usage apps |

---

*4 min read (source: 10 min)*

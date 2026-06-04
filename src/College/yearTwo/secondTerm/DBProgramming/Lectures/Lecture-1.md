---
title: Lecture 1
prev:
  text: "DBProgramming"
  link: "/College/yearTwo/secondTerm/DBProgramming/index"
next:
  text: "Lecture 2"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-2"
---

# Database Programming Lecture 1

## Database

A **database** organizes, stores, retrieves, and communicates related information. Its fundamental object is the **table**, composed of **rows (records)** and **columns (fields)**.

## Database Types

| Type | Characteristics | Examples |
|------|----------------|----------|
| **Centralized** | Stores data at one system; multi-location access via apps with authentication | Central Library system |
| **Distributed** | Data spread across multiple systems connected via communication links | Apache Cassandra, HBase, Ignite |
| **Relational** | Based on relational model; data in rows (tuples) and columns (attributes) forming tables (relations); uses SQL | MySQL, MS SQL Server, Oracle |
| **NoSQL** | No fixed schema; designed for scalability with unstructured/semi-structured data | MongoDB, Firebase, Cassandra |
| **Cloud** | Data stored virtually on cloud platforms; offers SaaS, PaaS, IaaS | AWS, Azure, Google Cloud SQL |

## Creating a Database

1. **Define purpose & requirements** — what data, relationships, access patterns, security needs
2. **Choose DB type** — relational (structured data), NoSQL (flexible/unstructured), cloud (scalable)
3. **Design schema & ERD** — define tables (entities), columns (attributes), primary keys, foreign keys
4. **Normalize** — 1NF (atomic values), 2NF (remove partial dependencies), 3NF (remove transitive dependencies)
5. **Create tables in SQL**
6. **Insert & query data**
7. **Secure & optimize** — `GRANT`/`REVOKE`, encryption, backups
8. **Connect to application**
9. **Backup & maintain**

## Keys

A **DBMS key** is an attribute or set of attributes that uniquely identifies a row in a relation.

| Key Type | Definition |
|----------|-----------|
| **Candidate Key** | Super key with no redundant attributes; as strong as the primary key |
| **Primary Key** | Chosen candidate key; value must be unique, non-NULL, and present in every row |
| **Alternate Key** | Candidate keys not selected as the primary key |
| **Foreign Key** | Attribute(s) in one relation that match the primary key of another relation; links tables |
| **Composite Key** | Primary key consisting of more than one attribute |

> [!WARNING]
> A foreign key value must match an existing primary key value in the referenced table. Foreign keys can be NULL, but primary keys cannot.

## Relationships

A **relationship** is a logical connection between tables, established by linking fields (same name, data type, size).

| Type | Table A → Table B | Table B → Table A |
|------|-------------------|-------------------|
| **One-to-One** | 1 record | 1 record |
| **One-to-Many** | 1 or more records | 1 record |
| **Many-to-Many** | 1 or more records | 1 or more records |

## Database Management Systems (DBMS)

A **DBMS** is software that helps create and maintain databases. It handles security, backups, import/export, **concurrency** (multiple users accessing data simultaneously without interference), and application interaction. The four main operations: **Create, Read, Update, Delete (CRUD)**. An **RDBMS** uses SQL queries to access data.

## SQL

**SQL (Structured Query Language)** is a standardized language for interacting with RDBMS. It is an ANSI standard but implementations vary between systems — SQL code is not always portable without modification.

### SQL Statement Types

| Type | Purpose |
|------|---------|
| **DQL (Data Query Language)** | Query the database for stored information |
| **DDL (Data Definition Language)** | Define database schemas |
| **DCL (Data Control Language)** | Control access, user and permissions management |
| **DML (Data Manipulation Language)** | Insert, update, delete data |
| **TCL (Transaction Control Language)** | Manage transactions |

## MySQL

**MySQL** is a relational DBMS that is open-source, free, cross-platform, and ANSI SQL-compliant. It suits both small and large applications. First released in 1995, developed and supported by Oracle Corporation. Supports Linux, macOS, Windows, and APIs for C, C++, Java, .NET, Perl, PHP, Python.

Used by Facebook, Twitter, Booking.com, Uber, GitHub, YouTube, WordPress, Drupal.

To build a data-driven website: **RDBMS (MySQL)** + **server-side language (PHP)** + **SQL** + **HTML/CSS**.

Installation: download the MySQL installer from `https://dev.mysql.com/downloads/windows/installer/`. Choose the web-community installer (with internet) or the standalone installer (without internet).

---

*5 min read (source: 16 min)*

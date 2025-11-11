# Lecture 2: Database Management Systems (DBMS)

## What is a DBMS?

A **Database Management System (DBMS)** is a collection of programs that:

- **Manages** the database structure.
- **Controls access** to stored data.
- Acts as an **intermediary** between users and the database.

### Role of the DBMS

- Facilitates data sharing and integration.
- Provides users with a unified, abstracted view of the data.
- Translates user/application requests into low-level database operations.
- Hides internal complexity from users and applications.

## Advantages and Need for a DBMS

- **Improved Data Integration** – reduces redundancy and inconsistency.
- **Increased Productivity** – simplifies searching and data retrieval.
- **Enhanced Data Sharing** – multiple users can access data simultaneously.
- **Better Security and Access Control** – centralized authorization and authentication.
- **Improved Data Quality** – ensures accuracy, validity, and timeliness.
- **Automatic Backup and Recovery** – protects against data loss.
- **Support for Decision Making** – reliable, consolidated information for analysis.
- **Data Concurrency** – prevents simultaneous conflicting updates through locking mechanisms.

## Core Functions of a DBMS

### 1. Data Definition (DDL)

- Defines and maintains the database schema.
- Handles creation, modification, and deletion of objects (tables, indexes, etc.).

### 2. Data Retrieval and Reporting

- Extracts and presents data for analysis and decision-making.
- Supports both predefined and custom reporting templates.

### 3. Data Manipulation

- Enables **CRUD** operations (Create, Read, Update, Delete).
- Supports querying and real-time data updates.

### 4. Access Control

- Manages concurrent access by multiple users.
- Two mechanisms:
  - **Authentication** – verifies user identity.
  - **Authorization** – assigns access levels and permissions.

### 5. Data Sharing and Transformation

- Consolidates, integrates, and formats data for analysis or reporting.
- Ensures uniformity when working with large volumes of raw data.

### 6. Data Integrity and Security

- Guarantees data **consistency**, **accuracy**, and **completeness**.
- Enforces constraints and protects against unauthorized modifications.

## Key Components of a DBMS Architecture

1. **Query Processor**
   - Parses, validates, optimizes, and executes SQL/DML commands.
   - Handles parsing, optimization, and evaluation of queries.

2. **Storage Manager**
   - Manages the interaction between data and physical storage (disks).
   - Includes a **Buffer Manager** for memory/disk transfers.
   - Acts as the "Database Control System."

3. **Transaction Manager (ACID)**
   - Ensures reliable execution of transactions following **ACID** properties:
     - **Atomicity**, **Consistency**, **Isolation**, **Durability**.

4. **Data Dictionary (Catalog/Metadata)**
   - Stores metadata such as table definitions, constraints, and user permissions.
   - Serves as the central reference for database structure information.

## Types of Data Models

### 1. Hierarchical Model (1960s)

- **Structure:** Tree-like parent-child relationships.
- **Relationship:** One-to-Many (1:N).
- **Limitation:** Cannot represent Many-to-Many (M:N) relationships.

### 2. Network Model (1970s)

- **Structure:** Graph-based model allowing M:N relationships.
- **Advantage:** Supports complex relationships.
- **Drawback:** Procedural and complex to design or navigate.

### 3. Relational Model (E.F. Codd, 1970)

- **Structure:** Data represented as two-dimensional **tables (relations)**.
  - **Table (Relation):** The data structure.
  - **Row (Tuple):** A record.
  - **Column (Attribute):** A field.

- **Advantages:**
  - Based on **relational algebra**.
  - Simplicity and data independence.
  - Supports non-procedural query languages (SQL).

- **Key Concepts:**
  - **Primary Key (PK):** Uniquely identifies each record.
  - **Foreign Key (FK):** Establishes relationships between tables.

### 4. Entity-Relationship (ER) Model

- Represents entities, their attributes, and relationships.
- Often used in conceptual database design before physical implementation.

### 5. Object-Oriented Model

- Integrates object-oriented programming with database design.
- Supports **objects**, **classes**, **inheritance**, and **encapsulation**.
- Suitable for complex data and real-world modeling.

## Types of DBMS

### 1. Relational DBMS (RDBMS)

- Organizes data into tables (relations).
- Uses **primary** and **foreign keys** to establish relationships.
- Employs **SQL** for data definition and manipulation.
- Examples: **MySQL**, **PostgreSQL**, **Oracle**, **Microsoft SQL Server**.

### 2. NoSQL DBMS

- Non-relational systems for large-scale, high-performance environments.
- Store data as **key-value pairs**, **documents**, **graphs**, or **columns**.
- Ideal for unstructured or semi-structured data.
- Examples: **MongoDB**, **Apache Cassandra**, **DynamoDB**.

### 3. Object-Oriented DBMS (OODBMS)

- Stores data as objects with properties and methods.
- Best suited for applications needing complex data representation.
- Examples: **ObjectDB**, **db4o**.

## Choosing the Right Database

- Match database type to **project requirements** and data characteristics.
- **Performance** optimization comes after ensuring the correct model fit.
- A balance must be maintained among:
  - **Consistency**, **Availability**, and **Partition Tolerance (CAP theorem)**.

## Disadvantages of Database Systems

- **High Cost** – setup, hardware, and licensing.
- **Management Complexity** – requires skilled personnel.
- **Maintenance Overhead** – updates and tuning.
- **Vendor Dependence** – proprietary technologies.
- **Frequent Upgrades/Replacements** – evolving technology demands.

### Summary Table

| Concept          | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| **DBMS**         | Software for managing and controlling access to databases              |
| **Functions**    | DDL, Retrieval, Manipulation, Access Control, Integrity                |
| **Architecture** | Query Processor, Storage Manager, Transaction Manager, Data Dictionary |
| **Models**       | Hierarchical, Network, Relational, ER, Object-Oriented                 |
| **DBMS Types**   | RDBMS, NoSQL, OODBMS                                                   |
| **Trade-offs**   | Consistency, Availability, Partition Tolerance                         |
| **Drawbacks**    | Cost, Complexity, Maintenance, Dependence                              |

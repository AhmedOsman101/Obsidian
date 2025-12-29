# Lecture 7: RDBMS vs. NoSQL — Exam Preparation Summary

## 1. Database Evolution

The lecture begins by explaining how databases evolved to meet changing application needs:

- **1970s–2000s**:  
   Relational Database Management Systems (RDBMS) dominated. They emphasized:
  - Structured data
  - SQL standards
  - Strong data integrity (ACID)
- **2010s onward**:  
   NoSQL databases emerged to support:
  - Massive data volumes
  - Web and mobile applications
  - Distributed systems
  - Flexible data models

This evolution reflects a shift from **strict consistency and structure** toward **scalability and availability**.

## 2. RDBMS Overview

### 2.1 What is RDBMS?

RDBMS stands for **Relational Database Management System**. Data is stored in:

- Tables (relations)
- Rows and columns
- Linked using keys (primary and foreign keys)

### 2.2 ACID Properties (Core Focus of RDBMS)

RDBMS systems emphasize **ACID**, which ensures reliability in transactions:

| Property    | Meaning                                       |
| ----------- | --------------------------------------------- |
| Atomicity   | A transaction is all-or-nothing               |
| Consistency | Data always follows rules and constraints     |
| Isolation   | Transactions do not interfere with each other |
| Durability  | Once committed, data is permanently saved     |

These properties are critical for systems such as:

- Banking
- Finance
- Safety-critical applications

### 2.3 Cost of ACID

- ACID guarantees introduce **performance overhead**
- Enforcing isolation often leads to **sequential execution**
- Scaling RDBMS across **multiple servers** becomes complex

## 3. Challenges Faced by RDBMS

### 3.1 Scalability and Performance Challenges

**Vertical Scaling Limitation**

- RDBMS typically scale by adding more power to a single machine
- This approach is:
  - Expensive
  - Limited in capacity

**Horizontal Scaling Difficulty**

- Distributing RDBMS across multiple servers (sharding/replication) is complex
- Maintaining ACID across nodes is difficult

**Complex Joins**

- Normalized data requires joins across tables
- Joins become slow with very large datasets

---

### 3.2 Schema Rigidity

- RDBMS requires a **predefined, fixed schema**
- Schema changes:
  - Are time-consuming
  - May cause downtime
- Poor fit for:
  - Agile development
  - Frequently changing data
  - Unstructured or semi-structured data (JSON, XML)

---

### 3.3 Consistency vs. Availability (CAP Theorem)

#### The CAP Theorem (Brewer's Theorem)

A distributed system **cannot guarantee all three** simultaneously:

| Property                | Description                               |
| ----------------------- | ----------------------------------------- |
| Consistency (C)         | All clients see the most recent data      |
| Availability (A)        | Every request receives a response         |
| Partition Tolerance (P) | System continues despite network failures |

---

#### RDBMS vs. NoSQL under CAP

| System | Priority                                |
| ------ | --------------------------------------- |
| RDBMS  | Consistency + Partition Tolerance (CP)  |
| NoSQL  | Availability + Partition Tolerance (AP) |

- RDBMS may sacrifice availability during network failures
- NoSQL allows **eventual consistency** to ensure high availability

## 4. Fundamental Characteristics: RDBMS vs. NoSQL

| Feature           | RDBMS (SQL)           | NoSQL                                     |
| ----------------- | --------------------- | ----------------------------------------- |
| Data Model        | Tables, rows, columns | Key-Value, Document, Column-Family, Graph |
| Schema            | Fixed / rigid         | Flexible / schema-less                    |
| Scalability       | Vertical              | Horizontal                                |
| Data Structure    | Highly structured     | Structured, semi-structured, unstructured |
| Consistency Model | ACID                  | BASE (Eventual consistency)               |
| Query Language    | SQL                   | Model-specific (MQL, Cypher, etc.)        |

## 5. Types of NoSQL Databases

### 5.1 Document Databases

**Description**

- Store data as documents (JSON, BSON, XML)
- Each document contains all related data

**Key Characteristics**

- Flexible schema
- Intuitive for developers
- Good read performance (fewer joins)

**Typical Use**

- Applications with object-like data models

---

### 5.2 Key-Value Stores

**Description**

- Data stored as `<key, value>` pairs
- Value can be any data type

**Key Characteristics**

- Extremely fast
- Highly scalable
- Limited querying (key-based only)

**Best Use Cases**

- Session management
- Caching
- Shopping carts

**Examples**

- Redis
- Amazon DynamoDB

---

### 5.3 Column-Family Stores (Wide-Column)

**Description**

- Similar to tables but data is stored by column families
- Rows can have different columns

**Key Characteristics**

- Massive horizontal scalability
- High write throughput
- Efficient analytics on large datasets

**Best Use Cases**

- Time-series data
- Logging
- Big data analytics

**Examples**

- Apache Cassandra
- HBase

---

### 5.4 Graph Databases

**Description**

- Data stored as:
  - Nodes (entities)
  - Edges (relationships)

**Key Characteristics**

- Relationship-centric
- Fast traversal regardless of database size
- Flexible schema

**Best Use Cases**

- Social networks
- Recommendation systems
- Fraud detection

**Example**

- Neo4j (Cypher query language)

## 6. Exam-Oriented Key Points

- **RDBMS** -> strong consistency, fixed schema, structured data
- **NoSQL** -> scalability, flexibility, availability
- **CAP Theorem** is central to understanding why NoSQL exists
- **Different NoSQL types serve different workloads**
- Choice depends on **application requirements**, not superiority

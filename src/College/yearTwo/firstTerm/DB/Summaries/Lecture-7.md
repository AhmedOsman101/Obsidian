# Lecture 7: RDBMS vs. NoSQL

## 1. The Evolution of Databases

The database landscape has evolved significantly. Traditional systems from the 1970s to the 2000s were dominated by the **Relational Model (RDBMS)**, which prioritized data integrity and structure through ACID compliance and the SQL standard.

Since the 2010s, the rise of "Big Data," the internet, and dynamic applications has led to the emergence of **NoSQL** databases. These systems are designed for different priorities, emphasizing:

- **Horizontal Scaling:** Distributing data across many commodity servers.
- **Flexible Schema:** Allowing data structure to change easily.
- **Big Data Readiness:** Handling large volumes of structured, semi-structured, and unstructured data.

## 2. Understanding RDBMS (Relational Databases)

An RDBMS, or Relational Database Management System, organizes data into tables with rows and columns. Its primary focus is on ensuring data reliability through a set of properties known as ACID.

### The ACID Properties

ACID is a set of guarantees for database transactions. It is critically important in systems where data integrity is paramount, such as banking, finance, and safety systems.

- **Atomicity:** Each transaction is an "all or nothing" operation. If any part of the transaction fails, the entire transaction is rolled back, and the database is left unchanged.
- **Consistency:** Every transaction brings the database from one valid state to another, following all defined rules like constraints and triggers.
- **Isolation:** Concurrent transactions do not interfere with each other. The result is the same as if the transactions were executed one after the other (sequentially).
- **Durability:** Once a transaction is successfully completed (committed), it will remain so permanently, even in the event of a power loss or system crash.

However, enforcing ACID properties, particularly Atomicity and Isolation, adds processing overhead and forces database servers to use sequential evaluation, which can complicate scaling across multiple servers.

## 3. Key Challenges Faced by RDBMS

Modern applications have exposed several limitations in the traditional RDBMS model.

### A. Scalability and Performance

- **Vertical Scaling (Scaling Up):** RDBMS traditionally scales by adding more resources (CPU, RAM) to a single server. This approach is expensive and has a physical upper limit.
- **Horizontal Scaling (Scaling Out):** Distributing a relational database across multiple machines is inherently complex, especially while trying to maintain ACID guarantees across the system.
- **Complex Joins:** To avoid data redundancy, RDBMS normalizes data across many tables. Retrieving data often requires joining these tables, which becomes very slow and computationally expensive as datasets grow massive.

### B. Schema Rigidity

- **Predefined Structure:** RDBMS requires a fixed schema to be defined before any data can be stored.
- **Difficult Changes:** Modifying the schema in a live system is a complex and slow process that can require downtime. This is a significant bottleneck in agile development environments or when dealing with dynamic data like IoT sensor readings or user-generated content.
- **Poor for Unstructured Data:** RDBMS is optimized for structured data and struggles to efficiently store and query semi-structured (JSON, XML) or unstructured data.

### C. The CAP Theorem Trade-off

The CAP Theorem states that a distributed data system can only simultaneously provide **two** of the following three guarantees:

1. **Consistency (C):** All clients see the same data at the same time. Every read receives the most recent write.
2. **Availability (A):** The system always responds to requests (though it might not be with the most recent data).
3. **Partition Tolerance (P):** The system continues to operate even if communication between its nodes is lost or delayed.

In a distributed environment, you must choose two out of three.

- **RDBMS Priority (CP):** Traditional distributed RDBMS prioritizes **Consistency** and **Partition Tolerance**. During a network failure, the system may become unavailable to ensure that no inconsistent data is returned.
- **NoSQL Priority (AP):** Many NoSQL databases prioritize **Availability** and **Partition Tolerance**. During a network failure, the system remains available but may return stale data. This leads to a model called **Eventual Consistency**, where the data will become consistent across the system over time. This trade-off is acceptable for applications like social media feeds, where high uptime is more critical than immediate, perfect consistency.

## 4. Fundamental Comparison: RDBMS vs. NoSQL

| Feature            | Relational Databases (RDBMS/SQL)                                                            | NoSQL Databases (Not only SQL)                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Data Model**     | Tabular (rows and columns). Relationships defined by foreign keys and accessed with joins.  | Varies: Key-Value, Document, Column-Family, or Graph. Data is often denormalized.                                                 |
| **Schema**         | Fixed, rigid, and predefined. The structure must be defined before adding data.             | Flexible, dynamic, and often schema-less. The structure is not strictly enforced.                                                 |
| **Scalability**    | Primarily **Vertical** (Scale Up). Horizontal scaling is difficult and expensive.           | Primarily **Horizontal** (Scale Out). Easily distributes data across clusters of commodity servers.                               |
| **Data Structure** | Highly Structured. Ideal for financial, transactional, and inventory data.                  | Structured, Semi-structured, or Unstructured. Ideal for web content, sensor data, dynamic profiles.                               |
| **Consistency**    | **ACID** (Atomicity, Consistency, Isolation, Durability). Strong consistency is guaranteed. | Often **BASE** (Basically Available, Soft State, Eventual Consistency). Sacrifices strong consistency for availability and speed. |
| **Query Language** | SQL (Structured Query Language), a standardized declarative language.                       | Varies by model. Uses model-specific languages/APIs like MQL (MongoDB) or Cypher (Neo4j).                                         |

## 5. Main Types of NoSQL Databases

NoSQL is not a single technology but a category of databases with different data models. The four main types are:

### 1. Document Databases

- **Description:** Stores data in flexible, self-contained documents, typically in JSON, BSON, or XML format. Related data is often nested within a single document.
- **Characteristics:** Flexible schema, intuitive for developers as documents map well to programming objects, and good read performance since related data is stored together, reducing the need for joins.
- **Use Cases:** Content management, e-commerce product catalogs, user profiles.

### 2. Key-Value Stores

- **Description:** The simplest NoSQL model. Data is stored as a collection of unique keys and their associated values, like a dictionary or hash map.
- **Characteristics:** Extremely fast for simple lookups, highly scalable, but querying is limited to retrieving values by their key.
- **Best Use Cases:** Caching, session management, shopping carts, real-time leaderboards.
- **Leading Examples:** Redis, Amazon DynamoDB.

### 3. Column-Family (Wide-Column) Stores

- **Description:** Stores data in tables, but data is organized by columns rather than rows. Rows can be sparse, meaning a row does not need a value for every column.
- **Characteristics:** Built for massive horizontal scaling (petabytes of data), provides very high write throughput, and is efficient for analytical queries that access a subset of columns over many rows.
- **Best Use Cases:** Big Data processing, logging systems, time-series data (like from IoT devices).
- **Leading Examples:** Apache Cassandra, HBase.

### 4. Graph Databases

- **Description:** Designed specifically to store and navigate relationships. Data is stored as **Nodes** (entities) and **Edges** (the relationships connecting nodes).
- **Characteristics:** Excels at traversing complex relationships quickly (e.g., "friends of friends"). Performance remains constant regardless of the total dataset size, unlike relational joins.
- **Best Use Cases:** Social networks, recommendation engines, fraud detection, knowledge graphs.
- **Leading Example:** Neo4j (uses the Cypher query language).

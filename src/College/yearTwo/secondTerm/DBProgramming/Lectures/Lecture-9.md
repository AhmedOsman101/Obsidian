---
title: Lecture 9
prev:
  text: "Lecture 8"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-8"
next: false
---

# Database Programming - Lecture 9

## RDBMS Limitations

| Limitation | Explanation |
|------------|-------------|
| **Poor performance with large unstructured data** | RDBMS optimizes for structured tables; struggles with multimedia, emails, social media |
| **Scalability issues** | Scales vertically (add power to one server) — expensive and capped; poor horizontal scaling |
| **Fixed schema** | Predefined schema; altering it (new columns) is complex and risky |
| **Limited flexibility** | Rigid structure; hard to adapt to rapid requirement changes |
| **Cost** | Enterprise RDBMS licenses (Oracle, SQL Server) are expensive |
| **Inefficient for big data analytics** | Not designed for high-throughput distributed analytics (Hadoop, Spark) |

## What is NoSQL?

**Not Only SQL** — a class of non-relational database systems. Manages structured, semi-structured, and unstructured data. Does not require a fixed schema or use joins.

**Drivers:** social media explosion, cloud solutions (Amazon S3), dynamic schemas, open-source growth.

### What NoSQL Does NOT Provide

- `JOIN`
- `GROUP BY`
- **ACID transactions**

## NoSQL Characteristics

| Characteristic | Description |
|----------------|-------------|
| **Schema-less** | No fixed schema; each record can have a different structure |
| **Horizontal scalability** | Scales out across multiple servers easily |
| **High performance** | Optimized for fast reads/writes in real-time apps |
| **Flexible data models** | Supports JSON, XML, key-value, graphs |
| **No complex joins** | Prioritizes speed over relational integrity |

## NoSQL Types

| Type | Description | Use Case |
|------|-------------|----------|
| **Key-Value** | Simple key-value pair storage | Caching, sessions (e.g., Redis) |
| **Column-Oriented** | Stores data in columns (not rows) | Time-series data, analytics (e.g., Cassandra) |
| **Document-Oriented** | Stores documents (JSON, XML) with flexible schema | Content management, catalogs (e.g., MongoDB) |
| **Graph** | Nodes + edges representing relationships | Social networks, recommendation engines (e.g., Neo4j) |

## SQL vs. NoSQL

| Aspect | SQL (RDBMS) | NoSQL |
|--------|-------------|-------|
| Schema | Fixed, predefined | Dynamic, schema-less |
| Scalability | Vertical (scale up) | Horizontal (scale out) |
| Data model | Tables (rows & columns) | Key-value, document, column, graph |
| ACID | Fully supported | Typically BASE (Eventually Consistent) |
| Joins | Supported | Not supported |
| Best for | Structured, complex queries | Unstructured, big data, real-time apps |

---

*2 min read (source: 4 min)*

# Lecture 1: Database Systems

## Data, Information, and Knowledge

### Data

- Raw facts not yet processed to reveal meaning.
- Serve as the building blocks of information.
- Require proper management for generation, storage, and retrieval.

### Information

- Produced by processing data.
- Reveals meaning and enables knowledge creation.
- Must be **accurate**, **relevant**, and **timely** for effective decision-making.

### Key Points

- Data -> processed -> Information -> supports decision making.
- Sound decisions are essential for organizational survival in competitive environments.
- Raw data must be **formatted correctly** for storage, processing, and presentation.
  - Example:
    - Julian date format: `2025001` -> January 1, 2025
    - Yes/No responses stored as `Y/N`, `true/false`, or `0/1`.
  - Complex data types (images, audio, video) require additional formatting.

## Database Concepts

### Definition

A **database** is a shared, integrated computer structure that stores:

- **End-user data**: raw facts of interest to users.
- **Metadata**: data about data (describes characteristics and relationships).

### Importance

- Integrates data for easy access and management.
- Metadata defines structure and relationships, enabling efficient organization.

## Types of Databases

### By User

- **Single-user**: supports one user at a time.
  - Example: desktop databases on personal PCs.

- **Multi-user**: supports concurrent users.
  - **Workgroup DB** – limited to a department.
  - **Enterprise DB** – organization-wide.

### By Network Distribution

- **Centralized**: data stored at a single site.
- **Distributed**: data spread across multiple sites.
- **Cloud**: hosted on cloud services with defined performance metrics.

### By Purpose

- **General-purpose**: Contains a **wide variety of data** for many uses.
- **Discipline-specific**: focused on particular subject areas.

### By Operation

- **Operational (OLTP)**: supports daily operations.
- **Analytical (OLAP)**: supports tactical/strategic decisions via historical data.
- **Data Warehouse**: optimized for decision support (ETL processes).

### By Business Type

- **OLAP systems**: retrieve, process, and model warehouse data.
- **Business Intelligence (BI)**: analyze data to support decision-making.

### By Data Type

- **Unstructured**: raw, unprocessed form (e.g., images, videos).
- **Structured**: formatted for storage and retrieval.
- **Semistructured**: partially processed (e.g., XML).

## Database Design

### Focus

Designing the structure that stores and manages end-user data.

### Characteristics

- **Well-designed database**:
  - Simplifies data management.
  - Produces accurate and valuable information.

- **Poorly designed database**:
  - Causes inconsistencies and hard-to-trace errors.

### Summary

| Concept         | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
| Data            | Raw facts that form the base of information                               |
| Information     | Processed data that provides meaning                                      |
| Metadata        | Data describing other data                                                |
| Database        | Structured collection of data + metadata                                  |
| Database Design | Process of creating efficient data structures                             |
| Database Types  | Classified by user, network, purpose, operations, business, and data type |

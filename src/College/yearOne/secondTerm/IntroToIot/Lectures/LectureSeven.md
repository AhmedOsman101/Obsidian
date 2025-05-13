---
title: Lecture 7
prev:
  text: Lecture Six
  link: /College/yearOne/secondTerm/IntroToIot/Lectures/LectureSix
next: false
#   text: Lecture Eight
#   link: /College/yearOne/secondTerm/IntroToIot/Lectures/LectureEight
---

# Introduction to IoT - Lecture 7: Big Data

## What is Big Data?

Big Data refers to datasets that are too large, complex, or fast-changing for traditional data processing methods to handle. These datasets require new tools, architectures, and analytical models to extract value and insights.

## Why Big Data?

Key enablers for Big Data growth include:

- Availability of data
- Increase of processing power
- Increase of storage capacities

## Big Data Sources

Common sources include:

- Social media platforms
- IoT devices and sensors
- Enterprise systems
- Web logs and clickstreams
- Multimedia content
- Public/government data

## Big Data Characteristics

Often described by the "5 Vs":

- **Volume**: Huge amounts of data
- **Velocity**: High speed of data generation and processing
- **Variety**: Different types (text, video, etc.)
- **Veracity**: Uncertainty of data quality
- **Value**: Usefulness of data insights

## Types of Big Data

1. **Structured Data**: Organized and easily searchable (e.g., relational databases, CSV)
2. **Unstructured Data**: No formal structure (e.g., images, audio, video)
3. **Semi-Structured Data**: Partially organized (e.g., XML, JSON)

## Big Data Job Roles

- **Business User**: Uses insights to make decisions
- **Project Sponsor**: Funds the project
- **Project Manager**: Oversees delivery and quality
- **Business Intelligenece Analyst**: Offers domain-specific analytics
- **Data Engineer**: Handles data ingestion and ETL
- **DataBase Administrator**: Manages database environments
- **Data Scientist**: Performs modeling and advanced analytics

## Data Analytics Lifecycle

**1. Business Issue Understanding**

- **Goal:** Align the analysis with business needs.
- **Key Actions:** Define objectives, gather context, choose methods, set scope, and outline deliverables.

**2. Data Understanding**

- **Goal:** Assess data relevance and quality.
- **Key Actions:** Collect raw data, check requirements/availability, and explore its characteristics.

**3. Data Preparation**

- **Goal:** Transform raw data into an analysis-ready format.
- **Key Actions:** Merge sources, clean errors, standardize formats, blend datasets, and sample if needed.

**4. Exploratory Analysis & Modeling**

- **Goal:** Extract insights and build predictive models.
- **Key Actions:** Select methodology, identify key variables, construct models, and evaluate performance.

**5. Validation**

- **Goal:** Ensure results are reliable.
- **Key Actions:** Test outcomes, review the process, and either proceed or iterate (if results are invalid).

**6. Visualization & Presentation**

- **Goal:** Communicate findings effectively.
- **Key Actions:** Tailor visuals/storytelling to the audience, highlight insights, and propose actionable recommendations.

## Data Repositories

### Data Warehouse

- Centralized, structured, cleaned
- Supports analytics across subjects

### Data Mart

- Subset of data warehouse
- Specific to departments or applications

### Data Lake

- Stores raw, unprocessed data
- High flexibility, low upfront cost

## Data Warehouse vs. Data Lake vs. Data Mart

| **Aspect**    | **Data Warehouse**         | **Data Lake**               | **Data Mart**               |
| ------------- | -------------------------- | --------------------------- | --------------------------- |
| **Data Type** | Structured                 | All types (raw)             | Structured, specific subset |
| **Purpose**   | Analytics, reporting       | Storage, advanced analytics | Focused business analysis   |
| **Schema**    | Defined before storage     | Defined on use              | Predefined                  |
| **Example**   | Enterprise-wide sales data | IoT sensor logs             | Marketing team data         |

**Summary**: Data Warehouses are optimized for structured queries, Data Lakes store diverse raw data, and Data Marts serve specific needs.

## Big Data Tools

Examples include:

- Apache Hadoop
- Apache Spark
- Apache Flink
- Apache Hive
- NoSQL Databases (e.g., MongoDB, Cassandra)

## Apache Big Data Projects

Open-source projects under Apache that support big data processing, storage, and analytics. Core example: **Apache Hadoop**.

## Apache Hadoop

An open-source framework for distributed storage and processing of large datasets using commodity hardware.

### Key Features

- Scalable and fault-tolerant
- Processes structured and unstructured data
- Uses parallel processing
- Written in Java

## Key Components of Hadoop

1. **MapReduce** – Data processing
2. **YARN** – Resource management
3. **HDFS** – Distributed storage
4. **Hadoop Common** – Core libraries

## Hadoop Distributed File System (HDFS)

- Stores large data files by splitting into 128MB blocks
- Highly fault tolerant
- Supports create, delete, move, and rename operations
- Serves as default storage in Hadoop

### HDFS Architecture

- **Master/Slave Architecture**
- **NameNode**: Manages metadata and file system namespace
- **DataNodes**: Store actual data blocks and report to NameNode
- **Heartbeat and Block Reports**: Ensure data integrity

#### NameNode

Responsible for:

- Managing file system namespace
- Regulating access
- Storing metadata (namespace image and edit log)

#### DataNode

Responsible for:

- Storing data blocks
- Executing commands from NameNode (read/write, replicate, delete)
- Performing computation (e.g., machine learning, statistics)

## Block Replication

- Default replication factor: **3**
- Ensures high availability and fault tolerance
- Data remains accessible if nodes fail

## YARN (Yet Another Resource Negotiator)

- Manages system resources
- Schedules tasks
- Allows multiple data processing frameworks (e.g., batch, stream)

## MapReduce

- Java-based programming paradigm
- Processes large datasets in parallel
- Composed of two main functions:
  - **Map**: Processes and emits intermediate key-value pairs
  - **Reduce**: Aggregates results

## Data Distribution

- Data is split into chunks across cluster nodes
- Distributed file systems manage chunk allocation
- All chunks form a unified namespace

## MapReduce Example: Word Count

1. Input file is split
2. Each Mapper processes a chunk and emits (word, 1)
3. Reducers sum up counts for each word
4. Final output: (word, total count)

## MapReduce Steps

1. **Splitting**: Input divided into chunks
2. **Mapping**: Each chunk processed by a mapper
3. **Shuffling**: Intermediate outputs grouped by key
4. **Reducing**: Aggregated results produced

## Keys and Values in MapReduce

- Data structured as (Key, Value) pairs throughout
- Mapper and Reducer must define:
  - Input and output key-value pair formats

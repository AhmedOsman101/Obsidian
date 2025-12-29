# Lecture 5: Relational Algebra Fundamentals

## 1.0 Introduction to Relational Query Languages

Query languages are the primary means by which users interact with databases, serving as the essential tool for retrieving and manipulating stored information. They form the bridge between a user's request for data and the database management system's ability to fulfill that request. Fundamentally, these languages can be classified into two distinct categories based on how the user formulates their query: procedural and non-procedural.

The table below outlines the key difference between these two approaches.

| Language Type      | User Interaction Method                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Procedural**     | The user instructs the system on how to compute the desired result by specifying a sequence of operations to be performed on the database. |
| **Non-Procedural** | The user describes the desired information without providing a specific, step-by-step procedure for obtaining that information.            |

This guide focuses on **Relational Algebra**, a foundational query language that serves as a prime example of the procedural approach.

## 2.0 Defining Relational Algebra

Relational Algebra is a formal, procedural query language that underpins the logic of relational databases. It provides a set of operations that act as a step-by-step toolkit for constructing queries and retrieving data. Instead of simply describing _what_ data is needed, a user of Relational Algebra defines _how_ to get it by combining a sequence of these fundamental operations.

The core characteristics of Relational Algebra are:

- It is a **procedural language**, where queries are built by applying operators in a specific sequence.
- Its operations are applied to either **one or two relations** (tables) at a time.
- The result of every operation is always a **single new relation**.

We will now detail the fundamental operations that constitute Relational Algebra.

## 3.0 Core Relational Algebra Operations

The power of Relational Algebra comes from five core operations that serve as the building blocks for all queries. By combining these operations—Select, Project, Union, Intersection, and Difference—one can construct complex instructions to retrieve precise sets of data from a database.

### 3.1 The Select Operation (σ)

The **Select Operation** is used to filter tuples (rows) from a relation. It works by choosing only those tuples that satisfy a specific condition, known as a predicate.

The notation for the Select operation is:

```
σ p(r)
```

Here, `σ` (sigma) is the symbol for the Select operation, `p` is the selection condition or predicate, and `r` is the relation (table) you are querying. The condition `p` can include logical connectors such as `AND`, `OR`, and `NOT` to create more complex filters.

**Example:** To select tuples from the Books table where the subject is 'database' AND the price is '450'.

**Query:** `σ subject = "database" and price = "450"(Books)`

**Source "Books" Relation:**

|         subject         | Book_isbn | price |
| :---------------------: | :-------- | :---- |
|        database         | 345h-e6ck | 300   |
|      OOP with java      | 827g-y90j | 700   |
| Artificial intelligence | 4h7k-0jde | 450   |
|        database         | Ledu-4520 | 450   |
|        Database         | L129-8nge | 200   |

**Output Relation:**

| subject  | Book_isbn | price |
| :------: | :-------- | :---- |
| database | Ledu-4520 | 450   |

### 3.2 The Project Operation $\pi$

The **Project Operation** is used to select specific attributes (columns) from a relation. It creates a new relation containing only the specified attributes, effectively eliminating all others from the result.

The notation for the Project operation is:

```
π A1, A2, .....An(r)
```

In this format, `π` (pi) is the symbol for the Project operation, `A1, A2, ...` represents the list of attribute names to be included in the result, and `r` is the source relation.

**Example:** To retrieve only the Name and City for all entries in the CUSTOMER relation.

**Query:** `π Name, City(CUSTOMER)`

**Source "CUSTOMER" Relation:**

| Name   | Street  | City     |
| :----- | :------ | :------- |
| Jones  | Main    | Harrison |
| Smith  | North   | Rye      |
| Hays   | Main    | Harrison |
| Brooks | Senator | Brooklyn |

**Output Relation:**

| Name   | City     |
| :----- | :------- |
| Jones  | Harrison |
| Smith  | Rye      |
| Hays   | Harrison |
| Brooks | Brooklyn |

### 3.3 The Union Operation $\bigcup$

The **Union Operation** combines all tuples from two relations into a single new relation. It is analogous to the union of two sets, meaning it automatically removes any duplicate tuples from the final result.

The notation for the Union operation is `R ∪ S`.

For a Union operation to be valid, it must satisfy the following conditions:

- The two relations (R and S) must have the same number of attributes.
- Duplicate tuples are automatically eliminated from the resulting relation.

**Example:** To find the names of all customers who have either a borrower account, a depositor account, or both.

**Query:** `π Customer_name(BORROW) ∪ π Customer_name(DEPOSITOR)`

**Source 1:** `**π Customer_name(BORROW)**`

| Customer_name |
| :------------ |
| Jones         |
| Smith         |
| Hayes         |
| Curry         |
| Jackson       |

**Source 2:** `**π Customer_name(DEPOSITOR)**`

| Customer_name |
| :------------ |
| Johnson       |
| Smith         |
| Mayes         |
| Johnson       |
| Jones         |

**Final Output Relation:**

| Customer_name |
| :------------ |
| Johnson       |
| Smith         |
| Mayes         |
| Jones         |
| Hayes         |
| Curry         |
| Jackson       |

### 3.4 Intersection Operation $\bigcap$

The **Set Intersection Operation** is used to find the common tuples between two relations. The resulting relation contains only those tuples that exist in _both_ of the source relations.

The notation for the Intersection operation is `R ∩ S`.

**Example:** To find the names of customers who have _both_ a borrower account and a depositor account.

**Query:** `π Customer_name(BORROW) ∩ π Customer_name(DEPOSITOR)`

**Output Relation:**

| Customer_name |
| :------------ |
| Smith         |
| Jones         |

### 3.5 The Set Difference Operation (-)

The **Set Difference Operation** is used to find tuples that are present in one relation but not in another. The operation `R - S` will produce a relation containing only the tuples that are in relation R but are _not_ in relation S.

The notation for the Difference operation is `R - S`.

**Example:** To find the names of customers who have a borrower account but _not_ a depositor account.

**Query:** `π Customer_name(BORROW) - π Customer_name(DEPOSITOR)`

**Output Relation:**

| Customer_name |
| :------------ |
| Hayes         |
| Curry         |
| Jackson       |

## 4.0 Conclusion and Key Takeaways

Relational Algebra provides the formal, procedural foundation upon which modern database query languages, like SQL, are built. By understanding its core operations, one gains insight into the fundamental logic of data retrieval in relational systems. Each operation is a distinct tool that, when combined with others, allows for the precise and powerful extraction of information.

The table below provides a final summary of the five core operations.

| Operation            |  Symbol  | Core Function                                                                   |
| -------------------- | :------: | ------------------------------------------------------------------------------- |
| **Select**           | $\sigma$ | Filters rows (tuples) from a relation based on a specified condition.           |
| **Project**          |  $\pi$   | Selects a subset of columns (attributes) from a relation, discarding the rest.  |
| **Union**            |  $\cup$  | Combines all rows from two relations into a single set, eliminating duplicates. |
| **Set Intersection** |  $\cap$  | Returns only the rows that are present in both of the specified relations.      |
| **Set Difference**   |    -     | Returns the rows that are in the first relation but not in the second.          |

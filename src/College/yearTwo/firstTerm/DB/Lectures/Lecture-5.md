## Lecture 5: Relational Algebra

## 1. Relational Query Languages

Relational query languages are used to retrieve information from databases. According to the lecture, they are classified into two main categories:

### 1.1 Procedural Query Languages

- The user **specifies the sequence of operations** needed to obtain the result.
- The focus is on **how** to get the data.
- Relational Algebra is a **procedural** query language.

### 1.2 Non-Procedural (Declarative) Query Languages

- The user specifies **what data is required**, not how to retrieve it.
- The system determines the execution steps.

## 2. Relational Algebra: Core Concept

Relational Algebra is a formal, procedural query language with the following key characteristics:

- It provides a **step-by-step process** to answer queries.
- It uses **operators** applied to relations (tables).
- Each operation:
  - Takes **one or two relations** as input.
  - Produces **a single relation** as output.
- It forms the **theoretical foundation of SQL and database query processing**.

## 3. Types of Relational Algebra Operations

The lecture focuses on the following operations:

| Operation      |  Symbol  | Purpose                                        |
| -------------- | :------: | ---------------------------------------------- |
| Select (sigma) | $\sigma$ | Filters rows (tuples)                          |
| Project (PI)   |  $\pi$   | Selects columns (attributes)                   |
| Union          |  $\cup$  | Combines tuples from two relations             |
| Intersection   |  $\cap$  | Finds common tuples                            |
| Difference     |    −     | Finds tuples in one relation but not the other |

## 4. Select Operation $\sigma$

### 4.1 Definition

- The **Select** operation retrieves **rows** from a relation that satisfy a given condition.
- It does **not change the number or type of attributes**, only the number of tuples.

### 4.2 Syntax

```
σ condition (Relation)
```

### 4.3 Examples from the Lecture

#### Example 1: LOAN Relation

Condition: select loans from the _Fifth settlement_ branch.

Result:

- Only rows where `branch_name = "Fifth settlement"` are returned.

#### Example 2: BOOKS Table (Single Condition)

```
σ subject = "database" (Books)
```

- Retrieves only books whose subject is _database_.

#### Example 3: BOOKS Table (Multiple Conditions)

```
σ subject = "database" AND price = 450 (Books)
```

- Returns only books that satisfy **both conditions**.

#### Example 4: Using AND / OR

```
σ subject = "database" AND price = 450 OR publication_yr > 2010 (Books)
```

- Selects:
  - Books with subject _database_ and price 450
  - OR books published after 2010

### 4.4 Key Exam Notes

- Logical operators used: **AND, OR**
- Conditions are applied **row by row**
- The schema (columns) remains unchanged

## 5. Project Operation $\pi$

### 5.1 Definition

- The **Project** operation retrieves **specific columns** from a relation.
- Duplicate rows are **automatically removed**.

### 5.2 Syntax

```
π attribute1, attribute2 (Relation)
```

### 5.3 Examples from the Lecture

#### Example 1: CUSTOMER Relation

```
π Name, City (CUSTOMER)
```

- Returns only the `Name` and `City` columns.

#### Example 2: BOOKS Table

```
π subject, author (Books)
```

- Displays only subjects and authors.
- Duplicate subject–author pairs are eliminated.

### 5.4 Key Exam Notes

- Project works on **columns**, not rows
- Output relation may have **fewer attributes**
- **Duplicate tuples are removed**

## 6. Union Operation $\bigcup$

### 6.1 Definition

- The **Union** operation combines tuples from two relations.
- Tuples appearing in both relations appear **only once** in the result.

### 6.2 Conditions for Union (Important for Exams)

- Relations must be **union-compatible**:
  - Same number of attributes
  - Corresponding attributes have the same domains

### 6.3 Example from the Lecture

- Combining **BORROWER** and **DEPOSITOR** relations.
- Goal: find customers who are borrowers, depositors, or both.

Result:

- A list of **unique customer names** from both relations.

## 7. Intersection Operation $\bigcap$

### 7.1 Definition

- Returns tuples that appear in **both relations**.

### 7.2 Example

- Finding customers who are **both borrowers and depositors**.

Result:

- Only common customer names (e.g., _Smith_, _Jones_).

### 7.3 Exam Tip

- Intersection is useful for identifying **overlapping data**.

## 8. Difference Operation (−)

### 8.1 Definition

- Returns tuples that exist in the **first relation but not in the second**.

### 8.2 Example

- Customers who are depositors **but not borrowers**.

Result:

- Names that appear only in one relation.

### 8.3 Exam Tip

- **Order matters** in difference:

```
A − B ≠ B − A
```

## 9. Final Exam-Focused Summary

| Operation             | Works On | Removes Duplicates | Key Use             |
| --------------------- | -------- | ------------------ | ------------------- |
| Select ($\sigma$)     | Rows     | No                 | Filtering data      |
| Project ($\pi$)       | Columns  | Yes                | Choosing attributes |
| Union ($\cup$)        | Rows     | Yes                | Combine relations   |
| Intersection ($\cap$) | Rows     | Yes                | Find common tuples  |
| Difference (−)        | Rows     | Yes                | Compare relations   |

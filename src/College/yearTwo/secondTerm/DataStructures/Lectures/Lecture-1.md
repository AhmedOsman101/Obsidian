---
title: Foundations I
prev:
  text: "Lectures"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/index"
next:
  text: "Stacks I"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-2"
---

# Foundations I: Data, Arrays, and ADTs

## Data, Data Structures, and Scope

**Data** is the basic entity or fact used in calculation or manipulation. A **data structure** is a way of organizing data items by considering their relationships to one another. The exam boundary is simple: data is _what exists_, while a data structure is _how that data is organized for use_.

| Concept            | Includes                                | Excludes                         | Exam trap                          |
| ------------------ | --------------------------------------- | -------------------------------- | ---------------------------------- |
| **Data**           | facts, values, items used in processing | storage strategy                 | treating raw values as a structure |
| **Data structure** | organization of related data items      | unrelated implementation details | defining it only as a variable     |

## Efficiency: Time vs. Space Complexity

The quality of a data structure is judged by **space complexity** and **time complexity**. **Space complexity** is the amount of memory required by a solution. **Time complexity** is expressed as a function of the number of **key operations** performed.

If one solution uses more memory but less time, and another uses less memory but more time, a **tradeoff** exists.

### Space Components

- **Instruction space**
- **Data space**
- **Environment stack space**
  - return address
  - local variables
  - formal parameters

> [!CAUTION]
> **Space complexity** includes execution-related memory such as the **environment stack**, not only the data structure itself.

## Memory Allocation: Static vs. Dynamic

**Memory allocation** is reserving memory for data storage.

| Concept                | When decided | Size flexibility |
| ---------------------- | ------------ | ---------------- |
| **Static allocation**  | compile time | fixed            |
| **Dynamic allocation** | run time     | flexible         |

The lecture stresses that dynamic allocation supports changing size during execution, while static allocation fixes size before execution starts.

## Arrays as Linear Data Structures

An **array** is a non-primitive **linear data structure**. It is a collection of items of the **same type** stored **contiguously in memory**. If elements are not of one type or not contiguous, the lecture definition is not satisfied.

The memory rules emphasized by the lecture are:

- **memory size = element size x number of elements**
- location is computed by base address plus indexed offset

This is why arrays support direct indexed access.

## Abstraction and Abstract Data Types

**Abstraction** means considering high-level characteristics without getting lost in details. **Data abstraction** allows a structure to be used without knowing its internal implementation.

An **Abstract Data Type (ADT)** is an organized data object plus a set of operations for manipulating it.

**ADT = Organized data + Operations**

An ADT defines the **interface** of objects. The interface acts like a **contract** between implementers and users.

```mermaid
flowchart LR
  U[User Level] --> I[Interface]
  I --> M[Implementation Level]
  M --> D[Stored Data Representation]
```

## Encapsulation, Levels, and Why ADTs Matter

**Encapsulation** or **information hiding** means hiding the data-structure implementation inside the ADT. User code depends on the **interface**, not on the internal representation.

### User Level vs. Implementation Level

- **User level**
  - uses ADT operations
  - should not depend on hidden representation
- **Implementation level**
  - defines how the operations are carried out
  - may change without forcing user code to change

Reasons for using ADTs:

1. they let the user work at a higher level
2. they support reuse
3. implementations can change without breaking clients

> [!CAUTION]
> An **ADT** is not only a data container. The lecture definition requires both the **organized data** and the **operations**.

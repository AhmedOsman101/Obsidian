---
title: Lecture 1
prev:
  text: "Lectures"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/index"
next:
  text: "Lecture 2"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-2"
---

## Data, Data Structures, and Scope

**Data** is the basic entity or fact used in calculation or manipulation. A **data structure** is a way of organizing data items by considering their relationships to one another. The exam boundary is: data is *what exists*, while a data structure is *how that data is organized for use*.

**Why this matters:** organization determines what operations become fast, slow, easy, or memory-expensive, so structure directly affects program behavior rather than merely formatting information.

| Concept | Includes | Excludes | Exam Trap |
| --- | --- | --- | --- |
| **Data** | Facts, values, items used in processing | Storage strategy | Treating raw values as a structure |
| **Data structure** | Organization of related data items | Unrelated implementation details outside storage/relationships | Defining it only as "a variable" |

## Efficiency: Time vs. Space Complexity

The quality of a data structure is judged by **space complexity** and **time complexity**. **Space complexity** is the amount of memory required by a solution. **Time complexity** is expressed as a function of the number of **key operations** performed.

**Why this matters:** counting key operations lets you compare solutions independently of machine speed, while memory usage explains whether an approach is practical at all.

If one solution uses more memory but less time, and another uses less memory but more time, a **tradeoff** exists.

### Space Components

- **Instruction space**: memory for the program instructions themselves.
- **Data space**: memory for variables and stored data.
- **Environment stack space**: memory saved during function invocation.
  - **Return address**
  - Values of local variables
  - Values of formal parameters

> [!CAUTION]
> **Space complexity** is not only the array or structure itself. It also includes execution-related memory such as the **environment stack**.

## Memory Allocation: Static vs. Dynamic

**Memory allocation** is reserving memory for data storage. The two types here are **static memory allocation** and **dynamic memory allocation**.

**Static memory allocation** happens at **compile time**. Its size is fixed before execution begins.

```c
// Statically allocates fixed storage before runtime.
float a[5], f;
```

**Dynamic memory allocation** happens at **run time**. Memory is requested while the program executes.

```c
// Dynamically allocates space for 10 integers at runtime.
ptr = (int *) malloc(10 * sizeof(int));
```

**Why this matters:** static allocation is fixed, while dynamic allocation supports flexible sizes.

| Concept | When Decided | Size Flexibility | Typical Form |
| --- | --- | --- | --- |
| **Static allocation** | Compile time | Fixed | Normal declarations |
| **Dynamic allocation** | Run time | Flexible | `malloc(...)` |

> [!IMPORTANT]
> If memory is allocated dynamically for a structure, the allocated block is **contiguous** and its size depends on the total size of the structure fields.

```c
// Allocates one Employee record as one contiguous block.
struct Employee {
  int Emp_Code;
  char Emp_Name[50];
  float Emp_Salary;
};

struct Employee *str_ptr = (struct Employee *) malloc(sizeof(struct Employee));
```

In the lecture example, executing this statement allocates a contiguous block of **60 bytes**.

## Arrays as Linear Data Structures

An **array** is a non-primitive **linear data structure**. It is a collection of items of the **same type** stored **contiguously in memory**. If elements are not of one type or not contiguous, the lecture definition is not satisfied.

**Why this matters:** same-type storage and contiguity allow direct address calculation.

For the C statement `int A[10];`, two things happen:

1. A contiguous space in memory is reserved.
2. The starting address is given the name `A`.

The memory size rule is:

**memory size = element size x number of elements**

To store in `A[3]`, the machine calculates the location using:

**Loc address = A + 3 * sizeof(int)**

and then stores the value in that computed location.

```c
// Stores 27 in the fourth integer slot of the array.
int A[10];
A[3] = 27;
```

## Abstraction and Abstract Data Types

**Abstraction** means considering high-level characteristics without getting bogged down in details. **Data abstraction** allows a structure to be used without knowing its internal implementation.

A(n) **Abstract Data Type (ADT)** is an organized data object plus a set of operations for manipulating it.

**ADT = Organized data + Operations**

**Why this matters:** an ADT is defined by allowed operations, not by internal code.

An ADT defines the **interface** of objects. The interface acts like a **contract** between the **implementers** and the **users** of the ADT.

```mermaid
flowchart LR
  U[User Level] --> I[Interface]
  I --> M[Implementation Level]
  M --> D[Stored Data Representation]
```

## Encapsulation, Levels, and Why ADTs Matter

**Encapsulation** or **information hiding** is hiding the data structure implementation inside the ADT. The program that uses the ADT is the **user**, while the program that specifies the ADT is the **implementation**.

**Why this matters:** user-level code depends on the interface, so it should not change when the implementation changes.

### User Level vs. Implementation Level

- **User level**
  - Uses operations provided by the ADT
  - Does not depend on internal representation
- **Implementation level**
  - Defines how operations are actually carried out
  - May change without forcing user code to change

| **ADT / Interface** vs. **Implementation** | **ADT / Interface** | **Implementation** |
| --- | --- | --- |
| Focus | Allowed operations | Internal representation |
| Seen by user? | Yes | No |
| Should user code depend on it? | Yes | No |

Reasons for using ADTs:

1. The user studies the interface at a higher level instead of detailed implementation.
2. The ADT can be reused in different programs.
3. The component implementation can change without affecting other components.

> [!CAUTION]
> *Do not define an **ADT** as only a data container.* The lecture definition requires both the **organized data** and the **operations** on that data.

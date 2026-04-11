---
prev:
  text: "Lectures"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/index"
next:
  text: "Lecture 2"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-2"
title: Lecture 1
---

# Data Structures - Lecture 1

## Data Structures: Definition and Purpose

A **data structure** is a way of organizing and storing data in computer memory so it can be accessed and manipulated efficiently. This matters because the choice of data structure directly impacts algorithm performance—using the wrong structure makes a simple operation slow, while the right structure makes it fast.

The course emphasizes why data structures are fundamental: they enable efficient software, power search algorithms like word searching in documents, drive sorting algorithms for organizing lists, implement hash tables for dictionaries, and represent graphs for social networks or route planning.

## Course Objectives and Scope

The course has four main objectives. First, **understand the fundamental data structures and their operations**—know what each structure does and how to use it. Second, **analyze the time and space complexity of algorithms**—predict performance before implementation. Third, **implement and use data structures in real-world applications**—apply theory to build working software. Fourth, **develop problem-solving skills using data structures**—choose the right structure for a given problem.

The scope covers both linear and non-linear structures.

| Category | Structures |
| -------- | ---------- |
| **Linear** | Arrays, Strings, Stacks, Queues, Linked Lists |
| **Non-linear** | Trees (Binary, BST, AVL, B-Trees), Heaps, Hash Tables, Graphs |
| **Algorithms** | Sorting (Insertion, Selection, Merge, Quick, Heap), Traversals |

> [!IMPORTANT]
> *The midterm covers weeks 1-6; the final covers the entire course including advanced topics.*

## Grading Policy and Academic Calendar

The grading distributes across components to incentivize consistent effort. **Assignments** (4 total) count for **20%**, requiring Sunday 11:59 PM submissions. **Quizzes** comprise **10%** of the grade. The **Project** contributes **15%** with a deadline in Week 14. The **Midterm Exam** in Week 7 is worth **20%**. The **Final Exam** in Week 16 carries the highest weight at **25%**. **Participation** makes up the remaining **10%**.

| Component | Weight | Timing |
| --------- | ------ | -------- |
| Assignments (4) | 20% | Weekly |
| Quizzes | 10% | Throughout |
| Project | 15% | Week 14 |
| Midterm | 20% | Week 7 |
| Final | 25% | Week 16 |
| Participation | 10% | Ongoing |

## Required and Recommended Resources

Two textbooks are required. **"Data Structures and Algorithms in Java"** by Goodrich and Tamassia provides Java-focused explanations with implementations. **"Introduction to Algorithms"** by Cormen, Leiserson, Rivest, and Stein (commonly called **CLRS**) is the comprehensive reference for theory and analysis.

Recommended online resources include **geeksforgeeks.org** for conceptual explanations, **hackerrank.com** for practice problems, and **leetcode.com** for coding challenges. The course website provides additional materials and assignments.

> [!NOTE]
> *CLRS is often called "the bible" of algorithms but has a steep learning curve—start with Goodrich and Tamassia for easier explanations.*

## Complexity Analysis: Time and Space

**Time complexity** measures how execution time grows with input size, expressed using Big-O notation. **Space complexity** measures memory usage as input grows.

| Complexity | Notation | Meaning |
| ---------- | -------- | -------- |
| **Constant** | O(1) | Execution time/memory does not change with input size |
| **Logarithmic** | O(log n) | Execution time/memory grows slowly; common in binary search |
| **Linear** | O(n) | Execution time/memory grows directly with input |
| **Linearithmic** | O(n log n) | Common in efficient sorting (merge sort, heap sort) |
| **Quadratic** | O(n²) | Execution time/memory grows with n squared; common in nested loops |

The course introduces complexity analysis in Week 15, but the concept underlies every data structure operation throughout the term. Understanding complexity helps predict performance before writing code—this is why analysis precedes implementation.

> [!WARNING]
> *Big-O describes the worst-case behavior. An O(n) algorithm might run in O(1) on small inputs—always consider both average and worst cases.*
---
title: Section 5
prev:
  text: "Section 4"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-4"
next:
  text: "Section 6"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-6"
---

# Data Structures - Section 5

## Trees

A **tree** is a hierarchical collection of nodes. The topmost node is the **root**. Remaining nodes form disjoint **subtrees**.

### Tree Terminology

| Term              | Definition                                       |
| ----------------- | ------------------------------------------------ |
| **Root**          | Topmost node, has no parent                      |
| **Parent**        | Node with one or more children                   |
| **Children**      | Nodes descending from a parent                   |
| **Leaves**        | Nodes with no children (terminal nodes)          |
| **Internal Node** | Nodes with at least one child (not root or leaf) |
| **Siblings**      | Nodes sharing the same parent                    |
| **Ancestor**      | Any node along the path to the root              |
| **Height**        | Number of edges in the longest root-to-leaf path |
| **Depth**         | Number of edges from root to a specific node     |
| **Edges**         | Connections between parent and child             |
| **Outdegree**     | Number of children a node has                    |
| **Indegree**      | Number of incoming edges (always 1 except root)  |

## Binary Trees

A **binary tree** is a tree where no node has more than two children: **left child** and **right child**.

### Binary Tree Types

| Type                     | Definition                                                                                                      |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **Strictly Binary**      | Every non-leaf has non-empty left and right subtrees. A strictly binary tree with `n` leaves has `2n - 1` nodes |
| **Complete Binary Tree** | All levels filled except possibly the last, which is filled left to right                                       |
| **Left Skewed**          | Every node has only a left child                                                                                |
| **Right Skewed**         | Every node has only a right child                                                                               |

### Expression Trees

Represent algebraic expressions. For `E = (a + b) / ((c - d) * e)`, operators are internal nodes and operands are leaves.

## Binary Tree Traversal

### Depth-First Traversals

| Order          | Algorithm             | Result               |
| -------------- | --------------------- | -------------------- |
| **Pre-order**  | Root -> Left -> Right | Visits root first    |
| **In-order**   | Left -> Root -> Right | Sorted order for BST |
| **Post-order** | Left -> Right -> Root | Used for deletion    |

### Breadth-First Traversal

- **Level-order**: visits nodes level by level, uses a queue

## Binary Search Trees (BST)

A **BST** is a binary tree with these properties:

1. All values are unique
2. Left subtree values < node value
3. Right subtree values > node value

### BST Operations

#### Insert

1. Start at root
2. If new value < current node value -> go left
3. If new value > current node value -> go right
4. If no child exists at that position -> insert there

#### Search

1. Start at root
2. If value matches -> found
3. If value < current -> go left
4. If value > current -> go right
5. If no child exists -> value not in tree

#### Delete (3 Cases)

| Case  | Condition             | Algorithm                                                                   |
| ----- | --------------------- | --------------------------------------------------------------------------- |
| **1** | Node has no children  | Set parent's link to `nullptr`, dispose node                                |
| **2** | Node has one child    | Link child (with subtree) directly to parent                                |
| **3** | Node has two children | Find minimum in right subtree, replace node value, delete that minimum node |

**Case 3 detail**: To delete a node with two children, replace it with its **in-order successor** (minimum of right subtree), then delete the successor.

---

_4 min read (source: 9 min)_

---
prev:
  text: "Lecture 9"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-9"
next:
  text: "Lecture 11"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-11"
title: Lecture 10
---

# Data Structures - Lecture 10

## AVL Trees: Why Self-Balancing Matters

The search, insertion, and deletion time for a binary tree depends on the tree's height. In the worst case (skewed tree), height is O(n)—degenerating to a linked list. If a tree is perfectly balanced (complete binary tree), height is O(log n). Maintaining perfect balance is costly; the compromise is maintaining a **well-balanced tree** where heights of two subtrees for every node are approximately the same.

## AVL Tree Definition

An **AVL tree** (invented by Adelson-Velsky and Landis in 1962) is a self-balancing binary search tree where the difference between the heights of left and right subtrees for every node is 0, 1, or -1. This property guarantees the maximum height is O(log n), making all operations O(log n).

The **balance factor** of a node is calculated as: `height(right subtree) - height(left subtree)`. A node is:
- **Balanced** if balance factor is -1, 0, or 1
- **Left-heavy** if balance factor is -1
- **Right-heavy** if balance factor is +1

> [!IMPORTANT]
> *A node with balance factor -2 or +2 requires rebalancing. AVL trees maintain balance by rotating nodes after insertions and deletions.*

## AVL Rotations

Four rotation types fix imbalances:

**LL Rotation (Single Right Rotation)**: Occurs when a node A has balance factor -2 and its left child B has balance factor -1 or 0. The imbalance is in the left-left subtree. Perform a single right rotation at A.

**RR Rotation (Single Left Rotation)**: Occurs when a node A has balance factor +2 and its right child B has balance factor +1 or 0. The imbalance is in the right-right subtree. Perform a single left rotation at A.

**LR Rotation (Double Rotation)**: Occurs when a node A has balance factor -2 and its left child B has balance factor +1. This is a left-right case. Fix by performing a single left rotation at B, then a single right rotation at A.

**RL Rotation (Double Rotation)**: Occurs when a node A has balance factor +2 and its right child B has balance factor -1. This is a right-left case. Fix by performing a single right rotation at B, then a single left rotation at A.

| Imbalance Type | Rotation Needed | Description |
| -------------- | --------------- | ----------- |
| LL | Single right rotation | Left child has left-heavy subtree |
| RR | Single left rotation | Right child has right-heavy subtree |
| LR | Double rotation | Left child has right-heavy subtree |
| RL | Double rotation | Right child has left-heavy subtree |

## Implementing AVL Trees

An AVL tree extends a regular BST. The key addition is tracking and adjusting balance factors after each insertion or deletion.

```java
// Purpose: AVL tree extends BST with balance maintenance
class AVLTree extends BST {
  // Override insert to rebalance after insertion
  // Override delete to rebalance after deletion
}
```

## AVL Tree Complexity Analysis

| Operation | Time Complexity |
| --------- | ---------------- |
| Search | O(log n) |
| Insert | O(log n) |
| Delete | O(log n) |

The guaranteed O(log n) performance comes from the height constraint—AVL trees cannot become skewed enough to degrade to O(n).

## B-Trees and B+ Trees (Overview)

**B-Trees** are self-balancing trees optimized for disk access, commonly used in databases and file systems. Unlike AVL trees which are binary (max 2 children), B-Trees can have many children per node, reducing tree height for large datasets.

Key B-Tree properties:
- All leaves are at the same level
- A node can have multiple keys and children
- Optimized for systems with large block sizes

**B+ Trees** are a variation where all data is stored in leaf nodes, and internal nodes only contain keys. This enables efficient range queries and sequential access.
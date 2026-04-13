---
prev:
  text: "Lecture 8"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-8"
next:
  text: "Lecture 10"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-10"
title: Lecture 9
---

# Data Structures - Lecture 9

## Binary Search Trees: Definition and Properties

A **Binary Search Tree (BST)** is a binary tree where each node's left subtree contains only values less than the node's value, and the right subtree contains only values greater than the node's value. This matters because BSTs enable efficient search, insertion, and deletion operations—O(h) time where h is the height of the tree.

The key property that makes BSTs efficient is the ordering: knowing whether to go left or right eliminates half the remaining nodes on each comparison.

## BST Operations

**Search** compares the target value with the current node, going left if smaller or right if larger. The search terminates when the value is found or a null leaf is reached.

**Insert** follows the search path until finding the correct leaf position, then adds the new node there.

**Delete** has three cases:

1. Node is a leaf -> simply remove it
2. Node has one child -> bypass the node by connecting parent to child
3. Node has two children -> find the inorder successor (smallest in right subtree) or predecessor (largest in left subtree), replace the node's value, then delete the successor/predecessor

## AVL Trees: Self-Balancing BSTs

An **AVL tree** is a self-balancing binary search tree where the balance factor (right subtree height minus left subtree height) of every node is -1, 0, or +1. This matters because AVL trees guarantee O(log n) operations—the height never exceeds 1.44 times the optimal height.

The balance factor determines whether rebalancing is needed after insertion or deletion.

## AVL Rotations

When an insertion or deletion causes a node's balance factor to become -2 or +2, **rotation** rebalances the tree. Four rotation types exist:

| Rotation | Condition                       | Action                                      |
| -------- | ------------------------------- | ------------------------------------------- |
| **LL**   | Left-left imbalance at node A   | Single right rotation at A                  |
| **RR**   | Right-right imbalance at node A | Single left rotation at A                   |
| **LR**   | Left-right imbalance at node A  | Double rotation: left at B, then right at A |
| **RL**   | Right-left imbalance at node A  | Double rotation: right at B, then left at A |

**LL Rotation**: A has balance factor -2, left child B has balance -1 or 0. Rotate A right.

**RR Rotation**: A has balance factor +2, right child B has balance +1 or 0. Rotate A left.

**LR Rotation**: A has balance factor -2, left child B has balance +1. First rotate B left, then rotate A right.

**RL Rotation**: A has balance factor +2, right child B has balance -1. First rotate B right, then rotate A left.

> [!IMPORTANT]
> _Single rotations fix LL and RR imbalances. Double rotations (two single rotations) fix the cross patterns LR and RL._

## Hash Tables: Definition and Purpose

**Hashing** is a technique that retrieves values using an index obtained from a key without performing a search. This matters because hash tables achieve O(1) average-case search, insertion, and deletion.

A **hash table** is an array that stores values. The **hash function** maps a key to an index in the table. The same key should always produce the same index.

## Hash Function Design

A typical hash function first converts a search key to an integer value (**hash code**), then compresses the hash code into an index within the table size range.

```c
// Purpose: Simple hash function
int hash(int key, int tableSize) {
  return key % tableSize;
}
```

A good hash function distributes keys uniformly across the table to minimize **collisions**.

## Collision Handling

A **collision** occurs when two different keys hash to the same index. Two main handling approaches exist:

**Open addressing** finds another open slot within the table:

- **Linear probing**: Check consecutive slots (index, index+1, index+2...)
- **Quadratic probing**: Check slots at index + 1², index + 2², index + 3²...
- **Double hashing**: Uses a secondary hash function to determine step size

**Separate chaining** places all entries with the same hash index in a linked list (bucket). Each bucket can hold multiple entries.

| Method            | Collision strategy     | Pros              | Cons                      |
| ----------------- | ---------------------- | ----------------- | ------------------------- |
| Linear probing    | Sequential search      | Simple            | Primary clustering        |
| Quadratic probing | Quadratic jump         | Avoids clustering | Secondary clustering      |
| Double hashing    | Secondary hash         | Best distribution | More computation          |
| Separate chaining | Linked list per bucket | No size limit     | Extra memory for pointers |

## Load Factor and Rehashing

The **load factor** (entries / table size) measures how full the table is. When the load factor exceeds a threshold (typically 0.75), rehashing creates a larger table and rehashes all entries to reduce collisions.

> [!WARNING]
> _High load factor increases collision probability. Maintain load factor below 0.7 for good performance._

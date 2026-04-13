---
prev:
  text: "Lecture 6"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-6"
next:
  text: "Lecture 8"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-8"
title: Lecture 7
---

# Data Structures - Lecture 7

## Trees: Definition and Hierarchical Structure

A **tree** is a powerful non-linear data structure used to represent data with hierarchical relationships. This matters because trees model real-world hierarchies like file systems, organizational charts, and expression trees. A tree is an acyclic structure of linked nodes.

Formally, a tree consists of a collection of nodes. If not empty, it has a **root** node (the topmost node) and zero or more **subtrees** connected by edges from the root. Each node can have multiple children, but only one parent (except the root which has no parent).

## Tree Terminology

| Term        | Definition                                                   |
| ----------- | ------------------------------------------------------------ |
| **Node**    | An object containing a data value and references to children |
| **Root**    | Topmost node of the tree                                     |
| **Leaf**    | A node with no children                                      |
| **Parent**  | A node that refers to this node                              |
| **Child**   | A node that this node refers to                              |
| **Sibling** | Nodes with a common parent                                   |
| **Path**    | A sequence of edges connecting nodes                         |
| **Size**    | Number of nodes in the tree                                  |
| **Height**  | Number of edges on the longest path from node to a leaf      |
| **Depth**   | Number of edges from node to the root                        |
| **Level**   | Length of the path from root to a given node                 |
| **Degree**  | Maximum number of subtrees of any node                       |

> [!IMPORTANT]
> _Height counts edges, not nodes. A single node has height 0. Depth counts edges from root—so root has depth 0._

## Binary Trees

A **binary tree** is a tree in which no node can have more than two children (degree ≤ 2). Each node has a **left successor** and a **right successor**, which may be empty.

Binary trees can be classified by shape:

- **Left skewed**: Only left children exist
- **Right skewed**: Only right children exist
- **Full (strictly) binary tree**: Every node other than leaves has exactly two children
- **Complete binary tree**: Every level, except possibly the last, is completely filled

| Type                     | Definition                                                     |
| ------------------------ | -------------------------------------------------------------- |
| **Full Binary Tree**     | Each node has 0 or 2 children                                  |
| **Complete Binary Tree** | All levels fully filled except last, which fills left to right |

## Binary Tree Traversals

**Traversal** examines each node in a systematic order. The three common traversals differ in when the root is processed:

| Traversal      | Order             | Acronym |
| -------------- | ----------------- | ------- |
| **Pre-order**  | Root, Left, Right | VLR     |
| **In-order**   | Left, Root, Right | LVR     |
| **Post-order** | Left, Right, Root | LRV     |

```c
// Purpose: In-order traversal (LVR)
void Inorder(TreeType t, void (*pvisit)(EntryType *)) {
  if (t) {
    Inorder(t->left, pvisit);
    pvisit(&(t->info));
    Inorder(t->right, pvisit);
  }
}

// Purpose: Pre-order traversal (VLR)
void Preorder(TreeType t, void (*pvisit)(EntryType *)) {
  if (t) {
    pvisit(&(t->info));
    Preorder(t->left, pvisit);
    Preorder(t->right, pvisit);
  }
}

// Purpose: Post-order traversal (LRV)
void Postorder(TreeType t, void (*pvisit)(EntryType *)) {
  if (t) {
    Postorder(t->left, pvisit);
    Postorder(t->right, pvisit);
    pvisit(&(t->info));
  }
}
```

## Tree Implementation

A binary tree node stores data and pointers to left and right children.

```c
// Purpose: Define binary tree node
typedef struct node {
  EntryType info;
  struct node *right;
  struct node *left;
} NodeType;
typedef NodeType *TreeType;
```

**CreateTree** initializes an empty tree.

```c
// Purpose: Initialize empty tree
void CreateTree(TreeType *t) {
  *t = NULL;
}

// Purpose: Check if tree is empty
int EmptyTree(TreeType t) {
  return (!t);
}

// Purpose: Check if tree is full
int FullTree(TreeType t) {
  return 0;
}
```

## Tree Operations: Size, Height, Clear

**Size** counts all nodes recursively.

```c
// Purpose: Count nodes in tree
int Size(TreeType t) {
  if (!t)
    return 0;
  return (1 + Size(t->left) + Size(t->right));
}
```

**Height** measures the longest path from root to leaf.

```c
// Purpose: Calculate tree height
int Height(TreeType t) {
  if (!t)
    return 0;
  int a = Height(t->left);
  int b = Height(t->right);
  return (a > b) ? 1 + a : 1 + b;
}
```

> [!WARNING]
> _Height returns edge count, not node count. A single node has height 0._

**ClearTree** frees all nodes using post-order traversal.

```c
// Purpose: Free all nodes in tree
void ClearTree(TreeType *t) {
  if (*t) {
    ClearTree(&(*t)->left);
    ClearTree(&(*t)->right);
    free(*t);
    *t = NULL;
  }
}
```

## Expression Trees

An **expression tree** is a binary tree containing an arithmetic expression. **Leaves** are operands (constants or variables), while **internal nodes** contain operators. Each operator node's left subtree gives the left operand, right subtree gives the right operand.

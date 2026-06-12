---
title: Lecture 7
prev:
  text: "Lecture 6"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-6"
next:
  text: "Lecture 8"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-8"
---

# Data Structures - Lecture 7

## Tree Definition

A **tree** is a powerful **non-linear** data structure used to represent data items possessing **hierarchical relationships**. It is an **acyclic** structure of linked nodes.

A tree is a collection of nodes. If not empty, it consists of:

- A node **r** (the **root**)
- Zero or more nonempty **subtrees** T1, T2, ..., Tk, each connected by an edge from r

**Real-world examples:** file systems, family/organizational charts, compilers (expression parse trees), decision trees.

## Terminologies

| Term        | Definition                                            |
| ----------- | ----------------------------------------------------- |
| **Node**    | An object containing a data value and children        |
| **Root**    | Topmost node of a tree                                |
| **Leaf**    | A node with no children                               |
| **Parent**  | A node that refers to this one                        |
| **Child**   | A node that this node refers to                       |
| **Sibling** | Nodes with a common parent                            |
| **Path**    | A sequence of edges                                   |
| **Size**    | Number of nodes in a tree                             |
| **Subtree** | A smaller tree that is one of a node's children       |
| **Height**  | Number of edges on the longest path from node to leaf |
| **Depth**   | Number of edges from node to root                     |
| **Level**   | Length of path from root to a given node              |
| **Degree**  | Maximum number of subtrees a node can have            |

## Binary Tree

A **binary tree** is a tree in which no node can have more than **two children** (degree ≤ 2). It is either empty or a root node with two children, each of which is itself a binary tree.

### Binary Tree Types

| Type                | Definition                                                                                |
| ------------------- | ----------------------------------------------------------------------------------------- |
| **Left-skewed**     | Every node has only a left child                                                          |
| **Right-skewed**    | Every node has only a right child                                                         |
| **Complete**        | Every level except possibly the last is completely filled (level L has at most 2^L nodes) |
| **Full (Strictly)** | Every node other than leaves has exactly two children                                     |

> [!NOTE]
> A tree can be **full and complete**, **full but not complete**, or **complete but not full** — these are independent properties.

## Binary Tree Traversals

**Traversal** is an examination of the elements of a tree in a specific order.

| Traversal      | Order                 | Mnemonic |
| -------------- | --------------------- | -------- |
| **Pre-order**  | Root -> Left -> Right | VLR      |
| **In-order**   | Left -> Root -> Right | LVR      |
| **Post-order** | Left -> Right -> Root | LRV      |

### Traversal Example

For a tree with root 17, left subtree (41, 6, 9), right subtree (81):

- **Pre-order (VLR):** 17, 41, 6, 9, 81
- **In-order (LVR):** 6, 41, 9, 17, 81
- **Post-order (LRV):** 6, 9, 41, 81, 17

## Expression Trees

An **expression tree** is a binary tree representing an arithmetic expression:

- **Leaves** are operands (constants or variables)
- **Internal nodes** contain operators
- For each operator node, its left subtree gives the left operand, right subtree gives the right operand

**Example:** `(a+b) * c + (d*e + f) * g` -> the `+` at root has left subtree `(a+b)*c` and right subtree `(d*e+f)*g`.

## Tree Implementation

### Node Structure

```cpp
struct Node {
  char data;
  Node* left;
  Node* right;
};

class BinaryTree {
private:
  Node* root;

public:
  BinaryTree();
  bool isEmpty() const;
  void inorder(void (*visit)(char*)) const;
  void preorder(void (*visit)(char*)) const;
  void postorder(void (*visit)(char*)) const;
  int size() const;
  int height() const;
  void clear();
};
```

### Constructor

```cpp
BinaryTree::BinaryTree() {
  this->root = nullptr;
}
```

### isEmpty

```cpp
bool BinaryTree::isEmpty() const {
  return this->root == nullptr;
}
```

### In-order Traversal (Recursive)

Process left subtree, then root, then right subtree.

```cpp
void BinaryTree::inorder(void (*visit)(char*)) const {
  if (this->root) {
    inorderHelper(this->root, visit);
  }
}

void inorderHelper(Node* t, void (*visit)(char*)) {
  if (t) {
    inorderHelper(t->left, visit);
    visit(&t->data);
    inorderHelper(t->right, visit);
  }
}
```

### Pre-order Traversal (Recursive)

Process root, then left subtree, then right subtree.

```cpp
void preorderHelper(Node* t, void (*visit)(char*)) {
  if (t) {
    visit(&t->data);
    preorderHelper(t->left, visit);
    preorderHelper(t->right, visit);
  }
}
```

### Post-order Traversal (Recursive)

Process left subtree, then right subtree, then root.

```cpp
void postorderHelper(Node* t, void (*visit)(char*)) {
  if (t) {
    postorderHelper(t->left, visit);
    postorderHelper(t->right, visit);
    visit(&t->data);
  }
}
```

### Size

Returns the number of nodes in the tree.

```cpp
int BinaryTree::size() const {
  return sizeHelper(this->root);
}

int sizeHelper(Node* t) {
  if (!t)
    return 0;
  return 1 + sizeHelper(t->left) + sizeHelper(t->right);
}
```

### Height

Returns the number of edges on the longest path from root to leaf.

```cpp
int BinaryTree::height() const {
  return heightHelper(this->root);
}

int heightHelper(Node* t) {
  if (!t)
    return 0;
  int a = heightHelper(t->left);
  int b = heightHelper(t->right);
  return (a > b) ? 1 + a : 1 + b;
}
```

### Clear

Deallocates all nodes in post-order (children before parent).

```cpp
void BinaryTree::clear() {
  clearHelper(this->root);
  this->root = nullptr;
}

void clearHelper(Node* t) {
  if (t) {
    clearHelper(t->left);
    clearHelper(t->right);
    delete t;
  }
}
```

> [!WARNING]
> Clear must use **post-order** traversal — you cannot delete a node before its children, otherwise you lose the pointers needed to traverse and free them.

## Exercises

### Exercise: Tree Traversals

Given a tree, produce pre-order, in-order, and post-order sequences. See traversal example above for the pattern.

### Exercise: Expression Tree

Build an expression tree for `(a+b) * c + (d*e + f) * g`. The in-order traversal yields the original infix expression.

---

_6 min read (source: 7 min)_

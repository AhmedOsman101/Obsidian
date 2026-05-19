---
prev:
  text: "Section 4"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-4"
next:
  text: "Section 6"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-6"
title: Section 5
---

# Data Structures - Section 5

## Tree

A **tree** is a collection of nodes arranged in a hierarchical structure such that:

- there is a special node called the **root** of the tree
- the remaining nodes are partitioned into a number of disjoint subsets, and each subset is itself a tree called a **subtree**

## Terms and Definitions

| Term          | Definition                                                                            |
| ------------- | ------------------------------------------------------------------------------------- |
| Root          | The topmost node in a tree. It has no parent.                                         |
| Node          | A single element in a tree that may contain a value and links to children.            |
| Parent        | A node that has one or more children.                                                 |
| Children      | Nodes that descend from a parent node.                                                |
| Leaves        | Nodes with no children, also called terminal nodes.                                   |
| Internal Node | A node that has at least one child and is not the root or a leaf.                     |
| Siblings      | Nodes that share the same parent.                                                     |
| Ancestor      | Any node along the path from a node to the root.                                      |
| Height        | The number of edges in the longest path from the root to any leaf.                    |
| Depth         | The number of edges from the root to a specific node.                                 |
| Edges         | Connections between nodes from parent to child.                                       |
| Outdegree     | The number of children a node has.                                                    |
| Indegree      | The number of incoming edges to a node. In a tree it is always 1 except for the root. |

## Binary Trees

A **binary tree** is a tree in which no node can have more than two children. These children are typically described as the **left child** and **right child** of the parent node.

## Strictly Binary Tree

A tree is said to be a **strictly binary tree** if every non-leaf node in a binary tree has non-empty left and right subtrees.

A strictly binary tree with `n` leaves always contains:

$$
2n - 1
$$

nodes.

## Complete Binary Tree

A **complete binary tree** at depth `d`, where all the leaves are at level `d`, is a strictly binary tree.

Its properties are:

- all levels are completely filled, except possibly the last level
- in the last level, all nodes are as far left as possible

It can be understood as filling the tree level by level:

1. Start from the root.
2. Fill every level fully from left to right.
3. In the last level, add nodes from the left side first.

## Binary Tree vs. Ordinary Tree

If a binary tree has only left subtrees, it is called a **left-skewed binary tree**.

If a binary tree has only right subtrees, it is called a **right-skewed binary tree**.

## Expression Binary Tree

An expression binary tree can represent an algebraic expression.

For example:

$$
E = \frac{(a+b)}{((c-d)*e)}
$$

## Binary Tree Traversal

Tree traversal can be done in two main ways.

### Depth-First Traversal

Depth-first traversal can be done using a loop or recursion.

- **Pre-order**: root, left, right
- **In-order**: left, root, right
- **Post-order**: left, right, root

### Breadth-First Traversal

Breadth-first traversal uses a queue.

- **Level-order**

### Lecture-Style Linked Tree Representation

```cpp
// Purpose: represent a binary tree using linked nodes as in the lecture.
using EntryType = char;

struct NodeType {
  EntryType info;
  NodeType* right;
  NodeType* left;
};

using TreeType = NodeType*;

void CreateTree(TreeType* t) {
  *t = nullptr;
}

int EmptyTree(TreeType t) {
  return !t;
}

int FullTree(TreeType t) {
  return 0;
}
```

### Lecture Traversal Functions

```cpp
// Purpose: visit tree nodes in recursive preorder, inorder, and postorder.
void Inorder(TreeType t, void (*pvisit)(EntryType*)) {
  if (t) {
    Inorder(t->left, pvisit);
    (*pvisit)(&(t->info));
    Inorder(t->right, pvisit);
  }
}

void Preorder(TreeType t, void (*pvisit)(EntryType*)) {
  if (t) {
    (*pvisit)(&(t->info));
    Preorder(t->left, pvisit);
    Preorder(t->right, pvisit);
  }
}

void Postorder(TreeType t, void (*pvisit)(EntryType*)) {
  if (t) {
    Postorder(t->left, pvisit);
    Postorder(t->right, pvisit);
    (*pvisit)(&(t->info));
  }
}
```

### Tree Size, Height, and Clearing

```cpp
// Purpose: compute recursive properties and release all tree nodes.
int Size(TreeType t) {
  if (!t) {
    return 0;
  }
  return 1 + Size(t->left) + Size(t->right);
}

int Height(TreeType t) {
  if (!t) {
    return 0;
  }
  int a = Height(t->left);
  int b = Height(t->right);
  return (a > b) ? 1 + a : 1 + b;
}

void ClearTree(TreeType* t) {
  if (*t) {
    ClearTree(&(*t)->left);
    ClearTree(&(*t)->right);
    delete *t;
    *t = nullptr;
  }
}
```

## Binary Search Trees (BST)

A **Binary Search Tree (BST)** is a binary tree that is either empty or satisfies the following properties:

1. Every node has a value, and no two nodes have the same value.
2. If there is a left child or left subtree, its value is less than the value of the root.
3. The value in the right child or right subtree is greater than the value of the root node.

## Adding a Value to the BST

Adding a value to a BST can be divided into two stages:

1. Search for a place to put the new element.
2. Insert the new element in that place.

If the new value is less than the current node's value, go to the left subtree. Otherwise, go to the right subtree.

### Detailed Steps for Insertion

Starting from the root:

1. Check whether the value in the current node and the new value are equal.
   If so, a duplicate is found.
2. If the new value is less than the node's value:
   - If the current node has no left child, the place for insertion has been found.
   - Otherwise, handle the left child using the same algorithm.
3. If the new value is greater than the node's value:
   - If the current node has no right child, the place for insertion has been found.
   - Otherwise, handle the right child using the same algorithm.

## Searching for a Value in the BST

Searching for a value in a BST is very similar to the add operation.

The search algorithm traverses the tree in depth, chooses the appropriate direction using the BST property, and compares the value of each visited node with the required value.

The algorithm stops in two cases:

- a node with the required value is found
- the algorithm has no way to continue

### Search Algorithm

1. Check whether the value in the current node and the searched value are equal.
   If so, the value is found.
2. If the searched value is less than the node's value:
   1. If the current node has no left child, the searched value does not exist in the BST.
   2. Otherwise, handle the left child using the same algorithm.
3. If the searched value is greater than the node's value:
   1. If the current node has no right child, the searched value does not exist in the BST.
   2. Otherwise, handle the right child using the same algorithm.

## Removing a Value from the BST

Removing from a BST is more complicated than add and search.

It can be divided into two stages:

1. Search for the node to remove.
2. If the node is found, run the remove algorithm.

### Removal Cases

| Case                  | Action                                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| Node has no children  | Set the corresponding link of the parent to `NULL` and dispose the node.                                        |
| Node has one child    | Link the single child, with its subtree, directly to the parent of the removed node.                            |
| Node has two children | Choose the minimum element from the right subtree, replace the node by that value, then continue restructuring. |

> [!IMPORTANT]
> BST operations rely on the ordering rule: left values are smaller than the root, and right values are greater than the root. This rule is what makes search, insertion, and deletion possible.

The lecture-specific deletion note is that in the two-child case the replacement can be taken from the **largest value in the left subtree**. That node is the **inorder predecessor**. The lecture also notes that the smallest value in the right subtree could be used instead.

## AVL Trees

An **AVL tree** is a **well-balanced BST**. It keeps search, insertion, and deletion efficient by ensuring that the height difference between the left and right subtrees of every node stays small.

### Balance Factor and Rotation Rules

The lecture defines:

```text
balance factor = height(right subtree) - height(left subtree)
```

| Balance factor | Meaning                      | Status     |
| -------------- | ---------------------------- | ---------- |
| `-1`           | left subtree taller by 1     | balanced   |
| `0`            | equal heights                | balanced   |
| `+1`           | right subtree taller by 1    | balanced   |
| `-2` or `+2`   | difference exceeds AVL limit | unbalanced |

| Case   | Node balance | Child balance           | Fix              |
| ------ | ------------ | ----------------------- | ---------------- |
| **LL** | `-2`         | left child `-1` or `0`  | right rotation   |
| **RR** | `+2`         | right child `+1` or `0` | left rotation    |
| **LR** | `-2`         | left child `+1`         | left, then right |
| **RL** | `+2`         | right child `-1`        | right, then left |

```cpp
// Purpose: show the lecture's design direction that AVL builds on BST.
class BST {
public:
  // Standard BST operations.
};

class AVLTree : public BST {
public:
  // Rebalancing logic extends BST behavior.
};
```

> [!CAUTION]
> The extracted AVL lecture explicitly covered the four rotation cases and the class-design relationship to BST, but did not provide later implementation slides in the recovered source.

## C++ Implementation

```cpp
#include <iostream>
#include <queue>
using namespace std;

class BST {
private:
  struct Node {
    int data;
    Node *left;
    Node *right;
  };

  Node *root;

  Node *insert(Node *node, int value) {
    if (node == nullptr) {
      return new Node{value, nullptr, nullptr};
    }

    if (value < node->data) {
      node->left = insert(node->left, value);
    } else if (value > node->data) {
      node->right = insert(node->right, value);
    }
    return node;
  }

  bool search(Node *node, int value) const {
    if (node == nullptr) {
      return false;
    }
    if (node->data == value) {
      return true;
    }
    if (value < node->data) {
      return search(node->left, value);
    }
    return search(node->right, value);
  }

  Node *findMin(Node *node) const {
    while (node != nullptr && node->left != nullptr) {
      node = node->left;
    }
    return node;
  }

  Node *remove(Node *node, int value) {
    if (node == nullptr) {
      return nullptr;
    }

    if (value < node->data) {
      node->left = remove(node->left, value);
    } else if (value > node->data) {
      node->right = remove(node->right, value);
    } else {
      if (node->left == nullptr && node->right == nullptr) {
        delete node;
        return nullptr;
      }

      if (node->left == nullptr) {
        Node *temp = node->right;
        delete node;
        return temp;
      }

      if (node->right == nullptr) {
        Node *temp = node->left;
        delete node;
        return temp;
      }

      Node *successor = findMin(node->right);
      node->data = successor->data;
      node->right = remove(node->right, successor->data);
    }

    return node;
  }

  void preorder(Node *node) const {
    if (node == nullptr) {
      return;
    }
    cout << node->data << ' ';
    preorder(node->left);
    preorder(node->right);
  }

  void inorder(Node *node) const {
    if (node == nullptr) {
      return;
    }
    inorder(node->left);
    cout << node->data << ' ';
    inorder(node->right);
  }

  void postorder(Node *node) const {
    if (node == nullptr) {
      return;
    }
    postorder(node->left);
    postorder(node->right);
    cout << node->data << ' ';
  }

public:
  BST() : root(nullptr) {}

  void insert(int value) {
    root = insert(root, value);
  }

  bool search(int value) const {
    return search(root, value);
  }

  void remove(int value) {
    root = remove(root, value);
  }

  void preorder() const {
    preorder(root);
    cout << endl;
  }

  void inorder() const {
    inorder(root);
    cout << endl;
  }

  void postorder() const {
    postorder(root);
    cout << endl;
  }

  void levelorder() const {
    if (root == nullptr) {
      return;
    }

    queue<Node *> q;
    q.push(root);

    while (!q.empty()) {
      Node *current = q.front();
      q.pop();
      cout << current->data << ' ';

      if (current->left != nullptr) {
        q.push(current->left);
      }
      if (current->right != nullptr) {
        q.push(current->right);
      }
    }

    cout << endl;
  }
};
```

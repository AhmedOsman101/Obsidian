---
prev:
  text: "Section 5"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-5"
next: false
title: Section 6
---

# Data Structures - Section 6

## What Is a Graph?

A **graph** is a data structure that consists of a set of **nodes** and a set of **edges** that relate the nodes to each other.

- nodes are also called **vertices** or **points**
- edges are also called **arcs** or **lines**

The set of edges describes relationships among the vertices. Each node contains an element, and each edge connects two nodes together, or possibly the same node to itself. An edge may also contain an attribute.

## Formal Definition

A graph `G` is defined as:

$$
G = (V, E)
$$

where:

- `V(G)` is a finite nonempty set of vertices
- `E(G)` is a set of edges, represented as pairs of vertices

## Applications of Graphs

The source lists several applications of graphs:

- operating systems
- spanning trees
- artificial intelligence
- physical networks
- logical networks
- fingerprint systems

## Types of Graphs

### Directed Graph

A **directed graph** is a graph in which the edges have a direction. It is also called a **digraph**.

In a directed graph, the order of the vertices in each edge is important.

### Undirected Graph

An **undirected graph** is a graph in which the edges do not have a direction.

### Complete Graph

A **complete graph** is a graph that has the maximum possible number of edges.

For a graph with `n` vertices:

- undirected maximum edges: `n(n - 1) / 2`
- directed maximum edges: `n(n - 1)`

### Subgraph and Parallel Edges

The section also mentions **subgraphs** and **parallel edges** as graph concepts.

## Trees vs Graphs

The source states that trees are a special type of graph, and that trees are **undirected graphs**.

## Graph Terminology

### Adjacent Vertices and Incident Edges

- **Adjacent vertices**: two vertices are adjacent if they are connected directly by an edge
- **Incident edge**: an edge is incident to a vertex if it is one of the edges connected to that vertex

### Subgraph

A graph `G'` is a **subgraph** of `G` if:

- `V(G')` is a subset of `V(G)`
- `E(G')` is a subset of `E(G)`

### Path

A **path** is a list of edges such that each node is the predecessor of the next node in the list.

A path from vertex `vp` to vertex `vq` in a graph `G` is a sequence of vertices:

```txt
vp, vi1, vi2, ..., vin, vq
```

such that the corresponding edges exist between successive vertices.

Two related terms are also given:

- the **length** of a path is the number of edges on it
- a **simple path** is a path in which all vertices, except possibly the first and last, are distinct

### Cycle

A **cycle** is a path whose first and last nodes are the same.

- a **cycle graph** contains at least one cycle
- an **acyclic graph** does not contain any cycles

### Connected Component

In an undirected graph `G`, two vertices are connected if there is a path between them.

An undirected graph is **connected** if for every pair of distinct vertices there is a path from one to the other.

A **connected component** of an undirected graph is a maximal connected subgraph.

### Strongly Connected

A directed graph is **strongly connected** if there is a directed path from `Vi` to `Vj`.

A **strongly connected component** is a maximal subgraph that is strongly connected.

### Tree

In graph terms, a **tree** is a graph that is:

1. connected
2. acyclic

### Degree

The **degree** of a vertex is the number of edges incident to that vertex.

For a directed graph:

- **in-degree** of vertex `v`: the number of edges that have `v` as the head
- **out-degree** of vertex `v`: the number of edges that have `v` as the tail

## Graph Representation

The section presents two standard graph representations:

- adjacency matrix
- adjacency list

### Adjacency Matrix

If `G = (V, E)` has `n` vertices, then the **adjacency matrix** of `G` is a two-dimensional `n x n` array.

Important properties:

- the adjacency matrix of an **undirected graph** is symmetric
- the adjacency matrix of a **directed graph** is not symmetric
- storage complexity is `O(|V|^2)`
- it is difficult to insert and delete nodes

### Adjacency List

To overcome problems of the adjacency matrix, linked lists can be used.

The **adjacency list** contains two lists:

1. node list
2. edge list

Its space complexity is:

$$
O(V + E)
$$

## Dense vs Sparse Graphs

The source distinguishes between dense and sparse graphs:

- **Dense**: `|E| = |V|^2`
- **Sparse**: `|E| = |V|`

## C++ Implementation

### Graph Using Adjacency Matrix

```cpp
#include <iostream>
#include <vector>
using namespace std;

class GraphMatrix {
private:
  vector<vector<int>> matrix;

public:
  GraphMatrix(int vertices) : matrix(vertices, vector<int>(vertices, 0)) {}

  void addEdge(int u, int v, bool directed = false) {
    matrix[u][v] = 1;
    if (!directed) {
      matrix[v][u] = 1;
    }
  }

  void display() const {
    for (const auto &row : matrix) {
      for (int value : row) {
        cout << value << ' ';
      }
      cout << endl;
    }
  }
};
```

### Graph Using Adjacency List

```cpp
#include <iostream>
#include <vector>
using namespace std;

class GraphList {
private:
  vector<vector<int>> adj;

public:
  GraphList(int vertices) : adj(vertices) {}

  void addEdge(int u, int v, bool directed = false) {
    adj[u].push_back(v);
    if (!directed) {
      adj[v].push_back(u);
    }
  }

  void display() const {
    for (int i = 0; i < static_cast<int>(adj.size()); i++) {
      cout << i << ": ";
      for (int neighbor : adj[i]) {
        cout << neighbor << ' ';
      }
      cout << endl;
    }
  }
};
```

### BST Quiz Example from the Section Header

```cpp
#include <iostream>
using namespace std;

struct Node {
  int data;
  Node *left;
  Node *right;
};

Node *insert(Node *root, int value) {
  if (root == nullptr) {
    return new Node{value, nullptr, nullptr};
  }

  if (value < root->data) {
    root->left = insert(root->left, value);
  } else if (value > root->data) {
    root->right = insert(root->right, value);
  }

  return root;
}

int main() {
  int values[] = {50, 30, 70, 20, 40, 60, 80};
  Node *root = nullptr;

  for (int value : values) {
    root = insert(root, value);
  }

  cout << "BST created successfully" << endl;
  return 0;
}
```

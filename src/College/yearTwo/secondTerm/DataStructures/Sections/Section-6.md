---
title: Section 6
prev:
  text: "Section 5"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-5"
next:
  text: "Section 7"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-7"
---

# Data Structures - Section 6

## Graphs

A **graph** G = (V, E) consists of a finite set of **vertices** V and a set of **edges** E (pairs of vertices). Edges describe relationships between vertices.

### Graph Applications

- Operating systems (process scheduling)
- Spanning trees
- Artificial intelligence
- Physical and logical networks
- Fingerprint recognition

## Graph Types

| Type                   | Definition                             |
| ---------------------- | -------------------------------------- |
| **Directed (Digraph)** | Edges have direction; (u,v) != (v,u)   |
| **Undirected**         | Edges have no direction; (u,v) = (v,u) |
| **Complete**           | Maximum possible edges                 |

### Complete Graph Edge Count

| Type                   | Max Edges  |
| ---------------------- | ---------- |
| Undirected, n vertices | $n(n-1)/2$ |
| Directed, n vertices   | $n(n-1)$   |

## Graph Properties

### Adjacency & Incidence

- **Adjacent vertices**: two vertices connected directly by an edge
- **Incident edge**: an edge connected to a given vertex

### Subgraph

A graph G' is a **subgraph** of G if $V(G') \subseteq V(G)$ and $E(G') \subseteq E(G)$.

### Paths & Cycles

- **Path**: sequence of vertices where each consecutive pair is connected by an edge
- **Path length**: number of edges in the path
- **Simple path**: all vertices distinct (except possibly first and last)
- **Cycle**: path whose first and last vertices are the same
- **Acyclic graph**: contains no cycles

### Connectivity

| Concept                           | Definition                                 |
| --------------------------------- | ------------------------------------------ |
| **Connected (undirected)**        | Path exists between every pair of vertices |
| **Connected component**           | Maximal connected subgraph                 |
| **Strongly connected (directed)** | Directed path exists from any Vi to any Vj |
| **Strongly connected component**  | Maximal strongly connected subgraph        |

### Tree vs Graph

A **tree** is a connected, acyclic undirected graph.

### Degree

- **Degree** of a vertex: number of incident edges
- **In-degree** (directed): edges pointing to the vertex
- **Out-degree** (directed): edges pointing away from the vertex

## Graph Representations

### Adjacency Matrix

An n×n 2D array where `matrix[i][j] = 1` if edge exists between i and j.

- Undirected graph: matrix is **symmetric**
- Directed graph: matrix is **not symmetric**
- **Storage**: $O (\space \vert V \vert ^2 \space)$
- **Drawback**: difficult to insert/delete nodes

### Adjacency List

Array of linked lists. Each vertex has a list of adjacent vertices.

- **Node list**: stores vertices
- **Edge list**: stores connections per vertex
- **Space**: $O(\space V + E \space)$
- Preferred for **sparse** graphs

### Dense vs Sparse

| Type       | Condition                    |
| ---------- | ---------------------------- |
| **Dense**  | $E \approx \vert V \vert ^2$ |
| **Sparse** | $E \approx \vert V \vert$    |

---

_3 min read (source: 6 min)_

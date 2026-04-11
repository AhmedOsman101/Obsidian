---
prev:
  text: "Lecture 10"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-10"
next: false
title: Lecture 11
---

# Data Structures - Lecture 11

## Heaps: Definition and Properties

A **heap** is a special binary tree-based data structure that satisfies the **heap property**: in a max-heap, each parent node's value is greater than or equal to its children's values; in a min-heap, each parent is less than or equal to its children. This matters because heaps enable efficient priority queue operations and sorting (heap sort).

A heap is a **complete binary tree**—all levels are completely filled except possibly the last, which fills from left to right. This complete structure enables efficient array representation.

## Heap Operations

**Insert** adds a new element to the heap, then performs **heapify up** (also called bubble up) to restore the heap property by comparing with parent nodes and swapping if needed.

**Delete** (typically removing the root) replaces the root with the last element, then performs **heapify down** (bubble down) to restore heap property by comparing with children and swapping with the larger (for max-heap) or smaller (for min-heap) child.

Both operations take O(log n) time because the tree height is O(log n).

| Operation | Time Complexity |
| --------- | ---------------- |
| Insert | O(log n) |
| Delete Max/Min | O(log n) |
| Get Max/Min | O(1) |

## Priority Queues

A **priority queue** is an abstract data type where elements have associated priorities, and the highest-priority element is removed first. Heaps are the standard implementation for priority queues.

In a **max priority queue**, higher numerical values represent higher priority. In a **min priority queue**, lower values represent higher priority.

```c
// Purpose: Heap-based priority queue operations
// Insert: Add to end, then heapify up
// Extract-max: Replace root with last, then heapify down
```

## Heap Sort

**Heap sort** uses a heap to sort elements. Build a max-heap from the array, then repeatedly extract the maximum (root) and place it at the end of the unsorted portion.

Algorithm:
1. Build max-heap from unsorted array: O(n)
2. Repeat n times: swap root with last element, reduce heap size, heapify down: O(n log n)

Total time complexity: O(n log n) in all cases. Space complexity: O(1) if done in-place.

> [!IMPORTANT]
> *Heap sort is O(n log n) in worst, average, and best cases—unlike quicksort which degrades to O(n²) in worst case.*

## Graphs: Definition and Types

A **graph** is a non-linear data structure consisting of vertices (nodes) connected by edges. This matters because graphs model relationships like road networks, social connections, and web page links.

| Graph Type | Description |
| ---------- | ----------- |
| **Undirected** | Edges have no direction; relationships are bidirectional |
| **Directed** | Edges have direction; relationships are one-way |
| **Weighted** | Edges have associated costs or distances |
| **Unweighted** | All edges have equal weight |

## Graph Representation

Two common ways to represent graphs:

**Adjacency Matrix**: A 2D array where matrix[i][j] indicates whether an edge exists between vertex i and j. Space: O(V²). Good for dense graphs.

**Adjacency List**: An array of lists where each vertex has a list of its neighbors. Space: O(V + E). Good for sparse graphs.

| Representation | Space | Edge Check | Iterate Neighbors |
| -------------- | ----- | ---------- | ----------------- |
| Adjacency Matrix | O(V²) | O(1) | O(V) |
| Adjacency List | O(V+E) | O(degree) | O(degree) |

## Graph Traversals

**Breadth-First Search (BFS)** explores level by level using a queue. Starting from a source, all neighbors at distance d are visited before distance d+1. Time: O(V + E), Space: O(V).

**Depth-First Search (DFS)** explores as far as possible along each branch before backtracking, using a stack (or recursion). Time: O(V + E), Space: O(V).

```c
// Purpose: BFS uses queue, visits all neighbors at current distance first
// Purpose: DFS uses stack (or recursion), goes deep before exploring siblings
```

> [!WARNING]
> *BFS finds shortest path in unweighted graphs. DFS may not find the shortest path but uses less memory in some implementations.*

## Minimum Spanning Tree

A **spanning tree** connects all vertices without cycles using exactly V-1 edges. A **minimum spanning tree (MST)** has the minimum total edge weight. Key algorithms:
- **Prim's algorithm**: Grow MST from a starting vertex
- **Kruskal's algorithm**: Add smallest edges that don't form cycles

Both produce the same MST and run in O(E log V) with appropriate data structures.
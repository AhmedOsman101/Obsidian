---
title: Lecture 4
prev:
  text: "Lecture 3"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-3"
next:
  text: "Lecture 5"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-5"
---

# Data Structures - Lecture 4

## List Definition

A **list** is a sequential set of data items where new values are inserted and existing values are removed at positions **determined by the user** (not restricted to ends like stacks/queues).

### Array-Based List Problem

Insertion requires **shifting** all elements after the insertion point one position right. Deletion requires shifting left. Both are **O(n)** operations.

### Why Linked Lists?

Applications that require **dynamic resizing** benefit from linked lists: memory is allocated on demand and deallocated when no longer needed, avoiding wasted pre-allocated space.

## Linked List Structure

A **linked list** is a linear data structure of **nodes**, each containing:

- **Data** — the stored value
- **Next** — a pointer to the subsequent node (NULL for the last node)

A **head** pointer references the first node. The last node's next pointer is NULL.

## Array List vs. Linked List

| Aspect                    | Array List                  | Linked List          |
| ------------------------- | --------------------------- | -------------------- |
| Memory                    | Pre-allocated, wastes space | Allocated on demand  |
| Insert/Delete at position | O(n) shifting               | O(1) after traversal |
| Access by index           | O(1)                        | O(n) traversal       |
| Resizing                  | Reallocation + copy         | Automatic            |

## Think

- Track list size? Add a `size` member, increment on insert, decrement on retrieve/clear.
- **Linked stack:** insert/delete at position 0 only — O(1) push/pop.
- **Linked queue:** insert at tail, delete at head — add tail pointer for O(1) enqueue.

---

_3 min read (source: 5 min)_

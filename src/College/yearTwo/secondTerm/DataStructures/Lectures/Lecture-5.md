---
title: Queues II
prev:
  text: "Lists I"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-4"
next:
  text: "Lists II"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-6"
---

# Queues II: Linked Stack and Queue Implementations

## Linked Stack and Linked Queue Overview

Lecture 5 replaces array-based **stack** and **queue** storage with **linked nodes**. The key gain is dynamic growth without shifting elements.

| Term             | Meaning in this lecture                                   | Why it matters                     |
| ---------------- | --------------------------------------------------------- | ---------------------------------- |
| **Node**         | one record containing data and a pointer to the next node | basic storage unit                 |
| **Linked stack** | a stack whose top is the first node in a linked chain     | push and pop happen at the head    |
| **Linked queue** | a queue tracked by both front and rear pointers           | enqueue and dequeue stay efficient |

_Common error:_ linked does not mean unordered.

## Linked Stack Representation and Operations

In a **linked stack**, the stack variable is a pointer to the top node.

The lecture ideas are:

- `CreateStack` makes the top pointer null
- `StackEmpty` tests whether a top node exists
- `StackFull` returns `0` because there is no fixed-capacity array bound
- `Push` inserts at the head
- `Pop` removes the current head

> [!NOTE]
> In linked implementations, "full" usually means memory allocation failed, not that a predefined `MAX` was reached.

## Linked Queue Representation and Operations

In a **linked queue**, efficient insertion and deletion require both `front` and `rear`.

The lecture ideas are:

- an empty queue has both pointers set to `nullptr`
- `Enqueue` inserts at the rear and preserves the front
- `Dequeue` removes from the front
- after deleting the last node, `rear` must also become `nullptr`

> [!CAUTION]
> When the last queue node is removed, leaving `rear` unchanged creates a dangling pointer.

## Linked vs Array Implementations

| Point          | Linked stack/queue               | Array stack/queue            |
| -------------- | -------------------------------- | ---------------------------- |
| Capacity       | grows dynamically                | fixed by declared array size |
| Memory layout  | non-contiguous nodes             | contiguous cells             |
| Full condition | usually only if memory fails     | reaches `MAX`                |
| Extra storage  | needs pointer field in each node | no link field needed         |
| Clearing       | must deallocate nodes            | usually reset indices only   |

Exam idea: array implementations manage **positions**, while linked implementations manage **pointers between nodes**.

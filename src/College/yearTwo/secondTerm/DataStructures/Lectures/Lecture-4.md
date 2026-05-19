---
title: Lists I
prev:
  text: "Queues I"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-3"
next:
  text: "Queues II"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-5"
---

# Lists I: Lists and Singly Linked Lists

## List Definition and Position Rules

A **list** is a **sequential set of data items**. In a general list, insertion and deletion positions are determined by the user.

For a list with `n` elements:

1. insertion can occur at `0 <= p <= n`
2. deletion can occur at `0 <= p < n`
3. array-based insertion requires shifting right
4. array-based deletion requires shifting left

| Structure | Where updates happen      | Cost source           |
| --------- | ------------------------- | --------------------- |
| **List**  | user-chosen position      | shifting or relinking |
| **Stack** | top only                  | fixed-end updates     |
| **Queue** | rear insert, front delete | end-specific updates  |

> [!CAUTION]
> A list is not defined by one fixed insertion end.

## Why Linked Lists Are Used

When required size is not known in advance, the lecture prefers the **linked list**.

A **linked list** is a **linear data structure** consisting of a sequence of **nodes** connected to one another. Each node stores:

- **data**
- a **link** to the next node

Linked lists are **dynamic data structures**, so they can grow or shrink during execution.

## Node Structure and List Representations

The lecture shows two common representations:

1. the list itself as a pointer to the first node
2. a wrapper structure storing that pointer as `head`

| Representation          | Meaning                             | Effect on code               |
| ----------------------- | ----------------------------------- | ---------------------------- |
| **`Node*` list**        | list name stores first-node address | empty list is `NULL`         |
| **Wrapper with `head`** | structure stores first-node address | empty list is `head == NULL` |

## Core Linked-List Operations

The lecture defines **CreateList**, **EmptyList**, **FullList**, **Insert**, **Retrieve**, and **ClearList**.

The key conceptual points are:

- insertion at position `0` changes the first-node pointer itself
- linked-list `FullList` returns `0` because there is no fixed array capacity
- pointer-update order matters because a wrong order can lose part of the list

## The Lecture's "Retrieve" Code and the Real Behavior

The lecture labels one operation as **Retrieve**, but the shown algorithm actually removes the node from the list and deallocates it.

> [!CAUTION]
> A true retrieve should leave the list unchanged, but the lecture's shown code behaves like **delete and return removed item**.

## Clear Operation and Design Comparisons

**ClearList** removes every node until the list becomes empty. The conceptual rule is: advance the list pointer before deleting the saved old node, or the rest of the list would be lost.

| Contrast pair        | Array-based list     | Linked list              |
| -------------------- | -------------------- | ------------------------ |
| Growth               | fixed unless resized | dynamic during execution |
| Position update cost | shifting elements    | relinking pointers       |
| Memory layout        | contiguous           | non-contiguous nodes     |

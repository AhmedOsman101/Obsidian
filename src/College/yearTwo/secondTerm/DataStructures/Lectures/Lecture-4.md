---
title: Lecture 4
prev:
  text: "Lecture 3"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-3"
next:
  text: "Lecture 5"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-5"
---

## List Definition and Position Rules

A **list** is a **sequential set of data items (values)**. In a general list, insertion and deletion positions are determined by the user.

**Why this matters:** the main exam boundary is that a list supports user-chosen positions, so operations must validate where insertion or deletion is allowed.

For an array-based view of a list:

1. Insertion can occur at position `0 <= p <= n`, where `n` is the current number of elements.
2. Deletion can occur at position `0 <= p < n`.
3. Insertion requires shifting later elements one cell right.
4. Deletion requires shifting later elements one cell left.

| Structure | Where updates happen      | Cost source           |
| --------- | ------------------------- | --------------------- |
| **List**  | User-chosen position      | Shifting or relinking |
| **Stack** | Top only                  | Fixed-end updates     |
| **Queue** | Rear insert, front delete | End-specific updates  |

> [!CAUTION]
> _A list is not defined by one fixed insertion end._ If the user chooses the position, it is list behavior, not stack or queue behavior.

## Why Linked Lists Are Used

When required size is not known in advance, the lecture prefers the **linked list**.

A **linked list** is a **linear data structure** consisting of a sequence of **nodes** connected to one another. Each node stores:

- **Data**
- A **link** to the next node

**Why this matters:** linked lists are **dynamic data structures**, so they can grow or shrink during program execution without needing one fixed contiguous block.

The lecture highlights dynamic growth/shrinkage and memory allocation only when needed.

## Node Structure and List Representations

The basic block of the linked list is the **node**. Each node contains an information field and a pointer to the next node. The final node points to **NULL**, which means it points to nothing.

```cpp
// Represents one linked-list node.
using EntryType = char;

struct Node {
  EntryType info;
  Node* next;
};
```

The lecture shows two list representations: the list itself as a pointer to the first node, or a wrapper structure storing that pointer as `head`.

```cpp
// Simple representation: the list is a pointer to the first node.
using ListType = Node*;
```

```cpp
// Better declaration in the lecture: wrap the head pointer.
struct ListType {
  Node* head;
};
```

| Representation          | Meaning                                           | Effect on code               |
| ----------------------- | ------------------------------------------------- | ---------------------------- |
| **`Node*` list**        | List name directly stores first-node address      | Empty list is `NULL`         |
| **Wrapper with `head`** | Structure stores first-node address inside `head` | Empty list is `head == NULL` |

## Core Linked-List Operations

The lecture defines **CreateList**, **EmptyList**, **FullList**, **Insert**, **Retrieve**, and **ClearList**.

**Why this matters:** linked-list code depends on pointer state, so each operation must preserve correct links and handle the head node carefully.

### Create, Empty, and Full

If the list is represented directly as `Node*`, creation sets the list to `NULL`. If the wrapped form is used, creation sets `head` to `NULL`.

```cpp
// Initializes an empty list in the simple pointer representation.
void CreateList(ListType* L) {
  *L = NULL;
}
```

```cpp
// Initializes an empty list in the wrapped-head representation.
void CreateList(ListType* L) {
  L->head = NULL;
}
```

In the simple pointer representation:

- **EmptyList** returns true when `L == NULL`.
- **FullList** returns `0` in the lecture, meaning linked lists are treated as not full under normal logic.

> [!IMPORTANT]
> The lecture's **FullList** returns `0`, so the linked list is treated as not having a fixed capacity like an array-based list.

## Insert by Position

The **Insert** contract is: initialized, not full, and `0 <= pos <= size of the list`.

**Why this matters:** insertion at position `0` is a special case because it changes the first node pointer itself.

```cpp
// Inserts a new node at a specific position.
void Insert(ListType* L, EntryType item, int pos) {
  Node* p = new Node;
  p->info = item;

  if (pos == 0) {
    p->next = *L;
    *L = p;
  } else {
    Node* q;
    int i;
    for (q = *L, i = 0; i < pos - 1; i++) {
      q = q->next;
    }
    p->next = q->next;
    q->next = p;
  }
}
```

### Why Order Matters

1. Allocate the new node first.
2. Move to the node before the target position if `pos > 0`.
3. Link the new node to its successor.
4. Redirect the previous node to the new node.

If links are changed in the wrong order, part of the list may become unreachable.

## The Lecture's "Retrieve" Code and the Real Behavior

The lecture labels one operation as **Retrieve**, but the shown code removes the node from the list and frees it. So its real behavior is closer to **delete and return the removed item**.

**Why this matters:** this is an exam trap. A true retrieve should leave the list unchanged, but the lecture code changes links and deallocates memory.

```cpp
// The lecture's shown code removes the node and returns its item.
void Retrieve(ListType* L, EntryType* item, int pos) {
  int i;
  Node* q;
  Node* tmp;

  if (pos == 0) {
    *item = (*L)->info;
    tmp = *L;
    *L = (*L)->next;
    delete tmp;
  } else {
    for (q = *L, i = 0; i < pos - 1; i++) {
      q = q->next;
    }
    *item = q->next->info;
    tmp = q->next;
    q->next = tmp->next;
    delete tmp;
  }
}
```

> [!CAUTION]
> _The displayed **Retrieve** implementation is not read-only._ It changes the list and deallocates the removed node.

## Clear Operation and Design Comparisons

**ClearList** removes every node until the list becomes empty. It repeatedly saves the current first node, advances the list pointer, then deallocates the saved node.

```cpp
// Clears the entire linked list.
void ClearList(ListType* L) {
  Node* q;
  while (*L) {
    q = *L;
    *L = (*L)->next;
    delete q;
  }
}
```

**Why this matters:** clearing must advance before deletion, or the rest of the list would be lost.

Useful review points from the lecture:

- Tracking **list size** inside the ADT may simplify validation.
- **Array-based lists** use shifting; **linked lists** use pointer relinking.
- A linked list can be adapted into a **linked stack** or **linked queue** by restricting update positions.

| Contrast Pair        | Array-Based List              | Linked List              |
| -------------------- | ----------------------------- | ------------------------ |
| Growth               | Fixed capacity unless resized | Dynamic during execution |
| Position update cost | Shifting elements             | Relinking pointers       |
| Memory layout        | Contiguous                    | Non-contiguous nodes     |

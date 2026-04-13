---
prev:
  text: "Lecture 5"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-5"
next:
  text: "Lecture 7"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-7"
title: Lecture 6
---

# Data Structures - Lecture 6

## Linked List Use Cases

Linked lists solve practical problems where dynamic sizing matters. Two classic applications are **printing a list in reverse** and **reversing a singly linked list**.

**Printing in reverse** without modifying the list requires auxiliary storage. A stack can hold elements while traversing forward, then pop them to output in reverse order.

```c
// Purpose: Print linked list elements in reverse order
void printRev(ListType L) {
  Node *p = L;
  StackType s;
  CreateStack(&s);
  while (p && !StackFull(s)) {
    Push(&s, p->info);
    p = p->next;
  }
  EntryType c;
  while (!StackEmpty(s)) {
    Pop(&s, &c);
    printf("%c", c);
  }
}
```

> [!IMPORTANT]
> _This approach uses O(n) extra space but does not modify the original list. The alternative of reversing pointers in-place would change the structure._

## Doubly Linked Lists: Definition and Structure

A **doubly linked list** adds a **prev** pointer to each node, enabling traversal in both directions. This matters for operations that need backward access, such as deleting a node when you only have that node's pointer.

```c
// Purpose: Define doubly linked list node
typedef struct nodeS {
  int key;
  EntryType info;
  struct nodeS *next;
  struct nodeS *prev;
} Node;
```

Each node contains the data, a forward link (next), and a backward link (prev). The list maintains a head pointer; the prev of the first node is NULL.

## Doubly Linked List Operations

**CreateList** initializes an empty doubly linked list.

```c
// Purpose: Initialize empty doubly linked list
void CreateDL(dLType *dl) {
  dl->head = NULL;
}
```

**Insert** in a doubly sorted linked list places elements in sorted order by key. The algorithm searches for the correct position based on key comparison.

```c
// Purpose: Insert element in sorted order by key
void Insert(dLType *dl, EntryType e) {
  Node *p = (Node *)malloc(sizeof(Node));
  p->info = e;
  Node *q = dl->head;
  if (dl->head == NULL) {
    p->prev = NULL;
    p->next = NULL;
    dl->head = p;
  } else {
    while (e.key > q->info.key)
      q = q->next;
    p->next = q;
    p->prev = q->prev;
    if (q->prev)
      q->prev->next = p;
    else
      dl->head = p;
    q->prev = p;
  }
}
```

> [!WARNING]
> _Insertion requires updating four pointers: the new node's next and prev, and both neighbors' pointers. Missing any update breaks the chain._

## Circular Linked Lists

A **circular linked list** has the last node pointing back to the first node instead of NULL. This matters for scenarios requiring continuous traversal, such as round-robin scheduling.

| Type            | Last node points to          | Use case               |
| --------------- | ---------------------------- | ---------------------- |
| Singly circular | First node                   | Round-robin scheduling |
| Doubly circular | First node (both directions) | Cyclic buffers         |

The key difference: termination check compares to NULL, but in circular lists you must track when you've returned to the starting point.

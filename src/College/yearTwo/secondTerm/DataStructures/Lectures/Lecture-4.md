---
prev:
  text: "Lecture 3"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-3"
next:
  text: "Lecture 5"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-5"
title: Lecture 4
---

# Data Structures - Lecture 4

## Linked Lists: Definition and Structure

A **linked list** is a linear data structure consisting of a sequence of nodes, where each node stores data and a pointer to the next node. This matters because linked lists provide dynamic memory allocation—they grow or shrink during execution without requiring a fixed size declaration.

Each node contains two parts: **info** (the actual data) and **next** (a pointer to the following node). The list structure maintains a **head** pointer to the first node, and the last node points to **NULL** indicating the end of the list.

```c
// Purpose: Define node structure for linked list
typedef struct nodeT {
  EntryType info;
  struct nodeT *next;
} Node;

// Purpose: Define list with head pointer
typedef struct {
  Node *head;
} ListType;
```

## Linked List vs. Array-Based List

**Array-based lists** store elements in contiguous memory, enabling O(1) random access by index. However, insertion and deletion require shifting elements—O(n) time complexity. Arrays also have a fixed capacity that cannot change during runtime.

**Linked lists** allocate memory for each node individually. Insertion and deletion at any position are O(1) operations if you have a pointer to that position. However, accessing element at index n requires traversing from the head—O(n) time. Memory usage is higher per element due to pointer storage.

| Feature | Array List | Linked List |
| ------- | ---------- | ------------ |
| Random access | O(1) | O(n) |
| Insert at position | O(n) | O(1)* |
| Delete at position | O(n) | O(1)* |
| Memory allocation | Fixed upfront | Dynamic per node |
| Memory per element | Data only | Data + pointer |

*O(1) only if pointer to position is available

> [!IMPORTANT]
> *Linked lists never "overflow" due to size limits—memory allocation fails only when the system runs out of heap space.*

## Linked List Operations

**CreateList** initializes an empty list by setting the head pointer to NULL.

```c
// Purpose: Initialize empty linked list
void CreateList(ListType *L) {
  L->head = NULL;
}
```

**EmptyList** checks whether the list contains any nodes.

```c
// Purpose: Check if list is empty
int EmptyList(ListType L) {
  return (L == NULL);
}
```

**FullList** for linked lists always returns false (0) because memory allocation fails only when the system runs out of memory.

## Insertion in Linked Lists

**Insert(position, item)** adds a new node at a specified position (0 ≤ position ≤ n, where n is current length). Insertion does not require shifting elements like in arrays—the link pointers are simply updated.

```c
// Purpose: Insert node at specific position
void Insert(ListType *L, EntryType item, int pos) {
  Node *p = (Node *)malloc(sizeof(Node));
  p->info = item;
  if (pos == 0) {
    p->next = *L;
    *L = p;
  } else {
    Node *q;
    int i;
    for (q = *L, i = 0; i < pos - 1; i++)
      q = q->next;
    p->next = q->next;
    q->next = p;
  }
}
```

The key distinction: inserting at position 0 updates the head; inserting elsewhere updates the previous node's next pointer.

## Retrieval and Deletion in Linked Lists

**Retrieve(position, item)** removes and returns the node at a specified position (0 ≤ position < n). The deleted node's memory must be freed to prevent leaks.

```c
// Purpose: Retrieve and delete node at position
void Retrieve(ListType *L, EntryType *item, int pos) {
  Node *q, *tmp;
  if (pos == 0) {
    *item = (*L)->info;
    tmp = *L;
    *L = (*L)->next;
    free(tmp);
  } else {
    for (q = *L, i = 0; i < pos - 1; i++)
      q = q->next;
    *item = q->next->info;
    tmp = q->next;
    q->next = tmp->next;
    free(tmp);
  }
}
```

> [!WARNING]
> *When deleting the last node (position = size-1), the previous node's next pointer becomes NULL. Always ensure the new tail's next is set correctly.*

## Clear Operation

**ClearList** frees all allocated nodes by traversing the list and calling free() on each node.

```c
// Purpose: Free all nodes in the list
void ClearList(ListType *L) {
  Node *q;
  while (*L) {
    q = *L;
    *L = (*L)->next;
    free(q);
  }
}
```

This prevents memory leaks when the list is no longer needed.

## Doubly Linked Lists

A **doubly linked list** adds a **prev** pointer to each node, enabling traversal in both directions. This matters for operations that need to go backward, like deleting a node when you only have that node's pointer.

```c
// Purpose: Define doubly linked list node
typedef struct nodeS {
  int key;
  EntryType info;
  struct nodeS *next;
  struct nodeS *prev;
} Node;
```

The doubly linked structure requires updating two pointers on insertion/deletion: both the next and prev links must be maintained.
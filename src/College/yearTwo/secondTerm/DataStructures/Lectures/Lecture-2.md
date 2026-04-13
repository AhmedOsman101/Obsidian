---
prev:
  text: "Lecture 1"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-1"
next:
  text: "Lecture 3"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-3"
title: Lecture 2
---

# Data Structures - Lecture 2

## Linked Lists: Definition and Structure

A **linked list** is a linear data structure consisting of a sequence of nodes, where each node stores data and a link to the next node. This matters because linked lists provide dynamic memory allocation—they grow or shrink during execution without requiring a fixed size declaration.

Each node contains two parts: **info** (the actual data) and **next** (a pointer to the following node). The list structure maintains a **head** pointer to the first node, and the last node points to **NULL** indicating the end of the list.

```c
// Purpose: Define node structure for linked list
typedef struct nodeT {
  EntryType info;
  struct nodeT *next;
} Node;

typedef Node *ListType;
```

> [!IMPORTANT]
> _Unlike arrays, linked lists cannot access elements by index directly. Traversing to position n requires O(n) time._

## Array-Based Lists vs. Linked Lists

**Array-based lists** store elements in contiguous memory, enabling O(1) random access by index. However, insertion and deletion require shifting elements—O(n) time complexity. Arrays also have a fixed capacity that cannot change during runtime.

**Linked lists** allocate memory for each node individually. Insertion and deletion at any position are O(1) operations if you have a pointer to that position. However, accessing element at index n requires traversing from the head—O(n) time. Memory usage is higher per element due to pointer storage.

| Feature            | Array List    | Linked List      |
| ------------------ | ------------- | ---------------- |
| Random access      | O(1)          | O(n)             |
| Insert at position | O(n)          | O(1)\*           |
| Delete at position | O(n)          | O(1)\*           |
| Memory allocation  | Fixed upfront | Dynamic per node |
| Memory per element | Data only     | Data + pointer   |

\*O(1) only if pointer to position is available

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

**FullList** for linked lists always returns false (0) because memory allocation fails only when the system runs out of memory, not at a predictable threshold.

> [!WARNING]
> _In linked lists, `FullList` is not meaningful—memory allocation fails unpredictably. Check for allocation failure after malloc() instead._

## Insertion and Deletion in Linked Lists

**Insert(position, item)** adds a new node at a specified position (0 ≤ position ≤ n, where n is current length). This matters because insertion does not require shifting elements like in arrays—the link pointers are simply updated.

```c
// Purpose: Insert node at specific position
void Insert(ListType *L, int pos, EntryType item) {
  Node *p = (Node *)malloc(sizeof(Node));
  p->info = item;
  // Connect new node and update head if needed
}
```

**Delete(position)** removes the node at a specified position (0 ≤ position < n). The deleted node's memory must be freed to prevent leaks.

```c
// Purpose: Delete node at specific position
void Delete(ListType *L, int pos, EntryType *item) {
  Node *p = L->head;
  // Traverse to position, unlink node, free memory
}
```

The key advantage over arrays: insertion and deletion time complexity depends only on finding the position, not on shifting elements.

## Linked Stack Implementation

A **linked stack** uses the same node structure but restricts operations to push (insert at head) and pop (remove from head). This maintains LIFO behavior while allowing unlimited capacity.

```c
// Purpose: Push operation for linked stack
void Push(EntryType item, StackType *s) {
  Node *p = (Node *)malloc(sizeof(Node));
  p->info = item;
  p->next = *s;
  *s = p;
}

// Purpose: Pop operation for linked stack
void Pop(EntryType *item, StackType *s) {
  *item = (*s)->info;
  Node *p = *s;
  *s = (*s)->next;
  free(p);
}
```

> [!NOTE]
> _Linked stacks never overflow (unless system memory exhausts), unlike array-based stacks limited by MAX size._

## Linked Queue Implementation

A **linked queue** maintains two pointers: **front** points to the head for dequeuing, and **rear** points to the tail for enqueuing. This enables O(1) operations at both ends.

```c
// Purpose: Enqueue operation for linked queue
void Enqueue(EntryType item, QueueType *q) {
  Node *p = (Node *)malloc(sizeof(Node));
  p->info = item;
  p->next = NULL;
  if (!q->rear)
    q->front = p;
  else
    q->rear->next = p;
  q->rear = p;
}

// Purpose: Dequeue operation for linked queue
void Dequeue(EntryType *item, QueueType *q) {
  *item = q->front->info;
  Node *p = q->front;
  q->front = q->front->next;
  free(p);
  if (!q->front) q->rear = NULL;
}
```

The queue tracks both ends because removing from the front requires updating head, while adding to the rear requires knowing where the last node is. Both operations remain O(1) with this design.

## Clear Operations

**ClearStack** and **ClearQueue** free all allocated nodes by traversing the list and calling free() on each node. For queues, rear must also be reset to NULL after all nodes are freed.

```c
// Purpose: Clear linked stack
void ClearStack(StackType *s) {
  Node *q;
  while (*s) {
    q = *s;
    *s = (*s)->next;
    free(q);
  }
}
```

This prevents memory leaks when the stack or queue is no longer needed.

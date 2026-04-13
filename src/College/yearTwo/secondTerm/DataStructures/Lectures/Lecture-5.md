---
prev:
  text: "Lecture 4"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-4"
next:
  text: "Lecture 6"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-6"
title: Lecture 5
---

# Data Structures - Lecture 5

## Linked Stack: Definition and Implementation

A **linked stack** uses a linked list to implement the LIFO (Last In, First Out) stack structure. This matters because linked stacks provide unlimited capacity—memory allocation for each push continues until the system runs out of heap space. Unlike array-based stacks, there is no fixed MAX size.

The implementation uses the same node structure as linked lists, but restricts operations to only push (insert at head) and pop (remove from head). The stack pointer points to the head of the linked list.

```c
// Purpose: Define linked stack node structure
typedef char EntryType;
typedef struct {
  EntryType info;
  Node *next;
} Node;
typedef Node *StackType;
```

## Linked Stack Operations

**CreateStack** initializes an empty stack by setting the pointer to NULL.

```c
// Purpose: Initialize empty linked stack
void CreateStack(StackType *s) {
  *s = NULL;
}
```

**StackEmpty** checks if the stack has any nodes.

```c
// Purpose: Check if linked stack is empty
int StackEmpty(StackType s) {
  return (s == NULL);
}
```

**StackFull** for linked stacks always returns false (0) because the stack grows dynamically until memory exhaustion.

> [!IMPORTANT]
> _Linked stacks never overflow due to size limits—only system memory exhaustion causes failure. Always check malloc() return value in production code._

**Push** adds a new node at the top of the stack.

```c
// Purpose: Push item onto linked stack
void Push(EntryType item, StackType *s) {
  Node *p = (Node *)malloc(sizeof(Node));
  p->info = item;
  p->next = *s;
  *s = p;
}
```

**Pop** removes and returns the top node's data, then frees the node.

```c
// Purpose: Pop item from linked stack
void Pop(EntryType *item, StackType *s) {
  *item = (*s)->info;
  Node *p = *s;
  *s = (*s)->next;
  free(p);
}
```

## Linked Queue: Definition and Implementation

A **linked queue** uses a linked list with two pointers: **front** points to the head for dequeuing, and **rear** points to the tail for enqueuing. This design enables O(1) operations at both ends.

```c
// Purpose: Define linked queue structure
typedef struct {
  Node *front;
  Node *rear;
} QueueType;
```

The key insight: both operations require knowing where to add or remove, so tracking both ends is necessary. With only one pointer, either enqueue or dequeue would require traversing the entire list.

## Linked Queue Operations

**CreateQueue** initializes both pointers to NULL.

```c
// Purpose: Initialize empty linked queue
void CreateQueue(QueueType *q) {
  q->front = NULL;
  q->rear = NULL;
}
```

**QueueEmpty** checks if both pointers are NULL (empty queue).

```c
// Purpose: Check if linked queue is empty
int QueueEmpty(QueueType q) {
  return (q->front == NULL);
}
```

**Enqueue** adds an item at the rear of the queue.

```c
// Purpose: Enqueue item into linked queue
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
```

**Dequeue** removes an item from the front of the queue.

```c
// Purpose: Dequeue item from linked queue
void Dequeue(EntryType *item, QueueType *q) {
  *item = q->front->info;
  Node *p = q->front;
  q->front = q->front->next;
  free(p);
  if (!q->front)
    q->rear = NULL;
}
```

> [!WARNING]
> _After dequeuing the last element, both front and rear must be set to NULL. Otherwise, the queue appears to have a rear but no front, causing inconsistent state._

## Clear Operations

Both linked stack and linked queue require clear operations to free all allocated nodes.

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

// Purpose: Clear linked queue
void ClearQueue(QueueType *q) {
  Node *p;
  while (q->front) {
    p = q->front;
    q->front = q->front->next;
    free(p);
  }
  q->rear = NULL;
}
```

## Array vs. Linked Implementation Comparison

| Feature                   | Array Stack/Queue | Linked Stack/Queue    |
| ------------------------- | ----------------- | --------------------- |
| Size limit                | Fixed (MAX)       | Unlimited (dynamic)   |
| Overflow                  | Yes (when full)   | No (memory-dependent) |
| Memory efficiency         | Fixed allocation  | Per-node overhead     |
| Implementation complexity | Simpler           | Requires malloc/free  |
| Random access             | O(1)              | O(n)                  |

The choice depends on whether the maximum size is known (array preferred for simplicity) or unknown (linked preferred for flexibility).

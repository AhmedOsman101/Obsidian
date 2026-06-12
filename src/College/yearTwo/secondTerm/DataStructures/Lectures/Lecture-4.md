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

## LinkedList Class

```cpp
struct Node {
  char info;
  Node* next;
};

class LinkedList {
private:
  Node* head;

public:
  LinkedList();
  bool isEmpty();
  bool isFull();
  void insert(char item, int pos);
  char retrieve(int pos);
  void clear();
};
```

## Constructor and Basic Operations

```cpp
LinkedList::LinkedList() {
  head = nullptr;
}

bool LinkedList::isEmpty() const {
  return head == nullptr;
}

bool LinkedList::isFull() const {
  return false;  // linked lists allocate dynamically; real impl checks allocation failure
}
```

## insert

Adds a node at position `pos` (0-indexed). Two cases:

1. **pos == 0** (insert at head): new node points to current head, then head updates to new node
2. **pos > 0**: traverse to node at `pos - 1`, splice new node between it and its successor

```cpp
void LinkedList::insert(char item, int pos) {
  Node* p = new Node;
  p->info = item;

  if (pos == 0) {
    p->next = head;
    head = p;
  } else {
    Node* q = head;
    for (int i = 0; i < pos - 1; i++)
      q = q->next;
    p->next = q->next;
    q->next = p;
  }
}
```

> [!WARNING]
> No bounds checking is performed. Inserting at a position beyond the list size will cause undefined behavior (dereferencing NULL through `q->next`).

## retrieve

Removes and returns the node at position `pos`. Two cases:

1. **pos == 0** (remove head): save head data, advance head, delete old head
2. **pos > 0**: traverse to `pos - 1`, unlink its successor, delete it

```cpp
char LinkedList::retrieve(int pos) {
  char item;
  Node* tmp;

  if (pos == 0) {
    item = head->info;
    tmp = head;
    head = head->next;
    delete tmp;
  } else {
    Node* q = head;
    for (int i = 0; i < pos - 1; i++)
      q = q->next;
    tmp = q->next;
    item = tmp->info;
    q->next = tmp->next;
    delete tmp;
  }
  return item;
}
```

## clear

Deallocates all nodes and resets head to NULL.

```cpp
void LinkedList::clear() {
  while (head) {
    Node* q = head;
    head = head->next;
    delete q;
  }
}
```

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

_4 min read (source: 5 min)_

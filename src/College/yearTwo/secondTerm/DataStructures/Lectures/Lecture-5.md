---
title: Lecture 5
prev:
  text: "Lecture 4"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-4"
next:
  text: "Lecture 6"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-6"
---

# Data Structures - Lecture 5

## Linked Stack

A **linked stack** uses a singly linked list where all insertions and deletions occur at the **head**. The stack pointer is simply the head pointer. Unlike array-based stacks, a linked stack is never full (limited only by system memory).

### Node and Class Declaration

```cpp
struct Node {
  char info;
  Node* next;
};

class LinkedStack {
private:
  Node* top;

public:
  LinkedStack();
  bool isEmpty() const;
  void push(char item);
  char pop();
  void clear();
};
```

### Constructor

```cpp
LinkedStack::LinkedStack() {
  top = nullptr;
}
```

### isEmpty

```cpp
bool LinkedStack::isEmpty() const {
  return top == nullptr;
}
```

### push

Allocates a new node, stores the item, and links it before the current top.

```cpp
void LinkedStack::push(char item) {
  Node* p = new Node;
  p->info = item;
  p->next = top;
  top = p;
}
```

### pop

Saves the top node's data, advances the top pointer, and deletes the old node.

```cpp
char LinkedStack::pop() {
  char item = top->info;
  Node* p = top;
  top = top->next;
  delete p;
  return item;
}
```

### clear

Traverses and deallocates all nodes, resetting top to NULL.

```cpp
void LinkedStack::clear() {
  while (top) {
    Node* q = top;
    top = top->next;
    delete q;
  }
}
```

> [!NOTE]
> The `isFull` operation always returns false — linked stacks allocate dynamically and have no fixed capacity.

## Linked Queue

A **linked queue** maintains two pointers: **front** (head) for dequeue and **rear** (tail) for enqueue. This avoids the circular buffer complexity of array-based queues.

### Node and Class Declaration

```cpp
struct Node {
  char info;
  Node* next;
};

class LinkedQueue {
private:
  Node* front;
  Node* rear;

public:
  LinkedQueue();
  bool isEmpty() const;
  void enqueue(char item);
  char dequeue();
  void clear();
};
```

### Constructor and isEmpty

```cpp
LinkedQueue::LinkedQueue() {
  front = nullptr;
  rear = nullptr;
}

bool LinkedQueue::isEmpty() const {
  return front == nullptr;
}
```

### enqueue

Allocates a new node. If the queue is empty, the new node becomes both front and rear. Otherwise, it is appended after the current rear.

```cpp
void LinkedQueue::enqueue(char item) {
  Node* p = new Node;
  p->info = item;
  p->next = nullptr;
  if (!rear)
    front = p;
  else
    rear->next = p;
  rear = p;
}
```

### dequeue

Removes and returns the front node. If the queue becomes empty, rear is also set to NULL.

```cpp
char LinkedQueue::dequeue() {
  char item = front->info;
  Node* p = front;
  front = front->next;
  delete p;
  if (!front)
    rear = nullptr;
  return item;
}
```

> [!WARNING]
> Setting `rear = nullptr` when the queue empties is critical — without it, rear would point to freed memory (dangling pointer).

### clear

Traverses from front, deallocating each node, then resets rear to NULL.

```cpp
void LinkedQueue::clear() {
  while (front) {
    Node* p = front;
    front = front->next;
    delete p;
  }
  rear = nullptr;
}
```

## Linked vs. Array-Based Stack/Queue

| Aspect       | Array-Based           | Linked                  |
| ------------ | --------------------- | ----------------------- |
| Capacity     | Fixed (`MAX`)         | Dynamic (system memory) |
| isFull       | Checks `size == MAX`  | Always returns false    |
| Memory       | Contiguous, may waste | Per-node allocation     |
| Push/Enqueue | O(1)                  | O(1)                    |
| Pop/Dequeue  | O(1)                  | O(1)                    |

---

_4 min read (source: 4 min)_

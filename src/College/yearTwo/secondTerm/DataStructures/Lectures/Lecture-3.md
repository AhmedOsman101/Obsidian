---
title: Lecture 3
prev:
  text: "Lecture 2"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-2"
next:
  text: "Lecture 4"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-4"
---

# Data Structures - Lecture 3

## Queue Definition

**Queue** is a **linear, non-primitive, homogeneous** data structure where elements are added at one end (**rear/tail**) and removed from the other end (**front/head**). It follows **First-In-First-Out (FIFO)** ordering.

**Real-world examples:** toll stations, supermarket checkout, printer spooling.

## Queue ADT Operations

| Operation       | Description                      |
| --------------- | -------------------------------- |
| **CreateQueue** | Initialize an empty queue        |
| **QueueEmpty**  | Return 1 if empty, 0 otherwise   |
| **QueueFull**   | Return 1 if full, 0 otherwise    |
| **Enqueue**     | Add an item to the rear          |
| **Dequeue**     | Remove and return the front item |

## Linear Queue Problem

A naive array-based queue wastes space: after successive dequeues, `front` advances forward but earlier slots become unusable. **Shifting all elements** to reclaim space is O(n) — too costly.

### Circular Queue

A **circular queue** treats the array as a ring using modulo arithmetic. This reuses freed slots without shifting.

**Distinguishing full vs. empty:** When `front` is one step ahead of `rear` in both states, an additional `size` counter is needed to tell them apart.

## C++ OOP Implementation

```cpp
const int MAX = 10;

class Queue {
private:
  int front;
  int rear;
  int size;
  char items[MAX];

public:
  Queue() {
    this->front = 0;
    this->rear = MAX - 1;
    this->size = 0;
  }

  bool isEmpty() const {
    return this->size == 0;
  }

  bool isFull() const {
    return this->size == MAX;
  }

  void enqueue(char item) {
    this->rear = (this->rear + 1) % MAX;
    this->items[this->rear] = item;
    this->size++;
  }

  char dequeue() {
    char item = this->items[this->front];
    this->front = (this->front + 1) % MAX;
    this->size--;
    return item;
  }

  void traverse(void (*func)(char*)) {
    int i = this->front;
    for (int s = 0; s < this->size; s++) {
      func(&this->items[i]);
      i = (i + 1) % MAX;
    }
  }
};
```

```mermaid
flowchart LR
    subgraph Circular Queue (MAX=6)
        direction TB
        S["Slot: 0 1 2 3 4 5"]
        F["front=4"] --> S
        R["rear=1"] --> S
    end
    A["Enqueue 'X'"] --> B["rear = (1+1)%6 = 2"]
    B --> C["items[2] = 'X'"]
    C --> D["size++"]
    E["Dequeue"] --> F2["item = items[4]"]
    F2 --> G["front = (4+1)%6 = 5"]
    G --> H["size--"]
```

### Key Implementation Details

- **Circular indexing:** `(rear + 1) % MAX` wraps around to reuse the beginning of the array.
- **Size tracking:** eliminates the ambiguity between full and empty states when `front == rear + 1`.
- **Traverse:** iterates from `front` through `size` elements, applying a callback to each.

## Exercise: Queue Traverse

Implement `TraverseQueue` using a function pointer callback, then use it to print all elements:

```cpp
void print(char* e) {
  std::cout << *e << std::endl;
}

int main() {
  Queue q;
  // ... enqueue some items ...
  q.traverse(&print);
  return 0;
}
```

The traversal loop increments the index with modular arithmetic `(i + 1) % MAX` to wrap around the circular buffer.

---

_3 min read (source: 5 min)_

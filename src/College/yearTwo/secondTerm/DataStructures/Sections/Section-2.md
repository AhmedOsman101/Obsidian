---
title: Section 2
prev:
  text: "Section 1"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-1"
next:
  text: "Section 3"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-3"
---

# Data Structures - Section 2

## Queues

A **queue** is a FIFO (First In First Out) structure. Elements are added at the **rear** (back) and removed from the **front** (head).

### Queue Operations

| Operation    | Description                             |
| ------------ | --------------------------------------- |
| `enqueue(x)` | Adds `x` to the rear                    |
| `dequeue()`  | Removes the front element               |
| `front()`    | Returns the front element               |
| `back()`     | Returns the rear element                |
| `isEmpty()`  | Returns `true` if queue has no elements |
| `size()`     | Returns number of elements              |

### Queue Types

| Type        | Implementation | Capacity                |
| ----------- | -------------- | ----------------------- |
| **Static**  | Array          | Fixed size              |
| **Dynamic** | Linked list    | Grows/shrinks as needed |

## Static Queue (Array-Based)

Tracks `front` and `rear` indices, both initialized to `-1`.

```cpp
const int QUEUE_SIZE = 3;
char Q[QUEUE_SIZE];
int front = -1;
int rear = -1;
```

### Enqueue/Dequeue Behavior

- **Enqueue**: set `front = 0` if first element, then `rear = (rear + 1) % QSIZE`, insert at `item[rear]`, increment `count`
- **Dequeue**: `front = (front + 1) % QSIZE`, decrement `count`
- Queue is empty when `count == 0`

### Circular Queue

A **circular queue** connects the last element back to the first, forming a circle. This reuses freed space at the beginning of the array after dequeue operations.

- Uses `count` to track element count (no ambiguity between empty/full)
- Wrap-around via modulo: `rear = (rear + 1) % QSIZE`, `front = (front + 1) % QSIZE`
- `front` initializes to `-1`; set to `0` on first enqueue

## Static Queue Class Implementation (Circular)

```cpp
const int QSIZE = 10;

class Queue {
private:
  int front;
  int rear;
  int count;
  int items[QSIZE];

public:
  Queue() {
    this->front = -1;
    this->rear = -1;
    this->count = 0;
  }

  bool isEmpty() {
    return this->count <= 0;
  }

  bool isFull() {
    return this->count == QSIZE;
  }

  void enqueue(int item) {
    if (this->isFull()) {
      cout << "Queue is full" << endl;
    } else {
      if (this->front == -1) this->front = 0;
      this->rear = (this->rear + 1) % QSIZE;
      this->items[this->rear] = item;
      this->count++;
    }
  }

  void dequeue() {
    if (this->isEmpty()) {
      cout << "Queue is empty" << endl;
    } else {
      this->front = (this->front + 1) % QSIZE;
      this->count--;
    }
  }

  void peek() {
    if (this->isEmpty()) {
      cout << "Queue is empty" << endl;
    } else {
      cout << this->items[this->front] << endl;
    }
  }

  void display() {
    if (this->isEmpty()) {
      cout << "Queue is empty" << endl;
    } else {
      cout << "[ ";
      for (int i = this->front; i <= this->rear; i++) {
        cout << this->items[i] << " ";
      }
      cout << "]" << endl;
    }
  }
};
```

---

_3 min read (source: 3 min)_

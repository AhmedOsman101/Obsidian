---
prev:
  text: "Section 1"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-1"
next:
  text: "Section 3"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-3"
title: Section 2
---

# Data Structures - Section 2

## Queue

A **queue** is a data structure used for storing and managing data in a specific order called **First In First Out (FIFO)**. This means the first element added to the queue is the first element removed.

A queue has two main ends:

- **Rear (back):** the position where elements are added
- **Front (head):** the position from which elements are removed

The two basic operations are:

- **enqueue:** add an element to the rear of the queue
- **dequeue:** remove an element from the front of the queue

## Queue Types

Queues are divided into two main types:

| Type | Description |
| --- | --- |
| **Static Queue** | Fixed size, often implemented using an array |
| **Dynamic Queue** | Size changes as needed, often implemented using a linked list |

## Static Queue

A **static queue** has a fixed size. It is commonly implemented using an array.

### Queue implementation using array

```cpp
// Purpose: Declare a queue using an array
Data_type_of_Queue name_of_Queue[Size_of_Queue];
int front = -1;
int rear = -1;
```

### Example

```cpp
// Purpose: Define a static queue of size 3
const int Queue_SIZE = 3;
char Q[Queue_SIZE];
int front = -1;
int rear = -1;
```

In this implementation:

- `front` starts at `-1`
- `rear` starts at `-1`
- elements are inserted from the rear
- elements are removed from the front

## Queue Operations Example

The section gives this sequence of operations:

```cpp
enqueue('E');
enqueue('M');
enqueue('A');
dequeue();
dequeue();
dequeue();
```

This shows how elements are inserted in order, then removed in the same order.

The visual example in the source follows this progression:

- `enqueue('E')`
- `enqueue('M')`
- `enqueue('A')`
- `dequeue()`
- `dequeue()`
- `dequeue()`

So the queue removes elements in the same order they entered: `E`, then `M`, then `A`.

## Circular Queue

A **circular queue** is an extended version of the normal queue where the last element is connected to the first element, forming a circle.

This helps reuse empty spaces created after dequeue operations in an array-based queue.

## Static Queue Implementation from Scratch

A static queue using an array should include these parts:

- class implementation
- function to check if the queue is empty
- function to check if the queue is full
- function to enter an element into the queue
- function to remove an element from the queue
- function to get the front element of the queue
- function to display the elements of the queue

## Queue in C++

The section also refers to including the queue library:

```cpp
#include <queue>
```

Common queue operations are:

| Function | Description |
| --- | --- |
| `push()` | Inserts an element at the back of the queue |
| `pop()` | Removes an element from the front of the queue |
| `front()` | Returns the first element of the queue |
| `back()` | Returns the last element of the queue |
| `size()` | Returns the number of elements in the queue |
| `empty()` | Returns `true` if the queue is empty |

### Example

```cpp
// Purpose: Basic queue operations using the standard library
#include <queue>
#include <iostream>
using namespace std;

int main() {
  queue<int> q;

  q.push(10);
  q.push(20);
  q.push(30);

  cout << q.front() << endl;
  cout << q.back() << endl;
  cout << q.size() << endl;

  q.pop();
  cout << q.front() << endl;
  cout << boolalpha << q.empty() << endl;
  return 0;
}
```

## C++ Implementation

### Static Queue Using Array

```cpp
#include <iostream>
using namespace std;

class StaticQueue {
private:
  static const int QUEUE_SIZE = 5;
  int items[QUEUE_SIZE];
  int frontIndex;
  int rearIndex;

public:
  StaticQueue() : frontIndex(-1), rearIndex(-1) {}

  bool isEmpty() const {
    return frontIndex == -1 || frontIndex > rearIndex;
  }

  bool isFull() const {
    return rearIndex == QUEUE_SIZE - 1;
  }

  void enqueue(int value) {
    if (isFull()) {
      cout << "Queue is full" << endl;
      return;
    }

    if (frontIndex == -1) {
      frontIndex = 0;
    }

    items[++rearIndex] = value;
  }

  void dequeue() {
    if (isEmpty()) {
      cout << "Queue is empty" << endl;
      return;
    }

    frontIndex++;

    if (frontIndex > rearIndex) {
      frontIndex = rearIndex = -1;
    }
  }

  int front() const {
    if (isEmpty()) {
      cout << "Queue is empty" << endl;
      return -1;
    }
    return items[frontIndex];
  }

  void display() const {
    if (isEmpty()) {
      cout << "Queue is empty" << endl;
      return;
    }

    for (int i = frontIndex; i <= rearIndex; i++) {
      cout << items[i] << ' ';
    }
    cout << endl;
  }
};
```

### Circular Queue Using Array

```cpp
#include <iostream>
using namespace std;

class CircularQueue {
private:
  static const int QUEUE_SIZE = 5;
  int items[QUEUE_SIZE];
  int frontIndex;
  int rearIndex;
  int count;

public:
  CircularQueue() : frontIndex(0), rearIndex(-1), count(0) {}

  bool isEmpty() const {
    return count == 0;
  }

  bool isFull() const {
    return count == QUEUE_SIZE;
  }

  void enqueue(int value) {
    if (isFull()) {
      cout << "Queue is full" << endl;
      return;
    }
    rearIndex = (rearIndex + 1) % QUEUE_SIZE;
    items[rearIndex] = value;
    count++;
  }

  void dequeue() {
    if (isEmpty()) {
      cout << "Queue is empty" << endl;
      return;
    }
    frontIndex = (frontIndex + 1) % QUEUE_SIZE;
    count--;
  }

  int front() const {
    if (isEmpty()) {
      cout << "Queue is empty" << endl;
      return -1;
    }
    return items[frontIndex];
  }
};
```

### Dynamic Queue Using Linked List

```cpp
#include <iostream>
using namespace std;

class DynamicQueue {
private:
  struct Node {
    int data;
    Node *next;
  };

  Node *frontNode;
  Node *rearNode;

public:
  DynamicQueue() : frontNode(nullptr), rearNode(nullptr) {}

  ~DynamicQueue() {
    while (!isEmpty()) {
      dequeue();
    }
  }

  bool isEmpty() const {
    return frontNode == nullptr;
  }

  void enqueue(int value) {
    Node *newNode = new Node{value, nullptr};

    if (isEmpty()) {
      frontNode = rearNode = newNode;
    } else {
      rearNode->next = newNode;
      rearNode = newNode;
    }
  }

  void dequeue() {
    if (isEmpty()) {
      cout << "Queue is empty" << endl;
      return;
    }

    Node *temp = frontNode;
    frontNode = frontNode->next;

    if (frontNode == nullptr) {
      rearNode = nullptr;
    }

    delete temp;
  }

  int front() const {
    if (isEmpty()) {
      cout << "Queue is empty" << endl;
      return -1;
    }
    return frontNode->data;
  }
};
```

## Summary

A queue is a linear data structure that follows **FIFO** order. Elements are added at the **rear** and removed from the **front**. Queues can be static with fixed size or dynamic with variable size. The section focuses on array-based queue implementation, introduces the **circular queue**, and lists the basic queue operations available in C++.

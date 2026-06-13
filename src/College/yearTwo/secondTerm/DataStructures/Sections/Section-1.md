---
title: Section 1
prev:
  text: "Sections"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/index"
next:
  text: "Section 2"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-2"
---

# Data Structures - Section 1

## Data Structures

A **data structure** is a storage used to organize data for efficient access and updates. Built-in data structures include arrays, structs, and classes.

## Arrays

An **array** is a consecutive group of memory locations sharing the same type. Elements are indexed starting at 0; the highest index is `size - 1`.

### Array Declaration

```cpp
int arr[5];               // uninitialized
int arr[5] = {1, 2, 3, 4, 5};  // initialized
int arr[] = {1, 2, 3};    // size inferred as 3
```

### Multidimensional Arrays

Declared as `type name[rows][cols]`. Stored in **row-major order** (last index varies fastest).

```cpp
float Salary[3][2] = {{12.0, 6.0}, {9.0, 0.0}, {10.5, 5.2}};
```

### Example: Sum Even/Odd Elements

```cpp
int oddSum = 0, evenSum = 0;
int arr[7] = {0, 1, 2, 3, 4, 5, 6};
for (int i = 0; i < 7; ++i) {
  if (arr[i] % 2 == 0) {
    evenSum += arr[i];
  } else {
    oddSum += arr[i];
  }
}
```

### Example: Diagonal Sum

```cpp
int X[3][3], sumdiagonal = 0;
// read matrix...
for (int i = 0; i < 3; i++) {
  for (int j = 0; j < 3; j++) {
    if (i == j) {
      sumdiagonal += X[i][j];
    }
  }
}
```

## Stacks

A **stack** is a LIFO (Last In First Out) structure. Data is added and removed only from the **top**.

### Stack Operations

| Operation   | Description                                          |
| ----------- | ---------------------------------------------------- |
| `isEmpty()` | Returns `true` if stack has no elements              |
| `isFull()`  | Returns `true` if stack is at capacity (static only) |
| `size()`    | Returns number of elements                           |
| `top()`     | Returns reference to the top element                 |
| `push(x)`   | Adds `x` to the top                                  |
| `pop()`     | Removes the top element                              |

### Stack Types

| Type        | Implementation | Capacity                |
| ----------- | -------------- | ----------------------- |
| **Static**  | Array          | Fixed size              |
| **Dynamic** | Linked list    | Grows/shrinks as needed |

### Static Stack (Array-Based)

```cpp
const int MAX_SIZE = 100;

class Stack {
private:
  int top;
  int items[MAX_SIZE];

public:
  Stack() {
    this->top = -1;
  }

  bool isEmpty() {
    return this->top < 0;
  }

  bool isFull() {
    return this->top == MAX_SIZE - 1;
  }

  void push(int item) {
    if (this->isFull()) {
      cout << "Stack is full on push" << endl;
    } else {
      this->items[++this->top] = item;
    }
  }

  void pop() {
    if (this->isEmpty()) {
      cout << "Stack is empty on pop" << endl;
    } else {
      this->top--;
    }
  }

  void getTop() {
    if (this->isEmpty()) {
      cout << "Stack is empty on getTop" << endl;
    } else {
      cout << this->items[this->top] << endl;
    }
  }

  void display() {
    cout << "[ ";
    for (int i = this->top; i >= 0; i--) {
      cout << this->items[i] << " ";
    }
    cout << "]" << endl;
  }
};
```

- `top = -1` means empty stack
- Push increments `top` then stores; pop decrements `top`

### Dynamic Stack (Linked List-Based)

```cpp
template<class T>
class LinkedStack {
private:
  struct Node {
    T data;
    Node* next;
  };

  Node* topPtr;

public:
  LinkedStack() {
    this->topPtr = nullptr;
  }
};
```

- Never full as long as memory is available
- Each node stores data and a pointer to the next node

---

_4 min read (source: 5 min)_

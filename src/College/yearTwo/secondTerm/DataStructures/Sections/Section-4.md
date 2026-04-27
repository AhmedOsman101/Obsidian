---
prev:
  text: "Section 3"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-3"
next:
  text: "Section 5"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-5"
title: Section 4
---

# Data Structures - Section 4

## Types of Linked List

This section covers three linked list types:

- doubly linked list
- circular linked list
- doubly circular linked list

## What Is a Doubly Linked List?

A **doubly linked list** is a **bi-directional linked list**, so it can be traversed in both directions. Unlike a singly linked list, each node contains an extra pointer called the **previous pointer**, which points to the previous node.

It is used to store data in a way that allows for **fast insertion and deletion** of elements. It is also easy to implement and can be used in a variety of applications.

## Operations on Linked List

The source lists these basic linked list operations:

| Operation | Description |
| --------- | ----------- |
| Creation | Used to create a linked list |
| Insertion | Used to insert a new node at a specified location: first, last, or a specified position |
| Deletion | Used to delete a node at a specified location: first, last, or a specified position |
| Traversing | The process of going through all the nodes from one end to another end of a linked list |
| Concatenation | The process of appending the second list to the end of the first list |

## Class Implementation

The following functions are listed for implementation:

- function to check if the list is empty
- function to insert an element at the beginning of the list
- function to insert an element at the end of the list
- function to display the elements of the list
- function to display the elements of the list in reverse
- function to count the elements of the list
- function to check whether an element is found in the list
- function to insert before a specific element
- function to delete an element

## What Is a Circular Linked List?

A **circular linked list** is a **unidirectional linked list**, so it can be traversed in only one direction. Its last node points to the **head node**. During traversal, you must stop when you revisit the head node.

A circular linked list has **no beginning or end**. It is essentially a **ring of nodes**.

Circular linked lists are typically implemented using a **singly linked list** structure. Each node points to the next node, and the last node connects back to the first node to form the ring.

## What Is a Doubly Circular Linked List?

A **doubly circular linked list** is a mixture of a **doubly linked list** and a **circular linked list**. Like a doubly linked list, it has an extra **previous pointer**. Like a circular linked list, its last node points to the **head node**.

This type is a **bi-directional list**, so it can be traversed in both directions.

The source states that doubly circular linked lists are often used in applications where data needs to be processed in a **sequential fashion**, such as in a **video or audio player**.

## Applications of Different Types of Linked Lists

The source gives these applications:

- implementing **stacks** and **queues**
- representing **sparse matrices**
- implementing an **image viewer** using a circular linked list
- navigating through **web pages**
- implementing a **Fibonacci heap** using a circular doubly linked list

## C++ Implementation

### Doubly Linked List

```cpp
#include <iostream>
using namespace std;

class DoublyLinkedList {
private:
  struct Node {
    int data;
    Node *prev;
    Node *next;
  };

  Node *head;
  Node *tail;

public:
  DoublyLinkedList() : head(nullptr), tail(nullptr) {}

  bool isEmpty() const {
    return head == nullptr;
  }

  void insertFirst(int value) {
    Node *newNode = new Node{value, nullptr, head};
    if (head != nullptr) {
      head->prev = newNode;
    } else {
      tail = newNode;
    }
    head = newNode;
  }

  void insertLast(int value) {
    Node *newNode = new Node{value, tail, nullptr};
    if (tail != nullptr) {
      tail->next = newNode;
    } else {
      head = newNode;
    }
    tail = newNode;
  }

  void display() const {
    Node *current = head;
    while (current != nullptr) {
      cout << current->data << ' ';
      current = current->next;
    }
    cout << endl;
  }

  void displayReverse() const {
    Node *current = tail;
    while (current != nullptr) {
      cout << current->data << ' ';
      current = current->prev;
    }
    cout << endl;
  }

  int count() const {
    int total = 0;
    Node *current = head;
    while (current != nullptr) {
      total++;
      current = current->next;
    }
    return total;
  }

  bool search(int value) const {
    Node *current = head;
    while (current != nullptr) {
      if (current->data == value) {
        return true;
      }
      current = current->next;
    }
    return false;
  }

  void insertBefore(int item, int value) {
    if (isEmpty()) {
      return;
    }

    if (head->data == item) {
      insertFirst(value);
      return;
    }

    Node *current = head->next;
    while (current != nullptr && current->data != item) {
      current = current->next;
    }

    if (current != nullptr) {
      Node *newNode = new Node{value, current->prev, current};
      current->prev->next = newNode;
      current->prev = newNode;
    }
  }

  void deleteValue(int value) {
    Node *current = head;
    while (current != nullptr && current->data != value) {
      current = current->next;
    }

    if (current == nullptr) {
      return;
    }

    if (current == head) {
      head = current->next;
    }
    if (current == tail) {
      tail = current->prev;
    }
    if (current->prev != nullptr) {
      current->prev->next = current->next;
    }
    if (current->next != nullptr) {
      current->next->prev = current->prev;
    }

    delete current;
  }
};
```

### Circular Singly Linked List

```cpp
#include <iostream>
using namespace std;

class CircularLinkedList {
private:
  struct Node {
    int data;
    Node *next;
  };

  Node *tail;

public:
  CircularLinkedList() : tail(nullptr) {}

  bool isEmpty() const {
    return tail == nullptr;
  }

  void insert(int value) {
    Node *newNode = new Node{value, nullptr};

    if (isEmpty()) {
      tail = newNode;
      tail->next = tail;
      return;
    }

    newNode->next = tail->next;
    tail->next = newNode;
    tail = newNode;
  }

  void display() const {
    if (isEmpty()) {
      return;
    }

    Node *current = tail->next;
    do {
      cout << current->data << ' ';
      current = current->next;
    } while (current != tail->next);
    cout << endl;
  }
};
```

### Doubly Circular Linked List

```cpp
#include <iostream>
using namespace std;

class DoublyCircularLinkedList {
private:
  struct Node {
    int data;
    Node *prev;
    Node *next;
  };

  Node *head;

public:
  DoublyCircularLinkedList() : head(nullptr) {}

  bool isEmpty() const {
    return head == nullptr;
  }

  void insert(int value) {
    Node *newNode = new Node{value, nullptr, nullptr};

    if (isEmpty()) {
      newNode->next = newNode;
      newNode->prev = newNode;
      head = newNode;
      return;
    }

    Node *tail = head->prev;
    newNode->next = head;
    newNode->prev = tail;
    tail->next = newNode;
    head->prev = newNode;
  }

  void displayForward() const {
    if (isEmpty()) {
      return;
    }

    Node *current = head;
    do {
      cout << current->data << ' ';
      current = current->next;
    } while (current != head);
    cout << endl;
  }

  void displayBackward() const {
    if (isEmpty()) {
      return;
    }

    Node *tail = head->prev;
    Node *current = tail;
    do {
      cout << current->data << ' ';
      current = current->prev;
    } while (current != tail);
    cout << endl;
  }
};
```

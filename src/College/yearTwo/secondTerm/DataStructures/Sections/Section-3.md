---
prev:
  text: "Section 2"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-2"
next:
  text: "Section 4"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-4"
title: Section 3
---

# Data Structures - Section 3

## Linked List

A **linked list** is a linear data structure that consists of a series of nodes connected by pointers. Each node contains data and a reference to the next node in the list.

Linked lists allow efficient insertion or removal of elements from any position in the list because the nodes are **not stored contiguously in memory**.

## Linked Lists vs Arrays

The source compares linked lists and arrays as follows:

| Feature | Linked List | Array |
| --- | --- | --- |
| Data structure | Non-contiguous | Contiguous |
| Memory allocation | Dynamic | Static |
| Insertion/Deletion | Efficient | Inefficient |
| Access | Sequential | Random |

## Operations on Linked List

The following operations are listed for linked lists:

- **Creation**: used to create a linked list.
- **Insertion**: used to insert a new node at any specified location in the linked list (**first, last, specified position**).
- **Deletion**: used to delete a node at any specified location in the linked list (**first, last, specified position**).
- **Traversing**: the process of going through all the nodes from one end to another end of a linked list.
- **Concatenation**: the process of appending the second list to the end of the first list.

## Singly Linked List

The section focuses on the **singly linked list**.

In a singly linked list, each node stores data and a pointer to the next node only.

## Implementation of a Singly Linked List

### Node

```cpp
class node {
public:
  int data;
  node *next;
};
```

This implementation shows that each node has:

- `data` to store the value
- `next` to store a pointer to the next node

## Linked List Class Implementation

The source lists the following functions for linked list class implementation:

- function to check if the list is empty
- function to insert an element at the beginning of the list
- function to append an element at the end of the list
- function to display the contents of the list
- function to count the number of nodes in the list
- function to check if a specific value is found in the list
- function to insert a value before a specific item in the list
- function to delete a node with a specific value

## C++ Implementation

```cpp
#include <iostream>
using namespace std;

class LinkedList {
private:
  struct Node {
    int data;
    Node *next;
  };

  Node *head;

public:
  LinkedList() : head(nullptr) {}

  ~LinkedList() {
    while (!isEmpty()) {
      deleteValue(head->data);
    }
  }

  bool isEmpty() const {
    return head == nullptr;
  }

  void insertFirst(int value) {
    Node *newNode = new Node{value, head};
    head = newNode;
  }

  void append(int value) {
    Node *newNode = new Node{value, nullptr};

    if (isEmpty()) {
      head = newNode;
      return;
    }

    Node *current = head;
    while (current->next != nullptr) {
      current = current->next;
    }
    current->next = newNode;
  }

  void display() const {
    Node *current = head;
    while (current != nullptr) {
      cout << current->data << ' ';
      current = current->next;
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

    Node *previous = head;
    Node *current = head->next;

    while (current != nullptr && current->data != item) {
      previous = current;
      current = current->next;
    }

    if (current != nullptr) {
      previous->next = new Node{value, current};
    }
  }

  void deleteValue(int value) {
    if (isEmpty()) {
      return;
    }

    if (head->data == value) {
      Node *temp = head;
      head = head->next;
      delete temp;
      return;
    }

    Node *previous = head;
    Node *current = head->next;

    while (current != nullptr && current->data != value) {
      previous = current;
      current = current->next;
    }

    if (current != nullptr) {
      previous->next = current->next;
      delete current;
    }
  }
};
```

## Summary

A singly linked list is built from nodes connected by pointers. It supports creation, insertion, deletion, traversing, and concatenation. Compared with arrays, linked lists use dynamic memory allocation, support efficient insertion and deletion, and provide sequential access rather than random access.

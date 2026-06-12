---
title: Section 4
prev:
  text: "Section 3"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-3"
next:
  text: "Section 5"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-5"
---

# Data Structures - Section 4

## Linked List Types

| Type                | Direction       | Last Node Points To |
| ------------------- | --------------- | ------------------- |
| **Singly**          | Forward only    | `nullptr`           |
| **Doubly**          | Both directions | `nullptr`           |
| **Circular**        | Forward only    | Head (forms a ring) |
| **Circular Doubly** | Both directions | Head (forms a ring) |

## Doubly Linked List

A **doubly linked list** has bidirectional traversal. Each node has `data`, `next`, and `prev` pointers.

### Node Structure

```cpp
class Node {
public:
  int data;
  Node* next;
  Node* prev;
  Node(int data) {
    this->data = data;
    this->next = nullptr;
    this->prev = nullptr;
  }
};
```

### Doubly Linked List Class

```cpp
class DoublyLinkedList {
public:
  Node* head;

  DoublyLinkedList() {
    this->head = nullptr;
  }

  bool isEmpty() {
    return this->head == nullptr;
  }

  void insertFirst(int value) {
    Node* newNode = new Node(value);
    if (!this->isEmpty()) {
      newNode->next = this->head;
      this->head->prev = newNode;
    }
    this->head = newNode;
  }

  void append(int value) {
    Node* newNode = new Node(value);
    if (this->isEmpty()) {
      this->insertFirst(value);
    } else {
      Node* temp = this->head;
      while (temp->next != nullptr) {
        temp = temp->next;
      }
      temp->next = newNode;
      newNode->prev = temp;
    }
  }

  int count() {
    int counter = 0;
    Node* temp = this->head;
    while (temp != nullptr) {
      counter++;
      temp = temp->next;
    }
    return counter;
  }

  bool search(int value) {
    Node* temp = this->head;
    while (temp != nullptr) {
      if (temp->data == value) return true;
      temp = temp->next;
    }
    return false;
  }

  void insertBefore(int item, int value) {
    if (this->isEmpty()) {
      cout << "List is empty\n";
      return;
    }
    if (!this->search(item)) {
      cout << "Item not found\n";
      return;
    }
    if (this->head->data == item) {
      this->insertFirst(value);
      return;
    }
    Node* temp = this->head;
    while (temp != nullptr && temp->data != item) {
      temp = temp->next;
    }
    Node* newNode = new Node(value);
    newNode->next = temp;
    newNode->prev = temp->prev;
    if (temp->prev != nullptr) {
      temp->prev->next = newNode;
    }
    temp->prev = newNode;
  }

  void remove(int item) {
    if (this->isEmpty()) {
      cout << "List is empty\n";
      return;
    }
    Node* temp = this->head;
    while (temp != nullptr && temp->data != item) {
      temp = temp->next;
    }
    if (temp == nullptr) {
      cout << "Item not found\n";
      return;
    }
    if (temp == this->head) {
      this->head = temp->next;
      if (this->head != nullptr) this->head->prev = nullptr;
    } else {
      if (temp->prev != nullptr) temp->prev->next = temp->next;
      if (temp->next != nullptr) temp->next->prev = temp->prev;
    }
    delete temp;
  }

  void display() {
    if (this->isEmpty()) {
      cout << "List is empty\n";
      return;
    }
    Node* temp = this->head;
    while (temp != nullptr) {
      cout << temp->data;
      if (temp->next != nullptr) cout << " -> ";
      temp = temp->next;
    }
    cout << endl;
  }

  void reverseDisplay() {
    if (this->isEmpty()) {
      cout << "List is empty\n";
      return;
    }
    Node* temp = this->head;
    while (temp != nullptr) temp = temp->next;
    while (temp != nullptr) {
      cout << temp->data;
      if (temp->prev != nullptr) cout << " -> ";
      temp = temp->prev;
    }
    cout << endl;
  }
};
```

### Key Differences from Singly Linked List

- `insertFirst`: must also set `head->prev = newNode`
- `remove`: must update both `prev->next` and `next->prev`
- `reverseDisplay`: traverse backward from tail using `prev` pointers

## Circular Linked List

A **circular linked list** has its last node pointing back to the head instead of `nullptr`. No beginning or end — traversal must stop when revisiting the head.

### Use Cases

- Round-robin scheduling
- Image viewers (cycle through images)
- Web page navigation

## Doubly Circular Linked List

Combines doubly and circular: bidirectional traversal with the last node pointing to head and head pointing back to last.

### Use Cases

- Video/audio players (loop playback)
- Fibonacci heap implementation

## Applications of Linked Lists

- Implement stacks and queues
- Represent sparse matrices
- Web page navigation
- Image viewers (circular)
- Fibonacci heap (circular doubly)

---

_5 min read (source: 4 min)_

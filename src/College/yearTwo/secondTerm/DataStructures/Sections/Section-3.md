---
title: Section 3
prev:
  text: "Section 2"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-2"
next:
  text: "Section 4"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-4"
---

# Data Structures - Section 3

## Linked Lists

A **linked list** is a linear data structure of nodes connected by pointers. Each node contains data and a pointer to the next node. Nodes are non-contiguous in memory.

### Linked List vs Array

| Property           | Linked List            | Array                |
| ------------------ | ---------------------- | -------------------- |
| Memory             | Non-contiguous         | Contiguous           |
| Allocation         | Dynamic                | Static               |
| Insertion/Deletion | O(1) at known position | O(n) due to shifting |
| Access             | Sequential O(n)        | Random O(1)          |

### Linked List Operations

- **Creation**: initialize an empty list
- **Insertion**: add node at beginning, end, or specified position
- **Deletion**: remove node at beginning, end, or specified position
- **Traversal**: visit every node from head to tail
- **Concatenation**: append one list to the end of another

## Singly Linked List

Each node points to the next node. The last node's `next` is `nullptr`.

### Node Structure

```cpp
class Node {
public:
  int data;
  Node* next;
  Node(int data) {
    this->data = data;
    this->next = nullptr;
  }
};
```

### Singly Linked List Class

```cpp
class LinkedList {
public:
  Node* head;

  LinkedList() {
    this->head = nullptr;
  }

  bool isEmpty() {
    return this->head == nullptr;
  }

  void insertFirst(int value) {
    Node* newNode = new Node(value);
    if (this->isEmpty()) {
      newNode->next = nullptr;
      this->head = newNode;
    } else {
      newNode->next = this->head;
      this->head = newNode;
    }
  }

  void append(int value) {
    if (this->isEmpty()) {
      this->insertFirst(value);
    } else {
      Node* newNode = new Node(value);
      Node* temp = this->head;
      while (temp->next != nullptr) {
        temp = temp->next;
      }
      newNode->next = nullptr;
      temp->next = newNode;
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
    if (this->search(item)) {
      Node* newNode = new Node(value);
      Node* temp = this->head;
      while (temp != nullptr && temp->next->data != item) {
        temp = temp->next;
      }
      newNode->next = temp->next;
      temp->next = newNode;
    } else {
      cout << "Item not found\n";
    }
  }

  void remove(int item) {
    if (this->isEmpty()) {
      cout << "List is empty\n";
      return;
    }
    Node* temp = this->head;
    if (this->head->data == item) {
      this->head = this->head->next;
      delete temp;
    } else {
      Node* prev = nullptr;
      while (temp != nullptr && temp->data != item) {
        prev = temp;
        temp = temp->next;
      }
      if (temp == nullptr) {
        cout << "Item not found\n";
        return;
      }
      prev->next = temp->next;
      delete temp;
    }
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
};
```

### Key Behaviors

- `insertFirst`: new node becomes the new head
- `append`: traverse to end, link new node there
- `insertBefore`: find the target's predecessor, link new node between them
- `remove`: unlink the target node and free memory

---

_4 min read (source: 3 min)_

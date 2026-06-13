---
title: Lecture 6
prev:
  text: "Lecture 5"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-5"
next:
  text: "Lecture 7"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-7"
---

# Data Structures - Lecture 6

## Doubly Sorted Linked List

A **doubly sorted linked list** is a linked structure where each node has two pointers (`prev` and `next`) and data is kept **sorted by a key field** at all times.

### Node Structure

```cpp
struct Entry {
  int key;
  char value;
};

struct Node {
  Entry data;
  Node* next;
  Node* prev;
};

class DoublySortedList {
private:
  Node* head;

public:
  DoublySortedList();
  void print() const;
  void printReverse() const;
  void insert(Entry entry);
  Entry remove(int key);
};
```

### Constructor

```cpp
DoublySortedList::DoublySortedList() {
  this->head = nullptr;
}
```

### insert (Sorted by Key)

Traverses to find the correct position by key, then splices the new node in. Maintains sorted order.

```cpp
void DoublySortedList::insert(Entry entry) {
  Node* newNode = new Node;
  newNode->data = entry;
  newNode->next = nullptr;
  newNode->prev = nullptr;

  if (!this->head) {
    this->head = newNode;
  } else {
    Node* current = this->head;
    // Find the position where entry.key should be inserted
    while (current && entry.key > current->data.key) {
      current = current->next;
    }

    // Insert newNode before 'current'
    newNode->next = current;
    newNode->prev = current->prev;

    if (current->prev) {
      current->prev->next = newNode;
    } else {
      this->head = newNode;  // new smallest key
    }

    current->prev = newNode;
  }
}
```

### remove (by Key)

Searches for the node with the matching key, unlinks it from both sides, and deallocates.

```cpp
Entry DoublySortedList::remove(int key) {
  Node* current = this->head;
  while (current && current->data.key != key) {
    current = current->next;
  }

  if (!current) {
    throw std::out_of_range("Key not found in list");
  }

  Entry item = current->data;

  // Unlink current from the list
  if (current->prev) {
    current->prev->next = current->next;
  } else {
    this->head = current->next;  // removing the head
  }

  if (current->next) {
    current->next->prev = current->prev;
  }

  delete current;
  return item;
}
```

## Printing a Linked List

Traverse from head to NULL, visiting each node. Print the data at each step.

```cpp
void DoublySortedList::print() const {
  Node* current = head;
  while (current != nullptr) {
    std::cout << current->data.value << " ";
    current = current->next;
  }
}
```

**Time complexity:** O(n) — single traversal.

## Printing in Reverse Using a Stack

A **stack** reverses order because of **LIFO** — last pushed element is first popped. Push all elements while traversing forward, then pop to print in reverse.

```cpp
void DoublySortedList::printReverse() const {
  LinkedStack stack;
  Node* current = head;
  while (current != nullptr) {
    stack.push(current->data.value);
    current = current->next;
  }
  while (!stack.isEmpty()) {
    std::cout << stack.pop() << " ";
  }
}
```

> [!NOTE]
> This uses the `LinkedStack` class from Lecture 5. The algorithm is **O(n)** time and **O(n)** space for the stack

---

_5 min read (source: 5 min)_

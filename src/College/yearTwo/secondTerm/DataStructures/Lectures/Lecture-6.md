---
title: Lecture 6
prev:
  text: "Lecture 5"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-5"
next:
  text: "Lecture 7"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-7"
---

## Printing a Linked List

Traverse from head to NULL, visiting each node. Print the data at each step.

```cpp
void DoublySortedList::print() const {
  Node* p = head;
  while (p) {
    std::cout << p->info.data << " ";
    p = p->next;
  }
}
```

## Printing in Reverse Using a Stack

A **stack** reverses order because of **LIFO** — last pushed element is first popped. Push all elements while traversing forward, then pop to print in reverse.

```cpp
void DoublySortedList::printReverse() const {
  LinkedStack s;
  Node* p = head;
  while (p) {
    s.push(p->info.data);
    p = p->next;
  }
  while (!s.isEmpty()) {
    std::cout << s.pop() << " ";
  }
}
```

> [!NOTE]
> This uses the `LinkedStack` class from Lecture 5. The algorithm is **O(n)** time and **O(n)** space for the stack.

## Doubly Sorted Linked List

A **doubly sorted linked list** is a linked structure where each node has two pointers (`prev` and `next`) and data is kept **sorted by a key field** at all times.

### Node Structure

```cpp
struct Entry {
  int key;
  char data;
};

struct Node {
  Entry info;
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
  void insert(Entry e);
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
void DoublySortedList::insert(Entry e) {
  Node* p = new Node;
  p->info = e;
  p->next = nullptr;
  p->prev = nullptr;

  if (!this->head) {
    this->head = p;
  } else {
    Node* q = this->head;
    while (q && e.key > q->info.key)
      q = q->next;
    p->next = q;
    p->prev = q->prev;
    if (q->prev)
      q->prev->next = p;
    else
      this->head = p;
    q->prev = p;
  }
}
```

> [!WARNING]
> The insertion traverses until it finds a node with a greater key or reaches the end. When `q` is NULL (insert at tail), `p->next = NULL` and `q->prev = p` — but since `q` is NULL, this dereferences NULL. The loop condition should be `while (q && e.key > q->info.key)` and the final `q->prev = p` only runs when `q` exists.

### remove (by Key)

Searches for the node with the matching key, unlinks it from both sides, and deallocates.

```cpp
Entry DoublySortedList::remove(int key) {
  Node* q = this->head;
  while (q && q->info.key != key)
    q = q->next;
  Entry item = q->info;
  if (q->prev)
    q->prev->next = q->next;
  else
    this->head = q->next;
  if (q->next)
    q->next->prev = q->prev;
  delete q;
  return item;
}
```

## Exercises

### Exercise 1: Print All Elements

Implement `print()` as a method on `DoublySortedList`. It traverses from head, printing each node's data.

```cpp
void DoublySortedList::print() const {
  Node* p = this->head;
  while (p) {
    std::cout << p->info.data << " ";
    p = p->next;
  }
}
```

**Time complexity:** O(n) — single traversal.

### Exercise 2: Print in Reverse

Implement `printReverse()` as a method using a stack to reverse the order.

```cpp
void DoublySortedList::printReverse() const {
  LinkedStack s;
  Node* p = this->head;
  while (p) {
    s.push(p->info.data);
    p = p->next;
  }
  while (!s.isEmpty()) {
    std::cout << s.pop() << " ";
  }
}
```

**Why it works:** Stack reverses order via LIFO — first element pushed is last popped.

### Exercise 3: Doubly Sorted Linked List

Implement a doubly sorted linked list with create, insert (sorted by key), and delete (by key) operations. See the class definition and methods above.

---

_3 min read (source: 3 min)_

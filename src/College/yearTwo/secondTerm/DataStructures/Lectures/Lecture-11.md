---
title: Lecture 11
prev:
  text: "Lecture 10"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-10"
next: false
---

# Data Structures - Lecture 11

## Why Hashing?

Search trees offer O(log n). **Hashing** achieves **O(1)** average-case search, insert, and delete by mapping keys directly to array indices via a **hash function**. The array storing entries is called a **hash table**.

## Hash Function

A **hash function** converts a key into an integer **hash code**, then compresses it into a valid table index: `index = hash(key) % capacity`. A good hash function distributes keys uniformly across the table.

## Collision Resolution

A **collision** occurs when two keys hash to the same index. Two main strategies: **open addressing** (all entries stored in the table) and **separate chaining** (each slot holds a bucket/list).

### Open Addressing

| Method                | Probe Sequence                      | Pattern                                                                              |
| --------------------- | ----------------------------------- | ------------------------------------------------------------------------------------ |
| **Linear probing**    | `k, k+1, k+2, ...` (mod table size) | Checks consecutive cells; causes **primary clustering**                              |
| **Quadratic probing** | `k, k+1², k+2², ...`                | Spreads out probes; avoids primary clustering but can cause **secondary clustering** |
| **Double hashing**    | `k, k+h'(k), k+2h'(k), ...`         | Uses a secondary hash function `h'(k)` for the step size; best distribution          |

> [!WARNING]
> Linear probing suffers from **primary clustering** — long runs of occupied slots form, increasing probe time. Quadratic probing reduces this but may not visit all slots. Double hashing is the most effective open addressing method.

**Animations:**

- [Linear Probing](https://liveexample.pearsoncmg.com/dsanimation/LinearProbingeBook.html)
- [Quadratic Probing](https://liveexample.pearsoncmg.com/dsanimation/QuadraticProbingeBook.html)
- [Double Hashing](https://liveexample.pearsoncmg.com/dsanimation/DoubleHashingeBook.html)

### Separate Chaining

Each hash table slot holds a **bucket** (a linked list or container). All entries hashing to the same index are stored in that bucket. Search within the bucket is O(m) where m is the bucket size.

[Separate Chaining Animation](https://liveexample.pearsoncmg.com/dsanimation/SeparateChainingeBook.html)

## Load Factor and Rehashing

**Load factor** = `size / capacity`. When it exceeds a threshold (commonly **0.75**), the table is **rehashed** — a new, larger table is allocated and all entries are re-inserted. Rehashing maintains O(1) average performance.

## MyHashMap Implementation (C++)

```cpp
template <typename K, typename V>
class MyHashMap {
private:
  struct Entry {
    K key;
    V value;
    bool occupied;
  };

  Entry* table;
  int capacity;
  int size;
  float loadFactorThreshold;

  int hash(const K& key) const {
    return std::hash<K>{}(key) % this->capacity;
  }

  void rehash() {
    Entry* oldTable = this->table;
    int oldCap = this->capacity;

    this->capacity *= 2;
    this->table = new Entry[this->capacity];
    this->size = 0;
    for (int i = 0; i < this->capacity; i++) {
      this->table[i].occupied = false;
    }

    for (int i = 0; i < oldCap; i++) {
      if (oldTable[i].occupied) {
        put(oldTable[i].key, oldTable[i].value);
      }
    }
    delete[] oldTable;
  }

public:
  MyHashMap(int capacity = 4, float threshold = 0.75f) {
    this->capacity = capacity;
    this->loadFactorThreshold = threshold;
    this->size = 0;
    this->table = new Entry[this->capacity];
    for (int i = 0; i < this->capacity; i++) {
      this->table[i].occupied = false;
    }
  }

  ~MyHashMap() { delete[] this->table; }

  void put(const K& key, const V& value) {
    if (this->size >= this->capacity * this->loadFactorThreshold) {
      rehash();
    }

    int idx = hash(key);
    while (this->table[idx].occupied) {
      if (this->table[idx].key == key) {
        this->table[idx].value = value;
        return;
      }
      idx = (idx + 1) % this->capacity;
    }

    this->table[idx] = {key, value, true};
    this->size++;
  }

  V get(const K& key) const {
    int idx = hash(key);
    while (this->table[idx].occupied) {
      if (this->table[idx].key == key) {
        return this->table[idx].value;
      }
      idx = (idx + 1) % this->capacity;
    }
    throw std::runtime_error("Key not found");
  }

  void remove(const K& key) {
    int idx = hash(key);
    while (this->table[idx].occupied) {
      if (this->table[idx].key == key) {
        this->table[idx].occupied = false;
        this->size--;
        return;
      }
      idx = (idx + 1) % this->capacity;
    }
  }

  bool containsKey(const K& key) const {
    int idx = hash(key);
    while (this->table[idx].occupied) {
      if (this->table[idx].key == key) return true;
      idx = (idx + 1) % this->capacity;
    }
    return false;
  }

  int getSize() const { return this->size; }
  bool isEmpty() const { return this->size == 0; }
};
```

## MyHashSet Implementation (C++)

A **hash set** is built on top of a hash map — it stores keys only (no values). The `add`, `remove`, `contains`, and `size` operations delegate to the underlying map.

```cpp
template <typename E>
class MyHashSet {
private:
  MyHashMap<E, bool> map;

public:
  MyHashSet(int capacity = 4, float threshold = 0.75f) {
    this->map = MyHashMap<E, bool>(capacity, threshold);
  }

  void add(const E& element) { this->map.put(element, true); }
  void remove(const E& element) { this->map.remove(element); }
  bool contains(const E& element) { return this->map.containsKey(element); }
  int getSize() const { return this->map.getSize(); }
  bool isEmpty() const { return this->map.isEmpty(); }
};
```

---

_5 min read (source: 6 min)_

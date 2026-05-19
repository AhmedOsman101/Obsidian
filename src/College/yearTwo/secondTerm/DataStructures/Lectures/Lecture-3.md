---
title: Lecture 3
prev:
  text: "Lecture 2"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-2"
next:
  text: "Lecture 4"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-4"
---

# Data Structures - Lecture 3

## Queue Definition and Boundaries

A **queue** is a **linear non-primitive data structure** and a **homogeneous collection of elements**. New elements are added at one end called the **rear** or **tail**, and existing elements are deleted from the other end called the **front** or **head**. Because insertion and deletion happen at opposite ends, a queue follows **FIFO (First-In, First-Out)** behavior.

**Why this matters:** FIFO means the earliest inserted element leaves first, so a queue models waiting-line behavior rather than reverse-order behavior.

| Concept   | Meaning                     | Includes                | Excludes           |
| --------- | --------------------------- | ----------------------- | ------------------ |
| **Front** | Deletion end                | `Dequeue` position      | Insertion position |
| **Rear**  | Insertion end               | `Enqueue` position      | Deletion position  |
| **FIFO**  | First inserted leaves first | Arrival order preserved | LIFO behavior      |

> [!CAUTION]
> _Do not confuse a **queue** with a **stack**._ A queue inserts at the **rear** and deletes at the **front**; a stack performs both at the **top**.

## Queue Operations and Contracts

The lecture defines these operations: **CreateQueue**, **QueueEmpty**, **QueueFull**, **Enqueue**, and **Dequeue**. As with other ADTs, each operation is understood through its **precondition** and **postcondition**.

**Why this matters:** exam questions may ask whether the caller must ensure the queue is valid first, or whether the operation itself handles error states.

1. **CreateQueue**: initializes the queue as empty.
2. **QueueEmpty**: returns true if no elements exist.
3. **QueueFull**: returns true if no more elements can be inserted in a static queue.
4. **Enqueue**: inserts an item at the rear.
5. **Dequeue**: removes the item at the front.

| Operation       | Precondition           | Postcondition       | Trap                            |
| --------------- | ---------------------- | ------------------- | ------------------------------- |
| **CreateQueue** | None                   | Queue becomes empty | Forgetting initialization       |
| **Enqueue**     | Initialized, not full  | Item added at rear  | Overflow if full                |
| **Dequeue**     | Initialized, not empty | Front item removed  | Underflow if empty              |
| **QueueEmpty**  | Initialized            | Boolean result      | Does not modify queue           |
| **QueueFull**   | Initialized            | Boolean result      | Only needed for static capacity |

## Why a Simple Linear Array Wastes Space

The lecture first shows a queue stored in an array with **front** and **rear** indices. After several `Dequeue` operations, empty cells appear at the beginning of the array. If `rear` has already reached the last index, then a new insertion may seem impossible even though unused cells exist earlier in memory.

**Why this matters:** a plain linear array queue can waste available space unless elements are shifted.

One possible fix is to shift all items toward the front after deletion, but the lecture marks this as **too costly**.

> [!IMPORTANT]
> Shifting preserves correctness, but it is inefficient because many elements may need to move after one `Dequeue`.

## Circular Queue and the Role of Size

The better solution in the lecture is a **circular queue**. Instead of treating the array as having a hard end, the queue wraps around to the beginning using modular arithmetic.

**Why this matters:** wrap-around reuses freed positions at the front without shifting elements.

However, in a circular queue, **front** can become one step after **rear** in both the **empty** and **full** cases. The lecture resolves this ambiguity by storing a third field: **size**.

| Queue State     | `size` Value | Meaning                  |
| --------------- | ------------ | ------------------------ |
| **Empty queue** | `0`          | No elements stored       |
| **Full queue**  | `MAX`        | All array positions used |

> [!CAUTION]
> _Without the **size** field, `front` and `rear` alone cannot always distinguish a full circular queue from an empty one in this lecture's design._

## Circular Queue Representation and Initialization

The lecture's queue representation stores **front**, **rear**, **size**, and the data array inside one structure.

```cpp
// Represents a static circular queue with explicit size tracking.
const int MAX = 10;
using EntryType = char;

struct QueueType {
  int front;
  int rear;
  int size;
  EntryType entry[MAX];
};
```

Initialization sets `front = 0`, `rear = MAX - 1`, and `size = 0`. The rear starts one position behind the first valid insertion point so that the first circular increment places it correctly.

```cpp
// Initializes the queue to the empty state.
void CreateQueue(QueueType* q) {
  q->front = 0;
  q->rear = MAX - 1;
  q->size = 0;
}
```

## Empty, Full, Enqueue, and Dequeue

In this design, emptiness and fullness depend on **size**, not on comparing `front` and `rear` directly.

```cpp
// Returns true when the queue contains no elements.
bool QueueEmpty(QueueType q) {
  return q.size == 0;
}

// Returns true when the queue reaches maximum capacity.
bool QueueFull(QueueType q) {
  return q.size == MAX;
}
```

For **Enqueue**, the rear moves first using modular arithmetic, then the new item is stored, then `size` increases. For **Dequeue**, the front item is read first, then `front` moves circularly, then `size` decreases. This order preserves the correct element boundaries.

```cpp
// Inserts at the rear of the circular queue.
void Enqueue(EntryType item, QueueType* q) {
  q->rear = (q->rear + 1) % MAX;
  q->entry[q->rear] = item;
  q->size++;
}

// Removes the front item from the circular queue.
void Dequeue(EntryType* item, QueueType* q) {
  *item = q->entry[q->front];
  q->front = (q->front + 1) % MAX;
  q->size--;
}
```

## Traversing the Queue Without Destroying It

The lecture exercise defines **TraverseQueue(QueueType* pq, void (*pf)(EntryType\*))**, where `pf` is a pointer to a function applied to each queue element. Traversal starts at `front` and continues for exactly `size` elements, wrapping with modulo when needed.

**Why this matters:** traversal must use `size` and circular movement, or it may stop too early or read invalid positions.

```cpp
// Visits each queue element once without changing the queue.
void TraverseQueue(QueueType* q, void (*f)(EntryType*)) {
  int i;
  int siz;
  for (i = q->front, siz = 0; siz < q->size; siz++) {
    (*f)(&q->entry[i]);
    i = (i + 1) % MAX;
  }
}
```

To print queue elements at user level, pass a printing function to `TraverseQueue`.

```cpp
// Prints one queue element.
void Print(EntryType* e) {
  cout << "e is: " << *e << '\n';
}
```

| Contrast Pair                                 | Queue Rule                           | Common Error                                |
| --------------------------------------------- | ------------------------------------ | ------------------------------------------- |
| **Linear array queue** vs. **circular queue** | Circular queue reuses freed cells    | Assuming rear can only move forward once    |
| **front/rear only** vs. **front/rear/size**   | `size` distinguishes empty from full | Treating identical index patterns as enough |
| **Traverse** vs. **Dequeue repeatedly**       | Traverse does not modify queue       | Accidentally destroying stored elements     |

---
title: Queues I
prev:
  text: "Stacks I"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-2"
next:
  text: "Lists I"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-4"
---

# Queues I: Queue ADT and FIFO Behavior

## Queue Definition and Boundaries

A **queue** is a **linear non-primitive data structure** and a **homogeneous collection of elements**. New elements are added at the **rear** and removed from the **front**. Because insertion and deletion happen at opposite ends, a queue follows **FIFO (First-In, First-Out)** behavior.

| Concept   | Meaning                     | Includes                | Excludes           |
| --------- | --------------------------- | ----------------------- | ------------------ |
| **Front** | deletion end                | `Dequeue` position      | insertion position |
| **Rear**  | insertion end               | `Enqueue` position      | deletion position  |
| **FIFO**  | first inserted leaves first | arrival order preserved | LIFO behavior      |

> [!CAUTION]
> A queue inserts at the **rear** and deletes at the **front**; a stack performs both at one end.

## Queue Operations and Contracts

The lecture defines **CreateQueue**, **QueueEmpty**, **QueueFull**, **Enqueue**, and **Dequeue**.

| Operation       | Precondition           | Postcondition       | Trap                           |
| --------------- | ---------------------- | ------------------- | ------------------------------ |
| **CreateQueue** | none                   | queue becomes empty | forgetting initialization      |
| **Enqueue**     | initialized, not full  | item added at rear  | overflow if full               |
| **Dequeue**     | initialized, not empty | front item removed  | underflow if empty             |
| **QueueEmpty**  | initialized            | boolean result      | does not modify queue          |
| **QueueFull**   | initialized            | boolean result      | only for fixed-capacity queues |

## Why a Simple Linear Array Wastes Space

The lecture first shows that a plain array queue wastes space after repeated deletions from the front. Empty cells may appear at the beginning while the rear reaches the end of the array.

One possible fix is shifting all elements left, but the lecture treats that as **too costly**.

## Circular Queue and the Role of Size

The better solution is a **circular queue**, where the array wraps around to the beginning. This reuses freed positions without shifting.

The lecture uses a **size** field because, in this design, `front` and `rear` alone can become ambiguous between empty and full cases.

| Queue state     | `size` value | Meaning            |
| --------------- | ------------ | ------------------ |
| **Empty queue** | `0`          | no stored elements |
| **Full queue**  | `MAX`        | all positions used |

## Traversing the Queue Without Destroying It

The lecture includes a **TraverseQueue** idea that visits each element without deleting it. The key rule is to move circularly for exactly **size** elements.

| Contrast pair                                | Queue rule                           | Common error                            |
| -------------------------------------------- | ------------------------------------ | --------------------------------------- |
| **Linear array queue** vs **circular queue** | circular queue reuses freed cells    | assuming rear only moves forward once   |
| **front/rear only** vs **front/rear/size**   | `size` distinguishes empty from full | treating index pattern alone as enough  |
| **Traverse** vs **Dequeue repeatedly**       | traversal does not modify the queue  | accidentally destroying stored elements |

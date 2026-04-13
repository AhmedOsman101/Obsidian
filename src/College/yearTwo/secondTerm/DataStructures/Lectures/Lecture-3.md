---
prev:
  text: "Lecture 2"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-2"
next:
  text: "Lecture 4"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-4"
title: Lecture 3
---

# Data Structures - Lecture 3

## Stack: Definition and LIFO Principle

A **stack** is a linear data structure that follows the **LIFO** (Last In, First Out) principle. This matters because it models scenarios where the most recently added element must be accessed first—like function calls or undo operations. All operations occur at only one end called the **top** of the stack.

The fundamental operations are **push** (add to top) and **pop** (remove from top). A **peek** or **top** operation views the top element without removing it. The stack also needs **isEmpty** and **isFull** status checks.

> [!IMPORTANT]
> _The top element is the most recently pushed element. Popping always removes the newest item first._

## Stack Implementation: Array-Based

**Contiguous implementation** stores stack elements in adjacent array positions. The top position is tracked by an integer variable. When the array is full, attempting to push causes **stack overflow**. When empty, attempting to pop causes **stack underflow**.

```c
// Purpose: Define stack structure with array and top index
#define MAX 10
typedef char EntryType;
typedef struct {
  int top;
  EntryType entry[MAX];
} StackType;

// Purpose: Initialize empty stack
void CreateStack(StackType *s) {
  s->top = -1;
}
```

## Stack Operations

**StackEmpty** returns true (1) if top equals -1, indicating no elements.

```c
// Purpose: Check if stack is empty
int StackEmpty(StackType s) {
  return (s.top == -1);
}
```

**StackFull** returns true (1) if top equals MAX-1, indicating the array is full.

```c
// Purpose: Check if stack is full
int StackFull(StackType s) {
  return (s.top == MAX - 1);
}
```

**Push** adds an item to the top of the stack. The specification matters: some implementations check for overflow before pushing, while others assume the caller ensures space exists.

```c
// Purpose: Push item with overflow check
void Push(EntryType item, StackType *s) {
  if (s->top == MAX - 1)
    printf("Error: Stack Overflow");
  else
    s->entry[++s->top] = item;
}
```

**Pop** removes and returns the top item.

```c
// Purpose: Pop item with underflow check
void Pop(EntryType *item, StackType *s) {
  if (s->top == -1)
    printf("Error: Stack Underflow");
  else
    *item = s->entry[s->top--];
}
```

## StackTop: Peek Without Removing

**StackTop** returns the top element without modifying the stack. This matters when you need to examine the current top value before deciding whether to pop.

```c
// Purpose: View top element without removing
EntryType StackTop(StackType *s) {
  return (s->entry[s->top]);
}
```

> [!WARNING]
> _Calling StackTop on an empty stack returns garbage. Always check StackEmpty() first._

## Stack Applications: Reverse Text

A practical use case is reversing input: read characters, push each onto the stack, then pop them to output in reverse order.

```c
// Purpose: Reverse a line of text using stack
CreateStack(&stack);
item = getchar();
while (!StackFull(stack) && item != '\n') {
  Push(item, &stack);
  item = getchar();
}
while (!StackEmpty(stack)) {
  Pop(&item, &stack);
  putchar(item);
}
```

This works because the stack's LIFO property reverses the order: the first character read ends up at the bottom and is the last to be popped.

## Stack vs. Queue Comparison

| Feature      | Stack                     | Queue                      |
| ------------ | ------------------------- | -------------------------- |
| Order        | LIFO (Last In, First Out) | FIFO (First In, First Out) |
| Operations   | push, pop                 | enqueue, dequeue           |
| Access point | One end (top)             | Two ends (front, rear)     |
| Use cases    | Function calls, undo      | Task scheduling, BFS       |

The course covers queues in the next lecture, but understanding the contrast helps clarify when each structure is appropriate.

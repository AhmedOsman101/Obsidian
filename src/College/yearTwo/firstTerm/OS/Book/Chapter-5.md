---
title: Chapter 5
prev:
  text: "Chapter 4"
  link: "/College/yearTwo/firstTerm/OS/Book/Chapter-4"
next: false
lastUpdated: false
---

## Process Synchronization

**Process synchronization** coordinates multiple processes or threads so they work correctly and efficiently when sharing resources (memory, files, variables). Without it, two processes may read and write the same variable at the same time, producing corrupted data.

### Types of Process Cooperation

| Relationship                                  | Meaning                                                                                             | Example                                             |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Unaware of each other (competition)**       | Independent processes not meant to cooperate; the OS resolves competition for I/O, memory, printers | Two processes writing to the same file              |
| **Indirectly aware (cooperation by sharing)** | Processes do not communicate directly but share data, so their actions affect each other            | Producer writes to a buffer; consumer reads from it |
| **Directly aware (communication)**            | Processes know each other and interact directly                                                     | Client-server, chat applications                    |

### Concurrency in Uni-Processor vs Multi-Processor Systems

| System              | Behavior                                                                     | Problem                                                                             |
| ------------------- | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Uni-processor**   | Only one process runs at a time; the OS switches rapidly (context switching) | Even without true parallelism, **interleaving** causes concurrency issues           |
| **Multi-processor** | Multiple processes run truly in parallel on multiple cores                   | Processes can access memory simultaneously; bugs are harder to detect and reproduce |

## Producer-Consumer Problem

The classic coordination problem: two processes share a **buffer**. The **producer** inserts items and must wait when the buffer is full; the **consumer** removes items and must wait when it is empty. The solution keeps a counter of items in the buffer.

```c
// Producer: keep producing items forever
while (true) {
  /* produce an item in nextProduced */
  while (count == BUFFER_SIZE); // busy wait if the buffer is full
  buffer[in] = nextProduced;    // store item at in
  in = (in + 1) % BUFFER_SIZE;  // move in circularly
  count++;
}

// Consumer: keep consuming items forever
while (true) {
  while (count == 0);           // busy wait if the buffer is empty
  nextConsumed = buffer[out];   // take item at out
  out = (out + 1) % BUFFER_SIZE;
  count--;
  /* consume item in nextConsumed */
}
```

## Race Condition

A **race condition** occurs when multiple processes manipulate shared data concurrently and the result depends on the particular order of manipulation, causing **data inconsistency**.

`count++` and `count--` are not atomic. They expand to:

```text
count++:  register1 = count; register1 = register1 + 1; count = register1
count--:  register2 = count; register2 = register2 - 1; count = register2
```

Starting with `count = 5`, this interleaving loses an update:

| Step | Process  | Action                      | Result          |
| ---- | -------- | --------------------------- | --------------- |
| S0   | Producer | `register1 = count`         | `register1 = 5` |
| S1   | Producer | `register1 = register1 + 1` | `register1 = 6` |
| S2   | Consumer | `register2 = count`         | `register2 = 5` |
| S3   | Consumer | `register2 = register2 - 1` | `register2 = 4` |
| S4   | Producer | `count = register1`         | `count = 6`     |
| S5   | Consumer | `count = register2`         | `count = 4`     |

The final `count = 4` is wrong (it should be 5), because the consumer overwrote the producer's update.

## The Critical-Section Problem

A **critical section (CS)** is a code segment that accesses shared resources and must not run while another process is in its corresponding section. The **critical-section problem** is ensuring that when one process is in its critical section, no other process is.

Each process follows this structure:

```text
do {
  entry section      // ask permission to enter
  critical section   // access shared data
  exit section       // release permission
  remainder section  // other code
} while (true);
```

### Requirements for a Valid Solution

| Requirement          | Meaning                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Mutual exclusion** | If process P is in its critical section, no other process may be in its critical section                                                  |
| **Progress**         | If no process is in the critical section and some want to enter, one must be allowed in without unnecessary delay                         |
| **Bounded waiting**  | After a process requests entry, there is a bound on how many other processes may enter before it gets its turn — no process waits forever |

## Solutions to the Critical-Section Problem

There are two broad approaches:

- **Software solution** — code logic (flags, turn variables, waiting loops) enforces mutual exclusion without special hardware.
- **Hardware solution** — special atomic (uninterruptible) CPU instructions enforce mutual exclusion.

### Alternation (Strict Turn)

Two processes A and B share a variable `turn`: `turn == 0` means A enters, `turn == 1` means B enters.

> [!WARNING]
> **Busy waiting** and unnecessary waiting: if `turn = 0` but P0 does not want to enter while P1 does, P1 cannot enter even though the critical section is free. P1 is forced to wait just because it is not its turn.

### Peterson's Solution

**Peterson's solution** is a software solution for two processes. It uses two shared variables:

- `int turn` — whose turn it is to enter.
- `boolean flag[2]` — `flag[i] = true` means process `P_i` is ready to enter.

Each process sets its flag to true, then sets `turn` to the other process to signal it is willing to wait. It enters only if the other process is not interested or it is the other's turn.

```c
// Peterson's solution for process i (the other process is j)
do {
  flag[i] = true;   // process i wants to enter the critical section
  turn = j;         // give priority to the other process
  while (flag[j] == true && turn == j); // busy wait

  /* critical section */

  flag[i] = false;  // process i is done with the critical section
  /* remainder section */
} while (true);
```

It satisfies **mutual exclusion**, **progress**, and **bounded waiting**.

### Hardware Solutions

**Disabling interrupts** before the critical section and re-enabling after prevents preemption.

> [!WARNING]
> This works only on **uniprocessor** systems. Every processor has its own interrupts, and disabling them on all processors of a multiprocessor system is inefficient.

**Atomic instructions** are the modern hardware approach: special non-interruptible instructions that either **test a memory word and set its value** or **swap the contents of two memory words**.

## Semaphores

A **semaphore** controls access to a shared resource or critical section by multiple processes, ensuring mutual exclusion and preventing race conditions. It holds an integer value and provides two **atomic** operations.

| Operation    | Also called     | Effect                                                                                                                                     |
| ------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **wait()**   | `P()`, `down()` | Decrements the value; if the value is > 0 the process proceeds; if it is 0 or negative the process blocks until the value becomes positive |
| **signal()** | `V()`, `up()`   | Increments the value; may wake a blocked process                                                                                           |

Semaphore types:

- **Counting semaphore** — can take any integer value.
- **Binary semaphore** — value 0 or 1, also called a **mutex lock**.

```c
// Busy-waiting (spinlock) implementation
wait(S) {
  while (S <= 0); // no-op, called busy waiting / spinlock
  S--;
}

signal(S) {
  S++;
}
```

### Example — Binary Semaphore (Mutex)

Goal: `S2` in P2 must execute after `S1` in P1. Initialize `sem = 0`.

```c
// P1
S1;
signal(sem);

// P2
wait(sem);
S2;
```

Because `sem` starts at 0, P2 blocks in `wait(sem)` until P1 executes `signal(sem)` after `S1`.

_8 min read (source: 15 min)_

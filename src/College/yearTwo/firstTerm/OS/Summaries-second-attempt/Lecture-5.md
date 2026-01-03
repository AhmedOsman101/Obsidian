# Lecture 5: Process Synchronization

## 1. Foundational Concepts

Process synchronization involves coordinating the execution of cooperating processes to maintain data consistency. When multiple processes access and manipulate the same shared data concurrently, the final outcome can depend on the specific order in which their instructions are executed. This can lead to critical data inconsistencies.

- **Race Condition**: A situation where several processes access and manipulate shared data concurrently, and the outcome of the execution depends on the particular order in which the access takes place.
- **Critical Section Problem**: The challenge of designing a protocol to ensure that when one process is executing in its **critical section** (a segment of code where it accesses shared data), no other process is allowed to execute in its critical section.

A simple example of a race condition can be seen in the producer-consumer problem using a shared `counter` variable. The seemingly simple operations `counter++` and `counter--` are not atomic and are composed of several machine-level instructions.

Consider an initial state where `counter = 5`. The following interleaved execution sequence demonstrates how a race condition can lead to an incorrect value for `counter`:

S0: producer execute `register1 = counter` {register1 = 5} S1: producer execute `register1 = register1 + 1` {register1 = 6} S2: consumer execute `register2 = counter` {register2 = 5} S3: consumer execute `register2 = register2 – 1` {register2 = 4} S4: producer execute `counter = register1` {counter = 6 } S5: consumer execute `counter = register2` {counter = 4}

The final value of `counter` is 4, which is incorrect. The expected value after one increment and one decrement is 5.

The structure of a process in the context of the Critical-Section problem is divided into four key segments:

1. **Entry Section**: Code that requests permission to enter the critical section.
2. **Critical Section**: The code segment where the process accesses shared resources.
3. **Exit Section**: Code that follows the critical section, often releasing resources.
4. **Remainder Section**: The rest of the process's code.

## 2. Solution Requirements for the Critical-Section Problem

Any valid solution to the critical-section problem must satisfy the following three requirements:

1. **Mutual Exclusion**: If a process is executing in its critical section, then no other processes can be executing in their critical sections.
2. **Progress**: If no process is executing in its critical section and some processes wish to enter their critical sections, then the selection of the process that will enter next cannot be postponed indefinitely.
3. **Bounded Waiting**: A bound must exist on the number of times that other processes are allowed to enter their critical sections after a process has made a request to enter its critical section and before that request is granted.

Operating systems handle critical sections within the kernel using one of two approaches:

- **Non-preemptive kernels** are free from race conditions, as a kernel-mode process runs until it exits kernel mode, blocks, or voluntarily yields the CPU.
- **Preemptive kernels** allow a process to be preempted while running in kernel mode, making them more responsive but requiring careful design to prevent race conditions on shared kernel data.

## 3. Algorithmic & Hardware Solutions

### 3.1 Peterson's Solution

Peterson's Solution is a classic software-based solution to the critical-section problem for two processes. It relies on two shared variables:

- `int turn`: Indicates which process has the turn to enter its critical section.
- `boolean flag[2]`: An array where `flag[i] = true` indicates that process `Pi` is ready to enter its critical section.

The algorithm for process `Pi` is as follows:

```c
do {
  flag[i] = true;
  turn = j;

  while (flag[j] && turn == j);
  // critical section
  flag[i] = false;
  // remainder section
} while (true);
```

This solution is proven to meet all three essential requirements for solving the critical-section problem: **Mutual Exclusion**, **Progress**, and **Bounded-waiting**.

### 3.2 Synchronization Hardware

Modern computer architectures provide special atomic hardware instructions that can be used to build more efficient synchronization locks. An atomic instruction is one that executes as a single, non-interruptible unit.

##### test_and_set() Instruction

The `test_and_set()` instruction atomically reads the value of a boolean variable and sets it to `true`.

**Definition:**

```c
boolean test_and_set (boolean *target) {
    boolean rv = *target;
    *target = TRUE;
    return rv;
}
```

**Characteristics:**

1. Executed atomically.
2. Returns the original value of the passed parameter.
3. Sets the new value of the passed parameter to `TRUE`.

**Solution using** `**test_and_set()**`**:** A shared boolean variable `lock` is initialized to `false`.

```c
do {
    while (test_and_set(&lock))
        ; /* do nothing */

    /* critical section */

    lock = false;

    /* remainder section */
} while (true);
```

##### compare_and_swap() Instruction

The `compare_and_swap()` instruction atomically compares the contents of a memory location to an expected value and, only if they are the same, modifies the contents of that memory location to a given new value.

**Definition:**

```c
int compare_and_swap(int *value, int expected, int new_value) {
    int temp = *value;
    if (*value == expected)
        *value = new_value;
    return temp;
}
```

**Characteristics:**

1. Executed atomically.
2. Returns the original value of the `value` parameter.
3. Sets `value` to `new_value` only if `value` matches `expected`.

**Solution using** `**compare_and_swap()**`**:** A shared integer `lock` is initialized to `0`.

```c
do {
    while (compare_and_swap(&lock, 0, 1) != 0)
        ; /* do nothing */

    /* critical section */

    lock = 0;

    /* remainder section */
} while (true);
```

## 4. Synchronization Tools (Software Abstractions)

To simplify synchronization for application programmers, operating systems provide higher-level software tools.

### 4.1 Mutex Locks

A **Mutex Lock** (short for mutual exclusion) is the simplest software tool for solving the critical-section problem. It is a boolean variable that indicates whether a lock is available. A process must acquire the lock before entering a critical section and release it upon exiting.

The two primary operations are `acquire()` and `release()`:

```c
acquire() {
    while (!available)
        ; /* busy wait */
    available = false;
}

release() {
    available = true;
}
```

This implementation requires **busy waiting**, where a process repeatedly checks a condition in a loop. A mutex lock that uses busy waiting is called a **spinlock**.

### 4.2 Semaphores

A **Semaphore** is a more sophisticated integer variable `S` that is accessed only through two standard atomic operations: `wait()` and `signal()`.

`**wait()**` **Operation (Busy-Waiting Version):**

```c
wait(S) {
    while (S <= 0)
        ; // busy wait
    S--;
}
```

`**signal()**` **Operation:**

```c
signal(S) {
    S++;
}
```

There are two main types of semaphores:

- **Counting semaphore**: The integer value can range over an unrestricted domain.
- **Binary semaphore**: The integer value can range only between 0 and 1. It functions similarly to a mutex lock.

To avoid busy waiting, semaphores can be implemented with a waiting queue. Processes that must wait are placed in this queue and put to sleep. A `signal()` operation can then wake one of them up. This involves two system calls:

- `block()`: Places the calling process on the appropriate waiting queue.
- `wakeup(P)`: Removes process `P` from a waiting queue and places it in the ready queue.

The semaphore itself is defined as a C struct:

```c
typedef struct{
    int value;
    struct process *list;
} semaphore;
```

**Implementation of** `**wait()**` **(No Busy Waiting):**

```c
wait(semaphore *S) {
    S->value--;
    if (S->value < 0) {
        add this process to S->list;
        block();
    }
}
```

**Implementation of** `**signal()**` **(No Busy Waiting):**

```c
signal(semaphore *S) {
    S->value++;
    if (S->value <= 0) {
        remove a process P from S->list;
        wakeup(P);
    }
}
```

Improper use of semaphores can lead to several issues:

- **Deadlock**: Two or more processes are waiting indefinitely for an event that can only be caused by one of the waiting processes. For example, if two processes `P0` and `P1` need two semaphores `S` and `Q` (both initialized to 1) and request them in opposite orders:
  - `P0` executes `wait(S)`
  - `P1` executes `wait(Q)`
  - `P0` executes `wait(Q)` (must wait for `P1`)
  - `P1` executes `wait(S)` (must wait for `P0`)
- **Starvation**: A process is indefinitely blocked and may never be removed from the semaphore queue in which it is suspended.
- **Priority Inversion**: A lower-priority process holds a lock needed by a higher-priority process, effectively inverting their relative priorities.

### 4.3 Monitors

A **Monitor** is a high-level synchronization construct that provides a convenient and effective mechanism for ensuring mutual exclusion. Its key properties are:

- It is an abstract data type whose internal variables are only accessible by code within the monitor.
- Only one process may be active within the monitor at any given time.

To handle more complex synchronization scenarios, monitors include **Condition Variables**. A condition variable has two primary operations:

- `x.wait()`: The process invoking this operation is suspended until another process invokes `x.signal()`.
- `x.signal()`: Resumes one of the processes (if any) that are suspended waiting on `x`.

When a process `P` signals a condition that resumes another process `Q`, a choice must be made as only one can be active in the monitor. The two main approaches are **Signal and wait** (P waits for Q to leave the monitor) and **Signal and continue** (Q waits for P to leave the monitor).

## 5. Classical Problems of Synchronization

These problems are used to test and validate new synchronization mechanisms.

### 5.1 Bounded-Buffer Problem

This problem involves synchronizing producer and consumer processes that share a buffer of a fixed size `n`.

- **Semaphores Used:**
  - `mutex`: (initialized to 1) for mutual exclusion when accessing the buffer.
  - `full`: (initialized to 0) counts the number of full buffer slots.
  - `empty`: (initialized to `n`) counts the number of empty buffer slots.

**Producer Process Structure:**

```c
do {
    /* produce an item in next_produced */

    wait(empty);
    wait(mutex);

    /* add next produced to the buffer */

    signal(mutex);
    signal(full);
} while (true);
```

**Consumer Process Structure:**

```c
do {
    wait(full);
    wait(mutex);

    /* remove an item from buffer to next_consumed */

    signal(mutex);
    signal(empty);

    /* consume the item in next consumed */
} while (true);
```

### 5.2 Readers-Writers Problem

This problem involves managing access to a shared data set where there are two types of processes: readers (who only read) and writers (who can read and write). The goal is to allow multiple readers to access the data simultaneously, but a writer must have exclusive access.

- **Semaphores and Variables Used:**
  - `rw_mutex`: (initialized to 1) provides mutual exclusion for writers.
  - `mutex`: (initialized to 1) protects the `read_count` variable.
  - `read_count`: (integer initialized to 0) tracks how many readers are currently accessing the data.

**Writer Process Structure:**

```c
do {
    wait(rw_mutex);

    /* writing is performed */

    signal(rw_mutex);
} while (true);
```

**Reader Process Structure:**

```c
do {
    wait(mutex);
    read_count++;
    if (read_count == 1)
        wait(rw_mutex); // First reader locks out writers
    signal(mutex);

    /* reading is performed */

    wait(mutex);
    read_count--;
    if (read_count == 0)
        signal(rw_mutex); // Last reader allows writers
    signal(mutex);
} while (true);
```

### 5.3 Dining-Philosophers Problem

This problem models five philosophers sitting at a circular table who spend their lives alternating between thinking and eating. There are five chopsticks on the table, one between each pair of adjacent philosophers. A philosopher needs to pick up both adjacent chopsticks to eat.

- **Semaphores Used:**
  - `chopstick[5]`: (array of semaphores, each initialized to 1) represents each chopstick.

**Philosopher** `**i**` **Process Structure:**

```c
do {
    wait(chopstick[i]);
    wait(chopstick[(i + 1) % 5]);

    // eat

    signal(chopstick[i]);
    signal(chopstick[(i + 1) % 5]);

    // think
} while (TRUE);
```

This algorithm can lead to **deadlock** if all five philosophers pick up their left chopstick simultaneously. They will then all be waiting for their right chopstick, which is held by their neighbor, and none can proceed.

Deadlock can be handled with one of the following strategies:

- Allow at most four philosophers to be sitting at the table simultaneously.
- Allow a philosopher to pick up chopsticks only if both are available (this must be done in a critical section).
- Use an asymmetric solution: an odd-numbered philosopher picks up the left chopstick first, while an even-numbered philosopher picks up the right chopstick first.

## 6. Synchronization in Operating Systems

- **Solaris**: Uses adaptive mutexes (which act as spinlocks or blocking locks depending on the situation), condition variables, readers-writers locks, and turnstiles to order waiting threads.
- **Windows**: Employs interrupt masks on uniprocessor systems and spinlocks on multiprocessor systems for kernel synchronization. It provides dispatcher objects (like mutexes, semaphores, events, and timers) for user-level synchronization.
- **Linux**: Prior to version 2.6, it disabled interrupts for short critical sections. In version 2.6 and later, the kernel is fully preemptive. It provides semaphores, spinlocks, and reader-writer versions of both.
- **Pthreads**: An OS-independent API that provides mutex locks and condition variables for thread synchronization. Extensions may include read-write locks and spinlocks.

## 7. Alternative Synchronization Approaches

### Transactional Memory

A memory transaction is a sequence of read-write operations to memory that are performed atomically. If a transaction cannot be completed, it is rolled back, and the memory is restored to its original state.

```c
void update() {
    /* read/write memory */
}
```

### OpenMP

OpenMP is a set of compiler directives and an API for parallel programming. It allows programmers to mark certain regions of code as critical sections that should be executed atomically.

```c
void update(int value) {
    #pragma omp critical {
        count += value
    }
}
```

The code contained within the `#pragma omp critical` directive is treated as a critical section and performed atomically.

### Functional Programming Languages

Functional programming languages like Erlang and Scala handle data races by avoiding shared state. Variables are treated as immutable and cannot change their value once assigned. This paradigm inherently prevents the kind of data corruption seen in race conditions.

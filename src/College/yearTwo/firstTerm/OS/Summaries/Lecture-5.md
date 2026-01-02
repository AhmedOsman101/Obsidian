# Lecture 5: Process Synchronization

## 1. The Core Problem: Concurrent Access and Data Inconsistency

In any modern operating system, the ability for multiple processes to execute concurrently is fundamental. This concurrency is essential for improving resource utilization and enhancing the system's responsiveness to users. However, it also introduces a significant challenge: when processes share data, the order in which they execute their instructions can lead to incorrect results and data inconsistency. A process can be interrupted at any moment, leaving shared data in an unstable state. Process synchronization refers to the set of mechanisms required to manage this shared access and ensure the orderly execution of cooperating processes, thereby maintaining data consistency.

The classic **producer-consumer problem** illustrates this challenge perfectly. A producer process generates data and places it into a shared buffer, while a consumer process removes and uses that data. A shared counter tracks the number of full buffers.

| Producer Code                                             | Consumer Code                                   |
| --------------------------------------------------------- | ----------------------------------------------- |
| `while (true) {`                                          | `while (true) {`                                |
| `while (counter == BUFFER_SIZE)`<br> `; /* do nothing */` | `while (counter == 0)`<br> `; /* do nothing */` |
| `buffer[in] = next_produced;`                             | `next_consumed = buffer[out];`                  |
| `in = (in + 1) % BUFFER_SIZE;`                            | `out = (out + 1) % BUFFER_SIZE;`                |
| `counter++;`                                              | `counter--;`                                    |
| `}`                                                       | `}`                                             |

The shared integer `counter` is intended to be incremented by the producer each time it adds an item to the buffer and decremented by the consumer each time it removes one. In a sequential world, this works flawlessly. In a concurrent world, it can fail.

### Race Condition

This potential for data inconsistency is known as a **race condition**. This situation occurs when multiple processes access and manipulate the same shared data concurrently, and the final outcome depends on the particular order in which their instructions are interleaved by the scheduler.

The simple operations `counter++` and `counter--` are not atomic; they are composed of several machine-level instructions. Let's examine a specific interleaving where the `counter` begins at 5:

- **S0:** The producer executes `register1 = counter`. (`register1` is now 5).
- **S1:** The producer executes `register1 = register1 + 1`. (`register1` is now 6).
- **S2:** _The scheduler interrupts the producer._ The consumer executes `register2 = counter`. (`register2` is now 5, as the producer hasn't written its new value back yet).
- **S3:** The consumer executes `register2 = register2 - 1`. (`register2` is now 4).
- **S4:** _The scheduler interrupts the consumer._ The producer executes `counter = register1`. (`counter` is now 6).
- **S5:** The consumer executes `counter = register2`. (`counter` is now 4).

The final value of `counter` is 4, which is incorrect. The expected result was 5. The data inconsistency occurred because the consumer read the original value of `counter` _before_ the producer had a chance to store its updated value. To prevent such errors, we must formalize this challenge as the critical-section problem.

## 2. Formalizing the Challenge: The Critical-Section Problem

The Critical-Section Problem provides the fundamental framework for designing and evaluating synchronization solutions. It models the general structure of cooperating processes and defines the requirements that any valid solution must satisfy.

In a system of multiple processes, each process has a segment of code called a **critical section**, where it manipulates shared data (e.g., updating a variable, writing to a file). The core problem is to design a protocol that processes can use to cooperate. This protocol must ensure that when one process is executing in its critical section, no other process is allowed to execute in its own critical section.

### Requirements for a Valid Solution

Any correct solution to the critical-section problem must satisfy the following three conditions:

1. **Mutual Exclusion**: If a process is executing in its critical section, then no other processes can be executing in their critical sections.
2. **Progress**: If no process is currently in its critical section and some processes wish to enter theirs, then the selection of the next process to enter its critical section cannot be postponed indefinitely. (In other words, if some processes want to enter the critical section and the section is free, a decision on who goes next must eventually be made.)
3. **Bounded Waiting**: There must be a limit on the number of times that other processes are allowed to enter their critical sections after a process has made a request to enter its critical section and before that request is granted. (This ensures a process doesn't get stuck waiting forever while other processes repeatedly cut in line.)

### Kernel-Level Approaches

Operating system kernels must also manage their own critical sections. There are two primary approaches:

- **Non-preemptive kernels:** A process running in kernel mode cannot be preempted; it runs until it exits kernel mode, blocks, or voluntarily gives up the CPU. This design is free from race conditions on kernel data structures.
- **Preemptive kernels:** A process running in kernel mode can be preempted. This approach requires careful design to ensure that shared kernel data is protected from race conditions.

With this formal structure in place, we can now examine some of the foundational solutions to this problem.

## 3. Foundational Solutions for Critical Sections

Understanding both software-based algorithms and low-level hardware instructions is crucial, as these form the building blocks for the more advanced synchronization tools provided by modern operating systems.

### 3.1 Software-Based: Peterson's Solution

Peterson's Solution is a classic, algorithm-based solution to the critical-section problem for two processes. It relies on two shared variables to coordinate access:

- `int turn`: An integer variable that indicates which process has the turn to enter its critical section.
- `boolean flag[2]`: A boolean array where `flag[i] = true` indicates that process `i` is ready to enter its critical section.

Peterson's Solution is provably correct, meaning it satisfies all three necessary requirements for a valid solution: **mutual exclusion**, **progress**, and **bounded waiting**.

### 3.2 Hardware-Assisted: Atomic Instructions

Modern computer architectures provide special hardware instructions that are **atomic**, meaning they execute as a single, non-interruptible unit. These instructions provide a foundation for implementing locks, which are used to protect critical sections. Two common examples are `test_and_set()` and `compare_and_swap()`.

| Instruction              | How It Works                                                                                                                                                                                                       | Key Characteristic                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `**test_and_set()**`     | Takes a boolean pointer as a parameter. It stores the original value of the boolean, sets the boolean's value to `TRUE`, and returns the original value.                                                           | Atomically returns the original value while setting the new value to `TRUE`.                             |
| `**compare_and_swap()**` | Takes a pointer to an integer, an expected value, and a new value. If the integer's current value equals the expected value, it is set to the new value. It returns the original value of the integer, regardless. | The swap only occurs if the current value matches the expected value, performed as one atomic operation. |

A simple lock implemented with these instructions involves a process repeatedly executing the instruction in a `while` loop until it succeeds. This method of repeatedly checking a condition is known as "busy waiting," and a lock built this way is called a "spinlock." These low-level hardware solutions, while powerful, are complex to use correctly. Therefore, OS designers use them to build higher-level, more accessible software tools.

## 4. Key Synchronization Tools

Because low-level hardware solutions are difficult for application programmers to use, operating systems provide higher-level software tools to solve synchronization problems. Mutex locks and semaphores are two of the most fundamental tools.

### 4.1 Mutex Locks

A **Mutex Lock** (short for "mutual exclusion") is the simplest software synchronization tool. Its purpose is to protect a critical section by ensuring only one process can enter at a time. A process must `acquire()` the lock before entering the critical section and `release()` it upon exiting.

The `acquire()` call loops continuously until the lock becomes available. This approach is known as **busy waiting**, and a mutex lock implemented this way is also called a **spinlock** because the process "spins" while waiting for the lock.

### 4.2 Semaphores

A **Semaphore** is a more sophisticated and flexible synchronization tool than a mutex lock. It is an integer variable that, apart from initialization, is only accessible through two standard atomic operations: `wait()` and `signal()`.

There are two primary types of semaphores:

- **Counting semaphore**: The integer value can range over an unrestricted domain.
- **Binary semaphore**: The integer value can only be 0 or 1. A binary semaphore provides the same functionality as a mutex lock.

To avoid busy waiting, a semaphore can be implemented with a waiting queue. When a process must wait on a semaphore, it is suspended and placed on the queue instead of spinning. The `wait()` and `signal()` operations are defined as follows:

- `**wait()**`: Decrements the semaphore's value. If the new value is negative, the process blocks and is placed on the semaphore's waiting queue.
- `**signal()**`: Increments the semaphore's value. If the value is less than or equal to zero, one of the blocked processes is removed from the waiting queue and placed on the ready queue to be woken up.

While powerful, these tools are not foolproof. Incorrect usage can lead to critical system failures, such as deadlock and starvation.

## 5. Common Pitfalls in Synchronization

Even when using well-designed synchronization tools like mutexes and semaphores, programmers can introduce subtle bugs that prevent a concurrent system from functioning correctly. Recognizing potential problems like deadlock and starvation is a critical part of designing robust concurrent applications.

- **Deadlock**: This occurs when two or more processes are waiting indefinitely for an event that can only be caused by one of the other waiting processes. For example, if Process P0 holds semaphore S and is waiting for semaphore Q, while Process P1 holds semaphore Q and is waiting for semaphore S, both will wait forever.
- **Starvation**: This is a state of indefinite blocking where a process is never removed from the semaphore queue in which it is suspended. Although a system may be making progress, a specific process may never get its turn to run.
- **Priority Inversion**: This is a scheduling problem that occurs when a lower-priority process holds a lock that is needed by a higher-priority process. (Think of a high-priority task being stuck behind a low-priority one, effectively flipping their priorities.) This can be resolved using a **priority-inheritance protocol**, where the lower-priority process temporarily inherits the higher priority until it releases the lock.

To test and demonstrate solutions to these challenges, several classic synchronization problems are used as benchmarks.

## 6. Classic Synchronization Problems & Solutions

Computer scientists have developed a set of classic problems that serve as standard benchmarks for testing and demonstrating the correctness of new synchronization schemes.

### 6.1 The Bounded-Buffer Problem

This problem models the producer-consumer scenario with a fixed-size (bounded) buffer. The solution uses three semaphores to coordinate the producer and consumer processes:

- `mutex`: A binary semaphore initialized to `1` to provide mutual exclusion for buffer access.
- `full`: A counting semaphore initialized to `0` to count the number of full buffer slots.
- `empty`: A counting semaphore initialized to `n` (the buffer size) to count the number of empty buffer slots.

### 6.2 The Readers-Writers Problem

This problem models a situation where a shared data set is accessed by multiple processes. "Readers" can only read the data, while "Writers" can read and write. The core challenge is to allow multiple readers to access the data concurrently, but to ensure that a writer has exclusive access. The solution involves the following shared components:

- `rw_mutex`: A semaphore initialized to `1`, used by writers to ensure exclusive access.
- `mutex`: A semaphore initialized to `1`, used to protect the `read_count` variable.
- `read_count`: An integer initialized to `0` that tracks how many readers are currently accessing the data.

### 6.3 The Dining-Philosophers Problem

This problem illustrates the challenge of allocating a limited set of resources among several processes without causing deadlock or starvation. The scenario involves five philosophers sitting at a round table who alternate between thinking and eating. There are five chopsticks, one between each pair of philosophers. To eat, a philosopher must pick up both the chopstick to their left and the one to their right.

A simple algorithm where each philosopher picks up their left chopstick and then their right can lead to deadlock if all five pick up their left chopstick simultaneously. Several deadlock-handling strategies exist:

- Allow at most four philosophers to sit at the table at once.
- Allow a philosopher to pick up their chopsticks only if both are available, which must be done within a critical section.
- Use an asymmetric solution where odd-numbered philosophers pick up their left chopstick first, while even-numbered philosophers pick up their right first.

The potential for incorrect semaphore usage in solving these problems motivated the development of higher-level synchronization mechanisms.

## 7. Advanced Abstractions: Monitors

**Monitors** are a high-level abstraction designed to provide a more convenient, effective, and less error-prone mechanism for process synchronization compared to semaphores. A monitor is an abstract data type where internal variables are only accessible by code within the monitor itself.

The key feature of a monitor is that **only one process may be active within it at a time**, ensuring automatic mutual exclusion. To handle more complex synchronization needs, monitors use **condition variables**. A process can wait on a condition variable inside the monitor, releasing its exclusive access until it is signaled by another process. The two primary operations are:

- `x.wait()`: The process invoking this operation is suspended and releases the monitor lock, allowing another process to enter.
- `x.signal()`: This operation resumes one of the processes (if any) that are currently suspended on the condition variable `x`. The exact behavior of `signal()`—whether the signaling process continues immediately or waits for the resumed process—varies depending on the monitor's implementation in a given language.

The Dining-Philosophers problem can be solved using a monitor. While this approach prevents deadlock, it is important to note that starvation is still a possibility.

These theoretical constructs have been implemented in various forms in real-world operating systems.

## 8. Synchronization in Practice: OS Examples

Major operating systems implement the synchronization tools discussed to manage their complex concurrent operations, providing stable and efficient multitasking and multiprocessing environments.

- **Solaris**: Implements a variety of locks, including **adaptive mutexes** (which spin if the lock is held by a thread on another CPU, but sleep otherwise), **condition variables**, **readers-writers locks**, and **turnstiles** to order waiting threads.
- **Windows**: On uniprocessor systems, it uses **interrupt masks** to protect global resources. On multiprocessor systems, it uses **spinlocks**. It also provides user-land **dispatcher objects**, which can act as mutexes, semaphores, events (similar to condition variables), and timers.
- **Linux**: Prior to kernel version 2.6, the kernel disabled interrupts to implement short critical sections. Since version 2.6, the kernel is fully preemptive. Linux provides **semaphores**, **spinlocks**, and reader-writer versions of both.
- **Pthreads**: This is an OS-independent API standard for thread creation and synchronization. It provides tools including **mutex locks** and **condition variables**. Non-portable extensions may include read-write locks and spinlocks.

While these tools are foundational, research continues into other, alternative approaches to handling concurrency.

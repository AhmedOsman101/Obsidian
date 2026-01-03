# Lecture 5: Process Synchronization

## 1. The Fundamental Synchronization Problem

### 1.1. Race Condition

A **race condition** is a situation where several processes access and manipulate shared data concurrently, and the final outcome of the data depends on which process finishes last. This uncontrolled execution can lead to severe data inconsistency.

This issue can be illustrated with the classic producer-consumer problem. A shared integer variable, `counter`, tracks the number of full buffers. The producer increments `counter` after adding an item, and the consumer decrements it after removing one. Both `counter++` and `counter--` operations, which seem simple, are actually composed of multiple machine-level instructions.

The `counter++` operation can be implemented as:

1. `register1 = counter`
2. `register1 = register1 + 1`
3. `counter = register1`

The `counter--` operation can be implemented as:

1. `register2 = counter`
2. `register2 = register2 - 1`
3. `counter = register2`

If these instructions are interleaved between the producer and consumer processes, an incorrect value can result. Consider an initial `counter` value of 5:

- **S0:** The producer loads `counter` into its register (register1 = 5).
- **S1:** The producer increments its register (register1 = 6).
- **S2:** Before the producer can save its result, the consumer loads `counter` into its register (register2 = 5).
- **S3:** The consumer decrements its register (register2 = 4).
- **S4:** The producer stores its value back to `counter` (counter = 6).
- **S5:** The consumer stores its value back to `counter` (counter = 4).

The final value of `counter` is 4, which is incorrect. This loss of an increment operation is a direct result of the race condition.

### 1.2. The Critical-Section Problem

Within a process's code, the segment where it modifies common variables, updates a table, or writes to a file is known as the **critical section**. The fundamental **critical-section problem** is to design a protocol that cooperating processes can use to ensure that when one process is executing in its critical section, no other process is allowed to execute in its own critical section.

### 1.3. Requirements for a Solution

Any valid solution to the critical-section problem must satisfy the following three conditions:

1. **Mutual Exclusion** If a process is executing in its critical section, then no other processes can be executing in their critical sections.
2. **Progress** If no process is currently executing in its critical section and some processes wish to enter theirs, then the selection of the next process to enter its critical section cannot be postponed indefinitely.
3. **Bounded Waiting** A limit must exist on the number of times that other processes are allowed to enter their critical sections after a process has made a request to enter its critical section and before that request is granted.

To meet these requirements, computer scientists have developed a range of solutions, from low-level hardware instructions to high-level operating system tools.

## 2. Solutions for the Critical-Section Problem

The solutions to the critical-section problem have evolved from foundational algorithms and hardware-level instructions to more abstract and user-friendly software tools provided by the operating system. This progression aims to offer programmers powerful and reliable ways to manage concurrency without exposing them to the complexities of the underlying architecture.

### 2.1. Software Solution: Peterson's Solution

Peterson's Solution is a classic algorithmic solution to the critical-section problem for two processes. It relies on two shared variables to coordinate access:

- An integer `turn`, which indicates which process has the turn to enter its critical section.
- A boolean array `flag`, where `flag[i] = true` implies that process `Pi` is ready to enter its critical section.

This elegant algorithm is proven to satisfy all three necessary conditions—mutual exclusion, progress, and bounded waiting—assuming that machine-language `load` and `store` instructions are atomic.

### 2.2. Hardware-Based Solutions

Modern computer architectures provide special **atomic** (non-interruptible) hardware instructions that form the foundation for most synchronization solutions. These instructions allow for testing and modifying a memory location in a single, uninterruptible step.

- `**test_and_set()**`**:** This instruction atomically returns the original boolean value of a target variable while simultaneously setting that variable's new value to `true`.
- `**compare_and_swap()**`**:** This instruction atomically returns the original integer value of a target variable and only updates that variable to a new value if the original value matches an expected value.

### 2.3. OS Tool: Mutex Locks

To shield application programmers from the complexity of hardware-level solutions, operating systems provide software tools. The simplest of these is the **Mutex Lock**. A process must `acquire()` the lock before entering a critical section and `release()` it upon exiting. A boolean variable indicates whether the lock is available.

This approach, however, requires **busy waiting**, where a process continuously loops while waiting for the lock to become available. Because of this continuous checking, this type of mutex lock is also known as a **spinlock**.

### 2.4. OS Tool: Semaphores

A **Semaphore** is a more sophisticated synchronization tool. It is an integer variable that is only accessible through two atomic operations: `wait()` and `signal()`.

- The `wait()` operation decrements the semaphore's value. Before decrementing, however, it continuously checks the value and waits (by looping) as long as the value is less than or equal to zero.
- The `signal()` operation increments the semaphore's value.

|                        |                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| Semaphore Type         | Description                                                                              |
| **Counting semaphore** | Its integer value can range over an unrestricted domain.                                 |
| **Binary semaphore**   | Its integer value can only be 0 or 1, making it functionally equivalent to a mutex lock. |

To avoid busy waiting, semaphores can be implemented with an associated waiting queue. When a process must wait, the OS can use a `block()` operation to place it on the queue. When a `signal()` occurs, a `wakeup()` operation removes a process from the queue and places it in the ready state. While these tools are powerful, their misuse can lead to significant synchronization problems.

## 3. Common Synchronization Challenges

While synchronization tools like mutexes and semaphores are essential for managing concurrent processes, their incorrect implementation or interaction can introduce severe system-level problems. These issues can degrade performance or even bring the entire system to a halt.

### 3.1. Deadlock and Starvation

Two of the most common and serious challenges are deadlock and starvation.

- **Deadlock** occurs when two or more processes are waiting indefinitely for an event that can only be caused by one of the other waiting processes. For example, Process A holds Resource 1 and is waiting for Resource 2, while Process B holds Resource 2 and is waiting for Resource 1. Neither can proceed.
- **Starvation**, or indefinite blocking, occurs when a process is never removed from a semaphore's waiting queue. While other processes are repeatedly granted access to a resource, one or more processes are perpetually overlooked.

### 3.2. Priority Inversion

**Priority Inversion** is a scheduling problem that occurs when a lower-priority process holds a lock needed by a higher-priority process, forcing the higher-priority process to wait. Because the higher-priority process is blocked, a medium-priority process may be scheduled instead, effectively "inverting" the intended priority scheme. This problem is typically resolved using a **priority-inheritance protocol**, where the lower-priority process temporarily inherits the priority of the highest-priority process waiting for the resource.

These general problems highlight the need for careful design, which is often tested against a set of classic synchronization scenarios.

## 4. Classic Problems of Synchronization

To evaluate the effectiveness of new synchronization mechanisms, researchers often test them against a set of canonical problems. These problems encapsulate common concurrency scenarios and serve as benchmarks for proposed solutions.

### 4.1. The Bounded-Buffer Problem

This problem involves producers and consumers who share a fixed-size buffer containing `n` slots. A producer process generates items and places them in the buffer, while a consumer process removes and consumes them. The solution must ensure that producers do not add to a full buffer and consumers do not remove from an empty one. The standard solution uses three semaphores:

- `mutex`: Initialized to `1` to ensure mutual exclusion when accessing the buffer.
- `full`: Initialized to `0` to count the number of full slots.
- `empty`: Initialized to `n` to count the number of empty slots.

### 4.2. The Readers-Writers Problem

This problem models a situation where a shared data set is accessed by two types of processes: Readers and Writers. The primary constraint is that **multiple Readers can access the data simultaneously, but only one Writer can have exclusive access at a time**. The solution uses the following synchronization variables:

- `rw_mutex`: A semaphore initialized to `1` that provides mutual exclusion for Writers.
- `mutex`: A semaphore initialized to `1` used to protect the `read_count` variable.
- `read_count`: An integer initialized to `0` that tracks how many Readers are currently accessing the data.

### 4.3. The Dining-Philosophers Problem

This problem illustrates a classic deadlock scenario. Five philosophers are seated at a circular table with five chopsticks, one between each pair of philosophers. A philosopher's life consists of alternating between thinking and eating. To eat, a philosopher needs to pick up the two chopsticks on their immediate left and right. The challenge is to design a protocol that allows philosophers to eat without creating a deadlock where all philosophers are holding one chopstick and waiting for another. Deadlock can be handled with several strategies:

- Allow at most four philosophers to be seated at the table simultaneously.
- Allow a philosopher to pick up their chopsticks only if both are available, which must be done within a critical section.
- Use an asymmetric solution where odd-numbered philosophers pick up their left chopstick first, while even-numbered philosophers pick up their right chopstick first.

The complexity and error-prone nature of solving these problems with semaphores directly led to the development of higher-level synchronization abstractions.

## 5. High-Level Abstraction: Monitors

To make synchronization easier and less prone to programmer error, a high-level programming language construct called a **Monitor** was developed. Monitors provide a more structured approach to synchronization than semaphores, abstracting away many of the implementation details.

### 5.1. Monitor Concept

A **Monitor** is an abstract data type that encapsulates shared variables and the procedures that operate on them. Its most critical feature is that it implicitly ensures **mutual exclusion**: only one process can be active within the monitor's procedures at any given time. The compiler handles the underlying synchronization, freeing the programmer from explicitly managing locks.

### 5.2. Condition Variables

To handle cases where a process inside a monitor must wait for a specific condition to be met, monitors include **Condition Variables**. These are special objects within a monitor that a process can either wait on or signal. They support two primary operations:

- `x.wait()`: Suspends the invoking process and simultaneously releases the monitor's mutual exclusion lock, allowing another process to enter the monitor.
- `x.signal()`: Resumes one of the processes (if any) that is currently suspended in a `wait()` call on the same condition variable.

These fundamental concepts are widely applied in various forms within modern, real-world operating systems.

## 6. Synchronization in Practice

Major operating systems implement a variety of the mechanisms discussed—from low-level spinlocks to high-level monitors—to manage concurrency in both kernel and user-level code.

### 6.1. OS-Specific Implementations

- **Solaris:** Implements adaptive mutexes (which can switch between being a spinlock and a blocking lock), condition variables, readers-writers locks, and turnstiles for ordering waiting threads.
- **Windows:** Uses interrupt masks on uniprocessor systems and spinlocks on multiprocessor systems for kernel-level synchronization. For user applications, it provides dispatcher objects, which include mutexes, semaphores, and events (similar to condition variables).
- **Linux:** In modern preemptive kernels (version 2.6+), Linux provides semaphores, spinlocks, atomic integers, and reader-writer versions of locks to handle synchronization.
- **Pthreads:** This is an OS-independent API standard that provides specifications for tools like mutex locks and condition variables, allowing for portable multithreaded programming.

### 6.2. Alternative Approaches

Beyond traditional OS tools, several alternative approaches to handling synchronization have emerged.

- **Transactional Memory:** This approach allows a sequence of memory read-write operations to be performed atomically as a single transaction. If the transaction cannot be completed without interference, it is rolled back and can be retried.
- **OpenMP:** This is an API that uses compiler directives to support parallel programming. For example, a block of code can be marked with `#pragma omp critical` to instruct the compiler to treat it as a critical section and ensure it is executed atomically.
- **Functional Programming Languages:** This programming paradigm helps avoid data races by design. Variables are typically immutable, meaning they cannot change state after being assigned a value. By eliminating shared, mutable state, this approach removes a primary cause of synchronization problems.

# Student Details

| Field   | Value                    |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20240592                 |
| Section | 1                        |
| Number  | 15                       |

# Operating System Assignment 2

## Task 1

### 1. Describe the concept of process synchronization and its purpose.

**Process synchronization** is the coordination of multiple processes or threads to ensure orderly execution when accessing shared resources, such as data, files, or hardware devices. The primary purpose is to prevent **race conditions**, where the final outcome depends on the unpredictable order of execution, leading to inconsistent or incorrect results. Synchronization ensures:

- **Data consistency** when shared resources are accessed concurrently.
- **Mutual exclusion**, so only one process can access a critical section at a time.
- **Orderly execution** of cooperating processes to achieve desired system behavior.

---

### **2. Discuss the classic process synchronization problems and compare the different approaches used to solve the critical section problem.**

**Classic Synchronization Problems:**

1. **Bounded-Buffer Problem:**
   - Involves a producer and consumer sharing a fixed-size buffer.
   - Synchronization ensures the producer doesn't overflow and the consumer doesn't read empty buffers.

2. **Readers-Writers Problem:**
   - Multiple readers can read simultaneously, but writers require exclusive access.
   - Solutions must prevent starvation and ensure fairness.

3. **Dining-Philosophers Problem:**
   - Philosophers share chopsticks; deadlock occurs if each picks up one chopstick and waits.
   - Solutions include resource ordering, limiting concurrent access, or asymmetric picking.

**Approaches to the Critical Section Problem:**

| Approach                | Pros                                               | Cons                                    |
| ----------------------- | -------------------------------------------------- | --------------------------------------- |
| **Peterson's Solution** | No hardware support needed.                        | Limited to two processes; busy waiting. |
| **Hardware Solutions**  | Simple, efficient for small sections.              | Busy waiting; low-level complexity.     |
| **Mutex Locks**         | Easy to use; supported by OS.                      | Busy waiting in spinlocks.              |
| **Semaphores**          | Flexible; can solve various problems.              | Incorrect use may lead to deadlock.     |
| **Monitors**            | Reduces programmer errors; language-level support. | Not available in all languages.         |

---

### 3. Define the following terms:

- **Critical Section:**  
  A segment of code in which a process accesses shared resources. Only one process should execute its critical section at a time.

- **Mutual Exclusion Locks (Mutex):**  
  A synchronization mechanism that ensures only one thread or process can enter a critical section at a time. It provides `lock()` and `unlock()` operations.

- **Semaphores:**  
  A synchronization variable that controls access to shared resources via `wait()` (decrement) and `signal()` (increment) operations. Can be binary (0/1) or counting.

## Task 2

### 4. Describe the characteristics of deadlock and explain how deadlocks can be detected and avoided.

**Characteristics of Deadlock (Necessary Conditions):**

1. **Mutual Exclusion:** Resources are non-sharable.
2. **Hold and Wait:** A process holds resources while waiting for others.
3. **No Preemption:** Resources cannot be forcibly taken away.
4. **Circular Wait:** A cycle exists in the resource-allocation graph.

**Deadlock Detection:**

- **Resource-Allocation Graph (RAG):**  
  If the graph contains a cycle, deadlock may exist (certain if only one instance per resource type).
- **Wait-for Graph:**  
  A simplified version of RAG for single-instance resources.
- **Banker's Algorithm (Detection Version):**  
  Uses matrices (Allocation, Request, Available) to check for safe states.

**Deadlock Avoidance:**

- **Banker's Algorithm:**  
  Requires processes to declare maximum resource needs in advance. The system only grants requests if the resulting state is **safe** (i.e., there exists a sequence where all processes can finish).
- **Resource-Allocation Graph Algorithm:**  
  For single-instance resources, checks if granting a request creates a cycle.

---

### **5. Discuss the main techniques used to recover from deadlocks.**

**Two Main Recovery Techniques:**

1. **Process Termination:**
   - **Abort all deadlocked processes:** Simple but costly.
   - **Abort one process at a time:** Until deadlock is resolved. Selection criteria include priority, execution time, and resources held.

2. **Resource Preemption:**
   - **Select a victim:** Choose a process to preempt resources from based on cost.
   - **Rollback:** Restart the victim from a safe state.
   - **Starvation prevention:** Ensure the same process isn't always chosen as the victim.

---

### **6. Describe the low-level implementation of memory management, including the ideas of page tables and swapping.**

**Memory Management Implementation:**

- **Page Tables:**  
  A data structure used by the MMU (Memory Management Unit) to translate **logical addresses** to **physical addresses**. Each entry maps a page number to a frame number. Can be hierarchical (multi-level) to save space.

- **Swapping:**  
  A process can be temporarily moved out of main memory to disk (backing store) and brought back later. Used when memory is overcommitted.
  - **Roll-out, roll-in:** Used in priority-based scheduling.
  - **Swap time** depends on transfer speed and memory size.

---

### **7. Explain how segmentation and paging work and outline the different memory allocation strategies.**

**Segmentation:**

- Divides memory into **logical segments** (code, data, stack, etc.).
- Each segment has a **base** and **limit**.
- Logical address: `<segment-number, offset>`.
- **External fragmentation** is a problem.

**Paging:**

- Divides memory into fixed-size **frames** and logical memory into **pages** of the same size.
- Uses a **page table** for address translation.
- **Internal fragmentation** can occur (last page may not be fully used).
- Supports **shared pages** (e.g., code segments).

**Memory Allocation Strategies:**

| Strategy         | Description                                          | Pros                            | Cons                                   |
| ---------------- | ---------------------------------------------------- | ------------------------------- | -------------------------------------- |
| **First-Fit**    | Allocate the first hole large enough.                | Fast, simple.                   | External fragmentation.                |
| **Best-Fit**     | Allocate the smallest hole that fits.                | Reduces wasted space.           | Slow; leaves small fragments.          |
| **Worst-Fit**    | Allocate the largest hole.                           | Leaves large leftover holes.    | Poor utilization; slow.                |
| **Buddy System** | Divide memory into power-of-two blocks.              | Reduces external fragmentation. | Internal fragmentation.                |
| **Compaction**   | Move processes to collect free space into one block. | Reduces external fragmentation. | Overhead; requires dynamic relocation. |

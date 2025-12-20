# Student Details

| Field   | Value                    |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20240592                 |
| Section | 1                        |
| Number  | 15                       |

# Operating System Assignment 2

## Task 1

### 1. Process Synchronization: Concept and Purpose

Process synchronization is the coordination of multiple processes or threads to ensure orderly execution and maintain data consistency when accessing shared resources. Its primary purposes are:

- To prevent **race conditions**, where concurrent access to shared data leads to inconsistent results.
- To enforce **mutual exclusion**, ensuring only one process accesses a critical resource at a time.
- To enable **cooperation** among processes through signaling and waiting mechanisms.
- To prevent **deadlocks** and **starvation**.

### 2. Classic Synchronization Problems and Critical Section Solutions

**Classic Synchronization Problems:**

- **Bounded-Buffer Problem**: Producer-consumer scenario with limited buffer space.
- **Readers-Writers Problem**: Multiple readers allowed simultaneously, but writers require exclusive access.
- **Dining-Philosophers Problem**: Resource allocation and deadlock avoidance with shared chopsticks.

**Approaches to Critical Section Problem:**

1. **Software Solutions**: Peterson's algorithm for two processes (uses `turn` and `flag` variables).
2. **Hardware Solutions**: Atomic instructions like `test_and_set()` and `compare_and_swap()`.
3. **OS-Level Solutions**:
   - **Mutex Locks**: Simple binary locks with `acquire()` and `release()` operations (busy waiting).
   - **Semaphores**: Integer-based signaling mechanism with `wait()` (P) and `signal()` (V) operations.
   - **Monitors**: High-level abstraction providing mutual exclusion and condition variables.

**Comparison:**

- Peterson's solution is software-based but limited to two processes.
- Hardware solutions are efficient but architecture-dependent.
- Mutex locks are simple but may cause busy waiting.
- Semaphores are versatile but prone to misuse (deadlock/starvation).
- Monitors provide encapsulation and safety but require language support.

### 3. Key Definitions

- **Critical Section**: A code segment where shared resources are accessed; must be executed atomically.
- **Mutual Exclusion Locks (Mutex)**: A synchronization object allowing only one thread to access a resource at a time.
- **Semaphores**: An integer variable used for signaling between processes; operations are atomic and can be **binary** (0/1) or **counting** (≥0).

## Task 2

### 4. Deadlock: Characteristics, Detection, and Avoidance

**Characteristics (Necessary Conditions):**

1. **Mutual Exclusion**: Resources cannot be shared.
2. **Hold and Wait**: Processes hold resources while waiting for others.
3. **No Preemption**: Resources cannot be forcibly taken.
4. **Circular Wait**: A cycle exists in the resource-wait graph.

**Deadlock Detection:**

- **Single Resource Type**: Use a **wait-for graph**; a cycle indicates deadlock.
- **Multiple Resource Types**: Use the **detection algorithm** with `Available`, `Allocation`, and `Request` matrices (O(m×n²) complexity).

**Deadlock Avoidance**:

- **Banker's Algorithm**: Requires processes to declare maximum resource needs in advance. It checks for **safe states** before allocating resources.
- **Resource-Allocation Graph Algorithm**: For single-instance resources, denies requests that create cycles.

### 5. Deadlock Recovery Techniques

1. **Process Termination**:
   - **Abort all deadlocked processes** (simple but drastic).
   - **Abort one process at a time** until deadlock is resolved (cost-based selection).
2. **Resource Preemption**:
   - **Victim Selection**: Choose a process based on cost, priority, or resource usage.
   - **Rollback**: Restore the preempted process to a safe state and restart.
   - **Starvation Prevention**: Limit how often a process is selected as a victim.

### 6. Low-Level Memory Management

**Page Tables**:

- Map logical addresses to physical frames.
- Stored in main memory; accessed via **Page Table Base Register (PTBR)**.
- **Translation Lookaside Buffers (TLBs)** cache recent translations to speed up access.

**Swapping**:

- Moves processes between main memory and secondary storage (backing store).
- Used when memory is overcommitted; enables **virtual memory**.
- Involves **roll-out/roll-in**; time depends on transfer size and disk speed.

### 7. Segmentation, Paging, and Allocation Strategies

**Segmentation**:

- Divides memory into logical units (e.g., code, data, stack).
- Uses a **segment table** with base and limit registers for address translation.
- Supports protection and sharing but leads to **external fragmentation**.

**Paging**:

- Divides memory into fixed-size **frames**; processes into **pages**.
- Uses a **page table** for mapping; eliminates external fragmentation.
- May cause **internal fragmentation** (last page partially unused).

**Memory Allocation Strategies**:

- **First-Fit**: Allocate the first sufficient hole (fast but may fragment).
- **Best-Fit**: Allocate the smallest sufficient hole (reduces waste but slow).
- **Worst-Fit**: Allocate the largest hole (leaves larger remnants but inefficient).
- **Compaction**: Rearrange memory to combine free spaces (costly).

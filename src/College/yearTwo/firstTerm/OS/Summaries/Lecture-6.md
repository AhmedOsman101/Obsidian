# Lecture 6: Deadlocks

## 1. The Fundamentals of Deadlock

Deadlock is a critical problem in multi-programming environments where multiple processes must compete for a finite set of system resources. If not managed properly, this competition can lead to a situation where a set of processes becomes permanently blocked, potentially bringing the entire system to a halt. Understanding the fundamentals of what a deadlock is and how it occurs is the first step toward mastering this topic.

### 1.1. What is a Deadlock?

A deadlock is a situation where a set of processes is blocked because each process is holding a resource and waiting for another resource that is held by another process in the set. When a process requests a resource that is not available, it enters a waiting state. In a deadlock, this waiting state becomes permanent because the resources a process needs are held by other waiting processes, creating a circular dependency that can never be resolved without intervention.

### 1.2. The Standard Resource Lifecycle

Every process follows a standard sequence of three steps when it utilizes a system resource:

1. **Request:** The process requests the resource. If the request cannot be granted immediately, the requesting process must wait.
2. **Use:** The process operates on the resource.
3. **Release:** The process releases the resource, making it available for other processes.

### 1.3. Illustrative Deadlock Scenarios

Deadlocks can occur in various situations, involving one or more types of resources. The following scenarios illustrate this concept:

- **Scenario 1: Deadlock with a Single Resource Type** Imagine a system with three CD RW drives. Three processes (P1, P2, P3) each hold one of the drives. If P1 then requests a second drive, P2 requests a second drive, and P3 requests a second drive, a deadlock occurs. Each process is waiting for a drive held by one of the other waiting processes, and none can proceed.
- **Scenario 2: Deadlock with Different Resource Types** Consider a system with one printer and one DVD drive. Process P1 holds the DVD drive and requests the printer. Simultaneously, Process P2 holds the printer and requests the DVD drive. Here, P1 cannot proceed until P2 releases the printer, and P2 cannot proceed until P1 releases the DVD drive, resulting in a deadlock.

These deadlock situations can only arise when four specific conditions are met simultaneously in the system.

## 2. The Four Necessary Conditions for Deadlock

For a deadlock to occur, four specific conditions must hold true at the same time. For a deadlock to occur, these four conditions must hold simultaneously. The absence of even one of them is sufficient to prevent a deadlock. Understanding these conditions is foundational because the primary strategies for deadlock prevention and avoidance are designed specifically to invalidate one or more of them.

- **Mutual exclusion:** At least one resource must be held in a non-sharable mode, meaning only one process can use the resource at a time.
- **Hold and wait:** A process must be holding at least one resource while waiting to acquire additional resources that are currently held by other processes.
- **No preemption:** A resource can only be released voluntarily by the process holding it after the process has completed its task.
- **Circular wait:** A set of waiting processes {P0, P1, ..., Pn} must exist such that P0 is waiting for a resource held by P1, P1 is waiting for a resource held by P2, and so on, with Pn waiting for a resource held by P0.

To better analyze a system's state and visualize these conditions, a formal graphical tool is used.

## 3. Visualizing System State: The Resource-Allocation Graph

A Resource-Allocation Graph is a formal system model used to visually represent the relationships between processes and resources. It consists of a set of vertices and a set of directed edges, making it a powerful tool for analyzing the system's current allocation state and identifying potential deadlocks.

### 3.1. Components of the Graph

The graph is composed of two types of vertices and two types of edges:

**Processes (P):** The set of all active processes in the system, {P1, P2, ..., Pn} (typically represented as circles).

**Resource Types (R):** The set of all resource types in the system, {R1, R2, ..., Rm} (typically represented as squares, with dots inside representing each instance).

**Request Edge (**`**Pi -> Rj**`**):** A directed edge from a process to a resource type indicates that the process is currently waiting for an instance of that resource.

**Assignment Edge (**`**Rj -> Pi**`**):** A directed edge from a resource type to a process indicates that an instance of the resource has been allocated to and is currently held by the process.

### 3.2. Interpreting Cycles in the Graph

The presence or absence of cycles in the Resource-Allocation Graph provides critical information about the state of the system. The following rules are used for deadlock detection:

- **No Cycle:** If the graph contains no cycles, then the system is **not** in a deadlocked state.
- **Cycle with Single-Instance Resources:** If the graph contains a cycle and each resource type involved has only one instance, then a **deadlock exists**.
- **Cycle with Multi-Instance Resources:** If the graph contains a cycle and at least one of the resource types involved has multiple instances, then a **deadlock** _**might**_ **exist**. In this case, a cycle is a necessary but not sufficient condition for a deadlock.

Understanding how to identify deadlocks naturally leads to the question of how an operating system can handle them.

## 4. Core Strategies for Handling Deadlocks

An operating system can adopt one of several strategic approaches to manage deadlocks. The choice of strategy involves critical trade-offs between system correctness, performance overhead, and the complexity of implementation.

The primary methods are:

1. **Deadlock Prevention:** Ensure that the system will never enter a deadlock state by imposing restrictions that negate one of the four necessary conditions.
2. **Deadlock Avoidance:** Use advance information about each process's maximum resource needs to dynamically decide if a resource request can be granted without risking a future deadlock.
3. **Deadlock Detection and Recovery:** Allow the system to enter a deadlocked state, use an algorithm to detect that it has happened, and then apply a recovery scheme to resolve it.
4. **Ignore the Problem:** The most common approach used by modern operating systems is to pretend that deadlocks never occur. It is then up to the system administrator or user to handle the problem if the system becomes unresponsive.

We will first explore the most restrictive proactive strategy: deadlock prevention.

## 5. Deadlock Prevention: Negating a Necessary Condition

Deadlock prevention is a proactive strategy that works by imposing restrictions on the system to ensure that at least one of the four necessary conditions for deadlock can never occur. By making a deadlock structurally impossible, the system is guaranteed to remain deadlock-free.

### 5.1. Attacking Mutual Exclusion

This condition is not always possible to negate. For sharable resources like a read-only file, mutual exclusion is not required, and multiple processes can be granted access simultaneously. This technique cannot be universally applied, however, as many critical resources like printers or writeable files are inherently non-sharable by nature.

### 5.2. Attacking Hold and Wait

To prevent this condition, the system must guarantee that whenever a process requests a resource, it does not hold any other resources. This can be achieved through one of two protocols:

1. Require a process to request and be allocated all of its resources before it begins execution.
2. Allow a process to request resources only when it has no resources currently allocated to it.

Both protocols suffer from low resource utilization, as resources may be allocated long before they are needed. Starvation is also possible if a process requires several popular resources that are rarely available at the same time.

### 5.3. Attacking No Preemption

If a process holding some resources requests another resource that cannot be immediately allocated, it must release all resources it is currently holding. These preempted resources are added to the list of resources for which the process is waiting, and the process is only restarted when it can regain all its old resources plus the new ones it requested.

### 5.4. Attacking Circular Wait

To negate the circular wait condition, the system imposes a total ordering on all resource types. It then requires that every process requests resources in an increasing order of enumeration. For example, if the ordering is R1 < R2 < R3, a process can request R1 and then R2, but it cannot request R3 and then R1.

### 5.5. Evaluation of Prevention Strategies

While effective at preventing deadlocks, these methods are often impractical. The strict requirements they impose typically lead to low device utilization and an overall reduction in system throughput, making them too costly for general-purpose systems.

A less restrictive proactive strategy, Deadlock Avoidance, offers an alternative.

## 6. Deadlock Avoidance: Steering Clear of Unsafe States

Deadlock avoidance differs from prevention by being more flexible. Instead of imposing strict rules to make deadlocks impossible, it uses advance information about the maximum number of resources each process might need. With this information, the system can dynamically check whether granting a resource request would lead to an "unsafe state"—a state from which a deadlock _could_ eventually occur. The primary goal is to never enter such a state.

### 6.1. The "Safe State" Concept

A system is in a **safe state** if there exists at least one sequence of execution for all processes that is guaranteed to avoid a deadlock. This "safe sequence" ensures that even if every process requests its maximum allowed resources, there is an order of allocation and completion that allows every process to finish its task.

- **Basic Facts about System States:**
  - If a system is in a safe state -> **NO** deadlocks.
  - If a system is in an unsafe state -> **POSSIBILITY** of deadlock.

Avoidance algorithms ensure that the system will never enter an unsafe state.

### 6.2. Avoidance Algorithm for Single-Instance Resources

For systems where each resource type has only one instance, the **Resource-Allocation Graph Algorithm** is used. This algorithm introduces a new type of edge to the graph:

- **Claim Edge (**`**Pi -> Rj**`**):** A dashed line representing that process `Pi` _may_ request resource `Rj` at some point in the future.

The process works as follows: A process must declare all its maximum resource claims _a priori_. When a process makes an actual request for a resource, the claim edge becomes a request edge. The request is only granted if converting the request edge to an assignment edge does not create a cycle in the resource-allocation graph. When a process releases a resource, the assignment edge reconverts to a claim edge.

### 6.3. Avoidance Algorithm for Multi-Instance Resources: The Banker's Algorithm

For more complex systems with multiple instances of each resource type, the Banker's Algorithm is used. This algorithm requires that each process declare its maximum resource needs in advance.

#### 6.3.1. Required Data Structures

The algorithm relies on several key data structures to track the system's state, where _n_ is the number of processes and _m_ is the number of resource types.

| Data Structure | Description                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------- |
| `Available`    | A vector of length _m_ indicating the number of available instances of each resource type.                        |
| `Max`          | An _n_ x _m_ matrix defining the maximum number of instances of each resource type that each process may request. |
| `Allocation`   | An _n_ x _m_ matrix defining the number of instances of each resource type currently allocated to each process.   |
| `Need`         | An _n_ x _m_ matrix indicating the remaining resource needs of each process. `Need = Max - Allocation`.           |

#### 6.3.2. The Safety Algorithm

This algorithm determines if the current system state is safe.

1. Initialize two vectors: `Work = Available` and `Finish` (a boolean vector of length _n_) to `false` for all processes.
2. Find a process `Pi` such that `Finish[i]` is `false` and its `Need_i <= Work`. If no such process exists, go to step 4.
3. Update the state as if `Pi` has finished: `Work = Work + Allocation_i` and set `Finish[i] = true`. Go back to step 2.
4. If `Finish[i]` is `true` for all processes, the system is in a safe state. Otherwise, it is unsafe.

#### 6.3.3. The Resource-Request Algorithm

This algorithm is run whenever a process `Pi` makes a request `Request_i`.

1. Check if `Request_i <= Need_i`. If not, the process has exceeded its maximum claim, which is an error.
2. Check if `Request_i <= Available`. If not, the process must wait for resources to become available.
3. If both checks pass, the system "pretends" to grant the request by temporarily modifying the state:
   - `Available = Available - Request_i`
   - `Allocation_i = Allocation_i + Request_i`
   - `Need_i = Need_i - Request_i` The system then runs the **Safety Algorithm** on this new state. If the state is safe, the resource allocation is completed. If it is unsafe, the allocation is denied, the original state is restored, and the process must wait.

#### 6.3.4. Walkthrough Example

Consider a snapshot at time T0 with 5 processes (P0-P4) and 3 resource types (A, B, C).

- **Initial State:**

| Process | Allocation (A, B, C) | Max (A, B, C) | Available (A, B, C) |
| ------- | -------------------- | ------------- | ------------------- |
| P0      | 0 1 0                | 7 5 3         | **3 3 2**           |
| P1      | 2 0 0                | 3 2 2         |                     |
| P2      | 3 0 2                | 9 0 2         |                     |
| P3      | 2 1 1                | 2 2 2         |                     |
| P4      | 0 0 2                | 4 3 3         |                     |

- **Derived** `**Need**` **Matrix (**`**Need = Max - Allocation**`**):**

| Process | Need (A, B, C) |
| ------- | -------------- |
| P0      | 7 4 3          |
| P1      | 1 2 2          |
| P2      | 6 0 0          |
| P3      | 0 1 1          |
| P4      | 4 3 1          |

- **Safety Check:** By running the Safety Algorithm, we can confirm the system is in a safe state because the safe sequence `**<P1, P3, P4, P2, P0>**` exists, satisfying the safety criteria.

When proactive strategies are deemed too restrictive, an operating system can instead use a reactive approach.

## 7. Deadlock Detection and Recovery

Unlike prevention or avoidance, this strategy allows the system to enter a deadlocked state. This approach relies on an algorithm that periodically examines the system state to detect whether a deadlock has occurred. If a deadlock is detected, a separate scheme is invoked to recover from it.

### 7.1. Detection for Single-Instance Resources

For systems with single-instance resource types, a **wait-for graph** is maintained.

- **Derivation:** This graph is derived from the resource-allocation graph. The nodes are only the processes. A directed edge `Pi -> Pj` exists if process `Pi` is waiting for a resource that is currently held by process `Pj`.
- **Detection Rule:** The system periodically runs an algorithm to search for a cycle in the wait-for graph. **A cycle in the graph indicates that a deadlock exists.**

### 7.2. Detection for Multiple-Instance Resources

For systems with multiple instances of resources, a detection algorithm is used that employs `Available`, `Allocation`, and a `Request` matrix (which tracks current outstanding requests).

While structurally similar to the Banker's Safety Algorithm, the detection algorithm operates with a different starting assumption and goal. It initializes `Finish[i]` to `false` for any process with a non-zero allocation, assuming they could be part of a deadlock. Its objective is not to find a safe sequence for all processes, but to determine if there is _any_ process `Pi` for which `Finish[i]` remains `false` after checking all possible execution paths. Such a process is confirmed to be deadlocked.

### 7.3. Recovery From Deadlock

Once a deadlock has been detected, the system must break it. There are two primary methods for recovery.

#### 7.3.1. Process Termination

This is the simplest but most drastic method. It involves terminating one or more processes to break the circular wait.

- **Option 1:** Abort all deadlocked processes at once. This is a quick but expensive solution.
- **Option 2:** Abort one process at a time until the deadlock cycle is eliminated. The system must choose a victim based on criteria such as:
  - Priority of the process
  - How long the process has been running
  - Resources the process has already used
  - Resources the process still needs to complete
  - How many other processes will be affected

#### 7.3.2. Resource Preemption

A more fine-grained approach is to forcibly take resources away from one or more deadlocked processes. This method introduces three significant challenges:

1. **Selecting a victim:** The system must decide which process and which resources to preempt, typically based on minimizing cost.
2. **Rollback:** The process from which resources were preempted must be rolled back to a previous safe state so it can be restarted later. This can be complex to implement.
3. **Starvation:** A particular process may be consistently chosen as the victim, preventing it from ever finishing. This can be mitigated by including the number of rollbacks in the cost factor for victim selection.

## 8. Final Summary: Key Concepts for the Exam

This section distills the most critical, high-yield concepts from the lecture. As you prepare for your exam, focus on mastering these points, as they are central to understanding how operating systems handle deadlocks.

- **The Four Conditions:** A deadlock can only occur if **Mutual Exclusion**, **Hold and Wait**, **No Preemption**, and **Circular Wait** hold simultaneously.
- **Prevention vs. Avoidance:** Prevention attacks the problem statically by imposing strict rules that make a deadlock structurally impossible. Avoidance is a more dynamic approach that uses _a priori_ information about resource needs to make intelligent choices at runtime, ensuring the system never enters an unsafe state from which a deadlock _could_ arise.
- **Safe State:** A state is **safe** if there is at least one sequence of process execution that allows all processes to run to completion. An unsafe state is not yet a deadlock, but it creates the possibility of one. Deadlock avoidance ensures the system never enters an unsafe state.
- **Banker's Algorithm:** This is the key **avoidance** algorithm for systems with multiple-instance resources, which relies on the Safety Algorithm's check of `Need_i <= Work` to find a safe sequence.
- **Detection and Recovery:** This is a **reactive** approach that allows deadlocks to happen. It uses a detection algorithm (e.g., searching for cycles in a wait-for graph) to find deadlocks and then resolves them by either **terminating processes** or **preempting resources**.

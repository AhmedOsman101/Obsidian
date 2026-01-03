# Lecture 6: Deadlocks

## 1. Core Concepts

### 1.1. Definition of Deadlock

A deadlock is a situation where a waiting process is never able to change state because the resources it has requested are held by other waiting processes.

### 1.2. System Model & Resource Utilization

In this context, a system consists of a finite number of resource types, such as `R1`, `R2`, ..., `Rm` (e.g., CPU cycles, memory space, I/O devices). Each resource type `Ri` has one or more identical instances, denoted as `W_i_`.

A process utilizes a resource in the following three-step sequence:

1. **Request:** The process requests the resource. If it is not immediately available, the process must wait.
2. **Use:** The process operates on the resource.
3. **Release:** The process releases the resource, making it available to other processes.

---

### 2. Deadlock Characterization

A deadlock situation can only arise if the following four conditions hold simultaneously in a system:

- **Mutual Exclusion:** Only one process at a time can use a resource.
- **Hold and Wait:** A process is holding at least one resource while waiting to acquire additional resources that are currently held by other processes.
- **No Preemption:** A resource can only be released voluntarily by the process holding it after that process has completed its task.
- **Circular Wait:** There exists a set of waiting processes `{P0, P1, ..., Pn}` such that P0 is waiting for a resource held by P1, P1 is waiting for a resource held by P2, ..., Pn-1 is waiting for a resource held by Pn, and Pn is waiting for a resource held by P0.

---

### 3. Resource-Allocation Graphs

A Resource-Allocation Graph provides a visual representation of the state of resources and processes. It is a directed graph defined by a set of vertices (V) and a set of edges (E).

#### 3.1. Graph Components

The vertices (V) are partitioned into two distinct types:

- `P`: The set of all active processes in the system, `{P1, P2, ..., Pn}` (typically represented as circles).
- `R`: The set of all resource types in the system, `{R1, R2, ..., Rm}` (typically represented as squares, with dots inside representing instances).

The directed edges (E) are also of two types:

- **Request Edge:** A directed edge from a process to a resource type, `Pi -> Rj`, signifies that process `Pi` has requested an instance of resource type `Rj` and is currently waiting.
- **Assignment Edge:** A directed edge from a resource type to a process, `Rj -> Pi`, signifies that an instance of resource type `Rj` has been allocated to process `Pi`.

#### 3.2. Interpreting the Graph

The state of the graph can be used to determine if a deadlock exists:

- If the graph contains **no cycles**, then the system is not in a deadlocked state.
- If the graph contains a **cycle**:
  - If there is only **one instance** per resource type involved in the cycle, then a deadlock exists.
  - If there are **several instances** per resource type, a deadlock is possible but not guaranteed.

---

### 4. Methods for Handling Deadlocks

There are four primary strategies for managing deadlocks in an operating system:

- **Ensure the system will never enter a deadlock state.** This can be achieved through two primary approaches:
  - Deadlock Prevention
  - Deadlock Avoidance
- **Allow the system to enter a deadlock state, detect it, and then recover.**
- **Ignore the problem entirely.** This approach assumes that deadlocks will never occur in the system. (Note: This is the strategy used by most operating systems).

---

### 5. Deadlock Prevention

Deadlock prevention works by ensuring that at least one of the four necessary conditions for deadlock can never hold. This is achieved by constraining how resource requests can be made.

#### 5.1. Attacking Mutual Exclusion

This condition is generally not preventable for resources that are inherently non-sharable (e.g., a printer). For sharable resources, such as a read-only file, the mutual exclusion condition is not required, and multiple processes can access the resource simultaneously.

#### 5.2. Attacking Hold and Wait

To prevent this condition, the system must guarantee that whenever a process requests a resource, it does not hold any other resources. This can be implemented in one of two ways:

1. Require a process to request and be allocated all its resources before it begins execution.
2. Allow a process to request resources only when it has no resources currently allocated to it.

This strategy has significant drawbacks, including **low resource utilization** and the possibility of **starvation** for processes that need many popular resources.

#### 5.3. Attacking No Preemption

This strategy involves preempting resources from a waiting process. If a process holding some resources requests another resource that cannot be immediately allocated, all resources it currently holds are preempted (released). The preempted resources are added to the list of resources for which the process is waiting. The process is then restarted only when it can regain its old resources as well as the new ones it is requesting.

#### 5.4. Attacking Circular Wait

To prevent circular waits, the system imposes a total ordering of all resource types. Every process must request resources in an increasing order of enumeration. For example, if the ordering is `R1, R2, R3`, a process can request `R1` and then `R2`, but it cannot request `R1` after it has already been allocated `R2`.

#### 5.5. Disadvantages of Prevention

Deadlock prevention strategies often come with significant performance costs, including:

- Low device utilization.
- Reduced system throughput.

---

### 6. Deadlock Avoidance

#### 6.1. Core Concepts

Deadlock avoidance requires that the system has _a priori_ information about the resource needs of each process. Specifically, each process must declare the maximum number of resources of each type that it may need. With this information, the system can dynamically examine the resource-allocation state to ensure that a circular-wait condition can never occur.

A key concept in avoidance is the **Safe State**. A system is in a safe state if there exists a sequence of all processes `<P1, P2, ..., Pn>` such that for each `Pi`, the resources it may still request can be satisfied by the currently available resources plus the resources held by all processes `Pj` where `j < i`.

- If a system is in a **safe state**, there are no deadlocks.
- If a system is in an **unsafe state**, there is a possibility of deadlock.

Avoidance algorithms ensure that the system will never enter an unsafe state.

#### 6.2. Avoidance Algorithms

Two primary algorithms are used for deadlock avoidance:

- **Resource-Allocation Graph Algorithm:** Used when there is only a single instance of each resource type.
- **Banker's Algorithm:** Used when there are multiple instances of a resource type.

#### 6.3. Resource-Allocation Graph Scheme

This scheme introduces a new type of edge called a **claim edge**, denoted `Pi -> Rj`. A claim edge, represented by a dashed line, indicates that process `Pi` _may_ request resource `Rj` at some time in the future. When the process makes the request, the claim edge becomes a request edge.

The algorithm works as follows: A process's request for a resource is granted only if converting the corresponding request edge to an assignment edge does not create a cycle in the resource-allocation graph. The absence of a cycle ensures the system remains in a safe state. When the process releases the resource, the assignment edge converts back to a claim edge.

---

### 7. The Banker's Algorithm

The Banker's Algorithm is a deadlock avoidance algorithm for systems with multiple instances of each resource type. It relies on several key data structures.

#### 7.1. Data Structures

Let `n` be the number of processes and `m` be the number of resource types.

- **Available:** A vector of length `m` that indicates the number of available instances of each resource type.
- **Max:** An `n x m` matrix that defines the maximum number of instances of each resource that process `Pi` may request.
- **Allocation:** An `n x m` matrix that defines the number of instances of each resource currently allocated to each process.
- **Need:** An `n x m` matrix indicating the remaining resources needed by each process. It is calculated with the formula: `Need[i,j] = Max[i,j] – Allocation[i,j]`

#### 7.2. Core Algorithms

**Safety Algorithm** This algorithm determines if the system is currently in a safe state.

1. Initialize two vectors: `Work = Available` (length `m`) and `Finish` (length `n`) with all values set to `false`.
2. Find a process `Pi` such that `Finish[i]` is `false` and its `Need` vector is less than or equal to the `Work` vector (`Need_i ≤ Work`). If no such process exists, go to step 4.
3. If such a process is found, update `Work = Work + Allocation_i`, set `Finish[i] = true`, and go back to step 2.
4. If `Finish[i]` is `true` for all processes, the system is in a safe state. Otherwise, it is unsafe.

**Resource-Request Algorithm** This algorithm determines if a resource request from a process `Pi` can be safely granted.

1. Check if the request (`Request_i`) is less than or equal to the process's declared need (`Request_i ≤ Need_i`). If not, an error has occurred.
2. Check if the request is less than or equal to the currently available resources (`Request_i ≤ Available`). If not, `Pi` must wait.
3. If both checks pass, the system "pretends" to grant the request by modifying the state as a test:
   - `Available = Available – Request_i`
   - `Allocation_i = Allocation_i + Request_i`
   - `Need_i = Need_i – Request_i` The system then runs the **Safety Algorithm** on this hypothetical new state. If the state is safe, the resource allocation is permanently committed. If the state is unsafe, the changes are rolled back (the original `Available`, `Allocation`, and `Need` values are restored), and process `Pi` must wait.

---

### 8. Deadlock Detection and Recovery

This approach allows the system to enter a deadlocked state, uses an algorithm to detect it, and provides a scheme to recover.

#### 8.1. Deadlock Detection

**For Single Instance Resource Types**

- A **wait-for graph** is maintained where the nodes are processes.
- A directed edge `Pi -> Pj` exists if process `Pi` is waiting for a resource held by process `Pj`.
- A deadlock exists in the system if and only if the wait-for graph contains a cycle.

**For Multiple Instance Resource Types** This detection algorithm uses the following data structures:

- **Available:** A vector of length `m` indicating the number of available instances of each resource type.
- **Allocation:** An `n x m` matrix defining the number of instances of each resource currently allocated to each process.
- **Request:** An `n x m` matrix indicating the current request of each process.

The detection algorithm works as follows:

1. Initialize two vectors: `Work = Available` (length `m`) and `Finish` (length `n`). For `i = 0, ..., n-1`, if `Allocation_i` is a zero vector, set `Finish[i] = true`; otherwise, set `Finish[i] = false`.
2. Find a process `Pi` such that `Finish[i]` is `false` and its current `Request` vector is less than or equal to the `Work` vector (`Request_i ≤ Work`). If no such process exists, go to step 4.
3. If such a process is found, update `Work = Work + Allocation_i`, set `Finish[i] = true`, and go back to step 2.
4. If, after the algorithm completes, `Finish[i]` is `false` for any process `Pi`, then the system is in a deadlocked state, and `Pi` is one of the deadlocked processes.

#### 8.2. Recovery from Deadlock

Once a deadlock is detected, the system can recover using one of two primary methods: **Process Termination** or **Resource Preemption**.

For **Process Termination**, there are two approaches:

- Abort all deadlocked processes.
- Abort one process at a time until the deadlock cycle is eliminated.

For **Resource Preemption**, three issues must be addressed:

- **Selecting a victim:** Choosing which process and which resources to preempt, typically to minimize cost.
- **Rollback:** The preempted process must be returned to some prior safe state and restarted from there.
- **Starvation:** A policy must ensure that the same process is not always picked as the victim, which could prevent it from ever completing its task. This can be handled by including the number of rollbacks in the cost factor.

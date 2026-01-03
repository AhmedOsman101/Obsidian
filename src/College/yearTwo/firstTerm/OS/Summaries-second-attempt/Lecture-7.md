# Lecture 7: Deadlocks Continued

## 1. Deadlock Characterization

In a computing environment, a deadlock occurs when a set of concurrent processes are prevented from completing their tasks because each process is waiting for a resource held by another process in the set. For a deadlock to arise, four conditions must hold simultaneously in the system.

- **Mutual Exclusion:** Only one process at a time can use a resource.
- **Hold and Wait:** A process holding at least one resource is waiting to acquire additional resources held by other processes.
- **No Preemption:** A resource can be released only voluntarily by the process holding it, after that process has completed its task.
- **Circular Wait:** There exists a set of waiting processes `{P0, P1, ..., Pn}` such that P0 is waiting for a resource held by P1, P1 is waiting for a resource held by P2, ..., Pn-1 is waiting for a resource held by Pn, and Pn is waiting for a resource held by P0.

## 2. Resource-Allocation Graphs (RAG)

A Resource-Allocation Graph (RAG) is a formal way to describe the state of resource allocation in a system. It consists of a set of vertices (V) and a set of edges (E). The vertices are partitioned into two distinct sets:

1. **P = {P1, P2, ..., Pn}**: The set of all active processes in the system.
2. **R = {R1, R2, ..., Rm}**: The set of all resource types in the system.

The directed edges in the graph represent the interaction between processes and resources:

- `**request edge**`: A directed edge from a process to a resource type, `Pi -> Rj`, signifies that process `Pi` has requested an instance of resource type `Rj` and is currently waiting for it.
- `**assignment edge**`: A directed edge from a resource type to a process, `Rj -> Pi`, signifies that an instance of resource type `Rj` has been allocated to process `Pi`.

The presence or absence of cycles in a RAG is directly related to the existence of a deadlock in the system.

- If the graph contains **no cycles**, then there is no deadlock in the system.
- If the graph contains a cycle and there is **only one instance per resource type**, then a deadlock exists.
- If the graph contains a cycle and there are **several instances per resource type**, a deadlock _may_ exist, but it is not guaranteed.

## 3. Methods for Handling Deadlocks

There are three primary strategies for handling deadlocks, along with a fourth, more pragmatic approach commonly used in practice.

- **Ensure the system will never enter a deadlock state.** This can be achieved through:
  - Deadlock Prevention
  - Deadlock Avoidance
- **Allow the system to enter a deadlock state, detect it, and then recover.**
- **Ignore the problem entirely.** This approach pretends that deadlocks never occur in the system and is the method used by most operating systems, including UNIX.

## 4. Deadlock Prevention

Deadlock prevention is a set of methods that ensures at least one of the four necessary conditions for deadlock cannot hold. This is achieved by restraining how resource requests can be made.

### 4.1 Attacking Mutual Exclusion

For sharable resources, such as read-only files, the mutual exclusion condition is not required. However, for non-sharable resources, this condition must hold and cannot typically be prevented.

### 4.2 Attacking Hold and Wait

To ensure the "hold and wait" condition never occurs, the system must guarantee that a process requesting a resource does not hold any other resources. This can be implemented in two ways:

1. Require a process to request and be allocated all its resources before it begins execution.
2. Allow a process to request resources only when it has no resources currently allocated to it.

These strategies can lead to low resource utilization and the possibility of starvation, where a process is indefinitely denied necessary resources.

### 4.3 Attacking No Preemption

If a process holding some resources requests another resource that cannot be immediately allocated, then all resources the process is currently holding are preemptively released. These preempted resources are added to the list of resources for which the process is waiting. The process is restarted only when it can regain its old resources as well as the new ones it is requesting.

### 4.4 Attacking Circular Wait

To prevent circular waits, the system imposes a total ordering on all resource types. Every process must request resources in an increasing order of enumeration. For example, if a process needs R1 and R3, it must request R1 before R3.

## 5. Deadlock Avoidance

Deadlock avoidance requires that the system has _a priori_ information about the resources a process will use. Specifically, each process must declare the maximum number of resources of each type that it may need. With this information, the system can dynamically analyze the resource-allocation state to ensure a circular-wait condition can never occur.

### 5.1 Safe State

A system is in a **safe state** if there exists a sequence of all processes, `<P1, P2, ..., Pn>`, such that for each process `Pi`, the resources it can still request can be satisfied by the currently available resources plus the resources held by all preceding processes `Pj` (where `j < i`).

This means that if `Pi`'s needs aren't immediately available, it can wait until all processes `Pj` before it have finished. When a `Pj` finishes, it releases its resources, which can then be used to satisfy the needs of `Pi`.

- If a system is in a **safe state**, no deadlocks can occur.
- If a system is in an **unsafe state**, there is a _possibility_ of a deadlock.

The goal of deadlock avoidance algorithms is to ensure that the system will never enter an unsafe state.

### 5.2 Avoidance Algorithms

There are two main algorithms for deadlock avoidance, depending on the number of instances per resource type.

- **Single instance of a resource type:** Use a resource-allocation graph scheme.
- **Multiple instances of a resource type:** Use the banker's algorithm.

### 5.3 Resource-Allocation Graph Scheme (Single Instance)

In this scheme, a new type of edge is introduced: the **claim edge**.

- A `**Claim edge**` `Pi -> Rj` is represented by a dashed line and indicates that process `Pi` _may_ request resource `Rj` at some time in the future.

When a process requests a resource, its claim edge is converted to a request edge. When the resource is allocated, the request edge becomes an assignment edge. When a process releases a resource, the assignment edge converts back to a claim edge, signifying the process is done with the resource for now but may request it again in the future. The system grants a resource request only if converting the request edge to an assignment edge does not create a cycle in the graph.

### 5.4 Banker's Algorithm (Multiple Instances)

The Banker's Algorithm is applicable to systems with multiple instances of each resource type. It is based on the following principles:

- Each process must declare its maximum resource usage _a priori_.
- When a process requests resources, it may be forced to wait.
- When a process is granted all its requested resources, it must return them in a finite amount of time.

The algorithm relies on several key data structures:

- **Let n =** The number of processes in the system.
- **Let m =** The number of resource types.
- **Available:** A vector of length `m` indicating the number of available instances of each resource type. `Available[j] = k` means there are `k` instances of resource type `Rj`.
- **Max:** An `n x m` matrix defining the maximum demand of each process. `Max[i,j] = k` means process `Pi` may request at most `k` instances of `Rj`.
- **Allocation:** An `n x m` matrix defining the number of resources of each type currently allocated to each process. `Allocation[i,j] = k` means `Pi` is currently allocated `k` instances of `Rj`.
- **Need:** An `n x m` matrix indicating the remaining resource needs of each process. It is calculated with the formula: `Need[i,j] = Max[i,j] – Allocation[i,j]`.

#### 5.4.1 Safety Algorithm

This algorithm determines if the system is currently in a safe state.

1. Initialize two vectors: `Work` of length `m` and `Finish` of length `n`. Set `Work = Available` and `Finish[i] = false` for all processes `i`.
2. Find a process `i` such that both `Finish[i]` is `false` and its resource needs `Needi` are less than or equal to the available work (`Needi ≤ Work`). If no such process exists, proceed to step 4.
3. Update `Work` by adding the resources allocated to process `i` (`Work = Work + Allocationi`), set `Finish[i] = true`, and go back to step 2.
4. If `Finish[i]` is `true` for all `i`, the system is in a safe state.

#### 5.4.2 Resource-Request Algorithm

This algorithm determines if a resource request from a process `Pi` can be safely granted. Let `Requesti` be the request vector for `Pi`.

1. Check if `Requesti ≤ Needi`. If not, the process has exceeded its maximum claim, and an error is raised.
2. Check if `Requesti ≤ Available`. If not, `Pi` must wait, as the resources are not available.
3. If both checks pass, the system pretends to grant the request by modifying the state:
   - `Available = Available – Requesti`
   - `Allocationi = Allocationi + Requesti`
   - `Needi = Needi – Requesti` The system then runs the **Safety Algorithm**. If the resulting state is safe, the resources are allocated to `Pi`. If it is unsafe, `Pi` must wait, and the original resource-allocation state is restored.

## 6. Deadlock Detection

This approach allows the system to enter a deadlock state. It relies on an algorithm to detect the deadlock and a scheme to recover from it.

### 6.1 Single Instance of Each Resource Type

For systems with a single instance of each resource, deadlock detection is managed using a **wait-for graph**.

- **Nodes:** The nodes in the graph are the system's processes.
- **Edges:** A directed edge `Pi -> Pj` exists if process `Pi` is waiting for a resource held by process `Pj`.

A deadlock exists in the system if and only if the wait-for graph contains a cycle. An algorithm to detect a cycle is invoked periodically to check the system's state.

### 6.2 Several Instances of a Resource Type

For systems with multiple instances of a resource, a detection algorithm uses data structures similar to the Banker's Algorithm:

- **Available:** A vector of length `m` indicating the number of available resources of each type.
- **Allocation:** An `n x m` matrix defining the number of resources of each type currently allocated to each process.
- **Request:** An `n x m` matrix indicating the current resource request of each process.

This detection algorithm is a modified version of the Banker's Safety Algorithm. It checks to see if the current resource requests (`Request` matrix) can be satisfied with the available and allocated resources, whereas the Safety Algorithm checks if the future potential needs (`Need` matrix) can be satisfied.

## 7. Recovery from Deadlock

Once a deadlock has been detected, the system must recover. This is typically done through process termination or resource preemption.

### 7.1 Process Termination

This method involves aborting one or more processes to break the circular wait.

- **Abort all deadlocked processes:** This is a brute-force approach that is effective but costly.
- **Abort one process at a time:** The system aborts one process and then re-runs the detection algorithm to see if the deadlock is resolved. This continues until the deadlock cycle is eliminated.

When choosing a process to abort, several factors are considered:

1. The priority of the process.
2. How long the process has been running and how much longer it needs to complete.
3. The resources the process has already used.
4. The resources the process still needs to complete.
5. How many other processes will need to be terminated.
6. Whether the process is interactive or batch.

### 7.2 Resource Preemption

Instead of terminating a process, the system can preempt resources from one process and give them to another to break the deadlock. This introduces three critical issues:

- **Selecting a victim:** A process must be chosen to have its resources preempted, typically based on minimizing cost.
- **Rollback:** The victim process must be rolled back to a previous safe state before the resource was allocated.
- **Starvation:** A particular process may be consistently chosen as the victim, preventing it from ever completing. This can be mitigated by including the number of rollbacks in the cost factor for victim selection.

# Briefing Document: Core Concepts of System Deadlocks

## Executive Summary

This document provides a comprehensive overview of system deadlocks, focusing on their characterization, handling methods, and recovery strategies. A deadlock is a state where a set of concurrent processes are blocked because each process is holding a resource and waiting for another resource acquired by another process in the set. For a deadlock to occur, four necessary conditions must hold simultaneously: **Mutual Exclusion**, **Hold and Wait**, **No Preemption**, and **Circular Wait**.

There are three primary methods for handling deadlocks. **Deadlock Prevention** involves ensuring that at least one of the four necessary conditions cannot hold, for instance, by requiring processes to request all resources at once or enforcing a resource ordering. **Deadlock Avoidance** requires _a priori_ information about the maximum resources a process may need and uses algorithms, such as the **Banker's Algorithm**, to ensure the system never enters an "unsafe" state from which a deadlock could occur. The third approach is to allow deadlocks to happen, use a **Deadlock Detection** algorithm (e.g., searching for cycles in a wait-for graph), and then apply a **Recovery Scheme**. Recovery typically involves either process termination or resource preemption. Most general-purpose operating systems, including UNIX, opt to ignore the problem, assuming deadlocks are sufficiently rare.

## Thematic Breakdown

### 1. Deadlock Characterization

A deadlock situation can arise if and only if the following four conditions hold simultaneously in a system. A useful mnemonic to remember these is **"No CHeW"**: **No** Preemption, **C**ircular Wait, **H**old and Wait, Mutual **e**xclusion (**W**).

- **Mutual Exclusion:** At least one resource must be held in a non-sharable mode. This means only one process at a time can use the resource. If another process requests that resource, it must be delayed until the resource has been released.
- **Hold and Wait:** A process must be holding at least one resource while waiting to acquire additional resources that are currently being held by other processes.
- **No Preemption:** A resource can only be released voluntarily by the process holding it after that process has completed its task. Resources cannot be forcibly taken away from a process.
- **Circular Wait:** A set of waiting processes {P₀, P₁, …, Pₙ} must exist such that P₀ is waiting for a resource held by P₁, P₁ is waiting for a resource held by P₂, …, Pₙ₋₁ is waiting for a resource held by Pₙ, and Pₙ is waiting for a resource held by P₀.

#### System Model Context

- A system consists of various **resource types** (e.g., CPU cycles, memory space, I/O devices), denoted _R₁, R₂, ..., Rₘ_.
- Each resource type _Rᵢ_ has a certain number of identical **instances**, _Wᵢ_.
- Processes utilize resources in a three-step sequence: **request**, **use**, and **release**.

### 2. Visualizing Deadlocks: Resource-Allocation Graphs

A Resource-Allocation Graph is a directed graph used to describe the state of resource allocation. It consists of a set of vertices V and a set of edges E.

- **Vertices (V):** Partitioned into two types:
  - _P = {P₁, P₂, …, Pₙ}_, the set of all active processes.
  - _R = {R₁, R₂, …, Rₘ}_, the set of all resource types.
- **Edges (E):**
  - **Request Edge:** A directed edge from a process to a resource type (_Pᵢ -> Rⱼ_) signifies that process _Pᵢ_ has requested an instance of _Rⱼ_ and is currently waiting.
  - **Assignment Edge:** A directed edge from a resource type to a process (_Rⱼ -> Pᵢ_) signifies that an instance of _Rⱼ_ has been allocated to process _Pᵢ_.

#### Interpreting the Graph

The state of the graph determines the presence or possibility of a deadlock.

- **No Cycles:** If the graph contains no cycles, then there is **no deadlock** in the system.
- **Contains a Cycle:**
  - If each resource type has exactly **one instance**, a cycle **implies a deadlock** has occurred.
  - If resource types have **several instances**, a cycle indicates the **possibility of a deadlock**, but does not guarantee it. A deadlock may not exist if a process in the cycle can obtain another instance of the requested resource type from a process not in the cycle.

### 3. Methods for Handling Deadlocks

There are three fundamental strategies for dealing with deadlocks, plus a fourth pragmatic approach.

| Strategy                 | Description                                                                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Deadlock Prevention**  | Ensure the system never enters a deadlock state by negating one of the four necessary conditions.                                                        |
| **Deadlock Avoidance**   | Use additional (_a priori_) information to decide whether granting a resource request is safe. The system avoids states that _could_ lead to a deadlock. |
| **Detection & Recovery** | Allow the system to enter a deadlock state, then run an algorithm to detect it and a scheme to recover from it.                                          |
| **Ignoring the Problem** | Pretend that deadlocks never occur. This is the most common approach, used by systems like UNIX.                                                         |

### 4. Deadlock Prevention

This proactive method involves restraining how requests can be made to ensure that at least one of the four necessary conditions for deadlock is never met.

- **Negating Mutual Exclusion:** Not always possible, as some resources are inherently non-sharable. However, for sharable resources like read-only files, this condition is not required.
- **Negating Hold and Wait:**
  - **Strategy 1:** Require a process to request and be allocated _all_ its resources before it begins execution.
  - **Strategy 2:** Allow a process to request resources only when it has none.
  - _Drawbacks:_ Leads to low resource utilization and the possibility of starvation for processes needing popular resources.
- **Negating No Preemption:**
  - If a process holding resources requests another resource that cannot be immediately granted, it must release all resources it is currently holding.
  - These preempted resources are added to the list of resources the process is waiting for.
  - The process is restarted only when it can regain its old resources plus the new ones it requested.
- **Negating Circular Wait:**
  - Impose a total ordering on all resource types.
  - Require that each process requests resources in an increasing order of enumeration. For example, if the order is F(Tape Drive) = 1, F(Disk Drive) = 5, F(Printer) = 12, a process can request a disk drive and then a printer, but not a tape drive after acquiring a disk drive.

### 5. Deadlock Avoidance

This method requires the system to have additional _a priori_ information about processes. The simplest model requires each process to declare the **maximum number of resources** of each type that it may need. The system then uses a deadlock-avoidance algorithm to dynamically check the resource-allocation state to ensure a circular-wait condition can never occur.

#### Safe State

A central concept in deadlock avoidance is the **safe state**.

- **Definition:** A state is safe if the system can allocate resources to each process (up to its maximum) in some order and still avoid a deadlock. Formally, a system is in a safe state if there exists a sequence of all processes `<P₁, P₂, …, Pₙ>` such that for each _Pᵢ_, the resources that _Pᵢ_ can still request can be satisfied by the currently available resources plus the resources held by all _Pⱼ_ where _j < i_.
- **Key Facts:**
  - If a system is in a **safe state**, there are **no deadlocks**.
  - If a system is in an **unsafe state**, there is a **possibility of deadlock**.
  - Deadlock avoidance ensures that a system will **never enter an unsafe state**.
  - As described by the provided diagram, the set of all deadlocked states is a subset of the unsafe states.

#### Avoidance Algorithms

1. **Resource-Allocation Graph Scheme (for single-instance resources):**
   - Introduces a new edge type: the **claim edge** (_Pᵢ -> Rⱼ_), represented by a dashed line.
   - A claim edge indicates that process _Pᵢ_ _may_ request resource _Rⱼ_ in the future. All claims must be declared _a priori_.
   - When a request is made, the claim edge is converted to a **request edge**.
   - When the resource is allocated, the request edge becomes an **assignment edge**.
   - When the resource is released, the assignment edge reverts to a **claim edge**.
   - The algorithm grants a resource request only if converting the request edge to an assignment edge does not create a cycle in the graph.
2. **Banker's Algorithm (for multiple-instance resources):**
   - Requires each process to declare its maximum resource usage _a priori_.
   - When a process requests resources, the system checks if granting the request would leave the system in a safe state. If not, the process must wait.
   - **Data Structures (n=processes, m=resource types):**
     - `Available`: A vector of length _m_. `Available[j] = k` means _k_ instances of resource _Rⱼ_ are available.
     - `Max`: An _n x m_ matrix. `Max[i,j] = k` means process _Pᵢ_ may request at most _k_ instances of _Rⱼ_.
     - `Allocation`: An _n x m_ matrix. `Allocation[i,j] = k` means _Pᵢ_ is currently allocated _k_ instances of _Rⱼ_.
     - `Need`: An _n x m_ matrix. `Need[i,j] = k` means _Pᵢ_ may still need _k_ more instances of _Rⱼ_. Calculated as `Need[i,j] = Max[i,j] - Allocation[i,j]`.
   - **Safety Algorithm:** Determines if the current state is safe by finding a sequence of processes that can finish. It simulates the completion of processes, checking if a process's `Need` can be satisfied by the available `Work` vector. If it can, the process is assumed to finish, its allocated resources are added to `Work`, and the algorithm continues. If all processes can finish, the state is safe.
   - **Resource-Request Algorithm:** When _Pᵢ_ requests resources (`Requestᵢ`), the system performs these checks:
     1. Is `Requestᵢ ≤ Needᵢ`? (If not, error).
     2. Is `Requestᵢ ≤ Available`? (If not, _Pᵢ_ must wait).
     3. If both are true, the system _pretends_ to grant the request by updating `Available`, `Allocationᵢ`, and `Needᵢ`. It then runs the **Safety Algorithm**. If the resulting state is safe, the request is granted. If unsafe, the state is reverted, and _Pᵢ_ must wait.

### 6. Deadlock Detection and Recovery

This approach allows the system to enter a deadlock state and provides mechanisms to detect and resolve it.

#### Detection Algorithms

1. **Single Instance of Each Resource Type:**
   - A **wait-for graph** is maintained, where nodes are processes. An edge _Pᵢ -> Pⱼ_ exists if _Pᵢ_ is waiting for a resource held by _Pⱼ_.
   - The system periodically invokes an algorithm to search for a cycle in this graph.
   - If a cycle exists, a deadlock exists. The detection algorithm has a complexity of _O(n²)_, where _n_ is the number of processes.
2. **Several Instances of a Resource Type:**
   - This algorithm uses data structures similar to the Banker's Algorithm: `Available`, `Allocation`, and `Request` (representing current requests).
   - It does not require _a priori_ information about maximum claims.
   - The algorithm works similarly to the Safety Algorithm, checking if there is an order in which all processes can finish. If not, the system is deadlocked, and the processes that cannot finish are part of the deadlock.

_Usage:_ The detection algorithm can be invoked whenever a request is denied, on a periodic basis, or when CPU utilization drops, indicating that processes may be blocked.

#### Recovery from Deadlock

Once a deadlock is detected, the system must recover.

1. **Process Termination:**
   - **Abort all deadlocked processes:** A blunt but effective approach that breaks the cycle quickly.
   - **Abort one process at a time:** The deadlock cycle is broken by terminating one process, and the detection algorithm is re-run. This is repeated until the deadlock is resolved. The choice of which process to abort (the "victim") can be based on:
     - Priority of the process.
     - How long the process has run and how much longer it needs.
     - Resources the process has used.
     - Resources the process still needs.
     - How many other processes will need to be terminated.
     - Whether the process is interactive or batch.
2. **Resource Preemption:**
   - **Select a victim:** Choose a process and a resource to preempt based on minimizing cost.
   - **Rollback:** The victim process is rolled back to a previous safe state before the resource was allocated. It is then restarted from that state.
   - **Starvation:** A significant issue where the same process is repeatedly chosen as the victim and never completes. This can be mitigated by including the number of rollbacks in the cost factor for selecting a victim.

## Quick Review Checklist

- **Four Necessary Conditions for Deadlock:** Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait (**"No CHeW"**).
- **Resource-Allocation Graph:** A cycle implies deadlock _only if_ all resources have a single instance. With multiple instances, a cycle means a _possibility_ of deadlock.
- **Prevention vs. Avoidance:** Prevention structurally negates one of the four conditions (e.g., resource ordering). Avoidance uses _a priori_ information (max needs) to steer around unsafe states.
- **Safe State:** A state from which there is at least one sequence of execution that allows all processes to complete without deadlocking. An unsafe state is not necessarily a deadlocked state, but a deadlock can arise from it.
- **Claim Edge:** A dashed line in a resource-allocation graph used for avoidance, indicating a process _may_ request a resource in the future.
- **Banker's Algorithm:** The key avoidance algorithm for multi-instance resources. It checks if granting a request keeps the system in a safe state.
- **Wait-for Graph:** Used for deadlock detection with single-instance resources. Nodes are processes; an edge _Pᵢ -> Pⱼ_ means _Pᵢ_ is waiting for _Pⱼ_. A cycle equals a deadlock.
- **Two Recovery Methods:** Process Termination (aborting processes) and Resource Preemption (taking resources away and rolling back). Both require selecting a "victim".

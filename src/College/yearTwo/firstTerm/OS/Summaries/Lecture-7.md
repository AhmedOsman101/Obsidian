# Lecture 7: Deadlocks Continued

## 1. The Core Concepts of Deadlocks

### 1.1. The System Model

To understand how deadlocks occur, we must first establish a model for how processes interact with system resources. This model provides a foundational context for the interactions that can lead to a deadlock state. A system is composed of a finite number of resources that are distributed among various competing processes.

The key components of this system model are:

- **Resources:** These are components required by processes to perform their tasks, such as CPU cycles, memory space, or I/O devices. Resources are categorized into _resource types_ (e.g., `R1`, `R2`). Each resource type, `Ri`, has a certain number of identical _instances_, `Wi`.
- **Process Utilization:** A process must follow a specific sequence to use a resource. This three-step process is:
  1. **Request:** The process requests the resource. If the request cannot be granted immediately, the process must wait.
  2. **Use:** The process can operate on the resource.
  3. **Release:** The process releases the resource, making it available for other processes.

This simple model of resource requests and releases sets the stage for the specific conditions that must arise for a deadlock to occur.

### 1.2. The Four Necessary Conditions for Deadlock

A deadlock situation can only arise if four specific conditions hold simultaneously within a system. If any one of these conditions is not met, a deadlock cannot occur. Understanding these four characteristics is the first step toward managing them.

1. **Mutual Exclusion** This condition states that at least one resource must be non-sharable, meaning only one process can use it at a time. If another process requests that resource, it must wait until the resource has been released.
2. **Hold and Wait** This occurs when a process is holding at least one resource while simultaneously waiting to acquire additional resources that are currently being held by other processes.
3. **No Preemption** This means that a resource cannot be forcibly taken away from the process holding it. A resource can only be released voluntarily by the process after it has completed its task.
4. **Circular Wait** This condition describes a situation where a set of waiting processes, `{P0, P1, ..., Pn}`, forms a circular chain. `P0` is waiting for a resource held by `P1`, `P1` is waiting for a resource held by `P2`, and so on, until `Pn`, which is waiting for a resource held by `P0`.

While the four conditions tell us _what_ a deadlock is, the resource-allocation graph gives us a way to _see_ it in a running system.

---

## 2. Visualizing System State: The Resource-Allocation Graph

A Resource-Allocation Graph is a directed graph that provides a visual representation of the state of resource allocation in a system. It is a powerful tool for modeling the relationships between processes and resources, which helps in identifying the conditions that could lead to a deadlock.

The graph consists of a set of vertices (V) and a set of edges (E), which are defined as follows:

- **Vertices (V):** The vertices are partitioned into two distinct types of nodes:
  - **Processes (**`**P**`**):** The set of all active processes in the system, such as `{P1, P2, ..., Pn}`.
  - **Resource Types (**`**R**`**):** The set of all resource types in the system, such as `{R1, R2, ..., Rm}`.
- **Edges (E):** The graph uses two types of directed edges to represent interactions:
  - **Request Edge:** A directed edge from a process to a resource type (`Pi -> Rj`) signifies that process `Pi` **is requesting** an instance of resource `Rj` and is currently waiting for it.
  - **Assignment Edge:** A directed edge from a resource type to a process (`Rj -> Pi`) signifies that an instance of resource `Rj` has been allocated to, and **is being held by**, process `Pi`.

### Relationship Between Graph Cycles and Deadlocks

By analyzing the structure of the resource-allocation graph, we can draw important conclusions about the presence of deadlocks:

- If the graph contains **no cycles**, then there is **no deadlock** in the system.
- If the graph contains a **cycle**, then a deadlock _might_ exist. The outcome depends on the number of instances per resource type:
  - If there is only **one instance** per resource type, a cycle _guarantees_ a deadlock.
  - If there are **several instances** per resource type, a cycle only indicates the _possibility_ of a deadlock.

Visualizing system states helps us understand deadlocks, but an operating system needs concrete strategies for handling them when they arise.

---

## 3. Strategies for Handling Deadlocks

An operating system can adopt several different approaches for dealing with deadlocks, ranging from proactive measures that prevent them entirely to reactive schemes that resolve them after they occur.

The three primary methods for handling deadlocks are:

- **Deadlock Prevention or Avoidance:** Proactively ensure that the system will never enter a deadlock state. Prevention makes deadlocks structurally impossible, while avoidance uses advance information to steer the system away from potentially unsafe states.
- **Detection and Recovery:** Allow the system to enter a deadlock state, use an algorithm to detect that it has occurred, and then apply a recovery scheme to resolve it.
- **Ignoring the Problem:** This is the most common approach, used by most operating systems including UNIX. The system simply pretends that deadlocks never occur, leaving it to the programmer or administrator to handle any that arise.

We will now explore the first of these strategies in more detail.

### 3.1. Deadlock Prevention

The fundamental goal of deadlock prevention is to ensure that at least one of the four necessary conditions for deadlock can never hold. The core philosophy is to **restrain the ways requests can be made**, which makes the occurrence of a deadlock structurally impossible.

#### Mutual Exclusion

For resources that are inherently non-sharable (like a printer), the mutual exclusion condition must hold. However, for sharable resources (like a read-only file), this condition is not required, and multiple processes can access the resource concurrently without issue. Therefore, prevention is aimed at non-sharable resources and is generally not something that can be eliminated.

#### Hold and Wait

To prevent this condition, the system must guarantee that whenever a process requests a resource, it does not currently hold any other resources. This can be achieved by requiring a process to request all its resources before it begins execution, or by only allowing a process to request resources when it has none allocated to it. The primary downsides of this approach are potentially **low resource utilization** and the possibility of **starvation**, where a process never gets all the resources it needs.

#### No Preemption

This condition can be prevented with the following protocol: if a process is holding some resources and requests another resource that cannot be immediately allocated, it must release all resources it is currently holding. These preempted resources are added to the list of resources the process is waiting for. The process will only be restarted when it can regain its old resources as well as the new ones it is requesting.

#### Circular Wait

To prevent circular waits, the system imposes a total ordering on all resource types. Every process must then request resources in an increasing order of enumeration. For example, if the ordering is `R1 < R2 < R3`, a process can request `R1` and then `R2`, but it cannot request `R1` after it has already been allocated `R2`.

While effective, prevention can be overly restrictive. Deadlock avoidance offers a more flexible approach.

### 3.2. Deadlock Avoidance

Deadlock avoidance requires that the operating system has access to _a priori_ information about the resources a process will need. Specifically, each process must declare the maximum number of resources of each type that it may need for its entire execution. With this information, the deadlock-avoidance algorithm can dynamically examine the resource-allocation state to ensure that a circular-wait condition can never occur.

#### Safe State

The core concept in deadlock avoidance is the **safe state**. A system is in a safe state if there exists a sequence of all processes `<P1, P2, ..., Pn>` such that for each process `Pi`, the resources it can still request can be satisfied by the currently available resources plus the resources held by all processes `Pj` that come before it in the sequence (`j < i`). If a process's needs cannot be immediately met, it can wait until earlier processes have finished and released their resources.

#### Relationship Between System States

The relationship between safe, unsafe, and deadlock states is critical:

- A **safe state** will never lead to a deadlock.
- An **unsafe state** creates the _possibility_ of a deadlock. It does not guarantee one, but the system cannot ensure that all processes will be able to finish.
- **Avoidance** is the practice of ensuring that a system will never enter an unsafe state. When a process requests a resource, the system must decide if granting the request immediately will leave the system in a safe state.

#### Avoidance Algorithms

Two primary algorithms are used for deadlock avoidance:

- **Resource-Allocation Graph Scheme:** This is used when resource types have only a **single instance**. It introduces a new type of edge called a **claim edge** (`Pi -> Rj`), represented by a dashed line, which indicates that a process `Pi` _may_ request resource `Rj` at some point. The edge transitions through a lifecycle:
  1. When a process `Pi` requests resource `Rj`, the claim edge `Pi -> Rj` is converted to a **request edge**.
  2. When `Rj` is allocated to `Pi`, the request edge becomes an **assignment edge**.
  3. When `Pi` releases the resource, the assignment edge converts back to a **claim edge**. The avoidance algorithm's power comes from only granting a request if converting the request edge to an assignment edge will not create a cycle in the graph. This check is performed _before_ allocating the resource.
- **Banker's Algorithm:** This is used when resource types have **multiple instances**. The algorithm manages several data structures (`Available`, `Max`, `Allocation`, `Need`) to track the state of the system. Its purpose is to check whether granting a resource request will leave the system in a safe state. If the resulting state is safe, the resources are allocated; otherwise, the process must wait.

If a system does not use prevention or avoidance, it must be prepared to detect and recover from deadlocks.

### 3.3. Deadlock Detection and Recovery

This strategy allows a system to enter a deadlock state. It relies on a detection algorithm that runs periodically to check for deadlocks and a recovery scheme to resolve them once found.

#### Deadlock Detection Process

- **For Single Instance Resources:** Detection is accomplished using a **wait-for graph**. In this graph, the nodes are processes. A directed edge `Pi -> Pj` exists if process `Pi` is waiting for a resource that process `Pj` is currently holding. A deadlock exists if and only if there is a cycle in this wait-for graph.
- **For Multiple Instance Resources:** A detection algorithm is used that is similar to the Banker's Algorithm. It employs data structures to track `Available` resources, current `Allocation`, and process `Request`s. The algorithm checks if there is a sequence of processes that can finish with the available resources. If no such safe sequence can be found, the system is in a deadlock state.

#### Recovery from Deadlock

Once a deadlock has been detected, the system must recover. There are two primary methods for this:

- **Process Termination:** This is the simplest but most drastic approach.
  - **Abort all deadlocked processes:** This quickly breaks the deadlock cycle but discards a significant amount of computation.
  - **Abort one process at a time:** The system terminates one process and then re-runs the detection algorithm to see if the deadlock is resolved. The choice of which process to abort can be based on several criteria:
    1. Priority of the process
    2. How long the process has computed, and how much longer to completion
    3. Resources the process has used
    4. Resources the process needs to complete
    5. How many processes will need to be terminated
    6. Is the process interactive or batch?
- **Resource Preemption:** This involves forcibly taking a resource from one process and giving it to another. This approach raises three key issues that must be addressed:
  1. **Selecting a victim:** Deciding which process and which resources to preempt, typically based on minimizing cost.
  2. **Rollback:** The process that loses its resource must be rolled back to a previous safe state and restarted from there.
  3. **Starvation:** It is possible that the same process is always chosen as the victim and never completes its task. This can be prevented by including the number of rollbacks in the cost factor for selecting a victim.

---

## 4. Key Takeaways for the Exam

Understanding the characterization of deadlocks and the differences between the major handling strategies is essential. Focus on the core principles that define when a deadlock can occur and the philosophy behind each method for managing it.

For a quick review, remember these critical concepts:

- **The Four Conditions:** A deadlock can only occur if **Mutual Exclusion**, **Hold and Wait**, **No Preemption**, and **Circular Wait** happen simultaneously. Breaking any one of these prevents a deadlock.
- **Prevention vs. Avoidance:** **Prevention** is a static approach that makes deadlocks structurally impossible by negating one of the four conditions. **Avoidance** is a dynamic approach that uses future knowledge (maximum resource claims) to navigate around unsafe states.
- **Safe State:** A state is **safe** if there is at least one execution sequence where all processes can complete. An unsafe state does not guarantee a deadlock, but it creates the possibility of one. Deadlock avoidance ensures the system never enters an unsafe state.
- **Handling Strategies:** Know the fundamental differences between the three core strategies: **Prevention** (restrain requests), **Avoidance** (use `a priori` information to check for safety), and **Detection/Recovery** (allow deadlocks, then fix them).

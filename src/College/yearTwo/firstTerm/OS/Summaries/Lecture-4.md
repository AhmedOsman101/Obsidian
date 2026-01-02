# Lecture 4: CPU Scheduling

## 1. Fundamentals of CPU Scheduling

CPU scheduling is a fundamental concept in multiprogrammed operating systems. Its primary role is to determine which process gets to use the central processing unit (CPU) at any given time. In a system where multiple processes compete for CPU resources, scheduling is the essential mechanism that manages execution order to optimize overall system performance and efficiency. Without it, the CPU could not be effectively switched among processes, which is the basis of modern multitasking.

A process's execution is characterized by an alternating cycle of two distinct states, or "bursts":

- **CPU Burst:** This is the phase where the process is actively executing instructions on the CPU.
- **I/O Burst:** This is the phase where the process is waiting for an I/O operation to complete, such as reading from a disk or receiving data from a network.

The responsibility of selecting the next process to run falls to the **Short-Term Scheduler**. This component of the operating system examines the processes residing in the ready queue and allocates the CPU to one of them based on a specific scheduling algorithm.

CPU scheduling decisions are triggered by one of four specific events in a process's lifecycle. These events are critical as they determine whether the scheduling decision is a forced choice (non-preemptive) or one that allows for interruption (preemptive).

- **Non-Preemptive Triggers (No choice):**
  1. When a process switches from a **running** state to a **waiting** state (e.g., waiting for I/O).
  2. When a process **terminates**.
- **Preemptive Triggers (A choice exists):** 2. When a process switches from a **running** state to a **ready** state (e.g., due to an interrupt). 3. When a process switches from a **waiting** state to a **ready** state (e.g., I/O completion).

These trigger points lead to two fundamental approaches to scheduling: non-preemptive and preemptive scheduling.

## 2. Preemptive vs. Non-Preemptive Scheduling

The choice between preemptive and non-preemptive scheduling represents a critical design decision in an operating system, fundamentally affecting system responsiveness and implementation complexity. This distinction centers on whether a running process can be forcibly interrupted by the operating system.

### Preemptive Scheduling

In preemptive scheduling, the operating system can interrupt a process that is currently running and reallocate the CPU to a different process. This action, known as preemption, is typically triggered to serve a higher-priority process or to ensure fair distribution of CPU time among all processes. This model is more flexible and is crucial for providing good responsiveness in interactive systems, but it introduces complexities, especially when data is shared among processes or when an interrupt occurs during critical kernel activities.

### Non-Preemptive Scheduling

In non-preemptive scheduling, once a process is allocated the CPU, it retains control until it voluntarily releases it. A process gives up the CPU only when it either terminates or switches to a waiting state (for instance, to perform an I/O operation). This approach is simpler to implement but can lead to situations where short processes are stuck waiting behind a single long process.

### Comparison of Scheduling Types

| Aspect              | Non-Preemptive                                      | Preemptive                                         |
| ------------------- | --------------------------------------------------- | -------------------------------------------------- |
| **CPU Allocation**  | Process keeps CPU until completion or I/O wait.     | CPU assigned for a limited time.                   |
| **Interrupt**       | Process runs until it voluntarily releases the CPU. | Can interrupt a process at any time.               |
| **Overhead**        | Low (No overhead of switching mid-execution).       | High (due to context switching).                   |
| **Starvation**      | Possible if long jobs block short ones.             | Possible if high-priority tasks frequently arrive. |
| **Synchronization** | Easier.                                             | Complex with shared data and kernel activities.    |
| **Flexibility**     | None; cannot interrupt the current task.            | Flexible; can prioritize urgent processes.         |
| **CPU Utilization** | Lower.                                              | Higher.                                            |
| **Waiting Time**    | Higher.                                             | Lower.                                             |
| **Response Time**   | Slower.                                             | Faster, but risk of race conditions.               |
| **Examples**        | FCFS, Shortest Job First                            | Round Robin, Shortest Remaining Time First         |

### The Dispatcher and Dispatch Latency

Regardless of the scheduling type, the **Dispatcher** is the module that gives control of the CPU to the process selected by the short-term scheduler. This involves three key steps:

1. Performing a context switch.
2. Switching the system from kernel mode to user mode.
3. Jumping to the proper location in the user program to restart its execution.

The time it takes for the dispatcher to stop one process and start another is known as **Dispatch Latency**. Minimizing this latency is critical for overall system performance, especially in preemptive systems with frequent context switches.

Understanding these scheduling types provides the foundation for evaluating their performance using a set of standardized criteria.

## 3. Performance Criteria and Metrics

To compare different CPU scheduling algorithms effectively, a set of established performance criteria is used. These metrics provide a quantitative way to measure how well an algorithm meets its objectives, whether that is maximizing resource usage or minimizing wait times for users.

The five key scheduling criteria are:

- **CPU Utilization:** This metric measures the percentage of time the CPU is busy executing processes. The goal is to **Maximize** CPU utilization.
- **Throughput:** This is the number of processes completed per unit of time. The goal is to **Maximize** throughput.
- **Turnaround Time:** This is the total time a process takes from its submission to its completion. The goal is to **Minimize** turnaround time.
- **Waiting Time:** This is the total amount of time a process spends waiting in the ready queue. The goal is to **Minimize** waiting time.
- **Response Time:** This is the time from when a request is submitted until the first response is produced (not the final output). This is particularly important for interactive systems. The goal is to **Minimize** response time.

### Key Performance Formulas

To calculate these metrics, the following standard formulas are used:

- **Turnaround Time** = Completion Time − Arrival Time
- **Waiting Time** = Turnaround Time − Burst Time
- **Throughput** = Total Processes / Total Completion Time

These criteria and formulas provide the tools needed to analyze the specific algorithms designed to optimize them.

## 4. Core Scheduling Algorithms

Several core scheduling algorithms have been developed, each offering a different strategy for managing the ready queue. These algorithms come with unique performance trade-offs regarding efficiency, fairness, and complexity.

### First-Come, First-Served (FCFS)

#### Concept

The First-Come, First-Served (FCFS) algorithm is the simplest scheduling policy. As its name implies, the process that requests the CPU first is allocated the CPU first. This is managed with a straightforward First-In, First-Out (FIFO) queue. When a process enters the ready queue, its Process Control Block (PCB) is linked to the tail of the queue.

#### The Convoy Effect

A significant drawback of FCFS is the **convoy effect**, where short processes get stuck waiting behind a long-running process, leading to high average waiting times.

- **Example 1 (Poor Order):**
  - Processes arrive in the order: P1 (Burst: 24), P2 (Burst: 3), P3 (Burst: 3).
  - Waiting times are: P1=0, P2=24, P3=27.
  - The average waiting time is (0 + 24 + 27) / 3 = **17**.
- **Example 2 (Improved Order):**
  - Processes arrive in the order: P2 (Burst: 3), P3 (Burst: 3), P1 (Burst: 24).
  - Waiting times are: P2=0, P3=3, P1=6.
  - The average waiting time is (0 + 3 + 6) / 3 = **3**.

#### Advantages and Disadvantages

| Advantages                                     | Disadvantages                                  |
| ---------------------------------------------- | ---------------------------------------------- |
| Easy to understand and implement.              | High average waiting time for short processes. |
| Fair in the sense that it prevents starvation. | Poor CPU and device utilization.               |
|                                                | It is troublesome for time-sharing systems.    |

### Shortest Job First (SJF)

#### Concept

The Shortest Job First (SJF) algorithm associates each process with the length of its next CPU burst. When the CPU is free, it is allocated to the process with the shortest predicted burst time. SJF is considered **optimal** because it provides the minimum possible average waiting time for a given set of processes.

#### The Challenge of Prediction

The main difficulty with SJF is predicting the length of the next CPU burst. This is often done using exponential averaging of the process's previous burst times, calculated with the formula:

`τ_n+1 = α*t_n + (1−α)*τ_n`

Here, `t_n` is the actual length of the nth burst, `τ_n` is the predicted length of the nth burst, and `α` is a weighting factor.

#### Disadvantages and Starvation

The primary disadvantage of SJF is the risk of **starvation**. If a steady stream of short processes arrives, a long process may be indefinitely postponed and never get to execute.

#### Shortest Remaining Time First (SRTF)

Shortest Remaining Time First (SRTF) is the **preemptive** version of SJF. In SRTF, if a new process arrives with a CPU burst shorter than the remaining time of the currently executing process, the scheduler preempts the current process and allocates the CPU to the new, shorter process. While SRTF can achieve an even lower average waiting time, its primary disadvantages are the risk of starvation for longer jobs and the high overhead from excessive context switches.

### Priority Scheduling

#### Concept

Priority Scheduling assigns a priority number to each process. This algorithm can be either **preemptive** or **non-preemptive**. The CPU is allocated to the process with the highest priority (conventionally, the lowest integer represents the highest priority).

Notably, **SJF is a special case of priority scheduling**, where `priority = 1 / (next CPU burst time)`.

#### Issues and Solutions

The major problem with priority scheduling is **starvation**, where low-priority processes may never execute. A common solution to this problem is **aging**, a technique that gradually increases the priority of processes that have been waiting in the system for a long time.

### Round Robin (RR)

#### Concept

Round Robin (RR) is designed especially for time-sharing systems. Each process is allocated a small, fixed unit of CPU time called a **time quantum (q)**, typically between 10 and 100 milliseconds. After a process has run for one time quantum, it is preempted and moved to the end of the ready queue.

#### Impact of Quantum Size

The performance of RR is highly dependent on the size of the time quantum:

- A **large quantum** makes RR behave like the FCFS algorithm.
- A **very small quantum** results in high context-switching overhead, which can degrade overall system performance.

#### Key Characteristics

The defining characteristic of Round Robin is its fairness. It ensures that every process gets a share of the CPU, which prevents starvation and provides good response times for interactive users.

These core algorithms form the building blocks for more sophisticated scheduling strategies.

## 5. Advanced Scheduling Algorithms

Advanced scheduling algorithms address the limitations of simpler models by creating more complex queue structures. This allows the operating system to categorize processes and handle them with different policies, improving overall system performance and fairness.

### Multilevel Queue Scheduling

#### Structure

In Multilevel Queue Scheduling, the ready queue is partitioned into several separate queues. Processes are permanently assigned to one queue upon entry, often based on their characteristics, such as being interactive (foreground) or batch (background). Each queue has its own scheduling algorithm. For example:

- **Foreground Queue:** Round Robin (RR) for responsiveness.
- **Background Queue:** First-Come, First-Served (FCFS) for batch processing.

#### Scheduling Between Queues

Scheduling must also occur _between_ the queues. Two common methods are:

1. **Fixed Priority:** The scheduler serves all processes from a high-priority queue (e.g., foreground) before moving to a lower-priority queue (e.g., background). This approach carries a risk of starvation for the lower-priority queues.
2. **Time Slice:** Each queue is allocated a certain percentage of the CPU time. For instance, the foreground queue might get 80% of the CPU time to schedule its processes with RR, while the background queue gets the remaining 20% to use with FCFS.

### Multilevel Feedback Queue Scheduling

#### Key Feature

The Multilevel Feedback Queue Scheduling algorithm enhances the multilevel queue approach by allowing processes to **move between queues**. This is its defining feature. A process's queue assignment can change based on its CPU usage behavior.

#### Preventing Starvation

This ability for processes to move between queues provides a powerful mechanism for implementing **aging**. If a process waits too long in a lower-priority queue, it can be moved to a higher-priority queue to prevent starvation.

#### Defining Parameters

This algorithm is highly configurable. A concrete example helps illustrate how it works. Consider a system with three queues:

- **Q0:** Round Robin with an 8-millisecond time quantum.
- **Q1:** Round Robin with a 16-millisecond time quantum.
- **Q2:** First-Come, First-Served (FCFS).

A new process enters Q0. It gets 8ms of CPU time. If it doesn't finish, it's demoted to Q1. In Q1, it gets 16ms of CPU time. If it still doesn't complete, it's demoted to Q2, where it will run to completion under FCFS rules. This structure is defined by several parameters:

- The number of queues.
- The scheduling algorithm for each queue.
- The method used to determine when to upgrade a process (promotion).
- The method used to determine when to demote a process.
- The rule that determines which queue a process will enter initially.

Having explored these different algorithms, the final step is to understand how to evaluate which one is best suited for a particular system.

## 6. Evaluating Scheduling Algorithms

Choosing the most effective scheduling algorithm for a specific operating system or workload requires formal evaluation methods. These techniques help system designers analyze the performance of different algorithms under various conditions.

The four primary evaluation methods are:

- **Deterministic Modeling:** This analytical method evaluates algorithm performance for a specific, predetermined workload. It is simple and fast, but its results are only valid for the exact input values used.
- **Queueing Models:** This method represents the computer system as a network of queues. Using mathematical formulas like **Little's Formula (**`**n = λ × W**`**)**, it calculates performance metrics. For example, if 7 processes arrive on average every second (λ=7) and there are normally 14 processes in the queue (n=14), the average waiting time is 2 seconds (W=2).
- **Simulation:** This technique involves creating a programmed model of the system that emulates its behavior. The simulation is run with data that is either generated randomly or derived from real-world trace data, providing a more accurate and flexible analysis than purely mathematical models.
- **Implementation:** This is the most accurate evaluation method. It involves coding the scheduling algorithm and running it within a real operating system. While it provides definitive results, this method is costly, time-consuming, and its results are highly dependent on the specific system environment and workload.

Ultimately, CPU scheduling is a critical function of the operating system that involves a constant trade-off between performance, fairness, and complexity. The optimal algorithm for any given situation depends entirely on the specific requirements of the system and the nature of the processes it must manage.

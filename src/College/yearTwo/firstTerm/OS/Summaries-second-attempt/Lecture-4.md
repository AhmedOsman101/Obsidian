# Lecture 4: CPU Scheduling

```cardlink
url: https://youtu.be/XXrx9ricm_w
title: "شرح كيفية حل مسائل Cpu Scheduling"
description: "شرح كيفية حل مسائل جدولة المهام فى مادة الـ operating Systemلينك الباوربوينت المستخدم فى الشرحhttps://drive.google.com/drive/folders/0BwlYessh1WdaeHE5YzdWR0d..."
host: youtu.be
favicon: https://www.youtube.com/s/desktop/aaaab8bf/img/favicon_32x32.png
image: https://i.ytimg.com/vi/XXrx9ricm_w/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGDggXChlMA8=&rs=AOn4CLC1uYVZCVN5YLqtRSagXrvuTwTEVg
```

## 1. Core Concepts & Terminology

**CPU Scheduling** is a fundamental process in multiprogrammed operating systems that determines which process uses the CPU at any given time.

A process execution cycle consists of two distinct phases that alternate:

- **CPU burst**: The period when the process is actively using the CPU.
- **I/O burst**: The period when the process is waiting for an I/O operation to complete.

Scheduling decisions are triggered when a process undergoes one of the following state changes:

1. Switches from a **running** state to a **waiting** state.
2. Switches from a **running** state to a **ready** state.
3. Switches from a **waiting** state to a **ready** state.
4. **Terminates**.

The **Dispatcher** is the module that gives control of the CPU to the process selected by the short-term scheduler. Its primary functions are:

1. Switching the context.
2. Switching to user mode.
3. Jumping to the proper location in the user program to restart its next instruction.

**Dispatch latency** is defined as the time it takes for the dispatcher to stop one process and start another.

## 2. Scheduling Types: Preemptive vs. Non-Preemptive

**Preemptive Scheduling** allows the CPU to interrupt a currently running process and switch to another, often to prioritize a more urgent task or ensure fair resource distribution.

**Non-Preemptive Scheduling** dictates that once a process has been allocated the CPU, it retains control until it voluntarily releases it, either by terminating or switching to a waiting state.

| Aspect              | Non-Preemptive Scheduling                                                                                 | Preemptive Scheduling                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **CPU Allocation**  | A process keeps the CPU until it completes or enters a waiting state.                                     | The CPU is assigned to a process for a limited time and can be taken away.           |
| **Interrupts**      | A running process cannot be interrupted; it runs until it voluntarily releases the CPU.                   | A running process can be interrupted at any time.                                    |
| **Overhead**        | Low, as there is no overhead from switching processes mid-execution.                                      | High, due to the frequent context switching required.                                |
| **Starvation**      | Possible. A short process can be blocked indefinitely by a long-running process.                          | Possible. A low-priority process may be repeatedly preempted by high-priority tasks. |
| **Synchronization** | Simpler, as a process runs to completion or a wait state without risk of being interrupted mid-operation. | More complex, especially when shared data and kernel activities are involved.        |
| **Flexibility**     | Inflexible; a running task cannot be interrupted for a more urgent one.                                   | Flexible; allows the system to prioritize urgent processes.                          |
| **CPU Utilization** | Tends to be lower.                                                                                        | Tends to be higher.                                                                  |
| **Waiting Time**    | Generally higher.                                                                                         | Generally lower.                                                                     |
| **Response Time**   | Slower, as new processes must wait for the current one to finish.                                         | Faster, as the system can respond to new requests more quickly.                      |
| **Examples**        | First-Come, First-Served (FCFS), Shortest Job First (SJF)                                                 | Round Robin (RR), Shortest Remaining Time First (SRTF)                               |

## 3. Scheduling Criteria & Performance Metrics

| Metric              | Description                                       | Goal     |
| ------------------- | ------------------------------------------------- | -------- |
| **CPU Utilization** | Keep CPU busy                                     | Maximize |
| **Throughput**      | Number of processes completed per unit time       | Maximize |
| **Turnaround Time** | Total time from submission to completion          | Minimize |
| **Waiting Time**    | Time spent waiting in the ready queue             | Minimize |
| **Response Time**   | Time from request submission until first response | Minimize |

### Key Formulas

- **Turnaround Time** = `Completion Time` − `Arrival Time`
- **Waiting Time** = `Turnaround Time` − `Burst Time`
- **Throughput** = Total Processes  Total Time (i.e., the total time period over which the processes were completed)

## 4. Scheduling Algorithms

### 4.1 First-Come, First-Served (FCFS)

The FCFS algorithm executes processes in the order they arrive, managed with a First-In, First-Out (FIFO) queue.

The primary drawback of this non-preemptive algorithm is the **Convoy effect**, where short processes are forced to wait behind a long-running process, leading to inefficient resource utilization and high average waiting times.

| Advantage                           | Disadvantage                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------------ |
| Simple to understand and implement. | High average waiting time for short processes; troublesome for time-sharing systems. |

### 4.2 Shortest Job First (SJF)

The SJF algorithm schedules the process with the shortest next CPU burst time. It is considered optimal for minimizing the average waiting time for a given set of processes.

The primary difficulty of implementing SJF is accurately predicting the length of the next CPU burst. This is often estimated using exponential averaging with the following formula:

$$
\tau_{n+1} = \alpha t_n + (1 - \alpha)\tau_n
$$

| Advantage                                             | Disadvantages                                                                                         |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Provably optimal for minimizing average waiting time. | Difficult to predict the next CPU burst length. <br> Can lead to **Starvation** for longer processes. |

### 4.3 Shortest Remaining Time First (SRTF)

SRTF is the preemptive version of the SJF algorithm that schedules the process with the least amount of CPU burst time remaining. If a new process arrives with a shorter remaining time than the currently executing process, the current process is preempted in favor of the new one.

| Advantage                                                      | Disadvantages                                                                              |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Achieves a lower average waiting time than non-preemptive SJF. | Difficult to estimate burst times. <br> Risk of starvation and excessive context switches. |

### 4.4 Priority Scheduling

In Priority Scheduling, each process is assigned a priority number, and the CPU is allocated to the process with the highest priority (typically the smallest integer). This algorithm can be implemented as either preemptive or non-preemptive.

The primary problem associated with this algorithm is **Starvation**, where low-priority processes may never get to execute. This can be resolved using a technique called **Aging**, which gradually increases the priority of processes that have been waiting for a long time. This is practically implemented in more advanced algorithms like the Multilevel Feedback Queue scheduler.

### 4.5 Round Robin (RR)

The RR algorithm is designed for time-sharing systems. Each process is allocated a small, fixed unit of CPU time called a **time quantum (q)**, typically 10-100 milliseconds. When the quantum expires, the process is preempted and moved to the end of the ready queue.

The performance of RR is highly dependent on the size of the time quantum:

- A **large quantum** causes RR to behave like the FCFS algorithm.
- A **small quantum** leads to high overhead from frequent context switches.

Its primary characteristic is fairness, as every process is guaranteed a share of the CPU, preventing starvation.

### 4.6 Multilevel Queue Scheduling

In this approach, the ready queue is partitioned into several separate queues, each with its own scheduling algorithm. Processes are permanently assigned to a queue upon entry.

For example, queues might be separated by process type:

- **Foreground (interactive) queue**: Scheduled with Round Robin (RR) for better response time.
- **Background (batch) queue**: Scheduled with First-Come, First-Served (FCFS).

Scheduling _between_ the queues is typically handled in one of two ways:

- **Fixed Priority**: Queues are serviced in a fixed order (e.g., all foreground processes are run before any background processes). This can lead to starvation.
- **Time Slice**: Each queue is allocated a certain percentage of the CPU time (e.g., 80% to the foreground queue and 20% to the background queue).

### 4.7 Multilevel Feedback Queue Scheduling

This is a more flexible version of multilevel queue scheduling where processes can move between the different queues. This movement allows the system to separate processes based on their CPU burst characteristics and can be used to implement **aging** to prevent starvation.

The parameters that define a multilevel feedback queue scheduler include:

- The number of queues.
- The scheduling algorithm for each queue.
- The method used to determine when to upgrade a process to a higher-priority queue.
- The method used to determine when to demote a process to a lower-priority queue.
- The method used to determine which queue a process will enter initially.

## 5. Algorithm Evaluation Methods

1. **Deterministic Modeling** This quantitative method evaluates algorithm performance for a specific, predetermined workload, but its results are only valid for those exact inputs.
2. **Queueing Models** This method uses mathematical analysis to represent the computer system as a network of servers and queues, calculating metrics like queue length and waiting time with formulas such as **Little's Formula**: `n = λ × W`.
3. **Simulation** This method involves creating a programmed model of the system that uses randomly generated data or trace tapes of real events to provide a more accurate and flexible analysis than analytical models.
4. **Implementation** The most accurate method involves coding the algorithm to run it on a real system, but it is also the most costly, complex, and highly dependent on the specific system environment and workload.

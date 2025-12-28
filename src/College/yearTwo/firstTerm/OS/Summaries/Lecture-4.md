# CPU Scheduling: An Exam-Ready Briefing

## Executive Summary

This document provides a comprehensive overview of CPU scheduling, a fundamental concept in multiprogrammed operating systems responsible for determining which process utilizes the CPU. The core objective of scheduling is to optimize system performance by efficiently managing the execution order of processes from the ready queue. Scheduling decisions are broadly categorized as non-preemptive, where a process runs to completion or until it voluntarily releases the CPU, and preemptive, where the operating system can interrupt a running process to allocate the CPU to another, often higher-priority, task. Key performance metrics for evaluating scheduling algorithms include maximizing CPU utilization and throughput while minimizing turnaround time, waiting time, and response time.

The primary scheduling algorithms each present distinct trade-offs. First-Come, First-Served (FCFS) is simple but can lead to the convoy effect, where short processes are delayed by long ones. Shortest Job First (SJF) is provably optimal for minimizing average waiting time but suffers from the practical difficulty of predicting future CPU burst lengths and the risk of starvation for long processes. Its preemptive version, Shortest Remaining Time First (SRTF), improves responsiveness further. Priority Scheduling assigns a priority to each process but also risks starving low-priority tasks, a problem mitigated by aging. Round Robin (RR) provides fairness by giving each process a fixed time quantum, making it ideal for time-sharing systems, though its performance is highly sensitive to the quantum size and context-switching overhead. More advanced strategies like Multilevel Queue and Multilevel Feedback Queue scheduling offer greater flexibility by segmenting the ready queue and allowing processes to move between queues based on their behavior.

## Thematic Breakdown

### 1. Core Concepts of CPU Scheduling

CPU scheduling is the basis for multiprogramming, enabling the operating system to switch the CPU among multiple processes to increase efficiency and interactivity.

#### The Process Execution Cycle

A process's life cycle is an alternation between two states:

- **CPU Burst:** The period when a process is actively executing on the CPU.
- **I/O Burst:** The period when a process is waiting for an I/O operation to complete.

Execution begins with a CPU burst, followed by an I/O burst, then another CPU burst, and so on. The final CPU burst concludes with a system request to terminate the process.

#### The Short-Term Scheduler and Dispatcher

- The **Short-Term Scheduler** (or CPU scheduler) selects a process from the pool of processes in the ready queue and allocates the CPU to it.
- The **Dispatcher** is the module that gives control of the CPU to the process selected by the short-term scheduler. This involves:
  1. Switching context from the old process to the new one.
  2. Switching to user mode.
  3. Jumping to the proper location in the user program to restart its execution.
- **Dispatch Latency** is the time it takes for the dispatcher to stop one process and start another. This represents the overhead of the scheduling process.

#### When Scheduling Occurs

Scheduling decisions are made by the operating system when a process transitions between states:

1.  **Running -> Waiting:** (e.g., waiting for I/O) - **Non-preemptive**
2.  **Running -> Ready:** (e.g., an interrupt occurs) - **Preemptive**
3.  **Waiting -> Ready:** (e.g., I/O completion) - **Preemptive**
4.  **Terminates:** - **Non-preemptive**

When scheduling only occurs under conditions 1 and 4, the scheme is **non-preemptive**. If it can occur under all four conditions, it is **preemptive**.

### 2. Preemptive vs. Non-Preemptive Scheduling

The distinction between preemptive and non-preemptive scheduling is a critical architectural choice that impacts system responsiveness, fairness, and complexity.

- **Non-preemptive:** Once the CPU is allocated to a process, it cannot be taken away. The process keeps the CPU until it terminates or switches to the waiting state.
- **Preemptive:** The CPU can interrupt a currently executing process and allocate it to a different one. This is crucial for ensuring responsiveness and fairness, especially for high-priority or interactive tasks.

| Aspect              | Non-Preemptive                                                             | Preemptive                                                                     |
| :------------------ | :------------------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| **CPU Allocation**  | Process retains the CPU until it completes its burst or waits for I/O.     | CPU is assigned for a limited time; can be interrupted.                        |
| **Interrupts**      | Process runs until it voluntarily releases the CPU.                        | A running process can be interrupted at any time.                              |
| **Overhead**        | Low (no overhead from switching mid-execution).                            | High (due to frequent context switching).                                      |
| **Starvation**      | Possible if long jobs continuously occupy the CPU, blocking short ones.    | Possible if high-priority tasks arrive frequently, blocking low-priority ones. |
| **Synchronization** | Easier, as data structures are not typically interrupted during updates.   | Complex, especially with shared data, risking race conditions.                 |
| **Flexibility**     | Inflexible; cannot respond to urgent tasks until the current one finishes. | Flexible; can prioritize and execute urgent processes immediately.             |
| **CPU Utilization** | Generally lower.                                                           | Generally higher.                                                              |
| **Waiting Time**    | Higher on average.                                                         | Lower on average.                                                              |
| **Response Time**   | Slower.                                                                    | Faster.                                                                        |
| **Examples**        | FCFS, Non-preemptive SJF                                                   | Round Robin (RR), SRTF, Preemptive Priority                                    |

### 3. Performance Criteria and Metrics

To evaluate and compare scheduling algorithms, several standard criteria are used. The goal is to optimize these metrics according to system requirements.

| Metric              | Description                                                                                           | Goal     |
| :------------------ | :---------------------------------------------------------------------------------------------------- | :------- |
| **CPU Utilization** | The percentage of time the CPU is busy executing processes.                                           | Maximize |
| **Throughput**      | The number of processes completed per unit of time.                                                   | Maximize |
| **Turnaround Time** | The total time from a process's submission to its completion.                                         | Minimize |
| **Waiting Time**    | The total time a process spends waiting in the ready queue.                                           | Minimize |
| **Response Time**   | The time from when a request is submitted until the first response is produced (not the full output). | Minimize |

#### Key Formulas for Calculation

- **Turnaround Time = Completion Time − Arrival Time**
- **Waiting Time = Turnaround Time − Burst Time**
- **Throughput = Total Number of Processes / Total Completion Time**

### 4. Core Scheduling Algorithms

#### First-Come, First-Served (FCFS)

- **Concept:** A non-preemptive algorithm where processes are executed in the order they arrive. It is implemented with a simple FIFO (First-In, First-Out) queue.
- **Key Issue:** The **Convoy Effect**, where a long, CPU-bound process can block many shorter, I/O-bound processes, leading to poor CPU and device utilization.
- **Pros:**
  - Simple to understand and implement.
  - Inherently fair, as no process can starve.
- **Cons:**
  - Average waiting time is often high and highly variable.
  - Inefficient for interactive or time-sharing systems.

#### Shortest Job First (SJF)

- **Concept:** This algorithm schedules the process with the shortest estimated next CPU burst. It can be implemented as non-preemptive or preemptive.
- **Optimality:** SJF is provably optimal as it gives the minimum possible average waiting time for a given set of processes.
- **Challenge:** The primary difficulty is predicting the length of the next CPU burst. This is often done using exponential averaging of previous burst times with the formula: **τ_n+1 = α _ t_n + (1 − α) _ τ_n** (where τ is the predicted time, t is the actual time, and α is a weighting factor).
- **Pros:**
  - Provably optimal in minimizing average waiting time.
- **Cons:**
  - Requires prediction of future burst times, which is difficult.
  - Can lead to starvation for processes with long CPU bursts if shorter jobs are constantly arriving.

#### Shortest Remaining Time First (SRTF)

- **Concept:** This is the preemptive version of SJF. If a new process arrives with a CPU burst shorter than the remaining time of the currently executing process, the scheduler preempts the current process and runs the new one.
- **Pros:**
  - Achieves a lower average waiting time than non-preemptive SJF.
- **Cons:**
  - Shares the same cons as SJF (burst time prediction, starvation).
  - Incurs higher overhead due to more frequent context switching.

#### Priority Scheduling

- **Concept:** Each process is assigned a priority number. The CPU is allocated to the process with the highest priority (often represented by the smallest integer). This can be either preemptive or non-preemptive. SJF is a special case of priority scheduling where the priority is inversely proportional to the next CPU burst time.
- **Key Issue:** Indefinite blocking or **starvation** of low-priority processes.
- **Solution:** **Aging**, a technique where the priority of a process is gradually increased the longer it waits in the ready queue.
- **Pros:**
  - Provides flexibility to prioritize processes based on their importance.
- **Cons:**
  - Starvation is a significant risk without a mechanism like aging.
  - Can be complex to manage priorities dynamically.

#### Round Robin (RR)

- **Concept:** A preemptive algorithm designed for time-sharing systems. Each process is allocated a small, fixed unit of CPU time called a **time quantum** or **time slice** (typically 10-100 milliseconds). If the process is still running when the quantum expires, it is preempted and placed at the end of the ready queue.
- **Performance:** Performance depends heavily on the size of the time quantum **q**:
  - **Large q:** RR behaves like FCFS.
  - **Small q:** Overhead from context switching can become excessive, degrading performance. A rule of thumb is that 80% of CPU bursts should be shorter than q.
- **Pros:**
  - Fair, as every process gets a share of the CPU.
  - Avoids starvation.
  - Provides better response time than many other algorithms.
- **Cons:**
  - Average turnaround time is often higher than in SJF.
  - Performance is sensitive to the chosen quantum size.

### 5. Advanced Scheduling Strategies

#### Multilevel Queue Scheduling

- **Concept:** The ready queue is partitioned into several separate queues. Processes are permanently assigned to one queue based on properties like memory size, priority, or process type (e.g., interactive vs. batch).
- **Implementation:**
  - Each queue has its own scheduling algorithm (e.g., RR for the foreground/interactive queue, FCFS for the background/batch queue).
  - Scheduling must also occur between the queues, typically via:
    - **Fixed Priority:** Serve all processes from the highest-priority queue first. This can lead to starvation.
    - **Time Slice:** Each queue receives a certain percentage of the CPU time (e.g., 80% to foreground, 20% to background).

#### Multilevel Feedback Queue Scheduling

- **Concept:** This is the most flexible but also most complex scheduling algorithm. It is similar to the multilevel queue, but it allows processes to move between queues.
- **Functionality:**
  - A process that uses too much CPU time can be **demoted** to a lower-priority queue.
  - A process that waits too long in a low-priority queue can be **promoted** to a higher-priority queue (implementing aging).
- **Parameters:** It is defined by several parameters, including the number of queues, the scheduling algorithm for each queue, the rules for promotion and demotion, and the rule for determining which queue a new process enters.

### 6. Evaluating Scheduling Algorithms

Choosing the right algorithm requires a method for evaluating its performance under specific conditions.

- **1. Deterministic Modeling:** An analytical method that takes a predetermined workload (a fixed set of processes and their burst times) and calculates the performance of each algorithm for that specific workload. It is simple and fast but only provides insights for the exact inputs used.
- **2. Queueing Models:** The system is modeled as a network of servers and queues (e.g., CPU queue, I/O device queues). Using mathematical formulas and arrival/service rate distributions, one can calculate metrics like average queue length and waiting time. **Little's Formula (n = λ × W)** is a key component, relating the average queue length (n) to the arrival rate (λ) and average waiting time (W).
- **3. Simulation:** A more flexible and accurate approach where a software model of the system is created. The simulation is driven by either randomly generated data or by **trace tapes**—real data recorded from actual systems. This allows for detailed analysis under a wide range of conditions.
- **4. Implementation:** The most accurate method involves coding the algorithm and running it in a real operating system. However, this is costly, complex, and disruptive to users. The results are also highly dependent on the specific system environment and workload at the time of testing.

## Quick Review Checklist

- **Scheduling Triggers:** Scheduling happens when a process switches: (1) running->waiting, (2) running->ready, (3) waiting->ready, or (4) terminates. Preemptive scheduling can act on all four; non-preemptive only on 1 and 4.
- **Convoy Effect:** The core weakness of FCFS, where long processes block short ones.
- **Starvation:** The core weakness of SJF and Priority scheduling, where low-priority or long jobs may never run.
- **Aging:** The primary solution to starvation; it increases a process's priority over time.
- **SJF Optimality:** SJF is theoretically optimal for minimizing average waiting time but is impractical due to the need to predict the future.
- **SRTF:** The preemptive version of SJF.
- **Time Quantum (q):** The central parameter of Round Robin (RR). Too large, it acts like FCFS. Too small, context-switch overhead dominates.
- **Formulas to Memorize:**
  - Turnaround Time = Completion Time - Arrival Time
  - Waiting Time = Turnaround Time - Burst Time
- **Multilevel Queues:**
  - **Standard:** Processes are fixed in one queue.
  - **Feedback:** Processes can move between queues (enables aging and behavior-based scheduling).
- **Evaluation Trade-off:** Accuracy increases from Deterministic Modeling -> Queueing Models -> Simulation -> Implementation, but so does cost and complexity.

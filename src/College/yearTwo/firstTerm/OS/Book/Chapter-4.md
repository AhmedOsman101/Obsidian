---
title: Chapter 4
prev:
  text: "Chapter 3"
  link: "/College/yearTwo/firstTerm/OS/Book/Chapter-3"
next:
  text: "Chapter 5"
  link: "/College/yearTwo/firstTerm/OS/Book/Chapter-5"
lastUpdated: false
---

## Basic Concepts

**CPU scheduling** is how the OS decides which process in the ready queue gets the CPU next. The goal is to maximize **CPU utilization** and **throughput** while minimizing **waiting time** and **turnaround time**.

A running process alternates between:

- **CPU bursts** — performing calculations or executing instructions.
- **I/O bursts** — waiting for input/output (disk, keyboard, network).

| Process type  | CPU bursts | I/O bursts | Examples                      |
| ------------- | ---------- | ---------- | ----------------------------- |
| **CPU-bound** | Long       | Short      | Games, simulations            |
| **I/O-bound** | Short      | Long       | Text editors, file operations |

The **CPU scheduler** selects a process from the ready queue and allocates the CPU. A scheduling decision may occur when a process:

1. Switches from **running -> waiting** (needs I/O).
2. Switches from **running -> ready** (ran for a long period / was preempted).
3. **Terminates**.

## Scheduling Criteria

| Criterion           | Definition                                  | Optimize |
| ------------------- | ------------------------------------------- | -------- |
| **CPU utilization** | Keep the CPU as busy as possible            | Maximize |
| **Throughput**      | Number of processes completed per time unit | Maximize |
| **Turnaround time** | Time from submission to termination         | Minimize |
| **Waiting time**    | Total time spent waiting in the ready queue | Minimize |

Two formulas are used throughout:

```text
Turnaround Time (TAT) = Completion Time (CT) − Arrival Time (AT)
Waiting Time  (WT)  = TAT − Burst Time (BT)
```

A **Gantt chart** is a timeline showing when each process starts and finishes.

## First-Come, First-Served (FCFS)

**FCFS** is **non-preemptive**: the process that arrives first gets the CPU first, runs until it finishes, then the next process starts — like a ticket-counter line.

### Example 1

| Process | Arrival | Burst |
| ------- | ------- | ----- |
| P1      | 0       | 5     |
| P2      | 1       | 3     |
| P3      | 2       | 8     |
| P4      | 3       | 6     |

Order: **P1 -> P2 -> P3 -> P4**. Gantt: `P1[0–5] P2[5–8] P3[8–16] P4[16–22]`.

| Process | AT  | BT  | Start | CT  | TAT = CT−AT | WT = TAT−BT |
| ------- | --- | --- | ----- | --- | ----------- | ----------- |
| P1      | 0   | 5   | 0     | 5   | 5           | 0           |
| P2      | 1   | 3   | 5     | 8   | 7           | 4           |
| P3      | 2   | 8   | 8     | 16  | 14          | 6           |
| P4      | 3   | 6   | 16    | 22  | 19          | 13          |

Average TAT = `(5+7+14+19)/4 = 11.25`; Average WT = `(0+4+6+13)/4 = 5.75`.

### Example 2 — Convoy Effect

| Process | Arrival | Burst |
| ------- | ------- | ----- |
| P1      | 0       | 24    |
| P2      | 1       | 3     |
| P3      | 2       | 8     |
| P4      | 3       | 6     |

Gantt: `P1[0–24] P2[24–27] P3[27–35] P4[35–41]`.

| Process | AT  | BT  | Start | CT  | TAT = CT−AT | WT = TAT−BT |
| ------- | --- | --- | ----- | --- | ----------- | ----------- |
| P1      | 0   | 24  | 0     | 24  | 24          | 0           |
| P2      | 1   | 3   | 24    | 27  | 26          | 23          |
| P3      | 2   | 8   | 27    | 35  | 33          | 25          |
| P4      | 3   | 6   | 35    | 41  | 38          | 32          |

Average TAT = `121/4 = 30.25`; Average WT = `80/4 = 20`.

> [!WARNING]
> FCFS is formally fair, but unfair in effect: one long job makes every short job wait (**convoy effect**), inflating average waiting and turnaround time.

## Shortest-Job-First (SJF)

**SJF** picks the process with the smallest burst time. It is **optimal** — it gives the minimum average waiting time for a given set of processes. Two variants:

- **Non-preemptive** — once the CPU is given, the process runs to completion.
- **Preemptive** — if a new process arrives with a burst shorter than the current process's **remaining** time, it preempts. This variant is **Shortest-Remaining-Time-First (SRTF)**.

### Non-Preemptive SJF

Same four processes. At each scheduling point, choose the shortest job that has already arrived: **P1 -> P2 -> P4 -> P3**.

Gantt: `P1[0–5] P2[5–8] P4[8–14] P3[14–22]`.

| Process | AT  | BT  | CT  | TAT = CT−AT | WT = TAT−BT |
| ------- | --- | --- | --- | ----------- | ----------- |
| P1      | 0   | 5   | 5   | 5           | 0           |
| P2      | 1   | 3   | 8   | 7           | 4           |
| P4      | 3   | 6   | 14  | 11          | 5           |
| P3      | 2   | 8   | 22  | 20          | 12          |

Average TAT = `43/4 = 10.75`; Average WT = `21/4 = 5.25`.

### Preemptive SJF (SRTF)

- Time 0: only P1 has arrived -> run P1.
- Time 1: P2 arrives with BT 3, while P1 has 4 remaining -> P2 preempts P1.
- Time 4: P2 finishes; P1 (4 left) is shortest -> resumes.
- Time 8: P1 finishes; P4 (6) beats P3 (8) -> P4.
- Time 14: P3 runs.

Gantt: `P1[0–1] P2[1–4] P1[4–8] P4[8–14] P3[14–22]`.

| Process | AT  | BT  | CT  | TAT = CT−AT | WT = TAT−BT |
| ------- | --- | --- | --- | ----------- | ----------- |
| P1      | 0   | 5   | 8   | 8           | 3           |
| P2      | 1   | 3   | 4   | 3           | 0           |
| P3      | 2   | 8   | 22  | 20          | 12          |
| P4      | 3   | 6   | 14  | 11          | 5           |

Average TAT = `42/4 = 10.5`; Average WT = `20/4 = 5`.

## Priority Scheduling

Each process gets an integer **priority**; the CPU goes to the highest priority. Here the **smallest integer = highest priority**, and the algorithm is **preemptive**.

> [!WARNING]
> **Starvation** — low-priority processes may never execute if higher-priority processes keep arriving.

Example (all arrive at time 0):

| Process | Burst | Priority | Start | CT  | WT  |
| ------- | ----- | -------- | ----- | --- | --- |
| P2      | 1     | 1        | 0     | 1   | 0   |
| P5      | 5     | 2        | 1     | 6   | 1   |
| P1      | 10    | 3        | 6     | 16  | 6   |
| P3      | 2     | 4        | 16    | 18  | 16  |
| P4      | 1     | 5        | 18    | 19  | 18  |

Order: **P2 -> P5 -> P1 -> P3 -> P4**. Average waiting time = `41/5 = 8.2`.

## Round Robin (RR)

**RR** is preemptive and designed for **time-sharing**. Each process gets a fixed **time quantum** `q`. If it does not finish, it is preempted and placed back in the ready queue.

The quantum is tuned, not computed. Its size controls a trade-off:

| Case            | What happens                | Result                                         |
| --------------- | --------------------------- | ---------------------------------------------- |
| **q too small** | Too many context switches   | High overhead, CPU wasted on switching         |
| **q too large** | Long waiting times          | Behaves like FCFS                              |
| **q optimal**   | Each process gets fair time | Smooth, efficient performance, minimal waiting |

### Example — q = 4

Processes: P1 burst 24, P2 burst 3, P3 burst 3 (all arrive at 0).

Gantt: `P1[0–4] P2[4–7] P3[7–10] P1[10–14] P1[14–18] P1[18–22] P1[22–26] P1[26–30]`.

| Process | Burst | CT  | TAT | WT = TAT−BT |
| ------- | ----- | --- | --- | ----------- |
| P1      | 24    | 30  | 30  | 6           |
| P2      | 3     | 7   | 7   | 4           |
| P3      | 3     | 10  | 10  | 7           |

Average TAT = `47/3 ≈ 15.67`; Average WT = `17/3 ≈ 5.67`.

### Example — q = 20

Processes: P1 = 53, P2 = 17, P3 = 68, P4 = 24 (all arrive at 0).

Gantt: `P1[0–20] P2[20–37] P3[37–57] P4[57–77] P1[77–97] P3[97–117] P4[117–121] P1[121–134] P3[134–154] P3[154–162]`.

| Process | Burst | CT  | TAT | WT = TAT−BT |
| ------- | ----- | --- | --- | ----------- |
| P1      | 53    | 134 | 134 | 81          |
| P2      | 17    | 37  | 37  | 20          |
| P3      | 68    | 162 | 162 | 94          |
| P4      | 24    | 121 | 121 | 97          |

Average TAT = `454/4 = 113.5`; Average WT = `292/4 = 73`.

## Multilevel Queue Scheduling

**Multilevel queue** divides the ready queue into several separate queues, each with its own scheduling policy and priority. Typical split:

- **Foreground (interactive)** queue -> **RR**
- **Background (batch)** queue -> **FCFS**

A process is assigned to a queue (e.g., by type or priority), and a queue's priority determines whether its processes run before lower queues.

### Example

Queue 1 has higher priority than queue 2. Queue 1 uses **RR with q = 2**; queue 2 uses **FCFS**.

| Process | AT  | BT  | Queue | CT  | TAT = CT−AT | WT = TAT−BT |
| ------- | --- | --- | ----- | --- | ----------- | ----------- |
| P1      | 0   | 4   | 1     | 6   | 6           | 2           |
| P2      | 0   | 3   | 1     | 7   | 7           | 4           |
| P3      | 0   | 8   | 2     | 20  | 20          | 12          |
| P4      | 10  | 5   | 1     | 15  | 5           | 0           |

Average TAT = `38/4 = 9.5`; Average WT = `18/4 = 4.5`.

_8 min read (source: 14 min)_

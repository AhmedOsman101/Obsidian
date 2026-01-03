# Lecture 3: Processes and Threads

## 1. Processes

### 1.1 Core Definitions

**Process** A process is a program in execution.

**Operating System processes** These are processes that execute system code.

**User processes** These are processes that execute user code.

**Required Resources**

- CPU time
- Memory
- Files
- I/O devices

### 1.2 Process in Memory

A process in memory is composed of five distinct parts:

- **Text section**: The program code itself.
- **Data section**: Contains global variables.
- **Stack**: Holds temporary data such as function parameters, return addresses, and local variables.
- **Heap**: Memory that is dynamically allocated during run time.
- **Current activity**: Includes the program counter and the contents of processor registers.

### 1.3 Program vs. Process

A **program** is a passive entity, while a **process** is its active counterpart. The key differences are as follows:

**Nature:**

- A **program** is a passive entity stored on disk as an executable file.
- A **process** is an active entity, representing a program while it is being executed.

**State:**

- A program becomes a process when its executable file is loaded into memory.
- A single program can result in multiple processes, such as when several users run the same application concurrently.

### 1.4 Process States

As a process executes, it transitions through several states:

- **New**: The process is being created.
- **Running**: Instructions are being executed by the CPU.
- **Waiting**: The process is waiting for an event to occur, such as I/O completion.
- **Ready**: The process is in main memory and waiting to be assigned to a processor.
- **Terminated**: The process has finished its execution.

### 1.5 Process Control Block (PCB)

Each process in the operating system is represented by a **Process Control Block (PCB)**, which is also known as a Task Control Block. The PCB stores all information associated with a specific process, including:

- **Process state**: The current state of the process (e.g., new, ready, running).
- **Program counter**: The address of the next instruction to be executed.
- **CPU registers**: The contents of all process-centric registers.
- **CPU scheduling information**: Details such as process priority and pointers to scheduling queues.
- **Memory-management information**: Information on memory allocated to the process.
- **Accounting information**: CPU time used, time limits, and other usage statistics.
- **I/O status information**: A list of I/O devices allocated to the process and a list of open files.

### 1.6 Context Switch

A **Context Switch** is the mechanism by which the CPU switches from executing one process to another, requiring the system to save the state of the old process and load the saved state for the new one.

Context-switch time is pure **overhead**, as the system performs no useful work during the transition. The duration of a context switch depends on hardware support; systems with multiple sets of registers can perform context switches more quickly.

### 1.7 Process Scheduling

The primary goal of process scheduling is to maximize CPU utilization by efficiently switching processes onto the CPU. The operating system maintains several queues to manage processes:

- **Job queue**: Contains all processes in the system.
- **Ready queue**: Contains all processes residing in main memory that are ready to execute.
- **Device queues**: Contain processes waiting for a specific I/O device.

Schedulers are responsible for moving processes between these queues.

| Scheduler Aspect | Short-term (CPU) scheduler                                     | Long-term (Job) scheduler                                                                                   |
| ---------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Frequency**    | Frequent (milliseconds).                                       | Infrequent (seconds or minutes).                                                                            |
| **Role**         | Selects the next process to be executed and allocates the CPU. | Selects which processes should be brought into the ready queue, controlling the degree of multiprogramming. |

Processes are often categorized as either:

- **I/O-bound**: Spends more time performing I/O than computations, characterized by many short CPU bursts.
- **CPU-bound**: Spends more time on computations, characterized by a few very long CPU bursts.

The **Medium-Term Scheduler** is an additional scheduler used to reduce the degree of multiprogramming. It does this through **swapping**, which involves temporarily removing a process from memory and storing it on disk, to be brought back later to continue execution.

## 2. Threads

### 2.1 Core Definition

A **Thread** is the basic unit of CPU utilization. A process that has multiple threads can perform more than one task at a time.

**Each thread has its own:**

- Thread ID
- Program counter
- Register set
- Stack

**Threads within a process share:**

- Code section
- Data section
- OS resources (e.g., open files and signals)

### 2.2 Benefits of Multithreading

Using multiple threads within a single process offers several key advantages:

- **Responsiveness**: An application can remain responsive to the user even if part of it is blocked or performing a lengthy operation.
- **Resource Sharing**: Threads share the memory and resources of their parent process by default, which is simpler than inter-process communication.
- **Economy**: It is significantly cheaper to create and switch between threads than it is to create and switch between processes.
- **Scalability**: An application can take full advantage of multiprocessor architectures by running multiple threads in parallel on different cores.

### 2.3 Multithreading Models

There are three primary models for mapping user-level threads to kernel-level threads.

### Many-to-One

This model maps many user-level threads to a single kernel thread.

- **Characteristics**: If one thread makes a blocking system call, the entire process blocks. Multiple threads cannot run in parallel on multicore systems.
- **Examples**: Solaris Green Threads, GNU Portable Threads.

### One-to-One

This model maps each user-level thread to a dedicated kernel thread.

- **Characteristics**: Provides more concurrency than the many-to-one model. Creating a user thread requires creating a corresponding kernel thread, which can create overhead and limit the number of threads a process can have.
- **Examples**: Windows, Linux, Solaris 9 and later.

### Many-to-Many

This model maps multiple user-level threads to a smaller or equal number of kernel threads.

- **Characteristics**: Allows the operating system to create a sufficient number of kernel threads to balance performance and efficiency.
- **Examples**: Solaris prior to version 9, Windows with the ThreadFiber package.

### 2.4 Thread Cancellation

Thread cancellation is the task of terminating a thread before it has completed.

There are two primary approaches:

- **Asynchronous cancellation**: One thread immediately terminates the target thread. This is risky because the operating system will not reclaim all system resources from a canceled thread. Therefore, canceling a thread asynchronously may not free a necessary system-wide resource.
- **Deferred cancellation**: The target thread periodically checks a flag to see if it should terminate itself, allowing it to exit gracefully.

### 2.5 Signal Handling (Multi-threaded)

In UNIX systems, a signal is used to notify a process that a specific event has occurred. In a multi-threaded process, a signal must be delivered to one or more of the threads. The options for delivery include:

- Deliver the signal to the specific thread to which the signal applies.
- Deliver the signal to every thread in the process.
- Deliver the signal to certain designated threads in the process.
- Assign a specific thread to receive all signals for the process.

## 3. Comparison: Process vs. Thread

The following table summarizes the fundamental differences between processes and threads.

| Comparison Aspect           | Process                                                                                         | Thread                                                                          |
| --------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Resource Usage**          | Heavyweight and resource-intensive.                                                             | Lightweight, requiring fewer resources.                                         |
| **Switching**               | Requires intervention from the Operating System.                                                | Does not require OS intervention.                                               |
| **Memory & File Resources** | Each process has its own separate memory and files.                                             | Threads share the memory and open files of their process.                       |
| **Blocking Behavior**       | When a process blocks, its entire execution is halted until the event it is waiting for occurs. | If one thread blocks, other threads in the same process can continue executing. |
| **Resource Efficiency**     | Running multiple processes uses more resources.                                                 | More efficient, using fewer resources for concurrent tasks.                     |
| **Independence**            | Processes operate independently of each other.                                                  | Threads within a process can access and modify each other's data.               |

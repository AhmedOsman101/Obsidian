# Lecture 3: Processes and Threads

## 1 The Fundamentals of a Process

### 1.1 Introduction to Processes

A process is one of the most fundamental concepts in a modern operating system. To understand how an OS can seem to do many things at once—run your web browser, play music, and update files simultaneously—we must first understand how it manages individual tasks. The first step in that journey is understanding the process.

In simple terms, a **process is a program in execution**. When you run an application, the OS creates a process to manage it. To run successfully, a process requires certain system resources, which are allocated to it by the operating system either at creation or during its execution.

Key resources required by a process include:

- CPU time
- Memory
- Files
- I/O devices

### 1.2 Distinguishing Programs from Processes

While related, the terms "program" and "process" are not interchangeable. A program is a passive set of instructions, while a process is the active execution of those instructions. Let's break down the key distinctions in a table:

| Concept     | Description                                                                                                                        |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Program** | A passive entity, such as an executable file, stored on a disk.                                                                    |
| **Process** | An active entity with a program counter and associated resources. It is a program that has been loaded into memory and is running. |

_This distinction is a classic exam question, so be sure you can explain it clearly._

A single program can become several concurrent processes. For example, if multiple users on a system execute the same program (like a text editor), the OS will create a separate process for each user instance.

### 1.3 The Structure of a Process in Memory

When an executable file is loaded into memory to become a process, the OS organizes it into several distinct parts:

- **Text Section**: The program code itself.
- **Data Section**: Contains all global variables.
- **Stack**: Holds temporary data such as function parameters, return addresses, and local variables.
- **Heap**: Memory that is dynamically allocated to the process during its run time.
- **Current Activity**: Includes the value of the program counter and the contents of the processor's registers.

### 1.4 The Process Lifecycle: States of Execution

As a process runs, its state changes depending on its current activity. An OS tracks the state of every process to manage system resources effectively. The five primary process states are:

- **new**: The process is in the process of being created.
- **running**: The process's instructions are currently being executed by a CPU.
- **waiting**: The process is paused, waiting for some event to occur (e.g., completion of an I/O operation).
- **ready**: The process is in main memory and is waiting to be assigned to a processor to run.
- **terminated**: The process has finished its execution.

To keep track of a process's current state and all its associated information, the operating system uses a data structure called the Process Control Block.

## 2. Operating System Management of Processes

### 2.1 Introduction to Process Management

The operating system is responsible for managing all system and user processes to ensure the computer operates efficiently and fairly. This involves a collection of critical activities that allow multiple processes to coexist and share hardware resources without interfering with one another.

Key process management tasks performed by the OS include:

- The creation and deletion of both user and system processes.
- The scheduling of processes.
- Providing mechanisms for process synchronization, communication, and deadlock handling.

### 2.2 The Process Control Block (PCB)

For each process, the operating system maintains a **Process Control Block (PCB)**, which is also sometimes called a task control block. This data structure serves as the official record of the process, storing all the information the OS needs to manage it.

Information stored within a PCB includes:

- **Process state**: The current state of the process (e.g., `ready`, `running`, `waiting`).
- **Program counter**: The address of the next instruction to be executed for this process.
- **CPU registers**: The contents of all process-centric registers, which must be saved when the process is interrupted.
- **CPU scheduling information**: The process's priority, pointers to scheduling queues, and other scheduling parameters.
- **Memory-management information**: Information on the memory allocated to the process.
- **Accounting information**: CPU time used, clock time elapsed since start, time limits, and other similar metrics.
- **I/O status information**: A list of I/O devices allocated to the process and a list of its open files.

**Exam Tip:** Think of the PCB as the "passport" for a process. When a process is not running, all of its vital information is stored in the PCB. A context switch is essentially the OS putting away one passport and opening another.

### 2.3 Context Switching

When the CPU needs to switch from executing one process to another, the system must perform a **Context Switch**. This involves saving the current context (CPU registers, process state, etc.) **to** its PCB and loading the saved context of the new process **from** its PCB.

This is a necessary function for concurrent execution, but it comes at a cost. Context-switch time is pure **overhead**; the system does no useful application-level work while saving and loading states. The duration of a context switch is influenced by two main factors:

1. The complexity of the OS and the PCB.
2. The level of hardware support (e.g., some hardware provides multiple sets of registers per CPU, allowing multiple contexts to be loaded at once).

### 2.4 Process Scheduling

The core purpose of process scheduling is to maximize CPU utilization in a time-sharing system by efficiently switching the CPU among processes. The process scheduler selects an available process from a set of queues for execution on the CPU.

- **Job queue**: Contains all processes in the system.
- **Ready queue**: Contains all processes residing in main memory that are ready and waiting to execute.
- **Device queues**: Contains processes that are waiting for a specific I/O device.

Different schedulers manage these queues:

- **Long-term scheduler (job scheduler)**: Selects processes from the job queue and brings them into the ready queue. It is invoked infrequently (seconds or minutes) and controls the degree of multiprogramming (the number of processes in memory).
- **Short-term scheduler (CPU scheduler)**: Selects a process from the ready queue and allocates the CPU to it. It is invoked very frequently (milliseconds) and must be extremely fast.

In some systems, an optional **Medium-term scheduler** is used to temporarily remove a process from memory and store it on disk. This action, known as **swapping**, can be used to reduce the degree of multiprogramming.

Processes can generally be described in one of two ways:

- **I/O-bound process**: Spends more time performing I/O operations than computations, characterized by many short CPU bursts.
- **CPU-bound process**: Spends more time performing computations, characterized by a few very long CPU bursts.

_The short-term scheduler must create a good process mix in the ready queue, balancing I/O-bound and CPU-bound processes to ensure both the CPU and I/O devices remain as busy as possible._

A good mix of I/O-bound and CPU-bound processes is key for an efficient system. However, managing this at the process level can be clumsy and slow. This is precisely the problem that led to the development of a more granular unit of execution: the thread, which allows for fine-grained concurrency _within_ a single process.

## 3. The World of Threads

### 3.1 Introduction to Threads

A thread is a "lightweight" unit of execution that operates within the context of a process. The concept was developed to allow a single process to perform multiple tasks concurrently without the high overhead of creating separate processes for each task.

Formally, a **thread** is a basic unit of CPU utilization. It is comprised of:

- A thread ID
- A program counter (PC)
- A register set
- A stack

Critically, a thread **shares** the following resources with other threads belonging to the same process:

- The code section (text section)
- The data section
- Other OS resources, such as open files

### 3.2 Motivation and Benefits

The primary motivation for threads is efficiency. Process creation is a "heavy-weight" operation that consumes significant time and resources. In contrast, thread creation is "light-weight," making it much faster and less resource-intensive to create and switch between threads than between processes.

#### Example: Word Processor

A modern word processor might use multiple threads to improve user experience:

- One thread for displaying graphics and text.
- A second thread for responding to user keystrokes.
- A third thread for performing spelling and grammar checks in the background.

#### Example: Web Server

A busy web server may need to handle thousands of client requests concurrently.

- If the server ran as a single-threaded process, it could only service one client at a time, forcing others to wait.
- By creating a separate thread for each incoming request, the server can service many clients in parallel, dramatically improving response time.

The primary benefits of multithreading can be summarized as follows:

- **Responsiveness**: An application can remain responsive to the user even if one part of it is blocked or performing a lengthy operation.
- **Resource Sharing**: Threads share the memory and resources of their parent process by default, which is simpler and more efficient than sharing memory between processes.
- **Economy**: It is cheaper and faster for the OS to create and manage threads than it is to create and manage processes. Thread switching also has lower overhead than context switching between processes.
- **Scalability**: A multithreaded process can take full advantage of multiprocessor architectures by running multiple threads in parallel on different CPU cores.

### 3.3 Multithreading Models

There needs to be a relationship between the user-level threads created by an application and the kernel-level threads managed by the OS. This relationship is defined by one of three common models.

#### Many-to-One Model

In this model, many user-level threads are mapped to a single kernel thread.

- **How it works**: Thread management is handled in user space, which is efficient.
- **Disadvantage**: If one user thread makes a blocking system call, the entire process will block, as only one thread can be in the kernel at a time. Multiple threads cannot run in parallel on multicore systems.
- **Examples**: Solaris Green Threads, GNU Portable Threads.

#### One-to-One Model

In this model, each user-level thread maps directly to a kernel thread.

- **How it works**: Creating a user thread creates a corresponding kernel thread.
- **Advantage**: This model provides more concurrency than the many-to-one model, as a blocking call by one thread does not affect the others. It also allows threads to run in parallel on multiprocessors.
- **Disadvantage**: Creating a user thread requires creating a kernel thread, which carries overhead that can limit the total number of threads a system can support.
- **Examples**: Windows, Linux, Solaris 9 and later.

#### Many-to-Many Model

This model maps many user-level threads to a smaller or equal number of kernel threads.

- **How it works**: The number of kernel threads is specific to the application or the machine. Developers can create as many user threads as needed, and the corresponding kernel threads can run in parallel on a multiprocessor.
- **Advantage**: This model is the most flexible, as it suffers from neither of the major drawbacks of the other models. It avoids the blocking problem of the Many-to-One model (since the kernel can schedule another thread if one makes a blocking call) and avoids the overhead and scalability limits of the One-to-One model (since you can create many user threads without needing an equal number of kernel threads).
- **Examples**: Solaris prior to version 9, Windows with the ThreadFiber package.

These models define how threads are mapped, but the OS also needs mechanisms to manage individual threads throughout their lifecycle.

## 4. Advanced Thread Management Concepts

### 4.1 Introduction to Managing Threads

Once threads are created, their lifecycles must be managed. The operating system needs mechanisms to handle events like early termination or external notifications, which introduce unique challenges in a multithreaded environment that do not exist in single-threaded processes.

### 4.2 Thread Cancellation

**Thread Cancellation** is the task of terminating a thread before it has completed its work. The thread that is to be canceled is referred to as the **target thread**. There are two primary approaches to cancellation:

- **Asynchronous cancellation**: One thread immediately terminates the target thread.
- **Deferred cancellation**: The target thread periodically checks a flag to see if it should terminate itself, allowing it to exit in an orderly manner.

The primary danger of asynchronous cancellation is that the target thread may be terminated while it is in the middle of updating shared data or while it has system resources allocated to it. This can leave the system in an inconsistent or unstable state, as the operating system **will not reclaim** all the system resources.

**Key Takeaway:** Deferred cancellation is almost always preferred. Asynchronous cancellation is dangerous because it can interrupt a thread holding a lock or in the middle of a critical update, leaving shared resources in a corrupted state.

### 4.3 Signal Handling in Multithreaded Environments

In UNIX systems, a **signal** is used to notify a process that a particular event has occurred. A signal handler is a function that is called to process the signal. In a single-threaded process, the signal is simply delivered to that process. However, multithreading introduces a new challenge: which thread should receive the signal?

There are four potential options for delivering a signal in a multi-threaded process:

- Deliver the signal to the specific thread to which the signal applies.
- Deliver the signal to every thread in the process.
- Deliver the signal to certain threads within the process.
- Assign a specific thread to receive all signals for the process.

## 5. Summary: Process vs. Thread Comparison

A clear understanding of the differences between processes and threads is essential for mastering operating systems concepts. While both are related to program execution, they represent different levels of abstraction and have distinct characteristics regarding resource management and performance. The following table provides a final summary for exam review.

| Feature                     | Process                                                                                                                                | Thread                                                                                                                                   |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Weight**                  | **Heavyweight**. Process creation and context switching are resource-intensive and slow.                                               | **Lightweight**. Thread creation and switching are fast and have low overhead.                                                           |
| **Memory/Resource Sharing** | Processes are isolated and do not share memory by default. Sharing requires explicit mechanisms like shared memory or message passing. | Threads within the same process share the same memory space (code, data, files) by default. Each thread has its own stack and registers. |
| **Independence**            | Processes are independent of each other. If one process crashes, it does not affect other processes.                                   | Threads are not independent. If one thread crashes, it can take down the entire process.                                                 |
| **Context Switching**       | Switching between processes requires a full context switch, which involves the OS saving and loading the entire PCB. This is slow.     | Switching between threads of the same process is faster because shared resources like memory maps do not need to be reloaded.            |

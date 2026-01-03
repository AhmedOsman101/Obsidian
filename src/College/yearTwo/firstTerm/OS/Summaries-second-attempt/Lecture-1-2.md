# Lecture 1-2: Fundamentals of Operating Systems

## 1. Core Concepts of Operating Systems

#### 1.1. Introduction

The Operating System (OS) is the core software that manages all of a computer's hardware and provides the foundation upon which all other programs run.

#### 1.2. Definition and Goals

An Operating System is formally defined as a program that acts as an intermediary between a user of a computer and the computer hardware. Its primary goals are to:

- Execute user programs and make solving user problems easier.
- Make the computer system convenient to use.
- Use the computer hardware in an efficient manner.

#### 1.3. Core Components

At the heart of the OS is the **kernel**, which is "the one program running at all times on the computer." All other software falls into one of two categories:

- **System Program:** A program that ships with the operating system.
- **Application Program:** All other programs, such as word processors or web browsers.

#### 1.4. Transition

To achieve its goals, an OS provides a specific set of functions and services that create a structured environment for programs to run.

## 2. Services Provided by Operating Systems

#### 2.1. Introduction

An operating system provides a structured environment for program execution by offering a suite of essential services to users and their programs.

#### 2.2. List of Services

The eight core services provided by an operating system are:

1. **Program execution:** The OS must be able to load a program into memory, run that program, and allow it to end its execution either normally or abnormally.
2. **I/O operations:** A running program may require input or output from a file or device. The OS provides a means for programs to perform I/O, as users typically cannot control these devices directly for reasons of efficiency and protection.
3. **File-system manipulation:** The OS manages files and directories, enabling programs to read, write, create, and delete them. This service often includes permission management to control access based on file ownership.
4. **Communications:** The OS facilitates the exchange of information between processes, which can occur on the same computer or across a network. This is implemented via _shared memory_ or _message passing_.
5. **Error detection:** The OS constantly monitors for errors that may occur in hardware (CPU, memory), I/O devices, or user programs (e.g., an illegal memory access) and takes appropriate action to ensure consistent computing.
6. **Resource allocation:** When multiple users or jobs are running concurrently, the OS manages and allocates system resources (such as CPU time, memory, and I/O devices) to each of them.
7. **Accounting:** The system keeps track of which users are using specific computer resources and in what amounts.
8. **Protection and security:** Protection involves ensuring all access to system resources is controlled internally, while security focuses on defending the system from external threats, such as by requiring user authentication and securing I/O devices from invalid access.

#### 2.3. Transition

These fundamental services have been implemented and adapted across different types of computer systems throughout the history of computing.

## 3. Historical Overview of Computer Systems

#### 3.1. Introduction

The design of operating systems has evolved significantly to meet changing computational demands, from the large, centralized mainframes of early computing to the modern, interconnected distributed systems of today.

#### 3.2. System Type Summaries

**Mainframe & Batch Systems**

- **Physical Nature:** These were physically enormous machines run from a console, using card readers and tape drives for input and line printers and tape drives for output.
- **User Interaction:** The user did not interact directly with the system. Instead, they submitted a "job" (program, data, and control information) on punch cards to a human operator.
- **Batching:** To improve efficiency, operators would batch together jobs with similar needs and run them as a group.

**Multiprogrammed Systems**

- **Core Concept:** Multiprogramming keeps several jobs in main memory simultaneously.
- **CPU Utilization:** The CPU is multiplexed among the jobs. When one job has to wait for an I/O operation, the OS switches the CPU to another job, maximizing CPU usage.

**Time-Sharing Systems**

- **Evolution:** This is a logical extension of multiprogramming.
- **User Interaction:** The CPU switches between jobs so frequently that users can interact with each program while it is running.
- **Simultaneous Use:** This model allows multiple users to share the computer at the same time, each with their own interactive session.

**Personal Computer (PC) Systems**

- **Definition:** A computer system dedicated to a single user.
- **Design Goals:** The primary goals are user convenience and responsiveness.

**Multiprocessor (Parallel) Systems**

- **Definition:** These systems feature more than one CPU in close communication, sharing memory and a clock. They are considered **"tightly coupled."**
- **Advantages:**
  - **Increased throughput:** More work is done in less time.
  - **Economy:** Sharing peripherals, storage, and power supplies is more economical than using multiple single-processor systems.
  - **Increased reliability:** The failure of one processor does not halt the entire system.
- **Types:**
  - **Symmetric Multiprocessing (SMP):** Each processor runs an identical copy of the OS. Most modern operating systems support this model.
  - **Asymmetric Multiprocessing:** A master processor assigns specific tasks to slave processors. This is more common in extremely large systems.

**Distributed Systems**

- **Definition:** These systems distribute computation among several physical processors and are considered **"loosely coupled."**
- **Memory Model:** Each processor has its own local memory, and they communicate over networks or high-speed buses.
- **Advantages:**
  - **Resource Sharing:** Users can access resources (like files or printers) located on other computers in the network.
  - **Computation Speed-up:** A complex task can be broken down and run on multiple processors simultaneously (load sharing).
  - **Reliability:** The failure of one processor does not halt the entire system; its workload can be picked up by others.
  - **Communications:** Processes can exchange information with each other across different computers.

#### 3.3. Transition

The functionality of these diverse systems is made possible by the underlying organization of the computer hardware and the way its components interact.

## 4. Computer System Organization and Operation

#### 4.1. Introduction

A modern computer system's operation relies on the coordinated interaction of one or more CPUs and multiple device controllers, which are connected through a common bus that provides access to shared memory.

#### 4.2. Concurrent Execution and I/O

CPUs and I/O devices can execute concurrently, competing for memory cycles. Each device is managed by a **device controller**, which has a **local buffer** for temporary data storage. The I/O process works as follows: the CPU moves data from main memory to the controller's local buffer (or vice versa), and the controller then handles the transfer of that data to or from the physical device.

#### 4.3. Interrupts

The interrupt mechanism is fundamental to OS operation and allows devices to communicate with the CPU. The process occurs as follows:

- A device controller signals the CPU that it has completed an operation by triggering an **interrupt**.
- The CPU pauses its current task and uses the **interrupt vector** (a table of memory addresses) to locate the appropriate **interrupt service routine** for the specific device.
- Control is then transferred to this service routine, which handles the event before returning control to the interrupted task.
- Interrupts can be triggered by hardware or by software. A software-triggered interrupt, executed via a special operation, is also known as a **system call**.

#### 4.4. Transition

This constant movement of data between devices, controllers, and memory relies on a well-defined storage structure.

## 5. Storage Structure and Caching

#### 5.1. Introduction

To balance performance with capacity and cost, computer storage is organized in a hierarchy based on speed, cost, and volatility.

#### 5.2. Storage Hierarchy

- **Main Memory:** This is the only storage that the CPU can access directly. It is typically implemented with volatile memory and allows for random access.
- **Secondary Storage:** This serves as a nonvolatile extension of main memory, providing large storage capacity. Common examples include traditional hard disks (HDDs) and modern solid-state disks (SSDs).

#### 5.3. Caching

**Caching** is a fundamental principle where information is copied from a slower storage system to a faster one temporarily.

- When data is needed, the faster storage (the **cache**) is checked first.
- If the information is present (a "hit"), it is used directly. If it is not (a "miss"), the data is first copied from the slower storage into the cache and then used from there.
- In the storage hierarchy, main memory can be viewed as a cache for secondary storage.

#### 5.4. Transition

The data managed by these storage systems is fundamentally represented in digital units.

## 6. Digital Data Representation

#### 6.1. Introduction

All digital information on a computer is represented using a set of standard measurement units.

#### 6.2. Core Units

- **Bit:** The smallest unit of data, representing a single binary value (a 1 or a 0).
- **Byte:** A group of 8 bits.

#### 6.3. Data Size Prefixes

Larger quantities of data are expressed using standard prefixes, where each unit is 1024 times larger than the previous one.

- **Prefixes**:
  - Kilobyte (KB): $2^{10}$ bytes (1024 bytes).
  - Megabyte (MB): $2^{20}$ bytes (1024 KB).
  - Gigabyte (GB): $2^{30}$ bytes (1024 MB).
  - Terabyte (TB): $2^{40}$ bytes (1024 GB).
  - Petabyte (PB), Exabyte (EB), Zettabyte (ZB), Yottabyte (YB) follow similarly.

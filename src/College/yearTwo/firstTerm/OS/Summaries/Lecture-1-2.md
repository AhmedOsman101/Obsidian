# Lecture 1-2: Fundamentals of Operating Systems

## 1. The Fundamental Role of an Operating System

To master the study of operating systems, the essential first step is to understand its core definition and fundamental goals. An OS is the foundational software that manages all the hardware and software resources of a computer, acting as the critical link between the user's intentions and the machine's actions.

At its most basic level, an Operating System is a program that manages the computer's hardware. It provides a basis for application programs and acts as a bridge between the user and the hardware. The most formal definition from the lecture notes describes it as:

A program that acts as an intermediary between a user of a computer and the computer hardware.

Within this structure, it's important to differentiate between the core of the OS and other programs running on the system:

- **The Kernel:** This is described as "the one program running at all times on the computer." It is the central component of the OS that manages the system's resources.
- **System Programs:** These are programs that are shipped with the operating system but are not part of the kernel.
- **Application Programs:** These are all other programs, such as word processors, web browsers, or video games, used to solve the computing problems of users.

The OS is designed to achieve three primary goals:

1. **Easier Problem Solving:** The primary goal is to execute user programs in a way that makes it easier for users to solve their problems, abstracting away the complex hardware details.
2. **Convenience:** The OS aims to make the computer system convenient and straightforward to use.
3. **Efficiency:** A key objective is to manage the computer hardware in an efficient manner, ensuring that resources like the CPU and memory are utilized effectively.

With these high-level goals in mind, we can now examine the specific functions, or services, that an operating system provides to achieve them.

## 2. The Eight Essential Services of an Operating System

The strategic importance of an operating system is best understood through the services it provides. These services are the primary functions that enable both users and applications to interact with the computer hardware effectively, efficiently, and safely. They form the building blocks for all other software running on the machine.

### 2.1 Program Execution

The system must be able to load a program into memory and run it. The OS handles all the steps required for this process and must also provide a mechanism for the program to end its execution, whether that termination is normal or abnormal (due to an error).

### 2.2 I/O Operations

A running program frequently requires input or output (I/O), which could involve a file or a physical I/O device.

- For reasons of efficiency and protection, users are generally not allowed to control I/O devices directly.
- Therefore, the operating system must provide a standardized means for programs to perform I/O operations.

### 2.3 File-System Manipulation

Programs need to interact with files and directories in a structured way. The OS provides the services for these interactions.

- This includes the ability to read and write files and directories.
- It also includes creating and deleting them, searching for a specific file, and listing file information.
- Some operating systems extend this service to include permissions management, allowing or denying access to files and directories based on ownership.

### 2.4 Communications

Processes often need to exchange information with one another. The OS facilitates this communication.

- Communication can occur between processes running on the same computer or between processes on different systems connected by a network.
- The OS may implement this via _shared memory_ (where processes read and write to a common memory section) or _message passing_ (where the OS moves formatted packets of information between processes).

### 2.5 Error Detection

An operating system must constantly be detecting and responding to errors to ensure correct and consistent computing. Errors can occur in various places:

- In the CPU and memory hardware (e.g., a memory error, power failure).
- In I/O devices (e.g., a network connection failure, lack of paper in a printer).
- In a user program (e.g., an arithmetic overflow, an attempt to access an illegal memory location).

For each type of error, the OS is responsible for taking the appropriate corrective action.

### 2.6 Resource Allocation

When multiple users or multiple jobs are running concurrently, system resources must be allocated to each of them. The OS is responsible for managing many different types of resources and distributing them as needed.

### 2.7 Accounting

To manage a multi-user system effectively, it is important to keep track of resource usage. The OS provides accounting services to monitor which users use how much and what kinds of computer resources.

### 2.8 Protection and Security

The OS is responsible for protecting the system's resources and ensuring its security.

- **Protection** involves ensuring that all access to system resources is controlled.
- **Security** involves defending the system from outsiders. This requires users to authenticate themselves to gain access to system resources. It also extends to defending external I/O devices, including network adapters, from invalid access attempts and to recording all such connections for detection of break-ins.

The evolution of these services is deeply connected to the historical progression of computer systems themselves.

## 3. Historical Evolution of Operating Systems

Understanding the historical progression of operating systems is not just an academic exercise; it reveals how and why modern OS features like multiprogramming, time-sharing, and user interaction were developed in response to changing hardware capabilities and user needs.

### 3.1 Mainframe Systems

Mainframes were the first computers used for large-scale commercial and scientific applications. Their operating systems evolved significantly over time.

- **Batch Systems:** In early batch systems, the user had no direct interaction with the computer. A user would prepare a "job"—consisting of the program, data, and control information—on punch cards and submit it to a human operator. The common input devices were **card readers and tape drivers**. To improve efficiency, the operator would batch together jobs with similar needs and run them as a group. The OS's main task was simple: transfer control automatically from one job to the next. The output, delivered via **line printers, tape drivers, and card punches**, included not just the program's results but also a **dump of the final memory and the register content for debugging**.
- **Multiprogrammed Systems:** This was a major advancement where several jobs were kept in main memory at the same time. The OS would pick and execute one job. If that job had to wait for a task (like an I/O operation), the OS would switch the CPU to another job in memory. This kept the CPU busy and improved overall system utilization.
- **Time-Sharing Systems:** As a logical extension of multiprogramming, time-sharing systems switch between jobs so frequently that users can interact with each program while it is running. This innovation provided direct communication between the user and the system (via keyboard or mouse) and allowed multiple users to share the computer simultaneously.

### 3.2 Personal Computer Systems

The advent of personal computers brought about systems dedicated to a single user. The focus shifted away from maximizing CPU utilization and toward user convenience and responsiveness. These systems adopted technology developed for larger operating systems but often did not need advanced protection features, as an individual had sole use of the machine.

### 3.3 Multiprocessor (Parallel) Systems

These are "tightly coupled" systems that contain more than one CPU in close communication, sharing the system memory and clock. Their advantages include:

- **Increased throughput:** More work can be done in less time.
- **Economy:** It is cheaper to have one multiprocessor system than multiple single-processor systems because they share peripherals, storage, and power supplies.
- **Increased reliability:** The failure of one processor will not halt the system, only slow it down.

There are two primary models for multiprocessor systems:

- **Symmetric Multiprocessing (SMP):** Each processor runs an identical copy of the operating system. Most modern operating systems support this model, allowing many processes to run at once without a performance bottleneck.
- **Asymmetric Multiprocessing:** Each processor is assigned a specific task. A "master" processor schedules and allocates work to the "slave" processors. This model is more common in extremely large systems.

### 3.4 Distributed Systems

In contrast to tightly coupled multiprocessor systems, distributed systems are "loosely coupled." They distribute computation among several physical processors, where each processor has its own local memory. These processors communicate with one another through various communication lines, like high-speed buses. The advantages are:

- **Resources Sharing:** Users can access resources available on different machines in the network.
- **Computation speed up:** A task can be distributed among multiple processors (load sharing).
- **Reliability:** The failure of one machine does not necessarily affect the operation of others.
- **Communications:** The system facilitates communication between users and processes on different machines.

This high-level evolution of system architectures is built upon the fundamental mechanics of how a computer operates.

## 4. Core Concepts in Computer System Operation

To perform its functions, an OS must manage the fundamental interactions between the CPU, memory, and I/O devices. This section breaks down those core operational principles that allow a computer system to function.

### 4.1 System Organization and I/O

A basic computer system consists of one or more CPUs and multiple device controllers connected through a common bus, which provides access to shared memory. A key principle of operation is the concurrent execution of CPUs and devices, which all compete for memory cycles.

An I/O operation proceeds as follows: The CPU and I/O devices can execute concurrently. Each device controller, which is in charge of a specific device type, has a local buffer. The CPU moves data between main memory and this local buffer. When an I/O operation is complete (e.g., data has moved from the device to the controller's buffer), the device controller informs the CPU by causing an **interrupt**.

### 4.2 Interrupts

An interrupt is a signal sent to the CPU that temporarily stops its current activity. Its function is to transfer control to an interrupt service routine. This transfer is typically handled through an _interrupt vector_, which contains the memory addresses of all the service routines. Critically, the interrupt architecture **must save the address of the interrupted instruction** so that the CPU knows where to resume execution after the service routine is complete.

- **Hardware Interrupts:** Hardware can trigger an interrupt at any time by sending a signal to the CPU.
- **Software Interrupts:** Software can trigger an interrupt by executing a special operation called a **system call**.

### 4.3 The Storage Hierarchy

Storage systems within a computer are organized in a hierarchy based on three key factors:

- **Speed:** How fast data can be accessed.
- **Cost:** The price per unit of storage.
- **Volatility:** Whether the storage retains its contents when power is turned off.

The primary distinction is between **Main Memory** (the only large storage media the CPU can access directly, which is typically volatile) and **Secondary Storage** (a nonvolatile extension of main memory that provides large storage capacity). Examples of secondary storage include hard disks and solid-state disks.

### 4.4 Caching

Caching is a fundamental performance principle used at many levels in a computer system. The process involves copying information from a slower storage system into a faster one temporarily.

- When the CPU needs information, the faster storage (the cache) is checked first.
- If the information is there, it is used directly from the cache, which is very fast.
- If it is not there, the data is copied from the slower storage into the cache and then used.

Because the cache is always smaller than the storage it is caching, cache management—including its size and replacement policy—is an important design problem.

The operation of all these systems relies on storing and managing the basic units of digital data.

## 5. Appendix: Digital Data Representation

A clear understanding of the units used to measure digital data is essential for topics like memory management, storage, and file systems. The following table defines the basic units and common prefixes.

| Unit/Prefix       |            Definition/Equivalent             |
| ----------------- | :------------------------------------------: |
| **Bit**           | The smallest unit of data (a single 1 or 0). |
| **Byte**          |                   8 bits.                    |
| **Kilobyte (KB)** |                 1024 bytes.                  |
| **Megabyte (MB)** |                   1024 KB.                   |
| **Gigabyte (GB)** |                   1024 MB.                   |
| **Terabyte (TB)** |                   1024 GB.                   |

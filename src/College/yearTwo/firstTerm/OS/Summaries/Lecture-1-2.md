# Lecture 1-2: Fundamentals of Operating Systems

## 1.0 Executive Summary: Core Concepts for Exam Success

This summary provides a high-yield review of the fundamental concepts of operating systems, specifically tailored for exam preparation. It distills the most critical information into a clear and concise format, enabling you to focus on the core principles that are most likely to appear on your test.

To succeed, you must grasp several foundational concepts. An operating system (OS) is fundamentally an intermediary program between the user and the computer hardware, with the kernel being the core component that runs at all times. The evolution of computing drove OS design from simple batch systems focused on efficiency to multiprogrammed systems that kept the CPU busy, and finally to interactive time-sharing systems. A modern OS performs essential functions like managing program execution, allocating resources (CPU, memory), and ensuring protection and security. It interacts with hardware through mechanisms like interrupts—signals that demand the OS's attention—and optimizes performance using caching, which involves copying data to faster storage. Understanding the hierarchy of storage, from fast, volatile main memory to slower, nonvolatile secondary storage, is also critical.

This document will now explore these key topics in greater detail, providing a structured breakdown of the essential knowledge required for your exam.

## 2.0 The Role and Structure of an Operating System

A strategic understanding of an operating system's definition, goals, and position within a computer system's architecture is the foundation for mastering this subject. The OS is not an application but the platform upon which all other software runs and through which all hardware is controlled.

### Defining the Operating System

The primary definition of an Operating System (OS) is a program that acts as an intermediary between the user and the computer hardware. Its purpose is to create an environment in which a user can execute programs conveniently and efficiently.

The three core goals of an operating system are:

- **Execute user programs to simplify problem-solving:** The OS abstracts the hardware's complexity, allowing users and developers to focus on their tasks rather than on low-level machine operations.
- **Make the computer system convenient to use:** It provides user interfaces and manages system resources to create a responsive and intuitive user experience.
- **Utilize computer hardware efficiently:** The OS acts as a resource manager, ensuring that components like the CPU, memory, and I/O devices are used effectively and shared fairly among competing programs.

The **kernel** is the central component of the OS; it is the one program that is running at all times. All other software is divided into **system programs**, which are shipped with the OS, and **application programs**, such as word processors or web browsers.

### Analyzing the Computer System Structure

A computer system can be understood as a hierarchy of four distinct components, each with a specific role:

1.  **Hardware:** This base layer provides the fundamental computing resources, including the Central Processing Unit (CPU), memory, and input/output (I/O) devices.
2.  **Operating System:** This layer controls and coordinates the use of hardware among the various application programs for different users.
3.  **Application Programs:** This layer defines the ways in which system resources are used to solve the computing problems of the users. Examples include compilers, databases, video games, and web browsers.
4.  **Users:** This is the highest layer, consisting of people, machines, or other computers that interact with the application programs.

This structure clarifies how the OS functions as a bridge, translating high-level user requests into low-level hardware instructions. We will now turn to the specific functions the OS performs to fulfill this role.

## 3.0 Core Services of an Operating System

The services provided by an operating system are essential for creating a functional, efficient, and secure computing environment. They form the toolkit that application programs use to interact with the system's hardware and with each other.

1.  **Program Execution:** The OS is responsible for loading a program into memory, running that program, and handling its termination. This includes managing both normal program completion and abnormal termination due to errors.
2.  **I/O Operations:** A running program frequently needs to perform input or output with a file or a device. For reasons of efficiency and protection, users cannot control I/O devices directly. The OS provides a managed interface for all I/O operations.
3.  **File-System Manipulation:** The OS provides services that allow programs to create, delete, read, write, and search for files and directories. It also manages access control through permissions, dictating who can access which files and in what manner.
4.  **Communications:** Processes often need to exchange information. The OS facilitates this communication through two primary methods:
    - **Shared Memory:** Two or more processes read and write to a common, shared section of memory. This is typically used for communication between processes on the same computer.
    - **Message Passing:** The OS moves packets of information in a predefined format between processes. This is effective for processes on the same computer and essential for systems tied together by a computer network.
5.  **Error Detection:** The OS constantly monitors for errors to ensure "correct and consistent computing." It detects issues arising from various sources, including:
    - CPU and memory hardware (e.g., a memory error or a power failure).
    - I/O devices (e.g., a parity error on disk or a connection failure on a network).
    - User programs (e.g., an arithmetic overflow or an attempt to access an illegal memory location).
6.  **Resource Allocation:** In an environment where multiple users or multiple jobs are running concurrently, the OS must allocate resources—such as CPU cycles, memory space, and I/O devices—to each of them.
7.  **Accounting:** The OS keeps track of which users are using which resources and in what amounts. This information is useful for system monitoring and optimization.
8.  **Protection and Security:** These two related services are critical. **Protection** involves controlling the access of programs or users to the resources defined by the OS. **Security** involves defending the system from outside threats, which includes authenticating users before granting access and defending I/O devices from invalid access attempts.

These timeless services have been implemented in various ways across the different historical eras of operating systems.

## 4.0 The Evolution of Computing Systems

Understanding the historical evolution of operating systems is strategically important because it reveals the driving forces behind modern OS design. Each stage of development introduced new solutions to pressing problems like CPU inefficiency, lack of user interactivity, and the need for parallel processing.

### Mainframe Systems

Mainframes were the first computers used for large-scale commercial and scientific applications. Their operating systems evolved rapidly to improve efficiency.

- **Batch Systems:** In early systems, users did not interact directly with the computer. They submitted jobs on punch cards to an operator, who would batch together jobs with similar needs to run them as a group. The OS was simple, primarily responsible for transferring control from one job to the next.
- **Multiprogrammed Systems:** This was a major conceptual leap. To prevent the CPU from sitting idle while a job waited for a slow I/O operation, multiple jobs were kept in memory simultaneously. When one job had to wait, the OS would switch the CPU to another job, dramatically increasing CPU utilization.
- **Time-Sharing Systems:** As a logical extension of multiprogramming, time-sharing systems switch between jobs so frequently that users can interact with each program while it is running. This innovation enabled multiple users to share the computer simultaneously, using devices like keyboards and mice for direct communication.

### Personal Computer Systems

With the rise of personal computers (PCs), systems became dedicated to a single user. The primary design goals shifted from maximizing CPU utilization to prioritizing user convenience and responsiveness. These systems often did not require the advanced protection features found in multi-user mainframe environments.

### Multiprocessor (Parallel) Systems

These systems, also known as parallel systems, are "tightly coupled," meaning they feature multiple CPUs that share system memory and a common clock. This architecture offers three key advantages:

- **Increased throughput:** More work can be completed in less time by running processes in parallel.
- **Economical:** Sharing peripherals, storage, and power supplies is more cost-effective than using multiple single-processor computers.
- **Increased reliability:** If one processor fails, the system can continue to operate, albeit at a reduced speed.

| System Type                         | Core Operational Model                                                                                                                   |
| :---------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Symmetric Multiprocessing (SMP)** | Each processor runs an identical copy of the operating system. Many processes can run at once without performance deterioration.         |
| **Asymmetric Multiprocessing**      | A master processor is assigned to schedule and allocate work to the other "slave" processors. This is common in extremely large systems. |

### Distributed Systems

In contrast to multiprocessor systems, distributed systems are "loosely coupled." Computation is distributed across several processors that each have their own local memory. They communicate with one another over high-speed buses or networks. The primary advantages include resource sharing, computation speedup via load sharing, enhanced reliability, and robust communication capabilities.

The high-level architecture of these systems is made possible by the low-level management of hardware, which we will examine next.

## 5.0 Hardware Management and System Operation

An operating system's ability to manage hardware resources like the CPU, memory, and I/O devices is fundamental to its entire purpose. It acts as the traffic controller for all hardware interactions, ensuring orderly and efficient operation.

### Computer System Organization and I/O

A typical computer system is organized with one or more CPUs and multiple device controllers connected through a common bus to shared memory. The CPUs and devices execute concurrently, competing for memory access.

The process for an I/O operation involves several components:

1.  Each I/O device is managed by a **device controller**, which has a local buffer (a small amount of local memory).
2.  The CPU moves data between main memory and these local buffers.
3.  The device controller then moves the data between its buffer and the physical device.
4.  Upon completion of its task, the controller signals the CPU by causing an **interrupt**.

An **Interrupt** is a signal that transfers control to a specific service routine within the OS. It informs the CPU that an event requiring its attention has occurred. To handle the interrupt, the system uses an **interrupt vector**, which is a table containing the addresses of all the service routines. This allows the OS to look up and execute the correct routine for the specific interrupt received. A hardware interrupt is triggered by a device, while a software interrupt is triggered by a program executing a special instruction called a system call.

To manage the interaction between the OS and the hardware controllers, the system uses **device drivers**. A device driver is a piece of software that understands a specific device controller and provides a uniform interface between that controller and the OS kernel. This abstraction allows the kernel to communicate with different hardware devices without needing to know the specific details of each one.

### Storage Hierarchy and Caching

Computer storage is organized in a hierarchy based on three key characteristics: speed, cost, and volatility. The higher levels are faster and more expensive but are typically volatile (lose their contents when power is off).

- **Main Memory:** This is the only storage the CPU can access directly. It is generally implemented as Random Access Memory (RAM) and is volatile.
- **Secondary Storage:** This serves as a large, nonvolatile extension of main memory. Common examples include traditional Hard Disk Drives (HDDs) and the faster Solid-State Disks (SSDs).

**Caching** is a fundamental principle used to improve performance by copying information into faster storage temporarily. When the CPU needs data, it first checks the faster cache. If the data is present, it is used directly. If not, the data is copied from the slower storage into the cache and then used. Because the cache is always smaller than the storage it caches, cache size and the policy for replacing old data are critical design challenges.

### Digital Data Representation

- A **bit** is the smallest unit of data, representing a 1 or 0.
- A **byte** consists of 8 bits and is the common unit for measuring file sizes.

The standard hierarchy of data prefixes is based on powers of 2:

- **Kilobyte (KB):** $2^{10}$ bytes (1,024 bytes)
- **Megabyte (MB):** $2^{20}$ bytes (1,024 KB)
- **Gigabyte (GB):** $2^{30}$ bytes (1,024 MB)
- **Terabyte (TB):** $2^{40}$ bytes (1,024 GB)

This hierarchy continues with prefixes such as Petabyte (PB), Exabyte (EB), Zettabyte (ZB), and Yottabyte (YB).

These technical details provide the context for the final exam preparation checklist.

## 6.0 Exam Preparation Enhancements

This final section consolidates the most crucial information into quick-recall formats designed for efficient review and memorization before your exam.

### Key Concepts for Quick Recall

Associate the following core concepts with these simple phrases to anchor them in your memory:

- **Multiprogramming:** "Don't waste CPU time; when one job waits, switch."
- **Time-Sharing:** "Switch fast enough for users to interact."
- **Interrupt:** "The hardware's signal to the OS that something needs attention."
- **Caching:** "Store a copy nearby for faster access."

### Quick Review Checklist

Use this high-density list for rapid, last-minute review of the most essential definitions, facts, and comparisons.

- **The 3 primary goals of an OS:** Execute user programs, make the system convenient, and use hardware efficiently.
- **Shared Memory vs. Message Passing:** Shared Memory is when processes on the same computer read/write to the same memory area; Message Passing is when the OS moves packets of information between them, often across a network.
- **Symmetric vs. Asymmetric Multiprocessing:** In Symmetric (SMP), each processor runs an identical OS copy. In Asymmetric, a master processor assigns tasks to slave processors.
- **Tightly Coupled vs. Loosely Coupled Systems:** Tightly coupled (multiprocessor) systems share memory and a clock. Loosely coupled (distributed) systems have local memory and communicate over a network.
- **Purpose of an interrupt vector:** A table that contains the addresses of all the interrupt service routines, allowing the system to find the correct code to run when an interrupt occurs.
- **Storage Hierarchy Relationship:** As you move up the hierarchy (e.g., from disk to cache), storage becomes faster, more expensive per byte, and more likely to be volatile.

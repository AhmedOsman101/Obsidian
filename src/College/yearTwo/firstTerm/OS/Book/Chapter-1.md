---
title: Chapter 1
prev:
  text: "Book"
  link: "/College/yearTwo/firstTerm/OS/Book/index"
next:
  text: "Chapter 2"
  link: "/College/yearTwo/firstTerm/OS/Book/Chapter-2"
lastUpdated: false
---

## What an Operating System Is

An **operating system (OS)** is a program that acts as an **intermediary between a user and the computer hardware**. Its goals are to execute user programs, make the system convenient to use, and use hardware efficiently.

- **Kernel** — the core program that runs at all times and controls the hardware.
- **System programs** — programs shipped with the OS.
- **Application programs** — all other programs.

The OS is judged from two viewpoints:

| Viewpoint       | Core idea                                 | Goals                                                                                           |
| --------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **User view**   | OS makes the computer easy and convenient | Execute programs, convenience (CLI/GUI), problem-solving support, responsiveness, accessibility |
| **System view** | OS is a **resource manager**              | Efficiency, fairness, reliability & security, concurrency, scalability & flexibility            |

## Computer-System Structure and Organization

A computer system has four components: **hardware** (CPU, memory, I/O devices), the **operating system** (controls and coordinates hardware), **application programs** (define how resources are used), and **users** (people, machines, other computers).

At the hardware layer:

- The CPU and I/O devices execute **concurrently**.
- Each **device controller** manages one device type and has a **local buffer** for data in transit.
- A **device driver** is the OS software that tells the OS how to talk to a controller.
- A controller signals completion by raising an **interrupt**.

### Interrupts

An **interrupt** is a signal, from hardware or software, that temporarily stops the CPU so it can handle an urgent task.

- **Hardware interrupt** — raised by a device.
- **Software interrupt (exception or trap)** — caused by a software error (e.g., division by zero), a request for an OS service, or process problems (infinite loop, processes modifying each other or the OS).

The handling sequence matters because the CPU must not lose its place:

```mermaid
flowchart LR
  A[Device or software raises IRQ] --> B[CPU finishes current instruction and acknowledges]
  B --> C[Save CPU state: PC and registers]
  C --> D[Jump via Interrupt Vector Table to ISR]
  D --> E[Execute Interrupt Service Routine]
  E --> F[Restore saved state]
  F --> G[Resume original program]
```

The **Interrupt Vector Table (IVT)** maps each interrupt to the address of its **Interrupt Service Routine (ISR)**.

### Computer Startup (Booting)

1. Power on; the CPU enters a predefined reset state.
2. The CPU loads firmware from ROM/EEPROM (**BIOS** on older systems, **UEFI** on modern ones).
3. Firmware finds a bootable device and loads a **bootloader** (GRUB, LILO, Windows Boot Manager).
4. The bootloader loads the **OS kernel** into memory.
5. The kernel initializes process management, memory management, device drivers, and file systems.
6. Background services start and the user interface (CLI or GUI) launches.

## Storage Structure and Caching

Storage is a hierarchy differing in **speed, cost, and volatility**.

| Level         | Examples                                       | Volatile? | Key property                                                    |
| ------------- | ---------------------------------------------- | --------- | --------------------------------------------------------------- |
| **Primary**   | Registers, cache, main memory (RAM)            | Yes       | Directly accessible by the CPU; fastest                         |
| **Secondary** | HDD, SSD                                       | No        | Permanent; CPU cannot access directly, must be brought into RAM |
| **Tertiary**  | Optical disks (CD/DVD/Blu-ray), magnetic tapes | No        | Huge capacity, very slow, often manual                          |

- **Volatile** storage needs power (RAM, cache, registers); **non-volatile** keeps data without power (ROM, SSD, HDD, tapes).
- **Caching** copies information in use from slower to faster storage. The faster store is checked first; on a miss the data is copied in.
- A cache is always smaller than the storage it caches, so **cache size and replacement policy** are key design problems.

## Operating-System Responsibilities

The OS layer acts as a resource manager and provides these services:

| Function               | What the OS does                                                                                                                         |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Process management** | Create, schedule, synchronize, and terminate processes; handle IPC and deadlocks; allocate resources                                     |
| **Memory management**  | Track free/used memory, allocate and free it, protect processes from each other, swap and provide virtual memory, reduce fragmentation   |
| **Storage management** | Organize files and directories, track disk space, protect data, back up and recover                                                      |
| **Protection**         | Control access to resources, define access rights (read/write/execute/delete), isolate processes, contain faults                         |
| **Security**           | Defend against unauthorized access, viruses/malware, DoS, data theft; use authentication, authorization, encryption, firewalls, auditing |

> [!NOTE]
> **Protection** is internal: it controls how processes access system resources. **Security** is external: it defends the system against attacks from outside.

A **process** is a program in execution. It consists of program code (text), data (variables, heap), stack (function calls, parameters), the program counter, and CPU registers/resources.

## Execution Modes

| Mode                           | Definition                                                                                             | Goal                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| **Multiprogramming (batch)**   | Multiple jobs in memory; the OS switches to another job when one waits for I/O                         | Maximize **CPU utilization**                       |
| **Timesharing (multitasking)** | Extension of multiprogramming for interactive users; CPU time is split into **time slices (quantums)** | Give each user the illusion of a dedicated machine |

**Dual-mode operation** protects the OS by giving the CPU two modes:

- **User mode** — user applications run here; no direct hardware access and no privileged instructions.
- **Kernel mode (supervisor/system mode)** — OS code runs with full hardware access.

A **mode bit** in the CPU status register distinguishes them: **0 = kernel mode, 1 = user mode**.

| Event              | Description                                             |
| ------------------ | ------------------------------------------------------- |
| **System call**    | User program requests an OS service (e.g., read a file) |
| **Interrupt**      | Hardware signals the CPU (e.g., keyboard input)         |
| **Exception/trap** | Error or illegal instruction in a user program          |

Transition to kernel mode: a user process issues a **system call** -> a **trap** switches to kernel mode and sets the mode bit to 0 -> the OS executes the request -> a return-from-system-call instruction restores user mode (mode bit 1).

## Virtualization

**Virtualization** creates a virtual version of computing resources so multiple environments run independently on the same physical hardware. A **hypervisor (Virtual Machine Monitor, VMM)** divides hardware into **virtual machines (VMs)**, each running its own OS. Examples: VMware, VirtualBox, Microsoft Hyper-V.

## Computer-System Architectures

| Architecture                                    | Definition                                                            | Notes                                                                  |
| ----------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Single-processor**                            | One main CPU executes all instructions                                | May include special-purpose I/O processors; simple but limited         |
| **Multiprocessor (parallel / tightly coupled)** | Two or more CPUs share memory and a communication system              | Advantages: increased throughput, economy of scale, higher reliability |
| **Dual-core**                                   | One physical chip with two processing cores                           | Each core has its own ALU, registers, and cache                        |
| **Clustered**                                   | Independent nodes linked by a high-speed network acting as one system | High availability and load balancing                                   |
| **Distributed**                                 | Independent computers appearing as one coherent system                | Each node has its own CPU, memory, and storage                         |

Multiprocessor types: **Asymmetric Multiprocessing (AMP)** — one master CPU controls the others; **Symmetric Multiprocessing (SMP)** — all CPUs are equal and the OS schedules them.

| Feature          | Clustered                                       | Distributed                                 |
| ---------------- | ----------------------------------------------- | ------------------------------------------- |
| Coupling         | Tightly coupled                                 | Loosely coupled                             |
| Location         | Same physical location                          | Geographically distributed                  |
| Communication    | High-speed LAN                                  | LAN or WAN (Internet)                       |
| Shared storage   | Often shared (common disk)                      | Each node has its own storage               |
| Operating system | Usually same OS                                 | Different OS possible                       |
| Goal             | High availability, fault tolerance, performance | Resource sharing, scalability, transparency |
| Management       | Cluster management software                     | Distributed middleware                      |
| Examples         | Web server clusters, database clusters          | Google Cloud, Hadoop, Blockchain            |

## Computing Environments

| Environment            | Description                                                                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Traditional**        | Standalone desktops, laptops, servers; mostly local resources                                                                            |
| **Mobile**             | Smartphones and tablets with lightweight OS; wireless, portable, touch-based (Android, iOS)                                              |
| **Client-server**      | Clients request services from powerful servers; centralized control                                                                      |
| **Peer-to-peer (P2P)** | Every node is both client and server; no dedicated server (BitTorrent); cost-effective and scalable but less secure and harder to manage |
| **Cloud computing**    | Resources delivered over the Internet, paid per usage                                                                                    |
| **Real-time**          | Strict timing deadlines; correct only if constraints are met (air traffic control, medical devices, car braking)                         |

Cloud service models: **IaaS** (infrastructure: VMs, storage), **PaaS** (development platforms), **SaaS** (applications such as Gmail, Zoom). Deployment types: **public**, **private**, and **hybrid** cloud.

_9 min read (source: 26 min)_

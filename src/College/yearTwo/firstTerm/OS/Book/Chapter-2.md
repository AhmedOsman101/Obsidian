---
title: Chapter 2
prev:
  text: "Chapter 1"
  link: "/College/yearTwo/firstTerm/OS/Book/Chapter-1"
next:
  text: "Chapter 3"
  link: "/College/yearTwo/firstTerm/OS/Book/Chapter-3"
lastUpdated: false
---

## Operating-System Services

OS services fall into two groups: those helpful to **users**, and those that keep the **system** running efficiently.

| Group  | Service                      | Purpose                                                                                       |
| ------ | ---------------------------- | --------------------------------------------------------------------------------------------- |
| User   | **User interface**           | CLI, GUI, or Batch interface                                                                  |
| User   | **Program execution**        | Load a program, run it, end normally or abnormally (with error)                               |
| User   | **I/O operations**           | Read/write files or devices on a program's behalf                                             |
| User   | **File-system manipulation** | Create, delete, read, write, search files/directories; manage permissions                     |
| User   | **Communications**           | Exchange data via **shared memory** or **message passing** (packets moved by the OS)          |
| User   | **Error detection**          | Watch for errors in CPU/memory hardware, I/O devices, and user programs; debugging facilities |
| System | **Resource allocation**      | Share CPU cycles, memory, file storage, and I/O devices among concurrent users/jobs           |
| System | **Accounting**               | Track which users consume how much and what kind of resources                                 |
| System | **Protection and security**  | Control all access to resources; authenticate users and defend against invalid access         |

### User Interfaces

- **CLI (command-line interpreter / shell)** — direct command entry, e.g., `ls` lists directory contents.
- **GUI** — desktop metaphor with mouse, keyboard, icons, and windows; e.g., Windows, macOS "Aqua".
- Many systems ship both: Windows has a GUI plus the `command` shell; macOS has the Aqua GUI over a UNIX kernel; Linux has a CLI with optional GUI.

## System Calls

A **system call** is the mechanism that lets a user-space program request a service from the **kernel** — reading/writing files, allocating memory, creating processes, or touching hardware.

How a system call works:

1. The user program requests an OS service.
2. A special instruction switches the CPU from **user mode to kernel mode**.
3. The kernel performs the operation.
4. The result returns to the program and the CPU switches back to user mode.

| Category              | Example calls                               |
| --------------------- | ------------------------------------------- |
| File management       | `open()`, `read()`, `write()`, `close()`    |
| Memory management     | `mmap()`, `brk()`                           |
| Process control       | `fork()`, `exec()`, `exit()`                |
| Network communication | `socket()`, `connect()`, `send()`, `recv()` |
| Device management     | `read()`, `write()`, `ioctl()`              |

System calls are usually written in **C or C++** and are mostly reached through a high-level **Application Programming Interface (API)** rather than called directly.

> [!NOTE]
> **System calls** are the OS's own interface to hardware and kernel services. **APIs** are developer-friendly function collections that may call system calls internally.

### System-Call Example

When a program calls `open()`, the library function traps into the kernel with a **system call number** (an index). The OS keeps a **system call table** — an array of pointers to routines. The number selects the correct routine, and the kernel then checks file permissions/existence, allocates a **file descriptor**, loads file metadata into memory, and prepares for later reads/writes.

The standard C library shows the layering: `printf()` is a library call that eventually invokes the `write()` system call.

### Parameter Passing

User and kernel modes are isolated, so parameters must cross the boundary in a safe, standard way. There are three methods:

| Method                   | How it works                                                    | Advantage                                    | Limitation                                    |
| ------------------------ | --------------------------------------------------------------- | -------------------------------------------- | --------------------------------------------- |
| **Registers**            | Parameters placed in CPU registers before the call              | Fastest and simplest                         | Limited number of registers -> few parameters |
| **Memory block / table** | Parameters stored in a block; its address passed in a register  | Handles many parameters easily               | Slower due to memory access                   |
| **Stack**                | User pushes parameters; kernel reads them after the mode switch | Simple, compatible with high-level languages | Slower and less efficient than registers      |

```c
// Pass parameters in registers (x86-style)
mov eax, 13        // system call number for open()
mov ebx, filename  // parameter 1: address of filename
mov ecx, flags     // parameter 2: flags (e.g., read/write)

// Pass parameters in a memory block
struct params {
  char *filename;
  int flags;
  int mode;
} p;
system_call(SYS_OPEN, &p); // pass address of the block
```

### Types of System Calls

| Type                        | Representative operations                                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Process control**         | Create/terminate process, end/abort, load/execute, get/set attributes, wait for time or event, signal event, allocate/free memory, dump memory, debug, locks |
| **File management**         | Create/delete file, open/close, read/write/reposition, get/set attributes                                                                                    |
| **Device management**       | Request/release device, read/write/reposition, get/set attributes, attach/detach devices                                                                     |
| **Information maintenance** | Get/set time or date, get/set system data, get/set process/file/device attributes                                                                            |
| **Communications**          | Create/delete connection, send/receive messages, create/access shared memory, transfer status, attach/detach remote devices                                  |
| **Protection**              | Control access to resources, get/set permissions, allow/deny access                                                                                          |

## System Programs

**System programs** are high-level programs that interact with the OS to manage the system. They are not part of the kernel but help users with common tasks. They fall into seven categories:

1. **File management** — create, delete, copy, rename, print, list; manage directories and permissions (`cp`, `mv`, `rm`, `ls`; Windows File Explorer).
2. **Status information** — report system state and performance (`top`, `ps`, `df`, `free`; Task Manager).
3. **File modification** — edit file contents (`vim`, `nano`, `notepad`, `regedit`).
4. **Programming-language support** — compilers, interpreters, debuggers (`gcc`, `javac`, Python, `gdb`).
5. **Program loading and execution** — loaders and exec commands (`exec`, Windows Run dialog).
6. **Communications** — exchange data and messages (email, browsers, `ping`, `ssh`, `ftp`).
7. **Background services (daemons)** — run automatically in the background (`cron`, `syslogd`; Windows Services such as Print Spooler).

### System Calls vs System Programs

| Feature           | System Calls                                                             | System Programs                                                    |
| ----------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| Definition        | Low-level interface for programs to request OS services                  | High-level programs that interact with the OS to manage the system |
| Function          | Direct access to OS services (file handling, process management, memory) | Utilities for users (managing files, processes, configurations)    |
| Interaction level | Directly interacts with the kernel                                       | Runs in user space, using system calls internally                  |
| Examples          | `open()`, `read()`, `write()`, `fork()`, `exec()`, `exit()`, `kill()`    | `ls`, `mkdir`, `rm`, Task Manager, Disk Cleanup, antivirus         |
| Implementation    | Typically C or assembly, part of the kernel                              | High-level languages (C, Python, shell scripting)                  |

## Operating-System Design and Implementation

OS design is not "solvable" in one way; internal structures vary widely. Design starts by defining goals:

- **User goals** — convenient, easy to learn, reliable, safe, fast.
- **System goals** — easy to design, implement, and maintain; flexible, reliable, error-free, efficient.

Implementation uses a mix of languages:

| Language                   | Purpose                                                            | Examples                           |
| -------------------------- | ------------------------------------------------------------------ | ---------------------------------- |
| **Assembly**               | Low-level hardware control (device drivers, interrupt handlers)    | Early UNIX, parts of Windows/Linux |
| **C**                      | Main implementation language; balances performance and portability | Linux, UNIX, Windows               |
| **C++**                    | Object-oriented design and modular components                      | Some parts of Windows, macOS       |
| **Higher-level scripting** | Setup, scripting, automation                                       | Python                             |

## Operating-System Structure

A general-purpose OS is a very large program. Four common structures:

| Structure       | How it works                                                                                                                                        | Trade-off                                                    | Examples                              |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------- |
| **Monolithic**  | All OS services run in one large kernel-mode program                                                                                                | Fast but hard to maintain                                    | MS-DOS, traditional UNIX, early Linux |
| **Layered**     | Divided into layers, each using only the layer below                                                                                                | Modular, easy to debug and secure, but abstraction overhead  | THE system, early Windows NT          |
| **Microkernel** | Only essential functions (communication, scheduling) in kernel mode; other services run as user-mode processes communicating by **message passing** | Better security and modularity, but message-passing overhead | macOS (Darwin), QNX, Minix            |
| **Hybrid**      | Combines approaches                                                                                                                                 | Monolithic speed with microkernel modularity                 | Modern Linux, Windows NT, Solaris     |

**MS-DOS** is the classic **simple/monolithic** example: single-user, single-tasking, direct hardware access with no protection between user programs and the OS, the entire OS in one file, and a CLI only (`DIR`, `COPY`, `DEL`) with no built-in GUI.

_8 min read (source: 19 min)_

---
title: Lecture 6
prev:
  text: Lecture Five
  link: /College/yearOne/secondTerm/IntroToIot/Lectures/LectureFive
next:
  text: Lecture Seven
  link: /College/yearOne/secondTerm/IntroToIot/Lectures/LectureSeven
---

# Introduction to IoT - Lecture 6: Virtualization

## Virtualization

Virtualization is the process of creating a virtual version of hardware platforms, operating systems, storage, or network resources. It provides a layer of abstraction between computing resources and the applications using them. Key benefits include:

- Running multiple OS instances on one physical machine
- Improved IT throughput and cost efficiency through resource pooling

### Before and After Virtualization

#### Before Virtualization

- Single OS image per machine
- Software and hardware tightly coupled
- Running multiple applications on the same machine often creates conflict
- Underutilized resources
- Inflexible and costly infrastructure

#### After Virtualization

- Hardware-independence of operating system and applications
- Virtual machines can be provisioned to any system
- Can manage OS and application as a single unit by encapsulating them into virtual machines

### Virtualization Terminologies

- **Virtual Machine (VM)**: Software emulation of a physical machine with its own virtual hardware.
- **Guest OS**: Operating system installed on a VM.
- **Virtual Machine Monitor (VMM)**: Sits between the host OS and hypervisor, sometimes part of the hypervisor.
- **Hosted Virtualization**: Virtualization services run on a conventional OS.
- **Hypervisor**: Software that enables virtualization by managing VMs and hardware access.

### Virtualization Architecture

A layered structure:

- Physical Hardware
- Virtualization Layer
- Virtual Hardware
- Virtual Machines

### Types of Hypervisors

- **Type 1 (Bare-metal or Native)**: Runs directly on hardware. Examples:
  - VMware ESXi
  - Microsoft Hyper-V
  - Citrix XenServer (Xen)
  - KVM
- **Type 2 (Hosted)**: Runs on a traditional OS. Examples:
  - VMware Workstation Player
  - Microsoft Virtual PC
  - Oracle VirtualBox

| Criteria            | Type 1 Hypervisor      | Type 2 Hypervisor       |
| ------------------- | ---------------------- | ----------------------- |
| Runs on             | Bare metal (no OS)     | Conventional OS         |
| Virtualization Type | Hardware-level         | OS-level                |
| Speed               | Faster                 | Slower                  |
| Security            | More secure            | Less secure             |
| System Independence | Direct hardware access | Limited hardware access |
| Scalability         | Better                 | Limited                 |

### Benefits of Virtualization

- Resource sharing reduces cost
- VM isolation
- Encapsulation of computing environments
- Hardware independence
- Portability of VMs

### Levels of Virtualization

- Application-level (JVM, Panot, .NET)
- Library-level (WINE, WABI, vCU)
- OS-level (Jail, FVM, Ensim's)
- Hardware Abstraction Layer (HAL) level (VMware, Virtual PC, VirtualBox)
- Instruction Set Architecture (ISA) level (QEMU, BIRD, Dynamo)

### Containers

- Lightweight OS-level virtualization
- Packages code and dependencies
- Share host OS kernel
- Faster boot times and smaller footprint compared to VMs

### Virtualization vs. Containerization

| Aspect             | Virtual Machines                                  | Containers                                 |
| ------------------ | ------------------------------------------------- | ------------------------------------------ |
| **OS Support**     | Full OS per VM                                    | Shared host OS kernel                      |
| **Resource Usage** | Heavy, requires significant CPU, memory, storage. | Light, minimal overhead.                   |
| **Startup Time**   | Slower (minutes) due to OS boot.                  | Faster (seconds) as no OS boot is needed.  |
| **Isolation**      | Strong, each VM has its own OS.                   | Weaker, shares OS but isolates apps.       |
| **Use Case**       | Multi-OS, legacy apps                             | Microservices, cloud-native apps           |
| **Portability**    | Less portable due to full OS dependency.          | Highly portable with app and dependencies. |
| **Example**        | VMware VMs.                                       | Docker containers.                         |

**Summary**: VMs are robust and isolated but resource-intensive, while containers are efficient and fast.

## Distributed Computing

### Models

- **Peer-to-Peer Computing**
- **Cluster Computing**
- **Grid Computing**
- **Cloud Computing**
  - **Fog Computing**
  - **Edge Computing**

## Cloud Computing

Cloud computing delivers computing services (e.g., servers, storage, databases) over the internet using a pay-as-you-go model.

### Benefits

- Cost reduction
- Universal access
- Software always up-to-date
- Flexibility and scalability
- Big data support

### Deployment Models

- **Public Cloud**
- **Private Cloud**
- **Hybrid Cloud**
- **Community Cloud**

### Service Models

- **IaaS** (Infrastructure as a Service): Provides virtualized computing resources (e.g., servers, storage, networking)
- **PaaS** (Platform as a Service): Offers a platform for developing, testing, and deploying applications without managing underlying infrastructure.
- **SaaS** (Software as a Service): Delivers fully functional software applications over the internet on a subscription basis.

### Layered Architecture

Typically includes:

- Infrastructure Layer
- Platform Layer
- Application Layer

### Advantages

- 24/7 access to data
- Eliminates physical storage requirements
- Easily scalable and maintainable
- No local hardware/software installation
- Instant updates and maintenance

### Disadvantages

- Reduced control over data and infrastructure
- Security and privacy rely on the provider

## Cloud Computing Open Source Tools Timeline

- **OpenNebula**
- **Eucalyptus**
- **CloudStack**
- **OpenStack**
- **Kubernetes (for container orchestration)**

## Role of Cloud Computing in IoT

1. **Remote Computing Capabilities**: Eliminates reliance on on-prem infrastructure.
2. **Security & Privacy**: Automation reduces threat surfaces.
3. **Data Integration**: Centralized processing and analysis from distributed IoT sources.
4. **Minimal Hardware Dependency**: Cloud-based hosting allows for plug-and-play solutions.

---
prev:
  text: "CCNA"
  link: "/College/yearTwo/secondTerm/CCNA/index"
next:
  text: "Lecture 2"
  link: "/College/yearTwo/secondTerm/CCNA/Lectures/Lecture-2"
title: Lecture 1
---

# CCNA - Lecture 1

## Network Core Concepts

### What Defines a Network
- A **network** = two or more computers connected to exchange **information** (e-mail, files) or share **resources** (disk storage, printers).
- Connections use:
    - **Electrical cables** (copper)
    - **Fiber-optic cables** (light impulses for high speed)
    - **Wireless** (radio signals; no physical cable)
- *Requires both hardware (cables, NICs) and software (OS, communication protocols).*

### Network Capacity & Compatibility
- **Theoretical capacity** vs. **network throughput** (actual data transfer rate). Throughput is always lower due to overhead.
- **Protocol compatibility** ensures devices can communicate (e.g., both must use TCP/IP).
- **Software and Operating System Compatibility:** Servers and clients must support common protocols. Example: **AD DS (Active Directory Domain Services)** requires specific Windows Server versions and compatible clients.

## Network Building Blocks

### Core Hardware Components
- **Client computers (workstations):** End-user devices (typically desktops with Windows OS) that *access* network resources.
- **Server computers:** Powerful, dedicated machines running a **Network Operating System (NOS)** to *provide* shared resources (files, apps, databases). *Why?* Centralizes management and security.
- **Network Interface Card (NIC):** Hardware enabling a computer to connect to the network. Usually an **Ethernet card**, now often built into the motherboard.
- **Cable:** Physical medium.
    - **Twisted pair (10BaseT):** Most common for LANs.
    - **Coaxial (10Base2):** Older standard.
    - **Fiber-optic:** High speed, uses light, for backbone or long distances.
- **Switch:** Central connection device. Contains ports (e.g., 8, 16). Sends data *only* to the intended recipient, improving efficiency.
    - *Compare:* **Hub** (older) broadcasts data to all ports, wasting bandwidth.

### Wireless Networks
- Use **radio transmitters/receivers** instead of cables.
- **Advantage:** Flexibility – clients connect anywhere within broadcast range.
- **Disadvantage:** Less secure than wired networks.

### Network Operating Systems (NOS)
- Manages servers and network services. Key for building/maintaining networks.
- **Examples:**
    - **Windows Server** (2022, 2019, 2016...)
    - **Linux-based Server** (Debian, Red Hat Enterprise Linux)
    - **Virtualization Platforms** (VMware, KVM)

## Peer-to-Peer vs. Dedicated Server

| Feature | Peer-to-Peer (Workgroup) | Dedicated Server-Based |
| :--- | :--- | :--- |
| **OS Used** | Desktop Windows (95, XP, 10) | Server OS (Windows Server, Linux) |
| **Server Role** | Any computer can share resources | Computer dedicated *only* to serving |
| **Efficiency** | Low for many clients; not designed for heavy loads | High; optimized for concurrent requests |
| **Software Cost** | Built-in, no extra cost | Requires server OS license |
| **Use Case** | Small home/office (<10 computers) | Any network needing centralization, security, or >10 users |
- *Critical distinction:* Enabling file sharing on Windows 10 creates a peer-to-peer server. For a full-time, high-load server, a **server OS** is mandatory for efficiency and features.

## Network Classification by Size

### LAN (Local Area Network)
- Confined to a small geographic area (office, building).
- Uses building blocks above (cables, switches, NICs).

### WAN (Wide Area Network)
- Spans large geographic territory (city, region, country).
- Connects two or more **LANs** that are far apart.
- *Defined by distance, not computer count.* A WAN can have only 2 computers 3000 miles apart.

### MAN (Metropolitan Area Network)
- Size between LAN and WAN.
- Connects two or more LANs within the same *city*.
- Used when distance is too far for simple cable/wireless but too short for a full WAN.

## Network Topologies (Physical Layout)

### Bus Topology
- All nodes connected to a single cable ("the bus").
- **How it works:** Every packet is seen by *every* node. Each node checks if the packet is for it; if yes, it claims it; if no, it ignores it.
- **Failure Mode (Conditional Logic):** If the **main cable breaks**, the network splits. Nodes on the same side of the break can communicate, but nodes on opposite sides *cannot*.
- *Common in early LANs.*

### Star Topology
- All nodes connect to a central **switch or hub**.
- **How it works:** With a switch, packets go *only* to the intended recipient (or broadcast to all).
- **Failure Mode (Conditional Logic):** If a **cable breaks**, *only* that specific node is isolated. The rest of the network continues unaffected.
- *Most common modern LAN topology.*

### Expanding Stars (Hybrid)
- **Backbone:** A bus used to connect multiple switches/hubs, creating larger networks (e.g., connecting workgroups across a building).
- **Daisy-chaining:** Connecting one switch to another as if it were a node, then using the second switch as the center of a new star.

### Mesh Topology
- Nodes have multiple, redundant connections to each other.
- **How it works:** Provides **alternative routes** for data.
- **Failure Mode (Conditional Logic):** If one cable breaks, packets are automatically rerouted via another path. *Why?* Provides fault tolerance and reliability.
- **LANs:** Impractical – requires N NICs per computer and many cables (e.g., 8 computers need 7 NICs each and 28 cables). Not scalable.
- **WANs/MANs:** Common. **Routers** are arranged in a mesh-like pattern to ensure multiple paths between networks for reliability and performance.
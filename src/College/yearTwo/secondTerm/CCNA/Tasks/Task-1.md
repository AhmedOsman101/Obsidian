---
title: Task 1
prev:
  text: "Tasks"
  link: "/College/yearTwo/secondTerm/CCNA/Tasks/index"
next: false
---

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20240592                 |
| Section | 1                        |

# CCNA - Task 1

## 1. Topology Choice

### Selected Topology: Extended Star (Hierarchical Star)

The network uses an **Extended Star** topology, which is the most common modern LAN topology for medium-sized companies.

### Why This Topology?

As covered in Lecture 1, the **Star Topology** connects all nodes to a central switch or hub. The **Extended Star** expands this by connecting multiple switches together (daisy-chaining), using one switch as the center of a new star. This creates a hierarchical structure ideal for a 50-computer network.

### Advantages for a 50-Computer Company

1. **Fault Isolation**: If a cable breaks, only that specific node is isolated. The rest of the network continues unaffected (Lecture 1).
2. **Centralized Management**: All connections terminate at switches, making troubleshooting and maintenance straightforward.
3. **Scalability**: Adding new devices is as simple as connecting them to an available switch port.
4. **Performance**: Switches send data only to the intended recipient, unlike hubs which broadcast to all ports and waste bandwidth (Lecture 1).
5. **No Single Point of Failure**: Unlike Bus topology, where a break in the main cable splits the entire network (Lecture 1), the Extended Star isolates failures to individual segments.

### Limitations

1. **Dependency on Central Devices**: If a core switch fails, all devices connected to it lose connectivity.
2. **Cable Requirements**: Each device needs its own cable to the switch, increasing cabling costs compared to Bus topology.
3. **Port Limitations**: Each switch has a finite number of ports, requiring additional switches as the network grows.

---

## 2. Physical Components Used

### 2.1 Router (Cisco 2911)

| Aspect       | Detail                                                                                                                                                                                                       |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Quantity** | 1                                                                                                                                                                                                            |
| **Why**      | Routers connect different networks and provide the default gateway (Lecture 2). They use logical addresses (IP) to determine the next hop and do not forward broadcast packets, reducing network congestion. |
| **Role**     | Acts as the default gateway for all devices, routes traffic between VLANs, and provides the connection point to external networks (WAN/Internet).                                                            |

### 2.2 Switches (Cisco 2960, 24-Port)

| Aspect       | Detail                                                                                                                                                                                      |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Quantity** | 3                                                                                                                                                                                           |
| **Why**      | Switches are the central connection device in a Star topology (Lecture 1). They contain multiple ports and send data only to the intended recipient, improving efficiency compared to hubs. |
| **Role**     | Provide connectivity endpoints for all 50 PCs and the server. Each switch operates at Layer 2 (Data Link), using MAC addresses to forward frames to the correct port (Lecture 2).           |

### 2.3 Server

| Aspect       | Detail                                                                                                                                                                                                                  |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Quantity** | 1                                                                                                                                                                                                                       |
| **Why**      | A dedicated server running a Network Operating System (NOS) provides centralized management, security, and shared resources (Lecture 1). For networks with more than 10 users, a server OS is mandatory for efficiency. |
| **Role**     | Provides **DHCP** (automatic IP assignment via LAN-Pool: 192.168.1.10–59), **DNS** (name resolution for company.local -> 192.168.1.2), and file sharing services to all network clients.                                |

### 2.4 End Devices (PCs)

| Aspect       | Detail                                                                                                                        |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **Quantity** | 50                                                                                                                            |
| **Why**      | Client computers (workstations) are end-user devices that access network resources (Lecture 1).                               |
| **Role**     | Each PC connects to the network via a Network Interface Card (NIC) to access shared resources, internet, and server services. |

### 2.5 Cables

| Cable Type             | Usage                                            | Justification (Lecture 5)                                                                        |
| :--------------------- | :----------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| **Straight-through**   | PC -> Switch, Server -> Switch, Switch -> Router | Both ends use the same wiring standard (T568A or T568B). Used to connect different device types. |
| **Crossover**          | Switch -> Switch                                 | One end T568A, other end T568B. Used to connect same device types together.                      |
| **Console (Rollover)** | PC -> Router (for configuration)                 | Cisco proprietary cable for connecting a host serial port to router/switch console ports.        |

### 2.6 Why No Hubs?

Hubs are **not used** in this design. As stated in Lecture 1, hubs broadcast data to all ports, wasting bandwidth. Switches are superior because they send data only to the intended recipient, which is critical for a 50-computer network to avoid congestion.

---

## 3. Device Quantity Justification

### 3.1 How Many Switches?

**Calculation:**

- Total devices needing switch ports: 50 PCs + 1 Server = **51 devices**
- Each Cisco 2960 switch provides **24 ports**
- Inter-switch links require additional ports: 2 links between 3 switches = **2 ports**
- Uplink to router requires **1 port**
- **Total ports needed**: 51 + 2 + 1 = **54 ports**

| Switches | Total Ports | Usable for Devices (after uplinks) | Sufficient? |
| :------- | :---------- | :--------------------------------- | :---------- |
| 1        | 24          | 24                                 | No          |
| 2        | 48          | 46 (minus 2 for inter-switch)      | No          |
| **3**    | **72**      | **69** (minus 3 for uplinks)       | **Yes**     |

**Decision**: 3 switches provide 72 total ports. After accounting for 51 devices, 2 inter-switch links, and 1 router uplink (54 used), **18 ports remain** for future expansion.

### 3.2 How Many Routers?

**Decision**: 1 router is sufficient because:

- The network is a single LAN (Lecture 1: LAN = confined to a small geographic area like one building).
- One router provides the default gateway for all devices (Lecture 4: all devices must be configured with the default gateway address).
- The Cisco 2911 has multiple Gigabit Ethernet interfaces, enough for switch uplinks and WAN connectivity.
- Additional routers would only be needed if connecting multiple separate LANs (creating an internetwork, per Lecture 2).

### 3.3 Are Hubs Necessary?

**No.** Hubs are not necessary and are actively avoided because:

- Hubs operate at Layer 1 (Physical) and broadcast all data to every port (Lecture 1).
- This creates unnecessary network traffic and collisions.
- Switches operate at Layer 2 (Data Link), learn MAC addresses, and forward frames only to the correct port (Lecture 2).
- For 50 computers, hub-based broadcasting would cause severe congestion and performance degradation.

---

## 4. IP Addressing Scheme

### Network: 192.168.1.0/24

| Device          | IP Address      | Subnet Mask   | Default Gateway |
| :-------------- | :-------------- | :------------ | :-------------- |
| Router (G0/0)   | 192.168.1.1     | 255.255.255.0 | N/A             |
| Server          | 192.168.1.2     | 255.255.255.0 | 192.168.1.1     |
| Switch 1 (Mgmt) | 192.168.1.3     | 255.255.255.0 | 192.168.1.1     |
| Switch 2 (Mgmt) | 192.168.1.4     | 255.255.255.0 | 192.168.1.1     |
| Switch 3 (Mgmt) | 192.168.1.5     | 255.255.255.0 | 192.168.1.1     |
| PCs (1–50)      | 192.168.1.10–59 | 255.255.255.0 | 192.168.1.1     |

**Why /24?** A /24 subnet provides 254 usable host addresses (192.168.1.1–254), which comfortably accommodates 50 PCs with room for 200+ additional devices.

### Addressing Logic (Lecture 4)

- All devices share the same **network portion** (192.168.1), meaning they are on the same LAN.
- Each device has a unique **host portion** for identification.
- The **default gateway** (192.168.1.1) is the router interface. Without it, traffic would be confined to the local LAN only (Lecture 4).

---

## 5. Network Planning Considerations

### 5.1 Scalability for Future Growth

- **Port Availability**: 3 switches provide 72 ports; only ~54 are used, leaving **18 spare ports** for future devices.
- **IP Address Space**: The /24 subnet supports 254 hosts; only ~55 are assigned, leaving **~200 addresses** available.
- **Modular Design**: Adding a 4th switch is straightforward — simply connect it to the existing switch backbone using a crossover cable.

### 5.2 Avoiding Network Congestion

- **Switches over Hubs**: Switches forward frames only to the intended recipient port (Lecture 2), eliminating unnecessary broadcast traffic.
- **Segmentation**: Distributing 50 PCs across 3 switches (~17 PCs per switch) reduces the number of devices competing for bandwidth on any single switch.
- **Full-Duplex Communication**: Switch-to-PC links operate in full-duplex mode, allowing simultaneous send and receive without collisions (Lecture 5 notes that only WLANs are half-duplex).
- **Router Broadcast Control**: Routers do not forward broadcast or multicast packets by default (Lecture 2), containing broadcast domains.

### 5.3 Security Considerations

- **VLAN Segmentation**: The network can be divided into Virtual LANs (VLANs) to isolate departments (e.g., HR, IT, Finance). Routers connect different VLANs (Lecture 2).
- **Access Lists**: Routers can control security via access lists — rules that permit or deny packets on an interface (Lecture 2).
- **Dedicated Server**: Using a server OS (rather than peer-to-peer) provides centralized security management, authentication, and access control (Lecture 1).
- **Physical Security**: Wired connections are more secure than wireless, as they require physical access to the network (Lecture 1 notes wireless is less secure).

---

## 6. Packet Tracer Build Steps

### Step 1: Place Devices

1. Drag **1 × Cisco 2911 Router** onto the workspace.
2. Drag **3 × Cisco 2960 Switches** onto the workspace.
3. Drag **1 × Server** onto the workspace.
4. Drag **50 × PCs** onto the workspace (organize them in groups of ~17 per switch).

### Step 2: Connect Devices

1. **Inter-Switch Links** (Crossover cables):
   - Switch 0 (GigabitEthernet0/1) -> Switch 1 (GigabitEthernet0/1)
   - Switch 1 (GigabitEthernet0/2) -> Switch 2 (GigabitEthernet0/1)

2. **Switch to Router** (Straight-through cable):
   - Switch 0 (FastEthernet0/24) -> Router (GigabitEthernet0/0)

3. **PCs to Switches** (Straight-through cables):
   - PCs 1–17 -> Switch 0 (FastEthernet0/1 through FastEthernet0/17)
   - PCs 18–34 -> Switch 1 (FastEthernet0/1 through FastEthernet0/17)
   - PCs 35–50 -> Switch 2 (FastEthernet0/1 through FastEthernet0/16)

4. **Server to Switch** (Straight-through cable):
   - Server -> Switch 0 (FastEthernet0/18)

### Step 3: Configure IP Addresses

1. **Router**:
   - Enter CLI and configure:
     ```
     enable
     configure terminal
     interface GigabitEthernet0/0
     ip address 192.168.1.1 255.255.255.0
     no shutdown
     exit
     ```

2. **Server**:
   - IP: 192.168.1.2
   - Subnet Mask: 255.255.255.0
   - Default Gateway: 192.168.1.1

3. **PCs** (configured via DHCP from the server):
   - IP Range: 192.168.1.10 through 192.168.1.59 (assigned automatically by DHCP pool)
   - Subnet Mask: 255.255.255.0
   - Default Gateway: 192.168.1.1
   - DNS Server: 192.168.1.2

### Step 4: Verify Connectivity

1. Open a PC command prompt.
2. Run `ping 192.168.1.1` to test gateway connectivity.
3. Run `ping 192.168.1.2` to test server connectivity.
4. Run `ping` between PCs on different switches to verify inter-switch communication.

---

## 7. Network Topology Diagram

```
                        ┌──────────────┐
                        │   Router     │
                        │ 192.168.1.1  │
                        │  (Cisco 2911)│
                        └──────┬───────┘
                               │ (Straight-through)
                        ┌──────┴───────┐
                        │   Switch 0   │
                        │  (2960-24)   │
                        └──┬───┬───┬───┘
              (Crossover)  │   │   │
              ┌────────────┘   │   └─── PCs 1-17
              │                │       (Straight-through)
        ┌─────┴──────┐    ┌────┴──────┐
        │  Switch 1  │    │  Server   │
        │ (2960-24)  │    │192.168.1.2│
        └──┬─────┬───┘    └───────────┘
           │     │
    (Crossover) │
    ┌───────────┘
    │
┌───┴──────┐
│ Switch 2 │
│(2960-24) │
└──┬───┬───┘
   │   │
   │   └─── PCs 35-50
   │       (Straight-through)
   └─── PCs 18-34
         (Straight-through)
```

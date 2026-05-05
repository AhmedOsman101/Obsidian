---
title: Assignment 2
prev:
  text: "Assignment 1"
  link: "/College/yearTwo/secondTerm/CCNA/Assignments/Assignment-1"
next: false
---

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20240592                 |
| Section | 1                        |

# CCNA - Assignment 2

## Task 3

### 1. Suitable Network Topology for a 300-Employee Company

The suitable topology here is **Extended Star Topology**.

In a normal **Star Topology**, devices connect to a central switch or hub. The **Extended Star** is the same idea but with more than one switch connected together. This makes more sense for a company with 300 employees in different departments.

### 2. Why Extended Star Was Chosen Over Bus or Ring

It is better than **Bus** or **Ring** for these reasons:

- **Fault isolation**: if one cable breaks, only that device is affected.
- **Scalability**: more switches and departments can be added later.
- **Performance**: switches send data to the needed destination instead of all devices.
- **Management**: it is easier to organize and manage.

It is better than **Bus topology** because a break in the main cable can split the network.

It is better than **Ring topology** because ring networks are not as easy to expand or troubleshoot in a growing company.

### 3. Device Selection and Placement

#### Router

- Place **one router** at the edge of the network.
- It works as the **Layer 3 device** that connects networks and separates broadcast domains.
- It also handles routing between VLANs and can connect the LAN to outside networks.

#### Core Switch

- Place **one core switch** in the main equipment room.
- It serves as the central switching point for the building.

#### Access Switches

- Place **access switches** in each department area.
- Departments like **HR**, **Technical Support**, **Management**, and **Accounting** connect to these switches.
- This keeps cabling organized and supports future growth.

#### Wireless Access Points

- Place **access points** in areas where mobile devices or guest wireless access are required.
- They should be placed in central areas for better coverage.
- A separate **Guest WiFi VLAN** can be used to improve security.

### 4. Medium Selection: Fiber Optic vs UTP

For the transmission media:

- **Fiber Optic** should be used for:
  - Backbone connections between floors
  - Long-distance links between main network rooms
  - Areas with higher electromagnetic interference

Fiber is better here because it supports long distance, higher speed, and is not affected by EMI/RFI.

- **UTP (Ethernet)** should be used for:
  - PC-to-switch connections inside departments
  - Short indoor LAN runs
  - Typical office device connections

UTP is better for this part because it is cheaper, easier to install, and common in LANs.

### Suggested Building Design

```text
Internet/WAN
    |
  Router
    |
Core Switch
 |    |    |    |
HR   Tech  Mgmt  Accounting
SW   SW    SW    SW
 |    |     |      |
PCs  PCs   PCs    PCs

Guest WiFi Access Point(s) connected to switch infrastructure
Server segment connected near the core
```

## Task 4

### 5. VLSM Addressing Plan

Starting block: `172.16.0.0/16`

#### Required Groups Used in the Plan

The following groups were used in the plan:

| Department Name   | Required Hosts |
| :---------------- | :------------- |
| Guest WiFi        | 120            |
| Technical Support | 100            |
| Administration    | 60             |
| Servers           | 20             |

#### Step 1: Choose Suitable Prefixes

- **120 hosts** needs `/25` because `/25` gives `126` usable hosts.
- **100 hosts** needs `/25` because `/25` gives `126` usable hosts.
- **60 hosts** needs `/26` because `/26` gives `62` usable hosts.
- **20 hosts** needs `/27` because `/27` gives `30` usable hosts.

#### Step 2: Allocate from Largest to Smallest

| Department Name   | Required CIDR Prefix | Subnet Mask       | Network ID     | First Usable IP | Last Usable IP | Broadcast Address |
| :---------------- | :------------------- | :---------------- | :------------- | :-------------- | :------------- | :---------------- |
| Guest WiFi        | `/25`                | `255.255.255.128` | `172.16.0.0`   | `172.16.0.1`    | `172.16.0.126` | `172.16.0.127`    |
| Technical Support | `/25`                | `255.255.255.128` | `172.16.0.128` | `172.16.0.129`  | `172.16.0.254` | `172.16.0.255`    |
| Administration    | `/26`                | `255.255.255.192` | `172.16.1.0`   | `172.16.1.1`    | `172.16.1.62`  | `172.16.1.63`     |
| Servers           | `/27`                | `255.255.255.224` | `172.16.1.64`  | `172.16.1.65`   | `172.16.1.94`  | `172.16.1.95`     |

#### Why This Plan Is Efficient

- It uses **VLSM** so each subnet gets the size it needs.
- It reduces wasted addresses.
- It also helps with security and broadcast control by separating the groups.

### 6. Troubleshooting the Burn-in Phase Issues Using the OSI Model

#### Issue 1: A PC in Administration cannot reach the internet, and pinging the default gateway fails

This is mainly a **Layer 3 (Network layer)** test because the ping is going to the **default gateway IP address**.

But the first hardware to check is the **NIC**, the Ethernet cable, the switch port, and the router interface for that subnet.

The troubleshooting steps are:

- If the PC cannot reach its default gateway, the problem may be in the local connection.
- The default gateway is required for traffic to leave the local network.
- I would check:
  - Whether the NIC is enabled
  - Whether the cable is connected correctly
  - Whether the switch port is active
  - Whether the router interface for that subnet is up
  - Whether the PC has the correct IP address, subnet mask, and gateway

#### Issue 2: The switch is flooding frames out of every port

This happens because the **destination MAC address** is not yet in the switch's **MAC address table**.

The switch process is:

1. The switch learns from the **source MAC address**.
2. It checks the **destination MAC address**.
3. If the destination is unknown, it **floods** the frame out all ports except the ingress port.

The switch fixes this after the destination device replies. Once it sees the source MAC of the returning frame, it adds the MAC-to-port mapping to the table. After that, it can forward future frames to the correct port only.

#### Issue 3: Test the NIC without connecting to a switch

Use the reserved **loopback** IP address: `127.0.0.1`

The `127.x.x.x` range is reserved for **loopback**. This checks the internal TCP/IP stack without needing any external connection.

## Protocol Map

### TCP vs UDP

- **TCP** provides reliable communication, sequencing, acknowledgments, retransmission, and flow control.
- **UDP** is the other transport protocol at this layer and is used when lower overhead is needed.

In this company design:

- **TCP** is preferred where reliability matters, such as file transfer and management traffic.
- **UDP** is useful when lower overhead or faster message exchange is needed.

### Application Protocols Used

The main protocols used here are:

- **HTTP**: web-based access
- **DNS**: translates names to IP addresses
- **DHCP**: automatically assigns IP configuration values
- **IP**: logical addressing and routing
- **Ethernet**: local LAN frame delivery

### Why These Protocols Fit the Design

- **DHCP** reduces manual IP configuration effort.
- **DNS** makes things easier because hosts can use names instead of memorizing IP addresses.
- **IP** supports communication between different VLANs and subnets.
- **Ethernet** supports LAN switching between NICs on the same network.

## Technologist Report

The design reduces the **broadcast domain** by dividing users into different **VLANs** and subnets instead of putting all 300 employees in one large Layer 2 network.

Broadcasts are flooded by Layer 2 switches inside the same broadcast domain, and only a **Layer 3 device** like a router can break that broadcast domain. Because of that, the departments are placed in separate VLANs such as:

- VLAN 20: Technical Support
- VLAN 30: Administration
- VLAN 50: Guest WiFi
- VLAN 60: Servers

Each VLAN becomes a smaller logical group. Communication between VLANs is then controlled through the router. This improves:

- **Performance** by limiting the spread of broadcast traffic
- **Security** by isolating departments and guests
- **Scalability** by allowing each department to grow without redesigning the whole network
- **Manageability** by making the network easier to organize and troubleshoot

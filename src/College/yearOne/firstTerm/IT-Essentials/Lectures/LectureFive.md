---
title: Lecture 5
prev:
  text: "Lecture Four"
  link: "/College/yearOne/firstTerm/IT-Essentials/Lectures/LectureFour"
next:
  text: "Lecture Six"
  link: "/College/yearOne/firstTerm/IT-Essentials/Lectures/LectureSix"
---

# IT Essentials Lecture 5: Networking Concepts (Part I)

## Network History

### Early Foundations (1950s–1960s)

- Experimental networks for military use, leading to ARPANET.
- ARPANET pioneered **packet-switching technology**.

---

### Development of Protocols (1970s)

- Key protocols like **Ethernet** (local networks) and **TCP/IP** (communication across networks).
- **USENET**: An early form of social networking.

---

### Standardization and Growth (1980s)

- ARPANET adopted **TCP/IP**, forming the foundation of the internet.
- **NSFNET** connected universities and research centers.

---

### User-Focused Internet (1990s)

- Introduction of the **World Wide Web** by Tim Berners-Lee.
- Graphical browsers, commercial ISPs, and search engines like Google improved usability.

---

### Connectivity Revolution (2000s)

- **Broadband** and **Wi-Fi** enabled high-speed wireless access.
- Social media and smartphones drove increased global connectivity.

---

### Modern Advancements (2010s–2020s)

- **2010s**: Emergence of **cloud computing**, **IoT**, and **5G technology**.
- **2020s**: Focus on **edge computing**, AI integration, and enhanced global connectivity.

## Network Components and Types

### Principles of Networking

- A network is a collection/system of interconnected devices (e.g., computers, servers, phones) for sharing **data**, **resources**, and **services**.
- Networks vary in size and complexity, from small local setups like home or office LANs to global systems like the internet.
- Devices exchange information using protocols, enabling access to shared files, applications, printers, and more.
- Networks can be wired (using cables) or wireless (using radio waves) and are essential for modern communication, business, and information sharing.
- Examples of networks:
  - Mail delivery system
  - Telephone system
  - Public transportation systems
  - Corporate computer network
  - The Internet

---

### Benefits of Networking

- Shared resources (e.g., files, printers).
- Enhanced communication capabilities.
- Reduced file duplication and corruption.
- Centralized administration and cost-effective licensing.

### Components of a Network

1. **Host Devices**: Send and receive information (e.g., computers, printers).
2. **Intermediary Devices**: Facilitate data transfer between host devices.
3. **Media**: The physical or wireless mediums over which data is transmitted (e.g. cables).

---

Computers can connect to share data and resources via:

- Copper cabling
- Fiber-optic cabling
- Wireless connections

## Basic Network Devices

#### Network Interface Card (NIC)

- Connects devices to wired or wireless networks.

#### Repeaters, Bridges, and Hubs

- **Repeaters**: Regenerate signals to extend range.
- **Hubs**: Broadcast data received on one port to all other ports.
- **Bridges**: Divide networks into segments, tracking connected devices.

#### Modems

- Convert digital data to analog signals for transmission (and vice versa).
- Use **RJ-11 connectors**; available as internal or external devices.

#### Switches

- Use **MAC addresses** to send data to specific devices.
- Types: Managed (for enterprise) and unmanaged (for homes).

#### Wireless Access Points (APs)

- Provide wireless network access within a limited range.

#### Routers

- Connect networks and forward traffic using IP addresses.

#### Firewalls

- Protect networks from unauthorized access using **Access Control Lists (ACLs)**.

## Network Cables

### Types of Cables

#### Coaxial Cables

- Copper/aluminum wire, common in TV systems.
- Variants:
  - **Thicknet (10Base5)**: Up to 500 m, 10 Mbps.
  - **Thinnet (10Base2)**: Up to 185 m, 10 Mbps.
  - **RG-59**: Common for cable TV in the US.
  - **RG-6**: Higher bandwidth and less interference.

---

#### Twisted-Pair Cables

- Types:

  - **Unshielded Twisted-Pair (UTP)**: Common, prone to EMI/RFI.
  - **Shielded Twisted-Pair (STP)**: Better protection but more expensive.

- Wiring Schemes:

  - **T568A** and **T568B** define pinouts for cable ends.
  - Cable Types:
    - **Straight-through**: Same wiring on both ends; connects **unlike** devices.
    - **Crossover**: Different wiring on each end; connects **like** devices.

##### UTP vs. STP

| **Attribute**               | **Shielded Twisted Pair (STP)**                              | **Unshielded Twisted Pair (UTP)**                            |
| --------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Structure**               | Twisted pairs with shielding (foil or braided metal)         | Twisted pairs without any additional shielding               |
| **Interference Protection** | Excellent protection against EMI and RFI due to shielding    | Minimal protection against EMI and RFI                       |
| **Signal Quality**          | Higher signal quality in environments with high interference | More susceptible to interference, which can degrade quality  |
| **Cost**                    | More expensive due to added shielding                        | More affordable, commonly used for general networking        |
| **Installation**            | More difficult to install; requires grounding                | Easier to install; does not require grounding                |
| **Weight and Flexibility**  | Heavier and less flexible due to shielding                   | Lighter and more flexible, easier to work with               |
| **Use Cases**               | High-interference areas (industrial, medical facilities)     | Standard LAN environments (offices, homes)                   |
| **Bandwidth Capacity**      | Similar to UTP but with better interference protection       | High bandwidth, commonly used in Ethernet cables (Cat 5e, 6) |

##### Twisted-Pair Category Ratings

| **Cable Type**  | **Speed**                            | **Features**                                                                                |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| **Category 3**  | 100 Mb/s at 100 MHz                  | • Early widely adopted 4-pair UTP for Ethernet LANs.                                        |
|                 |                                      | • Replaced by Cat 5 UTP, which is manufactured with higher standards for better data rates. |
| **Category 5e** | 1 Gb/s at 100 MHz                    | • Higher standard than Cat 5 for improved data transfer rates.                              |
|                 |                                      | • More twists per foot for better EMI and RFI prevention.                                   |
| **Category 6**  | 1 Gb/s at 250 MHz (Cat 6a - 500 MHz) | • Higher standard than Cat 5e for better data transfer rates.                               |
|                 |                                      | • More twists per foot and a possible plastic divider to reduce EMI and RFI.                |
|                 |                                      | • Suitable for bandwidth-intensive applications like videoconferencing or gaming.           |
|                 |                                      | • Cat 6a offers better insulation and performance than Cat 6.                               |

---

#### Fiber-Optic Cables

- Transmit information using light, unaffected by EMI/RFI.
- Types:
  - **Single-Mode Fiber (SMF)**: Laser-based, long-distance, high-speed.
  - **Multi-Mode Fiber (MMF)**: LED-based, shorter distance, cost-effective.

---

### Network Tools

- Tools and Their Uses:
  - **Wire Cutters**: Trim wires to length.
  - **Wire Strippers**: Remove cable jackets.
  - **Crimpers**: Attach RJ-45 connectors securely.
  - **Punch-Down Tools**: Terminate wires into patch panels.
  - **Multimeter**: Check electrical circuits and voltage.
  - **Cable Tester**: Verify correct wiring and detect faults.
  - **Wi-Fi Analyzer**: Assess signal strength and troubleshoot Wi-Fi issues.
  - **Tone Generator**: Trace cables using sound signals.
  - **Loopback Adapter**: Test network ports and NIC functionality.

### Cable Types Summary

| **Attribute**           | **Twisted Pair Cable**                      | **Coaxial Cable**                                | **Fiber Optic Cable**                            |
| ----------------------- | ------------------------------------------- | ------------------------------------------------ | ------------------------------------------------ |
| **Structure**           | Two insulated copper wires twisted together | Single copper core with insulating and shielding | Glass or plastic core transmitting light signals |
| **Transmission Medium** | Electrical signals                          | Electrical signals                               | Light signals (optical)                          |
| **Bandwidth Capacity**  | Low to moderate (up to 10 Gbps for Cat 6a)  | Moderate (up to 10 Gbps)                         | Very high (up to Tbps in single-mode fiber)      |
| **Distance Limitation** | Limited (up to 100 meters for Ethernet)     | Moderate (up to 500 meters for broadband)        | Long-distance (tens of kilometers)               |
| **Signal Quality**      | Susceptible to EMI and RFI                  | Less susceptible than twisted pair               | Immune to EMI and RFI                            |
| **Cost**                | Low                                         | Moderate                                         | Higher than twisted pair and coaxial             |
| **Installation**        | Easy                                        | Moderate (requires thicker cabling)              | Difficult (requires specialized equipment)       |
| **Use Cases**           | LANs, landline telephones                   | TV, broadband internet                           | High-speed internet, long-distance data transfer |

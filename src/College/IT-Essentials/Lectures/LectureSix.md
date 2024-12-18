---
prev:
  text: "Lecture Five"
  link: "/College/IT-Essentials/Lectures/LectureFive"
next:
  false
  # text: "Lecture Seven"
  # link: "/College/IT-Essentials/Lectures/LectureSeven"
---

# IT Essentials Lecture 6: Networking Concepts (Part II)

## 5.2 Networking Protocols, Standards, and Services

### Reference Models

Reference models, such as the **OSI** and **TCP/IP** models, describe data communication processes.

- **Open Standards**:

  - Developed by organizations like IEEE, IETF, and ISO.
  - Ensure interoperability across systems and platforms.

- **Encapsulation**:
  - As application data moves down through layers, protocol information is added (headers, footers, etc.).

---

### TCP/IP Model

- **Purpose**:
  - Framework for the Internet’s protocols.
  - Organizes networking tasks into layers.
  - Layers prepare data for network transmission.

**Layers:**

| Layer          | Description                                            | Protocols                                |
| -------------- | ------------------------------------------------------ | ---------------------------------------- |
| Application    | Provides network services to user applications         | HTTP, HTML, Telnet, FTP, TFTP, SMTP, DNS |
| Transport      | End-to-end data management and segmentation            | TCP, UDP                                 |
| Internet       | Provides host connectivity, routing, and IP addressing | IP, ICMP, RIP, ARP                       |
| Network Access | Handles MAC addressing and physical transmission       | Ethernet, Wi-Fi, PPP                     |

---

### OSI Model

- **Purpose**:

  - Divides network communications into seven layers.
  - Used as a standard framework by most network vendors.
  - Combines **hardware** (lower layers) and **software** (higher layers) implementations.

- **Protocol Stack**:
  - Can be implemented in hardware, software, or both.
  - Lower layers often in hardware; higher layers in software.

#### Real-World Example (Email Transmission)

1. **Application Layer**: Email client uses SMTP to send an email.
2. **Presentation Layer**: Formats email data to be usable by the Application layer and ensures proper encryption, and compression of data.
3. **Session Layer**: Establishes a session between sender and recipient.
4. **Transport Layer**: Divides data into segments; ensures reliability via TCP.
5. **Network Layer**: Routes data across networks using IP.
6. **Data Link Layer**: Frames data with MAC addresses for local delivery.
7. **Physical Layer**: Transmits data as electrical signals or Wi-Fi.

**Layers:**

| No. | Layer        | Description                                                                                    | Protocols                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------- | --------------------------------------- |
| 7   | Application  | Provides network services to users or applications.                                            | HTTP, FTP, SMTP, DNS, POP3, IMAP        |
| 6   | Presentation | Translates data into a format usable by the Application layer (e.g., encryption, compression). | SSL/TLS, JPEG, MPEG, ASCII, EBCDIC      |
| 5   | Session      | Manages communication sessions between applications.                                           | NetBIOS, RPC, PPTP                      |
| 4   | Transport    | Ensures reliable data transfer with error correction and flow control.                         | TCP, UDP                                |
| 3   | Network      | Handles logical addressing and routing of data packets across networks.                        | IP, ICMP, OSPF, RIP, ARP                |
| 2   | Data Link    | Manages physical addressing (MAC), error detection and prepares data for transmission.         | Ethernet, Wi-Fi (802.11), PPP, MAC      |
| 1   | Physical     | Defines physical transmission medium and data encoding.                                        | Cables, hubs, repeaters, voltage levels |

---

### Comparison: OSI vs. TCP/IP Models

| Feature                   | OSI Model                         | TCP/IP Model                  |
| ------------------------- | --------------------------------- | ----------------------------- |
| Layers                    | 7 Layers                          | 4 Layers                      |
| Application Layer Mapping | Separate Presentation and Session | Combined in Application layer |
| Use in Networking         | Theoretical framework             | Practical model               |

---

### Encapsulation Process

**Definition**:
Encapsulation involves wrapping data with protocol-specific headers and footers to prepare it for transmission.

- **Steps**:
  1. **Data**: Original information from the application.
  2. **Segments**: Data divided and prepared by Transport layer.
  3. **Packets**: Segments are assigned IP addressing by Network layer.
  4. **Frames**: Packets framed with MAC addresses by Data Link layer.
  5. **Bits**: Data transmitted as raw signals (binray) via Physical layer.

---

### TCP vs. UDP Protocols

#### **TCP (Transmission Control Protocol)**

- **Features**:
  - Reliable, ensures data integrity.
  - Acknowledges received data.
  - Resends unacknowledged data.
  - Maintains data sequencing.

#### **UDP (User Datagram Protocol)**

- **Features**:
  - Unreliable, best-effort delivery.
  - No acknowledgments or retransmissions.
  - Fast, low overhead.
  - Delivers data as it arrives.

| Feature         | TCP                                 | UDP                             |
| --------------- | ----------------------------------- | ------------------------------- |
| Reliability     | Reliable; acknowledges data.        | Unreliable; no acknowledgments. |
| Overhead        | Higher; ensures data integrity.     | Lower; fast, lightweight.       |
| Use Case        | Email, file transfer, web browsing. | Streaming, gaming, voice calls. |
| Data Sequencing | Data delivered in order.            | No guarantee of order.          |


## Application Port Numbers

PCs use source port numbers to track the data flow of different applications. Ports classify communication for specific protocols and services.

---

### World Wide Web Protocols

| **Port** | **Transport Protocol** | **Application Protocol** | **Description**                                                                                                   |
| -------- | ---------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 53       | TCP, UDP               | DNS                      | Finds IP addresses associated with Internet domains. UDP is used for requests; TCP handles responses if required. |
| 80       | TCP                    | HTTP                     | Provides rules for exchanging text, images, videos, and multimedia files on the web.                              |
| 443      | TCP, UDP               | HTTPS                    | Secure version of HTTP, using encryption and authentication for browser-server communication.                     |

---

### Email and Identity Management Protocols

| **Port** | **Transport Protocol** | **Application Protocol** | **Description**                                                                                   |
| -------- | ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------- |
| 25       | TCP                    | SMTP                     | Sends emails from clients to servers or relays messages between servers.                          |
| 110      | TCP                    | POP3                     | Retrieves emails from servers, downloading them to the client.                                    |
| 143      | TCP                    | IMAP                     | Retrieves emails from servers, with advanced features like folder management and synchronization. |
| 389      | TCP, UDP               | LDAP                     | Maintains directory information for user identities and authenticates users across systems.       |

---

### Remote Access Protocols

| **Port** | **Transport Protocol** | **Application Protocol** | **Description**                                                                                                      |
| -------- | ---------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| 22       | TCP                    | SSH                      | Securely accesses remote systems, encrypting data and authentication. Preferred over Telnet for security.            |
| 23       | TCP                    | Telnet                   | Provides an insecure command-line interface on remote systems. Use SSH instead.                                      |
| 3389     | TCP, UDP               | RDP                      | Enables graphical remote desktop access, primarily for Windows systems. Requires caution due to full remote control. |

---

### File Transport and Management Protocols

| **Port** | **Transport Protocol** | **Application Protocol** | **Description**                                                                             |
| -------- | ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------- |
| 20       | TCP                    | FTP                      | Transfers files between computers. SFTP (port 22) is preferred for secure transfers.        |
| 21       | TCP                    | FTP                      | Establishes connections for FTP sessions.                                                   |
| 69       | UDP                    | TFTP                     | A lightweight protocol with less overhead than FTP, for simpler file transfers.             |
| 445      | TCP                    | SMB/CIFS                 | Allows sharing files, printers, and resources on a network.                                 |
| 548      | TCP, UDP               | AFP                      | A proprietary protocol by Apple for file services in macOS and classic Mac OS environments. |

---

### Network Operations Protocols

| **Port** | **Transport Protocol** | **Application Protocol** | **Description**                                                                                                                |
| -------- | ---------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 67/68    | UDP                    | DHCP                     | Dynamically assigns IP addresses. The server uses port 67, and the client uses port 68.                                        |
| 137-139  | UDP, TCP               | NetBIOS (NetBT)          | Facilitates communication for older applications over TCP/IP. Each function within NetBIOS uses a specific port in this range. |
| 161/162  | UDP                    | SNMP                     | Monitors network devices and operations using centralized management stations.                                                 |
| 427      | UDP, TCP               | SLP                      | Discovers services on a local network without manual configuration.                                                            |

## Standards Organizations

Several organizations develop and maintain standards for networking and communication technologies.

| **Organization** | **Name**                                                                 | **Type**                                            | **Standards**                                                      | **Established**                                       |
| ---------------- | ------------------------------------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------- |
| ITU-T            | ITU Telecommunication Standardization Sector (formerly CCITT)            | Sector of the International Telecommunication Union | Standards covering all fields of telecommunications                | 1992                                                  |
| IEEE             | Institute of Electrical and Electronics Engineers                        | Non-profit technical professional association       | Standards for the computer and electronics industry                | 1884                                                  |
| ISO              | International Organization for Standardization                           | Network of national standards institutes            | Promotes international standards agreements                        | 1947                                                  |
| IAB              | Internet Architecture Board                                              | Committee and advisory body                         | Oversees the technical and engineering development of the Internet | 1979 (formerly ICCB)                                  |
| IEC              | International Electrotechnical Commission                                | Global organization                                 | Standards for electrical, electronic, and related technologies     | 1906                                                  |
| ANSI             | American National Standards Institute                                    | Private non-profit organization                     | Seeks to establish consensus among groups                          | 1918                                                  |
| TIA/EIA          | Telecommunications Industry Association / Electronic Industries Alliance | Trade associations                                  | Standards for voice and data wiring for LANs                       | Post-1984 deregulation of the U.S. telephone industry |

## Ethernet Standards

### Ethernet Protocols

- **IEEE 802.3** specifies that networks implement **Carrier Sense Multiple Access with Collision Detection (CSMA/CD)**.
  - End stations "listen" to the wire and transmit data when the network is clear.
  - Collisions may occur during simultaneous transmissions.

### Media Types and Transfer Rates

| **Ethernet Standard** | **Media**      | **Transfer Rates**                                           |
| --------------------- | -------------- | ------------------------------------------------------------ |
| 10BASE-T              | Category 3     | Transfers data at 10 Mb/s.                                   |
| 100BASE-TX            | Category 5     | Ten times faster than 10BASE-T with 100 Mb/s transfer rates. |
| 1000BASE-T            | Category 5e, 6 | Supports data transfer rates of 1 Gb/s.                      |
| 10GBASE-T             | Category 6a, 7 | Achieves transfer rates of 10 Gb/s.                          |

## Wireless Standards

### WLAN Standards (IEEE 802.11)

- **CSMA/CA** is used to prevent collisions on wireless LANs.
- Encryption is critical; **WPA2** has been the strongest encryption since 2006.

### Wireless Ethernet Standards:

| **Standard**       | **Bandwidth**  | **Frequency**    | **Range**            | **Interoperability**                                 |
| ------------------ | -------------- | ---------------- | -------------------- | ---------------------------------------------------- |
| 802.11a            | Up to 54 Mbps  | 5 GHz band       | 100 feet (30 meters) | Not interoperable with 802.11b, 802.11g, or 802.11n. |
| 802.11b            | Up to 11 Mbps  | 2.4 GHz band     | 100 feet (30 meters) | Interoperable with 802.11g.                          |
| 802.11g            | Up to 54 Mbps  | 2.4 GHz band     | 100 feet (30 meters) | Interoperable with 802.11b.                          |
| 802.11n            | Up to 540 Mbps | 5 GHz, 2.4 GHz   | 164 feet (50 meters) | Interoperable with 802.11b and 802.11g.              |
| 802.11ac           | Up to 1.3 Gbps | 5 GHz band       | 115 feet (35 meters) | Interoperable with 802.11a and 802.11n.              |
| 802.15.1 Bluetooth | Up to 2 Mbps   | 2.4 GHz or 5 GHz | 30 feet (10 meters)  | Not interoperable with any other 802.11              |

## Bluetooth, NFC, RFID, Zigbee, and Z-Wave

- **Bluetooth (802.15.1):** Used for PANs, operating in the 2.4-2.485 GHz range with up to 7 devices.
- **RFID:**
  - Tags can be passive (activated by readers) or active (battery-powered, range up to 100 meters).
  - Operates at 125 MHz to 960 MHz.
- **NFC:** Close-range communication for payments, printing, and parking.
- **Zigbee (802.15.4):** Mesh networks, supporting up to 65,000 devices with speeds up to 250 kb/s.
- **Z-Wave:** Proprietary but widely used for smart homes, supporting 232 devices with speeds up to 100 kb/s.

## Cellular Generations

| **Generation** | **Features**                                                                     | **Speeds**                                 |
| -------------- | -------------------------------------------------------------------------------- | ------------------------------------------ |
| 1G/2G          | Analog calls (1G); digital voice, caller ID, conference calls (2G).              | <9.6 Kb/s                                  |
| 2.5G           | Supports web browsing, audio, and video clips.                                   | Up to 237 Kb/s                             |
| 3G             | Streaming music and video.                                                       | Up to 2 Mb/s                               |
| 4G             | IPv6, gaming, and high-quality multimedia.                                       | Up to 672 Mb/s                             |
| LTE            | Enhanced 4G connectivity; mobile speeds up to 100 Mb/s, stationary up to 1 Gb/s. | 100 Mb/s (mobile); 1 Gb/s (static)         |
| 5G             | AR/VR support, IoT, smart homes, and cars.                                       | Up to 3 Gb/s (download), 1.5 Gb/s (upload) |

## Server Types and Roles

| **Server Type**           | **Description**                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------- |
| **DHCP Server**           | Provides IP addressing information to network hosts.                               |
| **DNS Server**            | Translates domain names (e.g., `example.com`) to IP addresses.                     |
| **Print Server**          | Manages printers and print jobs for multiple clients.                              |
| **File Server**           | Stores and shares files using protocols like FTP, SFTP, and SCP.                   |
| **Web Server**            | Serves web pages using HTTP (port 80) and HTTPS (port 443).                        |
| **Mail Server**           | Handles email storage and communication using SMTP, POP, and IMAP.                 |
| **Proxy Server**          | Acts on behalf of clients, caching frequently accessed web pages.                  |
| **Authentication Server** | Provides Authentication, Authorization, and Accounting (AAA) for network access.   |
| **Syslog Server**         | Collects and stores log messages from network devices for monitoring and analysis. |

## 5.5 Network Topologies

### Types of LAN Topologies

#### Physical Topology

- Defines the physical layout of network components.

#### Logical Topology

- Determines how hosts access the medium for communication.

---

### Logical Topologies

- **Broadcast Topology**:
  - Hosts broadcast messages to all hosts on the same network segment.
  - No specific transmission order; messages sent on a FIFO basis.
  - Used in Ethernet networks.
- **Token Passing**:
  - Network access controlled by sequentially passing a token.
  - Only the host with the token can transmit data.

### LAN Physical Topologies

- **Bus**:
  - A single central cable connects all devices.
  - Only one device transmits at a time; collisions destroy frames.
- **Ring**:
  - Hosts connected in a circular pattern; uses tokens for data transmission.
  - Each device connects to two others
  - Variants: Single-ring and Dual-ring.
- **Star**:
  - Central connection point (hub, switch, or router).
  - Simplifies troubleshooting; independent connections for each device.
- **Hierarchical (Extended Star)**:
  - Additional devices extend a star topology to support larger networks.
- **Mesh**:
  - Every device is connected to all (full) or to multiple devices (partial)
  - High reliability; used in WANs and high-availability systems.
- **Hybrid**:
  - Combines two or more topologies, such as star-bus or star-ring.

### Comparison Table: LAN Physical Topologies

| Topology Type | Structure                            | Reliability                   | Scalability               | Cost     | Use Cases                          |
| ------------- | ------------------------------------ | ----------------------------- | ------------------------- | -------- | ---------------------------------- |
| Bus           | Single central cable for all devices | Low; cable break disrupts all | Limited; degrades easily  | Low      | Small/temporary networks           |
| Star          | Central hub/switch for all nodes     | High; central device failure  | Easy to expand            | Moderate | Home, office LANs                  |
| Ring          | Circular sequence                    | Moderate; dual-ring improves  | Moderate; complex changes | Moderate | Older LANs, token ring networks    |
| Mesh          | Fully/partially connected devices    | Very high; redundant paths    | High                      | High     | Military, hospitals, critical WANs |
| Hybrid        | Combination of topologies            | Depends on design             | Flexible                  | Varies   | Diverse environments               |

## Types of Networks

- **LAN (Local Area Network)**: Connects devices in a limited area (home/office).
- **WLAN (Wireless LAN)**: Wireless connection via access points; copper cabling connects access points.
- **VLAN (Virtual LAN)**: Logical network segmentation for management, security, and performance.
- **PAN (Personal Area Network)**: Connects personal devices (e.g., Bluetooth for keyboards, phones, etc.).
- **MAN (Metropolitan Area Network)**: Covers a campus or city, using wireless or fiber backbones.
- **WAN (Wide Area Network)**: Interconnects smaller networks (e.g., the Internet).

## Network Architectures

### Peer-to-Peer (P2P) Networks

- Decentralized; each device acts as both client and server.
- No centralized administration; all peers manage their own resources.
- Limited scalability; performance decreases as peers increase.
- Low setup cost; no need for expensive servers.
- Less secure; each device is responsible for its own security.
- Less reliable; if a peer goes offline, its resources are unavailable.
- Slower as the network grows; depends on peer resources.
- Easier maintainance; no central device to manage.
- Used in file-sharing networks (e.g., BitTorrent).
- Data storage is distributed across peers.

### Client-Server Networks

- Centralized server manages resources and security.
- Centralized control by the server.
- Higher setup cost due to the need for dedicated servers.
- Highly scalable; servers can handle many clients.
- More secure; centralized measures can be implemented.
- More reliable; servers provide consistent availability.
- Faster; optimized server hardware ensures efficiency.
- Data storage is centralized on the server; clients access shared data.
- Requires skilled admins to manage servers.
- Used in large networks (e.g., corporate systems, web apps).
- Examples include: Websites, enterprise systems (e.g., Google Drive).

### Peer-to-Peer vs. Client-Server Comparison

| Feature      | Peer-to-Peer                  | Client-Server                  |
| ------------ | ----------------------------- | ------------------------------ |
| Architecture | Decentralized                 | Centralized                    |
| Control      | No central control            | Centralized                    |
| Cost         | Low setup cost                | High setup cost                |
| Scalability  | Limited                       | Highly scalable                |
| Security     | Less secure                   | More secure                    |
| Reliability  | Less reliable                 | More reliable                  |
| Performance  | Slower as peers grow          | Faster with optimized hardware |
| Use Case     | Small networks (file-sharing) | Large corporate networks       |

## Bandwidth and Latency

- **Bandwidth**: Data transmitted per second, measured in:

  - **bps**: Bits per second.
  - **Kbps**: Kilobits per second.
  - **Mbps**: Megabits per second.
  - **Gbps**: Gigabits per second.

- **Latency**: Time for data to travel from source to destination.

### Transmission Modes

| Mode            | Description                            | Example         |
| --------------- | -------------------------------------- | --------------- |
| **Simplex**     | One-way transmission only              | Radio broadcast |
| **Half-Duplex** | Bidirectional, one direction at a time | Walkie-talkies  |
| **Full-Duplex** | Simultaneous bidirectional data flow   | Telephone call  |

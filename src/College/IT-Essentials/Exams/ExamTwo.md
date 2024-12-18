---
prev:
  text: "Exams"
  link: "/College/IT-Essentials/Exams/index"
next: false
  # text: "Exam Three"
  # link: "/College/IT-Essentials/Lectures/ExamThree"
---
# Assignment Two

## Scenario
- You are tasked with setting up a small office network for a company that consists of 10 computers, a server, and a printer. 
- The company is located in a single-floor building. 
- The network needs to allow all computers to share files, access the internet, and print documents to the shared printer. 
- The company needs reliable communication and secure access to its resources.

## Task No.01

1. What are the essential components required to set up the network in this office?
2. What are the seven layers of the OSI model, and how does each layer contribute to enabling communication between the devices at the office network?
3. What are the suggested network type and topology for the office network? Explain why these are the most suitable options for this setup.
4. Compare between TCP and UDB protocols.
5. Using Cisco Packet Tracer, design and implement a basic network setup for the office. Include the network type, devices, and topology. Simulate and test communication between the devices to ensure the setup is functional. Explain your design choices and the results of your simulation.

## Task No.02
6. What are the basic functions of an Operating system?
7. Install Windows 10 on a virtual machine (e.g., VirtualBox) and configure basic system settings:
  a) Start a fresh installation of Windows 10.
  b) During the installation, set the language, time zone, and region.
  c) After installation, create user accounts and set up user permissions.
  d) Compare between FAT32 and NTFS file systems then Configure a storage device with the appropriate file system based on its intended use
  e) Set up a local area network (LAN) connection or Wi-Fi, ensuring internet access.
8. After successfully installing Windows 10, configure security settings such as Windows Defender, Firewall, and User Account Control.

## Answers

### Task No.01

#### Q1: What are the essential components required to set up the network in this office?

- **Router**: To connect the network to the internet.
- **Switch**: To interconnect all devices (computers, server, printer) within the network.
- **Ethernet cables (Cat5e or Cat6)**: For wired connections between devices.
- **Access Point (optional)**: If wireless connectivity is needed.
- **Firewall**: For securing the network from external threats.
- **Network Interface Cards (NICs)**: Required in all devices for network communication.
- **Server**: For file sharing, printer management, and possibly hosting applications.
- **Printer**: Configured to be network-accessible.

#### Q2: What are the seven layers of the OSI model, and how does each layer contribute to enabling communication between the devices at the office network?

1. **Physical Layer**: Transmits raw bit streams over physical media like cables or Wi-Fi.
2. **Data Link Layer**: Handles MAC addressing and error detection (e.g., Ethernet protocol).
3. **Network Layer**: Manages IP addressing and routing (e.g., ensuring devices can access the internet).
4. **Transport Layer**: Ensures data is sent reliably (TCP) or quickly (UDP).
5. **Session Layer**: Maintains, establishes, and terminates connections (e.g., managing active file transfers).
6. **Presentation Layer**: Handles data translation, encryption, and compression.
7. **Application Layer**: Interfaces with software applications (e.g., browsers, email clients).

#### Q3: What are the suggested network type and topology for the office network? Explain why these are the most suitable options for this setup.

- **Network Type**: LAN (Local Area Network) for internal communication, and WAN (Wide Area Network) for internet access.
- **Topology**:
    - **Star Topology**: Centralized connection through a switch/router. This ensures ease of troubleshooting and scalability.
    - **Reason**: A star topology minimizes downtime (only affected devices fail) and supports centralized management.
#### Q4: Compare between TCP and UDB protocols.

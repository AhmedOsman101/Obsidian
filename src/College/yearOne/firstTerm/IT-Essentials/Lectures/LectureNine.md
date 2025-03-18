---
title: Lecture 9
prev:
  text: "Lecture Eight"
  link: "/College/yearOne/firstTerm/IT-Essentials/Lectures/LectureEight"
next: false
---

# IT Essentials Lecture 9: Security

## Security Threats

Security threats are potential risks that can compromise the **confidentiality**, **integrity**, or **availability** of systems, data, or networks.

## Types of Security Threats

1. **Malware**
2. **Phishing**
3. **Social Engineering**
4. **Denial of Service (DoS/DDoS)**
5. **Insider Threats**
6. **Zero-Day Exploits**
7. **SQL Injection**
8. **Man-in-the-Middle (MITM) Attacks**
9. **Password Attacks**
10. **Advanced Persistent Threats (APTs)**

### 1. Malware

Malicious software designed to damage, disrupt, or gain unauthorized access to a computer system. Installed without user knowledge, it can:

- Change system configurations.
- Delete files or corrupt data.
- Steal information.
- Redirect browsers or open unwanted windows.

#### Types of Malware

- **Adware**: Displays unwanted ads via pop-ups or redirects.
- **Ransomware**: Encrypts files and demands payment for a decryption key.
- **Rootkits**: Hard-to-detect tools granting admin-level access.
- **Spyware**: Gathers user data and sends it to cybercriminals.
- **Worms**: Self-replicating programs that exploit software vulnerabilities.
- **Viruses**: Attach to files and execute malicious actions when opened.
- **Trojan Horses**: Disguised as useful software but carry harmful code.

---

### 2. Phishing

A cyberattack where attackers impersonate legitimate organizations to trick individuals into revealing sensitive information.

**Example**: A fake email from a bank requests account details for verification.

---

### 3. Social Engineering

Manipulates individuals into revealing confidential information through psychological exploitation.

**Example**: An attacker posing as IT support requests login credentials over the phone.

> [!Note]
> Social engineering is often used in conjunction with other network attacks.

#### Protecting Against Social Engineering

- Never share credentials or leave them exposed.
- Avoid opening emails from unknown sources.
- Don't share work-related information on social media.
- Lock computers when unattended.
- Report suspicious individuals.

---

### 4. Denial of Service (DoS/DDoS)

Attempts to make a system or network resource unavailable by overwhelming it with traffic.

- **DoS**: Single-source attack.
- **DDoS**: Multi-source attack using botnets.

**Example**: A botnet floods a website with traffic, making it unreachable.

---

### 5. Insider Threats

Threats originating from individuals within an organization who misuse their access to harm systems or steal data.

**Example**: An employee leaks sensitive company data to competitors.

---

### 6. Zero-Day Exploits

Exploits unknown vulnerabilities in software or hardware before a patch is available.

**Key Terms**:

- **Zero-Day**: The day an unknown vulnerability is discovered.
- **Zero-Hour**: The moment the exploit is detected.

**Example**: A hacker exploits an unpatched web browser vulnerability.

---

### 7. Man-in-the-Middle (MITM) Attacks

An attacker intercepts and possibly alters communication between two parties without their knowledge.

**Example**: Intercepting communications between a user and a website to capture login credentials.

## Anti-Malware Programs

Anti-malware programs are essential for protecting computers and mobile devices against various malicious threats.

- Modern antivirus programs are often referred to as **anti-malware programs**.
- They detect and block worms, viruses, trojans, rootkits, ransomware, spyware, keyloggers, and adware.
- Use a **database of malware signatures** and **practical techniques** to identify malicious behavior.

## Signature File Updates

- Anti-malware software must be regularly updated to protect against newly developed malware.
- **Signature files** (definitions) contain code patterns used to detect, clean, and remove threats.
- Always download updates from the **manufacturer's website** to ensure authenticity.
- Manufacturers may use **mirror sites** to distribute updates and reduce traffic.

> [!CAUTION]
> When downloading signature files from a mirror, ensure that the mirror site is a legitimate site.
> Always link to the mirror site from the manufacturer's website.

## Repairing Infected Systems

When malware is detected:

1. The threat is removed or quarantined.
2. Additional steps are often required to ensure complete system recovery:
   - Run antimalware programs on **system start** before loading the OS.
   - Boot into **Safe Mode** for manual removal.
   - Consult specialists if necessary, or reformat the system and reinstall the OS.
3. Delete system restore files to remove potentially infected backups.

## Security Procedures

### What is a Security Policy

A **security policy** is a set of objectives designed to protect a network, its data, and computers within an organization.

- Evolving document based on technology and business needs.
- Created by a committee of management and IT staff.
- IT staff is responsible for implementing the policy.

---

### Securing Devices and Data

The goal is to create a **safe network environment** and protect the organization's assets, including:

- **Data**
- **Employees**
- **Physical devices** such as computers and network equipment

#### Physical Security

Physical security is critical to prevent theft, data corruption or loss.

- Secure access to premises and restricted areas.
- Protect computing and network infrastructure.

#### Security Hardware

Methods to protect physical equipment:

- **Cable locks** for devices.
- **Locked telecommunication rooms**.
- **Security screws** for equipment.
- **Security cages** for critical hardware.
- **RFID tags** and motion-detection alarms.
- **Webcams with surveillance software**.

**Access control measures**:

- **Card keys** storing user data and access levels.
- **Biometric sensors** for fingerprints or retinas.
- **Security guards**.
- **RFID sensors** to monitor equipment.

---

#### Security Policy Categories

- **Conventional lock**: Uses a physical key.
- **Deadbolt lock**: Separate lock mechanism for enhanced security.
- **Electronic lock**: Unlocks via a PIN or code.
- **Token-based lock**: Uses secure cards or wireless key fobs.
- **Biometric lock**: Unlocks with physical characteristics like fingerprints.
- **Multifactor lock**: Combines multiple mechanisms for higher security.

---

#### Mantraps

Mantraps are used in high-security areas to limit access and prevent **intruding**.

- Small rooms with two doors, one of which must be closed before the other opens.
- Require verification at each door to proceed.
- Security guards can check IDs for added protection.

## Data - Your Greatest Asset

Data is one of an organization's most valuable assets and includes research, sales, financial, employee, and customer data.

- Data loss can occur due to theft, equipment failure, or disasters.
- **Data loss or leakage** refers to lost, stolen, or publicly leaked data.
- Protection methods include **data backups**, **file/folder permissions**, and **encryption**.

### Data Backups

- Backups store copies of data on removable media and are critical for protecting against loss.
- Regular backups should follow the organization's **security policy**.
- Backups are typically stored **offsite** to protect against onsite disasters.
- Common backup utilities:
  - **Windows**: Backup and Restore
  - **macOS**: Time Machine
  - **Linux**: Timeshift

---

### File and Folder Permissions

Permissions control user access to data and follow the **Principle of Least Privilege**.

- **NTFS**: Includes encryption, journaling, and access logging.
- **FAT32**: Does not support encryption or journaling.

**Permission Levels**:

- **Full Control**: Read, write, change, delete.
- **Modify**: Read, write, delete.
- **Read & Execute**: View, list, execute.
- **Read**: View and list only.
- **Write**: Add files/subfolders.

---

### File and Folder Encryption

Encryption transforms data into unreadable forms, requiring a **special key** for decryption.

- **EFS (Encrypting File System)**: Windows feature linked to a user account. Only the encrypting user can access the data.

---

### Data Wiping Magnetic Media

Simply deleting files or reformatting a drive does not ensure privacy.

**Data Wiping Methods**:

- **Data wiping software**: Overwrites data multiple times, making it unreadable.
- **Degaussing wand**: Uses magnets to erase hard drive platters.
- **Electromagnetic degaussing device**: Erases multiple drives quickly using strong magnetic fields.

---

### Data Wiping Other Media

Erasing SSDs and other non-magnetic media requires different techniques:

- Use **secure erase** for SSDs and hybrid SSDs.
- Destroy optical disks, USB sticks, and documents using **shredders** or **incinerators**.
- Devices like printers and multifunction machines may cache sensitive data and need regular wiping or destruction.

---

### Hard Drive Recycling and Destruction

When storage media is no longer needed, it can be:

1. **Destroyed**: Fully ensures data cannot be recovered.
2. **Recycled**: Wiped drives can be reformatted and reused.

#### Low-Level Format vs. Standard Format

- **Low-Level Format**: Marks the disk's surface with sector markers (performed during manufacturing).
- **Standard Format**: Creates a boot sector and file system after low-level formatting.

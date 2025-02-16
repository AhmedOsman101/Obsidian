---
title: Lecture 2
prev:
  text: "Lecture One"
  link: "/College/yearOne/firstTerm/IT-Essentials/Lectures/LectureOne"
next:
  text: "Lecture Three"
  link: "/College/yearOne/firstTerm/IT-Essentials/Lectures/LectureThree"
---

# IT Essentials Lecture 2: Advanced Computer Hardware

## Boot the Computer

### POST (Power-On Self-Test)

- Performed by BIOS to check all internal components.
- Alerts for malfunctioning components via error or beep codes.
- BIOS access key must be pressed during POST.

> [!Tip]
> Remove RAM to confirm POST functionality.
> The computer should emit a beep code for missing RAM.

### BIOS and CMOS

- **BIOS**: Firmware on a ROM chip, managing communication between OS and hardware, identifying drives, memory configuration, and expansion slots.
- **CMOS**: Stores BIOS settings and is battery-powered; if the battery fails, settings and time/date may reset.

### UEFI (Unified Extensible Firmware Interface)

- Modern firmware with additional features and security enhancements.
- Supports 32-bit and 64-bit systems, larger boot drives, and **Secure Boot** (preventing rootkits).

### BIOS and UEFI Security Features

- **Security Measures**:
  - **Passwords**: Control access levels.
  - **Drive Encryption**: Prevents unauthorized data access.
  - **LoJack**: Allows location tracking and file deletion.
  - **Trusted Platform Module (TPM)**: Stores encryption keys and certificates.
  - **Secure Boot**: Ensures only trusted OS boots.

### Access Levels

| Access Level     | Description                                       |
| ---------------- | ------------------------------------------------- |
| Full Access      | All settings accessible.                          |
| Limited Access   | Restricted access (e.g., time and date only).     |
| View-Only Access | All screens viewable, but no settings changeable. |
| No Access        | No access to BIOS setup utility.                  |

### Update the Firmware

- Modern BIOS chips (EEPROM) can be upgraded by **flashing**.
- Follow the manufacturer’s website instructions for BIOS updates.

## Electrical Power

### Procedures to Protect Equipment and Data

- **Electrostatic Discharge (ESD)**: Buildup of electric charge can damage components; use grounded mats and antistatic wrist straps.
- **Electromagnetic Interference (EMI)**: Interference in transmission media from sources like power lines; place sensitive devices away from EMI sources.
- **Radio Frequency Interference (RFI)**: Affects wireless networks; change Wi-Fi channels or use the 5 GHz band to reduce RFI.

### Wattage and Voltage

- **Basic Units**:
  - **Voltage (V)**: Work required to move a charge.
  - **Current (I)**: Electron flow rate, measured in amperes.
  - **Resistance (R)**: Opposition to current flow.
  - **Power (P)**: Work done per second, measured in watts.
- **Ohm’s Law**: $V = I \times R$
- **Power Calculation**: $P = V \times I$

### Power Supply Voltage Settings

- Dual-voltage supplies have a switch for 110V/115V or 220V/230V.
- Auto-detect voltage supplies do not need a manual switch.

### Power Fluctuation Types

- **Blackout**: Complete loss of AC power.
- **Brownout**: Reduced voltage for an extended period.
- **Noise**: Interference from generators, lightning.
- **Spike**: Sudden short-term increase in voltage.
- **Surge**: High voltage above the normal flow.

### Power Protection Devices

- **Surge Protectors**: Protect from surges and spikes.
- **Uninterruptible Power Supply (UPS)**: Provides backup power during blackouts and brownouts.
- **Standby Power Supply (SPS)**: Backup battery power with slower activation than UPS.

## Advanced Computer Functionality

### CPU Architectures

- **RISC (Reduced Instruction Set Computer)**: Executes a small set of instructions quickly.
- **CISC (Complex Instruction Set Computer)**: Broad instruction set for fewer steps per operation.
- **Cache Memory**: High-speed memory close to the CPU for faster instruction execution.

### Enhancing CPU Operation

- **Hyper-Threading (Intel)**: Multiple threads execute simultaneously, simulating multiple CPUs.
- **HyperTransport (AMD)**: High-speed CPU connection to the Northbridge.
- **CPU Throttling**: Reduces speed to save power and reduce heat.
- **CPU Virtualization**: Allows multiple OS to run on virtual machines as if on separate CPUs.

### Multicore Processors

- **Integrated Cores**: Multiple processors on one chip, sharing resources.
- **Integrated GPU**: Handles graphics processing with less heat than a dedicated GPU.

### CPU Cooling Mechanisms

- **Case Fans**: Increase airflow to remove heat.
- **CPU Heat Sinks**: Draw heat away from CPU; passive (no fan) or active (with fan).
- **Graphics Card Cooling**: Reduces heat from dedicated GPUs.
- **Water Cooling**: Efficiently dissipates heat from high-performance systems.

## Video and Graphic Ports

- **VGA**
  - An analog port and typically the oldest graphics port still in use on some PCs.
- **DVI**
  - Supports uncompressed digital video transmission.
  - Variants include DVI-A (analog), DVI-D (digital), and DVI-I (integrated).
- **HDMI**
  - Originally developed for high-definition TVs; carries the same video information as DVI but also supports digital audio and control signals.
- **DisplayPort**
  - Designed to replace both DVI and VGA for computer monitors, supporting high-bandwidth video and audio signals.

## USB Cables and Connectors

- **USB Evolution**
  - Standards include USB 1.0, USB 2.0, USB 3.0, and USB 3.2.
- **USB Type-A**
  - The typical rectangular connector on most computers, TVs, game consoles, and media players.
- **Mini-USB**
  - A rectangular connector with small indentations on each side, being replaced by micro-USB.
- **Micro-USB**
  - Commonly used in smartphones and tablets, characterized by two angled corners.
- **USB Type-B**
  - Square shape with beveled corners and an extra notch, used with printers and external hard drives.
- **USB Type-C**
  - A rectangular connector with four rounded corners, multipurpose, and the latest USB standard.
- **Lightning**
  - An 8-pin proprietary connector for Apple devices like iPhones and iPads, for both power and data.

## SATA Cables and Connectors

- **SATA Cable**
  - Connects internal storage devices to the motherboard; requires a separate power cable.
  - SATA data and power cables are keyed to prevent incorrect installation.
- **eSATA Cable**
  - Connects external SATA drives with a keyed connector.
- **eSATA Adapter**
  - An expansion card often used to add eSATA ports.

## Twisted Pair Cables and Connectors

- **Twisted Pair Cabling**
  - Common in Ethernet networks and older telephone systems.
  - **Unshielded Twisted Pair (UTP)**
    - Uses color-coded copper wires and is the most common twisted pair cable.
  - **Shielded Twisted Pair (STP)**
    - Includes foil or braiding to reduce interference.
- **RJ-45**
  - The connector used to terminate UTP cables for Ethernet ports.
- **RJ-11**
  - A connector used in older telephone networks.

## Coaxial Cables and Connectors

- **Coax Cable Construction**
  - Features an inner conductor, insulating material, and a foil shield for electromagnetic interference (EMI) protection.
- **RG-6**
  - A heavy-gauge cable for high-bandwidth, high-frequency applications like internet and cable TV.
- **RG-59**
  - A thinner cable used for lower bandwidth applications, such as analog video and CCTV.
- **BNC Connector**
  - An older connector used for digital or analog audio/video.

## SCSI and IDE Cables and Connectors

- **Small Computer Systems Interface (SCSI)**
  - A standard for connecting peripherals and storage devices in a daisy-chained format.
- **External SCSI Cable**
  - Used for older external devices like scanners and printers.
- **Internal SCSI Cable**
  - Typically used for internal hard drives with 50 pins in two rows.
- **IDE Cable**
  - Similar in appearance to SCSI cables, with three 40-pin connectors for connecting IDE drives to the motherboard.

## Monitor Characteristics

- **Screen Size**
  - Measured diagonally, from top-left to bottom-right, in inches.
- **Resolution**
  - The number of horizontal and vertical pixels (e.g., 1920 $\times$ 1080).
- **Native Resolution**
  - The best resolution for a specific monitor, displayed in native mode.
- **Connectivity**
  - Older monitors use VGA or DVI; newer ones support HDMI and DisplayPort.

## Monitor Terms

- **Pixel**
  - A tiny dot that displays red, green, and blue.
- **Dot Pitch**
  - The distance between pixels on the screen.
- **Brightness**
  - Measured in candelas per square meter ($\text{cd}/m^2$).
- **Contrast Ratio**
  - The difference in intensity between the brightest white and darkest black.
- **Aspect Ratio**
  - The horizontal-to-vertical measurement of the viewing area.
- **Refresh Rate**
  - The time it takes to refresh the screen image, measured in Hertz (Hz).
- **Response Time**
  - The time for a pixel to change color or brightness.
- **Interlaced vs. Non-Interlaced**
  - Interlaced displays create images in two passes, while non-interlaced create images line-by-line.

## Display Standards

- **CGA (320 $\times$ 200)**
- **VGA (640 $\times$ 480)**
- **SVGA (800 $\times$ 600)**
- **HD (1280 $\times$ 720) - 720p**
- **FHD (1920 $\times$ 1080) - 1080p**
- **QHD (2560 $\times$ 1440) - 2K**
- **UHD (3840 $\times$ 2160) - 4K**

## Using Multiple Monitors

Adding multiple monitors can enhance productivity by expanding the desktop or mirroring the display. Some computers support multiple monitors out-of-the-box. Connecting multiple PCs to one monitor, keyboard, and mouse requires a KVM switch.

## Computer Configuration

### Motherboard Upgrade

- Reasons for upgrade include changing user needs, new software requirements, and improved performance.
- A new motherboard may require changes to the CPU, RAM, and power supply.

#### Steps to Upgrade a Motherboard

1. Record power supply, case fan, LED, and button connections.
2. Disconnect cables and remove expansion cards.
3. Remove the old motherboard and install the new I/O shield.
4. Secure the new motherboard and reconnect all components.

### CPU Upgrade

- Upgrading the CPU can improve processing speed; may require a new compatible heat sink and fan assembly.
- Apply thermal compound between the CPU and heat sink.

### Storage Device Upgrade

- Consider adding a new hard drive or SSD to increase storage, speed, or enable a second OS.
- Steps include mounting the drive, connecting to the motherboard, and attaching a power cable.

### Peripheral Upgrades

- Reasons for upgrading peripherals like keyboards and mice include improved ergonomics, language customization, or accessibility for users with disabilities.

### Power Supply Upgrade

- Upgrading hardware may increase power needs, requiring a new power supply.
- Use online calculators to estimate required wattage.

## Choosing the Right PC

### Step 1: Identify Your Purpose

- **Basic Tasks**: Entry-level processor and budget-friendly PC.
- **Gaming**: Requires a powerful CPU, dedicated GPU, and sufficient RAM.
- **Content Creation**: High-performance CPU, ample RAM, and dedicated GPU.
- **Business Use**: Reliable CPU with good security and productivity features.
- **Portable Use**: Focus on battery life, weight, and form factor for laptops.

### Step 2: Determine Your Budget

- Entry-Level: $300 ~ $600.
- Mid-Range: $600 ~ $1,200.
- High-End: $1,200 and above.

### Step 3: Consider Specifications

- Processor, RAM, storage (SSD preferred), graphics card, display, and ports.

### Step 4: Read Reviews and Comparisons

- Check product reviews and warranties for reliability.

### Step 5: Make Your Purchase

- Look for promotions, discounts, or bundles.

### Step 6: Future-Proofing

- Choose PCs with accessible components for future upgrades.

## Protecting the Environment

### Safe Disposal Methods

- Proper disposal of hazardous computer components is essential to avoid fines and legal issues.
- Components like batteries, toner cartridges, chemical solvents, and CRT monitors require specific disposal methods.

### Safety Data Sheets (SDS)

- Formerly known as MSDS, SDS contains material safety, hazardous ingredient information, and disposal instructions.
- OSHA requires SDS for hazardous materials in the U.S.

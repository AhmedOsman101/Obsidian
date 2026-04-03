---
title: Packet Tracer Steps
prev:
  text: "Task 1"
  link: "/College/yearTwo/secondTerm/CCNA/Tasks/Task-1"
next: false
---

# CCNA - Packet Tracer Step-by-Step Guide

## Task: Design a 50-Computer Company Network

---

## Phase 1: Workspace Setup

1. Open **Cisco Packet Tracer**.
2. Clear the workspace (if any devices are present, select all and press Delete).
3. Save the file immediately: **File -> Save As -> `CompanyNetwork.pkt`**.

---

## Phase 2: Place Network Infrastructure Devices

### Step 2.1: Add the Router

1. In the bottom-left device palette, click **Network Devices** (router icon).
2. Select **Routers** from the category list.
3. Choose **2911 Integrated Services Router**.
4. Click on the workspace to place it near the **top center**.
5. Rename it: Click the device -> **Config tab** -> **Display Name** -> type `Core-Router`.

### Step 2.2: Add the Switches

1. In the device palette, click **Network Devices** -> **Switches**.
2. Select **2960-24PT Switch**.
3. Place three switches below the router in a horizontal row:
   - **Switch 0** — directly below the router (rename to `SW-Core`)
   - **Switch 1** — below and to the left of SW-Core (rename to `SW-Dept-A`)
   - **Switch 2** — below and to the right of SW-Core (rename to `SW-Dept-B`)
4. To rename: Click each switch -> **Config tab** -> **Display Name**.

### Step 2.3: Add the Server

1. In the device palette, click **End Devices** (computer icon).
2. Select **Server-PT**.
3. Place it next to `SW-Core`.
4. Rename it to `Company-Server`.

---

## Phase 3: Place End Devices (50 PCs)

### Step 3.1: Add PCs for Switch 0 (17 PCs)

1. In the device palette, click **End Devices** -> **PC-PT**.
2. Place 17 PCs below `SW-Core` in a grid pattern (e.g., 4 rows × 5 columns, minus 3).
3. Rename them sequentially: `PC-01` through `PC-17`.
   - Tip: Click each PC -> **Config tab** -> **Display Name**.

### Step 3.2: Add PCs for Switch 1 (17 PCs)

1. Place 17 PCs below `SW-Dept-A`.
2. Rename them: `PC-18` through `PC-34`.

### Step 3.3: Add PCs for Switch 2 (16 PCs)

1. Place 16 PCs below `SW-Dept-B`.
2. Rename them: `PC-35` through `PC-50`.

---

## Phase 4: Connect All Devices

### Step 4.1: Select Cable Types

Click the **Connections** icon (lightning bolt) in the bottom-left palette. You will see:

| Cable Icon            | Name                    | Use For                                             |
| :-------------------- | :---------------------- | :-------------------------------------------------- |
| **Solid black line**  | Copper Straight-Through | Different device types (PC->Switch, Switch->Router) |
| **Dashed black line** | Copper Cross-Over       | Same device types (Switch->Switch)                  |

### Step 4.2: Inter-Switch Connections (Crossover Cables)

1. Click the **Copper Cross-Over** cable (dashed line).
2. Click `SW-Dept-A` -> select **GigabitEthernet0/1**.
3. Click `SW-Core` -> select **GigabitEthernet0/1**.
4. Click the **Copper Cross-Over** cable again.
5. Click `SW-Core` -> select **GigabitEthernet0/2**.
6. Click `SW-Dept-B` -> select **GigabitEthernet0/1**.

### Step 4.3: Switch to Router Connection (Straight-Through Cable)

1. Click the **Copper Straight-Through** cable (solid line).
2. Click `SW-Core` -> select **GigabitEthernet0/2**.
3. Click `Core-Router` -> select **GigabitEthernet0/0**.

### Step 4.4: Server to Switch Connection (Straight-Through Cable)

1. Click the **Copper Straight-Through** cable.
2. Click `Company-Server` -> select **FastEthernet0**.
3. Click `SW-Core` -> select **FastEthernet0/18**.

### Step 4.5: PCs to Switches (Straight-Through Cables)

1. Click the **Copper Straight-Through** cable.
2. For each PC:
   - Click the PC -> select **FastEthernet0**.
   - Click the assigned switch -> select the next available **FastEthernet** port.

| PCs            | Connected To | Switch Ports                             |
| :------------- | :----------- | :--------------------------------------- |
| PC-01 to PC-17 | SW-Core      | FastEthernet0/1 through FastEthernet0/17 |
| PC-18 to PC-34 | SW-Dept-A    | FastEthernet0/1 through FastEthernet0/17 |
| PC-35 to PC-50 | SW-Dept-B    | FastEthernet0/1 through FastEthernet0/16 |

> **Tip**: The link lights will initially show **orange** (negotiating), then turn **green** when connected. If a light stays **red**, check that you selected the correct port.

---

## Phase 5: Configure the Router

### Step 5.1: Access Router CLI

1. Click `Core-Router`.
2. Go to the **CLI tab**.
3. Press **Enter** if prompted with `Would you like to enter the initial configuration dialog? [yes/no]:` -> type `no` and press Enter.
4. Press Enter again at the `Router>` prompt.

### Step 5.2: Configure the Gateway Interface

Type the following commands (press Enter after each line):

```
enable
configure terminal
hostname Core-Router
interface GigabitEthernet0/0
description LAN-Gateway
ip address 192.168.1.1 255.255.255.0
no shutdown
exit
exit
write memory
```

**What each command does:**

| Command                                | Purpose                                                    |
| :------------------------------------- | :--------------------------------------------------------- |
| `enable`                               | Enter privileged EXEC mode                                 |
| `configure terminal`                   | Enter global configuration mode                            |
| `hostname Core-Router`                 | Set the router's name                                      |
| `interface GigabitEthernet0/0`         | Select the interface connected to the LAN                  |
| `description LAN-Gateway`              | Add a descriptive label                                    |
| `ip address 192.168.1.1 255.255.255.0` | Assign the IP address and subnet mask                      |
| `no shutdown`                          | **Activate** the interface (interfaces are off by default) |
| `exit`                                 | Return to previous mode                                    |
| `write memory`                         | Save configuration to NVRAM                                |

### Step 5.3: Verify Router Configuration

```
show ip interface brief
```

You should see `GigabitEthernet0/0` with status **up** and protocol **up**, with IP `192.168.1.1`.

---

## Phase 6: Configure the Server

### Step 6.1: Set Static IP

1. Click `Company-Server`.
2. Go to the **Desktop tab** -> **IP Configuration**.
3. Enter:
   - **IP Address**: `192.168.1.2`
   - **Subnet Mask**: `255.255.255.0`
   - **Default Gateway**: `192.168.1.1`

### Step 6.2: Configure DHCP Service (Optional — for automatic PC addressing)

1. Go to the **Services tab**.
2. Click **DHCP** in the left panel.
3. Set **Service** to **On**.
4. Configure the pool:
   - **Pool Name**: `LAN-Pool`
   - **Default Gateway**: `192.168.1.1`
   - **DNS Server**: `192.168.1.2`
   - **Start IP Address**: `192.168.1.10`
   - **Maximum number of users**: `50`
5. Click **Save**.

### Step 6.3: Configure DNS Service (Optional)

1. Go to the **Services tab**.
2. Click **DNS** in the left panel.
3. Set **Service** to **On**.
4. Add a record:
   - **Name**: `company.local`
   - **Address**: `192.168.1.2`
5. Click **Add**, then **Save**.

---

## Phase 7: Configure the PCs

### Option A: Manual IP Configuration (Recommended for clarity)

For each PC:

1. Click the PC.
2. Go to the **Desktop tab** -> **IP Configuration**.
3. Enter the appropriate values:

| PC Range       | IP Address                   | Subnet Mask   | Default Gateway |
| :------------- | :--------------------------- | :------------ | :-------------- |
| PC-01 to PC-17 | 192.168.1.10 to 192.168.1.26 | 255.255.255.0 | 192.168.1.1     |
| PC-18 to PC-34 | 192.168.1.27 to 192.168.1.43 | 255.255.255.0 | 192.168.1.1     |
| PC-35 to PC-50 | 192.168.1.44 to 192.168.1.59 | 255.255.255.0 | 192.168.1.1     |

### Option B: DHCP (Automatic)

If you configured DHCP on the server (Phase 6.2):

1. Click each PC.
2. Go to the **Desktop tab** -> **IP Configuration**.
3. Select **DHCP**.
4. Wait for the message: `DHCP Request Successful`.
5. The PC will automatically receive an IP, subnet mask, and gateway.

---

## Phase 8: Verify Connectivity

### Step 8.1: Ping the Gateway

1. Open any PC (e.g., `PC-01`).
2. Go to **Desktop tab** -> **Command Prompt**.
3. Type:
   ```
   ping 192.168.1.1
   ```
4. **Expected result**: 4 replies with `Reply from 192.168.1.1: bytes=32 time<1ms TTL=255`.
5. The first ping may show `Request timed out` due to ARP resolution — this is normal.

### Step 8.2: Ping the Server

```
ping 192.168.1.2
```

**Expected result**: 4 successful replies.

### Step 8.3: Ping Across Switches

1. From `PC-01` (on SW-Core), ping `PC-18` (on SW-Dept-A):
   ```
   ping 192.168.1.27
   ```
2. From `PC-01`, ping `PC-35` (on SW-Dept-B):
   ```
   ping 192.168.1.44
   ```
3. **Expected result**: All pings succeed, confirming inter-switch communication.

### Step 8.4: Ping Between All Switches

Test at least one PC from each switch pinging a PC on every other switch to confirm full connectivity.

---

## Phase 9: Final Checks

### Step 9.1: Verify All Link Lights

- All connected ports should show **green** (or **green arrows** for active links).
- Orange lights indicate the link is still negotiating — wait a few seconds.
- Red lights indicate a problem — check cable type and port selection.

### Step 9.2: Verify IP Configuration Summary

| Component | Count | Status                                   |
| :-------- | :---- | :--------------------------------------- |
| Router    | 1     | Configured with 192.168.1.1/24           |
| Switches  | 3     | Connected via crossover cables           |
| Server    | 1     | Static IP 192.168.1.2, DHCP enabled      |
| PCs       | 50    | IPs 192.168.1.10–59, gateway 192.168.1.1 |
| Cables    | ~54   | Straight-through + crossover as needed   |

### Step 9.3: Save the Project

- **File -> Save** (or Ctrl+S).
- The `.pkt` file is your deliverable.

---

## Troubleshooting

| Problem                       | Cause                              | Solution                                                         |
| :---------------------------- | :--------------------------------- | :--------------------------------------------------------------- |
| Red link light                | Wrong cable type or wrong port     | Verify cable type (straight vs crossover) and port selection     |
| Ping fails (same switch)      | Wrong IP or subnet mask            | Check PC IP configuration matches 192.168.1.x/24                 |
| Ping fails (different switch) | Inter-switch link down             | Verify crossover cables between switches are connected and green |
| Ping fails (to gateway)       | Router interface not activated     | Check `no shutdown` was applied to GigabitEthernet0/0            |
| First ping times out          | ARP resolution delay               | Normal behavior — ping again                                     |
| DHCP fails                    | DHCP service not enabled on server | Go to Server -> Services -> DHCP -> set to On                    |

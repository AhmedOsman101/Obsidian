---
prev:
  text: "Lecture Seven"
  link: "/College/IT-Essentials/Lectures/LectureSeven"
next:
  text: "Lecture Nine"
  link: "/College/IT-Essentials/Lectures/LectureNine"
---

# IT Essentials Lecture 8: Configure Operating System

## Windows Desktop, Tools, and Applications

### Windows Desktop

- The Windows desktop is a graphical representation of the workspace (GUI), featuring icons, toolbars, and menus for file management and manipulation.

### Desktop Properties

- The Windows desktop is highly customizable, including:
  - Re-arranging titles
  - Changing colors and sounds
  - Modifying screen resolution
- Customizations in Windows 7, 8, 8.1, and 10 can be accessed by right-clicking the desktop and selecting **Personalize**:
  - Change desktop icons, mouse pointers, and account picture
  - Modify theme’s background, color, sound, and screensaver

---

### Personalizing the Windows Desktop

- **Themes**: The fastest way to change the look and feel of the Windows GUI.
- **Apps Environment**: Customizable desktop start screen with the ability to arrange tiles.
- **Tiles**: Click and drag tiles to rearrange them.
- **Start Screen**: Right-click on an app to select **Pin to Start**.
- **Search**: Start typing the app's name to quickly search for it.
- **Personalization Window**: Change desktop appearance, display settings, and sound settings.

---

### The Windows Start Menu

#### Windows 7 Start Menu

- Displays:
  - All installed applications
  - Recently opened documents
  - Search feature, Help and Support, and Control Panel
- To customize, right-click the taskbar and select **Properties** > **Start Menu** > **Customize**.

#### Windows 8.0 and 8.1 Start Menu

- Windows 8 features the **Start Screen** and **Apps Screen**.
- Windows 8.1 offers a **Limited Start Menu**.

#### Windows 10 Start Menu

- Tiles for apps, categorized by type (e.g., games, creative software).
- Applications in alphabetical order, with quick access to recently used apps.
- Includes shortcuts to libraries, settings, and shutdown options.

---

### The Taskbar

- Displays all applications installed, recently opened documents, search, Help, and Control Panel.
- To customize the Start Menu in Windows 7, right-click an empty area of the taskbar and choose **Properties** > **Start Menu** > **Customize**.

---

### Windows Task Manager Functions

- **Processes**: Shows instructions (programs) running on the system.
- **Performance**: Displays system performance graphs for CPU, memory, disk, and network.
- **App History**: Tracks historical resource usage, including CPU time and network data.
- **Startup**: Shows processes that start automatically during Windows startup.
- **Users**: Displays who is logged into the PC and the system resources they're using.
- **Details**: Allows changing CPU priority levels for processes.
- **Services**: Shows the available services and their operational status.

#### Task Manager in Windows 7

- Has six tabs:
  - **Applications**: Running applications, with the ability to create, switch, or close them.
  - **Processes**: Running processes with options to end or change priorities.
  - **Services**: Shows available services and their status.
  - **Performance**: Displays CPU and page file usage.
  - **Networking**: Displays network adapter usage.
  - **Users**: Shows users logged on and the resources they are using.

#### Task Manager in Windows 10

- Combines the **Applications** and **Processes** tabs.
- **Networking** is incorporated into the **Performance** tab.
- The **Users** tab includes more detailed resource usage for each user.

---

### File Explorer

- **File Explorer** (Windows 8 and 10) and **Windows Explorer** (Windows 7 and earlier) are used for file management.
- The **Ribbon** provides options for copying, moving files, and creating new folders.
- Tabs at the top of File Explorer change based on the selection.
- Functions:
  - Navigate the file system
  - Manage files, folders, and subfolders
  - Manage applications on storage media
  - Preview some file types
  - Mount ISO images using Disk Image tools

#### This PC

- In Windows 10 and 8.1, **This PC** gives access to devices and drives.
- In Windows 7, the equivalent is **Computer**.
- In Windows 8.0 and earlier, click **Start** and select **Computer** to open it.

---

### Run as Administrator

- Modern operating systems improve security by restricting access to system and other protected files.
- To override this, right-click a file and choose **Run as Administrator**.
- Confirm the action in the **User Account Control (UAC)** window to grant elevated permissions.

## Windows Libraries and File Management

### Windows Libraries

- **Windows Libraries** help organize content, including removable media, without physically moving files.
- A **library** is a virtual folder that presents content from various locations in one view.
- In Windows 10, each user has six default libraries, but they are hidden by default.
  - To view them, right-click the left pane in File Explorer and choose **Show Libraries**.

---

### Directory Structures

- **Root Level**: The main partition is usually labeled as **C: drive**.
- Directories can contain **subfolders** (nested directories).
- The path length is limited by a maximum character limit:
  - In Windows 10, the default limit is **260 characters**.
- Example of a nested folder structure in File Explorer, showing the full path.

---

### User and System File Locations

- **Users Folder**: Stores files created by users at `C:\Users\<username>`.
- **System Folder**: Contains OS files, located at `C:\Windows\system32`.
- **Program Files**: Stores software installed by most applications, located at `C:\Program Files`.
- **Program Files (x86)**: For 32-bit applications, located at `C:\Program Files (x86)`.
- **Temporary Files**: Contains temporary files created by the OS or applications, which are automatically deleted once no longer needed.

---

### File Extensions

- To show file extensions, click the **View** tab in File Explorer and check **File name extensions**.
- **Naming Conventions**:
  - Maximum of **255 characters** allowed.
  - Characters like `/` or `\` are not allowed.
  - Filenames are **not case sensitive**.
  - **Default**: File extensions are hidden.
- Examples of file extensions:
  - `.docx` - Microsoft Word
  - `.txt` - Text file
  - `.jpg` - Image file
  - `.pptx` - Microsoft PowerPoint
  - `.zip` - Compressed file

---

### File Attributes

- **File Attributes** are used to define specific characteristics of files:
  - `R`: Read-only file.
  - `A`: File marked for backup during the next disk backup.
  - `S`: System file, typically protected from modification.
  - `H`: Hidden file, not displayed by default in directories.

## Configuring Windows with Control Panels

### Windows 10: Settings and Control Panel

- **Two Ways to Configure Windows**:
  1. **Settings App**
  2. **Control Panel**

---

### Introduction to Control Panel

- **System Admins** generally prefer the **Control Panel** over the Settings app.
- To open the **Control Panel**:
  - Type **Control Panel** in the search box and select it from the results.
  - Pin it to the Start menu for quicker access.
  - Alternatively, open it from the **Command Prompt** by typing `control`.

---

### Control Panel Views

- By default, the **Control Panel** opens in **Categories View**.
- Both views include a **search box** for finding specific Control Panel items.
  - **Category View**: Organizes settings by categories.
  - **Small Icons View**: Displays all items in a list, without grouping.

---

### Control Panel Categories

- **System & Security**: Access administrative tools for configuring security and system functions, such as Windows Defender Firewall.
- **Network & Internet**: Configure networking settings, file sharing, default browser, and infrared file exchange settings.
- **Hardware & Sound**: Access configurations for devices like printers, media devices, power settings, and mobility options.
- **Programs**: Manage installed programs, Windows features, and updates. Allows activation or deactivation of Windows features.
- **User Accounts**: Manage Windows user accounts, web and Windows credentials, file encryption certificates, and User Account Control (UAC).
- **Appearance and Personalization**: Customize taskbar settings, file explorer, and available fonts.
- **Clock and Region**: Configure time, date settings, and formats.
- **Ease of Access**: Configure accessibility features, including speech recognition and text-to-speech services, to make Windows easier to use for individuals with physical or perceptual challenges.

## User Accounts and Management

### User Accounts Control Panel

- The **User Accounts** Control Panel helps you create, change, and delete user accounts.
- An **administrative account** is created during Windows installation.
- **Standard user accounts** can manage most configuration settings that do not affect other users and can only access their own files and folders.
- Some features in the **User Accounts utility** require administrative privileges and are not available to standard user accounts.

---

### User Account Control (UAC) Settings

- **User Account Control (UAC)** monitors programs on the computer and warns users when an action might pose a security threat.
- In Windows 7 through 10, the UAC level can be adjusted to change the type of notifications you receive when programs make changes to the system.
- The **default UAC setting** for the primary account is: **"Notify me only when programs try to make changes to my computer."**
- Adjust the UAC settings to control when you are notified about potential changes by programs.

---

### Credential Manager

- **Credential Manager** helps manage passwords for websites and Windows applications.
  - These credentials are securely stored and can be **viewed, added, edited, or deleted**.
  - Web credentials are only stored for websites accessed via **Internet Explorer** or **Edge**; other browsers do not save web credentials.

## Network and Internet Settings

### Network Settings

- The **Network Status** app in Windows 10 consolidates multiple network functions into one app.
  - It links to various settings and Control Panel items such as the **Network and Sharing Center**.
  - Some options, like **Airplane Mode**, **Mobile Hotspot**, and **Data Usage**, are more relevant to mobile devices than desktop PCs.
  - **Mismatched speed and duplex settings** can cause network connection issues.

---

### Internet Options

- **General Tab**: Select the **default home page**, view and delete browsing history, adjust search settings, and customize the browser appearance.
  - **Security Tab**: Choose security zones for trusted or restricted internet websites and set the types of allowed information.
  - **Privacy Tab**: Manage access to private information (e.g., cookies, location), pop-up blockers, and toolbars.
  - **Content Tab**: Adjust **AutoComplete** settings and configure **feeds and web slices** for viewing in Internet Explorer.
  - **Connections Tab**: Configure **dial-up**, **VPN**, and **Proxy Server** settings.
  - **Programs Tab**: Set Internet Explorer as the default browser, enable browser add-ons, select HTML editor for IE, and choose programs for internet services.
  - **Advanced Tab**: Reset Internet Explorer settings to default.

---

### Network and Sharing Center

- The **Network and Sharing Center** allows administrators to configure and review most network settings.
  - View **network status** and **internet connectivity**.
  - Modify the **properties of protocols and services** running on network adapters.
  - Configure **file and device sharing** using **network profiles**.
    - **Network profiles** adjust sharing settings based on whether the network is private (secure) or public (insecure).
    - Profiles sync automatically when signing into the same **Microsoft account** on multiple devices.

## Display Settings and Configuration

### Display Settings in Windows 10

- To access **Display Settings**, right-click on the desktop and select **Display settings** from the context menu.
  - You can modify the **screen resolution** for the graphics adapter.
  - If the resolution is not correctly set, unexpected display results may occur.
  - Change the **magnification** and **text size** of Windows interface elements.

---

### Display Features

- **Windows 8/7 Display Control Panel** options:
  - **Display**: Configure multiple monitors.
  - **Screen Resolution**: Set the number of pixels horizontally and vertically (higher values provide better resolution, e.g., 1920x1080).
  - **Orientation**: Choose between **Landscape**, **Portrait**, **Flipped Landscape**, or **Flipped Portrait**.
  - **Refresh Rate**: Set how often the screen is redrawn (measured in Hertz, Hz). Higher refresh rates result in a smoother image.
  - **Display Colors**: Higher bit depths allow for more colors to be displayed.
  - **Multiple Displays**: Configure settings for two or more monitors attached to the computer. The desktop can either be **extended** (one large display) or **mirrored** (same image on all monitors).

## Power Options and System Management

### Power Options Control Panel

- The **Power Options** Control Panel allows users to adjust the power consumption of devices or the entire computer.
- You can configure a **power plan** to maximize battery performance or conserve energy.
- Unlike previous Windows versions, the setting that requires a password when the computer wakes has been moved from **Power Options** to **User Accounts** in Windows 10, enhancing data security.
- Windows offers **preset power plans**, or you can create custom plans.
- **Note**: Power Options settings vary based on the detected hardware.

---

### Power Options Actions

If users do not want to completely shut down their computer, the following options may be available:

- **Do Nothing**: The computer continues to run at full power.
- **Sleep**: Saves documents, applications, and system state in RAM, allowing for quick wake-up.
- **Hibernate**: Saves documents, applications, and system state to the hard drive. Takes longer to wake up than Sleep but uses no power.
- **Turn off the display**: The computer continues to run at full power, but the display is turned off.
- **Shut down**: Completely shuts down the computer.

---

### System Control Panel Item

- The **System Control Panel** provides basic system information, tools, and advanced settings.
- This item is very similar across Windows 7, 8, and 10.
- Settings are accessible by clicking the links in the left panel.

---

### Increasing Performance

- To improve system performance, **virtual memory settings** can be adjusted.
  - When system RAM is insufficient, Windows creates a **paging file** on the hard drive to store data from RAM, though this process is slower.
  - Consider adding more **RAM** if performance is hindered by insufficient memory.
  - **Windows ReadyBoost** allows the use of an external flash device as additional virtual memory to enhance performance.

---

### Device Manager

- **Device Manager** lists all installed devices and helps diagnose and resolve device issues.
- Common actions include:
  - **Update a driver**: Change the currently installed driver.
  - **Roll back a driver**: Revert to the previously installed driver.
  - **Uninstall a driver**: Remove a driver.
  - **Disable a device**: Temporarily disable a device.

---

### Devices and Printers

- The **Devices and Printers** Control Panel item displays external devices connected to the computer (e.g., USB, network devices).
- It allows users to quickly add new devices.
- **Windows** automatically installs required drivers for most devices.
- A **yellow triangle** alert indicates a driver issue, while a **green check mark** shows the default device.

---

### Sound

- The **Sound Control Panel** allows configuration of audio devices and the computer’s sound scheme.
  - Change notification sounds, like replacing a beep with a chime.
  - Choose which audio device is used for playback and recording.
- This utility remains largely unchanged between Windows 7, 8, and 10.

---

### Clock and Time Management

#### Date and Time

- **Date and Time** settings allow you to adjust system time, date, and time zone.
  - Windows automatically synchronizes with an **internet time authority** to ensure accurate timekeeping.
  - This feature is found under the **Clock and Region** category in Windows 10 and **Clock, Language, and Region** in Windows 7 and 8.

---

### Region Settings

- **Region** settings let you change the format of **numbers, currencies, dates, and times**.
  - Windows 10 uses location services to automatically detect the computer's region. If this is not possible, it can be set manually.
  - Modify the display patterns for **date and time formats**.
  - Click **Additional settings** to change **number, currency, and measurement formats**.

---

### Language Settings

- **Language** settings in Windows 7 and 8 were managed through a Control Panel item where users could install language packs.
- In **Windows 10**, language settings have moved to the **Region** settings app, allowing users to install **Cortana** support for voice commands in supported languages.

---

### Programs and Features

- Use the **Programs and Features** Control Panel item to uninstall applications.
  - It’s important to uninstall programs via **Programs and Features** or the application’s uninstallation menu in the **Start** menu.
  - Some programs can be **repaired** if they encounter issues.
  - Troubleshoot programs designed for older versions of Windows.
  - Manually install software from a network.

---

### Windows Features and Updates

- **Windows Features** allows you to activate or deactivate optional features.
- **Programs and Features** also lets you view installed **Windows updates** and uninstall problematic updates if they don't have dependencies with other updates or software.

---

### Default Programs

- The **Default Programs** Control Panel item helps configure how Windows handles files and applications associated with them.
  - For example, you can set the default browser for opening links from emails or files.
  - You can also specify which application will open a specific file type, such as configuring a **JPEG** file to open in a browser or graphic editor.

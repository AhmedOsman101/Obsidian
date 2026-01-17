# Lecture 3: User Management in Linux

## Linux User

- A **user** is an individual who interacts with the Linux system.
- Each user has a **unique username** and **user ID (UID)**.
- User accounts control access to files, processes, and resources.
- **Root user** has full administrative control.
- **UID allocation:**
  - `0`: root user
  - `1–999`: system users
  - `1000+`: local users
- Linux can support up to **60,000 user accounts** per system.

## Types of User Accounts

1. **Root**
   - The **superuser** with complete system control.
   - Can execute all commands without restriction.
   - Acts as the **system administrator**.

2. **System**
   - Used for system-level operations (e.g., mail, SSH).
   - Modifying these accounts can break system functionality.

3. **User**
   - Regular accounts for everyday users.
   - Have limited privileges to ensure system security.

## The Superuser

- Account with **UID 0**, **GID 0**, and full control over the system.
- Known as **root**.
- Should be used cautiously to prevent system damage.
- Avoid using root for regular operations.
- Must have a **strong password**.
- Can access all files and perform any system action.

## The `sudo` Command

- Allows users to execute commands as another user (typically root).

**Syntax:**

```bash
sudo [options] [-u user] command
```

- If no user is specified, root is assumed.
- A new shell is temporarily opened with elevated privileges.

### Benefits of Using `sudo`

- Prevents constant root access, reducing mistakes.
- Removes need to share the root password.
- Restricts users from executing unauthorized commands.

## The `sudoers` File

- Defines which users can run commands as other users.
- Configuration stored in: `/etc/sudoers`

- Must be edited using:

```bash
visudo
```

- Permissions can be granted per-user or per-group, with or without password prompts.

## The `su` Command

- Stands for **substitute user** or **switch user**.
- Used to switch to another user account (root by default).

### Syntax

```bash
su [options] [username]
```

- Prompts for target user's password.
- Opens a new shell with that user's privileges.
- Use `exit` to return to the previous shell.

## Alternate Permission Models

- Some distros (e.g., **Ubuntu**) disable direct root login.
- Root password is unknown to the end user; must use `sudo` or GUI equivalents.
- Users in the **admin** group can perform root actions.
- Example:

```bash
sudo su -        # Switch to the root user
sudo su - user2  # Switch to user2
```

Prompts for the user's password, not root's.

## Permissions

### Access Rights

| Type  | Description                  |
| ----- | ---------------------------- |
| **r** | Read                         |
| **w** | Write (modify, move, delete) |
| **x** | Execute                      |

### Access Levels

| Level | Description    |
| ----- | -------------- |
| **u** | User (owner)   |
| **g** | Group          |
| **o** | Others (world) |

### Permissions Reference Table

| **Permission**      | **Octal** | **Binary** | **Symbolic** | **Description**                                  |
| ------------------- | --------- | ---------- | ------------ | ------------------------------------------------ |
| **None**            | 0         | 000        | `---`        | No access at all                                 |
| **Execute**         | 1         | 001        | `--x`        | Ability to run a file or enter a directory       |
| **Write**           | 2         | 010        | `-w-`        | Ability to modify file content or directory list |
| **Write + Execute** | 3         | 011        | `-wx`        | Combination of write and execute                 |
| **Read**            | 4         | 100        | `r--`        | Ability to view file content or list directory   |
| **Read + Execute**  | 5         | 101        | `r-x`        | Read and execute (typical for directories)       |
| **Read + Write**    | 6         | 110        | `rw-`        | Read and write (typical for data files)          |
| **Full**            | 7         | 111        | `rwx`        | All permissions granted                          |

### Changing Permissions

Use the `chmod` command:

```bash
chmod [mode] file
```

Modes:

- **Symbolic Mode**: uses letters (e.g., `chmod u+x file`)
  - `+`: Adds the chosen permission to the file/directory (e.g. `chmod u+x ./script.sh`).
  - `-`: Removes the chosen permission from the file/directory (e.g. `chmod -x ./script.sh`).
  - `=`: Sets the chosen permission to the file/directory (e.g. `chmod =x ./script.sh`).
- **Absolute Mode**: uses numeric codes (e.g., `chmod 644 private-file.txt`)

Example: Assume `file.sh` has the following permissions: `-r--r--r--`

```bash
# Grant the user write permission
chmod u+w file.sh  #=> -rw-r--r--

# Grant execute permission to all
chmod +x file.sh   #=> -rwxr-xr-x

# Remove execute permission for group and others
chmod go-x file.sh #=> -rwxr--r--
```

## Linux Groups

- A **group** is a collection of users sharing common permissions.
- Each group has a unique **Group ID (GID)**.
- Files inherit the **group ownership** of the user who creates them.
- Simplifies access control and permission management.

## Linux Administration Files

| File           | Purpose                           |
| -------------- | --------------------------------- |
| `/etc/passwd`  | Stores user account info.         |
| `/etc/shadow`  | Stores encrypted passwords.       |
| `/etc/group`   | Contains group information.       |
| `/etc/gshadow` | Secure group account information. |

## Useful User Information Commands

| Command  | Description                                 |
| -------- | ------------------------------------------- |
| `whoami` | Displays current username.                  |
| `w`      | Lists logged-in users and their activities. |
| `id`     | Shows UID, GID, and group memberships.      |

### `id` Command Options

| Option         | Description                   |
| -------------- | ----------------------------- |
| `-g, --group`  | Print effective group ID.     |
| `-G, --groups` | Print all group IDs.          |
| `-n, --name`   | Display names instead of IDs. |
| `-r, --real`   | Show real ID.                 |
| `-u, --user`   | Print the effective user ID.  |
| `--help`       | Show help message.            |
| `--version`    | Show version info.            |

## Managing User Accounts

| Command    | Description                   |
| ---------- | ----------------------------- |
| `useradd`  | Add a new user.               |
| `usermod`  | Modify existing user details. |
| `userdel`  | Delete a user.                |
| `groupadd` | Create a new group.           |
| `groupmod` | Modify existing group.        |
| `groupdel` | Delete a group.               |

## The `useradd` Command

- Adds new users to the system.
- `adduser` is a symbolic link to `useradd`.
- Updates the following files:
  - `/etc/passwd`
  - `/etc/shadow`
  - `/etc/group`
  - `/etc/gshadow`

- Creates a home directory for the new user in `/home`.

### Common Usages

- Create user with custom home:

```bash
sudo useradd user1 -d /custom/home
```

- Assign specific UID or GID:

```bash
sudo useradd user2 -u 1050 -g 100
```

- Create user without home:

```bash
sudo useradd -M homeless
```

- Set expiry date:

```bash
sudo useradd user2 -e 2025-12-31
```

- Add comment or shell:

```bash
sudo useradd user3 -c "Developer" -s /bin/bash
```

- Set an **unencrypted** password for the user:

```bash
sudo useradd user4 -p strong_password
```

## The `usermod` Command

- Modifies properties of an existing user.

### Examples

The `usermod` command has similar options to the `useradd` command.

- Change username:

```bash
sudo usermod oldname -l newname
```

- Change home directory:

```bash
sudo usermod user1 -d /new/home
```

- Change group:

```bash
sudo usermod user1 -g newgroup
```

- Lock or unlock account:

```bash
sudo usermod -L user1   # lock
sudo usermod -U user1   # unlock
```

- Change user ID:

```bash
sudo usermod -u 1100 user1
```

## The `userdel` Command

- Deletes a user account.

### Syntax

```bash
userdel [options] username
```

- By default, **keeps** the user's home directory.
- To remove it:

```bash
sudo userdel -r user1 # Removes the user's home directory
```

### Options

| Option         | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `-f, --force`  | Force removal even if user logged in.                               |
| `-r, --remove` | Remove home directory and mail.                                     |
| `-R, --root`   | Apply within a chroot environment.                                  |
| `-Z`           | Remove SELinux user mapping, applicable in SELinux-enabled systems. |

## Managing Passwords

Users can manage passwords in two ways:

1. `passwd` command
2. `openssl passwd` command

### `passwd` Command

- Change password interactively.
- Requires entering current password before new one.
- Root can change other users' passwords.

Authorized users in the `/etc/sudoers` file (e.g., the `admin` or `wheel` group) can use `sudo passwd root` to set or change the root password.
This is essential for distributions where the root account is locked or has no password set by default.

### Examples

- Change another user's password:

```bash
sudo passwd user1
```

- Force password reset on next login:

```bash
sudo passwd -e user1
```

- Lock and unlock accounts:

```bash
sudo passwd -l user1   # lock
sudo passwd -u user1   # unlock
```

- Set password expiration in days (e.g., 30 days):

```bash
sudo passwd -x 30 user1
```

## Group Management

All groups are listed in the `/etc/group` file.

### Creating Groups

```bash
groupadd groupname
```

Each new group gets a **GID**.

### Checking User Groups

```bash
groups
```

### Modifying Groups

```bash
groupmod oldname -n newname
```

### Setting Group Passwords

```bash
gpasswd groupname
```

- Group passwords are stored in `/etc/gshadow`.

### Adding Users to Groups

```bash
usermod username -aG groupname
```

### Deleting Groups

```bash
groupdel groupname
```

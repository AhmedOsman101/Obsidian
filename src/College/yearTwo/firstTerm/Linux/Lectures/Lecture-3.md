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

- Account with **UID 0** and full control over the system.
- Known as **root**.
- Should be used cautiously to prevent system damage.
- Avoid using root for regular operations.
- Must have a **strong password**.
- Can access all files and perform any system action.

## The `sudo` Command

- Allows users to execute commands as another user (typically root).
- Syntax:

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
sudo su -
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

### Permission Notation

**Numeric format:**

- Read (r) = 4
- Write (w) = 2
- Execute (x) = 1

| Permission | Numeric Value |
| ---------- | ------------- |
| ---        | 0             |
| --x        | 1             |
| -w-        | 2             |
| -wx        | 3             |
| r--        | 4             |
| r-x        | 5             |
| rw-        | 6             |
| rwx        | 7             |

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

## Linux Groups

- A **group** is a collection of users sharing common permissions.
- Each group has a **Group ID (GID)**.
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

| Option      | Description                   |
| ----------- | ----------------------------- |
| `-g`        | Print effective group ID.     |
| `-G`        | Print all group IDs.          |
| `-n`        | Display names instead of IDs. |
| `-r`        | Show real ID.                 |
| `-u`        | Print user ID.                |
| `--help`    | Show help message.            |
| `--version` | Show version info.            |

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
- Symbolic link to `adduser`.
- Updates the following files:
  - `/etc/passwd`
  - `/etc/shadow`
  - `/etc/group`
  - `/etc/gshadow`

- Creates a home directory for the new user in `/home`.

### Common Usages

- Create user with custom home:

```bash
sudo useradd -d /custom/home user1
```

- Assign specific UID or GID:

```bash
sudo useradd -u 1050 -g 100 user2
```

- Create user without home:

```bash
sudo useradd -M homeless
```

- Set expiry date:

```bash
sudo useradd -e 2025-12-31 user2
```

- Add comment or shell:

```bash
sudo useradd -c "Developer" -s /bin/bash user3
```

- Set an **unencrypted** password for the user:

```bash
sudo useradd -p strong_password user4
```

## The `usermod` Command

- Modifies properties of an existing user.

### Examples

The `usermod` command has similar options to the `useradd` command.

- Change username:

```bash
sudo usermod -l newname oldname
```

- Change home directory:

```bash
sudo usermod -d /new/home user1
```

- Change group:

```bash
sudo usermod -g newgroup user1
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

- By default, does **not** delete the user's home directory.
- To remove it:

```bash
sudo userdel -r user1
```

### Options

| Option | Description                           |
| ------ | ------------------------------------- |
| `-f`   | Force removal even if user logged in. |
| `-r`   | Remove home directory and mail.       |
| `-R`   | Apply within a chroot environment.    |
| `-Z`   | Remove SELinux user mapping.          |
| `-h`   | Show help message.                    |

## Managing Passwords

Users can manage passwords in two ways:

1. `passwd` command
2. `openssl passwd` command

### `passwd` Command

- Change password interactively.
- Requires entering current password before new one.
- Root can change other users' passwords.

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

- Set password expiration (e.g., 30 days):

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
groupmod -n newname oldname
```

### Setting Group Passwords

```bash
gpasswd groupname
```

- Group passwords are stored in `/etc/gshadow`.

### Adding Users to Groups

```bash
usermod -aG groupname username
```

### Deleting Groups

```bash
groupdel groupname
```

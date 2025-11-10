# Vi Text Editor

## Introduction to the Vi Editor

- Before **vi**, UNIX used a **line editor** that allowed editing one line at a time.
- **vi** (Visual Editor) was created by **Bill Joy in 1976**.
- It is the **default editor** in Linux/UNIX systems and is **case-sensitive**.
- **vim** (Vi IMproved) is an advanced version of vi.
- Used for creating, editing, or viewing text files.
- Not a text formatter (unlike MS Word); no margins or formatting controls.

## Characteristics of Vi

- Powerful and universally available on UNIX systems.
- Harder to learn for new users, especially Windows users.
- Allows movement and modification anywhere in a file.
- Case-sensitive commands.

## Starting Vi

```bash
vi filename
```

- Creates `filename` if it doesn't exist, otherwise opens it.
- Opens in **Command Mode** by default.

## Modes of Operation

Vi has **three modes**:

1. **Command Mode** – Default mode for navigation and commands.
2. **Insert Mode** – Used to type and edit text.
3. **Last Line Mode (Escape Mode)** – Used to save, quit, or execute commands.

## Command Mode

- Activated by pressing **Esc**.
- Keystrokes are interpreted as commands (not shown on screen).
- Used for navigation, deletion, copying, and pasting text.
- Pressing **Esc** again makes vi beep or flash if already in command mode.

## Insert Mode

- Entered from Command Mode by pressing **i**.
- Allows text input and editing.
- Exit by pressing **Esc** to return to Command Mode.

### Example

```bash
vi vifile
i
This file is being created using the vi editor.
<Esc>
```

## Last Line Mode (Escape Mode)

- Invoked by typing a colon `:` in Command Mode.
- Cursor moves to the bottom for entering commands.

### Common Commands

| Command       | Action                  |
| ------------- | ----------------------- |
| `:q`          | Quit                    |
| `:q!`         | Quit without saving     |
| `:w`          | Save file               |
| `:w!`         | Force save file         |
| `:w filename` | Save file as `filename` |
| `:wq` or `:x` | Save and quit           |
| `ZZ`          | Save and quit           |

## Input Mode Shortcuts

| Command | Action                  |
| ------- | ----------------------- |
| `i`     | Insert before cursor    |
| `I`     | Insert at start of line |
| `a`     | Append after cursor     |
| `A`     | Append at end of line   |
| `o`     | Open new line below     |
| `O`     | Open new line above     |
| `r`     | Replace one character   |
| `R`     | Overwrite text          |

## Navigation and Cursor Movement

### Basic Movement

| Command | Action     |
| ------- | ---------- |
| `h`     | Move left  |
| `j`     | Move down  |
| `k`     | Move up    |
| `l`     | Move right |

### Word Navigation

| Command | Action                |
| ------- | --------------------- |
| `w`     | Move to next word     |
| `b`     | Move to previous word |
| `e`     | Move to end of word   |
| `n w`   | Move forward n words  |
| `dw`    | Delete one word       |
| `yw`    | Copy one word         |
| `n dw`  | Delete n words        |

### Line Navigation

| Command           | Action                |
| ----------------- | --------------------- |
| `0`, `\|`, or `^` | Move to start of line |
| `$`               | Move to end of line   |
| `30 \|`           | Move to column 30     |

## Scrolling

| Command     | Action                    |
| ----------- | ------------------------- |
| `Ctrl+f`    | Scroll one page forward   |
| `Ctrl+b`    | Scroll one page backward  |
| `Ctrl+d`    | Scroll half page forward  |
| `Ctrl+u`    | Scroll half page backward |
| `10 Ctrl+f` | Scroll 10 pages forward   |

## Absolute Movement

| Command      | Action                     |
| ------------ | -------------------------- |
| `Ctrl+g`     | Show current line number   |
| `G`          | Go to end of file          |
| `1G` or `gg` | Go to first line           |
| `nG`         | Go to line n (e.g., `40G`) |

## Cut, Copy, and Paste

### Commands

| Command | Action                    |
| ------- | ------------------------- |
| `dd`    | Cut (delete) current line |
| `yy`    | Copy (yank) current line  |
| `p`     | Paste below cursor        |
| `P`     | Paste above cursor        |
| `n dd`  | Delete n lines            |
| `n yy`  | Copy n lines              |

## Deleting Text

| Command     | Action                    |
| ----------- | ------------------------- |
| `x`         | Delete current character  |
| `X`         | Delete previous character |
| `xp`        | Swap two characters       |
| `dw`        | Delete to end of word     |
| `d$` or `D` | Delete to end of line     |
| `d0`        | Delete to start of line   |
| `dd`        | Delete whole line         |
| `:20,40d`   | Delete lines 20 to 40     |
| `dG`        | Delete to end of file     |

## Editing and Joining Lines

| Command | Action                     |
| ------- | -------------------------- |
| `J`     | Join current and next line |
| `4J`    | Join 4 lines               |
| `yyp`   | Duplicate current line     |
| `ddp`   | Swap two lines             |

## Undo and Repeat

| Command  | Action                           |
| -------- | -------------------------------- |
| `u`      | Undo last change                 |
| `ctrl+r` | Redo last change                 |
| `U`      | Undo all changes on current line |
| `.`      | Repeat last command              |

## Searching for a Pattern

### Search Commands

| Command      | Action                                    |
| ------------ | ----------------------------------------- |
| `/string`    | Search forward                            |
| `?string`    | Search backward                           |
| `n`          | Go to next match (same direction)         |
| `N`          | Go to previous match (opposite direction) |
| `/^string/`  | Match a line starting with `string`       |
| `/string$/`  | Match a line ending with `string`         |
| `/\<word\>`  | Match exact word                          |
| `/pl[abc]ce` | Match patterns like place, plbce, plcce   |

## Replace Text

| Command            | Action                                         |
| ------------------ | ---------------------------------------------- |
| `:1,$ s/old/new/`  | Replace first occurrence in the entire file    |
| `:3,6 s/old/new/g` | Replace all matches in lines 3–6               |
| `g` (modifier)     | Makes the substitution **global** on each line |

## Text Buffers

| Command | Action                  |
| ------- | ----------------------- |
| `"add`  | Delete line to buffer a |
| `"ap`   | Paste from buffer a     |

## Set Commands

| Command     | Description                           |
| ----------- | ------------------------------------- |
| `:set ic`   | Ignore case when searching            |
| `:set ai`   | Enable auto-indent                    |
| `:set noai` | Disable auto-indent                   |
| `:set nu`   | Show line numbers                     |
| `:set sw=4` | Set shift width to 4 spaces           |
| `:set ws`   | Enable wrapscan (search wraps to top) |
| `:set wm=2` | Enable word wrap with margin of 2     |
| `:set ro`   | Set file as read-only                 |
| `:set term` | Display terminal type                 |
| `:set bf`   | Discard control characters            |

## Summary

The **vi editor** is a powerful, universal text editor in UNIX/Linux.
It operates in **three modes**, supports efficient navigation, editing, and text manipulation, and offers customization through **set commands**. Mastering vi enhances productivity and command-line efficiency.

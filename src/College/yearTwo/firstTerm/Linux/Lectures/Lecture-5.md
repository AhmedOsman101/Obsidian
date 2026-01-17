# Shell Scripts

## Introduction to Shell Scripts

- **Shell** is the interface between a user and the operating system.
- It converts human-readable commands into system-understandable instructions.
- The **Kernel** is the innermost part of the OS, managing communication between hardware and software.
- The **Shell** is the outer layer that interacts with users.
- The terminal runs a shell that provides a **command prompt** (usually `$`), where user commands are executed.

## What is a Shell Script?

- A **shell script** is a text file containing UNIX commands.
- It usually starts with the **shebang (`#!`)** followed by the shell path (e.g., `#!/bin/sh`).
- If not specified, the current shell is used.
- Commands execute sequentially or based on control structures.
- Commonly written for the **Bourne shell (sh)**.

### Example

```bash
#!/bin/sh

echo "Hello World"
```

## Why Use Shell Scripts?

- **Automate repetitive tasks** — replace a sequence of commands with one script.
- **Simplify complex operations** — avoid remembering long command sequences.

## Unix Shell Types

### Bourne Shell Family

- **Default prompt**: `$` character
- **Subcategories**:
  - Bourne shell (sh)
  - Bourne Again shell (bash)
  - Korn shell (ksh)
  - POSIX shell (sh)

### C Shell Family

- **Default prompt**: `%` character
- **Variants**:
  - C shell (csh)
  - TENEX/TOPS C shell (tcsh)

## Steps to Write and Execute a Shell Script

1. Open the terminal and navigate to a directory.
2. Create a file with `.sh` extension.
3. Write the script in the file.
4. Make it executable:

```bash
chmod +x filename.sh
```

5. Execute the script:

```bash
./filename.sh
```

## Comments in Shell Script

- Lines starting with `#` are **comments**.
- Comments are ignored during execution.

### Example

```bash
# This is a comment
echo "Script running..."
```

## Determining Your Shell

To find the current shell:

```bash
echo $SHELL
```

## The Shebang (`#!`)

- Defines which shell interpreter will execute the script.
- Example:

```bash
#!/usr/bin/env bash
```

- The file must be made executable before running.

## Shell Variables

- A variable stores data like numbers, text, or filenames.
- Variable names can include letters, digits, and underscores.
- Access variable values using `$`.

### Example

```bash
name="Othman"
echo "Hello $name"
```

### Read-Only Variables

Once declared as read-only, a variable cannot be changed:

```bash
readonly var1="constant"
# Or
declare -r var2="constant"
```

### Reading Variables from Input

```bash
echo "Enter your name:"
read name
echo "Hello $name"
```

### Unsetting Variables

Deletes a variable from memory:

```bash
unset var
```

## Special Variables

| Variable | Description                       |
| -------- | --------------------------------- |
| `$0`     | Script name                       |
| `$n`     | nth argument (`$1`, `$2`, etc...) |
| `$#`     | Number of arguments               |
| `$*`     | All arguments as a single string  |
| `$@`     | All arguments individually quoted |
| `$?`     | Exit status of last command       |
| `$$`     | Process ID of current shell       |
| `$!`     | PID of last background command    |

### Example Script with Output

```bash
#!/usr/bin/env bash

echo "Script name: $0"
echo "All arguments: $*"
echo "Number of arguments: $#"
echo "First argument: $1"
echo "Second argument: $2"
echo "Exit status: $?"
```

**Output:**

```
Script name: ./script.sh
All arguments: apple banana
Number of arguments: 2
First argument: apple
Second argument: banana
Exit status: 0
```

## Exit Status

Any number other than `0` indicates a failure.

- Stored in `$?`.
- `0` = Success.
- `1` = Failure.

## Shell Arrays

- Arrays hold multiple values in one variable (bash only).

```bash
arr=(apple banana cherry)
echo ${arr[1]}   # Outputs banana
echo ${arr[@]}   # Outputs all elements
```

## Storing Command Output

Use backticks or `$()`:

```bash
today=$(date) # Prefered syntax
echo "Today is $today"

year=`date +%Y` # Old syntax
echo "Year is $year"
```

## Arithmetic Operations Using `expr` Command

- The complete expression should be enclosed between backticks (\`)
- There must be spaces between operators and expressions
- **Example:**

```bash
# Correct:
val=`expr 2 + 2`

# Incorrect (no spaces):
val=`expr 2+2`
```

### Modern Arithmetic Features

> [!NOTE]
> Arithmetic expansion `$(())` and arithmetic evaluation `(( ))` were introduced in Bash 2.0 (1996) as modern alternatives to `expr`.

## Shell Operators

### Integer Comparison

| Operator | Meaning               |
| -------- | --------------------- |
| `-eq`    | Equal                 |
| `-ne`    | Not equal             |
| `-gt`    | Greater than          |
| `-ge`    | Greater than or equal |
| `-lt`    | Less than             |
| `-le`    | Less than or equal    |

### Boolean Operators

| Operator | Meaning | Example                       |
| -------- | ------- | ----------------------------- |
| `!`      | NOT     | `[ ! false ]`                 |
| `-o`     | OR      | `[ $a -lt 10 -o $b -gt 100 ]` |
| `-a`     | AND     | `[ $a -lt 10 -a $b -gt 5 ]`   |

## Conditional Statements

### If Statement

```bash
if [ condition ]; then
  commands
fi
```

### If-Else Statement

```bash
if [ condition ]; then
   commands
else
   other_commands
fi
```

### Case Statement

Used for multi-condition checks:

```bash
case $var in
  1) echo "One" ;;
  2) echo "Two" ;;
  ?) echo "Missing" ;;
  *) echo "Other" ;;
esac
```

## Loops

### While Loop

Executes while a condition is true:

```bash
while [ condition ]; do
  commands
done
```

### For Loop

Iterates over a list:

```bash
for item in 1 2 3; do
  echo $item
done
```

### Until Loop

Executes until a condition becomes true:

```bash
until [ condition ]; do
  commands
done
```

### Select Loop

Displays a numbered menu for user input:

```bash
select option in Apple Banana Exit; do
  echo "You chose $option"
  break
done
```

**Even-Odd number using select loop:**

```bash
PS3='Enter your choice: ' # Custom prompt
select number in {1..10} none; do
  case "${number}" in
  2 | 4 | 6 | 8 | 10) echo "even" ;;
  1 | 3 | 5 | 7 | 9) echo "odd" ;;
  none)
    echo "Bye!"
    break
    ;;
  *) echo "Error invalid selection" ;;
  esac
done
```

## Loop Control Statements

### Break Statement

Terminates the loop early:

```bash
for i in 1 2 3; do
  if [ $i -eq 2 ]; then
    break
  fi
done
```

### Continue Statement

Skips to next iteration:

```bash
for i in 1 2 3; do
  if [ $i -eq 2 ]; then
    continue
  fi
  echo $i
done
```

## Shell Functions

- Functions divide scripts into reusable blocks.
- Parameters are accessed as `$1`, `$2`, etc.

### Example

```bash
myfunc() {
  echo "Hello $1"
}
myfunc "Othman"
```

## Example Script: Factorial

```bash
#!/usr/bin/env bash

echo -n "Enter a number: "
read -r a
fact=1
while [ "$a" -ne 0 ]; do
  fact=$((fact * a))
  a=$((a - 1))
done
echo "Factorial: $fact"
```

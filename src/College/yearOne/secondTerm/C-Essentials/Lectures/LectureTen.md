---
title: Lecture 10
prev:
  text: "Lecture Nine"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureNine"
next: false
---

# Programming Essentials in C - Lectures 10

## File Handling in C

File handling in C refers to performing operations such as creating, opening, reading, writing, appending, renaming, and deleting files using functions provided by the language. These operations allow data to persist beyond the program's execution time by interacting with files stored in the computer’s external memory.

## Basic File Operations in C

| Operation        | Function Used                      |
| ---------------- | ---------------------------------- |
| Open a file      | `fopen()`                          |
| Read from a file | `fscanf()`, `fgets()`, `fread()`   |
| Write to a file  | `fprintf()`, `fputs()`, `fwrite()` |
| Close a file     | `fclose()`                         |

## Need for File Handling

When a program uses standard input/output operations, the data is lost once the program ends. File handling ensures data can be stored and reused by saving it externally, thus enabling:

- Permanent storage of data
- Data sharing across program runs
- External memory usage for large data

## Types of Files

1. **Text File**

   - Stores data as ASCII characters
   - Each line ends with a newline (`\n`)
   - Common extension: `.txt`

2. **Binary File**

   - Stores data in binary (0s and 1s)
   - Used for non-text data like images, executables
   - Examples: `.png`, `.exe`, `.jpg`

## Declaring a File Pointer

```C
FILE *filePtr;
```

- `FILE`: A structure defined in `stdio.h` representing file information.
- `*filePtr`: A pointer to this `FILE` structure.

## Opening a File with `fopen()`

The `fopen()` function opens or creates a file and returns a pointer to it.

| Mode | Description                                      |
| ---- | ------------------------------------------------ |
| `w`  | Write mode. Creates file if it doesn't exist.    |
| `a`  | Append mode. Adds data at the end of file.       |
| `r`  | Read mode. Opens existing file for reading only. |

### Syntax

```C
FILE *filePtr = fopen("file.txt", "mode");
```

To use an absolute path:

```C
FILE *filePtr = fopen("/tmp/test/file.txt", "w");
```

## Closing a File with `fclose()`

Used to properly close the file and:

- Save changes
- Free resources
- Allow other processes access

```C
fclose(filePtr);
```

## Writing to a File

Use `w` mode to open a file for writing.

- Overwrites existing content
- Creates file if it doesn't exist

```C
#include <stdio.h>

int main() {
  FILE *filePtr = fopen("data.txt", "w"); // Opening a file in write mode
  int age = 5;

  if (filePtr == NULL) {
    printf("Error opening file.\n");
    return 1;
  }

  // Write to a file
  fprintf(filePtr, "Hello from fprintf!\n");
  fprintf(filePtr, "Hello, my age is %d!\n", age); // using variables
  fputs("Hello from fputs!\n", filePtr);

  fclose(filePtr); // Closing the file
  return 0;
}
```

---

### Common Functions

| Function    | Purpose                | Use Case                        |
| ----------- | ---------------------- | ------------------------------- |
| `fprintf()` | Writes formatted text  | Variables, formatted output     |
| `fputs()`   | Writes plain string    | Simple line/text                |
| `fwrite()`  | Writes binary/raw data | Arrays, structs, binary formats |

## Appending Content to a File

Use `a` mode to preserve existing data and append new content at the end. If the file does not exist, it will be created.

```C
FILE *filePtr = fopen("data.txt", "a");
```

## Reading from a File

Open the file in read mode:

```C
FILE *filePtr = fopen("file.txt", "r");
```

Create a buffer to store read data:

```C
char content[255];
```

### Reading a Single Line

```C
fgets(content, 255, filePtr);
printf("%s", content);
```

> [!Note]
> `fgets()` reads only one line at a time.

### Reading All Lines

Use a loop:

```C
while (fgets(content, 255, filePtr)) {
  printf("%s", content);
}
```

### Reading Structured Data: `fscanf()`

- Reads formatted values (e.g., string + int)
- Stops at whitespace or format mismatch

```C
fscanf(filePtr, "%s %d", name, &age);
```

### Reading Binary Data: `fread()`

- Reads memory blocks
- Used for structs or binary files

```C
fread(buffer, sizeof(type), count, filePtr);
```

## Comparison: `fscanf()` vs `fgets()` vs `fread()`

| Feature         | `fscanf()`               | `fgets()`               | `fread()`                        |
| --------------- | ------------------------ | ----------------------- | -------------------------------- |
| Input type      | Formatted text           | Full line (with spaces) | Raw/binary data                  |
| Reads           | Words, numbers           | One line                | Memory blocks                    |
| Structs support | Manual parsing           | Use with `sscanf()`     | Direct read                      |
| Handles spaces  | No (stops at whitespace) | Yes                     | Yes                              |
| Best use case   | CSV or structured input  | Reading lines from text | Binary files, serialized structs |

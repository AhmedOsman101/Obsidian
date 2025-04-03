---
title: Lecture 2
prev:
  text: "Lecture One"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureOne"
next:
  text: "Lecture Three"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureThree"
---

# Programming Essentials in C - Lecture 2: Introduction to C

## Fundamentals of Programming Languages

A programming language is a formal language used to communicate instructions to a computer, enabling developers to write programs for specific tasks.

### Key Uses

1. **Create Software Applications**
   - Example: Mobile apps using Java (Android) or Swift (iOS).
   - Real-World: WhatsApp (Java for Android).
2. **Control Hardware**
   - Example: C/C++ for microcontrollers in embedded systems.
   - Real-World: Airbag systems in cars.
3. **Perform Computational Tasks**
   - Example: Python for data analysis or machine learning.
   - Real-World: Netflix recommendation algorithms.

## Types of Programming Languages

### Low-Level Languages

Interact directly with hardware. Examples include:

- **Machine Code**

  - Binary (0s and 1s) executed by the CPU.
  - Example: `10110000 01100001` (move data to a register).
  - Fast but hard to write/debug.

- **Assembly Language**
  - Human-readable mnemonics for machine code, converted by an assembler.

```assembly
MOV AL, 61h  ; Load 61 (hex) into register AL
ADD AL, 1    ; Increment AL by 1
```

### High-Level Languages

Use English-like keywords, easier for humans to understand. Divided into:

- **Structured Programming**

  - Breaks programs into functions/modules. The data is separated from its behavior.
  - Examples: C, Basic, Fortran, Cobol, Algol, Pascal.

- **Object-Oriented Programming (OOP)**
  - Based on objects (data + behavior) and classes.
  - Examples: Java, Python, C#, C++, JavaScript, PHP, Ruby, Dart, Perl, Swift, Scala.

## Structured vs. Object-Oriented Programming

| **Aspect**            | **Structured Programming**          | **Object-Oriented Programming**          |
| --------------------- | ----------------------------------- | ---------------------------------------- |
| **Paradigm**          | Divides code into functions/modules | Uses objects combining data and behavior |
| **Focus**             | Function-based subprograms          | Object-based encapsulation               |
| **Modifiability**     | Hard to modify                      | Easier to modify                         |
| **Communication**     | Main function calls other functions | Objects pass messages                    |
| **Access Specifiers** | None                                | Public, private, protected               |
| **Data Security**     | Not secured                         | Secured via encapsulation                |
| **Code Reuse**        | Difficult                           | Easy (inheritance, polymorphism)         |

## Compiler vs. Interpreter

### Compiler

Translates entire high-level code into machine code at once.

#### How The Compiler Works

1. **Lexical Analysis**
   Breaks the source code into tokens, such as keywords, operators, and identifiers.

2. **Syntax Analysis (Parsing)**
   Checks the code's structure against the language's grammar to ensure correctness.

3. **Semantic Analysis**
   Verifies the logic and meaning, such as type checking and scope resolution.

4. **Optimization**
   Improves the efficiency of the code, reducing resource usage and execution time.

5. **Code Generation**
   Converts the optimized intermediate representation into machine code or bytecode.

6. **Linking**
   Combines different compiled modules and libraries into a single executable.

- **Examples**: C, C++, Java (to bytecode).

---

### Interpreter

Translates and executes code line-by-line.

#### How The Interpreter Works

1. **Line-by-Line Execution**
   Reads the source code one line at a time.

2. **Immediate Execution**
   Converts each line into machine code and executes it immediately.

3. **No Intermediate Object Code**
   Does not generate an intermediate object file; execution happens directly.

- **Examples**: Python, JavaScript.

### Comparison

| **Feature**           | **Compiler**                 | **Interpreter**                      |
| --------------------- | ---------------------------- | ------------------------------------ |
| **Translation**       | Entire program at once       | Line-by-line                         |
| **Speed**             | Faster (post-compilation)    | Slower (line-by-line interpretation) |
| **Errors**            | Shown after full compilation | Stops at first error                 |
| **Intermediate Code** | Yes (object code)            | No                                   |

## Introduction to C Programming

### What is C?

- A high-level, general-purpose language developed by **Dennis Ritchie** in 1972 at Bell Labs.

### Why Learn C?

- Foundation for all major languages: C++, Java, Python.
- Fast and efficient due to low-level memory control.
- Portable across platforms.
- Used in operating systems, embedded systems, and hardware drivers.

### C vs. C++

- C++ extends C with OOP (classes/objects).
- C focuses on structured programming.
- C++ supports classes and objects, while C does not.

### Getting Started

- **Tools Needed**:
  - Text editor (e.g., Notepad++).
  - Compiler (e.g., GCC, Clang).
- **IDEs**: [Code::Blocks](https://www.codeblocks.org/downloads/), [Eclipse](https://www.eclipse.org/downloads/packages/release/2025-03/r/eclipse-ide-cc-developers), [Visual Studio](https://visualstudio.microsoft.com/vs/community/)

> [!Note]
>
> Web-based IDE's can work as well, but functionality is limited.

## Your First Program in C

### Hello World Example

```c
#include <stdio.h>

int main() {
  /* My First Program in C */
  printf("Hello, World!\n");

  return 0;
}
```

- **Output**: `Hello, World!`
- **Breakdown**:
  - `#include <stdio.h>`: Adds input/output functions from `stdio.h` header file library.
  - `int main()`: Entry point of the program.
  - `printf()`: Displays text.
  - `return 0`: Ends program successfully.

### Notes

- Semicolons (`;`) end statements.
- Most lines of C code end with a semicolon.
- Whitespace is ignored by the compiler but improves readability.

> [!Note]
>
> The body of `int main()` could also be written as:
>
> ```c
> int main() { printf("Hello World!"); return 0; }
> ```

## Syntax Errors

Syntax errors occur when code violates C's grammatical rules.

- **Example**: Missing semicolon.

```c
#include <stdio.h>

int main() {
  printf("No semicolon here")  // Error: Missing semicolon
  return 0;
}
```

- **Fix**: Add the semicolon: `printf("No semicolon here");`.

## Escape Sequences in C

Escape sequences help format output in C:

- `\n` - New line
- `\t` - Tab space (typically 8 spaces)
- `\\` - Backslash
- `\"` - Double quote (inside single quotes)

### Example:

```c
#include <stdio.h>

int main() {
  printf("Hello, \nWorld!\tI'm Learning C\n");
  return 0;
}
```

#### Output:

```text
Hello,
World!        I'm Learning C
```

## Comments in C

Comments improve code readability and can prevent execution for testing.

### Single-line comment:

```c
// This is a comment
printf("This will run!\n");
```

### Multi-line comment:

```c
/* This is
a really
long comment
*/
printf("This will run!\n");
```

## Data Types in C

### Categories

| **Category**    | **Types**                                |
| --------------- | ---------------------------------------- |
| **Basic**       | `int`, `char`, `float`, `double`         |
| **Derived**     | `array`, `pointer`, `structure`, `union` |
| **Enumeration** | `enum`                                   |
| **Void**        | `void`                                   |

### Basic Data Types

| **Type** | **Range (Approx.)**                                                          | **Description**                              |
| -------- | ---------------------------------------------------------------------------- | -------------------------------------------- |
| `char`   | `-128 to 127` (signed), `0 to 255` (unsigned)                                | Single character (1 byte)                    |
| `int`    | `-32,768 to 32,767` (2 bytes) or `-2,147,483,648 to 2,147,483,647` (4 bytes) | Integer (4 bytes typically)                  |
| `float`  | `1.2E-38 to 3.4E+38`                                                         | Single-precision float (4 bytes)             |
| `double` | `2.2E-308 to 1.8E+308`                                                       | Double-precision float (8 bytes)             |
| `void`   | N/A                                                                          | Used for functions that don't return a value |

#### Examples

- **Char**: Stores a single character (as an ASCII value).

```c
#include <stdio.h>

int main() {
  char c = 'A';  // Store a character
  printf("Char: %c, ASCII: %d\n", c, c);
  return 0;
}
```

- **Output**: `Char: A, ASCII: 65`

- **Int**: Stores whole numbers (typically 4 bytes in modern systems).

```c
#include <stdio.h>

int main() {
  int num = 100;  // Store an integer
  printf("Integer: %d\n", num);
  return 0;
}
```

- **Output**: `Integer: 100`

- **Float**: Stores decimal numbers with precision up to 6-7 decimal places.

```c
#include <stdio.h>

int main() {
  float pi = 3.14159;  // Store a float
  printf("Float: %.2f\n", pi);  // display 2 decimal places
  return 0;
}
```

- **Output**: `Float: 3.14`

- **Double**: Stores decimal numbers with precision up to 15-16 decimal places.

```c
#include <stdio.h>

int main() {
  double bigNum = 155000.789123;  // Store a double
  printf("Double: %.6lf\n", bigNum);  // display 6 decimal places
  return 0;
}
```

- **Output**: `Double: 155000.789123`

### Derived Data Types

| Data Type   | Description                                            |
| ----------- | ------------------------------------------------------ |
| `array`     | Collection of elements of the same type                |
| `pointer`   | Stores memory addresses of another variable            |
| `structure` | Collection of variables of different types             |
| `union`     | Similar to a structure but shares memory among members |
| `enum`      | Defines a set of named integer constants               |

- **Array**:

```c
#include <stdio.h>

int main() {
  int nums[3] = {1, 2, 3};  // Array of 3 integers
  printf("Array: %d, %d, %d\n", nums[0], nums[1], nums[2]);
  return 0;
}
```

- **Output**: `Array: 1, 2, 3`

- **Pointer**:

```c
#include <stdio.h>
int main() {
  int x = 10;
  int* ptr = &x;  // Pointer to x's address
  printf("Value: %d\n", *ptr); // Dereferencing
  printf("Address: %p\n", ptr); // The address may vary
  return 0;
}
```

- output:

```text
Value: 42
Address: 0x7ffc5d361954
```

- **Struct**:

```c
#include <stdio.h>

struct Person {
  char name[20];
  int age;
};

int main() {
  struct Person p1 = {"Alice", 22};
  printf("Name: %s, Age: %d\n", p1.name, p1.age);
  return 0;
}
```

- **Output**: `Name: Alice, Age: 22`

- **Union**:

```c
#include <stdio.h>

union Data {
  int i;
  float f;
};

int main() {
  union Data d;
  d.i = 10;
  printf("Union Integer: %d\n", d.i);
  return 0;
}
```

- **Output**: `Union Integer: 10`

- **Enum**:

```c
#include <stdio.h>

enum Color {RED, GREEN, BLUE};

int main() {
  enum Color myColor = GREEN;
  printf("Enum Color Value: %d\n", myColor);
  return 0;
}
```

- **Output**: `Enum Color Value: 1`

### Type Qualifiers (Modifiers) in C

**Type modifiers** adjust the size and behavior of integer and floating-point types.

| Modifier   | Applies To      | Example                         | Description                                      |
| ---------- | --------------- | ------------------------------- | ------------------------------------------------ |
| `short`    | `int`           | `short int x;`                  | Uses less memory than `int`.                     |
| `long`     | `int`, `double` | `long int y;`, `long double z;` | Increases range (`int`) or precision (`double`). |
| `signed`   | `char`, `int`   | `signed char a;` (default)      | Supports both positive and negative values.      |
| `unsigned` | `char`, `int`   | `unsigned int b;`               | Stores only non-negative values (0 and up).      |

### Practical Example

Calculate total cost using different data types:

```c
#include <stdio.h>
int main() {
  int items = 50;           // Number of items
  float cost_per_item = 9.99; // Cost per item
  float total_cost = items * cost_per_item;  // Total cost
  char currency = '$';       // Currency symbol

  printf("Items: %d\n", items);
  printf("Cost per item: %.2f%c\n", cost_per_item, currency);
  printf("Total cost: %.2f%c\n", total_cost, currency);
  return 0;
}
```

- **Output**:

```text
Items: 50
Cost per item: 9.99$
Total cost: 499.50$
```

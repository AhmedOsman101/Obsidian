# Lecture 4: Introduction to C++

## 1. Introduction to C++

### Definition

C++ is an **object-oriented, high-level, cross-platform programming language** that allows for the development of **efficient, high-performance applications**.
It was developed by **Bjarne Stroustrup** as an **extension of C**, providing programmers with more control over system resources and memory.

## 2. Why Use C++?

- One of the most **popular programming languages** worldwide.
- Used in **operating systems**, **GUIs**, **game engines**, and **embedded systems**.
- Supports **object-oriented programming (OOP)**, enabling code reuse and modular design.
- **Portable** and adaptable across multiple platforms.
- Closely related to **C**, **C#**, and **Java**, making it easy to learn.

## 3. Key Features of C++

| Feature                      | Description                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------- |
| **Object-Oriented**          | Supports abstraction, encapsulation, inheritance, polymorphism, and data hiding. |
| **Compiler-Based**           | Converts code directly to machine language for faster execution.                 |
| **Manual Memory Management** | Uses pointers and dynamic memory allocation.                                     |
| **High-Level Language**      | Uses human-readable syntax similar to English.                                   |
| **Simplicity**               | Divides programs into logical modules for readability.                           |
| **Pointers**                 | Variables that store memory addresses for direct manipulation.                   |
| **Rich Library**             | Offers extensive built-in functions and libraries.                               |
| **Operator Overloading**     | Allows redefining operators for user-defined data types.                         |
| **Case Sensitive**           | Distinguishes between uppercase and lowercase letters.                           |
| **Platform Dependent**       | Compiled code runs only on the system where it was built.                        |
| **Portable Source Code**     | Source (`.cpp`) files can be compiled on different platforms.                    |
| **Exception Handling**       | Handles runtime errors gracefully.                                               |

## 4. Difference Between C and C++

| Aspect                         | C                | C++                    |
| ------------------------------ | ---------------- | ---------------------- |
| **Programming Type**           | Procedural       | Object-Oriented        |
| **Classes/Objects**            | Not supported    | Supported              |
| **Data Security**              | No encapsulation | Supports encapsulation |
| **Inheritance & Polymorphism** | Not supported    | Supported              |
| **Abstraction**                | Not supported    | Supported              |
| **File Extension**             | `.c`             | `.cpp`                 |

## 5. Phases of the C++ Compilation Process

| #   | Phase                            | Description                                                           |
| --- | -------------------------------- | --------------------------------------------------------------------- |
| 1   | **Preprocessing**                | Handles `#include`, `#define`, and macros before compilation.         |
| 2   | **Lexical Analysis**             | Breaks source code into tokens (keywords, identifiers, etc.).         |
| 3   | **Syntax Analysis**              | Checks grammatical correctness according to C++ rules.                |
| 4   | **Semantic Analysis**            | Ensures logical correctness (valid declarations, types, etc.).        |
| 5   | **Intermediate Code Generation** | Produces machine-independent intermediate code.                       |
| 6   | **Code Optimization**            | Improves performance and reduces memory usage.                        |
| 7   | **Code Generation**              | Converts code into assembly or machine language.                      |
| 8   | **Linking**                      | Combines object files and libraries into a final executable (`.exe`). |

## 6. The Compilation and Linking Process

| Step                                | Description                                       | Output    |
| ----------------------------------- | ------------------------------------------------- | --------- |
| **1. Preprocessing**                | Handles directives like `#include` and `#define`. | `.i` file |
| **2. Lexical Analysis**             | Converts source into tokens.                      | —         |
| **3. Syntax Analysis**              | Checks grammar and structure.                     | —         |
| **4. Semantic Analysis**            | Validates data types and logic.                   | —         |
| **5. Intermediate Code Generation** | Produces machine-independent representation.      | `.ir`     |
| **6. Code Optimization**            | Enhances efficiency.                              | —         |
| **7. Code Generation**              | Converts to assembly code.                        | `.s`      |
| **8. Assembly**                     | Translates assembly to object code.               | `.o`      |
| **9. Linking**                      | Combines object code and libraries.               | `.exe`    |

**Compilation Flow:**

```

hello.cpp -> hello.i -> hello.ir -> hello.s -> hello.o -> hello.exe

```

## 7. Errors in C++

| Type                   | Detected When      | Description                                         |
| ---------------------- | ------------------ | --------------------------------------------------- |
| **Compile-Time Error** | During compilation | Syntax or grammar issues (e.g., missing semicolon). |
| **Runtime Error**      | During execution   | Errors such as division by zero.                    |
| **Logical Error**      | After execution    | Produces incorrect output due to logic mistakes.    |

**Examples:**

```cpp
// Compile-time error
int x = 10
cout << x;

// Runtime error
int x = 15, y = 0;
cout << x / y;

// Logical error
int x = 10, y = 5;
cout << x * y; // Intended division
```

## 8. Development Environments

### Text Editors

Used to write source code (e.g., Notepad).

### IDEs (Integrated Development Environments)

Provide an all-in-one environment for writing, compiling, and debugging.
Examples:

- **Dev C++**
- **Code::Blocks**
- **Eclipse**
- **Visual Studio**

**Advantages:**

- Integrated compiler
- Debugging tools
- Auto-completion

## 9. Writing Your First C++ Program

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
```

### Explanation

- **`#include <iostream>`** — Includes input/output functions.
- **`using namespace std;`** — Allows direct use of standard library functions.
- **`int main()`** — Entry point of every C++ program.
- **`cout`** — Displays output to the console.
- **`return 0;`** — Ends the program successfully.

**Alternative:**

```cpp
#include <iostream>

int main() {
  std::cout << "Hello World!";
  return 0;
}
```

## 10. C++ Statements

- Each statement ends with a **semicolon (`;`)**.
- Multiple statements execute **sequentially**.

**Example:**

```cpp
cout << "Hello World!";
cout << "Welcome to C++!";
```

**Output:**

```
Hello World!Welcome to C++!
```

## 11. Output with `cout`

- Text must be in **double quotes ("")**.
- Multiple outputs can be combined on a single line using `<<`.
- The `<<` operator is known as the **insertion operator**.

**Example:**

```cpp
cout << "The result is: " << 3;
```

## 12. Summary

- C++ is a **high-level, object-oriented, compiler-based** language.
- Developed by **Bjarne Stroustrup** as an extension of C.
- Offers **manual memory management**, **operator overloading**, and **exception handling**.
- The compilation process includes **preprocessing**, **analysis**, **code generation**, and **linking**.
- Errors are categorized as **compile-time**, **runtime**, or **logical**.
- **IDEs** like Dev C++ simplify the process of coding and debugging.
- The **basic C++ syntax** always includes:
  - Header (`#include`)
  - Main function (`int main()`)
  - Output statement (`cout`)
  - Return statement (`return 0;`)

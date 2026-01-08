# Lecture 4: Introduciton to C++

### Core Concepts

- **Definition:** C++ is a high-level, object-oriented, cross-platform programming language developed by Bjarne Stroustrup as an extension of the C language.
- **Primary Use:** Used to create high-performance applications, giving programmers significant control over system resources and memory.
- **Key Characteristics:**
  - **Object-Oriented:** Provides a clear program structure and allows for code reuse.
  - **Fast & Efficient:** It is a compiler-based language, resulting in faster programs compared to interpreted languages like Python or Java.
  - **Portable:** C++ source code (`.cpp` files) can be compiled and run on multiple platforms with few or no changes.
  - **Popular:** Widely used in operating systems, graphical user interfaces (GUIs), and embedded systems.

### Comparison: C vs. C++

| Feature             | C                                                                                   | C++                                                                      |
| ------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Paradigm**        | Procedural                                                                          | Procedural & Object-Oriented                                             |
| **OOP Support**     | Does **not** support OOP features.                                                  | **Supports** key OOP features.                                           |
| **Core Difference** | Lacks concepts like classes, objects, inheritance, polymorphism, and encapsulation. | Developed as an extension of C to include the OOP features that C lacks. |
| **Syntax**          | Both languages share almost the same basic syntax.                                  |                                                                          |

### Key Features of C++

- **Object-Oriented Programming (OOP):** Structures programs efficiently. Key concepts include:
  - Data Abstraction
  - Data Encapsulation
  - Inheritance
  - Polymorphism
  - Data Hiding
- **Compiler-Based:** A compiler converts C++ source code directly into machine language, making execution fast and efficient.
- **Memory Management:** Supports dynamic memory allocation using pointers. Programmers must manually deallocate memory after use.
- **Pointers:** A variable that stores the memory address of another variable, allowing for direct memory interaction.
- **Broad Library:** Offers a vast standard library of built-in functions, accessed via header files (e.g., `<iostream>`).
- **Operator Overloading:** Allows programmers to provide special meanings to operators for specific data types.
- **Case Sensitive:** Treats uppercase and lowercase letters differently (e.g., `cout` is not the same as `Cout`).
- **Exception Handling:** Provides mechanisms to catch and manage errors that arise during program execution.
- **Platform Dependency vs. Portability:**
  - **Platform Dependent:** A compiled C++ program (`.exe` file) can only run on the operating system where it was compiled.
  - **Portable:** The C++ source code (`.cpp` file) can be moved to a different operating system and recompiled to work there.

### The C++ Compilation and Linking Process

The process transforms a C++ source file (`.cpp`) into an executable file (`.exe`) through several distinct phases.

| Phase # | Phase Name                | Description                                                                       | Output File              |
| ------- | ------------------------- | --------------------------------------------------------------------------------- | ------------------------ |
| 1       | **Preprocessing**         | Handles directives starting with `#` (e.g., `#include`, `#define`).               | `.i` (preprocessed file) |
| 2       | **Lexical Analysis**      | Breaks the source code into units called tokens (keywords, identifiers, etc.).    | (internal)               |
| 3       | **Syntax Analysis**       | Checks if the tokens follow the grammatical rules of C++.                         | (internal)               |
| 4       | **Semantic Analysis**     | Checks the logical meaning, such as variable declarations and type compatibility. | (internal)               |
| 5       | **Intermediate Code Gen** | Generates a machine-independent intermediate representation of the code.          | `.ir`                    |
| 6       | **Code Optimization**     | Improves the intermediate code to make the program faster or use less memory.     | (internal)               |
| 7       | **Code Generation**       | Translates the optimized code into assembly language.                             | `.s` (assembly file)     |
| 8       | **Assembly**              | Translates assembly code into machine-readable object code.                       | `.o` (object file)       |
| 9       | **Linking**               | Combines the object file with necessary libraries to create the final executable. | `.exe`                   |

### Development Tools

- **Text Editor:** A program for writing plain text code (e.g., Notepad). Requires a separate compiler.
- **Integrated Development Environment (IDE):** A software suite that combines a text editor, compiler, and debugger into a single application (e.g., Dev C++, Visual Studio, Code Blocks).

### Types of Programming Errors

| Error Type             | When Detected      | Description                                                                       | Example                                                      |
| ---------------------- | ------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Compile-time Error** | During compilation | A syntax or grammatical mistake in the code. The program will not compile.        | Missing a semicolon `;`.                                     |
| **Runtime Error**      | During execution   | Occurs while the program is running, often causing it to crash.                   | Division by zero.                                            |
| **Logical Error**      | After execution    | The program runs without crashing but produces an incorrect or unexpected result. | Using `*` for multiplication when division `/` was intended. |

### Basic C++ Program Structure

**Example Code:**

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!";
  return 0;
}
```

**Syntax Rules & Explanation:**

- `#include <iostream>`: A **preprocessor directive** that includes the `iostream` header library, which is necessary for input/output operations.
- `using namespace std;`: Allows the use of names for objects (like `cout`) from the standard library without the `std::` prefix.
  - **Alternative:** If this line is omitted, you must use `std::cout` instead of `cout`.
- `int main() { ... }`: The **main function** where program execution begins. All code inside the curly braces `{}` is executed.
- `cout << "Hello World!";`: This is a **statement**.
  - `cout`: An object used to print output to the screen.
  - `<<`: The **insertion operator**, which sends the data on its right to the object on its left.
  - `"Hello World!"`: A string literal. Text must be enclosed in double quotes. Numbers do not need quotes.
- `return 0;`: Terminates the `main` function and indicates successful execution.
- `;` (Semicolon): Every C++ statement must end with a semicolon. Omitting it causes a **compile-time error**.

# Lecture 5: Visual Studio

## Learning Outcomes

By the end of this lecture, students should be able to:

- Understand **data types** and **variables** in C++.
- Apply various **operators** and manage **data processing** effectively.
- Build and execute a C++ project using **Visual Studio**.

## Creating a Project in Visual Studio

1. **Start Visual Studio 2022** -> Choose **Create a new project**.
2. Select **Empty Project** and give it a name (e.g., `Project_NTCU`).
3. Choose a save location -> Click **Create**.
4. In **Solution Explorer**, a new solution appears with the chosen name.
5. **Right-click** on _Source Files_ -> **Add -> New Item -> C++ File (.cpp)**.
6. Name it (e.g., `first_program.cpp`) -> Click **Add**.
7. To run the program:
   - Press **F5** for _Start Debugging_, or
   - Press **Ctrl + F5** for _Start Without Debugging_.

### Debugging Options

- **F5 (Start Debugging):** Attaches the debugger.
- **Ctrl + F5 (Start Without Debugging):** Runs without debugging; console remains open.

> **Tip:** To auto-close the console after debugging, go to
> `Tools -> Options -> Debugging -> Automatically close console when debugging stops`.

## Resolving `main()` Conflicts

When multiple `.cpp` files have `main()`:

1. In **Solution Explorer**, right-click the file -> **Properties**.
2. Go to **Configuration Properties -> General**.
3. Set **Excluded from Build = Yes** for files that shouldn't be compiled.

## Visual Studio Project Structure

| File                           | Description                                                   |
| ------------------------------ | ------------------------------------------------------------- |
| `first_program.cpp`            | Source code file containing `main()` and program logic.       |
| `Project_NTCU.sln`             | Solution file that manages all projects within Visual Studio. |
| `Project_NTCU.vcxproj`         | Project file with compiler and linker settings (XML format).  |
| `Project_NTCU.vcxproj.filters` | Organizes files visually in the Solution Explorer.            |
| `Project_NTCU.vcxproj.user`    | Stores user-specific settings (e.g., debugging options).      |

## Basic C++ Examples

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << 9 + 3;
  return 0;
}
```

## Escape Sequences

| Escape | Description    |
| ------ | -------------- |
| `\n`   | New line       |
| `\t`   | Horizontal tab |
| `\\`   | Backslash      |
| `\"`   | Double quote   |

**Example:**

```cpp
cout << "Hello World!\nI am learning C++";
```

## Comments in C++

Used to improve code readability or disable parts of code.

```cpp
// Single-line comment

/* Multi-line
   comment */
```

## Variables and Data Types

Variables are containers for storing data. Each variable has a **type** that defines the kind of data it can hold.

### Basic Data Types

| Type     | Size        | Description                                 |
| -------- | ----------- | ------------------------------------------- |
| `int`    | 2–4 bytes   | Whole numbers                               |
| `char`   | 1–2 bytes   | Single character (ASCII)                    |
| `string` | 24–32 bytes | Text sequences                              |
| `float`  | 4 bytes     | Decimal numbers (6–7 digits precision)      |
| `double` | 8 bytes     | Decimal numbers (up to 15 digits precision) |
| `bool`   | 1 byte      | `true` or `false`                           |

**Examples:**

```cpp
int age = 20;
float price = 19.99;
char grade = 'A';
string name = "Othman";
bool isStudent = true;
```

## Numeric and Character Examples

**Integer Example:**

```cpp
int x = 20;
cout << "x = " << x;
```

**Float Example:**

```cpp
float myNum = 10.25;
cout << myNum;
```

**Double Example:**

```cpp
double myNum = 10.999999992355;
cout << myNum;
```

**Scientific Notation:**

```cpp
float f1 = 27E3;  // 27000
double d1 = 15e4; // 150000
```

**Character Example:**

```cpp
char myGrade = 'A';
cout << myGrade;
```

**ASCII Example:**

```cpp
char d = 68, b = 66;
cout << d << b; // Outputs DB
```

## Strings

**Declaration:**

```cpp
string myText = "Hello, World!";
```

**Concatenation:**

```cpp
string fullName = firstName + lastName;
string mobile = "010" + "99985809";
```

**Using `append()` Method:**

```cpp
string fullName = firstName.append(lastName);
```

**Combining Numbers and Strings:**

```cpp
string result = "My number is: " + to_string(565655656);
```

## Input Example

```cpp
int x;
cout << "Type your number: ";
cin >> x;
cout << "Sum = " << x + 5;
```

## Operators

### Arithmetic Operators

| Operator | Name           | Example |
| -------- | -------------- | ------- |
| `+`      | Addition       | x + y   |
| `-`      | Subtraction    | x - y   |
| `*`      | Multiplication | x \* y  |
| `/`      | Division       | x / y   |
| `%`      | Modulus        | x % y   |
| `++`     | Increment      | ++x     |
| `--`     | Decrement      | --x     |

### Assignment Operators

| Operator | Description         | Equivalent |
| -------- | ------------------- | ---------- |
| `=`      | Assign              | x = 9      |
| `+=`     | Add and assign      | x = x + 9  |
| `-=`     | Subtract and assign | x = x - 9  |
| `*=`     | Multiply and assign | x = x \* 9 |
| `/=`     | Divide and assign   | x = x / 9  |
| `%=`     | Modulus and assign  | x = x % 9  |

### Comparison Operators

| Operator | Meaning          | Example |
| -------- | ---------------- | ------- |
| `==`     | Equal to         | x == y  |
| `!=`     | Not equal        | x != y  |
| `>`      | Greater than     | x > y   |
| `<`      | Less than        | x < y   |
| `>=`     | Greater or equal | x >= y  |
| `<=`     | Less or equal    | x <= y  |

**Example:**

```cpp
int x = 7, y = 5;
cout << (x == y); // false (0)
```

### Logical Operators

| Operator | Name | Description           | Example             |
| -------- | ---- | --------------------- | ------------------- |
| `&&`     | AND  | True if both are true | a < 8 && a < 12     |
| `\|\|`   | OR   | True if one is true   | `a < 9 \|\| a < 10` |
| `!`      | NOT  | Reverses result       | !(a < 7 && a < 15)  |

**Example:**

```cpp
int a = 8;
cout << (a > 4 && a < 10); // true (1)
```

## Operator Precedence

| Priority | Operators            |
| -------- | -------------------- |
| 1        | `()`                 |
| 2        | `*`, `/`, `%`        |
| 3        | `+`, `-`             |
| 4        | `>`, `<`, `>=`, `<=` |
| 5        | `==`, `!=`           |
| 6        | `&&`                 |
| 7        | `\|\|`               |
| 8        | `=`                  |

**Execution Order:**

1. Parentheses `()`
2. Multiplication/Division/Modulus
3. Addition/Subtraction
4. Comparisons
5. Logical operations

## Summary

- Set up and manage C++ projects in **Visual Studio**.
- Use **basic syntax**, **variables**, and **data types** effectively.
- Apply **escape sequences**, **comments**, and **operators**.
- Understand **operator precedence** and **logical expressions**.

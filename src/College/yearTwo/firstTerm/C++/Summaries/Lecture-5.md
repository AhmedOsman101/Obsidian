# Lecture 5: Visual Studio and C++ Basics

### Creating a C++ Project in Visual Studio

**Steps to Create a Project:**

1. Launch Visual Studio 2022.
2. Select **Create a new project**.
3. Choose the **Empty Project** template for C++.
4. Configure the project:
   - Enter a **Project name** (e.g., `Project_NTCU`).
   - Select the **Location** to save the files.
5. Click **Create**.

**Steps to Add a Source File:**

1. In the **Solution Explorer** pane, right-click the **Source Files** folder.
2. Select **Add > New Item...**.
3. In the dialog box, name the file with a `.cpp` extension (e.g., `first_program.cpp`).
4. Click **Add**.

### Running and Managing the Project

**Comparison of Execution Modes:**

| Action                      | Shortcut    | Debugger Attached | Console Stays Open? | Use Case                                      |
| --------------------------- | ----------- | ----------------- | ------------------- | --------------------------------------------- |
| **Start Debugging**         | `F5`        | Yes               | No (by default)     | To find and fix bugs.                         |
| **Start Without Debugging** | `Ctrl + F5` | No                | Yes                 | To run the program and view the final output. |

_**Note:**_ _To prevent the console from closing immediately when using_ `_F5_`_, navigate to_ `_Tools > Options > Debugging_` _and uncheck "Automatically close the console when debugging stops."_

**Resolving** `**main()**` **Function Conflicts:** A project can only have one `main()` function in the build. To keep multiple files with `main()` in a project, you must exclude all but one from the build process.

**Steps to Exclude a File from Build:**

1. In Solution Explorer, right-click the `.cpp` file to exclude.
2. Select **Properties**.
3. Set **Configuration** to **Active (Debug)** and **Platform** to **x64**.
4. Navigate to **Configuration Properties -> General**.
5. Find the **Excluded From Build** option and change its value from **No** to **Yes**.
6. Click **Apply**, then **OK**.

### Visual Studio Project Structure

| File Extension / Name         | Description                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `**.cpp**`                    | The source file containing the actual C++ code (functions, `main()`, logic).                                             |
| `**.sln**` (Solution File)    | Organizes and manages one or more projects. Contains references to project files and build configurations.               |
| `**.vcxproj**` (Project File) | An XML file containing all project settings, including source files, compiler options, and build instructions.           |
| `**.vcxproj.filters**`        | Controls the visual organization of files in Solution Explorer (e.g., "Source Files" folder). Does not affect the build. |
| `**.vcxproj.user**`           | Stores user-specific settings like debugging options. Not typically shared.                                              |

### Core C++ Syntax

- **Comments**: Used to explain code; they are ignored by the compiler.
  - **Single-line**: `// This is a comment`
  - **Multi-line**: `/* This is a multi-line comment */`
- **New Lines**: Can be created using the `\n` escape sequence or `endl`.
  - `cout << "Hello World!" << "\n";`
  - `cout << "Hello World!" << endl;`

**Common Escape Sequences:**

| Sequence | Description                             |
| -------- | --------------------------------------- |
| `\n`     | Inserts a new line.                     |
| `\t`     | Inserts a horizontal tab.               |
| `\\`     | Inserts a backslash character (`\`).    |
| `\"`     | Inserts a double-quote character (`"`). |

### Variables and Data Types

- **Variable**: A container for storing a data value. It must be declared with a specific data type.
- **Declaration**: Defining a variable without assigning a value.
  - _Example_: `int x;`
- **Assignment**: Giving a value to a previously declared variable.
  - _Example_: `x = 20;`
- **Initialization**: Declaring a variable and assigning it a value in one step.
  - _Example_: `int count = 0;`

**Classification of C++ Data Types:**

1. **Primary**: Basic types like `int`, `char`, `float`, `bool`.
2. **Derived**: Types derived from primary types, like `Array`, `Function`, `Pointer`.
3. **User-Defined**: Types created by the programmer, like `Class`, `Structure`, `Enum`.

**Basic Data Types:**

| Data Type | Description                                                                                                                   | Size           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `int`     | Stores whole numbers without decimals.                                                                                        | 2 or 4 bytes   |
| `float`   | Stores fractional numbers. Sufficient for 6-7 decimal digits.                                                                 | 4 bytes        |
| `double`  | Stores fractional numbers. Sufficient for up to 15 decimal digits.                                                            | 8 bytes        |
| `char`    | Stores a single character/letter/number or ASCII value. Values are enclosed in single quotes (e.g., `'A'`).                   | 1 byte         |
| `string`  | Stores a sequence of characters (text). Values are enclosed in double quotes (e.g., `"Hello"`). Requires `#include <string>`. | 24 to 32 bytes |
| `boolean` | Stores one of two states: `true` or `false`.                                                                                  | 1 byte         |

- **Scientific Numbers**: Floating-point numbers can be represented with an "e" or "E" to indicate the power of 10.
  - _Example_: `float f1 = 27E3;` is equivalent to 27000.
- **ASCII Values**: The `char` type can use ASCII decimal values to represent characters.
  - _Example_: `char myVar = 65;` will store the character 'A'.

### Operators

#### Arithmetic Operators

| Operator | Name                       | Example |
| -------- | -------------------------- | ------- |
| `+`      | Addition                   | `x + y` |
| `-`      | Subtraction                | `x - y` |
| `*`      | Multiplication             | `x * y` |
| `/`      | Division                   | `x / y` |
| `%`      | Modulus (remainder)        | `x % y` |
| `++`     | Increment (increases by 1) | `++x`   |
| `--`     | Decrement (decreases by 1) | `--x`   |

#### Assignment Operators

| Operator | Example   | Equivalent To |
| -------- | --------- | ------------- |
| `=`      | `x = 9`   | `x = 9`       |
| `+=`     | `x += 9`  | `x = x + 9`   |
| `-=`     | `x -= 9`  | `x = x - 9`   |
| `*=`     | `x *= 9`  | `x = x * 9`   |
| `/=`     | `x /= 9`  | `x = x / 9`   |
| `%=`     | `x %= 9`  | `x = x % 9`   |
| `&=`     | `x &= 9`  | `x = x & 9`   |
| `\|=`    | `x \|= 9` | `x = x \| 9`  |
| `^=`     | `x ^= 9`  | `x = x ^ 9`   |
| `>>=`    | `x >>= 9` | `x = x >> 9`  |
| `<<=`    | `x <<= 9` | `x = x << 9`  |

#### Comparison Operators

Used to compare two values. They return `1` (true) or `0` (false).

| Operator | Name                     | Example  |
| -------- | ------------------------ | -------- |
| `==`     | Equal to                 | `x == y` |
| `!=`     | Not equal to             | `x != y` |
| `>`      | Greater than             | `x > y`  |
| `<`      | Less than                | `x < y`  |
| `>=`     | Greater than or equal to | `x >= y` |
| `<=`     | Less than or equal to    | `x <= y` |

#### Logical Operators

Used to determine the logic between variables or values.

| Operator | Name        | Description                                                 | Example              |
| -------- | ----------- | ----------------------------------------------------------- | -------------------- |
| `&&`     | Logical AND | Returns `true` if **both** statements are true.             | `x < 10 && x > 5`    |
| `\|`     | Logical OR  | Returns `true` if **one** of the statements is true.        | `x < 5 \| x > 10`    |
| `!`      | Logical NOT | Reverses the result; returns `false` if the result is true. | `!(x < 5 && x < 10)` |

### String Manipulation

- **Concatenation**: Strings can be joined using the `+` operator or the `append()` method.
  - `string fullName = firstName + lastName;`
  - `string fullName = firstName.append(lastName);`
- **Combining Numbers and Strings**: It is an error to directly add a number to a string. The number must first be converted to a string using `to_string()`.
  - `string result = "Age: " + to_string(25);`

### User Input

The `cin` object is used to get user input from the keyboard.

- _Example_:

### Operator Precedence

The order in which C++ evaluates operators in an expression, from highest to lowest priority:

1. `()` (Parentheses)
2. `*`, `/`, `%` (Multiplication, Division, Modulus)
3. `+`, `-` (Addition, Subtraction)
4. `>`, `<`, `>=`, `<=` (Comparison)
5. `==`, `!=` (Equality)
6. `&&` (Logical AND)
7. `\|\|` (Logical OR)
8. `=` (Assignment)

---
prev:
  text: "Lecture 2"
  link: "/College/yearTwo/secondTerm/Java/Lectures/Lecture-2"
next:
  text: "Lecture 4"
  link: "/College/yearTwo/secondTerm/Java/Lectures/Lecture-4"
title: Lecture 3
---

# Java Programming - Lecture 3

## Program Structure & User Input

### 1. Java File Structure (Package -> Class -> Method)

- **Package declaration**: `package firstPackage;` defines a **namespace** to organize classes and prevent naming conflicts.
- **Class definition**: `public class FirstApp { ... }` creates a **blueprint**; `public` allows access from other packages.
- **Main method**: `public static void main(String[] args) { ... }` is the **entry point**.
  - `static` -> belongs to the class itself; no object needed to run.
  - `void` -> returns nothing.
  - `String[] args` -> receives **command-line arguments**.

> [!note]
> **Testable point**: The JVM looks for `main` exactly with `public static void` signature. Omitting `static` causes a runtime error.

### 2. Console Output

- `System.out.println("text")` prints to **standard output**.
  - `System` -> class in `java.lang` (automatically imported).
  - `out` -> static field representing the console.
  - `println` -> prints line + newline; `print` stays on same line.

## User Input with Scanner

**Goal**: Read data from keyboard or other sources.

### 3. Import & Instantiation

```java
import java.util.Scanner;  // Must be at top of file

Scanner input = new Scanner(System.in);
// System.in = standard input stream (keyboard)
// 'input' is an object variable of type Scanner
```

### 4. Reading Methods

- `input.nextLine()` -> reads **entire line** as `String` (including spaces).
- `input.nextInt()` -> reads an **integer**; leaves newline in buffer.

> [!WARNING]  
> **Common Exam Trap**: After `nextInt()`, `nextLine()` reads the leftover newline, skipping actual input. Always call an extra `nextLine()` to consume the newline before reading a string.

### 5. Resource Management

- `input.close();` -> releases system resources.
- _Once closed, the Scanner cannot be reopened._

## Comparison & Logical Operators

### Comparison Operators

| Operator | Meaning               | Example  |
| -------- | --------------------- | -------- |
| `==`     | Equal to              | `x == y` |
| `!=`     | Not equal             | `x != y` |
| `>`      | Greater than          | `x > y`  |
| `<`      | Less than             | `x < y`  |
| `>=`     | Greater than or equal | `x >= y` |
| `<=`     | Less than or equal    | `x <= y` |

> [!note]
> `==` compares primitives by value; for objects, it compares references. Use `.equals()` for object content.

### Logical Operators (Short-Circuit)

| Operator | Behavior                                                                           |
| -------- | ---------------------------------------------------------------------------------- |
| `&&`     | **AND**: true only if both operands true; if first false, second **not evaluated** |
| `\|\|`   | **OR**: true if at least one true; if first true, second **not evaluated**         |
| `!`      | **NOT**: reverses boolean value                                                    |

**Truth Tables**:

- AND: `true && false = false`
- OR: `true || false = true`
- NOT: `!true = false`

## Conditional Statements

### 6. `if-else` Structure

```java
if (condition) {
    // runs only if condition true
} else if (otherCondition) {
    // runs if first false, second true
} else {
    // runs if all previous conditions false
}
```

- Conditions must evaluate to **boolean** (`true`/`false`).
- Braces `{}` can be omitted for single statements, but **use braces for clarity** (exam trap: omission affects only the immediate statement).

### 7. `switch` Statement

```java
switch(expression) {  // expression can be int, char, String, enum (not long or float)
    case value1:
        // code
        break;  // exits switch
    case value2:
        // code
        break;
    default:
        // runs if no case matches
}
```

- **Fall-through**: Without `break`, execution continues into next case.
- `default` can appear anywhere but is typically last.

> [!IMPORTANT]  
> **Exam Highlight**: `switch` does **not** support `long`, `float`, or `double` as expression types.

## Code Examples with Active Recall Notes

### Correct `if-else-if` with Logical AND

```java
String admin = "mohamed";
int password = 1234;
if (admin == "mohamed" && password == 1234) {
    System.out.println("you can login");
} else {
    System.out.println("you cannot login");
}
```

**Why this matters**: String comparison with `==` checks reference equality; exam may expect `.equals()` for string content.

### Proper Scanner Usage with Multiple Inputs

```java
Scanner input = new Scanner(System.in);
System.out.print("Enter name: ");
String name = input.nextLine();  // reads full line
System.out.print("Enter age: ");
int age = input.nextInt();       // reads int
input.close();
```

**Common pitfall**: Reversing `nextInt()` and `nextLine()` causes input skip.

### Switch Arithmetic Example

```java
float n1 = 10, n2 = 7;
char op = '%';
switch (op) {
    case '+': System.out.println(n1 + n2); break;
    case '-': System.out.println(n1 - n2); break;
    case '/': System.out.println(n1 / n2); break;
    case '%': System.out.println(n1 % n2); break;  // modulo
    default: System.out.println("False operator");
}
```

- **Modulo `%`**: returns remainder (for floats, remainder after division).

## Edge Cases & Exam Traps Summary

| Concept             | Trap                                              | Correct Handling                        |
| ------------------- | ------------------------------------------------- | --------------------------------------- |
| `==` vs `.equals()` | `==` compares object references, not content      | Use `equals()` for string content       |
| Scanner buffer      | `nextInt()` leaves newline                        | Call `nextLine()` to clear buffer       |
| Switch data types   | `long`, `float`, `double` not allowed             | Use `int`, `char`, `String`, `enum`     |
| Short-circuit       | Second operand not evaluated                      | Important for side-effect code          |
| `else-if` chaining  | Order matters                                     | Put most restrictive conditions first   |
| Braces omission     | Only the immediate next statement belongs to `if` | Always use braces to avoid logic errors |

### Procedural Order for Input Handling

1. Import: `import java.util.Scanner;`
2. Create instance: `Scanner var = new Scanner(System.in);`
3. Read data with appropriate method (`nextLine`, `nextInt`, etc.)
4. Close: `var.close();`

> [!note]
> **Why this order**: `Scanner` requires System.in to be available; closing prevents memory leaks but must be done after all reads.

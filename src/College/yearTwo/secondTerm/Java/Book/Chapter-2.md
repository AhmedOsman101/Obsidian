---
title: Chapter 2
prev:
  text: "Chapter 1"
  link: "/College/yearTwo/secondTerm/Java/Book/Chapter-1"
next:
  text: "Chapter 3"
  link: "/College/yearTwo/secondTerm/Java/Book/Chapter-3"
---

# Java - Chapter 2

## Writing A Simple Program

A program starts with an **algorithm** — a sequence of steps that solves a problem. **Pseudocode** describes the algorithm in natural language mixed with code. Every Java program must have a class and a `main` method where execution begins.

**Variables** store values in memory. You must **declare** a variable with a **data type** before using it. Choose **descriptive names** like `radius` and `area`. Java uses **primitive data types** for integers, real numbers, characters, and Booleans. Real numbers use **floating-point** representation and are declared with `double`.

```java
public class ComputeArea {
  public static void main(String[] args) {
    double radius; // Declare radius
    double area;   // Declare area
    radius = 20;   // Assign a value
    area = radius * radius * 3.14159;
    System.out.println("The area for the circle of radius " + radius + " is " + area);
  }
}
```

The `+` operator concatenates strings when one operand is a string. A string cannot cross lines in source code; break it into substrings joined with `+`.

## Reading Input From The Console

Use the **`Scanner` class** from `java.util` for keyboard input:

```java
import java.util.Scanner;

Scanner input = new Scanner(System.in);
double radius = input.nextDouble();
```

A **prompt** tells the user what to enter. The `print` method displays text without advancing to the next line; `println` does advance.

| Import Type         | Syntax                      | Notes                                                          |
| ------------------- | --------------------------- | -------------------------------------------------------------- |
| **Specific import** | `import java.util.Scanner;` | Imports one class. Preferred.                                  |
| **Wildcard import** | `import java.util.*;`       | Imports all classes in the package. No performance difference. |

The program follows **IPO** — input, process, output. Create only **one** `Scanner` object per program. Multiple `Scanner` objects on `System.in` cause subtle errors.

### ComputeAverage — Reading Multiple Numbers

Three numbers read with one `Scanner`, entered on one line (space-separated) or multiple lines:

```java
import java.util.Scanner;

Scanner input = new Scanner(System.in);
System.out.print("Enter three numbers: ");
double number1 = input.nextDouble();
double number2 = input.nextDouble();
double number3 = input.nextDouble();
double average = (number1 + number2 + number3) / 3;
System.out.println("The average of " + number1 + " " + number2
  + " " + number3 + " is " + average);
```

```
Enter three numbers: 1 2 3
The average of 1.0 2.0 3.0 is 2.0
```

Input can be space-separated on one line or each number on its own line — `Scanner` handles both.

## Identifiers

**Identifiers** name variables, methods, classes, and packages. Rules:

- Sequence of letters, digits, `_`, and `$`
- Must start with a letter, `_`, or `$` — cannot start with a digit
- Cannot be a reserved word (keyword)
- Any length

Java is **case sensitive** — `area`, `Area`, and `AREA` are different.

> The `$` character should only be used in mechanically generated source code, not in handwritten identifiers. Avoid naming identifiers with `$`.

## Variables

**Variables** store data that may change. Declare them with a type and assign a value before using them:

```java
int count;            // Declaration
count = 1;            // Assignment
double radius = 1.0;  // Declaration + initialization
int i = 1, j = 2;     // Multiple of same type
```

A variable declared in a method must be assigned a value before use. The **scope** of a variable is the part of the program where it can be referenced.

## Assignment Statements And Expressions

The **assignment operator** `=` evaluates the right side first, then assigns the result to the left variable:

```java
x = x + 1; // Reads x, adds 1, stores back
```

An **expression** is a combination of variables, literals, and operators that evaluates to a value. An assignment statement is also an expression. Chained assignment: `i = j = k = 1;` is evaluated right to left.

> The data type of the variable must be compatible with the assigned value. `int x = 1.0` is illegal without casting.

## Named Constants

Use the `final` keyword for **constants** — permanent data that never changes:

```java
final double PI = 3.14159;
```

By convention, constant names are all uppercase with underscores. Benefits: avoid retyping, centralized change, descriptive names.

## Naming Conventions

| Element               | Convention                                                        | Example                     |
| --------------------- | ----------------------------------------------------------------- | --------------------------- |
| Variables and methods | **camelCase** — lowercase first word, capitalize subsequent words | `numberOfStudents`, `print` |
| Classes               | Capitalize first letter of each word                              | `ComputeArea`, `System`     |
| Constants             | All uppercase, underscores between words                          | `PI`, `MAX_VALUE`           |

Do not choose class names already used in the Java library (e.g., avoid `System`).

## Numeric Data Types And Operations

Java has six numeric types:

| Type     | Size            | Range                  | Precision                |
| -------- | --------------- | ---------------------- | ------------------------ |
| `byte`   | 8-bit           | -128 to 127            | Integer                  |
| `short`  | 16-bit          | -32,768 to 32,767      | Integer                  |
| `int`    | 32-bit          | -2³¹ to 2³¹-1          | Integer                  |
| `long`   | 64-bit          | -2⁶³ to 2⁶³-1          | Integer                  |
| `float`  | 32-bit IEEE 754 | ±1.4E-45 to ±3.4E+38   | 6-9 significant digits   |
| `double` | 64-bit IEEE 754 | ±4.9E-324 to ±1.7E+308 | 15-17 significant digits |

Use `int` for integers and `double` for floating-point by default.

**Reading numbers** from the keyboard with Scanner methods:

`nextByte()`, `nextShort()`, `nextInt()`, `nextLong()`, `nextFloat()`, `nextDouble()`

**Numeric operators:**

| Op  | Meaning        | Example      | Result |
| --- | -------------- | ------------ | ------ |
| `+` | Addition       | `34 + 1`     | `35`   |
| `-` | Subtraction    | `34.0 - 0.1` | `33.9` |
| `*` | Multiplication | `300 * 30`   | `9000` |
| `/` | Division       | `1.0 / 2.0`  | `0.5`  |
| `%` | Remainder      | `20 % 3`     | `2`    |

> **Integer division** truncates the fractional part: `5 / 2` is `2`, not `2.5`. Use `5.0 / 2` for floating-point division.
>
> Remainder is negative only if the dividend is negative. Examples: `-7 % 3` is `-1`, `-12 % 4` is `0`, `-26 % -8` is `-2`, `20 % -13` is `7`.

**Exponent operations:** `Math.pow(a, b)` returns `a^b` as a `double`. Example: `Math.pow(2, 3)` returns `8.0`. The `Math` class is in `java.lang`, which is implicitly imported.

## Numeric Literals

**Integer literals:** default type is `int`. Append `L` for `long`. Use prefix `0b`/`0B` for binary, `0` for octal, `0x`/`0X` for hexadecimal.

Output values: `0B1111` = 15, `07777` = 4095, `0xFFFF` = 65535.

**Floating-point literals:** default type is `double`. Append `f`/`F` for `float`, `d`/`D` for `double`. Underscores between digits improve readability (e.g., `23_454_519`).

**Scientific notation:** `1.23456E2` represents `1.23456 × 10²`. E or e denotes the exponent.

## JShell

JShell is a **REPL** (Read-Evaluate-Print Loop) tool in JDK 9+. Launch with `jshell`. Type statements to see results immediately without writing a complete class. Use `/vars` to list variables and `/exit` to quit.

## Operator Precedence

Expressions evaluate using standard arithmetic rules:

1. Parentheses `()` — innermost first
2. Multiplication, division, remainder `*`, `/`, `%` — left to right
3. Addition, subtraction `+`, `-` — left to right

```java
(3 + 4 * x) / 5 - 10 * (y - 5) * (a + b + c) / x + 9 * (4 / x + (9 + x) / y)
```

Worked example — evaluating `3 + 4 * 4 + 5 * (4 + 3) - 1` = 53:

```
3 + 4 * 4 + 5 * (4 + 3) - 1      (1) parentheses first: 4 + 3 = 7
3 + 4 * 4 + 5 * 7 - 1            (2) multiplication: 4 * 4 = 16
3 + 16 + 5 * 7 - 1               (3) multiplication: 5 * 7 = 35
3 + 16 + 35 - 1                  (4) addition: 3 + 16 = 19
19 + 35 - 1                      (5) addition: 19 + 35 = 54
54 - 1 = 53                      (6) subtraction
```

> Always use `5.0 / 9` not `5 / 9` when the decimal result matters. `5 / 9` yields `0` in Java.

## FahrenheitToCelsius Case Study

The textbook's conversion program demonstrates why floating-point literals matter in division:

```java
import java.util.Scanner;

Scanner input = new Scanner(System.in);
System.out.print("Enter a degree in Fahrenheit: ");
double fahrenheit = input.nextDouble();
double celsius = (5.0 / 9) * (fahrenheit - 32);
System.out.println("Fahrenheit " + fahrenheit + " is " +
  celsius + " in Celsius");
```

| Line                     | fahrenheit | celsius   |
| ------------------------ | ---------- | --------- |
| `input.nextDouble()`     | 100        |           |
| `(5.0 / 9) * (100 - 32)` | 100        | 37.777... |

> **Exam-critical**: Use `5.0 / 9`, NOT `5 / 9`. Writing `5 / 9` gives `0` (integer division), and the entire expression becomes `0 * (fahrenheit - 32) = 0`.

## DisplayTime Case Study — Seconds To Minutes

A simple pattern converts total seconds into minutes and remaining seconds:

```java
import java.util.Scanner;

Scanner input = new Scanner(System.in);
System.out.print("Enter an integer for seconds: ");
int seconds = input.nextInt();
int minutes = seconds / 60;          // Integer division gives full minutes
int remainingSeconds = seconds % 60; // Remainder gives leftover seconds
System.out.println(seconds + " seconds is " + minutes +
  " minutes and " + remainingSeconds + " seconds");
```

| Line              | seconds | minutes | remainingSeconds |
| ----------------- | ------- | ------- | ---------------- |
| `input.nextInt()` | 500     |         |                  |
| `seconds / 60`    | 500     | 8       |                  |
| `seconds % 60`    | 500     | 8       | 20               |

This `/` and `%` pattern (divide to get units, remainder to get leftovers) is used throughout the chapter for time, currency, and digit extraction.

## Displaying The Current Time

`System.currentTimeMillis()` returns milliseconds since the **UNIX epoch** (midnight, Jan 1, 1970 GMT). Extract time components with `/` and `%`:

```java
long totalMilliseconds = System.currentTimeMillis();
long totalSeconds = totalMilliseconds / 1000;
long currentSecond = totalSeconds % 60;
long totalMinutes = totalSeconds / 60;
long currentMinute = totalMinutes % 60;
long totalHours = totalMinutes / 60;
long currentHour = totalHours % 24;
```

All variables should be `long` type because the millisecond value exceeds `int` range.

## Augmented Assignment Operators

| Operator | Example  | Equivalent  |
| -------- | -------- | ----------- |
| `+=`     | `i += 8` | `i = i + 8` |
| `-=`     | `i -= 8` | `i = i - 8` |
| `*=`     | `i *= 8` | `i = i * 8` |
| `/=`     | `i /= 8` | `i = i / 8` |
| `%=`     | `i %= 8` | `i = i % 8` |

The augmented operator is performed last. No spaces inside operator names (`+ =` is wrong). Augmented assignments include implicit casting: `sum += 4.5` with `int sum` equals `sum = (int)(sum + 4.5)`.

## Increment And Decrement Operators

| Operator | Name          | Effect                              |
| -------- | ------------- | ----------------------------------- |
| `++var`  | Preincrement  | Increment first, then use new value |
| `var++`  | Postincrement | Use original value, then increment  |
| `--var`  | Predecrement  | Decrement first, then use new value |
| `var--`  | Postdecrement | Use original value, then decrement  |

```java
int i = 10;
int a = 10 * i++;   // a = 100, i becomes 11
int b = 10 * (++i); // i becomes 11 first, then b = 110
```

Complex example with mixed pre/post:

```java
double x = 1.0;
double y = 5.0;
double z = x-- + (++y);
// y becomes 6.0, z becomes 7.0, x becomes 0.0
```

Left-hand operand of a binary operator evaluates before any part of the right-hand operand.

## Numeric Type Conversions

**Widening** (small type to larger): automatic. `int` to `double` happens implicitly.

**Narrowing** (larger type to smaller): explicit cast required. Fractional part is **truncated**, not rounded.

```java
double d = 4.5;
int i = (int)d;        // i = 4, d is still 4.5
System.out.println((double)1 / 2); // 0.5
System.out.println(1 / 2);         // 0
```

> **Byte/short literal assignment**: An integer literal within the target type's range can be assigned to `byte` or `short` without explicit casting. `byte b = 100` is fine because 100 fits in `byte` range. However, assigning an `int` **variable** (not a literal) to `byte`/`short` requires explicit casting even if the value is in range: `int i = 100; byte b = (byte)i;` is required.

Round to nearest integer: `(int)(x + 0.5)`. Round to 2 decimal places: `(int)(tax * 100 + 0.5) / 100.0`.

## Software Development Process

The **software development life cycle** has seven stages:

1. **Requirements specification** — document what the software must do
2. **System analysis** — identify input, output, and data flow (IPO)
3. **System design** — break the problem into steps, design the process
4. **Implementation** — code the design
5. **Testing** — verify against requirements
6. **Deployment** — make the software available
7. **Maintenance** — updates, bug fixes

**Incremental coding and testing**: add and test steps one at a time to isolate bugs.

### Loan Payment Case Study

Key formulas — monthly interest rate from annual rate: `monthlyInterestRate = annualInterestRate / 1200`

$$ monthlyPayment = \frac{loanAmount \times monthlyInterestRate}{1 - \frac{1}{(1 + monthlyInterestRate)^{numberOfYears \times 12}}} $$

```java
double monthlyPayment = loanAmount * monthlyInterestRate / (1
  - 1 / Math.pow(1 + monthlyInterestRate, numberOfYears * 12));
```

Round result to 2 decimal places: `(int)(monthlyPayment * 100) / 100.0`.

## Counting Monetary Units Case Study

Convert `double` amount to cents with `(int)(amount * 100)`, then extract denominations using `/` and `%`:

```java
int remainingAmount = (int)(amount * 100);
int numberOfOneDollars = remainingAmount / 100;
remainingAmount = remainingAmount % 100;
int numberOfQuarters = remainingAmount / 25;
remainingAmount = remainingAmount % 25;
int numberOfDimes = remainingAmount / 10;
remainingAmount = remainingAmount % 10;
int numberOfNickels = remainingAmount / 5;
remainingAmount = remainingAmount % 5;
int numberOfPennies = remainingAmount;
```

> [!WARNING]
> Casting `double` to `int` can lose precision. `10.03 * 100` produces `1002.9999999999999`, not `1003`. Entering `10.03` as input would result in the program incorrectly displaying 10 dollars and 2 pennies (instead of 3 pennies). Fix by accepting input as integer cents (e.g., `1003` for $10.03).

## Common Errors And Pitfalls

| Error                       | Cause                                       | Fix                                   |
| --------------------------- | ------------------------------------------- | ------------------------------------- |
| **Undeclared variable**     | Variable name is misspelled or not declared | Match the exact declared name         |
| **Uninitialized variable**  | Variable declared but not assigned          | Assign a value before use             |
| **Integer overflow**        | Value exceeds type range                    | Use a larger type or check bounds     |
| **Integer division**        | Both operands are `int`                     | Make one operand a `double`           |
| **Round-off error**         | Floating-point approximation                | Use integers for precise calculations |
| **Redundant input objects** | Multiple `Scanner` on `System.in`           | Use one `Scanner` object              |

Round-off error exact outputs:

```
1.0 - 0.1 - 0.1 - 0.1 - 0.1 - 0.1 = 0.5000000000000001  (not 0.5)
1.0 - 0.9 = 0.09999999999999998                          (not 0.1)
```

Overflow wraps around silently: `int value = 2147483647 + 1` produces `-2147483648`. Java does not report overflow errors.

**Underflow** occurs when a floating-point number is too close to zero to be stored. Java approximates it to zero, so you normally do not need to worry about underflow.

## Exercise-Level Review Points

Chapter 2 exercises focus on Scanner input, arithmetic expressions, type conversion, and applying formulas.

```java
// Miles to kilometers
double kilometers = miles * 1.6;

// Temperature conversion
double celsius = (5.0 / 9) * (fahrenheit - 32);

// Extract digits with / and %
int sum = 0;
sum += number % 10; // Get last digit
number = number / 10; // Remove last digit

// Compound value — month by month
accountValue = (monthlySaving + accountValue) * (1 + monthlyInterestRate);

// Distance between two points
double distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

// Future investment value
double futureValue = investmentAmount * Math.pow(1 + monthlyInterestRate, numberOfYears * 12);

// Wind-chill temperature
double twc = 35.74 + 0.6215 * ta - 35.75 * Math.pow(v, 0.16) + 0.4275 * ta * Math.pow(v, 0.16);

// Triangle area (Heron's formula)
double s = (side1 + side2 + side3) / 2;
double area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
```

Common patterns to practice:

1. Declare and initialize a `Scanner` object
2. Prompt, read, compute, display
3. Use `Math.pow()` for exponentiation
4. Use parentheses and `5.0/9` pattern for correct division
5. Use `/` and `%` to extract digits and break numbers into units

---

_13 min read. Original: 115 min read._

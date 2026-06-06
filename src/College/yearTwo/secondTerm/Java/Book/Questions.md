---
title: Questions
prev:
  text: "Book"
  link: "/College/yearTwo/secondTerm/Java/Book/index"
next: false
---

# Chapters 1–9: Questions, Quizzes & Programming Exercises

---

# Chapter 1 — Introduction to Computers, Programs, and Java

## CheckPoint

### Question 1.2.1

What are hardware and software?

#### Answer

**Hardware** comprises the visible, physical elements of the computer. **Software** provides the invisible instructions that control the hardware and make it perform specific tasks.

---

### Question 1.2.2

List the five major hardware components of a computer.

#### Answer

1. Central Processing Unit (CPU)
2. Memory (main memory)
3. Storage devices (such as disks and CDs)
4. Input devices (such as the mouse and the keyboard)
5. Output devices (such as monitors and printers)
6. Communication devices (such as modems and network interface cards)

---

### Question 1.2.3

What does the acronym CPU stand for? What unit is used to measure CPU speed?

#### Answer

CPU stands for **Central Processing Unit**. CPU speed is measured in **hertz (Hz)** — currently in **gigahertz (GHz)**.

---

### Question 1.2.4

What is a bit? What is a byte?

#### Answer

A **bit** is a binary digit (0 or 1). A **byte** is composed of eight bits.

---

### Question 1.2.5

What is memory for? What does RAM stand for? Why is memory called RAM?

#### Answer

**Memory** stores programs and data for the CPU to execute. **RAM** stands for Random-Access Memory. It is called RAM because the bytes in memory can be accessed in any order.

---

### Question 1.2.6

What unit is used to measure memory size? What unit is used to measure disk size?

#### Answer

Both memory and disk size are measured in bytes (KB, MB, GB, TB).

---

### Question 1.2.7

What is the primary difference between memory and a storage device?

#### Answer

**Memory (RAM)** is volatile — information is lost when power is turned off. **Storage devices** store data permanently.

---

### Question 1.3.1

What language does the CPU understand?

#### Answer

The CPU understands **machine language** — a set of primitive instructions in binary code.

---

### Question 1.3.2

What is an assembly language? What is an assembler?

#### Answer

**Assembly language** uses short descriptive words (mnemonics) to represent machine-language instructions. An **assembler** is a program that translates assembly-language programs into machine code.

---

### Question 1.3.3

What is a high-level programming language? What is a source program?

#### Answer

A **high-level language** is English-like and platform-independent. A **source program** (or source code) is a program written in a high-level language.

---

### Question 1.3.4

What is an interpreter? What is a compiler?

#### Answer

An **interpreter** reads one statement, translates it to machine code, and executes it right away. A **compiler** translates the entire source code into a machine-code file, then the file is executed.

---

### Question 1.3.5

What is the difference between an interpreted language and a compiled language?

#### Answer

An **interpreted language** is translated and executed one statement at a time. A **compiled language** is translated entirely into machine code before execution.

---

### Question 1.4.1

What is an operating system? List some popular operating systems.

#### Answer

An **operating system (OS)** manages and controls a computer's activities. Popular OSes: Microsoft Windows, Mac OS, Linux.

---

### Question 1.4.2

What are the major responsibilities of an operating system?

#### Answer

1. Controlling and monitoring system activities
2. Allocating and assigning system resources
3. Scheduling operations

---

### Question 1.4.3

What are multiprogramming, multithreading, and multiprocessing?

#### Answer

- **Multiprogramming**: Multiple programs run simultaneously by sharing the same CPU.
- **Multithreading**: A single program executes multiple tasks at the same time.
- **Multiprocessing**: Multiple programs run concurrently using multiple processors.

---

### Question 1.5.1

Who invented Java? Which company owns Java now?

#### Answer

Java was developed by a team led by **James Gosling** at Sun Microsystems. **Oracle** now owns Java (purchased Sun in 2010).

---

### Question 1.5.2

What is a Java applet?

#### Answer

A **Java applet** is a Java program that runs from a web browser. (Today applets are no longer allowed to run from a web browser due to security issues.)

---

### Question 1.5.3

What programming language does Android use?

#### Answer

Android uses **Java**.

---

### Question 1.6.1

What is the Java language specification?

#### Answer

The **Java language specification** is a technical definition of the Java programming language's syntax and semantics.

---

### Question 1.6.2

What does JDK stand for? What does JRE stand for?

#### Answer

- **JDK**: Java Development Toolkit
- **JRE**: Java Runtime Environment

---

### Question 1.6.3

What does IDE stand for?

#### Answer

**IDE**: Integrated Development Environment

---

### Question 1.6.4

Are tools like NetBeans and Eclipse different languages from Java, or are they dialects or extensions of Java?

#### Answer

NetBeans and Eclipse are **IDEs** (development tools) for Java, not different languages. They are used to develop Java programs.

---

### Question 1.7.1

What is a keyword? List some Java keywords.

#### Answer

A **keyword** has a specific meaning to the compiler and cannot be used for other purposes. Examples: `class`, `public`, `static`, `void`.

---

### Question 1.7.2

Is Java case sensitive? What is the case for Java keywords?

#### Answer

Yes, Java is **case sensitive**. Java keywords are always written in **lowercase**.

---

### Question 1.7.3

What is a comment? Is the comment ignored by the compiler? How do you denote a comment line and a comment paragraph?

#### Answer

A **comment** documents what the program does. Comments are ignored by the compiler. A **line comment** uses `//`. A **block comment** (paragraph) uses `/* ... */`.

---

### Question 1.7.4

What is the statement to display a string on the console?

#### Answer

`System.out.println("string");` or `System.out.print("string");`

---

### Question 1.7.5

Show the output of the following code:

```java
public class Test {
  public static void main(String[] args) {
    System.out.println("3.5 * 4 / 2 - 2.5 is ");
    System.out.println(3.5 * 4 / 2 - 2.5);
  }
}
```

#### Answer

```
3.5 * 4 / 2 - 2.5 is
4.5
```

Explanation: `3.5 * 4 / 2 - 2.5 = 14.0 / 2 - 2.5 = 7.0 - 2.5 = 4.5`

---

### Question 1.8.1

What is the Java source filename extension, and what is the Java bytecode filename extension?

#### Answer

Source filename extension: `.java`. Bytecode filename extension: `.class`.

---

### Question 1.8.2

What are the input and output of a Java compiler?

#### Answer

**Input**: Java source file (`.java`). **Output**: Java bytecode file (`.class`).

---

### Question 1.8.3

What is the command to compile a Java program?

#### Answer

`javac ClassName.java`

---

### Question 1.8.4

What is the command to run a Java program?

#### Answer

`java ClassName` (without `.class` extension)

---

### Question 1.8.5

What is the JVM?

#### Answer

**JVM (Java Virtual Machine)** is a program that interprets Java bytecode. It enables Java programs to run on any platform.

---

### Question 1.8.6

Can Java run on any machine? What is needed to run Java on a computer?

#### Answer

Yes, Java can run on any machine that has a **JVM (Java Virtual Machine)** installed.

---

### Question 1.8.7

If a `NoClassDefFoundError` occurs when you run a program, what is the cause of the error?

#### Answer

The class file does not exist or cannot be found.

---

### Question 1.8.8

If a `NoSuchMethodError` occurs when you run a program, what is the cause of the error?

#### Answer

The class file does not have a `main` method, or the `main` method is mistyped (e.g., `Main` instead of `main`).

---

### Question 1.9.1

Reformat the following program according to the programming style and documentation guidelines. Use the end-of-line brace style.

```java
public class Test
{
  // Main method
  public static void main(String[] args) {
  /** Display output */
  System.out.println("Welcome to Java");
  }
}
```

#### Answer

```java
public class Test {
  // Main method
  public static void main(String[] args) {
    // Display output
    System.out.println("Welcome to Java");
  }
}
```

Changes made: (1) End-of-line braces, (2) Fixed indentation, (3) Changed `/** ... */` javadoc comment inside method to `//` line comment (javadoc comments should only precede class/method headers).

---

### Question 1.10.1

What are syntax errors (compile errors), runtime errors, and logic errors?

#### Answer

- **Syntax errors**: Errors detected by the compiler (e.g., missing semicolon).
- **Runtime errors**: Errors that cause a program to terminate abnormally during execution (e.g., division by zero).
- **Logic errors**: Errors where the program does not perform as intended (e.g., using wrong formula).

---

### Question 1.10.2

Give examples of syntax errors, runtime errors, and logic errors.

#### Answer

- **Syntax error**: Missing semicolon, missing closing brace.
- **Runtime error**: Division by zero, entering a string when a number is expected.
- **Logic error**: Using `9 / 5` instead of `9.0 / 5` to compute Celsius to Fahrenheit conversion.

---

### Question 1.10.3

If you forget to put a closing quotation mark on a string, what kind of error will be raised?

#### Answer

**Syntax error** (compile error).

---

### Question 1.10.4

If your program needs to read integers, but the user entered strings, an error would occur when running this program. What kind of error is this?

#### Answer

**Runtime error**.

---

### Question 1.10.5

Suppose you write a program for computing the perimeter of a rectangle and you mistakenly write your program so it computes the area of a rectangle. What kind of error is this?

#### Answer

**Logic error**.

---

### Question 1.10.6

Identify and fix the errors in the following code:

```java
1 public class Welcome {
2   public void Main(String[] args) {
3     System.out.println('Welcome to Java!);
4   }
5 )
```

#### Answer

Errors:

1. Line 2: `Main` should be `main` (lowercase), and `main` should be `static` — missing `static` keyword.
2. Line 3: String literal should use double quotes `"` not single quotes `'`, and missing closing quotation mark.
3. Line 5: Closing brace should be `}` not `)`.

Fixed code:

```java
public class Welcome {
  public static void main(String[] args) {
    System.out.println("Welcome to Java!");
  }
}
```

---

## Programming Exercises

### Exercise 1.1

(_Display three messages_) Write a program that displays **Welcome to Java**, **Learning Java Now**, and **Programming is fun**.

#### Answer

```java
public class Exercise1_1 {
  public static void main(String[] args) {
    System.out.println("Welcome to Java");
    System.out.println("Learning Java Now");
    System.out.println("Programming is fun");
  }
}
```

---

### Exercise 1.2

(_Display five messages_) Write a program that displays **I love Java** five times.

#### Answer

```java
public class Exercise1_2 {
  public static void main(String[] args) {
    System.out.println("I love Java");
    System.out.println("I love Java");
    System.out.println("I love Java");
    System.out.println("I love Java");
    System.out.println("I love Java");
  }
}
```

---

### Exercise 1.3 \*

(_Display a pattern_) Write a program that displays the following pattern:

```
    J
J  aaa   v     vaaa
J  J  aa  vv   a  a
J  aaaa    v    aaaa
```

#### Answer

```java
public class Exercise1_3 {
  public static void main(String[] args) {
    System.out.println("    J");
    System.out.println("J  aaa   v     vaaa");
    System.out.println("J  J  aa  vv   a  a");
    System.out.println("J  aaaa    v    aaaa");
  }
}
```

---

### Exercise 1.4

(_Print a table_) Write a program that displays the following table:

```
a  a^2  a^3  a^4
1  1    1    1
2  4    8    16
3  9    27   81
4  16   64   256
```

#### Answer

```java
public class Exercise1_4 {
  public static void main(String[] args) {
    System.out.println("a  a^2  a^3  a^4");
    System.out.println("1  1    1    1");
    System.out.println("2  4    8    16");
    System.out.println("3  9    27   81");
    System.out.println("4  16   64   256");
  }
}
```

---

### Exercise 1.5

(_Compute expressions_) Write a program that displays the result of
$$ \frac{7.5 \times 6.5 - 4.5 \times 3}{47.5 - 5.5} $$

#### Answer

```java
public class Exercise1_5 {
  public static void main(String[] args) {
    System.out.println((7.5 * 6.5 - 4.5 * 3) / (47.5 - 5.5));
  }
}
```

Result: `0.8392857142857143`

---

### Exercise 1.6

(_Summation of a series_) Write a program that displays the result of
$$ 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 $$

#### Answer

```java
public class Exercise1_6 {
  public static void main(String[] args) {
    System.out.println(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);
  }
}
```

Result: `55`

---

### Exercise 1.7 \*

(_Approximate π_) π can be computed using the following formula:
$$ \pi = 4 \times \left( 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \frac{1}{9} - \frac{1}{11} + \dots \right) $$
Write a program that displays the result of
$4 \times \left( 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \frac{1}{9} - \frac{1}{11} \right)$
and $4 \times \left( 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \frac{1}{9} - \frac{1}{11} + \frac{1}{13} \right)$.
Use **1.0** instead of **1** in your program.

#### Answer

```java
public class Exercise1_7 {
  public static void main(String[] args) {
    System.out.println(4.0 * (1.0 - 1.0/3 + 1.0/5 - 1.0/7 + 1.0/9 - 1.0/11));
    System.out.println(4.0 * (1.0 - 1.0/3 + 1.0/5 - 1.0/7 + 1.0/9 - 1.0/11 + 1.0/13));
  }
}
```

---

### Exercise 1.8

(_Area and perimeter of a circle_) Write a program that displays the area and perimeter of a circle that has a radius of **6.5** using the following formula:
$$ \pi = 3.14159 $$
$$ perimeter = 2 \times radius \times \pi $$
$$ area = radius \times radius \times \pi $$

#### Answer

```java
public class Exercise1_8 {
  public static void main(String[] args) {
    double radius = 6.5;
    double pi = 3.14159;
    double perimeter = 2 * radius * pi;
    double area = radius * radius * pi;
    System.out.println("Perimeter = " + perimeter);
    System.out.println("Area = " + area);
  }
}
```

---

### Exercise 1.9

(_Area and perimeter of a rectangle_) Write a program that displays the area and perimeter of a rectangle with a width of **5.3** and height of **8.6** using the following formula:
$$ area = width \times height $$
$$ perimeter = 2 \times (width + height) $$

#### Answer

```java
public class Exercise1_9 {
  public static void main(String[] args) {
    double width = 5.3;
    double height = 8.6;
    double area = width * height;
    double perimeter = 2 * (width + height);
    System.out.println("Area = " + area);
    System.out.println("Perimeter = " + perimeter);
  }
}
```

---

### Exercise 1.10

(_Average speed in miles_) Assume that a runner runs **15** kilometers in **50** minutes and **30** seconds. Write a program that displays the average speed in miles per hour. (Note that **1** mile is **1.6** kilometers.)

#### Answer

```java
public class Exercise1_10 {
  public static void main(String[] args) {
    // 15 km in 50 min 30 sec
    double km = 15;
    double miles = km / 1.6;
    double hours = (50 + 30.0 / 60) / 60;
    double avgSpeed = miles / hours;
    System.out.println("Average speed = " + avgSpeed + " mph");
  }
}
```

---

### Exercise 1.11 \*

(_Population projection_) The U.S. Census Bureau projects population based on the following assumptions:

- One birth every 7 seconds
- One death every 13 seconds
- One new immigrant every 45 seconds
  Write a program to display the population for each of the next five years. Assume that the current population is 312,032,486, and one year has 365 days.

#### Answer

```java
public class Exercise1_11 {
  public static void main(String[] args) {
    int currentPopulation = 312032486;
    int secondsPerYear = 365 * 24 * 60 * 60;
    int birthsPerYear = secondsPerYear / 7;
    int deathsPerYear = secondsPerYear / 13;
    int immigrantsPerYear = secondsPerYear / 45;
    int annualChange = birthsPerYear + immigrantsPerYear - deathsPerYear;

    for (int year = 1; year <= 5; year++) {
      currentPopulation += annualChange;
      System.out.println("Year " + year + " population: " + currentPopulation);
    }
  }
}
```

---

### Exercise 1.12

(_Average speed in kilometers_) Assume that a runner runs **24** miles in **1** hour, **40** minutes, and **35** seconds. Write a program that displays the average speed in kilometers per hour. (Note **1** mile is equal to **1.6** kilometers.)

#### Answer

```java
public class Exercise1_12 {
  public static void main(String[] args) {
    double miles = 24;
    double km = miles * 1.6;
    double hours = 1 + 40.0 / 60 + 35.0 / 3600;
    double avgSpeed = km / hours;
    System.out.println("Average speed = " + avgSpeed + " km/h");
  }
}
```

---

### Exercise 1.13 \*

(_Algebra: solve 2 × 2 linear equations_) You can use Cramer's rule to solve the following 2 × 2 system of linear equation provided that $ad - bc$ is not 0:
$$ \begin{matrix} ax + by = e \\ cx + dy = f \end{matrix} \quad x = \frac{ed - bf}{ad - bc} \quad y = \frac{af - ec}{ad - bc} $$
Write a program that solves the following equation and displays the value for $x$ and $y$:
$$ 3.4x + 50.2y = 44.5 $$
$$ 2.1x + .55y = 5.9 $$

#### Answer

```java
public class Exercise1_13 {
  public static void main(String[] args) {
    double a = 3.4, b = 50.2, e = 44.5;
    double c = 2.1, d = 0.55, f = 5.9;
    double determinant = a * d - b * c;
    double x = (e * d - b * f) / determinant;
    double y = (a * f - e * c) / determinant;
    System.out.println("x = " + x);
    System.out.println("y = " + y);
  }
}
```

---

# Chapter 2 — Elementary Programming

## CheckPoint

### Question 2.2.1

Identify and fix the errors in the following code:

```java
1 public class Test {
2   public void main(string[] args) {
3     double i = 50.0;
4     double k = i + 50.0;
5     double j = k + 1;
6
7     System.out.println("j is " + j + " and
8     k is " + k);
9   }
10 }
```

#### Answer

Errors:

1. Line 2: `void main` should be `static void main` (missing `static`).
2. Line 2: `string` should be `String` (capital S).
3. Lines 7-8: String literal crosses lines — must use concatenation `+`.

Fixed code:

```java
public class Test {
  public static void main(String[] args) {
    double i = 50.0;
    double k = i + 50.0;
    double j = k + 1;
    System.out.println("j is " + j + " and " + "k is " + k);
  }
}
```

---

### Question 2.3.1

How do you write a statement to let the user enter a double value from the keyboard? What happens if you entered **5a** when executing the following code?

```java
double radius = input.nextDouble();
```

#### Answer

To read a double: `double radius = input.nextDouble();` (after creating a `Scanner` object).
If you enter `5a`, a **runtime error** occurs (an `InputMismatchException`) because `5a` is not a valid double value.

---

### Question 2.3.2

Are there any performance differences between the following two **import** statements?

```java
import java.util.Scanner;
import java.util.*;
```

#### Answer

**No performance difference.** The import statement simply tells the compiler where to locate classes; the information is not read in at compile time or runtime unless the class is used.

---

### Question 2.4.1

Which of the following identifiers are valid? Which are Java keywords?

```
miles, Test, a++, --a, 4#R, $4, #44, apps
class, public, int, x, y, radius
```

#### Answer

**Valid identifiers**: `miles`, `Test`, `$4`, `apps`, `x`, `y`, `radius`
**Invalid identifiers**: `a++` (contains `+`), `--a` (contains `-`), `4#R` (starts with digit, contains `#`), `#44` (starts with `#`)
**Java keywords**: `class`, `public`, `int`

---

### Question 2.5.1

Identify and fix the errors in the following code:

```java
1 public class Test {
2   public static void main(String[] args) {
3     int i = k + 2;
4     System.out.println(i);
5   }
6 }
```

#### Answer

Error: Variable `k` is not declared before use.
Fixed code:

```java
public class Test {
  public static void main(String[] args) {
    int k = 1;
    int i = k + 2;
    System.out.println(i);
  }
}
```

---

### Question 2.6.1

Identify and fix the errors in the following code:

```java
1 public class Test {
2   public static void main(String[] args) {
3     int i = j = k = 2;
4     System.out.println(i + " " + j + " " + k);
5   }
6 }
```

#### Answer

Error: `j` and `k` are not declared. In Java, chained assignments require variables to be declared first, or you must declare and initialize them individually.

Fixed code:

```java
public class Test {
  public static void main(String[] args) {
    int i, j, k;
    i = j = k = 2;
    System.out.println(i + " " + j + " " + k);
  }
}
```

---

### Question 2.7.1

What are the benefits of using constants? Declare an **int** constant **SIZE** with value **20**.

#### Answer

Benefits of constants:

1. Don't have to repeatedly type the same value.
2. If you need to change the constant value, change it only in one location.
3. Descriptive names make programs easy to read.

Declaration: `final int SIZE = 20;`

---

### Question 2.7.2

Translate the following algorithm into Java code:
Step 1: Declare a **double** variable named **miles** with an initial value **100**.
Step 2: Declare a **double** constant named **KILOMETERS_PER_MILE** with value **1.609**.
Step 3: Declare a **double** variable named **kilometers**, multiply **miles** and **KILOMETERS_PER_MILE**, and assign the result to **kilometers**.
Step 4: Display **kilometers** to the console.
What is **kilometers** after Step 4?

#### Answer

```java
double miles = 100;
final double KILOMETERS_PER_MILE = 1.609;
double kilometers = miles * KILOMETERS_PER_MILE;
System.out.println(kilometers);
```

`kilometers` = 160.9

---

### Question 2.8.1

What are the naming conventions for class names, method names, constants, and variables? Which of the following items can be a constant, a method, a variable, or a class according to the Java naming conventions?
**MAX_VALUE**, **Test**, **read**, **readDouble**

#### Answer

- **Class names**: Capitalize first letter of each word (PascalCase) -> `Test` (class)
- **Method names**: Lowercase first word, camelCase -> `read`, `readDouble` (methods)
- **Variables**: Lowercase first word, camelCase -> `read`, `readDouble` (variables also possible)
- **Constants**: All uppercase with underscores -> `MAX_VALUE` (constant)

---

### Question 2.9.1

Find the largest and smallest `byte`, `short`, `int`, `long`, `float`, and `double`. Which of these data types requires the least amount of memory?

#### Answer

| Type   | Smallest                 | Largest                 | Size   |
| ------ | ------------------------ | ----------------------- | ------ |
| byte   | -128                     | 127                     | 8-bit  |
| short  | -32768                   | 32767                   | 16-bit |
| int    | -2147483648              | 2147483647              | 32-bit |
| long   | -9223372036854775808     | 9223372036854775807     | 64-bit |
| float  | -3.4028235E+38           | 3.4028235E+38           | 32-bit |
| double | -1.7976931348623157E+308 | 1.7976931348623157E+308 | 64-bit |

**`byte`** requires the least amount of memory (8 bits).

---

### Question 2.9.2

Show the result of the following remainders:

```
56 % 6
78 % -4
-34 % 5
-34 % -5
5 % 1
1 % 5
```

#### Answer

```
56 % 6  = 2
78 % -4 = 2
-34 % 5 = -4
-34 % -5 = -4
5 % 1   = 0
1 % 5   = 1
```

The remainder is negative only if the dividend is negative.

---

### Question 2.9.3

If today is Tuesday, what will be the day in 100 days?

#### Answer

Tuesday is day 2 (assuming Sunday = 0). (2 + 100) % 7 = 102 % 7 = 4. Day 4 is **Thursday**.

---

### Question 2.9.4

What is the result of `25 / 4`? How would you rewrite the expression if you wished the result to be a floating-point number?

#### Answer

`25 / 4` = **6** (integer division truncates the fractional part).
For floating-point result: `25.0 / 4` or `25 / 4.0` or `(double)25 / 4` (all give 6.25).

---

### Question 2.9.5

Show the result of the following code:

```java
System.out.println(2 * (5 / 2 + 5 / 2));
System.out.println(2 * 5 / 2 + 2 * 5 / 2);
System.out.println(2 * (5 / 2));
System.out.println(2 * 5 / 2);
```

#### Answer

```
8   (2 * (2 + 2) = 8)
10  (10/2 + 10/2 = 5 + 5 = 10)
4   (2 * 2 = 4)
5   (10 / 2 = 5)
```

---

### Question 2.9.6

Are the following statements correct? If so, show the output.

```java
System.out.println("25 / 4 is " + 25 / 4);
System.out.println("25 / 4.0 is " + 25 / 4.0);
System.out.println("3 * 2 / 4 is " + 3 * 2 / 4);
System.out.println("3.0 * 2 / 4 is " + 3.0 * 2 / 4);
```

#### Answer

All are correct.

```
25 / 4 is 6
25 / 4.0 is 6.25
3 * 2 / 4 is 1
3.0 * 2 / 4 is 1.5
```

---

### Question 2.9.7

Write a statement to display the result of $2^{3.5}$.

#### Answer

```java
System.out.println(Math.pow(2, 3.5)); // Displays 11.313708498984761
```

---

### Question 2.9.8

Suppose `m` and `r` are integers. Write a Java expression for $mr^2$ to obtain a floating-point result.

#### Answer

```java
(double)(m * r * r)
```

or

```java
m * r * r * 1.0
```

---

### Question 2.10.1

How many accurate digits are stored in a **float** or **double** type variable?

#### Answer

- **float**: 6–9 significant digits
- **double**: 15–17 significant digits

---

### Question 2.10.2

Which of the following are correct literals for floating-point numbers?
`12.3, 12.3e+2, 23.4e-2, -334.4, 20.5, 39F, 40D`

#### Answer

All are correct floating-point literals:

- `12.3` — double literal
- `12.3e+2` — scientific notation (1230.0)
- `23.4e-2` — scientific notation (0.234)
- `-334.4` — negative double
- `20.5` — double
- `39F` — float literal
- `40D` — double literal

---

### Question 2.10.3

Which of the following are the same as **52.534**?
`5.2534e+1, 0.52534e+2, 525.34e-1, 5.2534e+0`

#### Answer

`5.2534e+1` = 52.534 ✓
`0.52534e+2` = 52.534 ✓
`525.34e-1` = 52.534 ✓
`5.2534e+0` = 5.2534 ✗

---

### Question 2.10.4

Which of the following are correct literals?
`5_2534e+1, _2534, 5_2, 5_`

#### Answer

- `5_2534e+1` — correct (underscore between digits in a number literal)
- `_2534` — NOT correct (underscore at start makes it an identifier, not a numeric literal)
- `5_2` — correct (underscore between digits)
- `5_` — NOT correct (underscore must be between two digits)

---

### Question 2.11.1

What does REPL stand for? How do you launch JShell?

#### Answer

REPL = **Read-Evaluate-Print Loop**. Launch JShell by typing `jshell` in a command window (requires JDK 9+).

---

### Question 2.12.1

How would you write the following arithmetic expressions in Java?
$$ a. \frac{4}{3(r + 34)} - 9(a + bc) + \frac{3 + d(2 + a)}{a + bd} $$
$$ b. 5.5 \times (r + 2.5)^{2.5 + t} $$

#### Answer

a. `4.0 / (3 * (r + 34)) - 9 * (a + b * c) + (3 + d * (2 + a)) / (a + b * d)`
b. `5.5 * Math.pow(r + 2.5, 2.5 + t)`

---

### Question 2.13.1

How do you obtain the current second, minute, and hour?

#### Answer

```java
long totalMilliseconds = System.currentTimeMillis();
long totalSeconds = totalMilliseconds / 1000;
long currentSecond = totalSeconds % 60;
long totalMinutes = totalSeconds / 60;
long currentMinute = totalMinutes % 60;
long totalHours = totalMinutes / 60;
long currentHour = totalHours % 24;
```

---

### Question 2.14.1

Show the output of the following code:

```java
double a = 6.5;
a += a + 1;
System.out.println(a);
a = 6;
a /= 2;
System.out.println(a);
```

#### Answer

```
14.0   (a += a + 1 => a = a + (a + 1) = 6.5 + 7.5 = 14.0)
3.0    (a /= 2 => a = 6 / 2 = 3.0)
```

---

### Question 2.15.1

Which of these statements are true?
a. Any expression can be used as a statement.
b. The expression `x++` can be used as a statement.
c. The statement `x = x + 5` is also an expression.
d. The statement `x = y = x = 0` is illegal.

#### Answer

a. **False** — only certain expressions (like assignments, increments) can be statements.
b. **True** — `x++` is a valid statement.
c. **True** — `x = x + 5` is an assignment expression that evaluates to the assigned value.
d. **False** — `x = y = x = 0` is legal (right-associative assignment).

---

### Question 2.15.2

Show the output of the following code:

```java
int a = 6;
int b = a++;
System.out.println(a);
System.out.println(b);
a = 6;
b = ++a;
System.out.println(a);
System.out.println(b);
```

#### Answer

```
7    (a is incremented to 7)
6    (b gets the old value of a, which is 6)
7    (a is incremented to 7)
7    (b gets the new value of a, which is 7)
```

---

### Question 2.16.1

Can different types of numeric values be used together in a computation?

#### Answer

Yes. Java automatically converts the smaller-range type to the larger-range type before performing the operation (widening).

---

### Question 2.16.2

What does an explicit casting from a `double` to an `int` do with the fractional part of the `double` value? Does casting change the variable being cast?

#### Answer

Casting from `double` to `int` **truncates** the fractional part (no rounding). Casting does **not** change the variable being cast.

---

### Question 2.16.3

Show the following output:

```java
float f = 12.5F;
int i = (int)f;
System.out.println("f is " + f);
System.out.println("i is " + i);
```

#### Answer

```
f is 12.5
i is 12
```

---

### Question 2.16.4

If you change `(int)(tax * 100) / 100.0` to `(int)(tax * 100) / 100` in line 11 in Listing 2.8, what will be the output for the input purchase amount of `197.556`?

#### Answer

If `tax = 197.556 * 0.06 = 11.85336`, then:

- `(int)(tax * 100) / 100` = `(int)(1185.336) / 100` = `1185 / 100` = `11` (integer division!)
  Output: `Sales tax is $11` (loses the decimal part).

---

### Question 2.16.5

Show the output of the following code:

```java
double amount = 5;
System.out.println(amount / 2);
System.out.println(5 / 2);
```

#### Answer

```
2.5   (double / int = double)
2     (int / int = int, truncation)
```

---

### Question 2.16.6

Write an expression that rounds up a `double` value in variable `d` to an integer.

#### Answer

```java
(int)(d + 0.5)
```

Example: If `d = 3.4`, `(int)(3.4 + 0.5) = (int)(3.9) = 3`. If `d = 3.6`, `(int)(3.6 + 0.5) = (int)(4.1) = 4`.

---

### Question 2.17.1

How would you write the following arithmetic expression?
$$ \frac{-b + \sqrt{b^2 - 4ac}}{2a} $$

#### Answer

```java
(-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)
```

---

### Question 2.18.1

Show the output of Listing 2.10 with the input value **1.99**. Why does the program produce an incorrect result for the input **10.03**?

#### Answer

With input `1.99`:

```
Your amount 1.99 consists of
 1 dollars
 3 quarters
 2 dimes
 0 nickels
 4 pennies
```

For input `10.03`, the problem is **loss of precision** when casting a `double` amount to `int`: `10.03 * 100 = 1002.9999999999999` (due to floating-point imprecision), so `(int)(10.03 * 100) = 1002` instead of `1003`, causing the program to display 10 dollars and 2 pennies instead of 3 pennies.

---

### Question 2.19.1

Can you declare a variable as `int` and later redeclare it as `double`?

#### Answer

No. Once a variable is declared with a type, it cannot be redeclared with a different type in the same scope.

---

### Question 2.19.2

What is an integer overflow? Can floating-point operations cause overflow?

#### Answer

**Integer overflow** occurs when a value assigned to a variable is too large (or too small) to be stored in that type. Yes, floating-point operations can also cause overflow (e.g., a value too large for a `float` or `double`), and underflow (value too close to zero).

---

### Question 2.19.3

Will overflow cause a runtime error?

#### Answer

For integers, overflow does **not** cause a runtime error in Java — it silently wraps around. For floating-point, overflow results in `Infinity` and underflow results in `0.0`.

---

### Question 2.19.4

What is a round-off error? Can integer operations cause round-off errors? Can floating-point operations cause round-off errors?

#### Answer

A **round-off error** is the difference between the calculated approximation of a number and its exact mathematical value. Integer operations do **not** cause round-off errors (integers are stored precisely). Floating-point operations **do** cause round-off errors due to limited precision.

---

## Programming Exercises

### Section 2.2–2.13

### Exercise 2.1

(_Convert mile to kilometer_) Write a program that reads a mile in a **double** value from the console, converts it to kilometers, and displays the result. 1 mile = 1.6 kilometers.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_1 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter miles: ");
    double miles = input.nextDouble();
    double km = miles * 1.6;
    System.out.println(miles + " miles is " + km + " kilometers");
  }
}
```

---

### Exercise 2.2

(_Compute the volume of a triangle_) Write a program that reads in the length of sides of an equilateral triangle and computes the area and volume using:
$$ area = \frac{\sqrt{3}}{4} (\text{length of sides})^2 $$
$$ volume = area \times length $$

#### Answer

```java
import java.util.Scanner;

public class Exercise2_2 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter length of the sides and height of the equilateral triangle: ");
    double length = input.nextDouble();
    double area = (Math.sqrt(3) / 4) * length * length;
    double volume = area * length;
    System.out.println("The area is " + (int)(area * 100) / 100.0);
    System.out.println("The volume of the Triangular prism is " + (int)(volume * 100) / 100.0);
  }
}
```

---

### Exercise 2.3

(_Convert meters into feet_) Write a program that reads a number in meters, converts it to feet. One meter is 3.2786 feet.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_3 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a value for meter: ");
    double meters = input.nextDouble();
    double feet = meters * 3.2786;
    System.out.println(meters + " meters is " + feet + " feet");
  }
}
```

---

### Exercise 2.4

(_Convert square meter into ping_) Write a program that converts square meter into ping. One square meter is 0.3025 ping.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_4 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a number in square meters: ");
    double squareMeters = input.nextDouble();
    double ping = squareMeters * 0.3025;
    System.out.println(squareMeters + " square meters is " + ping + " pings");
  }
}
```

---

### Exercise 2.5 \*

(_Financial application: calculate tips_) Write a program that reads the subtotal and the gratuity rate and then computes the gratuity and total.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_5 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the subtotal and a gratuity rate: ");
    double subtotal = input.nextDouble();
    double gratuityRate = input.nextDouble();
    double gratuity = subtotal * gratuityRate / 100;
    double total = subtotal + gratuity;
    System.out.println("The gratuity is $" + gratuity + " and total is $" + total);
  }
}
```

---

### Exercise 2.6 \*\*

(_Sum the digits in an integer_) Write a program that reads an integer between 0 and 1000 and adds all the digits in the integer.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_6 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a number between 0 and 1000: ");
    int number = input.nextInt();
    int sum = 0;
    int temp = number;
    sum += temp % 10;
    temp /= 10;
    sum += temp % 10;
    temp /= 10;
    sum += temp;
    System.out.println("The sum of the digits is " + sum);
  }
}
```

---

### Exercise 2.7 \*

(_Find the number of years_) Write a program that prompts the user to enter the minutes and displays the maximum number of years and remaining days.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_7 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the number of minutes: ");
    int minutes = input.nextInt();
    int days = minutes / (60 * 24);
    int years = days / 365;
    int remainingDays = days % 365;
    System.out.println(minutes + " minutes is approximately " + years + " years and " + remainingDays + " days");
  }
}
```

---

### Exercise 2.8 \*

(_Current time_) Revise Listing 2.7 to prompt the user to enter the time zone offset to GMT and display the time in the specified time zone.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_8 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the time zone offset to GMT: ");
    int offset = input.nextInt();
    long totalMilliseconds = System.currentTimeMillis();
    long totalSeconds = totalMilliseconds / 1000;
    long currentSecond = totalSeconds % 60;
    long totalMinutes = totalSeconds / 60;
    long currentMinute = totalMinutes % 60;
    long totalHours = totalMinutes / 60;
    long currentHour = (totalHours + offset) % 24;
    System.out.println("The current time is " + currentHour + ":" + currentMinute + ":" + currentSecond);
  }
}
```

---

### Exercise 2.9

(_Physics: Motion_) Write a program that prompts the user to enter initial velocity u, time t, and acceleration a, and returns the distance covered: $s = ut + \frac{1}{2}at^2$.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_9 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter u, t, and a: ");
    double u = input.nextDouble();
    double t = input.nextDouble();
    double a = input.nextDouble();
    double s = u * t + 0.5 * a * t * t;
    System.out.println("The distance covered is " + s);
  }
}
```

---

### Exercise 2.10

(_Science: calculating energy_) Write a program that calculates the energy needed to heat water: $Q = M \times (\text{finalTemperature} - \text{initialTemperature}) \times 4184$.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_10 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the amount of water in kilograms: ");
    double M = input.nextDouble();
    System.out.print("Enter the initial temperature: ");
    double initialTemp = input.nextDouble();
    System.out.print("Enter the final temperature: ");
    double finalTemp = input.nextDouble();
    double Q = M * (finalTemp - initialTemp) * 4184;
    System.out.println("The energy needed is " + Q);
  }
}
```

---

### Exercise 2.11

(_Population projection_) Rewrite Programming Exercise 1.11 to prompt the user to enter the number of years and display the population after that many years.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_11 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the number of years: ");
    int years = input.nextInt();
    int currentPopulation = 312032486;
    int secondsPerYear = 365 * 24 * 60 * 60;
    int births = secondsPerYear / 7;
    int deaths = secondsPerYear / 13;
    int immigrants = secondsPerYear / 45;
    int annualChange = births + immigrants - deaths;
    int futurePopulation = currentPopulation + annualChange * years;
    System.out.println("The population in " + years + " years is " + futurePopulation);
  }
}
```

---

### Exercise 2.12

(_Physics: finding runway length_) Given an airplane's acceleration a and take-off speed v, compute the minimum runway length: $\text{length} = \frac{v^2}{2a}$.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_12 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter speed and acceleration: ");
    double v = input.nextDouble();
    double a = input.nextDouble();
    double length = v * v / (2 * a);
    System.out.println("The minimum runway length for this airplane is " + length);
  }
}
```

---

### Exercise 2.13 \*\*

(_Financial application: compound value_) Suppose you save $100 each month with annual interest rate 3.75%. Display the account value after the sixth month.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_13 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the monthly saving amount: ");
    double monthlyAmount = input.nextDouble();
    double monthlyRate = 0.0375 / 12;
    double accountValue = 0;
    accountValue = (accountValue + monthlyAmount) * (1 + monthlyRate);
    System.out.println("After the first month, the account value is " + accountValue);
    accountValue = (accountValue + monthlyAmount) * (1 + monthlyRate);
    System.out.println("After the second month, the account value is " + accountValue);
    accountValue = (accountValue + monthlyAmount) * (1 + monthlyRate);
    System.out.println("After the third month, the account value is " + accountValue);
    accountValue = (accountValue + monthlyAmount) * (1 + monthlyRate);
    accountValue = (accountValue + monthlyAmount) * (1 + monthlyRate);
    accountValue = (accountValue + monthlyAmount) * (1 + monthlyRate);
    System.out.println("After the sixth month, the account value is " + accountValue);
  }
}
```

---

### Exercise 2.14 \*

(_Health application: computing BMI_) Write a program that prompts the user to enter weight in pounds and height in inches and displays the BMI.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_14 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter weight in pounds: ");
    double weight = input.nextDouble();
    System.out.print("Enter height in inches: ");
    double height = input.nextDouble();
    double weightKg = weight * 0.45359237;
    double heightM = height * 0.0254;
    double bmi = weightKg / (heightM * heightM);
    System.out.println("BMI is " + bmi);
  }
}
```

---

### Exercise 2.15

(_Geometry: distance of two points_) Write a program that computes the distance between two points: $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_15 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter x1 and y1: ");
    double x1 = input.nextDouble();
    double y1 = input.nextDouble();
    System.out.print("Enter x2 and y2: ");
    double x2 = input.nextDouble();
    double y2 = input.nextDouble();
    double distance = Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2), 0.5);
    System.out.println("The distance between the two points is " + distance);
  }
}
```

---

### Exercise 2.16

(_Geometry: area of a hexagon_) Write a program that computes the area of a hexagon: $\text{Area} = \frac{3\sqrt{3}}{2}s^2$.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_16 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the length of the side: ");
    double s = input.nextDouble();
    double area = (3 * Math.sqrt(3) / 2) * s * s;
    System.out.println("The area of the hexagon is " + (int)(area * 100) / 100.0);
  }
}
```

---

### Exercise 2.17 \*

(_Science: wind-chill temperature_) Compute the wind-chill temperature: $t_{wc} = 35.74 + 0.6215t_a - 35.75v^{0.16} + 0.4275t_av^{0.16}$.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_17 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the temperature in Fahrenheit between -58°F and 41°F: ");
    double temp = input.nextDouble();
    System.out.print("Enter the wind speed (>= 2) in miles per hour: ");
    double windSpeed = input.nextDouble();
    double windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    System.out.println("The wind chill index is " + windChill);
  }
}
```

---

### Exercise 2.18

(_Print a table_) Write a program that displays the following table. Calculate the middle point of two points.

#### Answer

```java
public class Exercise2_18 {
  public static void main(String[] args) {
    System.out.println("a       b       Middle Point");
    System.out.println("(0, 0)  (2, 1)  (1.0, 0.5)");
    System.out.println("(1, 4)  (4, 2)  (2.5, 3.0)");
    System.out.println("(2, 7)  (6, 3)  (4.0, 5.0)");
    System.out.println("(3, 9)  (10, 5) (6.5, 7.0)");
    System.out.println("(4, 11) (12, 7) (8.0, 9.0)");
  }
}
```

Alternatively, compute the middle points:

```java
public class Exercise2_18 {
  public static void main(String[] args) {
    System.out.println("a       b       Middle Point");
    int[][] points = {{0,0,2,1}, {1,4,4,2}, {2,7,6,3}, {3,9,10,5}, {4,11,12,7}};
    for (int[] p : points) {
      double mx = (p[0] + p[2]) / 2.0;
      double my = (p[1] + p[3]) / 2.0;
      System.out.println("(" + p[0] + ", " + p[1] + ")  (" + p[2] + ", " + p[3] + ")  (" + mx + ", " + my + ")");
    }
  }
}
```

---

### Exercise 2.19 \*

(_Geometry: area of a triangle_) Compute the area of a triangle using three points and Heron's formula.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_19 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the coordinates of three points separated by spaces (x1 y1 x2 y2 x3 y3): ");
    double x1 = input.nextDouble(), y1 = input.nextDouble();
    double x2 = input.nextDouble(), y2 = input.nextDouble();
    double x3 = input.nextDouble(), y3 = input.nextDouble();
    double side1 = Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2), 0.5);
    double side2 = Math.pow(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2), 0.5);
    double side3 = Math.pow(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2), 0.5);
    double s = (side1 + side2 + side3) / 2;
    double area = Math.pow(s * (s - side1) * (s - side2) * (s - side3), 0.5);
    System.out.println("The area of the triangle is " + (int)(area * 10) / 10.0);
  }
}
```

---

### Section 2.13–2.18

### Exercise 2.20 \*

(_Financial application: calculate interest_) Compute interest: $\text{interest} = \text{balance} \times (\text{annualInterestRate} / 1200)$.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_20 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter balance and interest rate (e.g., 3 for 3%): ");
    double balance = input.nextDouble();
    double annualRate = input.nextDouble();
    double interest = balance * (annualRate / 1200);
    System.out.println("The interest is " + interest);
  }
}
```

---

### Exercise 2.21 \*

(_Financial application: calculate future investment value_)
$\text{futureInvestmentValue} = \text{investmentAmount} \times (1 + \text{monthlyInterestRate})^{\text{numberOfYears} \times 12}$

#### Answer

```java
import java.util.Scanner;

public class Exercise2_21 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter investment amount: ");
    double amount = input.nextDouble();
    System.out.print("Enter annual interest rate in percentage: ");
    double annualRate = input.nextDouble();
    System.out.print("Enter number of years: ");
    int years = input.nextInt();
    double monthlyRate = annualRate / 1200;
    double futureValue = amount * Math.pow(1 + monthlyRate, years * 12);
    System.out.println("Future value is $" + (int)(futureValue * 100) / 100.0);
  }
}
```

---

### Exercise 2.22 \*

(_Financial application: monetary units_) Rewrite Listing 2.10 to fix the loss of accuracy. Enter input as an integer representing cents.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_22 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter an amount as integer cents (e.g., 1156 for $11.56): ");
    int amount = input.nextInt();
    int dollars = amount / 100;
    int remaining = amount % 100;
    int quarters = remaining / 25;
    remaining %= 25;
    int dimes = remaining / 10;
    remaining %= 10;
    int nickels = remaining / 5;
    remaining %= 5;
    int pennies = remaining;
    System.out.println("Your amount " + (amount / 100.0) + " consists of");
    System.out.println(" " + dollars + " dollars");
    System.out.println(" " + quarters + " quarters");
    System.out.println(" " + dimes + " dimes");
    System.out.println(" " + nickels + " nickels");
    System.out.println(" " + pennies + " pennies");
  }
}
```

---

### Exercise 2.23 \*

(_Cost of driving_) Write a program that computes the cost of a trip given distance, fuel efficiency, and price per gallon.

#### Answer

```java
import java.util.Scanner;

public class Exercise2_23 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the driving distance: ");
    double distance = input.nextDouble();
    System.out.print("Enter miles per gallon: ");
    double mpg = input.nextDouble();
    System.out.print("Enter price per gallon: ");
    double price = input.nextDouble();
    double cost = distance / mpg * price;
    System.out.println("The cost of driving is $" + (int)(cost * 100) / 100.0);
  }
}
```

---

# Chapter 3 — Selections

## CheckPoint

### Question 3.2.1

List six relational operators.

#### Answer

`<` (less than), `<=` (less than or equal to), `>` (greater than), `>=` (greater than or equal to), `==` (equal to), `!=` (not equal to)

---

### Question 3.2.2

Assuming x is 1, show the result of the following Boolean expressions:

```
(x > 0)
(x < 0)
(x != 0)
(x >= 0)
(x != 1)
```

#### Answer

```
(x > 0)   -> true
(x < 0)   -> false
(x != 0)  -> true
(x >= 0)  -> true
(x != 1)  -> false
```

---

### Question 3.2.3

Can the following conversions involving casting be allowed? Write a test program to verify it.

```java
boolean b = true;
i = (int)b;

int i = 1;
boolean b = (boolean)i;
```

#### Answer

**Neither is allowed.** Boolean values cannot be cast to or from numeric types. The Java compiler will report syntax errors.

---

### Question 3.3.1

Write an **if** statement that assigns **1** to **x** if **y** is greater than **0**.

#### Answer

```java
if (y > 0) {
  x = 1;
}
```

---

### Question 3.3.2

Write an **if** statement that increases pay by 3% if **score** is greater than **90**.

#### Answer

```java
if (score > 90) {
  pay = pay * 1.03;
}
```

---

### Question 3.3.3

What is wrong in the following code?

```java
if radius >= 0
{
  area = radius * radius * PI;
  System.out.println("The area for the circle of " +
    " radius " + radius + " is " + area);
}
```

#### Answer

The condition `radius >= 0` is **not enclosed in parentheses**. Correct: `if (radius >= 0)`.

---

### Question 3.4.1

Write an if statement that increases pay by 3% if score is greater than 90, otherwise increases pay by 1%.

#### Answer

```java
if (score > 90) {
  pay = pay * 1.03;
} else {
  pay = pay * 1.01;
}
```

---

### Question 3.4.2

What is the output of the code in (a) and (b) if number is 30? What if number is 35?

```java
if (number % 2 == 0)              if (number % 2 == 0)
  System.out.println(number         System.out.println(number
    + "is even.");                    + "is even.");
                                  else
System.out.println(number         System.out.println(number
  + "is odd");                      + "is odd");
         (a)                               (b)
```

#### Answer

**Number = 30:**

- (a): `30is even.` then `30is odd` (both statements execute; the `if` only controls the first line, the second line always runs)
- (b): `30is even.` (else clause is skipped)

**Number = 35:**

- (a): `35is odd` (only the second line runs; the if condition is false, first line not executed)
- (b): `35is odd` (else clause executes)

---

### Question 3.5.1

Suppose `x = 3` and `y = 2`; show the output, if any, of the following code. What is the output if `x = 3` and `y = 4`? What is the output if `x = 2` and `y = 2`?

```java
if (x > 2) {
  if (y > 2) {
    z = x + y;
    System.out.println("z is " + z);
  }
}
else
  System.out.println("x is " + x);
```

#### Answer

- **x = 3, y = 2**: No output (x > 2 is true, but y > 2 is false, so inner block not executed)
- **x = 3, y = 4**: `z is 7` (both conditions true)
- **x = 2, y = 2**: `x is 2` (x > 2 is false, else branch executes)

---

### Question 3.5.2

Suppose `x = 2` and `y = 3`. Show the output, if any, of the following code. What is the output if `x = 3` and `y = 2`? What is the output if `x = 3` and `y = 3`?

```java
if (x > 2)
  if (y > 2) {
    int z = x + y;
    System.out.println("z is " + z);
  }
else
  System.out.println("x is " + x);
```

#### Answer

- **x = 2, y = 3**: `x is 2` (the `else` matches the second `if` due to dangling else; x > 2 is false, but the outer `if` has no else, so... Actually, the else is attached to the inner `if`. Since x > 2 is false, we skip the entire inner if-else, so nothing is printed.)
- **x = 3, y = 2**: No output (x > 2 true, y > 2 false, inner if-else skips to else but nothing is printed since no statement in else)
- **x = 3, y = 3**: `z is 6`

---

### Question 3.5.3

What is wrong in the following code?

```java
if (score >= 60)
  System.out.println("D");
else if (score >= 70)
  System.out.println("C");
else if (score >= 80)
  System.out.println("B");
else if (score >= 90)
  System.out.println("A");
else
  System.out.println("F");
```

#### Answer

The conditions are in the wrong order. Since `score >= 60` is checked first, any score >= 60 gets "D". The conditions should be checked from highest to lowest:

```java
if (score >= 90) System.out.println("A");
else if (score >= 80) System.out.println("B");
else if (score >= 70) System.out.println("C");
else if (score >= 60) System.out.println("D");
else System.out.println("F");
```

---

### Question 3.6.1

Which of the following statements are equivalent? Which ones are correctly indented?

#### Answer

The four code snippets (a), (b), (c), (d) are all **equivalent** in terms of logic — they all represent the same nested if-else structure. Snippet (b) is the **best indented** and most readable because it uses braces and proper alignment.

---

### Question 3.6.2

Rewrite the following statement using a Boolean expression:

```java
if (count % 10 == 0)
    newLine = true;
else
    newLine = false;
```

#### Answer

```java
boolean newLine = count % 10 == 0;
```

---

### Question 3.6.3

Are the following statements correct? Which one is better?

```java
if (age < 16)
  System.out.println("Cannot get a driver's license");
if (age >= 16)
  System.out.println("Can get a driver's license");
```

(a)

```java
if (age < 16)
  System.out.println("Cannot get a driver's license");
else
  System.out.println("Can get a driver's license");
```

(b)

#### Answer

Both are correct. Version **(b)** is better because it uses an `if-else` structure, which is more efficient (only one condition is checked) and avoids duplication of logic.

---

### Question 3.6.4

What is the output of the following code if **number** is **14**, **15**, or **30**?

```java
if (number % 2 == 0)
  System.out.println(number + " is even");
if (number % 5 == 0)
  System.out.println(number + " is multiple of 5");
```

(a)

```java
if (number % 2 == 0)
  System.out.println(number + " is even");
else if (number % 5 == 0)
  System.out.println(number + " is multiple of 5");
```

(b)

#### Answer

**For (a):**

- number = 14: `14 is even`
- number = 15: `15 is multiple of 5`
- number = 30: `30 is even` then `30 is multiple of 5` (both conditions true)

**For (b):**

- number = 14: `14 is even`
- number = 15: `15 is multiple of 5`
- number = 30: `30 is even` (only the first matching condition executes)

---

### Question 3.7.1

Which of the following is a possible output from invoking `Math.random()`?
`323.4, 0.5, 34, 1.0, 0.0, 0.234`

#### Answer

`Math.random()` returns a value $d$ such that $0.0 \le d < 1.0$.
Possible outputs: **0.5, 0.0, 0.234**
Not possible: 323.4 (>= 1), 34 (>= 1), 1.0 (not < 1.0)

---

### Question 3.7.2

a. How do you generate a random integer **i** such that $0 \le i < 20$?
b. How do you generate a random integer **i** such that $10 \le i < 20$?
c. How do you generate a random integer **i** such that $10 \le i \le 50$?
d. Write an expression that returns **0** or **1** randomly.

#### Answer

a. `(int)(Math.random() * 20)`
b. `(int)(Math.random() * 10) + 10`
c. `(int)(Math.random() * 41) + 10`
d. `(int)(Math.random() * 2)` or `(int)(Math.random() + 0.5)`

---

### Question 3.9.1

Are the following two statements equivalent?

```java
if (income <= 10000)
  tax = income * 0.1;
else if (income <= 20000)
  tax = 1000 + (income - 10000) * 0.15;
```

```java
if (income <= 10000)
  tax = income * 0.1;
else if (income > 10000 && income <= 20000)
  tax = 1000 + (income - 10000) * 0.15;
```

#### Answer

**Yes, they are equivalent.** The `else if` in the first version already implies `income > 10000` because the first condition `income <= 10000` failed. The second version explicitly checks `income > 10000 && income <= 20000`, which is redundant but logically the same.

---

### Question 3.10.1

Assuming that `x` is `1`, show the result of the following Boolean expressions:

```java
(true) && (3 > 4)
!(x > 0) && (x > 0)
(x > 0) || (x < 0)
(x != 0) || (x == 0)
(x >= 0) || (x < 0)
(x != 1) == !(x == 1)
```

#### Answer

```java
(true) && (3 > 4)        -> false  (true && false = false)
!(x > 0) && (x > 0)     -> false  (false && true = false)
(x > 0) || (x < 0)      -> true   (true || false = true)
(x != 0) || (x == 0)    -> true   (true || false = true)
(x >= 0) || (x < 0)     -> true   (true || false = true)
(x != 1) == !(x == 1)   -> true   (false == true -> wait: x != 1 is false, !(x == 1) is !(true) = false, so false == false = true)
```

---

### Question 3.10.2

(a) Write a Boolean expression that evaluates to **true** if a number stored in variable `num` is between `1` and `100`.
(b) Write a Boolean expression that evaluates to **true** if a number stored in variable `num` is between `1` and `100` or the number is negative.

#### Answer

a. `num > 1 && num < 100` (assuming exclusive of boundaries) or `num >= 1 && num <= 100` (inclusive)
b. `(num >= 1 && num <= 100) || num < 0`

---

### Question 3.10.3

(a) Write a Boolean expression for $|x - 5| < 4.5$.
(b) Write a Boolean expression for $|x - 5| > 4.5$.

#### Answer

a. `x > 0.5 && x < 9.5` (since $|x - 5| < 4.5$ means $0.5 < x < 9.5$)
Or: `Math.abs(x - 5) < 4.5`
b. `Math.abs(x - 5) > 4.5`
Or: `x < 0.5 || x > 9.5`

---

### Question 3.10.4

Assume `x` and `y` are `int` type. Which of the following are legal Java expressions?

```java
x > y > 0
x = y && y
x /= y
x or y
x and y
(x != 0) || (x = 0)
```

#### Answer

- `x > y > 0` — **Illegal** (x > y evaluates to boolean, which cannot be compared to int)
- `x = y && y` — **Illegal** (assignment has lower precedence than &&; this is parsed as `x = (y && y)`, but y is int, not boolean)
- `x /= y` — **Legal** (assignment operator)
- `x or y` — **Illegal** (Java doesn't have `or` keyword; use `||`)
- `x and y` — **Illegal** (Java doesn't have `and` keyword; use `&&`)
- `(x != 0) || (x = 0)` — **Illegal** (`x = 0` is an assignment expression that evaluates to int 0, but `||` requires boolean operands both sides)

---

### Question 3.10.5

Are the following two expressions the same?
(a) `x % 2 == 0 && x % 3 == 0`
(b) `x % 6 == 0`

#### Answer

**Yes, they are equivalent.** If a number is divisible by both 2 and 3, it is divisible by their LCM, which is 6, and vice versa.

---

### Question 3.10.6

What is the value of the expression `x >= 50 && x <= 100` if `x` is `45`, `67`, or `101`?

#### Answer

- x = 45: `false` (45 < 50)
- x = 67: `true` (67 >= 50 && 67 <= 100)
- x = 101: `false` (101 > 100)

---

### Question 3.10.7

Suppose, when you run the following program, you enter the input `2 3 6` from the console. What is the output?

```java
public class Test {
  public static void main(String[] args) {
    java.util.Scanner input = new java.util.Scanner(System.in);
    double x = input.nextDouble();
    double y = input.nextDouble();
    double z = input.nextDouble();

    System.out.println("(x < y && y < z) is " + (x < y && y < z));
    System.out.println("(x < y || y < z) is " + (x < y || y < z));
    System.out.println("!(x < y) is " + !(x < y));
    System.out.println("(x + y < z) is " + (x + y < z));
    System.out.println("(x + y > z) is " + (x + y > z));
  }
}
```

#### Answer

Input: x=2, y=3, z=6

```
(x < y && y < z) is true    (2 < 3 && 3 < 6 = true && true = true)
(x < y || y < z) is true    (true || true = true)
!(x < y) is false           (!true = false)
(x + y < z) is false        (5 < 6 = false -> actually 2+3=5, 5<6=true. Wait: 5 < 6 is true!)
(x + y > z) is true         (5 > 6 is false)
```

Correction:

```
(x + y < z) is true     (5 < 6 = true)
(x + y > z) is false    (5 > 6 = false)
```

---

### Question 3.10.8

Write a Boolean expression that evaluates to **true** if `age` is greater than `13` and less than `18`.

#### Answer

```java
age > 13 && age < 18
```

---

### Question 3.10.9

Write a Boolean expression that evaluates to **true** if **weight** is greater than **50** pounds or height is greater than **60** inches.

#### Answer

```java
weight > 50 || height > 60
```

---

### Question 3.10.10

Write a Boolean expression that evaluates to **true** if **weight** is greater than **50** pounds and height is greater than **60** inches.

#### Answer

```java
weight > 50 && height > 60
```

---

### Question 3.10.11

Write a Boolean expression that evaluates to **true** if either **weight** is greater than **50** pounds or height is greater than **60** inches, but not both.

#### Answer

```java
weight > 50 ^ height > 60
```

Or: `(weight > 50) != (height > 60)`

---

### Question 3.11.1

How many days in the February of a leap year? Which of the following is a leap year? 500, 1000, 2000, 2016, and 2020?

#### Answer

February in a leap year has **29** days.

- 500: Not a leap year (divisible by 4 but also by 100, not by 400)
- 1000: Not a leap year
- **2000**: Leap year (divisible by 400)
- **2016**: Leap year (divisible by 4, not by 100)
- **2020**: Leap year (divisible by 4, not by 100)

---

### Question 3.12.1

What happens if you enter an integer as `05`?

#### Answer

In Java, `05` is interpreted as an **octal** number (because of the leading 0), which is `5` in decimal. However, when entered as input from the keyboard using `Scanner.nextInt()`, `05` is read correctly as the integer `5`.

---

### Question 3.13.1

What data types are required for a `switch` variable? If the keyword `break` is not used after a case is processed, what is the next statement to be executed? Can you convert a `switch` statement to an equivalent `if` statement, or vice versa? What are the advantages of using a `switch` statement?

#### Answer

The switch expression must be of type `char`, `byte`, `short`, `int`, or `String`.
If `break` is omitted, execution **falls through** to the next case (fall-through behavior).
Yes, `switch` can be converted to `if-else` and vice versa (when the condition is based on a single variable's value).
**Advantages of `switch`**: More readable than a long chain of `if-else` statements for multiple discrete values.

---

### Question 3.13.2

What is `y` after the following `switch` statement is executed? Rewrite the code using an `if-else` statement.

```java
x = 3; y = 3;
switch (x + 3) {
  case 6: y = 1;
  default: y += 1;
}
```

#### Answer

`x + 3 = 6`, so `case 6` matches. Since there's no `break`, it falls through to `default`. So `y = 1` then `y += 1`. Final value of `y` = **2**.

If-else equivalent:

```java
x = 3; y = 3;
if (x + 3 == 6) {
  y = 1;
  y += 1;
} else {
  y += 1;
}
```

---

### Question 3.13.3

What is `x` after the following `if-else` statement is executed? Use a `switch` statement to rewrite it.

```java
int x = 1, a = 3;
if (a == 1)
  x += 5;
else if (a == 2)
  x += 10;
else if (a == 3)
  x += 16;
else if (a == 4)
  x += 34;
```

#### Answer

Since `a = 3`, we execute `x += 16`. Final value of `x` = **17**.

Switch equivalent:

```java
int x = 1, a = 3;
switch (a) {
  case 1: x += 5; break;
  case 2: x += 10; break;
  case 3: x += 16; break;
  case 4: x += 34; break;
}
```

---

### Question 3.13.4

Write a `switch` statement that displays Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, if `day` is 0, 1, 2, 3, 4, 5, 6, respectively.

#### Answer

```java
switch (day) {
  case 0: System.out.println("Sunday"); break;
  case 1: System.out.println("Monday"); break;
  case 2: System.out.println("Tuesday"); break;
  case 3: System.out.println("Wednesday"); break;
  case 4: System.out.println("Thursday"); break;
  case 5: System.out.println("Friday"); break;
  case 6: System.out.println("Saturday"); break;
}
```

---

### Question 3.13.5

Rewrite Listing 3.9 (ChineseZodiac.java) using an `if-else` statement.

#### Answer

```java
import java.util.Scanner;

public class ChineseZodiacIfElse {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a year: ");
    int year = input.nextInt();
    int animal = year % 12;
    if (animal == 0) System.out.println("monkey");
    else if (animal == 1) System.out.println("rooster");
    else if (animal == 2) System.out.println("dog");
    else if (animal == 3) System.out.println("pig");
    else if (animal == 4) System.out.println("rat");
    else if (animal == 5) System.out.println("ox");
    else if (animal == 6) System.out.println("tiger");
    else if (animal == 7) System.out.println("rabbit");
    else if (animal == 8) System.out.println("dragon");
    else if (animal == 9) System.out.println("snake");
    else if (animal == 10) System.out.println("horse");
    else if (animal == 11) System.out.println("sheep");
  }
}
```

---

### Question 3.14.1

Suppose when you run the following program, you enter the input `2 3 6` from the console. What is the output?

```java
public class Test {
  public static void main(String[] args) {
    java.util.Scanner input = new java.util.Scanner(System.in);
    double x = input.nextDouble();
    double y = input.nextDouble();
    double z = input.nextDouble();
    System.out.println((x < y && y < z)? "sorted": "not sorted");
  }
}
```

#### Answer

x=2, y=3, z=6. `(2 < 3 && 3 < 6)` = `true`. Output: **sorted**

---

### Question 3.14.2

Rewrite the following `if` statements using the conditional operator.

```java
if (ages >= 16)
  ticketPrice = 20;
else
  ticketPrice = 10;
```

#### Answer

```java
ticketPrice = (ages >= 16) ? 20 : 10;
```

---

### Question 3.14.3

Rewrite the following codes using `if-else` statements.
a. `score = (x > 10) ? 3 * scale : 4 * scale;`
b. `tax = (income > 10000) ? income * 0.2 : income * 0.17 + 1000;`
c. `System.out.println((number % 3 == 0) ? i : j);`

#### Answer

```java
// a
if (x > 10)
  score = 3 * scale;
else
  score = 4 * scale;

// b
if (income > 10000)
  tax = income * 0.2;
else
  tax = income * 0.17 + 1000;

// c
if (number % 3 == 0)
  System.out.println(i);
else
  System.out.println(j);
```

---

### Question 3.14.4

Write an expression using a conditional operator that returns randomly -1 or 1.

#### Answer

```java
(int)(Math.random() * 2) == 0 ? -1 : 1
```

Or simpler:

```java
Math.random() < 0.5 ? -1 : 1
```

---

### Question 3.15.1

List the precedence order of the Boolean operators. Evaluate the following expressions:

```
true || true && false
true && true || false
```

#### Answer

Precedence order: `!` (highest), then `^`, then `&&`, then `||` (lowest).

```
true || true && false  -> true || false -> true
true && true || false  -> true || false -> true
```

---

### Question 3.15.2

True or false? All the binary operators except **=** are left associative.

#### Answer

**True.** All binary operators except assignment operators are left associative. Assignment operators are right associative.

---

### Question 3.15.3

Evaluate the following expressions:

```
2 * 2 - 3 > 2 && 4 - 2 > 5
2 * 2 - 3 > 2 || 4 - 2 > 5
```

#### Answer

```
2 * 2 - 3 > 2 && 4 - 2 > 5
-> 4 - 3 > 2 && 2 > 5
-> 1 > 2 && 2 > 5
-> false && false -> false

2 * 2 - 3 > 2 || 4 - 2 > 5
-> false || false -> false
```

---

### Question 3.15.4

Is `(x > 0 && x < 10)` the same as `((x > 0) && (x < 10))`?
Is `(x > 0 || x < 10)` the same as `((x > 0) || (x < 10))`?
Is `(x > 0 || x < 10 && y < 0)` the same as `(x > 0 || (x < 10 && y < 0))`?

#### Answer

- `(x > 0 && x < 10)` is the same as `((x > 0) && (x < 10))` — **Yes**, parentheses around individual comparisons are redundant since `>` has higher precedence than `&&`.
- `(x > 0 || x < 10)` is the same as `((x > 0) || (x < 10))` — **Yes**, same reasoning.
- `(x > 0 || x < 10 && y < 0)` is the same as `(x > 0 || (x < 10 && y < 0))` — **Yes**, because `&&` has higher precedence than `||`.

---

## Programming Exercises

### Section 3.2

### Exercise 3.1 \*

(_Algebra: solve quadratic equations_) Write a program that prompts the user to enter values for $a$, $b$, and $c$ and displays the result based on the discriminant.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_1 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a, b, c: ");
    double a = input.nextDouble();
    double b = input.nextDouble();
    double c = input.nextDouble();
    double discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
      double r1 = (-b + Math.pow(discriminant, 0.5)) / (2 * a);
      double r2 = (-b - Math.pow(discriminant, 0.5)) / (2 * a);
      System.out.println("The equation has two roots " + r1 + " and " + r2);
    } else if (discriminant == 0) {
      double r1 = -b / (2 * a);
      System.out.println("The equation has one root " + r1);
    } else {
      System.out.println("The equation has no real roots");
    }
  }
}
```

---

### Exercise 3.2

(_Game: multiply three numbers_) Revise AdditionQuiz.java to generate three single-digit integers and prompt the user to enter the multiplication of these three integers.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_2 {
  public static void main(String[] args) {
    int number1 = (int)(System.currentTimeMillis() % 10);
    int number2 = (int)(System.currentTimeMillis() / 10 % 10);
    int number3 = (int)(System.currentTimeMillis() / 100 % 10);
    Scanner input = new Scanner(System.in);
    System.out.print("What is " + number1 + " * " + number2 + " * " + number3 + "? ");
    int answer = input.nextInt();
    System.out.println(number1 + " * " + number2 + " * " + number3 + " = " + answer + " is " + (number1 * number2 * number3 == answer));
  }
}
```

---

### Section 3.3–3.7

### Exercise 3.3

(_Algebra: solve 2 × 2 linear equations_) Write a program that uses Cramer's rule to solve $ax + by = e$, $cx + dy = f$.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_3 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a, b, c, d, e, f: ");
    double a = input.nextDouble();
    double b = input.nextDouble();
    double c = input.nextDouble();
    double d = input.nextDouble();
    double e = input.nextDouble();
    double f = input.nextDouble();
    double det = a * d - b * c;
    if (det == 0) {
      System.out.println("The equation has no solution");
    } else {
      double x = (e * d - b * f) / det;
      double y = (a * f - e * c) / det;
      System.out.println("x is " + x + " and y is " + y);
    }
  }
}
```

---

### Exercise 3.4

(_Random Color_) Write a program that randomly generates an integer between 1 and 7 and displays the name of a color in the rainbow: violet, indigo, blue, green, yellow, orange, red.

#### Answer

```java
public class Exercise3_4 {
  public static void main(String[] args) {
    int color = (int)(Math.random() * 7) + 1;
    switch (color) {
      case 1: System.out.println("Violet"); break;
      case 2: System.out.println("Indigo"); break;
      case 3: System.out.println("Blue"); break;
      case 4: System.out.println("Green"); break;
      case 5: System.out.println("Yellow"); break;
      case 6: System.out.println("Orange"); break;
      case 7: System.out.println("Red"); break;
    }
  }
}
```

---

### Exercise 3.5

(_Find future dates_) Prompt user for today's day (0=Sunday, 6=Saturday) and number of days after today; display the future day.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_5 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter today's day (0=Sun,1=Mon,...,6=Sat): ");
    int today = input.nextInt();
    System.out.print("Enter the number of days elapsed since today: ");
    int elapsed = input.nextInt();
    int futureDay = (today + elapsed) % 7;
    String[] days = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
    System.out.println("Today is " + days[today] + " and the future day is " + days[futureDay]);
  }
}
```

---

### Exercise 3.6

(_Health application: BMI_) Revise BMI program to let user enter weight, feet, and inches.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_6 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter weight in pounds: ");
    double weight = input.nextDouble();
    System.out.print("Enter feet: ");
    double feet = input.nextDouble();
    System.out.print("Enter inches: ");
    double inches = input.nextDouble();
    double height = feet * 12 + inches;
    double weightKg = weight * 0.45359237;
    double heightM = height * 0.0254;
    double bmi = weightKg / (heightM * heightM);
    System.out.println("BMI is " + bmi);
    if (bmi < 18.5) System.out.println("Underweight");
    else if (bmi < 25) System.out.println("Normal");
    else if (bmi < 30) System.out.println("Overweight");
    else System.out.println("Obese");
  }
}
```

---

### Exercise 3.7

(_Financial application: monetary units_) Modify ComputeChange.java to display nonzero denominations only, using singular words for single units.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_7 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter an amount in double, for example 11.56: ");
    double amount = input.nextDouble();
    int remainingAmount = (int)(amount * 100);
    int dollars = remainingAmount / 100;
    remainingAmount %= 100;
    int quarters = remainingAmount / 25;
    remainingAmount %= 25;
    int dimes = remainingAmount / 10;
    remainingAmount %= 10;
    int nickels = remainingAmount / 5;
    remainingAmount %= 5;
    int pennies = remainingAmount;

    System.out.println("Your amount " + amount + " consists of");
    if (dollars > 0) System.out.println(" " + dollars + (dollars == 1 ? " dollar" : " dollars"));
    if (quarters > 0) System.out.println(" " + quarters + (quarters == 1 ? " quarter" : " quarters"));
    if (dimes > 0) System.out.println(" " + dimes + (dimes == 1 ? " dime" : " dimes"));
    if (nickels > 0) System.out.println(" " + nickels + (nickels == 1 ? " nickel" : " nickels"));
    if (pennies > 0) System.out.println(" " + pennies + (pennies == 1 ? " penny" : " pennies"));
  }
}
```

---

### Exercise 3.8 \*

(_Sort three integers_) Write a program that prompts the user to enter three integers and display them in non-decreasing order.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_8 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter three integers: ");
    int a = input.nextInt();
    int b = input.nextInt();
    int c = input.nextInt();

    if (a > b) { int temp = a; a = b; b = temp; }
    if (b > c) { int temp = b; b = c; c = temp; }
    if (a > b) { int temp = a; a = b; b = temp; }

    System.out.println("Sorted: " + a + " " + b + " " + c);
  }
}
```

---

### Exercise 3.9 \*\*

(_Business: check ISBN-10_) Compute the checksum for an ISBN-10 number.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_9 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the first 9 digits of an ISBN as integer: ");
    int isbn = input.nextInt();
    int d1 = isbn / 100000000;
    int d2 = (isbn / 10000000) % 10;
    int d3 = (isbn / 1000000) % 10;
    int d4 = (isbn / 100000) % 10;
    int d5 = (isbn / 10000) % 10;
    int d6 = (isbn / 1000) % 10;
    int d7 = (isbn / 100) % 10;
    int d8 = (isbn / 10) % 10;
    int d9 = isbn % 10;
    int checksum = (d1 * 1 + d2 * 2 + d3 * 3 + d4 * 4 + d5 * 5 + d6 * 6 + d7 * 7 + d8 * 8 + d9 * 9) % 11;
    System.out.print("The ISBN-10 number is " + d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9);
    if (checksum == 10)
      System.out.println("X");
    else
      System.out.println(checksum);
  }
}
```

---

### Exercise 3.10

(_Game: multiplication quiz_) Revise SubtractionQuiz.java to generate a multiplication question with integers less than 1000.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_10 {
  public static void main(String[] args) {
    int number1 = (int)(Math.random() * 1000);
    int number2 = (int)(Math.random() * 1000);
    Scanner input = new Scanner(System.in);
    System.out.print("What is " + number1 + " * " + number2 + "? ");
    int answer = input.nextInt();
    if (number1 * number2 == answer)
      System.out.println("Correct!");
    else
      System.out.println("Wrong. " + number1 + " * " + number2 + " = " + (number1 * number2));
  }
}
```

---

### Section 3.8–3.16

### Exercise 3.11 \*

(_Find the number of days in a month_) Write a program that prompts the user to enter the month and year and displays the number of days in the month.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_11 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter month and year: ");
    int month = input.nextInt();
    int year = input.nextInt();
    boolean isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    int days;
    switch (month) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12: days = 31; break;
      case 4: case 6: case 9: case 11: days = 30; break;
      case 2: days = isLeapYear ? 29 : 28; break;
      default: days = 0;
    }
    String[] months = {"", "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"};
    System.out.println(months[month] + " " + year + " has " + days + " days");
  }
}
```

---

### Exercise 3.12

(_Palindrome integer_) Write a program that prompts the user to enter a three-digit integer and determines whether it is a palindrome.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_12 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a three-digit integer: ");
    int number = input.nextInt();
    int original = Math.abs(number);
    int digit1 = original / 100;
    int digit3 = original % 10;
    if (digit1 == digit3)
      System.out.println(number + " is a palindrome");
    else
      System.out.println(number + " is not a palindrome");
  }
}
```

---

### Exercise 3.13 \*

(_Financial application: compute taxes_) Complete ComputeTax.java to compute taxes for all four filing statuses.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_13 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("(0-single, 1-married jointly, 2-married separately, 3-head of household) Enter filing status: ");
    int status = input.nextInt();
    System.out.print("Enter taxable income: ");
    double income = input.nextDouble();
    double tax = 0;

    if (status == 0) { // Single
      if (income <= 8350) tax = income * 0.10;
      else if (income <= 33950) tax = 8350 * 0.10 + (income - 8350) * 0.15;
      else if (income <= 82250) tax = 8350 * 0.10 + (33950 - 8350) * 0.15 + (income - 33950) * 0.25;
      else if (income <= 171550) tax = 8350 * 0.10 + (33950 - 8350) * 0.15 + (82250 - 33950) * 0.25 + (income - 82250) * 0.28;
      else if (income <= 372950) tax = 8350 * 0.10 + (33950 - 8350) * 0.15 + (82250 - 33950) * 0.25 + (171550 - 82250) * 0.28 + (income - 171550) * 0.33;
      else tax = 8350 * 0.10 + (33950 - 8350) * 0.15 + (82250 - 33950) * 0.25 + (171550 - 82250) * 0.28 + (372950 - 171550) * 0.33 + (income - 372950) * 0.35;
    } else if (status == 1) { // Married jointly
      if (income <= 16700) tax = income * 0.10;
      else if (income <= 67900) tax = 16700 * 0.10 + (income - 16700) * 0.15;
      else if (income <= 137050) tax = 16700 * 0.10 + (67900 - 16700) * 0.15 + (income - 67900) * 0.25;
      else if (income <= 208850) tax = 16700 * 0.10 + (67900 - 16700) * 0.15 + (137050 - 67900) * 0.25 + (income - 137050) * 0.28;
      else if (income <= 372950) tax = 16700 * 0.10 + (67900 - 16700) * 0.15 + (137050 - 67900) * 0.25 + (208850 - 137050) * 0.28 + (income - 208850) * 0.33;
      else tax = 16700 * 0.10 + (67900 - 16700) * 0.15 + (137050 - 67900) * 0.25 + (208850 - 137050) * 0.28 + (372950 - 208850) * 0.33 + (income - 372950) * 0.35;
    } else if (status == 2) { // Married separately (same as single brackets)
      if (income <= 8350) tax = income * 0.10;
      else if (income <= 33950) tax = 8350 * 0.10 + (income - 8350) * 0.15;
      else if (income <= 68525) tax = 8350 * 0.10 + (33950 - 8350) * 0.15 + (income - 33950) * 0.25;
      else if (income <= 104425) tax = 8350 * 0.10 + (33950 - 8350) * 0.15 + (68525 - 33950) * 0.25 + (income - 68525) * 0.28;
      else if (income <= 186475) tax = 8350 * 0.10 + (33950 - 8350) * 0.15 + (68525 - 33950) * 0.25 + (104425 - 68525) * 0.28 + (income - 104425) * 0.33;
      else tax = 8350 * 0.10 + (33950 - 8350) * 0.15 + (68525 - 33950) * 0.25 + (104425 - 68525) * 0.28 + (186475 - 104425) * 0.33 + (income - 186475) * 0.35;
    } else if (status == 3) { // Head of household
      if (income <= 11950) tax = income * 0.10;
      else if (income <= 45500) tax = 11950 * 0.10 + (income - 11950) * 0.15;
      else if (income <= 117450) tax = 11950 * 0.10 + (45500 - 11950) * 0.15 + (income - 45500) * 0.25;
      else if (income <= 190200) tax = 11950 * 0.10 + (45500 - 11950) * 0.15 + (117450 - 45500) * 0.25 + (income - 117450) * 0.28;
      else if (income <= 372950) tax = 11950 * 0.10 + (45500 - 11950) * 0.15 + (117450 - 45500) * 0.25 + (190200 - 117450) * 0.28 + (income - 190200) * 0.33;
      else tax = 11950 * 0.10 + (45500 - 11950) * 0.15 + (117450 - 45500) * 0.25 + (190200 - 117450) * 0.28 + (372950 - 190200) * 0.33 + (income - 372950) * 0.35;
    } else {
      System.out.println("Error: invalid status");
      System.exit(1);
    }
    System.out.println("Tax is " + (int)(tax * 100) / 100.0);
  }
}
```

---

### Exercise 3.14

(_Game: heads or tails_) Write a program that lets the user guess whether a coin flip is heads (0) or tails (1).

#### Answer

```java
import java.util.Scanner;

public class Exercise3_14 {
  public static void main(String[] args) {
    int flip = (int)(Math.random() * 2);
    Scanner input = new Scanner(System.in);
    System.out.print("Enter guess (0=heads, 1=tails): ");
    int guess = input.nextInt();
    if (guess == flip)
      System.out.println("Correct!");
    else
      System.out.println("Incorrect. It was " + (flip == 0 ? "heads" : "tails"));
  }
}
```

---

### Exercise 3.15

(_Game: lottery_) Revise Lottery.java to generate a three-digit lottery number.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_15 {
  public static void main(String[] args) {
    int lottery = (int)(Math.random() * 1000);
    Scanner input = new Scanner(System.in);
    System.out.print("Enter your lottery pick (three digits): ");
    int guess = input.nextInt();

    int lotteryDigit1 = lottery / 100;
    int lotteryDigit2 = (lottery / 10) % 10;
    int lotteryDigit3 = lottery % 10;

    int guessDigit1 = guess / 100;
    int guessDigit2 = (guess / 10) % 10;
    int guessDigit3 = guess % 10;

    System.out.println("The lottery number is " + lottery);

    if (guess == lottery)
      System.out.println("Exact match: you win $12,000");
    else if ((guessDigit1 == lotteryDigit1 && guessDigit2 == lotteryDigit2 && guessDigit3 == lotteryDigit3) ||
             (guessDigit1 == lotteryDigit1 && guessDigit2 == lotteryDigit3 && guessDigit3 == lotteryDigit2) ||
             (guessDigit1 == lotteryDigit2 && guessDigit2 == lotteryDigit1 && guessDigit3 == lotteryDigit3) ||
             (guessDigit1 == lotteryDigit2 && guessDigit2 == lotteryDigit3 && guessDigit3 == lotteryDigit1) ||
             (guessDigit1 == lotteryDigit3 && guessDigit2 == lotteryDigit1 && guessDigit3 == lotteryDigit2) ||
             (guessDigit1 == lotteryDigit3 && guessDigit2 == lotteryDigit2 && guessDigit3 == lotteryDigit1))
      System.out.println("Match all digits: you win $5,000");
    else if (guessDigit1 == lotteryDigit1 || guessDigit1 == lotteryDigit2 || guessDigit1 == lotteryDigit3 ||
             guessDigit2 == lotteryDigit1 || guessDigit2 == lotteryDigit2 || guessDigit2 == lotteryDigit3 ||
             guessDigit3 == lotteryDigit1 || guessDigit3 == lotteryDigit2 || guessDigit3 == lotteryDigit3)
      System.out.println("Match one digit: you win $2,000");
    else
      System.out.println("Sorry, no match");
  }
}
```

---

### Exercise 3.16

(_Random point_) Write a program that displays a random coordinate in a rectangle centered at (0,0) with width 50 and height 150.

#### Answer

```java
public class Exercise3_16 {
  public static void main(String[] args) {
    int x = (int)(Math.random() * 51) - 25;  // -25 to 25
    int y = (int)(Math.random() * 151) - 75; // -75 to 75
    System.out.println("Random coordinate: (" + x + ", " + y + ")");
  }
}
```

---

### Exercise 3.17 \*

(_Game: scissor, rock, paper_) Write a program that plays scissor-rock-paper game.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_17 {
  public static void main(String[] args) {
    int computer = (int)(Math.random() * 3);
    Scanner input = new Scanner(System.in);
    System.out.print("scissor (0), rock (1), paper (2): ");
    int user = input.nextInt();

    String[] choices = {"scissor", "rock", "paper"};
    System.out.print("The computer is " + choices[computer] + ". You are " + choices[user] + ". ");

    if (computer == user)
      System.out.println("It is a draw");
    else if ((user == 0 && computer == 2) || (user == 1 && computer == 0) || (user == 2 && computer == 1))
      System.out.println("You won");
    else
      System.out.println("You lost");
  }
}
```

---

### Exercise 3.18 \*

(_Cost of shipping_) Calculate shipping cost based on weight ranges.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_18 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter weight of package in pounds: ");
    double weight = input.nextDouble();
    if (weight <= 0)
      System.out.println("Invalid weight");
    else if (weight <= 2)
      System.out.println("Shipping cost: $2.5");
    else if (weight <= 4)
      System.out.println("Shipping cost: $4.5");
    else if (weight <= 10)
      System.out.println("Shipping cost: $7.5");
    else if (weight <= 20)
      System.out.println("Shipping cost: $10.5");
    else
      System.out.println("The package cannot be shipped");
  }
}
```

---

### Exercise 3.19

(_Compute the perimeter of a rectangle_) Read two edges of a rectangle and compute the perimeter if the input is valid (both edges must be of different lengths).

#### Answer

```java
import java.util.Scanner;

public class Exercise3_19 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter two edges of a rectangle: ");
    double e1 = input.nextDouble();
    double e2 = input.nextDouble();
    if (e1 > 0 && e2 > 0 && e1 != e2) {
      double perimeter = 2 * (e1 + e2);
      System.out.println("Perimeter: " + perimeter);
    } else {
      System.out.println("Invalid input");
    }
  }
}
```

---

### Exercise 3.20 \*

(_Science: wind-chill temperature_) Revise Exercise 2.17 to validate input: temperature between -58°F and 41°F and wind speed ≥ 2.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_20 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the temperature in Fahrenheit: ");
    double temp = input.nextDouble();
    System.out.print("Enter wind speed in mph: ");
    double speed = input.nextDouble();
    if (temp < -58 || temp > 41 || speed < 2) {
      System.out.println("Invalid input");
    } else {
      double windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
      System.out.println("Wind-chill temperature is " + windChill);
    }
  }
}
```

---

### Comprehensive

### Exercise 3.21 \*\*

(_Science: day of the week_) Use Zeller's congruence to compute the day of the week.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_21 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter year: (e.g., 2012): ");
    int year = input.nextInt();
    System.out.print("Enter month: 1-12: ");
    int m = input.nextInt();
    System.out.print("Enter the day of the month: 1-31: ");
    int q = input.nextInt();

    if (m == 1 || m == 2) {
      m += 12;
      year--;
    }
    int j = year / 100;
    int k = year % 100;
    int h = (q + 26 * (m + 1) / 10 + k + k / 4 + j / 4 + 5 * j) % 7;

    String[] days = {"Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"};
    System.out.println("Day of the week is " + days[h]);
  }
}
```

---

### Exercise 3.22 \*\*

(_Geometry: point in a circle?_) Check whether a point (x, y) is within a circle centered at (0, 0) with radius 10.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_22 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a point with two coordinates: ");
    double x = input.nextDouble();
    double y = input.nextDouble();
    double distance = Math.sqrt(x * x + y * y);
    if (distance <= 10)
      System.out.println("Point (" + x + ", " + y + ") is in the circle");
    else
      System.out.println("Point (" + x + ", " + y + ") is not in the circle");
  }
}
```

---

### Exercise 3.23 \*\*

(_Geometry: point in a rectangle?_) Check whether a point is within the rectangle centered at (1, 1) with width 10 and height 5.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_23 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a point with two coordinates: ");
    double x = input.nextDouble();
    double y = input.nextDouble();
    if (Math.abs(x - 1) <= 5 && Math.abs(y - 1) <= 2.5)
      System.out.println("Point (" + x + ", " + y + ") is in the rectangle");
    else
      System.out.println("Point (" + x + ", " + y + ") is not in the rectangle");
  }
}
```

---

### Exercise 3.24 \*\*

(_Game: pick a card_) Simulate picking a card from a deck of 52 cards.

#### Answer

```java
public class Exercise3_24 {
  public static void main(String[] args) {
    int rank = (int)(Math.random() * 13) + 1;
    int suit = (int)(Math.random() * 4);
    String[] ranks = {"", "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
    String[] suits = {"Clubs", "Diamonds", "Hearts", "Spades"};
    System.out.println("The card you picked is " + ranks[rank] + " of " + suits[suit]);
  }
}
```

---

### Exercise 3.25 \*

(_Geometry: intersecting point_) Find the intersecting point of two lines using Cramer's rule.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_25 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter x1, y1, x2, y2, x3, y3, x4, y4: ");
    double x1 = input.nextDouble(), y1 = input.nextDouble();
    double x2 = input.nextDouble(), y2 = input.nextDouble();
    double x3 = input.nextDouble(), y3 = input.nextDouble();
    double x4 = input.nextDouble(), y4 = input.nextDouble();

    double a = y1 - y2;
    double b = -(x1 - x2);
    double c = y3 - y4;
    double d = -(x3 - x4);
    double e = (y1 - y2) * x1 - (x1 - x2) * y1;
    double f = (y3 - y4) * x3 - (x3 - x4) * y3;
    double det = a * d - b * c;

    if (det == 0) {
      System.out.println("The two lines are parallel");
    } else {
      double x = (e * d - b * f) / det;
      double y = (a * f - e * c) / det;
      System.out.println("The intersecting point is at (" + x + ", " + y + ")");
    }
  }
}
```

---

### Exercise 3.26

(_Use the &&, ||, and ^ operators_) Determine whether an integer is divisible by 4 and 5, by 4 or 5, and by 4 or 5 but not both.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_26 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter an integer: ");
    int num = input.nextInt();
    System.out.println("Is " + num + " divisible by 4 and 5? " + (num % 4 == 0 && num % 5 == 0));
    System.out.println("Is " + num + " divisible by 4 or 5? " + (num % 4 == 0 || num % 5 == 0));
    System.out.println("Is " + num + " divisible by 4 or 5 but not both? " + (num % 4 == 0 ^ num % 5 == 0));
  }
}
```

---

### Exercise 3.27 \*\*

(_Geometry: points in triangle?_) Check whether a point is inside the right triangle with vertices at (0,0), (200,0), (0,100).

#### Answer

```java
import java.util.Scanner;

public class Exercise3_27 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a point's x- and y-coordinates: ");
    double x = input.nextDouble();
    double y = input.nextDouble();
    boolean inside = x >= 0 && y >= 0 && (x / 200 + y / 100 <= 1);
    if (inside)
      System.out.println("The point is in the triangle");
    else
      System.out.println("The point is not in the triangle");
  }
}
```

---

### Exercise 3.28 \*\*

(_Geometry: two rectangles_) Determine whether the second rectangle is inside the first or overlaps with it.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_28 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter r1's center x-, y-coordinates, width, and height: ");
    double x1 = input.nextDouble(), y1 = input.nextDouble(), w1 = input.nextDouble(), h1 = input.nextDouble();
    System.out.print("Enter r2's center x-, y-coordinates, width, and height: ");
    double x2 = input.nextDouble(), y2 = input.nextDouble(), w2 = input.nextDouble(), h2 = input.nextDouble();

    double left1 = x1 - w1 / 2, right1 = x1 + w1 / 2, top1 = y1 + h1 / 2, bottom1 = y1 - h1 / 2;
    double left2 = x2 - w2 / 2, right2 = x2 + w2 / 2, top2 = y2 + h2 / 2, bottom2 = y2 - h2 / 2;

    if (left2 >= left1 && right2 <= right1 && bottom2 >= bottom1 && top2 <= top1)
      System.out.println("r2 is inside r1");
    else if (left2 > right1 || right2 < left1 || bottom2 > top1 || top2 < bottom1)
      System.out.println("r2 does not overlap r1");
    else
      System.out.println("r2 overlaps r1");
  }
}
```

---

### Exercise 3.29 \*\*

(_Geometry: two circles_) Determine whether the second circle is inside the first or overlaps with it.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_29 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter circle1's center x-, y-coordinates, and radius: ");
    double x1 = input.nextDouble(), y1 = input.nextDouble(), r1 = input.nextDouble();
    System.out.print("Enter circle2's center x-, y-coordinates, and radius: ");
    double x2 = input.nextDouble(), y2 = input.nextDouble(), r2 = input.nextDouble();
    double distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

    if (distance <= Math.abs(r1 - r2))
      System.out.println("circle2 is inside circle1");
    else if (distance <= r1 + r2)
      System.out.println("circle2 overlaps circle1");
    else
      System.out.println("circle2 does not overlap circle1");
  }
}
```

---

### Exercise 3.30 \*

(_Current time_) Revise Exercise 2.8 to display the hour using a 12-hour clock with AM/PM.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_30 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the time zone offset to GMT: ");
    int offset = input.nextInt();
    long totalMilliseconds = System.currentTimeMillis();
    long totalSeconds = totalMilliseconds / 1000;
    long currentSecond = totalSeconds % 60;
    long totalMinutes = totalSeconds / 60;
    long currentMinute = totalMinutes % 60;
    long totalHours = totalMinutes / 60;
    long currentHour = (totalHours + offset) % 24;
    boolean am = currentHour < 12;
    long hour12 = currentHour % 12;
    if (hour12 == 0) hour12 = 12;
    System.out.println("The current time is " + hour12 + ":" + currentMinute + ":" + currentSecond + (am ? " AM" : " PM"));
  }
}
```

---

### Exercise 3.31 \*

(_Financials: currency exchange_) Convert between U.S. dollars and Chinese RMB.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_31 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the exchange rate from dollars to RMB: ");
    double rate = input.nextDouble();
    System.out.print("Enter 0 to convert dollars to RMB and 1 vice versa: ");
    int choice = input.nextInt();
    if (choice == 0) {
      System.out.print("Enter the dollar amount: ");
      double dollars = input.nextDouble();
      System.out.println("$" + dollars + " is " + (dollars * rate) + " yuan");
    } else if (choice == 1) {
      System.out.print("Enter the RMB amount: ");
      double rmb = input.nextDouble();
      System.out.println(rmb + " yuan is $" + (int)(rmb / rate * 100) / 100.0);
    } else {
      System.out.println("Incorrect input");
    }
  }
}
```

---

### Exercise 3.32 \*

(_Geometry: point position_) Determine whether p2 is on the left, right, or on the same line from p0 to p1.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_32 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter three points for p0, p1, and p2: ");
    double x0 = input.nextDouble(), y0 = input.nextDouble();
    double x1 = input.nextDouble(), y1 = input.nextDouble();
    double x2 = input.nextDouble(), y2 = input.nextDouble();
    double result = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0);
    if (result > 0)
      System.out.println("p2 is on the left side of the line");
    else if (result == 0)
      System.out.println("p2 is on the same line");
    else
      System.out.println("p2 is on the right side of the line");
  }
}
```

---

### Exercise 3.33 \*

(_Financial: compare costs_) Compare the price of two packages of rice.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_33 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter weight and price for package 1: ");
    double w1 = input.nextDouble(), p1 = input.nextDouble();
    System.out.print("Enter weight and price for package 2: ");
    double w2 = input.nextDouble(), p2 = input.nextDouble();
    double ratio1 = p1 / w1;
    double ratio2 = p2 / w2;
    if (ratio1 < ratio2)
      System.out.println("Package 1 has a better price.");
    else if (ratio1 > ratio2)
      System.out.println("Package 2 has a better price.");
    else
      System.out.println("Two packages have the same price.");
  }
}
```

---

### Exercise 3.34 \*

(_Geometry: point on line segment_) Test whether p2 is on the line segment from p0 to p1.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_34 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter three points for p0, p1, and p2: ");
    double x0 = input.nextDouble(), y0 = input.nextDouble();
    double x1 = input.nextDouble(), y1 = input.nextDouble();
    double x2 = input.nextDouble(), y2 = input.nextDouble();
    double result = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0);
    boolean onLine = result == 0 && x2 >= Math.min(x0, x1) && x2 <= Math.max(x0, x1) && y2 >= Math.min(y0, y1) && y2 <= Math.max(y0, y1);
    if (onLine)
      System.out.println("(" + x2 + ", " + y2 + ") is on the line segment from (" + x0 + ", " + y0 + ") to (" + x1 + ", " + y1 + ")");
    else
      System.out.println("(" + x2 + ", " + y2 + ") is not on the line segment from (" + x0 + ", " + y0 + ") to (" + x1 + ", " + y1 + ")");
  }
}
```

---

### Exercise 3.35

(_Even or odd number_) Write a program that determines whether an integer is odd or even.

#### Answer

```java
import java.util.Scanner;

public class Exercise3_35 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter an integer: ");
    int n = input.nextInt();
    if (n % 2 == 0)
      System.out.println(n + " is even number");
    else
      System.out.println(n + " is odd number");
  }
}
```

# Chapter 4-6 Questions and Answers

## Chapter 4: Mathematical Functions, Characters, and Strings

### CheckPoint Questions

---

#### 4.2.1 Evaluate the following method calls:

(a) `Math.sqrt(4)` -> `2.0`

(b) `Math.sin(2 * Math.PI)` -> `0.0` (approximately, due to floating-point precision)

(c) `Math.cos(2 * Math.PI)` -> `1.0`

(d) `Math.pow(2, 2)` -> `4.0`

(e) `Math.log(Math.E)` -> `1.0`

(f) `Math.exp(1)` -> `2.718281828459045`

(g) `Math.max(2, Math.min(3, 4))` -> `Math.max(2, 3)` -> `3`

(h) `Math.rint(-2.5)` -> `-2.0` (rounds to nearest even integer)

(i) `Math.ceil(-2.5)` -> `-2.0`

(j) `Math.floor(-2.5)` -> `-3.0`

(k) `Math.round(-2.5f)` -> `-2` (returns int)

(l) `Math.round(-2.5)` -> `-2` (returns long)

(m) `Math.rint(2.5)` -> `2.0` (rounds to nearest even integer)

(n) `Math.ceil(2.5)` -> `3.0`

(o) `Math.floor(2.5)` -> `2.0`

(p) `Math.round(2.5f)` -> `3` (returns int)

(q) `Math.round(2.5)` -> `3` (returns long)

(r) `Math.round(Math.abs(-2.5))` -> `Math.round(2.5)` -> `3`

---

#### 4.2.2 True or false? The argument for trigonometric methods is an angle in radians.

**True.** The methods `sin`, `cos`, and `tan` take angles in radians.

---

#### 4.2.3 Write a statement that converts 47 degrees to radians and assigns the result to a variable.

```java
double radians = Math.toRadians(47);
```

---

#### 4.2.4 Write a statement that converts PI / 7 to an angle in degrees and assigns the result to a variable.

```java
double degrees = Math.toDegrees(Math.PI / 7);
```

---

#### 4.2.5 Write an expression that obtains:

```java
// Random integer between 34 and 55 (inclusive)
int a = 34 + (int)(Math.random() * 22);

// Random integer between 0 and 999 (inclusive)
int b = (int)(Math.random() * 1000);

// Random number between 5.5 and 55.5
double c = 5.5 + (Math.random() * 50.0);
```

---

#### 4.2.6 Why does the Math class not need to be imported?

Because `Math` is in the `java.lang` package, which is implicitly imported in every Java program.

---

#### 4.2.7 What are the results?

```java
Math.log(Math.exp(5.5))  ->  5.5
Math.exp(Math.log(5.5))  ->  5.5
Math.asin(Math.sin(Math.PI / 6))  ->  0.5235987755982988  (approximately π/6)
Math.sin(Math.asin(Math.PI / 6))  ->  0.5235987755982988  (approximately π/6)
```

---

#### 4.3.1 Which of the following are correct literals for characters?

- `'1'` — **Valid** (digit character)
- `'\u345dE'` — **Invalid** (too many hex digits, Unicode escape takes exactly 4 hex digits)
- `'\u3fFa'` — **Valid** (Unicode escape with 4 hex digits)
- `'\b'` — **Valid** (backspace escape sequence)
- `'\t'` — **Valid** (tab escape sequence)

---

#### 4.3.2 How do you display the characters `\` and `"`?

```java
System.out.println("\\");   // displays \
System.out.println("\"");   // displays "
```

---

#### 4.3.3 Use print statements to find out:

```java
// ASCII code for characters
System.out.println((int)'1');  // 49
System.out.println((int)'A');  // 65
System.out.println((int)'B');  // 66
System.out.println((int)'a');  // 97
System.out.println((int)'b');  // 98

// Character for decimal codes
System.out.println((char)40);  // (
System.out.println((char)59);  // ;
System.out.println((char)79);  // O
System.out.println((char)85);  // U
System.out.println((char)90);  // Z

// Character for hexadecimal codes
System.out.println((char)0x40);  // @
System.out.println((char)0x5A);  // Z
System.out.println((char)0x71);  // q
System.out.println((char)0x72);  // r
System.out.println((char)0x7A);  // z
```

---

#### 4.3.4 Evaluate the following:

```java
int i = '1';                    // i = 49 (Unicode of '1')
int j = '1' + '2' * ('4' - '3') + 'b' / 'a';
// '1' = 49, '2' = 50, '4' = 52, '3' = 51, 'b' = 98, 'a' = 97
// j = 49 + 50 * (52 - 51) + 98 / 97
// j = 49 + 50 * 1 + 1  (integer division: 98/97 = 1)
// j = 49 + 50 + 1 = 100
int k = 'a';                    // k = 97
char c = 90;                    // c = 'Z'
```

---

#### 4.3.5 Can the following conversions involving casting be allowed?

```java
char c = 'A';
int i = (int)c;      // Allowed. i = 65

float f = 1000.34f;
int i = (int)f;      // Allowed. i = 1000 (truncation)

double d = 1000.34;
int i = (int)d;      // Allowed. i = 1000 (truncation)

int i = 97;
char c = (char)i;    // Allowed. c = 'a'
```

All conversions are allowed with explicit casting where needed.

---

#### 4.3.6 Show the output of the following program:

```java
public class Test {
  public static void main(String[] args) {
    char x = 'a';
    char y = 'c';
    System.out.println(++x);    // 'b' (pre-increment)
    System.out.println(y++);    // 'c' (post-increment, prints c then increments to d)
    System.out.println(x - y);  // 'b' - 'd' = 98 - 100 = -2
  }
}
```

**Output:**

```
b
c
-2
```

---

#### 4.3.7 Write the code that generates a random lowercase letter.

```java
char randomLowercase = (char)('a' + Math.random() * 26);
```

---

#### 4.3.8 Show the output of the following statements:

```java
System.out.println('a' < 'b');   // true  (97 < 98)
System.out.println('a' <= 'A');  // false (97 <= 65)
System.out.println('a' > 'b');   // false (97 > 98)
System.out.println('a' >= 'A');  // true  (97 >= 65)
System.out.println('a' == 'a');  // true
System.out.println('a' != 'b');  // true
```

---

#### 4.4.1 Results for given strings `s1 = "Welcome to Java"`, `s2 = "Programming is fun"`, `s3 = "Welcome to Java"`:

| Expression                | Result                                | Explanation                                                     |
| ------------------------- | ------------------------------------- | --------------------------------------------------------------- |
| `s1 == s2`                | `false`                               | Different objects                                               |
| `s2 == s3`                | `false`                               | Different objects                                               |
| `s1.equals(s2)`           | `false`                               | Different contents                                              |
| `s1.equals(s3)`           | `true`                                | Same contents                                                   |
| `s1.compareTo(s2)`        | Negative int (e.g., -7)               | 'W'(87) vs 'P'(80): 87-80 = 7... actually 'W' > 'P' so positive |
|                           |                                       | Let me recalculate: 'W'(87) > 'P'(80), so positive.             |
|                           |                                       | Actually compareTo compares character by character.             |
|                           |                                       | s1="Welcome to Java", s2="Programming is fun"                   |
|                           |                                       | First char: 'W'(87) vs 'P'(80) -> 87-80 = 7                     |
|                           |                                       | So result is 7                                                  |
| `s2.compareTo(s3)`        | Negative                              | 'P'(80) vs 'W'(87) -> 80-87 = -7                                |
| `s2.compareTo(s2)`        | `0`                                   | Same string                                                     |
| `s1.charAt(0)`            | `'W'`                                 |                                                                 |
| `s1.indexOf('j')`         | `-1`                                  | 'j' not found (case-sensitive, string has 'J')                  |
| `s1.indexOf("to")`        | `8`                                   | "to" starts at index 8                                          |
| `s1.lastIndexOf('a')`     | `14`                                  | Last 'a' at index 14                                            |
| `s1.lastIndexOf("o", 15)` | `9`                                   | Last 'o' before index 15 is at 9                                |
| `s1.length()`             | `15`                                  |                                                                 |
| `s1.substring(5)`         | `"me to Java"`                        | From index 5 to end                                             |
| `s1.substring(5, 11)`     | `"me to "`                            | From index 5 to 10 (11-1)                                       |
| `s1.startsWith("Wel")`    | `true`                                |                                                                 |
| `s1.endsWith("Java")`     | `true`                                |                                                                 |
| `s1.toLowerCase()`        | `"welcome to java"`                   |                                                                 |
| `s1.toUpperCase()`        | `"WELCOME TO JAVA"`                   |                                                                 |
| `s1.concat(s2)`           | `"Welcome to JavaProgramming is fun"` |                                                                 |
| `s1.contains(s2)`         | `false`                               | (Note: method is `contains`, not `contain`)                     |

---

#### 4.4.2 Which statements or expressions are incorrect?

```java
String s = "Welcome to Java";                // Correct
String s3 = s1 + s2;                         // Correct
s3 = s1 - s2;                                // Incorrect — cannot subtract strings
s1 == s2;                                    // Correct (compiles, compares references, but not recommended for content)
s1 >= s2;                                    // Incorrect — relational operators not applicable to strings
s1.compareTo(s2);                            // Correct
int i = s1.length();                         // Correct
char c = s1(0);                              // Incorrect — must use s1.charAt(0)
char c = s1.charAt(s1.length());             // Incorrect — index out of bounds, max index is s1.length()-1
```

---

#### 4.4.3 Show the output:

```java
System.out.println("1" + 1);         // "11"    (string + int -> concatenation)
System.out.println('1' + 1);         // 50      (char + int -> 49 + 1 = 50)
System.out.println("1" + 1 + 1);     // "111"   (string + int -> "11" + 1 -> "111")
System.out.println("1" + (1 + 1));   // "12"    (string + 2 -> "12")
System.out.println('1' + 1 + 1);     // 51      (49 + 1 + 1 = 51)
```

---

#### 4.4.4 Evaluate the following expressions:

```java
1 + "Welcome " + 1 + 1              // "1Welcome 11"
1 + "Welcome " + (1 + 1)            // "1Welcome 2"
1 + "Welcome " + ('\u0001' + 1)     // "1Welcome 2"   ('\u0001' = 1, so 1 + 1 = 2)
1 + "Welcome " + 'a' + 1            // "1Welcome a1"
```

---

#### 4.4.5 Let s1 be `" Welcome "` and s2 be `" welcome "`:

```java
String s1 = " Welcome ";
String s2 = " welcome ";

// (a) Check equality
boolean isEqual = s1.equals(s2);                     // false

// (b) Check equality ignoring case
boolean isEqual = s1.equalsIgnoreCase(s2);           // true

// (c) Compare
int x = s1.compareTo(s2);                            // positive ( 'W' > 'w'? Actually 'W'(87) < 'w'(119), so negative)

// (d) Compare ignoring case
int x = s1.compareToIgnoreCase(s2);                  // 0 (same characters ignoring case)

// (e) Check prefix AAA
boolean b = s1.startsWith("AAA");                    // false

// (f) Check suffix AAA
boolean b = s1.endsWith("AAA");                      // false

// (g) Length
int x = s1.length();

// (h) First character
char x = s1.charAt(0);

// (i) Combine s1 with s2
String s3 = s1.concat(s2);

// (j) Substring from index 1
String s3 = s1.substring(1);

// (k) Substring from index 1 to 4
String s3 = s1.substring(1, 4);

// (l) Convert to lowercase
String s3 = s1.toLowerCase();

// (m) Convert to uppercase
String s3 = s1.toUpperCase();

// (n) Trim whitespace
String s3 = s1.trim();

// (o) Index of first 'e'
int x = s1.indexOf('e');

// (p) Index of last "abc"
int x = s1.lastIndexOf("abc");
```

---

#### 4.4.6 Write one statement to return the number of digits in an integer `i`.

```java
int numDigits = (i + "").length();
```

---

#### 4.4.7 Write one statement to return the number of digits in a double value `d`.

```java
int numDigits = (d + "").length();  // includes decimal point and fractional digits
```

More precisely for only the integer part:

```java
int numDigits = ((int)d + "").length();
```

---

#### 4.5.1 If you run GuessBirthday.java with input 1 for Set1, Set3, and Set4 and 0 for Set2 and Set5, what will be the birthday?

The first numbers in the sets are: Set1 = 1, Set2 = 2, Set3 = 4, Set4 = 8, Set5 = 16.

The birthday = 1 (Set1) + 0 (Set2) + 4 (Set3) + 8 (Set4) + 0 (Set5) = **13**

---

#### 4.5.2 If you enter a lowercase letter such as b, the program in Listing 4.4 displays "B is 11". Revise the code to display "b is 11".

The change is simple: remove the `Character.toUpperCase()` call and adjust the condition:

```java
char ch = hexString.charAt(0);  // Don't convert to uppercase
if ('a' <= ch && ch <= 'f') {
  int value = ch - 'a' + 10;
  System.out.println("The decimal value for hex digit "
    + ch + " is " + value);
}
else if ('A' <= ch && ch <= 'F') {
  int value = ch - 'A' + 10;
  System.out.println("The decimal value for hex digit "
    + ch + " is " + value);
}
// ... rest remains the same
```

---

#### 4.5.3 What would be wrong if lines 6 and 7 are replaced by `String lottery = "" + (int)(Math.random() * 100);`?

This would generate a single integer from 0 to 99, not two separate digits. When `Math.random() * 100` produces a single-digit number (0-9), `lottery` would be a one-character string like `"5"` instead of `"05"`, causing a `StringIndexOutOfBoundsException` when `charAt(1)` is called.

---

#### 4.6.1 What is the printout of `System.out.printf("%5d %d", 1, 2, 3)`?

It causes a runtime error (MissingFormatArgumentException) because there are three format specifiers for `%5d` and `%d` (only 2 specifiers), but 3 arguments... Actually, there are 2 specifiers and 3 arguments. The extra argument `3` is ignored. Output: `"    1 2"`.

Wait — the format string is `"%5d %d"` which has 2 specifiers, and there are 3 arguments (1, 2, 3). The extra argument is ignored. Output: `"    1 2"`.

---

#### 4.6.2 What is the printout of `System.out.printf("%5d %d", 1, 2, 3)`?

There are 2 format specifiers (`%5d` and `%d`) and 3 arguments (1, 2, 3). The third argument is ignored. Output:

```
    1 2
```

---

#### 4.6.3 Show the output of the following statements:

```java
double amount = 12618.98;
double interestRate = 0.0013;
double interest = amount * interestRate;
System.out.printf("Interest is $%4.2f", interest);
```

`interest = 12618.98 * 0.0013 = 16.404674`

`%4.2f` means at least 4 total characters with 2 decimal places. The value rounds to `16.40`. Since `16.40` has 5 characters it exceeds the width of 4, so it prints as-is:

```
Interest is $16.40
```

---

### Programming Exercises

#### 4.1 (Geometry: area of a pentagon)

```java
import java.util.Scanner;

public class PentagonArea {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the length from the center to a vertex: ");
    double r = input.nextDouble();

    double s = 2 * r * Math.sin(Math.PI / 5);
    double area = (5 * s * s) / (4 * Math.tan(Math.PI / 5));

    System.out.printf("The area of the pentagon is %.2f\n", area);
  }
}
```

**Sample run:**

```
Enter the length from the center to a vertex: 5.5
The area of the pentagon is 71.92
```

---

#### 4.2 (Geometry: great circle distance)

```java
import java.util.Scanner;

public class GreatCircleDistance {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    final double RADIUS = 6371.01;  // Earth's radius in km

    System.out.print("Enter point 1 (latitude and longitude) in degrees: ");
    double x1 = Math.toRadians(input.nextDouble());
    double y1 = Math.toRadians(input.nextDouble());

    System.out.print("Enter point 2 (latitude and longitude) in degrees: ");
    double x2 = Math.toRadians(input.nextDouble());
    double y2 = Math.toRadians(input.nextDouble());

    double d = RADIUS * Math.acos(Math.sin(x1) * Math.sin(x2)
      + Math.cos(x1) * Math.cos(x2) * Math.cos(y1 - y2));

    System.out.println("The distance between the two points is " + d + " km");
  }
}
```

**Sample run:**

```
Enter point 1 (latitude and longitude) in degrees: 39.55 -116.25
Enter point 2 (latitude and longitude) in degrees: 41.5 87.37
The distance between the two points is 10691.79 km
```

---

#### 4.3 (Geography: estimate areas)

```java
import java.util.Scanner;

public class EstimateAreas {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // GPS locations of four cities
    System.out.print("Enter the coordinates of four cities (lat1 lon1 lat2 lon2 lat3 lon3 lat4 lon4): ");
    double lat1 = Math.toRadians(input.nextDouble());
    double lon1 = Math.toRadians(input.nextDouble());
    double lat2 = Math.toRadians(input.nextDouble());
    double lon2 = Math.toRadians(input.nextDouble());
    double lat3 = Math.toRadians(input.nextDouble());
    double lon3 = Math.toRadians(input.nextDouble());
    double lat4 = Math.toRadians(input.nextDouble());
    double lon4 = Math.toRadians(input.nextDouble());
    final double R = 6371.01;  // Earth radius in km

    // Compute side lengths between points
    // side1 between p1 and p2
    double side1 = R * Math.acos(Math.sin(lat1) * Math.sin(lat2)
      + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));
    // side2 between p2 and p3
    double side2 = R * Math.acos(Math.sin(lat2) * Math.sin(lat3)
      + Math.cos(lat2) * Math.cos(lat3) * Math.cos(lon2 - lon3));
    // side3 between p3 and p4
    double side3 = R * Math.acos(Math.sin(lat3) * Math.sin(lat4)
      + Math.cos(lat3) * Math.cos(lat4) * Math.cos(lon3 - lon4));
    // side4 between p4 and p1
    double side4 = R * Math.acos(Math.sin(lat4) * Math.sin(lat1)
      + Math.cos(lat4) * Math.cos(lat1) * Math.cos(lon4 - lon1));
    // diagonal between p1 and p3
    double d1 = R * Math.acos(Math.sin(lat1) * Math.sin(lat3)
      + Math.cos(lat1) * Math.cos(lat3) * Math.cos(lon1 - lon3));

    // Compute area of two triangles using Heron's formula
    double s1 = (side1 + side2 + d1) / 2;
    double area1 = Math.sqrt(s1 * (s1 - side1) * (s1 - side2) * (s1 - d1));
    double s2 = (side3 + side4 + d1) / 2;
    double area2 = Math.sqrt(s2 * (s2 - side3) * (s2 - side4) * (s2 - d1));

    double totalArea = area1 + area2;
    System.out.printf("The estimated area enclosed by the four cities is %.2f km²\n", totalArea);
  }
}
```

---

#### 4.4 (Geometry: area of a hexagon)

```java
import java.util.Scanner;

public class HexagonArea {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the side: ");
    double s = input.nextDouble();

    double area = (6 * s * s) / (4 * Math.tan(Math.PI / 6));

    System.out.printf("The area of the hexagon is %.2f\n", area);
  }
}
```

**Sample run:**

```
Enter the side: 5.5
The area of the hexagon is 78.59
```

---

#### 4.5 (Geometry: area of a regular polygon)

```java
import java.util.Scanner;

public class RegularPolygonArea {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the number of sides: ");
    int n = input.nextInt();
    System.out.print("Enter the side: ");
    double s = input.nextDouble();

    double area = (n * s * s) / (4 * Math.tan(Math.PI / n));

    System.out.println("The area of the polygon is " + area);
  }
}
```

**Sample run:**

```
Enter the number of sides: 6
Enter the side: 6.0
The area of the polygon is 93.53
```

---

#### 4.6 (Random points on a circle)

```java
public class RandomPointsOnCircle {
  public static void main(String[] args) {
    final double RADIUS = 40.0;

    // Generate three random angles
    double angle1 = Math.random() * 2 * Math.PI;
    double angle2 = Math.random() * 2 * Math.PI;
    double angle3 = Math.random() * 2 * Math.PI;

    // Compute coordinates
    double x1 = RADIUS * Math.cos(angle1);
    double y1 = RADIUS * Math.sin(angle1);
    double x2 = RADIUS * Math.cos(angle2);
    double y2 = RADIUS * Math.sin(angle2);
    double x3 = RADIUS * Math.cos(angle3);
    double y3 = RADIUS * Math.sin(angle3);

    // Compute side lengths
    double a = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
    double b = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
    double c = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    // Compute angles
    double A = Math.toDegrees(Math.acos((a * a - b * b - c * c) / (-2 * b * c)));
    double B = Math.toDegrees(Math.acos((b * b - a * a - c * c) / (-2 * a * c)));
    double C = Math.toDegrees(Math.acos((c * c - b * b - a * a) / (-2 * a * b)));

    System.out.println("The three angles are: " +
      Math.round(A * 100) / 100.0 + " " +
      Math.round(B * 100) / 100.0 + " " +
      Math.round(C * 100) / 100.0);
  }
}
```

---

#### 4.7 (Corner point coordinates)

```java
import java.util.Scanner;

public class CornerPointCoordinates {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the radius of the bounding circle: ");
    double radius = input.nextDouble();

    System.out.println("The coordinates of five points on the pentagon are:");
    for (int i = 0; i < 5; i++) {
      // Start from top (angle = 90° = π/2), go clockwise
      double angle = Math.toRadians(90 - i * 72);
      double x = radius * Math.cos(angle);
      double y = radius * Math.sin(angle);
      System.out.printf("(%.2f, %.2f)\n", x, y);
    }
  }
}
```

**Sample run:**

```
Enter the radius of the bounding circle: 100
The coordinates of five points on the pentagon are:
(0.00, 100.00)
(95.11, 30.90)
(58.78, -80.90)
(-58.78, -80.90)
(-95.11, 30.90)
```

---

#### 4.8 (Find the character of an ASCII code)

```java
import java.util.Scanner;

public class ASCIICode {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter an ASCII code (0-127): ");
    int code = input.nextInt();
    System.out.println("The character for ASCII code " + code + " is " + (char)code);
  }
}
```

**Sample run:**

```
Enter an ASCII code (0-127): 69
The character for ASCII code 69 is E
```

---

#### 4.9 (Find the Unicode of a character)

```java
import java.util.Scanner;

public class UnicodeOfCharacter {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a character: ");
    String s = input.nextLine();
    char ch = s.charAt(0);
    System.out.println("The Unicode for the character " + ch + " is " + (int)ch);
  }
}
```

**Sample run:**

```
Enter a character: E
The Unicode for the character E is 69
```

---

#### 4.10 (Guess birthday)

This is the same as Listing 4.3 (GuessBirthday.java). The program uses five sets of numbers. If the user answers 1 for Set1, Set3, and Set4, and 0 for Set2 and Set5, the birthday is 1 + 4 + 8 = 13.

(Full program shown in Listing 4.3 in the textbook.)

---

#### 4.11 (Decimal to hex)

```java
import java.util.Scanner;

public class DecimalToHex {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a decimal value (0-15): ");
    int value = input.nextInt();

    if (value >= 0 && value <= 9) {
      System.out.println("The hex value is " + value);
    } else if (value >= 10 && value <= 15) {
      System.out.println("The hex value is " + (char)('A' + value - 10));
    } else {
      System.out.println(value + " is an invalid input");
    }
  }
}
```

**Sample runs:**

```
Enter a decimal value (0-15): 11
The hex value is B
```

```
Enter a decimal value (0-15): 5
The hex value is 5
```

---

#### 4.12 (Hex to binary)

```java
import java.util.Scanner;

public class HexToBinary {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a hex digit: ");
    String hexString = input.nextLine();

    if (hexString.length() != 1) {
      System.out.println("You must enter exactly one character");
      System.exit(1);
    }

    char ch = Character.toUpperCase(hexString.charAt(0));

    if (ch >= '0' && ch <= '9') {
      int value = ch - '0';
      System.out.print("The binary value is ");
      // Convert decimal value to 4-bit binary
      System.out.print((value / 8) % 2);
      System.out.print((value / 4) % 2);
      System.out.print((value / 2) % 2);
      System.out.println(value % 2);
    } else if (ch >= 'A' && ch <= 'F') {
      int value = ch - 'A' + 10;
      System.out.print("The binary value is ");
      System.out.print((value / 8) % 2);
      System.out.print((value / 4) % 2);
      System.out.print((value / 2) % 2);
      System.out.println(value % 2);
    } else {
      System.out.println(ch + " is an invalid input");
    }
  }
}
```

---

#### 4.13 (Vowel or consonant?)

```java
import java.util.Scanner;

public class VowelOrConsonant {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a letter: ");
    String s = input.nextLine();
    char ch = s.charAt(0);

    if (!Character.isLetter(ch)) {
      System.out.println(ch + " is an invalid input");
    } else {
      ch = Character.toUpperCase(ch);
      if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
        System.out.println(ch + " is a vowel");
      } else {
        System.out.println(ch + " is a consonant");
      }
    }
  }
}
```

**Sample runs:**

```
Enter a letter: B
B is a consonant
```

```
Enter a letter: a
a is a vowel
```

---

#### 4.14 (Convert letter grade to number)

```java
import java.util.Scanner;

public class LetterGradeToNumber {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a letter grade: ");
    String s = input.nextLine();
    char grade = Character.toUpperCase(s.charAt(0));

    int numericValue;
    switch (grade) {
      case 'A': numericValue = 4; break;
      case 'B': numericValue = 3; break;
      case 'C': numericValue = 2; break;
      case 'D': numericValue = 1; break;
      case 'F': numericValue = 0; break;
      default:
        System.out.println(grade + " is an invalid grade");
        return;
    }

    System.out.println("The numeric value for grade " + grade + " is " + numericValue);
  }
}
```

**Sample runs:**

```
Enter a letter grade: B
The numeric value for grade B is 3
```

```
Enter a letter grade: b
The numeric value for grade B is 3
```

---

#### 4.15 (Phone keypads)

```java
import java.util.Scanner;

public class PhoneKeyPads {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a letter: ");
    String s = input.nextLine();
    char ch = Character.toUpperCase(s.charAt(0));

    int number;
    if (ch >= 'A' && ch <= 'C') number = 2;
    else if (ch >= 'D' && ch <= 'F') number = 3;
    else if (ch >= 'G' && ch <= 'I') number = 4;
    else if (ch >= 'J' && ch <= 'L') number = 5;
    else if (ch >= 'M' && ch <= 'O') number = 6;
    else if (ch >= 'P' && ch <= 'S') number = 7;
    else if (ch >= 'T' && ch <= 'V') number = 8;
    else if (ch >= 'W' && ch <= 'Z') number = 9;
    else {
      System.out.println(ch + " is an invalid input");
      return;
    }

    System.out.println("The corresponding number is " + number);
  }
}
```

**Sample run:**

```
Enter a letter: A
The corresponding number is 2
```

---

#### 4.16 (Random character)

```java
public class RandomCharacter {
  public static void main(String[] args) {
    // Generate a random uppercase letter (ASCII 65-90)
    char ch = (char)('A' + Math.random() * 26);
    System.out.println(ch);
  }
}
```

---

#### 4.17 (Days of a month)

```java
import java.util.Scanner;

public class DaysOfMonth {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a year: ");
    int year = input.nextInt();
    System.out.print("Enter a month (first three letters with the first letter in uppercase): ");
    String month = input.next();

    boolean isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

    int days;
    switch (month) {
      case "Jan": case "Mar": case "May": case "Jul":
      case "Aug": case "Oct": case "Dec":
        days = 31; break;
      case "Apr": case "Jun": case "Sep": case "Nov":
        days = 30; break;
      case "Feb":
        days = isLeapYear ? 29 : 28; break;
      default:
        System.out.println(month + " is not a correct month name");
        return;
    }

    System.out.println(month + " " + year + " has " + days + " days");
  }
}
```

**Sample runs:**

```
Enter a year: 2020
Enter a month: Feb
Feb 2020 has 29 days
```

```
Enter a year: 2021
Enter a month: Feb
Feb 2021 has 28 days
```

---

#### 4.18 (Student major and status)

```java
import java.util.Scanner;

public class StudentMajorStatus {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter two characters: ");
    String s = input.nextLine();
    char major = Character.toUpperCase(s.charAt(0));
    char status = s.charAt(1);

    String majorName;
    switch (major) {
      case 'M': majorName = "Mathematics"; break;
      case 'C': majorName = "Computer Science"; break;
      case 'I': majorName = "Information Technology"; break;
      default:
        System.out.println("Invalid major code");
        return;
    }

    String statusName;
    switch (status) {
      case '1': statusName = "Freshman"; break;
      case '2': statusName = "Sophomore"; break;
      case '3': statusName = "Junior"; break;
      case '4': statusName = "Senior"; break;
      default:
        System.out.println("Invalid status code");
        return;
    }

    System.out.println(majorName + " " + statusName);
  }
}
```

**Sample runs:**

```
Enter two characters: M1
Mathematics Freshman
```

```
Enter two characters: C3
Computer Science Junior
```

---

#### 4.19 (ISBN-10)

```java
import java.util.Scanner;

public class ISBN10 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the first 9 digits of an ISBN as integer: ");
    int isbn = input.nextInt();

    // Extract digits
    int d1 = isbn / 100000000;
    int remaining = isbn % 100000000;
    int d2 = remaining / 10000000;
    remaining %= 10000000;
    int d3 = remaining / 1000000;
    remaining %= 1000000;
    int d4 = remaining / 100000;
    remaining %= 100000;
    int d5 = remaining / 10000;
    remaining %= 10000;
    int d6 = remaining / 1000;
    remaining %= 1000;
    int d7 = remaining / 100;
    remaining %= 100;
    int d8 = remaining / 10;
    int d9 = remaining % 10;

    int checksum = (d1 * 1 + d2 * 2 + d3 * 3 + d4 * 4 + d5 * 5
      + d6 * 6 + d7 * 7 + d8 * 8 + d9 * 9) % 11;

    System.out.print("The ISBN-10 number is " + d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9);
    if (checksum == 10)
      System.out.println("X");
    else
      System.out.println(checksum);
  }
}
```

**Sample run:**

```
Enter the first 9 digits of an ISBN as integer: 013601267
The ISBN-10 number is 0136012671
```

---

#### 4.20 (Process a string)

```java
import java.util.Scanner;

public class ProcessString {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a string: ");
    String s = input.nextLine();

    System.out.println("Length: " + s.length());
    System.out.println("First character: " + s.charAt(0));
  }
}
```

**Sample run:**

```
Enter a string: Welcome to Java
Length: 15
First character: W
```

---

#### 4.21 (Check SSN)

```java
import java.util.Scanner;

public class CheckSSN {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a SSN (format DDD-DD-DDDD): ");
    String ssn = input.nextLine();

    boolean isValid = ssn.length() == 11
      && Character.isDigit(ssn.charAt(0))
      && Character.isDigit(ssn.charAt(1))
      && Character.isDigit(ssn.charAt(2))
      && ssn.charAt(3) == '-'
      && Character.isDigit(ssn.charAt(4))
      && Character.isDigit(ssn.charAt(5))
      && ssn.charAt(6) == '-'
      && Character.isDigit(ssn.charAt(7))
      && Character.isDigit(ssn.charAt(8))
      && Character.isDigit(ssn.charAt(9))
      && Character.isDigit(ssn.charAt(10));

    if (isValid)
      System.out.println(ssn + " is a valid social security number");
    else
      System.out.println(ssn + " is an invalid social security number");
  }
}
```

**Sample runs:**

```
Enter a SSN: 123-45-6789
123-45-6789 is a valid social security number
```

```
Enter a SSN: 123-45-678
123-45-678 is an invalid social security number
```

---

#### 4.22 (Check substring)

```java
import java.util.Scanner;

public class CheckSubstring {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter string s1: ");
    String s1 = input.nextLine();
    System.out.print("Enter string s2: ");
    String s2 = input.nextLine();

    if (s1.contains(s2))
      System.out.println(s2 + " is a substring of " + s1);
    else
      System.out.println(s2 + " is not a substring of " + s1);
  }
}
```

**Sample run:**

```
Enter string s1: ABC
Enter string s2: AB
AB is a substring of ABC
```

---

#### 4.23 (Financial application: payroll)

```java
import java.util.Scanner;

public class Payroll {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    System.out.print("Enter employee's name: ");
    String name = input.nextLine();
    System.out.print("Enter number of hours worked in a week: ");
    double hours = input.nextDouble();
    System.out.print("Enter hourly pay rate: ");
    double payRate = input.nextDouble();
    System.out.print("Enter federal tax withholding rate: ");
    double fedTaxRate = input.nextDouble();
    System.out.print("Enter state tax withholding rate: ");
    double stateTaxRate = input.nextDouble();

    double grossPay = hours * payRate;
    double fedWithholding = grossPay * fedTaxRate;
    double stateWithholding = grossPay * stateTaxRate;
    double totalDeduction = fedWithholding + stateWithholding;
    double netPay = grossPay - totalDeduction;

    System.out.printf("Employee Name: %s\n", name);
    System.out.printf("Hours Worked: %.1f\n", hours);
    System.out.printf("Pay Rate: $%.2f\n", payRate);
    System.out.printf("Gross Pay: $%.2f\n", grossPay);
    System.out.printf("Deductions:\n");
    System.out.printf("  Federal Withholding (%.1f%%): $%.2f\n", fedTaxRate * 100, fedWithholding);
    System.out.printf("  State Withholding (%.1f%%): $%.2f\n", stateTaxRate * 100, stateWithholding);
    System.out.printf("  Total Deduction: $%.2f\n", totalDeduction);
    System.out.printf("Net Pay: $%.2f\n", netPay);
  }
}
```

**Sample run:**

```
Enter employee's name: Smith
Enter number of hours worked in a week: 10
Enter hourly pay rate: 9.75
Enter federal tax withholding rate: 0.2
Enter state tax withholding rate: 0.09
Employee Name: Smith
Hours Worked: 10.0
Pay Rate: $9.75
Gross Pay: $97.50
Deductions:
  Federal Withholding (20.0%): $19.50
  State Withholding (9.0%): $8.78
  Total Deduction: $28.28
Net Pay: $69.22
```

---

#### 4.24 (Order three cities)

```java
import java.util.Scanner;

public class OrderThreeCities {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    System.out.print("Enter the first city: ");
    String city1 = input.nextLine();
    System.out.print("Enter the second city: ");
    String city2 = input.nextLine();
    System.out.print("Enter the third city: ");
    String city3 = input.nextLine();

    String temp;
    if (city1.compareTo(city2) > 0) {
      temp = city1; city1 = city2; city2 = temp;
    }
    if (city2.compareTo(city3) > 0) {
      temp = city2; city2 = city3; city3 = temp;
    }
    if (city1.compareTo(city2) > 0) {
      temp = city1; city1 = city2; city2 = temp;
    }

    System.out.println("The three cities in alphabetical order are " + city1 + " " + city2 + " " + city3);
  }
}
```

**Sample run:**

```
Enter the first city: Chicago
Enter the second city: Los Angeles
Enter the third city: Atlanta
The three cities in alphabetical order are Atlanta Chicago Los Angeles
```

---

#### 4.25 (Generate vehicle plate numbers)

```java
public class VehiclePlateNumbers {
  public static void main(String[] args) {
    // Three uppercase letters
    char ch1 = (char)('A' + Math.random() * 26);
    char ch2 = (char)('A' + Math.random() * 26);
    char ch3 = (char)('A' + Math.random() * 26);

    // Four digits
    int num = (int)(1000 + Math.random() * 9000);

    System.out.println("" + ch1 + ch2 + ch3 + num);
  }
}
```

---

#### 4.26 (Financial application: monetary units)

```java
import java.util.Scanner;

public class MonetaryUnits {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the amount in dollars and cents (e.g., 11.56): ");
    String amountStr = input.nextLine();

    // Find decimal point
    int decimalIndex = amountStr.indexOf('.');
    int dollars;
    int cents;

    if (decimalIndex == -1) {
      dollars = Integer.parseInt(amountStr);
      cents = 0;
    } else {
      dollars = Integer.parseInt(amountStr.substring(0, decimalIndex));
      String centsStr = amountStr.substring(decimalIndex + 1);
      // Pad or truncate to 2 digits
      if (centsStr.length() >= 2)
        cents = Integer.parseInt(centsStr.substring(0, 2));
      else
        cents = Integer.parseInt(centsStr) * 10;
    }

    int totalCents = dollars * 100 + cents;

    int quarters = totalCents / 25;
    totalCents %= 25;
    int dimes = totalCents / 10;
    totalCents %= 10;
    int nickels = totalCents / 5;
    int pennies = totalCents % 5;

    System.out.println("Your amount " + amountStr + " consists of");
    System.out.println("  " + dollars + " dollars");
    System.out.println("  " + quarters + " quarters");
    System.out.println("  " + dimes + " dimes");
    System.out.println("  " + nickels + " nickels");
    System.out.println("  " + pennies + " pennies");
  }
}
```

**Sample run:**

```
Enter the amount in dollars and cents (e.g., 11.56): 11.56
Your amount 11.56 consists of
  11 dollars
  2 quarters
  0 dimes
  1 nickels
   1 pennies
```

---

## Chapter 5: Loops

### CheckPoint Questions

---

#### 5.2.1 Analyze the following code. Is `count < 100` always `true`, always `false`, or sometimes `true` or sometimes `false` at Point A, Point B, and Point C?

```java
int count = 0;
while (count < 100) {
  // Point A
  System.out.println("Welcome to Java!");
  count++;
  // Point B
}
// Point C
```

- **Point A**: Always `true` (the condition was just checked and passed to enter the loop body)
- **Point B**: Sometimes `true`, sometimes `false` (after `count++`, if count reaches 100, the condition will be `false` at the next check)
- **Point C**: Always `false` (loop has exited, so the condition must be `false`)

---

#### 5.2.2 How many times are the following loop bodies repeated? What is the output?

**(a)**

```java
int i = 1;
while (i < 10)
  if (i % 2 == 0)
    System.out.println(i);
```

The loop body repeats infinitely because `i` is never incremented. This is an **infinite loop** — no output ever printed since `i` starts at 1 and `1 % 2 != 0`.

**(b)**

```java
int i = 1;
while (i < 10)
  if (i % 2 == 0)
    System.out.println(i++);
```

`i` is only incremented inside the `if` body. Initially `i = 1`, `1 % 2 != 0`, so the `if` body never executes. `i` never changes -> **infinite loop**.

**(c)**

```java
int i = 1;
while (i < 10)
  if ((i++) % 2 == 0)
    System.out.println(i);
```

This loop terminates. `i` is incremented in the condition check every iteration.

**Output:**

```
3
5
7
9
```

---

#### 5.2.3 What is the output of the following code? Explain the reason.

```java
int x = 80000000;

while (x > 0)
  x++;

System.out.println("x is " + x);
```

`x` keeps incrementing until it overflows past `Integer.MAX_VALUE` (2147483647). The next increment wraps to `Integer.MIN_VALUE` (-2147483648), which is not `> 0`, so the loop exits.

**Output:**

```
x is -2147483648
```

---

#### 5.3.1 What is wrong if `guess` is initialized to 0 in line 11 in Listing 5.3?

If `guess` is initialized to 0 and the magic number happens to be 0, the program would never enter the loop and would incorrectly report "Yes, the number is 0" when no guess was made. Initializing to -1 (outside the valid range 0-100) ensures the loop is entered at least once.

---

#### 5.4.1 Revise the code using `System.nanoTime()` to measure the time in nanoseconds.

```java
long startTime = System.nanoTime();
// ... test code ...
long endTime = System.nanoTime();
long testTime = endTime - startTime;  // time in nanoseconds
```

---

#### 5.5.1 Suppose the input is `2 3 4 5 0`. What is the output of the following code?

```java
import java.util.Scanner;

public class Test {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int number, max;
    number = input.nextInt(); max = number;

    while (number != 0) {
      number = input.nextInt();
      if (number > max)
        max = number;
    }

    System.out.println("max is " + max);
    System.out.println("number " + number);
  }
}
```

**Trace:**

- Read 2: `number = 2`, `max = 2`
- Iter 1: Read 3, `3 > 2` -> `max = 3`
- Iter 2: Read 4, `4 > 3` -> `max = 4`
- Iter 3: Read 5, `5 > 4` -> `max = 5`
- Iter 4: Read 0, `0 > 5` false, loop exits (number = 0)

**Output:**

```
max is 5
number 0
```

---

#### 5.6.1 Suppose the input is `2 3 4 5 0`. What is the output of the following code?

```java
import java.util.Scanner;

public class Test {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    int number, max;
    number = input.nextInt();
    max = number;

    do {
      number = input.nextInt();
      if (number > max)
        max = number;
    } while (number != 0);

    System.out.println("max is " + max);
    System.out.println("number " + number);
  }
}
```

Same output as 5.5.1 (the do-while reads one extra value at the start but the logic is equivalent):

```
max is 5
number 0
```

---

#### 5.6.2 What are the differences between a `while` loop and a `do-while` loop?

- **`while` loop**: Checks condition **before** executing body (pretest). Body may execute 0 times.
- **`do-while` loop**: Executes body **first**, then checks condition (posttest). Body executes **at least once**.

**Convert the `while` loop to `do-while`:**

```java
// Original while
Scanner input = new Scanner(System.in);
int sum = 0;
System.out.print("Enter an integer (the input ends if it is 0)");
int number = input.nextInt();
while (number != 0) {
  sum += number;
  System.out.print("Enter an integer (the input ends if it is 0)");
  number = input.nextInt();
}

// do-while conversion
Scanner input = new Scanner(System.in);
int sum = 0;
int number;
do {
  System.out.print("Enter an integer (the input ends if it is 0)");
  number = input.nextInt();
  sum += number;
} while (number != 0);
```

---

#### 5.7.1 Do the following two loops result in the same value in `sum`?

```java
// (a)
for (int i = 0; i < 10; ++i) { sum += i; }

// (b)
for (int i = 0; i < 10; i++) { sum += i; }
```

**Yes**, both produce `sum = 45`. In a `for` loop's action-after-each-iteration, `++i` and `i++` behave identically since the result is not used.

---

#### 5.7.2 What are the three parts of a `for` loop control? Write a `for` loop that prints 1 to 100.

1. **Initial action** — executes once before the loop
2. **Loop-continuation-condition** — checked before each iteration
3. **Action-after-each-iteration** — executed after each iteration body

```java
for (int i = 1; i <= 100; i++) {
  System.out.println(i);
}
```

---

#### 5.7.3 Suppose the input is `2 3 4 5 0`. What is the output?

```java
import java.util.Scanner;

public class Test {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int number, sum = 0, count;
    for (count = 0; count < 5; count++) {
      number = input.nextInt();
      sum += number;
    }
    System.out.println("sum is " + sum);
    System.out.println("count is " + count);
  }
}
```

**Output:**

```
sum is 14
count is 5
```

---

#### 5.7.4 What does `for ( ; ; ) { }` do?

Creates an **infinite loop**. The condition is omitted and defaults to `true`.

---

#### 5.7.5 If a variable is declared in a `for` loop control, can it be used after the loop exits?

**No.** The variable is scoped to the loop block. E.g., `for (int i = 0; ...)` — `i` cannot be used after the loop.

---

#### 5.7.6 Convert the `for` loop to `while` and `do-while`:

```java
long sum = 0;
for (int i = 0; i <= 1000; i++)
  sum = sum + i;
```

**`while` loop:**

```java
long sum = 0;
int i = 0;
while (i <= 1000) {
  sum = sum + i;
  i++;
}
```

**`do-while` loop:**

```java
long sum = 0;
int i = 0;
do {
  sum = sum + i;
  i++;
} while (i <= 1000);
```

---

#### 5.7.7 Count iterations:

**(a)** `while (count < n) { count++; }` — **n** iterations
**(b)** `for (count = 0; count <= n; count++) { }` — **n + 1** iterations
**(c)** `count = 5; while (count < n) { count++; }` — **max(0, n-5)** iterations
**(d)** `count = 5; while (count < n) { count += 3; }` — **max(0, ceil((n-5)/3))** iterations

---

#### 5.8.1 Can you convert a `for` loop to a `while` loop? Advantages of `for` loops?

**Yes**, any `for` loop can be converted.

**Advantages of `for`:** more concise, loop control variable scoped to loop, less error-prone when iteration count is known.

---

#### 5.8.2 Can you always convert a `while` loop into a `for` loop? Convert:

```java
int i = 1;
int sum = 0;
while (sum < 10000) {
  sum = sum + i;
  i++;
}
```

**Yes.** Equivalent `for` loop:

```java
int sum = 0;
for (int i = 1; sum < 10000; i++) {
  sum = sum + i;
}
```

---

#### 5.8.3 Identify and fix errors:

```java
// Line 2: missing `static` -> public static void main
// Line 3: semicolon after for -> for (int i = 0; i < 10; i++)
// Line 4: sum not declared, i out of scope
// Line 6: semicolon after if condition -> if (i < j)
// Line 7: missing semicolon after println
// Line 11: semicolon after while condition
// Line 18: missing semicolon after } while (j < 10);
```

---

#### 5.8.4 What is wrong?

**(a)** Missing semicolon after `do-while` — should be `} while (i < 10);`
**(b)** `for` has a semicolon ending it prematurely: `for (int i = 0; i < 10; i++);`

---

#### 5.9.1 How many times is `println` executed?

```java
for (int i = 0; i < 10; i++)
  for (int j = 0; j < i; j++)
    System.out.println(i * j);
```

Total = 0 + 1 + 2 + ... + 9 = **45 times**

---

#### 5.9.2 Show the output of the following programs:

**(a)**

```java
for (int i = 1; i < 5; i++) {
  int j = 0;
  while (j < i) {
    System.out.print(j + " ");
    j++;
  }
}
```

**Output:** `0 0 1 0 1 2 0 1 2 3 `

**(b)**

```java
int i = 0;
while (i < 5) {
  for (int j = i; j > 1; j--)
    System.out.print(j + " ");
  System.out.println("*****");
  i++;
}
```

**Output:**

```
*****
*****
2 *****
3 2 *****
4 3 2 *****
```

**(c)**

```java
int i = 5;
while (i >= 1) {
  int num = 1;
  for (int j = 1; j <= i; j++) {
    System.out.print(num + "xxx");
    num *= 2;
  }
  System.out.println();
  i--;
}
```

**Output:**

```
1xxx2xxx4xxx8xxx16xxx
1xxx2xxx4xxx8xxx
1xxx2xxx4xxx
1xxx2xxx
1xxx
```

**(d)**

```java
int i = 1;
do {
  int num = 1;
  for (int j = 1; j <= i; j++) {
    System.out.print(num + "G");
    num += 2;
  }
  System.out.println();
  i++;
} while (i <= 5);
```

**Output:**

```
1G
1G3G
1G3G5G
1G3G5G7G
1G3G5G7G9G
```

---

#### 5.11.1 What is `gcd(2, 8)`? `gcd(8, 2)`? `gcd(6, 7)`?

`gcd(2, 8) = 2`, `gcd(8, 2) = 2`, `gcd(6, 7) = 1`

---

#### 5.11.2 Rewrite gcd using a `do-while` loop:

```java
int gcd = Math.min(n1, n2);
do {
  if (n1 % gcd == 0 && n2 % gcd == 0)
    break;
  gcd--;
} while (gcd >= 1);
```

---

#### 5.11.3 Will the program work if `n1` and `n2` are negative?

No. The GCD algorithm assumes positive integers. Use `Math.abs()` for negative inputs.

---

#### 5.12.1 What are `break` and `continue` for?

- **`break`**: Immediately terminates the innermost loop/switch
- **`continue`**: Skips the rest of the current iteration, proceeds to next

**(a)** Terminates? Yes. `balance = 10 -> 1 -> 1 < 9 -> break`. Output: `Balance is 1`
**(b)** Terminates? **No** — infinite loop. When `balance = 1`, `continue` skips the decrement.

---

#### 5.12.2 What is wrong with the while conversion?

The `continue` in the `while` loop skips `i++`, causing an infinite loop when `i % 3 == 0`. Fix: increment before continue or restructure.

---

#### 5.14.1 Simplify lines 27-32 using a conditional operator:

```java
System.out.print((count % NUMBER_OF_PRIMES_PER_LINE == 0) ?
  (number + "\n") : (number + " "));
```

---

### Programming Exercises

#### 5.1 (Pass or fail)

```java
import java.util.Scanner;

public class PassOrFail {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int score;
    do {
      System.out.print("Enter your score: ");
      score = input.nextInt();
      if (score == -1) break;
      if (score >= 60)
        System.out.println("You pass the exam");
      else
        System.out.println("You don't pass the exam");
    } while (true);
  }
}
```

---

#### 5.2 (Repeat multiplications)

```java
import java.util.Scanner;

public class RepeatMultiplications {
  public static void main(String[] args) {
    final int NUMBER_OF_QUESTIONS = 10;
    int correctCount = 0;
    int count = 0;
    long startTime = System.currentTimeMillis();
    String output = "";
    Scanner input = new Scanner(System.in);

    while (count < NUMBER_OF_QUESTIONS) {
      int number1 = 1 + (int)(Math.random() * 12);
      int number2 = 1 + (int)(Math.random() * 12);

      System.out.print("What is " + number1 + " * " + number2 + "? ");
      int answer = input.nextInt();

      if (number1 * number2 == answer) {
        System.out.println("You are correct!");
        correctCount++;
      } else {
        System.out.println("Your answer is wrong. " + number1
          + " * " + number2 + " should be " + (number1 * number2));
      }

      count++;
      output += "\n" + number1 + "*" + number2 + "=" + answer
        + ((number1 * number2 == answer) ? " correct" : " wrong");
    }

    long endTime = System.currentTimeMillis();
    long testTime = endTime - startTime;
    System.out.println("Correct count is " + correctCount
      + "\nTest time is " + testTime / 1000 + " seconds\n" + output);
  }
}
```

---

#### 5.3 (Conversion from C to F)

```java
public class CelsiusToFahrenheit {
  public static void main(String[] args) {
    System.out.println("Celsius\tFahrenheit");
    for (int c = 0; c <= 100; c += 2) {
      System.out.printf("%d\t%.1f\n", c, c * 9.0 / 5 + 32);
    }
  }
}
```

---

#### 5.4 (Conversion from inch to cm)

```java
public class InchToCentimeter {
  public static void main(String[] args) {
    System.out.println("Inches\tCentimeters");
    for (int i = 1; i <= 10; i++)
      System.out.printf("%d\t%.2f\n", i, i * 2.54);
  }
}
```

---

#### 5.7 (Future tuition)

```java
public class FutureTuition {
  public static void main(String[] args) {
    double tuition = 10000;
    for (int year = 1; year <= 10; year++)
      tuition *= 1.06;
    System.out.printf("Tuition in 10 years: $%.2f\n", tuition);

    double total = 0;
    for (int i = 0; i < 4; i++) {
      total += tuition;
      tuition *= 1.06;
    }
    System.out.printf("Total for 4 years after 10th year: $%.2f\n", total);
  }
}
```

---

#### 5.8 (Highest score)

```java
import java.util.Scanner;

public class HighestScore {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter number of students: ");
    int n = input.nextInt();
    String topName = "";
    int topScore = Integer.MIN_VALUE;

    for (int i = 0; i < n; i++) {
      System.out.print("Enter name: ");
      String name = input.next();
      System.out.print("Enter score: ");
      int score = input.nextInt();
      if (score > topScore) {
        topScore = score;
        topName = name;
      }
    }
    System.out.println("Top: " + topName + " (" + topScore + ")");
  }
}
```

---

#### 5.10 (Numbers divisible by 3 and 4)

```java
public class DivisibleBy3And4 {
  public static void main(String[] args) {
    int count = 0;
    for (int i = 100; i <= 1000; i++) {
      if (i % 3 == 0 && i % 4 == 0) {
        System.out.print(i + " ");
        if (++count % 10 == 0) System.out.println();
      }
    }
  }
}
```

---

#### 5.12 (Smallest n such that n^3 > 12000)

```java
public class SmallestN {
  public static void main(String[] args) {
    int n = 1;
    while (n * n * n <= 12000) n++;
    System.out.println("Smallest n = " + n + " (n^3 = " + (n * n * n) + ")");
  }
}
```

**Answer:** n = 23 (23^3 = 12167)

---

#### 5.13 (Largest n such that n^2 < 12000)

```java
public class LargestN {
  public static void main(String[] args) {
    int n = 1;
    while (n * n < 12000) n++;
    System.out.println("Largest n = " + (n - 1) + " (n^2 = " + ((n-1)*(n-1)) + ")");
  }
}
```

**Answer:** n = 109 (109^2 = 11881)

---

#### 5.14 (GCD)

```java
import java.util.Scanner;

public class GCD {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter two positive integers: ");
    int n1 = input.nextInt();
    int n2 = input.nextInt();
    int d = Math.min(n1, n2);
    while (d >= 1) {
      if (n1 % d == 0 && n2 % d == 0) {
        System.out.println("GCD = " + d);
        break;
      }
      d--;
    }
  }
}
```

---

#### 5.15 (ASCII table)

```java
public class ASCIITable {
  public static void main(String[] args) {
    int count = 0;
    for (int i = 33; i <= 126; i++) {
      System.out.print((char)i + " ");
      if (++count % 10 == 0) System.out.println();
    }
  }
}
```

---

#### 5.16 (Factors of an integer)

```java
import java.util.Scanner;

public class FindFactors {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter an integer: ");
    int n = input.nextInt();
    int f = 2;
    while (n > 1) {
      if (n % f == 0) { System.out.print(f + " "); n /= f; }
      else f++;
    }
  }
}
```

**Sample:** 120 -> `2 2 2 3 5`

---

#### 5.17 (Display pyramid)

```java
import java.util.Scanner;

public class DisplayPyramid {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter lines (1-15): ");
    int lines = input.nextInt();

    for (int i = 1; i <= lines; i++) {
      for (int j = 1; j <= lines - i; j++) System.out.print("   ");
      for (int j = i; j >= 1; j--) System.out.printf("%-3d", j);
      for (int j = 2; j <= i; j++) System.out.printf("%-3d", j);
      System.out.println();
    }
  }
}
```

---

#### 5.20 (Prime numbers between 2 and 1000)

```java
public class PrimeNumbers {
  public static void main(String[] args) {
    int count = 0;
    for (int n = 2; n <= 1000; n++) {
      boolean prime = true;
      for (int d = 2; d <= n / 2; d++) {
        if (n % d == 0) { prime = false; break; }
      }
      if (prime) {
        System.out.print(n + " ");
        if (++count % 8 == 0) System.out.println();
      }
    }
  }
}
```

---

#### 5.33 (Perfect numbers)

```java
public class PerfectNumbers {
  public static void main(String[] args) {
    for (int i = 1; i <= 10000; i++) {
      int sum = 0;
      for (int j = 1; j < i; j++)
        if (i % j == 0) sum += j;
      if (sum == i) System.out.println(i + " is perfect");
    }
  }
}
```

**Output:** 6, 28, 496, 8128

---

#### 5.46 (Reverse a string)

```java
import java.util.Scanner;

public class ReverseString {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a string: ");
    String s = input.nextLine();
    String rev = "";
    for (int i = s.length() - 1; i >= 0; i--)
      rev += s.charAt(i);
    System.out.println("Reversed: " + rev);
  }
}
```

---

#### 5.51 (Longest common prefix)

```java
import java.util.Scanner;

public class LongestCommonPrefix {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter first string: ");
    String s1 = input.nextLine();
    System.out.print("Enter second string: ");
    String s2 = input.nextLine();

    int i = 0;
    while (i < s1.length() && i < s2.length() && s1.charAt(i) == s2.charAt(i))
      i++;

    if (i > 0)
      System.out.println("Common prefix: " + s1.substring(0, i));
    else
      System.out.println("No common prefix");
  }
}
```

---

## Chapter 6: Methods

### CheckPoint Questions

---

#### 6.1.1 What are the benefits of using a method?

- **Code reuse**: Write once, use many times
- **Modularity**: Break complex problems into smaller pieces
- **Easier debugging**: Isolate and fix issues in one place
- **Easier maintenance**: Change logic in one place
- **Readability**: Self-documenting code with meaningful method names

---

#### 6.2.1 How do you simplify the `max` method using the conditional operator?

```java
public static int max(int num1, int num2) {
  return (num1 > num2) ? num1 : num2;
}
```

---

#### 6.2.2 Define the terms parameter, argument, and method signature.

- **Parameter** (formal parameter): A variable defined in a method header that receives a value when the method is called (e.g., `int num1` in `max(int num1, int num2)`)
- **Argument** (actual parameter): The value passed to the method when it is invoked (e.g., `5` in `max(5, 3)`)
- **Method signature**: The combination of the method name and its parameter list (e.g., `max(int, int)`)

---

#### 6.3.1 How do you define a method? How do you invoke a method?

**Defining a method:**

```java
public static returnType methodName(parameterList) {
  // method body
}
```

**Invoking a method:**

- If value-returning: `type variable = methodName(arguments);`
- If void: `methodName(arguments);`

---

#### 6.3.2 Reformat the program using end-of-line brace style:

```java
public class Test {
  public static double method(double i, double j) {
    while (i < j) {
      j--;
    }
    return j;
  }
}
```

---

#### 6.4.1 True or false? A call to a method with a void return type is always a statement itself, but a call to a value-returning method cannot be a statement by itself.

**False.** A call to a value-returning method **can** be a statement by itself (though the return value is ignored in that case).

---

#### 6.4.2 What is the return type of a `main` method?

**`void`**. The `main` method does not return any value.

---

#### 6.4.3 What would be wrong with not writing a `return` statement in a value-returning method? Can you have a `return` statement in a void method? Does the `return` statement `return x + y;` in a void method cause syntax errors?

- Not writing a `return` statement in a value-returning method causes a **compile error**.
- Yes, you can have a `return` statement in a void method (just `return;` without a value).
- Yes, `return x + y;` in a void method causes a **syntax error** because a void method cannot return a value.

---

#### 6.4.4 Write method headers for the following:

```java
a. public static double computeCommission(double salesAmount, double commissionRate)
b. public static void displayCalendar(int month, int year)
c. public static double sqrt(double number)
d. public static boolean isEven(int number)
e. public static void displayMessage(String message, int times)
f. public static double monthlyPayment(double loanAmount, int years, double annualRate)
g. public static char toUpperCase(char lowercaseLetter)
```

---

#### 6.4.5 Identify and correct the errors:

```java
// Errors in original:
public class Test {
  public static method1(int n, m) {            // Error: missing return type, m needs type
    n += m;
    method2(3.4);                              // Error: cannot pass double to int parameter
  }

  public static int method2(int n) {
    if (n > 0) return 1;
    else if (n == 0) return 0;
    else if (n < 0) return -1;                 // Error: missing return for else case
  }
}

// Corrected:
public class Test {
  public static void method1(int n, int m) {
    n += m;
    method2((int)3.4);  // explicit cast
  }

  public static int method2(int n) {
    if (n > 0) return 1;
    else if (n == 0) return 0;
    else return -1;
  }
}
```

---

#### 6.5.1 How is an argument passed to a method? Can the argument have the same name as its parameter?

Arguments are passed **by value** — a copy of the argument's value is passed to the parameter. Yes, the argument can have the same name as the parameter; they are separate variables in different scopes.

---

#### 6.5.2 Identify and correct the errors:

```java
// Error: parameter order mismatch (call: nPrintln(5, "Welcome") but definition expects (String, int))
// Error: redeclaring n as local variable inside the method

// Corrected:
public class Test {
  public static void main(String[] args) {
    nPrintln("Welcome to Java!", 5);
  }

  public static void nPrintln(String message, int n) {
    for (int i = 0; i < n; i++)
      System.out.println(message);
  }
}
```

---

#### 6.5.3 What is pass-by-value? Show the result of the following programs.

**(a)** The `max` method does not change the caller's `max` variable:

```java
public static void main(String[] args) {
  int max = 0;
  max(1, 2, max);
  System.out.println(max);  // 0
}
```

**Output:** `0`

**(b)**

```java
public static void main(String[] args) {
  int i = 1;
  while (i <= 6) {
    method1(i, 2);
    i++;
  }
}

public static void method1(int i, int num) {
  for (int j = 1; j <= i; j++) {
    System.out.print(num + " ");
    num *= 2;
  }
  System.out.println();
}
```

**Output:**

```
2
2 4
2 4 8
2 4 8 16
2 4 8 16 32
2 4 8 16 32 64
```

---

#### 6.5.4 Show the call stack contents for (a):

Just before `max` is invoked — stack has `main` with `max=0`
Just as `max` is entered — stack has `main(max=0)` and `max(value1=1, value2=2, max=0)`
Just before `max` returns — same as above
Right after `max` returns — stack only has `main(max=0)`

---

#### 6.6.1 Trace `gcd(4, 6)`:

```java
gcd(4, 6):
  gcd(6, 4 % 6 = 4) -> gcd(6, 4)
    gcd(4, 6 % 4 = 2) -> gcd(4, 2)
      gcd(2, 4 % 2 = 0) -> return 2
```

**Return value:** 2

---

#### 6.6.2 Trace `isPrime(25)`:

```java
isPrime(25):
  for (int i = 2; i <= 25/2 = 12; i++)
    i=2: 25 % 2 = 1 -> not divisible
    i=3: 25 % 3 = 1 -> not divisible
    ...
    i=5: 25 % 5 = 0 -> return false
```

**Return value:** `false`

---

#### 6.7.1 What are the results?

- `hexCharToDecimal('B')` -> `10 + 'B' - 'A'` = `10 + 1` = **11**
- `hexCharToDecimal('7')` -> `'7' - '0'` = **7**
- `hexToDecimal("A9")` -> `(10 * 16 + 9)` = **169**

---

#### 6.8.1 What is method overloading?

**Method overloading** is defining multiple methods with the same name but different parameter lists (different number, types, or order of parameters).

- Yes, it is permissible to define two methods with the same name but different parameter types.
- **No**, it is NOT permissible to define two methods with the same name and parameter list but different return types or modifiers — this causes a compile error.

---

#### 6.8.2 What is wrong?

```java
public class Test {
  public static void method(int x) { }
  public static int method(int y) { return y; }
}
```

These two methods have the **same signature** (`method(int)`) but different return types. This is **not allowed** — overloading requires different parameter lists, not different return types.

---

#### 6.8.3 Which method is invoked?

Given:

```java
public static double m(double x, double y)
public static double m(int x, double y)
```

a. `m(4, 5)` -> `m(int, double)` (4 is int, 5 is int but best match is `int, double` since no `int, int` version exists)
Actually, let me reconsider. `m(4, 5)` has `int` and `int`. Neither signature is a perfect match.

- `m(int, double)` — first param matches (int->int), second needs widening (int->double)
- `m(double, double)` — both need widening

The most specific is `m(int, double)` since the first parameter is an exact match.

b. `m(4, 5.4)` -> `m(int, double)` (exact match)
c. `m(4.5, 5.4)` -> `m(double, double)` (exact match)

---

#### 6.9.1 What is a local variable?

A variable defined inside a method. It must be declared and assigned a value before use.

---

#### 6.9.2 What is the scope of a local variable?

The scope starts from the variable's declaration and continues to the end of the block that contains it. A method parameter's scope covers the entire method.

---

### Programming Exercises

#### 6.1 (Math: pentagonal numbers)

```java
public class PentagonalNumbers {
  public static int getPentagonalNumber(int n) {
    return n * (3 * n - 1) / 2;
  }

  public static void main(String[] args) {
    for (int i = 1; i <= 100; i++) {
      System.out.printf("%7d", getPentagonalNumber(i));
      if (i % 10 == 0) System.out.println();
    }
  }
}
```

---

#### 6.2 (Sum the digits in an integer)

```java
import java.util.Scanner;

public class SumDigits {
  public static int sumDigits(long n) {
    int sum = 0;
    while (n > 0) {
      sum += n % 10;
      n /= 10;
    }
    return sum;
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter an integer: ");
    long n = input.nextLong();
    System.out.println("Sum of digits: " + sumDigits(n));
  }
}
```

---

#### 6.3 (Palindrome integer)

```java
import java.util.Scanner;

public class PalindromeInteger {
  public static int reverse(int number) {
    int rev = 0;
    while (number > 0) {
      rev = rev * 10 + number % 10;
      number /= 10;
    }
    return rev;
  }

  public static boolean isPalindrome(int number) {
    return number == reverse(number);
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter an integer: ");
    int n = input.nextInt();
    System.out.println(n + (isPalindrome(n) ? " is" : " is not") + " a palindrome");
  }
}
```

---

#### 6.4 (Display an integer reversed)

```java
import java.util.Scanner;

public class ReverseDisplay {
  public static void reverse(int number) {
    while (number > 0) {
      System.out.print(number % 10);
      number /= 10;
    }
    System.out.println();
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter an integer: ");
    reverse(input.nextInt());
  }
}
```

---

#### 6.5 (Sort three numbers)

```java
import java.util.Scanner;

public class SortThreeNumbers {
  public static void displaySortedNumbers(double num1, double num2, double num3) {
    double temp;
    if (num1 < num2) { temp = num1; num1 = num2; num2 = temp; }
    if (num2 < num3) { temp = num2; num2 = num3; num3 = temp; }
    if (num1 < num2) { temp = num1; num1 = num2; num2 = temp; }
    System.out.println(num1 + " " + num2 + " " + num3);
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter three numbers: ");
    displaySortedNumbers(input.nextDouble(), input.nextDouble(), input.nextDouble());
  }
}
```

---

#### 6.6 (Display patterns)

```java
import java.util.Scanner;

public class DisplayPattern {
  public static void displayPattern(int n) {
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= n - i; j++)
        System.out.print("  ");
      for (int j = i; j >= 1; j--)
        System.out.print(j + " ");
      System.out.println();
    }
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter n: ");
    displayPattern(input.nextInt());
  }
}
```

---

#### 6.7 (Future investment value)

```java
import java.util.Scanner;

public class FutureInvestment {
  public static double futureInvestmentValue(double investment, double monthlyRate, int years) {
    return investment * Math.pow(1 + monthlyRate, years * 12);
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Amount invested: ");
    double amount = input.nextDouble();
    System.out.print("Annual interest rate: ");
    double rate = input.nextDouble();

    System.out.println("Years\tFuture Value");
    for (int y = 1; y <= 30; y++) {
      System.out.printf("%d\t%.2f\n", y,
        futureInvestmentValue(amount, rate / 1200, y));
    }
  }
}
```

---

#### 6.8 (Conversions between mile and kilometer)

```java
public class MileKilometer {
  public static double mileToKilometer(double mile) {
    return mile * 1.6;
  }

  public static double kilometerToMile(double kilometer) {
    return kilometer / 1.6;
  }

  public static void main(String[] args) {
    System.out.println("Miles\tKilometers\t|\tKilometers\tMiles");
    double km = 20;
    for (int mile = 1; mile <= 10; mile++) {
      System.out.printf("%d\t%.3f\t\t|\t%.0f\t\t%.3f\n",
        mile, mileToKilometer(mile), km, kilometerToMile(km));
      km += 5;
    }
  }
}
```

---

#### 6.10 (Use the isPrime Method)

```java
public class CountPrimes {
  public static boolean isPrime(int number) {
    for (int d = 2; d <= number / 2; d++)
      if (number % d == 0) return false;
    return true;
  }

  public static void main(String[] args) {
    int count = 0;
    for (int i = 2; i < 10000; i++)
      if (isPrime(i)) count++;
    System.out.println("Prime numbers less than 10000: " + count);
  }
}
```

---

#### 6.12 (Display numbers)

```java
public class DisplayNumbers {
  public static void printNumbers(int num1, int num2, int numberPerLine) {
    int count = 0;
    for (int i = num1; i <= num2; i++) {
      System.out.print(i + " ");
      if (++count % numberPerLine == 0) System.out.println();
    }
  }

  public static void main(String[] args) {
    printNumbers(1, 100, 10);
  }
}
```

---

#### 6.17 (Display matrix of 0s and 1s)

```java
import java.util.Scanner;

public class DisplayMatrix {
  public static void printMatrix(int n) {
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++)
        System.out.print((int)(Math.random() * 2) + " ");
      System.out.println();
    }
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter n: ");
    printMatrix(input.nextInt());
  }
}
```

---

#### 6.18 (Check password)

```java
import java.util.Scanner;

public class CheckPassword {
  public static boolean isValidPassword(String password) {
    if (password.length() < 10) return false;

    int digitCount = 0;
    for (int i = 0; i < password.length(); i++) {
      char ch = password.charAt(i);
      if (!Character.isLetterOrDigit(ch)) return false;
      if (Character.isDigit(ch)) digitCount++;
    }
    return digitCount >= 3;
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a password: ");
    String pwd = input.nextLine();
    System.out.println(isValidPassword(pwd) ? "Valid Password" : "Invalid Password");
  }
}
```

---

#### 6.19 (Triangles)

```java
import java.util.Scanner;

public class Triangles {
  public static boolean isValid(double side1, double side2, double side3) {
    return (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1);
  }

  public static double area(double side1, double side2, double side3) {
    double s = (side1 + side2 + side3) / 2;
    return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter three sides: ");
    double s1 = input.nextDouble();
    double s2 = input.nextDouble();
    double s3 = input.nextDouble();

    if (isValid(s1, s2, s3))
      System.out.println("Area: " + area(s1, s2, s3));
    else
      System.out.println("Invalid input");
  }
}
```

---

#### 6.20 (Count the letters in a string)

```java
import java.util.Scanner;

public class CountLetters {
  public static int countLetters(String s) {
    int count = 0;
    for (int i = 0; i < s.length(); i++)
      if (Character.isLetter(s.charAt(i))) count++;
    return count;
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a string: ");
    String s = input.nextLine();
    System.out.println("Letters: " + countLetters(s));
  }
}
```

---

#### 6.21 (Phone keypads)

```java
import java.util.Scanner;

public class PhoneKeypads {
  public static int getNumber(char uppercaseLetter) {
    if (uppercaseLetter >= 'A' && uppercaseLetter <= 'C') return 2;
    if (uppercaseLetter >= 'D' && uppercaseLetter <= 'F') return 3;
    if (uppercaseLetter >= 'G' && uppercaseLetter <= 'I') return 4;
    if (uppercaseLetter >= 'J' && uppercaseLetter <= 'L') return 5;
    if (uppercaseLetter >= 'M' && uppercaseLetter <= 'O') return 6;
    if (uppercaseLetter >= 'P' && uppercaseLetter <= 'S') return 7;
    if (uppercaseLetter >= 'T' && uppercaseLetter <= 'V') return 8;
    if (uppercaseLetter >= 'W' && uppercaseLetter <= 'Z') return 9;
    return 0;
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a string: ");
    String s = input.nextLine();

    for (int i = 0; i < s.length(); i++) {
      char ch = s.charAt(i);
      if (Character.isLetter(ch))
        System.out.print(getNumber(Character.toUpperCase(ch)));
      else
        System.out.print(ch);
    }
    System.out.println();
  }
}
```

---

#### 6.22 (Math: approximate the square root)

```java
import java.util.Scanner;

public class ApproxSqrt {
  public static double sqrt(long n) {
    double lastGuess = 1.0;
    double nextGuess;
    do {
      nextGuess = (lastGuess + n / lastGuess) / 2;
      if (Math.abs(nextGuess - lastGuess) < 0.0001)
        break;
      lastGuess = nextGuess;
    } while (true);
    return nextGuess;
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a positive number: ");
    long n = input.nextLong();
    System.out.println("Approx sqrt: " + sqrt(n));
    System.out.println("Math.sqrt: " + Math.sqrt(n));
  }
}
```

---

#### 6.23 (Occurrences of a specified character)

```java
import java.util.Scanner;

public class CountChar {
  public static int count(String str, char a) {
    int count = 0;
    for (int i = 0; i < str.length(); i++)
      if (str.charAt(i) == a) count++;
    return count;
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a string: ");
    String s = input.nextLine();
    System.out.print("Enter a character: ");
    char ch = input.nextLine().charAt(0);
    System.out.println(count(s, ch));
  }
}
```

---

#### 6.25 (Convert milliseconds)

```java
import java.util.Scanner;

public class ConvertMillis {
  public static String convertMillis(long millis) {
    long totalSeconds = millis / 1000;
    long seconds = totalSeconds % 60;
    long totalMinutes = totalSeconds / 60;
    long minutes = totalMinutes % 60;
    long hours = totalMinutes / 60;
    return hours + ":" + minutes + ":" + seconds;
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter milliseconds: ");
    System.out.println(convertMillis(input.nextLong()));
  }
}
```

---

#### 6.26 (Palindromic prime)

```java
public class PalindromicPrime {
  public static boolean isPrime(int n) {
    for (int d = 2; d <= n / 2; d++)
      if (n % d == 0) return false;
    return true;
  }

  public static int reverse(int n) {
    int rev = 0;
    while (n > 0) {
      rev = rev * 10 + n % 10;
      n /= 10;
    }
    return rev;
  }

  public static boolean isPalindrome(int n) {
    return n == reverse(n);
  }

  public static void main(String[] args) {
    int count = 0, num = 2;
    while (count < 120) {
      if (isPrime(num) && isPalindrome(num)) {
        System.out.print(num + " ");
        if (++count % 10 == 0) System.out.println();
      }
      num++;
    }
  }
}
```

---

#### 6.28 (Mersenne prime)

```java
public class MersennePrime {
  public static boolean isPrime(int n) {
    for (int d = 2; d <= n / 2; d++)
      if (n % d == 0) return false;
    return true;
  }

  public static void main(String[] args) {
    System.out.println("p\t2^p - 1");
    for (int p = 2; p <= 31; p++) {
      long mersenne = (long)Math.pow(2, p) - 1;
      if (isPrime((int)mersenne))
        System.out.println(p + "\t" + mersenne);
    }
  }
}
```

---

#### 6.35 (Geometry: area of a pentagon)

```java
import java.util.Scanner;

public class PentagonArea {
  public static double area(double side) {
    return (5 * side * side) / (4 * Math.tan(Math.PI / 5));
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the side: ");
    System.out.println("Area: " + area(input.nextDouble()));
  }
}
```

---

#### 6.36 (Geometry: area of a regular polygon)

```java
import java.util.Scanner;

public class RegularPolygonArea {
  public static double area(int n, double side) {
    return (n * side * side) / (4 * Math.tan(Math.PI / n));
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter number of sides: ");
    int n = input.nextInt();
    System.out.print("Enter side: ");
    System.out.println("Area: " + area(n, input.nextDouble()));
  }
}
```

---

#### 6.37 (Format an integer)

```java
import java.util.Scanner;

public class FormatInteger {
  public static String format(int number, int width) {
    String s = number + "";
    if (s.length() >= width) return s;
    int zeros = width - s.length();
    String result = "";
    for (int i = 0; i < zeros; i++)
      result += "0";
    return result + s;
  }

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter number: ");
    int num = input.nextInt();
    System.out.print("Enter width: ");
    int w = input.nextInt();
    System.out.println(format(num, w));
  }
}
```

---

#### 6.38 (Generate random characters)

```java
public class RandomChars {
  public static char getRandomChar(char ch1, char ch2) {
    return (char)(ch1 + Math.random() * (ch2 - ch1 + 1));
  }

  public static void main(String[] args) {
    for (int i = 0; i < 200; i++) {
      System.out.print(getRandomChar('A', 'Z') + " ");
      if ((i + 1) % 10 == 0) System.out.println();
    }
    System.out.println();

    for (int i = 0; i < 200; i++) {
      System.out.print(getRandomChar('0', '9') + " ");
      if ((i + 1) % 10 == 0) System.out.println();
    }
    System.out.println();
  }
}
```

# Chapters 7–9: Questions & Solutions

> Compiled from _Introduction to Java Programming, 12th Edition_ — Y. Daniel Liang
> CheckPoints, Quizzes, and Programming Exercises with complete solutions.

---

# Chapter 7: Single-Dimensional Arrays

## CheckPoint Questions

### 7.2.1

**Q:** How do you declare an array reference variable and how do you create an array?

**A:**

```java
int[] myList;          // declaration
myList = new int[10];  // creation
// Or combined:
int[] myList = new int[10];
```

### 7.2.2

**Q:** When is memory allocated for an array?

**A:** When the `new` operator is used. Declaration alone (`int[] myList;`) only creates a reference variable.

### 7.2.3

**Q:** Is `int[] myList = new int[10]; myList[10] = 5;` correct?

**A:** No. Index 10 is out of bounds for size 10 (valid: 0–9). Throws `ArrayIndexOutOfBoundsException`.

### 7.2.4

**Q:** What is the output of:

```java
int x = 30;
int[] numbers = new int[x];
x = 60;
System.out.println("x is " + x);
System.out.println("The size of numbers is " + numbers.length);
```

**A:**

```
x is 60
The size of numbers is 30
```

### 7.2.5

**Q:** What is the output of:

```java
int[] myList = new int[10];
System.out.println(myList[5]);
```

**A:** `0` — numeric array elements are initialized to 0.

### 7.2.6

**Q:** What are array index bounds?

**A:** 0 to arraySize-1. Out-of-bounds access throws `ArrayIndexOutOfBoundsException`.

### 7.2.7

**Q:** Difference between `length` for String vs array?

**A:** `String` uses `length()` method; array `length` is a data field (no parentheses).

### 7.2.8

**Q:** How does Java handle out-of-bounds indices?

**A:** Runtime bounds checking — throws `ArrayIndexOutOfBoundsException`.

### 7.3.1

**Q:** Output of:

```java
int[] myList = {1, 2, 3, 4, 5, 6};
for (int i = myList.length - 2; i >= 0; i--) myList[i + 1] = myList[i];
for (int v : myList) System.out.print(v + " ");
```

**A:** `1 1 2 3 4 5` (elements shifted right)

### 7.3.2

**Q:** Output of:

```java
int[] myList = {1, 2, 3, 4, 5, 6};
for (int i = 0; i < myList.length - 1; i++) myList[i + 1] = myList[i];
for (int v : myList) System.out.print(v + " ");
```

**A:** `1 1 1 1 1 1` (all elements become 1)

### 7.3.3–7.3.6

**Q:** How to sum, find max, shuffle, shift elements?

**A:**

```java
// Sum
int sum = 0;
for (int v : list) sum += v;

// Find max
double max = list[0];
for (int i = 1; i < list.length; i++) if (list[i] > max) max = list[i];

// Shuffle (Fisher-Yates)
for (int i = list.length - 1; i > 0; i--) {
  int j = (int)(Math.random() * (i + 1));
  int temp = list[i]; list[i] = list[j]; list[j] = temp;
}

// Shift left
for (int i = 0; i < list.length - 1; i++) list[i] = list[i + 1];
```

### 7.4.1

**Q:** When to use for-each vs regular for loop?

**A:** For-each for read-only sequential access; regular for when you need the index or need to modify elements.

### 7.5.1

**Q:** Output of:

```java
int[] list1 = {2, 4, 6, 8, 10};
int[] list2 = {1, 3, 5, 7, 9};
list1 = list2;
list2[0] = 99;
System.out.println(list1[0]);
```

**A:** `99` — after reference assignment, both reference the same array.

### 7.5.2

**Q:** Three ways to copy an array?

**A:**

```java
// 1. Loop
for (int i = 0; i < src.length; i++) dest[i] = src[i];

// 2. System.arraycopy
System.arraycopy(src, 0, dest, 0, src.length);

// 3. Arrays.copyOf
int[] dest = Arrays.copyOf(src, src.length);
```

### 7.6.1

**Q:** Output of:

```java
int x = 1;
int[] y = new int[10];
m(x, y);
System.out.println("x is " + x + ", y[0] is " + y[0]);
// m: number = 1001; numbers[0] = 5555;
```

**A:** `x is 1, y[0] is 5555` — primitives passed by value, array contents modifiable.

### 7.6.2

**Q:** Output of array reference swap trick?

**A:** Array references are passed by value — swapping them inside the method doesn't affect the caller's variables.

### 7.7.1

**Q:** Code to reverse an array?

**A:** The provided code is correct — creates new array and fills in reverse order.

### 7.8.1–7.8.3

**Q:** Variable-length arguments?

**A:**

- `max(1, 2, 3)` returns `3`
- Only one vararg per method; must be last parameter.
- `m(String... s, double... d)` is invalid (two varargs).

### 7.9.1

**Q:** Linear vs binary search?

**A:** Linear: O(n), unsorted OK. Binary: O(log n), requires sorted array.

### 7.10.1–7.10.2

**Q:** Selection sort on `{10,9,8,7,6,5,4,3,2,1}`?

**A:** Output: `1 2 3 4 5 6 7 8 9 10`

### 7.11.1–7.11.3

**Q:** Arrays class methods?

**A:** `sort`, `binarySearch`, `equals`, `fill`, `toString`, `copyOf`, `copyOfRange`. `copyOf(list, 10)` pads with 0s; `copyOf(list, 3)` takes first 3.

### 7.12.1–7.12.2

**Q:** Command-line arguments?

**A:** `main(String[] args)` — run as `java Test 1 2 3` -> `args[0]="1"`, etc.

### 7.13.1–7.13.2

**Q:** Varargs must be last parameter.

**A:** `method(int... x, int y)` is **invalid**.

---

## Quiz

> Answer the quiz for this chapter online at the book Companion Website.

---

## Programming Exercises

### 7.1 — Assign grades

```java
import java.util.Scanner;

public class Exercise07_01 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter the number of students: ");
    int n = input.nextInt();
    int[] scores = new int[n];
    System.out.print("Enter " + n + " scores: ");
    int best = 0;
    for (int i = 0; i < n; i++) {
      scores[i] = input.nextInt();
      if (scores[i] > best) best = scores[i];
    }
    for (int i = 0; i < n; i++) {
      char grade;
      if (scores[i] >= best - 10) grade = 'A';
      else if (scores[i] >= best - 20) grade = 'B';
      else if (scores[i] >= best - 30) grade = 'C';
      else if (scores[i] >= best - 40) grade = 'D';
      else grade = 'F';
      System.out.println("Student " + i + " score is " + scores[i] + " and grade is " + grade);
    }
  }
}
```

### 7.2 — Reverse the numbers entered

```java
import java.util.Scanner;

public class Exercise07_02 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int[] numbers = new int[10];
    System.out.print("Enter ten integers: ");
    for (int i = 0; i < 10; i++) numbers[i] = input.nextInt();
    System.out.print("The numbers in reverse order: ");
    for (int i = 9; i >= 0; i--) System.out.print(numbers[i] + " ");
    System.out.println();
  }
}
```

### 7.3 — Count occurrence of numbers

```java
import java.util.Scanner;

public class Exercise07_03 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int[] counts = new int[101];
    System.out.print("Enter integers between 1 and 100 (end with 0): ");
    int num = input.nextInt();
    while (num != 0) {
      if (num >= 1 && num <= 100) counts[num]++;
      num = input.nextInt();
    }
    for (int i = 1; i <= 100; i++)
      if (counts[i] > 0)
        System.out.println(i + " occurs " + counts[i] + (counts[i] > 1 ? " times" : " time"));
  }
}
```

### 7.4 — Analyze scores

```java
import java.util.Scanner;

public class Exercise07_04 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int[] scores = new int[100];
    int count = 0, sum = 0;
    System.out.print("Enter scores (negative to quit): ");
    int score = input.nextInt();
    while (score >= 0 && count < 100) {
      scores[count] = score; sum += score; count++;
      score = input.nextInt();
    }
    double avg = (double) sum / count;
    int above = 0, below = 0;
    for (int i = 0; i < count; i++)
      if (scores[i] >= avg) above++; else below++;
    System.out.println("Average: " + avg + "\nAbove or equal: " + above + "\nBelow: " + below);
  }
}
```

### 7.5 — Print distinct numbers

```java
import java.util.Scanner;

public class Exercise07_05 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int[] distinct = new int[10];
    int count = 0;
    System.out.print("Enter ten numbers: ");
    for (int i = 0; i < 10; i++) {
      int num = input.nextInt();
      boolean dup = false;
      for (int j = 0; j < count; j++) if (num == distinct[j]) { dup = true; break; }
      if (!dup) distinct[count++] = num;
    }
    System.out.print("The distinct numbers are: ");
    for (int i = 0; i < count; i++) System.out.print(distinct[i] + " ");
    System.out.println();
  }
}
```

### 7.6 — Revise Listing 5.15 (Prime numbers)

```java
public class Exercise07_06 {
  public static void main(String[] args) {
    int[] primes = new int[50];
    int count = 0, number = 2;
    while (count < 50) {
      boolean isPrime = true;
      for (int i = 0; i < count && primes[i] <= Math.sqrt(number); i++)
        if (number % primes[i] == 0) { isPrime = false; break; }
      if (isPrime) primes[count++] = number;
      number++;
    }
    for (int i = 0; i < 50; i++) {
      System.out.printf("%4d ", primes[i]);
      if ((i + 1) % 5 == 0) System.out.println();
    }
  }
}
```

### 7.7 — Count single digits

```java
public class Exercise07_07 {
  public static void main(String[] args) {
    int[] counts = new int[10];
    for (int i = 0; i < 100; i++) counts[(int)(Math.random() * 10)]++;
    for (int i = 0; i < 10; i++) System.out.println(i + " appears " + counts[i] + " times");
  }
}
```

### 7.8 — Average an array

```java
public class Exercise07_08 {
  public static int average(int[] array) {
    int sum = 0; for (int v : array) sum += v; return sum / array.length;
  }
  public static double average(double[] array) {
    double sum = 0; for (double v : array) sum += v; return sum / array.length;
  }
}
```

### 7.9 — Find the smallest element

```java
public class Exercise07_09 {
  public static double min(double[] array) {
    double min = array[0];
    for (int i = 1; i < array.length; i++) if (array[i] < min) min = array[i];
    return min;
  }
}
```

### 7.10 — Index of smallest element

```java
public class Exercise07_10 {
  public static int indexOfSmallestElement(double[] array) {
    int idx = 0;
    for (int i = 1; i < array.length; i++) if (array[i] < array[idx]) idx = i;
    return idx;
  }
}
```

### 7.11 — Statistics: compute deviation

```java
public class Exercise07_11 {
  public static double mean(double[] x) {
    double sum = 0; for (double v : x) sum += v; return sum / x.length;
  }
  public static double deviation(double[] x) {
    double m = mean(x), sum = 0;
    for (double v : x) sum += Math.pow(v - m, 2);
    return Math.sqrt(sum / (x.length - 1));
  }
}
```

### 7.12 — Reverse an array

```java
public class Exercise07_12 {
  public static int[] reverse(int[] array) {
    int[] r = new int[array.length];
    for (int i = 0, j = array.length - 1; i < array.length; i++, j--) r[j] = array[i];
    return r;
  }
}
```

### 7.13 — Random number selector

```java
public class Exercise07_13 {
  public static int getRandom(int... numbers) {
    int num;
    do { num = 1 + (int)(Math.random() * 54); } while (contains(numbers, num));
    return num;
  }
  public static boolean contains(int[] arr, int key) {
    for (int v : arr) if (v == key) return true;
    return false;
  }
}
```

### 7.14 — Computing gcd

```java
public class Exercise07_14 {
  public static int gcd(int... numbers) {
    int r = numbers[0];
    for (int i = 1; i < numbers.length; i++) r = gcd2(r, numbers[i]);
    return r;
  }
  private static int gcd2(int a, int b) {
    while (b != 0) { int t = b; b = a % b; a = t; }
    return a;
  }
}
```

### 7.15 — Eliminate duplicates

```java
public class Exercise07_15 {
  public static int[] eliminateDuplicates(int[] list) {
    int[] t = new int[list.length];
    int c = 0;
    for (int v : list) {
      boolean dup = false;
      for (int j = 0; j < c; j++) if (v == t[j]) { dup = true; break; }
      if (!dup) t[c++] = v;
    }
    return java.util.Arrays.copyOf(t, c);
  }
}
```

### 7.16 — Execution time

```java
import java.util.Arrays;

public class Exercise07_16 {
  public static void main(String[] args) {
    int[] numbers = new int[100_000];
    for (int i = 0; i < numbers.length; i++) numbers[i] = (int)(Math.random() * 100_000);
    int key = (int)(Math.random() * 100_000);
    long start = System.nanoTime();
    linearSearch(numbers, key);
    long end = System.nanoTime();
    System.out.println("Linear: " + (end - start) + " ns");
    Arrays.sort(numbers);
    start = System.nanoTime();
    Arrays.binarySearch(numbers, key);
    end = System.nanoTime();
    System.out.println("Binary: " + (end - start) + " ns");
  }
  public static int linearSearch(int[] list, int key) {
    for (int i = 0; i < list.length; i++) if (list[i] == key) return i;
    return -1;
  }
}
```

### 7.17 — Sort students

```java
import java.util.Scanner;

public class Exercise07_17 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter number of students: ");
    int n = input.nextInt();
    String[] names = new String[n];
    int[] scores = new int[n];
    for (int i = 0; i < n; i++) {
      System.out.print("Enter student name: "); names[i] = input.next();
      System.out.print("Enter score: "); scores[i] = input.nextInt();
    }
    for (int i = 0; i < n - 1; i++) {
      int max = i;
      for (int j = i + 1; j < n; j++) if (scores[j] > scores[max]) max = j;
      int ts = scores[i]; scores[i] = scores[max]; scores[max] = ts;
      String tn = names[i]; names[i] = names[max]; names[max] = tn;
    }
    for (int i = 0; i < n; i++) System.out.println(names[i] + ": " + scores[i]);
  }
}
```

### 7.18 — Bubble sort

```java
public class Exercise07_18 {
  public static void bubbleSort(double[] list) {
    boolean changed;
    do {
      changed = false;
      for (int i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i + 1]) {
          double t = list[i]; list[i] = list[i + 1]; list[i + 1] = t;
          changed = true;
        }
      }
    } while (changed);
  }
}
```

### 7.19 — Sorted?

```java
public class Exercise07_19 {
  public static boolean isSorted(int[] list) {
    for (int i = 0; i < list.length - 1; i++) if (list[i] > list[i + 1]) return false;
    return true;
  }
}
```

### 7.20 — Revise selection sort (find max)

```java
public class Exercise07_20 {
  public static void selectionSort(double[] list) {
    for (int i = list.length - 1; i > 0; i--) {
      int max = 0;
      for (int j = 1; j <= i; j++) if (list[j] > list[max]) max = j;
      double t = list[i]; list[i] = list[max]; list[max] = t;
    }
  }
}
```

### 7.21 — Game: bean machine

```java
import java.util.Scanner;

public class Exercise07_21 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter number of balls: "); int balls = input.nextInt();
    System.out.print("Enter number of slots: "); int slots = input.nextInt();
    int[] counts = new int[slots];
    for (int b = 0; b < balls; b++) {
      int pos = 0;
      String path = "";
      for (int peg = 0; peg < slots - 1; peg++) {
        if (Math.random() < 0.5) path += "L";
        else { path += "R"; pos++; }
      }
      System.out.println("Ball " + b + ": " + path);
      counts[pos]++;
    }
    int max = 0;
    for (int c : counts) if (c > max) max = c;
    for (int h = max; h > 0; h--) {
      for (int s = 0; s < slots; s++) System.out.print(counts[s] >= h ? "O" : " ");
      System.out.println();
    }
    for (int s = 0; s < slots; s++) System.out.print("-");
    System.out.println();
  }
}
```

### 7.22 — Game: Eight Queens

```java
public class Exercise07_22 {
  public static void main(String[] args) {
    int[] queens = new int[8];
    for (int i = 0; i < 8; i++) queens[i] = -1;
    solve(0, queens);
    for (int r = 0; r < 8; r++) {
      for (int c = 0; c < 8; c++) System.out.print(queens[r] == c ? "|Q" : "| ");
      System.out.println("|");
    }
  }
  public static boolean solve(int row, int[] queens) {
    if (row == 8) return true;
    for (int col = 0; col < 8; col++) {
      if (isValid(row, col, queens)) {
        queens[row] = col;
        if (solve(row + 1, queens)) return true;
        queens[row] = -1;
      }
    }
    return false;
  }
  public static boolean isValid(int row, int col, int[] queens) {
    for (int i = 0; i < row; i++)
      if (queens[i] == col || Math.abs(queens[i] - col) == Math.abs(i - row)) return false;
    return true;
  }
}
```

### 7.23 — Game: locker puzzle

```java
public class Exercise07_23 {
  public static void main(String[] args) {
    boolean[] lockers = new boolean[100];
    for (int s = 1; s <= 100; s++)
      for (int l = s - 1; l < 100; l += s) lockers[l] = !lockers[l];
    System.out.print("Open lockers: ");
    for (int i = 0; i < 100; i++) if (lockers[i]) System.out.print((i + 1) + " ");
    System.out.println();
  }
}
```

**Note:** Open lockers are perfect squares: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.

### 7.24 — Simulation: coupon collector

```java
public class Exercise07_24 {
  public static void main(String[] args) {
    String[] suits = {"Spades", "Clubs", "Hearts", "Diamonds"};
    String[] ranks = {"Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"};
    boolean[] picked = new boolean[4];
    int count = 0;
    while (!picked[0] || !picked[1] || !picked[2] || !picked[3]) {
      int card = (int)(Math.random() * 52);
      int suit = card / 13, rank = card % 13;
      if (!picked[suit]) { picked[suit] = true; System.out.println(ranks[rank] + " of " + suits[suit]); }
      count++;
    }
    System.out.println("Number of picks: " + count);
  }
}
```

### 7.25 — Algebra: solve quadratic equations

```java
public class Exercise07_25 {
  public static int solveQuadratic(double[] eqn, double[] roots) {
    double a = eqn[0], b = eqn[1], c = eqn[2], d = b * b - 4 * a * c;
    if (d > 0) { roots[0] = (-b + Math.sqrt(d)) / (2 * a); roots[1] = (-b - Math.sqrt(d)) / (2 * a); return 2; }
    if (d == 0) { roots[0] = -b / (2 * a); return 1; }
    return 0;
  }
}
```

### 7.26 — Strictly identical arrays

```java
public class Exercise07_26 {
  public static boolean equals(int[] list1, int[] list2) {
    if (list1.length != list2.length) return false;
    for (int i = 0; i < list1.length; i++) if (list1[i] != list2[i]) return false;
    return true;
  }
}
```

### 7.27 — Identical arrays (same contents, any order)

```java
import java.util.Arrays;

public class Exercise07_27 {
  public static boolean equals(int[] list1, int[] list2) {
    if (list1.length != list2.length) return false;
    int[] c1 = list1.clone(), c2 = list2.clone();
    Arrays.sort(c1); Arrays.sort(c2); return Arrays.equals(c1, c2);
  }
}
```

### 7.28 — Math: combinations

```java
import java.util.Scanner;

public class Exercise07_28 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int[] n = new int[10];
    System.out.print("Enter ten numbers: ");
    for (int i = 0; i < 10; i++) n[i] = input.nextInt();
    for (int i = 0; i < 9; i++) for (int j = i + 1; j < 10; j++) System.out.println(n[i] + " " + n[j]);
  }
}
```

### 7.29 — Game: pick four cards

```java
public class Exercise07_29 {
  public static void main(String[] args) {
    String[] ranks = {"Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"};
    int sum = 0;
    for (int i = 0; i < 4; i++) {
      int r = (int)(Math.random() * 52) % 13;
      sum += r + 1;
      System.out.println(ranks[r]);
    }
    System.out.println("Sum = " + sum);
  }
}
```

### 7.30 — Pattern recognition: consecutive four equal numbers

```java
public class Exercise07_30 {
  public static boolean isConsecutiveFour(int[] values) {
    for (int i = 0; i < values.length - 3; i++)
      if (values[i] == values[i+1] && values[i] == values[i+2] && values[i] == values[i+3]) return true;
    return false;
  }
}
```

### 7.31 — Merge two sorted lists

```java
public class Exercise07_31 {
  public static int[] merge(int[] list1, int[] list2) {
    int[] r = new int[list1.length + list2.length];
    int i = 0, j = 0, k = 0;
    while (i < list1.length && j < list2.length) r[k++] = list1[i] <= list2[j] ? list1[i++] : list2[j++];
    while (i < list1.length) r[k++] = list1[i++];
    while (j < list2.length) r[k++] = list2[j++];
    return r;
  }
}
```

### 7.32 — Partition of a list

```java
public class Exercise07_32 {
  public static int partition(int[] list) {
    int pivot = list[0], low = 0, high = list.length - 1;
    while (low < high) {
      while (low < high && list[high] >= pivot) high--;
      list[low] = list[high];
      while (low < high && list[low] <= pivot) low++;
      list[high] = list[low];
    }
    list[low] = pivot;
    return low;
  }
}
```

### 7.33 — Culture: Chinese zodiac

```java
import java.util.Scanner;

public class Exercise07_33 {
  public static void main(String[] args) {
    String[] animals = {"Monkey","Rooster","Dog","Pig","Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Sheep"};
    System.out.print("Enter a year: ");
    System.out.println(animals[new Scanner(System.in).nextInt() % 12]);
  }
}
```

### 7.34 — Sort characters in a string

```java
import java.util.Arrays;

public class Exercise07_34 {
  public static String sort(String s) {
    char[] c = s.toCharArray(); Arrays.sort(c); return new String(c);
  }
}
```

### 7.35 — Game: hangman

```java
import java.util.Scanner;

public class Exercise07_35 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    String[] words = {"java","program","computer","science","algorithm"};
    String again = "y";
    while (again.equals("y")) {
      String word = words[(int)(Math.random() * words.length)];
      boolean[] guessed = new boolean[word.length()];
      int misses = 0;
      while (!allGuessed(guessed)) {
        System.out.print("(Guess) Enter a letter in word ");
        for (int i = 0; i < word.length(); i++) System.out.print(guessed[i] ? word.charAt(i) : '*');
        System.out.print(" > ");
        char ch = input.next().charAt(0);
        boolean correct = false, already = false;
        for (int i = 0; i < word.length(); i++) {
          if (word.charAt(i) == ch) {
            if (guessed[i]) already = true; else { guessed[i] = true; correct = true; }
          }
        }
        if (already) System.out.println(ch + " is already in the word");
        else if (!correct) { misses++; System.out.println(ch + " is not in the word"); }
      }
      System.out.println("The word is " + word + ". You missed " + misses + " time(s)");
      System.out.print("Do you want to guess another word? Enter y or n> ");
      again = input.next();
    }
  }
  public static boolean allGuessed(boolean[] arr) {
    for (boolean b : arr) if (!b) return false; return true;
  }
}
```

### 7.36 — Game: Eight Queens (brute force)

```java
public class Exercise07_36 {
  public static void main(String[] args) {
    int[] q = {0,1,2,3,4,5,6,7};
    while (!isValid(q))
      for (int i = 7; i > 0; i--) { int j = (int)(Math.random()*(i+1)); int t=q[i]; q[i]=q[j]; q[j]=t; }
    for (int r = 0; r < 8; r++) { for (int c = 0; c < 8; c++) System.out.print(q[r]==c?"|Q":"| "); System.out.println("|"); }
  }
  public static boolean isValid(int[] q) {
    for (int i = 0; i < 7; i++) for (int j = i+1; j < 8; j++)
      if (Math.abs(q[i]-q[j]) == Math.abs(i-j)) return false;
    return true;
  }
}
```

---

# Chapter 8: Multidimensional Arrays

## CheckPoint Questions

### 8.2.1

**Q:** How to declare and create a 2D array?

**A:**

```java
int[][] matrix = new int[5][5];
```

### 8.2.2

**Q:** Output of:

```java
int[][] array = new int[5][6];
int[] x = {1, 2};
array[0] = x;
System.out.println("array[0][1] is " + array[0][1]);
```

**A:** `array[0][1] is 2`

### 8.2.3

**Q:** Fill diagonal and anti-diagonal of 5x5?

**A:** Result:

```
1 0 0 0 2
0 1 0 2 0
0 0 1 0 0
0 2 0 1 0
2 0 0 0 1
```

### 8.2.4

**Q:** Output of `int[][] a = {{1,2},{3,4},{5,6}}` printed?

**A:**

```
1 2
3 4
5 6
```

### 8.3.1–8.3.3

**Q:** Sum all elements, sum by column, find row with largest sum?

**A:** Use nested loops. For column sums, swap row/column iteration order.

### 8.4.1–8.4.2

**Q:** Passing 2D array to method?

**A:** Reference is passed by value. Method can modify array contents.

### 8.5.1–8.5.2

**Q:** Ragged arrays?

**A:** `int[][] t = new int[5][];` then assign each row separately.

### 8.6.1–8.6.2

**Q:** 3D arrays?

**A:** `int[][][] cube = new int[3][4][5];`

### 8.8.1–8.8.3

**Q:** Arrays class for 2D?

**A:** Use `deepEquals` and `deepToString` for nested arrays.

---

## Quiz

> Answer the quiz for this chapter online at the book Companion Website.

---

## Programming Exercises

### 8.1 — Sum elements by column

```java
public class Exercise08_01 {
  public static double sumColumn(double[][] m, int col) {
    double sum = 0;
    for (int i = 0; i < m.length; i++) sum += m[i][col];
    return sum;
  }
}
```

### 8.2 — Average of major diagonal

```java
public class Exercise08_02 {
  public static double averageMajorDiagonal(double[][] m) {
    double sum = 0;
    for (int i = 0; i < m.length; i++) sum += m[i][i];
    return sum / m.length;
  }
}
```

### 8.3 — Sort students on grades

```java
import java.util.Scanner;

public class Exercise08_03 {
  public static void main(String[] args) {
    char[][] answers = {
      {'A','B','A','C','C','D','E','E','A','D'},
      {'D','B','A','B','C','A','E','E','A','D'},
      {'E','D','D','A','C','B','E','E','A','D'},
      {'C','B','A','E','D','C','E','E','A','D'},
      {'A','B','D','C','C','D','E','E','A','D'},
      {'B','B','E','C','C','D','E','E','A','D'},
      {'B','B','A','C','C','D','E','E','A','D'},
      {'E','B','E','C','C','D','E','E','A','D'}
    };
    char[] keys = {'D','B','D','C','C','D','A','E','A','D'};
    int[][] students = new int[8][2];
    for (int i = 0; i < 8; i++) {
      int correct = 0;
      for (int j = 0; j < 10; j++) if (answers[i][j] == keys[j]) correct++;
      students[i][0] = i; students[i][1] = correct;
    }
    for (int i = 0; i < 7; i++) for (int j = i + 1; j < 8; j++)
      if (students[i][1] > students[j][1]) { int[] t = students[i]; students[i]=students[j]; students[j]=t; }
    for (int[] s : students) System.out.println("Student " + s[0] + ": " + s[1]);
  }
}
```

### 8.4 — Compute weekly hours for each employee

```java
public class Exercise08_04 {
  public static void main(String[] args) {
    int[][] hours = {
      {2,4,3,4,5,8,8}, {7,3,4,3,3,4,4}, {3,3,4,3,3,2,2}, {9,3,4,7,3,4,1},
      {3,5,4,3,6,3,8}, {3,4,4,6,3,4,4}, {3,7,4,8,3,8,4}, {6,3,5,9,2,7,9}
    };
    int[][] totals = new int[8][2];
    for (int i = 0; i < 8; i++) {
      int sum = 0; for (int h : hours[i]) sum += h;
      totals[i][0] = i; totals[i][1] = sum;
    }
    for (int i = 0; i < 7; i++) {
      int max = i;
      for (int j = i + 1; j < 8; j++) if (totals[j][1] > totals[max][1]) max = j;
      int[] t = totals[i]; totals[i] = totals[max]; totals[max] = t;
    }
    for (int[] e : totals) System.out.println("Employee " + e[0] + ": " + e[1]);
  }
}
```

### 8.5 — Algebra: add two matrices

```java
public class Exercise08_05 {
  public static double[][] addMatrix(double[][] a, double[][] b) {
    double[][] r = new double[a.length][a[0].length];
    for (int i = 0; i < a.length; i++) for (int j = 0; j < a[i].length; j++) r[i][j] = a[i][j] + b[i][j];
    return r;
  }
}
```

### 8.6 — Algebra: multiply two matrices

```java
public class Exercise08_06 {
  public static double[][] multiplyMatrix(double[][] a, double[][] b) {
    int r = a.length, c = b[0].length, n = a[0].length;
    double[][] result = new double[r][c];
    for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) for (int k = 0; k < n; k++)
      result[i][j] += a[i][k] * b[k][j];
    return result;
  }
}
```

### 8.7 — Points nearest to each other

```java
public class Exercise08_07 {
  public static void main(String[] args) {
    double[][] points = {{-1,0,3},{-1,-1,-1},{4,1,1},{2,0.5,9},{3.5,2,-1},{3,1.5,3},{-1.5,4,2},{5.5,4,-0.5}};
    int p1 = 0, p2 = 1;
    double min = dist(points[p1], points[p2]);
    for (int i = 0; i < points.length; i++) for (int j = i + 1; j < points.length; j++)
      if (dist(points[i], points[j]) < min) { min = dist(points[i], points[j]); p1 = i; p2 = j; }
    System.out.println("Closest: " + java.util.Arrays.toString(points[p1]) + " and " + java.util.Arrays.toString(points[p2]));
  }
  static double dist(double[] a, double[] b) {
    double s = 0; for (int i = 0; i < a.length; i++) s += Math.pow(a[i] - b[i], 2); return Math.sqrt(s);
  }
}
```

### 8.8 — All closest pairs of points

```java
public class Exercise08_08 {
  public static void main(String[] args) {
    double[][] points = {{-1,0,3},{-1,-1,-1},{4,1,1},{2,0.5,9},{3.5,2,-1},{3,1.5,3},{-1.5,4,2},{5.5,4,-0.5}};
    double min = Double.MAX_VALUE;
    for (int i = 0; i < points.length; i++) for (int j = i + 1; j < points.length; j++)
      min = Math.min(min, dist(points[i], points[j]));
    System.out.println("Shortest: " + min);
    for (int i = 0; i < points.length; i++) for (int j = i + 1; j < points.length; j++)
      if (dist(points[i], points[j]) == min)
        System.out.println(java.util.Arrays.toString(points[i]) + " and " + java.util.Arrays.toString(points[j]));
  }
  static double dist(double[] a, double[] b) {
    double s = 0; for (int i = 0; i < a.length; i++) s += Math.pow(a[i] - b[i], 2); return Math.sqrt(s);
  }
}
```

### 8.9 — Game: Tic-Tac-Toe

```java
import java.util.Scanner;

public class Exercise08_09 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    char[][] b = {{' ',' ',' '},{' ',' ',' '},{' ',' ',' '}};
    char p = 'X';
    while (true) {
      display(b);
      System.out.print("Enter a row (0,1,2) for " + p + ": "); int r = input.nextInt();
      System.out.print("Enter a column (0,1,2) for " + p + ": "); int c = input.nextInt();
      if (b[r][c] != ' ') { System.out.println("Occupied. Try again."); continue; }
      b[r][c] = p;
      if (win(b, p)) { display(b); System.out.println(p + " player won!"); break; }
      if (full(b)) { display(b); System.out.println("Draw!"); break; }
      p = (p == 'X') ? 'O' : 'X';
    }
  }
  static void display(char[][] b) {
    for (int i = 0; i < 3; i++) { System.out.println("-------------");
      System.out.print("| "); for (int j = 0; j < 3; j++) System.out.print(b[i][j] + " | "); System.out.println(); }
    System.out.println("-------------");
  }
  static boolean win(char[][] b, char p) {
    for (int i = 0; i < 3; i++)
      if ((b[i][0]==p && b[i][1]==p && b[i][2]==p) || (b[0][i]==p && b[1][i]==p && b[2][i]==p)) return true;
    return (b[0][0]==p && b[1][1]==p && b[2][2]==p) || (b[0][2]==p && b[1][1]==p && b[2][0]==p);
  }
  static boolean full(char[][] b) {
    for (int i = 0; i < 3; i++) for (int j = 0; j < 3; j++) if (b[i][j] == ' ') return false; return true;
  }
}
```

### 8.10 — Largest row and column

```java
public class Exercise08_10 {
  public static void main(String[] args) {
    int[][] m = new int[4][4];
    for (int i = 0; i < 4; i++) for (int j = 0; j < 4; j++) m[i][j] = (int)(Math.random() * 2);
    int maxR = 0, maxC = 0, maxRC = 0, maxCC = 0;
    for (int i = 0; i < 4; i++) {
      int rc = 0, cc = 0;
      for (int j = 0; j < 4; j++) { rc += m[i][j]; cc += m[j][i]; }
      if (rc > maxRC) { maxRC = rc; maxR = i; }
      if (cc > maxCC) { maxCC = cc; maxC = i; }
    }
    System.out.println("Largest row: " + maxR + ", largest column: " + maxC);
  }
}
```

### 8.11 — Game: nine heads and tails

```java
import java.util.Scanner;

public class Exercise08_11 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a number between 0 and 511: ");
    int n = input.nextInt();
    char[][] m = new char[3][3];
    for (int i = 2; i >= 0; i--) for (int j = 2; j >= 0; j--) { m[i][j] = (n % 2 == 0) ? 'H' : 'T'; n /= 2; }
    for (int i = 0; i < 3; i++) { for (int j = 0; j < 3; j++) System.out.print(m[i][j] + " "); System.out.println(); }
  }
}
```

### 8.12 — Financial: compute tax

```java
import java.util.Scanner;

public class Exercise08_12 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    double[] rates = {0.10, 0.15, 0.25, 0.28, 0.33, 0.35};
    int[][] brackets = {{8350,33950,82250,171550,372950},{16700,67900,137050,208850,372950},
      {8350,33950,68525,104425,186475},{11950,45500,117450,190200,372950}};
    System.out.print("Status (0-single,1-joint,2-separate,3-head): "); int s = input.nextInt();
    System.out.print("Income: "); double income = input.nextDouble();
    double tax = 0, prev = 0;
    for (int i = 0; i < brackets[s].length; i++) {
      if (income > brackets[s][i]) { tax += (brackets[s][i] - prev) * rates[i]; prev = brackets[s][i]; }
      else { tax += (income - prev) * rates[i]; prev = income; break; }
    }
    if (income > prev) tax += (income - prev) * rates[rates.length-1];
    System.out.printf("Tax: $%.2f%n", tax);
  }
}
```

### 8.13 — Locate the largest element

```java
public class Exercise08_13 {
  public static int[] locateLargest(double[][] a) {
    int[] loc = {0, 0};
    for (int i = 0; i < a.length; i++) for (int j = 0; j < a[i].length; j++)
      if (a[i][j] > a[loc[0]][loc[1]]) { loc[0] = i; loc[1] = j; }
    return loc;
  }
}
```

### 8.14 — Explore matrix

```java
import java.util.Scanner;

public class Exercise08_14 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter size: "); int n = input.nextInt();
    int[][] m = new int[n][n];
    for (int i = 0; i < n; i++) { for (int j = 0; j < n; j++) { m[i][j] = (int)(Math.random()*2); System.out.print(m[i][j]); } System.out.println(); }
    for (int i = 0; i < n; i++) { boolean z=true, o=true; for (int j=0; j<n; j++) { if(m[i][j]==1) z=false; if(m[i][j]==0) o=false; } if(z) System.out.println("All 0s row "+i); if(o) System.out.println("All 1s row "+i); }
    for (int j = 0; j < n; j++) { boolean z=true, o=true; for (int i=0; i<n; i++) { if(m[i][j]==1) z=false; if(m[i][j]==0) o=false; } if(z) System.out.println("All 0s col "+j); if(o) System.out.println("All 1s col "+j); }
    boolean z=true, o=true; for (int i=0; i<n; i++) { if(m[i][i]==1) z=false; if(m[i][i]==0) o=false; } if(z) System.out.println("All 0s major diag"); if(o) System.out.println("All 1s major diag");
    z=true; o=true; for (int i=0; i<n; i++) { if(m[i][n-1-i]==1) z=false; if(m[i][n-1-i]==0) o=false; } if(z) System.out.println("All 0s sub diag"); if(o) System.out.println("All 1s sub diag");
  }
}
```

### 8.15 — Geometry: same line?

```java
public class Exercise08_15 {
  public static boolean sameLine(double[][] p) {
    for (int i = 2; i < p.length; i++)
      if ((p[1][0]-p[0][0])*(p[i][1]-p[0][1]) - (p[1][1]-p[0][1])*(p[i][0]-p[0][0]) != 0) return false;
    return true;
  }
}
```

### 8.16 — Sort two-dimensional array

```java
import java.util.Arrays;

public class Exercise08_16 {
  public static void sort(int m[][]) {
    Arrays.sort(m, (a,b) -> a[0]!=b[0] ? Integer.compare(b[0],a[0]) : Integer.compare(b[1],a[1]));
  }
}
```

### 8.17 — Financial tsunami

```java
import java.util.Scanner;

public class Exercise08_17 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int n = input.nextInt(); double limit = input.nextDouble();
    double[] bal = new double[n]; double[][] loans = new double[n][n]; boolean[] unsafe = new boolean[n];
    for (int i = 0; i < n; i++) {
      bal[i] = input.nextDouble(); int b = input.nextInt();
      for (int j = 0; j < b; j++) loans[i][input.nextInt()] = input.nextDouble();
    }
    boolean changed;
    do { changed = false;
      for (int i = 0; i < n; i++) {
        if (unsafe[i]) continue; double assets = bal[i];
        for (int j = 0; j < n; j++) if (!unsafe[j]) assets += loans[i][j];
        if (assets < limit) { unsafe[i] = true; changed = true; }
      }
    } while (changed);
    System.out.print("Unsafe banks: "); for (int i = 0; i < n; i++) if (unsafe[i]) System.out.print(i + " "); System.out.println();
  }
}
```

### 8.18 — Shuffle rows

```java
public class Exercise08_18 {
  public static void shuffle(int[][] m) {
    for (int i = m.length-1; i > 0; i--) { int j = (int)(Math.random()*(i+1)); int[] t=m[i]; m[i]=m[j]; m[j]=t; }
  }
}
```

### 8.19 — Pattern recognition: four consecutive equal numbers

```java
public class Exercise08_19 {
  public static boolean isConsecutiveFour(int[][] v) {
    int r = v.length, c = v[0].length;
    for (int i = 0; i < r; i++) for (int j = 0; j < c-3; j++)
      if (v[i][j]==v[i][j+1]&&v[i][j]==v[i][j+2]&&v[i][j]==v[i][j+3]) return true;
    for (int i = 0; i < r-3; i++) for (int j = 0; j < c; j++)
      if (v[i][j]==v[i+1][j]&&v[i][j]==v[i+2][j]&&v[i][j]==v[i+3][j]) return true;
    for (int i = 0; i < r-3; i++) for (int j = 0; j < c-3; j++)
      if (v[i][j]==v[i+1][j+1]&&v[i][j]==v[i+2][j+2]&&v[i][j]==v[i+3][j+3]) return true;
    for (int i = 0; i < r-3; i++) for (int j = 3; j < c; j++)
      if (v[i][j]==v[i+1][j-1]&&v[i][j]==v[i+2][j-2]&&v[i][j]==v[i+3][j-3]) return true;
    return false;
  }
}
```

### 8.20 — Game: Connect Four

```java
import java.util.Scanner;

public class Exercise08_20 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    char[][] b = new char[6][7];
    char p = 'R';
    while (true) {
      display(b);
      System.out.print("Drop a " + (p=='R'?"red":"yellow") + " disk at column (0-6): "); int c = input.nextInt();
      int r = drop(b, c, p);
      if (r == -1) { System.out.println("Column full."); continue; }
      if (win(b, r, c, p)) { display(b); System.out.println((p=='R'?"Red":"Yellow")+" won!"); break; }
      if (full(b)) { display(b); System.out.println("Draw!"); break; }
      p = (p=='R') ? 'Y' : 'R';
    }
  }
  static int drop(char[][] b, int c, char d) {
    for (int r = 5; r >= 0; r--) if (b[r][c] == 0) { b[r][c] = d; return r; } return -1;
  }
  static boolean win(char[][] b, int r, int c, char d) {
    int cnt; cnt=0; for(int j=0;j<7;j++){cnt=(b[r][j]==d)?cnt+1:0;if(cnt==4)return true;}
    cnt=0; for(int i=0;i<6;i++){cnt=(b[i][c]==d)?cnt+1:0;if(cnt==4)return true;}
    int sr=r-Math.min(r,c), sc=c-Math.min(r,c); cnt=0;
    while(sr<6&&sc<7){cnt=(b[sr][sc]==d)?cnt+1:0;if(cnt==4)return true;sr++;sc++;}
    int d1=Math.min(r,6-c),d2=Math.min(c,5-r); sr=r-d2; sc=c+d2; cnt=0;
    while(sr<6&&sc>=0){cnt=(b[sr][sc]==d)?cnt+1:0;if(cnt==4)return true;sr++;sc--;}
    return false;
  }
  static boolean full(char[][] b) { for (int c=0;c<7;c++) if(b[0][c]==0) return false; return true; }
  static void display(char[][] b) { for (int i=0;i<6;i++){System.out.print("|");for(int j=0;j<7;j++)System.out.print((b[i][j]==0?' ':b[i][j])+"|");System.out.println();}System.out.println("---------------"); }
}
```

### 8.21 — Central city

```java
import java.util.Scanner;

public class Exercise08_21 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Number of cities: "); int n = input.nextInt();
    double[][] c = new double[n][2];
    for (int i = 0; i < n; i++) { c[i][0] = input.nextDouble(); c[i][1] = input.nextDouble(); }
    int central = 0; double min = Double.MAX_VALUE;
    for (int i = 0; i < n; i++) {
      double total = 0;
      for (int j = 0; j < n; j++) if (i != j) total += Math.hypot(c[i][0]-c[j][0], c[i][1]-c[j][1]);
      if (total < min) { min = total; central = i; }
    }
    System.out.printf("Central city: (%.1f, %.1f)%nTotal dist: %.2f%n", c[central][0], c[central][1], min);
  }
}
```

### 8.22 — Even number of 1s

```java
public class Exercise08_22 {
  public static void main(String[] args) {
    int[][] m = new int[6][6];
    for (int i = 0; i < 6; i++) for (int j = 0; j < 6; j++) m[i][j] = (int)(Math.random()*2);
    boolean ok = true;
    for (int i = 0; i < 6; i++) { int s = 0; for (int x : m[i]) s += x; if (s%2!=0) { ok=false; System.out.println("Row "+i+" odd"); } }
    for (int j = 0; j < 6; j++) { int s = 0; for (int i = 0; i < 6; i++) s += m[i][j]; if (s%2!=0) { ok=false; System.out.println("Col "+j+" odd"); } }
    if (ok) System.out.println("All even");
  }
}
```

### 8.23 — Game: find the flipped cell

```java
import java.util.Scanner;

public class Exercise08_23 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int[][] m = new int[6][6];
    for (int i = 0; i < 6; i++) for (int j = 0; j < 6; j++) m[i][j] = input.nextInt();
    for (int i = 0; i < 6; i++) { int rs = 0; for (int x : m[i]) rs += x;
      if (rs%2!=0) for (int j = 0; j < 6; j++) { int cs=0; for (int k=0;k<6;k++) cs+=m[k][j]; if(cs%2!=0) { System.out.println("Flipped: ("+i+", "+j+")"); return; } } }
  }
}
```

### 8.24 — Check Sudoku solution

```java
public class Exercise08_24 {
  public static boolean isValid(int[][] g) {
    for (int i = 0; i < 9; i++) {
      boolean[] rs = new boolean[10], cs = new boolean[10];
      for (int j = 0; j < 9; j++) { if (rs[g[i][j]]||cs[g[j][i]]) return false; rs[g[i][j]]=true; cs[g[j][i]]=true; }
    }
    for (int b = 0; b < 9; b++) { boolean[] seen = new boolean[10];
      for (int i = b/3*3; i < b/3*3+3; i++) for (int j = b%3*3; j < b%3*3+3; j++) { if (seen[g[i][j]]) return false; seen[g[i][j]]=true; } }
    return true;
  }
}
```

### 8.25 — Markov matrix

```java
public class Exercise08_25 {
  public static boolean isMarkovMatrix(double[][] m) {
    for (int j = 0; j < m[0].length; j++) { double s = 0; for (double[] r : m) { if (r[j]<=0) return false; s+=r[j]; } if (Math.abs(s-1)>1e-6) return false; }
    return true;
  }
}
```

### 8.26 — Row sorting

```java
import java.util.Arrays;

public class Exercise08_26 {
  public static double[][] sortRows(double[][] m) {
    double[][] r = new double[m.length][];
    for (int i = 0; i < m.length; i++) { r[i] = m[i].clone(); Arrays.sort(r[i]); }
    return r;
  }
}
```

### 8.27 — Column sorting

```java
import java.util.Arrays;

public class Exercise08_27 {
  public static double[][] sortColumns(double[][] m) {
    double[][] r = new double[m.length][m[0].length];
    for (int i = 0; i < m.length; i++) System.arraycopy(m[i], 0, r[i], 0, m[i].length);
    for (int j = 0; j < r[0].length; j++) { double[] col = new double[r.length]; for (int i = 0; i < r.length; i++) col[i] = r[i][j]; Arrays.sort(col); for (int i = 0; i < r.length; i++) r[i][j] = col[i]; }
    return r;
  }
}
```

### 8.28 — Strictly identical arrays

```java
public class Exercise08_28 {
  public static boolean equals(int[][] m1, int[][] m2) {
    if (m1.length != m2.length) return false;
    for (int i = 0; i < m1.length; i++) if (!java.util.Arrays.equals(m1[i], m2[i])) return false;
    return true;
  }
}
```

### 8.29 — Identical arrays (same contents)

```java
import java.util.Arrays;

public class Exercise08_29 {
  public static boolean equals(int[][] m1, int[][] m2) {
    if (m1.length!=m2.length||m1[0].length!=m2[0].length) return false;
    int[] l1=new int[m1.length*m1[0].length], l2=new int[m2.length*m2[0].length];
    int idx=0; for (int[] r:m1) for (int v:r) l1[idx++]=v; idx=0; for (int[] r:m2) for (int v:r) l2[idx++]=v;
    Arrays.sort(l1); Arrays.sort(l2); return Arrays.equals(l1,l2);
  }
}
```

### 8.30 — Algebra: solve linear equations

```java
public class Exercise08_30 {
  public static double[] linearEquation(double[][] a, double[] b) {
    double d = a[0][0]*a[1][1] - a[0][1]*a[1][0];
    if (d == 0) return null;
    return new double[]{(b[0]*a[1][1]-b[1]*a[0][1])/d, (b[1]*a[0][0]-b[0]*a[1][0])/d};
  }
}
```

### 8.31 — Geometry: intersecting point

```java
public class Exercise08_31 {
  public static double[] getIntersectingPoint(double[][] p) {
    double a=p[0][1]-p[1][1], b=p[1][0]-p[0][0], c=p[2][1]-p[3][1], d=p[3][0]-p[2][0];
    double e=a*p[0][0]+b*p[0][1], f=c*p[2][0]+d*p[2][1], det=a*d-b*c;
    if (det==0) return null; return new double[]{(e*d-b*f)/det, (a*f-e*c)/det};
  }
}
```

### 8.32 — Geometry: area of a triangle

```java
public class Exercise08_32 {
  public static double getTriangleArea(double[][] p) {
    double a=Math.hypot(p[1][0]-p[0][0],p[1][1]-p[0][1]);
    double b=Math.hypot(p[2][0]-p[1][0],p[2][1]-p[1][1]);
    double c=Math.hypot(p[0][0]-p[2][0],p[0][1]-p[2][1]);
    double s=(a+b+c)/2; double area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    if(area<1e-10) return 0; return area;
  }
}
```

### 8.33 — Geometry: polygon subareas

```java
import java.util.Arrays;

public class Exercise08_33 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    double[][] p = new double[4][2];
    for (int i = 0; i < 4; i++) for (int j = 0; j < 2; j++) p[i][j] = input.nextDouble();
    double[] inter = intersect(p[0],p[2],p[1],p[3]);
    double[] areas = {triArea(p[0],p[1],inter),triArea(p[1],p[2],inter),triArea(p[2],p[3],inter),triArea(p[3],p[0],inter)};
    Arrays.sort(areas); System.out.print("The areas are "); for (double a : areas) System.out.printf("%.2f ", a);
    System.out.println();
  }
  static double[] intersect(double[] p1,double[] p2,double[] p3,double[] p4) {
    double a=p1[1]-p2[1],b=p2[0]-p1[0],c=p3[1]-p4[1],d=p4[0]-p3[0];
    double e=a*p1[0]+b*p1[1], f=c*p3[0]+d*p3[1], det=a*d-b*c;
    return new double[]{(e*d-b*f)/det, (a*f-e*c)/det};
  }
  static double triArea(double[] a,double[] b,double[] c) {
    return Math.abs((a[0]*(b[1]-c[1])+b[0]*(c[1]-a[1])+c[0]*(a[1]-b[1]))/2);
  }
}
```

### 8.34 — Rightmost lowest point

```java
public class Exercise08_34 {
  public static double[] getRightmostLowestPoint(double[][] p) {
    double[] r = p[0]; for (double[] pt : p) if (pt[1]<r[1]||(pt[1]==r[1]&&pt[0]>r[0])) r=pt; return r;
  }
}
```

### 8.35 — Largest block

```java
public class Exercise08_35 {
  public static int[] findLargestBlock(int[][] m) {
    int n = m.length, max=0, mr=0, mc=0;
    int[][] dp = new int[n][n];
    for (int i = 0; i < n; i++) for (int j = 0; j < n; j++) {
      if (i==0||j==0) dp[i][j]=m[i][j];
      else if (m[i][j]==1) dp[i][j]=Math.min(dp[i-1][j],Math.min(dp[i][j-1],dp[i-1][j-1]))+1;
      else dp[i][j]=0;
      if (dp[i][j]>max) { max=dp[i][j]; mr=i-max+1; mc=j-max+1; }
    }
    return new int[]{mr, mc, max};
  }
}
```

### 8.36 — Latin square

```java
import java.util.Scanner;

public class Exercise08_36 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter number n: "); int n = input.nextInt();
    char[][] sq = new char[n][n];
    for (int i = 0; i < n; i++) for (int j = 0; j < n; j++) {
      sq[i][j] = input.next().charAt(0);
      if (sq[i][j] < 'A' || sq[i][j] > 'A'+n-1) { System.out.println("Wrong input"); return; }
    }
    for (int i = 0; i < n; i++) { boolean[] rs=new boolean[n], cs=new boolean[n];
      for (int j = 0; j < n; j++) { int ri=sq[i][j]-'A', ci=sq[j][i]-'A';
        if (rs[ri] || cs[ci]) { System.out.println("Wrong input"); return; } rs[ri]=true; cs[ci]=true; } }
    System.out.println("Latin square");
  }
}
```

### 8.37 — Guess the capitals

```java
import java.util.Scanner;

public class Exercise08_37 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    String[][] sc = {{"Alabama","Montgomery"},{"Alaska","Juneau"},/* ... all 50 states ... */};
    int correct = 0;
    for (String[] pair : sc) {
      System.out.print("Capital of " + pair[0] + "? ");
      if (input.nextLine().equalsIgnoreCase(pair[1])) { correct++; System.out.println("Correct"); }
      else System.out.println("Correct answer: " + pair[1]);
    }
    System.out.println("Correct count: " + correct);
  }
}
```

---

# Chapter 9: Objects and Classes

## CheckPoint Questions

### 9.3.1

**Q:** What is the difference between a class and an object?

**A:** A class is a template/blueprint. An object is an instance of a class. Multiple objects can be created from one class.

### 9.3.2

**Q:** How do you define a class in Java?

**A:**

```java
public class ClassName {
  // Data fields
  // Constructors
  // Methods
}
```

### 9.4.1

**Q:** How do you create an object?

**A:** Using the `new` operator: `ClassName obj = new ClassName();`

### 9.4.2

**Q:** What is a reference variable?

**A:** A variable that holds a reference (memory address) to an object, not the object itself.

### 9.4.3

**Q:** What is the output of:

```java
Circle c1 = new Circle();
Circle c2 = c1;
c1.radius = 10;
System.out.println(c2.radius);
```

**A:** `10` — after `c2 = c1`, both reference the same object.

### 9.5.1

**Q:** What is a constructor?

**A:** A special method that initializes an object when created with `new`. It has the same name as the class and no return type.

### 9.5.2

**Q:** What is a no-arg constructor?

**A:** A constructor with no parameters. If no constructor is defined, Java provides a default no-arg constructor that initializes data fields to default values.

### 9.5.3

**Q:** What is the `null` value?

**A:** A special literal indicating that a reference variable does not reference any object. Accessing a field/method on `null` throws `NullPointerException`.

### 9.6.1

**Q:** Difference between instance and static variables/methods?

**A:** Instance variables/methods belong to individual objects. Static variables/methods belong to the class and are shared by all instances.

### 9.6.2

**Q:** How do you invoke a static method?

**A:** `ClassName.staticMethod()` — without creating an instance.

### 9.6.3

**Q:** Can you use instance variables in a static method?

**A:** No — static methods cannot directly access instance variables (no `this` reference).

### 9.7.1

**Q:** What is a UML diagram?

**A:** Unified Modeling Language — standard notation for visualizing classes: three sections (class name, data fields, methods) with + for public and - for private.

### 9.8.1

**Q:** What is encapsulation?

**A:** Hiding data fields by declaring them `private` and providing public `getter`/`setter` methods for controlled access.

### 9.8.2

**Q:** What are accessor (getter) and mutator (setter) methods?

**A:**

```java
// Getter
public returnType getFieldName()
// Boolean getter
public boolean isFieldName()
// Setter
public void setFieldName(dataType value)
```

### 9.9.1

**Q:** What does the `this` keyword refer to?

**A:** The calling object (the object on which the method is invoked).

### 9.9.2

**Q:** How is `this` used in constructors?

**A:** `this(args)` calls another constructor of the same class — must be the first statement in the constructor.

### 9.10.1

**Q:** What is an immutable object?

**A:** An object whose contents cannot be changed after creation. Achieved by: no mutators, private data, no methods that modify data.

### 9.10.2

**Q:** Is the following class immutable?

```java
public class A {
  private int[] values;
  public A(int[] values) { this.values = values; }
  public int[] getValues() { return values; }
}
```

**A:** No — the constructor stores a reference to the external array, and `getValues()` returns the reference, allowing external modification. Fix by using defensive copying.

### 9.11.1

**Q:** What is scope of instance/static variables?

**A:** The entire class body, regardless of where they are declared.

### 9.12.1

**Q:** How are arrays of objects created?

**A:**

```java
Circle[] circles = new Circle[10];
for (int i = 0; i < 10; i++) circles[i] = new Circle();
```

### 9.12.2

**Q:** Default value for elements in an object array?

**A:** `null` — the array holds references, and each element must be assigned an object before use.

### 9.13.1

**Q:** What is a private constructor?

**A:** A constructor declared `private` prevents other classes from creating instances. Used in singleton pattern or utility classes.

### 9.14.1

**Q:** Can you use the `private` modifier on a class?

**A:** A top-level class can be `public` or package-private (no modifier). Only nested/inner classes can be `private`.

### 9.14.2

**Q:** What does package-private mean?

**A:** No modifier — accessible only within the same package.

### 9.14.3

**Q:** What is the order of visibility modifiers (most to least accessible)?

**A:** `public` -> `protected` -> package-private (default) -> `private`

---

## Quiz

> Answer the quiz for this chapter online at the book Companion Website.

---

## Programming Exercises

### 9.1 — The Rectangle class

**Q:** Design a Rectangle class with width, height, getArea(), getPerimeter(). Test with widths 4 and 3.5, heights 40 and 35.9.

**A:**

```java
class Rectangle {
  double width = 1, height = 1;
  Rectangle() {}
  Rectangle(double w, double h) { width = w; height = h; }
  double getArea() { return width * height; }
  double getPerimeter() { return 2 * (width + height); }
}

public class Exercise09_01 {
  public static void main(String[] args) {
    Rectangle r1 = new Rectangle(4, 40);
    Rectangle r2 = new Rectangle(3.5, 35.9);
    System.out.println("r1: w=" + r1.width + " h=" + r1.height + " area=" + r1.getArea() + " perim=" + r1.getPerimeter());
    System.out.println("r2: w=" + r2.width + " h=" + r2.height + " area=" + r2.getArea() + " perim=" + r2.getPerimeter());
  }
}
```

### 9.2 — The Stock class

**Q:** Design a Stock class with symbol, name, previousClosingPrice, currentPrice, getChangePercent(). Test with ORCL.

**A:**

```java
class Stock {
  String symbol, name;
  double previousClosingPrice, currentPrice;
  Stock(String symbol, String name) { this.symbol = symbol; this.name = name; }
  double getChangePercent() { return (currentPrice - previousClosingPrice) / previousClosingPrice * 100; }
}

public class Exercise09_02 {
  public static void main(String[] args) {
    Stock s = new Stock("ORCL", "Oracle Corporation");
    s.previousClosingPrice = 34.5;
    s.currentPrice = 34.35;
    System.out.printf("Change: %.2f%%%n", s.getChangePercent());
  }
}
```

### 9.3 — Use the Date class

```java
public class Exercise09_03 {
  public static void main(String[] args) {
    long[] times = {10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000L, 100000000000L};
    for (long t : times) {
      java.util.Date d = new java.util.Date(t);
      System.out.println(t + ": " + d.toString());
    }
  }
}
```

### 9.4 — Use the Random class

```java
import java.util.Random;

public class Exercise09_04 {
  public static void main(String[] args) {
    Random r = new Random(1000);
    for (int i = 0; i < 50; i++) System.out.print(r.nextInt(100) + " ");
    System.out.println();
  }
}
```

### 9.5 — Use the GregorianCalendar class

```java
import java.util.GregorianCalendar;

public class Exercise09_05 {
  public static void main(String[] args) {
    GregorianCalendar gc = new GregorianCalendar();
    System.out.println("Current: " + gc.get(GregorianCalendar.YEAR) + "/" +
      (gc.get(GregorianCalendar.MONTH)+1) + "/" + gc.get(GregorianCalendar.DAY_OF_MONTH));
    gc.setTimeInMillis(1234567898765L);
    System.out.println("Set: " + gc.get(GregorianCalendar.YEAR) + "/" +
      (gc.get(GregorianCalendar.MONTH)+1) + "/" + gc.get(GregorianCalendar.DAY_OF_MONTH));
  }
}
```

### 9.6 — Stopwatch

**Q:** Design a StopWatch class with start, stop, getElapsedTime. Measure selection sort on 100,000 numbers.

**A:**

```java
class StopWatch {
  private long startTime, endTime;
  StopWatch() { startTime = System.currentTimeMillis(); }
  long getStartTime() { return startTime; }
  long getEndTime() { return endTime; }
  void start() { startTime = System.currentTimeMillis(); }
  void stop() { endTime = System.currentTimeMillis(); }
  long getElapsedTime() { return endTime - startTime; }
}

public class Exercise09_06 {
  public static void main(String[] args) {
    int[] arr = new int[100_000];
    for (int i = 0; i < arr.length; i++) arr[i] = (int)(Math.random() * 100_000);
    StopWatch sw = new StopWatch();
    selectionSort(arr);
    sw.stop();
    System.out.println("Time: " + sw.getElapsedTime() + " ms");
  }
  static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length-1; i++) {
      int min = i;
      for (int j = i+1; j < arr.length; j++) if (arr[j] < arr[min]) min = j;
      int t = arr[i]; arr[i] = arr[min]; arr[min] = t;
    }
  }
}
```

### 9.7 — The Account class

**Q:** Design an Account class with id, balance, annualInterestRate, dateCreated, withdraw, deposit. Test: ID 1122, balance $20,000, 4.5% rate, withdraw $2,500, deposit $3,000.

**A:**

```java
import java.util.Date;

class Account {
  private int id = 0;
  private double balance = 0, annualInterestRate = 0;
  private Date dateCreated = new Date();
  Account() {}
  Account(int id, double balance) { this.id = id; this.balance = balance; }
  int getId() { return id; } void setId(int id) { this.id = id; }
  double getBalance() { return balance; } void setBalance(double b) { balance = b; }
  double getAnnualInterestRate() { return annualInterestRate; } void setAnnualInterestRate(double r) { annualInterestRate = r; }
  Date getDateCreated() { return dateCreated; }
  double getMonthlyInterestRate() { return annualInterestRate / 12 / 100; }
  double getMonthlyInterest() { return balance * getMonthlyInterestRate(); }
  void withdraw(double amt) { balance -= amt; }
  void deposit(double amt) { balance += amt; }
}

public class Exercise09_07 {
  public static void main(String[] args) {
    Account a = new Account(1122, 20000);
    a.setAnnualInterestRate(4.5);
    a.withdraw(2500);
    a.deposit(3000);
    System.out.println("Balance: " + a.getBalance());
    System.out.println("Monthly interest: " + a.getMonthlyInterest());
    System.out.println("Created: " + a.getDateCreated());
  }
}
```

### 9.8 — The Fan class

**Q:** Design a Fan class with SLOW=1, MEDIUM=2, FAST=3, speed, on, radius, color, toString(). Test with two fans.

**A:**

```java
class Fan {
  static final int SLOW = 1, MEDIUM = 2, FAST = 3;
  private int speed = SLOW;
  private boolean on = false;
  private double radius = 5;
  String color = "blue";
  int getSpeed() { return speed; } void setSpeed(int s) { speed = s; }
  boolean isOn() { return on; } void setOn(boolean o) { on = o; }
  double getRadius() { return radius; } void setRadius(double r) { radius = r; }
  String getColor() { return color; } void setColor(String c) { color = c; }
  Fan() {}
  public String toString() {
    if (on) return "Speed: " + speed + ", Color: " + color + ", Radius: " + radius;
    return "Color: " + color + ", Radius: " + radius + ", fan is off";
  }
}

public class Exercise09_08 {
  public static void main(String[] args) {
    Fan f1 = new Fan(); f1.setSpeed(Fan.FAST); f1.setRadius(10); f1.setColor("yellow"); f1.setOn(true);
    Fan f2 = new Fan(); f2.setSpeed(Fan.MEDIUM); f2.setRadius(5); f2.setColor("blue"); f2.setOn(false);
    System.out.println(f1); System.out.println(f2);
  }
}
```

### 9.9 — Geometry: n-sided regular polygon

**Q:** Design a RegularPolygon class with n, side, x, y, getPerimeter(), getArea(). Test three objects.

**A:**

```java
class RegularPolygon {
  private int n = 3;
  private double side = 1, x = 0, y = 0;
  RegularPolygon() {}
  RegularPolygon(int n, double side) { this.n = n; this.side = side; }
  RegularPolygon(int n, double side, double x, double y) { this(n, side); this.x = x; this.y = y; }
  int getN() { return n; } void setN(int n) { this.n = n; }
  double getSide() { return side; } void setSide(double s) { side = s; }
  double getX() { return x; } void setX(double x) { this.x = x; }
  double getY() { return y; } void setY(double y) { this.y = y; }
  double getPerimeter() { return n * side; }
  double getArea() { return (n * side * side) / (4 * Math.tan(Math.PI / n)); }
}

public class Exercise09_09 {
  public static void main(String[] args) {
    RegularPolygon r1 = new RegularPolygon();
    RegularPolygon r2 = new RegularPolygon(6, 4);
    RegularPolygon r3 = new RegularPolygon(10, 4, 5.6, 7.8);
    System.out.println("r1: P=" + r1.getPerimeter() + " A=" + r1.getArea());
    System.out.println("r2: P=" + r2.getPerimeter() + " A=" + r2.getArea());
    System.out.println("r3: P=" + r3.getPerimeter() + " A=" + r3.getArea());
  }
}
```

### 9.10 — Algebra: quadratic equations

**Q:** Design a QuadraticEquation class with a, b, c, getDiscriminant(), getRoot1(), getRoot2().

**A:**

```java
class QuadraticEquation {
  private double a, b, c;
  QuadraticEquation(double a, double b, double c) { this.a = a; this.b = b; this.c = c; }
  double getA() { return a; } double getB() { return b; } double getC() { return c; }
  double getDiscriminant() { return b * b - 4 * a * c; }
  double getRoot1() { double d = getDiscriminant(); return d >= 0 ? (-b + Math.sqrt(d)) / (2*a) : 0; }
  double getRoot2() { double d = getDiscriminant(); return d >= 0 ? (-b - Math.sqrt(d)) / (2*a) : 0; }
}

public class Exercise09_10 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter a, b, c: ");
    QuadraticEquation eq = new QuadraticEquation(input.nextDouble(), input.nextDouble(), input.nextDouble());
    double d = eq.getDiscriminant();
    if (d > 0) System.out.println("Roots: " + eq.getRoot1() + ", " + eq.getRoot2());
    else if (d == 0) System.out.println("One root: " + eq.getRoot1());
    else System.out.println("The equation has no roots");
  }
}
```

### 9.11 — Algebra: 2x2 linear equations

**Q:** Design a LinearEquation class with a-f, isSolvable(), getX(), getY().

**A:**

```java
class LinearEquation {
  private double a, b, c, d, e, f;
  LinearEquation(double a, double b, double c, double d, double e, double f) {
    this.a = a; this.b = b; this.c = c; this.d = d; this.e = e; this.f = f;
  }
  double getA() { return a; } double getB() { return b; } double getC() { return c; }
  double getD() { return d; } double getE() { return e; } double getF() { return f; }
  boolean isSolvable() { return a * d - b * c != 0; }
  double getX() { return (e * d - b * f) / (a * d - b * c); }
  double getY() { return (a * f - e * c) / (a * d - b * c); }
}
```

### 9.12 — Geometry: intersecting point

**Q:** Use LinearEquation to find the intersecting point of two line segments.

**A:**

```java
import java.util.Scanner;

public class Exercise09_12 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter x1,y1,x2,y2,x3,y3,x4,y4: ");
    double x1=input.nextDouble(),y1=input.nextDouble(),x2=input.nextDouble(),y2=input.nextDouble();
    double x3=input.nextDouble(),y3=input.nextDouble(),x4=input.nextDouble(),y4=input.nextDouble();
    double a=y1-y2, b=x2-x1, c=y3-y4, d=x4-x3, e=a*x1+b*y1, f=c*x3+d*y3;
    LinearEquation eq = new LinearEquation(a, b, c, d, e, f);
    if (eq.isSolvable()) System.out.println("Intersection: (" + eq.getX() + ", " + eq.getY() + ")");
    else System.out.println("Parallel lines");
  }
}
```

### 9.13 — The Location class

**Q:** Design a Location class with public fields row, column, maxValue. Write locateLargest() that returns a Location.

**A:**

```java
import java.util.Scanner;

class Location {
  public int row, column;
  public double maxValue;
  Location(int row, int column, double maxValue) { this.row = row; this.column = column; this.maxValue = maxValue; }
  public static Location locateLargest(double[][] a) {
    int r = 0, c = 0;
    double max = a[0][0];
    for (int i = 0; i < a.length; i++) for (int j = 0; j < a[i].length; j++)
      if (a[i][j] > max) { max = a[i][j]; r = i; c = j; }
    return new Location(r, c, max);
  }
}

public class Exercise09_13 {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.print("Enter rows and columns: ");
    int r = input.nextInt(), c = input.nextInt();
    double[][] a = new double[r][c];
    System.out.println("Enter the array:");
    for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) a[i][j] = input.nextDouble();
    Location loc = Location.locateLargest(a);
    System.out.println("The location of the largest element is " + loc.maxValue + " at (" + loc.row + ", " + loc.column + ")");
  }
}
```

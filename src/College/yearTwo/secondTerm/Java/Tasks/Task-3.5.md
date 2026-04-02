---
marp: true
---

# Java Programming Fundamentals

---

## 1. Java Overview & Development Environment

---

### What is Java?

- **Object‑oriented, network‑centric** programming language
- Platform independent via **Java Virtual Machine (JVM)**
- Used for mobile apps, software, enterprise systems

---

### Popular IDEs

| IDE          | Key Features                                            |
| ------------ | ------------------------------------------------------- |
| **Eclipse**  | Open source, plugins, auto‑correction, cross‑platform   |
| **NetBeans** | Rich out‑of‑box (GUI builder, Maven), beginner‑friendly |
| **IntelliJ** | Android development, code assistance                    |

---

### Java Ecosystem – JDK, JRE, JVM

- **JDK** = JRE + development tools (compiler `javac`, debugger)
- **JRE** = JVM + class libraries + config files – for running programs
- **JVM** = executes **bytecode**; converts to native code via **JIT (Just‑In‑Time)** compiler

> **Bytecode** (`.class`) is intermediate – not directly executable by CPU.
> **Native code** depends on OS: `.exe` (Windows), no extension (Linux), `.app` (macOS).

---

## 2. Java Program Life Cycle

---

### From Source to Execution

1. **Write** `ClassName.java` – public class name **must match** file name
2. **Compile** `javac ClassName.java` -> generates `ClassName.class` (bytecode)
3. **Load** – Class Loader reads `.class` file
4. **Verify** – Bytecode Verifier checks safety
5. **Execute** – JVM runs code (interprets or JIT‑compiles)
6. **Terminate** – Garbage Collector cleans memory

---

### First Program Structure

```java
package firstPackage;            // optional namespace

public class FirstApp {         // class name = file name
  public static void main(String[] args) {  // entry point
    System.out.println("Hello!");         // output
  }
}
```

- `public` – accessible anywhere
- `static` – belongs to class, no object needed
- `void` – returns nothing
- `String[] args` – command‑line arguments

---

## 3. Variables & Data Types

---

### Primitive Types (size & range)

| Type      | Size    | Range                    |
| --------- | ------- | ------------------------ |
| `byte`    | 8 bits  | -128 to 127              |
| `short`   | 16 bits | -32,768 to 32,767        |
| `int`     | 32 bits | -2³¹ to 2³¹-1            |
| `long`    | 64 bits | -2⁶³ to 2⁶³-1            |
| `float`   | 32 bits | ~6‑7 decimal digits      |
| `double`  | 64 bits | ~15‑16 decimal digits    |
| `boolean` | 1 bit   | `true` / `false`         |
| `char`    | 16 bits | single character / ASCII |

---

### Variable Naming Rules

- Begin with letter, `$`, or `_` (recommended: lowercase letter)
- Can contain digits, underscores, dollar signs – **no whitespace**
- **Case‑sensitive** (`myVar` != `myvar`)
- Cannot use Java keywords (`int`, `class`, `static`, …)

---

### Escape Sequences (used inside strings)

| Code | Meaning      |
| ---- | ------------ |
| `\n` | New line     |
| `\t` | Tab          |
| `\b` | Backspace    |
| `\"` | Double quote |
| `\\` | Backslash    |

---

### String Concatenation

```java
String fName = "Mohamed", lName = "Ramadan";
System.out.println(fName + " " + lName);  // "Mohamed Ramadan"
System.out.println("20" + "25");          // "2025" (string)
System.out.println(20 + 25);              // 45 (numeric)
```

---

## 4. User Input (Scanner)

---

### Steps to read from keyboard

1. **Import** `import java.util.Scanner;`
2. **Create object** `Scanner input = new Scanner(System.in);`
3. **Read** using methods: `nextLine()`, `nextInt()`, `nextDouble()`, etc.
4. **Close** `input.close();`

---

### Example

```java
Scanner sc = new Scanner(System.in);
System.out.print("Enter name: ");
String name = sc.nextLine();
System.out.print("Enter age: ");
int age = sc.nextInt();
sc.close();
```

> After `nextInt()`, the newline remains in buffer. To read a string after a number, add an extra `sc.nextLine()`.

---

## 5. Operators & Conditionals

---

### Comparison Operators (result = boolean)

| Operator | Meaning          |
| -------- | ---------------- |
| `==`     | equal to         |
| `!=`     | not equal        |
| `>`      | greater than     |
| `<`      | less than        |
| `>=`     | greater or equal |
| `<=`     | less or equal    |

---

### Logical Operators (short‑circuit)

| Operator | Behavior                                                                |
| -------- | ----------------------------------------------------------------------- |
| `&&`     | AND – true only if both true; if first false, second **not evaluated**  |
| `\|\|`   | OR – true if at least one true; if first true, second **not evaluated** |
| `!`      | NOT – reverses boolean                                                  |

---

### `if-else-if` Ladder

```java
if (condition1) {
  // condition1 true
} else if (condition2) {
  // condition1 false, condition2 true
} else {
  // all false
}
```

- Conditions evaluated **top to bottom**; first true block executes, then exit.

---

### `switch` Statement

```java
// expression: byte, short, int, char, String, enum
switch (expression) {
  case value1:
    // code
    break;  // exit switch (without break -> fall‑through)
  case value2:
    // code
    break;
  default:
    // no case matched
}
```

- **Fall‑through** is a common exam trap – always use `break` unless intentional.

---

## 6. Loops

---

| Loop       | When to use                           | Check  | Min executions |
| ---------- | ------------------------------------- | ------ | -------------- |
| `for`      | Known iteration count                 | top    | 0              |
| `while`    | Unknown count, may not run            | top    | 0              |
| `do-while` | Unknown count, must run at least once | bottom | **1**          |

---

### Syntax Examples

```java
// for loop
for (int i = 0; i < 5; i++) {
  System.out.print(i);
}  // output: 01234

// while loop
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}

// do-while (semicolon after while)
int i = 0;
do {
  System.out.println(i);
  i++;
} while (i < 5);
```

---

### Nested Loops & Pattern Generation

```java
for (int i = 0; i < 5; i++) {
  for (int x = 0; x < 5 - i; x++) { // decreasing 'x'
    System.out.print("x");
  }
  for (int p = 0; p <= i; p++) {    // increasing '+'
    System.out.print("+");
  }
  System.out.println();
}
```

---

**Pattern Table (i from 0 to 4):**

|  i  | x count = 5‑i | + count = i+1 |  Output  |
| :-: | :-----------: | :-----------: | :------: |
|  0  |       5       |       1       | `xxxxx+` |
|  1  |       4       |       2       | `xxxx++` |
|  2  |       3       |       3       | `xxx+++` |
|  3  |       2       |       4       | `xx++++` |
|  4  |       1       |       5       | `x+++++` |

- **Inverse relationship** – total symbols per line constant: `(5-i) + (i+1) = 6`

---

## 7. Arrays

---

### One‑Dimensional Arrays

- **Fixed size** once created, **homogeneous** (same type)
- Index **0‑based** -> first element at `0`, last at `length-1`

```java
// declaration & initialization
int[] numbers = {10, 20, 30, 40};
String[] fruits = new String[3];   // size 3, default null

System.out.println(numbers.length);  // length: 4

// access & modify
numbers[0] = 99;
System.out.println(numbers[0]);

// iterate
for (int i = 0; i < numbers.length; i++) { System.out.println(numbers[i]); }

// enhanced for‑loop (for‑each)
for (int val : numbers) { System.out.println(val); }
```

---

### Multi‑Dimensional Arrays (array of arrays)

```java
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
// rows can have different lengths (jagged array)
myNumbers[1][2] = 9;          // change element (row1, col2)
System.out.println(myNumbers[1][2]);  // 9
```

---

### Example – Calculate Average

```java
int[] deg = {30, 33, 24, 35, 40, 36};
float sum = 0;

for (int score : deg) {
  sum += score;
}

float avg = sum / deg.length;
System.out.println("Average: " + avg);
```

> **ArrayIndexOutOfBoundsException** – accessing index < 0 or ≥ length.

---

## 8. Exception Handling (try‑catch)

---

### What is an Exception?

- An event that disrupts normal program flow (e.g., invalid input, array index error)
- Java **throws** an exception -> if unhandled, program terminates

---

### `try-catch` Block

```java
try {
  // code that may throw an exception
} catch (ExceptionType e) {
  // handle the error
}
```

---

### Example – Catching Array Index Error

```java
String[] names = {"Belal", "Youssef"};
try {
  System.out.println(names[3]);   // throws exception
} catch (Exception x) {
  System.err.println(x.getMessage());  // prints "Index 3 out of bounds..."
}
```

---

### `System.out` vs `System.err`

| Stream       | Purpose                                 |
| ------------ | --------------------------------------- |
| `System.out` | standard output (normal program output) |
| `System.err` | standard error (error messages)         |

- Both appear in console but can be redirected separately.

> Always place the most specific exception first when using multiple `catch` blocks (not covered in lectures but good practice).

---

## 9. Key Exam Traps & Best Practices

---

| Concept           | Trap                                  | Correct Practice                                 |
| ----------------- | ------------------------------------- | ------------------------------------------------ |
| String comparison | `==` compares references              | Use `equals()` for content                       |
| Scanner buffer    | `nextInt()` leaves newline            | Add `nextLine()` after numeric input             |
| `switch` types    | `long`, `float`, `double` not allowed | Use `int`, `char`, `String`, `enum`              |
| Loop semicolon    | `while(i<5);` – infinite loop         | No semicolon before body                         |
| `else-if` order   | Most restrictive last                 | Place narrow conditions first                    |
| Closing Scanner   | Forgetting `close()`                  | Use `close()` in `finally` or try‑with‑resources |

---

_End of presentation – prepared from Dr. Mohamed Ramadan's lectures 1–5._

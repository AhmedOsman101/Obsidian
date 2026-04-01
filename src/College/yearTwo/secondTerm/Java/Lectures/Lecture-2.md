---
prev:
  text: "Lecture 1"
  link: "/College/yearTwo/secondTerm/Java/Lectures/Lecture-1"
next:
  text: "Lecture 3"
  link: "/College/yearTwo/secondTerm/Java/Lectures/Lecture-3"
title: Lecture 2
---

# Java Programming - Lecture 2

## Output Methods: print vs. println

**`System.out.println()`** prints output and moves the cursor to a **new line** after printing. **`System.out.print()`** prints output and leaves the cursor on the **same line** — the next `print` continues immediately after.

```java
System.out.println("hello in first app");   // prints + newline
System.out.println("hello in first app 2025"); // prints + newline
System.out.print("hello in first app 2025 $&&@"); // prints, NO newline
```

> [!NOTE] `println` = print + `\n` built in. `print` gives you manual control over line breaks using escape codes.

## Character Escape Codes

**Escape codes** are special sequences starting with `\` used inside strings to represent characters that cannot be typed directly or would otherwise break syntax. They are only valid inside string/char literals.

| Code         | Effect                                 |
| ------------ | -------------------------------------- |
| **`\n`**     | New line                               |
| **`\t`**     | Tab (horizontal indent)                |
| **`\b`**     | Backspace                              |
| **`\r`**     | Carriage return                        |
| **`\\`**     | Literal backslash                      |
| **`\'`**     | Single quotation mark                  |
| **`\"`**     | Double quotation mark                  |
| **`\ddd`**   | Octal character                        |
| **`\xdd`**   | Hex character                          |
| **`\udddd`** | Unicode character (e.g., `\u2122` = ™) |

```java
System.out.print("hello in first app \n2025 $&&@");
// Output:
// hello in first app
// 2025 $&&@

System.out.print("hello in first app \t2025 $&&@");
// Output: hello in first app      2025 $&&@
```

## Comments

**Comments** are lines ignored by the compiler — they document code without affecting execution. Two types exist:

```java
// This is a single-line comment  ->  everything after // on this line is ignored

/* This is a
   multi-line comment             ->  everything between /* and */ is ignored */
```

> [!IMPORTANT] Code inside a comment is **never executed**. `//System.out.println("2025");` produces NO output.

## Variables & Primitive Data Types

A **variable** is a named container that stores a data value in memory. Declaring a variable requires specifying its **type** before its name, which tells Java how much memory to allocate and what operations are allowed.

**Syntax:** `type variableName = value;`

| Type          | Range / Precision               | Notes                                                                  |
| ------------- | ------------------------------- | ---------------------------------------------------------------------- |
| **`byte`**    | -128 to 127                     | Smallest integer                                                       |
| **`short`**   | -32,768 to 32,767               |                                                                        |
| **`int`**     | -2,147,483,648 to 2,147,483,647 | Default integer type                                                   |
| **`long`**    | ±9,223,372,036,854,775,807      |                                                                        |
| **`float`**   | 6–7 decimal digits              | _Must append `f`_ -> `5.99f`                                           |
| **`double`**  | 15–16 decimal digits            | Default decimal type                                                   |
| **`boolean`** | `true` or `false` only          |                                                                        |
| **`char`**    | Single character or ASCII value | Uses **single quotes** -> `'D'`                                        |
| **`String`**  | Sequence of characters          | Uses **double quotes** -> `"Hello"` (_not_ a primitive — it's a class) |

```java
int myNum = 5;
float myFloatNum = 5.99f;   // 'f' suffix is REQUIRED for float literals
double myDouble = 22.2222222;
char myLetter = 'D';        // single quotes only
boolean myBool = true;
String myText = "Hello";    // double quotes only
```

> [!WARNING] `float` literals **must** end in `f` (e.g., `5.99f`). Without `f`, Java treats the literal as a `double` and will give a type error. `char` uses **single quotes**; `String` uses **double quotes** — swapping them causes a compile error.

> [!CAUTION] `String` is **not** a primitive type — it is a class (`java.lang.String`). This distinction matters for comparisons and method availability.

## String Concatenation & `+` Operator Trap

**Concatenation** joins Strings using `+`. When `+` is used between two Strings, it joins them. When used between two numbers, it performs **addition**.

```java
System.out.println("20" + "25");  // Output: 2025  (String join)
System.out.println(20 + 25);      // Output: 45    (arithmetic addition)
```

> [!IMPORTANT] If **either** operand is a String, `+` acts as concatenation, not addition. `"Total: " + 20 + 5` -> `"Total: 205"`, not `"Total: 25"`.

## Identifiers & Naming Rules

An **identifier** is the unique name given to a variable, class, or method. Java is **case-sensitive** (`myVar` != `myvar`).

**Valid identifier rules:**

- Must begin with a **letter**, `$`, or `_` (_not_ a digit)
- Can contain letters, digits, `_`, `$`
- **No whitespace** allowed
- **Cannot use reserved keywords** (e.g., `int`, `boolean`, `class`)
- Convention: start with **lowercase letter**; use camelCase for multi-word names

> [!CAUTION] `int`, `boolean`, `class`, `public`, `static` are **reserved keywords** — using them as variable names causes a **compile error**, not a runtime error.

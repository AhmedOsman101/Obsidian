---
title: Lecture 6
prev:
  text: "Lecture Five"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureFive"
next:
  text: "Lecture Seven & Eight"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureSevenToEight"
---

# Programming Essentials in C - Lecture 6

## Difference Between Syntax and Semantics

| Aspect                         | Syntax                                                             | Semantics                                                                 |
| ------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| **Definition**                 | The set of rules that define the structure and format of code.     | The meaning and logic of the code.                                        |
| **Focus**                      | How code **should be written** (grammar, symbols, structure).      | What the code **does** (its behavior and output).                         |
| **Errors**                     | **Syntax Errors** occur when the rules of the language are broken. | **Semantic Errors** occur when the code runs but gives incorrect results. |
| **Checking**                   | Checked at **compile-time** (before execution).                    | Checked at **runtime** (while the program runs).                          |
| **Example of Incorrect Usage** | `int 5num = 10;` (Invalid variable name - syntax error).           | `int a = 5 / 0;` (Dividing by zero - semantic error).                     |

## Syntax Errors

1.  **Missing Semicolon:**

```c
int x = 5
printf("%d\n", x);
```

**Error:** The statement `int x = 5` is missing a semicolon at the end. The C compiler expects statements to be terminated by a semicolon.

2.  **Undeclared Variable:**

```c
a = 10;
printf("%d\n", a);
```

**Error:** The variable `a` is used without being declared first. In C, you must declare a variable (specify its type) before you can use it.

3.  **Mismatched Braces:**

```c
int main() {
    printf("Hello\n");
    if (5 > 2) {
      printf("Condition is true\n");
    }
// Missing closing brace for main function
```

**Error:** The closing curly brace `}` for the `main` function is missing. Braces must be properly opened and closed to define code blocks.

## Semantic Errors:

1.  **Type Mismatch in Assignment:**

```c
int num = "hello";
```

**Error:** You are trying to assign a string literal `"hello"` to an integer variable `num`. The types are incompatible, even though the statement is syntactically correct.

2.  **Dividing by Zero:**

```c
int a = 10;
int b = 0;
int result = a / b;
printf("%d\n", result);
```

**Error:** Dividing an integer by zero is a mathematically undefined operation. While the C code is syntactically valid, it leads to undefined behavior or a runtime error.

3.  **Using `printf` with Incorrect Format Specifier:**

```c
int value = 123;
printf("%s\n", value);
```

**Error:** The format specifier `%s` is used to print a string (a sequence of characters), but `value` is an integer. This mismatch in the expected data type can lead to incorrect output or a runtime error.

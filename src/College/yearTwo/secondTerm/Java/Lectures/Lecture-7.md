---
prev:
  text: "Lecture 6"
  link: "/College/yearTwo/secondTerm/Java/Lectures/Lecture-6"
next:
  text: "Lecture 8"
  link: "/College/yearTwo/secondTerm/Java/Lectures/Lecture-8"
title: Lecture 7
---

# Java Programming - Lecture 7

## Java Methods

**Methods** are named blocks of code declared inside a **class** and executed only when they are **called**. They support reuse because one definition can run many times.

- A method declaration includes a **return type**, a **method name**, and parentheses `()`.
- A method is _not executed automatically_ just because it is written inside the class.
- A method can be written before or after `main()`, as long as it stays inside the same class body.

> [!IMPORTANT]
> **`main()`** is a special entry-point method that starts the program, but user-defined methods such as **`welcome()`** run only if `main()` or another method calls them.

| Concept         | Included                        | Excluded                        | Why it matters                                    |
| --------------- | ------------------------------- | ------------------------------- | ------------------------------------------------- |
| **Method**      | Named reusable code block       | Standalone code outside a class | Java requires methods to belong to a class        |
| **Method call** | Using the method name with `()` | Merely declaring the method     | Declaration creates behavior; calling executes it |

## Method Declaration Structure

The lecture's core pattern is **`public static void welcome()`**. **`public`** controls access, **`static`** binds the method to the class, and **`void`** means no value is returned.

```java
// Purpose: declare a reusable method that prints a message.
public static void welcome() {
  System.out.println("hello in NCTU");
}
```

Why this works: declaration stores the method, but execution waits for a call.

> [!WARNING]
> _A method with **`void`** can print output, but it cannot return a value with `return someValue;`._ Printing and returning are different operations.

### Declaration vs. Execution

If a method is declared but never called, its statements do not run. A class with `welcome()` and an empty `main()` therefore shows no output.

## Calling Methods and Execution Flow

A **method call** transfers control from the current method to the target method. When `main()` calls `welcome();`, Java runs `welcome()` first, then returns to `main()`. The called method must finish before execution continues.

```java
// Purpose: call the method so its code actually runs.
package methods;

public class WelcomeMethod {
  public static void welcome() {
    System.out.println("Welcome to NCTU");
  }

  public static void main(String[] args) {
    welcome();
  }
}
```

```mermaid
flowchart TD
  A[Program starts at main] --> B[Call welcome()]
  B --> C[Execute statements inside welcome]
  C --> D[Return to main]
  D --> E[Program ends]
```

1. Java starts at **`main(String[] args)`**.
2. `main()` encounters **`welcome();`**.
3. Control moves into `welcome()`.
4. The `System.out.println()` statement runs.
5. Control returns to `main()` after the method ends.

## Local Variables Inside Methods

A **local variable** is declared inside a method body and can be used only inside that method. In the lecture, `fname` and `lname` exist only inside `welcome()`. Java limits local scope to the declaring block.

```java
// Purpose: show that methods can contain their own local variables.
public static void welcome() {
  System.out.println("hello in NCTU");
  String fname = "Dr.Mohamed";
  String lname = "Ramadan";
  System.out.println("Full name is: " + fname + " " + lname);
}
```

> [!NOTE]
> _`fname` and `lname` are not parameters and not global fields; they are local to `welcome()` only._

| Concept            | Defined where | Accessible where       | Main risk                               |
| ------------------ | ------------- | ---------------------- | --------------------------------------- |
| **Parameter**      | Method header | Inside that method     | Wrong argument order or type            |
| **Local variable** | Method body   | Inside that block only | Assuming it is usable in another method |

## Parameters and Arguments

**Parameters** are variables listed in a method declaration, while **arguments** are the values passed during the call. In `emp(String name, String work)`, `name` and `work` are parameters. In `emp("Dr.Mohamed", "Lecturers")`, the strings are arguments. The declaration fixes the expected types and order.

```java
// Purpose: accept input values from the caller.
public static void emp(String name, String work) {
  System.out.println(name + " is " + work);
}

public static void main(String[] args) {
  emp("Dr.Mohamed", "Lecturers");
}
```

If the types or positions do not match, Java rejects the call because the method signature must match.

> [!IMPORTANT]
> **Parameter order matters.** `emp("Lecturers", "Dr.Mohamed")` would still compile because both arguments are `String`, but it would produce the wrong meaning.

## Return Values vs. `void`

A **return value** is data sent back from a method to the caller. A method with return type **`int`** must return an integer, while a method with **`void`** returns nothing. In the lecture, `calc(int n1, int n2)` returns `n1 + n2`, so the caller can print or reuse the result. `return` ends the method and sends one value back.

```java
// Purpose: compute a value and send it back to the caller.
public static int calc(int n1, int n2) {
  return n1 + n2;
}

public static void main(String[] args) {
  System.out.println(calc(8, 2));
}
```

### `void` Method vs. Value-Returning Method

| **Aspect**        | **`void`**        | **`int` return type**      |
| ------------------------------------------------------- | ----------------- | -------------------------- |
| Main purpose                                            | Perform an action | Compute and send back data |
| Can be used inside `System.out.println(...)` as a value | No                | Yes                        |
| Needs `return value;`                                   | No                | Yes                        |
| Lecture example                                         | `welcome()`       | `calc(int n1, int n2)`     |

> [!WARNING]
> _If a method declares a non-`void` return type such as **`int`**, every valid execution path must return a value of that type._

## Exam Traps and Recall Rules

- **Method**: declared inside a class and executed only when called.
- **Method declaration** vs. **method call**: declaration defines code; calling executes code.
- **`static`** means the method belongs to the class, so `main()` can call `welcome()` directly in the lecture style.
- **`void`** means no value is returned, even if text is printed to the screen.
- **Parameters** belong in the method header; **arguments** belong in the call.
- **Local variables** exist only inside the method where they are declared.
- **`return`** sends a value back and normally ends method execution immediately.
- **Execution order**: `main()` starts first, then calls other methods as needed.

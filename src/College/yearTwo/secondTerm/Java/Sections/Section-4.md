---
prev:
  text: "Section 3"
  link: "/College/yearTwo/secondTerm/Java/Sections/Section-3"
next:
  text: "Section 5"
  link: "/College/yearTwo/secondTerm/Java/Sections/Section-5"
title: Section 4
---

# Java Programming - Section 4

## `while` Loop Basics

**`while` loop** repeats a block of code while a **Boolean condition** remains `true`. It is recommended when the number of iterations is **not fixed**, because the loop continues based on a condition rather than a known count. This works because Java checks the condition **before** each iteration, so the body may execute zero times if the condition is false at the start.

```java
// Purpose: print numbers from 1 to 10 using a while loop.
int i = 1;
while (i <= 10) {
  System.out.println(i);
  i++;
}
```

1. Initialize the control variable.
2. Test the condition.
3. If the condition is `true`, run the body.
4. Update the control variable.
5. Recheck the condition.

> [!IMPORTANT]
> **Updating the loop variable is essential.** If the condition never becomes false, the loop becomes infinite.

## `while` vs. Nested and Infinite `while`

A **nested `while` loop** is a `while` loop inside another `while` loop. The **inner loop** finishes completely for each iteration of the **outer loop**, which is why nested loops are used for coordinate pairs, tables, and multi-level repetition.

```java
// Purpose: show outer and inner while loop interaction.
int i = 1;
while (i <= 3) {
  int j = 1;
  while (j <= 5) {
    System.out.println(i + " " + j);
    j++;
  }
  i++;
}
```

An **infinite `while` loop** uses `while (true)` and never stops unless a `break`, exception, or external termination ends it.

| Loop form            | Main boundary                   | Key behavior                        |
| -------------------- | ------------------------------- | ----------------------------------- |
| **Simple `while`**   | Condition checked before body   | May run zero times                  |
| **Nested `while`**   | Inner loop is inside outer loop | Inner loop restarts each outer pass |
| **Infinite `while`** | Condition always true           | No automatic termination            |

> [!WARNING]
> _If the inner loop variable is not updated, the program can get stuck inside the inner loop even if the outer loop is correct._

## `do-while` Loop and Exit Control

**`do-while` loop** repeats a block of code and checks the condition **after** the loop body. It is called an **exit control loop**, because the test happens at the end rather than the beginning. This matters because the loop body executes **at least once**, even when the condition is false after the first pass.

```java
// Purpose: print numbers from 1 to 10 using a do-while loop.
int i = 1;
do {
  System.out.println(i);
  i++;
} while (i <= 10);
```

| Loop type      | Condition checked | Minimum executions |
| -------------- | ----------------- | ------------------ |
| **`while`**    | Before the body   | `0`                |
| **`do-while`** | After the body    | `1`                |

Why this works: Java enters the `do` block first, then decides whether another iteration is allowed.

> [!NOTE]
> _`do { ... } while(true);` creates an infinite `do-while` loop._ It still runs forever because the condition never becomes false.

## `continue` Statement and Iteration Skipping

**`continue`** skips the remaining code in the **current iteration** and jumps to the next iteration of the loop. Unlike **`break`**, it does **not** terminate the whole loop. This distinction matters because many exam questions compare "skip one pass" with "stop the loop completely."

```java
// Purpose: skip printing the value 5.
for (int i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  System.out.println(i);
}
```

If `i == 5`, Java skips `System.out.println(i);` for that iteration only, then continues with `i == 6`.

```java
// Purpose: print odd numbers only by skipping even numbers.
for (int number = 1; number <= 10; number++) {
  if (number % 2 == 0) {
    continue;
  }
  System.out.println(number);
}
```

> [!IMPORTANT]
> _Inside nested loops, **`continue`** affects only the current inner loop unless a labelled form is used._

## Loop-Based Problem Patterns

The programming tasks in this section all use loops plus update logic. A **Fibonacci series** generates each new term by adding the previous two terms, so the variables must be updated in order: first compute the new term, then shift the old values forward.

```java
// Purpose: generate Fibonacci terms by shifting previous values.
int n1 = 0, n2 = 1, n3, count = 10;
System.out.print(n1 + " " + n2);
for (int i = 2; i < count; ++i) {
  n3 = n1 + n2;
  System.out.print(" " + n3);
  n1 = n2;
  n2 = n3;
}
```

- **Prime number check**: test divisibility from `2` to `n / 2`; if any divisor gives remainder `0`, the number is not prime.
- **Right triangle pattern**: use nested loops where the inner loop prints stars up to the current row.
- **Left triangle pattern**: print spaces first, then stars, so alignment depends on loop order.

## Prime Logic and Pattern Output

A **prime number** has exactly two positive divisors: `1` and itself. The section's algorithm uses a **flag variable** to record whether a divisor was found. This works because once a divisor is detected, the program can stop checking and classify the number as not prime.

```java
// Purpose: check primality with divisibility testing.
int flag = 0;
if (n == 0 || n == 1) {
  System.out.println(n + " is not prime number");
} else {
  for (int i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    System.out.println(n + " is a prime number");
  }
}
```

> [!WARNING]
> _`0` and `1` are not prime numbers._ If this edge case is skipped, the algorithm gives the wrong result.

For star patterns, the outer loop controls the row number and the inner loop controls how many spaces or `*` characters are printed on that row. If the spaces loop is wrong, a left triangle becomes misaligned even when the stars count is correct.

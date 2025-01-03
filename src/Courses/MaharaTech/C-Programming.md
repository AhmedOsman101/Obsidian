---
prev:
  text: "Courses"
  link: "/Courses/MaharaTech/index"
next: false
---

# C Programming From Basics to Mastery

## Switch Statement in C

Using floating-point numbers in `switch` statements in C is not recommended (and in many cases not even possible) due to several reasons:

### 1. Precision Issues

Floating-point numbers are stored in binary with finite precision, which can lead to subtle inaccuracies. This means that even if two floating-point numbers look equal in source code, they might not match exactly in memory due to rounding errors.

For example:

```C
float a = 0.1;
float b = 0.1 * 3 / 3;
if (a == b) {
  printf("a == b\n"); // this will work
}
```

In a `switch` statement, the `case` labels must have exact matches, and such precision issues make it unreliable to use floating-point numbers. 

```C
float a = 0.1;
float b = 0.1 * 3 / 3;
switch(b) { // error: Statement requires expression of integer type ('float' invalid)
  case 0.1: // error: Integer constant expression must have integer type, not 'double'
    printf("\n");
    break;
}
```

Attempting to write a switch statement with a float would result in the following errors:

![](../../figure.png)


---

### 2. Standard Restriction

The C standard (ISO C99 and later) specifies that the expression in a `switch` statement must evaluate to an **integer or an enumerated type**. Floating-point numbers are explicitly disallowed. The syntax is defined this way to ensure predictable and efficient behavior.

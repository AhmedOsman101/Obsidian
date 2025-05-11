---
title: Lecture 3
prev:
  text: "Lecture Two"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureTwo"
next:
  text: "Lecture Four"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureFour"
---

# Programming Essentials in C - Lecture 3

## C Constants

- Constants are values that cannot be changed once assigned.
- Declared using the `const` keyword.
- Typically named in uppercase for readability.

### Declaring Constants

**Example:**

```C
const float PI = 3.14; // Constant float
const int BIRTH_YEAR = 2005; // Constant integer

printf("%.2f\n", PI); // Output: 3.14
printf("%d\n", BIRTH_YEAR); // Output: 2005
// PI = 3.14159; // Error: cannot modify constant
```

## C Type Conversion

Type conversion in C involves converting a value from one data type to another.
There are two types:

- Implicit Conversion (automatic)
- Explicit Conversion (manual)

### Implicit Conversion

Implicit conversion is done automatically by the compiler when assigning a value of one type to another.

**Example:**

```C
float num = 9; // Integer 9 is implicitly converted to float
printf("%f", num); // Output: 9.000000
```

Another example where `float` is automatically converted to `int`:

```C
int result = 5 / 2; // Integer division, drops decimal (2.5 -> 2)
printf("Integer division: %d\n", result); // Output: 2
```

This may lead to data loss if not handled carefully.

### Explicit Conversion

Explicit conversion (casting) is performed manually by specifying the target type in parentheses before the value or variable.

**Example:**

```C
float result = (float) 5 / 2; // Forces floating-point division
printf("%f", result); // output: 2.500000
```

### Real-Life Example

Calculate a user's score percentage in a game:

```C
const int MAX_SCORE = 500; // Maximum possible score
int userScore = 423;       // User's score

float percentage = (float) userScore / MAX_SCORE * 100.0; // Explicit cast for precision
printf("User's percentage: %.2f%%", percentage); // Output: 84.60%
```

## C Operators

Operators are symbols that instruct the compiler to perform specific mathematical or logical operations.

### Arithmetic Operators

Arithmetic operators perform basic math operations.

| Operator |  Description   |
| :------: | :------------: |
|   `+`    |    Addition    |
|   `-`    |  Subtraction   |
|   `*`    | Multiplication |
|   `/`    |    Division    |
|   `%`    |    Modulus     |
|   `++`   |   Increment    |
|   `--`   |   Decrement    |

**Example:**

```C
int a = 10, b = 3;
printf("a: %d, b: %d\n", a, b);
printf("Addition: %d\n", a + b); // 13
printf("Subtraction: %d\n", a - b); // 7
printf("Multiplication: %d\n", a * b); // 30
printf("Division: %d\n", a / b); // 3
printf("Modulus: %d\n", a % b); // 1
```

#### Arithmetic Operations with char

`char` values (stored as ASCII integers) can be used in arithmetic operations.

**Example:**

```C
char first = 'Z', second = 'M';
int diff = first - second; // 90 - 77 = 13 (ASCII values)
printf("Difference between '%c' and '%c': %d\n", first, second, diff);
```

### Relational Operators

Relational operators compare two values and return a boolean result (1 for true, 0 for false).

| Operator |       Description        | Example  |
| :------: | :----------------------: | :------: |
|   `==`   |         Equal to         | `5 == 5` |
|   `!=`   |       Not equal to       | `5 != 3` |
|   `>`    |       Greater than       | `5 > 3`  |
|   `<`    |        Less than         | `5 < 6`  |
|   `>=`   | Greater than or equal to | `5 >= 5` |
|   `<=`   |  Less than or equal to   | `5 <= 6` |

**Example:**

```C
int x = 15, y = 10;
printf("x == y: %d\n", x == y); // 0
printf("x != y: %d\n", x != y); // 1
printf("x > y: %d\n", x > y);   // 1
printf("x < y: %d\n", x < y);   // 0
```

### Logical Operators

Logical operators combine conditions to produce a `true` (1) or `false` (0) result.

| Operator | Description |  Example   |
| :------: | :---------: | :--------: |
|   `&&`   | Logical AND |  `A && B`  |
|  `\|\|`  | Logical OR  | `A \|\| B` |
|   `!`    | Logical NOT |    `!A`    |

**Example:**

```C
int phy = 50, maths = 60;
if (phy >= 50 && maths >= 50) {
  printf("Result: Pass\n"); // Output: Pass
} else {
  printf("Result: Fail\n");
}
```

### Bitwise Operators

Bitwise operators manipulate individual bits of numbers.

| Operator | Description              | Example  |
| :------: | ------------------------ | :------: |
|   `&`    | Bitwise AND              | `A & B`  |
|   `\|`   | Bitwise OR               | `A \| B` |
|   `^`    | Bitwise XOR              | `A ^ B`  |
|   `~`    | Bitwise NOT (complement) |   `~A`   |
|   `<<`   | Left shift               | `A << 2` |
|   `>>`   | Right shift              | `A >> 2` |

**Example:**

```C
unsigned int a = 60; // 0011 1100
unsigned int b = 13; // 0000 1101
printf("a & b: %d\n", a & b);  // 12 (0000 1100)
printf("a | b: %d\n", a | b);  // 61 (0011 1101)
printf("a ^ b: %d\n", a ^ b);  // 49 (0011 0001)
printf("~a: %d\n", ~a);        // -61 (1100 0011)
printf("a << 2: %d\n", a << 2); // 240 (1111 0000)
printf("a >> 2: %d\n", a >> 2); // 15 (0000 1111)
```

### Assignment Operators

Assignment operators assign values to variables, often combined with arithmetic or bitwise operations.

| Operator |  Example   | Equivalent To |
| :------: | :--------: | :-----------: |
|   `=`    |  `x = 5`   |    `x = 5`    |
|   `+=`   |  `x += 3`  |  `x = x + 3`  |
|   `-=`   |  `x -= 3`  |  `x = x - 3`  |
|   `*=`   |  `x *= 3`  |  `x = x * 3`  |
|   `/=`   |  `x /= 3`  |  `x = x / 3`  |
|   `%=`   |  `x %= 3`  |  `x = x % 3`  |
|   `&=`   |  `x &= 3`  |  `x = x & 3`  |
|  `\|=`   | `x \| = 3` | `x = x \| 3`  |
|   `^=`   |  `x ^= 3`  |  `x = x ^ 3`  |
|  `<<=`   | `x <<= 3`  | `x = x << 3`  |
|  `>>=`   | `x >>= 3`  | `x = x >> 3`  |

**Example:**

```C
int a = 21, b;
b = a;     printf("b = a: %d\n", b);    // 21
b += a;    printf("b += a: %d\n", b);   // 42
b -= a;    printf("b -= a: %d\n", b);   // 21
b *= a;    printf("b *= a: %d\n", b);   // 441
b /= a;    printf("b /= a: %d\n", b);   // 21
b = 200;
b %= a;    printf("b %%= a: %d\n", b);   // 11
```

### Increment and Decrement Operators

These operators increment or decrement the value of a variable by 1.

#### Types

1. **Pre-increment/decrement**: Changes value before use (`++a`, `--a`)
2. **Post-increment/decrement**: Changes value after use (`a++`, `a--`)

**Example:**

```C
int a = 5, pre, post;

pre = ++a;
printf("Pre-increment: a = %d, pre = %d\n", a, pre); // a = 6, pre = 6
a = 5;
post = a++;
printf("Post-increment: a = %d, post = %d\n", a, post); // a = 6, post = 5

a = 5;
pre = --a;
printf("Pre-decrement: a = %d, pre = %d\n", a, pre); // a = 4, pre = 4
a = 5;
post = a--;
printf("Post-decrement: a = %d, post = %d\n", a, post); // a = 4, post = 5
```

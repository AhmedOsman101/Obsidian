---
prev:
  text: "Section Two"
  link: "/College/Python/Sections/SectionTwo"
next:
  text: "Section Three (Part II)"
  link: "/College/Python/Sections/SectionThreePartTwo"
---

# Programming Essentials in Python Section 3 (Part I)

## Operators in Python

Python categorizes operators into several types, each serving a specific purpose. Below are the main operator groups, each with descriptions, syntax, and examples.

### 1. Arithmetic Operators

These operators perform mathematical operations.

| Operator | Name           | Example                                                |
| -------- | -------------- | ------------------------------------------------------ |
| `+`      | Addition       | `x + y` (Adds `x` and `y`)                             |
| `-`      | Subtraction    | `x - y` (Subtracts `y` from `x`)                       |
| `*`      | Multiplication | `x * y` (Multiplies `x` and `y`)                       |
| `/`      | Division       | `x / y` (Divides `x` by `y`)                           |
| `%`      | Modulus        | `x % y` (Remainder of `x` divided by `y`)              |
| `**`     | Exponentiation | `x ** y` (Raises `x` to the power of `y`)              |
| `//`     | Floor Division | `x // y` (Quotient of `x` divided by `y` rounded down) |

### 2. Assignment Operators

Assignment operators assign values to variables.

| Operator | Name                      | Example                                |
| -------- | ------------------------- | -------------------------------------- |
| `=`      | Assignment                | `x = 5` (Assigns `5` to `x`)           |
| `+=`     | Addition Assignment       | `x += 3` (Equivalent to `x = x + 3`)   |
| `-=`     | Subtraction Assignment    | `x -= 3` (Equivalent to `x = x - 3`)   |
| `*=`     | Multiplication Assignment | `x *= 3` (Equivalent to `x = x * 3`)   |
| `/=`     | Division Assignment       | `x /= 3` (Equivalent to `x = x / 3`)   |
| `%=`     | Modulus Assignment        | `x %= 3` (Equivalent to `x = x % 3`)   |
| `**=`    | Exponentiation Assignment | `x **= 3` (Equivalent to `x = x ** 3`) |
| `//=`    | Floor Division Assignment | `x //= 3` (Equivalent to `x = x // 3`) |

### 3. Comparison Operators

Comparison operators compare values and return a boolean result.

| Operator | Name                     | Example                                                |
| -------- | ------------------------ | ------------------------------------------------------ |
| `==`     | Equal to                 | `x == y` (True if `x` is equal to `y`)                 |
| `!=`     | Not equal                | `x != y` (True if `x` is not equal to `y`)             |
| `>`      | Greater than             | `x > y` (True if `x` is greater than `y`)              |
| `<`      | Less than                | `x < y` (True if `x` is less than `y`)                 |
| `>=`     | Greater than or equal to | `x >= y` (True if `x` is greater than or equal to `y`) |
| `<=`     | Less than or equal to    | `x <= y` (True if `x` is less than or equal to `y`)    |

### 4. Logical Operators

Logical operators combine conditional statements.

| Operator | Name        | Example                                               |
| -------- | ----------- | ----------------------------------------------------- |
| `and`    | Logical AND | `x and y` (True if both `x` and `y` are True)         |
| `or`     | Logical OR  | `x or y` (True if at least one of `x` or `y` is True) |
| `not`    | Logical NOT | `not x` (True if `x` is False)                        |

### 5. Bitwise Operators

Bitwise operators perform operations at the binary level on integers.

| Operator | Name        | Example                                                   |
| -------- | ----------- | --------------------------------------------------------- |
| `&`      | AND         | `x & y`                                                   |
| `\|`     | OR          | x \| y                                                    |
| `^`      | XOR         | `x ^ y`                                                   |
| `<<`     | Left Shift  | `x << 2` (Shifts bits in `x` to the left by 2 positions)  |
| `>>`     | Right Shift | `x >> 2` (Shifts bits in `x` to the right by 2 positions) |

### Bitwise Operator Truth Tables

1. **Bitwise AND (`&`)**
   Returns 1 only if both bits are 1.

| a   | b   | a & b |
| --- | --- | ----- |
| 0   | 0   | 0     |
| 0   | 1   | 0     |
| 1   | 0   | 0     |
| 1   | 1   | 1     |

2. **Bitwise OR (`|`)**
   Returns 1 if at least one bit is 1.

| a   | b   | a \| b |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

3. **Bitwise XOR (`^`)**
   Returns 1 only if one of the bits is 1 (similar = False, different = True).

| a   | b   | a ^ b |
| --- | --- | ----- |
| 0   | 0   | 0     |
| 0   | 1   | 1     |
| 1   | 0   | 1     |
| 1   | 1   | 0     |

#### Bitwise Shift Operators

Bitwise shift operators move bits within the binary representation of an integer either to the left or to the right. Shifts can be a powerful way to perform fast calculations by modifying the binary representation directly.

1. **Left Shift (`<<`)**

- The left shift operator `<<` shifts all bits in the number to the left by a specified number of positions.
- Each left shift effectively multiplies the number by $2^{\text{shift count}}$.
- Example:
  ```python
  x = 3       # Binary: 0000 0011
  print(x << 2)  # Shifts bits left by 2, resulting in 12 (Binary: 0000 1100)
  ```
- Here, `3 << 2` results in `12` because shifting `3` (binary `0000 0011`) left by 2 adds two zeros to the right, changing it to binary `0000 1100` which represents `12` in decimal. Same as mulitplying `3` by $2^\text{shift count}$ which is $3*2^2 = 12$.

2. **Right Shift (`>>`)**

- The right shift operator `>>` moves all bits in the number to the right by a specified number of positions.
- Each right shift effectively divides the number by $2^{\text{shift count}}$ and discards any remainder (similar to floor division).
- Example:
  ```python
  x = 8       # Binary: 0000 1000
  print(x >> 2)  # Shifts bits right by 2, yielding 2 (Binary: 0000 0010)
  ```
- Here, `8 >> 2` results in `2` because shifting `8` (binary `0000 1000`) right by 2 removes two rightmost bits, changing it to binary `0000 0010`, which represents `2` in decimal. Same as dividing `8` by $2^\text{shift count}$ which is $8\div2^2 = 2$.

## Floor Division and `ceil()` Function

1. **Floor Division (`//`)**

   - Floor division divides and returns the integer part of the result; it removes anything after the decimal point.

   ```python
   print(7 // 2)  # Output: 3 (rounds down from 3.5)
   ```

2. **`ceil()` Function**

   - The `ceil()` function, from Python's `math` module, rounds up to the nearest integer.

   ```python
   from math import ceil # Importing the `ceil` function from the `math` module
   print(ceil(4.2))  # Output: 5
   ```

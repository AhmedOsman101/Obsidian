---
prev:
  text: "Lecture Two"
  link: "/College/Python/Lectures/LectureTwo"
next:
  text: "Lecture Four"
  link: "/College/Python/Lectures/LectureFour"
---

# Programming Essentials in Python Lecture 3

## Operators in Python

Operators in Python are used to perform operations on variables and values. Python categorizes operators into several groups based on their functionality.

### 1. Arithmetic Operators

Arithmetic operators perform mathematical operations on numeric values.

| Operator | Name           | Example  |
| -------- | -------------- | -------- |
| `+`      | Addition       | `x + y`  |
| `-`      | Subtraction    | `x - y`  |
| `*`      | Multiplication | `x * y`  |
| `/`      | Division       | `x / y`  |
| `%`      | Modulus        | `x % y`  |
| `**`     | Exponentiation | `x ** y` |
| `//`     | Floor division | `x // y` |

**Example**:

```python
x = 10
y = 3
print(x + y)    # Addition: 13
print(x - y)    # Subtraction: 7
print(x * y)    # Multiplication: 30
print(x / y)    # Division: 3.333...
print(x % y)    # Modulus: 1
print(x ** y)   # Exponentiation: 1000
print(x // y)   # Floor division: 3
```

### 2. Assignment Operators

Assignment operators are used to assign values to variables.

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| `=`      | `x = 5`   | `x = 5`      |
| `+=`     | `x += 3`  | `x = x + 3`  |
| `-=`     | `x -= 3`  | `x = x - 3`  |
| `*=`     | `x *= 3`  | `x = x * 3`  |
| `/=`     | `x /= 3`  | `x = x / 3`  |
| `%=`     | `x %= 3`  | `x = x % 3`  |
| `//=`    | `x //= 3` | `x = x // 3` |
| `**=`    | `x **= 3` | `x = x ** 3` |
| `&=`     | `x &= 3`  | `x = x & 3`  |
| \|=      | x \|= 3   | x = x \| 3   |
| `^=`     | `x ^= 3`  | `x = x ^ 3`  |
| `>>=`    | `x >>= 3` | `x = x >> 3` |
| `<<=`    | `x <<= 3` | `x = x << 3` |


**Example**:

```python
x = 5
x += 3
print(x)  # Output: 8
```

### 3. Comparison Operators

Comparison operators are used to compare two values.

| Operator | Name                     | Example  |
| -------- | ------------------------ | -------- |
| `==`     | Equal                    | `x == y` |
| `!=`     | Not equal                | `x != y` |
| `>`      | Greater than             | `x > y`  |
| `<`      | Less than                | `x < y`  |
| `>=`     | Greater than or equal to | `x >= y` |
| `<=`     | Less than or equal to    | `x <= y` |

**Example**:

```python
x = 5
y = 2
print(x == y)  # Output: False
print(x >= y)  # Output: True
```

### 4. Logical Operators

Logical operators are used to combine conditional statements.

| Operator | Description                                     | Example                 |
| -------- | ----------------------------------------------- | ----------------------- |
| `and`    | Returns `True` if both statements are true      | `x < 5 and x < 10`      |
| `or`     | Returns `True` if one of the statements is true | `x < 5 or x < 4`        |
| `not`    | Reverses the result, returns `False` if true    | `not(x < 5 and x < 10)` |

**Example**:

```python
x = 5
print(x > 3 and x < 10)  # Output: True
print(x > 6 or x < 4)    # Output: False
print(not(x > 3 and x < 10))  # Output: False
```

### 5. Identity Operators

Identity operators check if two variables refer to the same object in memory.

| Operator | Description                                              | Example      |
| -------- | -------------------------------------------------------- | ------------ |
| `is`     | Returns `True` if both variables are the same object     | `x is y`     |
| `is not` | Returns `True` if both variables are not the same object | `x is not y` |

**Example**:

```python
x = [1, 2, 3]
y = x
z = [1, 2, 3]
print(x is y)      # Output: True
print(x is z)      # Output: False
print(x is not z)  # Output: True
```

### 6. Membership Operators

Membership operators test if a sequence contains a specified element.

| Operator | Description                                             | Example        |
| -------- | ------------------------------------------------------- | -------------- |
| `in`     | Returns `True` if a sequence contains the value         | `"a" in x`     |
| `not in` | Returns `True` if a sequence does not contain the value | `"a" not in x` |

**Example**:

```python
x = ["apple", "banana"]
print("banana" in x)     # Output: True
print("pineapple" not in x)  # Output: True
```

### 7. Bitwise Operators

Bitwise operators compare the binary representations of integers.

| Operator | Name        | Description                                | Example  |
| -------- | ----------- | ------------------------------------------ | -------- |
| `&`      | AND         | Sets each bit to 1 if both bits are 1      | `x & y`  |
| \|       | OR          | Sets each bit to 1 if one of two bits is 1 | x \| y   |
| `^`      | XOR         | Sets each bit to 1 if only one bit is 1    | `x ^ y`  |
| `~`      | NOT         | Inverts all the bits                       | `~x`     |
| `<<`     | Left Shift  | Shifts bits left, filling with zeros       | `x << 2` |
| `>>`     | Right Shift | Shifts bits right, filling with sign bit   | `x >> 2` |

**Example**:

```python
x = 6  # 0000000000000110 in binary
y = 3  # 0000000000000011 in binary

print(x & y)   # Output: 2 (0000000000000010)
print(x | y)   # Output: 7 (0000000000000111)
print(x ^ y)   # Output: 5 (0000000000000101)
print(~x)      # Output: -7 (inverts all bits of 6)
print(x << 1)  # Output: 12 (left shift)
print(x >> 1)  # Output: 3 (right shift)
```

### Operator Precedence

Operator precedence determines the order in which operations are performed in an expression. Higher precedence operators are evaluated before lower precedence operators.

| Precedence | Operator                         | Description                                       |
| ---------- | -------------------------------- | ------------------------------------------------- |
| Highest    | `()`                             | Parentheses                                       |
|            | `**`                             | Exponentiation                                    |
|            | `+x`, `-x`, `~x`                 | Unary plus, unary minus, and bitwise NOT          |
|            | `*`, `/`, `%`, `//`              | Multiplication, division, modulus, floor division |
|            | `+`, `-`                         | Addition and subtraction                          |
|            | `>>`, `<<`                       | Bitwise left and right shifts                     |
|            | `&`                              | Bitwise AND                                       |
|            | `^`                              | Bitwise XOR                                       |
|            | \|                               | Bitwise OR                                        |
|            | `==`, `!=`, `>`, `>=`, `<`, `<=` | Comparisons, identity, and membership operators   |
|            | `not`                            | Logical NOT                                       |
|            | `and`                            | Logical AND                                       |
| Lowest     | `or`                             | Logical OR                                        |

**Example**:

```python
# Multiplication has higher precedence than addition
print(3 * 5 + 10)   # Output: 25
```

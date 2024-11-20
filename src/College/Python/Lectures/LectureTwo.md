---
prev:
  text: "Lecture One"
  link: "/College/Python/Lectures/LectureOne"
next:
  text: "Lecture Three"
  link: "/College/Python/Lectures/LectureThree"
---

# Programming Essentials in Python Lecture 2

## Python Number Types: Integers, Floats, and Complex Numbers

### Integers
- **Integers** are whole numbers (zero, positive, or negative) without any fractional part. They are of unlimited precision in Python.
- All integer literals or variables belong to the `int` class.

You can use `type()` to verify the class of an integer:

```python
x = 10
print(type(x))  # Output: <class 'int'>
```

### Integer Literals
- Integers can be represented in binary, octal, and hexadecimal forms:
    - Binary: Prefix `0b`
    - Octal: Prefix `0o`
    - Hexadecimal: Prefix `0x`

```python
print(0b1010)  # Binary, Output: 10
print(0o12)    # Octal, Output: 10
print(0xa)     # Hexadecimal, Output: 10
```

- **Leading Zeros**: Non-zero integers cannot have leading zeros (e.g., `0123` is invalid).
- **Underscores**: Use `_` as a separator in large numbers for readability.

```python
x = 1_234_567
print(x)  # Output: 1234567
```

- **Integer Conversion**: Convert strings or floats to integers using `int()`.

```python
print(int("100"))      # Output: 100
print(int("5.5"))      # Truncates to Output: 5
print(int("100", 2))   # Binary '100' to int, Output: 4
```

### Floating-Point Numbers (Floats)
- **Floats** represent real numbers with fractional parts, using a decimal or scientific notation (`E` or `e`).

```python
z = 1.5
print(z)               # Output: 1.5
print(type(z))         # Output: <class 'float'>
print(3e3)             # Output: 3000.0
```

- **Scientific Notation**: Floats can represent very large or small numbers using scientific notation (e.g., `1e-5` represents $1 \times 10^{-5}$).

```python
x = 6.022e23
print("x =", x)        # Output: 6.022e+23
```

- **Underscore Separator**: Floats can include underscores for readability.

```python
f = 123_42.222_013
print(f)               # Output: 12342.222013
```

- **Convert to Float**: Convert strings or integers to floats using `float()`.

```python
print(float("5.5"))    # Output: 5.5
print(float("1e3"))    # Output: 1000.0
print(float("-inf"))   # Output: -inf
```

### Complex Numbers
- **Complex Numbers** in Python have both real and imaginary parts, written as `a + bj`, where `j` represents the imaginary unit.

```python
# Define complex numbers 
a = 8 + 3j
b = 2 + 1j

print(a)               # Output: (8+3j)
print(type(b))         # Output: <class 'complex'>

# Basic operations 
addition = a + b       # (10+4j)
subtraction = b - a    # (-6-2j)
multiplication = a * b # (13+14j)
division = a / b       # (3.8-0.4j)
```

### Strings
- Strings are defined with either single or double quotes. Escape special characters with a backslash `\`.

```python
print("Did you know that 'word' is a word?")
print('Did you know that "word" is a word?')
print('Did you know that \'word\' is a word?')
print("Did you know that \"word\" is a word?")
```

### Converting Strings to Numbers and Vice Versa
- Convert strings to integers or floats with `int()` and `float()` respectively. Convert numbers to strings with `str()`.

```python
print(int("54"))       # Output: 54
print(str(81))         # Output: '81'
```

### Control Codes in Strings
- **Special characters** within strings use control codes:
    - `\n`: Newline
    - `\t`: Tab
    - `\b`: Backspace
    - `\a`: Alert (beep)

```python
print("P\nQ\nR")       # Outputs on new lines
print("S\tU\tV")       # Outputs with tabs
print("WX\bYZ")        # Removes the character before 'Y'
print("\a")            # Starts an alert sound 'Beep'
```

### User Input
- **Getting User Input**: Use `input()` to get input from users, and `int()` or `float()` to convert it to the desired type.
- **Example**: A simple calculator that adds two integers.

```python
# Get two integer inputs and print their sum
num1 = int(input("Please enter an integer value: "))
num2 = int(input("Please enter another integer value: "))
print(num1, "+", num2, "=", num1 + num2)
```

## Variable Naming Rules and Identifiers
- **Identifiers**: Variable names (identifiers) must start with a letter or underscore, followed by letters, numbers, or underscores.
- **Reserved Words**: Keywords (e.g., `if`, `while`, `True`) cannot be used as identifiers.

### Example Program: Calculator
Here’s a program that adds two numbers entered by the user:

```python
# Short calculator program
num1 = int(input("Please enter an integer value: "))
num2 = int(input("Please enter another integer value: "))
print(num1, "+", num2, "=", num1 + num2)
```

This covers the essentials of number types and string handling in Python, providing examples of conversions, variable naming, and simple operations.

---
prev:
  text: "Lecture Six"
  link: "/College/Python/Lectures/LectureSix"
next:
  text: "Lecture Eight"
  link: "/College/Python/Lectures/LectureEight"
---

# Programming Essentials in Python Lecture 7

## Functions in Python

### What Are Functions?

- A **function** is a group of statements assigned to a specific name (function name) that can be called from another part of the program.
- Functions are like mini-programs, grouping reusable statements for modularity and reusability.

### Functions and Modularization

- **Module**: A file containing a set of functions.
- **Modularization**: The process of dividing a program into separate modules to make it easier to understand, test, and maintain.
- **Libraries**: Commonly used modules that provide generic solutions to frequently needed tasks.

## Types of Functions

### Built-in Functions

Predefined in Python, such as `print()`, `len()`, and `sum()`.

### User-defined Functions

Created by the programmer to perform specific tasks.

## Defining a Function

### Syntax

```python
def function_name(parameters):
  """docstring"""
  function_suite
  return [expression]
```

- `parameters`: Variables to hold values passed during the function call.
- `"""docstring"""`: A brief description of what the function does. Accessible via `help(function_name)` or `function_name.__doc__`.
- `return [expression]`: Sends a value back to the caller (optional).

---

### Examples

#### Basic Function

```python
# Define a function and call it
def my_function():
  print("My first function is called")

my_function()  # Output: My first function is called
```

#### Function With Parameters and Return Value

```python
# Function with parameters and a return value
def get_sum(n1, n2):
  """Returns the sum of n1 and n2"""
  return n1 + n2

result = get_sum(3, 5)
print(result)  # Output: 8
print(get_sum.__doc__)  # Output: Returns the sum of n1 and n2
help(get_sum)  # Output: Returns the sum of n1 and n2
```

#### Function With Default Parameters

```python
# Default parameter example
def print_language(language='English'):
  print('Your language is:', language)

print_language()          # Output: Your language is: English
print_language("Arabic")  # Output: Your language is: Arabic
```

#### Function With Flexible Parameters

```python
# Accepts unlimited arguments
def print_args(*args):
  for arg in args:
    print(arg)

print_args(1, 2, 3, 4, 5)  # Output: 1 2 3 4 5
```

#### Nested Functions

```python
# Nested function example
def outer_function():
  print("This is the outer function.")

  def inner_function():
    print("This is the inner function.")

  inner_function()

outer_function()
# Output:
# This is the outer function.
# This is the inner function.
```

## The Loop

### Factorization

```python
# Display factors of numbers from 1 to MAX
MAX = 20
n = 1
while n <= MAX:
  print(f"{n}: ", end="")
  factor = 1
  while factor <= n:
    if n % factor == 0:
      print(factor, end=" ")
    factor += 1
  print()
  n += 1
```

---

### Print Odd Numbers

```python
# Print odd numbers from 1 to n
n = int(input("Enter an integer: "))
print(f"The odd numbers from 1 to {n} are:")
for i in range(1, n + 1):
  if i % 2 != 0:
    print(i)
```

---

### Star Pattern

```python
# Print a star pattern
rows = 5
current_row = 1

while current_row <= rows:
  stars = 1
  while stars <= current_row:
    print('*', end=" ")
    stars += 1
  print()  # New line after each row
  current_row += 1
```

---

### Multiplication Table

```python
# Generate a multiplication table
def multiplication_table(size):
  print("   ", end=" ")
  for i in range(1, size + 1):
    print(f"{i:4}", end="")
  print("\n   " + "-" * (size * 4))

  for i in range(1, size + 1):
    print(f"{i:2} |", end="")
    for j in range(1, size + 1):
      print(f"{i * j:4}", end="")
    print()

multiplication_table(10)
```

The syntax `print(f"{i:2}")` uses **f-strings** in Python, which allow you to embed expressions directly into string literals. The part `{i:2}` inside the f-string specifies **string formatting** for the variable `i`. Here's a breakdown:

1. **`f""`**:

   - This denotes a formatted string literal, or **f-string**. Expressions inside `{}` are evaluated and replaced with their values.

2. **`i`**:

   - This is the variable whose value is being formatted.

3. **`:2`**:
   - This is a **format specifier**.
   - `2` indicates a **minimum width** of 2 characters for the output.
   - If the value of `i` has fewer than 2 digits, it will be padded with spaces on the left to make it 2 characters wide.
   - If `i` has more than 2 digits, it will not truncate or modify the value.

#### Example:

If `i = 3`, then `f"{i:2}"` will produce:

```
' 3'  # (1 space + '3', total width of 2)
```

If `i = 12`, then `f"{i:2}"` will produce:

```
'12'  # Already 2 characters wide, no padding needed
```

This formatting is useful for aligning columns in tabular output, as shown in your multiplication table.

## Additional Examples

### Using Built-in Functions Inside User-defined Functions

```python
# Calculate the average of numbers
def print_average(*values):
  print("Average:", sum(values) / len(values))

print_average(1, 2, 3, 4, 5)  # Output: Average: 3.0
```

---

### Summary

- Functions improve code readability, reusability, and modularity.
- Functions can accept arguments, return values, and have default or variable-length parameters.
- Combining loops, conditions, and functions allows for creating dynamic and efficient programs.

---
prev:
  text: "Section One"
  link: "/College/yearOne/firstTerm/Python/Sections/SectionOne"
next:
  text: "Section Three"
  link: "/College/yearOne/firstTerm/Python/Sections/SectionThree"
title: Section 2
---

# Programming Essentials in Python Section 2

### Identifiers in Python

The general rules for naming variables (identifiers) in Python are:

1. **Unique Names**: Python variables must be identified with unique names.
2. **Allowed Characters**: Names can contain letters, digits, and underscores `_` **only**.
3. **Starting Character**: Names must begin with a letter or an underscore `_`.
4. **Case Sensitivity**: Names are case-sensitive (e.g., `myVar` and `myvar` are different variables).
5. **No Whitespaces or Special Characters**: Names cannot contain whitespaces or special characters like `!`, `#`, `%`, `$`, etc.
6. **Cannot Start with a Number**: Names cannot begin with a number.
7. **Reserved Words**: Reserved words (keywords) cannot be used as names.

```Python
num = 5 # Valid
_num = 5 # Valid
Int_type = 5 # Valid
number one = 5 # Not valid, contains a whitespace
(num) = 5 # Not valid, contains special characters
int = 5 # Not valid, `int` is a reserved word (keyword)
2Teams = 5 # Not valid, starts with a number
$Teams = 5 # Not valid, starts with a special character
```

## Variables in Python

In Java or C++ types must be declared before runtime

```C++
int x = 5; // `x` is declared to be of type int (integer)
```

but in Python it's not necessary because it's dynamically typed

```Python
x = 5 # The interpreter understands that it's an integer on runtime
```

## Data Types

Variables in Python are **dynamically-typed**; they are declared without an explicit type.
However, **objects have a type**, so Python knows the type of the variable, even if you don't.

```Python
type(1) # => <class 'int'> -> this is the same object as the keyword `int`
type("Hello") # => <class 'str'>
type(None) # => <class 'NoneType'>
type(True) # => <class 'bool'>
type(print) # => <class 'builtin_function_or_method'>
type(int) # => <class 'type'>
type(type(5)) # => <class 'type'>
```

## Converting Values

```Python
## All objects has a string representation
str(10) # => "10"
int("10") # => 10
int(3.9) # => 3
float("3.5") # => 3.5
float("2") # => 2.0
```

## Comments

```Python
# Single line comments start with a `#`

"""
Multiline comments can be written between
three double quotes `"` and are often used as function
and module comments.
"""
```

## Input Handling in Python

The `input()` function in Python **accepts a single string argument** as a **prompt** and returns the user's input as a **string**, regardless of the content. This can cause issues when expecting numeric input, as it **returns text by default**.

To solve this, you can **convert** the input to the appropriate data type (e.g., `int` or `float`) after receiving it.

**Example:**

```python
# We can convert the string input to a number in two ways:

# First method:
# Take the input as a string, then convert it to a float
monthly_salary = input("How much do you make in a month? ")
monthly_salary = float(monthly_salary)

# Second method:
# We can take the input and convert it in one step using Nested Calls
# You can nest any number of functions
monthly_salary = float(input("How much do you make in a month? "))

# Calculate yearly salary
yearly_salary = monthly_salary * 12

# Print the yearly salary
print("That means you make", yearly_salary, "in a year.")
```

This ensures that `monthly_salary` is stored as a float for further numeric operations.

## ID Function

The `id()` function in Python **returns a unique identifier** (address) for a given object. This unique ID **remains constant** for an object during its lifetime. However, if two variables reference the **same object**, they will have the **same ID**.

**Example:**

```python
# Assign values to variables x and y
x = 10
y = 20

# Print the unique IDs of x and y (different objects, different IDs)
print("ID of x:", id(x)) # ID of x: 139681763248400
print("ID of y:", id(y)) # ID of y: 139681763248720

# Assign the same value to both a and b
a = b = 30

# Print the unique IDs of a and b (same object, same ID)
print("ID of a:", id(a)) # ID of a: 139681763249040
print("ID of b:", id(b)) # ID of b: 139681763249040
```

**Key Points:**

- Initially, `x` and `y` are different objects, so they have different IDs.
- When assigning the same value (`30`) to both `a` and `b`, they reference the same object in memory, so their IDs are the same.

## Types of Errors in Python

- **Syntax Errors**
  - Occur when the **code does not follow the rules of the language**.
  - Example: Using curly brackets `{}` where angled brackets `[]` are needed.
  - **Result**: The program will not run at all.

- **Runtime Errors**
  - Occur when **the code's syntax is correct**, but the **program does not run as expected** or encounters an issue during execution (program crashes).
  - Example: Dividing by zero in a program or using undefined variables.
  - **Result**: The program stops unexpectedly.

- **Logical/Semantic Errors**
  - The **code is correct**, and the **program runs without crashing**, but **the output is incorrect** due to a flaw in the algorithm or logic.
  - Example: Printing `2 + 2 = 5`.
  - **Result**: Incorrect output, even though the code runs.

---

### Syntax Error

- **Leaving out one parenthesis**
  - **Result**: A **SyntaxError** occurs because the parentheses are incomplete, violating Python's syntax rules for function calls.

- **Leaving out both parentheses**
  - **Result**: A **SyntaxError** occurs because `print` is a function in Python, and functions require parentheses. Without them, Python will not recognize it as a function call.

### Logical/Semantic Errors

A **logical error** occurs when the code runs but **produces incorrect results** due to flawed logic. These errors do not trigger runtime errors but result in unexpected output, requiring debugging.

**Example:**

```python
# Incorrect average calculation due to missing parentheses
a = 10
b = 20

average = a + b / 2  # Wrong operation order
print("Average:", average)  # Incorrect result (20)
```

To fix, use parentheses:

```python
average = (a + b) / 2  # Correct operation order
print("Average:", average)  # Correct result (15)
```

Logical errors often arise from incorrect operation orders like this.

### Runtime Errors

**Runtime errors** occur during the execution of a program and lead to unexpected termination. These errors are detected while the program is running and can cause crashes or infinite loops. Common examples include:

1. **Dividing by Zero**: Attempting to divide a number by zero results in a `ZeroDivisionError`.
2. **Infinite Loop**: A loop that never terminates can cause the program to hang indefinitely or crash.
3. **Incorrect User Input**: When the user provides input that the program cannot process, it can lead to various errors, such as `ValueError`.

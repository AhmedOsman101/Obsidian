---
prev:
  text: "Sheet One"
  link: "/College/yearOne/firstTerm/Python/Assignments/AssignmentOne"
next: false
title: Sheet 2
---

# Programming Essentials in Python Sheet 2

## 1. Python program for multiplication table

**Without Function**:

```python
# take input from the user
n = int(input("Enter the number for multiplication table: "))
print(f"Multiplication Table for {n}:")
for i in range(1, 11):
  print(f"{n} x {i} = {i * n}")
```

**With Function**:

```python
def mulitplicationTable(n):
  print(f"Multiplication Table for {n}:")
  for i in range(1, 11):
    print(f"{n} x {i} = {i * n}")

# take input from the user
n = int(input("Enter the number for multiplication table: "))
multiplicationTable(n)
```

## 2. Write python program to List the factors of the integers 1...MAX

**Without Function**:

```python
MAX = int(input("Enter Max: "))
for i in range(1, MAX + 1):
  # print the current number and its first divisor (1)
  print(f"{i}: 1", end=" ")  # set the end to be a whitespace
  """
  loop over each number from 2 to the current number.
  we can reduce the number of iterations by stopping at `i`;
  because if `i < j` then `i % j` will always be equal to `i`,
  so that we don't have to go beyond `i`.
  """
  for j in range(2, i + 1):
    if (i % j == 0):
      print(j, end=" ")
  print("")  # To print a new line
```

**With Function**:

```python
def factors(Max):
  for i in range(1, Max + 1):
    print(f"{i}: 1", end=" ")
    for j in range(2, i + 1):
      if (i % j == 0):
        print(j, end=" ")
    print("")  # To print a new line

MAX = int(input("Enter Max: "))
factors(MAX)
```

## 3. Write python program for sketch a geometric tree, and the user supplies the height. A five- level tree

**Without Function**:

```python
height = int(input("Enter the height of the tree: "))
# Validate that the input is a positive number
if height > 0:
  for i in range(1, height + 1):
    padding = height - i  # How much spaces to leave
    # we start from 1 then add two each time (1, 3, 5, ....)
    repeats = i * 2 - 1
    print(padding * ' ', repeats * '*', sep="")

  # print the root of the tree
  print((height - 3)*" ", "###")
  print((height - 3)*" ", "###")
else:
  print("Invalid height")
```

**With Function**:

```python
def drawTree(height):
  if height > 0:
    for i in range(1, height + 1):
      padding = height - i  # How much spaces to leave
      repeats = i * 2 - 1
      print(padding * ' ', repeats * '*', sep="")

    print((height - 3)*" ", "###")
    print((height - 3)*" ", "###")
  else:
    print("Invalid height")

h = int(input("Enter the height of the tree: "))
drawTree(h)
```

## 4. Write python Program to Print Prime Numbers

**Without Function**:

```python
from math import sqrt # import the square root function form math library

Max = int(input("Enter the maximum number (MAX): "))
# Validate that the input is a positive number
if Max > 0:
  print(f"Prime numbers from 1 to {Max}: ")
  for i in range(2, Max + 1):
    prime = True
    # Optimization: Only check for divisors up to the square root of `i`
    for j in range(2, int(sqrt(i) + 1)):
      if i % j == 0:
        prime = False # If `i` is divisible by `j`, it is not prime
        break  # Exit the loop because `i` is primeg

    # Print the number if it's prime
    if prime:
      print(i, end=" ")
  print("")  # insert a new line
else:
  print("Invalid Max")
```

**With Function**:

```python
from math import sqrt # import the square root function form math library

def primeNumbers(Max):
  if Max > 0:
    print(f"Prime numbers from 1 to {Max}: ")
    for i in range(2, Max + 1):
      prime = True
      for j in range(2, int(sqrt(i) + 1)):
        if i % j == 0:
          prime = False # If `i` is divisible by `j`, it is not prime
          break  # Exit the loop because `i` is primeg

      if prime:
        print(i, end=" ")
    print("")  # insert a new line
  else:
    print("Invalid Max")

Max = int(input("Enter the maximum number (MAX): "))
primeNumbers(Max)
```

## 5. Write Python program tests the number input by a user to ensure it is within a valid range.

**Without Function**:

```python
n = int(input("Enter a number between 1 and 100: "))
# if between 1 and 100 print `valid` else print `invalid`
print(
    f"Valid number entered: {n}" if n in range(1, 101)
    else "Error: The number must be between 1 and 100. Please try again."
)
```

**With Function**:

```python
def inRange(n):
  # if between 1 and 100 print `valid` else print `invalid`
  print(
      f"Valid number entered: {n}" if n in range(1, 101)
      else "Error: The number must be between 1 and 100. Please try again."
  )

n = int(input("Enter a number between 1 and 100: "))
inRange(n)
```

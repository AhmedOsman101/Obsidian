---
prev:
  text: "Sheet One"
  link: "/College/Python/Assignments/AssignmentOne"
next:
  false
  # text: 'Sheet Three'
  # link: '/College/Python/Assignments/AssignmentThree'
---

# Programming Essentials in Python Sheet 2

## 1. Python program for multiplication table

```python
# take input from the user
n = int(input("Enter the number for multiplication table: "))
print(f"Multiplication Table for {n}:")
# print from n*1 to n*10
for i in range(1, 11):
  print(f"{n} x {i} = {i * n}")
```

---

## 2. Write python program to List the factors of the integers 1...MAX

```python
MAX = int(input("Enter Max: "))
for i in range(1, MAX + 1):
  count = 0
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

---

## 3. Write python program for sketch a geometric tree, and the user supplies the height. A five- level tree

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

---

## 4. Write python Program to Print Prime Numbers

```python
from math import sqrt # import the square root function form math library

Max = int(input("Enter the maximum number (MAX): "))
# Validate that the input is a positive number
if Max > 0:
  print(f"Prime numbers from 1 to {Max}: ")
  for i in range(2, Max + 1):
    prime = True
    # Optimization: Only check for divisors up to the square root of `i` for improved efficiency.
    for j in range(2, int(sqrt(i) + 1)):
      # If `i` is divisible by `j`, it is not prime
      if i % j == 0:
        prime = False
        break  # Exit the loop because `i` is primeg

    # Print the number if it's prime
    if prime:
      print(i, end=" ")
  print("")  # insert a new line
else:
  print("Invalid Max")
```

---

## 5. Write Python program tests the number input by a user to ensure it is within a valid range.

```python
n = int(input("Enter a number between 1 and 100: "))
# if between 1 and 100 return `valid` else return `invalid`
print(
    f"Valid number entered: {n}" if n in range(1, 101)
    else "Error: The number must be between 1 and 100. Please try again."
)
```

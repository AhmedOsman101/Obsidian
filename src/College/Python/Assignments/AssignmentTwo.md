---
prev:
  text: "Assignment One"
  link: "/College/Python/Assignments/AssignmentOne"
next:
  false
  # text: 'Assignment Three'
  # link: '/College/Python/Assignments/AssignmentThree'
---

# Programming Essentials in Python Assignment 2

## 1. Multiplication Table

```python
# Loop over numbers from 1 to 12
for i in range(1, 13):
  # Loop again from 1 to 12 for each number
  for j in range(1, 13):
    # Print the results
    print(f"{i}x{j} = {i*j}")
```

---

## 2. List the Factors of Integers from 1 to MAX

```python
MAX = 20
# Loop from 1 to the max number (included)
for i in range(1, MAX + 1):
  count = 0
  # print the current number and its first divisor (1), the set the end to be a whitespace
  print(f"{i}: 1", end=" ")
  """
  loop over each number from 2 to the current number.
  we can reduce the number of iterations by stopping at `i`;
  because if `i < j` then `i % j` will always be equal to `i`, so we don't have to go beyond `i`
  """
  for j in range(2, i + 1):
    if (i % j == 0):
      print(j, end=" ")
  print("")  # To print a new line
```

---

## 3. Sketch a Geometric Tree

```python
height = int(input("Enter the height of the tree: "))
# Validate that the input is a positive number
if height > 0:
  for i in range(1, height + 1):
    padding = height - i  # How much spaces to leave
    # we start from 1 then add two each time (1, 3, 5, ....)
    repeats = i * 2 - 1
    # using `n * ""` syntax  we can repeat any string
    print(padding * ' ', repeats * '*', sep="")
else:
  print("Invalid height")
```

---

## 4. Print Prime Numbers

```python
from math import sqrt

Max = int(input("Enter max range: "))
# Validate that the input is a positive number
if Max > 0:
  for i in range(2, Max + 1):
    prime = True
    """
    Check divisors only up to the square root of the number `i`
    This optimization is valid because if `i` is divisible by a number greater
    than its square root, there must also be a smaller divisor that divides it.
    """
    for j in range(2, int(sqrt(i) + 1)):
      # If `i` is divisible by `j`, it is not prime
      if i % j == 0:
        prime = False
        break  # Exit the loop because `i` is primeg

    # Print the number if it's prime
    if prime:
      print(i, end="  ")
else:
  print("Invalid Max")
```

---

## 5. Validate User Input for a Range

```python
number = int(input("Enter a number between 1~10: "))
# if between 1 and 10 return `valid` else return `invalid` then print the result
print("valid" if 1 <= number and number <= 10 else "Invalid")
```

---
prev:
  text: "Lecture Five"
  link: "/College/Python/Lectures/LectureFive"
next:
  text: "Lecture Seven"
  link: "/College/Python/Lectures/LectureSeven"
---

# Programming Essentials in Python Lecture 6

## Examples on Loops and Control Structures in Python

Loops allow repetitive execution of a block of code until a specified condition is met. Here, we discuss **if/else statements** and **looping constructs** in Python, focusing on while and for loops.

## If/Else Statements

The general form of an `if/else` statement:

```python
# General structure
if condition:
  # Code to execute if condition is True
else:
  # Code to execute if condition is False
```

Example:

```python
value = int(input("Enter a number: "))

if value > 0:
  print("The number is positive.")
else:
  print("The number is not positive.")
```

## The `continue` Statement

When a `continue` statement is encountered inside a loop, the remaining statements in the loop body for that iteration are skipped, and the loop proceeds with the next iteration.

```python
# Example: Sum positive integers, ignoring negative inputs
sum = 0
done = False

while not done:
  val = int(input("Enter a positive integer (999 to quit): "))
  if val < 0:
    print("Negative value", val, "ignored")
    continue  # Skip the rest of this iteration
  if val != 999:
    print("Tallying", val)
    sum += val
  else:
    done = True  # Exit the loop

print("Sum =", sum)
```

## Finding Factors of Numbers

The following program finds and prints the factors of numbers from 1 to 20.

```python
MAX = 20  # Maximum number
n = 1     # Start with 1

while n <= MAX:
  print(end=str(n) + ": ")  # Display the current number
  factor = 1                # Start checking from factor 1

  while factor <= n:
    if n % factor == 0:     # Check if 'factor' divides 'n' evenly
      print(factor, end=" ")  # Print the factor
    factor += 1             # Check the next factor

  print()  # Move to the next line for the next number
  n += 1   # Increment the number
```

### Sample Output:

```
1: 1
2: 1 2
3: 1 3
4: 1 2 4
5: 1 5
...
20: 1 2 4 5 10 20
```

## Printing Odd Numbers

This program prints all odd numbers up to a user-defined value.

```python
n = int(input("Write an integer number (n): "))

print("The odd numbers from 1 to", n, "are:")
for i in range(1, n + 1):
  if i % 2 != 0:  # Check if the number is odd
    print(i)
```

## Printing a Star Pattern

The following program prints a right-angled triangle of stars.

```python
rows = 5  # Number of rows in the triangle
current_row = 1

# Outer loop to control the number of rows
while current_row <= rows:
  stars = 1

  # Inner loop to print stars in the current row
  while stars <= current_row:
    print('*', end=' ')
    stars += 1

  print()  # Move to the next line after finishing the current row
  current_row += 1
```

### Output:

```
*
* *
* * *
* * * *
* * * * *
```

## Summary

1. **If/Else Statements**: Control the execution of code based on conditions.
2. **Loops**:
   - **While Loop**: Repeats as long as the condition is true.
   - **For Loop**: Iterates over a range or sequence.
3. **Special Keywords**:
   - **`continue`**: Skips the rest of the current iteration.
   - **`break`**: Exits the loop immediately.

These constructs allow for effective control of program flow and repetition, enabling developers to write clean and efficient Python code.

---
prev:
  text: "Lecture Four"
  link: "/College/Python/Lectures/LectureFour"
next:
  text: "Lecture Six"
  link: "/College/Python/Lectures/LectureSix"
---

# Programming Essentials in Python Lecture 5

## Control Structures in Python

Control structures determine the flow of execution in a program. In Python, the key control structures include **if/else statements** and **loops**.

## If/Else Statements

### General Form

An **if/else statement** determines which block of code to execute based on a Boolean condition.

- **`if` Statement**: Executes a block if the condition is true.
- **`else` Statement**: Executes if the `if` condition is false.

```python
# General structure of if/else
if condition:  # The condition must evaluate to True or False
  # Block of statements executed if condition is True
else:
  # Block of statements executed if condition is False
```

### Nested If/Else

If/else statements can be nested to evaluate multiple conditions.

```python
value = int(input("Enter an integer value in the range 0-10: "))

if value >= 0:
  if value <= 10:
    print(value, "is in range")
  else:
    print(value, "is too large")
else:
  print(value, "is too small")

print("Done")
```

### Elif (Multiple Decision-Making)

The `elif` keyword allows checking multiple conditions in sequence.

```python
value = int(input("Enter an integer in the range 0-3: "))

if value < 0:
  print("Too small")
elif value == 0:
  print("Zero")
elif value == 1:
  print("One")
elif value == 2:
  print("Two")
elif value == 3:
  print("Three")
else:
  print("Too large")

print("Done")
```

### Ternary Operator (Conditional Expression)

The ternary operator is a shorthand for if/else conditions.

```python
n = int(input("Enter a number: "))

# Using a ternary operator
print("|", n, "| =", (-n if n < 0 else n))

# Equivalent if/else block
if n < 0:
  print("|", n, "| =", -n)
else:
  print("|", n, "| =", n)
```

## Loops

### Introduction

Loops are used to repeat a block of code as long as a condition is met. Each repetition is called an **iteration**.

---

### While Loop

The **while loop** repeats as long as the condition is true.

```python
# Example: Count from 1 to 5
count = 1
while count <= 5:
  print(count)
  count += 1
```

#### While with Else

The `else` block executes when the loop condition becomes false.

```python
i = 1
while i < 6:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")
```

#### Continue Statement

Skips the current iteration and moves to the next.

```python
# Skip printing 3
i = 0
while i < 6:
  i += 1
  if i == 3:
    continue
  print(i)
```

#### Break Statement

Terminates the loop immediately.

```python
# Stop when i equals 3
i = 1
while i < 6:
  print(i)
  if i == 3:
    break
  i += 1
```


---

### For Loop

The **for loop** iterates over a sequence (like a range or list).

```python
# Example: Loop through numbers 1 to 5
for n in range(1, 6):
  print(n)

print("n contains:", n)
```

#### For with Else

The `else` block executes after the loop finishes normally (without a `break`).

```python
for x in range(6):
  print(x)
else:
  print("Finally finished!")
```

#### For with Break

If a `break` occurs, the `else` block is skipped.

```python
for x in range(6):
  if x == 3:
    break
  print(x)
else:
  print("Finally finished!")
```

#### For with Continue

Skips the current iteration and moves to the next.

```python
# Skip printing 3
for x in range(6):
  if x == 3:
    continue
  print(x)
```

---

### Infinite Loops

Loops can run indefinitely if the condition is always true. Use them with caution and ensure there's an exit mechanism.

```python
# Example of an infinite loop (not recommended)
while True:
  val = input("Type 'exit' to quit: ")
  if val == "exit":
    break
```

---

### Practical Example: Summing Values with While

```python
sum = 0
done = False

while not done:
  val = int(input("Enter positive integer (type 999 to exit): "))

  if val < 0:
    print("Negative value", val, "ignored")
    continue  # Skip to the next iteration

  if val == 999:
    done = True  # Exit the loop
  else:
    print("Adding", val)
    sum += val

print("Sum =", sum)
```

## Summary

- **If/Else**: Conditional execution.
- **Loops**: Repeated execution.
- **Break**: Terminates the loop.
- **Continue**: Skips to the next iteration.

These control structures form the foundation of Python's flow control and are essential for writing efficient and readable code.

# Lecture 6: Loops and Conditionals

## 1. Conditional Statements

### The `if` Statement

Executes a block of code if a specified condition is **true**.

```cpp
if (condition) {
  // code to execute if condition is true
}
```

**Example:**

```cpp
int x = 20, y = 18;
if (x > y) {
  cout << "x is greater than y";
}
```

### The `if...else` Statement

Used to execute one block if the condition is true, and another if it's false.

```cpp
if (condition) {
  // if true
} else {
  // if false
}
```

**Example:**

```cpp
int d;
cout << "Enter student degree (0–100): ";
cin >> d;

if (d >= 50)
  cout << "Student passed";
else
  cout << "Student failed";
```

### The `else if` Ladder

Used when multiple conditions need to be tested.

```cpp
if (condition1) {
  // code block 1
} else if (condition2) {
  // code block 2
} else {
  // code block 3
}
```

### Comparison and Logical Operators

| **Operator** | **Description**  | **Example**          |
| ------------ | ---------------- | -------------------- |
| `==`         | Equal to         | `x == y`             |
| `!=`         | Not equal        | `x != y`             |
| `>`          | Greater than     | `x > y`              |
| `<`          | Less than        | `x < y`              |
| `>=`         | Greater or equal | `x >= y`             |
| `<=`         | Less or equal    | `x <= y`             |
| `&&`         | Logical AND      | `a > 4 && a < 10`    |
| `\|`         | Logical OR       | `a < 9 \| a < 10`    |
| `!`          | Logical NOT      | `!(a < 7 && a < 15)` |

### The `switch` Statement

Used to execute different actions based on multiple possible values.

```cpp
switch(expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code if no case matches
}
```

**Example:**
A simple calculator using `switch`:

```cpp
float n1, n2;
char op;

cout << "Enter first number: ";
cin >> n1;
cout << "Enter second number: ";
cin >> n2;
cout << "Enter operator (+, -, *, /, %): ";
cin >> op;

switch(op) {
  case '+': cout << n1 + n2; break;
  case '-': cout << n1 - n2; break;
  case '*': cout << n1 * n2; break;
  case '/':
    if (n2 != 0)
      cout << n1 / n2;
    else
      cout << "Cannot divide by zero";
    break;
  case '%':
    cout << int(n1) % int(n2);
    break;
  default:
    cout << "Invalid operator";
}
```

## 2. Loops in C++

### While Loop

Repeats a block of code **while** a condition is true.
Used when the number of iterations is **unknown**.

```cpp
int i = 0;
while (i < 5) {
  cout << i << "\n";
  i++;
}
```

**Trace Example:**

| Step | i (before) | Condition | Action  | i (after) | Output |
| ---- | ---------- | --------- | ------- | --------- | ------ |
| 1    | 0          | true      | print 0 | 1         | 0      |
| 2    | 1          | true      | print 1 | 2         | 1      |
| 3    | 2          | true      | print 2 | 3         | 2      |
| 4    | 3          | true      | print 3 | 4         | 3      |
| 5    | 4          | true      | print 4 | 5         | 4      |
| 6    | 5          | false     | stop    | —         | —      |

### Do-While Loop

Executes the loop body **at least once**, then checks the condition.

```cpp
int i = 0;
do {
  cout << i << "\n";
  i++;
} while (i < 5);
```

**Trace Example:**

| Step | i (before) | Output | i (after) | Condition | Continue? |
| ---- | ---------- | ------ | --------- | --------- | --------- |
| 1    | 0          | 0      | 1         | true      | yes       |
| 2    | 1          | 1      | 2         | true      | yes       |
| 3    | 2          | 2      | 3         | true      | yes       |
| 4    | 3          | 3      | 4         | true      | yes       |
| 5    | 4          | 4      | 5         | false     | no        |

### For Loop

Used when the number of iterations is **known**.

```cpp
for (int i = 0; i <= 10; i += 2) {
  cout << i << "\n";
}
```

**Trace Example:**

| Step | i (start) | Condition | Output | i (next) |
| ---- | --------- | --------- | ------ | -------- |
| 1    | 0         | true      | 0      | 2        |
| 2    | 2         | true      | 2      | 4        |
| 3    | 4         | true      | 4      | 6        |
| 4    | 6         | true      | 6      | 8        |
| 5    | 8         | true      | 8      | 10       |
| 6    | 10        | true      | 10     | 12       |
| 7    | 12        | false     | —      | —        |

## 3. Factorial Calculation

**Formula:**

$$
n! = n \times (n - 1) \times (n - 2) \times ... \times 1
$$

**Example Program:**

```cpp
int n;
long factorial = 1;

cout << "Enter a non-negative integer: ";
cin >> n;

if (n < 0) {
  cout << "Factorial not defined for negative numbers.";
} else {
  for (int i = 1; i <= n; ++i) {
    factorial *= i;
  }
  cout << "Factorial of " << n << " is " << factorial;
}
```

**Trace Example (n = 5):**

| i   | Operation | factorial |
| --- | --------- | --------- |
| 1   | 1 × 1     | 1         |
| 2   | 1 × 2     | 2         |
| 3   | 2 × 3     | 6         |
| 4   | 6 × 4     | 24        |
| 5   | 24 × 5    | 120       |

Result: **5! = 120**

## 4. Nested Loops (Pattern Printing)

### Example: Right-Angled Triangle

```cpp
int n;
cout << "Enter number of rows: ";
cin >> n;

for (int i = 1; i <= n; ++i) {
  for (int j = 1; j <= i; ++j) {
    cout << "*";
  }
  cout << endl;
}
```

**Output (for n = 4):**

```
*
**
***
****
```

**Trace Explanation:**

- Outer loop controls rows (`i`).
- Inner loop controls number of stars per row (`j`).
- Each new row prints one more star.

## 5. Practice Tasks

1. Print the following patterns:

   ```
   ****
   ***
   **
   *
   ```

2. Create a program to print a **multiplication table**.

## Summary

- Conditional statements (`if`, `else if`, `switch`) allow **decision making**.
- Loops (`while`, `do-while`, `for`) enable **repeated execution**.
- Nested loops are used for **complex repetitive patterns**.
- Control structures are essential for **logical flow** in C++ programming.

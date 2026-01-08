# Lecture 6: Logical Operators and Conditional Statements

### 1. Operators

#### Arithmetic Operators

Used to perform common mathematical operations.

| Operator | Description         | Example (N1=10, N2=5) | Result |
| -------- | ------------------- | --------------------- | ------ |
| `+`      | Addition            | `N1 + N2`             | 15     |
| `-`      | Subtraction         | `N1 - N2`             | 5      |
| `*`      | Multiplication      | `N1 * N2`             | 50     |
| `/`      | Division            | `N1 / N2`             | 2      |
| `%`      | Modulus (Remainder) | `N1 % N2`             | 0      |
| `++`     | Increment           | `++N2`                | 6      |
| `--`     | Decrement           | `--N1`                | 9      |

#### Assignment Operators

Used to assign values to variables, often combined with an arithmetic or bitwise operation.

| Operator | Example   | Equivalent To |
| -------- | --------- | ------------- |
| `=`      | `x = 9`   | `x = 9`       |
| `+=`     | `x += 9`  | `x = x + 9`   |
| `-=`     | `x -= 9`  | `x = x - 9`   |
| `*=`     | `x *= 9`  | `x = x * 9`   |
| `/=`     | `x /= 9`  | `x = x / 9`   |
| `%=`     | `x %= 9`  | `x = x % 9`   |
| `&=`     | `x &= 9`  | `x = x & 9`   |
| `\|=`    | `x \|= 9` | `x = x \| 9`  |
| `^=`     | `x ^= 9`  | `x = x ^ 9`   |
| `>>=`    | `x >>= 9` | `x = x >> 9`  |

#### Comparison Operators

Used to compare two values and return a boolean result (`true` or `false`, often represented as `1` or `0`). An example is `!=` (Not equal). `(8 != 5)` evaluates to `true` (1).

#### Logical Operators

Used to combine conditional statements.

| Operator | Name        | Description                                                 | Example              |
| -------- | ----------- | ----------------------------------------------------------- | -------------------- |
| `&&`     | Logical AND | Returns `true` if both statements are true.                 | `a < 8 && a < 12`    |
| `\|`     | Logical OR  | Returns `true` if **one** of the statements is true.        | `x < 5 \| x > 10`    |
| `!`      | Logical NOT | Reverses the result; returns `false` if the result is true. | `!(a < 7 && a < 15)` |

#### Mathematical Functions (`<cmath>`)

- `floor(x)`: Rounds a number **down** to the nearest integer.
  - `floor(4.99)` results in `4`
  - `floor(-3.7)` results in `-4`

---

### 2. Conditional Statements

`if` **Statement**

Executes a block of code if a specified condition is true.

`if...else` **Statement**

Executes one block of code if a condition is true and another block if it is false.

`if...else if...else` **Statement**

Specifies a new condition to test if the first condition is false.

`switch` **Statement**

Tests the value of a variable against a list of predefined constant values (`case`).

- **Purpose:** Selects one of many code blocks to be executed.
- `break` **Keyword:** Exits the `switch` block. If omitted, execution "falls through" to the next `case`.
- `default` **Keyword:** Specifies the code to run if there is no `case` match.

---

### 3. Loops

#### `while` Loop

Executes a block of code as long as a specified condition is true. The condition is checked **before** the loop body is executed.

- **When to use:** Recommended when the number of iterations is **unknown**.

#### `do...while` Loop

A variant of the `while` loop where the code block is executed **at least once**, and the condition is checked **after** the loop body.

- **When to use:** Recommended when the iteration count is unknown and the body must run **at least once**.

#### `for` Loop

Executes a block of code a known number of times. It consists of three parts: initialization, condition, and increment/decrement.

- **When to use:** Recommended when the number of iterations is **known**.

#### Nested Loops

A loop placed inside another loop. The inner loop executes fully for each iteration of the outer loop.

- **Example Use Case:** Printing patterns, like a triangle of stars, where the outer loop controls the rows and the inner loop controls the columns (stars per row).

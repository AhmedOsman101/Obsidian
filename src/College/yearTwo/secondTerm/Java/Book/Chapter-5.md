---
title: Chapter 5
prev:
  text: "Chapter 4"
  link: "/College/yearTwo/secondTerm/Java/Book/Chapter-4"
next:
  text: "Chapter 6"
  link: "/College/yearTwo/secondTerm/Java/Book/Chapter-6"
---

## Loops

### The while Loop

A **loop** executes a block of statements repeatedly. A **while loop** checks a Boolean condition before each iteration.

```java
while (loop-continuation-condition) {
  // Loop body — statements to repeat
}
```

```mermaid
graph TD
  Start(( )) --> Cond{loop-continuation-condition?}
  Cond -- false --> End(( ))
  Cond -- true --> Body[Statements (loop body)]
  Body --> Cond
```

**Flow:** condition is evaluated first. If `true`, the loop body executes, then condition is re-evaluated. If `false`, control passes to the statement after the loop.

```java
int count = 0;
while (count < 100) {
  System.out.println("Welcome to Java!");
  count++;
}
```

**Key terms:**
- **Iteration**: one execution of the loop body
- **Loop-continuation-condition**: the Boolean expression controlling the loop
- **Counter-controlled loop**: uses a control variable (like `count`) to track iterations
- **Infinite loop**: the condition never becomes `false` — press `Ctrl+C` to kill
- **Off-by-one error**: loop runs one too many or too few times (e.g., `while (count <= 100)` prints **101** times, not 100)

> [!WARNING]
> Never use `==` or `!=` with floating-point values in a loop condition. Floating-point approximations can cause the condition to never become false, resulting in an infinite loop.

> [!WARNING] Overflow loop
> Integer overflow can terminate a loop unexpectedly:
> ```java
> int x = 80000000;
> while (x > 0)
>   x++;
> System.out.println("x is " + x); // terminates when overflow wraps x negative
> ```
> This loop ends because `x` eventually overflows past `Integer.MAX_VALUE` and becomes negative.

#### RepeatAdditionQuiz (Listing 5.1)

Generates a random addition question and loops until the user enters the correct answer:

```java
while (number1 + number2 != answer) {
  System.out.print("Wrong answer. Try again. What is "
    + number1 + " + " + number2 + "? ");
  answer = input.nextInt();
}
```

---

### Case Study: Guessing Numbers

GuessNumber (Listing 5.3) generates a random number between 0–100, loops until the user guesses it:

```java
int number = (int)(Math.random() * 101);
int guess = -1;  // initialize to value outside valid range

while (guess != number) {
  System.out.print("Enter your guess: ");
  guess = input.nextInt();

  if (guess == number)
    System.out.println("Yes, the number is " + number);
  else if (guess > number)
    System.out.println("Your guess is too high");
  else
    System.out.println("Your guess is too low");
}
```

> [!WARNING]
> Initialize `guess` to a value **outside** the valid range (e.g., `-1`). Setting it to 0 could accidentally match the target number and skip the loop entirely.

---

### Loop Design Strategies

Three-step approach for writing loops:

1. **Identify** the statements that need repeating
2. **Wrap** them in `while (true) { ... }`
3. **Add** the loop-continuation-condition and control variable

#### SubtractionQuizLoop (Listing 5.4)

Counter-controlled loop generating 5 subtraction questions:

```java
final int NUMBER_OF_QUESTIONS = 5;
int correctCount = 0;
int count = 0;
long startTime = System.currentTimeMillis();
String output = "";

while (count < NUMBER_OF_QUESTIONS) {
  // 1. Generate two random numbers, ensure number1 >= number2
  // 2. Prompt user
  // 3. Grade answer, update correctCount
  // 4. Append result to output string
  count++;
}

long endTime = System.currentTimeMillis();
long testTime = endTime - startTime;
```

---

### Sentinel-Controlled Loops

A **sentinel value** is a special input that signals end of data. SentinelValue (Listing 5.5) reads integers until 0 is entered:

```java
System.out.print("Enter an integer (input ends if 0): ");
int data = input.nextInt();
int sum = 0;

while (data != 0) {
  sum += data;
  System.out.print("Enter an integer (input ends if 0): ");
  data = input.nextInt();
}
System.out.println("The sum is " + sum);
```

#### Input/Output Redirection

```bash
# Read from file instead of keyboard
java SentinelValue < input.txt

# Write output to file
java ClassName > output.txt

# Both together
java SentinelValue < input.txt > output.txt
```

**`input.hasNext()`**: returns `false` when no more input is available (with file redirection or `Ctrl+Z` + Enter in terminal). Full pattern:

```java
while (input.hasNext()) {
  sum += input.nextInt();
}
```

With file redirection: `java SentinelValue < input.txt` feeds all numbers from a file as input. `hasNext()` returns `false` when the file is exhausted.

---

### The do-while Loop

**Posttest loop** — executes the body **at least once**, then checks the condition.

```java
do {
  // Loop body
} while (loop-continuation-condition);
```

```mermaid
graph TD
  Start(( )) --> Body[Statements (loop body)]
  Body --> Cond{loop-continuation-condition?}
  Cond -- true --> Body
  Cond -- false --> End(( ))
```

```java
int data;
int sum = 0;

do {
  System.out.print("Enter an integer (input ends if 0): ");
  data = input.nextInt();
  sum += data;
} while (data != 0);
```

> [!NOTE]
> Use `do-while` when the loop body must execute at least once (e.g., reading a value before testing it).

---

### The for Loop

**Pretest loop** with compact syntax: initialization, condition, and update in one line.

```java
for (initial-action; loop-continuation-condition; action-after-each-iteration) {
  // Loop body
}
```

```mermaid
graph TD
  Start(( )) --> Init[initial-action]
  Init --> Cond{loop-continuation-condition?}
  Cond -- false --> End(( ))
  Cond -- true --> Body[Statements (loop body)]
  Body --> Action[action-after-each-iteration]
  Action --> Cond
```

The three components are separated by semicolons:

| Part | Example | Description |
|------|---------|-------------|
| `initial-action` | `int i = 0` | Executed once before the loop |
| `loop-continuation-condition` | `i < 100` | Checked before each iteration |
| `action-after-each-iteration` | `i++` | Executed after each iteration |

```java
for (int i = 0; i < 100; i++) {
  System.out.println("Welcome to Java!");
}
```

**Variations:**

```java
// Multiple initializations and updates (comma-separated)
for (int i = 0, j = 0; i + j < 10; i++, j++) { ... }

// Omitted condition → infinite loop (assumes true)
for ( ; ; ) { ... }   // same as while (true)

// Variable declared INSIDE for → not accessible after the loop
for (int i = 0; i < 10; i++) { ... }
// i is out of scope here — compile error
```

> [!WARNING]
> A semicolon after the `for` parentheses creates an **empty loop body**:
> ```java
> for (int i = 0; i < 10; i++);  // ← semicolon! Loop does nothing
>   System.out.println(i);        // ← not in the loop, compile error for 'i'
> ```

---

### Which Loop to Use

| Loop | Type | When to Use |
|------|------|-------------|
| `while` | Pretest | Number of repetitions **not fixed** (sentinel-controlled) |
| `for` | Pretest | Number of repetitions **known in advance** (counter-controlled) |
| `do-while` | Posttest | Body must execute **at least once** |

All three are **expressively equivalent** — any loop can be written using any of the three forms.

---

### Nested Loops

An outer loop containing one or more inner loops. Each time the outer loop iterates, the inner loop restarts from the beginning.

```java
// Multiplication table (Listing 5.7)
for (int i = 1; i <= 9; i++) {      // outer loop (rows)
  for (int j = 1; j <= 9; j++) {    // inner loop (columns)
    System.out.printf("%4d", i * j);
  }
  System.out.println();
}
```

> [!WARNING]
> Nested loops multiply iteration counts. A 3-level nested loop with 10,000 iterations each → 1 trillion iterations. At 1μs per iteration, that's 277+ hours.

---

### Minimizing Numeric Errors

Floating-point numbers are approximations. Using them as loop control variables causes errors:

```java
// BAD — may run wrong number of iterations
for (float i = 0.01f; i <= 1.0f; i += 0.01f) { ... }  // sum ≈ 50.499985

// BAD with double — still imprecise
for (double i = 0.01; i <= 1.0; i += 0.01) { ... }      // sum ≈ 49.5

// GOOD — use integer counter
double sum = 0;
double currentValue = 0.01;
for (int count = 0; count < 100; count++) {
  sum += currentValue;
  currentValue += 0.01;
}
```

**Rule**: Add numbers from **smallest to biggest** to minimize error. Adding a very small number to a very large number can have no effect due to finite precision (e.g., `100000000.0 + 0.000000001 == 100000000.0`).

Concrete example: summing 0.01 to 1.0 → smallest-to-largest gives `50.50000000000003`, largest-to-smallest gives `50.49999999999995` (the true sum is 50.50).

---

### Case Studies

#### GCD (Greatest Common Divisor) — Listing 5.9

```java
int gcd = 1;
int k = 2;
while (k <= n1 && k <= n2) {
  if (n1 % k == 0 && n2 % k == 0)
    gcd = k;
  k++;
}
```

Checks all possible divisors from 2 up to the smaller of n1 and n2.

> [!WARNING] GCD optimization pitfall
> Using `k <= n1 / 2 && k <= n2 / 2` **breaks** the algorithm — a common divisor could be `n1` or `n2` itself (e.g., when one number divides the other, like 4 and 2, where gcd = 2 equals the smaller number).

#### FutureTuition — Listing 5.10

```java
double tuition = 10000;
int year = 0;
while (tuition < 20000) {
  tuition = tuition * 1.07;
  year++;
}
```

$10,000 tuition at 7% annual increase doubles in ~11 years.

#### Dec2Hex — Listing 5.11

Converts decimal to hexadecimal by repeated division by 16:

```java
String hex = "";
while (decimal != 0) {
  int hexValue = decimal % 16;
  char hexDigit = (hexValue <= 9)
    ? (char)(hexValue + '0')
    : (char)(hexValue - 10 + 'A');
  hex = hexDigit + hex;   // prepend: builds string right-to-left
  decimal = decimal / 16;
}
```

> [!WARNING] Edge case: input 0
> When input is 0, the `while` loop never runs and `hex` stays `""`. Must handle `decimal == 0` separately before the loop, e.g., `if (decimal == 0) hex = "0";`.

---

### break and continue

| Keyword | Effect |
|---------|--------|
| `break` | Immediately **terminates** the enclosing loop |
| `continue` | **Skips** the rest of the current iteration, proceeds to next |

```java
// break — exits loop when sum reaches 100
while (number < 20) {
  number++;
  sum += number;
  if (sum >= 100)
    break;      // loop exits immediately
}

// Smallest factor with break — idiomatic pattern
int factor = 2;
while (factor <= n) {
  if (n % factor == 0)
    break;      // found smallest factor
  factor++;
}
System.out.println("Smallest factor is " + factor);

// continue — skips 10 and 11
while (number < 20) {
  number++;
  if (number == 10 || number == 11)
    continue;   // skips sum += number for these values
  sum += number;
}
```

> [!NOTE]
> In a `while`/`do-while` loop, `continue` jumps to the **condition check**. In a `for` loop, `continue` jumps to the **action-after-each-iteration**, then the condition check. This can cause infinite loops in `while` if the control variable update comes after `continue`.

**`for` → `while` conversion with `continue`**: The naive conversion fails because the increment is placed after `continue` and gets skipped:

```java
// for loop — works fine
for (int i = 0; i < 4; i++) {
  if (i % 3 == 0) continue;
  sum += i;
}

// Naive while conversion — WRONG (infinite loop when i % 3 == 0)
int i = 0;
while (i < 4) {
  if (i % 3 == 0) continue; // i never increments → infinite loop
  sum += i;
  i++;
}
```

Fix by placing the increment *before* the `continue` or by using a `for` loop.

---

### Case Study: Palindrome Checker (Listing 5.14)

Checks if a string reads the same forward and backward:

```java
int low = 0;
int high = s.length() - 1;
boolean isPalindrome = true;

while (low < high) {
  if (s.charAt(low) != s.charAt(high)) {
    isPalindrome = false;
    break;
  }
  low++;
  high--;
}
```

**Key insight**: Compare outer characters moving inward. Only need to check until `low >= high` (the middle character in odd-length strings is always equal to itself).

---

### Case Study: Prime Numbers (Listing 5.15)

Displays the first 50 primes, 10 per line:

```java
final int NUMBER_OF_PRIMES = 50;
final int NUMBER_OF_PRIMES_PER_LINE = 10;
int count = 0;
int number = 2;

while (count < NUMBER_OF_PRIMES) {
  boolean isPrime = true;

  for (int divisor = 2; divisor <= number / 2; divisor++) {
    if (number % divisor == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    count++;
    if (count % NUMBER_OF_PRIMES_PER_LINE == 0)
      System.out.println(number);
    else
      System.out.print(number + " ");
  }

  number++;
}
```

**Optimization note**: checking divisors up to `number / 2` is sufficient (no divisor of `n` exists beyond `n/2` except `n` itself).

---

## Common Errors and Pitfalls

1. **Off-by-one** — using `<=` instead of `<` (or vice versa) in loop condition
2. **Infinite loop** — forgetting to update the control variable
3. **Semicolon after `for`/`while`** — creates an empty loop body
4. **Floating-point loop control** — approximations cause unexpected termination
5. **break/continue misuse** — `continue` in `while` after the control variable update skips the increment → infinite loop
6. **Nested loop performance** — deeply nested loops with large bounds can take hours
7. **Comparing strings with `==`** — always use `.equals()`

---

> _Chapter 5 source: 117 min read → Summary: ~13 min read. Covers while, do-while, for loops, sentinel control, nested loops, break/continue, and case studies (GuessNumber, GCD, FutureTuition, Dec2Hex, Palindrome, PrimeNumber)._

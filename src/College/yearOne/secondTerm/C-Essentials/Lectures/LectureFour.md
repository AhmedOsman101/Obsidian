---
title: Lecture 4
prev:
  text: "Lecture Three"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureThree"
next:
  text: "Lecture Five"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureFive"
---

# Programming Essentials in C - Lecture 4

## User Input `scanf()`

- `scanf()` is the most commonly used function to accept user input from the standard input stream.
- The `scanf()` function in C reads data from the standard input (usually the keyboard, called `stdin`) and stores it in variables.

### Syntax of `scanf()`

```C
int x;
scanf("%d", &x);  // ("format_specifier", &variable)
```

- `"format_specifier"`: Tells the computer what type of input to expect (e.g., `%d` for integers, `%f` for floating-point numbers).
- `&variable`: The `&` symbol gives the address of the variable where the input will be stored.

### Common Format Specifiers

| Data Type                | Format Specifier |
| ------------------------ | ---------------- |
| Integer (`int`)          | `%d` or `%i`     |
| Floating Point (`float`) | `%f`             |
| Double (`double`)        | `%lf`            |
| Character (`char`)       | `%c`             |
| String (`char[]`)        | `%s`             |

### Example

```C
int num;
float decimal;

printf("Enter an integer and a decimal: ");
scanf("%d %f", &num, &decimal);

printf("Integer: %d, Decimal: %.2f\n", num, decimal);
```

## Capturing Strings with `scanf`

### Code Example 1: Using `scanf`

```C
#include <stdio.h>

int main() {
  char name[50];  // Empty string with space for 50 characters

  printf("Enter your full name (using scanf): ");
  scanf("%s", name);  // Reads the name you type
  printf("Name captured with scanf: %s\n", name);

  return 0;
}
```

#### What Happens

- When you run this:
  - Type: `John Doe` and press Enter.
  - Output: `Name captured with scanf: John`
- **Why?**: `scanf` only grabs the first word (`John`) and stops at the space. It can’t handle full names with spaces.

---

### Code Example 2: Using `gets`

```C
#include <stdio.h>

int main() {
  char name[50];  // Empty string with space for 50 characters

  printf("Enter your full name (using gets): ");
  gets(name);  // Reads the name you type
  printf("Name captured with gets: %s\n", name);

  return 0;
}
```

#### What Happens

- When you run this:
  - Type: `John Doe` and press Enter.
  - Output: `Name captured with gets: John Doe`
- **Why?**: `gets` takes everything you type, including spaces, until you press Enter. It works for full names!

---

### Explanation

- **`scanf`**: Acts like a tool that cuts your input at spaces and only keeps the first piece.
- **`gets`**: Acts like a tool that grabs your whole sentence, spaces included, until you press Enter.

## Conditional Statements

### If

- Use the `if` statement to run a block of code if a condition is true.

#### Example

```C
int num = 4;

if (num % 2 == 0) {
  printf("Even\n");
}
```

---

### Else

- Use the `else` statement to run a block of code if the condition is false.

#### Example: Check if a Number is Even or Odd

```C
int num = 5;

if (num % 2 == 0) {
  printf("Even\n");
} else {
  printf("Odd\n");
}
```

---

### Else If

- Use the `else if` statement to check a new condition if the first one is false.

#### Example

```C
int number;

printf("Enter a number: ");
scanf("%d", &number);  // Reads the number you type

if (number > 0) {
  printf("The number is positive!\n");
} else if (number < 0) {
  printf("The number is negative!\n");
} else {
  printf("The number is zero!\n");
}
```

---

### Short Hand If...Else (Ternary Operator)

- The ternary operator is a short way to write an `if-else` statement in one line. It uses three parts: a condition, a true result, and a false result.

#### Example

```C
int time = 20;
time < 18 ? printf("Good day.\n") : printf("Good evening.\n");  // Prints "Good evening."
```

---

### Nested If Statements

- A nested `if` statement is an `if` inside another `if`. It checks one condition, then another.

#### Example: Checking if a Number is Positive and Even

```C
int num;

printf("Enter an integer: ");
scanf("%d", &num);

if (num > 0) {  // Check if the number is positive
  if (num % 2 == 0) {  // Check if the number is even
    printf("The number %d is positive and even.\n", num);
  } else {
    printf("The number %d is positive but odd.\n", num);
  }
} else if (num < 0) {
  printf("The number %d is negative.\n", num);
} else {  // num == 0
  printf("The number is zero.\n");
}
```

## Switch Statement

- The `switch` statement checks a value and runs code based on which case matches.
- It’s like a menu: pick an option, and it does that one thing.

### How It Works

- The `switch` checks one value.
- It compares it to each `case`.
- If a `case` matches, it runs that code.
- `break` stops the `switch` from continuing.
- `default` runs if no `case` matches (optional).

### Rules for Switch Statement

1. The value in `switch` must be an integer or character.
2. Each `case` value must be a fixed number or character (no variables).
3. `case` only works inside `switch`.
4. `break` is optional. Without it, all cases after a match will run (called "fall through").

### Example

```C
int choice;

printf("Enter 1, 2, or 3: ");
scanf("%d", &choice);

switch (choice) {
  case 1:
    printf("You chose option 1.\n");
    break;
  case 2:
    printf("You chose option 2.\n");
    break;
  case 3:
    printf("You chose option 3.\n");
    break;
  default:
    printf("Invalid choice.\n");
}
```

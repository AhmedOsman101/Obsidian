---
title: Lecture 7~8
prev:
  text: "Lecture Six"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureSix"
next:
  text: "Lecture Nine"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureNine"
---

# Programming Essentials in C - Lectures 7-8

## Structures in C

Structures (`struct`) in C allow you to group variables of different data types under one name. This is useful when dealing with complex data types, such as records.

### Why Use Structures?

Without structures, each related variable must be declared separately:

```c
int productID;
char productName[50];
float price;
int quantity;
```

With structures, related variables are grouped together:

```c
struct Product {
  int ID;
  char name[50];
  float price;
  int quantity;
};
```

### Declaring Structure Variables

Structure variables can be declared inside `main()` using the structure name:

```c
struct User {
  int id;
  char name;
};

int main() {
  struct User myUser;
  return 0;
}
```

### Declaring Variables While Defining Structures

You can declare variables directly when defining the structure:

```c
struct Product {
  int ID;
  char name[50];
  float price;
  int quantity;
} item1, item2;
```

### Accessing Structure Members

Use the dot (`.`) operator to access structure members:

```c
myUser.id = 1;
myUser.age = 20;
```

### Strings in Structures

Strings are arrays of characters and cannot be assigned directly. Use `strcpy()` instead:

```c
strcpy(myUser.name, "Ahmad Othman");
```

> [!NOTE]
> You have to inlcude `string.h` header file to use `strcpy()`.
>
> ```c
> #include <string.h>
> ```

### Assigning Values at Declaration Time

You can initialize structure members at declaration time:

```c
struct User myUser = { 1, "Ahmad Othman" };
struct User secondUser = {
  .id = 2,
  .name = "Test User"
};
```

### Copy Structures

You can assign one structure to another:

```c
struct User user2 = user1;
```

### Modify Values

Use the dot operator or `strcpy()` for strings:

```c
myUser.id = 2;
strcpy(myUser.name, "Test User");
```

### Arrays vs. Structures

| Feature              | Array                                                 | Structure                                                    |
| -------------------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| Definition           | Stores elements of the same data type.                | Groups different data types under one name.                  |
| Data Type            | One type only (e.g., all `int`).                      | Multiple types (e.g., `int`, `char`, `float`).               |
| Memory Allocation    | Stored sequentially.                                  | Stored separately under one unit.                            |
| Accessing Elements   | By index (`arr[0]`).                                  | By member name (`student.name`).                             |
| Use Case             | When dealing with similar data (e.g., list of marks). | When dealing with complex entities (e.g., employee records). |
| Passing to Functions | Passed entirely or via pointers.                      | Passed entirely or via pointers.                             |
| Best Used For        | Storing same-type values.                             | Storing attributes of an entity.                             |

### Array of Structures

Allows storing multiple records efficiently:

```c
struct User Users[3];
```

Access individual elements and their members with:

```c
Users[0].id = 1;
strcpy(Users[0].name, "Ahmad Othman");
```

## Functions in C

Functions are blocks of code that perform specific tasks and can be reused throughout a program.

### What Are Functions?

- Encapsulate logic
- Reusable and modular
- Can take parameters and return values

### Predefined Functions

Examples include `main()` and `printf()`.

### Create a Function

```c
void myFunction() {
  // Function Body
}
```

### Calling a Function

Call it using its name followed by `()`:

```c
myFunction();
```

### Parameters and Arguments

Functions can accept parameters:

```c
int sum(int a, int b) {
  return a + b;
}
```

Call and store return values:

```c
int result = sum(4, 6);
```

### Function Declaration and Definition

Declaration:

```c
int sum(int a, int b);
```

Definition:

```c
int sum(int a, int b) {
  return a + b;
}
```

### Use Case for Declaration

Declare a function before it is used to avoid compilation errors:

```c
int function_b(int y); // Forward declaration

int function_a(int x) {
  // if function_b wasn't declared, this code would have caused an error
  return function_b(x + 1);
}

int function_b(int y) {
  return y * y;
}
```

### Recursion

A recursive function calls itself to solve problems.
Used to simplify complex problems like calculating the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence#Definition).

```c
#include <stdio.h>

int fib(int n) {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

int main() {
  /*
    f(1) = 1
    f(2) = 1
    f(3) = f(2) + f(1) = 1 + 1 = 2
    f(4) = f(3) + f(2) = 2 + 1 = 3
    f(5) = f(4) + f(3) = 3 + 2 = 5
    f(6) = f(5) + f(4) = 5 + 3 = 8
  */
  int n = 6, result = fib(n);

  printf("fib(%d) = %d \n", n, result); // fib(6) = 8
}
```

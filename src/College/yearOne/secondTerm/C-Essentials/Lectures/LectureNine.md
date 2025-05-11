---
title: Lecture 9
prev:
  text: "Lecture Seven & Eight"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureSevenToEight"
next:
  false
  # text: "Lecture Ten"
  # link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureTen"
---

# Programming Essentials in C - Lectures 9

## What is a Pointer

A pointer in C is a derived data type used to store the address of another variable.
It allows access and modification of data located in memory. Pointers are essential for:

- Efficient data passing between functions
- Creating dynamic data structures (linked lists, trees, graphs)

## Pointer Declaration

To declare a pointer, use the dereferencing operator (`*`) with a valid C data type:

**Syntax:**
`type *varname`

- `type` is the base type of the pointer
- `varname` is the name of the pointer

**Note:** The `*` in the declaration is not multiplication—it signifies that the variable is a pointer.

**Example:**

```c
int *intPtr;     // integer pointer
float *floatPtr; // float pointer
char *charPtr;   // char pointer
```

## Pointer Initialization

A pointer is initialized using the address-of operator (`&`) to assign it the address of a variable.

**Example:**

```c
int var = 5;
int *ptr = &var; // stores the address of `var` in memory

printf("%d => %d\n", var, *ptr); // dereference the pointer to access its value
```

## Referencing and Dereferencing Pointers

- `&` (Address-of Operator): Used to get the address of a variable.
- `*` (Dereference Operator): Used to access the value at the memory address held by a pointer.

## Access and Manipulate Values Using Pointers

You can modify the value of a variable via its pointer.

```c
int var = 5;
int *ptr = &var;

printf("%d => %d\n", var, *ptr); // 5 => 5

*ptr = 10; // modifies both `ptr` and `var`

printf("%d => %d\n", var, *ptr); // 10 => 10
```

**Printing the address of a variable:**

```c
int var = 5;
int *ptr = &var;

printf("value of &var: %p\n", &var); // using %p for pointers
printf("value of ptr: %p\n", ptr);   // prints the same address
```

> [!NOTE]
> The type of a variable and its pointer must match.

Output:

```
value of &var: 0x7ffd5cbbef94
value of ptr: 0x7ffd5cbbef94
```

## Pointer to a Pointer

A pointer can also store the address of another pointer.

```C
int var = 5; // integer variable
int* ptr = &var; // integer pointer to a variable
int** ptrToptr = &ptr; // integer pointer to a pointer
```

## Pointer Arithmetic in C

### Increment and Decrement of a Pointer

Incrementing a pointer moves it to the next memory location based on the data type size.

```c
int x = 10;
int *y = &x;

printf("Value of y before increment: %d\n", y);
y++;
printf("Value of y after increment: %d\n", y);
```

> [!NOTE]
> Memory addresses change with each run.

**Output:**
Pointer `y` increases by `sizeof(int)` (usually 4 bytes).
Notice that the address has changed (`0x7ff...44` -> `0x7ff...48`).

```
Value of y before increment: 0x7ffc32820844
Value of y after increment:  0x7ffc32820848
```

#### Decrementing a pointer in an array

```c
int arr[] = { 10, 20, 30 };
int* ptr = &arr[2];

for (int i = 0; i < 3; i++) {
  printf("%d ", *ptr); // print the current value
  ptr--; // move the pointer to the previous element
}
```

### Addition and Subtraction of Integer to Pointer

Adding or subtracting an integer to a pointer moves it forward or backward in memory.

```c
int arr[] = { 10, 20, 30, 40, 50 };
int* ptr = arr; // points to arr[0]

for (int i = 0; i < 5; i++) {
  // move the pointer by `i` positions in memory then print its value
  printf("%d ", *(ptr + i));
}
```

### Summary

| Expression   | Description                                    |
| ------------ | ---------------------------------------------- |
| `ptr + n`    | Move forward to the $n^{th}$ next element      |
| `ptr - n`    | Move backward to the $n^{th}$ previous element |
| `*(ptr + n)` | Value at the $n^{th}$ next element             |
| `*(ptr - n)` | Value at the $n^{th}$ previous element         |

## Reverse Printing a String Using Pointer

```c
#include <stdio.h>
#include <string.h> // for strlen

int main() {
  char str[] = "Pointer";
  char* ptr = &str[strlen(str) - 1];

  printf("Reversed string: ");

  while (ptr >= str) {
    printf("%c", *ptr);
    ptr--;
  }

  printf("\n");

  return 0;
}
```

**Output:**

```
Reversed string: retnioP
```

## Pointer to an Array

A pointer to an array points to the whole array, not just its first element.

```c
int arr[5] = {10, 20, 30, 40, 50};

int (*ptr)[5] = &arr; // Pointer to the entire array

for (int i = 0; i < 5; i++) {
  printf("%d ", (*ptr)[i]);
}
```

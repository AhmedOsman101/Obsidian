---
title: Section 2
prev:
  text: "Section 1"
  link: "/College/yearThree/firstTerm/C/Sections/Section-1"
next: false
---

# Advanced C - Section 2: Pointers

## What Is a Pointer

A **pointer** is a variable that stores the **memory address** of another variable. A normal variable holds a value; a pointer holds where that value lives.

```c
int x = 5;
int *p = &x;   // p holds address of x
```

- `&x` -> address of `x` (e.g. 300).
- `p` -> stores that address.
- `*p` -> value at that address (5).

## Declaring Pointers

```c
int *p = &x;
```

- Type before `*` = type of data pointed to.
- `&` = **address-of** operator.
- `*` = **dereference** operator.

## Pointer to Pointer

A pointer can point to another pointer: `int **pp = &p;`. Chains like `*p`, `**pp`, `***ppp` dereference successive levels.

## Call by Value vs. Call by Reference

| Method                | What is passed      | Effect on original       |
| --------------------- | ------------------- | ------------------------ |
| **Call by value**     | a copy of the value | original unchanged       |
| **Call by reference** | address (pointer)   | original can be modified |

## Pointers and Arrays

Array name decays to a pointer to its first element. Pointer arithmetic moves by element size.

```c
int Arr[] = {1,2,3,4,2,5,4};
int *ptr = Arr;          // points to first element
printf("%d", *(ptr+i));  // access element i
```

- `p` -> address of first element.
- `*p` -> value of first element.
- `p+1` -> address of next element.

### 2D Arrays

```c
int B[2][3] = {{5,7,9},{80,2,4}};
int (*p)[3] = B;   // pointer to row of 3 ints
```

Dereference forms: `**p`, `*(*p+1)`, `**(p+1)`, `(*p+1)+2`.

## Try: sum/product/average via pointers

Write a function taking five numbers plus three pointers; store sum, product, and average through the pointers.

```c
#include <stdio.h>

// Results are written through the pointers, not returned.
void stats(int a, int b, int c, int d, int e,
           int *sum, long *product, double *average) {
  *sum = a + b + c + d + e;
  *product = (long)a * b * c * d * e;
  *average = *sum / 5.0;
}

int main() {
  int sum;
  long product;
  double average;

  stats(1, 2, 3, 4, 5, &sum, &product, &average);

  printf("Sum: %d\n", sum);
  printf("Product: %ld\n", product);
  printf("Average: %.2f\n", average);
  return 0;
}
```

Output:

```text
Sum: 15
Product: 120
Average: 3.00
```

> [!NOTE]
> The function returns `void`; the three outputs travel back through **pointers**. Using `long` for the product reduces the chance of overflow.

## Try: dynamic allocation preview

Search for `malloc()`, `calloc()`, `realloc()` — discussed in the next lab.

| Function             | Purpose             | Key point                              |
| -------------------- | ------------------- | -------------------------------------- |
| `malloc(size)`       | allocate one block  | uninitialized; `NULL` on failure       |
| `calloc(n, size)`    | allocate `n` blocks | zero-initialized                       |
| `realloc(ptr, size)` | resize an old block | keeps old contents; may move the block |

```c
int *a = (int*)malloc(10 * sizeof(int));       // single block
int *b = (int*)calloc(10, sizeof(int));        // zeroed array
a = (int*)realloc(a, 20 * sizeof(int));        // grow to 20 ints
free(a);                                       // release heap memory
free(b);
```

---

_4 min read (source: 3 min)_

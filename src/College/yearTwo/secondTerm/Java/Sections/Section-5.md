---
prev:
  text: "Section 4"
  link: "/College/yearTwo/secondTerm/Java/Sections/Section-4"
next:
  text: "Section 6"
  link: "/College/yearTwo/secondTerm/Java/Sections/Section-6"
title: Section 5
---

# Java Programming - Section 5

## Array Definition and Core Properties

An **array** is an **object** that stores elements of the **same data type** in contiguous memory locations. It is **fixed-size**, which means the number of elements is decided when the array is created and cannot change afterward. Arrays are **index-based**, so the first element is at index `0`, the second at index `1`, and so on. This works because Java maps each index to a specific memory position for direct access.

- Arrays can store **primitive values** or **objects**.
- Java arrays derive from the **`Object`** class.
- All arrays implement **`Serializable`** and **`Cloneable`**.
- Main kinds in this section: **single-dimensional** and **multi-dimensional** arrays.

> [!IMPORTANT]
> **Fixed-size** does not mean fixed values. You can change elements, but you cannot change the array length after creation.

## Single-Dimensional Arrays and Traversal

A **single-dimensional array** is a linear collection of values of the same type. The lecture shows two equivalent declaration styles, followed by separate allocation using **`new`**. This works because declaration creates the reference, while allocation creates the actual array object in memory.

```java
// Purpose: declare, initialize, and traverse a one-dimensional array.
int[] a;
a = new int[5];
a[0] = 10;
a[1] = 20;
a[2] = 70;
a[3] = 40;
a[4] = 50;

for (int i = 0; i < a.length; i++) {
  System.out.println(a[i]);
}
```

| Concept | Meaning | Boundary |
| --- | --- | --- |
| **`a.length`** | number of elements | Property, not a method |
| **Index** | element position | Valid indices are `0` to `length - 1` |
| **Traversal** | visiting each element | Stop before `i == a.length` |

> [!WARNING]
> *Using `i <= a.length` causes an invalid final index.* The last valid index is always `a.length - 1`.

## Two-Dimensional and Jagged Arrays

A **two-dimensional array** is an **array of arrays** used to store data in rows and columns. A regular 2D array gives each row the same number of columns, while a **jagged array** allows different row lengths. This difference matters because jagged arrays require row-by-row initialization.

```java
// Purpose: create and traverse a regular 2D array.
int[][] numbers = new int[2][3];
numbers[0][0] = 10;
numbers[0][1] = 20;
numbers[0][2] = 30;
numbers[1][0] = 40;
numbers[1][1] = 50;
numbers[1][2] = 60;

for (int i = 0; i < numbers.length; i++) {
  for (int j = 0; j < numbers[i].length; j++) {
    System.out.print(numbers[i][j] + " ");
  }
  System.out.println();
}
```

```java
// Purpose: declare a jagged array with different row sizes.
int arr[][] = new int[3][];
arr[0] = new int[3];
arr[1] = new int[4];
arr[2] = new int[2];
```

| Array form | Row sizes | Initialization rule |
| --- | --- | --- |
| **Regular 2D array** | same number of columns | allocate rows and columns together |
| **Jagged array** | different columns per row | allocate each row separately |

## `for-each` Traversal and Array Access

The **`for-each` loop** accesses each array element one by one without using an index variable. This improves readability and reduces index mistakes because Java provides each element directly to the loop variable.

```java
// Purpose: traverse an array using for-each.
int arr[] = {33, 3, 4, 5};
for (int i : arr) {
  System.out.println(i);
}
```

Why this works: each iteration copies the current element into the loop variable, then executes the body. The loop continues until the last element is processed.

> [!NOTE]
> *`for-each` is good for reading elements, but it does not expose index positions directly.* If index-based logic is needed, use a standard `for` loop.

## Passing, Anonymous, and Returned Arrays

When an array is passed to a **method**, Java passes a **reference** to the same array object. This means the method can work with the original array data rather than a separate copy. Arrays can also be created as **anonymous arrays** for one-time use, and methods can **return arrays** as results.

```java
// Purpose: pass an array to a method and find its minimum value.
static void min(int arr[]) {
  int min = arr[0];
  for (int i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  System.out.println(min);
}
```

```java
// Purpose: pass an anonymous array directly to a method.
printArray(new int[]{10, 22, 44, 66});
```

```java
// Purpose: return an array from a method.
static int[] get() {
  return new int[]{10, 30, 50, 90, 60};
}
```

> [!IMPORTANT]
> *Anonymous arrays are useful when the array is needed for one call only and does not need a named variable.*

## Exceptions and Matrix Operations

**`ArrayIndexOutOfBoundsException`** is a **runtime exception** thrown when code accesses an invalid array index. The exception occurs when the index is negative, equal to the array size, or greater than the last valid index. This works as a safety check because the JVM prevents reading or writing outside the array boundary.

```java
// Purpose: show the invalid loop boundary that causes an exception.
for (int i = 0; i <= arr.length; i++) {
  System.out.println(arr[i]);
}
```

For **matrix addition**, corresponding elements are added using the same row and column indices. For **matrix multiplication**, a third loop is needed because each result cell depends on multiple paired products.

```java
// Purpose: add two matrices element by element.
c[i][j] = a[i][j] + b[i][j];
```

```java
// Purpose: multiply two matrices using an inner accumulation loop.
c[i][j] += a[i][k] * b[k][j];
```

## Common Array Problems: Frequency and Left Rotation

**Frequency counting** measures how many times each element appears in an array. The lecture uses a **visited marker** to avoid counting the same repeated value multiple times. A **left rotation** moves each element one position left and sends the first element to the last position; repeating that process `n` times rotates the array by `n` positions.

```java
// Purpose: left-rotate an array by one step.
int first = arr[0];
for (int j = 0; j < arr.length - 1; j++) {
  arr[j] = arr[j + 1];
}
arr[arr.length - 1] = first;
```

- **Frequency logic**: compare each element with later elements and mark duplicates as visited.
- **Rotation logic**: save the first element before shifting, or its value will be lost.

> [!WARNING]
> *In left rotation, if the first element is not saved before shifting, it is overwritten and cannot be restored at the end.*

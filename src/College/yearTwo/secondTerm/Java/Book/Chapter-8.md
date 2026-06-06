---
title: Chapter 8
prev:
  text: "Chapter 7"
  link: "/College/yearTwo/secondTerm/Java/Book/Chapter-7"
next:
  text: "Chapter 9"
  link: "/College/yearTwo/secondTerm/Java/Book/Chapter-9"
---

# Java - Chapter 8

## Multidimensional Arrays

### 8.1 Two-Dimensional Arrays

A **two-dimensional array** stores a matrix or table — it's an array of arrays (a **nested array**). Each element is accessed by **row index** and **column index**, both 0-based.

**Declaration**:

```java
elementType[][] arrayRefVar;      // preferred
elementType arrayRefVar[][];      // allowed, not preferred
```

**Creating a 2D array**:

```java
matrix = new int[5][5];           // 5 rows, 5 columns
```

> [!WARNING]
> Use `matrix[2][1]` not `matrix[2, 1]` — each subscript in its own brackets.

**Array initializer**:

```java
int[][] array = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9}
};
```

### 8.2 Lengths and Ragged Arrays

`array.length` = number of rows. `array[row].length` = number of columns in that row.

A **ragged array** has rows of different lengths:

```java
int[][] triangleArray = new int[5][];
triangleArray[0] = new int[5];
triangleArray[1] = new int[4];
// ...
```

> [!NOTE]
> `new int[5][]` requires the first index. `new int[][]` is wrong.

### 8.3 Processing 2D Arrays

Use nested `for` loops — outer for rows, inner for columns.

| Operation             | Pattern                                                      |
| --------------------- | ------------------------------------------------------------ |
| Initialize with input | `matrix[row][col] = input.nextInt();`                        |
| Random values (0–99)  | `matrix[row][col] = (int)(Math.random() * 100);`             |
| Print                 | Inner loop prints, outer loop adds `println()`               |
| Sum all elements      | `total += matrix[row][col];`                                 |
| Sum by column         | Outer loop over columns, inner over rows                     |
| Largest row sum       | Track `maxRow` and `indexOfMaxRow`, compare each row's total |
| Random shuffle        | For each `matrix[i][j]`, swap with random `matrix[i1][j1]`   |

### 8.4 Passing 2D Arrays to Methods

Pass-by-sharing applies — the reference is passed. Method can modify the array.

```java
public static int sum(int[][] m) {
  int total = 0;
  for (int row = 0; row < m.length; row++)
    for (int col = 0; col < m[row].length; col++)
      total += m[row][col];
  return total;
}
```

Methods can also return 2D arrays: `public static int[][] getArray() { ... }`

### 8.5 Case Study: Grading Multiple-Choice Test

8 students × 10 questions stored as `char[][] answers`. Key stored as `char[] keys`. Grade by comparing each student row against the key:

```java
for (int i = 0; i < answers.length; i++) {
  int correctCount = 0;
  for (int j = 0; j < answers[i].length; j++)
    if (answers[i][j] == keys[j]) correctCount++;
  System.out.println("Student " + i + "'s correct count is " + correctCount);
}
```

### 8.6 Case Study: Closest Pair

Points stored as `double[][] points = new double[numberOfPoints][2]`. Compare every pair of points using nested loops (`j = i + 1` to avoid duplicate comparisons):

```java
double distance = Math.sqrt(
  (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
```

Track the minimum distance and the indices of the closest pair. Complexity: O(n²) — brute force.

> [!NOTE]
> **Ties**: If multiple pairs have the same minimum distance, only the **first discovered** pair is returned (the one with the smallest `i`, then smallest `j`, since the inner loop starts at `j = i + 1`).

> [!TIP]
> Use input redirection: `java FindNearestPoints < FindNearestPoints.txt`

### 8.7 Case Study: Sudoku Validation

$9 \times 9$ grid, must satisfy: every row, column, and $3 \times 3$ box contains 1–9 exactly once.

Check each cell: value must be 1–9 **and** unique in its row, column, and $3 \times 3$ box.

**Finding the 3×3 box start cell**:

```java
int boxRowStart = (i / 3) * 3;
int boxColStart = (j / 3) * 3;
```

Validation steps:

```java
// Check row
for (int col = 0; col < 9; col++)
  if (col != j && grid[i][col] == grid[i][j]) return false;

// Check column
for (int row = 0; row < 9; row++)
  if (row != i && grid[row][j] == grid[i][j]) return false;

// Check 3x3 box
for (int row = (i / 3) * 3; row < (i / 3) * 3 + 3; row++)
  for (int col = (j / 3) * 3; col < (j / 3) * 3 + 3; col++)
    if (!(row == i && col == j) && grid[row][col] == grid[i][j]) return false;
```

> [!WARNING]
> The condition `row != i && col != j` (without the `||`) for box checking is **wrong** — it misses cells where the row is different but column is the same as the checked cell.

### 8.8 Multidimensional Arrays (3+ Dimensions)

A **three-dimensional array** is an array of 2D arrays:

```java
double[][][] scores = new double[6][5][2];
```

Index structure: `scores[whichStudent][whichExam][mcOrEssay]`.

`x.length` = first dimension size. `x[0].length` = second dimension size. `x[0][0].length` = third dimension size.

**Daily Temperature and Humidity case study** — 3D array `data[day][hour][0or1]` stores 10 days × 24 hours × 2 values (temperature, humidity). Use input redirection from file.

> [!WARNING]
> **Off-by-one in Weather case study**: Days are numbered **1–10** and hours **1–24** in the input file. When storing in the 0-indexed array, you must subtract 1: `data[day - 1][hour - 1][index]`. Forgetting this 1-based -> 0-based translation is the most common mistake — it causes `ArrayIndexOutOfBoundsException` or silently reading/writing the wrong elements.

**Guess Birthday case study** — 5 sets of numbers stored as `int[][][] dates` (5 × 4 × 4). Each set's first number `dates[i][0][0]` is added if the user answers "yes."

---

_86 min source -> ~10 min read_

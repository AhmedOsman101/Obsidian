---
prev:
  text: "Lectures"
  link: "/College/Math/Lectures/index"
next:
  text: "Lecture Two"
  link: "/College/Math/Lectures/LectureTwo"
---

# Lecture One: Matrices Basic Definitions and Operations

## Basic Definitions

- **Matrix**: A matrix is a rectangular array of numbers (entries) arranged in rows and columns.

- **Order**: The order of a matrix is given as $m \times n$, where $m$ is the number of rows and $n$ is the number of columns.

- **Element**: The element in row $i$ and column $j$ of a matrix is denoted as $a_{ij}$ and it's called the $(i, j)^{th}$ entry of the matrix $A$.

- **Main Diagonal**: The main diagonal of any matrix is the set of entries $a_{ij}$ where $i = j$.

## Special Types of Matrices

1. **Row Matrix**: A row matrix has 1 row and $n$ columns. Example:

$$
A = \begin{bmatrix}
1&2&3
\end{bmatrix}
$$

2. **Column Matrix**: A column matrix has $m$ rows and 1 column. Example:

$$
A = \begin{bmatrix}
1 \\
2 \\
3
\end{bmatrix}
$$

3. **Square Matrix**: A square matrix has the same number of rows and columns, i.e., $m = n$. Examples:

$$
A_{2\times2} = \begin{bmatrix}
1 & 2 \\ 3 & 4
\end{bmatrix}
$$

$$
B_{3\times3} = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

4. **Identity Matrix**: The identity matrix $I$ is a square matrix where all diagonal elements are 1, and all other elements are 0. Examples:

$$
I_2 = \begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$

$$
I_3 = \begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$

5. **Zero Matrix**: The zero matrix $O$ has all its entries as 0. Examples:

$$
A_{1 \times 3} = \begin{bmatrix}
0 & 0 & 0
\end{bmatrix}
$$

$$
B_{2 \times 2} = \begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix}
$$

## Matrix Algebra: Addition, Subtraction, and Scalar Multiplication

1. **Matrix Addition**: The matrix sum $A + B$ is obtained by adding corresponding entries of $A$ and $B$.
   _Note_: Matrix addition is possible only if the matrices have the same order.

   **Example 1: Find $A+B$**:

$$
A = \begin{bmatrix}
0 & -3 \\
5 & 2
\end{bmatrix}, \quad
B = \begin{bmatrix}
13 & 1 \\
-4 & 5
\end{bmatrix}
$$

$$
A + B = \begin{bmatrix}
0 + 13 & -3 + 1 \\
5 - 4 & 2 + 5
\end{bmatrix}
$$
$$
A + B = \begin{bmatrix}
13 & -2 \\
1 & 7
\end{bmatrix}
$$

2. **Matrix Subtraction**: The matrix difference $A - B$ is obtained by subtracting corresponding entries of $B$ from $A$.

   **Example 2: Find $P-Q$**:

$$
P = \begin{bmatrix}
4 & -2 & 0 \\
1 & 0 & 37
\end{bmatrix}, \quad
Q = \begin{bmatrix}
-4 & -2 & 2 \\
-8 & 3 & 6
\end{bmatrix}
$$

$$
P - Q = \begin{bmatrix}
4 - (-4) & -2 - (-2) & 0 - 2 \\
1 - (-8) & 0 - 3 & 37 - 6
\end{bmatrix}
$$
$$
P - Q = \begin{bmatrix}
8 & 0 & -2 \\
9 & -3 & 31
\end{bmatrix}
$$

3. **Scalar Multiplication**: The scalar multiplication of $A$ by $k$ is obtained by multiplying each entry of $A$ by $k$.

   **Example 3: Find $\frac{1}{2}A$**:

$$
A = \begin{bmatrix}
4 & -4 & 0 \\
12 & 6 & 2 \\
8 & 18 & -2
\end{bmatrix}
$$

$$
\frac{1}{2} A = \frac{1}{2} \begin{bmatrix}
4 & -4 & 0 \\
12 & 6 & 2 \\
8 & 18 & -2
\end{bmatrix}
$$
$$
\frac{1}{2} A = \begin{bmatrix}
2 & -2 & 0 \\
6 & 3 & 1 \\
4 & 9 & -1
\end{bmatrix}
$$

## Matrix Multiplication

1. **Matrix Product**: The product $AB$ of matrices $A$ and $B$ is defined if the number of columns of $A$ equals the number of rows of $B$. The resulting matrix will have the order $m \times p$.

   **Example 4: Find $AB$**:

$$
A = \begin{bmatrix}
1 & 2 & 0 \\
8 & 0 & 1 \\
2 & 4 & 6
\end{bmatrix}, \quad
B = \begin{bmatrix}
3 & 0 \\
1 & 2 \\
3 & 4
\end{bmatrix}
$$
$$
AB = \begin{bmatrix}
1(3) + 2(1) + 0(3) & 1(0) + 2(2) + 0(4) \\\
8(3) + 0(1) + 1(3) & 8(0) + 0(2) + 1(4) \\\
2(3) + 4(1) + 6(3) & 2(0) + 4(2) + 6(4)
\end{bmatrix}
$$

$$
AB = \begin{bmatrix}
3 + 2 + 0 & 0 + 4 + 0 \\
24 + 0 + 3 & 0 + 0 + 4 \\
6 + 4 + 18 & 0 + 8 + 24
\end{bmatrix}
$$
$$
AB = \begin{bmatrix}
5 & 4 \\
27 & 4 \\
28 & 32
\end{bmatrix}
$$

2. **Non-commutativity**: In general, matrix multiplication is not commutative, i.e., $AB \neq BA$.

   **Example 5: Show that $AB \neq BA$ for the matrices:**

$$
A = \begin{bmatrix}
0 & 3 \\
5 & 2
\end{bmatrix}, \quad
B = \begin{bmatrix}
1 & 0 \\
0 & 2
\end{bmatrix}
$$

First $AB$,

$$
AB = \begin{bmatrix}
0(1) + 3(0) & 0(0) + 3(2) \\
5(1) + 2(0) & 5(0) + 2(2)
\end{bmatrix}
$$
$$
AB = \begin{bmatrix}
0 & 6 \\
5 & 4
\end{bmatrix}
$$

Next $BA$,

$$
BA = \begin{bmatrix}
1(0) + 0(5) & 1(3) + 0(2) \\
0(0) + 2(5) & 0(3) + 2(2)
\end{bmatrix}
$$
$$
BA = \begin{bmatrix}
0 & 3 \\
10 & 4
\end{bmatrix}
$$

Hence that,

$$
\begin{bmatrix}
0 & 6 \\
5 & 4
\end{bmatrix} \neq
\begin{bmatrix}
0 & 3 \\
10 & 4
\end{bmatrix}, \quad
\therefore \ AB \neq BA
$$

## Matrix Transpose

1. **Transpose**: The transpose $A^T$ of a matrix $A$ is obtained by swapping the rows and columns of $A$. If $A$ is of order $m \times n$, then $A^T$ will be of order $n \times m$.

   **Example 6: Find $A^T$**:

$$
A = \begin{bmatrix}
3 & 7 & 0 \\
5 & 9 & 46
\end{bmatrix}, \quad
A^T = \begin{bmatrix}
3 & 5 \\
7 & 9 \\
0 & 46
\end{bmatrix}
$$

_Note_: A square matrix $A$ can be multiplied by itself any number of times, giving the $n^{th}$ power of $A$.

$$
A^2 = A \cdot A, \quad
A^3 = A \cdot A \cdot A
$$

## Basic Properties of Matrices

1. **Commutativity of Addition**:
   $$
   A + B = B + A
   $$
2. **Associativity of Addition**:
   $$
   (A + B) + C = A + (B + C)
   $$
3. **Distributivity of Scalar Multiplication**:
   $$
   k (A + B) = kA + kB
   $$
4. **Transposition Properties**:
   $$
   (A + B)^T = A^T + B^T
   $$
   $$
   (A^T)^T = A
   $$
   $$
   (kA)^T = kA^T
   $$
5. **Matrix Multiplication**:
   $$
   A(BC) = (AB)C
   $$
   $$
   A (B + C) = AB + AC
   $$
6. **Transposition of a Product**:
   $$
   (AB)^T = B^T A^T
   $$
7. **Power of a Matrix**:
   $$
   A^m A^n = A^{m+n} = A^n A^m
   $$

## Important Special Properties

- $A + O = O + A = A$, where $O$ is the zero matrix.
- $A I = 1 \times A = A$, where $I$ is the identity matrix.
- $A O = 0 \times A = O$, where $O$ is the zero matrix.

Thus, the identity and zero matrices behave like the numbers 1 and 0 respectively in ordinary arithmetic and algebra.

## Example 7

**show that $A^2 = pA + qI_2$, then write $A^3$ in the form $A^3 = gA + hI_2$. Find the values of $\text{p, q, g, h}$.**

**Given**:

$$
A = \begin{bmatrix}
2 & 5 \\
1 & 16
\end{bmatrix}
$$

First, compute $A^2$:

$$
A^2 = \begin{bmatrix}
2 & 5 \\
1 & 16
\end{bmatrix} \begin{bmatrix}
2 & 5 \\
1 & 16
\end{bmatrix}
$$
$$
A^2 = \begin{bmatrix}
2(2) + 5(1) & 2(5) + 5(16) \\
1(2) + 16(1) & 1(5) + 16(16)
\end{bmatrix}
$$

$$
A^2 = \begin{bmatrix}
9 & 90 \\
18 & 261
\end{bmatrix}
$$

$$
pA = p \begin{bmatrix}
2 & 5 \\
1 & 16
\end{bmatrix}, \quad
pA = \begin{bmatrix}
2p & 5p \\
p & 16p
\end{bmatrix}
$$

$$
qI_2 = q \begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}, \quad
qI_2 = \begin{bmatrix}
q & 0 \\
0 & q
\end{bmatrix}
$$

Then, solve for $p$ and $q$ using the equation:

$$
A^2 = pA + qI_2
$$

$$
pA + qI_2 = \begin{bmatrix}
2p & 5p \\
p & 16p
\end{bmatrix} +
\begin{bmatrix}
q & 0 \\
0 & q
\end{bmatrix}
$$
$$
= \begin{bmatrix}
2p + q & 5p \\
p & 16p + q
\end{bmatrix}
$$

Equating the 2 matrices gives,

$$
\begin{bmatrix}
2p + q & 5p \\
p & 16p + q
\end{bmatrix} =
\begin{bmatrix}
9 & 90 \\
18 & 261
\end{bmatrix}
$$

This immediately gives $p = 18$; substituting this into one of the other equations involving $q$ gives:

$$
2p + q = 9, \quad 2(18) + q = 9, \quad q = 9 - 36, \quad q = -27
$$

Next, compute $A^3$:

$$
A^3 = A \cdot A^2
$$
$$
A(pA+qI_2) \text{ (substitute }A^2 \text{ with pA+qI)}
$$
$$
18A^2 - 27A \text{ (substitute }A^2 \text{ with pA+qI)}
$$
$$
18(18A - 27I_2) - 27A
$$
$$
324A - 486I_2 - 27A
$$
$$
A^3 = 297A - 486I
$$
$$
p = 18, \quad q = -27
$$
$$
g=297, \quad h = -486
$$

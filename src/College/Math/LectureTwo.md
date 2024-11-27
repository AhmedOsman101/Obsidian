---
prev:
  text: "Lecture One"
  link: "/College/Math/LectureOne"
next:
  text: "Lecture Three"
  link: "/College/Math/LectureThree"
---

# Lecture Two: Determinants, Inverse Matrices and Systems of Equations

## Special Types of Matrices

### Symmetric Matrices

- **Definition**: A matrix $A$ is **symmetric** if $A^T = A$. In other words, the transpose of the matrix is equal to the matrix itself.

- **Properties**:

  - A symmetric matrix must always be **square** (i.e., the number of rows must equal the number of columns).
  - The elements across the main diagonal of a symmetric matrix are symmetric with respect to the diagonal.

- **Example**:

$$
A = \begin{bmatrix}
1 & x & -y \\
x & 2 & z \\
-y & z & 3
\end{bmatrix}
$$

In this case, the matrix is symmetric because $A^T = A$.

- **Example 1**: Show that the matrix $A$ is symmetric:
$$
A = \begin{bmatrix}
1 & 2 & 4 \\
2 & 0 & 17 \\
4 & 17 & 6
\end{bmatrix}
$$
$$
A^T = \begin{bmatrix}
1 & 2 & 4 \\
2 & 0 & 17 \\
4 & 17 & 6
\end{bmatrix}
$$
$$
A = A^T
$$
  Hence, $A$ is a symmetric matrix.

---

### Skew-Symmetric Matrices

- **Definition**: A matrix $A$ is **skew-symmetric** if $A^T = -A$. In other words, the transpose of the matrix is the negative of the matrix.

- **Properties**:

  - A skew-symmetric matrix must be **square** (i.e., the number of rows must equal the number of columns).
  - All diagonal entries of a skew-symmetric matrix must be **0**, because the transpose of the diagonal element must equal its negative, which is only possible if it is zero.

- **Example**:
  $$
  A = \begin{bmatrix}
  0 & x & y \\
  -x & 0 & -z \\
  -y & z & 0
  \end{bmatrix}
  $$
  This matrix is skew-symmetric because $A^T = -A$.

## Determinants

### Determinant of a $2 \times 2$ Matrix

For a matrix $A$ of size $2 \times 2$:

$$
A = \begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

The determinant is calculated as:

$$
\det(A) = ad - bc
$$

where $ad - bc \neq 0$.

---

### Determinant of a $3 \times 3$ Matrix

For a matrix $A$ of size $3 \times 3$:

$$
A = \begin{bmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix}
$$

The determinant is calculated as:

$$
|A| = a \begin{vmatrix}
e & f \\
h & i
\end{vmatrix}

- b \begin{vmatrix}
d & f \\
g & i
\end{vmatrix}

+ c \begin{vmatrix}
d & e \\
g & h
\end{vmatrix}
$$

This simplifies to:

$$
|A| = a(ei - fh) - b(di - fg) + c(dh - eg)
$$

---

### Sign Rule for $3 \times 3$ Determinants

To calculate the determinant of a $3 \times 3$ matrix, you can use the **sign rule** based on the positions of the elements in the matrix. The signs alternate in a checkerboard pattern, as shown below:

$$
\begin{vmatrix}
+ & - & + \\

- & + & - \\

+ & - & +
\end{vmatrix}
$$

This pattern helps determine the signs when calculating the determinant by cofactor expansion along any row or column.

---

### Examples

- **Example 1: Determinant of a $2 \times 2$ Matrix**:

$$
B = \begin{bmatrix}
1 & 4 \\
2 & 6
\end{bmatrix}
$$

The determinant of $B$ is:

$$
|B| = 1(6) - 4(2) = -2
$$

- **Example 2: Determinant of a $3 \times 3$ Matrix**:

$$
F = \begin{bmatrix}
1 & -2 & 7 \\
6 & 0 & 1 \\
3 & 10 & 4
\end{bmatrix}
$$

Using cofactor expansion, we get:

$$
|F| = 1 \begin{vmatrix}
0 & 1 \\
10 & 4
\end{vmatrix}
-(-2) \begin{vmatrix}
6 & 1 \\
3 & 4
\end{vmatrix}
+7 \begin{vmatrix}
6 & 0 \\
3 & 10
\end{vmatrix}
$$

Calculating the smaller determinants:

$$
|F| = 1(0 - 10) + 2(24 - 3) + 7(60-0)
$$

$$
|F| = -10 + 42 + 420 = 452
$$

---

### Properties of Determinants

For any square matrix $A$ of size $n \times n$ and scalar $k \in \mathbb{R}$, the following properties hold:

- **Multiplication Property**:

$$
\det(AB) = \det(A) \cdot \det(B)
$$

- **Scalar Multiplication Property**:

$$
\det(kA) = k^n \cdot \det(A)
$$

- **Transpose Property**:
  $$
  \det(A^T) = \det(A)
  $$

Note: $\det(A)$ is often written as $|A|$.

## Inverse of a Matrix

### Definition

An $n \times n$ matrix $A$ has an inverse if its determinant is non-zero ($\det(A) \neq 0$), and the inverse $A^{-1}$ satisfies the following condition:

$$
A \cdot A^{−1} = A^{−1} \cdot A = I_n
$$

Where $I_n$ is the identity matrix of size $n \times n$. If matrix $A$ has an inverse, it is called **non-singular** (or **invertible**). If it does not have an inverse, it is called **singular** (or **non-invertible**).

---

### Theorem: Uniqueness of the Inverse

A matrix can have only one inverse.

---

### Adjoint of a Matrix

The adjoint of a square $2 \times 2$ matrix $A$ is defined as:

$$
A = \begin{bmatrix}
a & b \\
c & d
\end{bmatrix}, \quad \text{adj}(A) = \begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$

---

### Theorem: Non-Singularity

A matrix is **non-singular** (invertible) if $\det(A) \neq 0$. Conversely, a matrix is **singular** (non-invertible) if $\det(A) = 0$.

---

### Properties of Inverse Matrices

For square matrices $A$ and $B$, and scalar $k \in \mathbb{R}$, the following properties hold:

- **Product Property**:

$$
(AB)^{-1} = B^{-1} A^{-1}
$$

- **Transpose Property**:

$$
(A^{-1})^T = (A^T)^{-1}
$$

- **Determinant Property**:

$$
\det(A^{-1}) = \frac{1}{\det(A)}
$$

- **Scalar Multiplication Property**:
  $$
  (kA)^{-1} = \frac{1}{k} A^{-1}
  $$

---

### Examples

- **Example 1: Show that $A$ is non-singular.**

  Given matrix $A$:

$$
A = \begin{bmatrix}
1 & 0 & 4 \\
-2 & 0 & 17 \\
4 & 17 & 6
\end{bmatrix}
$$

The determinant of $A$ is calculated as:

$$
|A| =
1 \begin{vmatrix}
0 & 17 \\
17 & 6
\end{vmatrix}
- 0 \begin{vmatrix}
-2 & 17 \\
4 & 6
\end{vmatrix}
+ 4 \begin{vmatrix}
-2 & 0 \\
4 & 17
\end{vmatrix}
$$

Simplifying:

$$
|A| = 1(-289) - 0 + 4(-34) = -425
$$

Since $|A| \neq 0$, matrix $A$ is **non-singular**.

---

- **Example 2: Find the values of $k$ that make matrix $A$ singular.**

  Given matrix $A$:

$$
A = \begin{bmatrix}
k & 2 \\
-2 & k+5
\end{bmatrix}
$$

For singularity, we require the determinant to be 0:

$$
|A| = k(k + 5) - 2(−2) = 0
$$

Simplifying:

$$
k^2 + 5k + 4 = 0
$$

Factoring the quadratic equation:

$$
(k + 1)(k + 4) = 0
$$

Hence, $k = -1$ or $k = -4$. Therefore, the matrix $A$ is singular when $k = -1$ or $k = -4$.

## Inverse of a $2 \times 2$ Matrix

The inverse of a $2 \times 2$ matrix $A$:

$$
A = \begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

If matrix $A$ is a $2 \times 2$ matrix and has a non-zero determinant, its inverse is given by:

$$
A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A)
$$

Which simplifies to:

$$
A^{-1} = \frac{1}{ad-bc} \ \cdot \ \begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$

## Inverse of a $3 \times 3$ Matrix

For a $3 \times 3$ matrix $A$, the inverse exists if and only if the determinant of $A$ is non-zero. The inverse is calculated as:

$$
A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A)
$$

Where:

- $\det(A)$ is the determinant of $A$.
- $\text{adj}(A)$ is the adjoint of $A$, which is the transpose of its cofactor matrix.

### Matrix Representation

If $A$ is given as:

$$
A = \begin{bmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix}
$$

1. **Determinant ($\det(A)$)**
   The determinant of $A$ is calculated as:

   $$
   \det(A) = a(ei - fh) - b(di - fg) + c(dh - eg)
   $$

2. **Cofactor Matrix**
   The cofactor matrix is obtained by calculating the determinant of the minor for each element of $A$ following the [Sign Rule](https://obsidian-notes-swart.vercel.app/College/Math/LectureTwo.html#sign-rule-for-determinants).

The cofactor matrix for $A$ is:

$$
\text{Cofactor}(A) =
\begin{bmatrix}
e(i) - f(h) & - d(i) - f(g) & d(h) - e(g) \\
- b(i) - c(h) & a(i) - c(g) & - a(h) - b(g) \\
b(f) - c(e) & - a(f) - c(d) & a(e) - b(d) \\
\end{bmatrix}
$$

3. **Adjugate Matrix**
   The adjugate of $A$ is the transpose of the cofactor matrix:

   $$
   \text{adj}(A) = \text{Cofactor}(A)^T
   $$

4. **Inverse Formula**
   Using the determinant and adjugate, the inverse is given by:
   $$
   A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A)
   $$

### Simplified Example

For a matrix:

$$
A = \begin{bmatrix}
2 & 1 & 3 \\
1 & 0 & 2 \\
3 & 1 & 4
\end{bmatrix}
$$

- Calculate $|A|$ using the formula.

  $$
  |A| = a(ei - fh) - b(di - fg) + c(dh - eg)
  $$

  $$
  |A| = 2(0 - 2) - 1(4 - 6) + 3(1 - 0) = 1
  $$

- Find the adjoint.

  $$
  adj(A) = \begin{bmatrix}
  0(4) - 1(2) & 1(4) - 2(3) & 1(1) - 0(3) \\
  1(4) - 1(3) & 2(4) - 3(3) & 2(1) - 1(3) \\
  1(2) - 0(3) & 2(2) - 1(3) & 2(0) - 1(1) \\
  \end{bmatrix}
  $$

  $$
  adj(A) = \begin{bmatrix}
  -2 & -2 & 1 \\
  1 & -1 & -1 \\
  2 & 1 & -1 \\
  \end{bmatrix}
  $$

  Applying the [Sign Rule](https://obsidian-notes-swart.vercel.app/College/Math/LectureTwo.html#sign-rule-for-determinants):

  $$
  adj(A) = \begin{bmatrix}
  -2 & 2 & 1 \\
  -1 & -1 & 1 \\
  2 & -1 & -1 \\
  \end{bmatrix}
  $$

- Transpose the adjoint.
  $$
  \begin{bmatrix}
  -2 & 2 & 1 \\
  -1 & -1 & 1 \\
  2 & -1 & -1 \\
  \end{bmatrix}^T =
  \begin{bmatrix}
  -2 & -1 & 2 \\
  2 & -1 & -1 \\
  1 & 1 & -1 \\
  \end{bmatrix}
  $$
- Substitute into the inverse formula.
  $$
  A^{-1} = \frac{1}{\det(A)} \cdot \text{adj}(A)
  $$
  $$
  A^{-1} = \frac{1}{1} \cdot
  \begin{bmatrix}
  -2 & -1 & 2 \\
  2 & -1 & -1 \\
  1 & 1 & -1 \\
  \end{bmatrix}
  $$
  $$
  A^{-1} = \begin{bmatrix}
  -2 & -1 & 2 \\
  2 & -1 & -1 \\
  1 & 1 & -1 \\
  \end{bmatrix}
  $$

## Inverse and Systems of Equations

### System of Equations and Matrix Representation

A system of linear equations can be represented in matrix form as:

$$
A \cdot X = B
$$

Where:

- $A$ is the coefficient matrix,
- $X$ is the column vector of unknowns, and
- $B$ is the column vector of constants (the right-hand side of the equations).

If $A^{-1}$ (the inverse of matrix $A$) exists, the solution to the system of equations is given by:

$$
X = A^{-1} \cdot B
$$

---

### Theorem: Solution Existence

The $n \times n$ system of equations $A \cdot X = B$ has a solution if $A^{-1}$ exists. The solution is then obtained by calculating:

$$
X = A^{-1} \cdot B
$$

---

### Example 6: Condition for a Solution

Consider the system of equations:

$$
x + y = 1
$$

$$
2x + ky = 0
$$

The coefficient matrix $A$ is:

$$
A = \begin{bmatrix}
1 & 1 \\
2 & k
\end{bmatrix}
$$

The determinant of $A$ is:

$$
|A| = 1(k) - 2(1) = k - 2
$$

For the system to have a solution, $|A| \neq 0$. Setting the determinant equal to zero:

$$
k - 2 = 0 \quad \Rightarrow \quad k = 2
$$

Thus, the system has a solution when $k \neq 2$.

---

### Example 7: Solving a System Using the Inverse of a 2x2 Matrix

Solve the following system of equations for $x$ and $y$:

$$
2x + y = 8
$$

$$
-2x + 3y = 16
$$

The coefficient matrix $A$, unknown vector $X$, and right-hand side vector $B$ are:

$$
A = \begin{bmatrix}
2 & 1 \\
-2 & 3
\end{bmatrix}, \quad X = \begin{bmatrix} x \\ y \end{bmatrix}, \quad B = \begin{bmatrix} 8 \\ 16 \end{bmatrix}
$$

To solve for $X = A^{-1} \cdot B$, first find the inverse of $A$:

$$
A^{-1} = \frac{1}{2(3) - 1(-2)} \cdot \begin{bmatrix}
3 & -1 \\
2 & 2
\end{bmatrix}
$$

$$
A^{-1} = \frac{1}{8} \cdot \begin{bmatrix}
3 & -1 \\
2 & 2
\end{bmatrix}
$$

Now, calculate $X = A^{-1} \cdot B$:

$$
\begin{bmatrix} x \\ y \end{bmatrix}
= \frac{1}{8} \ \cdot \begin{bmatrix}
3 & -1 \\
2 & 2
\end{bmatrix} \ \cdot \begin{bmatrix} 8 \\ 16 \end{bmatrix}
$$

$$
= \frac{1}{8} \cdot \begin{bmatrix}
3(8) + (-1)(16) \\
2(8) + 2(16)
\end{bmatrix}
$$

$$
\frac{1}{8} \ \cdot \begin{bmatrix} 8 \\ 48 \end{bmatrix}
= \begin{bmatrix} 1 \\ 6 \end{bmatrix}
$$

$$
\begin{bmatrix} x \\ y \end{bmatrix}
= \begin{bmatrix} 1 \\ 6 \end{bmatrix}
$$

Thus, $x = 1$ and $y = 6$.

## Cramer's Rule for Solving Systems of Equations

Cramer's Rule provides a method to solve a system of linear equations using determinants. For a system represented by $A \cdot X = B$, where $A$ is an $n \times n$ matrix, the solution is given by the following steps.

### Definitions:

- $\Delta$: The determinant of the coefficient matrix $A$.
- $\Delta_x$: The determinant of the matrix obtained by replacing the first column of $A$ with $B$.
- $\Delta_y$: The determinant of the matrix obtained by replacing the second column of $A$ with $B$.

### Solution for 2 Variables

For a system with two variables $x$ and $y$, the solution is:

$$
x = \frac{\Delta_x}{\Delta}, \quad y = \frac{\Delta_y}{\Delta}
$$

---

### Example 8: Solving a System Using Cramer's Rule

Solve the following system for $x$ and $y$ using Cramer's Rule:

$$
2x + y = 8
$$

$$
-2x + 3y = 16
$$

First, calculate the determinant of the coefficient matrix $A$:

$$
\Delta = \begin{vmatrix}
2 & 1 \\
-2 & 3
\end{vmatrix}
= 2(3) - (-2)(1) = 6 + 2 = 8
$$

Next, calculate $\Delta_x$ by replacing the first column of $A$ with $B$:

$$
\Delta_x = \begin{vmatrix}
8 & 1 \\
16 & 3
\end{vmatrix}
= 8(3) - 16(1) = 24 - 16 = 8
$$

Now, calculate $\Delta_y$ by replacing the second column of $A$ with $B$:

$$
\Delta_y = \begin{vmatrix}
2 & 8 \\
-2 & 16
\end{vmatrix}
= 2(16) - (-2)(8) = 32 + 16 = 48
$$

Finally, solve for $x$ and $y$:

$$
x = \frac{\Delta_x}{\Delta} = \frac{8}{8} = 1
$$

$$
y = \frac{\Delta_y}{\Delta} = \frac{48}{8} = 6
$$

Thus, the solution is $x = 1$ and $y = 6$.

## Key Takeaways

- **Symmetric matrices** are equal to their transposes and must be square, with the elements mirrored across the main diagonal.
- **Skew-symmetric matrices** are the negative of their transposes and must be square, with all diagonal elements equal to zero.
- The determinant of a $2 \times 2$ matrix is calculated as $ad - bc$.
- For a $3 \times 3$ matrix, the determinant can be computed using cofactor expansion along any row or column.
- Determinants have several important properties, such as being invariant under transpose and related to the matrix multiplication.
- A matrix is **invertible** (non-singular) if its determinant is non-zero.
- The inverse of a $2 \times 2$ matrix can be found using the adjoint and determinant.
- The inverse matrix properties allow for operations such as multiplication and transposition of matrices.
- A system of equations can be solved using the inverse of the coefficient matrix if it is invertible.
- Cramer's Rule provides an alternative method for solving systems using determinants.
- Both methods give the same results, and the system has a solution if the determinant of the coefficient matrix is non-zero.

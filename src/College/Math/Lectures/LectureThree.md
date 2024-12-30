---
prev:
  text: "Lecture Two"
  link: "/College/Math/Lectures/LectureTwo"
next:
  text: "Lecture Four"
  link: "/College/Math/Lectures/LectureFour"
---

# Lecture Three: Eigenvalues

## 1. Eigenvalues Using the Determinant Method

Eigenvalues of a square matrix $A$ are values $\lambda$ for which there exists a non-zero vector $v$ (called an eigenvector) such that:

$$
A \cdot v = \lambda \cdot v
$$

This can be rewritten as:

$$
(A - \lambda I) \cdot v = 0
$$

For a non-trivial solution ($v \neq 0$), the matrix $(A - \lambda I)$ must be singular, meaning its determinant is zero:

$$
|A - \lambda I| = 0
$$

This determinant equation gives a polynomial in $\lambda$, called the **characteristic polynomial**. The roots of this polynomial are the eigenvalues of $A$.

---

### **Example for a $2 \times 2$ Matrix:**

Let:

$$
A = \begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
$$

$$
\lambda I_2 = \lambda \begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix} = \begin{bmatrix}
\lambda & 0 \\
0 & \lambda
\end{bmatrix}
$$

Then:

$$
A - \lambda I = \begin{bmatrix}
a - \lambda & b \\
c & d - \lambda
\end{bmatrix}
$$

The determinant is:

$$
|A - \lambda I| = (a - \lambda)(d - \lambda) - bc
$$

Expanding this:

$$
|A - \lambda I| = \lambda^2 - (a + d)\lambda + (ad - bc)
$$

The characteristic polynomial is:

$$
\lambda^2 - \text{trac}(A)\lambda + |A| = 0
$$

where:

- $\text{trac}(A) = a + d$ is the trace (sum of diagonal entries of $A$),
- $|A| = ad - bc$ is the determinant of $A$.

The eigenvalues are found by solving this quadratic equation.

---

### **Example for a $3 \times 3$ Matrix:**

Let:

$$
A = \begin{bmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix}
$$

Then:

$$
A - \lambda I = \begin{bmatrix}
a - \lambda & b & c \\
d & e - \lambda & f \\
g & h & i - \lambda
\end{bmatrix}
$$

## 2. Eigenvalues Using the Cayley-Hamilton Theorem

The Cayley-Hamilton theorem states that **every square matrix satisfies its own characteristic polynomial**.

---

### **For $2 \times 2$ Matrices:**

The characteristic polynomial is:

$$
\lambda^2 - S_1\lambda + S_2 = 0
$$

where:

- $S_1 = \text{trac}(A) = \lambda_1 + \lambda_2$
- $S_2 = |A| = \lambda_1 \lambda_2$

Eigenvalues can be computed directly from the quadratic equation.

---

### **For $3 \times 3$ Matrices:**

For the matrix $A$:

$$
A = \begin{bmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix}
$$

The characteristic polynomial is:

$$
\lambda^3 - S_1\lambda^2 + S_2\lambda - S_3 = 0
$$

where:

- $S_1 = \text{trac}(A) = \lambda_1 + \lambda_2 + \lambda_3$
- $S_2$ is the sum of minors of $A$
- $S_3 = |A| = \lambda_1\lambda_2\lambda_3$

Eigenvalues are obtained by solving the cubic characteristic equation.

## Summary:

- The **determinant method** directly computes eigenvalues from the characteristic polynomial $\|A - \lambda I| = 0$.
- The **Cayley-Hamilton theorem** leverages the characteristic polynomial to establish relationships between $A$ and its eigenvalues, offering additional insights into $A$'s powers and structure.

## Examples:

### **Example 1: Determinant Method for a $2 \times 2$ Matrix**

Let:

$$
A = \begin{bmatrix}
4 & 2 \\
1 & 3
\end{bmatrix}
$$

#### **Step 1: Write $A - \lambda I$:**

$$
A - \lambda I = \begin{bmatrix}
4 - \lambda & 2 \\
1 & 3 - \lambda
\end{bmatrix}
$$

#### **Step 2: Compute the determinant:**

$$
|A - \lambda I| = \begin{vmatrix}
4 - \lambda & 2 \\
1 & 3 - \lambda
\end{vmatrix}
$$

$$
|A - \lambda I| = (4 - \lambda)(3 - \lambda) - (2 \times 1)
$$

$$
|A - \lambda I| = \lambda^2 - 7 \lambda + 12 - 2 = \lambda^2 - 7 \lambda + 10
$$

#### **Step 3: Solve for $\lambda$:**

$$
\lambda^2 - 7 \lambda + 10 = 0
$$

Factoring:

$$
\lambda^2 - 7\lambda + 10 = (\lambda - 2)(\lambda - 5)
$$

Eigenvalues are:

$$
\lambda_1 = 2, \quad \lambda_2 = 5
$$

## **Example 2: Cayley-Hamilton Method for a $2 \times 2$ Matrix**

Let:

$$
A = \begin{bmatrix}
4 & 2 \\
1 & 3
\end{bmatrix}
$$

#### **Step 1: Characteristic Polynomial:**

$$
\lambda^2 - S_1 \lambda + S_2 = 0
$$
$$
S_1 = \text{trac}(A) = 4 + 3 = 7
$$
$$
S_2 = |A| = 12 - 2 = 10
$$
$$
\lambda^2 - 7 \lambda + 10 = 0
$$

#### **Step 2: Use Polynomial to Solve for Eigenvalues:**

Substituting $\lambda = 2$ and $\lambda = 5$ satisfies the equation.

---

### **Example 3: Determinant Method for a $3 \times 3$ Matrix**

Let:

$$
A = \begin{bmatrix}
5 & 2 & 0 \\
2 & 5 & 0 \\
-3 & 4 & 6
\end{bmatrix}
$$

#### **Step 1: Write $A - \lambda I$:**

$$
A - \lambda I = \begin{bmatrix}
5 - \lambda & 2 & 0 \\
2 & 5 - \lambda & 0 \\
-3 & 4 & 6 - \lambda
\end{bmatrix}
$$

#### **Step 2: Compute the determinant:**

$$
|A - \lambda I| = \begin{vmatrix}
5 - \lambda & 2 & 0 \\
2 & 5 - \lambda & 0 \\
-3 & 4 & 6 - \lambda
\end{vmatrix}
$$

Expanding along the third column (remember applying the [Sign rule](LectureTwo.md#sign-rule-for-determinants)):

$$
|A - \lambda I| =
0 \begin{vmatrix}
2 & 5 - \lambda \\
-3 & 4
\end{vmatrix}
-
0 \begin{vmatrix}
5 - \lambda & 2 \\
-3 & 4
\end{vmatrix}
+
(6 - \lambda) \begin{vmatrix}
5 - \lambda & 2 \\
2 & 5 - \lambda
\end{vmatrix}
$$

Compute the subdeterminants:

1. For $0 \begin{vmatrix} 2 & 5 - \lambda \\ -3 & 4 \end{vmatrix}$: skip because it's multiplied by 0.

2. For $0 \begin{vmatrix} 5 - \lambda & 2 \\ -3 & 4 \end{vmatrix}$: skip because it's multiplied by 0.

3. For $\begin{vmatrix} 5 - \lambda & 2 \\ 2 & 5 - \lambda \end{vmatrix}$:

$$
= (5 - \lambda)(5 - \lambda) - 2(2)
$$
$$
= (5 - \lambda)^2 - 4
$$
$$
= \lambda^2 - 10 \lambda + 25 - 4
$$
$$
= \lambda^2 - 10 \lambda + 21
$$

Substitute back:

$$
|A - \lambda I| = 0 - 0 + (6 - \lambda)(\lambda^2 - 10 \lambda + 21)
$$

Simplify:

$$
|A - \lambda I| = (6 - \lambda)(\lambda^2 - 10 \lambda + 21)
$$
$$
= - \lambda^3 + 16 \lambda^2 - 81 \lambda + 126
$$

#### **Step 3: Solve for $\lambda$:**

Solve the cubic $- \lambda^3 + 16 \lambda^2 - 81 \lambda + 126 = 0$ to find the eigenvalues (`mode` + `5` + `4` on calculator):

$$
\lambda_1 = 3, \quad \lambda_2 = 7, \quad \lambda_3 = 6
$$

---

### **Example 4: Cayley-Hamilton Method for a $3 \times 3$ Matrix**

Let:

$$
A = \begin{bmatrix}
5 & 2 & 0 \\
2 & 5 & 0 \\
-3 & 4 & 6
\end{bmatrix}
$$

#### **Step 1: Characteristic Polynomial:**

$$
\lambda^3 - S_1 \lambda^2 + S_2 \lambda - S_3 = 0
$$
$$
S_1 = \text{trac}(A) = 5 + 5 + 6 = 16
$$
$$
S_2 = |A| =
\begin{vmatrix}
5 & 0 \\
4 & 6
\end{vmatrix} +
\begin{vmatrix}
5 & 0 \\
-3 & 6
\end{vmatrix} +
\begin{vmatrix}
5 & 2 \\
2 & 5
\end{vmatrix}
= 81
$$
$$
S_3 = |A| = 126
$$
$$
\lambda^3 - 16 \lambda^2 + 81 \lambda - 126 = 0
$$

#### **Step 2: Solve for Eigenvalues:**

Solve the cubic $\lambda^3 - 16 \lambda^2 + 81 \lambda - 126 = 0$ to find the eigenvalues (`mode` + `5` + `4` on calculator):

$$
\lambda_1 = 3, \quad \lambda_2 = 7, \quad \lambda_3 = 6
$$

---
title: Model Exam
prev:
  text: "Models"
  link: "/College/Math/Models/index"
next: false
---

# Model Exam

## Question 1

**Given:**

$$
A = \begin{bmatrix}
6 & -2 \\
7 & 5
\end{bmatrix}, \quad
B = \begin{bmatrix}
3 & 0 \\
7 & 5
\end{bmatrix}, \quad
C = \begin{bmatrix}
2 & 1 \\
-1 & 3
\end{bmatrix} 
$$

**Find:** 

### 1) $\space A+B$

$$
\begin{gather}
A+B &= \begin{bmatrix}
6 & -2 \\
7 & 5
\end{bmatrix} +
\begin{bmatrix}
3 & 0 \\
7 & 5
\end{bmatrix} 
\\\\
&= \begin{bmatrix}
6+3 & -2+0 \\
7+7 & 5+5
\end{bmatrix} 
\\\\
&= \begin{bmatrix}
9 & -2 \\
14 & 10
\end{bmatrix}
\end{gather}
$$


---

### 2) $\space 5A-B$

$$
\begin{gather}
5A = \begin{bmatrix}
5(3) & 5(0) \\
7(7) & 5(5)
\end{bmatrix}
= \begin{bmatrix}
30 & -10 \\
35 & 25
\end{bmatrix}
\\\\
5A-B = \begin{bmatrix}
30 - 3 & -10 - 0 \\
35-7 & 25-5
\end{bmatrix}
\\\\
5A - B = \begin{bmatrix}
27 & -10 \\
28 & 20
\end{bmatrix}
\end{gather}
$$

---

### 3) $\space B^T$

$$
B = \begin{bmatrix}
3 & 0 \\
7 & 5
\end{bmatrix}
\Rightarrow
\space B^T = \begin{bmatrix}
3 & 7 \\
0 & 5
\end{bmatrix}
$$

---

### 4) $\space AB$

$$
\begin{gather}
AB = \begin{bmatrix}
6 & -2 \\
7 & 5
\end{bmatrix} \begin{bmatrix}
3 & 0 \\
7 & 5
\end{bmatrix}
\\\\
= \begin{bmatrix}
6(3) -2(7) & 6(0) -2(5) \\
7(3) + 5(7) & 7(0) + 5(5)
\end{bmatrix}
\\\\
= \begin{bmatrix}
18-14 & 0-10 \\
21+35 & 0+25
\end{bmatrix}
\\\\
AB = \begin{bmatrix}
4 & -10 \\
56 & 25
\end{bmatrix}
\end{gather}
$$

---

### 5) $\space (BC)^T$

$$
\begin{gather}
BC = \begin{bmatrix}
3 & 0 \\
7 & 5
\end{bmatrix}\begin{bmatrix}
2 & 1 \\
-1 & 3
\end{bmatrix}
\\\\
BC = \begin{bmatrix}
3(2) + 0(-1) & 3(1) + 0(3) \\
7(2) + 5(-1) & 7(1) + 5(3)
\end{bmatrix}
\\\\
BC = \begin{bmatrix}
6+0 & 3+0 \\
14-5 & 7+15
\end{bmatrix} 
\\\\
BC = \begin{bmatrix}
6 & 9 \\
3 & 22
\end{bmatrix}
\end{gather}
$$

## Question 2

**Given:**

$$
A = \begin{bmatrix}
4 & 2 \\
8 & 5
\end{bmatrix}, \quad
C = \begin{bmatrix}
1 & 2 & -1 \\
3 & 0 & 4 \\
1 & 2 & -1
\end{bmatrix} 
$$

**Find:** 

### 1) $\space|A|$

$$
|A| = 4(5) - 2(8) = 20 - 16 = 4
$$

### 2) $\space A^{-1}$
$$
\begin{gather}
A^{-1} = \frac{1}{|A|} * adj(A)
\\\\
adj(A) = \begin{bmatrix}
5 & -2 \\
-8 & 4
\end{bmatrix}
\\\\
A^{-1} = \frac{1}{4} * \begin{bmatrix}
5 & -2 \\
-8 & 4
\end{bmatrix}
\end{gather}
$$

---

### 3) $\space |C|$

$$
\begin{gather}
|C| = 1 \begin{vmatrix}
0 & 4 \\
2 & 1
\end{vmatrix} 
- 2 \begin{vmatrix}
3 & 4 \\
1 & 1
\end{vmatrix} 
-1 \begin{vmatrix}
3 & 0 \\
1 & 2
\end{vmatrix}
\\\\
|C| = 1(0 - 8) - 2(3-4) - 1(6-0)
\\\\
|C| = -8 + 2 - 6 = -12
\end{gather}
$$

---

#### Bonus questions: find $C^{-1}$

$$
\begin{gather}
C^{-1} = \frac{1}{|C|} * adj(C), \quad
|C| = -12
\\\\
adj(C) = \begin{bmatrix}
0(1)-2(4) & 3(1)-4(1) & 3(2)-0(1) \\
2(1)+1(2) & 1(1)+1(1) & 1(2)-2(1) \\
2(4)+1(0) & 1(4)+1(3) & 1(0)-2(3) \\
\end{bmatrix}^T
\\\\
adj(C) = \begin{bmatrix}
-8 & -1 & 6\\
4 & 2 & 0 \\
8 & 7 & -6
\end{bmatrix}^T
\end{gather}
$$

Applying the [Sign rule](../Lectures/LectureTwo.md#sign-rule-for-determinants):

$$
\begin{gather}
adj(C) = \begin{bmatrix}
-8 & 1 & 6 \\
-4 & 2 & 0 \\
8 & -7 & -6
\end{bmatrix}^T
\\\\
adj(C) = \begin{bmatrix}
-8 & -4 & 8 \\
1 & 2 & -7 \\
6 & 0 & -6
\end{bmatrix}
\\\\
C^{-1} = \frac{1}{-12} 
\begin{bmatrix}
-8 & -4 & 8 \\
1 & 2 & -7 \\
6 & 0 & -6
\end{bmatrix}
\\\\
C^{-1} = \frac{1}{12} 
\begin{bmatrix}
8 & 4 & -8 \\
-1 & -2 & 7 \\
-6 & 0 & 6
\end{bmatrix}
\end{gather}
$$
## Question 3

**If:**
$$
\begin{gather}
4x + 2y = 8 \\\
8x + 5y = 18
\end{gather}
$$


**Solve the previous system using:** 
### 1. [Cramer's Method](../Lectures/LectureTwo.md#cramer-s-rule-for-solving-systems-of-equations)

$$
\begin{gather}
\Delta = \begin{vmatrix}
4 & 2 \\
8 & 5
\end{vmatrix} 
= 4(5) - 2(8) 
\\\\
\Delta = 20 - 16 = 4
\\\\
\Delta_x = \begin{vmatrix}
8 & 2 \\
18 & 5
\end{vmatrix} 
= 8(5) - 2(18) 
\\\\
\Delta_x = 40 - 36 = 4
\\\\
\Delta_y = \begin{vmatrix}
4 & 8 \\
8 & 18
\end{vmatrix} 
= 4(18) - 8(8) 
\\\\
\Delta_y = 72 - 64 = 8
\\\\
\Delta = 4, \quad
\Delta_x = 4, \quad
\Delta_y = 8
\\\\
x = \frac{\Delta_x}{\Delta} = \frac{4}{4} = 1
\\\\
y = \frac{\Delta_y}{\Delta} = \frac{8}{4} = 2
\\\\
x = 1, \quad y = 2
\end{gather}
$$

---

### 2. [Inverse Matrix Method](../Lectures/LectureTwo.md#inverse-and-systems-of-equations)

$$
\begin{gather}
AX=B, \space \therefore \space X = A^{-1}B
\\\\
A = \begin{bmatrix}
4 & 2 \\
8 & 5
\end{bmatrix}, \quad
B = \begin{bmatrix} 8 \\ 18 \end{bmatrix}
\\\\
A^{-1} = \frac{1}{|A|} \space \cdot \space adj(A)
\\\\
|A| = 4(5)-2(8) = 20 - 16 = 4 \\\\
A^{-1} = \frac{1}{4} \begin{bmatrix}
5 & -2 \\
-8 & 4
\end{bmatrix}
\\\\
A^{-1} \space \cdot  \space B = 
\frac{1}{4} \begin{bmatrix}
5(8) - 2(18) \\
-8(8) + 4(18)
\end{bmatrix}
\\\\
X = \frac{1}{4} \begin{bmatrix}
4 \\ 8
\end{bmatrix} = \begin{bmatrix}
1 \\ 2
\end{bmatrix} = \begin{bmatrix}
x \\ y
\end{bmatrix}
\\\\
x = 1, \quad y = 2
\end{gather}
$$



## Question 4

### 1. Find the area of $\triangle \space abc$ where $a = (1,4), \space b = (2, 5), \space c = (1, 2)$

$$
\begin{gather}
\text{area of} \space \triangle \space abc
= \frac{1}{2} \space
\begin{vmatrix}
1 & 4 & 1 \\
2 & 5 & 1 \\
1 & 2 & 1
\end{vmatrix}
\\\\
= 1 \begin{vmatrix}
5 & 1 \\
2 & 1
\end{vmatrix}
-4 \begin{vmatrix}
2 & 1 \\
1 & 1
\end{vmatrix}
+ 1 \begin{vmatrix}
2 & 5 \\
1 & 2
\end{vmatrix}
\\\\
= \frac{1}{2} \space \cdot \space 1(5-2) - 4(2-1) + 1(4 - 5) \\ \\
= \frac{1}{2} \space \cdot \space |-2| \space = 1 \space cm^2
\end{gather}
$$

---

### 2. Find the Value of $K$ That Makes the Volume of the Parallelepiped Equal to Zero

**Given:**

$$
\begin{gather}
\vec{u} = \begin{pmatrix}
1 \\ 2 \\ 5
\end{pmatrix}, \quad
\vec{v} = \begin{pmatrix}
0 \\ 1 \\ k
\end{pmatrix}, \quad
\vec{w} = \begin{pmatrix}
2 \\ 1 \\ 3
\end{pmatrix}
\\\\\\
Volume = \begin{vmatrix}
1 & 0 & 2\\ 
2 & 1 & 1\\ 
5 & k & 3
\end{vmatrix} = 0
\\\\
= 1(3-k) - 0(6-5) + 2(2k-5)
\\\\
= 3-k + 4k - 10 
\\\\ 
= 3k - 7 = 0, \quad 3k = 7
\\\\
k = \frac{7}{3} \approx2.33 \space cm^3
\end{gather}
$$


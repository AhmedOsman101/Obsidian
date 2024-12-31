---
prev:
  text: "Models"
  link: "/College/Math/Models/index"
next: false
  # text: "Lecture Two"
  # link: "/College/Math/Lectures/LectureTwo"
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

1$)$ $A+B$

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

2$)$  $5A-B$

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

3$)$ $B^T$

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

4$)$ $AB$

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

5$)$ $(BC)^T$

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

1, 3) $|A|$ and $A^{-1}$

$$
\begin{gather}
|A| = 4(5) - 2(8) = 20 - 16 = 4
\\\\
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


2) $C^{-1}$, since the first row is equal to the third row then the determinant is zero and the matrix $C$ is [singular](../Lectures/LectureTwo.md#theorem-singularity) (Doesn't have an inverse)

$$
\begin{gather}
C^{-1} = \frac{1}{|C|} * adj(C)
\\\\
|C| = 1 \begin{vmatrix}
0 & 4 \\
2 & -1
\end{vmatrix} 
- 2 \begin{vmatrix}
3 & 4 \\
1 & -1
\end{vmatrix} 
-1 \begin{vmatrix}
3 & 0 \\
1 & 2
\end{vmatrix}
\\\\
|C| = 1(0 - 8) - 2(-3-4) - 1(6-0)
\\\\
|C| = -8 + 14 - 6 = 0
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

$I$) $B^T$

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

$IV$) $AB$

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

$V$) $(BC)^T$

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


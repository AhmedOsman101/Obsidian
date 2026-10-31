---
title: Task 2
prev:
  text: "Task 1"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Tasks/Task-1"
next: false
---

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20241807                 |
| Section | 1                        |

# Computer Graphics - Task 2: Vectors and Transformations Question Set

> [!NOTE] Same questions as Sheet 2
> This task is the **homework copy** of [Sheet 2](/College/yearThree/firstTerm/ComputerGraphics/Sheets/Sheet-2): 20 MCQs, 15 true or false, and 15 short problems, with identical wording. The full solutions are on the sheet page. This page keeps a complete answer key and the arithmetic for every numeric item, so the task can be marked on its own.

The paper header says "Computer Graphics - Lecture 2", which matches the topic: vectors, 2D transformations, and Bresenham's line algorithm.

## Part A: MCQ Answer Key

| #   | Ans | Tested point                                |
| --- | --- | ------------------------------------------- |
| 1   | B   | A vector is direction and magnitude         |
| 2   | B   | 2D vector is $(V_x,V_y)$                    |
| 3   | C   | 3D vector has 3 components                  |
| 4   | B   | $\sqrt{5^2+12^2}=13$                        |
| 5   | B   | $\sqrt{1+16+64}=9$                          |
| 6   | B   | $\sqrt{64+225}=17$                          |
| 7   | B   | $\theta=\tan^{-1}(V_y/V_x)$                 |
| 8   | B   | $\tan^{-1}(5/5)=45^\circ$                   |
| 9   | B   | Unit vector has magnitude 1                 |
| 10  | C   | Normalize by dividing by the magnitude      |
| 11  | A   | $(6+3,\;1+5)=(9,6)$                         |
| 12  | B   | $(9-4,\;7-2)=(5,5)$                         |
| 13  | B   | $3(3,7)=(9,21)$                             |
| 14  | B   | Dot product returns a scalar                |
| 15  | C   | Perpendicular vectors have dot product zero |
| 16  | B   | Cross product returns a vector              |
| 17  | A   | Cross product gives surface normals         |
| 18  | A   | $(4+3,\;7-2)=(7,5)$                         |
| 19  | B   | $(3\cdot2,\;5\cdot4)=(6,20)$                |
| 20  | B   | Negative $P_k$ means the E step             |

## Part B: True or False

| #   | Ans   | Correction when false                                      |
| --- | ----- | ---------------------------------------------------------- |
| 21  | True  | Movement has direction and length, so a vector fits        |
| 22  | False | A 3D vector has three components, not two                  |
| 23  | True  | $\sqrt{64+225}=17$                                         |
| 24  | True  | That is the definition of a unit vector                    |
| 25  | True  | Dividing by the magnitude keeps direction, sets length 1   |
| 26  | True  | Addition works component by component                      |
| 27  | True  | $B-A$ points from $A$ to $B$                               |
| 28  | False | The dot product is a scalar, the cross product is a vector |
| 29  | True  | $\cos 90^\circ=0$                                          |
| 30  | True  | That is the defining property of the cross product         |
| 31  | True  | Translation changes position only                          |
| 32  | True  | Scaling multiplies the coordinates                         |
| 33  | False | Uniform scaling uses the same factor on both axes          |
| 34  | True  | Reflection produces a mirror image                         |
| 35  | True  | The decision parameter chooses E or NE                     |

## Part C: Worked Solutions

### Vector Magnitude

**36.** $V=(9,12)$

$$|V|=\sqrt{9^2+12^2}=\sqrt{81+144}=\sqrt{225}=15$$

**37.** $V=(3,4,12)$

$$|V|=\sqrt{3^2+4^2+12^2}=\sqrt{9+16+144}=\sqrt{169}=13$$

**38.** $V=(7,24)$

$$|V|=\sqrt{7^2+24^2}=\sqrt{49+576}=\sqrt{625}=25$$

### Direction of 2D Vectors

**39.** $V=(4,4)$

$$\theta=\tan^{-1}\left(\frac{4}{4}\right)=\tan^{-1}(1)=45^\circ$$

**40.** $V=(6,2)$

$$\theta=\tan^{-1}\left(\frac{2}{6}\right)=\tan^{-1}(0.3333)\approx18.43^\circ$$

**41.** $V_x=5$, $V_y=12$

$$|V|=\sqrt{25+144}=13, \qquad \theta=\tan^{-1}\left(\frac{12}{5}\right)=\tan^{-1}(2.4)\approx67.38^\circ$$

### Direction of 3D Vectors

**42.** $V=(2,3,6)$ with $|V|=\sqrt{4+9+36}=7$

$$\alpha=\cos^{-1}\left(\frac{2}{7}\right)\approx73.40^\circ, \quad \beta=\cos^{-1}\left(\frac{3}{7}\right)\approx64.62^\circ, \quad \gamma=\cos^{-1}\left(\frac{6}{7}\right)\approx31.00^\circ$$

**43.** $V=(4,4,7)$ with $|V|=\sqrt{16+16+49}=\sqrt{81}=9$

$$\cos\alpha=\frac{4}{9}, \qquad \cos\beta=\frac{4}{9}, \qquad \cos\gamma=\frac{7}{9}$$

$$\alpha\approx63.61^\circ, \quad \beta\approx63.61^\circ, \quad \gamma\approx38.94^\circ$$

> [!NOTE] The identity check
> $\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$ for every direction. Here $\frac{16}{81}+\frac{16}{81}+\frac{49}{81}=\frac{81}{81}=1$, so the three angles are consistent.

### Unit Vector

**44.** $V=(5,12)$ with $|V|=13$

$$\hat{V}=\frac{V}{|V|}=\left(\frac{5}{13},\;\frac{12}{13}\right)\approx(0.385,\;0.923)$$

**45.** Unit vectors in graphics, especially in lighting.

Lighting uses directions, not lengths. The Lambert term is $\mathbf{N}\cdot\mathbf{L}$, where $\mathbf{N}$ is the surface normal and $\mathbf{L}$ points from the surface to the light. When both are unit vectors the dot product equals $\cos\theta$ directly, so the shader skips the division by the two magnitudes and the result is already in $[-1,1]$. Normalizing also repairs normals after a non-uniform scale, which changes their length.

### Vector Addition and Subtraction

**46.** $A=(5,8)$, $B=(2,-3)$

$$A+B=(5+2,\;8-3)=(7,5)$$

**47.** $A=(10,4)$, $B=(3,9)$

$$A-B=(10-3,\;4-9)=(7,-5)$$

**48.** $A=(2,5,4)$, $B=(6,1,3)$

$$A+B=(2+6,\;5+1,\;4+3)=(8,6,7)$$

### Transformations

**49.** $P=(5,4)$, translated by $T=(-,26)$.

The printed vector is missing a value, so only the digits 2 and 6 are known. The usual reading is $T=(-2,6)$:

$$P'=(5+(-2),\;4+6)=(3,10)$$

> [!WARNING] Source typo
> The paper prints $T=(-,26)$, which is not a valid vector. If the intended vector was $T=(-2,6)$ the answer is $(3,10)$. If it was $T=(-,-26)$ the answer would be $(3,-22)$. State the reading you use in the answer.

### Bresenham's Line Algorithm

**50.** Line from $(12,7)$ to $(22,14)$.

| Quantity              | Calculation                | Value |
| --------------------- | -------------------------- | ----- |
| $\Delta X$            | $22-12$                    | 10    |
| $\Delta Y$            | $14-7$                     | 7     |
| $m$                   | $\Delta Y/\Delta X=7/10$   | 0.7   |
| $2\Delta Y$           | $2\times7$                 | 14    |
| $2\Delta Y-2\Delta X$ | $14-20$                    | $-6$  |
| $P_0$                 | $2\Delta Y-\Delta X=14-10$ | 4     |

The slope satisfies $0<m<1$, so only the E and NE steps are possible. A negative $P_k$ gives E, otherwise NE.

| $k$ | $P_k$ | Step | Pixel plotted | $P_{k+1}$    |
| --- | ----- | ---- | ------------- | ------------ |
| 0   | 4     | NE   | (13, 8)       | $4+14-20=-2$ |
| 1   | -2    | E    | (14, 8)       | $-2+14=12$   |
| 2   | 12    | NE   | (15, 9)       | $12+14-20=6$ |

**Answer.** $\Delta X=10$, $\Delta Y=7$, $m=0.7$, $P_0=4$, and the first three next pixels are $(13,8)$, $(14,8)$, $(15,9)$.

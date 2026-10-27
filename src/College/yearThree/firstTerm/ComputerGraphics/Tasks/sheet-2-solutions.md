| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20241807                 |
| Section | 1                        |

# Sheet 2 solutions: vectors, transformations, and Bresenham's line algorithm

## Part A: multiple choice

1. **B**. Direction and magnitude.
2. **B**. $V=(V_x,V_y)$.
3. **C**. 3 components.
4. **B**. 13. $\sqrt{5^2+12^2}=\sqrt{25+144}=\sqrt{169}=13$.
5. **B**. 9. $\sqrt{1^2+4^2+8^2}=\sqrt{1+16+64}=\sqrt{81}=9$. Option C is the same number written as a root, but B states the evaluated magnitude.
6. **B**. 17. $\sqrt{8^2+15^2}=\sqrt{64+225}=\sqrt{289}=17$.
7. **B**. $\tan^{-1}(V_y/V_x)$, since the angle is measured from the X axis.
8. **B**. $45^\circ$. $\theta=\tan^{-1}(5/5)=\tan^{-1}(1)=45^\circ$.
9. **B**. Unit vector.
10. **C**. $\dfrac{V}{|V|}$. Normalizing means dividing the vector by its own magnitude, which keeps the direction and gives length 1.
11. **A**. $(9,6)$. $(6+3,\;1+5)=(9,6)$.
12. **B**. $(5,5)$. $(9-4,\;7-2)=(5,5)$.
13. **B**. $(9,21)$. $3(3,7)=(9,21)$.
14. **B**. A scalar.
15. **C**. 0. $\mathbf{A}\cdot\mathbf{B}=0$ when the vectors are perpendicular.
16. **B**. A vector.
17. **A**. Surface normals. The cross product of two edge vectors points out of the surface.
18. **A**. $(7,5)$. $(4+3,\;7+(-2))=(7,5)$.
19. **B**. $(6,20)$. $(3\cdot 2,\;5\cdot 4)=(6,20)$.
20. **B**. E. A negative $P_k$ means the midpoint of the NE candidate lies above the true line, so the E pixel is closer and only $x$ advances.

## Part B: true or false

21. A vector can represent movement in a particular direction. True.
22. A 3D vector has only two components. False. A 3D vector has three components, $(V_x,V_y,V_z)$.
23. The magnitude of $V=(8,15)$ is 17. True.
24. A unit vector has magnitude equal to 1. True.
25. Normalization changes a vector's magnitude to 1 while preserving its direction. True.
26. Vector addition is performed component by component. True.
27. Vector subtraction can be used to find the direction from one point to another. True.
28. The Dot Product always produces a vector. False. The dot product produces a scalar, not a vector.
29. If two vectors are perpendicular, their Dot Product is zero. True.
30. The Cross Product of two vectors is perpendicular to both input vectors. True.
31. Translation changes the position of an object without changing its size. True.
32. Scaling can change the size of an object. True.
33. Uniform scaling uses different scale factors for X and Y. False. Uniform scaling uses the same factor for X and Y.
34. Reflection can be used to create a mirror image. True.
35. Bresenham's algorithm uses a decision parameter to select the next pixel. True.

## Part C: short answers and problems

36. Magnitude of $V=(9,12)$.
    $$|V|=\sqrt{9^2+12^2}=\sqrt{81+144}=\sqrt{225}=15$$

37. Magnitude of $V=(3,4,12)$.
    $$|V|=\sqrt{3^2+4^2+12^2}=\sqrt{9+16+144}=\sqrt{169}=13$$

38. Magnitude of $V=(7,24)$.
    $$|V|=\sqrt{7^2+24^2}=\sqrt{49+576}=\sqrt{625}=25$$

39. Direction angle of $V=(4,4)$.
    $$\theta=\tan^{-1}\frac{V_y}{V_x}=\tan^{-1}\frac{4}{4}=\tan^{-1}(1)=45^\circ$$

40. Direction angle of $V=(6,2)$.
    $$\theta=\tan^{-1}\frac{V_y}{V_x}=\tan^{-1}\frac{2}{6}=\tan^{-1}\frac{1}{3}\approx 18.4^\circ$$

41. $V_x=5$, $V_y=12$. Find the magnitude and the direction angle.
    $$|V|=\sqrt{5^2+12^2}=\sqrt{25+144}=\sqrt{169}=13$$
    $$\theta=\tan^{-1}\frac{12}{5}=\tan^{-1}(2.4)\approx 67.4^\circ$$

42. Direction angles of $V=(2,3,6)$ with the X, Y, and Z axes.
    First the magnitude:
    $$|V|=\sqrt{2^2+3^2+6^2}=\sqrt{4+9+36}=\sqrt{49}=7$$
    Then the three direction angles:
    $$\alpha=\cos^{-1}\frac{V_x}{|V|}=\cos^{-1}\frac{2}{7}\approx 73.4^\circ$$
    $$\beta=\cos^{-1}\frac{V_y}{|V|}=\cos^{-1}\frac{3}{7}\approx 64.6^\circ$$
    $$\gamma=\cos^{-1}\frac{V_z}{|V|}=\cos^{-1}\frac{6}{7}\approx 31.0^\circ$$

43. Direction cosines of $V=(4,4,7)$.
    $$|V|=\sqrt{4^2+4^2+7^2}=\sqrt{16+16+49}=\sqrt{81}=9$$
    $$\cos\alpha=\frac{V_x}{|V|}=\frac{4}{9},\qquad \cos\beta=\frac{V_y}{|V|}=\frac{4}{9},\qquad \cos\gamma=\frac{V_z}{|V|}=\frac{7}{9}$$

44. Unit vector of $V=(5,12)$.
    $$|V|=\sqrt{5^2+12^2}=\sqrt{25+144}=\sqrt{169}=13$$
    $$\hat{V}=\frac{V}{|V|}=\left(\frac{5}{13},\frac{12}{13}\right)\approx(0.385,\;0.923)$$

45. Why unit vectors are useful in Computer Graphics, especially in lighting.
    Lighting works with directions, not lengths. The Lambert brightness term is $\mathbf{N}\cdot\mathbf{L}$, where $\mathbf{N}$ is the surface normal and $\mathbf{L}$ points from the surface toward the light. When both are unit vectors, the dot product equals $\cos\theta$ directly, so the shader skips the division by the magnitudes and the brightness always falls in $[-1,1]$. Unit vectors also keep normals correct when an object is scaled, because scaling changes lengths and normalization restores them to 1.

46. $A=(5,8)$, $B=(2,-3)$. Find $A+B$.
    $$A+B=(5+2,\;8+(-3))=(7,5)$$

47. $A=(10,4)$, $B=(3,9)$. Find $A-B$.
    $$A-B=(10-3,\;4-9)=(7,-5)$$

48. $A=(2,5,4)$, $B=(6,1,3)$. Find $A+B$.
    $$A+B=(2+6,\;5+1,\;4+3)=(8,6,7)$$

49. The sheet prints the translation as $T=(-,26)$, a typo in the source. The digits present are 2 and 6, so I read it as $T=(-2,6)$. New point:
    $$P'=(5+(-2),\;4+6)=(3,10)$$

50. Line from $(12,7)$ to $(22,14)$.
51. $\Delta X=22-12=10$
52. $\Delta Y=14-7=7$
53. $m=\dfrac{\Delta Y}{\Delta X}=\dfrac{7}{10}=0.7$, and $0<m<1$, so the standard case applies.
54. $P_0=2\Delta Y-\Delta X=2(7)-10=14-10=4$
55. For $0<m<1$: if $P_k\ge 0$ the step is NE and $P_{k+1}=P_k+2\Delta Y-2\Delta X$; if $P_k<0$ the step is E and $P_{k+1}=P_k+2\Delta Y$. Starting pixel is $(12,7)$.

| $k$ | $P_k$ | step | pixel plotted | $P_{k+1}$    |
| --- | ----- | ---- | ------------- | ------------ |
| 0   | $4$   | NE   | $(13,8)$      | $4+14-20=-2$ |
| 1   | $-2$  | E    | $(14,8)$      | $-2+14=12$   |
| 2   | $12$  | NE   | $(15,9)$      | $12+14-20=6$ |

The first three next pixels are $(13,8)$, $(14,8)$, $(15,9)$.

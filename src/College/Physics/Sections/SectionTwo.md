---
prev:
  text: "Section One"
  link: "/College/Physics/Sections/SectionOne"
next:
  false
  # text: 'Section Three'
  # link: '/College/Physics/Sections/SectionThree'
---

# Physics Section 2

## Vector Operations

Vectors are quantities that have both magnitude and direction. Operations on vectors are essential for solving problems in physics, mathematics, and engineering, especially when dealing with quantities like force, velocity, and displacement. Below are key vector operations and examples.

### Vector Addition

To add two vectors, we combine their magnitudes and directions using vector addition methods, such as the parallelogram rule or component method. Here's an example:

#### Example 1:

- **Vector A** represents 5.0 m of displacement east.
- **Vector B** represents 10.0 m of displacement north.

To find the resultant vector $R$, we use the Pythagorean theorem and trigonometry:

$$
R = \sqrt{A^2 + B^2} = \sqrt{5^2 + 10^2} = \sqrt{25 + 100} = 11 \, \text{m}
$$

The direction of the resultant vector is given by:

$$
\tan \theta = \frac{B}{A} = \frac{10}{5} = 2
$$

Thus,

$$
\theta = \tan^{-1}(2) \approx 63^\circ
$$

The resultant vector $R$ has a magnitude of 11 m and a direction of $63^\circ$ north of east.

---

### Finding Components of a Vector

To resolve a vector into its components, we use trigonometry. For a vector at an angle $\theta$ from the x-axis, the x and y components are calculated as follows:

#### Example 2:

For a displacement vector with a magnitude of 30.0 m at a 23° angle from the x-axis:

- **x-component**:

  $$
   x\_{\text{comp}} = 30 \cos(23^\circ) \approx 28 \, \text{m}
  $$

- **y-component**:
  $$
   y\_{\text{comp}} = 30 \sin(23^\circ) \approx 12 \, \text{m}
  $$

---

#### Example 3:

For a vector $A = 10 \, \text{m}$ at $60^\circ$ from the x-axis:

- The x-component is the adjacent side of the triangle:

  $$
   A_x = 10 \cos(60^\circ) = 5 \, \text{m}
  $$

- The y-component is the opposite side of the triangle:
  $$
   A_y = 10 \sin(60^\circ) \approx 8.66 \, \text{m}
  $$

---

### Vector Addition in a Complex Scenario

#### Example 4:

An airplane follows a path described by three displacement vectors:

1. It flies 175 km at a 30° north of east to City A.
2. Then, it flies 153 km at a 20° west of north to City B.
3. Finally, it flies 195 km due west to City C.

To find the location of City C relative to the origin, we break each vector into x and y components and then sum them. The calculations involve resolving each displacement into components and then adding them as vectors.

---

### Dot Product and Cross Product of Vectors

#### Example 5:

Given two vectors $\mathbf{A} = 2\hat{i} + 4\hat{j} + 5\hat{k}$ and $\mathbf{B} = \hat{i} + 3\hat{j} + 6\hat{k}$, calculate their dot product, cross product, and the angle between them.

1. **Dot Product**: The dot product is given by:

   $$
    \mathbf{A} \cdot \mathbf{B} = (2)(1) + (4)(3) + (5)(6) = 2 + 12 + 30 = 44
   $$

2. **Cross Product**: The cross product is computed using the determinant of a matrix formed by the unit vectors and components of $\mathbf{A}$ and $\mathbf{B}$:

   $$
    \mathbf{A} \times \mathbf{B} = \begin{vmatrix}
    \hat{i} & \hat{j} & \hat{k} \\
    2 & 4 & 5 \\
    1 & 3 & 6
    \end{vmatrix}
   $$

   This expands to:

   $$
    \mathbf{A} \times \mathbf{B} = \hat{i} \left( \begin{vmatrix} 4 & 5 \\ 3 & 6 \end{vmatrix} \right) - \hat{j} \left( \begin{vmatrix} 2 & 5 \\ 1 & 6 \end{vmatrix} \right) + \hat{k} \left( \begin{vmatrix} 2 & 4 \\ 1 & 3 \end{vmatrix} \right)
   $$

   Simplifying:

   $$
    \mathbf{A} \times \mathbf{B} = \hat{i}(24 - 15) - \hat{j}(12 - 5) + \hat{k}(6 - 4)
   $$

   $$
    \mathbf{A} \times \mathbf{B} = 9\hat{i} - 7\hat{j} + 2\hat{k}
   $$

3. **Angle Between Vectors**: Using the dot product formula:
   $$
    \mathbf{A} \cdot \mathbf{B} = |\mathbf{A}| |\mathbf{B}| \cos \theta
   $$
   First, compute the magnitudes of $\mathbf{A}$ and $\mathbf{B}$:
   $$
    |\mathbf{A}| = \sqrt{(2^2 + 4^2 + 5^2)} = 7 \, \text{m}
   $$
   $$
    |\mathbf{B}| = \sqrt{(1^2 + 3^2 + 6^2)} = 6.2 \, \text{m}
   $$
   Now, calculate $\cos \theta$:
   $$
    \cos \theta = \frac{\mathbf{A} \cdot \mathbf{B}}{|\mathbf{A}| |\mathbf{B}|} = \frac{44}{7 \times 6.2} \approx -0.32
   $$
   Thus:
   $$
    \theta = \cos^{-1}(-0.32) \approx 108.5^\circ
   $$

---

These operations and examples are fundamental in solving problems related to vectors in various fields, including physics and engineering.

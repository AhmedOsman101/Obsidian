---
prev:
  text: "Sections"
  link: "/College/Physics/Sections/index"
next:
  text: "Section Two"
  link: "/College/Physics/Sections/SectionTwo"
---

# Physics Section 1

## Physics and Physical Quantities

### Definition of Physics

**Physics** is the branch of science that studies matter, energy, and the fundamental forces of nature. It seeks to understand how the universe behaves, from the smallest particles to the largest structures, such as galaxies. Physics plays a crucial role in explaining natural phenomena, technological development, and scientific research.

### Definition of Physical Quantity

A **physical quantity** is any property of a material or system that can be measured or calculated. Each physical quantity consists of two parts: a magnitude and a unit of measurement. Physical quantities are essential for describing and predicting the behavior of natural phenomena.

---

## Types of Physical Quantities

### Fundamental and Derived Quantities

1. **Fundamental (Base) Quantities**: These are the basic building blocks that cannot be expressed in terms of other quantities.

   - **Examples**: Mass, length, and time.

2. **Derived Quantities**: Quantities derived from the fundamental ones through mathematical relationships.
   - **Examples**: Velocity and acceleration.

### Scalar and Vector Quantities

1. **Scalar Quantities**: Quantities that have only magnitude.

   - **Examples**: Mass, speed, energy, time, and temperature.

2. **Vector Quantities**: Quantities that have both magnitude and direction.
   - **Examples**: Force, velocity, acceleration, and displacement.

---

## Systems of Units

In physics, quantities are measured in standardized units, ensuring consistency and comparability. The International System of Units (SI) is widely used, including units like meters for length, kilograms for mass, and seconds for time.

---

## Dimensional Analysis

**Dimensional analysis** is a mathematical tool used to analyze relationships between different physical quantities by considering their dimensions, such as mass, length, and time. It allows us to check the correctness of equations and derive units of derived quantities.

---

## Example Applications of Dimensional Analysis

### SI Unit of Momentum

The momentum $P$ of an object is given by:

$$
P = m \cdot v
$$

where:

- $m$ is the mass (in kilograms, $\text{kg}$)
- $v$ is the velocity (in meters per second, $\text{m/s}$)

Thus, the unit of momentum $P$ is:

$$
\text{kg} \cdot \text{m/s}
$$

### Dimension of the Gravitational Constant $G$

According to Newton's Law of Universal Gravitation:

$$
F = G \frac{Mm}{r^2}
$$

where:

- $F$ is the force (in newtons, $\text{N}$)
- $M$ and $m$ are the masses of the objects (in $\text{kg}$)
- $r$ is the distance between the objects (in $\text{m}$)
- $G$ is the gravitational constant

Rearranging for $G$:

$$
G = \frac{F \cdot r^2}{M \cdot m}
$$

Using the dimensional analysis:

- Force $F$ has dimensions $\text{MLT}^{-2}$
- Distance $r$ has dimensions $\text{L}$
- Mass $M$ has dimensions $\text{M}$

Thus, the dimensions of $G$ are:

$$
G = \frac{\text{MLT}^{-2} \cdot \text{L}^2}{\text{M} \cdot \text{M}} = \text{M}^{-1} \text{L}^3 \text{T}^{-2}
$$

---

## Dependency of Linear Speed on Radius, Angular Frequency, and Mass

We aim to determine how the linear speed $v$ of a particle traveling in a circle depends on the radius $r$, the angular frequency $\omega$, and the mass $m$. We assume there is no dimensionless constant involved.

Let:

$$
v \propto r^a \omega^b m^c
$$

The dimensions of each quantity are:

- **LHS** (for $v$): $\text{LT}^{-1}$
- **RHS**:
  - $r$: $\text{L}$
  - $\omega$: $\text{T}^{-1}$
  - $m$: $\text{M}$

Setting up the dimensional equation:

$$
\text{LT}^{-1} = \text{L}^a \cdot \text{T}^{-b} \cdot \text{M}^c
$$

Matching powers of each dimension:

1. **Length**: $a = 1$
2. **Time**: $-b = -1 \Rightarrow b = 1$
3. **Mass**: $c = 0$

Thus:

$$
v \propto r \omega
$$

This relation shows that the linear speed $v$ depends on the radius $r$ and the angular frequency $\omega$, but not on the mass $m$.

# Physics Lecture One: Dimensional Analysis

## Unit Systems and Physical Quantities

### International, Gaussian, and British Systems
| Physical Quantity | International System (SI) | Gaussian System (CGS) | British System |
|-------------------|--------------------------|------------------------|----------------|
| Length            | Meter (m)                | Centimeter (cm)       | Foot (ft)      |
| Mass              | Kilogram (kg)            | Gram (g)              | Pound (lb)     |
| Time              | Second (s)               | Second (s)            | Second (s)     |

### Length and Mass Conversions
- **Length**:
  - $1 \, \text{m} = 100 \, \text{cm}$
  - $1 \, \text{m} = 3.3 \, \text{ft}$
- **Mass**:
  - $1 \, \text{kg} = 1000 \, \text{g}$
  - $1 \, \text{kg} = 2.2 \, \text{lb}$

---

## Length Conversion Table

| Unit       | Symbol | Conversion from Meter                     |
| ---------- | ------ | ----------------------------------------- |
| Terameter  | Tm     | $1 \, \text{Tm} = 10^{12} \, \text{m}$  |
| Gigameter  | Gm     | $1 \, \text{Gm} = 10^9 \, \text{m}$     |
| Megameter  | Mm     | $1 \, \text{Mm} = 10^6 \, \text{m}$     |
| Kilometer  | km     | $1 \, \text{km} = 10^3 \, \text{m}$     |
| Hectometer | hm     | $1 \, \text{hm} = 10^2 \, \text{m}$     |
| Decameter  | dam    | $1 \, \text{dam} = 10^1 \, \text{m}$    |
| Meter      | m      | $1 \, \text{m} = 1 \, \text{m}$         |
| Decimeter  | dm     | $1 \, \text{dm} = 10^{-1} \, \text{m}$  |
| Centimeter | cm     | $1 \, \text{cm} = 10^{-2} \, \text{m}$  |
| Millimeter | mm     | $1 \, \text{mm} = 10^{-3} \, \text{m}$  |
| Micrometer | µm     | $1 \, \text{µm} = 10^{-6} \, \text{m}$  |
| Nanometer  | nm     | $1 \, \text{nm} = 10^{-9} \, \text{m}$  |
| Angstrom   | Å      | $1 \, \text{Å} = 10^{-10} \, \text{m}$  |
| Picometer  | pm     | $1 \, \text{pm} = 10^{-12} \, \text{m}$ |

---

## Fundamental and Derived Quantities

- **Fundamental Quantities**: Length, Mass, Time
- **Derived Quantities**: Area, Volume, Velocity, Acceleration, Pressure, Force, etc.

---

## Dimensional Analysis

| Derived Quantity | Formula                  | Dimensional Formula | SI Unit                                      |
| ---------------- | ------------------------ | ------------------- | -------------------------------------------- |
| Area             | Length × Length          | $L^2$               | Square meter ($\text{m}^2$)                  |
| Volume           | Length × Length × Length | $L^3$               | Cubic meter ($\text{m}^3$)                   |
| Velocity         | Distance / Time          | $LT^{-1}$           | m/s or $\text{ms}^{-1}$                      |
| Acceleration     | Velocity / Time          | $LT^{-2}$           | $\text{m/s}^2$ or $\text{ms}^{-2}$           |
| Force            | Mass × Acceleration      | $MLT^{-2}$          | Newton (N) or $\text{kg} \cdot \text{m/s}^2$ |
| Momentum         | Mass × Velocity          | $MLT^{-1}$          | $\text{kg} \cdot \text{m/s}$                 |
| Work (Energy)    | Force × Distance         | $ML^2T^{-2}$        | Joule (J) or $\text{N} \cdot \text{m}$       |
| Pressure         | Force / Area             | $ML^{-1}T^{-2}$     | Pascal (Pa) or $\text{N/m}^2$                |
| Density          | Mass / Volume            | $ML^{-3}$           | $\text{kg/m}^3$                              |

---

## Dimensional Analysis Examples

### Example 1: Verifying Formula Correctness

Given equations:
1. $d = V_0 t^2 + \frac{1}{2} at$
2. $d = V_0 t + \frac{1}{2} at^2$

where:
- $d$: Distance in meters ($[d] = L$)
- $V_0$: Initial velocity in m/s ($[V_0] = LT^{-1}$)
- $a$: Acceleration in m/s$^2$ ($[a] = LT^{-2}$)
- $t$: Time in seconds ($[t] = T$)

#### Solution
For **Equation 1**: $d = V_0 t^2 + \frac{1}{2} at$
- **LHS**: $[d] = L$
- **RHS**: 
  $$
  [V_0 t^2] + \frac{1}{2} [a t] = (LT^{-1})(T^2) + \frac{1}{2}(LT^{-2})(T) = LT + LT^{-1} \neq L
  $$
- **Conclusion**: Equation 1 is incorrect.

For **Equation 2**: $d = V_0 t + \frac{1}{2} at^2$
- **LHS**: $[d] = L$
- **RHS**: 
  $$
  [V_0 t] + \frac{1}{2} [a t^2] = (LT^{-1})(T) + \frac{1}{2}(LT^{-2})(T^2) = L + L = 2L
  $$
- **Conclusion**: Equation 2 is correct.

---

### Example 2: Periodic Time of a Simple Pendulum

Find the relation between the periodic time $T$, length $L$, and gravitational acceleration $g$.

Given:
- **Periodic time** $T$: $[T] = T$
- **Length** $L$: $[L] = L$
- **Acceleration due to gravity** $g$: $[g] = LT^{-2}$

Assume:
$$
T \propto L^a g^b
$$
or
$$
T = k L^a g^b
$$

Expanding:
$$
[T] = [L]^a [LT^{-2}]^b = L^a L^b T^{-2b} = L^{a+b} T^{-2b}
$$
Equating dimensions:
$$
L^0 T^1 = L^{a+b} T^{-2b}
$$
Solving:
1. For $T$: $-2b = 1 \Rightarrow b = -\frac{1}{2}$
2. For $L$: $a + b = 0 \Rightarrow a = \frac{1}{2}$

Thus:
$$
T = k \sqrt{\frac{L}{g}}
$$

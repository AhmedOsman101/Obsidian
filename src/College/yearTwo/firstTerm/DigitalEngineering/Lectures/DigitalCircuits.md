## Exclusive-OR (XOR) Gate

- Output **active-HIGH (=1)** when **exactly one input is HIGH**.
- Only **2-input XOR gates** exist; no 3- or 4-input versions.
- IEEE/ANSI symbol:

![](figure-62.png)

- Common ICs:
  - 74LS86 (TTL)
  - 74C86 (CMOS)
  - 74HC86 (High-speed CMOS)

## Exclusive-NOR (XNOR) Gate

- Output **HIGH when inputs are equal** (complement of XOR).
- Often implemented by connecting **XOR output to an inverter**.
- Common ICs:
  - 74LS266 (TTL)
  - 74C266 (CMOS)
  - 74HC266 (High-speed CMOS)

## Parity Generator and Checker

- **Purpose:** Detect single-bit errors in transmission by adding a **parity bit**.
- **Even parity:** total 1s (including parity bit) = **even**.
- **Odd parity:** total 1s (including parity bit) = **odd**.

**Example 1: Even parity generator (4-bit data $D_0 D_1 D_2 D_3$)**

$$
P = D_0 \oplus D_1 \oplus D_2 \oplus D_3
$$

**Example 2: Odd parity generator (3-bit data $D_0 D_1 D_2$)**

$$
P = \overline{D_0 \oplus D_1 \oplus D_2}
$$

## Combinational Circuits

- Output depends **only on current inputs**, no memory or feedback.
- Components: interconnection of logic gates transforming **input data -> output data**.

![Image of Combinational Circuit](figure-50.png)

- **Applications:** Often connected to registers; if registers included -> **sequential circuit**.
- **Standard combinational circuits:**
  - Adders
  - Subtractors
  - Comparators
  - Decoders
  - Encoders
  - Multiplexers

## Half-Adder (HA)

**Purpose:** Adds **two single-bit inputs** to produce **sum** and **carry**.

![](figure-63.png)

### Inputs and Outputs

- Inputs: $A$, $B$
- Outputs:
  - Sum ($S$) = $A \oplus B$
  - Carry ($C$) = $A \cdot B$

### Truth Table

| A   | B   | Sum (S) | Carry (C) |
| --- | --- | ------- | --------- |
| 0   | 0   | 0       | 0         |
| 0   | 1   | 1       | 0         |
| 1   | 0   | 1       | 0         |
| 1   | 1   | 0       | 1         |

### Logic Formulas

$$
S = A \oplus B
$$

$$
C = A \cdot B
$$

**Explanation:**

- **Sum** is HIGH when inputs are **different**.
- **Carry** is HIGH when **both inputs are 1**.
- Can only handle **two inputs**, so it cannot propagate carry from a previous addition.

## Full-Adder (FA)

**Purpose:** Adds **three single-bit inputs** (including carry-in) to produce **sum** and **carry-out**.

![](figure-64.png)

### Inputs and Outputs

- Inputs: $A$, $B$, $C_{in}$
- Outputs:
  - Sum ($S$) = $A \oplus B \oplus C_{in}$
  - Carry ($C_{out}$) = $(A \cdot B) + (B \cdot C_{in}) + (A \cdot C_{in})$

### Truth Table

| A   | B   | Cin | Sum (S) | Cout |
| --- | --- | --- | ------- | ---- |
| 0   | 0   | 0   | 0       | 0    |
| 0   | 0   | 1   | 1       | 0    |
| 0   | 1   | 0   | 1       | 0    |
| 0   | 1   | 1   | 0       | 1    |
| 1   | 0   | 0   | 1       | 0    |
| 1   | 0   | 1   | 0       | 1    |
| 1   | 1   | 0   | 0       | 1    |
| 1   | 1   | 1   | 1       | 1    |

### Logic Formulas

$$
S = A \oplus B \oplus C_{in}
$$

$$
C_{out} = (A \cdot B) + (B \cdot C_{in}) + (A \cdot C_{in})
$$

**Explanation:**

- **Sum** is HIGH when an **odd number of inputs are 1**.
- **Carry-out** is HIGH when **at least two inputs are 1**.
- Can handle **carry from previous stage**, so suitable for **multi-bit addition**.

## Half-Subtractor (HS)

**Purpose:** Subtracts **two single-bit inputs** to produce **difference** and **borrow**.

![](figure-65.png)

### Inputs and Outputs

- Inputs: $A$, $B$
- Outputs:
  - Difference ($D$) = $A \oplus B$
  - Borrow ($B_{out}$) = $\bar{A} \cdot B$

### Truth Table

| A   | B   | Difference (D) | Borrow (Bout) |
| --- | --- | -------------- | ------------- |
| 0   | 0   | 0              | 0             |
| 0   | 1   | 1              | 1             |
| 1   | 0   | 1              | 0             |
| 1   | 1   | 0              | 0             |

### Logic Formulas

$$
D = A \oplus B
$$

$$
B_{out} = \bar{A} \cdot B
$$

**Explanation:**

- **Difference** is HIGH when inputs are **different**.
- **Borrow** is HIGH when $B = 1$ and $A = 0$.
- Cannot handle a borrow from a previous stage.

## Full-Subtractor (FS)

**Purpose:** Subtracts **three single-bit inputs** (including borrow-in) to produce **difference** and **borrow-out**.

![](figure-66.png)

### Inputs and Outputs

- Inputs: $A$, $B$, $B_{in}$
- Outputs:
  - Difference ($D$) = $A \oplus B \oplus B_{in}$
  - Borrow ($B_{out}$) = $(\bar{A} \cdot B) + (\bar{A} \cdot B_{in}) + (B \cdot B_{in})$

### Truth Table

| A   | B   | Bin | Difference (D) | Bout |
| --- | --- | --- | -------------- | ---- |
| 0   | 0   | 0   | 0              | 0    |
| 0   | 0   | 1   | 1              | 1    |
| 0   | 1   | 0   | 1              | 1    |
| 0   | 1   | 1   | 0              | 1    |
| 1   | 0   | 0   | 1              | 0    |
| 1   | 0   | 1   | 0              | 0    |
| 1   | 1   | 0   | 0              | 0    |
| 1   | 1   | 1   | 1              | 1    |

### Logic Formulas

$$
D = A \oplus B \oplus B_{in}
$$

$$
B_{out} = (\bar{A} \cdot B) + (\bar{A} \cdot B_{in}) + (B \cdot B_{in})
$$

**Explanation:**

- **Difference** is HIGH when an **odd number of inputs are 1**.
- **Borrow-out** is HIGH when subtraction requires borrowing.
- Can handle **borrow from previous stage**, making it suitable for **multi-bit subtraction**.

## 3-bit Adder

- **Description**: This is a 3-bit ripple carry adder composed of three Full Adder stages where the initial carry input is tied to 0 to perform binary addition.
- **Logic Expression**:
  - $S$: Sum
  - $C$: Carry
  - $S_i = a_i \oplus b_i \oplus C_i$
  - $C_{i+1} = (a_i \cdot b_i) + (C_i \cdot (a_i \oplus b_i))$
  - _Initial condition_: $C_0 = 0$

![Figure of a 3-bit adder with 3 inputs and one control bit (zero for now)](figure-51.png)

## 3-bit Subtractor

- **Description**: This circuit performs 3-bit binary subtraction ($A - B$) by feeding $a_i$, the complement $\overline{b_i}$, and an initial borrow/carry of 1 into Full Adder stages to implement 2's complement logic.
- **Logic Expression**:
  - $D$: Difference
  - $B$: Borrow
  - $D_i = a_i \oplus \overline{b_i} \oplus B_i$
  - $B_{i+1} = (a_i \cdot \overline{b_i}) + (B_i \cdot (a_i \oplus \overline{b_i}))$
  - _Initial condition_: $B_0 = 1$

![Figure of a 3-bit subtractor with 3 inputs and one control bit (1 for now)](figure-52.png)

## 3-bit Adder-Subtractor

- **Description**: This multi-function circuit uses a Control Bit ($M$) and XOR gates to conditionally invert the $b$ inputs and set the initial carry, allowing it to act as either an adder ($M=0$) or a subtractor ($M=1$).
- **Logic Expression**:
  - $M$: Control Bit
  - $C$: Carry
  - $Result_i = a_i \oplus (b_i \oplus M) \oplus C_i$
  - $C_{i+1} = (a_i \cdot (b_i \oplus M)) + (C_i \cdot (a_i \oplus (b_i \oplus M)))$
  - _Initial condition_: $C_0 = M$

![](figure-53.png)

## 2's Complement Logic Circuit

**Purpose:** Represents **negative numbers** in binary and enables **subtraction using addition**.

### Inputs and Outputs

- Inputs:
  - Binary number: $A$
  - Control bit: $SUB$
- Outputs:
  - 2's complement result: $A_{2C}$

### Logic Description

2's complement is generated in **two steps**:

1. **One's complement**: invert all bits
2. **Add 1** to the inverted result

### Logic Formulas (per bit)

$$
A \rightarrow \overline{A}
$$

$$
A_{2C} = \overline{A} + 1
$$

### 1-Bit Truth Table (with Carry-In)

| A   | Cin | $\overline{A}$ | Sum | Cout |
| --- | --- | -------------- | --- | ---- |
| 0   | 0   | 1              | 1   | 0    |
| 0   | 1   | 1              | 0   | 1    |
| 1   | 0   | 0              | 0   | 0    |
| 1   | 1   | 0              | 1   | 0    |

### Explanation

- Bitwise **NOT** converts $A$ to **one's complement**
- Adding **1** completes the **2's complement**
- Enables subtraction using:
  $$
  A - B = A + (2's\ complement\ of\ B)
  $$
- Used internally in **ALUs and CPUs**

## Arithmetic and Logic Unit (ALU)

**Purpose:** Performs **arithmetic** and **logical operations** on binary data.

### Inputs and Outputs

- Inputs:
  - Operands: $A$, $B$
  - Control signals: $S_1$, $S_0$
- Outputs:
  - Result: $F$
  - Status flags (optional): Zero, Carry, Overflow

### Example Operation Selection Table

| S1  | S0  | Operation    | Description            |
| --- | --- | ------------ | ---------------------- |
| 0   | 0   | $A + B$      | Addition               |
| 0   | 1   | $A - B$      | Subtraction (2's comp) |
| 1   | 0   | $A \cdot B$  | AND                    |
| 1   | 1   | $A \oplus B$ | XOR                    |

### Internal Logic

- **Arithmetic block**
  - Full adders
  - 2's complement logic for subtraction
- **Logic block**
  - AND, OR, XOR, NOT gates
- **Multiplexer**
  - Selects output based on control signals

### Explanation

- ALU is the **core computation unit** of the CPU
- Uses **control signals** to choose the operation
- Combines **adders, logic gates, and multiplexers**
- Scales to multi-bit designs (e.g., 32-bit, 64-bit)

## Decoder

- **Function:** A decoder activates exactly one of its $2^n$ output lines based on the binary combination of its $n$ input lines.
- **Complexity:** An $n$-to-$2^n$ decoder requires $2^n$ AND gates, each with $n$ inputs.

![functional block diagrams of an n-to-2n line decoder, specifically illustrating a 3-to-8 line decoder and the general n-input model](figure-54.png)

![functional block diagram and the internal logic gate implementation of a 3-to-8 line decoder and a general n-to-2n decoder](figure-55.png)

### Logic Implementation of a 3-to-8 Decoder

For a 3-to-8 decoder with inputs $x, y, z$, the outputs $D_0$ through $D_7$ correspond to the minterms of the inputs:

- $D_0 = x'y'z'$ (Binary 000)
- $D_1 = x'y'z$ (Binary 001)
- $D_2 = x'yz'$ (Binary 010)
- $D_3 = x'yz$ (Binary 011)
- $D_4 = xy'z'$ (Binary 100)
- $D_5 = xy'z$ (Binary 101)
- $D_6 = xyz'$ (Binary 110)
- $D_7 = xyz$ (Binary 111)

### Formulas for Decoder Logic

Since you are working with LaTeX in Markdown, here is how you would formally represent the output logic for a specific line (e.g., $D_5$):

$$D_5 = x \cdot \overline{y} \cdot z$$

Or using the "prime" notation seen in your image:

$$D_5 = x y' z$$

### Design a 2-bit multiplier using decoder

The table below shows the relationship between two 2-bit inputs ($a$ and $b$) and the 4-bit product ($r$).

Mathematically, this represents $(a_1 a_0)_2 \times (b_1 b_0)_2 = (r_3 r_2 r_1 r_0)_2$.

| $a_1$ | $a_0$ | $b_1$ | $b_0$ | $r_3$ | $r_2$ | $r_1$ | $r_0$ |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| 0     | 0     | 0     | 1     | 0     | 0     | 0     | 0     |
| 0     | 0     | 1     | 0     | 0     | 0     | 0     | 0     |
| 0     | 0     | 1     | 1     | 0     | 0     | 0     | 0     |
| 0     | 1     | 0     | 0     | 0     | 0     | 0     | 0     |
| 0     | 1     | 0     | 1     | 0     | 0     | 0     | 1     |
| 0     | 1     | 1     | 0     | 0     | 0     | 1     | 0     |
| 0     | 1     | 1     | 1     | 0     | 0     | 1     | 1     |
| 1     | 0     | 0     | 0     | 0     | 0     | 0     | 0     |
| 1     | 0     | 0     | 1     | 0     | 0     | 1     | 0     |
| 1     | 0     | 1     | 0     | 0     | 1     | 0     | 0     |
| 1     | 0     | 1     | 1     | 0     | 1     | 1     | 0     |
| 1     | 1     | 0     | 0     | 0     | 0     | 0     | 0     |
| 1     | 1     | 0     | 1     | 0     | 0     | 1     | 1     |
| 1     | 1     | 1     | 0     | 0     | 1     | 1     | 0     |
| 1     | 1     | 1     | 1     | 1     | 0     | 0     | 1     |

## Encoder

![functional block diagrams of a general 2N-to-N encoder, a specific 4-to-2 encoder, and a corresponding 2-to-4 decoder to illustrate the inverse relationship between encoding and decoding.](figure-57.png)

### Truth Table of an Octal-to-Binary Encoder

The following table represents the logic of an 8x3 encoder, where each of the eight input lines ($D_0$ through $D_7$) corresponds to an octal digit, and the three output lines ($x, y, z$) provide the equivalent 3-bit binary code.

| $D_0$ | $D_1$ | $D_2$ | $D_3$ | $D_4$ | $D_5$ | $D_6$ | $D_7$ | $x$ | $y$ | $z$ |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | --- | --- | --- |
| 1     | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 0   | 0   | 0   |
| 0     | 1     | 0     | 0     | 0     | 0     | 0     | 0     | 0   | 0   | 1   |
| 0     | 0     | 1     | 0     | 0     | 0     | 0     | 0     | 0   | 1   | 0   |
| 0     | 0     | 0     | 1     | 0     | 0     | 0     | 0     | 0   | 1   | 1   |
| 0     | 0     | 0     | 0     | 1     | 0     | 0     | 0     | 1   | 0   | 0   |
| 0     | 0     | 0     | 0     | 0     | 1     | 0     | 0     | 1   | 0   | 1   |
| 0     | 0     | 0     | 0     | 0     | 0     | 1     | 0     | 1   | 1   | 0   |
| 0     | 0     | 0     | 0     | 0     | 0     | 0     | 1     | 1   | 1   | 1   |

### Logic Equations

Based on the truth table, the Boolean expressions for the outputs are derived by identifying which input lines activate each specific output bit:

- $z = D_1 + D_3 + D_5 + D_7$
- $y = D_2 + D_3 + D_6 + D_7$
- $x = D_4 + D_5 + D_6 + D_7$

## Priority Encoder

![functional block diagram of a 4-input priority encoder, where input $I_3$ is designated as the highest priority and $I_0$ as the lowest priority](figure-59.png)

### Understanding Priority Encoders

In a standard encoder, only one input can be active at a time. A **priority encoder** solves this limitation by ensuring that if two or more inputs are high simultaneously, the input with the highest priority takes precedence.

For the 4-bit priority encoder shown:

- If $I_3$ is 1, the output will be `11` regardless of the states of $I_2, I_1,$ and $I_0$.
- If $I_3$ is 0 and $I_2$ is 1, the output will be `10` regardless of $I_1$ and $I_0$.

## Multiplexer

![block diagram of a 2-to-1 multiplexer (MUX) and its internal logic gate implementation using AND, OR, and NOT gates](figure-60.png)

![gate-level logic circuit for a 4-to-1 multiplexer, utilizing four 3-input AND gates and a 4-input OR gate](figure-61.png)

### Truth Table: 2-to-1 Multiplexer

For a 2-to-1 MUX, the select line $S$ determines which input ($I_0$ or $I_1$) is routed to the output $Y$.

| **S** | **Y** |
| ----- | ----- |
| 0     | $I_0$ |
| 1     | $I_1$ |

**Boolean Equation:** $Y = \overline{S} \cdot I_0 + S \cdot I_1$

### Truth Table: 4-to-1 Multiplexer

For a 4-to-1 MUX, two select lines ($S_1, S_0$) are required to choose between the four available inputs.

| **S1​** | **S0​** | **Y** |
| ------- | ------- | ----- |
| 0       | 0       | $I_0$ |
| 0       | 1       | $I_1$ |
| 1       | 0       | $I_2$ |
| 1       | 1       | $I_3$ |

**Boolean Equation:**

$$
Y = \overline{S_1} \cdot \overline{S_0} \cdot I_0 + \overline{S_1} \cdot S_0 \cdot I_1 + S_1 \cdot \overline{S_0} \cdot I_2 + S_1 \cdot S_0 \cdot I_3
$$

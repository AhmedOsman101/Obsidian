---
title: Section 4
prev:
  text: "Section Three"
  link: "/College/yearOne/firstTerm/IT-Essentials/Sections/SectionThree"
next:
  text: "Section Five"
  link: "/College/yearOne/firstTerm/IT-Essentials/Sections/SectionFive"
---

# IT Essentials Lab 4: Number Systems and Arithmetic Operations

## Binary Arithmetic Operations

Binary numbers use only two digits: 0 and 1. Arithmetic operations are performed using similar principles to decimal arithmetic but with a base of 2.

### Binary Addition

Binary addition follows these rules:

- $0 + 0 = 0$
- $0 + 1 = 1$
- $1 + 0 = 1$
- $1 + 1 = 0$ (with a carry of $1$)
- $1+1+1 = 1$ (with a carry of $1$)

**Example:**

```
  1011 (11 in decimal)
+ 0110 (6 in decimal)
------
 10001 (17 in decimal)
```

Explanation:

- Rightmost column: $1 + 0 = 1$
- Second column from right: $1 + 1 = 0$ (carry-over $1$)
- Third column from right: $0 + 1 + 1$ (carry-over) $= 0$ (carry-over $1$)
- Leftmost column: $1 + 0 + 1$ (carry-over) $= 10$

### Binary Subtraction

Binary subtraction also has specific rules:

- $0 - 0 = 0$
- $1 - 0 = 1$
- $1 - 1 = 0$
- $0 - 1 = 1$ (borrow $1$ from the next higher bit)

**Example:**

```
  1101 (13 in decimal)
- 0110 (6 in decimal)
------
  0111 (7 in decimal)
```

Explanation:

- Rightmost column: $1 - 0 = 1$
- Second column from right: $0 - 1 = 1$ (borrow $1$ from the third column, third column is now $0$)
- Third column from right: $0 - 1 = 1$ (borrow $1$ from the fourth column, fourth column is now $0$)
- Leftmost column: $0 - 0 = 0$

### Binary Multiplication

Binary multiplication is similar to decimal multiplication:

- $0 \times 0 = 0$
- $0 \times 1 = 0$
- $1 \times 0 = 0$
- $1 \times 1 = 1$

**Example:**

```
    101 (5 in decimal)
x   110 (6 in decimal)
--------
    000
   1010
+ 10100
--------
  11110 (30 in decimal)
```

Explanation:

- First step is to mulitply $0 \times 101 = 000$
- Next, multiply $1 \times 101 = 1010$ (In the second digit one zero, on the third we add two zeros and so on)
- Next, mulitply $1 \times 101 = 10100$
- Finally we will add the results $000 + 1010 + 10100 = 11110$

## ASCII Code

ASCII (American Standard Code for Information Interchange) is a character encoding standard for electronic communication. Each character (letters, numbers, symbols) is assigned a unique 7-bit binary code (ranging from 0 to 127).

**Character ranges**:

- Digits: ASCII values from 48 -> `0` to 57 -> `9`.
- Uppercase Letters: ASCII values from 65 -> `A` to 90 -> `Z`.
- Lowercase Letters: ASCII values from 97 -> `a` to 122 -> `z`.

**Example:**

- `A` $= 65$ (decimal) = $0100 \space 0001$ (binary)
- `a` $= 97$ (decimal) = $0110 \space 0001$ (binary)
- `0` $= 48$ (decimal) = $0011 \space 0000$ (binary)

![](../imgs/figure%208.png)

## Binary-Coded Decimal (BCD)

BCD represents each decimal digit (0-9) with a 4-bit binary code.

**Example:**

The decimal number 29 is represented in BCD as:

- $2$ = $0010$
- $9$ = $1001$

Therefore, $29$ in BCD is $0010 \space 1001$.

BCD is useful for applications where decimal representation is important, such as digital displays.

| Decimal | BCD (4-bit Binary) |
| :-----: | :----------------: |
|    0    |        0000        |
|    1    |        0001        |
|    2    |        0010        |
|    3    |        0011        |
|    4    |        0100        |
|    5    |        0101        |
|    6    |        0110        |
|    7    |        0111        |
|    8    |        1000        |
|    9    |        1001        |

## Practice Your Learning

### 1. Numbering Systems Conversion

<details>
  <summary>Convert the decimal number 45 into binary, octal, and hexadecimal.</summary>
  <b>Solution:</b>

- Binary: $45 \to 101101$
- Octal: $45 \to 55$
- Hexadecimal: $45 \to 2D$
</details>

### 2. Binary Addition

<details>
  <summary>Add the binary numbers 1011 and 1101.</summary>
  <b>Solution:</b>

```
        1011
      + 1101
      ------
      11000 (Binary)

```

Decimal equivalent: $11 + 13 = 24$

</details>

### 3. Binary Subtraction

<details>
<summary>Subtract the binary number 1101 from 10101.</summary>
<b>Solution:</b>

```
       10101
    -   1101
    --------
       1000 (Binary)
```

Decimal equivalent: $21 - 13 = 8$

</details>

### 4. Binary Multiplication

<details>
<summary>Multiply the binary numbers 101 and 11.</summary>
<b>Solution:</b>

```
        101
      ×  11
    --------
        101
    + 1010
    --------
       1111 (Binary)
```

Decimal equivalent: $5 × 3 = 15$

</details>

### 5. ASCII Code

<details>
<summary>What is the ASCII code for the character "A"</summary>

<b>Solution:</b>

- ASCII code for `A` is $65$ (decimal) or $0100 \space 0001$ (binary).

</details>

<details>
<summary>Find the character corresponding to the ASCII code 97.</summary>
<b>Solution:</b>

- ASCII code `97` corresponds to the character `a`.
</details>

### 6. Binary-Coded Decimal (BCD)

<details>
<summary>Convert the decimal number 59 into BCD.</summary>
<b>Solution:</b>

- Decimal `59` in BCD: $0101 \space 1001$
</details>

### 7. BCD to Decimal

<details>
<summary>Convert the BCD 0110 0101 into decimal.</summary>
<b>Solution:</b>

- BCD $0110 \space 0101$ corresponds to decimal $65$.
</details>

---
prev:
  text: "Lecture Two"
  link: "/College/IT-Essentials/Lectures/LectureTwo"
next:
  text: "Lecture Four"
  link: "/College/IT-Essentials/Lectures/LectureFour"
---

# IT Essentials Lecture 3

## Number Systems

### Module Objective

Calculate numbers between decimal, binary, and hexadecimal systems.

---

## Introduction to Numbering Systems

**Definition**: A numbering system is a way to represent numbers in different bases.

**Common Systems**:

- **Binary (Base-2)**
- **Decimal (Base-10)**
- **Hexadecimal (Base-16)**
- **Octal (Base-8)**

---

## Binary Number System (Base-2)

- **Digits Used**: 0, 1
- **Structure**: Each digit in a binary number represents a power of 2, with the rightmost digit representing \(2^0\), the next \(2^1\), and so on.
- **Example**: Convert Binary `101` to Decimal.
- **Usage**: Binary is essential for computers, as digital circuits operate in two states (on/off).

### Binary Positional Notation

- **Definition**: Positional notation means each digit represents a different value depending on its position.
- **Example Calculation**:
  - Binary Number: `11000000`
  - Calculation: \(1 \times 128 + 1 \times 64 + 0 + 0 + 0 + 0 + 0 + 0 = 192\)

---

## Decimal Number System (Base-10)

- **Digits Used**: 0–9
- **Structure**: Each digit represents a power of 10.
- **Example**: Decimal `527`
- **Usage**: Standard system used in everyday life for counting and arithmetic.

### Decimal to Binary Conversion Example

To convert a decimal number to binary:

1. Divide the number by 2.
2. Write down the quotient and remainder.
3. Repeat with the quotient until it reaches 0.
4. The binary number is the remainders read in reverse order.

Example: Convert Decimal `13` to Binary

1. \(13 \div 2 = 6\) remainder `1`
2. \(6 \div 2 = 3\) remainder `0`
3. \(3 \div 2 = 1\) remainder `1`
4. \(1 \div 2 = 0\) remainder `1`

Binary: `1101`

---

## Hexadecimal Number System (Base-16)

- **Digits Used**: 0–9, A (10), B (11), C (12), D (13), E (14), F (15)
- **Structure**: Each digit represents a power of 16.
- **Example**: Convert Hexadecimal `1F` to Decimal.
- **Usage**: Widely used in programming, particularly for color codes in web design (e.g., `#FF5733`) and memory addresses.

---

## Octal Number System (Base-8)

- **Digits Used**: 0–7
- **Structure**: Each digit represents a power of 8.
- **Example**: Convert Octal `17` to Decimal.
- **Historical Context**: Used as a shorthand for binary in computing, though hexadecimal is more common today.

---

## Conversions Between Number Systems

### Binary to Decimal Conversion

1. Each binary digit represents a power of 2.
2. Multiply each binary digit by its positional power of 2 and add the results.

Example: Convert Binary `11000000.10101000.00001011.00001010` to Decimal.

### Decimal to Binary Conversion: Subtraction Method

1. Start with the largest power of 2 less than or equal to the number.
2. Subtract that power of 2, write a `1` in its position.
3. If the power of 2 is greater than the remainder, write `0`.

Example: Convert Decimal `168` to Binary:

1. `168 - 128 = 40` → `1` in `128` position.
2. `40 - 32 = 8` → `1` in `32` position.
3. `8 - 8 = 0` → `1` in `8` position.

Binary: `10101000`

### Decimal to Octal Conversion

1. Divide the decimal number by 8.
2. Write down the remainder.
3. Repeat until the quotient is 0.
4. Read the remainders in reverse order.

Example: Convert Decimal `65` to Octal:

- Quotients: `8`, `0`, `1` → Octal `101`.

### Decimal to Hexadecimal Conversion

1. Divide by 16.
2. Record quotient and remainder.
3. Continue dividing until quotient is 0.
4. Convert remainders above 9 to hexadecimal digits (e.g., 10 = A).

Example: Decimal `255` to Hexadecimal: `FF`.

### Octal to Binary Conversion

1. Convert each octal digit to its 3-digit binary equivalent.

Example: Octal `57` → Binary `101111`.

### Binary to Octal Conversion

1. Group binary digits into sets of three from the right.
2. Convert each group to its octal equivalent.

Example: Binary `110101011` → Octal `653`.

### Hexadecimal to Binary Conversion

1. Convert each hexadecimal digit to its 4-bit binary equivalent.

Example: Hexadecimal `2A3` → Binary `001010100011`.

### Binary to Hexadecimal Conversion

1. Group binary digits into sets of four.
2. Convert each group to hexadecimal.

Example: Binary `110101101` → Hexadecimal `1AD`.

### Octal to Hexadecimal Conversion

1. Convert octal to binary, then binary to hexadecimal.

---

## Summary

- **Binary**: A base-2 system using 0 and 1, essential for computing.
- **Decimal**: Base-10 system, standard in everyday life.
- **Hexadecimal**: Base-16, using 0-9 and A-F, used in IPv6 and MAC addresses.
- **Conversions**:
  - **Binary ↔ Decimal ↔ Hexadecimal**: Often requires intermediate binary representation.
  - **Decimal ↔ Octal ↔ Hexadecimal**: Follow division methods or positional notation.
---
title: Section 3
prev:
  text: "Section Two"
  link: "/College/IT-Essentials/Sections/SectionTwo"
next:
  text: "Section Four"
  link: "/College/IT-Essentials/Sections/SectionFour"
---

# IT Essentials Lab 3: Computer Languages and Number Systems

## Introduction

In the world of computing, languages and number systems are fundamental to how computers process and understand information. Understanding these systems and their conversions is crucial for programming and computer science.

---

### Computer Language Types

Computer languages can be categorized into different levels:
- **High-Level Language**: These are programming languages that are closer to human languages. Examples include Python, Java, and C++.
- **Middle-Level Language**: These languages provide a good balance between machine-level operations and human readability. An example is Assembly language.
- **Low-Level Language**: These languages are closer to machine code. The lowest level is **Binary** (Base 2), which is the fundamental language for computers.

---

### Number Systems

Number systems are methods of representing numbers in a consistent way using digits or other symbols. Some common number systems used in computing include:
1. **Decimal (Base 10)**: Used by humans, it contains ten digits: 0-9.
2. **Binary (Base 2)**: Used by computers, it contains two digits: 0 and 1.
3. **Octal (Base 8)**: Contains digits from 0-7.
4. **Hexadecimal (Base 16)**: Contains digits from 0-9 and A-F, where A=10, B=11, ..., F=15.

---

### Decimal to Binary Conversion

To convert a decimal number to binary, repeatedly divide the decimal number by 2, recording the remainder each time.

#### Example Conversions:
1. Convert **6** to binary:
   - 6 ÷ 2 = 3 remainder 0
   - 3 ÷ 2 = 1 remainder 1
   - 1 ÷ 2 = 0 remainder 1
   - **Binary representation**: `0110`

2. Convert **17** to binary:
   - 17 ÷ 2 = 8 remainder 1
   - 8 ÷ 2 = 4 remainder 0
   - 4 ÷ 2 = 2 remainder 0
   - 2 ÷ 2 = 1 remainder 0
   - 1 ÷ 2 = 0 remainder 1
   - **Binary representation**: `0001 0001`

---

### Binary to Decimal Conversion

To convert a binary number to decimal, multiply each bit by the appropriate power of 2 (starting from right to left) and sum them.

#### Example Conversions:
1. Convert **0111** to decimal:
   - $0 × 2^3 + 1 × 2^2 + 1 × 2^1 + 1 × 2^0$
   - **Decimal result**: `7`

2. Convert **1011 0111** to decimal:
   - $1 × 2^7 + 0 × 2^6 + 1 × 2^5 + 1 × 2^4 + 0 × 2^3 + 1 × 2^2 + 1 × 2^1 + 1 × 2^0$
   - **Decimal result**: `183`

---

### Octal Number System

The octal number system has a base of 8, with digits from 0 to 7. It is used less frequently today but was historically important for representing binary data in a more compact form.

#### Example Octal Numbers:
1. **123** (Octal)
2. **567** (Octal)
3. **987** (Invalid Octal, as 9 is not a valid digit)
4. **7654** (Octal)

---

### Decimal to Octal Conversion

To convert a decimal number to octal, repeatedly divide by 8 and record the remainders.

#### Example Conversion:
Convert **305** to octal:
- 305 ÷ 8 = 38 remainder 1
- 38 ÷ 8 = 4 remainder 6
- 4 ÷ 8 = 0 remainder 4
- **Octal representation**: `461`

---

### Octal to Decimal Conversion

To convert an octal number to decimal, multiply each digit by 8 raised to the position power (from right to left) and sum them.

#### Example Conversions:
1. Convert **354** from octal to decimal:
   - $3 × 8^2 + 5 × 8^1 + 4 × 8^0$
   - **Decimal result**: `236`

2. Convert **22** from octal to decimal:
   - $2 × 8^1 + 2 × 8^0$
   - **Decimal result**: `18`

---

### Hexadecimal Number System

The hexadecimal number system has a base of 16, using digits `0-9` and letters `A-F`. It is widely used in computing for representing binary data in a human-readable format.

#### Example Hexadecimal Numbers:
1. **AB12**
2. **876F**
3. **FFFF**

---

### Decimal to Hexadecimal Conversion

To convert a decimal number to hexadecimal, divide by 16 and record the remainders. The remainders are then represented as hexadecimal digits.

#### Example Conversion:
Convert **305** to hexadecimal:
- 305 ÷ 16 = 19 remainder 1
- 19 ÷ 16 = 1 remainder 3
- 1 ÷ 16 = 0 remainder 1
- **Hexadecimal representation**: `131`

---

### Hexadecimal to Decimal Conversion

To convert a hexadecimal number to decimal, multiply each digit by 16 raised to the position power (from right to left) and sum them.

#### Example Conversions:
1. Convert **354** from hexadecimal to decimal:
   - $3 × 16^2 + 5 × 16^1 + 4 × 16^0$
   - **Decimal result**: `852`

2. Convert **22** from hexadecimal to decimal:
   - $2 × 16^1 + 2 × 16^0$
   - **Decimal result**: `34`

---

### Bonus Exercises

1. Convert **2CB5** from hexadecimal to binary:
   - **Binary representation**: `0010 1100 1011 0101`

2. Convert **1001 1010** from binary to octal:
   - **Octal representation**: `232`

---

### Summary

- **Number Systems**: Computers use binary, while humans typically use decimal. Octal and hexadecimal are commonly used for more compact representations.
- **Conversions**: Understanding how to convert between decimal, binary, octal, and hexadecimal is essential for programming and computer science.

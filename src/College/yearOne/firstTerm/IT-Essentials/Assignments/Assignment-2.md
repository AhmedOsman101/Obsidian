---
title: Task 2
prev:
  text: "Task One"
  link: "/College/yearOne/firstTerm/IT-Essentials/Assignments/Assignment-1"
next:
  text: "Task Four"
  link: "/College/yearOne/firstTerm/IT-Essentials/Assignments/Assignment-4"
---

# Task Two

## 1. Convert the following decimal numbers to binary and then to hexadecimal:

**a. 157**

- **Decimal to Binary**: Divide by 2 and track remainders:
  - $157 \div 2 = 78$ remainder 1
  - $78 \div 2 = 39$ remainder 0
  - $39 \div 2 = 19$ remainder 1
  - $19 \div 2 = 9$ remainder 1
  - $9 \div 2 = 4$ remainder 1
  - $4 \div 2 = 2$ remainder 0
  - $2 \div 2 = 1$ remainder 0
  - $1 \div 2 = 0$ remainder 1

  So, $157$ in binary is **10011101**.

- **Binary to Hexadecimal**: Group binary digits in sets of 4 (from right):
  - **1001 1101** = **9D** in hexadecimal.

**b.  250**

- **Decimal to Binary**: Divide by 2 and track remainders:
  - $250 \div 2 = 125$ remainder 0
  - $125 \div 2 = 62$ remainder 1
  - $62 \div 2 = 31$ remainder 0
  - $31 \div 2 = 15$ remainder 1
  - $15 \div 2 = 7$ remainder 1
  - $7 \div 2 = 3$ remainder 1
  - $3 \div 2 = 1$ remainder 1
  - $1 \div 2 = 0$ remainder 1

  So, $250$ in binary is **11111010**.

- **Binary to Hexadecimal**: Group binary digits in sets of 4:
  - **1111 1010** = **FA** in hexadecimal.

**c.  124**

- **Decimal to Binary**: Divide by 2 and track remainders:
  - $124 \div 2 = 62$ remainder 0
  - $62 \div 2 = 31$ remainder 0
  - $31 \div 2 = 15$ remainder 1
  - $15 \div 2 = 7$ remainder 1
  - $7 \div 2 = 3$ remainder 1
  - $3 \div 2 = 1$ remainder 1
  - $1 \div 2 = 0$ remainder 1

  So, $124$ in binary is **1111100**.

- **Binary to Hexadecimal**: Pad with leading zero to make groups of 4:
  - **0111 1100** = **7C** in hexadecimal.

## 2. Convert the following binary numbers to decimal and then to hexadecimal:

**a. 11100110**

- **Binary to Decimal**: 
  - $1 \times 2^7 + 1 \times 2^6 + 1 \times 2^5 + 0 \times 2^4 + 0 \times 2^3 + 1 \times 2^2 + 1 \times 2^1 + 0 \times 2^0$
  - $= 128 + 64 + 32 + 0 + 0 + 4 + 2 + 0 = 230$

- **Decimal to Hexadecimal**: Divide by 16:
  - $230 \div 16 = 14$ remainder $6$
  - $14$ = **E**
  - So, $230$ = **E6** in hexadecimal.

**b. 10101010**

- **Binary to Decimal**: 
  - $1 \times 2^7 + 0 \times 2^6 + 1 \times 2^5 + 0 \times 2^4 + 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 0 \times 2^0$
  - $= 128 + 0 + 32 + 0 + 8 + 0 + 2 + 0 = 170$

- **Decimal to Hexadecimal**: Divide by 16:
  - $170 \div 16 = 10$ remainder $10$
  - $10$ = **A**
  - So, $170$ = **AA** in hexadecimal.

**c. 11110000**

- **Binary to Decimal**: 
  - $1 \times 2^7 + 1 \times 2^6 + 1 \times 2^5 + 1 \times 2^4 + 0 \times 2^3 + 0 \times 2^2 + 0 \times 2^1 + 0 \times 2^0$
  - $= 128 + 64 + 32 + 16 + 0 + 0 + 0 + 0 = 240$

- **Decimal to Hexadecimal**: Divide by 16:
  - $240 \div 16 = 15$ remainder $0$
  - $15$ = **F**
  - So, $240$ = **F0** in hexadecimal.

## 3. Convert the following hexadecimal numbers to binary and then to decimal:

**a. 9C**

- **Hexadecimal to Binary**: 
  - $9$ = **1001**
  - $C$ = **1100**
  - So, **9C** = **10011100** in binary.

- **Binary to Decimal**:
  - $1 \times 2^7 + 0 \times 2^6 + 0 \times 2^5 + 1 \times 2^4 + 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 0 \times 2^0$
  - $= 128 + 0 + 0 + 16 + 8 + 4 + 0 + 0 = 156$

**b. FF**

- **Hexadecimal to Binary**: 
  - $F$ = **1111**
  - $F$ = **1111**
  - So, **FF** = **11111111** in binary.

- **Binary to Decimal**:
  - $1 \times 2^7 + 1 \times 2^6 + 1 \times 2^5 + 1 \times 2^4 + 1 \times 2^3 + 1 \times 2^2 + 1 \times 2^1 + 1 \times 2^0$
  - $= 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255$

**c. 2A**

- **Hexadecimal to Binary**: 
  - $2$ = **0010**
  - $A$ = **1010**
  - So, **2A** = **00101010** in binary.

- **Binary to Decimal**:
  - $0 \times 2^7 + 0 \times 2^6 + 1 \times 2^5 + 0 \times 2^4 + 1 \times 2^3 + 0 \times 2^2 + 1 \times 2^1 + 0 \times 2^0$
  - $= 0 + 0 + 32 + 0 + 8 + 0 + 2 + 0 = 42$

## 4. Perform the following binary arithmetic operations:

**a. 10110 + 1101**

```
    10110
  +  01101
  --------
   100011
```

Result: **100011** (35 in decimal)

**b. 11001 - 10011**

```
    11001
  -  10011
  --------
    00110
```

Result: **00110** (6 in decimal)

**c. 1011 * 101**

```
       1011
     *   101
     --------
       1011
      0000
     1011
    --------
    110111
```

Result: **110111** (55 in decimal)

**d. 11110 / 10**

```
    11110 / 10 = 1111 remainder 0
```

Result: **1111** (15 in decimal)

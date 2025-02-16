---
title: Lecture 4
prev:
  text: "Lecture Three"
  link: "/College/yearOne/firstTerm/IT-Essentials/Lectures/LectureThree"
next:
  text: "Lecture Five"
  link: "/College/yearOne/firstTerm/IT-Essentials/Lectures/LectureFive"
---

# IT Essentials Lecture 4

## Arithmetic Operations of Numbering Systems

### Binary Arithmetic Operations

1. **Binary Addition**: Similar to decimal addition, binary addition is performed from right to left with possible carryover values (0 or 1).
2. **Binary Subtraction**: Binary subtraction involves borrowing, similar to decimal subtraction.
3. **Binary Multiplication**: Binary multiplication is performed similar to decimal multiplication, shifting left as necessary.

### 1. **Binary Addition**

Binary addition works similarly to decimal addition, but only uses the digits 0 and 1. The key difference is that whenever a sum reaches 2, it "carries" a 1 to the next higher place (just as decimal addition carries at 10).

#### Binary Addition Rules

- $0 + 0 = 0$
- $0 + 1 = 1$
- $1 + 0 = 1$
- $1 + 1 = 0$ (with a carry of 1 to the next column)

#### Example: (1011 + 1101)

```
    1011
  + 1101
  ------
   11000
```

Steps:

- Rightmost column: $1 + 1 = 0$ (carry 1)
- Next column: $1 + 0 + 1 = 0$ (carry 1)
- Next column: $0 + 1 + 1 = 0$ (carry 1)
- Leftmost column: $1 + 1 = 1$ (no further carry needed)
- Result: $11000$

### 2. **Binary Subtraction**

Binary subtraction works like decimal subtraction, but here we borrow only when subtracting 1 from 0. Borrowing in binary is simpler because any borrowed 1 turns the 0 into 10 in binary (the equivalent of 2 in decimal), making subtraction possible.

#### Binary Subtraction Rules

- $0 - 0 = 0$
- $1 - 0 = 1$
- $1 - 1 = 0$
- $0 - 1 = 1$ (with a borrow of 1 from the next higher bit)

#### Example: (1101 - 1011)

```
    1101
  - 1011
  ------
    0010
```

Steps:

- Rightmost column: $1 - 1 = 0$
- Next column: $0 - 1 = 1$ (borrow 1 from the next column)
- Next column: $0 - 0 = 0$
- Leftmost column: $1 - 1 = 0$
- Result: $0010$

### 3. **Binary Multiplication**

Binary multiplication is similar to decimal multiplication, where we multiply and shift. Since binary has only two possible digits, multiplication is simplified to two cases:

1. Multiplying by 0 yields 0.
2. Multiplying by 1 yields the same number shifted to the left (same as adding zeros in decimal multiplication).

#### Example: (1011 × 101)

```txt
        1011
      ×  101
      ------
        1011       (1011 × 1)
       00000       (Shifted left, 1011 × 0)
    + 101100       (Shifted left twice, 1011 × 1)
    ----------
      110111
```

Steps:

- Multiply $1011$ by the rightmost $1$: Result is $1011$.
- Multiply $1011$ by the next $0$: Result is $0000$ (shifted one position left).
- Multiply $1011$ by the next $1$: Result is $1011$ (shifted two positions left).
- Sum the partial results: $110111$.

## BCD, ASCII Code, and Unicode

### Binary-Coded Decimal (BCD)

- **Definition**: In BCD, each decimal digit (0–9) is represented using a 4-bit binary sequence.
- **Example**: Converting the decimal number 27 to BCD:
  - **Step 1**: Separate the digits: 2 and 7.
  - **Step 2**: Convert each digit to BCD: 2 → 0010, 7 → 0111.
  - **Result**: BCD representation of 27 is 0010 0111.

#### Solving Problems on BCD

- **Example (Decimal to BCD)**: Convert 27 to BCD as shown above.
- **Example (BCD to Decimal)**: Convert BCD 0101 1001 to decimal:
  - **Step 1**: 0101 corresponds to 5, 1001 corresponds to 9.
  - **Result**: The decimal number is 59.

---

### ASCII (American Standard Code for Information Interchange)

- **Character Set**: ASCII assigns each character a unique number from 0 to 127.
  - **Control Characters (0–31)**: Non-printable characters used to control text (e.g., newline).
  - **Printable Characters (32–126)**: Includes digits, uppercase/lowercase letters, punctuation, and symbols.

#### Key ASCII Table Entries

- **Digits (0-9)**: ASCII values 48–57.
- **Uppercase Letters (A-Z)**: ASCII values 65–90.
- **Lowercase Letters (a-z)**: ASCII values 97–122.

#### Solving Problems on ASCII Code

- **Example (Text to Binary)**:

  - **Step 1**: Convert characters in "computer" to ASCII values:
    - c → 99, o → 111, m → 109, p → 112, u → 117, t → 116, e → 101, r → 114.
  - **Step 2**: Convert ASCII values to binary (8-bit representation):
    - c → 01100011, o → 01101111, etc.
  - **Step 3**: Combine to get the binary representation of "computer".

- **Example (Binary to Text)**:
  - Convert each 8-bit binary sequence back to its ASCII value and corresponding character.

---

### Unicode

#### Pre-Unicode Era

- **Character Set Conflicts**: Different systems and countries developed their own encoding systems, leading to compatibility issues.

#### Birth of Unicode

- **Formation of the Unicode Consortium (1987)**: Developed a single standard for all writing systems.
- **Universal Character Set**: Unicode includes characters for Latin, Cyrillic, Arabic, Chinese, and other writing systems.
- **Current Scope**: Unicode now covers over 143,000 characters.

#### Encoding Forms

1. **UTF-8**: A variable-length encoding using 1–4 bytes per character, backward-compatible with ASCII, widely used online.
2. **UTF-16**: Uses 1 or 2 16-bit code units per character, commonly used in many programming languages.
3. **UTF-32**: Fixed 32-bit code unit for each character, easy for calculating offsets, but less memory-efficient.

#### Unicode Code Points in Hexadecimal

- **Basic Latin Characters**:
  - A: U+0041
  - a: U+0061
- **Common Symbols**:
  - © (Copyright): U+00A9
  - ® (Registered Trademark): U+00AE
- **Emojis**:
  - 😊 (Smiling Face): U+1F60A
  - 🍕 (Pizza): U+1F355

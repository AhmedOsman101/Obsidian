# Bitwise Operations

## 10 Bitwise Operations Tricks

### **1. Checking if a Number is Even**

The function `isEven` checks whether a number `n` is even using a bitwise AND operation:

```typescript
const isEven = (n: number): boolean => (n & 1) === 0;
```

---

#### Explanation
1. **Bitwise AND with 1**:
   - The least significant bit (LSB) of a number determines if it is even or odd.
   - If the LSB is `0`, the number is even.
   - If the LSB is `1`, the number is odd.

2. **Operation**:
   - `n & 1` isolates the LSB.
   - If the result is `0`, the number is even.

3. **Comparison**:
   - `(n & 1) === 0` evaluates to `true` for even numbers and `false` for odd numbers.

---

#### Comparison with Modulus Approach
- **Bitwise Approach**: `(n & 1) === 0`
  - Faster and more efficient because bitwise operations are computationally cheaper.
  - Directly checks the LSB without performing division or remainder operations.

- **Modulus Approach**: `n % 2 === 0`
  - Easier to read and understand for beginners.
  - Slightly slower due to the division/remainder operation.

---

#### Example
```typescript
console.log(isEven(4)); // true (4 is even)
console.log(isEven(5)); // false (5 is odd)
```

---

### **2. Checking if a Number is a Power of Two**

The function `isPowerOfTwo` checks whether a number `x` is a power of two using bitwise operations:

```typescript
const isPowerOfTwo = (x: number): boolean => x !== 0 && !(x & (x - 1));
```

---

#### Explanation
1. **Power of Two Property**:
   - A power of two in binary has exactly one bit set (e.g., `1` → `001`, `2` → `010`, `4` → `100`).

2. **Bitwise Trick**:
   - Subtracting `1` from a power of two flips all bits after the single set bit (e.g., `4 - 1 = 3` → `100 & 011 = 0`).
   - For non-powers of two, `x & (x - 1)` will not be zero (e.g., `5 & 4 = 4`).

3. **Operation**:
   - `x & (x - 1)` clears the lowest set bit in `x`.
   - If the result is `0` and `x` is not `0`, then `x` is a power of two.

4. **Edge Case**:
   - `x !== 0` ensures `0` is not considered a power of two.

---

#### Comparison with Logarithmic Approach
- **Bitwise Approach**: `x !== 0 && !(x & (x - 1))`
  - Extremely fast and efficient, leveraging bitwise properties.
  - Avoids floating-point inaccuracies or expensive logarithmic calculations.

- **Logarithmic Approach**: `Math.log2(x) % 1 === 0`
  - Easier to understand conceptually.
  - Slower and prone to floating-point precision issues.

---

#### Example
```typescript
console.log(isPowerOfTwo(8)); // true (8 is 2**3)
console.log(isPowerOfTwo(5)); // false (5 is not a power of two)
console.log(isPowerOfTwo(0)); // false (0 is not a power of two)
```

---

### **3. Accessing and Manipulating the $n^{th}$ Bit**

#### Accessing the $n^{th}$ Bit
To access the $n^{th}$ bit of a number `x`, you can use the following formula:

```typescript
const bitLen = (n: number): number => {
  let length: number = 0;
  while (n > 0) {
    n >>= 1;
    length++;
  }
  return length;
};

const accessBit = (x: number, n: number): number => (x >> (n - 1)) & 1;
```

**Explanation**:
- `bitLen(x)` calculates the total number of bits in `x`.
- `(x >> (bitLen(x) - n))` shifts the $n^{th}$ bit to the least significant position.
- `& 1` isolates the bit.

**Example**:
```typescript
const x = 0b1010; // Binary 10 (1010)
console.log(accessBit(x, 2)); // Output: 1 (second bit from the right)
```

---

#### Toggling the $n^{th}$ Bit
To toggle the $n^{th}$ bit of a number `x`, use the XOR (`^`) operator:
```typescript
const toggleBit = (x: number, n: number): number => x ^ (1 << (n - 1));
```

**Explanation**:
- `1 << (n - 1)` creates a mask with a `1` at the $n^{th}$ position.
- `x ^ mask` flips the $n^{th}$ bit (0 -> 1 or 1 -> 0).

**Example**:
```typescript
const x = 0b1010; // Binary 10 (1010)
console.log(toggleBit(x, 3).toString(2)); // Output: 1110 (toggles the third bit)
```

---

#### Setting the $n^{th}$ Bit**
To set the $n^{th}$ bit of a number `x` to `1`, use the OR (`|`) operator:
```typescript
const setBit = (x: number, n: number): number => x | (1 << (n - 1));
```

**Explanation**:
- `1 << (n - 1)` creates a mask with a `1` at the $n^{th}$ position.
- `x | mask` ensures the $n^{th}$ bit is set to `1`.

**Example**:
```typescript
const x = 0b1010; // Binary 10 (1010)
console.log(setBit(x, 2).toString(2)); // Output: 1010 (no change, bit already set)
console.log(setBit(x, 3).toString(2)); // Output: 1110 (sets the third bit)
```

---

#### Unsetting the $n^{th}$ Bit**
To unset the $n^{th}$ bit of a number `x` (set it to `0`), use the AND (`&`) operator with a negated mask:

```typescript
const unsetBit = (x: number, n: number): number => x & ~(1 << (n - 1));
```

**Explanation**:
- `1 << (n - 1)` creates a mask with a `1` at the $n^{th}$ position.
- `~mask` inverts the mask, making the $n^{th}$ bit `0` and all others `1`.
- `x & ~mask` ensures the $n^{th}$ bit is set to `0`.

**Example**:
```typescript
const x = 0b1010; // Binary 10 (1010)
console.log(unsetBit(x, 2).toString(2)); // Output: 1000 (unsets the second bit)
console.log(unsetBit(x, 3).toString(2)); // Output: 1010 (no change, bit already unset)
```

---

### **4. Calculating the Bit Length of a Number**

The function `bitLen` calculates the number of bits required to represent a number `n` in binary. Here's how it works:

```typescript
const bitLen = (n: number): number => {
  let length: number = 0;
  while (n > 0) {
    n >>= 1;
    length++;
  }
  return length;
};
```

---

#### Explanation
1. **Initialization**:
   - Start with `length = 0` to count the number of bits.

2. **Right Shift Operation**:
   - `n >>= 1` shifts the bits of `n` to the right by 1 position, effectively dividing `n` by 2.
   - This removes the least significant bit (LSB) of `n` in each iteration.

3. **Counting Bits**:
   - Each right shift reduces the number of bits in `n` by 1.
   - Increment `length` by `1` for each shift until `n` becomes `0`.

4. **Termination**:
   - The loop stops when `n` is reduced to `0`, meaning all bits have been processed.
   - The final value of `length` is the total number of bits required to represent the original number `n`.

---

#### Example
For `n = 10` (binary `1010`):
- Iteration 1: `n = 10 >> 1 = 5` (binary `101`), `length = 1`
- Iteration 2: `n = 5 >> 1 = 2` (binary `10`), `length = 2`
- Iteration 3: `n = 2 >> 1 = 1` (binary `1`), `length = 3`
- Iteration 4: `n = 1 >> 1 = 0` (binary `0`), `length = 4`

The function returns `4`, which is the correct number of bits for `10` (binary `1010`).

---

#### Why This Works
- Each right shift (`>>= 1`) removes the LSB of `n`, effectively counting one bit.
- The loop continues until all bits are removed (`n = 0`), ensuring all bits are counted.
- This method works for any positive integer and is efficient for bit-length calculation.

---

### **5. Multiplying a Number by $2^n$ Using Left Shifts**

The operation of multiplying a number `x` by $2^n$ can be efficiently performed using a **left shift** (`<<`):

```typescript
const multiplyByPowerOfTwo = (x: number, n: number): number => x << n;
```

---

#### Explanation
1. **Left Shift Operation**:
   - Shifting a number `x` left by `n` positions is equivalent to multiplying `x` by $2^n$.
   - Each left shift doubles the value of `x`.

2. **Example**:
   - $5 \times 2^3 = 5 \times 8 = 40$
   - In binary: `5` is `0b101`. Shifting left by `3` gives `0b101000`, which is `40`.

3. **Efficiency**:
   - Bitwise shifts are extremely fast and avoid the overhead of multiplication.

---

#### Example
```typescript
console.log(multiplyByPowerOfTwo(5, 3)); // 40 (5 * 2^3)
console.log(multiplyByPowerOfTwo(10, 2)); // 40 (10 * 2^2)
```

---

### **6. Dividing a Number by $2^n$ Using Right Shifts**

The operation of dividing a number `x` by $2^n$ can be efficiently performed using a **right shift** (`>>`):

```typescript
const divideByPowerOfTwo = (x: number, n: number): number => x >> n;
```

---

#### Explanation
1. **Right Shift Operation**:
   - Shifting a number `x` right by `n` positions is equivalent to dividing `x` by $2^n$ and truncating the result (floor division).
   - Each right shift halves the value of `x`.

2. **Example**:
   - $40 \div 2^3 = 40 \div 8 = 5$
   - In binary: `40` is `0b101000`. Shifting right by `3` gives `0b101`, which is `5`.

3. **Efficiency**:
   - Bitwise shifts are faster than division and avoid floating-point operations.

---

#### Example
```typescript
console.log(divideByPowerOfTwo(40, 3)); // 5 (40 / 2^3)
console.log(divideByPowerOfTwo(10, 1)); // 5 (10 / 2^1)
```

---

#### Key Points
- **Left Shift (`<<`)**:
  - Use to multiply a number by $2^n$.
  - Example: `x << n` is equivalent to $x \times 2^n$.

- **Right Shift (`>>`)**:
  - Use to divide a number by $2^n$ (with truncation).
  - Example: `x >> n` is equivalent to $\lfloor x \div 2^n \rfloor$.

- **Efficiency**:
  - Bitwise shifts are faster than arithmetic operations like multiplication or division.
  - They are ideal for performance-critical code.

---

#### Edge Cases
1. **Negative Numbers**:
   - Right shifts on negative numbers preserve the sign bit (arithmetic right shift).
   - Example: `-10 >> 1` results in `-5`.

2. **Zero**:
   - Shifting `0` left or right always results in `0`.

3. **Large Shifts**:
   - Shifting beyond the bit length of the number results in `0` for positive numbers.

---


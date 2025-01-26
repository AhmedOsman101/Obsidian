# Bitwise Operations

## 10 Bitwise Operations Tricks

### **1. Odd or Even Check Using Bitwise AND**

The **least significant bit (LSB)** of a number determines whether it is odd or even:
- If the LSB is `0`, the number is **even**.
- If the LSB is `1`, the number is **odd**.

We can use the bitwise AND operation (`&`) with `1` to isolate the LSB:
- If `n & 1` is `0`, the number is even.
- If `n & 1` is `1`, the number is odd.

---

#### Formula
```
(n & 1) === 0;
```

---

**Examples**
1. For `n = 6`:

   ```
   6 in binary: 110
   1 in binary: 001
   ---------------
   6 & 1 = 110 & 001 = 000 (0) -> Even
   ```

2. For `n = 5`:
   
   ```
   5 in binary: 101
   1 in binary: 001
   ---------------
   5 & 1 = 101 & 001 = 001 (1) -> Odd
   ```

---

#### Code Implementation

```typescript
const EvenOrOdd = (n: number): bool => (n & 1) === 0;

// Example usage:
console.log(checkOddOrEven(6)); // Output: true
console.log(checkOddOrEven(5)); // Output: false
```

---

#### Why This Works
- The number `1` in binary is `000...0001`. When you perform `n & 1`, all bits except the LSB are masked out.
- If the LSB is `0`, the result is `0` (even).
- If the LSB is `1`, the result is `1` (odd).

This method is **efficient** because bitwise operations are computationally cheap and faster than using modulo (`%`).

---

#### Comparison with Modulo

Alternatively, you could use the modulo operator:

```typescript
const result = n % 2 === 0 ? "Even" : "Odd";
```

However, the bitwise approach (`n & 1`) is generally **faster** and more concise.

---

### **2. Check the Number Is a Power of Two**

#### Why It Works
A power of two in binary has exactly **one bit set**, e.g.,  
- `1` → `0001`  
- `2` → `0010`  
- `4` → `0100`  
- `8` → `1000`  

When you subtract `1` from a power of two, all bits **below** the single set bit become `1`, e.g.,  
- `8 (1000) - 1 = 7 (0111)`  
- `4 (0100) - 1 = 3 (0011)`  

If you perform `x & (x - 1)`:
- For a power of two: The result is `0` because there are no overlapping set bits.
  ```
  8 & 7 → 0b1000 & 0b0111 = 0b0000
  ```
- For non-powers of two: The result is non-zero because overlapping bits exist.
  ```
  5 & 4 → 0b0101 & 0b0100 = 0b0100 (non-zero)
  ```

>[!Note] 
> **Edge Case**: `x = 0` must be explicitly excluded (since `0 & -1 = 0`, but `0` is not a power of two).

---

#### Code Implementation

```typescript
const isPowerOfTwo = (x: number): boolean => x != 0 && !(x & (x - 1));
```

**Examples**:
- `isPowerOfTwo(8) → true`  
- `isPowerOfTwo(5) → false`  
- `isPowerOfTwo(0) → false`  

This works because it directly checks if the number has exactly **one bit set** in its binary representation.

---

### **Accessing and Manipulating the $n^{th}$ Bit**

#### 1. Accessing the $n^{th}$ Bit
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

#### 2. Toggling the $n^{th}$ Bit
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

#### 3. Setting the $n^{th}$ Bit**
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

#### 4. Unsetting the $n^{th}$ Bit**
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

### **Calculating the Bit Length of a Number**

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


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

### Formula
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

### Implementation in TypeScript
```typescript
const EvenOrOdd = (n: number): bool => (n & 1) === 0;

// Example usage:
console.log(checkOddOrEven(6)); // Output: true
console.log(checkOddOrEven(5)); // Output: false
```

---

### Why This Works
- The number `1` in binary is `000...0001`. When you perform `n & 1`, all bits except the LSB are masked out.
- If the LSB is `0`, the result is `0` (even).
- If the LSB is `1`, the result is `1` (odd).

This method is **efficient** because bitwise operations are computationally cheap and faster than using modulo (`%`).

---

### Comparison with Modulo
Alternatively, you could use the modulo operator:
```typescript
const result = n % 2 === 0 ? "Even" : "Odd";
```

However, the bitwise approach (`n & 1`) is generally **faster** and more concise.

---

### **2. Check the Number Is a Power of Two**

### Why It Works
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

### Code Implementation

```typescript
const isPowerOfTwo = (x: number): boolean => x != 0 && !(x & (x - 1));
```

**Examples**:
- `isPowerOfTwo(8) → true`  
- `isPowerOfTwo(5) → false`  
- `isPowerOfTwo(0) → false`  

This works because it directly checks if the number has exactly **one bit set** in its binary representation.

---

### 3. Accessing/manipulating the $n^{th}$ Bit

#### Access
To access the $n^{th}$ bit of a number we can use the following formula: `(x >> (length(x) - n)) & 1` where `n` is the bit we want and `x` is the number we are searching in.

##### Code Implementation

```typescript
const bitLen = (n: number): number => {
  let length: number = 0;

  while (n > 0) {
    n >>= 1; // Right shift (equivalent to dividing by 2)
    length++;
  }
  return length;
};

const accessNBit = (x: number, n: number): number => (x >> (bitLen(x) - n)) & 1;
```

#### Toggling

We can toggle a bit with this formula: `x ^ (1 << n - 1)`, utilizing the XOR logic gate which returns `1` for different entries and `0` for similar entries.

##### Code Implementation

```typescript
const toggleBit = (x: number, n: number): number => x ^ (1 << (n - 1));
```

#### Setting

##### Code Implementation

```typescript
const setBit = (x: number, n: number): number => x | (1 << (n - 1));
```

#### Unsetting

##### Code Implementation

```typescript
const unsetBit = (x: number, n: number): number => x & ~(1 << (n - 1));
```
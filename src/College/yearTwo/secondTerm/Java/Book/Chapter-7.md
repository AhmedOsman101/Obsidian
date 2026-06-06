---
title: Chapter 7
prev:
  text: "Chapter 6"
  link: "/College/yearTwo/secondTerm/Java/Book/Chapter-6"
next:
  text: "Chapter 8"
  link: "/College/yearTwo/secondTerm/Java/Book/Chapter-8"
---

## Single-Dimensional Arrays

### 7.1 Why Arrays?

An **array** stores a fixed-size sequential collection of elements of the same type. Without arrays, storing 100 numbers means declaring 100 separate variables. An array variable references the entire collection; individual elements are accessed via an **index**.

### 7.2 Array Basics

**Declaration** (no memory allocated yet):
```java
elementType[] arrayRefVar;   // preferred
elementType arrayRefVar[];   // C-style, allowed but not preferred
```

**Creating an array** (allocates memory):
```java
arrayRefVar = new elementType[arraySize];
// Combined:
elementType[] arrayRefVar = new elementType[arraySize];
```

**Array size** is fixed after creation, accessed via `arrayRefVar.length`.

**Default values** when created: `0` for numeric primitives, `\u0000` for `char`, `false` for `boolean`.

**Accessing elements**: 0-based index from `0` to `length - 1`. Syntax: `arrayRefVar[index]`.

```java
double[] myList = new double[10];
myList[0] = 5.6;
myList[9] = 11123;  // last element
```

**Array initializer** — combines declaration, creation, and initialization:
```java
elementType[] arrayRefVar = {value0, value1, ..., valuek};
// CANNOT split — this is wrong:
// double[] myList;
// myList = {1.9, 2.9, 3.4, 3.5}; // Syntax error
```

**Processing arrays** — common operations:
| Operation | Code Pattern |
|-----------|-------------|
| Initialize with input | `myList[i] = input.nextDouble();` |
| Initialize with random | `myList[i] = Math.random() * 100;` |
| Display | `System.out.print(myList[i] + " ");` |
| Sum | `total += myList[i];` |
| Find max | `if (myList[i] > max) max = myList[i];` |
| Find max index | Separate `indexOfMax` variable, update on `>` |
| Random shuffle | Generate random `j`, swap `myList[i]` with `myList[j]` |
| Shift left | `myList[i-1] = myList[i];` in loop from 1 |

> [!NOTE]
> `char[]` arrays can be printed with a single `System.out.println(city);` — other types must be printed element by element.

**Foreach loop** — traverse array sequentially without index:
```java
for (elementType element : arrayRefVar) {
  // Process element
}
```
Cannot modify elements or traverse in different order with foreach.

> [!WARNING]
> **ArrayIndexOutOfBoundsException** — accessing index beyond `length - 1`. Common **off-by-one error**: using `<=` instead of `<` in loop condition. Foreach loops avoid this.

### 7.3 Case Study: AnalyzeNumbers

```java
double[] numbers = new double[n];
double sum = 0;
for (int i = 0; i < n; i++) {
  numbers[i] = input.nextDouble();
  sum += numbers[i];
}
double average = sum / n;
int count = 0;
for (int i = 0; i < n; i++)
  if (numbers[i] > average) count++;
```
Two-pass: first pass reads and sums, second pass counts above average.

### 7.4 Case Study: Deck of Cards

Represent a 52-card deck as `int[] deck = new int[52]` initialized to 0–51. Suit: `cardNumber / 13` (0=Spades,1=Hearts,2=Diamonds,3=Clubs). Rank: `cardNumber % 13` (0=Ace,1=2,...,10=Jack,11=Queen,12=King). Use string arrays for names:
```java
String[] suits = {"Spades", "Hearts", "Diamonds", "Clubs"};
String[] ranks = {"Ace", "2", "3", ..., "Queen", "King"};
```
Shuffle by swapping each element with a random element, then display first 4 cards.

### 7.5 Copying Arrays

`list2 = list1;` copies only the **reference** — both variables point to the same array. The old array becomes **garbage** (auto-collected by JVM).

Three correct ways to copy:
1. **Loop** — copy element by element
2. **`System.arraycopy(source, srcPos, target, tarPos, length)`** — static method, target must already exist
3. **`clone()`** — covered in Chapter 13

```java
int[] targetArray = new int[sourceArray.length];
System.arraycopy(sourceArray, 0, targetArray, 0, sourceArray.length);
```

> [!WARNING]
> `System.arraycopy` has lowercase 'c' in 'copy', violating Java naming convention.

### 7.6 Passing Arrays to Methods

Java uses **pass-by-value** for primitives (value copied) and **pass-by-sharing** for arrays (reference copied). The method receives the reference, so changes to array elements affect the caller's array.

```java
public static void printArray(int[] array) {
  for (int i = 0; i < array.length; i++)
    System.out.print(array[i] + " ");
}
// Invoke with anonymous array:
printArray(new int[]{3, 1, 2, 6, 4, 2});
```

> [!NOTE] **Anonymous array**: created with `new elementType[]{value0, value1, ...}` without assigning it to a variable. Used when an array is needed only as an argument to a method. The syntax `new int[]{3, 1, 2}` above is an anonymous array — no variable name, used inline.

> [!WARNING]
> `swap(a[0], a[1])` does NOT swap array elements — only copies of values are passed. To swap, pass the array itself and swap `array[0]` with `array[1]`.

### 7.7 Returning an Array from a Method

A method can return an array — the **reference** is returned.
```java
public static int[] reverse(int[] list) {
  int[] result = new int[list.length];
  for (int i = 0, j = result.length - 1; i < list.length; i++, j--)
    result[j] = list[i];
  return result;
}
```

### 7.8 Case Study: Counting Letter Occurrences

Generate 100 random lowercase letters, count each using an array of 26 ints:
```java
int[] counts = new int[26];
for (int i = 0; i < chars.length; i++)
  counts[chars[i] - 'a']++;
```
The expression `chars[i] - 'a'` maps `'a'`→0, `'b'`→1, ..., `'z'`→25.

### 7.9 Variable-Length Argument Lists

Syntax: `typeName... parameterName` — only one per method, must be the **last** parameter. Java treats it as an array.
```java
public static void printMax(double... numbers) {
  if (numbers.length == 0) { ... }
  // use numbers[i] like an array
}
// Invoke with multiple args or array:
printMax(34, 3, 3, 2, 56.5);
printMax(new double[]{1, 2, 3});
```

### 7.10 Searching Arrays

**Linear search** — compares key sequentially with each element. Returns index if found, `-1` if not. O(n) — inefficient for large arrays. Works on unsorted data.

```java
public static int linearSearch(int[] list, int key) {
  for (int i = 0; i < list.length; i++)
    if (key == list[i]) return i;
  return -1;
}
```

**Binary search** — requires **sorted** (ascending) array. Compares key with middle element; eliminates half the array each comparison. O(log n) — 11 comparisons for 1024 elements vs 1024 for linear.

```java
public static int binarySearch(int[] list, int key) {
  int low = 0, high = list.length - 1;
  while (high >= low) {
    int mid = (low + high) / 2;
    if (key < list[mid])        high = mid - 1;
    else if (key == list[mid])  return mid;
    else                        low = mid + 1;
  }
  return -low - 1;  // insertion point
}
```

> [!WARNING]
> `(low + high) / 2` can overflow for very large int values. Fix: `low + (high - low) / 2`.

> [!WARNING] **Binary search edge case: `high >= low` vs `high > low`**
> Using `high > low` instead of `high >= low` in the while condition causes failure on **single-element arrays** and when the key is at a position where `low == high`. The correct condition is `high >= low`. Without `>=`, the loop exits prematurely and the element is never compared.

Return value `-low - 1`: if key not found, `-k - 1` gives the insertion position. E.g., `-1` means insert at 0, `-6` means insert at 5.

> [!NOTE] **Binary search pre/postcondition**: **Precondition** — the list must be sorted in ascending order. **Postcondition** — returns the index of the matching element if found, or a negative value `-k - 1` where `k` is the insertion point (the position where the key would be inserted to maintain sorted order).

### 7.11 Sorting: Selection Sort

Repeatedly find the smallest element and swap it into position. O(n²).

```java
for (int i = 0; i < list.length - 1; i++) {
  double currentMin = list[i];
  int currentMinIndex = i;
  for (int j = i + 1; j < list.length; j++) {
    if (currentMin > list[j]) {
      currentMin = list[j];
      currentMinIndex = j;
    }
  }
  if (currentMinIndex != i) {
    list[currentMinIndex] = list[i];
    list[i] = currentMin;
  }
}
```

### 7.12 The `java.util.Arrays` Class

| Method | Description |
|--------|-------------|
| `sort(array)` / `sort(array, from, to)` | Sorts whole or partial array (ascending) |
| `parallelSort(array)` | Same as sort, faster on multi-core |
| `binarySearch(array, key)` | Binary search (array must be sorted) |
| `equals(array1, array2)` | Checks if arrays have same elements in same order |
| `fill(array, value)` / `fill(array, from, to, value)` | Fills array with value |
| `toString(array)` | Returns string like `[2, 4, 7, 10]` |

All methods overloaded for all primitive types.

### 7.13 Command-Line Arguments

`main(String[] args)` receives command-line arguments as an array of strings. Java interpreter creates `args = new String[n]` with n arguments. If no arguments: `args.length == 0` (empty array, not null).

```bash
java TestMain arg0 arg1 arg2
# args[0]="arg0", args[1]="arg1", args[2]="arg2"
```
Strings with spaces: enclose in double quotes. Numbers become strings — use `Integer.parseInt(args[0])` to convert.

**Calculator case study** — receives 3 args: `operand1 operator operand2`:
```java
if (args.length != 3) {
  System.out.println("Usage: java Calculator operand1 operator operand2");
  System.exit(1);
}
int result = 0;
switch (args[1].charAt(0)) {
  case '+': result = Integer.parseInt(args[0]) + Integer.parseInt(args[2]); break;
  case '-': result = Integer.parseInt(args[0]) - Integer.parseInt(args[2]); break;
  case '.': result = Integer.parseInt(args[0]) * Integer.parseInt(args[2]); break;  // not '*'
  case '/': result = Integer.parseInt(args[0]) / Integer.parseInt(args[2]);
}
```

> [!WARNING]
> Use `.` for multiplication instead of `*` because `*` expands to all files in the current directory on the command line.

---

*106 min source → ~15 min read*

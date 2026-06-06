---
title: Chapter 4
prev:
  text: "Chapter 3"
  link: "/College/yearTwo/secondTerm/Java/Chapter-3"
next:
  text: "Chapter 5"
  link: "/College/yearTwo/secondTerm/Java/Chapter-5"
---

## Mathematical Functions, Characters, and Strings

### The Math Class

**Math class** is in the `java.lang` package — automatically imported. All its methods are **static** (called on the class, not an instance).

#### Trigonometric Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `Math.sin(double rad)` | Sine of angle in radians | `double` |
| `Math.cos(double rad)` | Cosine | `double` |
| `Math.tan(double rad)` | Tangent | `double` |
| `Math.asin(double rad)` | Arc sine (returns angle in radians, range `-π/2` to `π/2`) | `double` |
| `Math.acos(double rad)` | Arc cosine (returns angle in radians, range `0` to `π`) | `double` |
| `Math.atan(double rad)` | Arc tangent (returns angle in radians, range `-π/2` to `π/2`) | `double` |
| `Math.toRadians(double deg)` | Converts degrees to radians | `double` |
| `Math.toDegrees(double rad)` | Converts radians to degrees | `double` |

```java
// Converting degrees to radians for trig methods
Math.sin(Math.toRadians(90));  // → 1.0
Math.cos(Math.toRadians(0));   // → 1.0
```

> [!WARNING]
> Trig methods expect **radians**, not degrees. Use `Math.toRadians()` to convert.

#### Exponent Methods

| Method | Description |
|--------|-------------|
| `Math.exp(double x)` | Returns *e*ˣ |
| `Math.log(double x)` | Returns *ln*(*x*) (natural log, *e* base) |
| `Math.log10(double x)` | Returns log₁₀(*x*) |
| `Math.pow(double a, double b)` | Returns *a*ᵇ (very slow for integer exponents) |
| `Math.sqrt(double x)` | Returns √*x* (alias: `Math.pow(x, 0.5)`) |

> [!WARNING]
> For `sqrt`, the argument must be ≥ 0. Passing negative returns `NaN`.

#### Rounding Methods

| Method | Description | Behavior |
|--------|-------------|----------|
| `Math.ceil(double x)` | Rounds **up** to nearest integer | `Math.ceil(2.1)` → `3.0` |
| `Math.floor(double x)` | Rounds **down** to nearest integer | `Math.floor(2.9)` → `2.0` |
| `Math.rint(double x)` | Rounds to nearest **even** integer (banker's rounding) | `Math.rint(2.5)` → `2.0`, `Math.rint(3.5)` → `4.0` |
| `Math.round(double x)` | Standard rounding (adds 0.5 then floor) | `Math.round(2.5)` → `3`, `Math.round(2.4)` → `2` |
| `Math.round(float x)` | Same, returns `int` | `Math.round(2.5f)` → `3` |

> [!WARNING]
> `Math.rint(2.5)` returns `2.0`, not `3.0` — it rounds to the nearest **even** integer. `Math.round(2.5)` returns `3` (standard arithmetic rounding).

#### min, max, and abs Methods

| Method | Overloads |
|--------|-----------|
| `Math.min(a, b)` | `int`, `long`, `float`, `double` |
| `Math.max(a, b)` | `int`, `long`, `float`, `double` |
| `Math.abs(a)` | `int`, `long`, `float`, `double` |

> [!WARNING]
> `Math.abs(Integer.MIN_VALUE)` returns `Integer.MIN_VALUE` (negative) due to overflow — the positive counterpart doesn't exist in 32-bit range.

#### random Method

`Math.random()` returns a `double` in range `[0.0, 1.0)` — includes 0.0, excludes 1.0.

```java
// Formula for generating random integers
(int)(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;

// Examples:
(int)(Math.random() * 10);             // 0 to 9
(int)(Math.random() * 10) + 1;         // 1 to 10
(int)(Math.random() * 26) + 65;        // Uppercase letter (A-Z ASCII 65-90)
(int)(Math.random() * 26) + 'A';       // Same, using char arithmetic
(int)(Math.random() * 10) + 20;        // 20 to 29
```

> [!WARNING]
> If `lowerBound` > `upperBound`, the formula still "works" numerically but produces unexpected ranges — always verify bounds are correct before using.

---

### Character Data Type and Operations

`char` represents a single 16-bit Unicode character (from `'\u0000'` to `'\uFFFF'`, or `0` to `65535`).

```java
char letter = 'A';       // char literal uses single quotes
char digit = '4';
char punct = '!';
char unicode = '\u0041'; // 'A' in hexadecimal
char decimal = 65;       // Also 'A' — char is a numeric type
```

> [!WARNING]
> `char` literals use **single quotes** (`'A'`). Double quotes (`"A"`) denote a **String**, not a char. `char c = "A";` is a compile error.

#### ASCII and Unicode

- **ASCII**: 128 characters (0–127), 7-bit subset of Unicode
- **Unicode**: Supports characters from most world languages (16-bit)
- **`'0'` to `'9'`**: ASCII codes 48–57
- **`'A'` to `'Z'`**: ASCII codes 65–90
- **`'a'` to `'z'`**: ASCII codes 97–122
- **Difference** between upper/lowercase: 32 (`'a' - 'A' = 32`)

```java
// Converting case using arithmetic
char upper = 'A';
char lower = (char)(upper + 32);  // 'a'
```

#### Escape Sequences

Escape sequences start with backslash `\` inside a character or string literal:

| Escape | Unicode | Description |
|--------|---------|-------------|
| `\b` | `\u0008` | Backspace |
| `\t` | `\u0009` | Tab |
| `\n` | `\u000A` | Line feed (newline) |
| `\f` | `\u000C` | Form feed |
| `\r` | `\u000D` | Carriage return |
| `\\` | `\u005C` | Backslash |
| `\"` | `\u0022` | Double quote (inside string) |
| `\'` | `\u0027` | Single quote (inside char) |

> [!WARNING]
> A backslash in a string that doesn't start a valid escape sequence is a **compile error**. Use `\\` for a literal backslash.

#### Casting Between char and Numeric Types

```java
char ch = 'A';
int code = (int)ch;     // 65 — explicit cast, implicit also works
char ch2 = (char)65;    // 'A' — must cast int to char (narrowing)
char ch3 = (char)(ch + 1); // 'B' — must cast, arithmetic promotes to int

// Adding to char without cast promotes to int
int result = 'A' + 1;   // 66, not 'B' — no cast needed
```

> [!WARNING]
> When performing arithmetic on `char` values, the result is promoted to `int`. Store in an `int` variable or **cast back** to `char`.

#### Comparing Characters

Characters are compared by their numeric (Unicode) values:

```java
'A' < 'B'   // true (65 < 66)
'a' < 'b'   // true (97 < 98)
'A' < 'a'   // true (65 < 97)
```

---

### Character Class Methods

The `Character` class provides **static methods** for char testing/conversion:

| Method | Description | Example |
|--------|-------------|---------|
| `Character.isLetter(char)` | Checks if letter (A–Z, a–z, or Unicode letter) | `isLetter('A')` → `true` |
| `Character.isDigit(char)` | Checks if digit (0–9) | `isDigit('5')` → `true` |
| `Character.isLetterOrDigit(char)` | Letter or digit | `isLetterOrDigit('#')` → `false` |
| `Character.isLowerCase(char)` | Lowercase letter | `isLowerCase('a')` → `true` |
| `Character.isUpperCase(char)` | Uppercase letter | `isUpperCase('A')` → `true` |
| `Character.toLowerCase(char)` | Converts to lowercase | `toLowerCase('A')` → `a` |
| `Character.toUpperCase(char)` | Converts to uppercase | `toUpperCase('b')` → `B` |
| `Character.isWhitespace(char)` | Whitespace (space, tab, newline) | `isWhitespace(' ')` → `true` |
| `Character.isAlphabetic(int codePoint)` | Broader than `isLetter` (includes some non-letter alphabetic chars) | — |

> [!WARNING]
> `Character.isAlphabetic()` accepts more than `isLetter()` — e.g., some Roman numerals, or certain modifier letters. Use `isLetter()` when strictly checking A–Z/a–z.

---

### The String Type

**String** is a **reference type** (class), not a primitive. A string is a sequence of characters enclosed in **double quotes**.

```java
String message = "Welcome to Java";
String empty = "";          // empty string (length 0)
String nullStr = null;      // no object assigned — different from ""
```

> [!WARNING]
> `null` ≠ `""`. A `null` string has **no object**; calling methods on it throws `NullPointerException`. An empty string `""` is a valid object with length 0.

#### Immutable Strings

Strings are **immutable** — once created, their content never changes. Methods like `toUpperCase()` return a **new** String object; the original is unchanged.

```java
String s = "hello";
s.toUpperCase();            // returns "HELLO", s still "hello"
String s2 = s.toUpperCase(); // assign result to capture change
```

#### String Variable vs Object

- **String variable**: A reference (memory address) pointing to a String object
- **String object**: The actual sequence of characters in memory
- Reference variables store addresses, not the value itself
- While the primitive `char` stores the actual Unicode value, `String` stores a reference

---

### Simple String Methods

| Method | Description | Example |
|--------|-------------|---------|
| `s.length()` | Returns number of characters | `"Java".length()` → `4` |
| `s.charAt(index)` | Returns char at index (0-based) | `"Java".charAt(0)` → `'J'` |
| `s.concat(t)` | Returns s + t (same as `+` operator) | `"Ja".concat("va")` → `"Java"` |
| `s.toUpperCase()` | Returns uppercase version | `"Java".toUpperCase()` → `"JAVA"` |
| `s.toLowerCase()` | Returns lowercase version | `"Java".toLowerCase()` → `"java"` |
| `s.trim()` | Removes leading/trailing whitespace | `" Java ".trim()` → `"Java"` |

> [!WARNING]
> Strings are indexed from **0** to `length() - 1`. Accessing `charAt(s.length())` throws `StringIndexOutOfBoundsException`.

```java
String s = "Welcome";
s.length()          // 7
s.charAt(0)         // 'W'
s.charAt(6)         // 'e'
s.charAt(s.length() - 1)  // 'e' (last character, standard pattern)
```

#### Concatenation

The `+` operator concatenates strings. If either operand is a `String`, the other is converted to string:

```java
String s = "Hello " + "World";     // "Hello World"
String s2 = "Number: " + 42;       // "Number: 42" (int → String)
String s3 = 1 + 2 + " = 3";        // "3 = 3" (1+2 evaluated first as int addition)
String s4 = "1 + 2 = " + 1 + 2;    // "1 + 2 = 12" (left-to-right, subsequent ints converted to string)
```

> [!WARNING]
> `1 + 2 + " = 3"` evaluates `1+2` first (int addition = 3), then concatenates → `"3 = 3"`. **Order matters** — left-to-right evaluation means numeric addition happens before string concatenation when numbers appear first.

#### Reading Strings from Console

```java
Scanner input = new Scanner(System.in);
String word = input.next();           // reads until whitespace (single token)
String line = input.nextLine();       // reads entire line (including spaces) until Enter
```

**Key difference:** `next()` stops at whitespace (space, tab, newline). `nextLine()` stops at newline only.

> [!WARNING]
> After `nextInt()` or `nextDouble()`, the newline (`\n`) is left in the buffer. A following `nextLine()` **immediately consumes that leftover newline** and returns an empty string. Always consume the leftover newline first:
> ```java
> int age = input.nextInt();
> input.nextLine();          // consume leftover \n
> String name = input.nextLine();  // now reads the actual name
> ```

#### Reading a Character from Console

Scanner has no `nextChar()`. Read a string then extract its first character:

```java
String s = input.nextLine();  // or input.next()
char ch = s.charAt(0);        // first character
```

---

### String Comparison Methods

> [!WARNING]
> **Never** use `==` to compare strings. `==` compares **references** (memory addresses), not character content. Two strings with identical content may be different objects.

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

s1 == s2               // true — JVM reuses same literal (string interning)
s1 == s3               // false — s3 is a different object in heap
s1.equals(s3)          // true — compares content
```

| Method | Description |
|--------|-------------|
| `s1.equals(s2)` | Returns `true` if strings are character-by-character identical |
| `s1.equalsIgnoreCase(s2)` | Case-insensitive comparison |
| `s1.compareTo(s2)` | Lexicographic comparison: negative if s1 < s2, 0 if equal, positive if s1 > s2 |
| `s1.compareToIgnoreCase(s2)` | Case-insensitive compareTo |
| `s1.startsWith(prefix)` | Returns `true` if s1 starts with `prefix` |
| `s1.endsWith(suffix)` | Returns `true` if s1 ends with `suffix` |
| `s1.contains(s2)` | Returns `true` if s2 is a substring of s1 |

```java
"abc".compareTo("abd")   // negative (c < d)
"abc".compareTo("abc")   // 0
"abc".compareTo("abb")   // positive (c > b)
```

> [!WARNING]
> `compareTo` is **case-sensitive** (uppercase < lowercase in Unicode). `"Hello".compareTo("hello")` returns a **negative** value because `'H'` (72) < `'h'` (104). Use `compareToIgnoreCase` for case-insensitive ordering.

---

### Getting Substrings

| Method | Description | Example |
|--------|-------------|---------|
| `s.substring(beginIndex)` | From `beginIndex` to end | `"Hello".substring(2)` → `"llo"` |
| `s.substring(begin, end)` | From `begin` to `end-1` | `"Hello".substring(1, 4)` → `"ell"` |

> [!WARNING]
> `substring(begin, end)` — the **end index is exclusive**. `"Hello".substring(1, 4)` returns characters at indices 1, 2, 3 (not 4). `end` must be ≤ `length()`, or `StringIndexOutOfBoundsException` is thrown.

```java
String s = "Welcome to Java";
s.substring(8)           // "to Java" (indices 8 to end)
s.substring(0, 7)        // "Welcome" (indices 0 to 6)
s.substring(8, 10)       // "to"
s.substring(0, s.length())  // "Welcome to Java" (whole string)
```

---

### Finding Characters and Substrings

| Method | Description |
|--------|-------------|
| `s.indexOf(char)` | Returns index of first occurrence, or **-1** if not found |
| `s.indexOf(char, fromIndex)` | Search starting at `fromIndex` |
| `s.indexOf(String)` | Returns index of first occurrence of substring |
| `s.indexOf(String, fromIndex)` | Search starting at `fromIndex` |
| `s.lastIndexOf(char)` | Returns index of last occurrence |
| `s.lastIndexOf(String)` | Returns index of last occurrence of substring |

```java
"Welcome".indexOf('e');       // 1 (first 'e')
"Welcome".indexOf('e', 2);    // 6 (second 'e')
"Welcome".lastIndexOf('e');   // 6
"Welcome".indexOf("come");    // 3
"Welcome".indexOf("abc");     // -1 (not found)
```

> [!WARNING]
> `indexOf` returns **-1** when not found — a common source of bugs if you try to use the result as an index without checking.

---

### Conversion Between Strings and Numbers

| Method | Description |
|--------|-------------|
| `Integer.parseInt(String)` | Converts string → `int` |
| `Double.parseDouble(String)` | Converts string → `double` |
| `Integer.parseInt(String, radix)` | Parse in given base (2, 8, 10, 16) |
| `String.valueOf(number)` | Converts number → string |

```java
int num = Integer.parseInt("42");       // 42
double d = Double.parseDouble("3.14");  // 3.14
int hex = Integer.parseInt("FF", 16);   // 255
String s = String.valueOf(123);         // "123"
```

> [!WARNING]
> `Integer.parseInt(" 42 ")` throws `NumberFormatException` (leading/trailing whitespace). Always `.trim()` the string first: `Integer.parseInt(s.trim())`.

---

### Formatting Console Output with printf

`System.out.printf(format, items)` — the `format` string contains plain text plus **format specifiers**:

```
%[flags][width][.precision]conversion-code
```

```java
System.out.printf("%6d%8.2f", 42, 3.14159);
// Output: "    42    3.14" (right-aligned by default)
```

| Conversion Code | Purpose | Example |
|-----------------|---------|---------|
| `%d` | Integer (byte, short, int, long) | `%4d` → width 4 |
| `%f` | Floating-point (float, double) | `%6.2f` → width 6, 2 decimal places |
| `%e` | Scientific notation | `%10.2e` |
| `%s` | String | `%10s` |
| `%c` | Character | `%4c` |
| `%b` | Boolean | `%6b` |
| `%n` | Newline (platform-independent) | `%n` |

```java
int count = 5;
double amount = 45.678;
System.out.printf("Count is %d, amount is $%5.2f%n", count, amount);
// "Count is 5, amount is $45.68"
```

#### Format Specifier Rules

| Component | Values | Meaning |
|-----------|--------|---------|
| Flag | `-` | Left-justify (default is right-justify) |
| Flag | `+` | Always show +/− sign |
| Flag | `(` | Enclose negative in parentheses |
| Flag | `,` | Use grouping separator (e.g., `1,000`) |
| Flag | `0` | Pad with leading zeros |
| Width | Integer ≥ 0 | Minimum characters to output |
| Precision | `.N` | Decimal places for `%f`; max chars for `%s` |

```java
System.out.printf("%-10s %5d %+6.1f%n", "Total", 42, -3.14);
// "Total         42   -3.1"
// (%-10s: left-aligned, 10 wide; %5d: right-aligned width 5; %+6.1f: always show sign)
```

> [!WARNING]
> Mismatched format specifiers and argument types cause `RuntimeException` (e.g., `%d` with a `String` argument). The number of specifiers must **exactly match** the number of items.

---

## Case Studies

### GuessBirthday.java (Calendar Magic)

Uses a set-of-sets strategy: 5 sets of numbers, each covering half the possible days (1–31). For each set, the user answers whether their birthday appears. The starting number of each set where they answer "yes" sums to the birthday.

Implementation trick: Each set's first number follows a binary pattern (Set1 starts with 1, Set2 with 2, Set3 with 4, Set4 with 8, Set5 with 16). Summing these first numbers across "yes" answers = the day.

### HexDigit2Dec.java

Converts a hex character to decimal:
- If char is `'0'`–`'9'`, value = `ch - '0'`
- If char is `'A'`–`'F'`, value = `ch - 'A' + 10`
- If char is `'a'`–`'f'`, value = `ch - 'a' + 10`

[!WARNING]
> Java chars are numeric types. Subtracting `'0'` from a digit char gives its integer value (`'9' - '0' = 57 - 48 = 9`). This works because digit chars are stored in consecutive Unicode positions.

### LotteryUsingStrings.java

Same as Chapter 3's lottery but uses string comparison instead of integer comparison. Generates a two-digit string, user guesses. Uses `equals()`, `charAt()`, and `Character.isDigit()` for validation and comparison.

---

## Common Errors and Pitfalls

1. **`==` with Strings** — compares references, not content. Always use `.equals()`.
2. **`nextLine()` after `nextInt()`** — leftover newline causes empty read. Consume it first with an extra `nextLine()`.
3. **`charAt(index)` out of bounds** — index must be 0 to `length()-1`.
4. **`index == -1` assumption** — `indexOf` returns -1 for not found; don't use result unchecked.
5. **String immutability** — methods return new strings; the original is unchanged. Always assign the result.
6. **`+` precedence with strings** — left-to-right evaluation means `1 + 2 + " = 3"` → `"3 = 3"`, not `"12 = 3"`.
7. **`null` pointer** — calling methods on `null` string throws `NullPointerException`. Always check with `if (s != null)`.
8. **`NumberFormatException`** — whitespace in string passed to `parseInt`/`parseDouble`. Call `.trim()` first.
9. **`printf` type mismatch** — wrong format specifier for argument type crashes at runtime.

---

> _Chapter 4 source: 94 min read → Summary: ~15 min read. Covers Math class, character operations, String methods, comparison, substring, parsing, and printf formatting._

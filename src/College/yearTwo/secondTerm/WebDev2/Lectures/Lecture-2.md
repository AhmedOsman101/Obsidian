---
prev:
  text: "Lecture 1"
  link: "/College/yearTwo/secondTerm/WebDev2/Lectures/Lecture-1"
next:
  text: "Lecture 3"
  link: "/College/yearTwo/secondTerm/WebDev2/Lectures/Lecture-3"
title: Lecture 2
---

# Web Development II - Lecture 2

## PHP Arrays

**Array** = an ordered, integer-indexed collection that can hold mixed types; replaces Java's list, stack, queue, set, and map all in one structure.

```php
$a = array();                          // empty array
$a2 = array("some", "strings", "in");  // initialized array
$a2[] = "Ooh!";                        // append — no index needed
$a2[0] = "replaced";                   // set by index (zero-based)
```

> [!CAUTION] `$a[]= value` appends; `$a[0] = value` overwrites index 0. Using a numeric index that skips positions creates sparse arrays — `count()` reflects actual elements, _not_ the highest index + 1 in sparse cases.

### Array Functions by Category

| Category        | Functions                                                                            |
| --------------- | ------------------------------------------------------------------------------------ |
| Size / Debug    | `count`, `print_r`                                                                   |
| Stack / Queue   | `array_push`, `array_pop` (end), `array_shift`, `array_unshift` (front)              |
| Search / Order  | `in_array`, `array_search`, `array_reverse`, `sort`, `rsort`, `shuffle`              |
| Create / Filter | `array_fill`, `array_merge`, `array_intersect`, `array_diff`, `array_slice`, `range` |
| Process         | `array_sum`, `array_product`, `array_unique`, `array_filter`, `array_reduce`         |

## Loops Over Arrays

**`for` loop** requires manual index and `count()`; **`foreach`** iterates without an index variable — use `foreach` when index is irrelevant, because it's less error-prone and more readable.

```php
// for — use when index value matters
for ($i = 0; $i < count($arr); $i++) { echo $arr[$i]; }

// foreach — preferred for pure iteration
foreach ($arr as $item) { echo $item; }
```

> [!NOTE] `foreach` cannot be used to _modify_ the original array by default. To modify in-place, use `foreach ($arr as &$item)` (pass by reference) or use a `for` loop with index assignment.

## Multidimensional Arrays

A **multidimensional array** is an array whose elements are themselves arrays — used to model tables/matrices.

```php
// Numeric indexing — access by row/column integers
$grid[$row][$col]

// Associative inner arrays — access by string key
$products[$row]["Price"]   // string key on inner array
```

**Associative array** = array with string keys instead of integers. _Do not mix numeric and associative indexing on the same array level without intention_ — PHP allows it but produces confusing behavior.

## String Comparison & Search Functions

All string functions are case-sensitive unless the function name contains `case` (e.g., **`strcasecmp`**).

| Function                         | Purpose                                      | Java Equivalent       |
| -------------------------------- | -------------------------------------------- | --------------------- |
| `strcmp($a, $b)`                 | Lexicographic compare -> negative/0/positive | `compareTo`           |
| `strcasecmp`                     | Case-insensitive compare                     | `compareToIgnoreCase` |
| `strstr($hay, $needle)`          | Returns substring from first match onward    | `contains` (partial)  |
| `strchr`                         | Alias of `strstr`                            | —                     |
| `strpos($hay, $needle, $offset)` | Returns integer position of first match      | `indexOf`             |
| `str_replace($find, $rep, $str)` | Replace all occurrences                      | `replace`             |
| `substr_replace`                 | Replace within a positional range            | —                     |

> [!IMPORTANT] `strpos` returns `FALSE` (not `-1`) if not found. _Always use `=== FALSE`_ (strict equality) to check, because position `0` is falsy and `== FALSE` would incorrectly treat a match at index 0 as "not found."

## Regular Expressions

A **regular expression (regex)** is a pattern used to match text; PHP supports two dialects: **POSIX** and **Perl-compatible (PCRE)** — PCRE is preferred for new code.

| Pattern        | Matches                                      |
| -------------- | -------------------------------------------- |
| `[a-z]at`      | cat, rat, bat…                               |
| `[^a-z]`       | Any char _not_ in a–z                        |
| `[[:alnum:]]+` | One or more alphanumeric chars (POSIX class) |
| `(very)*large` | "large", "very large", "very very large"…    |
| `(very){1,3}`  | "very" repeated 1–3 times                    |
| `^bob`         | "bob" at the **start** of string             |
| `com$`         | "com" at the **end** of string               |

## Embedded PHP & Expression Blocks

**Embedded PHP** = PHP tags interspersed within HTML. The preferred style minimizes `print`/`echo` inside PHP blocks and uses **expression blocks** for output.

```php
<?= expression ?>     // shorthand — evaluates and prints expression
// Equivalent to: <?php print expression; ?>

<h2>Answer: <?= 6 * 7 ?></h2>   // outputs: Answer: 42
```

> [!CAUTION] `<? $i ?>` (missing `=`) is a **silent failure** — it runs but produces no output. `<?php` without `?>` closing before HTML causes parse errors labeled "unexpected `$end`".

Expression blocks can embed _inside HTML tag names_:

```php
<h<?= $i ?>>Heading level <?= $i ?></h<?= $i ?>>
// i=1 -> <h1>Heading level 1</h1>
```

## Functions

```php
function quadratic($a, $b, $c) {         // no type declarations
    return -$b + sqrt($b*$b - 4*$a*$c) / (2*$a);
}
```

- **Default parameter values**: assigned with `=` in signature; _defaults must come after required params_
- A function with **no `return`** implicitly returns `NULL`
- Parameters are passed **by value** by default; prefix `&` for pass-by-reference

```php
function print_separated($str, $separator = ", ") { ... }
print_separated("hello");        // uses default ", "
print_separated("hello", "-");   // overrides default
```

> [!NOTE] Unlike Java, PHP functions do not declare return types or parameter types. Type errors surface at runtime, not compile time — a common source of silent bugs.

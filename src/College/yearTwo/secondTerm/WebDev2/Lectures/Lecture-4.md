---
prev:
  text: "Lecture 3"
  link: "/College/yearTwo/secondTerm/WebDev2/Lectures/Lecture-3"
next: false
title: Lecture 4
---

# Web Development II - Lecture 4

## Form Validation: Concept & Placement

**Form validation** = the process of verifying that submitted form values are correct before acting on them. Validation catches: blank required fields, wrong data types (non-integer where integer expected), wrong format (ZIP must be exactly 5 digits), out-of-range values, and cross-field mismatches (two email fields must be identical).

### Client-Side vs. Server-Side Validation

| Aspect       | Client-Side                        | Server-Side                       |
| ------------ | ---------------------------------- | --------------------------------- |
| **When**     | Before submission (in browser)     | After submission (in PHP)         |
| **Speed**    | Instant feedback                   | Requires round-trip               |
| **Security** | _Bypassable_ — user can disable JS | Authoritative — cannot be skipped |
| **Best for** | UX convenience                     | Data integrity & security         |

> [!IMPORTANT] Client-side validation alone is **never sufficient**. A user can disable JavaScript or craft a manual HTTP request, bypassing it entirely. Server-side validation is mandatory; client-side is an optional UX enhancement.

**Best practice:** implement **both** — client-side for speed, server-side for security.

## Server-Side Validation with `$_REQUEST`

**`$_REQUEST`** = a PHP superglobal associative array that holds all query parameters submitted via a form (works for both GET and POST). Values are accessed by the `name` attribute used in the HTML form control.

```php
// Read submitted values — keys match HTML input name attributes
$city  = $_REQUEST["city"];
$state = $_REQUEST["state"];
$zip   = $_REQUEST["zip"];

// Validate: abort and show error if any check fails
if (!$city || strlen($state) != 2 || strlen($zip) != 5) {
?>
    <h2>Error: invalid city/state/ZIP submitted.</h2>
<?php
}
```

> [!CAUTION] `!$city` is TRUE if `$city` is empty string, `"0"`, `NULL`, or not set — all falsy. This is intentional for "blank field" checks, but _will incorrectly reject the string `"0"` as a city name_. Use `!isset($city) || $city === ""` for strict blank-only checks.

## Regular Expressions (Perl-Compatible / PREG)

A **regular expression (regex)** is a pattern that describes a set of matching strings. In PHP, **PCRE (Perl-Compatible Regular Expressions)** are preferred; their syntax wraps the pattern in **delimiters** (any non-alphanumeric, non-backslash character — `/` is standard).

```
/pattern/flags
/[A-Z]{2}/       <- matches exactly 2 uppercase letters
/^bob$/i         <- matches only "bob", case-insensitive (i flag)
```

## Regex Syntax Reference

### Quantifiers

| Symbol  | Meaning            | Example    | Matches                  |
| ------- | ------------------ | ---------- | ------------------------ |
| `*`     | 0 or more          | `/ab*/`    | "a", "ab", "abb"…        |
| `+`     | 1 or more          | `/ab+/`    | "ab", "abb"… (_not_ "a") |
| `?`     | 0 or 1             | `/ab?/`    | "a" or "ab" only         |
| `{n}`   | Exactly n          | `/a{3}/`   | "aaa" only               |
| `{n,m}` | n to m (inclusive) | `/a{2,4}/` | "aa", "aaa", "aaaa"      |
| `{n,}`  | n or more          | `/a{2,}/`  | "aa", "aaa"…             |

### Character Classes & Anchors

| Pattern  | Meaning                            |
| -------- | ---------------------------------- |
| `.`      | Any character except `\n`          |
| `[abc]`  | Any one of: a, b, or c             |
| `[a-z]`  | Any char in range a–z              |
| `[^abc]` | Any char **not** a, b, or c        |
| `\d`     | Any digit `[0-9]`                  |
| `\D`     | Any non-digit                      |
| `\w`     | Word char `[a-zA-Z0-9_]`           |
| `\s`     | Any whitespace (`\t`, `\n`, space) |
| `^`      | Start of string/line               |
| `$`      | End of string/line                 |

### Special Characters & Grouping

- **`|`** = OR: `/cat|dog/` matches "cat" or "dog"
- **`()`** = grouping for quantifiers or OR scope: `/(very){2}/`
- **`\`** = escape literal special characters: `/\./` matches a literal dot

> [!CAUTION] Inside `[]` (character sets), most special characters lose their meaning and match literally — _except_ `^` (negation when first), `-` (range), and `\` (escape). So `/[+*?]/` matches literal `+`, `*`, or `?` without escaping.

## PHP PREG Functions

```php
preg_match("/[A-Z]{2}/", $state)
// Returns TRUE (1) if $state matches; FALSE (0) if not

preg_replace("/[aeiou]/", "*", $str)
// Returns NEW string with all matches replaced — does NOT modify $str in place

preg_split("/[ ]+/", $str)
// Returns array of substrings split on 1+ spaces — like explode() but accepts regex
```

| Function                         | Returns        | Use case                       |
| -------------------------------- | -------------- | ------------------------------ |
| `preg_match(regex, str)`         | `TRUE`/`FALSE` | Validate format                |
| `preg_replace(regex, repl, str)` | New string     | Sanitize/transform input       |
| `preg_split(regex, str)`         | Array          | Tokenize on complex delimiters |

> [!NOTE] `preg_match` stops at the **first** match — it does not count or find all occurrences. To find all matches, use `preg_match_all`.

## Validation Pattern: Combining `$_REQUEST` + PREG

```php
$state = $_REQUEST["state"];

// Pattern: exactly 2 uppercase letters
if (!preg_match("/^[A-Z]{2}$/", $state)) {
?>
    <h2>Error: invalid state submitted.</h2>
<?php
}
```

> [!IMPORTANT] Anchor with `^` and `$` when validating whole-field values. Without anchors, `/[A-Z]{2}/` matches `"aXYz"` because it finds "XY" inside the string — it does **not** require the entire string to be 2 uppercase letters.

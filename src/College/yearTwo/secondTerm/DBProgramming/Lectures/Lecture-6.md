---
prev:
  text: "Lecture 5"
  link: "/College/yearTwo/secondTerm/DBProgramming/Lectures/Lecture-5"
next: false
title: Lecture 6
---

# Database Programming - Lecture 6

## String Functions: Adding and Manipulating Text

**String functions** are built-in MySQL operations that manipulate text values before display or storage. This matters because raw data often needs transformation: combining columns, extracting parts, fixing case, or finding patterns inside text. The lecture groups string operations into adding, changing, finding, extracting, and transforming text.

**CONCAT()** adds text values together into a single result. This is used when joining first and last names, or building full addresses from separate columns. The syntax requires parentheses around the arguments, and any argument can be a column, string literal, or expression.

```sql
-- Purpose: Combine first and last name into full name
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM users;
```

**REPLACE(string, old_text, new_text)** replaces every occurrence of old_text within string with new_text. This matters for correcting typos, normalizing values, or removing unwanted characters. The function is case-sensitive and replaces all matches, not just the first one.

> [!IMPORTANT]
> _REPLACE() replaces every occurrence in the entire string, not just the first match. For selective replacement, combine it with LOCATE()._

## Finding and Extracting Text

**LOCATE(substring, string)** returns the position of the first occurrence of substring within string, or 0 if not found. This matters because it enables dynamic text operations without knowing exact positions. The position count starts at 1, not 0.

**LENGTH(string)** returns the number of characters in string, counting each character including spaces. This matters for validation rules such as username length limits or tracking string sizes.

**INSERT(string, position, length, new_text)** replaces a portion of string starting at position with new_text for the specified length. The lecture clarifies that this INSERT is a string function, not the SQL INSERT statement for adding rows. A position of 1 inserts at the start; position after the last character appends at the end.

```sql
-- Purpose: Insert year after first word using LOCATE to find position
INSERT(title, LOCATE(' ', title), 0, '2024 ')
```

> [!WARNING]
> _The string INSERT() function differs from the SQL INSERT statement. INSERT() modifies text; INSERT statement adds rows to tables._

**LEFT(string, n)** returns the first n characters from the left of string. **RIGHT(string, n)** returns the last n characters from the right. **MID(string, position, length)** extracts characters starting at position for the given length. These matter for fixed-format data such as extracting area codes, product codes, or date parts from combined fields.

| Function               | Returns                  | Starting point     |
| ---------------------- | ------------------------ | ------------------ |
| **LEFT(str, n)**       | First n characters       | Left edge          |
| **RIGHT(str, n)**      | Last n characters        | Right edge         |
| **MID(str, pos, len)** | Characters from position | Specified position |

## Transforming and Reversing Text

**LCASE(string)** converts all characters to lowercase, while **UCASE(string)** converts all characters to uppercase. These matter for case normalization before comparisons or searches. The lecture also covers **SUBSTRING()** as an alternative to MID() with identical behavior.

**REVERSE(string)** returns the string with characters in reverse order. This matters for palindrome checking or generating reverse patterns.

```sql
-- Purpose: Transform and extract examples
SELECT LCASE('HELLO') AS lower, UCASE('hello') AS upper,
       LEFT('Database', 4) AS left_part, REVERSE('abc') AS reversed;
```

## Numeric Functions: Rounding and Truncating

**Numeric functions** operate on number values to produce calculated results. The lecture groups them into rounding and truncation operations.

**FLOOR(number)** returns the largest integer less than or equal to number, effectively rounding down. This matters for calculations requiring whole numbers without rounding up, such as determining full cases or complete units.

**CEILING(number)** returns the smallest integer greater than or equal to number, effectively rounding up. This matters when partial units must round up to the next whole number.

**ROUND(number, decimals)** rounds number to the specified decimal places. Positive decimals round the fractional part; zero decimals round to an integer. This matters for currency calculations requiring standard rounding rules.

**TRUNCATE(number, decimals)** removes digits after the specified decimal position without rounding. This matters when exact truncation is required rather than rounding, such as removing precision beyond allowed decimal places.

| Function           | Behavior          | Use case                |
| ------------------ | ----------------- | ----------------------- |
| **FLOOR(n)**       | Round down        | Count complete units    |
| **CEILING(n)**     | Round up          | Require full units      |
| **ROUND(n, d)**    | Standard rounding | Currency values         |
| **TRUNCATE(n, d)** | Cut off digits    | Remove excess precision |

```sql
-- Purpose: Apply numeric functions
SELECT FLOOR(4.9) AS floor_val, CEILING(4.1) AS ceil_val,
       ROUND(4.567, 2) AS rounded, TRUNCATE(4.567, 2) AS truncated;
```

## Date and Time Functions

**Date and time functions** extract or calculate date and time values. The lecture covers current value retrieval and arithmetic operations.

**NOW()** returns the current date and time in `YYYY-MM-DD HH:MM:SS` format. **CURTIME()** returns only the current time. **CURDATE()** returns only the current date. These matter for timestamps, logging, and time-sensitive calculations.

**DATE_ADD(date, INTERVAL value unit)** adds a time interval to a date. **DATE_SUB(date, INTERVAL value unit)** subtracts a time interval. The interval unit can be YEAR, MONTH, DAY, HOUR, MINUTE, or SECOND. This matters for calculating due dates, expiration times, or future/past dates.

```sql
-- Purpose: Date arithmetic examples
SELECT NOW() AS now, CURDATE() AS today,
       DATE_ADD(CURDATE(), INTERVAL 30 DAY) AS due_date,
       DATE_SUB(CURDATE(), INTERVAL 1 MONTH) AS past_date;
```

> [!NOTE]
> _DATE_ADD and DATE_SUB require the INTERVAL keyword followed by a value and unit, like `INTERVAL 30 DAY`. Omitting INTERVAL causes a syntax error._

## User-Defined Functions

A **user-defined function (UDF)** is a custom function created in a programming language like C or C++ and added to the MySQL server. Once registered, UDFs can be called like built-in functions in queries. This matters when built-in functions cannot accomplish specific transformations or calculations required by the application. Creating a UDF requires server-level permissions and follows a specific registration process beyond SQL syntax.

> [!IMPORTANT]
> _UDFs extend MySQL capabilities but require external programming knowledge and server configuration. The exam focus remains on built-in functions._

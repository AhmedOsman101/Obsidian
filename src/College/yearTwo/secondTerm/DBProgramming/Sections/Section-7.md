---
prev:
  text: "Section 6"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-6"
next:
  text: "Section 8"
  link: "/College/yearTwo/secondTerm/DBProgramming/Sections/Section-8"
title: Section 7
---

# Database Programming - Section 7

## String Search and Transformation Functions

This section continues SQL built-in functions, starting with string tools used to search, measure, and transform text. The key idea is that these functions return derived values without changing the stored data unless they are used inside an `UPDATE` statement.

The **`LOCATE()`** function returns the position of the first occurrence of a substring inside a string. If the substring does not exist, the result is `0`. The lecture also states that `LOCATE()` performs a *case-insensitive* search. The optional third argument sets the starting position for the search.

The **`LEN()`** function returns the length of a string. A boundary explicitly mentioned in the slides is that trailing spaces at the end are not counted, while leading spaces at the start are counted. This is an exam trap because students may assume all spaces behave the same.

The **`LOWER()`** and **`UPPER()`** functions convert text to lower-case or upper-case, and **`REVERSE()`** returns the string in reverse order.

| Function | Purpose | Important boundary |
| -------- | ------- | ------------------ |
| **`LOCATE(substring, string, start)`** | Find first matching position | Returns `0` if not found |
| **`LEN(string)`** | Count characters | Trailing spaces are ignored |
| **`LOWER(text)`** | Convert to lower-case | Changes case only |
| **`UPPER(text)`** | Convert to upper-case | Useful for normalization |
| **`REVERSE(string)`** | Reverse character order | Output is mirrored text |

```sql
-- Purpose: Search inside text and transform its appearance
SELECT LOCATE('am', 'Database Programming', 1);
SELECT LEN(' SQL');
SELECT LOWER('DB Programming');
SELECT UPPER('db programming');
SELECT REVERSE('SQL');
```

> [!IMPORTANT]
> _`LOCATE()` returns a position, not a true/false result. `0` means the substring was not found._

## Numeric Functions: Round Down, Round Up, Round, or Cut

The lecture groups four common **numeric functions**: **`FLOOR()`**, **`CEILING()`**, **`ROUND()`**, and **`TRUNCATE()`**. These matter because each one handles decimal values differently, and exam questions often test the exact output.

**`FLOOR(number)`** reduces a value to the nearest smaller integer. **`CEILING(number)`** raises a value to the nearest larger integer. **`ROUND(number, decimals, operation)`** rounds a number to a specified number of decimal places. **`TRUNCATE(number, decimals)`** removes extra decimal places without rounding.

The most important contrast is **`ROUND()` vs. `TRUNCATE()`**. `ROUND()` may increase or decrease the final digit depending on the next value, but `TRUNCATE()` simply cuts the number at the requested precision.

```mermaid
flowchart TD
  A[Decimal number] --> B{Required result?}
  B -->|Smallest lower integer| C[FLOOR()]
  B -->|Largest higher integer| D[CEILING()]
  B -->|Nearest value by decimal rule| E[ROUND()]
  B -->|Keep digits and cut the rest| F[TRUNCATE()]
```

| Function | Behavior | Example idea |
| -------- | -------- | ------------ |
| **`FLOOR()`** | Moves down to the smaller integer | `4.9 -> 4` |
| **`CEILING()`** | Moves up to the larger integer | `4.1 -> 5` |
| **`ROUND()`** | Rounds by decimal value | `4.56 -> 4.6` |
| **`TRUNCATE()`** | Cuts digits without rounding | `4.56 -> 4.5` |

```sql
-- Purpose: Compare different numeric adjustments
SELECT FLOOR(4.9);
SELECT CEILING(4.1);
SELECT ROUND(15.678, 2);
SELECT TRUNCATE(15.678, 2);
```

> [!WARNING]
> _Do not confuse `ROUND()` with `TRUNCATE()`: rounding can change the kept digit, truncation cannot._

## Date and Time Functions

The lecture then moves to **date/time functions** that return the current system date or time, or shift a date by a time interval. These are important because they support timestamps, deadlines, and date arithmetic in queries.

**`NOW()`** returns the current **date and time**. **`CURTIME()`** returns the current **time** only. **`CURDATE()`** returns the current **date** only. The boundary is simple but testable: know exactly which parts of the timestamp each function returns.

| Function | Returns | Use case |
| -------- | ------- | -------- |
| **`NOW()`** | Current date and time | Full timestamp |
| **`CURTIME()`** | Current time only | Time-of-day queries |
| **`CURDATE()`** | Current date only | Date-only comparisons |

```sql
-- Purpose: Return current system date/time values
SELECT NOW();
SELECT CURTIME();
SELECT CURDATE();
```

## Adding and Subtracting Intervals

**`DATEADD()`** adds a time/date interval to a date and returns the new date. The lecture writes its syntax as `DATEADD(interval, number, date)`. **`DATE_SUB()`** subtracts a time/date interval from a date using the syntax `DATE_SUB(date, INTERVAL value interval)`.

The core logic is directional:

- Use **`DATEADD()`** when the target date must move forward.
- Use **`DATE_SUB()`** when the target date must move backward.

This is often tested in tasks asking for an expiry date, a previous deadline, or a date before/after a known event.

```sql
-- Purpose: Shift a date forward or backward by an interval
SELECT DATEADD(day, 7, '2024-05-01');
SELECT DATE_SUB('2024-05-01', INTERVAL 7 DAY);
```

> [!NOTE]
> _`NOW()`, `CURTIME()`, and `CURDATE()` return current values directly, while `DATEADD()` and `DATE_SUB()` calculate a new date from an existing one._

## High-Yield Contrast Pairs

These contrast pairs summarize the most testable differences from the section:

| Pair | Key difference |
| ---- | -------------- |
| **`LOCATE()`** vs. **`LEN()`** | `LOCATE()` finds position; `LEN()` counts characters |
| **`LOWER()`** vs. **`UPPER()`** | One converts to lower-case; the other to upper-case |
| **`ROUND()`** vs. **`TRUNCATE()`** | `ROUND()` may change the digit; `TRUNCATE()` only removes digits |
| **`NOW()`** vs. **`CURDATE()`** | `NOW()` includes time; `CURDATE()` does not |
| **`DATEADD()`** vs. **`DATE_SUB()`** | One moves forward in time; the other moves backward |

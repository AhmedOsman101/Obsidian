---
prev:
  text: "Lecture 4"
  link: "/College/yearTwo/secondTerm/WebDev2/Lectures/Lecture-4"
next:
  text: "Lecture 6"
  link: "/College/yearTwo/secondTerm/WebDev2/Lectures/Lecture-6"
title: Lecture 5
---

# Web Development II - Lecture 5

## Include Files and Server-Side Reuse

A **PHP include file** is a separate file whose contents are inserted into another PHP file **before** the server executes the script. This works because the PHP engine expands the included file into the current script, so shared page fragments such as menus can be reused without duplicating code.

```php
<!-- Reuse a shared menu inside the current page -->
<div class="leftmenu">
  <?php include("menu.php"); ?>
</div>
```

| Construct       | Behavior                              | Boundary         |
| --------------- | ------------------------------------- | ---------------- |
| **`include()`** | Generates a warning if file fails     | Script continues |
| **`require()`** | Generates a fatal error if file fails | Script stops     |

> [!IMPORTANT]
> Use **`require()`** when the file is essential to correct execution, and **`include()`** when failure should not terminate the script.

## File Reading, Writing, and Whole-File Operations

PHP supports direct file operations for reading and writing complete files. **`file()`** returns the file as an **array of lines**, while **`file_get_contents()`** returns the **entire file as one string**. This distinction matters because line-by-line processing and whole-text processing solve different problems.

```php
// Read full file, transform it, then overwrite the file
$text = file_get_contents("poem.txt");
$text = strrev($text);
file_put_contents("poem.txt", $text);
```

**`file_put_contents()`** writes a string to a file and replaces prior contents unless the **`FILE_APPEND`** flag is used.

```php
// Append a new line instead of replacing the file
$new_text = "P.S. ILY, GTG TTYL!~";
file_put_contents("poem.txt", $new_text, FILE_APPEND);
```

> [!CAUTION]
> **`file()`** keeps each trailing newline in the returned strings. If that extra `\n` is undesirable, use **`FILE_IGNORE_NEW_LINES`** as the second argument.

## Arrays from Files and String-Array Conversion

When a file has a fixed number of lines, PHP can combine **`file()`** with **`list()`**. **`list($a, $b, ...)`** unpacks array elements into variables in order, so the file format must match the expected length exactly.

```php
// Unpack a known 3-line file into named variables
list($name, $phone, $ssn) = file("personal.txt");
```

PHP also converts between strings and arrays with **`explode()`** and **`implode()`**.

| Function                         | Direction       | Why it works                               |
| -------------------------------- | --------------- | ------------------------------------------ |
| **`explode(delimiter, string)`** | String -> array | Splits at each delimiter                   |
| **`implode(delimiter, array)`**  | Array -> string | Joins elements with delimiter between them |

```php
// Split each line into title and author
foreach (file("books.txt") as $book) {
  list($title, $author) = explode(",", $book);
}
```

> [!CAUTION]
> _Do not use `list()` unless the source format is predictable._ Missing or extra pieces shift values into the wrong variables.

## Reading Directories and Matching File Patterns

PHP can inspect directories with **`scandir()`** and **`glob()`**. **`scandir()`** returns the names of all entries in a directory, while **`glob()`** returns the paths of files that match a pattern. This difference matters because `glob()` filters during retrieval, while `scandir()` returns everything.

```php
// Process only files whose names match the pattern
$poems = glob("poetry/poem*.dat");
foreach ($poems as $poemfile) {
  $text = file_get_contents($poemfile);
  file_put_contents($poemfile, strrev($text));
  print basename($poemfile);
}
```

| Function              | Returns                     | Exam trap             |
| --------------------- | --------------------------- | --------------------- |
| **`scandir(folder)`** | File names only             | Includes `.` and `..` |
| **`glob(pattern)`**   | Matching paths              | Supports `*` wildcard |
| **`basename(path)`**  | File name without directory | Useful after `glob()` |

> [!NOTE]
> If `scandir()` output shows **`.`** and **`..`**, those are directory entries, not normal content files.

## Exceptions and Control Flow Interruption

An **exception** is an abnormal condition that changes the normal flow of execution. When an exception is triggered, the current code path stops and control moves to an exception handler. In PHP, an exception is created with **`throw new Exception(...)`** and handled with **`try`** and **`catch`**.

```php
// Throw an exception when input is invalid
function checkStr($str) {
  if (strcmp($str, "correct") != 0) {
    throw new Exception("String is not correct!");
  }
  return true;
}

try {
  checkStr("wrong");
  echo "If you see this, the string is correct";
} catch (Exception $e) {
  echo "Message: " . $e->getMessage();
}
```

> [!IMPORTANT]
> Once **`throw`** runs, later statements in the `try` block are skipped until control reaches a matching **`catch`** block.

## Cookies, Sessions, and Stateful Web Data

**HTTP is stateless**, meaning each request is independent unless extra state is stored. A **cookie** is a small piece of information stored on the **client machine** and sent back to the same website on later requests. A **session** combines server-side stored data with a client-side identifier, so the browser sends only a reference and the server loads the full session data.

| Feature                      | **Cookie**         | **Session**                    |
| ---------------------------- | ------------------ | ------------------------------ |
| Storage location             | Client             | Server                         |
| Client access to stored data | Yes                | No direct access               |
| Size                         | Small              | Can be much larger             |
| Data sent on requests        | Actual cookie data | Session ID only                |
| Server cluster friendliness  | Works smoothly     | Needs server-side coordination |

```php
// Create, read, and store state data
setcookie("user", "Harry Poter", time() + 3600);
echo $_COOKIE["user"];

session_start();
$_SESSION["FirstName"] = "Jim";
```

**`setcookie(name, value, expire, path, domain)`** creates a cookie. Session work starts with **`session_start()`**, and session values are stored in the **`$_SESSION`** superglobal array.

> [!CAUTION]
> **Sessions** are more private than **cookies** because the main data lives on the server. The client usually sends only the session identifier, not the stored session contents themselves.

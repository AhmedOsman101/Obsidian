---
title: Lecture 8
prev:
  text: "Lecture 7"
  link: "/College/yearTwo/secondTerm/WebDev2/Lectures/Lecture-7"
next: false
---

# Web Development II - Lecture 8

## Static vs Dynamic Sites

A **static site** sends pre-written HTML files as-is. Each request returns the same content. A **dynamic site** generates HTML per request, drawing from databases, user input, or server state like time. Dynamic sites exist because you need different output for different users or situations.

## PHP Superglobals

**Superglobals** are associative arrays accessible from anywhere in a PHP file. They always appear as `$_ALLCAPS`.

**`$_SERVER`** provides server and client info:

| Key                           | Value                 |
| ----------------------------- | --------------------- |
| `$_SERVER['SERVER_ADDR']`     | Server IP             |
| `$_SERVER['REMOTE_ADDR']`     | Client IP             |
| `$_SERVER['HTTP_USER_AGENT']` | Client OS and browser |

## GET vs POST

**GET** passes data through the URL: `page.php?key=value&key2=value2`. Access values via **`$_GET`**.

| Trait        | GET                     | POST                   |
| ------------ | ----------------------- | ---------------------- |
| URL exposure | Visible in URL          | Hidden in request body |
| Caching      | Cacheable, bookmarkable | Not cached             |
| Length limit | Limited by URL length   | No practical limit     |
| Use case     | Non-sensitive data      | Sensitive data         |

## Forms

Forms need two components: the **HTML form** and the **server-side script** that processes it.

```html
<form action="welcome.php" method="post">
  Name: <br /><input type="text" name="name" /><br />
  Phone: <br /><input type="text" name="phone" /><br />
  <input type="submit" value="Submit" />
</form>
```

The `name` attribute becomes the key in `$_GET` or `$_POST`. `action` sets the target URL; `method` sets GET or POST.

```php
echo $_POST['name'];
echo $_POST['phone'];
```

## Cookies

**Cookies** store small files on the client browser, sent to the server on every relevant request. HTTP is **stateless** — cookies (and sessions) add state.

**`$_COOKIE`** treats cookies as key-value pairs. Always check with `isset()` before reading.

```php
setcookie(name, value, expire, path, domain);
```

- `expire`: use `time() + seconds` for relative expiration
- `path`: usually `'/'`
- `domain`: top-level domain
- Delete a cookie: set it with an expiration in the past
- Cookies are sent via HTTP header — must be set _before_ any output (HTML, `echo`, etc.)

### Cookie State Machine

```
Client                          Server
  |                               |
  |--- GET cookie.php ----------->|  isset($_COOKIE["name"])? NO
  |<-- HTML form -----------------|  isset($_GET["name"])? NO
  |                               |  respond with form
  |                               |
  |--- GET name="username" ------>|  isset($_COOKIE["name"])? NO
  |<-- Set-Cookie: name=username -|  isset($_GET["name"])? YES -> set cookie
  |    welcome message            |
  |                               |
  |--- Cookie: name="username" -->|  isset($_COOKIE["name"])? YES
  |<-- welcome message -----------|  isset($_GET["name"])? NO
```

A cookie set in a response is _not_ available until the next request.

## Sessions

**Sessions** store data on the server, avoiding cookie size limits and tampering risks. They expire when the browser closes. The session ID is stored in a small cookie, but the data stays server-side.

```php
session_start(); // Must come before ANY output

if (isset($_SESSION["count"])) {
  $_SESSION["count"] += 1;
} else {
  $_SESSION["count"] = 1;
}
```

- Remove one element: `unset($_SESSION['key'])`
- Destroy everything: `session_destroy()` — `$_SESSION` is no longer valid; call `session_start()` again for a new session.

### Cookies vs Sessions

| Trait      | Cookies                            | Sessions                              |
| ---------- | ---------------------------------- | ------------------------------------- |
| Storage    | Client browser                     | Server                                |
| Expiration | Set by developer                   | When browser closes                   |
| Size limit | Browser-dependent                  | Server capacity                       |
| Access     | `$_COOKIE`                         | `$_SESSION`                           |
| Use case   | Small persistent data (login name) | Variable data in one browsing session |

## MySQL with PHP

**MySQL** is an open-source database. The basic flow: connect → select database → query → fetch results.

```php
$db = mysql_connect("localhost", "user", "password");
mysql_select_db("database_name", $db);

$result = mysql_query("SELECT * FROM users", $db);
while ($row = mysql_fetch_assoc($result)) {
  echo $row['column_name'];
}
```

`mysql_connect` returns a **database resource**. `mysql_query` returns `false` on failure — always handle errors with `die(mysql_error())`. SELECT queries return a result resource; INSERT/UPDATE/DELETE return `true` on success.

## SQL Injection

**SQL injection** occurs when user input is embedded directly into a query, letting an attacker alter the query structure.

```php
// Vulnerable: attacker enters password as randompass' OR '1=1'
$query = "SELECT PHONE FROM userinfo
          WHERE USER='$user' AND PASSWORD='$pass'";
// Result: WHERE USER='username' AND PASSWORD='randompass' OR '1=1'
```

Fix: pass all user input through **`mysql_real_escape_string()`**.

```php
$user = mysql_real_escape_string($_POST["username"]);
$pass = mysql_real_escape_string($_POST["password"]);
```

> [!WARNING]
> Never trust user input. Always sanitize before embedding in SQL.

## Registration-Login Example Pattern

Share database connection code across pages using `require()`: put `mysql_connect` and `mysql_select_db` in `db.php` and include it where needed.

Login flow: look up password by username → compare with submitted password → set session variable on match.

Register flow: sanitize input → `INSERT INTO users VALUES (...)` → confirm success.

```php
// db.php — shared resource
$db = mysql_connect("localhost", "user", "pass") or die(mysql_error());
mysql_select_db("6470example", $db) or die(mysql_error());
```

```php
// Login handler
require("db.php");
$user = $_POST["username"];
$pass = $_POST["password"];

$query = "SELECT PASSWORD from users WHERE USERNAME='"
$query .= mysql_real_escape_string($user) . "'";

$result = mysql_query($query, $db) or die(mysql_error());

$row = mysql_fetch_assoc($result);
if ($pass == $row["PASSWORD"]) {
  $_SESSION["username"] = $user;
}
```

_5 min read (source: 14 min)_

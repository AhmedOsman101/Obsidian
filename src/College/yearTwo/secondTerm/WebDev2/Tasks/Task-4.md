---
prev:
  text: "Task Two"
  link: "/College/yearTwo/secondTerm/WebDev2/Tasks/Task-2"
next: false
title: Task 4
---

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20240592                 |
| Section | 1                        |

# Web Development II Task 4

## Questions

## PHP Email Validation Exercise

**Requirements:** Write a PHP script that tests whether an email address is input correctly. Test using valid and invalid addresses. Use array and function.

### Answer

```php
<?php
// Function to validate email using filter_var
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

// Array of test emails (mix of valid and invalid)
$testEmails = array(
    "user@example.com",
    "john.doe@mail.co.uk",
    "invalid.email",
    "@nodomain.com",
    "user@.com",
    "user@domain",
    "user name@domain.com",
    "user+tag@example.io"
);

// Test each email
foreach ($testEmails as $email) {
    $status = isValidEmail($email) ? "VALID" : "INVALID";
    echo "$email -> $status <br>";
}
```

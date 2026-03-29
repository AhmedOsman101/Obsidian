---
prev:
  text: "Tasks"
  link: "/College/yearTwo/secondTerm/WebDev2/Tasks/index"
next:
  text: "Task Two"
  link: "/College/yearTwo/secondTerm/WebDev2/Tasks/Task-2"
title: Task 1
---

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20240592                 |
| Section | 1                        |

# Web Development II Task 1

## Questions

## PHP Exercise 1: Basic Echo and Variables

- **Task**: Echo the statement "Twinkle, Twinkle little star." to the browser.
- **Variable Usage**: Create two variables: one for the word "Twinkle" and one for the word "star".
- **Dynamic Echo**: Echo the statement again, substituting the variables for the relevant words.
- **Modification**: Change the value of each variable to something else and echo the statement a third time.
- **Formatting**: Include code to ensure each statement appears on a different line.

### Answer

```php
<?php

echo "Twinkle, Twinkle little star.";
echo "<br>";

$twinkle = "Twinkle";
$star = "star";

echo "$twinkle, $twinkle little $star.";
echo "<br>";

$twinkle = "Walk";
$star = "Baby";

echo "$twinkle, $twinkle little $star.";
echo "<br>";

```

## PHP Exercise 2: Arithmetic Operators

- **Task**: Use variables and arithmetic operators to print equations to the browser.
- **Setup**: Create variables `$x = 10;` and `$y = 7;`.
- **Required Output**: Write code to print the following:
  - 10 + 7 = 17
  - 10 - 7 = 3
  - 10 \* 7 = 70
  - 10 / 7 = 1.4285714285714
  - 10 % 7 = 3
- **Constraint**: Use numbers only in the variable assignments, not in the echo statements.

### Answer

```php
<?php

$x = 10;
$y = 7;

echo "$x + $y = " . $x + $y;
echo "<br>";
echo "$x - $y = " . $x - $y;
echo "<br>";
echo "$x * $y = " . $x * $y;
echo "<br>";
echo "$x / $y = " . $x / $y;
echo "<br>";
echo "$x % $y = " . $x % $y;
echo "<br>";
```
## PHP Exercise 3: Arithmetic-Assignment Operators

- **Task**: Reproduce a specific output using only one variable and arithmetic-assignment operators (no simple arithmetic operators).
- **Hint**: Each statement in the script should end with "Value is now $variable.".
- **Required Sequence**:
  - Value is now 8.
  - Add 2. Value is now 10.
  - Subtract 4. Value is now 6.
  - Multiply by 5. Value is now 30.
  - Divide by 3. Value is now 10.
  - Increment value by one. Value is now 11.
  - Decrement value by one. Value is now 10.

### Answer

```php
<?php

$variable = 8;
echo "Value is now $variable. <br>";

$variable += 2;
echo "Value is now $variable. <br>";

$variable -= 4;
echo "Value is now $variable. <br>";

$variable *= 5;
echo "Value is now $variable. <br>";

$variable /= 3;
echo "Value is now $variable. <br>";

$variable++;
echo "Value is now $variable. <br>";

$variable--;
echo "Value is now $variable. <br>";
```

## PHP Exercise 4: Variable Inspection

- **Task**: Write a script that outputs specific variable information, using the `echo` statement only for line breaks.
- **Required Output**:
  - string(5) "Harry"
  - Harry
  - int(28)
  - NULL

### Answer

```php
<?php

var_dump("Harry");
echo "<br>";

print "Harry";
echo "<br>";

var_dump(28);
echo "<br>";

var_dump(null);
echo "<br>";
```

## PHP Exercise 5: Quotes and Concatenation

- **Setup**: Use the variable `$around = "around";`.
- **Task**: Using **single quotes** (`' '`) and the concatenation operator, echo the following statement:
  - What goes around, comes around.

### Answer

```php
<?php

$around = "around";

echo 'What goes ' . $around . ', comes ' . $around . '.';
// Or use echo "What goes $around, comes $around." directly
```

## PHP Exercise 6: Conditional Statements

- **Task**: Use a conditional statement to determine what prints based on the current month.
- **Logic**: Get the current month and print a response depending on whether it is August:
  - **If August**: "It's August, so it's really hot."
  - **If not August**: "Not August, so at least not in the peak of the heat."
- **Hint**: Use `date('F', time())` to get the month's full name.

### Answer

```php
<?php

$month = date('F', time());

if ($month == "August") {
  echo "It's August, so it's really hot. <br>";
} else {
  echo "Not August, so at least not in the peak of the heat. <br>";
}
```

## PHP Exercise 7: For Loops and Squares

- **Task**: Use a `for` loop to create a list of squares for the numbers 1–12.
- **Format**: Use the format "1 \* 1 = 1".
- **Requirement**: Ensure each formula is printed on a different line.

### Answer

```php
<?php

echo "<ul>";

for ($i = 1; $i <= 12; $i++) {
  echo "<li>$i * $i = " . $i * $i . "</li>";
}

echo "</ui>";
```

## PHP Exercise 8: Nested Loops and Tables

- **Task**: Use two nested `for` loops to create a multiplication table.
- **Target Table**: A 7x7 grid showing the products of numbers 1 through 7.

### Answer

```php
<?php

echo '<table border="1" cellpadding="8" cellspacing="0">';

for ($i = 1; $i <= 7; $i++) {
  echo "<tr>";
  for ($j = 1; $j <= 7; $j++) {
    echo "<td>" . $i * $j . "</td>";
  }
  echo "</tr>";
}

echo "</table>";
```

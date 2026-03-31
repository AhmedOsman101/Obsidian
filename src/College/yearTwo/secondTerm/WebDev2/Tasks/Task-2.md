---
prev:
  text: "Task One"
  link: "/College/yearTwo/secondTerm/WebDev2/Tasks/Task-1"
next:
  text: "Task Four"
  link: "/College/yearTwo/secondTerm/WebDev2/Tasks/Task-4"
title: Task 2
---

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20240592                 |
| Section | 1                        |

# Web Development II Task 2

## Questions

## PHP Arrays Ex.1

Create an array variable `$weather` with values: rain, sunshine, clouds, hail, sleet, snow, wind. Echo the following using the array:

> We've seen all kinds of weather this month. At the beginning of the month, we had **snow** and **wind**. Then came **sunshine** with a few **clouds** and some **rain**. At least we didn't get any **hail** or **sleet**.

Include a title in both the header and on the page.

### Answer

```php
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task 2 - Exercise 1</title>
</head>
<body>
  <h1>Task 2 - Exercise 1</h1>
  <?php
  $weather = ["rain", "sunshine", "clouds", "hail", "sleet", "snow", "wind"];
  echo <<<EOF
  We've seen all kinds of weather this month. <br>
  At the beginning of the month, we had $weather[5] and $weather[6]. <br>
  Then came $weather[1] with a few $weather[2] and some $weather[0]. <br>
  At least we didn't get any $weather[3] or $weather[4].
  EOF;
  ?>
</body>
</html>
```

## PHP Arrays Ex.2

**Initial array:** Tokyo, Mexico City, New York City, Mumbai, Seoul, Shanghai, Lagos, Buenos Aires, Cairo, London

1. Print values comma-separated using a loop
2. Sort array, print in unordered list using a loop
3. Add: Los Angeles, Calcutta, Osaka, Beijing
4. Sort again, print in unordered list

### Answer

```php
<?php

$cities = [
  "Tokyo",
  "Mexico City",
  "New York City",
  "Mumbai",
  "Seoul",
  "Shanghai",
  "Lagos",
  "Buenos Aires",
  "Cairo",
  "London",
];

function printArray(array $arr): void {
  foreach ($arr as $idx => $value) {
    echo $value;
    if ($idx < sizeof($arr) - 1) echo ', ';
  }
}

function printArrayList(array $arr): void {
  echo "<ul>";
  foreach ($arr as $value) echo "<li>$value</li>";
  echo "</ul>";
}


printArray($cities);

sort($cities);
printArrayList($cities);

array_push($cities, 'Los Angeles', 'Calcutta', 'Osaka', 'Beijing');
sort($cities);
printArrayList($cities);
```

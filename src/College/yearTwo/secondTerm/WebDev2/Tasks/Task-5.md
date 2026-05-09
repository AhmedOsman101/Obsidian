| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20240592                 |
| Section | 1                        |

# PHP Tasks

## Task 1

### Question

Write a PHP script that creates a cookie with the `setcookie()` function to save the username for 10 days. Then use `isset()` to find out if the cookie is set or not and retrieve the cookie value to the user screen.

### Answer

```php
<?php

$username = 'Othman';
$cookieName = 'username';
$cookieValue = $username;

setcookie($cookieName, $cookieValue, time() + (10 * 24 * 60 * 60), '/');

echo '<h3>Cookie Example</h3>';

if (isset($_COOKIE[$cookieName])) {
    echo 'Cookie is set.<br>';
    echo 'Username: ' . htmlspecialchars($_COOKIE[$cookieName]);
} else {
    echo 'Cookie is not set yet. Refresh the page once after creating it.';
}
```

## Task 2

### Question

Write a complete PHP script that has two variables `$x = 50` and `$y = 10`, then use the `if...else` statement to compare them and print the sum if `$x` is greater than `$y`; otherwise print the difference.

### Answer

```php
<?php

$x = 50;
$y = 10;

if ($x > $y) {
    echo 'Sum = ' . ($x + $y);
} else {
    echo 'Difference = ' . ($x - $y);
}
```

## Task 3

### Question

Change `ex1.php` to use MySQLi Procedural instead of PDO to create a MySQL database.

### Answer

```php
<?php

$conn = mysqli_connect('localhost', 'root', '');

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$sql = 'CREATE DATABASE myDB';

if (mysqli_query($conn, $sql)) {
    echo 'Database created successfully';
} else {
    echo 'Error creating database: ' . mysqli_error($conn);
}

mysqli_close($conn);
```

## Task 4

### Question

Using the `Customers` data in table (13-4), create a PHP script to update customer first name to `Max` where customer id = 3.

### Answer

```php
<?php

$conn = new mysqli('localhost', 'root', '', 'practice');

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

$sql = "UPDATE Customers SET firstname = 'Max' WHERE id = 3";

if ($conn->query($sql) === true) {
    echo 'Customer updated successfully';
} else {
    echo 'Error: ' . $conn->error;
}

$conn->close();
```

## Task 5

### Question

Modify the PHP script in figure (11-5) to use MySQLi Procedural to insert multiple records into a MySQL table.

### Answer

```php
<?php

$conn = mysqli_connect('localhost', 'root', '', 'myDB');

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$sql = <<<SQL
INSERT INTO MyGuests (firstname, lastname, email) VALUES
('John', 'Doe', 'john@example.com'),
('Mary', 'Moe', 'mary@example.com'),
('Julie', 'Dooley', 'julie@example.com')
SQL;

if (mysqli_multi_query($conn, $sql)) {
    echo 'Multiple records inserted successfully';
} else {
    echo 'Error: ' . mysqli_error($conn);
}

mysqli_close($conn);
```

## Task 6

### Question

Write a PHP script that creates a cookie with `setcookie()` to save the username for 10 days.

### Answer

```php
<?php

$username = 'Othman';

setcookie('username', $username, time() + (10 * 24 * 60 * 60), '/');

echo 'Cookie has been created.';
```

## Task 7

### Question

Using the `Customers` data in table (13-4), create a PHP script to delete customer data where customer first name = `Luis`.

### Answer

```php
<?php

$conn = new mysqli('localhost', 'root', '', 'practice');

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

$sql = "DELETE FROM Customers WHERE firstname = 'Luis'";

if ($conn->query($sql) === true) {
    echo 'Customer deleted successfully';
} else {
    echo 'Error: ' . $conn->error;
}

$conn->close();
```

## Task 8

### Question

Write a PHP script that creates a database named `myDB` using MySQLi Object-Oriented procedure.

### Answer

```php
<?php

$conn = new mysqli('localhost', 'root', '');

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

$sql = 'CREATE DATABASE myDB';

if ($conn->query($sql) === true) {
    echo 'Database created successfully';
} else {
    echo 'Error creating database: ' . $conn->error;
}

$conn->close();
```

## Task 9

### Question

Implement the code in `ex3.php` by replacing the `while` statement with a `do...while` statement and keeping the same output.

### Answer

```php
<?php

$i = 1;

do {
    echo $i . '<br>';
    $i++;
} while ($i <= 5);
```

## Task 10

### Question

Using the implemented code in `db_connection.php`, create a new PHP file to connect to the `practice` database.

### Answer

```php
<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'practice';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

echo 'Connected successfully to practice database';
```

## Task 11

### Question

Create a `switch` statement that outputs `Hello` if `$color` is `red`, and `Welcome` if `$color` is `green`.

### Answer

```php
<?php

$color = 'red';

switch ($color) {
    case 'red':
        echo 'Hello';
        break;
    case 'green':
        echo 'Welcome';
        break;
    default:
        echo 'No matching color';
}
```

## Task 12

### Question

Write a complete PHP script that prints the values of multiplying 10 by 0 through 10.

### Answer

```php
<?php

for ($i = 0; $i <= 10; $i++) {
    echo '10 x ' . $i . ' = ' . (10 * $i) . '<br>';
}
```

## Task 13

### Question

Write a PHP script that starts a session with `session_start()`, then saves the username in the session and retrieves the session value to the user screen.

### Answer

```php
<?php

session_start();

$_SESSION['username'] = 'Othman';

echo 'Username in session: ' . htmlspecialchars($_SESSION['username']);
```

## Task 14

### Question

Write a PHP function that takes two arguments and prints the sum of the two arguments to the user screen.

### Answer

```php
<?php

function printSum(int|float $num1, int|float $num2) {
    echo 'Sum = ' . ($num1 + $num2);
}

printSum(5, 7);
```

## Task 15

### Question

Write a complete PHP script that has two variables `$a = 50` and `$b = 10`, then use the `if` statement to compare them and print `Hello World` if `$a` is greater than `$b`.

### Answer

```php
<?php

$a = 50;
$b = 10;

if ($a > $b) {
    echo 'Hello World';
}
```

## Task 16

### Question

Modify the PHP script in figure (11-5) to use PDO to insert multiple records into a MySQL table.

### Answer

```php
<?php

try {
    $pdo = new PDO('mysql:host=localhost;dbname=myDB;charset=utf8mb4', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = <<<SQL
INSERT INTO MyGuests (firstname, lastname, email) VALUES
('John', 'Doe', 'john@example.com'),
('Mary', 'Moe', 'mary@example.com'),
('Julie', 'Dooley', 'julie@example.com')
    SQL;

    $pdo->exec($sql);
    echo 'Multiple records inserted successfully';
} catch (PDOException $e) {
    echo 'Error: ' . $e->getMessage();
}
```

## Task 17

### Question

Modify the PHP script in figure (12-11) to use PDO to select the `id`, `firstname`, and `lastname` columns from the `MyGuests` table, ordered by `lastname`.

### Answer

```php
<?php

try {
    $pdo = new PDO('mysql:host=localhost;dbname=myDB;charset=utf8mb4', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->query('SELECT id, firstname, lastname FROM MyGuests ORDER BY lastname');

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo $row['id'] . ' - ' . $row['firstname'] . ' ' . $row['lastname'] . '<br>';
    }
} catch (PDOException $e) {
    echo 'Error: ' . $e->getMessage();
}
```

## Task 18

### Question

Using `ex3.php`, implement a PHP script that uses `isset()` to find out whether the cookie variable `username` is set or not and retrieve its value to the user screen.

### Answer

```php
<?php

if (isset($_COOKIE['username'])) {
    echo 'Cookie is set.<br>';
    echo 'Username: ' . htmlspecialchars($_COOKIE['username']);
} else {
    echo 'Cookie is not set.';
}
```

## Task 19

### Question

1. Given a number, write a PHP function to check whether it is odd or even.
2. Given an input number, write a PHP function to check whether it is prime or not.

Answer

```php
<?php

function checkOddEven(int $number) {
    return $number % 2 === 0 ? 'Even' : 'Odd';
}

function isPrime(int $number) {
    if ($number < 2) {
        return false;
    }

    for ($i = 2; i <= $number; $i++) {
        if ($number % $i === 0) {
            return false;
        }
    }

    return true;
}

$number = 7;

echo $number . ' is ' . checkOddEven($number) . '<br>';
echo $number . (isPrime($number) ? ' is prime' : ' is not prime');
```

## Task 20

### Question

Change `ex1.php` to use MySQLi Procedural instead of MySQLi Object-Oriented to create a MySQL database.

### Answer

```php
<?php

$conn = mysqli_connect('localhost', 'root', '');

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$sql = 'CREATE DATABASE myDB';

if (mysqli_query($conn, $sql)) {
    echo 'Database created successfully';
} else {
    echo 'Error creating database: ' . mysqli_error($conn);
}

mysqli_close($conn);
```

## Task 21

### Question

Save `$myXMLData` from figure (14-1) to `books.xml`, then write a PHP script that parses this file and displays its contents using the XML Expat Parser.

### Answer

```php
<?php

$currentTag = '';

function startElement($parser, string $name, array $attrs) {
    global $currentTag;
    $currentTag = $name;
    echo '<strong>' . $name . '</strong>: ';
}

function endElement($parser, string $name) {
    echo '<br>';
}

function charData($parser, string $data) {
    $trimmed = trim($data);
    if ($trimmed !== '') {
        echo htmlspecialchars($trimmed) . '<br>';
    }
}

$parser = xml_parser_create();
xml_set_element_handler($parser, 'startElement', 'endElement');
xml_set_character_data_handler($parser, 'charData');

$xmlFile = 'books.xml';

if (!file_exists($xmlFile)) {
    die('books.xml not found');
}

$data = file_get_contents($xmlFile);

if ($data === false) {
    die('Unable to read books.xml');
}

if (!xml_parse($parser, $data, true)) {
    die('XML Error: ' . xml_error_string(xml_get_error_code($parser)));
}

xml_parser_free($parser);
```

## Task 22

### Question

Declare a PHP associative array that contains data for five persons, where the person name is the key and the age is the value.

### Answer

```php
<?php

$people = [
    'Ali' => 20,
    'Sara' => 22,
    'Mona' => 19,
    'Khalid' => 25,
    'Lina' => 21,
];

echo '<pre>';
print_r($people);
echo '</pre>';
```

## Task 23

### Question

Modify the PHP script in figure (12-9) to use MySQLi Procedural to select and filter data from a MySQL table.

### Answer

```php
<?php

$conn = mysqli_connect('localhost', 'root', '', 'myDB');

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$sql = "SELECT id, firstname, lastname FROM MyGuests WHERE lastname = 'Doe'";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo $row['id'] . ' - ' . $row['firstname'] . ' ' . $row['lastname'] . '<br>';
    }
} else {
    echo 'No matching records found';
}

mysqli_close($conn);
```

## Task 24

### Question

1. Based on PHP access modifiers (`public`, `private`, `protected`), fill the table for classes, functions, and variables with either `Applicable` or `Not Applicable`.
2. Create a `Person` class as the parent that has `$name` and `$age`, and a `Tom` class as the child.

### Answer

#### Access Modifiers Table

| PHP Element       | public         | private        | protected      |
| ----------------- | -------------- | -------------- | -------------- |
| Class             | Not Applicable | Not Applicable | Not Applicable |
| Function/Method   | Applicable     | Applicable     | Applicable     |
| Variable/Property | Applicable     | Applicable     | Applicable     |

#### Inheritance Example

```php
<?php

class Person {
    protected string $name;
    protected int $age;

    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function getInfo() {
        return "Name: {$this->name}, Age: {$this->age}";
    }
}

class Tom extends Person {
    protected string $all;

    public function __construct(string $name, int $age, string $all) {
        parent::__construct($name, $age);
        $this->all = $all;
    }

    public function getAll() {
        return $this->all;
    }
}

$tom = new Tom('Tom', 20, 'Student data');
echo $tom->getInfo() . '<br>';
echo 'All: ' . $tom->getAll();
```

## Task 25

### Question

1. Create a PHP `Employee` class that contains three variables: `$name`, `$age`, and `$salary`, and six methods: `set_name`, `set_age`, `set_salary`, `get_name`, `get_age`, and `get_salary`.
2. Using the `Employee` class, create two objects: `Soha` and `Smith`.

### Answer

```php
<?php

class Employee {
    private string $name = '';
    private int $age = 0;
    private float $salary = 0.0;

    public function set_name(string $name) {
        $this->name = $name;
    }

    public function set_age(int $age) {
        $this->age = $age;
    }

    public function set_salary(float $salary) {
        $this->salary = $salary;
    }

    public function get_name() {
        return $this->name;
    }

    public function get_age() {
        return $this->age;
    }

    public function get_salary() {
        return $this->salary;
    }
}

$sara = new Employee();
$sara->set_name('Sara');
$sara->set_age(25);
$sara->set_salary(1200.0);

$mohamed = new Employee();
$mohamed->set_name('Mohamed');
$mohamed->set_age(30);
$mohamed->set_salary(1500.0);

echo $sara->get_name() . ', ' . $sara->get_age() . ', ' . $sara->get_salary() . '<br>';
echo $mohamed->get_name() . ', ' . $mohamed->get_age() . ', ' . $mohamed->get_salary();
```

## Task 26

### Question

Using XML `notes.xml` shown in figure (14-8), write a PHP script that parses this file and displays its contents using the SimpleXML Parser.

### Answer

```php
<?php

$xml = simplexml_load_file('notes.xml');

if ($xml === false) {
    die('Error loading XML file');
}

echo 'To: ' . htmlspecialchars((string) $xml->to) . '<br>';
echo 'From: ' . htmlspecialchars((string) $xml->from) . '<br>';
echo 'Heading: ' . htmlspecialchars((string) $xml->heading) . '<br>';
echo 'Body: ' . htmlspecialchars((string) $xml->body) . '<br>';
```

## Task 27

### Question

1. Create a PHP script that defines a variable and assigns the value `Welcome to PHP`, then prints both the variable name and value.
2. Create a PHP script that defines two variables `$a = 5` and `$b = 7`, and outputs their values.

### Answer

```php
<?php

$message = 'Welcome to PHP';

echo 'Variable name: $message<br>';
echo 'Variable value: ' . $message . '<br><br>';

$a = 5;
$b = 7;

echo 'Value of $a = ' . $a . '<br>';
echo 'Value of $b = ' . $b;
```

## Task 28

### Question

1. Write a PHP function that takes two arguments and returns the sum of the two arguments, then call the function and print the return value.
2. Write a PHP script that contains an indexed array of integers and prints the sum of the array elements.

### Answer

```php
<?php

function sumNumbers(int|float $num1, int|float $num2) {
    return $num1 + $num2;
}

$result = sumNumbers(10, 15);
echo 'Returned sum = ' . $result . '<br>';

$nums = [5, 10, 15, 20, 25];
echo 'Array sum = ' . array_sum($nums);
```

## Task 29

### Question

1. Write a PHP script that creates a cookie with `setcookie()` to save the username for 10 days.
2. Using `ex1.php`, implement a PHP script that uses `isset()` to find out whether the cookie variable `username` is set or not and retrieve its value to the user screen.

### Answer

```php
<?php

// ex1.php
setcookie('username', 'Othman', time() + (10 * 24 * 60 * 60), '/');
echo 'Cookie created successfully.<br>';

// ex2.php
if (isset($_COOKIE['username'])) {
    echo 'Cookie is set.<br>';
    echo 'Username: ' . htmlspecialchars($_COOKIE['username']);
} else {
    echo 'Cookie is not set.';
}
```

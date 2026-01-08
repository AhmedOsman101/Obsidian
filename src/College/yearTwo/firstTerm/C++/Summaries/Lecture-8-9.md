# Lecture 8-9: Functions & Structures

## C++ Functions

- **Definition:** A block of code that only runs when it is called.
- **Purpose:** To perform specific actions and enable code reuse (define once, use many times).
- **Parameters:** Data can be passed into a function.
- **Syntax Components:**
  - **Declaration:** Specifies the function's return type, name, and parameters.
  - **Definition:** The body of the function, containing the code to be executed.
- `void` **Keyword:** Used as the return type to indicate that the function does not return any value.

#### Basic Syntax

```cpp
void functionName(/* parameters */) {
  // declaration: void functionName()
  // definition: code to be executed
}
```

#### Separating Declaration and Definition

For code optimization, organization, and readability, the declaration and definition of a function can be separated.

- **Common Structure:**
  1. **Function Declaration:** Placed above the `main()` function.
  2. **Function Call:** Made from within the `main()` function.
  3. **Function Definition:** Placed below the `main()` function.
- **Example:**

```c++
#include <iostream>
using namespace std;

// Function Declaration
void myFunction();

int main() {
  // Function Call
  myFunction();
  return 0;
}

// Function Definition
void myFunction() {
  cout << "Hello, world!" << endl;
}
```

## C++ Structures (`struct`)

### Core Concepts

- **Definition:** A composite data type used to combine multiple variables of different types into a single named entity.
- **Purpose:** To group and organize several related variables into one place for easier management and access.
- **Member:** Each variable declared inside a structure is known as a member of that structure.
- **Contrast with Array:** Unlike an array, which stores elements of a single data type, a structure can contain members of many different data types (e.g., `int`, `string`, `bool`).

### Declaration and Member Access

To define a structure, use the `struct` keyword. To access its members, use the dot operator (`.`).

#### Example: Student Structure

```cpp
// 1. Define the structure
struct Student {
  string name;  // member
  int age;       // member
  float grade;   // member
};

int main() {
  // 2. Create a variable (instance) of the structure
  Student s1;

  // 3. Assign data to members using the dot operator
  s1.name = "Ali";
  s1.age = 20;
  s1.grade = 88.5;

  // 4. Access and print member data
  cout << "Name: " << s1.name << endl;
  cout << "Age: " << s1.age << endl;
}
```

### Array of Structures

An array can be created where each element is a `struct` object. This is useful for storing and managing multiple records efficiently.

#### Example: Array of Employees

```cpp
struct Employee {
  int id;
  string name;
  float salary;
};

int main() {
  // Initialize a 1D array of Employee structures
  Employee emp[4] = {
    {101, "Mohamed", 15000},
    {102, "Nada", 12000},
    {103, "Youssef", 5500},
    {104, "Belal", 5500}
  };

  // Loop through the array and access each element's members
  for (int i = 0; i < 4; i++) {
    cout << emp[i].id << " - " << emp[i].name << " - " << emp[i].salary << endl;
  }
}
```

### Functions within Structures (C++ Only)

In C++, a `struct` can contain member functions in addition to data members. This allows the structure to behave similarly to a class, with the key difference that its members are `public` by default.

#### Example: Rectangle with `area()` function

```cpp
struct Rectangle {
  int width, height;

  // Member function defined inside the structure
  int area() {
    return width * height;
  }
};

int main() {
  Rectangle r1 = {5, 10};
  // Call the member function using the dot operator
  cout << "Area = " << r1.area() << endl; // Output: Area = 50
}
```

### Multiple Variables from a Single Structure Definition

You can declare multiple `struct` variables from a single (often unnamed) definition by separating the variable names with a comma.

#### Example: Declaring Multiple Car Variables

```cpp
// Define a structure and declare two variables of its type
struct {
  string brand;
  string model;
  int year;
} myCar1, myCar2;

int main() {
  myCar1.brand = "BMW";
  myCar1.model = "X5";
  myCar1.year = 1999;

  myCar2.brand = "Ford";
  myCar2.model = "Mustang";
  myCar2.year = 1969;

  cout << myCar1.brand << " " << myCar1.model << endl;
  cout << myCar2.brand << " " << myCar2.model << endl;
}
```

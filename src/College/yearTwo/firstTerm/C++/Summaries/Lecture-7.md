# Lecture 7: C++ Arrays and Vectors

## Arrays (C-Style)

### Definition & Purpose

An **array** is a data structure used to store multiple values of the same data type in a single variable.

### Declaration and Initialization

There are several ways to declare and initialize an array.

**1. Declare with size, then assign values**
If an array is declared without initial values, specifying its size is mandatory.

```cpp
string syllabus[3];
syllabus[0] = "C++";
syllabus[1] = "Java";
syllabus[2] = "Database";
```

> [!NOTE]
> If an array is declared without initial values, specifying its size is mandatory.
> Failure to do so (`string syllabus[];`) will result in a compilation error.

**2. Declare and initialize simultaneously**

```cpp
int numbers[5] = {10, 20, 30, 40, 50};
```

**3. Omit size during initialization**
The compiler automatically determines the size based on the number of elements.

```cpp
string cars[] = {"Volvo", "BMW", "Ford"};
```

### Accessing and Modifying Elements

Elements are accessed using a zero-based **index number** inside square brackets `[]`.

```cpp
string syllabus[] = {"C++", "Java", "Database"};

// Accessing
cout << syllabus[0]; // Outputs "C++"

// Modifying
syllabus[1] = "SQL"; // Changes "Java" to "SQL"
```

## Looping Through Arrays

Iterate through an array using a counter variable for the index.

```cpp
string syllabus[] = {"C++", "Java", "Database"};

for (int i = 0; i < 3; i++) {
  cout << syllabus[i] << endl;
}
```

### `for-each` Loop (C++11 and later)

A simpler syntax for iterating over each element without using an index counter.

```cpp
int myNumbers[5] = {10, 20, 30, 40, 50};

for (int i : myNumbers) {
  cout << i << endl;
}
```

## Array Size Management

### Calculating Array Size programmatically

To make loops more robust, you can calculate the number of elements using `sizeof`.

```cpp
int myNumbers[] = {10, 20, 30, 40, 50, 60};

// Total bytes / bytes of one element
int length = sizeof(myNumbers) / sizeof(myNumbers[0]);

for (int i = 0; i < length; i++) {
  cout << myNumbers[i] << endl;
}
```

## Limitations of C-Style Arrays

- **Fixed Size:** Cannot be changed after definition.
- **No Built-in Functions:** Lacks utilities like `push_back()` or `size()`.
- **No Bounds Checking:** Accessing `arr[10]` on a size-5 array leads to undefined behavior and may crash the program.
- **Inflexible:** When passing an array to a function, its size must typically be passed as a separate argument.
- **Difficult for Dynamic Data:** Adding and removing elements requires manual shifting of all subsequent elements.

## Multi-Dimensional Arrays

### Definition and Syntax

A multi-dimensional array is an **array of arrays**.

### Initialization and Access

```cpp
// [Rows][Columns]
string letters[2][3] = {
  { "A", "B", "C" },
  { "D", "E", "F" }
};

// Accessing "C"
cout << letters[0][2];

// Modifying "A" to "Z"
letters[0][0] = "Z";
```

## Vectors (Resizable Arrays)

### Definition and Purpose

For dynamic data, C++ provides the `std::vector` container. Vectors are resizable arrays that can grow and shrink as needed.

### Key Features

- Found in the `<vector>` library.
- Size is dynamic, not fixed.
- Comes with many useful built-in functions.

### Basic Usage

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
  // Declare and Initialize
  vector<string> syllabus = {"C++", "Java", "Database"};

  // Add an Element
  syllabus.push_back("Python");

  // Modern way to get size
  cout << "Size: " << syllabus.size() << endl;

  return 0;
}
```

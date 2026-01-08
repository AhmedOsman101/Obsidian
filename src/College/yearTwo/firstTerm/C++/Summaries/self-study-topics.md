# Self-Study Topics Summary

## Identifying the Pointer and Its Types

### Pointer (Definition)

- A variable that stores the **memory address** of another variable.

### Declaration & Initialization

```cpp
int x = 10;
int* p = &x;   // p points to x
```

### Dereferencing

```cpp
*p = 20;       // modifies x
```

### Pointer Types

- **Null Pointer**: points to nothing

```cpp
int* p = nullptr;
```

- **Void Pointer**: generic pointer, must be cast before dereferencing

```cpp
void* p;
```

- **Pointer to Pointer**

```cpp
int** pp;
```

- **Array Pointer**

```cpp
int arr[3];
int* p = arr;
```

- **Object Pointer**

```cpp
MyClass* obj;
```

## Identifying the Class and Object in C++

### Class (Definition)

- A **user-defined type** that groups data (attributes) and functions (methods).

```cpp
class Car {
public:
  int speed;
  void accelerate();
};
```

### Object (Definition)

- An **instance** of a class.

```cpp
Car c1;
```

## Simple C++ Program (Class + Array + Methods)

```cpp
#include <iostream>
using namespace std;

class Student {
public:
  int marks[3];

  int total() {
    return marks[0] + marks[1] + marks[2];
  }
};

int main() {
  Student s;
  s.marks[0] = 80;
  s.marks[1] = 70;
  s.marks[2] = 90;

  cout << s.total();
}
```

## C++ Program Using Pointer (Real-World Problem)

### Problem: Update salary using pointer

```cpp
#include <iostream>
using namespace std;

int main() {
  double salary = 5000;
  double* p = &salary;

  *p += 1000;  // increment salary
  cout << salary;
}
```

## Program Including Class and Object

```cpp
#include <iostream>
using namespace std;

class BankAccount {
public:
  double balance;

  void deposit(double amount) {
    balance += amount;
  }
};

int main() {
  BankAccount acc;
  acc.balance = 2000;
  acc.deposit(500);
}
```

## Program Using Class + Object + Pointer (Real-World)

### Problem: Modify object data using pointer

```cpp
#include <iostream>
using namespace std;

class Product {
public:
  int price;
};

int main() {
  Product p;
  p.price = 100;

  Product* ptr = &p;
  ptr->price += 50;

  cout << p.price;
}
```

## C++ Files

### File Types

- **`.cpp`** -> implementation
- **`.h` / `.hpp`** -> declarations

### Header File Example

```cpp
// math.h
int add(int a, int b);
```

### Source File Example

```cpp
// math.cpp
#include "math.h"
int add(int a, int b) {
  return a + b;
}
```

### Include Usage

```cpp
#include "math.h"
```

## C++ Exceptions

### Exception Handling Keywords

- `try`
- `throw`
- `catch`

### Basic Structure

```cpp
try {
  if (x == 0)
    throw x;
}
catch (int e) {
  cout << "Error";
}
```

### Standard Exceptions

- `std::exception`
- `std::runtime_error`
- `std::out_of_range`

### Purpose

- Handle **runtime errors**
- Prevent program crash
- Separate error-handling logic from main logic

## C++ File Handling

### Required Header

```cpp
#include <fstream>
```

### File Stream Classes

- **`ofstream`** -> write to file
- **`ifstream`** -> read from file
- **`fstream`** -> read and write

---

### File Open Modes

- `ios::out` -> write (default for `ofstream`)
- `ios::in` -> read
- `ios::app` -> append
- `ios::trunc` -> overwrite existing content
- `ios::binary` -> binary mode

---

### Opening a File

```cpp
ofstream out("data.txt");
ifstream in("data.txt");
```

Or explicitly:

```cpp
fstream file;
file.open("data.txt", ios::in | ios::out);
```

---

### Reading from a File (Line by Line)

```cpp
ifstream file("data.txt");
string line;

while (getline(file, line)) {
  cout << line << endl;
}
file.close();
```

---

### Writing to a File (Overwrite)

```cpp
ofstream file("data.txt", ios::out | ios::trunc);
file << "Hello World\n";
file.close();
```

---

### Writing to a File (Append)

```cpp
ofstream file("data.txt", ios::out | ios::app);
file << "New Line\n";
file.close();
```

---

### Checking File State

```cpp
if (!in.is_open()) { /* error */ }
if (in.fail()) { /* read/write error */ }
```

---

### Closing a File

```cpp
file.close();
```

---

### Full Program: Read, Overwrite, Append

```cpp
#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {
  // Overwrite file
  ofstream outFile("example.txt", ios::out | ios::trunc);
  outFile << "Line 1\n";
  outFile << "Line 2\n";
  outFile.close();

  // Append to file
  ofstream appendFile("example.txt", ios::out | ios::app);
  appendFile << "Line 3 (appended)\n";
  appendFile.close();

  // Read file line by line
  ifstream inFile("example.txt");
  string line;

  while (getline(inFile, line)) {
    cout << line << endl;
  }
  inFile.close();

  return 0;
}
```

---

### Common File Operations

- Read/write text data
- Store program output
- Persist user data

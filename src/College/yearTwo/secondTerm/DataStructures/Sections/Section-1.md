---
prev:
  text: "Sections"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/index"
next:
  text: "Section 2"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-2"
title: Section 1
---

# Data Structures - Section 1

## What Is a Data Structure?

A **data structure** is a storage used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.

This section starts with built-in data structures, especially **arrays**, then moves to **stacks** as a linear data structure with restricted access.

## Arrays

An **array** is a consecutive group of memory locations that all have the same type. The collection of data is indexed, or numbered.

Two important indexing rules are given in the lab:

- indexing starts at `0`
- the highest valid index is one less than the total number of elements

## Types of Arrays

The source distinguishes between two common array types:

| Type | Description |
| --- | --- |
| **Single-dimensional array** | Elements are arranged in list form |
| **Multi-dimensional array** | Elements are arranged in tabular form |

## Declaring Arrays

The lab shows several array declaration forms:

```cpp
// Purpose: Declare arrays in different ways
array_type array_name[no_of_element];
array_type array_name[no_of_element] = {data, data, ...};
array_type array_name[] = {data, data, ...};

array_type array_name[no_of_element];
array_name[0] = data;
...
array_name[no_of_element - 1] = data;
```

These forms cover declaring an empty array, declaring and initializing it immediately, omitting the size when initialization values are present, and assigning values element by element.

## Array Examples from the Lab

One exercise asks for printing the **sum of even** and **sum of odd** numbers in an entered one-dimensional array.

Another example asks for the output of the following code:

```cpp
int list[10] = {2, 1, 2, 1, 1, 2, 3, 2, 1, 2};
cout << list[2];
cout << list[list[2]];
cout << list[list[2] + list[3]];
cout << list[list[list[2]]];
```

The output shown in the source is:

```txt
2212
```

This example emphasizes that array elements can be used as indices for later accesses.

### Even and Odd Sum Exercise

The source also includes a practical task: print the **sum of even** numbers and the **sum of odd** numbers in an entered one-dimensional array.

```cpp
// Purpose: Sum even and odd values in a 1D array
int arr[] = {1, 2, 3, 4, 5, 6};
int evenSum = 0;
int oddSum = 0;

for (int value : arr) {
  if (value % 2 == 0) {
    evenSum += value;
  } else {
    oddSum += value;
  }
}
```

## Multidimensional Arrays

The lab presents two-dimensional arrays using rows and columns.

```cpp
// Purpose: Declare a 2D array
array_type array_name[no_of_rows][no_of_columns];
```

Example:

```cpp
float Salary[3][2] = {12.0, 6.0, 9.0, 0.0, 10.5, 5.2};
float Salary[3][2] = {{12.0, 6.0}, {9.0, 0.0}, {10.5, 5.2}};
```

The source also mentions an exercise about **adding the diagonal elements of an array**, which is a common operation on square two-dimensional arrays.

```cpp
// Purpose: Add diagonal elements of a square matrix
int matrix[3][3] = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9}
};

int diagonalSum = 0;
for (int i = 0; i < 3; i++) {
  diagonalSum += matrix[i][i];
}
```

## Stack

A **stack** is a data structure in which data is added and removed at only one end called the **top**.

- To add an item to the stack, it is **pushed** onto the top.
- To remove an item from the stack, it is **popped** from the top.

Because of this behavior, a stack follows **Last In First Out (LIFO)**. The last element pushed into the stack is the first element popped out.

## Stack Functions

The source lists the following stack operations:

| Function | Description |
| --- | --- |
| `isEmpty()` | Returns `true` if the stack contains no elements |
| `isFull()` | Returns `true` if the stack is full; useful for static stacks |
| `size()` | Returns the size of the stack |
| `top()` | Returns a reference to the top-most element |
| `push(g)` | Adds element `g` at the top of the stack |
| `pop()` | Deletes the most recently entered element |

## Stack Types

The lab divides stacks into two types:

| Type | Description |
| --- | --- |
| **Static stack** | Fixed size, often implemented using an array |
| **Dynamic stack** | Size varies as needed, often implemented using a linked list |

## Static Stack Using an Array

A static stack uses an array of fixed size.

- the **bottom** of the stack is at index `0`
- a variable called `top` tracks the current top of the stack
- `top` is where the next item will be added

The source gives the following form:

```cpp
// Purpose: Represent a stack using an array
Data_type_of_stack name_of_stack[Size_of_stack];
int top = -1;
```

And an example:

```cpp
const int STACK_SIZE = 3;
char s[STACK_SIZE];
int top = 0;
```

The implementation from scratch is described as a class that should provide:

- a function to check if the stack is empty
- a function to check if the stack is full
- a function to push an element onto the stack
- a function to pop an element from the stack
- a function to get the top element of the stack

## Dynamic Stacks

A **dynamic stack** is implemented as a linked list.

Its main advantages in the source are:

- it can grow and shrink as necessary
- it cannot become full as long as memory is available

The lab ends by introducing the idea of a **linked stack**, which applies stack behavior on top of linked-list nodes.

## C++ Implementation

### Array Practice Example

```cpp
#include <iostream>
using namespace std;

int main() {
  int arr[] = {1, 2, 3, 4, 5, 6};
  int size = sizeof(arr) / sizeof(arr[0]);
  int evenSum = 0;
  int oddSum = 0;

  for (int i = 0; i < size; i++) {
    if (arr[i] % 2 == 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  cout << "Even sum = " << evenSum << endl;
  cout << "Odd sum = " << oddSum << endl;

  int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
  };

  int diagonalSum = 0;
  for (int i = 0; i < 3; i++) {
    diagonalSum += matrix[i][i];
  }

  cout << "Diagonal sum = " << diagonalSum << endl;
  return 0;
}
```

### Static Stack Using Array

```cpp
#include <iostream>
using namespace std;

class StaticStack {
private:
  static const int STACK_SIZE = 5;
  int items[STACK_SIZE];
  int topIndex;

public:
  StaticStack() : topIndex(-1) {}

  bool isEmpty() const {
    return topIndex == -1;
  }

  bool isFull() const {
    return topIndex == STACK_SIZE - 1;
  }

  int size() const {
    return topIndex + 1;
  }

  void push(int value) {
    if (isFull()) {
      cout << "Stack is full" << endl;
      return;
    }
    items[++topIndex] = value;
  }

  void pop() {
    if (isEmpty()) {
      cout << "Stack is empty" << endl;
      return;
    }
    topIndex--;
  }

  int top() const {
    if (isEmpty()) {
      cout << "Stack is empty" << endl;
      return -1;
    }
    return items[topIndex];
  }
};
```

### Dynamic Stack Using Linked List

```cpp
#include <iostream>
using namespace std;

class DynamicStack {
private:
  struct Node {
    int data;
    Node *next;
  };

  Node *topNode;
  int count;

public:
  DynamicStack() : topNode(nullptr), count(0) {}

  ~DynamicStack() {
    while (!isEmpty()) {
      pop();
    }
  }

  bool isEmpty() const {
    return topNode == nullptr;
  }

  int size() const {
    return count;
  }

  void push(int value) {
    Node *newNode = new Node{value, topNode};
    topNode = newNode;
    count++;
  }

  void pop() {
    if (isEmpty()) {
      cout << "Stack is empty" << endl;
      return;
    }

    Node *temp = topNode;
    topNode = topNode->next;
    delete temp;
    count--;
  }

  int top() const {
    if (isEmpty()) {
      cout << "Stack is empty" << endl;
      return -1;
    }
    return topNode->data;
  }
};
```

### Standard Library Stack

```cpp
#include <iostream>
#include <stack>
using namespace std;

int main() {
  stack<int> s;
  s.push(10);
  s.push(20);
  s.push(30);

  cout << s.top() << endl;
  s.pop();
  cout << s.top() << endl;
  cout << s.size() << endl;
  cout << boolalpha << s.empty() << endl;
  return 0;
}
```

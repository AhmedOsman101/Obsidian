# Ahmad Ali Ahmad Othman - Section 1 - Sheet 6

# Question (1)

---

## Question (1-a)

**Write a program to print the value of the address of the pointer to a variable whose value is input from user.**

```cpp
#include <iostream>

using namespace std;

int main() {
  int x;
  int *ptr;

  cin >> x;
  ptr = &x

  printf("Value: %d, Address: %p\n", *ptr, ptr);
  return 0;
}
```

---

## Question (1-b)

**Write a program to print a number which is entered from keyboard using pointer.**

```cpp
#include <iostream>

using namespace std;

int main() {
  int x;
  int *ptr;

  cin >> x;
  ptr = &x

  cout << *ptr << endl;
  return 0;
}
```

---

## Question (1-c)

**Write a function which will take pointer and display the number on screen. Take number from user and print it on screen using that function.**

```cpp
#include <iostream>

using namespace std;

void printPtr(int *ptr) {
  cout << *ptr << endl;
}

int main() {
  int x; cin >> x;

  printPtr(&x);
  return 0;
}
```

---

## Question (1-d)

Write a program that asks the user to enter integers as inputs to be stored in the variables `a` and `b` respectively.
There are also two integer pointers named `ptrA` and `ptrB`.
Assign the values of `a` and `b` to `ptrA` and `ptrB` respectively, and display them and print the after swapping two value.

```cpp
#include <iostream>

using namespace std;

int main() {
  int a, b; cin >> a >> b;
  int *ptrA = &a, *ptrB = &b;

  cout << "Before swap:" << endl;
  printf("ptrA: %d, ptrB: %d\n", *ptrA, *ptrB);

  int temp = *ptrA;
  *ptrA = *ptrB;
  *ptrB = temp;

  cout << "After swap:" << endl;
  printf("ptrA: %d, ptrB: %d\n", *ptrA, *ptrB);

  return 0;
}
```

---

# Question (2)

---

## Question (2-a)

Given the string "A string." Print on one line the letter on the index 0, the pointer position and the letter t. undate the pointer to pointer +2. Then, in another line print the pointer and the letters r and g of the string (using the pointer).

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  char str[] = "A string";
  char *ptr = str;

  printf("%c %p %c\n", *ptr, ptr, ptr[3]);
  return 0;
}
```

---

## Question (2-b)

**Find max element in array using pointer**

```cpp
#include <iostream>
using namespace std;

int main() {
  int n;
  cin >> n;

  int arr[100];
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  int *maxPtr = arr;

  for (int i = 1; i < n; i++) {
    if (*(arr + i) > *maxPtr) {
      maxPtr = arr + i;
    }
  }

  cout << "Max value = " << *maxPtr << endl;
  cout << "Address = " << maxPtr << endl;

  return 0;
}
```

---

## Question (2-c)

**Print size of different data types using pointers**

```cpp
#include <iostream>
using namespace std;

int main() {
  int a;
  float b;
  double c;
  char d;

  cout << sizeof(&a) << endl;
  cout << sizeof(&b) << endl;
  cout << sizeof(&c) << endl;
  cout << sizeof(&d) << endl;

  return 0;
}
```

---

## Question (2-d)

**Print and sum array elements using pointers**

```cpp
#include <iostream>
using namespace std;

int main() {
  int n;
  cin >> n;

  int arr[100];
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }

  int *p = arr;
  int sum = 0;

  for (int i = 0; i < n; i++) {
    cout << *(p + i) << " ";
    sum += *(p + i);
  }

  cout << endl;
  cout << "Sum = " << sum << endl;

  return 0;
}
```

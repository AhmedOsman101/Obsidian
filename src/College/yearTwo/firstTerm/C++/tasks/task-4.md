# Ahmad Ali Ahmad Othman - Section 1 - Task 4

## Question (2): Output (Page 1)

**Output**

```
7#9#5
30#50#70#40
2100#1200
```

---

## Question (2): Output (Page 2–3)

### A

```
18, 4
```

### B

```
280 10
290 570 10
570 10
```

### C

```
First = 8
Second = 2
First = 9
```

### D

```
20  23
10  23
11  11
```

---

# Coding Questions — Reformatted

Each question has **its own `main()`** and is **independent**.

---

## Question 1 — Sum and Average of Array

```cpp
#include <iostream>
#include <array>
using namespace std;

int main() {
  array<int, 5> nums = {50, 10, 30, 70, 25};

  int sum = 0;
  for (int n : nums) sum += n;

  double avg = sum / 5.0;

  cout << "Sum: " << sum << ", Average: " << avg << endl;
  return 0;
}
```

---

## Question 2 — Swap First and Last Element

```cpp
#include <iostream>
#include <array>
using namespace std;

int main() {
  array<int, 5> nums = {50, 10, 30, 70, 25};

  swap(nums[0], nums[4]);

  for (int n : nums) cout << n << " ";
  cout << endl;

  return 0;
}
```

---

## Question 3 — Reverse 1-D Array

```cpp
#include <iostream>
#include <array>
#include <algorithm>
using namespace std;

int main() {
  array<int, 5> nums = {50, 10, 30, 70, 25};

  reverse(nums.begin(), nums.end());

  for (int n : nums) cout << n << " ";
  cout << endl;

  return 0;
}
```

---

## Question 4 — Smallest and Largest Element

```cpp
#include <iostream>
#include <array>
#include <algorithm>
using namespace std;

int main() {
  array<int, 5> nums = {50, 10, 30, 70, 25};

  sort(nums.begin(), nums.end());

  cout << "Smallest: " << nums.front()
       << ", Biggest: " << nums.back() << endl;

  return 0;
}
```

---

## Question 5 — Factorial

```cpp
#include <iostream>
using namespace std;

int factorial(int n) {
  int res = 1;
  for (int i = 1; i <= n; i++) res *= i;
  return res;
}

int main() {
  int n;
  cin >> n;
  cout << factorial(n) << endl;
  return 0;
}
```

---

## Question 6 — Set Smaller Value to Zero

```cpp
#include <iostream>
using namespace std;

void smaller(int &x, int &y) {
  if (x <= y) x = 0;
  else y = 0;
}

int main() {
  int x = 5, y = 7;

  cout << "x: " << x << ", y: " << y << endl;
  smaller(x, y);
  cout << "x: " << x << ", y: " << y << endl;

  return 0;
}
```

---

## Question 7 — Power Function (Default Argument)

```cpp
#include <iostream>
using namespace std;

double power(double n, int p = 2) {
  double res = 1;
  for (int i = 0; i < p; i++) res *= n;
  return res;
}

int main() {
  double base;
  int p;
  cin >> base >> p;

  cout << power(base, p) << endl;
  return 0;
}
```

---

## Question 8 — Simple Calculator

```cpp
#include <iostream>
using namespace std;

double add(double x, double y) { return x + y; }
double sub(double x, double y) { return x - y; }
double mul(double x, double y) { return x * y; }
double divi(double x, double y) { return x / y; }

int main() {
  int choice;
  double x, y;

  cin >> choice;
  cin >> x >> y;

  switch (choice) {
    case 1: cout << add(x, y); break;
    case 2: cout << sub(x, y); break;
    case 3: cout << mul(x, y); break;
    case 4: cout << divi(x, y); break;
    default: cout << "Invalid"; break;
  }

  return 0;
}
```

---

## Final Notes (Straight Talk)

- This format is **exam-safe**: one `main()` per question.
    
- Logic is preserved exactly, unnecessary abstractions removed.
    
- Uses standard headers only.
    
- Outputs match the original program behavior.
    

If you want:

- **Strict C (not C++)**
    
- **One-file with `#ifdef QUESTION_X`**
    
- **Or annotated outputs line-by-line**
    

say so and I’ll adjust immediately.
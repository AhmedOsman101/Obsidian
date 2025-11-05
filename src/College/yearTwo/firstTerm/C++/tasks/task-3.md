# C++ Task 3

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20240592                 |
| Section | 1                        |

## Question 1

- Read a three-digit integer n.
- Calculate the sum of digits of the difference between a number and its reversed form.

```cpp
#include <cmath>
#include <iostream>
#include <string>

using namespace std;

int main() {
  string input;
  cout << "Enter a 3-digit number: ";
  cin >> input;

  string reversed(input.rbegin(), input.rend());
  int n = stoi(input), reverse = stoi(reversed);

  int diff = n - reverse;
  string diffString = to_string(diff);

  int sum = 0;

  for (size_t i = 0; i < diffString.length(); i++) {
    sum += diffString[i] - '0'; // convert from ascii to the digit value
  }

  printf("%d\n", sum);
  return 0;
}
```

## Palindrome Number

- Read a three-digit positive integer n.
- Print its reversal and then Palindrome or Not Palindrome.

```cpp
int main() {
  string n;
  cout << "Enter a number: "; cin >> n;
  bool isPalindrome = true;
  size_t len = n.length();

  for (size_t i = 0; i < len / 2; i++) {
    if (n[i] != n[len - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  printf("%sPalindrome\n", isPalindrome ? "" : "Not ");
  return 0;
}
```

## Day Number to Date (use switch)

- Read an integer representing the day number of the year (from 1 to 360).
- Assume that each month has exactly 30 days.
- Your task is to print the month number and the day number within that month.
- Use a switch statement to determine the month (do not use arrays or formulas).

```cpp
int main() {
  int date;
  cout << "Enter a day: "; cin >> date;

  int day = date % 30;
  day = day == 0 ? 1 : day; // handle first day of the month
  printf("Month %.0f, Day %d\n", ceil(date / 30.0), day); // easier solution without switch ;)

  switch ((int) ceil(date / 30.0)) {
    case 1:
      printf("Month 1, Day %d\n", day);
      break;

    case 2:
      printf("Month 2, Day %d\n", day);
      break;

    case 3:
      printf("Month 3, Day %d\n", day);
      break;

    case 4:
      printf("Month 4, Day %d\n", day);
      break;

    case 5:
      printf("Month 5, Day %d\n", day);
      break;

    case 6:
      printf("Month 6, Day %d\n", day);
      break;

    case 7:
      printf("Month 7, Day %d\n", day);
      break;

    case 8:
      printf("Month 8, Day %d\n", day);
      break;

    case 9:
      printf("Month 9, Day %d\n", day);
      break;

    case 10:
      printf("Month 10, Day %d\n", day);
      break;

    case 11:
      printf("Month 11, Day %d\n", day);
      break;

    case 12:
      printf("Month 12, Day %d\n", day);
      break;

    default:
      printf("Invalid date\n");
      break;
  }
  return 0;
}
```

## Tax rate by income (use switch)

- Read an integer representing an employee's annual income in dollars.
- Use a switch statement to determine the tax rate.

```cpp
int main() {
  int income; cout << "Enter income: "; cin >> income;
  int tax;

  switch (income / 10000) {
    case 0:
    case 1:
      tax = 0;
      break;

    case 2:
    case 3:
    case 4:
      tax = 5;
      break;

    case 5:
    case 6:
    case 7:
      tax = 10;
      break;

    case 8:
    case 9:
      tax = 15;
      break;

    default:
      tax = 20;
      break;
  }

  printf("Tax Rate: %d%%\n", tax);
  return 0;
}
```

## Next calendar date (no loops)

- Read three integers day month year (valid Gregorian date).
- Compute and print the next date in DD MM YYYY format.
- Consider month lengths and leap years.

```cpp
int main() {
  int day, month, year;

  cout << "Enter the date (d m y): ";
  cin >> day >> month >> year;

  switch (month) {
    case 2:
      if (year % 4 == 0 && day < 29) day++;
      else if (day < 28) day++;
      else {
        day = 1;
        month++;
      }
      break;

    case 4:
    case 5:
    case 9:
    case 11:
      if (day == 30) {
        day = 1;
        month++;
      } else day++;
      break;

    case 12:
      if (day == 31) {
        day = 1;
        month = 1;
        year++;
      } else day++;
      break;

    default:
      if (day == 31) {
        day = 1;
        month++;
      } else day++;
      break;
  }

  printf("%i %i %i\n", day, month, year);
  return 0;
}
```

---
title: Task 1
prev:
  text: "Tasks"
  link: "/College/yearOne/secondTerm/C-Essentials/Tasks/index"
next:
  false
  # text: "Task Two"
  # link: "/College/yearOne/secondTerm/C-Essentials/Tasks/TaskTwo"
---

# Programming Essentials in C - Task Two

## Question 1

Write a C program that does the following using arrays:

1. Accept 5 integers from the user and store them in an array.
2. Find and display the largest number in the array.
3. Calculate and print the sum of all elements

```c
#include <stdio.h>

void q1() {
  int nums[5], sum = 0, largest;

  printf("Enter 5 numbers: ");

  for (int i = 0; i < 5; i++) scanf("%d", &nums[i]);

  largest = nums[0]; // set the first element as the pivot

  for (int i = 0; i < 5; i++) {
    int n = nums[i];

    sum += n;

    if (n > largest) largest = n;
  }

  printf("Sum: %d\nLargest number: %d\n", sum, largest);
}
```

## Question 2

Accept and Print Array Elements

- Write a C program to accept 10 integers from the user and print them in the same order.

```c
#include <stdio.h>

void q2() {
  int n;

  printf("Enter 10 numbers: ");

  for (int i = 0; i < 10; i++) {
    scanf("%d", &n);
    printf("%d ", n);
  }

  printf("\n");
}
```

## Question 3

Reverse an Array

- Accept N numbers from the user, store them in an array, and print them in reverse order.

```c
#include <stdio.h>

void q3() {
  int len;

  printf("Enter the array's length: ");
  scanf("%d", &len);

  int nums[len];

  printf("Enter the numbers: ");

  for (int i = 0; i < len; i++) scanf("%d", &nums[i]);

  printf("Array elements in reverse: ");

  for (int i = len - 1; i >= 0; i--) printf("%d ", nums[i]);

  printf("\n");
}
```

## Question 4

Find the Sum of Array Elements

- Write a program to compute the sum of all elements in an array.

```c
#include <stdio.h>

void q4() {
  int nums[5], sum = 0;

  printf("Enter 5 numbers: ");

  for (int i = 0; i < 5; i++) scanf("%d", &nums[i]);

  for (int i = 0; i < 5; i++) {
    int n = nums[i];
    sum += n;
  }

  printf("Sum: %d\n", sum);
}
```

## Question 5

Find the Largest and Smallest Element

- Accept N numbers and find the largest and smallest number in the array.

```c
#include <stdio.h>

void q5() {
  int len, largest, smallest;

  printf("Enter the array's length: ");
  scanf("%d", &len);

  int nums[len];

  printf("Enter the numbers: ");

  for (int i = 0; i < len; i++) scanf("%d", &nums[i]);

  largest = nums[0]; // set the first element as the pivot
  smallest = nums[0]; // set the first element as the pivot

  for (int i = 0; i < len; i++) {
    int n = nums[i];

    if (n > largest) largest = n;

    if (n < smallest) smallest = n;
  }

  printf("Largest number: %d\nSmallest number: %d\n", largest, smallest);
}
```

## Question 6

Count Even and Odd Numbers

- Accept N numbers, count and display how many are even and how many are odd.

```c
#include <stdio.h>

void q6() {
  short len, n, even = 0, odd = 0;

  printf("Enter the length: ");
  scanf("%hd", &len); // NOTE: use %hd for short integer

  printf("Enter the numbers: ");

  for (short i = 0; i < len; i++) {
    scanf("%hd", &n);

    n % 2 == 0 ? even++ : odd++;
  }

  printf("Even: %hd\nOdd: %hd\n", even, odd);
}
```

## Question 7

Sort an Array in Ascending Order

- Accept N numbers, sort them in ascending order, and display the sorted array.

```c
#include <stdio.h>

void bubbleSort(int arr[], const int len, const char mode) {
  for (int i = 0; i < len; i++) {
    short swapped = 0;

    for (int j = 0; j < len - i - 1; j++) {
      int temp;

      if (mode == 'a') { // mode "a" for ascending order
        if (arr[j + 1] < arr[j]) {
          temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
          swapped = 1; // Set the flag if a swap happened
        }
      } else if (mode == 'd') { // mode "d" for decending order
        if (arr[j] < arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = 1; // Set the flag if a swap happened
        }
      }
    }

    // If no swaps occurred in this iteration, the array is sorted
    if (swapped == 0) break;
  }
}

void q7() {
  int len;

  printf("Enter the length: ");
  scanf("%d", &len);

  int nums[len];
  printf("Enter the numbers: ");

  for (int i = 0; i < len; i++) scanf("%d", &nums[i]);

  bubbleSort(nums, len, 'a'); // modifies the original array

  printf("Sorted Array (asc): ");

  for (int i = 0; i < len; i++) printf("%d ", nums[i]);

  printf("\n");
}
```

## Question 8

Merge Two Arrays

- Accept two arrays from the user and merge them into a single array.

```c
#include <stdio.h>

void q8() {
  int arr1[3], arr2[3], merged[6];

  printf("Add 3 elements to array 1: ");

  for (int i = 0; i < 3; i++) scanf("%d", &arr1[i]);

  printf("Add 3 elements to array 2: ");

  for (int i = 0; i < 3; i++) scanf("%d", &arr2[i]);

  printf("Merged array: { ");

  for (int i = 0; i < 6; i++) {
    // 3 % 3 = 0; 4 % 3 = 1; 5 % 3 = 2;
    merged[i] = i < 3 ? arr1[i] : arr2[i % 3];
    printf("%d ", merged[i]);
  }

  printf("}\n");
}
```

## Question 9

Find Unique Items in an Array

- Accept N numbers and display only the unique items.

```c
#include <stdio.h>

void q9() {
  int len;

  printf("Enter the length: ");
  scanf("%d", &len);

  int nums[len], unique[len], uniqueCount = 0;
  printf("Enter the numbers: ");

  for (short i = 0; i < len; i++) scanf("%d", &nums[i]);

  for (short i = 0; i < len; i++) {
    short j = 0, isUnique = 1;
    short n = nums[i];

    do {
      if (uniqueCount == 0) break;

      /*
        n xor unique[j]
        0 => it's duplicated, then we break and mark it as not unique
        any other value => it's unique
      */
      if (!(n ^ unique[j])) { // !0 => 1 (true)
        isUnique = 0;
        break;
      }

      j++;
    } while (j < uniqueCount);

    if (isUnique) {
      unique[uniqueCount] = n;
      uniqueCount++;
    }
  }

  printf("Unique items: ");

  for (short i = 0; i < uniqueCount; i++) printf("%d ", unique[i]);

  printf("\n");
}
```

## Question 10

Check if the Array is a Palindrome

- Accept N numbers and check if the array reads the same forward and backward.

```c
#include <stdio.h>
#include <math.h> // For ceil() function

void q10() {
  int len;
  short isPalindrome = 1;

  printf("Enter the length: ");
  scanf("%d", &len);
  float mid = len % 2 == 0 ? ceil((len / 2.0) - 1) : ceil(len / 2.0);

  int nums[len];
  printf("Enter the numbers: ");

  for (short i = 0; i < len; i++) scanf("%d", &nums[i]);

  for (short i = 0; i <= mid; i++) {
    int last = len - i - 1;

    if (nums[i] != nums[last]) {
      isPalindrome = 0;

      printf("It's not a palindrome\nItem %d doesn't match item %d\n",
             i, last
            );
      break;
    }
  }

  if (isPalindrome) printf("It's a palindrome!\n");
}
```

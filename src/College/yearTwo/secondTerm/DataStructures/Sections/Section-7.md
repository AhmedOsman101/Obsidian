---
title: Section 7
prev:
  text: "Section 6"
  link: "/College/yearTwo/secondTerm/DataStructures/Sections/Section-6"
next: false
---

# Data Structures - Section 7

## Search Algorithms

Searching finds an element in a data structure. Used in databases, file systems, AI, and machine learning.

### Search Algorithm Types

- **Linear Search** — sequential, works on unsorted arrays
- **Binary Search** — divide-and-conquer, requires sorted arrays
- **Hashing** — advanced, constant-time average lookup
- **Tree-based searching** — BST, AVL, etc.

## Linear Search

Checks each element one by one from index 0 onward.

### Algorithm

1. Start at first element
2. Compare with target
3. If match -> return index
4. If not -> move to next
5. Repeat until found or end reached

### Complexity

| Case    | Time |
| ------- | ---- |
| Best    | O(1) |
| Worst   | O(n) |
| Average | O(n) |

### Implementation


```cpp
#include <iostream>
using namespace std;

int linearSearch(int arr[], int length, int target) {
  for (int i = 0; i < length; i++) {
    if (arr[i] == target) return i;
  }
  return -1;
}

int main() {
  int arr[] = {10, 20, 30, 40, 50};
  int result = linearSearch(arr, 5, 30);
  if (result != -1) {
    cout << "Element found at index " << result << endl;
  } else {
    cout << "Element not found" << endl;
  } return 0;
}
```

## Binary Search

Faster search using divide-and-conquer. **Requires a sorted array**. Checks the middle element and eliminates half each step.

### Algorithm

1. Find middle element
2. Compare with target
3. If equal -> found
4. If target < middle -> search left half
5. If target > middle -> search right half
6. Repeat

### Complexity

| Case  | Time     |
| ----- | -------- |
| Best  | O(1)     |
| Worst | O(log n) |

### Implementation


```cpp
#include <iostream>
using namespace std;

int binarySearch(int arr[], int length, int target) {
  int low = 0, high = length - 1;
  while (low <= high) {
    int mid = (low + high) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1; // -1 means not found
}

int main() {
  int arr[] = {10, 20, 30, 40, 50};
  int result = binarySearch(arr, 5, 40);
  if (result != -1) {
    cout << "Element found at index " << result << endl;
  } else {
    cout << "Element not found" << endl;
  } return 0;
}
```

### Linear vs Binary Search

| Property        | Linear Search | Binary Search      |
| --------------- | ------------- | ------------------ |
| Sorted required | No            | Yes                |
| Time complexity | O(n)          | O(log n)           |
| Method          | Sequential    | Divide-and-conquer |

## Hashing

**Hashing** maps keys to array indices via a **hash function**. Enables O(1) average-case search, insert, and delete.

### Key Concepts

- **Hash function**: converts key -> index
- **Collision**: two keys hash to the same index
- **Collision resolution**: chaining (linked lists) or open addressing

---

_3 min read (source: 2 min)_

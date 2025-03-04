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

# Programming Essentials in C - Task One
# Section 1 - أحمد علي أحمد علي عثمان

## Question 1

Draw a flowchart to calculate the area of a rectangle given its length and width. The user should input the values, and the program should display the result.

### Answer:

```mermaid
flowchart TD
    Start(["Start"]) -->
    Input[/"INPUT width, length"/] -->
    Calculate["area = width * length"] -->
    Print[/"PRINT area"/] -->
    End(["End"])
```

## Question 2

Create a flowchart that checks whether a number entered by the user is even or odd and displays the result accordingly

### Answer

```mermaid
flowchart TD
    Start(["Start"]) -->
    Input[/"INPUT n"/] -->
    Condition{"n % 2 == 0"}
    Condition -- True --> PrintEven[/"PRINT even"/]
    Condition -- False --> PrintOdd[/"PRINT odd"/]
    PrintEven --> End(["End"])
    PrintOdd --> End(["End"])
```

## Question 3

Design a flowchart that prints the numbers from 1 to 10 using a loop.

### Answer

```mermaid
flowchart TD
    Start(["Start"]) -->
    Assign["Set n = 0"] -->
    Loop{"n <= 10"}
    Loop -- False --> End(["End"])
    Loop -- True -->
    PrintEven[/"PRINT n"/] -->
    Increment["n += 1"] --> Loop;
```

## Question 4

Draw a flowchart to take two numbers as input, perform addition, subtraction, multiplication, and division, and display the results

### Answer

```mermaid
flowchart TD
    Start(["Start"]) -->
    Input[/"READ a, b"/] -->
    Add[/"PRINT a + b"/] -->
    Subtract[/"PRINT a - b"/] -->
    Multiply[/"PRINT a * b"/] -->
    Divide[/"PRINT a / b"/] -->
    End(["end"])
```

## Question 5

Create a flowchart for a grading system where a student enters their marks, and the system assigns grades based on the following criteria:

- 90-100: A
- 80-89: B
- 70-79: C
- 60-69: D
- Below 60: Fail

### Answer

```mermaid
flowchart TD
    Start(["Start"]) -->
    Input[/"READ grade"/] -->
    Condition1{"grade >= 90 && grade <= 100"}
    Condition1 -- True --> PrintA[/"PRINT A"/]
    Condition1 -- False -->
    Condition2{"grade >= 80 && grade <= 89"}
    Condition2 -- True --> PrintB[/"PRINT B"/]
    Condition2 -- False -->
    Condition3{"grade >= 70 && grade <= 79"}
    Condition3 -- True --> PrintC[/"PRINT C"/]
    Condition3 -- False -->
    Condition4{"grade >= 60 && grade <= 69"}
    Condition4 -- True --> PrintD[/"PRINT D"/]
    Condition4 -- False -->
    PrintFail[/"PRINT Fail"/] --> End(["end"])
    PrintA --> End(["end"])
    PrintB --> End(["end"])
    PrintC --> End(["end"])
    PrintD --> End(["end"])
```

## Question 6

Write an algorithm to check if a number is even or odd.

### Answer

```
Input: Read an integer n
Process: Compute n % 2.
  If n % 2 == 0, then Print "n is even".
  Else, Print "n is odd".
Output: Print whether `n` is even or odd.
```

## Question 6

Solve all the above questions in C

### Answer

![[imgs/code.png]]

# Ahmad Ali Ahmad Othman - Section 1 - Task 2

## Question 1

Write the algorithm to print the first five natural numbers and trace it in table?

### Algorithm

```txt
Start
Assign i = 0
Loop i < 5:
  Print "Iteration | Value of i"
  Print "-------------------------"
  Print "i | i + 1"
  Increment i += 1
End
```

### Flowchart

```mermaid
flowchart TD
START([START]) -->
Assign[i = 0] -->
Loop{i < 5}
Loop -- False --> End(["End"])
Loop -- True -->
  PrintTableHeader[/"Print 'Iteration &vert; Value of i'"/] -->
  PrintValues[/"Print 'i &vert; i + 1'"/] -->
  Increment["i += 1"] --> Loop
```

## Question 2

Write the algorithm to sum the odd numbers of the first 5 integers and trace it in table?

### Algorithm

```txt
Start
Initialize i = 0, sum = 0
Loop i < 5:
  Print "Iteration | Sum"
  Print "------------------"
  IF i % 2 == 0:
    Increment sum += i
  Print "i | sum"
  Increment i += 1
End
```

### Flowchart

```mermaid
flowchart TD
START([START]) -->
Assign[i = 0, sum = 0] -->
Loop{i < 5}
Loop -- False --> End(["End"])
Loop -- True -->
  PrintTableHeader[/"Print 'Iteration &vert; Sum'"/] -->
  CheckOdd{i % 2 != 0} -- False --> PrintValues
  CheckOdd -- True --> IncrementSum[sum += i] -->
  PrintValues[/"Print 'i &vert; sum'"/] -->
  Increment["i += 1"] --> Loop
```

## Question 3

Write the algorithm to Convert Celsius to Fahrenheit?

### Algorithm

```txt
Start
Print "Enter temprature in Celsius: "
Input c
Assign f = (c * 1.8) + 32
Print f
End
```

### Flowchart

```mermaid
flowchart TD
Start([START]) -->
InputPrompt[/Print 'Enter temprature in Celsius: '/] -->
Input[/Read c/] -->
Assign["f = (c * 1.8) + 32"] -->
PrintOutput[/Print f/] -->
End([END])
```

## Question 4

Write the algorithm to Check if a Number is Even or Odd

### Algorithm

```txt
Start
Print "Enter a number: "
Input n
IF n % 2 == 0:
  Print "Even"
Else:
  Print "Odd"
End
```

### Flowchart

```mermaid
flowchart TD
Start([START]) -->
InputPrompt[/Print 'Enter a number: '/] -->
Input[/Read n/] -->
CheckOdd{n % 2 == 0} -- True -->
PrintEven[/Print Even/] --> End
CheckOdd -- False --> PrintOdd[/Print Odd/] --> End
End([END])
```

## Question 5

Write the algorithm that Find the Largest of Two Numbers

### Algorithm

```txt
Start
Print "Enter first number: "
Input x
Print "Enter second number: "
Input y
IF x < y:
  Print "y is bigger"
Else:
  Print "x is bigger"
End
```

### Flowchart

```mermaid
flowchart TD
Start([START]) -->
InputPrompt1[/Print 'Enter first number: '/] -->
Input1[/Read x/] -->
InputPrompt2[/Print 'Enter second number: '/] -->
Input2[/Read y/] -->
Check{x < y} -- True -->
PrintEven[/Print y is bigger/] --> End
Check -- False --> PrintOdd[/Print x is bigger/] --> End
End([END])
```

## Question 6

Write an algorithm which Grading System Based on Marks

### Algorithm

```txt
Start
Print "Enter your grade: "
Input grade
IF 90 <= grade && grade <= 100:
  Print "A"
Else if 80 <= grade && grade <= 89:
  Print "B"
Else if 70 <= grade && grade <= 79:
  Print "C"
Else if 60 <= grade && grade <= 69:
  Print "D"
Else:
  Print "Failed"
End
```

### Flowchart

```mermaid
flowchart TD
Start(["START"]) -->
Prompt[/"Print 'enter your grade: '"/] -->
Input[/"Read grade"/] -->
Condition1{"grade >= 90 && grade <= 100"}
  Condition1 -- True --> PrintA[/"Print A"/]
  Condition1 -- False -->
Condition2{"grade >= 80 && grade <= 89"}
  Condition2 -- True --> PrintB[/"Print B"/]
  Condition2 -- False -->
Condition3{"grade >= 70 && grade <= 79"}
  Condition3 -- True --> PrintC[/"Print C"/]
  Condition3 -- False -->
Condition4{"grade >= 60 && grade <= 69"}
  Condition4 -- True --> PrintD[/"Print D"/]
  Condition4 -- False -->
PrintFail[/"Print Fail"/] --> End(["END"])
PrintA --> End
PrintB --> End
PrintC --> End
PrintD --> End
```

## Question 7

Write the algorithm for a multiplication table

### Algorithm

```txt
Start
Print "Enter a number: "
Read n
Assign i = 1
Loop i <= 12:
  Print "n * i"
  Increment i += 1
End
```

### Flowchart

```mermaid
flowchart TD
START([START]) -->
ReadN[/Read n/] -->
Assign[i = 1] -->
Loop{i <= 12}
Loop -- False -->
  End(["End"])
Loop -- True -->
  Print[/"Print n * i"/] -->
  Increment[i += 1] -->
  Loop
```

## Question 8

Write the algorithm to list the factors of the integer n

### Algorithm

```txt
Start
Read n
Assign i = 1
Loop i <= n:
  IF n % i == 0:
    Print i
  Increment i += 1
End
```

### Flowchart

```mermaid
flowchart TD
START([START]) -->
ReadN[/Read n/] -->
Assign[i = 1] -->
Loop{i <= n}
  Loop -- False --> End(["End"])
  Loop -- True --> Check{n % i == 0?}
    Check -- False --> Increment
    Check -- True --> Print[/"Print i"/]
    --> Increment[i = i + 1]
    --> Loop
```

## Question 9

Write the algorithm to print Prime Numbers

### Algorithm

```txt
Start
Print "Enter limit: "
Input n
Assign i = 2
Loop i <= n:
  Assign j = 2, isPrime = true
  Loop j < i:
    IF i % j == 0:
      Assign isPrime = false
      Break
  IF isPrime == true:
    Print i
End
```

### Flowchart

```mermaid
flowchart TD
START([START]) -->
ReadN[/Read n/] -->
Assign[i = 2, j = 2] -->
LoopI{i <= n}
  LoopI -- False -->
    End(["End"])
  LoopI -- True -->
    Assign2[isPrime = true] -->
    LoopJ{j <= i}
      LoopJ -- False -->
        CheckPrint{isPrime?}
          CheckPrint -- True -->
            PrintI[/Print i/] -->
            IncrementI[i = i + 1] -->
            LoopI
          CheckPrint -- False -->
            IncrementI
      LoopJ -- True -->
        CheckPrime{i % j == 0}
          CheckPrime -- True -->
            Assign3[isPrime = false] -->
            CheckPrint
          CheckPrime -- False -->
            IncrementJ[j = j + 1] -->
            LoopJ
```

## Question 10

Write the algorithm to calculating the next mathematical series

### Algorithm

```txt
Start
Input x, n
Assign y = 0, i = 1
Loop i <= n:
  Assign factorial = 1, j = 1
  Loop j <= i:
    Assign factorial = factorial * j
    Increment j += 1
  Assign term = (1 / factorial) * ((x + 5) 2 * x) ^ 2
  Assign y = y + term
  Increment i += 1
Print y
End
```

### Flowchart

```mermaid
flowchart TD
  START([START]) -->
  ReadInputs[/Read x, n/] -->
  InitY[y = 0, i = 1] -->
  OuterLoop{i <= n}
  OuterLoop -- False --> PrintY[/"Print y"/] --> End(["End"])
  OuterLoop -- True --> InitFact[factorial = 1, j = 1] -->
  InnerLoop{j <= i}
  InnerLoop -- True --> UpdateFact[factorial = factorial * j] -->
  IncrementJ[j = j + 1] --> InnerLoop
  InnerLoop -- False --> ComputeTerm["term = (1 / factorial) * ((x + 5) / (2 * x))<sup>i</sup>"] -->
  AddTerm[y = y + term] -->
  IncrementI[i = i + 1] --> OuterLoop
```

## Question 11

Draw a flowchart to read the sales representative file of a major company, which includes:

- Representative number (N),
- Sales amount (A),
- Representative name (M),
  Calculate the sales commission at 2.5% for sales less than 50,000 pounds, and 5.5% for sales above that amount. Print lists that include the representative number, sales amount, commission value, and representative name. The lists end with the total sales amount and the total commission value for the sales representative.

### Algorithm

```txt
Start
Assign totalSales = 0, totalCommission = 0
Read N # Representative Number
While N != 555:
  Read M, A # Name (M), Sales Amount (A)

  IF A < 50000:
    Assign commission = A * 0.025
  Else:
    commission = A * 0.055

  Print N, M, A, commission
  Assign totalSales += A
  Assign totalCommission += commission
  Read N # Next Representative Number

Print totalSales, totalCommission
End
```

### Flowchart

```mermaid
flowchart TD
START([START]) -->
AssignTotals["TotalSales = 0<br/>TotalCommission = 0"] -->
ReadN["Read Representative Number (N)"] -->
CheckEnd{N == 555}
  CheckEnd -- True -->
    PrintTotals["Print TotalSales<br/>and TotalCommission"] -->
    End(["End"])
  CheckEnd -- False -->
    ReadData["Read Name (M) and Sales Amount (A)"] -->
    CheckAmount{A < 50,000}
      CheckAmount -- True -->
        CalcLow[Commission = A * 0.025] -->
        PrintData[/Print N, M, A, Commission/] -->
        UpdateTotals[TotalSales += A<br/>TotalCommission += Commission] -->
        ReadNext[/"Read Next Representative Number (N)"/] -->
        CheckEnd
      CheckAmount -- False -->
        CalcHigh[Commission = A * 0.055] -->
        PrintData
```

# Lecture 1: Introduction to programming

## What Is Programming?

Programming is the process of writing instructions for a computer to execute.  
It involves **problem-solving, logic, and creativity**.

### Why Learn Programming?

- It's essential in fields such as software development, data science, AI, and automation.
- It enhances **logical thinking** and **problem-solving skills**.

## Problem Solving

Solving problems is at the core of computer science.  
A programmer must:

1. Understand how a human solves a problem.
2. Translate this solution into a computer algorithm.
3. Write the correct syntax for the computer to execute.

Sometimes, a computer solves a problem differently from a human.

## Stages of Problem Solving

1. Analyze the problem.
2. Write the algorithm steps:
   - Pseudocode
   - Flowchart
3. Write the program in a programming language.
4. Translate the program into machine code.
5. Execute, test, and debug the program.
6. Document the software.

## Problem Elements Analysis

Analyzing the problem involves identifying:

- **Inputs:** Required data and their format.
- **Processing:** Necessary mathematical and logical operations.
- **Outputs:** Desired results and their format.

### Key Questions

1. What are the desired results or outputs?
2. What data (inputs) are available?
3. What processes will convert inputs into outputs?

## Algorithms

### Definition

An **algorithm** is a well-defined set of rules or steps for solving a problem in a finite number of steps.

### Characteristics of a Good Algorithm

1. Each step must be clear and unambiguous.
2. The algorithm must terminate after a finite number of steps.
3. The process must lead to the correct solution.

## Characteristics of an Algorithm

1. **Well-Defined Inputs and Outputs:** Clear input values and definite output.
2. **Definiteness:** Each step is precise and unambiguous.
3. **Finiteness:** Must terminate after a finite number of steps.
4. **Effectiveness:** Steps must be simple and executable within reasonable time and resources.
5. **Correctness:** Produces accurate results for the problem.
6. **Generality:** Applicable to a range of similar problems.
7. **Sequential Execution:** Steps follow a logical order.

## Algorithm Design Techniques

Algorithms can be represented by:

- **Flowcharts:** Graphical representation of logical steps.
- **Pseudocode:** English-like representation of algorithm steps.

## Pseudocode

### Definition

Pseudocode is a simplified, language-like representation of an algorithm that focuses on logic, not syntax.

### Features

- Focuses on problem-solving steps.
- Can be implemented in any programming language.
- Easier to understand and modify before coding.

### Components

- **Keywords**
- **Sections**
- **Statements**

## Writing Pseudocode

### Guidelines

- Use meaningful variable names.
- Keep instructions simple, clear, and unambiguous.

### Advantages

1. Easy to understand.
2. No need to memorize symbols (unlike flowcharts).
3. No strict syntax.
4. Easy to convert to code.
5. Space-efficient.
6. Based on simple, clear rules.

### Disadvantages

- Can become lengthy for complex problems.

## Statement Structures in Pseudocode

### 1. Sequential Statements

Executed one after another.

**Example: Add two numbers**

```text
BEGIN
  INPUT N1, N2
  SUM = N1 + N2
  OUTPUT "The sum is: ", SUM
END
```

### 2. Decision (Selection) Statements

Used when the program must choose between alternatives based on a condition.

**Example: Division with validation**

```text
BEGIN
  INPUT number1, number2
  IF number2 ≠ 0 THEN
    result = number1 / number2
    OUTPUT "The result is: ", result
  ELSE
    OUTPUT "Error: Division by zero is not allowed."
  ENDIF
END
```

### 3. Repetition (Looping) Statements

Used to repeat instructions multiple times until a condition is false.

**Example: Print "Welcome" five times**

```text
BEGIN
  SET counter = 1
  WHILE counter ≤ 5 DO
    OUTPUT "Welcome"
    counter = counter + 1
  ENDWHILE
END
```

**Note:** The repetition structure can be implemented using loops such as `while`, `for`, or `do-while`.

## Summary

- Programming involves writing logical instructions for a computer.
- Problem-solving is the foundation of programming.
- Algorithms provide structured solutions.
- Pseudocode and flowcharts help design algorithms before implementation.
- Key control structures: **Sequence**, **Decision**, and **Repetition**.

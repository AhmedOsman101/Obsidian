---
prev:
  text: "Lecture 7"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-7"
next:
  text: "Lecture 9"
  link: "/College/yearTwo/secondTerm/DataStructures/Lectures/Lecture-9"
title: Lecture 8
---

# Data Structures - Lecture 8

## Stack Applications: Overview

Stacks are fundamental to many computer science operations. Key applications include expression evaluation, recursion, backtracking, function call management, and parentheses matching. The stack's LIFO nature makes it ideal for any problem where you need to remember the most recent item.

## Infix to Postfix Conversion

An **expression** is a collection of operators and operands representing a specific value. **Infix** notation places operators between operands (like `A+B`). **Postfix** places operators after operands (like `AB+`). **Prefix** places operators before operands (like `+AB`).

Converting infix to postfix uses the **shunting yard algorithm**:

1. Scan infix from left to right
2. If operand -> add to output
3. If `(` -> push to stack
4. If `)` -> pop until `(`
5. If operator -> pop higher/equal precedence operators, then push current

**Operator precedence** determines evaluation order:

| Operator | Precedence  | Associativity |
| -------- | ----------- | ------------- |
| `+`, `-` | 1 (lowest)  | Left to Right |
| `*`, `/` | 2 (medium)  | Left to Right |
| `^`      | 3 (highest) | Right to Left |

```c
// Purpose: Example infix to postfix
// Input: A + B * C
// Output: A B C * +
```

> [!IMPORTANT]
> _When popping for precedence, stop at `(`—never pop past an opening parenthesis._

## Postfix Evaluation

**Postfix evaluation** using a stack follows this algorithm:

1. Scan postfix left to right
2. If operand -> push to stack
3. If operator -> pop two operands, compute (first pop is operand2), push result
4. At end -> final value in stack

```c
// Purpose: Evaluate 5 3 + 8 2 - *
// Steps: push(5), push(3), + -> pop 3, pop 5, push(8)
//        push(8), push(2), - -> pop 2, pop 8, push(6)
//        * -> pop 6, pop 8, push(48)
// Result: 48
```

## Recursion and Function Call Stack

The **call stack** tracks active function calls. Each function call pushes a frame containing return address, parameters, and local variables. When a function returns, its frame is popped.

```c
// Purpose: Factorial using recursion
int factorial(int n) {
  if (n <= 1) return 1;
  return n * factorial(n-1);
}
```

The call stack for `factorial(4)` grows: main -> f(4) -> f(3) -> f(2) -> f(1), then unwinds returning values.

> [!WARNING]
> _Excessive recursion depth causes stack overflow. Always have a base case that terminates._

## Parentheses Matching

Stack-based algorithm scans expression, pushing opening brackets and popping to match closing brackets.

```c
// Purpose: Check if parentheses are balanced
// Scan: ( -> push, a -> skip, + -> skip, ( -> push, b -> skip, ) -> pop (matches
// At end, stack should be empty for valid expression
```

If the stack is not empty at the end, or a mismatch occurs, the expression is invalid.

## Backtracking and Undo Operations

Stacks store previous states for **backtracking**. Applications include:

- Text editor undo/redo
- Maze solving
- Depth-first search (DFS)
- Game playing algorithms

Each operation pushes the current state; undo pops the previous state.

## Summary: Stack Application Use Cases

| Application           | Stack Use                               |
| --------------------- | --------------------------------------- |
| Expression evaluation | Store operators, operands               |
| Recursion             | Store return addresses, local variables |
| Backtracking          | Store previous states                   |
| Function calls        | Stack frames                            |
| Parentheses matching  | Store opening brackets                  |
| DFS                   | Store unvisited nodes                   |

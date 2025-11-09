# Lecture 2: Flowchart and Algorithm

## Problem Solving

Problem-solving is the foundation of computer science.
A programmer must:

1. Understand how humans solve problems.
2. Translate this solution into a **computer-executable algorithm**.
3. Implement it using a specific **programming language syntax**.

Computers may solve problems differently than humans, emphasizing efficiency and logic.

## Stages of Problem Solving

1. **Analyze the problem.**
2. **Write algorithm steps** using:
   - Pseudocode
   - Flowchart
3. **Write the program** in a programming language.
4. **Translate** the program into machine code.
5. **Execute, test, and debug** the program.
6. **Document** the software.

## Algorithms

### Definition

An **algorithm** is a set of rules and procedures used to solve a problem in a **finite number of steps**.
It consists of **ordered, unambiguous instructions** that describe a process and can be implemented in any programming language.

### Characteristics of a Good Algorithm

1. Each step must be **clear and unambiguous**.
2. The algorithm must **terminate** after a finite number of steps.
3. The process must lead to the **correct solution**.
4. Steps must be written in **precise language**.

## Algorithm Design Techniques

Algorithms can be expressed using:

### 1. Flowcharts

A **graphical representation** that shows the logical sequence of operations and their relationships.

### 2. Pseudocode

A **textual representation** that uses English-like statements to describe program logic.

## Pseudocode

### Definition

Pseudocode is a **simplified, language-like** representation of algorithmic logic written using commands that resemble real programming languages.

It focuses on problem-solving logic rather than language syntax and can be easily converted into actual code.

### Components

- **Keywords**
- **Sections**
- **Statements**

### Structure Types

1. **Sequential Statements:** Executed one after another.
2. **Decision Statements:** Use `if-else` or `switch-case` for conditional execution.
3. **Looping Statements:** Use `for`, `while`, or `do-while` for repetition until a condition is met.

## Flowcharts

### Definition

A **flowchart** is a graphical representation showing the sequence of steps in a process or program, using standardized symbols.
It is one of the most effective tools for analyzing and visualizing systems.

## Importance and Uses of Flowcharts

1. **Simplify Understanding**
   - Show logical flow of processes visually.
   - Easy for programmers and non-programmers to grasp.

2. **Assist in System Analysis**
   - Identify the relationship between **input**, **process**, and **output**.
   - Detect **errors** or **inefficiencies** early.

3. **Aid in Program Development**
   - Each flowchart step can be directly translated into code (e.g., in C++).
   - Minimizes logical errors before implementation.

4. **Documentation and Maintenance**
   - Acts as a **reference document** for future updates and debugging.

5. **Enhance Communication**
   - Provides a **common visual language** between developers and analysts.

6. **Detect Logic Errors Early**
   - Logic can be tested visually before coding.

## Common Flowchart Symbols

| Symbol           | Shape         | Description                                                |
| ---------------- | ------------- | ---------------------------------------------------------- |
| **Terminator**   | Oval          | Represents the **Start** or **End** of the process.        |
| **Flow Line**    | Arrow         | Shows the **direction of control flow**.                   |
| **Process**      | Rectangle     | Denotes an **operation or calculation**.                   |
| **Decision**     | Diamond       | Represents a **conditional check** (Yes/No or True/False). |
| **Input/Output** | Parallelogram | Indicates **data input or output** operations.             |
| **Connector**    | Circle        | Connects different parts of a flowchart.                   |
| **Loop Symbol**  | Hexagon       | Represents a **loop structure** (e.g., for-loop).          |
| **Text Label**   | —             | Describes the function or operation in the shape.          |

## Flowchart Design Guidelines

- The flowchart must be **neat**, **complete**, **easy to follow**, and **unambiguous**.
- Flow direction should be **left-to-right** and **top-to-bottom**.
- **Start** symbol: one outgoing flow line only.
- **End** symbol: one incoming flow line only.
- **Process** symbol: one outgoing flow line.
- **Decision** symbol: one incoming and two outgoing flow lines.
- Use **annotations** to clarify logic when needed.

## Key Qualities of a Good Flowchart

1. **Neat:** Well-organized with no unnecessary line crossings.
2. **Complete:** Includes all essential steps from start to finish.
3. **Easy to Follow:** Logical and clearly directed flow.
4. **Unambiguous:** Each symbol and statement must have a single, clear meaning.

A good flowchart should be clear, logical, and universally understandable.

## Advantages of Flowcharts

- Simplify **communication** and understanding.
- Allow for **effective problem analysis**.
- Serve as proper **documentation** tools.
- Help write programs more efficiently.
- Facilitate **error detection** and **program correction**.

## Disadvantages of Flowcharts

- Can become **complex** for large problems.
- **Modifications** often require redrawing the entire flowchart.
- **Manual reproduction** of flowcharts can be cumbersome.
- Excessive details may distract from the main logic.

## Summary

- **Algorithms** provide structured solutions to problems.
- **Pseudocode** expresses logic in human-readable form.
- **Flowcharts** visualize processes using standardized symbols.
- Good flowcharts and pseudocode make programming **more reliable, maintainable, and efficient**.

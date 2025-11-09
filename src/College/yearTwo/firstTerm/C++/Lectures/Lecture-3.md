# Lecture 3: Problem Solving, Algorithms, Pseudocode, and Flowcharts

## Problem Solving in Computer Science

- Solving problems is the core of computer science
- Programmers must understand how humans solve problems, then translate solutions into computer-executable algorithms
- Machines may solve problems differently than humans

## Stages of Problem Solving

1. **Analyzing the problem**
2. **Writing algorithm steps** (pseudocode & flowcharts)
3. **Writing the program** in a programming language
4. **Translating** to machine code
5. **Executing, testing, and debugging**
6. **Documenting** the software

## Algorithms

**Definition**: A set of rules and procedures for solving a problem in finite steps

### Characteristics of a Good Algorithms:

- Each step must be clear and unambiguous
- Steps described using precise language
- Must terminate after finite steps
- Must lead to correct solution

## Algorithm Representation Methods

### Pseudocode

- Uses English-like phrases to outline programs
- Focuses on solution steps rather than syntax
- Easily convertible to actual programming code

#### Statement Structures:

```text
// Sequential Statements - executed in order
SET x = 5
SET y = 10
SET result = x + y

// Decision Statements
IF temperature > 30 THEN
  PRINT "It's hot"
ELSE
  PRINT "It's cool"
END IF

// Looping Statements
SET i = 1
WHILE i <= 5 DO
  PRINT i
  SET i = i + 1
END WHILE
```

### Flowcharts

- Graphical representation of process steps using standardized symbols

#### Key Symbols

1. **Oval**: Start/End points
2. **Arrow**: Direction of flow
3. **Rectangle**: Process steps
4. **Diamond**: Decision points
5. **Parallelogram**: Input/Output (I/O)
6. **Connector Points**: Connect different chart parts
7. **Text Label**: Describe actions/decisions
8. **Hexagon**: For loops (initial condition, increment, termination)

#### Flowchart Guidelines

- Must be neat, complete, easy to follow, and unambiguous
- Natural direction: left to right, top to bottom
- Clear flow lines with proper connections

#### Advantages

- **Communication**: Standard symbols facilitate understanding
- **Action Analysis**: Effective problem analysis
- **Documentation**: Important documentation tool
- **Efficient Coding**: Aids program writing
- **Error Detection**: Easy to trace and identify errors
- **Program Correction**: Easier debugging and fixes

#### Disadvantages

- **Complexity**: Can become complex for large problems
- **Modifications**: Changes may require redrawing
- **Copying Issues**: Difficult to reproduce if symbols are hard to draw
- **Detail Overload**: Excessive details can obscure main solution

### Code Examples

#### Adding Two Numbers

```pseudocode
BEGIN
  INPUT first number (N1)
  INPUT second number (N2)
  SET Sum = N1 + N2
  OUTPUT Sum
END
```

### Circle Area and Perimeter

```pseudocode
BEGIN
  SET PI = 3.14
  INPUT Radius
  SET Area = PI * Radius * Radius
  SET Perimeter = 2 * PI * Radius
  OUTPUT Area, Perimeter
END
```

### Finding Maximum of Three Numbers

```pseudocode
BEGIN
  INPUT A, B, C
  IF A > B THEN
    IF A > C THEN
      PRINT "A is largest"
    ELSE
      PRINT "C is largest"
    END IF
  ELSE
    IF B > C THEN
      PRINT "B is largest"
    ELSE
      PRINT "C is largest"
    END IF
  END IF
END
```

### Printing First Five Natural Numbers

```pseudocode
BEGIN
  SET i = 1
  WHILE i <= 5 DO
    PRINT i
    SET i = i + 1
  END WHILE
END
```

## Repetition Structures

- **Pre-test loop**: Condition checked at beginning (while)
- **Post-test loop**: Condition checked at end (do-while)
- Each loop must have a termination condition

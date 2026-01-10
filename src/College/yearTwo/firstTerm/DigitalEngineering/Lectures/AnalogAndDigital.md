# Digital Engineering Summary

## Analog vs. Digital

Analog -> Continuously variable, proportional indicator.
Digital -> Discrete, moves in defined steps

Digital systems: Use quantities with discrete values, can manipulate logical information or physical quantities that are represented in a digital form.
Analog systems: Use Analog quantities with variable values, can manipulate physical quantities that are represented in analog form.

Physical quantities/measurements are converted into a proportional voltage or current (electrical signal).
This signal is then used by the system for display, processing, or control purposes.

![](figure-1.png)

## Timing Diagram

Timing diagrams are used extensively to show how digital signals change with time and the relationship between two or more digital signals.

Has defined ranges for binary 0 and binary 1.

All input and output signals will normally fall within one of these ranges, except during transitions from one level to another.
The transitions on the timing diagram are drawn as vertical lines, and so they appear to be instantaneous, when in reality they are not.

![](figure.png)

Common range is:

- 0V~0.8V -> Binary 0 (off state)
- 2V~5V -> Binary 1 (on state)
- Any value outside that is considered undefined behavior and invalid signal.

## Parallel and Serial Transmission

Parallel transmission: Each bit has its own line and they all travel simultaneously at the same time.

![](figure-6.png)

Serial transmission: There is only one single line transmitting all bits, they move one-by-one.

## Memory

Normal logic circuits doesn't have memory, once the input is gone the output resets to its original state.
Logic circuits that have memory is different, even if the input is gone the output remains on its current state.

Memory can be temporary or permanent.

## Digital Computers

**Definition:** A computer is a system of hardware that performs arithmetic operations, manipulates data, and makes decisions.

Computers are faster than human but needs **a complete set of instructions** to operate.

A **program** is a **set of instructions** programmed by one or more people to complete a task.

Programs are placed in the computer's memory unit in **binary-coded form**.

The computer takes these instruction codes from memory and performs then one-by-one.

![](figure-7.png)

### Microprocessors & Microcomputers

- A **microprocessor** is a central processing unit (CPU) in an integrated circuit that can be connected to the other components of a computer system.
- A **microcomputer** is a computer that use a microprocessor as its CPU.
- General-purpose microcomputers (e.g., PCs, PDAs, etc.) perform a variety of tasks in a wide range of applications.

### Microcontroller

A **microcontroller** is a computer that cannot be programmed by the user, they just perform their intended control task. They also are called embedded controllers or dedicated computers.

Microcontrollers have all the elements of a **complete computer** (CPU, memory, and I/O ports), all contained on a single integrated circuit.

Examples: Your car's antilock braking system, the fridge's cooling system, the microwave's oven clock.

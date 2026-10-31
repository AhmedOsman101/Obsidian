---
title: Sheet 2
prev:
  text: "Sheet 1"
  link: "/College/yearThree/firstTerm/ComputerArchitecture/Sheets/Sheet-1"
next: false
---

# Computer Architecture - Sheet 2: Computer Performance

Covers **Lecture 2**: response time vs. throughput, CPU time, CPI, MIPS, benchmarks, and Amdahl's law.

## Part A: MCQ Answer Key

| #   | Ans | Tested point                                                         |
| --- | --- | -------------------------------------------------------------------- |
| 1   | B   | Performance is determined by **execution time**                      |
| 2   | D   | Evaluation matters when buying, comparing technologies, designing    |
| 3   | B   | Performance = **1 / execution time**                                 |
| 4   | B   | Twice the performance means **half the time**: Y takes twice as long |
| 5   | B   | Response time is also called **latency**                             |
| 6   | B   | Response time answers **how long one job takes**                     |
| 7   | B   | Throughput = **average execution rate / work per unit time**         |
| 8   | B   | Adding a machine improves **throughput**                             |
| 9   | B   | A faster processor improves **response time**                        |
| 10  | B   | Elapsed time includes **disk, memory, I/O, OS overhead**             |
| 11  | B   | CPU time excludes **I/O time**                                       |
| 12  | B   | CPU time splits into **user and system CPU time**                    |
| 13  | B   | Clock cycle = **time between clock ticks**                           |
| 14  | B   | Clock rate is measured in **cycles per second**                      |
| 15  | A   | **Hz = one cycle per second**                                        |
| 16  | C   | 2 GHz -> **0.5 ns** cycle time                                       |
| 17  | C   | CPU time = cycles × cycle time = cycles / clock rate (**both**)      |
| 18  | C   | Improve performance by **reducing required cycles**                  |
| 19  | B   | Clock rate = **1 / cycle time**                                      |
| 20  | B   | Cycles **cannot** be assumed equal to instructions                   |
| 21  | A   | Different operations have **different costs**                        |
| 22  | B   | **Multiplication** takes longer than addition                        |
| 23  | B   | Floating point takes **longer** than integer                         |
| 24  | A   | Memory access is slower than **register** access                     |
| 25  | A   | Cycles = **instructions × average CPI**                              |
| 26  | A   | CPI = **Cycles Per Instruction**                                     |
| 27  | A   | CPU time = **IC × CPI × cycle time**                                 |
| 28  | B   | CPI is an average because instructions **differ in cycles**          |
| 29  | D   | CPI varies with **application, instruction mix, memory access time** |
| 30  | B   | RISC: **simple instructions, lower CPI**                             |
| 31  | D   | CISC: **lower instruction counts, higher CPI**                       |
| 32  | B   | MIPS = **Millions of Instructions Per Second**                       |
| 33  | B   | MIPS measures **instruction execution rate**                         |
| 34  | A   | Higher MIPS does **not** mean better performance                     |
| 35  | C   | **Execution time** is the consistent summary                         |
| 36  | A   | A benchmark **evaluates performance**                                |
| 37  | A   | Performance is best determined by **running real applications**      |
| 38  | A   | **SPEC** = standardized system performance evaluation                |
| 39  | A   | A benchmark should represent the **expected workload**               |
| 40  | A   | Amdahl: speedup limited by the **part not improved**                 |
| 41  | B   | Principle: **make the common case fast**                             |
| 42  | C   | 10% improved -> cap set by the **unaffected 90%** (max 10×)          |
| 43  | B   | 20 s vs. 25 s -> A is **1.25× faster**                               |
| 44  | B   | CPI 3.2 -> 2.6 gives **3.2/2.6 ≈ 1.23×**                             |
| 45  | C   | 3 GHz = **3 billion** cycles per second                              |
| 46  | B   | 2 × 10⁹ cycles at 1.5 GHz -> **1.33 s**                              |
| 47  | A   | **CPI** is in cycles per instruction                                 |
| 48  | B   | Clock up but CPI up too -> performance **may not improve**           |
| 49  | C   | Compilers improve **instruction count and CPI**                      |
| 50  | D   | IC, CPI, clock rate, memory behavior all matter                      |

## Part B: Short Questions

| #   | Question                                    | Answer                                                                                                                                     |
| --- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | What is computer performance?               | How effectively and quickly a computer executes a given workload; the lecture treats **execution time** as the consistent measure.         |
| 2   | Define response time.                       | **Latency**: the time required to complete a particular job or program.                                                                    |
| 3   | Define throughput.                          | The amount of **work completed per unit time**, or the average execution rate.                                                             |
| 4   | Performance vs. execution time?             | $\text{Performance} = 1 / \text{Execution Time}$: lower time means higher performance.                                                     |
| 5   | What is elapsed time?                       | Wall-clock or response time; includes CPU time plus **memory, disk, I/O, and OS overhead**.                                                |
| 6   | What is CPU time?                           | Time the processor spends executing the program, excluding **I/O** and time spent on other programs.                                       |
| 7   | What is clock cycle time?                   | Time between two consecutive clock ticks, in **seconds per cycle**.                                                                        |
| 8   | What is clock rate?                         | **Cycles per second**, in Hz, MHz, or GHz.                                                                                                 |
| 9   | Clock rate vs. cycle time?                  | $\text{Clock Rate} = 1 / \text{Clock Cycle Time}$.                                                                                         |
| 10  | What is CPI?                                | **Cycles Per Instruction**: average clock cycles required to execute an instruction.                                                       |
| 11  | CPU-time equation?                          | $IC \times CPI \times \text{cycle time}$, or $(IC \times CPI)/\text{clock rate}$.                                                          |
| 12  | Why is CPI an average?                      | Different instruction types require **different numbers of cycles**, so CPI averages over the instruction mix.                             |
| 13  | What influences CPI?                        | Instruction type, **frequency of each instruction type**, and memory access time.                                                          |
| 14  | What is MIPS?                               | **Millions of Instructions Per Second**, a rate of instruction execution.                                                                  |
| 15  | Why is MIPS unreliable?                     | Different ISAs and programs need **different instruction counts and work per instruction**, so high MIPS need not mean low time.           |
| 16  | What is a benchmark?                        | A program or workload used to **evaluate and compare** computer performance.                                                               |
| 17  | What is SPEC?                               | A benchmark organization that provides **standardized workloads using real programs and inputs**.                                          |
| 18  | State Amdahl's law.                         | Overall speedup is **limited by the fraction of execution time the enhancement does not affect**.                                          |
| 19  | What does "make the common case fast" mean? | Optimize the operations that occur **most often or consume the most execution time**.                                                      |
| 20  | How can processor performance be improved?  | Raise **clock rate** without hurting CPI, lower **CPI** through organization, and lower **instruction count or CPI** through the compiler. |

## Part C: Long Questions

### 1. Compare RISC and CISC in terms of performance

| Feature                | **RISC**             | **CISC**             |
| ---------------------- | -------------------- | -------------------- |
| Instruction complexity | Simple               | More complex         |
| Instruction count      | Generally **higher** | Generally **lower**  |
| CPI                    | Generally **lower**  | Generally **higher** |
| Example in lecture     | **MIPS**             | **IA-32**            |

The trade-off is one product: $IC \times CPI$. CISC packs more work into each instruction, so it needs fewer instructions but each costs more cycles. RISC splits work into simple instructions, so it needs more instructions but each costs about one cycle.

Neither column decides performance. Evaluate with the full relation:

$$\text{CPU Time} = IC \times CPI \times T_c = \frac{IC \times CPI}{f}$$

A CISC machine with $IC = 2$B and $CPI = 6$ at 1.5 GHz takes 8 s, while a RISC machine with $IC = 4$B and $CPI = 1.5$ at 1 GHz takes 6 s. The RISC machine executes **twice as many instructions** and is still **1.33× faster**, because the product of count and cost is smaller. Any argument from one variable alone (instruction count, or CPI, or MIPS) can be made to point either way.

### 2. Explain Amdahl's law and "make the common case fast"

$$\text{Execution Time}_{\text{after}} = \text{Execution Time}_{\text{unaffected}} + \frac{\text{Execution Time}_{\text{affected}}}{\text{Speedup}}$$

In fraction form, with $F$ the affected fraction of time and $S$ its local speedup:

$$\text{Speedup}_{\text{overall}} = \frac{1}{(1 - F) + F/S}$$

Amdahl's law says the **unaffected part sets the ceiling**. As $S \to \infty$ the speedup approaches $1/(1-F)$, so improving 10% of the time can never beat 10×, however fast that 10% becomes.

**Make the common case fast** is the design rule that follows: spend effort where execution time is actually spent. An enhancement to a rarely executed path multiplies a small fraction, and the overall gain disappears in the unaffected remainder. That is also why profile-driven optimization beats intuition: the common case is often not the case the designer expected.

### 3. Methods for evaluating and comparing performance

The sheet lists eight methods. They trade **accuracy against cost and time**.

| Method                              | What it does                                                          | Cost / accuracy                      |
| ----------------------------------- | --------------------------------------------------------------------- | ------------------------------------ |
| **Estimation**                      | Predict performance from known figures before building anything       | Cheapest, least accurate             |
| **Area/delay estimation**           | Estimate gate area and critical-path delay for a proposed design      | Cheap, early-stage                   |
| **Analysis**                        | Derive performance from equations and workload assumptions            | Cheap, depends on model              |
| **Queuing theory**                  | Model contention and waiting time when many requests share a resource | Moderate, good for systems           |
| **Simulation**                      | Run a software model of the machine on a workload                     | Expensive, fairly accurate           |
| **ISA / circuit / gate simulation** | Simulate at a specific level: instruction set, circuit, or gate       | Very expensive, detailed             |
| **Benchmarks**                      | Run standardized programs with standard inputs                        | Moderate, comparable across machines |
| **Real applications**               | Run the actual workload the user cares about                          | Most representative                  |

> [!NOTE] Not from the slides
> This list is from the textbook's evaluation chapter, not from the Lecture 2 deck. The deck only states that evaluation is a key part of the iterative design process and that benchmarks should represent the expected workload.

### 4. 2 billion instructions, CPI 1.5, 2 GHz

```text
CPU Time = (IC × CPI) / Clock rate
         = (2 × 10^9 × 1.5) / (2 × 10^9)
         = 3 × 10^9 / 2 × 10^9
         = 1.5 s
```

The clock rate cancels because both counts are in giga-units: $2\text{ G instructions} \times 1.5\text{ cycles} = 3\text{ G cycles}$, and 3 G cycles at 2 GHz is 1.5 s.

### 5. 1,000,000 instructions in 2 ms at 1 GHz: find CPI

```text
Cycles = Clock rate × Time = 1 × 10^9 × 2 × 10^-3 = 2 × 10^6 cycles
CPI    = Cycles / Instructions = 2 × 10^6 / 1 × 10^6 = 2.0
```

### 6. Two processors, 6 billion instructions

| Processor | Clock rate | CPI | CPU time                                                   |
| --------- | ---------- | --- | ---------------------------------------------------------- |
| **A**     | 3 GHz      | 2.0 | $6 \times 10^9 \times 2 / 3 \times 10^9 = 4\ \text{s}$     |
| **B**     | 2 GHz      | 1.2 | $6 \times 10^9 \times 1.2 / 2 \times 10^9 = 3.6\ \text{s}$ |

**B is faster.** Speedup of B over A:

```text
Speedup = T_A / T_B = 4 / 3.6 = 1.11
```

**B is about 11% faster**, even though A has the higher clock rate. A is 1.5× the frequency of B but 1.67× the CPI, and the CPI penalty is the larger factor.

### 7. Instruction mix: find total instructions, cycles, and average CPI

| Class     | Instructions | CPI | Cycles    |
| --------- | ------------ | --- | --------- |
| A         | 40 M         | 1   | 40 M      |
| B         | 30 M         | 2   | 60 M      |
| C         | 20 M         | 3   | 60 M      |
| D         | 10 M         | 4   | 40 M      |
| **Total** | **100 M**    |     | **200 M** |

```text
IC    = 40 + 30 + 20 + 10 = 100 million
Cycles = 40 + 60 + 60 + 40 = 200 million
CPI   = 200 / 100 = 2.0
```

This is the weighted average $\sum (CPI_i \times I_i) / IC$. Note that the CPI is 2.0 even though the mix contains classes with CPI 3 and 4, because the slow classes are also the rare ones.

### 8. Amdahl: 40% of time in floating point, made 4× faster

```text
F = 0.40, S = 4
Speedup = 1 / ((1 - 0.40) + 0.40/4)
        = 1 / (0.60 + 0.10)
        = 1 / 0.70
        = 1.43
```

The program becomes about **1.43× faster**, not 4× faster, because **60% of the original time is untouched**. The ceiling here is $1/0.60 = 1.67\times$: even an infinitely fast floating-point unit would only reach 1.67×.

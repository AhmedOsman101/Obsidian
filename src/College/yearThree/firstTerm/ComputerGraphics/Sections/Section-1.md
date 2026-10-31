---
title: Section 1
prev:
  text: "Computer Graphics"
  link: "/College/yearThree/firstTerm/ComputerGraphics/index"
next:
  text: "Section 2"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Sections/Section-2"
---

# Computer Graphics - Section 1: Introduction, Scan Conversion and Line Drawing

## What Computer Graphics Is

**Computer graphics** is the use of a computer to **create and manipulate pictures** on a display device.

- The pictures are produced by **algorithms and techniques**, not drawn by hand.
- Graphics is a normal part of user interfaces, television commercials, and motion pictures.
- Two- and three-dimensional pictures can both be produced, and both are used in research.

## Why Graphics Is Used

A shoe company wants to show five years of sales. The raw figures take a lot of space to store and a lot of time to read, and a reader has to compare rows of numbers to see the trend. A **chart** shows the same data as a picture that is understood at a glance.

Graphics tools are **charts** and **graphs**. Their value is compression: one picture replaces a table of numbers without losing the comparison the reader needs.

## Scan Conversion

**Scan conversion** (also called **rasterization**) is the process of representing a graphics object as a **collection of pixels**.

Each pixel has an **on** or **off** state. The video circuitry turns the binary values into beam or panel signals:

| Bit value | Meaning in a black and white display |
| --------- | ------------------------------------ |
| `0`       | Pixel **off**, black                 |
| `1`       | Pixel **on**, white                  |

A picture is therefore an **array of 0s and 1s**, one entry per pixel, which is exactly what a **bitmap** is.

```text
A 8x8 bitmap of a small square

0 0 0 0 0 0 0 0
0 1 1 1 1 1 0 0
0 1 1 1 1 1 0 0
0 1 1 1 1 1 0 0
0 1 1 1 1 1 0 0
0 1 1 1 1 1 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
```

The row order in memory matches the scan order of the display, so the controller can stream the array to the screen without extra work.

### Objects That Can Be Scan Converted

Point, line, circle, ellipse, arc, sector, rectangle, polygon, filled region, character, and bar.

The list matters because every one of these is drawn by the same loop: walk the pixels the object covers, decide which are inside, and set them in the frame buffer.

## Pixel or PEL

A **pixel** (short for **picture element**, also called a **pel**, point, or dot) is the smallest addressable element of the picture. A picture is built from hundreds or thousands of them.

| Property        | Detail                                                                              |
| --------------- | ----------------------------------------------------------------------------------- |
| Address         | One **row** and one **column**                                                      |
| Notation        | $P(5,5)$ means the pixel in the 5th row and the 5th column                          |
| Quality link    | Picture quality is directly proportional to the **density of pixels** on the screen |
| How it is drawn | By commands such as line, circle, arc, and character routines                       |

> [!NOTE] Why density is the limit
> Two screens of the same size show the same scene with different detail if their pixel counts differ. More pixels per inch means a finer grid, so a diagonal edge has smaller steps and a small object can be represented at all.

## Line Drawing Algorithms

Three methods are used to decide which pixels form a line:

| Method                              | Idea                                                      | Cost per pixel           |
| ----------------------------------- | --------------------------------------------------------- | ------------------------ |
| **Direct use of the line equation** | Compute $y=mx+b$ for each $x$ and round                   | One multiply and one add |
| **DDA**                             | Add the increments $\Delta x$ and $\Delta y$ repeatedly   | One floating-point add   |
| **Bresenham**                       | Keep an integer **decision parameter** and choose E or NE | Integer adds only        |

### Method 1: Direct Use of the Line Equation

For a line through $(x_0,y_0)$ and $(x_1,y_1)$:

$$m=\frac{y_1-y_0}{x_1-x_0}, \qquad b=y_0-mx_0, \qquad y=mx+b$$

For each integer $x$ from $x_0$ to $x_1$, compute $y$ and round it to the nearest integer row.

**Example.** $(2,2)$ to $(10,6)$: $m=\frac{6-2}{10-2}=0.5$ and $b=2-0.5\cdot2=1$, so $y=0.5x+1$.

| $x$ | $y=0.5x+1$ | Rounded | Pixel   |
| --- | ---------- | ------- | ------- |
| 2   | 2.0        | 2       | (2, 2)  |
| 3   | 2.5        | 3       | (3, 3)  |
| 4   | 3.0        | 3       | (4, 3)  |
| 5   | 3.5        | 4       | (5, 4)  |
| 6   | 4.0        | 4       | (6, 4)  |
| 7   | 4.5        | 5       | (7, 5)  |
| 8   | 5.0        | 5       | (8, 5)  |
| 9   | 5.5        | 6       | (9, 6)  |
| 10  | 6.0        | 6       | (10, 6) |

The method is simple but slow, because every pixel needs a floating-point multiply and a rounding step. It also breaks down when $m$ is very large, since the line then has many rows per column and one $x$ value cannot represent them.

### Method 2: DDA (Digital Differential Analyzer)

The **DDA** turns the line equation into an **incremental** update. The number of steps is the larger of $|\Delta x|$ and $|\Delta y|$, so the slower axis advances exactly one pixel per step:

$$\text{steps}=\max\left(|\Delta x|,\;|\Delta y|\right)$$

$$x_{inc}=\frac{\Delta x}{\text{steps}}, \qquad y_{inc}=\frac{\Delta y}{\text{steps}}$$

Starting from $(x_0,y_0)$, add the increments and round each point to the nearest pixel.

**Example.** $(2,2)$ to $(10,6)$: $\Delta x=8$, $\Delta y=4$, steps $=8$, $x_{inc}=1$, $y_{inc}=0.5$.

| Step | $x$  | $y$ | Rounded pixel |
| ---- | ---- | --- | ------------- |
| 0    | 2.0  | 2.0 | (2, 2)        |
| 1    | 3.0  | 2.5 | (3, 3)        |
| 2    | 4.0  | 3.0 | (4, 3)        |
| 3    | 5.0  | 3.5 | (5, 4)        |
| 4    | 6.0  | 4.0 | (6, 4)        |
| 5    | 7.0  | 4.5 | (7, 5)        |
| 6    | 8.0  | 5.0 | (8, 5)        |
| 7    | 9.0  | 5.5 | (9, 6)        |
| 8    | 10.0 | 6.0 | (10, 6)       |

```c
// DDA line drawing for the case |dx| >= |dy|
void ddaLine(int x0, int y0, int x1, int y1) {
  int dx = x1 - x0;
  int dy = y1 - y0;
  int steps = abs(dx) > abs(dy) ? abs(dx) : abs(dy);
  float xInc = (float)dx / steps;
  float yInc = (float)dy / steps;
  float x = x0;
  float y = y0;
  for (int i = 0; i <= steps; i++) {
    putpixel(round(x), round(y), WHITE);
    x += xInc;
    y += yInc;
  }
}
```

DDA is faster than the direct method because it replaces a multiply with an add, but it still uses **floating-point** addition, and the rounding error accumulates along the line.

### Method 3: Bresenham's Algorithm

**Bresenham's algorithm** removes floating point completely. It tracks an integer decision parameter and updates it with adds and shifts only. The full derivation and a hand-computed table are in [Lecture 2](/College/yearThree/firstTerm/ComputerGraphics/Lectures/Lecture-2).

For the same line, the decision sequence produces the identical pixel list:

(2,2), (3,3), (4,3), (5,4), (6,4), (7,5), (8,5), (9,6), (10,6)

### Comparison on the Same Line

| Criterion            | Direct equation      | DDA                     | Bresenham               |
| -------------------- | -------------------- | ----------------------- | ----------------------- |
| Arithmetic           | Multiply, add, round | Floating-point add      | Integer add, compare    |
| Speed                | Slowest              | Middle                  | Fastest                 |
| Accuracy             | Rounding every pixel | Error accumulates       | Exact integer decisions |
| Handles steep lines  | Poorly               | Yes, by stepping on $y$ | Yes, by symmetry        |
| Pixels for this line | 9                    | 9                       | 9                       |

> [!WARNING] Exam wording
> All three methods gave the same nine pixels here because the slope is exactly $0.5$ and every midpoint is a tie. On a slope such as $0.3$ the direct method and DDA can round differently from Bresenham, so do not claim the three are always identical.

## Drawing in C++ with graphics.h

The section's example uses the old Borland **BGI** library. It runs under Turbo C++ or DOSBox, not under a modern Linux compiler, but the calls are the ones the course expects.

```cpp
// Minimal BGI program: open a graphics window and draw one line
#include <graphics.h>
#include <conio.h>

int main() {
  int gd = DETECT;   // let the driver be detected
  int gm;            // driver fills in the graphics mode
  initgraph(&gd, &gm, "C:\\tc\\bgi");

  line(100, 100, 300, 200);   // from (100,100) to (300,200)

  getch();           // hold the window until a key is pressed
  closegraph();      // back to text mode, free the driver
  return 0;
}
```

| Call / symbol               | Meaning                                                                 |
| --------------------------- | ----------------------------------------------------------------------- |
| `graphics.h`                | Header with the BGI drawing functions, linked with `graphics.lib`       |
| `conio.h`                   | Console input and output header, provides `clrscr()` and `getch()`      |
| `initgraph(&gd, &gm, path)` | Switches the screen to graphics mode and loads the driver               |
| `DETECT`                    | Tells `initgraph` to pick the highest mode the driver supports          |
| `"C:\\tc\\bgi"`             | Directory where `initgraph` looks for the `*.BGI` driver files first    |
| `clrscr()`                  | Clears the previous output, equivalent to `system("cls")`               |
| `getch()`                   | Waits for a key so the output window does not vanish immediately        |
| `closegraph()`              | Returns to text mode and frees the memory the graphics system allocated |

> [!NOTE] Why getch() is needed
> Without it the program reaches `closegraph()` at once, the graphics window closes in a fraction of a second, and the drawing is never seen. The pause is part of the program, not a bug.

## Integrated Development Environments

An **IDE** (integrated development environment) is one application that bundles the tools a programmer needs. A typical IDE contains a **source editor**, **build automation**, a **compiler**, a **debugger**, and sometimes an **interpreter**.

_10 min read (source: 5 min)_

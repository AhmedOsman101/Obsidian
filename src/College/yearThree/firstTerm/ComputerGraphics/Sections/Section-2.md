---
title: Section 2
prev:
  text: "Section 1"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Sections/Section-1"
next:
  text: "Section 3"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Sections/Section-3"
---

# Computer Graphics - Section 2: Drawing Primitives with graphics.h

## What This Section Covers

Every function here comes from **`graphics.h`**, the BGI library used with Turbo C++. Each one scans a geometric object into pixels: the routine works out which pixels the object covers and sets them in the frame buffer.

Objects the section scan converts: point, line, ellipse, circle, polygon, filled region, rectangle, sector, and bar.

```cpp
// Every example in this section shares this skeleton
#include <graphics.h>
#include <conio.h>

int main() {
  int gd = DETECT;
  int gm;
  initgraph(&gd, &gm, "C:\\tc\\bgi");

  // drawing calls go here

  getch();
  closegraph();
  return 0;
}
```

> [!NOTE] Missing code slides
> The example slides in the PDF are screenshots of code, and the text layer contains only the captions ("Drawing an ellipse using Ellipse() function"). The programs below are written to match the stated syntax and the outputs named in those captions, so they can be typed and run as printed.

## Function Reference

| Function         | Purpose                             | Syntax                                               |
| ---------------- | ----------------------------------- | ---------------------------------------------------- |
| `ellipse()`      | Outline of an elliptical arc        | `ellipse(x, y, stangle, endangle, xradius, yradius)` |
| `fillellipse()`  | Filled ellipse                      | `fillellipse(x, y, xradius, yradius)`                |
| `circle()`       | Circle outline                      | `circle(x, y, radius)`                               |
| `arc()`          | Circular arc                        | `arc(x, y, stangle, endangle, radius)`               |
| `sector()`       | Filled elliptical pie slice         | `sector(x, y, stangle, endangle, xradius, yradius)`  |
| `rectangle()`    | Rectangle outline                   | `rectangle(left, top, right, bottom)`                |
| `drawpoly()`     | Polygon outline                     | `drawpoly(number, polypoints)`                       |
| `fillpoly()`     | Filled polygon                      | `fillpoly(number, polypoints)`                       |
| `putpixel()`     | One pixel                           | `putpixel(x, y, color)`                              |
| `setcolor()`     | Current drawing color               | `setcolor(color)`                                    |
| `setfillstyle()` | Current fill pattern and fill color | `setfillstyle(pattern, color)`                       |
| `floodfill()`    | Fill an enclosed area from a seed   | `floodfill(x, y, border_color)`                      |

Angles are in **degrees**, measured from the positive x-axis and increasing **counter-clockwise**. The center $(x,y)$ is the middle of the circle or ellipse, not its top-left corner.

## ellipse()

```cpp
void ellipse(int x, int y, int stangle, int endangle, int xradius, int yradius)
```

**Example: a full ellipse and a half ellipse.**

```cpp
// Ellipse centred at (320,240), 200 wide and 120 tall
setcolor(YELLOW);
ellipse(320, 240, 0, 360, 200, 120);   // full outline

setcolor(CYAN);
ellipse(320, 240, 0, 180, 120, 80);    // upper half only
```

**Output.** A yellow ellipse with horizontal radius 200 and vertical radius 120, drawn counter-clockwise from 0 to 360 degrees, plus the top half of a smaller cyan ellipse. A start angle equal to the end angle would draw nothing, and `0` to `360` closes the curve into a full ellipse.

## fillellipse()

```cpp
void fillellipse(int x, int y, int xradius, int yradius)
```

The fill pattern and fill color come from `setfillstyle`. The outline is drawn in the current drawing color set by `setcolor`.

```cpp
// Filled ellipse, red interior with a white outline
setcolor(WHITE);
setfillstyle(SOLID_FILL, RED);
fillellipse(320, 240, 180, 100);
```

**Output.** A solid red ellipse measuring 360 by 200 pixels, outlined in white.

## circle()

```cpp
circle(int x, int y, int radius)
```

```cpp
// Three concentric circles share one centre
setcolor(GREEN);
circle(320, 240, 50);
circle(320, 240, 100);
circle(320, 240, 150);
```

**Output.** Three green rings around $(320,240)$ with radii 50, 100, and 150. Concentric means they share the same centre, so the gaps between the rings are equal.

## arc()

```cpp
arc(int x, int y, int stangle, int endangle, int radius)
```

The arc starts at `stangle` and runs counter-clockwise to `endangle`.

| Call                     | Result                            |
| ------------------------ | --------------------------------- |
| `arc(320,240,0,360,100)` | Full circle of radius 100         |
| `arc(320,240,0,180,100)` | Upper half of the circle          |
| `arc(320,240,45,90,100)` | Quarter arc in the first quadrant |
| `arc(320,240,90,90,100)` | A single point, not a line        |

> [!NOTE] The slide's "draw a line" claim
> The slide says the arc function can draw a line by giving the same start and end angle. With a real BGI library that produces a dot, not a line. Use `line()` when a straight segment is wanted.

## sector()

```cpp
void sector(int x, int y, int stangle, int endangle, int xradius, int yradius)
```

A **sector** is a filled pie slice: two radii plus the arc between them.

```cpp
// One quarter of an ellipse, from 0 to 90 degrees
setcolor(WHITE);
setfillstyle(SOLID_FILL, BLUE);
sector(320, 240, 0, 90, 200, 120);
```

**Output.** A blue quarter slice bounded by the horizontal radius to the right, the vertical radius upward, and the elliptical arc between them. Four such calls with the ranges 0 to 90, 90 to 180, 180 to 270, and 270 to 360 make a full pie chart.

## rectangle()

```cpp
rectangle(int left, int top, int right, int bottom)
```

The two corners are the **top-left** and the **bottom-right**. Screen $y$ grows downward, so `top` is smaller than `bottom`.

```cpp
// Rectangle from (100,100) to (400,300)
setcolor(LIGHTRED);
rectangle(100, 100, 400, 300);

// Inner rectangle, 20 pixels inside each side
setcolor(YELLOW);
rectangle(120, 120, 380, 280);
```

**Output.** A light red rectangle 300 pixels wide and 200 pixels tall, with a yellow rectangle inset by 20 pixels inside it. The inset is the same on all four sides because both corners moved by 20.

## drawpoly() and fillpoly()

```cpp
void drawpoly(int number, int *polypoints);
void fillpoly(int number, int *polypoints);
```

`polypoints` is a flat array of integers: $x_1,y_1,x_2,y_2,\dots,x_n,y_n$. To close the polygon, repeat the first point as the last one, which makes `number` equal to $n+1$.

```cpp
// Triangle with vertices (320,80), (200,300), (440,300)
int tri[] = {320, 80, 200, 300, 440, 300, 320, 80};

setcolor(WHITE);
drawpoly(4, tri);            // 4 points because the first one repeats
```

```cpp
// Same triangle, filled green
int tri[] = {320, 80, 200, 300, 440, 300, 320, 80};

setcolor(WHITE);
setfillstyle(SOLID_FILL, GREEN);
fillpoly(4, tri);
```

**Output.** A white triangle outline, then the same triangle filled solid green. If `number` is 3 the last edge from the third vertex back to the first is not drawn, and the shape looks open.

| Call                    | Shape drawn                |
| ----------------------- | -------------------------- |
| `drawpoly(4, square)`   | Closed square outline      |
| `fillpoly(4, square)`   | Filled square              |
| `drawpoly(3, tri)`      | Two edges only, shape open |
| `drawpoly(6, pentagon)` | Closed pentagon            |

## putpixel()

```cpp
void putpixel(int x, int y, int color)
```

`putpixel` sets one pixel. It is the primitive under every raster algorithm, including Bresenham and the boundary fill loop.

```cpp
// Plot a diagonal line of blue pixels
for (int i = 0; i < 100; i++) {
  putpixel(200 + i, 150 + i, BLUE);
}
```

**Output.** 100 blue pixels along the diagonal from $(200,150)$ to $(299,249)$. Each call sets exactly one pixel, so a curve drawn this way costs one call per pixel.

## setcolor() and the BGI Color Table

```cpp
void setcolor(int color)
```

`setcolor` sets the color used by `line`, `circle`, `rectangle`, `arc`, `drawpoly`, and the outline of filled shapes.

| Value | Color     | Value | Color        |
| ----- | --------- | ----- | ------------ |
| 0     | BLACK     | 8     | DARKGRAY     |
| 1     | BLUE      | 9     | LIGHTBLUE    |
| 2     | GREEN     | 10    | LIGHTGREEN   |
| 3     | CYAN      | 11    | LIGHTCYAN    |
| 4     | RED       | 12    | LIGHTRED     |
| 5     | MAGENTA   | 13    | LIGHTMAGENTA |
| 6     | BROWN     | 14    | YELLOW       |
| 7     | LIGHTGRAY | 15    | WHITE        |

```cpp
// Same circle in four colors, drawn one after another
circle(160, 240, 80);
setcolor(RED);
circle(320, 240, 80);
setcolor(GREEN);
circle(480, 240, 80);
```

**Output.** Three circles in the default, red, and green colors. The first call uses whatever color was current before `setcolor` was called, which is usually white.

> [!NOTE] These are palette indices
> The numbers 0 to 15 select entries in the 16-color BGI palette. They are not RGB triples. A modern library would take $(r,g,b)$ values instead, which is why the same drawing looks different under SDL or OpenGL.

## setfillstyle() and floodfill()

void setfillstyle(int pattern, int color)

```cpp
void floodfill(int x, int y, int border_color)
```

`setfillstyle` sets the pattern and color used by `bar`, `fillpoly`, `fillellipse`, `sector`, and `floodfill`. `floodfill` starts at the seed $(x,y)$ and spreads until it reaches pixels of `border_color`.

```cpp
// Draw a circle, then fill its interior from the centre
setcolor(WHITE);
circle(320, 240, 120);
setfillstyle(SOLID_FILL, CYAN);
floodfill(320, 240, WHITE);
```

**Output.** A white circle with a cyan interior. The seed is the center because that point is guaranteed to be inside; a seed on the outline would fill the outside instead.

### Fill Patterns

| Value | Pattern        | Value | Pattern           |
| ----- | -------------- | ----- | ----------------- |
| 0     | `EMPTY_FILL`   | 6     | `LTBKSLASH_FILL`  |
| 1     | `SOLID_FILL`   | 7     | `HATCH_FILL`      |
| 2     | `LINE_FILL`    | 8     | `XHATCH_FILL`     |
| 3     | `LTSLASH_FILL` | 9     | `INTERLEAVE_FILL` |
| 4     | `SLASH_FILL`   | 10    | `WIDE_DOT_FILL`   |
| 5     | `BKSLASH_FILL` | 11    | `CLOSE_DOT_FILL`  |

`EMPTY_FILL` leaves the interior untouched, which is useful when only the outline should show. `SOLID_FILL` is the one used for a plain color.

## Worked Example: A Complete Picture

Draw a red circle with a blue centre, a yellow rectangle around it, and fill the gap in a hatch pattern.

```cpp
// Composite drawing using most of the functions in this section
#include <graphics.h>
#include <conio.h>

int main() {
  int gd = DETECT;
  int gm;
  initgraph(&gd, &gm, "C:\\tc\\bgi");

  // Outer frame
  setcolor(YELLOW);
  rectangle(80, 60, 560, 420);

  // Circle with an outline, then a filled inner disc
  setcolor(RED);
  circle(320, 240, 120);
  setfillstyle(SOLID_FILL, BLUE);
  floodfill(320, 240, RED);

  // Label the picture
  setcolor(WHITE);
  outtextxy(250, 400, "Blue disc in a red ring");

  getch();
  closegraph();
  return 0;
}
```

| Step | Call                       | Effect                                     |
| ---- | -------------------------- | ------------------------------------------ |
| 1    | `rectangle(80,60,560,420)` | Yellow frame from top-left to bottom-right |
| 2    | `circle(320,240,120)`      | Red ring of radius 120                     |
| 3    | `floodfill(320,240,RED)`   | Blue fills everything up to the red ring   |
| 4    | `outtextxy(250,400,...)`   | Text placed by its top-left corner         |

_10 min read (source: 6 min)_

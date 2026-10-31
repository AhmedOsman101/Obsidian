---
title: Section 3
prev:
  text: "Section 2"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Sections/Section-2"
next: false
---

# Computer Graphics - Section 3: Bars, Text and 3D Bars

## What This Section Adds

Section 2 covered outlines and fills. This section adds the functions that turn a drawing into a **chart**: filled bars, labels, and bars with depth.

| Function         | Purpose                             | Syntax                                            |
| ---------------- | ----------------------------------- | ------------------------------------------------- |
| `bar()`          | Filled 2D rectangle with no outline | `bar(left, top, right, bottom)`                   |
| `bar3d()`        | Filled bar with a 3D top and side   | `bar3d(left, top, right, bottom, depth, topflag)` |
| `setcolor()`     | Drawing color for outlines and text | `setcolor(color)`                                 |
| `setfillstyle()` | Pattern and color used by the bars  | `setfillstyle(pattern, color)`                    |
| `floodfill()`    | Fill a closed area from a seed      | `floodfill(x, y, border_color)`                   |
| `outtextxy()`    | Draw a string at a screen position  | `outtextxy(x, y, string)`                         |
| `settextstyle()` | Font, direction, and size of text   | `settextstyle(font, direction, font_size)`        |

The scan-converted object list is the same as before, with **bar** added: point, line, ellipse, circle, polygon, filled region, rectangle, arc, sector, bar.

## bar()

```cpp
void bar(int left, int top, int right, int bottom)
```

`bar` draws a **filled** rectangle and does **not** draw its outline. The fill pattern and fill color come from `setfillstyle`.

```cpp
// One solid blue bar, 100 pixels wide and 200 tall
setfillstyle(SOLID_FILL, BLUE);
bar(100, 200, 200, 400);
```

**Output.** A blue rectangle whose top-left corner is $(100,200)$ and whose bottom-right corner is $(200,400)$. No border is drawn, so the edges are the fill pixels themselves.

> [!NOTE] bar() vs. rectangle()
> `rectangle` draws **four lines** in the current drawing color and leaves the inside empty. `bar` fills the **same region** in the current fill style and draws no lines. A bordered bar needs both: `bar(...)` first, then `rectangle(...)` with the same coordinates.

## setcolor() in Charts

The color table is the same 16-entry BGI palette used in Section 2.

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

In a chart, `setcolor` controls the axes and the text, while `setfillstyle` controls the bars. Changing one does not change the other.

## setfillstyle() and floodfill()

```cpp
void setfillstyle(int pattern, int color)
```

```cpp
void floodfill(int x, int y, int border_color)
```

`floodfill` fills a closed area from the seed $(x,y)$ and stops at `border_color`. Use it when the shape was drawn with `circle`, `rectangle`, or `drawpoly`, because those functions leave the interior empty.

```cpp
// Outline first, then fill from a point inside
setcolor(WHITE);
rectangle(100, 100, 300, 250);
setfillstyle(HATCH_FILL, GREEN);
floodfill(200, 175, WHITE);
```

**Output.** A white outline with a green hatch pattern inside. The seed $(200,175)$ is the middle of the rectangle, so the fill spreads outward to the border in every direction.

### Fill Patterns

| Value | Pattern        | Value | Pattern           |
| ----- | -------------- | ----- | ----------------- |
| 0     | `EMPTY_FILL`   | 6     | `LTBKSLASH_FILL`  |
| 1     | `SOLID_FILL`   | 7     | `HATCH_FILL`      |
| 2     | `LINE_FILL`    | 8     | `XHATCH_FILL`     |
| 3     | `LTSLASH_FILL` | 9     | `INTERLEAVE_FILL` |
| 4     | `SLASH_FILL`   | 10    | `WIDE_DOT_FILL`   |
| 5     | `BKSLASH_FILL` | 11    | `CLOSE_DOT_FILL`  |

## Text: outtextxy() and settextstyle()

```cpp
void outtextxy(int x, int y, char *string)
```

```cpp
void settextstyle(int font, int direction, int font_size)
```

`outtextxy` draws a string with its **top-left** corner at $(x,y)$. The color is the current drawing color, so `setcolor` must come first.

| Argument    | Values                                                                         |
| ----------- | ------------------------------------------------------------------------------ |
| `font`      | `DEFAULT_FONT`, `TRIPLEX_FONT`, `SMALL_FONT`, `SANS_SERIF_FONT`, `GOTHIC_FONT` |
| `direction` | `HORIZ_DIR` (left to right) or `VERT_DIR` (bottom to top)                      |
| `font_size` | A scaling factor, not a point size                                             |

```cpp
// Horizontal label above a vertical one
setcolor(WHITE);
settextstyle(DEFAULT_FONT, HORIZ_DIR, 2);
outtextxy(100, 50, "Sales by year");

settextstyle(DEFAULT_FONT, VERT_DIR, 2);
outtextxy(40, 400, "Units");
```

**Output.** "Sales by year" reads left to right at the top of the screen. "Units" starts at $(40,400)$ and reads bottom to top, so it acts as a rotated y-axis title.

> [!WARNING] VERT_DIR grows upward
> A vertical string starts at the given point and runs **up** the screen. A y value near the bottom is therefore correct for an axis label; a value near the top would push the text off-screen.

## Worked Example: A Labeled Bar Chart

The slide asks how a bar chart with four labeled bars is drawn, but its screenshot is an image with no text layer. The reconstruction below uses the functions covered so far.

Data to plot: 2019 to 2022, with values 120, 180, 90, and 210 units.

```cpp
// Bar chart: four bars, axis lines, value labels
#include <graphics.h>
#include <conio.h>
#include <stdio.h>

int main() {
  int gd = DETECT;
  int gm;
  initgraph(&gd, &gm, "C:\\tc\\bgi");

  int values[4] = {120, 180, 90, 210};
  int colors[4] = {BLUE, GREEN, RED, MAGENTA};
  int baseY = 400;          // y of the zero line
  int scale = 1;            // 1 pixel per unit

  // Axes
  setcolor(WHITE);
  line(80, 100, 80, baseY);        // y axis
  line(80, baseY, 560, baseY);     // x axis

  // One bar per value, 80 pixels wide, 40 pixels apart
  for (int i = 0; i < 4; i++) {
    int left = 110 + i * 110;
    int top = baseY - values[i] * scale;
    setfillstyle(SOLID_FILL, colors[i]);
    bar(left, top, left + 80, baseY);

    // Value above the bar
    char label[10];
    sprintf(label, "%d", values[i]);
    setcolor(WHITE);
    outtextxy(left + 30, top - 20, label);
  }

  // Axis titles
  settextstyle(DEFAULT_FONT, HORIZ_DIR, 1);
  outtextxy(250, 420, "Year");
  settextstyle(DEFAULT_FONT, VERT_DIR, 1);
  outtextxy(40, 300, "Units");

  getch();
  closegraph();
  return 0;
}
```

**Output.** Four solid bars of different colors standing on a common baseline, with each value printed above its bar. Bar heights are 120, 180, 90, and 210 pixels because the scale is one pixel per unit. The tallest bar belongs to 2022, and the shortest to 2021.

| Bar | Value | Height in pixels | Top edge |
| --- | ----- | ---------------- | -------- |
| 1   | 120   | 120              | 280      |
| 2   | 180   | 180              | 220      |
| 3   | 90    | 90               | 310      |
| 4   | 210   | 210              | 190      |

> [!NOTE] Why the top edge moves up as the value grows
> Screen $y$ grows downward, so a larger value needs a **smaller** $y$. The formula `baseY - value * scale` handles that, and forgetting the subtraction puts the tallest bar on the floor.

## bar3d()

```cpp
void bar3d(int left, int top, int right, int bottom, int depth, int topflag)
```

`bar3d` draws the filled front rectangle plus a **3D top** and a **side** of `depth` pixels.

| Argument  | Meaning                                                             |
| --------- | ------------------------------------------------------------------- |
| `depth`   | Depth of the bar in pixels. `0` gives a flat bar identical to `bar` |
| `topflag` | Non-zero draws the top face. `0` leaves the top open                |

| `depth` | `topflag` | Result                                                           |
| ------- | --------- | ---------------------------------------------------------------- |
| 0       | 0         | Flat rectangle, no depth, no top                                 |
| 20      | 0         | Depth drawn on the side, top face missing, so the bar looks open |
| 20      | 1         | Depth drawn on the side and the top face drawn                   |

```cpp
// Three bars showing the effect of depth and topflag
setfillstyle(SOLID_FILL, LIGHTCYAN);

bar3d(100, 300, 180, 400,  0, 0);   // flat
bar3d(220, 300, 300, 400, 20, 0);   // depth, open top
bar3d(340, 300, 420, 400, 20, 1);   // depth, closed top
```

**Output.** The first bar is a plain rectangle. The second has a visible side but no top face, so the eye reads it as an open box. The third has both a side and a top, which reads as a solid block.

> [!WARNING] topflag = 0 looks broken, not minimal
> An open top removes the face that shows the reader which way the block is oriented. Use `topflag = 0` only when bars sit behind one another and the hidden top would overlap the bar in front.

_9 min read (source: 4 min)_

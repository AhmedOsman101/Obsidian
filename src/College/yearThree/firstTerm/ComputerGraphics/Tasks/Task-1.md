---
title: Task 1
prev:
  text: "Tasks"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Tasks/index"
next:
  text: "Task 2"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Tasks/Task-2"
---

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20241807                 |
| Section | 1                        |

# Computer Graphics - Task 1: How To Draw These Shapes

## What The Task Asks

The task file has two slides, each showing a finished BGI window and the question **"How to draw this shape?"**.

| Slide | Picture                                      | Drawing tools it needs                 |
| ----- | -------------------------------------------- | -------------------------------------- |
| 1     | A pie chart of elements in the Earth's crust | `sector()` and `outtextxy()`           |
| 2     | A 3D house with a roof, a window, and a door | `fillpoly()` on several faces, `bar()` |

> [!NOTE] Duplicate file
> `Task-1.docx` in the source folder is byte-identical to `Sheets/Sheet-0.docx` (same MD5), so it contains the image quantization lab, not the drawing questions. The drawing questions are the two slides in `Task-1.pdf` and the black and white outline in `Task-1.png`.

## Slide 1: The Pie Chart

The window shows a title, an ellipse divided into four colored slices, and four labels placed around it.

| Slice     | Color in the screenshot | Angle range | Share of the circle |
| --------- | ----------------------- | ----------- | ------------------- |
| Iron      | Dark red                | 0 to 40     | 40 degrees          |
| Silicon   | Yellow                  | 40 to 140   | 100 degrees         |
| Aluminium | Green                   | 140 to 180  | 40 degrees          |
| Oxygen    | Olive                   | 180 to 360  | 180 degrees         |

### How The Shape Is Built

1. A `sector()` call draws and fills one pie slice. Its angles are measured **counter-clockwise** from the 3 o'clock position, exactly like the angles in the picture.
2. Four calls with the ranges above fill the whole ellipse with no gap.
3. `outtextxy()` puts each label at a fixed position outside the ellipse. The labels are text, not part of the sector calls.
4. The title is one `outtextxy()` at the top.

### Program

```cpp
// Pie chart of four elements, drawn with filled sectors
#include <graphics.h>
#include <conio.h>

int main() {
  int gd = DETECT;
  int gm;
  initgraph(&gd, &gm, "C:\\tc\\bgi");

  int cx = 320;   // centre of the ellipse
  int cy = 260;
  int rx = 230;   // horizontal radius
  int ry = 150;   // vertical radius

  // Slice 1: iron, 0 to 40 degrees
  setfillstyle(SOLID_FILL, RED);
  sector(cx, cy, 0, 40, rx, ry);

  // Slice 2: silicon, 40 to 140 degrees
  setfillstyle(SOLID_FILL, YELLOW);
  sector(cx, cy, 40, 140, rx, ry);

  // Slice 3: aluminium, 140 to 180 degrees
  setfillstyle(SOLID_FILL, GREEN);
  sector(cx, cy, 140, 180, rx, ry);

  // Slice 4: oxygen, 180 to 360 degrees
  setfillstyle(SOLID_FILL, BROWN);
  sector(cx, cy, 180, 360, rx, ry);

  // Title and labels
  setcolor(WHITE);
  settextstyle(DEFAULT_FONT, HORIZ_DIR, 1);
  outtextxy(140, 60, "Elements available in the Earth's crust");
  outtextxy(320, 130, "silicon");
  outtextxy(560, 240, "iron");
  outtextxy(300, 420, "oxygen");
  outtextxy(120, 300, "aluminium");

  getch();
  closegraph();
  return 0;
}
```

**Output.** A black window with a four-color ellipse in the middle. Yellow fills the top, dark red the right, green the left, and olive the bottom half. Each label sits beside its slice, and the title runs across the top.

> [!NOTE] The outline is optional
> `sector()` fills the slice and draws its border in the current drawing color. Setting `setcolor(WHITE)` before the calls gives the thin white outline seen in the screenshot.

## Slide 2: The 3D House

The house is not one shape. It is six filled polygons drawn in the right order, which is what makes it look solid.

### Decomposition

Every point uses the front-bottom-left corner as the reference. The back face is the front face shifted by the depth offset $d=(160,-60)$: 160 pixels right and 60 pixels up.

| Face        | Vertices (front)                                  | Color     | Fill order |
| ----------- | ------------------------------------------------- | --------- | ---------- |
| Front gable | (120,380) (120,230) (200,150) (280,230) (280,380) | Cyan      | 4          |
| Side wall   | (280,380) (440,320) (440,170) (280,230)           | Cyan      | 2          |
| Near roof   | (200,150) (280,230) (440,170) (360,90)            | Dark gray | 3          |
| Far roof    | (120,230) (200,150) (360,90) (280,170)            | Dark gray | 1          |
| Window      | (150,265) to (205,320)                            | Black     | 5          |
| Door        | (330,290) to (375,380)                            | Black     | 6          |

The order matters. A polygon drawn later covers the one under it, so the walls go before the roof edge that overlaps them, and the front gable goes over the side wall.

```cpp
// 3D house built from filled polygons, back faces first
#include <graphics.h>
#include <conio.h>

int main() {
  int gd = DETECT;
  int gm;
  initgraph(&gd, &gm, "C:\\tc\\bgi");

  // 1. Far roof plane, drawn first so it sits behind everything
  int farRoof[] = {120, 230, 200, 150, 360, 90, 280, 170};
  setfillstyle(SOLID_FILL, DARKGRAY);
  fillpoly(4, farRoof);

  // 2. Right side wall
  int side[] = {280, 380, 440, 320, 440, 170, 280, 230};
  setfillstyle(SOLID_FILL, CYAN);
  fillpoly(4, side);

  // 3. Near roof plane
  int nearRoof[] = {200, 150, 280, 230, 440, 170, 360, 90};
  setfillstyle(SOLID_FILL, DARKGRAY);
  fillpoly(4, nearRoof);

  // 4. Front gable, a pentagon
  int front[] = {120, 380, 120, 230, 200, 150, 280, 230, 280, 380};
  setfillstyle(SOLID_FILL, CYAN);
  fillpoly(5, front);

  // 5. Window on the front face
  setfillstyle(SOLID_FILL, BLACK);
  bar(150, 265, 205, 320);

  // 6. Door on the side wall
  bar(330, 290, 375, 380);

  getch();
  closegraph();
  return 0;
}
```

**Output.** A cyan gable end on the left, a cyan side wall on the right, a dark gray roof with a ridge running back and up, a black window on the front, and a black door on the side.

> [!WARNING] Order errors are the usual mistake
> Drawing the front gable before the side wall hides the window, because the wall covers it. Drawing the near roof before the walls leaves a gray roof that looks detached from the house. The fix is the same every time: draw the faces that are **further from the viewer** first.

## The Black and White Version

`Task-1.png` shows the same house as an outline only, with the roof drawn as three horizontal bands. That picture needs no fills:

```cpp
// Outline version of the house, same coordinates as the filled one
setcolor(WHITE);
drawpoly(5, front);
drawpoly(4, side);
drawpoly(4, nearRoof);
drawpoly(4, farRoof);
rectangle(150, 265, 205, 320);
rectangle(330, 290, 375, 380);
```

The three bands across the roof come from the two roof planes plus the ridge line, so no extra calls are needed once every edge is drawn.

## Check Your Work

- The pie chart slices must add up to 360 degrees, otherwise a wedge of background shows.
- The house must show **five** faces of a box: front gable, side wall, near roof, far roof, and the flat ground line is not drawn.
- The window and door must appear on top of the walls, not behind them.
- Every `fillpoly()` call needs the number of points, and the array holds $2n$ integers.

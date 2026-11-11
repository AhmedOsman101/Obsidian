---
title: Assignment 1
prev:
  text: "Assignments"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Assignments/index"
next: false
---

# Computer Graphics - Assignment 1: Transforming A Cube

## Task 1: 3D Transformations Of A Cube

### 1. The Original Cube

The sheet gives the eight vertices of the cube:

$$A(1,1,1),\; B(3,1,1),\; C(3,3,1),\; D(1,3,1),\; E(1,1,3),\; F(3,1,3),\; G(3,3,3),\; H(1,3,3)$$

The four vertices $A, B, C, D$ all lie in the plane $z = 1$ and form a square of side $3 - 1 = 2$, so they are the **bottom face**. The four vertices $E, F, G, H$ lie in the plane $z = 3$ and form the **top face**, which gives the cube a height of $3 - 1 = 2$, the same as its side.

| Vertex | Coordinates | Position on the cube |
| ------ | ----------- | -------------------- |
| A      | (1, 1, 1)   | bottom front left    |
| B      | (3, 1, 1)   | bottom front right   |
| C      | (3, 3, 1)   | bottom back right    |
| D      | (1, 3, 1)   | bottom back left     |
| E      | (1, 1, 3)   | top front left       |
| F      | (3, 1, 3)   | top front right      |
| G      | (3, 3, 3)   | top back right       |
| H      | (1, 3, 3)   | top back left        |

The twelve edges are $AB, BC, CD, DA$ on the bottom, $EF, FG, GH, HE$ on the top, and the four vertical edges $AE, BF, CG, DH$.

![](imgs/fig-1-cube.svg)

_The cube drawn in an oblique projection. The corner A is the one furthest from the viewer, so the three edges that meet at A are drawn as light dashed lines._

### 2. Translation By $\mathbf{T} = (2,1,3)$

A translation adds the same offset to every vertex, so no edge changes length or direction:

$$x' = x + 2, \qquad y' = y + 1, \qquad z' = z + 3$$

In homogeneous coordinates this is a $4 \times 4$ matrix, which lets the same multiplication handle translation and rotation:

$$T = \begin{bmatrix} 1 & 0 & 0 & 2 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

**Worked example, vertex A.**

$$\begin{bmatrix} 1 & 0 & 0 & 2 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 1+2 \\ 1+1 \\ 1+3 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 2 \\ 4 \\ 1 \end{bmatrix} \Rightarrow A'(3,2,4)$$

The same arithmetic for all eight vertices:

| Vertex | Original  | Add $T$     | Translated    |
| ------ | --------- | ----------- | ------------- |
| A      | (1, 1, 1) | + (2, 1, 3) | **(3, 2, 4)** |
| B      | (3, 1, 1) | + (2, 1, 3) | **(5, 2, 4)** |
| C      | (3, 3, 1) | + (2, 1, 3) | **(5, 4, 4)** |
| D      | (1, 3, 1) | + (2, 1, 3) | **(3, 4, 4)** |
| E      | (1, 1, 3) | + (2, 1, 3) | **(3, 2, 6)** |
| F      | (3, 1, 3) | + (2, 1, 3) | **(5, 2, 6)** |
| G      | (3, 3, 3) | + (2, 1, 3) | **(5, 4, 6)** |
| H      | (1, 3, 3) | + (2, 1, 3) | **(3, 4, 6)** |

The new cube is still a cube of side 2, still with its faces parallel to the coordinate planes, but its corner $A$ is now at $(3,2,4)$ instead of $(1,1,1)$.

![](imgs/fig-2-translation.svg)

_The translated cube in its own axes. Every vertex moved by the same vector $(2,1,3)$, so the cube kept its size and its orientation and only changed place._

### 3. Rotation Of 90° About The Z Axis

A rotation about the $z$ axis leaves $z$ alone and turns the $xy$ part of the point:

$$R_z(\theta) = \begin{bmatrix} \cos\theta & -\sin\theta & 0 & 0 \\ \sin\theta & \cos\theta & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

For $\theta = 90°$, $\cos 90° = 0$ and $\sin 90° = 1$, so:

$$R_z(90°) = \begin{bmatrix} 0 & -1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{bmatrix} \qquad \Rightarrow \qquad x' = -y, \quad y' = x, \quad z' = z$$

The rotation is applied to the **translated** cube, and it turns about the $z$ axis that passes through the **origin**, not about the centre of the cube.

**Worked example, vertex A of the translated cube.**

$$A'(3,2,4) \Rightarrow x' = -2,\; y' = 3,\; z' = 4 \Rightarrow A''(-2,3,4)$$

| Vertex | Translated | $x' = -y$ | $y' = x$ | $z' = z$ | Rotated        |
| ------ | ---------- | --------- | -------- | -------- | -------------- |
| A      | (3, 2, 4)  | −2        | 3        | 4        | **(-2, 3, 4)** |
| B      | (5, 2, 4)  | −2        | 5        | 4        | **(-2, 5, 4)** |
| C      | (5, 4, 4)  | −4        | 5        | 4        | **(-4, 5, 4)** |
| D      | (3, 4, 4)  | −4        | 3        | 4        | **(-4, 3, 4)** |
| E      | (3, 2, 6)  | −2        | 3        | 6        | **(-2, 3, 6)** |
| F      | (5, 2, 6)  | −2        | 5        | 6        | **(-2, 5, 6)** |
| G      | (5, 4, 6)  | −4        | 5        | 6        | **(-4, 5, 6)** |
| H      | (3, 4, 6)  | −4        | 3        | 6        | **(-4, 3, 6)** |

![](imgs/fig-3-rotation.svg)

_The cube in its final position. Every $x$ is now negative, so the negative half of each axis is drawn as well: the arrow for $-x$ points up to the right, which is the side the cube has moved to. The three edges that meet at D are dashed because D is the corner furthest from the viewer._

#### The Two Transformations As One Matrix

The two steps can be combined into a single matrix by multiplying them in the order the point meets them, translation first:

$$M = R_z(90°) \cdot T = \begin{bmatrix} 0 & -1 & 0 & -1 \\ 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{bmatrix}$$

**Check with vertex B.** Applying the combined matrix to $B(3,1,1)$ directly:

$$x' = 0(3) - 1(1) + 0(1) - 1 = -2, \quad y' = 1(3) + 0 + 0 + 2 = 5, \quad z' = 0 + 0 + 1(1) + 3 = 4$$

which gives $(-2,5,4)$, the same answer as the two separate steps. The order matters: if the cube were rotated first and then translated, vertex $A$ would finish at $(1,2,4)$ instead of $(-2,3,4)$, because the translation would no longer be rotated with the object.

### 4. Comparing The Original Cube With The Final Cube

| Property                  | Original cube    | Final cube                |
| ------------------------- | ---------------- | ------------------------- |
| Corner A                  | (1, 1, 1)        | (-2, 3, 4)                |
| Centre of the cube        | (2, 2, 2)        | (-3, 4, 5)                |
| Range of $x$              | 1 to 3           | −4 to −2                  |
| Range of $y$              | 1 to 3           | 3 to 5                    |
| Range of $z$              | 1 to 3           | 4 to 6                    |
| Side length               | 2                | 2                         |
| Edge direction            | along X, Y and Z | along Y, X and Z          |
| Which way the faces point | front faces $-y$ | that face now points $+x$ |

**Effect of the translation.** The translation only changes **position**. Every vertex received the same vector $(2,1,3)$, so the cube slid 2 units along $+x$, 1 unit along $+y$ and 3 units along $+z$. All eight edges kept their length and their directions, all faces stayed parallel to the coordinate planes, and the cube is still the same cube, just somewhere else. In short, a translation moves an object without turning it.

**Effect of the rotation.** The rotation changes **orientation**, and in this case it also changes position, because the cube is not sitting on the axis of rotation. Turning the cube 90° about the $z$ axis swaps the $x$ and $y$ directions: a point that was 3 units along $+x$ and 2 units along $+y$ ends up 2 units along $-x$ and 3 units along $+y$. That is why the cube ends up on the negative side of the $x$ axis. The height is untouched, so the cube still floats between $z = 4$ and $z = 6$, and the top and bottom faces are still horizontal; only the four vertical side faces have turned, so the face that used to look towards $-y$ now looks towards $+x$.

**Together.** After the translation the cube sits in the region $x = 3 \dots 5$, $y = 2 \dots 4$, $z = 4 \dots 6$. After the rotation that region becomes $x = -4 \dots -2$, $y = 3 \dots 5$, $z = 4 \dots 6$. The volume, the edge length and the angles between the edges are all preserved, which is expected because translation and rotation are both **rigid motions**. The only things that changed are the position and the direction the cube faces.

![](imgs/fig-4-comparison.svg)

_The original position in blue and the final position in green, drawn in the same coordinate system._

## Task 1, Question 5: Polygon Filling

### a. The Polygonal Faces Of The Cube

A cube has **six faces**, and every face is a **planar convex polygon with four vertices**, so each one can be filled by any polygon filling algorithm. In the original position the faces are:

| Face   | Vertices (in order) | Plane | Outward normal |
| ------ | ------------------- | ----- | -------------- |
| bottom | A, B, C, D          | $z=1$ | $-z$           |
| top    | E, F, G, H          | $z=3$ | $+z$           |
| front  | A, B, F, E          | $y=1$ | $-y$           |
| back   | D, C, G, H          | $y=3$ | $+y$           |
| left   | A, D, H, E          | $x=1$ | $-x$           |
| right  | B, C, G, F          | $x=3$ | $+x$           |

Two points matter for the fill:

1. The vertices of a face must be given **in order around the edge**. If they are listed in a random order, the polygon self-intersects and the fill result is wrong.
2. The six faces are filled separately, one polygon at a time. In a hidden-surface program only the three faces that face the viewer are filled, but for this assignment I fill every face to show the method.

### b. How The Scan-Line Polygon Filling Algorithm Works

The algorithm works row by row on the screen. It never looks at the inside of the polygon; it only looks at where the **edges** cross each horizontal scan line.

1. Find the lowest and highest $y$ of the polygon. These are the first and last scan lines.
2. For the current scan line, find its intersection with **every edge** of the polygon.
3. Sort the intersection points by their $x$ value, from smallest to largest.
4. Fill the pixels between the first and second point, then between the third and fourth, and so on. The interior of a polygon always meets a scan line an **even** number of times, so every point gets a partner.
5. Move to the next scan line and repeat until the top vertex is reached.

**Two special cases.**

- A **horizontal edge** is parallel to the scan line, so it produces no single intersection. Horizontal edges are skipped completely, and the adjacent non-horizontal edges are used instead.
- A scan line that passes exactly through a **vertex** can produce an odd number of intersections and ruin the pairing. The usual rule is: if the two edges meeting at the vertex both go the same way in $y$ (the vertex is a local maximum or a local minimum), count the vertex **twice**; if one edge goes up and the other goes down, count it **once**.

**Worked example on the bottom face ABCD.** In the plane $z = 1$ the face is the square $A(1,1)$, $B(3,1)$, $C(3,3)$, $D(1,3)$. I divide it into a $4 \times 4$ grid of pixels, each pixel $0.5$ units wide, so the pixel centres are at $x = 1.25, 1.75, 2.25, 2.75$ and the same values in $y$. That gives four scan lines, one through the middle of each row of pixels.

The two vertical edges are $AD$ from $(1,3)$ to $(1,1)$ and $BC$ from $(3,1)$ to $(3,3)$. Both edges that run horizontally, $AB$ and $DC$, are skipped. No scan line passes through a vertex, so the vertex rule is not needed here.

| Scan line | Meets AD at  | Meets BC at  | Sorted $x$ | Span filled   | Pixels in the span            |
| --------- | ------------ | ------------ | ---------- | ------------- | ----------------------------- |
| $y=1.25$  | $(1,\;1.25)$ | $(3,\;1.25)$ | 1, 3       | $x = 1 \to 3$ | 1.25, 1.75, 2.25, 2.75 (4 px) |
| $y=1.75$  | $(1,\;1.75)$ | $(3,\;1.75)$ | 1, 3       | $x = 1 \to 3$ | 1.25, 1.75, 2.25, 2.75 (4 px) |
| $y=2.25$  | $(1,\;2.25)$ | $(3,\;2.25)$ | 1, 3       | $x = 1 \to 3$ | 1.25, 1.75, 2.25, 2.75 (4 px) |
| $y=2.75$  | $(1,\;2.75)$ | $(3,\;2.75)$ | 1, 3       | $x = 1 \to 3$ | 1.25, 1.75, 2.25, 2.75 (4 px) |

That is $4 \times 4 = 16$ pixels, which is exactly the area of the face in this grid ($2 \times 2$ units at 4 pixels per unit each way). Because ABCD is a square aligned with the axes, every scan line gives the same span. A slanted face such as $ABFE$ would give a different pair of intersections on each row, and the spans would get shorter or longer as the scan line moves up.

![](imgs/fig-5-scanline.svg)

_The bottom face on a 4 by 4 pixel grid. Each scan line meets AD at $x = 1$ and BC at $x = 3$, so the fill run is the same on all four rows._

### c. Flood Fill Compared With Boundary Fill

Both algorithms start from a **seed point** inside the area and spread to neighbouring pixels. What stops them is different.

| Point of comparison       | **Flood fill**                                   | **Boundary fill**                                   |
| ------------------------- | ------------------------------------------------ | --------------------------------------------------- |
| Starting condition        | Seed pixel must have the **old interior colour** | Seed pixel must be inside a **closed boundary**     |
| What it compares          | The neighbour's colour with the **old colour**   | The neighbour's colour with the **boundary colour** |
| When it stops             | When no neighbour still has the old colour       | When the neighbour is the boundary colour           |
| Requirement on the region | The interior must be **one uniform colour**      | The outline must be **closed**, with no gap         |
| Typical use               | Filling an area whose colour is already known    | Filling a shape whose outline was just drawn        |
| Result on a gap           | Spread is limited to pixels of the same colour   | The colour **leaks out** through the gap            |

**Flood fill on the bottom face.** The face covers 16 pixels of colour white and the outline is black. Seeding at the pixel $(2.25, 2.25)$, the algorithm paints that pixel and pushes its four neighbours. Each neighbour is painted only if it is still white and inside the face, and each newly painted pixel pushes its own neighbours in turn. The colour spreads outwards row by row and stops when the stack is empty, which happens after all 16 white pixels are blue.

**Boundary fill on the same face.** Seeding at the same pixel, the algorithm paints it and looks at its neighbours. A neighbour is painted only if its colour is **not** the boundary colour, so the four black border pixels are never touched and the spread stops there. The same 16 pixels change colour.

The practical difference shows up when the drawing is not perfect: if one pixel of the outline is missing, boundary fill escapes through the hole into the rest of the screen, while flood fill stays inside because the pixels outside the shape have a different colour. Flood fill is the safer choice when the colour of the interior is known; boundary fill is the natural choice when the program has just drawn an outline and wants to colour it.

### d. 4-Connected And 8-Connected Filling

The two algorithms also differ in which neighbours they look at.

| Neighbours considered        | **4-connected**                      | **8-connected**                                 |
| ---------------------------- | ------------------------------------ | ----------------------------------------------- |
| Directions                   | up, down, left, right                | the four above plus the four diagonals          |
| Diagonal step                | not allowed                          | allowed                                         |
| Behaviour at a diagonal wall | the wall blocks the spread           | the spread slips through the corner             |
| Typical choice               | filling shapes drawn with thin lines | filling shapes drawn with thick or joined lines |

The figure uses the same $6 \times 6$ pixel grid in both panels, with the same six boundary pixels forming a diagonal wall and the same seed pixel in the top-left corner.

- With **4-connected** filling the spread cannot cross a diagonal line of boundary pixels, because it would have to pass through a corner between two black pixels. It fills the 15 pixels above the wall and then stops.
- With **8-connected** filling each diagonal step moves between two boundary pixels that only touch at a corner, so the fill crosses the wall and continues on the other side. It ends up with the 30 pixels that are not part of the boundary.

![](imgs/fig-6-connectivity.svg)

_The same grid and the same seed, filled with the two neighbourhoods. The 4-connected fill stays above the diagonal wall, the 8-connected fill leaks through it._

This is why the choice matters: 8-connected filling is faster for closed shapes, but it leaks through a one-pixel diagonal gap, which is exactly the situation the 4-connected version handles safely.

## Task 2: Displays, Input Devices And Vectors

### 1. Input Devices And How They Help The User Interact With Graphical Objects

An **input device** transfers data such as text, coordinates or sound from the user into the computer. In a graphics program that data becomes a position, a selection or a command.

| Device        | How it works                                                    | How it helps the user work with graphical objects                                     |
| ------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Keyboard      | Sends character and command codes, about 101 keys               | Types exact coordinates and sizes, and runs commands through shortcuts                |
| Mouse         | Reports movement in two directions and controls a screen cursor | Points at an object, selects it, drags it, and draws freehand                         |
| Trackball     | A ball in a fixed base, rotated by the hand                     | Same pointing as a mouse without moving the device, so it suits CAD and tight desks   |
| Spaceball     | Reports six values: three translations and three rotations      | Moves and turns a 3D object in one gesture, which a 2-button mouse cannot do          |
| Joystick      | A lever that reports tilt in four main directions               | Gives smooth continuous control of direction, used in games and simulators            |
| Data glove    | Sensors on the hand report finger and hand movement             | Lets the user grasp, push, and turn objects inside a virtual environment              |
| Digitizer     | A stylus on a tablet converts the stroke into coordinates       | Traces a paper drawing or a freehand curve into exact digital points                  |
| Image scanner | Captures a photo or a document as a pixel image                 | Brings a real picture into the program so it can be edited or used as a texture       |
| Touch panel   | Detects a finger or stylus directly on the screen               | The user touches the object itself, so selecting and dragging need no separate device |
| Light pen     | Detects the light of the CRT at the point it touches            | Draws and selects directly on the screen at the position the user indicates           |
| Voice system  | Converts speech into commands or text                           | Runs commands without using the hands, which helps when both hands are busy           |

The number of values a device reports decides what it can do. A mouse reports **two** values, so it can move a cursor or drag a 2D object, but it cannot describe the rotation of a 3D object. A **spaceball** reports **six**, three positions and three rotations, so one device can place and orient a 3D object.

### 2. CRT, LCD And LED Displays Compared

| Point of comparison | **CRT**                                                                                                            | **LCD**                                                                                                | **LED**                                                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Working principle   | Electron guns fire beams at a phosphor-coated screen inside a vacuum tube; the beam is deflected by magnetic coils | Liquid crystals between two polarising filters twist to control how much light passes from a backlight | Light-emitting diodes produce the light directly; either as the backlight of an LCD panel or as the pixels themselves |
| Emissive or not     | Emissive, the phosphor emits light                                                                                 | Non-emissive, it only controls the backlight                                                           | Emissive                                                                                                              |
| Size and weight     | Deep and heavy, the tube length grows with the screen size                                                         | Thin and light                                                                                         | Thin and light, and can be tiled into very large screens                                                              |
| Power consumption   | High, the tube and the deflection coils draw a lot                                                                 | Lower, the backlight is the main load                                                                  | Lowest for the same brightness, because each diode is switched individually                                           |
| Resolution          | Good, but the focus falls off at the edges                                                                         | Fixed native resolution, other modes are interpolated                                                  | Fixed native resolution in panels; LED walls are built from separate modules                                          |
| Brightness          | Moderate, colours are bright but the tube is bulky                                                                 | Limited by the backlight                                                                               | Very high, readable in daylight                                                                                       |
| Response time       | Very fast, good for motion                                                                                         | Slower, which can cause motion blur                                                                    | Very fast, and it can switch off completely for true black                                                            |
| Weak points         | Flicker, burn-in, high voltage, large footprint                                                                    | Dead pixels, limited viewing angle, backlight bleed                                                    | Higher cost, and heat in very large installations                                                                     |

CRT is the oldest of the three and is now replaced almost everywhere, but the raster-scan idea it introduced is still how every modern display works: the screen is a grid of pixels refreshed line by line. LCD keeps the same grid but replaces the electron beam with a light valve, which is why it can be made thin. LED replaces the light source itself, which gives the highest brightness and the lowest power per unit of light.

### 3. The Role Of Vectors In Computer Graphics

A **vector** is a quantity with both a **magnitude** (length) and a **direction**. It is written either as a pair of numbers or as a letter with an arrow:

$$\vec{v} = (x, y) \qquad \text{or} \qquad \vec{v} = x\hat{i} + y\hat{j}$$

The two properties are separate. The magnitude says how much, the direction says which way, and two vectors with the same numbers are the same vector wherever they are drawn.

| Quantity        | Formula                                            |
| --------------- | -------------------------------------------------- |
| Magnitude in 2D | $\lvert \vec{v} \rvert = \sqrt{x^2 + y^2}$         |
| Magnitude in 3D | $\lvert \vec{v} \rvert = \sqrt{x^2 + y^2 + z^2}$   |
| Unit vector     | $\hat{v} = \dfrac{\vec{v}}{\lvert \vec{v} \rvert}$ |
| Sum             | $(x_1 + x_2,\; y_1 + y_2)$                         |
| Difference      | $(x_1 - x_2,\; y_1 - y_2)$                         |
| Dot product     | $\vec{a} \cdot \vec{b} = x_1x_2 + y_1y_2$          |

In graphics a vector is used for four things in particular:

- **Position and displacement.** Each vertex is stored as a vector from the origin, and moving an object means adding a displacement vector to every vertex.
- **Direction without a position.** A light direction, a viewing direction and a surface normal are all vectors. They say which way something faces, and they are not tied to any point.
- **Angles between surfaces.** The dot product of two unit vectors gives the cosine of the angle between them, which is how shading decides whether a face is lit brightly or not at all.
- **Transformations.** Rotation and scaling are multiplications by matrices, and a matrix acting on a vector produces a new vector. This is the reason the whole transformation pipeline of the cube above can be written as two matrices.

### 4. Calculations For $\mathbf{A} = (3,4)$ And $\mathbf{B} = (2,1)$

**Magnitude of A.**

$$\lvert A \rvert = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$$

So vector A is 5 units long.

**Sum of A and B.** The components are added separately:

$$A + B = (3 + 2,\; 4 + 1) = (5,5)$$

**Difference of A and B.** Subtract the components of B from those of A:

$$A - B = (3 - 2,\; 4 - 1) = (1,3)$$

**Checks.** The sum is longer than either vector because the two point in roughly the same direction:

$$\lvert A + B \rvert = \sqrt{5^2 + 5^2} = \sqrt{50} \approx 7.07, \qquad \lvert A - B \rvert = \sqrt{1^2 + 3^2} = \sqrt{10} \approx 3.16$$

The unit vector of A is $\left(\tfrac{3}{5}, \tfrac{4}{5}\right) = (0.6, 0.8)$, and it does have length 1, which confirms the magnitude above.

### 5. Drawing A, B And Their Sum

Both vectors start at the origin. A ends at $(3,4)$ and B ends at $(2,1)$, and the sum ends at $(5,5)$.

To draw the sum I use the **parallelogram rule**: from the tip of A I draw a copy of B, and from the tip of B I draw a copy of A. The two copies meet at the point $(5,5)$, which is the tip of $A + B$. The same answer comes from the **triangle rule**, where B is placed at the tip of A and the resultant runs from the origin to the new tip. The dashed sides in the figure are those copies.

![](imgs/fig-7-vectors.svg)

_Vectors A and B from the origin, with the dashed copies that complete the parallelogram and locate the sum at $(5,5)$._

The difference $A - B = (1,3)$ is the other diagonal of the same parallelogram: it is the vector that runs from the tip of B to the tip of A, and its length is about 3.16.

### 6. Why Vectors Matter For Representing And Transforming Graphical Objects

- **Compact representation.** Eight numbers describe the eight corners of the cube; a vector for each corner is all the geometry a polygon mesh needs. A scene with a million vertices is a million vectors, and nothing else is required to describe its shape.
- **Every transformation is a vector operation.** Translation adds a vector, scaling multiplies one, and rotation multiplies by a matrix. Because the same operation is applied to every vertex, an object can be moved, turned or resized without touching its stored shape.
- **Direction without a reference point.** Normals, light directions and camera directions have to be free to move: the normal of a face stays the same vector no matter where the face is. Storing them as vectors is what makes lighting and back-face removal possible.
- **Shading and hidden surfaces.** The dot product between the surface normal and the light direction gives the brightness of the face, and the sign of the dot product with the viewing direction tells the program whether the face points towards the camera.
- **Animation and physics.** Movement per frame is a velocity vector, and gravity or a collision is a force vector. Storing them as vectors makes the motion arithmetic short and independent of the number of objects.
- **Camera and projection.** The view is defined by a camera position, a direction to look along and an up direction, all vectors. Projecting the 3D cube onto the screen is a matrix built from those three vectors, which is exactly why the same cube can be drawn from any angle without changing its stored coordinates.

In the cube assignment, the translation is one vector added to eight vertices, and the rotation is one matrix multiplied by the same eight vertices. Vectors are what make those two operations uniform enough to apply to any object of any size.

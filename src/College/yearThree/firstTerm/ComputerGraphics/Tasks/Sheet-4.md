| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20241807                 |
| Section | 1                        |

# Sheet 4 solutions: polygon filling

## Part 1: multiple choice

1. **B**. To fill the interior region of a polygon.
2. **B**. A single solid color.
3. **B**. Pattern fill.
4. **C**. Filling a polygon with repeated diagonal lines.
5. **B**. Number of vertices.
6. **B**. Two coordinates, $x$ and $y$.
7. **A**. Vertices are listed in an order that defines the polygon boundary.
8. **C**. Scan-line polygon filling.
9. **B**. Horizontal.
10. **C**. Lowermost vertex to the topmost vertex. The scan lines start at the lowest $y$ and move up one row at a time.
11. **B**. The edges intersected by the scan line.
12. **A**. The horizontal portions to be filled.
13. **C**. The interior horizontal spans.
14. **D**. Sorting the computer's files.
15. **C**. Three. One coordinate pair per vertex.
16. **C**. Five. One coordinate pair per vertex.
17. **A**. $x$.
18. **B**. $y$.
19. **A**. The segment between the two intersection points. The first intersection is the entry point and the second is the exit point.
20. **B**. Solid fill uses one solid color, while pattern fill uses a predefined pattern.

## Part 2: true or false

21. Polygon filling is used to fill the interior region of a polygon. True.
22. Solid fill uses a predefined pattern of repeated shapes instead of a uniform color. False. Solid fill uses one uniform color, a predefined pattern describes pattern fill.
23. Pattern fill can use repeated lines, dots, or geometric patterns. True.
24. A vertex in a two-dimensional polygon is represented by an $(x,y)$ coordinate pair. True.
25. The vertices in a polygon representation can always be listed randomly without affecting the connections between them. False. The order defines which vertices are connected, so a random order changes the polygon.
26. The scan-line polygon-filling algorithm uses horizontal scan lines. True.
27. The scan-line algorithm identifies intersections between scan lines and polygon edges. True.
28. The algorithm fills the entire display screen every time it processes a scan line. False. It fills only the interior spans between intersection pairs on that scan line.
29. A polygon represented by six coordinate pairs has six listed vertices. True.
30. The scan-line polygon-filling algorithm repeats the scanning and filling process across the polygon's vertical extent. True.

## Part 3: short answer

31. Define polygon filling.
    Polygon filling is the process of coloring the interior region enclosed by a polygon after its boundary is drawn. Every pixel inside the boundary receives the specified fill color or pattern.

32. What is the difference between solid fill and pattern fill?
    Solid fill paints the whole interior of the polygon with a single uniform color. Pattern fill paints the interior with a predefined repeated pattern, such as lines, dots, or a geometric design, so the interior can show more than one color or shade.

33. Define a vertex in computer graphics.
    A vertex is a corner point of the polygon where two edges meet. In 2D it is stored as a coordinate pair $(x,y)$.

34. What is the meaning of an ordered list of vertices?
    The vertices are listed in the sequence in which they are connected along the boundary, clockwise or counterclockwise. Consecutive vertices in the list define the edges of the polygon.

35. Write the general mathematical representation of a polygon with $n$ vertices.
    $$P=\{(x_1,y_1),(x_2,y_2),\ldots,(x_n,y_n)\}$$
    The polygon $P$ is an ordered set of $n$ coordinate pairs, one pair per vertex.

36. What is the main idea behind the scan-line polygon-filling algorithm?
    The algorithm fills the polygon one horizontal scan line at a time. For each scan line it finds where the line crosses the polygon edges, then fills the spans between pairs of intersections. It repeats this over the polygon's vertical extent.

37. What is a horizontal scan line?
    A horizontal scan line is a row of pixels at a fixed $y$ value. The algorithm moves this line across the polygon to find where it intersects the edges.

38. Why does the scan-line algorithm calculate intersection points?
    The intersection points mark where the scan line enters and leaves the polygon. They give the start and end of each interior span, so the algorithm knows exactly which pixels to fill.

39. What is the role of the specified fill color in the scan-line algorithm?
    The specified fill color is the color the algorithm paints with. Once a span between two intersections is determined, every pixel in that span is set to this color.

40. List the main steps of the scan-line polygon-filling algorithm in the correct order.
41. Take a horizontal scan line, starting at the bottom of the polygon and moving up.
42. Find the intersections of the scan line with all polygon edges.
43. Sort the intersection $x$-coordinates.
44. Pair the sorted intersections and fill the horizontal span between each pair with the specified fill color.
45. Repeat for the next scan line until the top of the polygon.

46. Why must the vertices be listed in an appropriate order when representing a polygon?
    The order defines which pairs of vertices are connected by edges. A wrong order connects the wrong points and produces a different shape, so the filling follows the wrong boundary.

47. Explain how the scan-line algorithm determines which part of a horizontal line lies inside a polygon.
    The algorithm finds the $x$-coordinates where the scan line crosses the polygon edges, sorts them, and pairs them. Under the even-odd rule, the pixels between the first and second intersection and between the third and fourth lie inside the polygon. Those spans are filled, and the rest of the line is left unchanged.

## Part 4: practical and calculation

43. Polygon $P=\{(2,2),(7,2),(7,5),(2,5)\}$.
    (a) The polygon has 4 vertices, one for each listed pair.
    (b) The first vertex is $(2,2)$, so $x=2$ and $y=2$.
    (c) The shape is a rectangle. The width is $7-2=5$ and the height is $5-2=3$, with sides parallel to the axes and opposite sides equal.

44. Polygon $P=\{(1,1),(4,2),(5,6),(2,7)\}$.
    (a) Four coordinate pairs are listed.
    (b) The polygon has 4 vertices, one for each pair.
    (c) Each pair $(x_i,y_i)$ represents one vertex, a corner point of the polygon. The value $x_i$ gives its horizontal position and $y_i$ its vertical position.

45. Triangle with $A=(2,1)$, $B=(8,1)$, $C=(5,7)$.
    (a) The lowermost vertices are $A$ and $B$, both at $y=1$.
    (b) The topmost vertex is $C$, at $y=7$.
    (c) The vertical range runs from $y=1$ to $y=7$, a span of $7-1=6$ units.

46. A horizontal scan line intersects two edges of a polygon at $P_1=(3,4)$ and $P_2=(9,4)$.
    (a) Both points have $y=4$, so the scan line is $y=4$.
    (b) The two $x$-coordinates of the intersections are $x=3$ and $x=9$.
    (c) The interior span runs from $x=3$ to $x=9$, so the algorithm fills $3 \le x \le 9$ on that row.

47. A scan line intersects a polygon at four points with $x=2$, $x=5$, $x=8$, $x=11$, ordered, even-odd rule.
    (a) Four sorted intersections paired under the even-odd rule give $4/2=2$ interior spans.
    (b) The spans are $2 \le x \le 5$ and $8 \le x \le 11$.

48. A polygon has eight vertices.
    (a) One coordinate pair per vertex, so 8 pairs are required.
    (b) Each pair holds two values, so the total is $8 \times 2 = 16$ individual coordinate values.

49. A scan line intersects the left edge of a polygon at $x=2.5$ and the right edge at $x=7.5$.
    (a) The horizontal distance is $7.5-2.5=5$ units.
    (b) On the scan line $y=3$, the intersection points are $(2.5,3)$ and $(7.5,3)$.

50. A student draws horizontal spans before identifying the edge intersections.
    (a) The procedure is incorrect. The intersections tell the algorithm where each span starts and ends. Without them the student cannot know which part of the scan line lies inside the polygon, so the filled spans are arbitrary.
    (b) The correct sequence is to take a horizontal scan line, find its intersections with the polygon edges, sort the intersection $x$-coordinates, pair them, fill the span between each pair with the specified fill color, and repeat for the next scan line up to the top of the polygon.

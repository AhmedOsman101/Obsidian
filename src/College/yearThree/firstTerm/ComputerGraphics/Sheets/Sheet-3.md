---
title: Sheet 3
prev:
  text: "Sheet 2"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Sheets/Sheet-2"
next:
  text: "Sheet 4"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Sheets/Sheet-4"
---

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20241807                 |
| Section | 1                        |

# Computer Graphics - Sheet 3: Video Display Devices

## Multiple choice (1 to 20)

1. **B**. Electron gun. The gun fires the electron beam that draws the picture.
2. **C**. Phosphor coating. The coating glows at the point where the beam hits it.
3. **B**. Raster-scan display. A raster system scans every line from top to bottom, even where nothing is drawn.
4. **A**. To store pixel values representing the image. The screen is refreshed from these stored values.
5. **D**. 255. With 8 bits the scale runs from 0, which is black, to 255, which is white.
6. **B**. Random-scan display. The beam moves only along the lines that make up the picture.
7. **A**. Vector displays. The picture is a set of drawn lines, so these systems are called vector displays.
8. **A**. Red, green, blue.
9. **B**. To direct each electron beam toward the correct phosphor dots. The mask stops a beam from lighting the wrong color.
10. **C**. Red + green. Red and green light mixed at full strength give yellow.
11. **B**. Odd lines and even lines in separate passes. One pass draws half the lines, the next pass fills in the rest.
12. **B**. Non-interlaced scanning. Every line is drawn in one pass down the screen.
13. **B**. LCD monitor. It is a thin flat panel, while the other choices are CRT parts.
14. **B**. Emissive display. An emissive device generates the light inside the panel itself.
15. **A**. LCD. A backlight shines through liquid crystals that control how much light passes.
16. **C**. Lower power consumption in many designs. A CRT needs high voltage to drive its electron gun.
17. **A**. A completely virtual environment that simulates a 3D space.
18. **B**. It adds digital information to the real environment.
19. **B**. Wearing a headset to explore a simulated 3D museum.
20. **C**. Digital arrows appearing over a live camera view of a road. The real scene stays visible and the arrows are added on top of it.

## True or false (21 to 35)

21. The phosphor coating glows when the electron beam strikes it. True.
22. A raster-scan display draws only the outlines of the objects in the picture. False. That describes random-scan, a raster display scans every line of the screen and sets pixels from the frame buffer.
23. The frame buffer stores the pixel values shown on the screen. True.
24. In an 8-bit grayscale system the value 0 represents black. True.
25. Random-scan displays build pictures from line segments. True.
26. A color CRT produces different colors using red, green and blue. True.
27. The shadow mask stores the complete image before it is displayed. False. It only guides the three beams onto the correct phosphor dots, the frame buffer holds the image.
28. In interlaced scanning, odd and even lines are scanned in separate passes. True.
29. Non-interlaced scanning shows only half of the horizontal lines in each complete scan. False. It shows every line in one pass, splitting the lines over two passes is interlacing.
30. Flat-panel displays are generally thinner and lighter than traditional CRT displays. True.
31. All flat-panel displays produce light with the same technology. False. An LCD modulates a backlight while plasma and LED panels emit their own light.
32. LCD is classified as a non-emissive display in the traditional classification used in computer graphics. True.
33. Dead pixels are a common disadvantage of some flat-panel displays. True.
34. VR keeps the real environment as the main visible environment and only adds digital objects to it. False. That describes AR, VR replaces the real environment with a simulated one.
35. AR combines the real environment with digital information in real time. True.

## Short answer (36 to 40)

36. How a CRT produces a visible image.
    The electron gun fires a beam of electrons toward the screen. A deflection system steers the beam so it lands on any point of the screen. Where the beam hits, the phosphor coating glows and leaves a spot of light. The beam repeats the same pattern many times per second, so the spots merge into a steady picture.

37. Difference between raster-scan and random-scan displays.
    A raster-scan display sweeps the beam over the whole screen, line by line from top to bottom, and sets each pixel from the frame buffer. A random-scan display moves the beam only along the line segments of the picture and follows a stored display list. Raster handles filled and shaded images well, random-scan draws sharp lines quickly but cannot show realistic filled areas.

38. Role of the frame buffer in a raster-scan display.
    It holds the intensity or color value of every pixel on the screen. The display controller reads the buffer in scan order and converts each value into the signal that sets the brightness of the matching pixel. The image the viewer sees is whatever is stored in the buffer, redrawn on every refresh cycle.

39. Function of the three electron guns in a color CRT and their relation to RGB.
    Each gun fires a beam for one primary color. One beam excites the red phosphor dots, one the green dots and one the blue dots. The shadow mask keeps each beam aimed at its own dots. The three beams vary in strength, and the eye blends the three dot colors into one combined color at each position.

40. Difference between interlaced and non-interlaced scanning.
    Interlaced scanning draws the screen in two passes, first the odd-numbered lines and then the even-numbered lines. Non-interlaced scanning draws every line in a single pass from top to bottom. Interlacing halves the work per pass and was used to cut cost, but it can flicker, while non-interlaced scanning gives a steadier picture.

## Comparison and explanation (41 to 50)

41. How raster-scan and random-scan displays draw images.
    A raster display draws the entire screen in a fixed scan pattern, lighting pixels from the frame buffer whether or not they belong to an object. A random-scan display draws only the lines that form the picture, jumping the beam from one segment to the next and skipping empty areas. The raster image lives in the frame buffer, the random-scan image lives in a display list of line commands.

42. Emissive and non-emissive displays, with one example of each.
    An emissive display generates light inside the panel itself, a plasma panel is one example. A non-emissive display generates no light of its own and controls light coming from an outside source, an LCD is one example because it modulates a backlight.

43. Three advantages of flat-panel displays.
    They are thinner and lighter than a CRT, they use less power in most designs, and they produce little or no flicker and no X-ray radiation.

44. Two disadvantages of flat-panel displays.
    Some panels develop dead pixels, and a single dead pixel usually cannot be repaired. LCD types also lose contrast and color accuracy when viewed from an angle.

45. How varying the intensity of red, green and blue produces different colors in a color CRT.
    Each electron gun controls the brightness of its own phosphor color. Different intensity settings give different mixtures: red and green at full strength make yellow, red and blue make magenta, green and blue make cyan, and all three at full strength make white. With 8 bits per gun, each color has 256 intensity levels, so the screen can show about 16.7 million colors.

46. Why a CRT image must be refreshed repeatedly.
    The light from a phosphor spot fades within a fraction of a second after the beam passes. If the beam does not redraw the picture many times per second, the image fades and flickers. Refreshing the whole picture about 60 times per second keeps it visible and steady.

47. Total number of pixels in one frame at a resolution of $800 \times 600$.
    $800 \times 600 = 480{,}000$ pixels.

48. Why VR is described as an immersive technology, with one practical application.
    VR replaces the real surroundings with a simulated 3D environment, usually seen through a headset, and the display follows the user's head movements so the scene stays consistent from every direction. The user feels inside the scene instead of looking at it from outside. A practical application is pilot training in a flight simulator.

49. Main difference between VR and AR, with one example of each.
    VR replaces the real environment with a fully simulated one, while AR keeps the real environment and overlays digital content on it. A VR example is a headset tour of a simulated museum. An AR example is navigation arrows drawn over a live camera view of a street.

50. A smartphone camera shows a real classroom while digital labels and 3D objects appear over the camera image. Is this VR or AR?
    This is AR. The real classroom stays visible through the camera, and the labels and 3D objects are digital content added over the real view in real time. VR would replace the classroom with a simulated version instead of adding to it.

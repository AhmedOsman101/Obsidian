| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20241807                 |
| Section | 1                        |

# Sheet 1 solutions: introduction to Computer Graphics

## Part A: multiple choice

1. **B**. Creating, manipulating, storing, and displaying images.
2. **A**. Medical imaging.
3. **A**. $(x, y)$.
4. **C**. Depth.
5. **B**. Pixels.
6. **A**. JPEG.
7. **A**. Picture element.
8. **A**. Position and color/intensity.
9. **B**. 307,200 pixels. $640 \times 480 = 307{,}200$.
10. **D**. 3840 × 2160. $3840 \times 2160 = 8{,}294{,}400$ pixels, more than any other option.
11. **C**. Red, green, blue.
12. **D**. Red.
13. **B**. Additive color model. Colors are formed by adding light, not by subtracting it.
14. **C**. Yellow.
15. **D**. 256 intensity levels. $2^8 = 256$.
16. **B**. Black. Zero means no light.
17. **A**. The number of discrete values that can be represented.
18. **B**. A finite number of discrete levels.
19. **A**. The difference between the original value and the quantized value.
20. **B**. Hide the visible effect of quantization/banding. It tricks the eye into averaging neighboring pixels, it does not add real levels.

## Part B: true or false

21. Computer Graphics can be used to create games, animations, and movies. True.
22. 2D Graphics use three coordinates, $(x, y, z)$. False. 2D graphics use two coordinates, $(x, y)$.
23. 3D Graphics represent depth and spatial structure. True.
24. Raster Graphics are represented as a rectangular grid of pixels. True.
25. A pixel is the smallest addressable element of a raster image. True.
26. Increasing resolution generally allows an image to represent more spatial detail. True.
27. RGB stands for Red, Green, and Blue. True.
28. The RGB value $(255, 255, 255)$ represents black. False. It is white, black is $(0, 0, 0)$.
29. Red + Blue produces Magenta in the additive RGB model. True.
30. An 8-bit grayscale image has 256 possible intensity levels. True.
31. In an 8-bit grayscale image, 255 represents white. True.
32. Tone refers to the brightness or intensity level represented in an image. True.
33. Quantization increases the number of available intensity levels. False. Quantization limits values to a fixed finite set of levels, it does not add levels.
34. Quantization Error is the difference between the original value and the quantized value. True.
35. Dithering completely eliminates Quantization Error. False. Dithering hides the error by spreading it over neighboring pixels. The error still exists.

## Part C: questions and answers

36. What is Computer Graphics?
    The field of computer science that deals with creating, manipulating, storing, and displaying pictures on a computer.

37. Mention four applications of Computer Graphics.
    Medical imaging, video games, animation and movies, and computer-aided design (CAD).

38. What is the main difference between 2D and 3D Graphics?
    2D graphics use two coordinates, $(x, y)$, and represent flat objects. 3D graphics use three coordinates, $(x, y, z)$, which adds depth and spatial structure.

39. What is Raster Graphics?
    A way of representing an image as a rectangular grid of pixels, where each pixel stores a color or intensity value. JPEG and PNG files store raster images.

40. What is a Pixel?
    Short for picture element. It is the smallest addressable element of a raster image.

41. What information does a pixel contain?
    Its position in the grid and its color or intensity.

42. What is Image Resolution?
    The number of pixels in an image, given as width by height, such as 640 by 480. A $640 \times 480$ image has $307{,}200$ pixels, so higher resolution means more spatial detail.

43. What is the RGB Color Model?
    An additive color model that builds every color from red, green, and blue light. Each channel takes a value from 0 to 255, so $(0, 0, 0)$ is black and $(255, 255, 255)$ is white. Screens use this model.

44. What does the RGB value (255, 0, 0) represent?
    Pure red. The red channel is at full value, green and blue are off.

45. What is Bit Depth?
    The number of bits used to represent each pixel. It sets the number of discrete values an image can hold. With $n$ bits there are $2^n$ values.

46. How many intensity levels can an 8-bit grayscale image represent?
    $2^8 = 256$ levels, numbered 0 to 255.

47. What is Tone in an image?
    The brightness or intensity level represented in the image.

48. What is Tone Reproduction?
    The mapping of tones from an original scene or image to the range of tones an output device can show, so the displayed image keeps the brightness relationships of the original.

49. What is Quantization Error? Give an example.
    The difference between the original value and the quantized value. Example: a continuous brightness of 12.7 is quantized to the nearest 8-bit level, 13. The error is $13 - 12.7 = 0.3$.

50. What is the difference between Quantization and Dithering?
    Quantization maps each continuous value to one of a fixed set of discrete levels. It reduces storage needs but introduces error and can cause visible banding in smooth areas. Dithering arranges pixels of the available levels in patterns, or adds small noise, so the eye averages neighboring pixels and sees intermediate tones. Dithering does not remove quantization error or add real levels, it hides the banding.

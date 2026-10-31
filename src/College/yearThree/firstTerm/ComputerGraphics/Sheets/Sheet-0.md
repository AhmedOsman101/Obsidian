---
title: Sheet 0
prev:
  text: "Sheets"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Sheets/index"
next:
  text: "Sheet 1"
  link: "/College/yearThree/firstTerm/ComputerGraphics/Sheets/Sheet-1"
---

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20241807                 |
| Section | 1                        |

# Computer Graphics - Sheet 0: Image Quantization Lab

## What The Activity Asks

This sheet is a **practical activity**, not a question set. It applies the Lecture 1 material on bit depth, quantization, dithering, and posterization to one natural color image.

| Step | Task                                                                         |
| ---- | ---------------------------------------------------------------------------- |
| 1    | Choose one natural color image                                               |
| 2    | Convert it to **grayscale**                                                  |
| 3    | Create **4-bit**, **2-bit**, and **1-bit** versions                          |
| 4    | Reduce the number of intensity levels and observe the **quantization error** |
| 5    | Apply **dithering** and compare with the undithered version                  |
| 6    | Reduce the number of tones and observe **posterization**                     |

The report should compare the images and give 2 or 3 observations on image quality, loss of detail, quantization error, the effect of dithering, and posterization.

## Software

| Software        | Availability                 | Main use                                                     |
| --------------- | ---------------------------- | ------------------------------------------------------------ |
| Microsoft Paint | Usually on Windows           | Basic image editing                                          |
| Photos          | Usually on Windows 10 and 11 | Viewing and basic editing                                    |
| **GIMP**        | Needs installation           | Grayscale, bit depth, quantization, dithering, posterization |
| ImageJ          | Needs installation           | Image processing and analysis                                |
| Python + OpenCV | Needs installation           | Image processing from code                                   |

**GIMP** is the recommended tool because it can perform every step in the activity without writing code.

## Before The Lab

- Bring one natural color image.
- Install GIMP if it will be used.
- Save the original image before any change.
- Save every processing step as a separate file, so the versions can be compared side by side.

## What Each Bit Depth Means

The number of intensity levels is $2^{b}$ for a bit depth $b$. The **step** between neighbouring levels is $255/(2^{b}-1)$ on the 0 to 255 scale.

| Version | Levels | Level values            | Step | Maximum error (half a step) |
| ------- | ------ | ----------------------- | ---- | --------------------------- |
| 8-bit   | 256    | 0, 1, 2, ..., 255       | 1    | 0.5                         |
| 4-bit   | 16     | 0, 17, 34, 51, ..., 255 | 17   | 8.5                         |
| 2-bit   | 4      | 0, 85, 170, 255         | 85   | 42.5                        |
| 1-bit   | 2      | 0, 255                  | 255  | 127.5                       |

### Worked Example: One Pixel Through Every Version

Take a source pixel with intensity **137** and round it to the nearest available level.

| Version | Nearest level calculation              | Stored value | Error $137-\text{stored}$ |
| ------- | -------------------------------------- | ------------ | ------------------------- |
| 8-bit   | 137 is already a level                 | 137          | 0                         |
| 4-bit   | $137/17=8.06$, round to 8, $8\times17$ | 136          | 1                         |
| 2-bit   | $137/85=1.61$, round to 2, $2\times85$ | 170          | $-33$                     |
| 1-bit   | 137 is nearer 255 than 0               | 255          | $-118$                    |

The sign of the error matters less than its size. At 1 bit the stored value can be more than 100 levels away from the truth, which is why a 1-bit photo keeps its shapes and loses its shading.

## Model Report

The five points the activity asks for, with the observations a correct report should contain.

### Image Quality

The 8-bit grayscale image shows a continuous range of tones. The 4-bit version still looks like a photograph at normal viewing size but loses subtle gradients such as sky and skin. The 2-bit version looks like a poster, and the 1-bit version looks like a stencil. Quality falls with each reduction in level count, and the largest drop is between 2-bit and 1-bit, because 4 tones can still suggest a gradient while 2 tones cannot.

### Loss of Detail

Fine texture disappears before large shapes do. At 4-bit, noise in flat areas is smoothed away and small tonal differences merge into one band. At 2-bit, the boundary between two adjacent bands moves, so edges that were soft become hard. At 1-bit, only the outline survives, and any detail that depended on a mid-gray value is gone.

### Quantization Error

Error equals the difference between the original value and the stored level, so its maximum is half the step: **0.5** at 8-bit, **8.5** at 4-bit, **42.5** at 2-bit, and **127.5** at 1-bit. In a smooth gradient the error is constant inside each band and jumps at each boundary, which is why the eye sees stripes rather than random noise.

### Effect of Dithering

Dithering spreads the error over neighbouring pixels instead of rounding each pixel on its own. In a 1-bit image, a flat area of intensity 137 becomes a pattern in which about **54 percent** of the pixels are white, because $137/255\approx0.54$. At normal viewing distance the eye averages the pattern back to gray, so the gradient reappears. The error is still present pixel by pixel; it is no longer concentrated in visible bands.

### Posterization

Posterization is the visible banding that appears when too few tone levels are used. The 4-bit image shows **16** bands, the 2-bit image shows **4**, and the 1-bit image shows **2**. The bands are widest where the original gradient changes slowly, because a small change in the source does not cross a level boundary for a long distance.

> [!NOTE] What a good conclusion says
> Quantization lowers the storage needed per pixel: 8, 4, 2, and 1 bit per pixel for the four versions. The cost is error, and the error becomes visible as banding once the step is larger than the tone difference the eye can resolve. Dithering trades spatial noise for smoothness but does not recover the lost levels.

## Doing It With Python and OpenCV

GIMP is enough for the activity. This script produces all four versions and a dithered copy in one run.

```python
# Quantize a grayscale image to 4, 2, and 1 bit, with and without dithering
import cv2
import numpy as np

img = cv2.imread("photo.jpg", cv2.IMREAD_GRAYSCALE)

for bits in (4, 2, 1):
  levels = 2 ** bits
  step = 255 / (levels - 1)
  # Round each pixel to the nearest available level
  quant = np.round(img / step) * step
  cv2.imwrite(f"gray_{bits}bit.png", quant.astype(np.uint8))

# Floyd-Steinberg dithering to 1 bit
dith = img.astype(np.float32)
h, w = dith.shape
for y in range(h):
  for x in range(w):
    old = dith[y, x]
    new = 255.0 if old > 127.5 else 0.0
    err = old - new
    dith[y, x] = new
    # Push the error to the four unprocessed neighbours
    if x + 1 < w:
      dith[y, x + 1] += err * 7 / 16
    if y + 1 < h:
      if x > 0:
        dith[y + 1, x - 1] += err * 3 / 16
      dith[y + 1, x] += err * 5 / 16
      if x + 1 < w:
        dith[y + 1, x + 1] += err * 1 / 16

cv2.imwrite("gray_1bit_dither.png", dith.astype(np.uint8))
```

The error weights 7/16, 3/16, 5/16, and 1/16 add to 1, so the total brightness of the image is preserved even though every pixel is forced to black or white.

## Comparison Sheet To Fill In

| Version      | Levels | File size (KB) | Visible bands | Detail kept          | Dithering used |
| ------------ | ------ | -------------- | ------------- | -------------------- | -------------- |
| 8-bit gray   | 256    |                | none          | all                  | no             |
| 4-bit gray   | 16     |                | 16            | most                 | no             |
| 2-bit gray   | 4      |                | 4             | large shapes only    | no             |
| 1-bit gray   | 2      |                | 2             | outline only         | no             |
| 1-bit dither | 2      |                | none visible  | outline plus texture | yes            |

> [!NOTE] File size is not exactly proportional
> PNG compresses runs of equal values, so a 4-bit image of a smooth sky can be smaller than the bit math predicts, and a dithered 1-bit image is usually **larger** than the plain 1-bit one because the dither pattern breaks up the runs.

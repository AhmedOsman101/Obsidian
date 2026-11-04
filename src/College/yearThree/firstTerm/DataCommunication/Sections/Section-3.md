---
title: Section 3
prev:
  text: "Section 2"
  link: "/College/yearThree/firstTerm/DataCommunication/Sections/Section-2"
next:
  text: "Section 4"
  link: "/College/yearThree/firstTerm/DataCommunication/Sections/Section-4"
---

# Data Communication - Section 3: Serial Interfaces Lab

This deck is the practice companion to **Lecture 3** (Serial Communication Interfaces). It re-uses the same concepts but adds worked examples, timing calculations, and framing drills that the lecture only stated. It also corrects one parity typo from the lecture, which is called out where it appears. Read **Lecture 3** first for the interface specifications; this note focuses on the extra material.

## Why Serial Wins Over Parallel at Speed

**Skew** limits parallel buses: each wire has slightly different length and capacitance, so bits that leave together arrive at different times.

| Link              | Bits per clock | Clocks for 1 KB | Time at 1 MHz |
| ----------------- | -------------- | --------------- | ------------- |
| Parallel, 8 lines | 8              | 1024            | 1.024 ms      |
| Serial, 1 line    | 1              | 8192            | 8.192 ms      |
| Serial at 8 MHz   | 1              | 8192            | 1.024 ms      |

A serial line must be clocked 8 times faster to match an 8-line bus, and it can be, because it has **no skew** between wires to manage.

### Skew Tolerance at Different Clocks

| Clock   | Bit time | 5 ns skew is... | Verdict |
| ------- | -------- | --------------- | ------- |
| 10 MHz  | 100 ns   | 0.05 bit        | Fine    |
| 100 MHz | 10 ns    | 0.5 bit         | Risky   |
| 400 MHz | 2.5 ns   | 2 bits          | Corrupt |

**Takeaway.** Parallel wins when wires are short and clocks modest. Serial wins when distance or clock speed grows. That is why every long-distance standard in this course is serial. Modern fast links (SATA, PCIe, USB) are serial for the same reason: one lane clocked very high, with no skew to manage.

## Classifying Links by Family

| Link                                                 | Family                      | Why                                                |
| ---------------------------------------------------- | --------------------------- | -------------------------------------------------- |
| SD card read over a clock wire plus chip select      | **Synchronous** (SPI-style) | A shared clock times the data                      |
| PC COM port to GPS module at 9600 baud, TX/RX only   | **Asynchronous**            | No clock wire; start and stop bits frame each byte |
| Microcontroller peripheral in USART synchronous mode | **Synchronous**             | Clock travels with the data                        |
| Microcontroller to Bluetooth module over UART        | **Asynchronous**            | No clock; start/stop framing                       |

## Clock Drift: Why Synchronization Is Needed

The receiver must decide when each bit period begins and ends. If sender and receiver clocks differ, the sampling point drifts.

| Bits since last sync | Drift at 1% mismatch | Drift at 0.1% mismatch |
| -------------------- | -------------------- | ---------------------- |
| 10                   | 0.1 bit              | 0.01 bit               |
| 50                   | 0.5 bit              | 0.05 bit               |
| 100                  | 1 bit                | 0.1 bit                |
| 1000                 | 10 bit               | 1 bit                  |

Once drift reaches **half a bit**, the receiver samples the wrong bit.

- **Asynchronous answer:** resynchronize on every character. The start bit restarts timing, so drift never exceeds a few bits.
- **Synchronous answer:** share a clock (or clock the data), so drift cannot build up across thousands of bits.

## The Cost of Start, Parity, and Stop Bits

| Format | Frame bits | Data bits | Efficiency | Characters/s at 9600 |
| ------ | ---------- | --------- | ---------- | -------------------- |
| 8N1    | 10         | 8         | 80.0%      | 960                  |
| 8E1    | 11         | 8         | 72.7%      | 873                  |
| 8N2    | 11         | 8         | 72.7%      | 873                  |
| 8E2    | 12         | 8         | 66.7%      | 800                  |
| 7E1    | 10         | 7         | 70.0%      | 960                  |

**Worked check for 8N1.** Frame = 1 start + 8 data + 1 stop = 10 bits. Efficiency = $8/10 = 80\%$, so overhead = 20%. At 9600 baud: $9600/10 = 960$ characters per second.

A synchronous stream with about 5% overhead delivers roughly 95% of the line rate. Asynchronous buys simplicity at the price of overhead; synchronous buys efficiency at the price of clock distribution and framing complexity.

## SPI: Full-Duplex Swap Worked Out

Master and slave each hold a register. On every clock, one bit goes out on MOSI and one comes back on MISO, so the two registers **swap** contents over 8 clocks.

| Clock | MOSI | MISO | Master reg | Slave reg  |
| ----- | ---- | ---- | ---------- | ---------- |
| start | -    | -    | `10110010` | `01001101` |
| 1     | 1    | 0    | `01100100` | `10011011` |
| 2     | 0    | 1    | `11001001` | `00110110` |
| 3     | 1    | 0    | `10010010` | `01101101` |
| 4     | 1    | 0    | `00100100` | `11011011` |
| 5     | 0    | 1    | `01001001` | `10110110` |
| 6     | 0    | 1    | `10010011` | `01101100` |
| 7     | 1    | 0    | `00100110` | `11011001` |
| 8     | 0    | 1    | `01001101` | `10110010` |

After 8 clocks the master holds `4D` and the slave holds `B2`: a full-duplex swap.

**Throughput.** At SCLK = 8 MHz, reading 512 bytes = 4096 bits takes $4096 / 8 \times 10^6 = 512$ µs, ignoring command overhead.

### SPI Wiring Cost

| Slaves | Shared lines        | Select lines | Total wires (+GND) |
| ------ | ------------------- | ------------ | ------------------ |
| 1      | 3 (SCK, MOSI, MISO) | 1            | 4                  |
| 3      | 3                   | 3            | 6                  |
| 8      | 3                   | 8            | 11                 |

Each slave needs its own SS line, so SPI scales in wires per device.

## Quick Check 2: Extra Practice

- **Extra c.** Send 1000 bytes: 8N1 async at 9600 baud vs a sync stream at 9600 bit/s with 5% overhead. Async: $10000$ bits / 9600 = 1.04 s. Sync: $8000 / 0.95 \approx 8421$ bits / 9600 = 0.88 s. **Sync is faster.**
- **Extra d.** A long unshielded cable cannot safely carry SPI at high speed because noise and attenuation (Lecture 2) are not protected against, and the clock edges must stay exact.

## Configuring a Serial Port

Four settings both ends must agree on: start bit (always 1, logic 0), data bits (usually 8), parity (none/even/odd), stop bits (1 or 2).

**Mismatched settings.**

| Transmitter | Receiver  | Result                                                         |
| ----------- | --------- | -------------------------------------------------------------- |
| 9600, 8N1   | 9600, 8N1 | Correct decoding                                               |
| 9600, 8N1   | 4800, 8N1 | Each bit read twice as long, garbage and framing errors        |
| 9600, 8E1   | 9600, 8N1 | Parity bit read as a data or stop bit, wrong or framing errors |
| 9600, 8N2   | 9600, 8N1 | Usually works; the extra stop bit just lengthens the gap       |

## Anatomy of One Asynchronous Package

**Byte `B9 = 10111001`, even parity, 1 stop bit (8E1).**

```text
idle  start  D0  D1  D2  D3  D4  D5  D6  D7  Par  Stop  idle
  1      0    1   0   0   1   1   1   0   1    1     1     1
```

Transmission order: start, then D0 (LSB) through D7 (MSB), then parity, then stop. `B9` has five 1-bits, an odd count, so even parity adds a `1` to make six, an even total.

### The Four Parts

| Part            | Rule                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Start bit**   | Line idles HIGH (MARK). The start bit drops it LOW; this transition wakes the receiver and starts timing. Logic 0. |
| **Data bits**   | Usually 8 bits, sent **LSB first**. `10111001` goes out as `1,0,0,1,1,1,0,1`.                                      |
| **Parity bit**  | Optional. None, even, or odd.                                                                                      |
| **Stop bit(s)** | One or two bits, always HIGH (MARK). Mark the end and guarantee a minimum gap.                                     |

### Parity Table

| Byte | Binary     | # of 1s | Even parity bit | Odd parity bit |
| ---- | ---------- | ------- | --------------- | -------------- |
| `8B` | `10001011` | 4       | 0               | 1              |
| `8C` | `10001100` | 3       | 1               | 0              |
| `4D` | `01001101` | 4       | 0               | 1              |
| `5A` | `01011010` | 4       | 0               | 1              |
| `C3` | `11000011` | 4       | 0               | 1              |
| `F0` | `11110000` | 4       | 0               | 1              |
| `00` | `00000000` | 0       | 0               | 1              |
| `FF` | `11111111` | 8       | 0               | 1              |

> [!WARNING] Correction to the lecture's parity slide
> The lecture's slide text for `8C` with odd parity says "parity bit 1", but the rule and the bit table give **0**. Three 1-bits is already odd, so odd parity adds 0. This section's table agrees with the corrected value.

### How the Receiver Checks Parity

Sent: data `0,0,1,1,0,0,0,1` plus parity `1` (even parity, four 1s).

| Case                                    | Received data + parity | 1s counted | Even? | Verdict                      |
| --------------------------------------- | ---------------------- | ---------- | ----- | ---------------------------- |
| No error                                | `0,0,1,1,0,0,0,1 + 1`  | 4          | Yes   | Accepted, correct            |
| 1 bit flipped (D2: 1 to 0)              | `0,0,0,1,0,0,0,1 + 1`  | 3          | No    | Error detected               |
| 1 bit flipped (parity: 1 to 0)          | `0,0,1,1,0,0,0,1 + 0`  | 3          | No    | Error detected               |
| 2 bits flipped (D2: 1 to 0, D4: 0 to 1) | `0,0,0,1,1,0,0,1 + 1`  | 4          | Yes   | **Missed**, accepted wrongly |

**Lesson.** Parity says that something is wrong with an odd number of bits, not which bit, and it is blind to an even number of flips. Stronger codes (checksum, CRC) come in Lecture 5.

## Noise, Framing Errors, and Sampling Tolerance

A noise spike on an idle line looks like a start bit. The receiver wakes up and reads garbage until a stop bit check fails, producing a **framing error**.

**Sampling tolerance.** The start edge is at $t = 0$ and samples are taken at 0.5, 1.5, 2.5, ... 9.5 bit-times, the middle of each bit. The last sample is 9.5 bit-times from the edge, and it fails when accumulated drift reaches 0.5 bit.

$$\frac{0.5}{9.5} \approx 5.3\% \text{ maximum mismatch}$$

| Mismatch | Drift at last sample (9.5 bits) | Verdict               |
| -------- | ------------------------------- | --------------------- |
| 1%       | 0.095 bit                       | Safe                  |
| 3%       | 0.285 bit                       | Works, less margin    |
| 5%       | 0.475 bit                       | Marginal              |
| 6%       | 0.57 bit                        | Fails (framing error) |

## Extra Framing Examples

### ASCII 'A' and the 0x55 Test Pattern (8N1)

`'A' = 41h`, no parity, 1 stop:

```text
idle  start  D0  D1  D2  D3  D4  D5  D6  D7  Stop  idle
  1      0    1   0   0   0   0   0   1   0     1     1
```

Frame: `0 -> 10000010 -> 1`.

`0x55` test pattern, 8N1:

```text
idle  start  D0  D1  D2  D3  D4  D5  D6  D7  Stop  idle
  1      0    1   0   1   0   1   0   1   0     1     1
```

Frame: `0 -> 10101010 -> 1`. The alternating pattern makes every bit boundary visible, which is why `0x55` is used to test a link.

### 7-Bit ASCII 'J' With Parity

`'J' = 4Ah` as 7 data bits, even parity, 1 stop (7E1):

```text
idle  start  D0  D1  D2  D3  D4  D5  D6  Par  Stop  idle
  1      0    0   1   0   1   0   0   1    1     1     1
```

`1001010` has three 1s, so the even parity bit is `1`. Frame: `0 -> 0101001 -> 1 -> 1`.

`'J' = 4Ah` as 8 data bits, odd parity, 1 stop (8O1):

```text
idle  start  D0  D1  D2  D3  D4  D5  D6  D7  Par  Stop  idle
  1      0    0   1   0   1   0   0   1    0     0     1     1
```

`01001010` has three 1s, already odd, so the odd parity bit is `0`. Frame: `0 -> 01010010 -> 0 -> 1`.

### Decode a Received Frame

Received (8E1): `0 | 10100010 | 1 | 1`. What byte is it, and is parity OK?

1. Remove start and stop: data = `1,0,1,0,0,0,1,0` (LSB first).
2. Reverse to MSB first: `0,1,0,0,0,1,0,1` = `0100 0101`.
3. Convert: `0100 0101` = `45h` = **'E'**.
4. Check even parity: data has three 1s plus parity 1 = four, even. **Parity OK.**

### Quick Check 3: Framing Practice

| Byte, format        | Working                       | Frame in transmission order |
| ------------------- | ----------------------------- | --------------------------- |
| `4Dh`, odd, 1 stop  | `01001101`; four 1s, parity 1 | `0 -> 10110010 -> 1 -> 1`   |
| `5Ah`, even, 1 stop | `01011010`; four 1s, parity 0 | `0 -> 01011010 -> 0 -> 1`   |
| `C3h`, even, 1 stop | `11000011`; four 1s, parity 0 | `0 -> 11000011 -> 0 -> 1`   |
| `C3h`, odd, 1 stop  | four 1s, parity 1             | `0 -> 11000011 -> 1 -> 1`   |
| `F0h`, even, 1 stop | `11110000`; four 1s, parity 0 | `0 -> 00001111 -> 0 -> 1`   |
| `F0h`, odd, 1 stop  | four 1s, parity 1             | `0 -> 00001111 -> 1 -> 1`   |

Format: start, data bits LSB first, parity, stop. All frames are 11 bits long.

## Timing and Throughput

| Baud rate | Bit time | 8N1 character | Characters/s | 1 KB takes |
| --------- | -------- | ------------- | ------------ | ---------- |
| 1200      | 833.3 µs | 8.333 ms      | 120          | 8.533 s    |
| 2400      | 416.7 µs | 4.167 ms      | 240          | 4.267 s    |
| 9600      | 104.2 µs | 1.042 ms      | 960          | 1.067 s    |
| 19200     | 52.1 µs  | 0.521 ms      | 1920         | 0.533 s    |
| 115200    | 8.7 µs   | 0.087 ms      | 11520        | 0.089 s    |

**100-character message at 9600 baud:** $100 \times 10 = 1000$ bits / 9600 = 0.104 s, about 104 ms, imperceptible, as in Lecture 1's 33 ms example.

**Same message at 1200 baud:** 1000 bits / 1200 = 0.833 s, a noticeable pause. Lecture 2's lesson again: higher rates matter as messages grow.

_13 min read (source: 25 min)_

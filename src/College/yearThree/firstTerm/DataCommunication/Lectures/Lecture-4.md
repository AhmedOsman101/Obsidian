---
title: Lecture 4
prev:
  text: "Lecture 3"
  link: "/College/yearThree/firstTerm/DataCommunication/Lectures/Lecture-3"
next: false
---

# Data Communication - Lecture 4: Modulation and Signal Encoding

Lecture 3 covered **how bytes are framed** and which standard carries them. This lecture covers **how each bit becomes a waveform on the wire**, and how an analog source becomes bits in the first place. Three representation tasks run through everything:

| Task                               | Converter        | Question answered                                 |
| ---------------------------------- | ---------------- | ------------------------------------------------- |
| **Digital data to digital signal** | **Line encoder** | Which voltage levels or transitions mean 0 and 1? |
| **Digital data to analog signal**  | **Modem**        | Which carrier state carries this symbol?          |
| **Analog data to digital data**    | **Codec**        | How do we sample and code a continuous quantity?  |

A **line encoder** selects levels or transitions. A **modem** (modulator-demodulator) selects carrier states. A **codec** digitizes an analog source, and the resulting bits still need a signaling method.

## Four Terms That Must Stay Separate

| Term             | Definition                                                             |
| ---------------- | ---------------------------------------------------------------------- |
| **Data**         | The information to be communicated: text, bits, speech                 |
| **Signal**       | The physical electrical or electromagnetic representation of that data |
| **Signaling**    | Propagating a physical signal through a medium                         |
| **Transmission** | Communicating data through signal propagation and processing           |

The bit `1` may be represented by a voltage, a phase, or a pulse. The receiver must recover **both timing and the intended data values**, and those are two different problems.

## Modulation: Input, Carrier, Output

- The **modulating signal** $m(t)$ supplies the information.
- The **carrier** $c(t)$ provides a reference sinusoid at frequency $f_c$.
- The **modulator** changes carrier parameters to produce the transmitted signal $s(t)$.

```mermaid
flowchart LR
  M["m(t) input"] --> MOD[Modulator]
  C["c(t) carrier"] --> MOD
  MOD -->|s(t)| OUT[To channel]
```

Any sinusoid has exactly three parameters:

$$s(t) = A\cos(2\pi f t + \varphi)$$

| Parameter           | Meaning                 | Unit    |
| ------------------- | ----------------------- | ------- |
| **Amplitude** $A$   | Peak magnitude          | volts   |
| **Frequency** $f$   | Repetition rate         | hertz   |
| **Phase** $\varphi$ | Position within a cycle | radians |

Amplitude, frequency, and phase describe a sinusoid in the **time domain**. They are not three frequency-domain axes. Changing any one of them is a modulation method, which is exactly why ASK, FSK, and PSK exist.

> [!NOTE] Checkpoint A
>
> 1. A voice waveform becomes a sequence of binary sample codes. Which operation?
> 2. Bits select one of two carrier frequencies. Which operation?
> 3. A voltage arrives but no bit boundaries are known. What is missing?
>
> **Answers.** 1. **Digitization**: sample, quantize, encode. 2. **Binary FSK**. 3. **Timing or clock recovery**, the decision of when each bit interval begins and ends.

## Bit Rate, Bit Duration, and Baud

| Quantity            | Symbol | Definition                                       | Unit  |
| ------------------- | ------ | ------------------------------------------------ | ----- |
| **Data rate**       | $R$    | Data bits transmitted per second                 | bit/s |
| **Bit duration**    | $T_b$  | Time allocated to one bit                        | s     |
| **Modulation rate** | $D$    | Signal elements (symbols) transmitted per second | baud  |
| **Signal element**  |        | The shortest interval of the signaling code      | s     |

For a uniform bit stream:

$$T_b = \frac{1}{R}$$

> [!WARNING] Baud is not bit/s
> A **baud** counts signal elements per second. A **bit/s** counts data bits per second. They are equal only when each symbol carries exactly one bit. With $M$ states, one symbol can carry several bits.

### Bits per Symbol

For $M = 2^L$ equally timed, independently selectable states:

$$L = \log_2 M \qquad D = \frac{R}{L} \qquad R = D \times L$$

**Example.** $M = 4$ gives $L = 2$ bits per symbol. At $R = 4800$ bit/s, $D = 4800/2 = 2400$ baud.

> [!WARNING] Level count does not always give the bit count
> Three voltage levels do not automatically mean $\log_2 3$ independent bits per element. **AMI constrains pulse polarity**, so its levels are not freely selectable. **Manchester uses two half-bit intervals per data bit**, so its element rate must be derived from timing, not from a level count. Constrained block codes such as **8B6T** and **4D-PAM5** require their full mapping rules.

## Line Coding: Digital Data to Digital Signal

A line code must be judged on four things: **clock recovery, DC behaviour, bandwidth, and implementation cost**.

- **Clock recovery** needs transitions. A long run of identical bits with no edge leaves the receiver guessing where bit boundaries are.
- **DC** is a zero-frequency component. Long-term imbalance makes a code unsuitable for AC-coupled links such as transformers.
- **Bandwidth** grows when edges are faster or pulses shorter.
- **Cost** covers encoder and receiver complexity.

### The Families

| Family                 | Members                                    |
| ---------------------- | ------------------------------------------ |
| **Level-based**        | Unipolar NRZ, polar NRZ-L                  |
| **Transition-based**   | NRZ-I, Manchester, differential Manchester |
| **Three-level pulses** | AMI, pseudoternary                         |
| **Extensions**         | Polar RZ, 2B1Q, MLT-3, 8B6T, 4D-PAM5       |

### Unipolar NRZ

`1 = +V`, `0 = 0 V`, held for the whole bit. Simple, but it has a large DC component because zeros sit at zero volts, and long runs of either value give no edges.

### NRZ-L: Read the Absolute Level

Using the Stallings convention, **`0 = +V` and `1 = -V`**. The level is held throughout each bit interval, and the receiver decodes by comparing the received level with a decision threshold.

> [!WARNING] Convention trap
> Many textbooks and datasheets use the opposite mapping, `1 = +V`. Always state the convention. In this course NRZ-L means `0 = +V`, `1 = -V`, which is why `01001110` starts high and the ones go negative.

### NRZ-I: Read a Change

**NRZ-I (NRZI)** inverts at the beginning of a bit for `1`, and holds the level for `0`. Decoding compares each interval's level with the immediately preceding one.

Initial condition used in all examples: the preceding level is `+V`.

### Polar RZ: Return Within Each Bit

`1`: `+V` then `0`. `0`: `-V` then `0`. Each half lasts $T_b/2$. The guaranteed return to zero gives a mid-bit edge for clock recovery, at the cost of doubling the maximum element rate.

### Manchester: The Midpoint Carries Data

Every bit has a transition **halfway through** its interval. Convention: `0 = +V then -V`, `1 = -V then +V`. The receiver gets a predictable timing edge and reads its **direction** to decide the bit.

### Differential Manchester: Two Rules

1. **Always** invert at the midpoint. This is what supports clock recovery.
2. **`0`: also invert at the start of the bit. `1`: do not invert at the start.**

The bit decision therefore lives in the presence or absence of a **boundary** transition, while the midpoint transition is guaranteed.

### Biphase Benefits and Cost

| Property          | Consequence                                                   |
| ----------------- | ------------------------------------------------------------- |
| Midpoint edges    | Clock recovery works even through long runs of identical bits |
| Equal halves      | Ideal balanced waveform has no DC component                   |
| Half-bit elements | Maximum element rate is $2R$, with more bandwidth than NRZ    |
| Missing edge      | Reveals some errors, but cannot detect every corrupted bit    |

### AMI: Alternate the Marks

**AMI** = alternate mark inversion. Three levels: `+V`, `0`, `-V`.

- `0` becomes `0 V`.
- Each `1` becomes a pulse **opposite in polarity to the preceding 1 pulse**.

Starting condition in the examples: the preceding mark was `-V`, so the next mark is `+V`.

The alternating polarity keeps the running DC near zero without requiring equal numbers of zeros and ones. The weakness is that a long run of zeros produces no pulses and therefore no timing.

### Pseudoternary: Alternate the Zeros

The mirror image of AMI: `1` becomes `0 V`, and successive **zero** pulses alternate between `+V` and `-V`. Starting condition: the previous zero pulse was `-V`.

### AMI vs Pseudoternary

Both alternate nonzero pulses. The difference is **which data value receives the pulse**:

| Code              | `1`               | `0`               |
| ----------------- | ----------------- | ----------------- |
| **AMI**           | alternating pulse | `0 V`             |
| **Pseudoternary** | `0 V`             | alternating pulse |

### 2B1Q: Two Bits Choose One Level

Four levels, two bits per symbol, so the symbol rate halves. Teaching mapping:

| Bits | Level |
| ---- | ----- |
| `00` | $-3V$ |
| `01` | $-V$  |
| `11` | $+V$  |
| `10` | $+3V$ |

**Example.** `00111001` groups as `00 | 11 | 10 | 01` and transmits $-3V, +V, +3V, -V$: four symbols for eight bits. At $R = 8$ kbit/s with no overhead, $D = 8/2 = 4$ kbaud.

### MLT-3: Advance on Ones

Use the cycle $0 \to +V \to 0 \to -V \to 0 \to \ldots$

- `1`: advance one step around the cycle.
- `0`: hold the present state.

Initial state is `0`, so the first advance goes to `+V`. The zero state appears twice in the cycle, so direction matters when tracing.

**Worked trace for `11011001`:** start `0`; first `1` advances to `+V`; second `1` advances to `0`; `0` holds `0`; `1` advances to `-V`; `1` advances to `0`; `0` holds `0`; `0` holds `0`; `1` advances to `+V`.

**Why it exists.** In **100BASE-TX**, 100 Mbit/s payload passes through **4B/5B** coding to a 125 Mbit/s coded stream before MLT-3. For an all-ones coded input, one full MLT-3 cycle takes four coded bit intervals, so $125/4 = 31.25$ MHz is that pattern's repetition frequency. It is not a universal bandwidth limit.

### Other Codes to Recognise

| Code        | Rule                                                                   | Context    |
| ----------- | ---------------------------------------------------------------------- | ---------- |
| **8B6T**    | 8-bit block maps to six ternary symbols                                | 100BASE-T4 |
| **4D-PAM5** | Five-level signaling coordinated across four wire pairs                | 1000BASE-T |
| **B8ZS**    | Substitutes an 8-zero run with a pattern containing bipolar violations | T1 lines   |
| **HDB3**    | Same idea for 4-zero runs                                              | E1 lines   |

**B8ZS** and **HDB3** build on AMI: they replace troublesome zero runs with recognizable patterns. The intentional **bipolar violations** create timing edges that the decoder can recognise and undo. B8ZS targets eight zeros, HDB3 targets four.

## Worked Encoding: `01001110`

The textbook problem (Stallings 5.6) asks for all six core codes on the same input, with these starting conditions: preceding NRZI level `+V`, previous AMI mark `-V`, previous pseudoternary zero pulse `-V`, preceding differential Manchester level `+V`.

| Bit                  | 0     | 1     | 0     | 0     | 1     | 1     | 1     | 0     |
| -------------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **NRZ-L**            | +V    | -V    | +V    | +V    | -V    | -V    | -V    | +V    |
| **NRZ-I**            | +V    | -V    | -V    | -V    | +V    | -V    | +V    | +V    |
| **Manchester**       | +V -V | -V +V | +V -V | +V -V | -V +V | -V +V | -V +V | +V -V |
| **Diff. Manchester** | -V +V | +V -V | +V -V | +V -V | -V +V | +V -V | -V +V | -V +V |
| **AMI**              | 0     | +V    | 0     | 0     | -V    | +V    | -V    | 0     |
| **Pseudoternary**    | +V    | 0     | -V    | +V    | 0     | 0     | 0     | -V    |

### Step-by-Step Checks

**NRZ-L.** Bit 0 maps to `+V`, bit 1 to `-V`, held for the whole interval. No return inside a bit.

**NRZ-I.** Start `+V`. Bit `0` holds, bit `1` inverts at the boundary:

| Step | Bit | Action | Level after |
| ---- | --- | ------ | ----------- |
| 1    | 0   | hold   | +V          |
| 2    | 1   | invert | -V          |
| 3    | 0   | hold   | -V          |
| 4    | 0   | hold   | -V          |
| 5    | 1   | invert | +V          |
| 6    | 1   | invert | -V          |
| 7    | 1   | invert | +V          |
| 8    | 0   | hold   | +V          |

**Manchester.** `0` gives `+V` then `-V`; `1` gives `-V` then `+V`. The middle edge is the data.

**Differential Manchester.** Trace state, applying the boundary rule first, then the mandatory mid-bit inversion:

| Bit | Start level | Boundary inversion? | Level after boundary | Mid inversion | Cell   |
| --- | ----------- | ------------------- | -------------------- | ------------- | ------ |
| 0   | +V          | yes (bit 0)         | -V                   | +V            | -V, +V |
| 1   | +V          | no (bit 1)          | +V                   | -V            | +V, -V |
| 0   | -V          | yes                 | +V                   | -V            | +V, -V |
| 0   | -V          | yes                 | +V                   | -V            | +V, -V |
| 1   | -V          | no                  | -V                   | +V            | -V, +V |
| 1   | +V          | no                  | +V                   | -V            | +V, -V |
| 1   | -V          | no                  | -V                   | +V            | -V, +V |
| 0   | +V          | yes                 | -V                   | +V            | -V, +V |

**AMI.** Previous mark `-V`, so the first `1` (bit 2) becomes `+V`. Marks then alternate `+V, -V, +V, -V`; zeros stay at `0 V`.

**Pseudoternary.** `1` becomes `0 V`. Previous zero pulse `-V`, so the first `0` (bit 1) is `+V`, and zero pulses alternate `+V, -V, +V, -V`.

## Decoding Activity

**Given.** A unipolar waveform with MARK = `+V` = `1` and SPACE = `0 V` = `0`. Eight numbered cells read `+V, 0, 0, +V, +V, 0, 0, +V`. Outside those cells the line is idle.

**Decode.** The levels map directly to **`10011001`**.

Now redraw in three codes:

| Bit            | 1     | 0     | 0     | 1     | 1     | 0     | 0     | 1     |
| -------------- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **NRZ-L**      | -V    | +V    | +V    | -V    | -V    | +V    | +V    | -V    |
| **Manchester** | -V +V | +V -V | +V -V | -V +V | -V +V | +V -V | +V -V | -V +V |
| **Polar RZ**   | +V, 0 | -V, 0 | -V, 0 | +V, 0 | +V, 0 | -V, 0 | -V, 0 | +V, 0 |

> [!NOTE] Checkpoint B
>
> 1. Which guarantees a midpoint edge: NRZ-I, Manchester, or AMI?
> 2. An AMI trace has two successive positive nonzero marks. What is wrong?
> 3. A link loses timing on long zero runs. Does changing NRZ-L to NRZ-I guarantee a solution?
>
> **Answers.** 1. **Manchester**, because a transition is required at every midpoint. 2. A **bipolar violation**: successive active marks must alternate sign, so either a bit was corrupted or the encoder is faulty. The error location is not uniquely known. 3. **No.** NRZ-I holds its level on zeros, so a long zero run still has no edges. A code with guaranteed transitions, or a substitution scheme such as B8ZS, is needed.

## Carrier Modulation: Digital Data to Analog Signal

A **modem** maps bits onto carrier states, and the receiver estimates which state was sent to recover the bits. The channel is **bandpass**, so the signal must be shifted up to a carrier frequency.

### ASK: Change the Amplitude

Binary on-off keying:

$$1 \to A\cos(2\pi f_c t) \qquad 0 \to 0$$

Amplitude carries the information. For input `10110`, the carrier is switched on, off, on, on, off.

> [!WARNING] ASK's weakness
> **Channel gain changes make amplitude decisions harder.** If the received level drifts, a threshold set at the transmitter no longer separates on from off. This is why ASK is rarely used alone on fading or long links.

### BFSK: Select One of Two Frequencies

$$1 \to A\cos(2\pi f_1 t + \theta_1) \qquad 0 \to A\cos(2\pi f_0 t + \theta_0)$$

Amplitude stays constant and the **frequency** changes. FSK does not keep phase constant over time, so the phases $\theta$ only maintain the chosen continuity convention. For `10110` with three cycles per bit for `1` and one for `0`, the receiver counts cycles per equal interval.

### BPSK: Select Phase at Fixed Frequency

$$1 \to A\cos(2\pi f_c t) \qquad 0 \to -A\cos(2\pi f_c t)$$

The two states differ by $\pi$ radians, that is **180°**. Amplitude magnitude and frequency are fixed; the **sign or phase** identifies the bit.

### DPSK: Encode the Phase Difference

Convention: `0` keeps the preceding phase, `1` adds 180°. Reference phase is 0°.

| Bit | Rule    | Phase |
| --- | ------- | ----- |
| 1   | add 180 | 180°  |
| 0   | keep    | 180°  |
| 1   | add 180 | 0°    |
| 1   | add 180 | 180°  |
| 0   | keep    | 180°  |

For `10110`: **180°, 180°, 0°, 180°, 180°**. A differential receiver compares neighbouring symbols rather than an absolute reference, which removes the need to recover an absolute carrier phase.

### Compare ASK, BFSK, BPSK

| Scheme   | Parameter changed | States | Bits per symbol | Robustness note                  |
| -------- | ----------------- | ------ | --------------- | -------------------------------- |
| **ASK**  | Amplitude         | 2      | 1               | Vulnerable to gain variation     |
| **BFSK** | Frequency         | 2      | 1               | Immune to amplitude drift        |
| **BPSK** | Phase             | 2      | 1               | Most robust of the three per bit |

> [!NOTE] Textbook practice 5.11: encode `01100`
> ASK (1 = on): **off, on, on, off, off**.
> BFSK (1 = high frequency): **low, high, high, low, low**.
> BPSK (1 = 0°, 0 = 180°): **180°, 0°, 0°, 180°, 180°**.
> Draw five equal bit cells, label the input above, and keep one time scale for all three.

### QPSK: Four Phases, Two Bits

Four phases 90° apart carry **2 bits per symbol**. Using the Gray mapping shown in the lecture:

| Bits | Phase |
| ---- | ----- |
| `00` | 45°   |
| `01` | 135°  |
| `11` | 225°  |
| `10` | 315°  |

Gray mapping matters because adjacent constellation points differ by one bit, so a small noise error causes only a single-bit mistake.

**Worked example.** Given $D = 2400$ baud and $M = 4$: $L = \log_2 4 = 2$ bits per symbol, so $R = 2400 \times 2 = 4800$ bit/s. Check: $4800/2 = 2400$ symbols/s with no coding overhead.

### QAM: Two Orthogonal Components

$$s(t) = I(t)\cos(2\pi f_c t) + Q(t)\sin(2\pi f_c t)$$

$I$ and $Q$ independently select amplitudes on carriers **90° apart**, and their sum forms one transmitted waveform at the same carrier frequency. QAM is therefore a combination of amplitude and phase modulation.

**Square 16-QAM** uses 4 I levels and 4 Q levels, giving 16 states and **4 bits per symbol**. With each axis mapped `-3 -> 00`, `-1 -> 01`, `+1 -> 11`, `+3 -> 10`, the point at $I = -3$, $Q = +1$ carries **`0011`**.

**Worked example.** Given $R = 9600$ bit/s and $M = 16$ independent states: $L = \log_2 16 = 4$, so $D = 9600/4 = 2400$ baud. Check: four bits at each of 2400 symbol times delivers 9600 bit/s.

### More States: Rate Against Reliability

- Increasing $M$ increases **bits per symbol**.
- At a fixed bit rate, more states **lower the symbol rate**, which can reduce bandwidth.
- At fixed bandwidth, more states allow a **higher bit rate**.
- At fixed average power, denser MPSK and QAM states are **harder to distinguish in noise**.

This is the central trade of digital modulation: spectral efficiency bought with noise margin.

> [!NOTE] Checkpoint C
>
> 1. Which carries 2 bits/symbol: BPSK, QPSK, or 8-PSK?
> 2. If $D = 3000$ baud and $M = 8$, what is $R$ with no overhead?
> 3. A link suffers amplitude gain fluctuations; both schemes have adequate bandwidth. Why might BFSK be preferred to on-off ASK?
>
> **Answers.** 1. **QPSK**: four states encode 2 bits. BPSK encodes 1, 8-PSK encodes 3. 2. $R = 3000 \times \log_2 8 = 3000 \times 3 = \mathbf{9000}$ bit/s. 3. BFSK decides **frequency**, not an amplitude threshold, so gain variation cannot masquerade as a different symbol. Actual performance still depends on receiver design and noise.

## Bandwidth Models

Using the textbook pulse-shaping model, where $B_T$ is transmission bandwidth, $R$ is bit/s, $D$ is baud, and $r$ is the filtering excess factor ($0 < r < 1$):

| Scheme        | Model                                     |
| ------------- | ----------------------------------------- |
| **ASK, BPSK** | $B_T = (1+r)R$                            |
| **MPSK**      | $B_T = \dfrac{(1+r)R}{\log_2 M} = (1+r)D$ |
| **MFSK**      | $B_T = \dfrac{(1+r)MR}{\log_2 M}$         |

For binary MFSK, $M = 2$ gives $B_T = 2(1+r)R$, twice the ASK figure for the same bit rate.

> [!WARNING] These are textbook models
> Arbitrary BFSK tone spacing needs a matching spectral model, so do not reuse the MFSK formula blindly. The ideal endpoints of $r$ are used in some problems, but a real design also needs filtering tolerance and guard margin.

### Worked Bandwidth Comparison

Given $R = 9600$ bit/s and $r = 0.5$, using the MPSK model:

| Scheme    | $M$ | $L$ | Calculation           | $B_T$     |
| --------- | --- | --- | --------------------- | --------- |
| **BPSK**  | 2   | 1   | $1.5 \times 9600 / 1$ | 14,400 Hz |
| **QPSK**  | 4   | 2   | $1.5 \times 9600 / 2$ | 7200 Hz   |
| **8-PSK** | 8   | 3   | $1.5 \times 9600 / 3$ | 4800 Hz   |

More efficiency requires adequate noise margin, which is why you cannot simply keep raising $M$.

Also, given $R = 2400$ bit/s and $r = 0.5$: ASK or BPSK needs 3600 Hz, while the binary MFSK model needs 7200 Hz.

### Textbook Practice 5.16: Channel Fit

**Given.** A channel spans 600 Hz to 3000 Hz, giving $B_T = 2400$ Hz. With $r = 1$, test 2400 bit/s QPSK and 4800 bit/s eight-level signaling.

| Scheme    | $L$ | Calculation         | Required $B_T$ | Fits 2400 Hz?                       |
| --------- | --- | ------------------- | -------------- | ----------------------------------- |
| **QPSK**  | 2   | $2 \times 2400 / 2$ | 2400 Hz        | Yes, exactly at the idealized limit |
| **8-PSK** | 3   | $2 \times 4800 / 3$ | 3200 Hz        | No                                  |

The QPSK case fits only because the model is idealized. A practical design must also allow filtering tolerance, guard margin, and an acceptable error rate, so "fits exactly" means "does not really fit".

## PCM: Analog Data to Digital Data

A **codec** works in both directions. Encoding goes analog input, samples, quantized values, binary codes. Decoding goes codes, reconstructed sample levels, filtered analog output. The resulting bits then use a line encoder or a modem.

### Three Different Operations

| Operation        | What it discretizes | Result                                        |
| ---------------- | ------------------- | --------------------------------------------- |
| **Sampling**     | **Time**            | Measurements $x(t)$ at regular instants       |
| **Quantization** | **Amplitude**       | One permitted reconstruction level per sample |
| **Encoding**     | Nothing, it labels  | A binary code for the chosen level            |

Keeping these apart is the single most examinable point in this part. A finer quantizer cannot fix aliasing, because aliasing is lost **frequency** information, not lost amplitude precision.

### The Sampling Theorem

For a baseband signal bandlimited to $B$ Hz, **uniform sampling at $f_s > 2B$** is sufficient for ideal reconstruction. The sampling interval is $T_s = 1/f_s$.

> [!WARNING] $f_s = 2B$ is a boundary, not a design rule
> Equality is an ideal mathematical limit that needs special care and infinite filter sharpness. Practical designs sample **above** $2B$ and filter before sampling to limit out-of-band content, leaving a transition margin.

### Aliasing: Different Waves, Same Samples

At $f_s = 8000$ samples/s, a **5000 Hz** cosine and a **3000 Hz** cosine produce **identical samples**, because $8000 - 5000 = 3000$. The 5000 Hz wave folds down onto 3000 Hz.

In the lecture figure the sample interval is 125 µs over a 1 ms window. A **prefilter** must reject the unwanted 5 kHz component before the sampler, or the information is destroyed irreversibly.

$$f_{\text{alias}} = |f - k f_s|$$

### PCM Quantization Example

**Given.** Input range 0 V to 4 V, **3 bits per sample**, 8 levels, so the step size is:

$$\Delta = \frac{4 - 0}{2^3} = 0.5 \text{ V}$$

Midpoint reconstruction levels run 0.25, 0.75, 1.25, 1.75, 2.25, 2.75, 3.25, 3.75 V.

| Sample (V) | Nearest level (V) | Level index | Code  |
| ---------- | ----------------- | ----------- | ----- |
| 0.2        | 0.25              | 0           | `000` |
| 1.6        | 1.75              | 3           | `011` |
| 2.4        | 2.25              | 4           | `100` |
| 3.9        | 3.75              | 7           | `111` |

The serialized stream is `000 | 011 | 100 | 111`.

### Resolution: Error and Bit Cost

Within range, a **midpoint uniform quantizer** has $|\text{error}| \le \Delta/2$. Here $\Delta = 0.5$ V, so $|\text{error}| \le 0.25$ V.

- **Overload** occurs when the signal exceeds the quantizer range, and the bound no longer holds.
- Adding one bit **doubles the levels** and **halves $\Delta$** over the same input range, at the cost of a higher PCM bit rate if $f_s$ is fixed.

### PCM Bit Rate

$$R_b = f_s \times n \qquad Q = 2^n \qquad n = \lceil \log_2 Q \rceil$$

where $f_s$ is samples/s, $n$ is bits/sample, $Q$ is the number of representable levels, and $R_b$ is bit/s. This assumes no compression, framing, error control, or other link overhead.

### Worked PCM Examples

**Filtered voice.** Voice filtered below 4000 Hz, $f_s = 8000$ samples/s, $n = 8$ bits/sample.

$$Q = 2^8 = 256 \qquad R_b = 8000 \times 8 = 64{,}000 \text{ bit/s} = 64 \text{ kbit/s}$$

Check: each 125 µs sample interval produces one 8-bit code. This is a PCM payload rate, not a universal bandwidth limit or an unfiltered human-voice figure.

**A new PCM source.** $B = 10$ kHz, 1024 levels, chosen $f_s = 24$ ksample/s.

Sampling check: $24 > 2 \times 10 = 20$, so the sufficient condition holds.
$n = \log_2 1024 = 10$ bits/sample.
$R_b = 24{,}000 \times 10 = 240{,}000$ bit/s = **240 kbit/s**.
Check: $240{,}000 / 10 = 24{,}000$ samples/s.

**Historical television example.** $B = 4.6$ MHz and 10 bits/sample.

| Approach                 | $f_s$         | $R_b$      |
| ------------------------ | ------------- | ---------- |
| Ideal $2B$ illustration  | 9.2 Msample/s | 92 Mbit/s  |
| Chosen practical example | 10 Msample/s  | 100 Mbit/s |

These are uncompressed illustrative PCM rates, not a claim about modern television services.

### Reconstructing the Analog Output

Decode each word into its reconstruction level, form a continuous-time output, then apply a **low-pass filter** to suppress sampling images. With ideal bandlimiting and unquantized noiseless samples, reconstruction can be exact. Finite quantization, noise, overload, and decision errors all prevent a general exact-recovery claim.

### Digital Regeneration: Useful but Conditional

A **regenerator** decides which symbols were sent and generates a fresh waveform. Correct decisions avoid repeatedly amplifying analog noise along the path. **Wrong decisions create data errors**, and quantization loss at the source remains regardless. **Compression** reduces the required bit rate; it does not create physical channel bandwidth.

> [!NOTE] Checkpoint D
>
> 1. Which controls aliasing risk: sample rate or bits/sample?
> 2. Which controls the number of amplitude levels?
> 3. At $f_s = 6000$ samples/s and $n = 6$, find the PCM payload rate.
> 4. Can a finer quantizer repair two frequencies that already alias to the same samples?
>
> **Answers.** 1. **Sample rate**, together with pre-sampling bandlimiting. 2. **Bits/sample**, since $Q = 2^n$. 3. $R_b = 6000 \times 6 = 36{,}000$ bit/s = **36 kbit/s** without overhead. 4. **No.** Increasing amplitude precision cannot restore frequency information already lost to aliasing.

### Textbook Practice 5.21: Quantization SNR

**Given.** Audio spans 300 Hz to 3000 Hz and is sampled at 7000 samples/s. Target quantization SNR is **30 dB** for a uniform quantizer.

The textbook approximation for an ideal full-scale sinusoid is:

$$\mathrm{SNR}_q \approx 6.02n + 1.76 \text{ dB}$$

1. Solve $6.02n + 1.76 \ge 30$, so $n \ge 28.24/6.02 \approx 4.69$.
2. Round up to $n = 5$ bits/sample, giving $Q = 2^5 = 32$ levels.
3. $R_b = 7000 \times 5 = 35{,}000$ bit/s = **35 kbit/s**.

Checks: $f_s = 7000 > 2 \times 3000 = 6000$, so sampling is adequate. Achieved $\mathrm{SNR}_q \approx 6.02(5) + 1.76 = 31.86$ dB, which meets the 30 dB target. Rounding down to 4 bits would give 25.84 dB and fail.

## Final Review

| Task                                                                                    | Worked Answer                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Define **baud** and distinguish it from bit/s                                           | Baud counts signal elements per second; bit/s counts data bits per second. Mapping and coding determine the relation: $R = D\log_2 M$.                                                                                |
| Why do AMI mark pairs reduce DC without equal counts of 0s and 1s?                      | Successive active marks use equal and opposite pulses, so their areas cancel. Zeros contribute no pulse area. Unmatched end pulses leave only a bounded finite-window imbalance.                                      |
| A claimed Manchester waveform lacks a midpoint edge in one cell. Valid?                 | **No.** Every Manchester cell must contain its defined middle transition. A missing edge is a code violation, not a decoding ambiguity.                                                                               |
| Find $D_{max}$ for 2 Mbit/s differential Manchester.                                    | Half-bit elements, so $D_{max} = 2R = \mathbf{4}$ Mbaud.                                                                                                                                                              |
| An 8-state independent alphabet runs at 3000 baud. Find $R$.                            | $L = \log_2 8 = 3$, so $R = 3000 \times 3 = \mathbf{9000}$ bit/s.                                                                                                                                                     |
| $B = 3400$ Hz, $Q = 128$, $f_s = 8000$ samples/s. Find PCM rate and explain the choice. | $n = \log_2 128 = 7$, so $R_b = 8000 \times 7 = \mathbf{56{,}000}$ bit/s. Sampling check: $8000 > 6800$ Hz. The ideal $2B$ boundary would give $6800 \times 7 = 47.6$ kbit/s, but 8000 is the stated feasible choice. |

_29 min read (source: 42 min)_

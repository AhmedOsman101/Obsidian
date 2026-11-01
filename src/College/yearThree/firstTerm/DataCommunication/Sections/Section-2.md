---
title: Section 2
prev:
  text: "Section 1"
  link: "/College/yearThree/firstTerm/DataCommunication/Sections/Section-1"
next:
  text: "Section 3"
  link: "/College/yearThree/firstTerm/DataCommunication/Sections/Section-3"
---

# Data Communication - Section 2: Signals, Impairments, and Capacity

This deck drills Lectures 1 and 2 on the technical side: how data becomes a signal, what the channel does to it, and how fast it can carry data in theory. Four blocks: signals, impairments, channel capacity, and worked examples.

## How Data Is Made to Travel

```
Data -> Encoder -> Signal in the medium -> Decoder -> Data
```

| Element     | Definition                                                                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Signal**  | The physical, measurable quantity, usually voltage, current, or an electromagnetic wave, that carries data from transmitter through medium to receiver |
| **Encoder** | Maps each piece of data onto a voltage level, frequency, or light intensity                                                                            |
| **Decoder** | Reverses the mapping at the receiver                                                                                                                   |

**Why conversion is unavoidable.** Numbers, characters, and sound cannot move through a wire or the air as they are. They must become a pattern of a physical quantity that changes over time.

_Example._ Speaking into a telephone: the microphone converts your voice, a sound wave, into a varying electrical voltage. That varying voltage is the signal.

## Analog and Digital Signals

### Analog

**Definition.** Varies **continuously and smoothly** over time, taking any value in a range and never jumping instantly.

**Why it exists.** Many real quantities, such as sound pressure, temperature, and light intensity, are continuous, so an analog signal represents them with no conversion.

Still used in AM/FM radio, older telephone local loops, and many sensors before digitizing.

### Digital

**Definition.** Takes only a **limited set of discrete values**, usually two: HIGH for binary 1, LOW for binary 0, switching abruptly.

**Why it exists.** Computers store information as bits, so a digital signal represents them directly as fixed levels.

### Comparison

| Criterion              | Analog                             | Digital                                |
| ---------------------- | ---------------------------------- | -------------------------------------- |
| **Values allowed**     | Continuous range                   | A fixed set, usually 2                 |
| **Effect of noise**    | Noise accumulates permanently      | Often detected and corrected           |
| **Regeneration**       | Only **amplified**, noise included | Fully **regenerated**, noise removed   |
| **Equipment**          | Simpler for one direct link        | Needs encode/decode, but scales better |
| **Typical bandwidth**  | Depends on the application         | Depends on the application             |
| **Typical modern use** | Some sensors, broadcast radio      | Networks, telephony, Ethernet          |

> [!NOTE] "Analog" does not mean old or bad
> It means the signal's shape directly mirrors a continuously varying quantity. FM radio is still analog today and still works.

### Why Digital Wins: Regeneration Beats Amplification

| Link        | What the repeater does            | Result                                                   |
| ----------- | --------------------------------- | -------------------------------------------------------- |
| **Analog**  | Amplifies the incoming signal     | Bigger signal **and** bigger noise; quality only worsens |
| **Digital** | Decides "1 or 0?" and regenerates | A brand-new clean copy; noise does not accumulate        |

Regeneration works as long as the noise has not corrupted a bit so badly that the repeater decides wrongly.

> [!WARNING] Digital does not mean error-free
> Digital signals do suffer errors. They are simply much easier to **detect and correct** than analog distortion. This is the whole argument for digital, not a claim of perfection.

## Four Combinations of Data and Signal

| Data type | Signal type | Converter           | Example                                                           |
| --------- | ----------- | ------------------- | ----------------------------------------------------------------- |
| Analog    | Analog      | Telephone           | Voice sound waves become a continuously varying electrical signal |
| Digital   | Analog      | **Modem**           | Binary voltage pulses are modulated onto a carrier frequency      |
| Analog    | Digital     | **Codec**           | Analog input is sampled and converted into a bit stream           |
| Digital   | Digital     | Digital transceiver | Digital data becomes a sequence of voltage pulses                 |

## Sending the Letter "A" as Text

**Text** becomes bits through **IRA** (International Reference Alphabet, also called ASCII). **Images** become pixels with $N$ bits each, often compressed afterwards.

For `A`, the **7-bit IRA code is `1000001`**. With **even parity**, the 7-bit code already contains two 1-bits, an even count, so the parity bit is **`0`**. The transmitted 8-bit group is therefore:

```text
0 1 0 0 0 0 0 1
^ parity bit (even parity, so 0)
  ^ 7-bit IRA code for 'A' = 1000001
```

### Digital Advantages and Disadvantage

| Advantages                             | Disadvantage                                                                                         |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Cheaper                                | Suffers more from **attenuation**: the sharp square edges are rounded off and weakened over distance |
| Less susceptible to noise interference |                                                                                                      |

That single disadvantage is why a digital link needs repeaters at regular intervals, while an analog link can survive a longer run with one amplifier.

## Classification Drill

| Item                              | Answer  | Justification                                                                                               |
| --------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| Old-style FM radio broadcast      | Analog  | The radio wave's frequency varies continuously with the sound wave; that is what frequency modulation means |
| Fibre-optic home broadband        | Digital | Data travels as discrete on/off light pulses representing bits                                              |
| Traditional analog telephone line | Analog  | A continuously varying voltage mirrors the caller's voice waveform directly                                 |
| Bluetooth audio to earbuds        | Digital | A radio carrier is used, but the audio is sampled into bits before transmission                             |

> [!WARNING] The trap
> **Wireless is not automatically analog.** Always ask how the **information** is represented, not how it is carried. Bluetooth uses radio but sends bits.

## The Sine Wave and Its Parameters

$$s(t) = A\sin(2\pi f t)$$

| Parameter              | Meaning                                          | Unit       |
| ---------------------- | ------------------------------------------------ | ---------- |
| **Peak amplitude** $A$ | Maximum strength of the signal                   | volts      |
| **Frequency** $f$      | Rate at which the signal repeats                 | hertz (Hz) |
| **Period** $T$         | Time for one repeat, $T = 1/f$                   | seconds    |
| **Phase** $\varphi$    | Relative position in time within a single period | radians    |

Amplitude changes the height, frequency changes the tightness of the cycles, and phase slides the whole wave left or right in time.

## Wavelength

$$\lambda = vT \qquad \lambda f = v$$

For a signal travelling at the speed of light, $v = c = 3 \times 10^8$ m/s.

| Signal            | Frequency $f$ | Period $T = 1/f$ | Wavelength $\lambda = c/f$ |
| ----------------- | ------------- | ---------------- | -------------------------- |
| Voice-band tone   | 4 kHz         | 0.25 ms          | 75 km                      |
| Medium-wave radio | 1 MHz         | 1 µs             | 300 m                      |
| FM radio          | 100 MHz       | 10 ns            | 3 m                        |
| Wi-Fi             | 2.4 GHz       | ≈ 0.42 ns        | ≈ 12.5 cm                  |

> [!NOTE] Why the table matters
> Higher frequency gives a shorter wavelength and therefore a smaller antenna, but generally **more attenuation**. That trade-off is why Wi-Fi antennas are centimetres and 4 kHz radio would need a 75 km aerial.

## Every Signal Is a Sum of Sine Waves

- Signals contain many frequencies.
- The components are **sine waves**.
- **Fourier analysis** proves this holds for any signal.
- The result can be plotted as a **frequency-domain** function.

A square wave is the standard example: a fundamental at $f$, a third harmonic at $3f$ and one-third amplitude, a fifth at $5f$ and one-fifth amplitude, and so on:

$$s(t) = \frac{4}{\pi}\left[\sin(2\pi f t) + \tfrac{1}{3}\sin(2\pi(3f)t) + \tfrac{1}{5}\sin(2\pi(5f)t) + \cdots\right]$$

Adding only the first two terms already approximates the square shape; each further term sharpens the edges.

### Spectrum, Absolute Bandwidth, Effective Bandwidth

| Term                    | Definition                                                                             | Example                 |
| ----------------------- | -------------------------------------------------------------------------------------- | ----------------------- |
| **Spectrum**            | The range of frequencies contained in a signal                                         | $f$ and $3f$            |
| **Absolute bandwidth**  | The width of the spectrum                                                              | $3f - f = 2f$           |
| **Effective bandwidth** | The narrow band holding **most of the signal's energy**, often just called "bandwidth" | The first few harmonics |

### Data Rate and Bandwidth

1. Any transmission system carries only a **limited band of frequencies**.
2. That limit caps the data rate that can be carried.
3. A **square wave has infinite frequency components** and therefore infinite absolute bandwidth, but most of its energy sits in the first few.
4. **Limiting the bandwidth creates distortion** in the signal.

## Transmission Impairments

The received signal is never quite the transmitted one.

| Impairment           | Cause                                                        | Effect on analog       | Effect on digital        |
| -------------------- | ------------------------------------------------------------ | ---------------------- | ------------------------ |
| **Attenuation**      | Signal strength falls off with distance                      | Degradation of quality | Bit errors               |
| **Delay distortion** | Propagation velocity varies with frequency                   | Waveform smearing      | Intersymbol interference |
| **Noise**            | Unwanted signals inserted between transmission and reception | Added noise            | Bit errors               |

### Attenuation

- Signal strength falls off with distance over any medium.
- It **varies with frequency**; higher frequencies lose more.
- The received signal must be **strong enough to be detected** and **sufficiently above the noise** to be received without error.
- **Fix:** repeaters or amplifiers, amplifying higher frequencies more to compensate for the frequency-dependent loss.

### Delay Distortion

- **Cause:** propagation velocity through a guided medium varies with frequency.
- **Effect:** frequency components arrive at different times, causing **phase shifts** between them.
- **Critical for digital data:** parts of one bit spill into neighbouring bits, producing **intersymbol interference**.

### Four Categories of Noise

**Noise** is unwanted signals inserted somewhere between transmission and reception, and it is the **major limiting factor** in communication system performance.

| Type                      | Cause                                                                                                                                         | Character                                                                        |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Thermal noise**         | Thermal agitation of electrons, uniformly distributed across all bandwidths                                                                   | Called **white noise**                                                           |
| **Intermodulation noise** | Produces unwanted signals at the sum or difference of two original frequencies                                                                | 4 kHz and 8 kHz signals create noise at 12 kHz, interfering with a 12 kHz signal |
| **Crosstalk**             | A signal on one line is picked up by another, through electrical coupling between nearby twisted pairs or antennas receiving unwanted signals | Contamination between channels                                                   |
| **Impulse noise**         | External electromagnetic interference: non-continuous irregular spikes of short duration and high amplitude                                   | Minor for analog, **major error source for digital data**                        |

> [!NOTE] The impulse noise calculation
> A 0.01 s spike at 56,000 bit/s corrupts $0.01 \times 56{,}000 = \mathbf{560}$ bits. A listener would not notice a 10 ms click in voice, but 560 bits of data are gone.

## Channel Capacity

**Channel capacity** is the maximum rate at which data can be transmitted over a given channel under given conditions. Four linked concepts set it:

| Concept        | Unit  | Meaning                           |
| -------------- | ----- | --------------------------------- |
| **Data rate**  | bit/s | Bits per second                   |
| **Bandwidth**  | Hz    | Cycles per second                 |
| **Noise**      |       | Average noise level over the path |
| **Error rate** |       | Rate of corrupted bits            |

The limits are set by **physical properties**, and the main constraint is **noise**.

### Nyquist: The Noise-Free Limit

$$C = 2B\log_2 M$$

| Symbol | Meaning                 |
| ------ | ----------------------- |
| $C$    | Capacity, bit/s         |
| $B$    | Bandwidth, Hz           |
| $M$    | Number of signal levels |

- Given bandwidth $B$, the highest signalling rate is $2B$.
- If the signalling rate is $2B$, signals with frequencies up to $B$ can be carried.
- For binary signals, $2B$ bit/s needs $B$ Hz.
- More signal levels raise the data rate, but **burden the receiver**, and noise limits the usable $M$.

**Worked example.** A voice channel with $B = 3100$ Hz is used through a modem.

| Levels          | Calculation                     | Capacity     |
| --------------- | ------------------------------- | ------------ |
| Binary, $M = 2$ | $2 \times 3100 \times \log_2 2$ | 6,200 bit/s  |
| $M = 8$         | $2 \times 3100 \times \log_2 8$ | 18,600 bit/s |

Same bandwidth, three times the rate, bought purely by using eight levels instead of two.

### Shannon: Bringing In Noise

$$\mathrm{SNR_{dB}} = 10\log_{10}\left(\frac{\text{signal}}{\text{noise}}\right) \qquad C = B\log_2(1 + \mathrm{SNR})$$

- A faster data rate means shorter bits, so a noise burst corrupts more bits.
- For a given noise level, higher rates mean higher error rates.
- $C$ is the **theoretical maximum**; real systems achieve much lower rates.
- **SNR in the formula is a plain ratio.** Convert from dB first.

**Capacity for $B = 1$ MHz at various SNR values:**

| SNR (dB) | Linear SNR | $C = 10^6\log_2(1+\mathrm{SNR})$ |
| -------- | ---------- | -------------------------------- |
| 0        | 1          | 1.0 Mbit/s                       |
| 10       | 10         | 3.5 Mbit/s                       |
| 20       | 100        | 6.7 Mbit/s                       |
| 30       | 1000       | 10.0 Mbit/s                      |
| 40       | 10000      | 13.3 Mbit/s                      |

The curve rises steeply at low SNR and flattens at high SNR: each extra 3 dB of SNR buys roughly one more bit per hertz, and the return keeps shrinking.

### Worked Example: Relating Nyquist and Shannon

**Given.** A channel spectrum between 3 MHz and 4 MHz, with $\mathrm{SNR_{dB}} = 24$ dB.

1. **Bandwidth:** $B = 4 - 3 = 1$ MHz.
2. **SNR ratio:** $24 = 10\log_{10}(\mathrm{SNR})$, so $\mathrm{SNR} = 10^{2.4} \approx 251$.
3. **Shannon limit:** $C = 10^6 \times \log_2(1 + 251) = 10^6 \times \log_2 252 \approx 8 \times 10^6$ bit/s = **8 Mbit/s**.
4. **Levels needed:** from Nyquist, $8 \times 10^6 = 2 \times 10^6 \times \log_2 M$, so $\log_2 M = 4$ and $M = \mathbf{16}$.

**Takeaway.** Shannon fixes the ceiling; Nyquist tells you how many signal levels it would take to reach that ceiling.

### Nyquist vs Shannon

|                       | Nyquist                                     | Shannon                                               |
| --------------------- | ------------------------------------------- | ----------------------------------------------------- |
| **Assumption**        | Noiseless channel                           | Channel with given bandwidth, signal power, and noise |
| **What is limited**   | Signalling rate limited solely by bandwidth | Rate limited by bandwidth **and** noise               |
| **Formula**           | $C = 2B\log_2 M$                            | $C = B\log_2(1+\mathrm{SNR})$                         |
| **How to raise rate** | Use more signal levels                      | Increase SNR or bandwidth                             |

**How they relate.** Nyquist says more levels raise the rate. Shannon says noise caps how many levels are actually usable. The practical limit is the **smaller** of what both allow.

## Putting It Together

### Worked Example: Transmission Time

**Problem.** A control room sends a 40-character status message, 8 bits per character, over a 9600 bit/s link. How long does transmission take?

$$t_{\text{transmission}} = \frac{\text{total bits}}{\text{data rate}}$$

1. Total bits $= 40 \times 8 = 320$ bits.
2. $t = 320 / 9600 = 0.0333$ s ≈ **33.3 ms**.

About 33 ms is imperceptible to a human, which is why short status messages feel instant. The same 9600 bit/s would make a video frame take unacceptably long, which is why data rates grow with message size.

### Choosing a Link for a Noisy Plant

**Scenario.** Connect a temperature sensor to a control room 2 km away inside a noisy industrial plant full of large electric motors. Analog or digital?

| Factor                | Consideration                                                                  |
| --------------------- | ------------------------------------------------------------------------------ |
| **Distance**          | 2 km of cable attenuates the signal; analog repeaters would amplify noise too  |
| **Environment**       | Motors create strong electrical noise; analog noise accumulates permanently    |
| **Digital advantage** | Repeaters regenerate clean 1s and 0s, and errors can be detected and corrected |
| **Recommendation**    | **Digital**, the reasoning behind RS-232 and RS-485 in Lectures 3 and 4        |

_There is rarely one correct answer. The justification must apply the analog-versus-digital trade-offs correctly, not just name the technology._

## Checkpoint Answers

| Question                                                            | Answer                                                                       |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Which parameter sets the height of a sine wave?                     | Peak amplitude $A$                                                           |
| Which parameter sets how often it repeats?                          | Frequency $f$, with $T = 1/f$                                                |
| What is the absolute bandwidth of a signal containing $f$ and $3f$? | $2f$                                                                         |
| Which impairment smears bits into each other?                       | **Delay distortion**, producing intersymbol interference                     |
| Which noise type is uniformly spread over all frequencies?          | **Thermal noise**, called white noise                                        |
| Which noise type hurts digital data most?                           | **Impulse noise**                                                            |
| Nyquist capacity at $B = 4$ kHz with $M = 4$?                       | $2 \times 4000 \times 2 = 16{,}000$ bit/s                                    |
| Convert 30 dB to a linear ratio.                                    | $10^{30/10} = 1000$                                                          |
| Shannon capacity at $B = 2$ MHz, SNR = 30 dB?                       | $2 \times 10^6 \times \log_2 1001 \approx 19.97$ Mbit/s, about **20 Mbit/s** |

_16 min read (source: 15 min)_

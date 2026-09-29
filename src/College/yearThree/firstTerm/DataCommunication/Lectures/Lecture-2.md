---
title: Lecture 2
prev:
  text: "Lecture 1"
  link: "/College/yearThree/firstTerm/DataCommunication/Lectures/Lecture-1"
next: false
---

# Data Communication - Lecture 2

## Where the Field Is Heading

Three forces drive the architecture and evolution of data communications:

| Force                           | Driver                                                                                                                                                   |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Traffic growth**              | More people and more devices online; a household now runs phone, laptop, smart TV, IoT sensors at once                                                   |
| **Development of new services** | New applications create new demands — HD video calling needs far more data per second than a phone call, delivered with low latency, not just eventually |
| **Advances in technology**      | Better hardware (fibre optics, 5G, efficient signal encoding) makes carrying the extra traffic possible                                                  |

> [!NOTE] The forces feed each other
> Technology advances **enable** new services, which drive **more** traffic growth. New traffic then demands further technology advances — a loop, not three independent trends.

## Network Types

| Type                         | Scope                            | Examples                             |
| ---------------------------- | -------------------------------- | ------------------------------------ |
| **LAN** — Local Area Network | Single building or cluster       | Ethernet, token ring, star, wireless |
| **WAN** — Wide Area Network  | City-to-city, country-to-country | Telephone, ISDN, ATM                 |
| **Wireless**                 | Radio propagation                | Radio, microwave, satellite          |

**Internet** evolved from **ARPANET**, built to solve communication across arbitrary packet-switched networks; **TCP/IP** provides the foundation.

## Physical Topologies

**Physical topology** = the physical layout of nodes on a network. Three fundamental shapes, plus hybrids. Topology determines the network type, cabling infrastructure, and transmission media used.

### Bus

- A single cable — the **bus** — connects all nodes, with no connectivity devices.
- _Advantages:_ works well for small networks, inexpensive, easy to extend.
- _Disadvantages:_ management costs can be high; risk of congestion as traffic grows.

### Ring

- Each node connects to its two nearest nodes so the network forms a circle.
- **Token passing** is the channel access method: a signal called a **token** circulates between nodes and **authorizes** the holder to transmit.
- _Advantages:_ easier to manage and to locate a defective node or cable; well-suited to long distances on a LAN; handles high-volume traffic; enables reliable communication.
- _Disadvantages:_ expensive, needs more cable and equipment upfront, fewer equipment options, and few options for high-speed expansion.

### Star

- Every node connects through a central device (hub or switch).
- _Advantages:_ most popular topology in use; wide range of equipment; low startup cost; easy to manage; easy to move, isolate, or interconnect nodes; scalable. Any single cable connects only two devices, so a cable fault affects at most two nodes — more fault-tolerant than bus or ring.
- _Disadvantages:_ requires more cable than bus; **the hub is a single point of failure**.

### Topology Comparison

| Criterion               | Bus                    | Ring                           | Star                          |
| ----------------------- | ---------------------- | ------------------------------ | ----------------------------- |
| Cabling                 | Least                  | Most                           | More than bus, less than ring |
| Fault impact            | Whole segment affected | Can isolate the faulty node    | Two nodes at most             |
| Single point of failure | The backbone cable     | Each node (breaks the ring)    | The central hub               |
| Scalability             | Poor as traffic grows  | Limited options for high speed | Best                          |
| Access method           | Shared                 | Token passing                  | Central arbitration           |

## Signals: Why a Signal Exists

**Definition:** a **signal** is the physical, measurable quantity (usually voltage, current, or EM wave) that carries data from transmitter through medium to receiver.

**Purpose:** data by itself — numbers, characters, sound — cannot travel through a wire or the air. At the **transmitter**, an **encoder** maps each piece of data onto a specific voltage level, frequency, or light intensity; at the **receiver**, a **decoder** reverses the mapping.

- _Example:_ a microphone converts your voice (a sound wave) into a varying electrical voltage. That varying voltage is the signal.

### Analog Signal

- **Definition:** varies **continuously and smoothly** over time; it can take _any_ value within a range and never jumps instantly.
- **Why it exists:** many real quantities — sound pressure, temperature, light intensity — are continuous, so an analog signal represents them with no conversion.
- _Still used in:_ traditional AM/FM radio, older telephone lines (the local loop), sensors before digitization.

> [!NOTE]
> "Analog" does not mean old or bad. It means the signal's shape directly mirrors a continuously varying quantity.

### Digital Signal

- **Definition:** takes only a **limited set of discrete values** — usually two: HIGH voltage for binary 1, LOW for binary 0 — and switches between them abruptly.
- **Why it exists:** computers store and process information as bits, so a digital signal represents them directly and unambiguously as fixed levels.
- _Used in:_ modern computer networks, digital telephony, fibre-optic broadband, and the RS-232/RS-485 interfaces of Lectures 3–4.

> [!WARNING] Common Misconceptions
>
> - A digital signal **is** a real physical electrical signal. "Digital" describes how many distinct levels are allowed and how we read them, not whether electricity is involved.
> - "Digital" does **not** mean error-free. Digital signals do suffer errors; they are simply far easier to detect and correct (Lectures 5–6, LO3).

### Analog vs. Digital

| Criterion           | Analog                                                        | Digital                                |
| ------------------- | ------------------------------------------------------------- | -------------------------------------- |
| **Values allowed**  | Continuous range                                              | Fixed set, usually 2                   |
| **Effect of noise** | Noise accumulates permanently                                 | Often detected and corrected           |
| **Regeneration**    | Only **amplified** — and the noise goes with it               | Fully **regenerated** — noise removed  |
| **Equipment**       | Simpler for one direct link                                   | Needs encode/decode, but scales better |
| **Bandwidth**       | Depends on the application, _not_ on analog vs. digital alone |                                        |
| **Typical use**     | Some sensors, broadcast radio                                 | Networks, telephony, Ethernet          |

> [!NOTE] Regeneration is the decisive row
> On a long analog link, noise accumulates and a repeater amplifies signal _and_ noise, so quality only worsens with distance. On a digital link the repeater only decides "1 or 0?" and regenerates a clean copy — noise does not accumulate. This is the main technical reason the telephone network, broadcasting, and every new system moved to digital, even when the original information (a human voice) is naturally analog.

**Classify each:**

| Case                              | Answer  | Justification                                                                                                         |
| --------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| Old-style FM radio broadcast      | Analog  | The wave's frequency varies continuously with the sound wave — that is what _frequency modulation_ means              |
| Fibre-optic broadband             | Digital | Data travels as discrete on/off light pulses representing bits                                                        |
| Traditional analog telephone line | Analog  | The line carries a continuously varying voltage mirroring the voice waveform                                          |
| Bluetooth audio to earbuds        | Digital | _Trap:_ Bluetooth uses a radio carrier, but the **audio itself is digitized** before transmission. Wireless != analog |

## Data, Signals, and Transmission

| Term             | Meaning                                                        |
| ---------------- | -------------------------------------------------------------- |
| **Data**         | Entities that convey information                               |
| **Signals**      | Electric or electromagnetic representations of data            |
| **Signaling**    | Physical propagation of the signal along a medium              |
| **Transmission** | Communication of data by propagation and processing of signals |

- **Text** is coded into a sequence of bits: **IRA** (International Reference Alphabet / ASCII) — a **7-bit code with a parity bit**.
- **Images** are coded into pixels with a number of bits per pixel, and may then be compressed.

## Transmission Terminology

### Medium Configuration

| Configuration                    | Definition                                                                                                                                                                                         |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Point-to-point / direct link** | Signals propagate directly from transmitter to receiver with no intermediate devices other than amplifiers; the two devices are the only ones sharing the medium. _Applies to unguided media too._ |
| **Multipoint**                   | More than two devices share the same medium                                                                                                                                                        |

### Transmission Direction

| Mode            | Rule                                                   | Example          |
| --------------- | ------------------------------------------------------ | ---------------- |
| **Simplex**     | Signals transmitted in only **one** direction          | Cable television |
| **Half-duplex** | Both stations may transmit, but **only one at a time** | Police radio     |
| **Full-duplex** | Both stations may transmit **simultaneously**          | Telephone        |

### Guided vs. Unguided Media

- **Guided** — waves are guided along a physical path: twisted pair, coaxial cable, optical fibre.
- **Unguided (wireless)** — EM waves are transmitted but not guided: air, vacuum, seawater.

### Evaluating a Network

Think of a road network: how many vehicles it services (throughput), how fast (delay), how reliably (collisions, losses, outage probability), and whether it can guarantee **QoS**.

| Measure                                            | Metric                                                                                                          |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Spectral bandwidth**                             | Hz                                                                                                              |
| **Symbol rate**                                    | baud = pulses/s = symbols/s                                                                                     |
| **Digital bandwidth**                              | bit/s — gross bit rate (signalling rate), net bit rate (information rate), channel capacity, maximum throughput |
| **Channel utilization / link spectral efficiency** | How much of the channel's capacity is actually used                                                             |
| **SNR**                                            | signal-to-interference ratio, $E_b/N_0$, carrier-to-interference ratio — all in **decibel**                     |
| **Error rates**                                    | **BER** (bit-error rate), **PER** (packet-error rate)                                                           |
| **Latency**                                        | seconds — propagation time, transmission time                                                                   |
| **Jitter**                                         | Transient congestion variation                                                                                  |

## Periodic Signals

$$s(t) = A\sin(2\pi f t + \varphi)$$

| Parameter           | Meaning                                                    |
| ------------------- | ---------------------------------------------------------- |
| **Amplitude $A$**   | Peak/maximum strength of the signal, typically in volts    |
| **Frequency $f$**   | Rate at which the signal repeats — Hz or cycles per second |
| **Period $T$**      | Time for one repeat: $T = 1/f$                             |
| **Phase $\varphi$** | Relative position in time within a single period           |

### Wavelength

Distance occupied by one cycle, or the distance between two points of corresponding phase in consecutive cycles. For a signal travelling at speed $v$:

$$\lambda = vT \qquad \lambda f = v$$

- _Example:_ a signal travelling at the speed of light, $v = c = 3 \times 10^8$ m/s.

## Frequency Domain

- Any signal is made up of many frequencies; each component is a **sinusoid**. **Fourier analysis** decomposes a signal into components at various frequencies, plotted in the frequency domain.
- **Spectrum** — the range of frequencies contained in a signal.
  - _Example:_ a signal containing $f$ and $3f$.
- **Absolute bandwidth** — the width of the spectrum, _e.g._ $2f$.
- **Effective bandwidth** (usually just "bandwidth") — the narrow band of frequencies holding **most of the signal's energy**.

### Data Rate vs. Bandwidth

- Any transmission system carries only a **limited band of frequencies**, which limits the data rate.
- **Square waves have infinite frequency components and therefore infinite bandwidth**; most of their energy sits in the first few components.
- **Limiting the bandwidth creates distortion** in the signal.

## Transmission Impairments

The received signal may differ from the transmitted one. The most significant impairments:

| Impairment           | Analog effect                 | Digital effect           |
| -------------------- | ----------------------------- | ------------------------ |
| **Attenuation**      | Degradation of signal quality | Bit errors               |
| **Delay distortion** | Waveform smearing             | Intersymbol interference |
| **Noise**            | Noise added                   | Bit errors               |

### Attenuation

Signal strength falls off with distance over any medium, and **varies with frequency** — higher frequencies attenuate more.

- The received signal must be **strong enough to be detected** and **sufficiently higher than the noise** to be received without error.
- Compensated with **repeaters or amplifiers**; amplify more at higher frequencies to adjust for the frequency-dependent loss.

### Delay Distortion

Occurs because the **propagation velocity of a signal through a guided medium varies with frequency**.

- Different frequency components arrive at different times, causing **phase shifts** between them.
- Particularly critical for digital data: parts of one bit spill over into the next, causing **intersymbol interference**.

### Categories of Noise

**Noise** = unwanted signals inserted somewhere between transmission and reception; the **major limiting factor** in communication system performance.

| Type                      | Cause                                                                                                                                           | Character                                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Thermal noise**         | Thermal agitation of electrons; uniformly distributed across all bandwidths                                                                     | Referred to as **white noise**                                                                          |
| **Intermodulation noise** | Produces unwanted signals at the sum or difference of two original frequencies                                                                  | _e.g._ signals at 4 kHz and 8 kHz create noise at 12 kHz and interfere with a 12 kHz signal             |
| **Crosstalk**             | A signal on one line picked up by another — electrical coupling between nearby twisted pairs, or microwave antennas picking up unwanted signals | Contamination between channels                                                                          |
| **Impulse noise**         | External electromagnetic interference; non-continuous irregular pulses or spikes                                                                | Short duration, **high amplitude**. Minor annoyance for analog, **major error source for digital data** |

> [!NOTE] Impulse noise magnitude
> A sharp 0.01 s spike of energy would not destroy any voice data, yet it washes out about **560 bits** of digital data transmitted at **56 kbps**.

> [!NOTE] Channel capacity drivers
> Capacity depends on four concepts: **data rate** (bps), **bandwidth** (Hz), **noise** (average noise level over the path), and **error rate** (rate of corrupted bits). The limitations come from physical properties, and the main constraint on efficiency is **noise**.

## Channel Capacity

**Channel capacity** = the maximum rate at which data can be transmitted over a given channel under given conditions.

### Nyquist — Noise-Free Channels

- Given bandwidth $B$, the highest **signalling rate** is $2B$ — a signalling rate of $2B$ carries frequencies no greater than $B$ Hz.
- For **binary** signals, $2B$ signalling rate needs bandwidth $B$ Hz.
- Raising the rate means using $M$ signal levels instead of 2:

$$C = 2B\log_2 M \quad \text{(bps)}$$

- _Trade-off:_ more levels raise the data rate but **increase the burden on the receiver**, and noise limits the usable value of $M$.

### Shannon — Noisy Channels

A faster data rate shortens each bit, so a burst of noise corrupts more bits. Given a fixed noise level, higher rates mean higher error rates. Shannon relates data rate, noise, and error rate through the **signal-to-noise ratio in decibels**:

$$\mathrm{SNR_{db}} = 10\log_{10}\left(\frac{\text{signal}}{\text{noise}}\right)$$

$$C = B\log_2(1 + \mathrm{SNR}) \quad \text{(bps)}$$

- Gives the **theoretical maximum capacity**. Real systems achieve much lower rates.

### Nyquist vs. Shannon

|                     | Nyquist                                               | Shannon                                                     |
| ------------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| **Assumption**      | Noise-free channel                                    | Channel with given bandwidth, given signal power, and noise |
| **What is limited** | Signalling rate limited _solely_ by channel bandwidth | Rate limited by bandwidth **and** noise                     |
| **Formula**         | $C = 2B\log_2 M$                                      | $C = B\log_2(1+\mathrm{SNR})$                               |

Both place an upper limit on a channel's bit rate, from two different angles. Nyquist ignores noise, so it holds only as a ceiling; Shannon lowers that ceiling to what the noise floor allows.

## Worked Examples

### Transmission Time

$$t_{\text{transmission}} = \frac{\text{total bits}}{\text{data rate}}$$

**Problem:** a control room sends 40 characters (8 bits each) to a remote sensor over a 9600 bps link. How long?

1. Total bits $= 40 \times 8 = 320$ bits.
2. $t = 320 \div 9600 = 0.0333$ s ≈ **33 ms**.

33 ms is imperceptible, which is why short status messages feel instant. The same calculation at 9600 bps makes a large video frame take unacceptably long — the reason data rates must grow with message size.

### Scenario: 2 km Sensor Link in a Noisy Plant

**Recommend digital.** At 2 km an analog signal accumulates significant noise and distortion, degrading the temperature reading. A digital signal can be **regenerated** at intermediate points, and small errors **detected and corrected** (Lecture 5–6 techniques), giving a reliable reading in a harsh environment. RS-232/RS-485 were designed for exactly this kind of environment, which is why Lecture 3 studies them as digital wired standards.

_Real engineering decisions also weigh cost and existing equipment, so there is rarely one correct answer. For assessment, the justification must apply the analog-vs-digital trade-offs correctly._

## Communication Model Applied

For the video you send on a Zoom call:

- **Source** — you, plus your webcam and microphone, captured by the Zoom app on your device.
- **Destination** — the Zoom app and the screen/speaker on the other participant's device.

## Self-Assessment Prompts

- **Remember:** define data, information, and signal.
- **Understand:** explain in your own words why a signal is necessary to carry data across a medium.
- **Apply:** for a video call, identify source, transmitter, transmission system, receiver, destination.
- **Analyze:** compare analog and digital signals on noise immunity and regeneration.
- **Evaluate:** a hospital sends patient vital signs 500 m to a nurses' station — justify analog or digital.
- **Create (stretch):** outline a digital link (source -> destination) for a smart doorbell, naming all five model elements.

> [!NOTE]
> The analog-vs-digital comparison table resurfaces for the rest of the course. Keep it close.

**Homework:** complete the self-assessment and attempt _Data Communication Practice Sheets_, Questions 1–3.

_Textbook: W. Stallings, Chapters 2 and 3, 8th edition._

_17 min read (source: 30 min)_

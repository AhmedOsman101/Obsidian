---
title: Task 1
prev:
  text: "Tasks"
  link: "/College/yearThree/firstTerm/DataCommunication/Tasks/index"
next: false
---

# Data Communication - Task 1: Worksheet 1

The sheet has four questions groups and fifteen questions in total: four definitions, five short answers, three comparisons, and three analytical problems. Every question is answered below, with full working for the numerical parts.

## Question I: Definitions

### 1. Define Data and Information, and Explain the Distinction

**Data** is the raw representation of facts: numbers, characters, or symbols, before anyone interprets them. It carries no meaning on its own.

**Information** is data that has been organized and interpreted so that it means something to a receiver.

**Example.** The bytes `25, 6, 2026` are data. Read as a date, the same bytes give the information **25 June 2026**. Nothing about the bytes changed; only the interpretation did.

| Aspect         | Data                   | Information                      |
| -------------- | ---------------------- | -------------------------------- |
| **State**      | Raw, unprocessed       | Processed, interpreted           |
| **Meaning**    | None until interpreted | Meaningful to a receiver         |
| **Dependence** | Independent of context | Depends on agreed interpretation |

### 2. What Is a Signal, and Why Must Data Be Converted Into One?

A **signal** is the physical, measurable quantity, usually voltage, current, or an electromagnetic wave, that carries data from a transmitter through a medium to a receiver.

Conversion is necessary because **data cannot travel through a wire or the air as it is**. Numbers and characters are abstract. A transmitter's encoder maps each piece of data onto a physical quantity, such as a voltage level, a frequency, or a light intensity, and the receiver's decoder reverses that mapping.

**Example.** A microphone converts a voice, which is a sound wave, into a varying electrical voltage. That voltage is the signal that travels down the line.

### 3. Define Spectral Bandwidth and Explain the Effect of a Bandwidth-Limited Channel on a Square Wave

**Spectral bandwidth** is the width of the range of frequencies contained in a signal. If a signal contains components at $f$ and $3f$, its spectrum spans those frequencies and its absolute bandwidth is $3f - f = 2f$.

A **square wave** is built from a fundamental plus odd harmonics at decreasing amplitude:

$$s(t) = \frac{4}{\pi}\left[\sin(2\pi f t) + \tfrac{1}{3}\sin(2\pi(3f)t) + \tfrac{1}{5}\sin(2\pi(5f)t) + \cdots\right]$$

Because the series never ends, a perfect square wave has **infinite bandwidth**. A real channel passes only a limited band, so it removes the higher harmonics.

**Result.** The edges are rounded and the flat tops sag. The waveform becomes a distorted approximation of a square wave, closer to a smoothed pulse. Removing more harmonics makes the distortion worse, and because the sharp edges carry the timing information, a bandwidth-limited channel also makes **bit boundaries harder to detect**, which is the first step toward intersymbol interference.

### 4. Define Attenuation and State How It Varies With Frequency

**Attenuation** is the loss of signal strength as it travels over a medium. It is measured as a reduction in power or voltage with distance.

Over a guided medium, attenuation **increases with frequency**: higher-frequency components lose more energy per unit length than lower-frequency ones. This frequency dependence is what makes a long cable act as a low-pass filter, rounding off fast edges.

Engineers compensate with **repeaters or amplifiers**, and must amplify higher frequencies more than lower ones to flatten the response. Otherwise the received signal arrives weak and unequal across its spectrum.

## Question II: Short-Answer Questions

### 1. The Five Core Components of the Data Communication Model

| #   | Component               | Role                                                             |
| --- | ----------------------- | ---------------------------------------------------------------- |
| 1   | **Source**              | Generates the data to be transmitted                             |
| 2   | **Transmitter**         | Converts and encodes the data into a signal suited to the medium |
| 3   | **Transmission system** | The path the signal travels, from one cable to an entire network |
| 4   | **Receiver**            | Accepts the signal and decodes it back into usable data          |
| 5   | **Destination**         | Takes the incoming data and uses it                              |

A **protocol**, the agreed set of rules both ends follow, is what allows the five components to cooperate.

### 2. Any Three Primary Communications Tasks

| Task                               | What it does                                                      | Example                                 |
| ---------------------------------- | ----------------------------------------------------------------- | --------------------------------------- |
| **Synchronization**                | Sender and receiver agree on timing so each bit is read correctly | Both ends configured for 9600 bit/s     |
| **Flow control**                   | Prevents a fast sender from overwhelming a slow receiver          | Receiver signals the sender to pause    |
| **Error detection and correction** | Notices, and sometimes fixes, bits that arrive wrong              | A parity bit flags a single flipped bit |
| **Exchange management**            | Agrees when to start, pause, and end a conversation               | Turn-taking on a half-duplex link       |
| **Interfacing**                    | Physically connects the device to the medium                      | An RS-485 terminal block                |
| **Signal generation**              | Produces a signal the medium can actually carry                   | Voltage levels representing 1s and 0s   |

### 3. Three Fundamental Physical Topologies and the Star's Single Point of Failure

The three fundamental physical topologies are **bus**, **ring**, and **star**.

- **Bus**: one shared cable connects every node, with no connectivity devices.
- **Ring**: each node connects to its two nearest neighbours, forming a circle, often with token passing.
- **Star**: every node connects through a central device.

In a **star** topology the **central hub or switch is the single point of failure**. If it fails, every node loses connectivity at once, even though no cable is damaged. By contrast, a single cable fault in a star affects at most two nodes.

### 4. Why Impulse Noise Is Far More Destructive to Digital Data Than to Analog Voice

**Impulse noise** consists of short-duration, high-amplitude spikes from external electromagnetic interference: motors switching, lightning, arcing contacts.

- **Analog voice** is continuous and highly redundant. The ear tolerates a brief click or crackle, and a 10 ms spike removes an imperceptible slice of a waveform that the listener reconstructs from context. The information degrades gracefully.
- **Digital data** is discrete. A spike that lasts one bit time does not blur a value, it **inverts it**. Every bit in that window is lost, and there is no redundancy in the raw stream to recover it.

**Quantified.** A 0.01 s spike at 56 kbit/s wipes out

$$0.01 \times 56{,}000 = 560 \text{ bits}$$

A listener would never notice a 10 ms click, but 560 bits is a large block of a data message, and a single wrong bit can invalidate an entire packet through a checksum failure.

### 5. How Nyquist and Shannon Differ in Their Assumptions About Noise

|                      | Nyquist                         | Shannon                                           |
| -------------------- | ------------------------------- | ------------------------------------------------- |
| **Assumption**       | The channel is **noiseless**    | The channel has noise, with a given signal power  |
| **What limits rate** | Bandwidth alone                 | Bandwidth **and** the signal-to-noise ratio       |
| **Formula**          | $C = 2B\log_2 M$                | $C = B\log_2(1+\mathrm{SNR})$                     |
| **Role of $M$**      | The designer chooses the levels | Noise caps how many levels remain distinguishable |

Nyquist answers "how fast can this bandwidth carry symbols if nothing interferes?" Shannon answers "how fast can it carry information given the noise floor?" Nyquist's result is a ceiling that Shannon lowers to what the noise actually permits.

## Question III: Comparisons

### 1. Guided Media vs Unguided Media

| Aspect            | Guided media                               | Unguided media                                  |
| ----------------- | ------------------------------------------ | ----------------------------------------------- |
| **Path**          | Signal confined to a physical path         | Signal radiates freely through space            |
| **Confinement**   | High; little interference between cables   | Low; anything in range can receive or interfere |
| **Typical range** | Depends on cable; long with repeaters      | Line of sight or coverage area                  |
| **Cost**          | Cable and installation labour              | Spectrum licensing and antennas                 |
| **Examples**      | Twisted pair, coaxial cable, optical fibre | Radio and Wi-Fi, microwave and satellite links  |

Two specific guided examples: **twisted pair** in Ethernet cabling, and **optical fibre** in a broadband backbone. Two specific unguided examples: **Wi-Fi** at 2.4 GHz, and a **satellite downlink**.

The choice affects how far signals travel, how fast data can be sent, and how much the link costs.

### 2. Analog vs Digital Signals: Noise and Regeneration

**(a) Susceptibility and accumulation of noise**

| Signal      | Behaviour under noise                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Analog**  | Noise adds directly to the waveform and **accumulates permanently**. Each amplifier boosts signal and noise together, so quality can only fall along the path |
| **Digital** | Noise adds to the levels too, but the receiver only decides "above or below threshold". Small noise is discarded at every stage                               |

**(b) Regeneration across long distances**

| Signal      | Repeater action                                      | Consequence                                      |
| ----------- | ---------------------------------------------------- | ------------------------------------------------ |
| **Analog**  | **Amplifies** the incoming waveform                  | Signal and noise both grow; distortion compounds |
| **Digital** | **Regenerates**: decides the bit, emits a clean copy | Noise does not accumulate; each hop starts fresh |

Regeneration is the decisive difference. It only works while the noise is small enough that the repeater decides correctly, and it does not make digital error-free, but it removes cumulative degradation, which is why the telephone network, broadcasting, and computer networks all moved to digital.

### 3. Simplex, Half-Duplex, and Full-Duplex

| Mode            | Rule                                      | Direction | Real-world example          | Why                                           |
| --------------- | ----------------------------------------- | --------- | --------------------------- | --------------------------------------------- |
| **Simplex**     | Transmission in one direction only        | A to B    | Cable television            | The viewer never transmits                    |
| **Half-duplex** | Both may transmit, but only one at a time | A or B    | Police radio, walkie-talkie | Both sides talk, but turn-taking is natural   |
| **Full-duplex** | Both may transmit simultaneously          | A and B   | Telephone                   | Conversation overlaps and must not be clipped |

Half-duplex needs a turn-taking rule, which is an **exchange management** task. Full-duplex needs either two physical channels or a way to separate the directions, which is why RS-232 uses two independent data channels.

## Question IV: Analytical Problems

### 1. Transmission Time for a 50-Character Message

**Given.** 50 characters, 8 bits per character, link rate 4800 bit/s.

**Step 1, total bits:**

$$50 \times 8 = 400 \text{ bits}$$

**Step 2, transmission time:**

$$t = \frac{400}{4800} = 0.08333 \text{ s}$$

**Answer:** $0.08333$ s $= \mathbf{83.3 \text{ ms}}$.

Check: at 4800 bit/s, one second carries 4800 bits, and 400 is about one-twelfth of that, so roughly 83 ms is consistent.

### 2. Nyquist Capacity for a Noiseless 4 kHz Channel With 16 Levels

**Given.** $B = 4000$ Hz, $M = 16$ levels, noiseless channel.

$$\log_2 16 = 4 \text{ bits per symbol}$$

$$C = 2B\log_2 M = 2 \times 4000 \times 4 = 32{,}000 \text{ bit/s}$$

**Answer:** $\mathbf{32{,}000 \text{ bit/s}}$, that is **32 kbit/s**.

The check: 16 levels carry 4 bits each, and the channel supports $2B = 8000$ symbols per second, so $8000 \times 4 = 32{,}000$ bit/s.

> [!WARNING] Do not mix the formulas
> $M$ is the number of levels, not the number of bits. Using $M = 16$ as if it were $L = 16$ would give 128,000 bit/s, which is wrong.

### 3. Shannon Capacity for a 2 MHz Channel at 30 dB

**Given.** $B = 2$ MHz $= 2 \times 10^6$ Hz, $\mathrm{SNR_{dB}} = 30$ dB.

**(a) Convert SNR from decibels to a linear ratio.**

$$\mathrm{SNR_{dB}} = 10\log_{10}(\mathrm{SNR})$$

$$30 = 10\log_{10}(\mathrm{SNR}) \;\Rightarrow\; \log_{10}(\mathrm{SNR}) = 3 \;\Rightarrow\; \mathrm{SNR} = 10^3 = \mathbf{1000}$$

So the signal power is 1000 times the noise power.

**(b) Shannon capacity.**

$$C = B\log_2(1+\mathrm{SNR}) = 2 \times 10^6 \times \log_2(1001)$$

$$\log_2(1001) = \frac{\ln 1001}{\ln 2} = \frac{6.9088}{0.6931} \approx 9.967$$

$$C \approx 2 \times 10^6 \times 9.967 = 19.93 \times 10^6 \text{ bit/s}$$

**Answer:** $C \approx \mathbf{19.93 \text{ Mbit/s}}$, usually rounded to **about 20 Mbit/s** in textbook answers.

> [!NOTE] Two traps in this question
> First, the **linear SNR** goes into Shannon, never the decibel value. Substituting 30 would give $2 \times 10^6 \times \log_2 31 \approx 9.9$ Mbit/s, roughly half the correct answer. Second, this is a **theoretical maximum**; a real modem on this channel would achieve noticeably less.

## Summary of Numerical Answers

| Question | Result       |
| -------- | ------------ |
| IV-1     | 83.3 ms      |
| IV-2     | 32,000 bit/s |
| IV-3a    | SNR = 1000   |
| IV-3b    | 19.93 Mbit/s |

_13 min read (source: 3 min)_

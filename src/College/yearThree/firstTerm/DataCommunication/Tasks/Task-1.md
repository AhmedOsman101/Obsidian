---
title: Task 1
prev:
  text: "Tasks"
  link: "/College/yearThree/firstTerm/DataCommunication/Tasks/index"
next: false
---

# Data Communication - Task 1: Worksheet 1

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20241807                 |
| Section | 1                        |

## Question I: Definitions

### 1. Define Data and Information, and Clearly Explain the Distinction Between Them

**Data** is the collection of facts, numbers and symbols that a device handles, without any meaning attached to them. The values `25`, `6` and `2026` sitting in memory are data.

**Information** is what the same data becomes once it has been processed and read with a purpose. If `25`, `6` and `2026` are read as a day, a month and a year, the result is the information "25 June 2026".

The two therefore differ in the stage they are in. Data has not been interpreted yet; information has. Nothing has to change in the numbers for the second to appear, only the way they are read. Loosely, data is what is stored and information is what is understood.

### 2. What Is a Signal, and Why Is It Necessary to Convert Data into a Signal?

A **signal** is the physical representation of data, the quantity a transmitter puts on a medium so that a receiver can detect it. In wired links it is normally an electric voltage or current, and in a wireless link it is an electromagnetic wave.

Data cannot be sent in its own form, because a number stored in a register has no physical existence on the wire. The transmitter therefore has to turn it into something that can propagate, and the receiver has to turn it back. That is the whole job of the encoder and decoder in the communication model: the encoder maps each bit onto a measurable level, such as a voltage, and on the receiving side the decoder decides which level was sent and recovers the bit. A voice, for instance, becomes a varying voltage at the microphone, and it is that voltage, not the sound, which travels along the cable.

### 3. Define Spectral Bandwidth and Explain What Happens to a Square Wave on a Bandwidth-Limited Channel

The **spectral bandwidth** of a signal is the range of frequencies it occupies. If a signal contains components at $f$ and $3f$, its spectrum lies between them and its bandwidth is $3f - f = 2f$. It is measured in hertz and it says how wide a band the channel has to pass in order to carry the signal undistorted.

A square wave is not a single frequency. It is made up of a fundamental and a series of odd harmonics, $f$, $3f$, $5f$ and so on, with falling amplitudes, and that series does not end, which means a perfect square wave has an infinite bandwidth.

A channel can only pass a limited band, so the harmonics above its limit are removed. What arrives at the receiver is then only the fundamental with the first few harmonics, and the wave loses its sharp edges: the rising and falling edges become rounded and the flat top droops a little. The shape is no longer a square but a smoothed version of it. The practical consequence is that the edges, which carry the timing of the bits, become less distinct, so a receiver finds it harder to tell exactly where one bit ends and the next begins.

### 4. Define Attenuation and State How It Varies With Frequency

**Attenuation** is the reduction in the strength of a signal as it travels along a medium, so that what arrives at the receiver is weaker than what was sent. It is the reason long cables need amplifiers or repeaters.

Over a guided medium it does not act equally on every part of the signal: **it increases as the frequency increases**. The high-frequency components lose more energy per metre than the low-frequency ones.

Because of this a long cable behaves like a filter that passes the low frequencies and weakens the high ones, and the sharp edges of a fast signal are exactly the high-frequency parts. In practice the loss is compensated with repeaters, or with amplifiers that boost the higher frequencies more than the lower ones, so that the received signal stays clear of the noise level and strong enough to be detected.

## Question II: Short-Answer Questions

### 1. List the Five Core Components of the General Data Communication Model

The model is made of five parts:

1. **Source system**: produces the data that is to be sent.
2. **Transmitter**: converts the data into a signal suitable for the transmission system.
3. **Transmission system**: the medium and everything between the two ends that the signal passes through.
4. **Receiver**: takes the incoming signal and converts it back into a form the destination can use.
5. **Destination system**: receives the data and uses it.

The five only work together because both ends follow the same set of rules, the protocol.

### 2. Identify and Briefly Describe Any Three Primary Communications Tasks

Three of the tasks a network system has to perform are the following.

**Synchronization.** The transmitter and the receiver have to agree on when one bit ends and the next begins. Without this they would drift apart and the receiver would sample the wrong bits. In practice the two ends are configured with the same bit rate, for example 9600 bit/s, and in asynchronous transmission the start bit re-syncs them for every character.

**Flow control.** A fast sender can fill the buffer of a slow receiver faster than it can empty it. Flow control stops that happening: the receiver tells the sender to pause, and the sender resumes when it is told to. The RTS and CTS lines of RS-232 are a hardware version of the same idea.

**Error detection and correction.** Bits can be flipped on the way, so the system has to be able to notice. A parity bit is the simplest form: if the count of ones comes out wrong, the receiver knows that something was corrupted, even though it cannot say which bit. Stronger methods come later in the course, with checksums and CRC.

### 3. Name the Three Fundamental Physical Topologies and State the Main Single Point of Failure in a Star

The three fundamental physical topologies are **bus**, **ring** and **star**.

In a **star** topology every node is wired to a central device, a hub or a switch, and that central device is the single point of failure. If it stops working the whole network is down, even though none of the cables has been damaged. A cable fault in a star only disconnects the one node at its end, which is better than a bus, where a break in the shared cable takes out the whole segment.

### 4. Explain Why Impulse Noise Is Far More Destructive to Digital Data Than to Analog Voice

Impulse noise is a short burst of interference of high amplitude, produced by things like a motor switching on and off or a spark. It lasts only a few milliseconds but it is very large compared with the signal.

An analog voice signal is continuous and a listener tolerates a brief click without noticing it, because the ear reconstructs the word from what comes before and after. The information is lost for a few milliseconds and then carries on.

Digital data has no such margin. Bits are discrete, so a spike that coincides with a bit does not blur its value, it changes it, and the bit is simply wrong. The size of the problem follows from the data rate: at 56 kbit/s a spike of 0.01 s covers

$$0.01 \times 56{,}000 = 560 \text{ bits}$$

That is a large block of a message destroyed, and one wrong bit is enough to make a whole packet fail its check. A 10 ms click in a phone call, on the other hand, is barely heard.

### 5. How Do Nyquist's Formula and Shannon's Capacity Formula Differ in Their Assumptions Regarding Channel Noise?

Nyquist's formula

$$C = 2B\log_2 M$$

belongs to an ideal channel in which there is **no noise at all**. It says that a band of width $B$ hertz can carry $2B$ symbols a second, and that with $M$ different levels each symbol carries $\log_2 M$ bits. The only thing limiting the rate is the bandwidth.

Shannon's formula

$$C = B\log_2(1 + \mathrm{SNR})$$

is for a channel that does have noise. Here the capacity is limited by the bandwidth and by the ratio of the signal power to the noise power, and as the noise rises the maximum rate falls. It is the reason a real modem cannot use as many levels as Nyquist alone would suggest: the closer two levels are together, the more likely noise is to push one onto the other.

## Question III: Comparisons

### 1. Compare Guided Media and Unguided Media, with Two Real-World Examples of Each

Guided media carry the signal along a physical path, so the wave is contained and much of the interference is kept out. Unguided media have no such path and the electromagnetic wave spreads into space, which makes them easier to install but harder to protect.

On the guided side, **twisted pair** is what most Ethernet cabling is made of, and **optical fibre** carries the long-distance trunks between exchanges and between cities. On the unguided side, **Wi-Fi** is the common example, working at 2.4 GHz through the air, and a **satellite link** is the other, where the signal travels up to a satellite and back down. The medium decides how far a signal can travel, how fast data can be sent on it, and what the link costs, which is why the choice is made before any equipment is bought.

### 2. Compare Analog and Digital Signals in Noise and Regeneration

With analog signals the noise is added to the wave itself and it stays there. Every amplifier on the path increases the signal and the noise together, so the quality only gets worse with distance and can never be recovered.

Digital signals are affected by noise in a different way. The receiver does not try to reproduce the incoming wave, it only has to decide whether the level it sees represents a 1 or a 0, so a small amount of noise has no effect at all. And when a repeater is used it does not amplify the wave, it regenerates it: it decides which bits were sent and produces a clean copy, so noise does not build up along the link.

That difference is the main reason digital transmission replaced analog. It does not mean digital signals are free of errors, they are not, but an error can be detected and corrected, whereas analog distortion cannot be taken back out.

### 3. Compare Simplex, Half-Duplex and Full-Duplex, with One Real-World Example of Each

Simplex allows transmission in one direction only, as in cable television, where the station sends and the viewer never sends anything back. Half-duplex allows both stations to transmit but not at the same time, as in a police radio or a walkie-talkie, where the speakers take turns and one has to wait for the other to finish. Full-duplex allows both to transmit at the same time, as in a telephone call, where both people can speak and nobody is cut off.

The difference is also a matter of wiring. Full-duplex needs two paths or a way of separating the two directions, which is why RS-232 has a separate transmit and receive line.

## Question IV: Analytical Problems

### 1. Transmission Time of a 50-Character Message

The message is 50 characters long and each character is coded in 8 bits, so the total number of bits to be sent is

$$50 \times 8 = 400 \text{ bits}$$

The link rate is 4800 bit/s, so the time needed is the number of bits divided by the rate:

$$t = \frac{400}{4800} = 0.0833 \text{ s} = 83.3 \text{ ms}$$

### 2. Nyquist Capacity of a Noiseless 4 kHz Channel Using 16 Levels

With $M = 16$ levels each symbol carries

$$\log_2 16 = 4 \text{ bits}$$

The bandwidth is $B = 4000$ Hz, so Nyquist's formula gives

$$C = 2B\log_2 M = 2 \times 4000 \times 4 = 32{,}000 \text{ bit/s}$$

The channel could therefore carry at most 32 kbit/s. The same answer comes from counting symbols: $2B = 8000$ symbols a second at 4 bits each.

### 3. Shannon Capacity of a 2 MHz Channel with SNR of 30 dB

**a) Converting the SNR to a linear ratio.**

$$\mathrm{SNR_{dB}} = 10\log_{10}(\mathrm{SNR})$$

$$30 = 10\log_{10}(\mathrm{SNR}) \;\Rightarrow\; \log_{10}(\mathrm{SNR}) = 3 \;\Rightarrow\; \mathrm{SNR} = 10^3 = 1000$$

The signal power is therefore one thousand times the noise power.

**b) The channel capacity.**

$$C = B\log_2(1 + \mathrm{SNR}) = 2 \times 10^6 \times \log_2(1001)$$

$$\log_2(1001) = \frac{\ln 1001}{\ln 2} = \frac{6.9088}{0.6931} \approx 9.967$$

$$C \approx 2 \times 10^6 \times 9.967 = 19.93 \times 10^6 \text{ bit/s} \approx 19.93 \text{ Mbit/s}$$

So the theoretical maximum for this channel is about 19.93 Mbit/s, which is why it is usually quoted as roughly 20 Mbit/s. In practice a real system would work below that figure, since Shannon's formula is an upper bound rather than a promise.

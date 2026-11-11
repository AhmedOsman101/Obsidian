---
title: Task 2
prev:
  text: "Task 1"
  link: "/College/yearThree/firstTerm/DataCommunication/Tasks/Task-1"
next: false
---

# Data Communication - Task 2: Comparing Serial Interfaces

| Data    | Details                  |
| :------ | :----------------------- |
| Name    | ‎أحمد علي أحمد علي عثمان |
| Code    | 20241807                 |
| Section | 1                        |

## Question 1: Compare Between RS-232 and RS-485

RS-232 and RS-485 are both serial standards for moving data between a computer and external equipment, but they were designed for very different situations. RS-232 is point to point, built to join a computer directly to one peripheral within one room, while RS-485 is a shared bus, built to join many devices spread across a noisy building over a long distance.

The first difference is the wiring itself. In RS-232 every signal travels on its own single wire measured against a common ground, and the logic is inverted, with a negative voltage meaning idle and a positive voltage meaning active. RS-485 carries every signal on a pair of wires driven to opposite voltages, and the receiver only looks at the difference between the two wires. The result is that any noise picked up from the surroundings lands on both wires almost equally and cancels out, which is why RS-485 tolerates electrically noisy environments much better.

The second difference is the number of devices. RS-232 allows exactly two devices on a link, a DTE and a DCE, and only those two. RS-485 lets up to 32 drivers and 32 receivers share the same twisted pair, which is what makes it suitable for multidrop setups such as sensors, meters and PLCs wired to one cable.

| Point            | RS-232                                                                      | RS-485                                                       |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Architecture     | Point to point, exactly two devices                                         | Multidrop, up to 32 drivers and 32 receivers on one bus      |
| Signaling        | Unbalanced, single wire per signal plus ground                              | Balanced, differential pair per signal                       |
| Noise immunity   | Low, a spike lands directly on the one signal wire                          | High, common-mode noise cancels at the receiver              |
| Maximum speed    | 20 kbit/s per the standard, 115,200 baud common in practice                 | 100 kbit/s at 1200 m, higher on short cables                 |
| Maximum distance | About 15 m (50 ft)                                                          | About 1200 m (4000 ft)                                       |
| Duplex           | Full duplex, two independent data channels                                  | Half duplex on 2 wires, full duplex on 4 wires               |
| Transmit rule    | Either side may send at any time                                            | One transmitter at a time, enforced by the software protocol |
| Voltage          | ±3 V to ±15 V, inverted logic, needs MAX232 or similar transceiver          | Differential, no fixed rails required                        |
| Typical use      | PC to an instrument, modern modems use the same framing over USB converters | Factory floor sensors, energy meters, building automation    |

On speed and distance the two trade off directly against each other because the cable behaves like a capacitor and inductor, so a longer cable cannot sustain a higher rate. RS-232 therefore stops at about 15 m at the highest practical baud rate, while RS-485 can reach 1200 m at 100 kbit/s. In practice, if you need more devices, more distance or more noise tolerance, you pick RS-485, and if you only have two nearby devices and simplicity matters, RS-232 is the natural choice.

A good example of the difference is a factory that wants to connect a control room PC to twelve temperature sensors spread over a 400 m floor near large electric motors. Twelve separate RS-232 cables would need twelve ports, exceed the 15 m distance limit and fail under the motor noise, while a single RS-485 pair can serve all twelve sensors at up to 1200 m with proper differential signaling. The price is that the sensors must be polled one at a time.

## Question 2: Compare the Serial Interfaces From the Lectures

### Serial and Parallel in Short

Data can travel between two devices either one bit at a time, or several bits at once. In parallel transmission one word is sent per clock over one wire per bit, which is fast but expensive, limited to short distances because the wires drift out of synchronization, and not suitable when noise or distance grows. Serial transmission sends one bit at a time over a single line, is slower, but stays synchronized over long distances at much lower cost. This is why every long-distance standard in this course, including RS-232 and RS-485, is serial, and why even internal high-speed links such as SATA and PCIe are serial today.

Within serial transmission there are two families of protocols, depending on how the receiver knows where one bit ends and the next begins.

| Family       | Timing              | Framing                           | Overhead | Example            |
| ------------ | ------------------- | --------------------------------- | -------- | ------------------ |
| Synchronous  | Shared clock signal | Preamble and postamble per block  | Under 5% | SPI                |
| Asynchronous | No shared clock     | Start and stop bits on every byte | 20-30%   | SCI (UART), RS-232 |

### SPI (Serial Peripheral Interface)

SPI is a synchronous protocol in which a master device, usually a microcontroller, generates the clock and every other device follows it. It uses four wires: SCLK for the clock, MOSI and MISO for the two directions of data, and a separate SS line per slave to select which device is active. It is full duplex because data goes out and comes in on the two lines in the same clock cycle, and it is fast and simple, but it offers no built-in error checking of any kind. Because of that, SPI is used only over very short, clean connections on the same board, for chips such as flash memory, temperature sensors, LCD and OLED displays and SD cards. Each slave needs its own SS line, so wiring cost grows with the number of devices.

### SCI, UART and USART

SCI, the Serial Communications Interface, is the generic name for the asynchronous hardware inside a microcontroller. A UART, universal asynchronous receiver/transmitter, is the chip that implements it, and a USART can run both asynchronous and synchronous modes. None of these need a clock line: the frame instead starts with a start bit that drops the line low, followed by 8 data bits sent least significant bit first, an optional parity bit, and one or two stop bits that return the line high. The two ends must agree in advance on the four settings, baud rate, data bits, parity and stop bits, or decoding fails completely.

Both ends must be configured identically. If one side is set to 9600 8N1 and the other to 4800, every detected bit lasts twice as long and nothing decodes correctly. A UART transmits and receives one byte at a time, adds the frame bits automatically, checks parity and reports framing and overrun errors. It is used for simple point to point links such as a PC to a GPS module, or a microcontroller to a PC over a serial port.

### RS-232 and RS-485

RS-232, covered in detail in the previous question, is the classic asynchronous point to point serial standard, unbalanced, full duplex, about ±3 to ±15 V, 20 kbit/s maximum, around 15 m, two devices. It was the standard way for a PC to talk to modems, balances and data loggers, and it is still common in instruments and industrial equipment.

RS-485 is the industrial answer to longer distances and larger networks, balanced and differential, able to carry many devices on one twisted pair up to about 1200 m away.

### Side by Side

| Interface  | Type                       | Wires                    | Duplex       | Devices                           | Distance      | Speed                      | Error checking                        |
| ---------- | -------------------------- | ------------------------ | ------------ | --------------------------------- | ------------- | -------------------------- | ------------------------------------- |
| SPI        | Synchronous, master clock  | 4, plus one SS per slave | Full         | One master, several slaves        | On-board only | Very high (MHz)            | None                                  |
| UART / SCI | Asynchronous               | 2 (TX, RX)               | Full         | 2                                 | Short         | Low, about 20 kbit/s class | Parity, framing and overrun detection |
| USART      | Sync or async              | 2 or 3                   | Full         | 2                                 | Short         | Higher in synchronous mode | Parity plus clock-based timing        |
| RS-232     | Asynchronous, unbalanced   | 3 minimum                | Full         | 2                                 | About 15 m    | 20 kbit/s (115,200 common) | Parity                                |
| RS-485     | Asynchronous, differential | 2 (half duplex) or 4     | Half or full | Up to 32 drivers and 32 receivers | About 1200 m  | 100 kbit/s                 | None in the standard                  |

Choosing between them is a matter of matching the interface to the job: SPI for chip to chip work on one board at high speed, UART or RS-232 for exactly two devices on a short cable, and RS-485 when many devices share one long or noisy cable. No single interface is the best one for everything.

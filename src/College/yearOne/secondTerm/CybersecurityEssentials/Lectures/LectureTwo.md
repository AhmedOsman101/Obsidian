---
title: Summary
prev:
  text: "Lecture One"
  link: "/College/yearOne/secondTerm/CybersecurityEssentials/Lectures/LectureOne"
next:
  text: "Lecture Three"
  link: "/College/yearOne/secondTerm/CybersecurityEssentials/Lectures/LectureThree"
---

# Cybersecurity Essentials Lecture Two

## What is Security of Data Model?

The OSI security architecture provides a structured approach to implementing and managing security. Developed as an international standard, it helps vendors align their security features to meet defined services and mechanisms.

![](../imgs/figure.png)

### Threat, Vulnerability, Attack

- **Threat:** Any event or circumstance with the potential to negatively impact organizations or individuals through unauthorized access, disclosure, modification, destruction, or denial of service.
- **Vulnerability:** A system weakness that can be exploited to cause harm.
- **Attack (Incident):** Occurs when a threat exploits a vulnerability.
- **Countermeasure (Control):** Actions that reduce threats or vulnerabilities, aiming to prevent, deflect, or respond to attacks.

### Security Attacks

- **Passive Attacks:** Attempt to gain information without affecting system resources.
- **Active Attacks:** Aim to alter system resources or disrupt operations.

### Security Services

Security services support requirements such as:

- Confidentiality
- Integrity
- Availability
- Authenticity
- Access Control
- Non-repudiation

They are implemented via specific security mechanisms.

### Security Mechanisms

- **Cryptographic Algorithms:**
  - _Reversible:_ Encryption algorithms for encryption and decryption.
  - _Irreversible:_ Hash functions and message authentication codes (e.g., digital signatures).
- **Data Integrity:** Ensures data remains unchanged.
- **Digital Signature:** Verifies source and integrity of data.
- **Authentication Exchange:** Confirms identity through information exchange.
- **Traffic Padding:** Obscures patterns in data transmission.
- **Routing Control:** Chooses secure transmission paths.
- **Notarization:** Uses a trusted third party to verify data exchange properties.
- **Access Control:** Enforces access permissions.

## Cryptography

Cryptography is the mathematical science of securing data through transformation. It's vital for ensuring safe communication and data storage.

## Cryptographic Algorithms

- **Keyless Algorithms:** Do not use keys; includes hash functions and pseudorandom number generators.
- **Single-Key Algorithms:** Use one secret key for encryption and decryption.
- **Two-Key Algorithms:** Use a pair of related keys — a public key and a private key.

### Keyless Algorithms

Used for integrity and verification. Main types include:

- **Cryptographic Hash Functions:** Convert variable-length data into a fixed-size output (digest).
  - Properties:
    1. Same input gives the same output.
    2. Fixed output length.
    3. Fast computation.
    4. Unpredictable and non-reversible.
    5. Collision-resistant.
  - Common Algorithms:
    - Secure Hash Algorithms (SHA-0, SHA-1, SHA-2, SHA-3)
    - Message Digest (MD2, MD4, MD5, MD6)
- **Pseudorandom Number Generators:** Produce seemingly random, deterministic sequences.

## SHA-1 (Secure Hash Algorithm 1)

SHA-1 produces a 160-bit (20-byte) message digest from input data, typically displayed as a 40-character hexadecimal number.

### SHA-1 Logic Operations

| `a` | `b` | `!a` | `a&b` | `a\|b` | `a^b` |
| :-: | :-: | :--: | :---: | :----: | :---: |
|  0  |  0  |  1   |   0   |   0    |   0   |
|  0  |  1  |  1   |   0   |   1    |   1   |
|  1  |  0  |  0   |   0   |   1    |   1   |
|  1  |  1  |  0   |   1   |   1    |   0   |

- **Right Shift (`>>`)**: Shifts bits right, discards least significant bits.
- **Left Shift (`<<`)**: Shifts bits left, fills with zeroes.

[See steps in action](https://hash-file.online/)

## Example: Encrypting "hi" using SHA-1

1. Convert to ASCII:

   - h => 104, i => 105

2. Convert to binary:

   - 104 => `01101000`, 105 => `01101001`

3. Concatenate binary:

   - `0110100001101001`

4. Append 1 to end:

   - `01101000011010011` (17 bits)

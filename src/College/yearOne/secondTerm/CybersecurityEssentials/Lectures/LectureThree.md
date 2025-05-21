---
title: Lecture 3
prev:
  text: Lecture Two
  link: /College/yearOne/secondTerm/CybersecurityEssentials/Lectures/LectureTwo
next: false
---

# Cybersecurity Essentials Lecture Three

## Cryptographic Algorithms Overview

### Single-Key Algorithms (Symmetric Encryption)

- Uses the **same key** for encryption and decryption.
- Common for securing stored data or communications between two parties.
- Vulnerable to compromise if the shared key is leaked.

#### Message Authentication Code (MAC)

- Ensures **data integrity** and **authentication**.
- Uses a **secret key** and often a hash function.
- The receiver recomputes the MAC and verifies it matches the sent MAC.

#### Cipher Types

- **Block Cipher**: Operates on fixed-size blocks (e.g., 128 bits).
  - Modes of Operation:
    1. ECB (Electronic Code Book)
    2. CBC (Cipher Block Chaining)
    3. CFB (Cipher Feedback)
    4. OFB (Output Feedback)
    5. CTR (Counter)
- **Stream Cipher**: Encrypts data bit-by-bit using XOR operations.

#### Block Cipher Example (ECB Mode)

- Convert plaintext to binary.
- XOR each block with a key.
- Produces ciphertext block-by-block independently.

#### CBC Mode

- Uses Initialization Vector (IV) for the first block.
- XORs the current plaintext with the previous ciphertext before encryption.
- Propagates error from block to block.

#### OFB Mode

- Uses IV as input to the cipher, XORs output with plaintext.
- Maintains synchronization via the IV stream.
- Bit-level error in IV can affect decryption.

## Key Generation Algorithms

### Key Management

- Involves secure **generation**, **distribution**, **storage**, and **exchange** of keys.

### Random Number Generation (RNG)

- Critical for key generation.
- Two criteria:
  - **Uniform Distribution**
  - **Independence**

#### Pseudorandom Number Generators (PRNGs)

- Deterministic, not truly random.
- Common Algorithm: **Linear Congruential Generator (LCG)**
  - Parameters: modulus ($m$), multiplier ($a$), increment ($c$), seed ($R_0$)
  - Example: $m=8, a=5, c=1, R_0=5$

## Two-Key Algorithms (Asymmetric Encryption)

### Overview

- Uses **two keys**: a public key for encryption and a private key for decryption.
- Public key is shared openly, private key remains confidential.
- Examples: **RSA**, **DH**, **DSA**, **ECDH**

### RSA Algorithm

- Steps to generate keys:
  1. Choose primes `p` and `q`
  2. Compute `n = p * q` and $\phi(n) = (p-1)(q-1)$
  3. Select `e` such that $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$
  4. Compute `d` such that $(d \cdot e) \equiv 1 \mod \phi(n)$
- Public Key: (n, e)
- Private Key: (n, d)
- Used in assignments with LCG to modify private key generation

## Operating System Security

### Layers of a Computer System

- Security at higher layers can be undermined by attacks on lower layers.

### OS Protection Principles

- **Physical separation**
- **Temporal separation**
- **Logical separation**
- **Cryptographic separation**

### Protected Objects

- Memory, I/O devices, programs, data, system hardware, bus, interrupt/status registers.

## Trusted Operating System Concepts

- **Kernel**: Core part of the OS.
- **Security Kernel**: Enforces security rules.
- **Reference Monitor (RM)**: Mediates all access to protected objects.
- **Trusted Computing Base (TCB)**: Core components enforcing security.

## Security Policy and Security Model

- **Security Policy**: Defines desired security goals.
- **Security Model**: Formal specification of the policy.
  - Enables formal proofs and system verification.

## Developing a Secure OS

1. Analyze the system
2. Define the security policy
3. Design the security model
4. Select implementation methods
5. Conceptual design and verification
6. Implementation and feedback loop for revisions

## Security Maintenance

- **Continuous process**:
  - Monitor logs
  - Backup systems
  - Patch and update software
  - Test regularly

## Linux/Unix Security

- **Patch Management**: Done via `/etc`, application config trees, or dotfiles.
- **Access Control**: Read, write, execute permissions per owner/group/others.
- **Exploits**:
  - **Local**: Elevate privileges from within the system.
  - **Remote**: Exploitable via networked services.

## Windows Security

- **Patch Management**: Managed via Windows Update, WSUS.
- **User Access Control**:
  - Discretionary and Mandatory Integrity Controls.
  - Follows Biba Integrity Model (low to high levels).
- **Registry Configuration**:
  - Centralized config via `regedit`.
  - Efficient for bulk modifications.

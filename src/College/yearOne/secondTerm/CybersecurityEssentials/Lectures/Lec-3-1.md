## Cryptographic Algorithms

### Single-Key Algorithms

Single-key cryptographic algorithms, also known as symmetric encryption algorithms, rely on a secret key shared between parties to protect data. These algorithms are used for encryption and message authentication.

- **Symmetric Encryption**: Takes data and a secret key as input to produce an unintelligible transformation, which can be reversed using the same key. Common applications include protecting stored data or communication between parties.
- **Message Authentication Code (MAC)**: A data element generated using a secret key and a cryptographic hash function to verify message integrity. The recipient recalculates the MAC to ensure the message has not been altered.
- **Block Cipher**: Operates on fixed-size data blocks (typically 128 bits). Modes of operation include:
  - **Electronic Code Book (ECB)**: Each block is encrypted independently using the formula $C_i = E(K, P_i)$. Decryption uses $P_i = D(K, C_i)$. Example: Encrypting "hi" involves converting ASCII values (h=104, i=105) to binary and processing each block.
  - **Cipher Block Chaining (CBC)**: Addresses ECB's limitation by ensuring different ciphertexts for identical plaintexts using an initialization vector (IV). Encryption: $C*1 = E_K(P_1 \oplus IV)$, $C_i = E_K(P_i \oplus C*{i-1})$. Decryption: $P*1 = D_K(C_1 \oplus IV)$, $P_i = D_K(C_i \oplus C*{i-1})$.
  - **Cipher Feedback (CFB)**: Starts with an IV, processes it with the key, and XORs with plaintext to produce ciphertext, which becomes the next IV.
  - **Output Feedback (OFB)**: Uses an IV shift register for encryption/decryption. An error in the IV (e.g., 30th bit) affects only the corresponding plaintext word (16 bits in a 16-bit word size).
  - **Counter (CTR)**: Uses a counter for encryption/decryption, providing parallel processing capabilities.
- **Stream Cipher**: Operates on data as a bit stream, typically using an XOR operation with a key-dependent transformation.

### Key Generation Algorithms

Key generation is critical for cryptographic security, ensuring randomness and unpredictability.

- **Blum Blum Shub (BBS) Generator**: A cryptographically strong pseudorandom bit generator. Steps:
  1. Choose two large prime numbers $p$ and $q$ where $p \equiv q \equiv 3 \pmod{4}$.
  2. Compute $n = p \times q$.
  3. Select a random seed $s$ relatively prime to $n$.
  4. Generate bits using $x*0 = s^2 \mod n$, $x_i = (x*{i-1})^2 \mod n$, $B_i = x_i \mod 2$.
- **Random Number Generation**: Requires uniform distribution and independence to ensure no value can be inferred from others.
- **Pseudorandom Number Generators (PRNGs)**: Deterministic algorithms producing statistically non-random sequences.
  - **Linear Congruential Generators (LCG)**: Defined by $R\_{i+1} = (a R_i + c) \mod m$, where $R_0$ is the seed, $a$ is the multiplier, $c$ is the increment, and $m$ is the modulus. The pseudorandom number is $U_i = R_i / m$. Example: For $m=8, a=5, c=1, R_0=5$, the sequence is computed as:
    - $R_1 = (5 \cdot 5 + 1) \mod 8 = 2$, $U_1 = 0.25$
    - $R_2 = (5 \cdot 2 + 1) \mod 8 = 3$, $U_2 = 0.375$
    - Continues up to $R_9 = 2$, $U_9 = 0.25$.
  - **Evaluation Criteria**: Full-period generation, apparent randomness (via statistical tests), and efficient 32-bit arithmetic implementation.

### Two-Key Algorithms

Asymmetric encryption uses a public key (shareable) and a private key (secret) for secure communication.

- **Asymmetric Cryptography**: Algorithms like RSA, DH, DSA, and ECDH. RSA is detailed below.
- **RSA (Rivest-Shamir-Adleman)**: Involves two keys for encryption and decryption.
  - **Key Generation**:
    1. Choose two prime numbers $p$ and $q$.
    2. Compute $n = p \times q$ and Euler’s totient $\phi(n) = (p-1)(q-1)$.
    3. Select $e$ (public exponent) where $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$.
    4. Compute $d$ (private exponent) where $d \cdot e \equiv 1 \pmod{\phi(n)}$.
    5. Public key: $(n, e)$; Private key: $(n, d)$.
  - **Encryption**: $C = M^e \mod n$, where $M$ is the message.
  - **Decryption**: $M = C^d \mod n$.
  - **Example**: For $p=3, q=11$, $n=33$, $\phi(33)=20$, $e=7$, $d=3$. Encrypt message "AC" (M=13): $C = 13^7 \mod 33 = 7$. Decrypt: $M = 7^3 \mod 33 = 13$, recovering "AC".

## Operating System Security

### Layers of a Computer System

A computer system comprises:

- Applications
- Services
- Operating System (OS)
- OS Kernel
- Hardware
  Security at higher layers can be compromised by attacks from lower layers, necessitating robust protection at the kernel and hardware levels.

### OS Protection Principles

Protection is based on separation:

- **Physical Separation**: Different processes use distinct physical resources (e.g., separate printers).
- **Temporal Separation**: Processes with different security needs run at different times.
- **Logical Separation**: Processes operate as if no other processes exist, restricting access to permitted domains.
- **Cryptographic Separation**: Data is hidden via encryption to prevent unauthorized access.

### Protected Objects

Shareable OS objects requiring protection include:

- Memory
- I/O devices (disks, printers, etc.)
- Programs and procedures
- Data
- Hardware (bus control, interrupt control, status registers)
- OS mechanisms (file management, memory management)

### Trusted Operating System Concepts

Key components for a trusted OS:

- **Kernel**: Handles low-level functions.
- **Security Kernel**: Enforces security mechanisms.
- **Reference Monitor**: Controls access to objects.
- **Trusted Computing Base (TCB)**: All components necessary to enforce the security policy.

### Security Policy and Security Model

- **Security Policy**: Defines expected security rules.
- **Security Model**: Represents the policy, often mathematically for formal proofs.

### Development of a Secure OS

Steps include:

1. System analysis
2. Define security policy
3. Create security model
4. Choose implementation method
5. Conceptual design
6. Verify design and implementation
   - Feedback loops ensure errors are addressed at each step.

### System Security Planning Process

Considers:

- System purpose and information stored
- User categories, privileges, and authentication
- Administrative management (local/remote)
- Access to external information
- Access control for stored information
- Additional security measures (firewalls, antivirus, logging)

### Linux vs. Windows Security

- **Linux**:
  - Open-source, free, uses a monolithic kernel.
  - More secure due to fewer vulnerabilities and better user control.
  - Three user accounts: Regular, Root (full privileges), Service.
  - Security practices: Patch management, configuration via text files, disabling unnecessary services, and managing users/permissions.
  - Vulnerable to local and remote exploits.
- **Windows**:
  - Paid, uses a hybrid kernel.
  - Less secure due to higher malware susceptibility.
  - Four user accounts: Administrator (full privileges), Standard, Child, Guest.
  - Security practices: Patch management via Windows Update, discretionary and mandatory integrity controls, centralized configuration in the registry.

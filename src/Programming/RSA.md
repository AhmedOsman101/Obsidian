# How RSA Works

- pick 2 prime numbers $(p, q)$, which are large numbers, they are private
- $n = p \times q$
- $\phi(n) = (p-1)(q-1)$ which returns the number of numbers coprime with $N$ (doesn't share a common factor with it)
- choose $e$ which must:
  - $1 < e < \phi(n)$
  - coprime with $n$ and $\phi(n)$
  - $e$ is a constant between (3, 5, 17, 65537)
- choose $d$ which must:
  - $d \times e \mod{\phi(n)} = 1$
  - $d = e^{-1} \mod{\phi(n)}$
- public key is (e, n); private key is (d, n)
- to Encrypt use: $m^e \mod{n}$, where $m$ is the original message
- to Decrypt use: $c^d \mod{n}$, where $c$ is the cipher text
- The message is converted to numbers

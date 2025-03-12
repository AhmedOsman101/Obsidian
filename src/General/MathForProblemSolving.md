---
title: Math for Problem Solving
prev:
  text: General Knowledge
  link: /General/index
next: false
---

# Math Notes for Problem Solving

## Logarithms (Logs)

**Formula:**
Given base $b$, where $b \gt 0$ and $b \neq 1$:
$$b^y = x$$
Then:
$$\log_b(x) = y$$

### Properties of logs:

#### 1. **Product Rule**

$$
\log_b(x \cdot y) = \log_b(x) + \log_b(y)
$$

The logarithm of a product is the sum of the logarithms.

Example:

$$
\log_2(8) = 3, \quad
\log_2(32) = 5, \quad
8 \cdot 3 = 256, \quad
\log_2(256) = 8
$$

$$
\log_2(8) + \log_2(32) = \log_2(256)
$$

---

#### 2. **Quotient Rule**

$$
\log_b\left(\frac{x}{y}\right) = \log_b(x) - \log_b(y)
$$

The logarithm of a quotient is the difference of the logarithms.

Example:

$$
\log_2(16) = 4, \quad
\log_2(4) = 2, \quad
\frac{16}{4} = 4, \quad
\log_2(4) = 2
$$

$$
\log_2(16) - \log_2(4) = \log_2(4)
$$

---

#### 3. **Power Rule**

$$
\log_b(x^k) = k \cdot \log_b(x)
$$

The logarithm of a number raised to an exponent is the exponent times the logarithm.

---

#### 4. **Change of Base Formula**

$$
\log_b(x) = \frac{\log_k(x)}{\log_k(b)}
$$

You can change the base of a logarithm using any positive base $k \neq 1$.

---

#### 5. **Logarithm of 1**

$$
\log_b(1) = 0
$$

The logarithm of 1 to any base is 0.

---

#### 6. **Logarithm of the Base**

$$
\log_b(b) = 1
$$

The logarithm of a base to itself is 1.

---

#### 7. **Inverse Property**

$$
b^{\log_b(x)} = x
\quad \text{and} \quad \log_b(b^x) = x
$$

The base raised to its logarithm cancels out, leaving the argument $x$.

---

#### 8. **Equality Property**

If:
$$\log_b(x) = \log_b(y)$$Then:
$$x = y$$

---

#### 9. **Logarithmic Identity**

For natural logarithms and exponential functions:

$$
e^{\ln(x)} = x
\quad \text{and} \quad \ln(e^x) = x
$$

---

#### 10. **Base Conversion**

You can express logarithms in terms of common logarithms ($\log_{10}$) or natural logarithms ($\ln$):

$$
\log_b(x) = \frac{\ln(x)}{\ln(b)} \quad \text{or} \quad \log_b(x) = \frac{\log_{10}(x)}{\log_{10}(b)}
$$

---

#### 11. **Multiplicative Inverse Property**

$$
\log_b\left(\frac{1}{x}\right) = -\log_b(x)
$$

The logarithm of a reciprocal is the negative logarithm.

### Applications on Logarithms

#### Finding Mulitplication by Logarithms

**Formula:**

$$
x \cdot y = e^{\ln(x \cdot y)}
$$

$$
\ln(x \cdot y) = \ln(x) + \ln(y)
$$

$$
x \cdot y = e^{\ln(x) + \ln(y)}
$$

**Or:**

1. Find $\log_b(x)$ and $\log_b(y)$, then add them.
2. Find the anit-log of thier sum. Raise the base to thier sum. $b^{\log_b(x)+\log_b(y)}$

**Example:** Find $5 \times 6$ using logarithms:

Note: $\log = \log_{10}$

$$
\log(5) \approx 0.6989, \quad
\log(6) \approx 0.7781
$$

$$
\log(5) + \log(6) \approx 1.4771
$$

$$
10^{\log(5)+\log(6)} = 10^{1.4771} = 30
$$

#### Finding Division by Logarithms

**Formula:**

$$
x \div y = e^{\ln \left( \frac{x}{y} \right)}
$$

$$
\ln\left( \frac{x}{y} \right) = \ln(x) - \ln(y)
$$

$$
x \div y = e^{\ln(x) - \ln(y)}
$$

**Or:**

1. Find $\log_b(x)$ and $\log_b(y)$, then subtract them.
2. Find the anit-log of thier difference. Raise the base to thier subtraction. $b^{\log_b(x) \textminus \log_b(y)}$

**Example:** Find $50 \div 5$ using logarithms:

$$
\log_2(50) \approx 5.6438, \quad
\log_2(5) \approx 2.3219
$$

$$
\log_2(50) \textminus \log_2(5) \approx 3.3219
$$

$$
2^{\log_2(50) \textminus \log_2(5)} = 2^{3.3219} = 10
$$

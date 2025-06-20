---
title: Lecture 8
prev:
  text: Lecture Seven
  link: /College/yearOne/secondTerm/IntroToIot/Lectures/LectureSeven
next:
  text: Lecture Nine
  link: /College/yearOne/secondTerm/IntroToIot/Lectures/LectureNine
---

# Introduction to IoT - Lecture 8: Big Data Analytics Techniques

## Supervised and Unsupervised Learning

- **Supervised Learning**: Involves labeled data; the algorithm learns from input-output pairs.
  - Examples: Classification, Regression
- **Unsupervised Learning**: No labeled data; the algorithm tries to learn structure from the input.
  - Examples: Clustering, Association Rule Mining

### Supervised Learning

- **Input Data:** Labeled (predefined outputs).
- **Training:** Uses a training dataset to learn patterns.
- **Goal:** **Prediction** (e.g., classifying spam, predicting prices).
- **Types:**
  - **Regression** (continuous outputs, like house prices).
  - **Classification** (discrete outputs, like "cat" vs. "dog").
- **Classes:** Known in advance.
- **Analysis:** Typically offline (pre-processed data).

### Unsupervised Learning

- **Input Data:** Unlabeled (no predefined outputs).
- **Training:** Works directly on raw input data.
- **Goal:** **Analysis** (e.g., finding hidden patterns).
- **Types:**
  - **Clustering** (grouping similar data, like customer segments).
  - **Association** (discovering relationships, like "people who buy X also buy Y").
- **Classes:** Unknown—learns from data structure.
- **Analysis:** Often real-time (dynamic data).

## Big Data Techniques Overview

| Technique                  | Category             | Use Case                                      |
| -------------------------- | -------------------- | --------------------------------------------- |
| K-Means Clustering         | Clustering           | Group items by similarity                     |
| Apriori                    | Association Rules    | Discover relationships between items          |
| Linear/Logistic Regression | Regression           | Find relationship between inputs and outcomes |
| TF-IDF                     | Text Analysis        | Analyze and weight terms in textual data      |
| Naïve Bayes, Decision Tree | Classification       | Assign labels to known objects                |
| ARIMA                      | Time Series Analysis | Forecast future values in temporal data       |

## Clustering

- Clustering groups similar data points together.
- **Unsupervised** learning technique.
- Data points in the same cluster are highly similar; different clusters are dissimilar.

## Applications of Cluster Analysis

- **Marketing**: Target customer segments
- **Biology**: Classify species or gene functions
- **City Planning**: Group houses by features
- **Other**: Pattern recognition, image processing, etc.

## Types of Clustering

- **Exclusive (Hard) Clustering**: Each data point belongs to only one cluster (e.g., K-Means).
- **Overlapping (Soft) Clustering**: Data points can belong to multiple clusters (e.g., Fuzzy C-Means).
- **Hierarchical Clustering**: Builds a tree-like cluster structure (dendrogram).

## K-Means Clustering

- Unsupervised technique for partitioning `n` data points into `k` clusters.
- Each point is assigned to the nearest centroid.
- **Input**: Numeric features with a defined distance metric (e.g., Euclidean).
- **Output**: Cluster centroids and point-cluster assignments.

### Steps in K-Means

1. Choose `k` and initialize centroids.
2. Assign each point to the nearest centroid.
3. Recompute centroids based on new assignments.
4. Repeat steps 2–3 until convergence (centroids stabilize or oscillate).

## Association Rules

- **Unsupervised** technique for discovering relationships between items.
- Does not predict an outcome; identifies patterns.
- Example format: **If X is observed, then Y is also observed.**
- Commonly used in **Market Basket Analysis** (e.g., customers who buy bread also buy butter).
- **Example algorithm**: Apriori

## Regression

- Determines the relationship between input features and an output variable.
- Identifies influential variables and helps improve outcomes.
- Two major types: **Linear** and **Logistic** regression.

## Linear Regression

- Models relationship between continuous outcome and input variables.
- Assumes a linear relationship.
- Is **probabilistic**, not deterministic.
- Can include transformations to achieve linearity.

### Linear Regression Model Equation

$$ y = \beta*0 + \beta_1 x_1 + \beta_2 x_2 + \ldots + \beta*{p-1} x\_{p-1} + \varepsilon $$

#### Key Components

1. **Outcome Variable** ($y$): The continuous target variable being predicted.
2. **Input Variables** ($x_j$): Features influencing $y$, e.g., $x_1, x_2, \dots$.
3. **Intercept** ($\beta_0$): Baseline value of $y$ when all $x_j = 0$.
4. **Coefficients** ($\beta_j$): Quantify the effect of each $x_j$ on $y$. For example, $\beta_1$ is the change in $y$ for a 1-unit increase in $x_1$, holding other variables constant.
5. **Error Term** ($\varepsilon$): Captures unexplained variability, reflecting the model's probabilistic nature (not deterministic).

## Logistic Regression

- Used when the outcome is **categorical** (e.g., Yes/No, Pass/Fail).
- Based on the **logistic function** (sigmoid).
- Outputs probabilities in the range **(0, 1)**.
- Suitable for binary classification problems.

### Logistic Regression Model Equation

**Linear Component**:  
$$ y = \beta*0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta*{p-1} x\_{p-1} $$

**Logistic Function (Sigmoid)**:  
$$ p(x*1, x_2, \ldots, x*{p-1}) = \frac{e^y}{1 + e^y} $$

#### Key Components

1. **Linear Predictor** ($y$): A linear combination of input variables ($x_j$) and coefficients ($\beta_j$), similar to linear regression.
2. **Logistic Function**: Transforms $y$ into a probability $p$ between **0 and 1**, ensuring outputs are valid probabilities.
3. **Probability Interpretation**: $p$ represents the likelihood of a binary outcome (e.g., "success" or "failure").

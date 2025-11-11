# Lecture 4: Normalization

## Normalization

**Definition:**
Normalization is the process of organizing data in a database to minimize **data redundancy** and **update anomalies**.

### Objectives

- Reduce data duplication.
- Decompose poorly structured relations into smaller, stable tables.
- Maintain data integrity and consistency.
- Based on **Functional Dependencies (FDs)**.

### Common Normal Forms

- 1NF – Eliminate repeating groups, ensure atomic values.
- 2NF – Eliminate partial dependencies.
- 3NF – Eliminate transitive dependencies.
- BCNF, 4NF, 5NF – Higher normalization for advanced design refinement.

## Anomalies

**Database anomalies** are inconsistencies that occur when modifying data in unnormalized tables.

| Type                  | Description                                               |
| --------------------- | --------------------------------------------------------- |
| **Insertion Anomaly** | Unable to add data due to missing other information.      |
| **Deletion Anomaly**  | Removing a record unintentionally deletes important data. |
| **Update Anomaly**    | Inconsistent data after partial updates.                  |

**Goal:** Remove anomalies to ensure reliable insertion, deletion, and modification operations.

## Functional Dependency (FD)

A **functional dependency (FD)** exists when one attribute (or set of attributes) determines another attribute.

Notation:
`X -> Y` means attribute **Y** is functionally dependent on **X**.

- **X**: Determinant
- **Y**: Dependent attribute

**Example:**
`Student_ID -> Student_Name`
Each student ID maps to exactly one name, but a name may belong to multiple students.

## First Normal Form (1NF)

### A relation is in 1NF if:

1. All attribute values are **atomic** (no multiple or repeating values).
2. There are **no repeating groups or columns**.
3. Each record can be **uniquely identified** using a **primary key**.

#### Example

**Unnormalized Table:**

| Department_Name   | Student_Name      |
| ----------------- | ----------------- |
| BE-IT             | Rasmus, Jens, Kim |
| Multimedia Design | Sara              |

**1NF Conversion:**

| Department_Name   | Student_Name |
| ----------------- | ------------ |
| BE-IT             | Rasmus       |
| BE-IT             | Jens         |
| BE-IT             | Kim          |
| Multimedia Design | Sara         |

Each record now has atomic values.

### Exercise A – 1NF

**Initial Table:**

| Product_ID | Product_Name | Category  | Price_1 | Price_2 | Price_3 |
| ---------- | ------------ | --------- | ------- | ------- | ------- |
| P001       | Wooden Chair | Furniture | 150.00  | 135.00  | 120.00  |
| P002       | Metal Table  | Office    | 300.00  | 280.00  | 250.00  |

**Step 1:** Separate composite attributes
-> Split `Category` into `Category_Style` and `Category_Material`.

**Step 2:** Remove repeating values
-> Store each price as a separate record.

**Final 1NF Table:**

| Product_ID | Product_Name | Category_Style | Category_Material | Price  |
| ---------- | ------------ | -------------- | ----------------- | ------ |
| P001       | Wooden Chair | Furniture      | Wood              | 150.00 |
| P001       | Wooden Chair | Furniture      | Wood              | 135.00 |
| P001       | Wooden Chair | Furniture      | Wood              | 120.00 |
| P002       | Metal Table  | Office         | Metal             | 300.00 |
| P002       | Metal Table  | Office         | Metal             | 280.00 |
| P002       | Metal Table  | Office         | Metal             | 250.00 |

### Exercise B – 1NF

Normalize a table with multiple course columns (Course1–Course7) into atomic records by creating one record per student-course pair.

**Initial Table:**

| Student_ID | Student_Name | Course1 | Course2 | Course3 |
| ---------- | ------------ | ------- | ------- | ------- |
| S101       | John Smith   | Math    | Science | English |
| S102       | Maria Garcia | History | Art     | NULL    |

**1NF Conversion:**

| Student_ID | Student_Name | Course  |
| ---------- | ------------ | ------- |
| S101       | John Smith   | Math    |
| S101       | John Smith   | Science |
| S101       | John Smith   | English |
| S102       | Maria Garcia | History |
| S102       | Maria Garcia | Art     |

## Second Normal Form (2NF)

### A relation is in 2NF if:

1. It is already in **1NF**.
2. Every **non-key attribute** is **fully functionally dependent** on the entire **primary key**, not part of it.

**Key Concept:** Eliminate **partial dependencies** (dependencies on part of a composite key).

**Decomposition Process:**

- Identify attributes that depend only on part of a composite key.
- Move them into a new table with the corresponding key.

### Example – Decomposition to 2NF

**Unnormalized Table:**

| Lecturer_ID | Lecturer_Name | Gender | DOB  | Department_ID | Department_Name  | City    | Zip_Code | Head_of_Department |
| ----------- | ------------- | ------ | ---- | ------------- | ---------------- | ------- | -------- | ------------------ |
| L001        | Dr. Johnson   | M      | 1975 | D01           | Computer Science | Aalborg | 9000     | Dr. Petersen       |
| L002        | Dr. Nielsen   | F      | 1980 | D02           | Mathematics      | Aalborg | 9000     | Dr. Hansen         |

**Step 1:** Split into two tables:
**Lecturer Table**

| Lecturer_ID | Lecturer_Name | Gender | DOB  | Department_ID |
| ----------- | ------------- | ------ | ---- | ------------- |
| L001        | Dr. Johnson   | M      | 1975 | D01           |
| L002        | Dr. Nielsen   | F      | 1980 | D02           |

**Department Table**

| Department_ID | Department_Name  | City    | Zip_Code | Head_of_Department |
| ------------- | ---------------- | ------- | -------- | ------------------ |
| D01           | Computer Science | Aalborg | 9000     | Dr. Petersen       |
| D02           | Mathematics      | Aalborg | 9000     | Dr. Hansen         |

Each non-key attribute now depends entirely on its table's primary key.

### Exercise C – 2NF

Given supplier and product data, separate supplier attributes (status, city) from transaction attributes (product and quantity).
Result: two relations — one for suppliers, one for supply records.

## Third Normal Form (3NF)

### A relation is in 3NF if:

1. It is in **2NF**.
2. There are **no transitive dependencies** (non-key attributes depending on other non-key attributes).

**Condition:**
Every non-prime attribute depends **only on the primary key**.

### Example – 3NF Decomposition

**Original Table:**

| Department_ID | Department_Name  | Street                  | City    | Zip_Code |
| ------------- | ---------------- | ----------------------- | ------- | -------- |
| D01           | Computer Science | Selma Lagerlöfs Vej 300 | Aalborg | 9000     |
| D02           | Mathematics      | Fredrik Bajers Vej 7G   | Aalborg | 9220     |

**Transitive Dependency:**
`Department_ID -> City` and `City -> Zip_Code`

**Decomposed Tables:**

1. Department Table

| Department_ID | Department_Name  | Street                  | City    |
| ------------- | ---------------- | ----------------------- | ------- |
| D01           | Computer Science | Selma Lagerlöfs Vej 300 | Aalborg |
| D02           | Mathematics      | Fredrik Bajers Vej 7G   | Aalborg |

2. City Table

| City    | Zip_Code |
| ------- | -------- |
| Aalborg | 9000     |
| Aalborg | 9220     |

Now, Zip_Code depends directly on City, not on Department_ID.

### Exercise E – 3NF

**Original Table:**

| Customer_ID | Customer_Name | AccNo | BankCode | Bank        |
| ----------- | ------------- | ----- | -------- | ----------- |
| C001        | Anna Jensen   | 12345 | B01      | Nordea Bank |
| C002        | Peter Hansen  | 67890 | B02      | Jyske Bank  |

**Decompose:**

1. **Customer Table:**

| Customer_ID | Customer_Name | AccNo | BankCode |
| ----------- | ------------- | ----- | -------- |
| C001        | Anna Jensen   | 12345 | B01      |
| C002        | Peter Hansen  | 67890 | B02      |

2. **Bank Table:**

| BankCode | Bank        |
| -------- | ----------- |
| B01      | Nordea Bank |
| B02      | Jyske Bank  |

Eliminates transitive dependency (`BankCode -> Bank`).

## Boyce-Codd Normal Form (BCNF)

### A table is in BCNF if:

1. It is in **3NF**.
2. For every functional dependency **X -> Y**, **X** is a **superkey**.

**In short:** Every determinant must be a candidate key.

**Note:** BCNF is a stricter version of 3NF and eliminates remaining redundancy that 3NF may allow.

## Summary

| Normal Form | Key Condition                             | Goal                                                     |
| ----------- | ----------------------------------------- | -------------------------------------------------------- |
| **1NF**     | Eliminate repeating groups; atomic values | Remove duplication within columns                        |
| **2NF**     | No partial dependency on a composite key  | Remove redundancy from subsets of primary key            |
| **3NF**     | No transitive dependency                  | Ensure all fields depend only on primary key             |
| **BCNF**    | Every determinant is a candidate key      | Stronger version of 3NF ensuring full dependency on keys |

## Assignment

**Task:**
Design a **Patient Database** and normalize it up to 3NF or BCNF.

**Attributes:**

- Personal details: `Name`, `CPR`, `Address`, `Phone`, `DOB`, `Gender`, `MaritalStatus`, `Race`.
- Medical details: `Reason of Hospitalization`, `Date of Hospitalization`, `Drug_Abuse`, `Smoker`.
- Administrative details: `Insurance_Number`, `Insurance_Name`, `Coverage_Date`, `Nearest_Relative`, `Relative_Phone`, `DrivingLicenseNum`, `DrivingLicenseState`.

**Deliverables:**

- Create the tables.
- Normalize them.
- Specify **keys**, **relationships**, and **cardinalities**.
- Insert **5 patient records**.

### Patient Database Design (3NF)

**1. Patient Table**

| CPR        | Name           | DOB        | Gender | MaritalStatus | Race      | Address                       | Phone    | Insurance_Number | DrivingLicenseNum | DrivingLicenseState |
| ---------- | -------------- | ---------- | ------ | ------------- | --------- | ----------------------------- | -------- | ---------------- | ----------------- | ------------------- |
| 0101801234 | Lars Nielsen   | 1980-01-01 | M      | Married       | Caucasian | Nørrebrogade 12, 9000 Aalborg | 12345678 | INS001           | DL12345           | Northern Denmark    |
| 1505905678 | Maria Petersen | 1990-05-15 | F      | Single        | Caucasian | Vesterbro 25, 9000 Aalborg    | 87654321 | INS002           | NULL              | NULL                |

**2. Hospitalization Table**

| Hospitalization_ID | CPR        | Reason_of_Hospitalization | Date_of_Hospitalization | Drug_Abuse | Smoker |
| ------------------ | ---------- | ------------------------- | ----------------------- | ---------- | ------ |
| H001               | 0101801234 | Appendicitis              | 2024-01-15              | No         | Yes    |
| H002               | 1505905678 | Pneumonia                 | 2024-02-20              | No         | No     |

**3. Insurance Table**

| Insurance_Number | Insurance_Name    | Coverage_Date |
| ---------------- | ----------------- | ------------- |
| INS001           | Danmark Insurance | 2023-05-01    |
| INS002           | Tryg Forsikring   | 2024-01-10    |

**4. Relative Table**

| Relative_ID | CPR        | Nearest_Relative | Relative_Phone |
| ----------- | ---------- | ---------------- | -------------- |
| R001        | 0101801234 | Anna Nielsen     | 11223344       |
| R002        | 1505905678 | Peter Petersen   | 44332211       |

**Relationships:**

- Patient (1) Hospitalization (1:N)
- Patient (1) Insurance (1:1)
- Patient (1) Relative (1:N)

**Keys:**

- Patient: CPR (Primary Key)
- Hospitalization: Hospitalization_ID (Primary Key), CPR (Foreign Key)
- Insurance: Insurance_Number (Primary Key)
- Relative: Relative_ID (Primary Key), CPR (Foreign Key)

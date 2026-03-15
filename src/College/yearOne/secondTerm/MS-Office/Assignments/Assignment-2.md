---
title: Assignment Two
prev:
  text: Assignments
  link: "/College/yearOne/secondTerm/MS-Office/Assignments/index"
next: false
---

# Microsoft Office Assignment Two

## Task 1

### P1: Define database management system and define components of MS-Access

A **Database Management System (DBMS)** is software that allows users to create, manage, and manipulate databases.
It provides an interface to store, retrieve, update, and delete data efficiently while ensuring data integrity and security.
Microsoft Access is an example of a DBMS designed for small to medium-sized databases.

**Components of MS Access:**

- **Tables:** The foundation of the database, where data is stored in rows (records) and columns (fields). Each table holds data about a specific entity (e.g., Customers, Orders).
- **Queries:** Tools to retrieve, filter, and manipulate data from tables based on specific criteria. Queries can join multiple tables and perform calculations.
- **Forms:** User-friendly interfaces for entering, viewing, or editing data in tables or queries. They simplify data interaction without directly accessing tables.
- **Reports:** Formatted outputs for presenting data, often used for printing or summarizing information from tables or queries.
- **Macros:** Sets of automated commands to perform repetitive tasks, enhancing efficiency.
- **Modules:** Advanced programming units using VBA (Visual Basic for Applications) to customize Access functionality.

---

### P2: List the data types in MS Access and explain with a practical example how the Lookup Wizard data type is applied between two tables and how to create a Calculated field

**Data Types in MS Access:**

- **Short Text:** For text up to 255 characters (e.g., names).
- **Long Text:** For longer text, like notes or descriptions.
- **Number:** For numeric values (e.g., Integer, Double).
- **Date/Time:** For dates and times.
- **Currency:** For monetary values with precise decimal places.
- **AutoNumber:** Automatically generates a unique number for each record.
- **Yes/No:** For Boolean (true/false) values.
- **OLE Object:** For embedding files like images or documents.
- **Hyperlink:** For storing web or email addresses (e.g., [google.com](https://google.com)).
- **Attachment:** For attaching files to records.
- **Calculated:** For fields that compute values based on other fields.
- **Lookup Wizard:** Creates a field that links to another table or a list of values.

**Practical Example - Lookup Wizard:**

Suppose you have two tables: `Departments` (DepartmentID, DepartmentName) and `Employees` (EmployeeID, FirstName, Department). You want the `Department` field in `Employees` to show a dropdown of department names from `Departments`.

1. In Design View of the `Employees` table, add a field named `Department`.
2. Set its data type to **Lookup Wizard**.
3. Choose "I want the lookup field to get the values from another table or query."
4. Select the `Departments` table.
5. Choose `DepartmentName` to display and `DepartmentID` to store (hidden).
6. Finish the wizard. Now, when entering data in `Employees`, you select a department from a dropdown, linking the tables via `DepartmentID`.

**Creating a Calculated Field:**

In a table `Orders` with fields `UnitPrice` (Currency) and `Quantity` (Number), create a calculated field for total cost:

1. In Design View of `Orders`, add a field named `TotalCost`.
2. Set its data type to **Calculated**.
3. In the Expression Builder, enter: `[UnitPrice] * [Quantity]`.
4. Set the result type to Currency.
5. Save the table. The `TotalCost` field will automatically compute the product for each record.

---

### P3: Explain the types of keys in Access databases, types of relationships, recursive relationships, and explain the 'Enforce Referential Integrity' option with examples

**Types of Keys:**

- **Primary Key:** A unique identifier for each record in a table (e.g., `EmployeeID` in an `Employees` table).
- **Foreign Key:** A field in one table that links to the primary key of another table (e.g., `DepartmentID` in `Employees` linking to `Departments`).
- **Candidate Key:** Any field (or set of fields) that could uniquely identify records but isn't the primary key.
- **Composite Key:** A primary key made of multiple fields (e.g., `OrderID` + `ProductID` in an order details table).

**Types of Relationships:**

- **One-to-One:** Each record in Table A relates to one record in Table B (e.g., a person and their passport).
- **One-to-Many:** One record in Table A relates to multiple records in Table B (e.g., one department to many employees).
- **Many-to-Many:** Multiple records in Table A relate to multiple records in Table B, implemented via a junction table (e.g., students and courses via an enrollment table).

**Recursive Relationships:**

A table relates to itself. For example, in an `Employees` table, a field `ManagerID` (foreign key) references `EmployeeID` (primary key) to show who manages whom. Employee 1 might manage Employee 2, where `ManagerID` of Employee 2 is Employee 1's `EmployeeID`.

**Enforce Referential Integrity:**

This ensures that relationships between tables remain valid. A foreign key value must match an existing primary key value, or be null, and you can't delete a primary key record if it's referenced elsewhere.

- **Example:** In `Departments` (DepartmentID, Name) and `Employees` (EmployeeID, DepartmentID), enabling referential integrity:
  - Prevents adding an employee with a `DepartmentID` that doesn't exist in `Departments`.
  - Prevents deleting a department if employees are assigned to it.
  - **Cascade Update:** If `DepartmentID` changes in `Departments`, it updates in `Employees`.
  - **Cascade Delete:** Deleting a department deletes its employees.

---

### P4: Define queries in Access with an example using the Query Wizard to retrieve data

A **query** in Access retrieves, filters, or manipulates data from one or more tables based on specified criteria. It can display results, perform calculations, or update records.

**Example Using Query Wizard:**

To find employees in a specific department from an `Employees` table:

1. Go to the **Create** tab, click **Query Wizard**.
2. Select **Simple Query Wizard** and click OK.
3. Choose the `Employees` table.
4. Add fields: `EmployeeID`, `FirstName`, `DepartmentID`.
5. Click Next, then Finish to create the query.
6. In Design View, add a criterion under `DepartmentID`, e.g., `=1`, to filter for Department 1.
7. Run the query (click the red exclamation mark) to see results.

This displays all employees where `DepartmentID` is 1.

---

### P5: Define the form and method of design

A **form** in Access is a user interface for entering, viewing, or editing data in tables or queries. It simplifies interaction compared to raw table views.

**Method of Design:**

1. **Form Wizard:**

- Go to **Create** tab > **Form Wizard**.
- Select a table/query (e.g., `Employees`).
- Choose fields (e.g., `FirstName`, `DepartmentID`).
- Select a layout (e.g., Columnar).
- Name the form and finish.

2. **Design View:**

- Go to **Create** tab > **Form Design**.
- Add a record source (e.g., `Employees` table) via the Property Sheet.
- Use the toolbox to add controls (text boxes, labels).
- Bind controls to fields by setting their Control Source.

3. **Layout View:** Adjust the form's appearance while seeing live data.
4. Save and test the form.

---

### M1: Explain the record source in Form Design and difference between selection type: form and selection type: section in the property sheet of Form Design

**Record Source:**

The **record source** in Form Design specifies the data source for the form, such as a table (e.g., `Employees`) or a query. It's set in the Property Sheet under the **Data** tab, determining what data the form displays or edits.

**Selection Type: Form vs. Section:**

- **Form:** Refers to properties affecting the entire form (e.g., record source, default view). In the Property Sheet, selecting "Form" shows options like `Record Source` or `Allow Edits`.
- **Section:** Refers to specific parts of the form (e.g., Form Header, Detail, Form Footer). Selecting a section in the Property Sheet shows properties like `Height` or `Visible`, affecting only that section's layout or behavior.

---

### M2: List the categories of button controls and their uses, and differences between Combo Box, List Box, Check Box, and Option Button

**Categories of Button Controls and Uses:**

- **Command Buttons:** Trigger actions (e.g., save record, open another form). Use: Add via **Controls** group in Design View, set action via the wizard (e.g., "Close Form").
- **Navigation Buttons:** Move between records (e.g., Next, Previous). Use: Automatically added with form navigation controls.

**Differences:**

- **Combo Box:** A dropdown list allowing one selection; can type to search. Use: Select `DepartmentID` with department names visible.
- **List Box:** Displays a list for one or multiple selections; no typing. Use: Show all departments for selection.
- **Check Box:** A toggle for Yes/No values. Use: Mark an employee as "Active."
- **Option Button:** Selects one option from a group. Use: Choose employee status (e.g., Full-Time, Part-Time).

---

### M3: Explore the report and difference between Report Header, Report Footer, Page Header, Page Footer, and Detail section

A **report** in Access presents data from tables/queries in a formatted, often printable way, summarizing or detailing information.

**Differences:**

- **Report Header:** Appears once at the start of the report (e.g., title, logo).
- **Report Footer:** Appears once at the end (e.g., grand totals).
- **Page Header:** Appears at the top of every page (e.g., column headings).
- **Page Footer:** Appears at the bottom of every page (e.g., page numbers).
- **Detail Section:** Repeats for each record (e.g., rows of employee data).

---

### D1: Develop a program that can be used to solve a real-world problem using all the skills you have learned in MS-Access and mention in Task1 (all P and M)

## Task 2

### P1: Explore MS PowerPoint and mention how to add a new slide, change the background of a single slide, and apply to all

- **Add a New Slide:**
  - Go to the **Home** tab > **New Slide**.
  - Select a layout (e.g., Title and Content).
  - Alternatively, right-click in the slide thumbnail pane > **New Slide**.

- **Change Background of a Single Slide:**
  - Select the slide in the thumbnail pane.
  - Go to **Design** tab > **Format Background**.
  - Choose a fill (e.g., Solid, Gradient), adjust settings.
  - Changes apply only to the selected slide by default.

- **Apply to All:**
  - In the Format Background pane, click **Apply to All** after setting the background.

---

### P2: Difference between Normal view and Slide Show view

- **Normal View:** The editing mode showing slide thumbnails (left), the current slide (center), and notes (bottom). Used for designing slides.
- **Slide Show View:** The presentation mode displaying slides full-screen, starting from the selected slide. Animations and transitions are active, used for presenting.

---

### P3: Explain how to insert a table, SmartArt, hyperlink, and create an interactive PowerPoint using Action Buttons to slide

- **Insert a Table:**
  - Go to **Insert** tab > **Table**.
  - Select rows/columns from the grid or choose **Insert Table** for custom sizes.

- **Insert SmartArt:**
  - Go to **Insert** tab > **SmartArt**.
  - Pick a type (e.g., Hierarchy), click OK, and add text.

- **Insert a Hyperlink:**
  - Select text/object, go to **Insert** tab > **Hyperlink**.
  - Link to a web page, slide, or file, then click OK.

- **Interactive PowerPoint with Action Buttons:**
  - Go to **Insert** tab > **Shapes** > Action Buttons (e.g., Next).
  - Draw the button on the slide.
  - In the Action Settings dialog, set it to link to the next slide or a specific slide.
  - Add multiple buttons (e.g., for a quiz) to navigate interactively.

---

### M1: Difference between Transitions and Animations in PowerPoint

- **Transitions:** Effects applied to the entire slide when moving to the next (e.g., Fade). Set via **Transitions** tab.
- **Animations:** Effects on specific objects within a slide (e.g., text flying in). Set via **Animations** tab.

---

### M2: Add audio that plays automatically when the slide starts

- Go to **Insert** tab > **Audio** > **Audio on My PC**.
- Select an audio file and insert it.
- In the **Playback** tab, set **Start** to **Automatically**.
- Optionally, check **Hide During Show** to conceal the icon.

---

### M3: Describe how you can use the Slide Master to unify the design of your presentation

- Go to **View** tab > **Slide Master**.
- Edit the top master slide for overall design (background, fonts, logos).
- Customize layout masters below for specific slide types.
- Changes apply to all slides using those layouts.
- Click **Close Master View** to return.

---

### D1: Design an impressive presentation to showcase the database project you developed using all the skills mentioned in all the previous tasks

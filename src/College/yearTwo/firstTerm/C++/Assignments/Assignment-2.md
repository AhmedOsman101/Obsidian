# Assignment Solutions: C++ Programming Concepts in the University SIS Scenario

## Task 1 (P7): Arrays, Vectors, and Structures in C++

**Arrays in C++** are contiguous memory blocks storing multiple elements of the same type. In the SIS scenario:

- **One-dimensional arrays** store student IDs or course codes
- **Multi-dimensional arrays** manage schedules (e.g., `string schedule[5][8]` for 5 days × 8 periods)

**Vectors** (from `<vector>`) are dynamic arrays that resize automatically. Example: `vector<Student> enrolledStudents` for managing variable student counts.

**Structures** group different data types. Example:

```cpp
struct Student {
    int id;
    string name;
    float gpa;
};
```

Used for storing student records with mixed data types.

## Task 2 (P8): Functions in C++

**Functions** are reusable code blocks. Types include:

- **Void functions**: Perform actions without returning values.
- **Value-returning functions**: Return results.
- **Parameterized functions**: Accept inputs.
- **Inline functions**: For small, frequently used code
- **Recursive functions**: Call themselves (e.g., for directory traversal)

In the SIS, functions organize operations like grade calculation and report generation.

## Task 3 (P9): Pointers in C++

**Pointers** store memory addresses. Example from SIS:

```cpp
Student* studentPtr = &studentRecord;
studentPtr->grade = 95.0; // Access member via pointer
```

Used for dynamic memory allocation when creating new student records at runtime.

## Task 4 (M3): Comparing Arrays, Vectors, and Structures

| Feature      | Arrays                | Vectors                       | Structures          |
| ------------ | --------------------- | ----------------------------- | ------------------- |
| Size         | Fixed at compile-time | Dynamic, resizable            | Fixed but flexible  |
| Data types   | Homogeneous           | Homogeneous                   | Heterogeneous       |
| Memory       | Stack allocation      | Heap allocation               | Stack/heap          |
| Functions    | No built-in methods   | `.push_back()`, `.size()`     | Can contain methods |
| Usage in SIS | Fixed schedules       | Student lists (variable size) | Student records     |

Arrays suit fixed data (course codes), vectors handle dynamic collections (enrolled students), and structures model entities (Student, Professor).

## Task 5 (D3): Program Design Using Functions, Arrays, Vectors, and Structures

For the SIS:

- **Structures**: Define `Student`, `Course`, `Professor` types
- **Vectors**: `vector<Student> allStudents` manages dynamic enrollment
- **Arrays**: `string courseCodes[50]` stores fixed course catalog
- **Functions**: Modularize operations:

  ```cpp
  void enterGrades(Student& s);
  float calculateAverage(const vector<float>& grades);
  vector<Student> filterByGrade(float threshold);
  ```

Example integration: A `GradeManager` uses arrays for fixed weights, vectors for student lists, structures for records, and functions for calculations.

## Task 6 (P10): File Handling in C++

**File handling** uses `<fstream>` for reading/writing files. Importance in SIS:

- Persistent storage of student records
- Backup and data recovery
- Report generation (transcripts, attendance)

Example: Saving grades to `"grades.txt"` ensures data persists after program closure.

## Task 7 (P11): Classes and Objects in C++

**Classes** are blueprints defining attributes and methods. **Objects** are instances.

SIS Example:

```cpp
class Student {
private:
    int id;
    string name;
public:
    void enrollCourse(Course c);
    float calculateGPA();
};

// Creating objects
Student student1; // student1 is an object of Student class
Professor prof1;  // prof1 is an object of Professor class
```

Classes: `Student`, `Professor`, `Course`. Objects: `student1`, `prof1`, `courseCS101`.

## Task 8 (M4): File Handling Solution Example

**Problem**: Store and retrieve student attendance.

**Solution**:

```cpp
#include <fstream>
// Save attendance
void saveAttendance(const vector<Student>& students) {
    ofstream file("attendance.txt");
    for (const auto& s : students) {
        file << s.id << " " << s.attendanceDays << "\n";
    }
}
// Load attendance
void loadAttendance(vector<Student>& students) {
    ifstream file("attendance.txt");
    int id, days;
    while (file >> id >> days) {
        // Update student records
    }
}
```

This ensures attendance data persists across sessions.

## Task 9 (D4): Comprehensive SIS Program Design

**Integrated Design**:

1. **Classes & Objects**: `Student`, `Professor`, `Course` classes with inheritance
2. **File Handling**: Save/load data to `students.dat`, `courses.dat`
3. **Functions**: Modular operations for enrollment, grading, reporting
4. **Arrays**: Fixed-size arrays for schedule slots (`Course schedule[7][10]`)
5. **Vectors**: Dynamic lists for enrolled students
6. **Structures**: `struct Address` nested in `Student`
7. **Pointers**: Dynamic allocation of new course objects

**Example Integration**:

```cpp
class SIS {
private:
    vector<Student*> students; // Pointers for polymorphism
    Course courses[100]; // Fixed course catalog
    vector<Professor> professors;

    void saveToFile() { /* File handling */ }
    void loadFromFile() { /* File handling */ }
public:
    void addStudent(Student* s) { students.push_back(s); }
};
```

This design uses all required concepts to build a maintainable, real-world SIS.

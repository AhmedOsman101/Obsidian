# Programming Essentials in Python Lecture 2

### Identifiers in Python

The general rules for naming variables (identifiers) in Python are:

1. **Unique Names**: Python variables must be identified with unique names.
2. **Allowed Characters**: Names can contain letters, digits, and underscores `_`.
3. **Starting Character**: Names must begin with a letter or an underscore `_`.
4. **Case Sensitivity**: Names are case-sensitive (e.g., `myVar` and `myvar` are different variables).
5. **No Whitespaces or Special Characters**: Names cannot contain whitespaces or special characters like `!`, `#`, `%`, `$`, etc.
6. **Cannot Start with a Number**: Names cannot begin with a number.
7. **Reserved Words**: Reserved words (keywords) cannot be used as names.

```Python
num = 5 # Valid
_num = 5 # Valid
Int_type = 5 # Valid
number one = 5 # Not valid, contains a whitespace
(num) = 5 # Not valid, contains special characters
int = 5 # Not valid, `int` is a reserved word (keyword)
2Teams = 5 # Not valid, starts with a number
```

## Variables in Python

In Java or C++ types must be declared before runtime

```C++
int x = 5; // `x` is declared to be of type int (integer)
```

but in Python it's not necessary because it's dynamically typed

```Python
x = 5 # The interpreter understands that it's an integer on runtime
```

## Data Types


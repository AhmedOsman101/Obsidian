---
prev:
  text: "Lecture Seven"
  link: "/College/Python/Lectures/LectureSeven"
next: false
title: Lecture 8
---

# Programming Essentials in Python Lecture 8

## Python Collections

Python provides four built-in collection data types:

- **List**: Ordered and mutable (changeable). Allows duplicate members.
- **Tuple**: Ordered and immutable (unchangeable). Allows duplicate members.
- **Set**: Unordered, mutable, and unindexed. Does not allow duplicate members.
- **Dictionary**: Ordered (as of Python 3.7), mutable, and does not allow duplicate keys.

Choosing the appropriate data type helps maintain efficiency, clarity, and security.

## Lists

Lists are used to store multiple items in a single variable. They are highly versatile and can:

- Contain elements of different types.
- Be modified by adding, removing, or changing elements.
- Contain duplicate values.

### Key Features

- **Creation**: Use square brackets `[]`.
- **Indexing**: Access elements via indices starting at 0. Negative indices count from the end.
- **Dynamic Size**: No fixed size, can grow or shrink as needed.
- **Allow Duplicates**: Items with the same value are allowed.

### Examples

#### Access Items in a List

```python
mixed = ["0", "1", "2", "3", "4", "5"]
print(mixed[0:3])   # Output: ["0", "1", "2"]
print(mixed[:3])    # Output: ["0", "1", "2"]
print(mixed[2:3])   # Output: ["2"]
print(mixed[2])     # Output: "2"
print(mixed[2:])    # Output: ["2", "3", "4", "5"]
```

#### Modify List Items

```python
mixed = ["0", "1", "2", "3", "4", "5"]
mixed[2] = "two"  # Replace an item at index 2
print(mixed)       # Output: ["0", "1", "two", "3", "4", "5"]

mixed[4:6] = ["four", "five"]
print(mixed)       # Output: ["0", "1", "two", "3", "four", "five"]
```

#### List Methods

```python
mixed = ["0", "1", "2", "3", "4", "5"]

# Append an item to the end of the list
mixed.append("six")
print(mixed)      # Output: ["0", "1", "2", "3", "4", "5", "six]

# Remove the last item from the list
mixed.pop()
print(mixed)       # Output: ["0", "1", "2", "3", "4", "5"]
```

#### List Length

```python
# Get the length of the list using the len() function
print(len(mixed))  # Output: 6
```

## Tuples

Tuples are immutable collections used to store multiple items in a single variable. Once created, their values cannot be changed directly.

### Key Features

- **Creation**: Use parentheses `()`.
- **Indexing**: Access elements like lists.
- **Allow Duplicates**: Items with the same value are allowed.
- **Immutable**: Cannot add, remove, or change elements.

#### Creating a Tuple With One Item

```python
# Create a tuple with only one item (note the comma)
single_int = (1) # This is a normal int between circle brackets
single_item = (1,) # This is a tuple with one item in it

print(type(single_int))  # Output: <class 'int'>
print(type(single_item))  # Output: <class 'tuple'>
```

#### Tuple Methods

```python
numbers = (1, 1, 1, 4, 5)

# Return number of occurrences of value
print(numbers.count(1)) # Output: 3

# Return first index of `value`, Raises ValueError if `value` is not present.
print(numbers.index(4)) # Output: 4

# Get the length of the tuple using the len() function
print(len(numbers))  # Output: 5
```

### Workaround for Mutability

Convert the tuple to a list, modify the list, and convert it back:

```python
tuple1 = ("apple", "banana", "cherry")
list1 = list(tuple1)
list1.append("date")
tuple1 = tuple(list1)
print(tuple1)  # Output: ('apple', 'banana', 'cherry', 'date')
```

## Sets

Sets are unordered collections that do not allow duplicate items.

### Key Features

- **Creation**: Use curly brackets `{}`.
- **Unordered**: Items do not have a defined order.
- **Unique Items**: Duplicate values are not allowed.

### Example

```python
fruits = {"apple", "banana", "cherry"}
print(fruits)  # Output: {'apple', 'cherry', 'banana'}
print(fruits)  # Output: {'banana', 'apple', 'cherry'}
```

### Set Methods

1. **`add(element)`**:

   - Adds an element to the set.
   - If the element is already in the set, it has no effect.

2. **`discard(element)`**:

   - Removes the specified element from the set if it exists.
   - Does **not** raise an error if the element is missing (unlike `remove`).

3. **`remove(element)`**:

   - Removes the specified element from the set.
   - Raises a `KeyError` if the element is not found.

### Example Using All Methods

```python
# Create a set
my_set = {1, 2, 3}

# 1. Add an element to the set
my_set.add(4)
print("After add(4):", my_set)  # {1, 2, 3, 4}

# 2. Discard an element
my_set.discard(2)
print("After discard(2):", my_set)  # {1, 3, 4}

# 3. Remove an element
my_set.remove(3)
print("After remove(3):", my_set)  # {1, 4}
```

### Checking Items in a Set

```python
fruits = {"apple", "banana", "cherry"}
# Check if an item is present using the 'in' keyword
print("banana" in fruits)  # Output: False
fruits.add("mango")
print("mango" in fruits)    # Output: True
```

## Dictionaries

Dictionaries store data as key-value pairs.

### Key Features

- **Creation**: Use curly brackets `{}`.
- **Ordered**: Keys retain their insertion order (Python 3.7+).
- **Mutable**: Add, modify, or delete key-value pairs.
- **Unique Keys**: Duplicate keys overwrite existing values.

### Example

```python
my_dict = {
  "name": "Youssef",
  "job": "student",
  "age": 18
}
print(my_dict["name"])  # Output: "Youssef"
my_dict["age"] = 19     # Duplicating a key will overwrite its value
print(my_dict)          # Output: {'name': 'Youssef', 'job': 'student', 'age': 19}
```

### Dictionary Methods

1. **`get(key, default=None)`**:

   - Returns the value associated with the given key.
   - If the key doesn’t exist, it returns the specified `default` value (or `None` if not provided).

2. **`items()`**:

   - Returns a view object containing key-value pairs `(key, value)`.

3. **`keys()`**:

   - Returns a view object containing all the keys in the dictionary.

4. **`pop(key, default)`**:

   - Removes the specified key and returns its value.
   - If the key doesn’t exist, it returns the `default` value if provided; otherwise, raises a `KeyError`.

5. **`values()`**:
   - Returns a view object containing all the values in the dictionary.

### Example Using All Methods

```python
# Create a dictionary
my_dict = {"a": 1, "b": 2, "c": 3}

# 1. Get the value for a key
value = my_dict.get("a")  # Key exists
print(f"Value for 'a': {value}")  # 1

value = my_dict.get("z", "Not Found")  # Key doesn't exist
print(f"Value for 'z': {value}")  # Not Found

# 2. Pop a key-value pair
popped_value = my_dict.pop("b")
print(f"After pop('b'): {my_dict}, Popped Value: {popped_value}")  
# {'a': 1, 'c': 3}, Popped Value: 2

# 3. View all values
print("Values:", my_dict.values())  # dict_values([1, 3])
```

## Error Handling: Try-Except Blocks

Python provides a structured way to handle exceptions using `try` and `except` blocks.

### Key Features

- **Try Block**: Code that might cause an error.
- **Except Block**: Code to handle the error.
- **Else Block**: Executes if no error occurs.
- **Finally Block**: Executes regardless of an error.

### Example

```python
try:
  x = int(input("Enter a number: "))
  print(10 / x)
except ZeroDivisionError:
  print("Cannot divide by zero.")
except ValueError:
  print("Please enter a valid number.")
else:
  print("Operation successful.")
finally:
  print("Execution complete.")
```

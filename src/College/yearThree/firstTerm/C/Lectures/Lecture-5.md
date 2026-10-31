---
title: Lecture 5
prev:
  text: "Lecture 4"
  link: "/College/yearThree/firstTerm/C/Lectures/Lecture-4"
next: false
---

# Advanced C - Lecture 5: Preprocessor Directives

## C Preprocessor

The **C preprocessor** processes source code **before compilation**, producing **expanded source code**. Directives begin with `#` and are usually placed at the top of the file. They are executed before compilation.

## Macros

A **macro** is a named fragment of code; wherever the name appears, it is replaced by its contents (**macro expansion**).

- **Object-like macros** resemble data objects (commonly numeric constants).
- **Function-like macros** resemble function calls.

```c
#define PI 3.14
```

**Properties:** macro names are conventionally uppercase; expansion is textual; no type checking.

### Macro vs. Function

| Aspect        | Macro                    | Function        |
| ------------- | ------------------------ | --------------- |
| Expansion     | textual, at compile time | call at runtime |
| Type checking | none                     | yes             |
| Overhead      | none (inlined)           | call overhead   |
| Debugging     | harder                   | easier          |

## Preprocessor Directives

### `#define`

Defines a constant or macro substitution. Can use any basic data type; can even define operators or whole statements.

```c
#define AND &&
#define OR ||
#define ARRANGE (a>25 AND a<50)
#define FOUND printf("Hello World")
```

Object-like macro syntax:

```c
#define identifier replacement-text
```

### `#include`

Includes a header file's contents. Angle brackets search system paths; quotes search the current directory first.

```c
#include <stdio.h>
#include "myheader.h"
```

### User-Defined Header Files

Create a `.h` file with declarations and include it with quotes to reuse code across files.

### Advanced Macro Tricks

- **Macro continuation**: end a line with `\` to continue the macro on the next line.
- **Stringize (`#`)**: converts a macro argument to a string literal.
- **Token pasting (`##`)**: concatenates two tokens into one.

### Predefined Macros

Standard macros provided by the compiler (cannot be used in `#define`/`#undef`):

| Macro           | Expands to                        |
| --------------- | --------------------------------- |
| `__FILE__`      | current source file name (string) |
| `__LINE__`      | current line number (int)         |
| `__DATE__`      | compilation date (string)         |
| `__TIME__`      | compilation time (string)         |
| `__STDC__`      | `1` if ISO C conformant           |
| `__ASSEMBLER__` | `1` when preprocessing assembly   |

### `#undef`

Undefines a macro defined by `#define`, limiting its scope; allows redefinition later.

```c
#define PI 3.14
#undef PI
// PI now undeclared -> compile error if used
```

### Conditional Compilation

- **`#ifdef NAME`** — executes code if `NAME` is defined.
- **`#ifndef NAME`** — executes code if `NAME` is **not** defined.
- **`#if expr`** — evaluates a constant expression; true branch compiled.
- **`#elif`** / **`#else`** — alternative branches.
- **`#endif`** — closes the block.

```c
#ifdef DEBUG
  printf("debugging\n");
#else
  printf("release\n");
#endif
```

### `#error`

Forces a **fatal compile-time error** with a message; compilation stops.

```c
#ifndef VERSION
#error "Define VERSION before compiling"
#endif
```

### `#pragma`

Provides additional information to the compiler (machine/OS-specific). Turbo C++ supports `startup`/`exit` pragmas to run functions before `main`/after exit.

```c
#pragma startup func
#pragma exit func
```

> [!NOTE]
> Preprocessor directives are processed **textually** before the compiler sees the code, so they ignore C scope and type rules.

---

_3 min read (source: 7 min)_

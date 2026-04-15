# Obsidian-VitePress Course Structure Guide

This document defines the standardized structure for course notes in the Obsidian vault, optimized for VitePress deployment.

## Directory Structure

Each course follows this structure:

```
CourseName/
├── Lectures/
│   ├── Lecture-1.md
│   ├── Lecture-2.md
│   └── index.md
├── Sections/
│   ├── Section-1.md
│   ├── Section-2.md
│   └── index.md
├── Assignments/ (or Tasks/)
│   ├── Assignment-1.md (or Task-1.md)
│   ├── Assignment-2.md (or Task-2.md)
│   └── index.md
├── Exams/
│   ├── Exam-1.md
│   ├── Exam-2.md
│   └── index.md
├── imgs/
└── index.md
```

## Index File Patterns

### Course Index (`CourseName/index.md`)

```markdown
---
prev:
  text: "Parent Category"
  link: "/path/to/parent"
next: false
lastUpdated: false
title: CourseName
---

# CourseName

- [Lectures](Lectures/index.md)
  - [Lecture One](Lectures/Lecture-1.md)
  - [Lecture Two](Lectures/Lecture-2.md)
    ...

- [Sections](Sections/index.md)
  - [Section One](Sections/Section-1.md)
  - [Section Two](Sections/Section-2.md)
    ...

- [Assignments](Assignments/index.md)
  - [Assignment One](Assignments/Assignment-1.md)
  - [Assignment Two](Assignments/Assignment-2.md)
    ...

- [Exams](Exams/index.md)
  - [Exam One](Exams/Exam-1.md)
  - [Exam Two](Exams/Exam-2.md)
    ...
```

### Subfolder Index (`Lectures/index.md`, `Sections/index.md`, etc.)

```markdown
---
prev:
  text: "CourseName"
  link: "/path/to/course/index"
next: false
lastUpdated: false
title: Lectures
---

# Lectures

- [Lecture One](Lecture-1.md)
- [Lecture Two](Lecture-2.md)
  ...
```

## Navigation Patterns

### Lecture Frontmatter

Standard lectures use `prev` and `next` links for sequential navigation:

```markdown
---
prev:
  text: "Lecture 6"
  link: "/College/yearOne/firstTerm/Python/Lectures/Lecture-6"
next:
  text: "Lecture 8"
  link: "/College/yearOne/firstTerm/Python/Lectures/Lecture-8"
title: Lecture 7
---

# Programming Essentials in Python Lecture 7
```

**Last lecture in a term:**

```markdown
---
prev:
  text: "Lecture 7"
  link: "/College/yearOne/firstTerm/Python/Lectures/Lecture-7"
next: false
title: Lecture 8
---
```

**Combined lectures (two lectures in one file):**

```markdown
---
title: Lecture 7~8
prev:
  text: "Lecture 6"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/Lecture-6"
next:
  text: "Lecture 9"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/Lecture-9"
---
```

Or using `&`:

```markdown
---
title: Lecture 6
prev:
  text: "Lecture 5"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/Lecture-5"
next:
  text: "Lecture 7 & 8"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/Lecture-7-8"
---
```

**Last lecture in a term:**

```markdown
---
prev:
  text: "Lecture Seven"
  link: "/College/yearOne/firstTerm/Python/Lectures/Lecture-7"
next: false
title: Lecture 8
---
```

**Combined lectures (two lectures in one file):**

```markdown
---
title: Lecture 7~8
prev:
  text: "Lecture Six"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/Lecture-6"
next:
  text: "Lecture Nine"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/Lecture-9"
---
```

Or using `&`:

```markdown
---
title: Lecture 6
prev:
  text: "Lecture Five"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/Lecture-5"
next:
  text: "Lecture Seven & Eight"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/Lecture-7-8"
---
```

### Key Navigation Rules

1. **Link format**: Use absolute paths WITHOUT `.md` extension
   - ✅ `/College/yearOne/firstTerm/Python/Lectures/Lecture-1`
   - ❌ `/College/yearOne/firstTerm/Python/Lectures/Lecture-1.md`

2. **Combined lectures**: When two lectures are combined into one file:
   - Use `~` or `&` in title: `Lecture 7~8` or `Lecture 7-8`
   - Filename: `Lecture-7-8.md`
   - Update prev/next links to point to the combined file

3. **Last item**: Set `next: false` for the final item in any section

### Lecture Title Format

Lecture titles follow these patterns:

| Pattern         | Example                 | Use Case                        |
| --------------- | ----------------------- | ------------------------------- |
| `Lecture X`     | `Lecture 7`             | Standard single lecture         |
| `Lecture X~Y`   | `Lecture 7~8`           | Combined lectures (preferred)   |
| `Lecture X & Y` | `Lecture Seven & Eight` | Combined lectures (alternative) |

**Content title format:**

```markdown
# Course Name Lecture 7

# Course Name Lecture 7~8

# Course Name - Lectures 7-8
```

### Required Fields

| Field         | Description                 | Example                                           |
| ------------- | --------------------------- | ------------------------------------------------- |
| `title`       | Display title               | `title: Python`                                   |
| `prev.text`   | Previous page text          | `text: "Python"`                                  |
| `prev.link`   | Previous page link          | `link: "/College/yearOne/firstTerm/Python/index"` |
| `next`        | Next page (usually `false`) | `next: false`                                     |
| `lastUpdated` | Show last updated timestamp | `lastUpdated: false`                              |

## Naming Conventions

### Files

Use hyphenated lowercase format for all note files:

| Type        | Pattern                            | Examples                             |
| ----------- | ---------------------------------- | ------------------------------------ |
| Lectures    | `Lecture-x.md` or `Lecture-x-y.md` | `Lecture-1.md`, `Lecture-7-8.md`     |
| Sections    | `Section-x.md`                     | `Section-1.md`, `Section-2.md`       |
| Assignments | `Assignment-x.md`                  | `Assignment-1.md`, `Assignment-2.md` |
| Tasks       | `Task-x.md`                        | `Task-1.md`, `Task-2.md`             |
| Exams       | `Exam-x.md`                        | `Exam-1.md`, `Exam-2.md`             |

**Combined lectures**: When two lectures are in one file:

- Use hyphen: `Lecture-7-8.md` (preferred)
- Or use `&`: `Lecture-7-8.md` (alternative)

### Folders

- Use PascalCase for course names:
  - `Python/`
  - `DataStructures/`
  - `WebDev2/`

### Short Names for Mobile

For courses with long names, use shortened versions that display well on mobile:

| Full Name                    | Short Name     |
| ---------------------------- | -------------- |
| CCNA Routing & Switching     | CCNA           |
| Data Structures & Algorithms | DataStructures |
| Database Programming         | DBProgramming  |
| Web Development II           | WebDev2        |

## Build & Deployment

### Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `pnpm dev`        | Start development server |
| `pnpm build`      | Build for production     |
| `pnpm build:prod` | Build + generate sitemap |

### Pre-commit Hooks

Husky is configured to run `mdfmt` on markdown files before each commit.

## Best Practices

1. **Always include frontmatter** - Required for navigation and VitePress features
2. **Use relative links** - Links should be relative to the current file or absolute from root
3. **Keep index files updated** - Every new note should be added to the appropriate index
4. **Use consistent naming** - Follow PascalCase conventions
5. **Add tags** - Enable cross-referencing between related notes
6. **Enable lastUpdated** - Set to `true` for time-sensitive content
7. **Use KaTeX for math** - Use `$...$` for inline math, `$$...$$` for block math
8. **Use Mermaid for diagrams** - Use \`\`\`mermaid blocks for flowcharts

## General Rules

### Source Material Rules

1. **Use source material only** - Do not invent lecture, task, or assignment content when no source file is available.
2. **If source material is missing, ask the user** - Request the PDF, Markdown, image, or pasted text instead of guessing.
3. **Prefer `pdftotext file.pdf -` for PDF extraction** when shell extraction is needed, because it produced cleaner text than direct PDF parsing for some lecture/task sheets.
4. **Treat the file number as authoritative** - If a PDF slide title says the wrong lecture number, follow the file name (`Lecture-7.pdf`, etc.), not the mismatched slide title.

### Readability and Length Validation

1. **Target**: approximately `750-800` words for a quick lecture review when possible.
2. **Hard ceiling**: an `8 min read` result from `readtime`.
3. **Validation method**: always validate using raw stdin with `readtime < file.md`.
4. **`readtime` is on PATH** - prefer `readtime < file.md`; no absolute script path is needed.
5. **Do not manually strip code blocks before `readtime`** - pass the raw Markdown file content.

### Code and Syntax Formatting

1. **Use 2-space indentation in code blocks** for generated note content.
2. **Always include fenced code blocks with a language tag** when showing code or commands.
3. **Add a short purpose comment above or within code blocks when helpful**, especially in exam-oriented summaries.
4. **Use Linux paths in examples by default** when adapting course material for this vault, especially `/home/othman/Documents/...`.

### Navigation and Progression Rules

1. **Proceed in order** when filling missing lecture sequences; do not skip unfinished intermediate lectures.
2. **Whenever a new file is added, update neighboring `prev`/`next` frontmatter** if needed.
3. **Whenever a new file is added, update the relevant subfolder index and course index**.
4. **Use `next: false` only for the final item in a sequence**.

### Tasks and Assignments Pattern

Use these patterns when creating coursework notes from task or assignment sheets:

1. **Preserve the prompt faithfully** - rewrite for clarity if needed, but do not change the requirement.
2. **Assignment files** must include explicit answer areas with placeholders.
3. **For answer placeholders, use heading-based sections** such as `### Answer`, `#### Your Answer`, or per-device/per-part headings.

## VitePress Configuration

The site uses:

- Local search (MiniSearch)
- Mermaid diagrams
- KaTeX for math
- Auto-generated sidebars via `vitepress-sidebar`
- Gzip compression

See `.vitepress/config.mts` for full configuration.

# Obsidian-VitePress Course Structure Guide

This document defines the standardized structure for course notes in the Obsidian vault, optimized for VitePress deployment.

---

## Directory Structure

Each course follows this structure:

```
CourseName/
├── Lectures/
│   ├── LectureOne.md
│   ├── LectureTwo.md
│   └── index.md
├── Sections/
│   ├── SectionOne.md
│   ├── SectionTwo.md
│   └── index.md
├── Assignments/
│   ├── AssignmentOne.md
│   ├── AssignmentTwo.md
│   └── index.md
├── Exams/
│   ├── ExamOne.md
│   ├── ExamTwo.md
│   └── index.md
├── imgs/
└── index.md
```

---

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
  - [Lecture One](Lectures/LectureOne.md)
  - [Lecture Two](Lectures/LectureTwo.md)
    ...

- [Sections](Sections/index.md)
  - [Section One](Sections/SectionOne.md)
  - [Section Two](Sections/SectionTwo.md)
    ...

- [Assignments](Assignments/index.md)
  - [Assignment One](Assignments/AssignmentOne.md)
  - [Assignment Two](Assignments/AssignmentTwo.md)
    ...

- [Exams](Exams/index.md)
  - [Exam One](Exams/ExamOne.md)
  - [Exam Two](Exams/ExamTwo.md)
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

- [Lecture One](LectureOne.md)
- [Lecture Two](LectureTwo.md)
  ...
```

---

## Navigation Patterns

### Lecture Frontmatter

Standard lectures use `prev` and `next` links for sequential navigation:

```markdown
---
prev:
  text: "Lecture Six"
  link: "/College/yearOne/firstTerm/Python/Lectures/LectureSix"
next:
  text: "Lecture Eight"
  link: "/College/yearOne/firstTerm/Python/Lectures/LectureEight"
title: Lecture 7
---

# Programming Essentials in Python Lecture 7
```

**Last lecture in a term:**

```markdown
---
prev:
  text: "Lecture Seven"
  link: "/College/yearOne/firstTerm/Python/Lectures/LectureSeven"
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
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureSix"
next:
  text: "Lecture Nine"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureNine"
---
```

Or using `&`:

```markdown
---
title: Lecture 6
prev:
  text: "Lecture Five"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureFive"
next:
  text: "Lecture Seven & Eight"
  link: "/College/yearOne/secondTerm/C-Essentials/Lectures/LectureSevenToEight"
---
```

### Key Navigation Rules

1. **Link format**: Use absolute paths WITHOUT `.md` extension
   - ✅ `/College/yearOne/firstTerm/Python/Lectures/LectureOne`
   - ❌ `/College/yearOne/firstTerm/Python/Lectures/LectureOne.md`

2. **Combined lectures**: When two lectures are combined into one file:
   - Use `~` or `&` in title: `Lecture 7~8` or `Lecture Seven & Eight`
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

### Optional Fields

| Field  | Description                         | Example                       |
| ------ | ----------------------------------- | ----------------------------- |
| `tags` | Array of tags for cross-referencing | `tags: [python, programming]` |

---

## Naming Conventions

### Files

- Use PascalCase for lecture/section/assignment names:
  - `LectureOne.md` (not `Lecture1.md` or `lecture-1.md`)
  - `AssignmentOne.md`
  - `SectionTwo.md`

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

---

## Build & Deployment

### Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `pnpm dev`        | Start development server |
| `pnpm build`      | Build for production     |
| `pnpm build:prod` | Build + generate sitemap |

### Pre-commit Hooks

Husky is configured to run `mdfmt` on markdown files before each commit.

---

## Best Practices

1. **Always include frontmatter** - Required for navigation and VitePress features
2. **Use relative links** - Links should be relative to the current file or absolute from root
3. **Keep index files updated** - Every new note should be added to the appropriate index
4. **Use consistent naming** - Follow PascalCase conventions
5. **Add tags** - Enable cross-referencing between related notes
6. **Enable lastUpdated** - Set to `true` for time-sensitive content
7. **Use KaTeX for math** - Use `$...$` for inline math, `$$...$$` for block math
8. **Use Mermaid for diagrams** - Use \`\`\`mermaid blocks for flowcharts

---

## VitePress Configuration

The site uses:

- Local search (MiniSearch)
- Mermaid diagrams
- KaTeX for math
- Auto-generated sidebars via `vitepress-sidebar`
- Gzip compression

See `.vitepress/config.mts` for full configuration.

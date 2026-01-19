# Web Programming Exam Summary

## 1. Website Basics

- **Definition:** A collection of related web pages, images, videos, or digital assets addressed relative to a common URL.
- **Hosting:** Hosted on at least one web server; accessible via the Internet or private network.

## 2. Types of Websites

- Personal
- Commercial
- Organizational (government, non‑profit)
- Entertainment

## 3. Web Evolution

- **Web 2.0:** User‑centered; uses blogs, wikis, social networks, multimedia, dynamic scripts; relies on AJAX and JavaScript frameworks.
- **Web 3.0 (Semantic Web):** Understands user intent; uses ontologies (e.g., OWL) for machine reasoning; focuses on AI and 3D graphics.

## 4. Website Types (Technical)

- **Static Website:**
  - Displays information as stored on server.
  - Coded in HTML (.htm).
  - Content changes require manual file editing and re‑uploading.
- **Dynamic Website:**
  - Retrieves fresh information each view (e.g., real‑time seat availability on Indian Railways).
  - Content updates automatically from a database.

## 5. Protocols

- HTTP, HTTPS, FTP, SSL

## 6. Web Server

- Computer that holds and serves a website.
- Includes hardware, OS, server software, TCP/IP, and site content.
- Delivers pages via HTTP.
- **Intranet server:** internal use.
- **Internet server:** serves external users.

## 7. HTML Basics

- **HyperText Markup Language:** language for creating web pages.
- Can include text, graphics, sound, video.

### Tags

- Keyword enclosed in angle brackets: `<tag>`
- Many have opening and closing tags: `<tag>` content `</tag>`
- Closing tag includes forward slash: `/`
- Example: `<B>Warning</B>` -> **Warning**
- Nested tags must close nearest first:

  ```html
  <h1><i>The Nation</i></h1>
  ```

### Web Page Structure

All pages should contain:

```html
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    Page content here.
  </body>
</html>
```

- **Title importance:** Affects search‑engine ranking; appears in Favorites, History, Bookmarks.


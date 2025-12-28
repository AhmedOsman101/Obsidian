# Web Programming - Lecture 1

## What is a Web Site?

A **website** is a collection of related web pages, images, videos, or other digital assets accessible via a **URL** (domain name or IP).
It's hosted on at least one **web server**, accessible through the Internet or a local network.

## Categories of Websites

- **Personal Websites**
- **Commercial Websites**
- **Organizational Websites** (government or non-profit)
- **Entertainment Websites**

## Static Pages

- Content served directly from the server's file system
- Often built using **Server Side Includes (SSI)** or **CGI**
- Layout managed with **frames** and **tables**

## Web 2.0

Also called **Library 2.0**, this era of the web focuses on **user-centered content** and **collaboration** using interactive and dynamic tools.

### Core Technologies

- **AJAX**
- **JavaScript frameworks**

### Popular Tools

- Podcasting
- Blogging
- Tagging
- Curating with RSS
- Social bookmarking
- Social networking
- Social media
- Web content voting

### Key Features of Web 2.0

1. **Collaborative information sorting** – users collectively classify and retrieve data.
2. **Dynamic content** – responds to user input.
3. **Two-way interaction** – comments, reviews, and feedback loops.
4. **APIs** – allow software-based interaction with services.
5. **Broad accessibility** – caters to a wider variety of users.

## Web 3.0 (Semantic Web)

Also known as the **Semantic Web**, Web 3.0 enables machines to **understand context and meaning** rather than just matching keywords.

### Concepts

- Smarter, **AI-driven** data processing
- Personalized and contextualized search results
- Use of **ontologies** (via OWL) to help machines reason and infer new information

### Core Technologies

- **Artificial Intelligence (AI)**
- **3D Graphics**

### Main Features

1. **Semantic understanding**
2. **Personalized search**
3. **Machine reasoning**
4. **Data linking and interoperability**
5. **Natural, human-like query processing**

## Types of Websites

| Type                | Description                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Static Website**  | Displays the same pre-defined content for all users. Content is stored in HTML files (.htm/.html) and updated manually.        |
| **Dynamic Website** | Content updates automatically from a database or external source each time the page loads (e.g., real-time seat availability). |

## Protocols

- **HTTP** – HyperText Transfer Protocol
- **HTTPS** – Secure HTTP
- **FTTP** – File Transfer Protocol
- **SSL** – Secure Sockets Layer

## Web Server

A **Web Server** is a computer that hosts and serves web content.

### Components

- Hardware and OS
- Web server software (e.g., Apache, Nginx)
- TCP/IP protocols
- Web content (HTML, images, etc.)

### Types

- **Intranet Server:** Serves internal users within an organization.
- **Internet Server:** Serves external/public users.

## HTML (HyperText Markup Language)

The core language for creating web pages that include **text**, **graphics**, **audio**, and **video**.

## HTML Tags

- Tags are **keywords enclosed in angle brackets**.
  Example: `<i>italic</i>`
- Many tags have both **opening** and **closing** forms.
- Example: `<b>Warning</b>` -> displays **Warning** in bold.

### Nested Tags

When tags are nested, **close the inner tag first**:

```html
<h1><i>The Nation</i></h1>
```

## Structure of a Web Page

All web pages follow a common structure:

```html
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    This is where you include text and images.
  </body>
</html>
```

## The `<title>` Tag

- The title affects **SEO ranking** in some search engines.
- It appears in **favorites**, **bookmarks**, and **browser history**.

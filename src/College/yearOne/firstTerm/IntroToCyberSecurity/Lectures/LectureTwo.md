---
title: Lecture 2
prev:
  text: Lecture One
  link: /College/IntroToCyberSecurity/Lectures/LectureOne
next:
  text: Lecture Three
  link: /College/IntroToCyberSecurity/Lectures/LectureThree
---

# Introduction to Cybersecurity Lecture 2

## Concepts of Cybersecurity (part I)

The five core concepts of cybersecurity are:

- **Authentication**
- **Authorization**
- **Confidentiality**
- **Integrity**
- **Availability**

## Authentication vs. Authorization

| **Concept**                  | **Authentication**                                                                                                                              | **Authorization**                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Definition**               | The process of verifying the identity of users to grant access to the system.                                                                   | The process of validating a user's privileges or authorities to access specific resources.      |
| **Process**                  | Users are verified.                                                                                                                             | Users are validated.                                                                            |
| **Order**                    | Usually done **before** authorization.                                                                                                          | Usually done **after** successful authentication.                                               |
| **Requirement**              | Requires user's login details.                                                                                                                  | Requires information about user's privileges or security levels.                                |
| **Purpose**                  | Determines whether the person is a valid user or not.                                                                                           | Determines what permissions the user has within the system.                                     |
| **Information Transmission** | Generally uses an ID Token to transmit information.                                                                                             | Generally uses an Access Token to transmit information.                                         |
| **Modification**             | Authentication credentials can be changed by the user when needed.                                                                              | Authorization permissions are set by the system owner and cannot be changed by the user.        |
| **Visibility**               | Authentication is visible to the user.                                                                                                          | Authorization is not visible to the user.                                                       |
| **Identification Methods**   | Username, password, face recognition, retina scan, fingerprints, etc.                                                                           | Access rights to resources based on predefined roles.                                           |
| **Example**                  | Employees must authenticate via the network to access their company email.                                                                      | Once authenticated, the system determines what information the employees can access.            |
| **Protocol**                 | OpenID Connect (OIDC) is commonly used for managing authentication.                                                                             | OAuth 2.0 is commonly used for managing authorization.                                          |
| **Popular Techniques**       | Password-Based Authentication, Two-Factor Authentication (2FA), Multi-Factor Authentication (MFA), Single Sign-On (SSO), Social Authentication. | Role-Based Access Controls (RBAC), JSON Web Token (JWT), SAML Authorization, OpenID, OAuth 2.0. |

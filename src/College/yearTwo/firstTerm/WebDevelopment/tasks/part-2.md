## Common Input Attributes

Input attributes define how an input behaves, its default value,  
and how it interacts with forms and users.

---

## The `value` Attribute

Specifies the default text or value pre-filled in an input.

```html
<input type="text" value="John Doe" />
```

- This text appears when the page loads.
- The value is sent when the form is submitted.

![value attribute preview](figure-8.png)

---

## The `name` Attribute

Defines a key under which the input's value is sent in a form submission.

```html
<form>
  <input type="text" name="username" value="ahmad" />
  <input type="submit" />
</form>
```

- Essential for server-side processing.
- Without `name`, the input data won't be included in the request.

![name attribute preview](figure-9.png)

---

## The `required` Attribute

Makes an input field mandatory before submission.

```html
<form>
  <label>Email:</label>
  <input type="email" required />
  <input type="submit" />
</form>
```

- The browser prevents form submission if the field is empty.
- Provides basic form validation without JavaScript.

![required attribute preview](figure-10.png)

---

## The `placeholder` Attribute

Displays hint text inside the input field until the user types something.

```html
<input type="text" placeholder="Enter your name" />
```

- Placeholder text disappears once the user starts typing.
- It should **not** replace the label for accessibility reasons.

![placeholder attribute preview](figure-11.png)

---

## Input Type: `password`

Used to enter hidden or sensitive data like passwords.

```html
<form>
  <label>Password:</label>
  <input type="password" name="password" required />
</form>
```

- Characters are visually masked for privacy.
- The value is still accessible to the browser and submitted normally.

![password input preview](figure-12.png)

---

## Combining Attributes

Most attributes can be combined to enhance usability.

```html
<input
  type="password"
  name="pass"
  placeholder="Enter your password"
  required
  value=""
/>
```

- Always use attributes intentionally to improve UX and validation.
- Avoid unnecessary defaults or hidden states.

![combined attributes preview](figure-13.png)

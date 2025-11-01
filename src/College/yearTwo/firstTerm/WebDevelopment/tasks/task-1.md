# HTML Forms

The HTML `<form>` element creates a form for user input and acts as a container for input elements like text fields, checkboxes, radio buttons, and submit buttons. The `<input>` element is the most common form element.

---

## HTML Input Types

The `<input>` element allows users to enter data.  
Its appearance and behavior depend on the `type` attribute.

---

## Input Type: `text`

Used for short, single-line text input (like names or usernames).

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" />
```

![text input preview](figure-1.png)

---

## Input Type: `radio`

Lets users choose **one option** from a group.
Multiple radio inputs share the same `name` value.

```html
<form>
  <label><input type="radio" name="gender" value="male" /> Male</label>
  <label><input type="radio" name="gender" value="female" /> Female</label>
</form>
```

![radio buttons preview](figure-2.png)

---

## Input Type: `checkbox`

Allows users to select **multiple options** independently.

```html
<form>
  <label><input type="checkbox" name="interest" value="coding" /> Coding</label>
  <label><input type="checkbox" name="interest" value="music" /> Music</label>
  <label><input type="checkbox" name="interest" value="sports" /> Sports</label>
</form>
```

![checkboxes preview](figure-3.png)

---

## Input Type: `checked`

The `checked` attribute sets the default selected state for
`radio` or `checkbox` inputs.

```html
<input type="radio" name="color" value="blue" checked /> Blue
<input type="radio" name="color" value="red" /> Red
```

![checked state preview](figure-4.png)

---

## Input Type: `submit`

Creates a button that sends the form data to the server.

```html
<form action="/submit" method="post">
  <input type="text" name="username" placeholder="Enter username" />
  <input type="submit" value="Submit" />
</form>
```

![submit button preview](figure-5.png)

---

## Input Type: `button`

Defines a generic button that performs no default action
unless controlled by JavaScript.

```html
<button type="button" onclick="alert('Button clicked!')">Click Me</button>
```

![button preview](figure-6.png)

---

## Combining Multiple Inputs

Forms often use different input types together for richer interactivity.

```html
<form>
  <label>Name: <input type="text" /></label><br />
  <label><input type="radio" name="plan" /> Free Plan</label>
  <label><input type="radio" name="plan" /> Premium Plan</label><br />
  <label><input type="checkbox" /> Subscribe to newsletter</label><br />
  <input type="submit" value="Sign Up" />
</form>
```

![form preview](figure-7.png)

---

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

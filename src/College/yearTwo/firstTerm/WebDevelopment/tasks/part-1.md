# HTML Input Types

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

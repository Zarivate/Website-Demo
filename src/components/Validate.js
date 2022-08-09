export default function Validate(values) {
  let errors = {};

  // The trim is just to get rid of any white space, helps when checking if anything was passed in or not
  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!values.password2) {
    errors.password2 = "Password required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords must match";
  }

  return errors;
}

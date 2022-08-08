// This file holds the custom hook to handle any submissions on the signUp page
import { useState, useEffect } from "react";

const useForm = (Validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  // For whenever the user types something into the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(Validate(values));
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;

import React, { useState } from "react";
import FormSuccess from "./FormSuccess";
import SignUp from "./pages/SignUp";
import "./SignUp.css";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <section className="sign-up">
      <div className="form-container">
        {!isSubmitted ? <SignUp submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </section>
  );
}

export default Form;

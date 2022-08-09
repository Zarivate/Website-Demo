import React, { useState } from "react";
import FormSuccess from "./FormSuccess";
import SignUp from "./pages/SignUp";
import "./SignUp.css";
import mySVG from "../images/img-3.svg";
import background from "../images/img-8.jpg";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="sign-up">
      <div className="form-container">
        <div className="form-content-left">
          <img src={mySVG} alt="spaceship" className="form-img" />
        </div>
        {!isSubmitted ? <SignUp submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </div>
  );
}

export default Form;

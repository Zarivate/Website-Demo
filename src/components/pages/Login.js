import React, { useState } from "react";
import "./../SignUp.css";
import FormSuccess from "../FormSuccess";
import useForm from "../useForm";
import Validate from "../Validate";

export default function Login() {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    Validate
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <section className="sign-up">
      <div className="form-container">
        {!isSubmitted ? (
          <>
            <div className="form-content">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={loginEmail}
                    onChange={handleChange}
                  />
                  {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-input"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={handleChange}
                  />
                  {errors.password && <p>{errors.password}</p>}
                </div>
                <button className="form-input-btn" type="submit">
                  Login
                </button>
                <span className="form-input-login">
                  Need to sign-up? Sign-up <a href="/sign-up"> here </a>
                </span>
              </form>
            </div>
          </>
        ) : (
          <FormSuccess />
        )}
      </div>
    </section>
  );
}

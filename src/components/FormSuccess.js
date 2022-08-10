import React from "react";
import mySVG from "../images/img-2.svg";

function FormSuccess() {
  return (
    <div className="form-content">
      <div className="form-success">Your request was received!</div>
      <img src={mySVG} alt="success-image" className="form-img-2" />
    </div>
  );
}

export default FormSuccess;

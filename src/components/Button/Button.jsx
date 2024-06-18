import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.clickFunction}>
      {props.buttonText}
    </button>
  );
};

export default Button;

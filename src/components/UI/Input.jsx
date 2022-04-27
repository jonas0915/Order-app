import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input />
    </div>
  );
};

export default Input;

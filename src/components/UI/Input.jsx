import React from "react";
import classes from "./Input.module.css";

// recieves ref from MealitemForm.jsx as the 2nd parameter
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      {/* prop id from input obeject is targeted and will be passed on the spread operator*/}
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* spreadOperator ensures all key value pairs are added  */}
      {/* as props to input */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;

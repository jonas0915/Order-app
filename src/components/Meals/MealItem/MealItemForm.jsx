import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsvalid] = useState(true);

  //ref is sent to Input.jsx
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountumber < 1 ||
      enteredAmountumber > 5
    ) {
      setAmountIsvalid(false);
      return;
    }
    // This prop will be passed and defined to MealItem.jsx
    props.onAddToCart(enteredAmountumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        // ref is sent to Input.jsx
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;

import React from "react";
import MealItemForm from "./MealItemForm.jsx";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  // 1st $ is to output price sign, 2nd is a part of the curly braces for template literal
  // dynamic content is .toFixed(2) = makes sure to always render 2 decimal places
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;

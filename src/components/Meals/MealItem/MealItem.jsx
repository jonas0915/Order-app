import React, { useContext } from "react";
import MealItemForm from "./MealItemForm.jsx";
import CartContext from "../../../Store/cart-context.jsx";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  // 1st $ is to output price sign, 2nd is a part of the curly braces for template literal
  // dynamic content is .toFixed(2) = makes sure to always render 2 decimal places
  const price = `$${props.price.toFixed(2)}`;

  // Passed from MealItemForm
  const addToCartHandler = (amount) => {
    // addItem method is defined in CartProvider.jsx
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

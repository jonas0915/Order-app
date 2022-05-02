import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon.jsx";
import CartContext from "../../Store/cart-context.jsx";
import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
  // Contex
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    // props.onClick is passed from Header.jsx
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;

import React, { useState, useContext, useEffect } from "react";
import CartIcon from "../Cart/CartIcon.jsx";
import CartContext from "../../Store/cart-context.jsx";
import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  // Context
  const cartCtx = useContext(CartContext);
  // Object Destructing to pull-out items off the cart
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // Animation
  const btnClasses = `${classes.button}  ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    // if this is true, it will just return & the rest of the fnctn won't execute
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    // Resets animation after 300ms after adding an item to the cart
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    // Clean-up function = cleansup the timer to be reused
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    // props.onClick is passed from Header.jsx
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;

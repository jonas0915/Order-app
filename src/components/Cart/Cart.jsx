import React from "react";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul className={classes[""]}>
      {[{ id: "c1", name: "Sushi", price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}></div>
      <button className={classes["button--alt"]}>Close</button>
      <button className={classes.button}>Order</button>
    </div>
  );
};

export default Cart;

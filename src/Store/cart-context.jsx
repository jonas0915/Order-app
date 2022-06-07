import React from "react";

// createContext allows each component to access it using useContext
// and wrap it with a .provider

// cartProdived recieves the context
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;

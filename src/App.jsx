import React, { useState } from "react";
import Header from "./components/Layout/Header.jsx";
import Meals from "./components/Meals/Meals.jsx";
import Cart from "./components/Cart/Cart.jsx";
import CartProvider from "./Store/CartProvider.jsx";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    return setCartIsShown(true);
  };

  const hideCartHandler = () => {
    return setCartIsShown(false);
  };

  return (
    <CartProvider>
      {/* conditional that checks if Modal(Cart) is true/false */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {/* passing onShowCart that point to showCartHandler to header.jsx */}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

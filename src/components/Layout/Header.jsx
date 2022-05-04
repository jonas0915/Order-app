import React from "react";
import HeaderCardButton from "./HeaderCardButton";
import classes from "./Header.module.css";

import mealsImage from "../../assets/in-situ2.png";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>OurMeals</h1>
        {/* recieved onShowCart prop from App.jsx */}
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      {/* use brackets when classname has a dash */}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table of Food" />
      </div>
    </React.Fragment>
  );
};

export default Header;

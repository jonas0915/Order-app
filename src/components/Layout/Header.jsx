import React from "react";
import HeaderCardButton from "./HeaderCardButton";
import classes from "./Header.module.css";

import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>OurMeals</h1>
        <HeaderCardButton />
      </header>
      {/* use brackets when classname has a dash */}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table of Food" />
      </div>
    </React.Fragment>
  );
};

export default Header;

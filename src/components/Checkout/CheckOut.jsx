import React, { useState } from "react";
import classes from "./CheckOut.module.css";
import Modal from "../UI/Modal";

const CheckOut = (props) => {
  const [endTab, setEndTab] = useState(true);

  const orderEnd = () => {
    setEndTab(false);
  };

  const thankYou = (
    <div className={classes.final}>
      <h3> Thank you for your order.. </h3>
      <h3>and enjoy your meal!!</h3>
    </div>
  );

  return (
    <React.Fragment>
      {endTab && (
        <Modal>
          <button className={classes.button} onClick={orderEnd}>
            x
          </button>
          {thankYou}
        </Modal>
      )}
    </React.Fragment>
  );
};

export default CheckOut;

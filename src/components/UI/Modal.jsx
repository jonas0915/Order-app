import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalHelp = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <React.Fragment>
      {/* set-up to createing a portal.1st argument, 2nd argument. */}
      {ReactDOM.createPortal(<Backdrop />, portalHelp)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalHelp
      )}
    </React.Fragment>
  );
};

export default Modal;

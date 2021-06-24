import React, { Fragment } from "react";
import "./Modal.css";

import Backdrop from "../Backdrop/Backdrop";

function Modal(props) {
  return (
    <Fragment>
      <Backdrop showing={props.showing} closeModal={props.close} />
      <div style={props.style} className={`Modal`}>
        <button onClick={props.close}>X</button>
        {props.children}
      </div>
    </Fragment>
  );
}

export default Modal;

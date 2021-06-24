import React from "react";

import "./Backdrop.css";

const Backdrop = (props) => (
  <div
    className={`Backdrop${props.showing ? " Showing" : ""}`}
    onClick={props.closeModal}
  ></div>
);

export default Backdrop;

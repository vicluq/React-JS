import React, { Fragment } from "react";
import "./Modal.css";
import BackDrop from "./../BackDrop/BackDrop";
const modal = (props) => {
  return (
    <Fragment>
      <BackDrop showing={props.showing} click={props.closeModal} />
      <div
        style={{
          transform: props.showing ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.showing ? "1" : "0",
          backgroundColor: props.orderProcess ? "transparent" : "#fff",
          border: props.orderProcess ? "none" : "1px solid #ccc",
          boxShadow: props.orderProcess ? "none" : "1px 1px 1px black",
        }}
        className="Modal"
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default modal;

import React, { Fragment } from "react";
import "./BackDrop.css";

const backDrop = (props) => {
  return (
    <Fragment>
      {props.showing ? (
        <div className="BackDrop" onClick={props.click}></div>
      ) : null}
    </Fragment>
  );
};

export default backDrop;

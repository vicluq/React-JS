import React from "react";
import "./Control.css";

const control = (props) => {
  return (
    <div className="BuildControl">
      <div>{props.ingrName}</div>
      <button className={`More`} onClick={props.add.bind(null, props.type)}>
        More
      </button>
      <button
        className={`Less`}
        disabled={props.count === 0 ? true : false}
        onClick={props.remove.bind(null, props.type)}
      >
        Less
      </button>
    </div>
  );
};

export default control;

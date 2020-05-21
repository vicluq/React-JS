import React from "react";

const counter = (props) => {
  return (
    <div className="counter">
      <h3>React Counter</h3>
      <button onClick={props.click}>+</button>
      <span id="value">{props.value}</span>
    </div>
  );
};

export default counter;

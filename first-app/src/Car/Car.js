import React from "react";
import _ from "lodash"; //with webpack it works but not with gulp ==> wpck converts to browser lang

// need because when code finds this component imported
// on our App, it will come here and React will convert it into React.createElement()
// it happens because the component always returns the JSX wich will be converted

const deleteHandler = (event) => {
  const button = event.target;
  button.parentNode.style.display = "none";
};

const Car = (props) => {
  return (
    <div className="Car">
      <h2>{props.name}</h2>
      <p>
        From {props.fabYear}, Made by {props.brand}
      </p>
      {props.children}
      <button onClick={deleteHandler} className="deleteCarBut">
        Delete
      </button>
    </div>
  ); //only one root element for each component
};

export default Car;

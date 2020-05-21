import React from "react";
import _ from "lodash"; //with webpack it works but not with gulp ==> wpck converts to browser lang

// need because when code finds this component imported
// on our App, it will come here and React will convert it into React.createElement()
// it happens because the component always returns the JSX wich will be converted

const Car = (props) => {
  const deleteHandler = (event) => {
    //with react is common to put function inside functions -> HOOKS
    const button = event.target;
    button.parentNode.style.display = "none";
  };

  return (
    <div className="Car" onClick={props.click}>
      {/*nos componentes Car que eu não passar o att click, isso vai ser nulo, ou seja, não vai aplicar*/}
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

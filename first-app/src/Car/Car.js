import React from "react";
import _ from "lodash"; //with webpack it works but not with gulp ==> wpck converts to browser lang

// need because when code finds this component imported
// on our App, it will come here and React will convert it into React.createElement()
// it happens because the component always returns the JSX wich will be converted

const Car = () => {
  return (
    <div className="Car">
      <h2>Honda Civic - ID: {_.random(10 ** 4, 1, false)}</h2>
      <p>From 2013, Made by Honda</p>
    </div>
  ); //only one root element for each component
};

export default Car;

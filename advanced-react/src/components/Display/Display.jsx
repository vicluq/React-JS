import React, { useEffect } from "react";
import propTypes from "prop-types";

const display = (props) => {
  useEffect(() => {
    console.log("showing");
    return () => {
      console.log("going away");
    };
  }, []);

  useEffect(() => {
    console.log("counter incremented");
    return () => {
      console.log("going away 2");
    };
  });

  return (
    <div>
      <h2>I am appearing!</h2>
      <p>{props.counter}</p>
    </div>
  );
};

display.propTypes = {
  counter: propTypes.number,
};

export default React.memo(display, (prevProps, newProps) => {
  if (prevProps.counter !== newProps.counter) {
    return false;
  } else {
    return true;
  }
}); // Only re-render this component if the props/state suffer some change!

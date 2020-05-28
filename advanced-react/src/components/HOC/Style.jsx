import React from "react";

const style = (Component, styleObj) => {
  return (props) => {
    console.log(props);
    return (
      <div style={styleObj}>
        <Component {...props} />
      </div>
    );
  };
};

export default style;

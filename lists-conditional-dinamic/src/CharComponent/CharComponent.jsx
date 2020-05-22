import React from "react";

const charComponent = (props) => {
  const style = {
    display: "inline-block",
    margin: "0 2px",
    padding: "6px",
    border: "2px solid black",
  };

  return (
    <div style={style} className="CharComponent">
      {props.char === " " ? "-" : props.char}
    </div>
  );
};

export default charComponent;
// char will be passed when going through the string split array!

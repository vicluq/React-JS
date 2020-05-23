import React from "react";

const charComponent = (props) => {
  const style = {
    display: "inline-block",
    margin: "0 2px",
    padding: "6px",
    backgroundColor: "skyblue",
    color: "#033",
    borderRadius: "5px",
    fontWeight: 600,
    boxShadow: "2px 3px 2px #00000047",
    cursor: "pointer",
  };

  return (
    <div style={style} className="CharComponent" onClick={props.click}>
      {props.char === " " ? "-" : props.char}
    </div>
  );
};

export default charComponent;
// char will be passed when going through the string split array!

import React from "react";

const validation = (props) => {
  return (
    <div className="Validation">
      <p>{props.wordLength >= 10 ? "Text Long Enough" : "Text Too Short"}</p>
    </div>
  );
};

export default validation;

import React from "react";
import "./Validation.css";

const validation = (props) => {
  return (
    <div className="Validation">
      <p>
        <span>Satus:</span>
        {props.wordLength >= 10 ? "Text Long Enough" : "Text Too Short"}
      </p>
    </div>
  );
};

export default validation;

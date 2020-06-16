import React from "react";

const formInput = (props) => {
  return (
    <input
      required={props.req}
      type={props.type}
      name={props.name}
      placeholder={props.pholder}
      onChange={props.onchange}
      value={props.value}
      style={{ borderColor: props.borderColor }}
    />
  );
};

export default formInput;

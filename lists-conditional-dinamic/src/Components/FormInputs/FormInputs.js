import React from "react";

const formInput = (props) => {
  let input = null;

  switch (props.inputType) {
    case "input":
      input = (
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.change}
        />
      );
      break;

    case "select":
      input = (
        <select name={props.name} onChange={props.change}>
          {props.selectOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>
      );
      break;

    default:
      input = <input />;
      break;
  }

  return input;
};

export default formInput;

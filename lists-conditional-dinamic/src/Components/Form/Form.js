import React from "react";

import FormInputs from "../FormInputs/FormInputs";

const form = (props) => {
  return (
    <div>
      <h2>Enter your registry info...</h2>
      <form>
        {Object.entries(props.inputs).map(
          (
            input // [ ['email'], [{ config }] ]
          ) => {
            // console.log(input);
            return (
              <FormInputs
                key={input[0]}
                inputType={input[1].inputType}
                type={input[1].type}
                name={input[0]}
                placeholder={input[1].config.placeholder}
                value={input[1].value}
                selectOptions={input[1].options}
                change={props.change.bind(null, input[0])}
              />
            );
          }
        )}
        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
};

export default form;

import React from "react";
import "./BuildControl.css";
import Control from "./Control/Control";

const buildControls = (props) => {
  const areAllZero = Object.values(props.ingredientsCount).reduce(
    (count, value) => {
      const isZero = value === 0;
      return count && isZero;
    },
    true
  );

  return (
    <div className="build-controls">
      <p className="totalPriceDisplay">
        Total Price: <strong>${props.totalPrice.toFixed(2)}</strong>
      </p>

      {Object.entries(props.ingredientsCount).map((ingr) => (
        <Control
          key={ingr[1] + ingr[0]}
          ingrName={ingr[0]
            .split("")
            .map((char, index) => (index === 0 ? char.toUpperCase() : char))
            .join("")}
          type={ingr[0]}
          count={ingr[1]}
          add={props.add}
          remove={props.remove}
        />
      ))}
      <button
        disabled={areAllZero}
        className="OrderButton"
        onClick={props.purchase}
      >
        {props.isAuth ? "ORDER NOW!" : "SIGN UP TO ORDER!"}
      </button>
    </div>
  );
};

export default buildControls;

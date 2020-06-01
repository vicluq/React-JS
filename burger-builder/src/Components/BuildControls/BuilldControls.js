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
      <Control
        ingrName="Salad"
        type={"salad"}
        count={props.ingredientsCount.salad}
        add={props.add}
        remove={props.remove}
      />
      <Control
        ingrName="Meat"
        type={"meat"}
        count={props.ingredientsCount.meat}
        add={props.add}
        remove={props.remove}
      />
      <Control
        ingrName="Cheese"
        type={"cheese"}
        count={props.ingredientsCount.cheese}
        add={props.add}
        remove={props.remove}
      />
      <Control
        ingrName="Bacon"
        type={"bacon"}
        count={props.ingredientsCount.bacon}
        add={props.add}
        remove={props.remove}
      />
      <button
        disabled={areAllZero}
        className="OrderButton"
        onClick={props.purchase}
      >
        ORDER NOW!
      </button>
    </div>
  );
};

export default buildControls;

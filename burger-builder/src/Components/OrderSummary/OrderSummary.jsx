import React, { Fragment } from "react";
import "./Buttons.css";

const orderSummary = (props) => {
  const ingredientSummary = Object.entries(props.ingredients).map((ingr) => {
    return (
      <li key={ingr[0] + ingr[1]}>
        <span style={{ textTransform: "capitalize" }}>{ingr[0]}</span>:{" "}
        {ingr[1]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3> Your Order </h3>
      <p>Delicious Burger With the Following Ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <em>Total Price:</em> <strong>${props.price}</strong>
      </p>
      <p>Continue to checkout?</p>
      <button className="Button Success" onClick={props.purchaseContinued}>
        CONTINUE
      </button>
      <button className="Button Danger" onClick={props.cancelOrder}>
        CANCEL
      </button>
    </Fragment>
  );
};

export default orderSummary;

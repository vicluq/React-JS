import React from "react";
import { withRouter } from "react-router-dom";
import "./CheckoutSummary.css";

import Burger from "../../Burger/Burger";

const checkoutSummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <h1>We Hope It Tastes Well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <h3>
        Total: <strong>${props.total.toFixed(2)}</strong>
      </h3>
      <button
        disabled={props.continueOrder}
        className="Button Success"
        onClick={props.goToCD}
      >
        CONTINUE
      </button>
      <button
        className="Button Danger"
        onClick={() => {
          props.history.replace("/burger-builder");
        }}
      >
        CANCEL
      </button>
    </div>
  );
};

export default withRouter(checkoutSummary);

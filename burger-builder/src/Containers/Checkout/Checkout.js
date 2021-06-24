import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
const ContactData = lazy(() => import("../ContactData/ContactData"));

function Checkout(props) {
  const [continueOrder, setContinueOrder] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const areAllZero = Object.values(props.ingredients).reduce(
      (counter, value) => {
        return value === 0;
      }
    );
    if (areAllZero) {
      props.history.replace("/burger-builder");
    }
  }, []);

  const redirectToContactData = () => {
    setContinueOrder(true);
    props.history.replace("/checkout/contact-data");
  };

  let route = null;
  if (continueOrder) {
    route = (
      <Route
        path={props.match.url + "/contact-data"}
        render={(props) => (
          <Suspense fallback={<h2>Loading...</h2>}>
            <ContactData
              {...props}
              orderInfo={{
                ingredients: { ...props.ingredients },
                total: props.total,
              }}
            />
          </Suspense>
        )}
      />
    );
  }
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
      className="Checkout"
    >
      <CheckoutSummary
        ingredients={props.ingredients}
        total={props.total}
        goToCD={redirectToContactData}
        continueOrder={continueOrder}
      />
      {route}
    </div>
  );
}

function mapPropsFromStore(store) {
  return {
    ingredients: store.orderInfoRed.ingredients,
    total: store.orderInfoRed.totalPrice,
  };
}

export default connect(mapPropsFromStore)(Checkout);

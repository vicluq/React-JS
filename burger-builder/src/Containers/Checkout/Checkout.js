import React, { Component, Suspense, lazy } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
const ContactData = lazy(() => import("../ContactData/ContactData"));

class Checkout extends Component {
  state = {
    costumerInfo: {},
    orderInfo: { ingredients: {}, total: 0 },
    continueOrder: null, //create different redirects if want to continue/not
    error: false,
  };

  componentDidMount() {
    const ingr = new URLSearchParams(this.props.location.search);

    this.setState({
      orderInfo: {
        ingredients: {
          salad: +ingr.get("salad"),
          cheese: +ingr.get("cheese"),
          bacon: +ingr.get("bacon"),
          meat: +ingr.get("meat"),
        },
        total: +ingr.get("total"),
      },
      continueOrder: false,
    });
  }

  redirectToContactData = () => {
    this.setState({ continueOrder: true });
    this.props.history.replace("/checkout/contact-data");
    //put it here becaus ewe will need to pass info from this component's state
  };

  render() {
    let route = null;
    if (this.state.continueOrder) {
      route = (
        <Route
          path={this.props.match.url + "/contact-data"}
          render={(props) => (
            <Suspense fallback={<h2>Loading...</h2>}>
              <ContactData {...props} orderInfo={this.state.orderInfo} />
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
          ingredients={this.state.orderInfo.ingredients}
          total={this.state.orderInfo.total}
          goToCD={this.redirectToContactData}
          continueOrder={this.state.continueOrder}
        />
        {route}
      </div>
    );
  }
}

export default Checkout;

/*
storeOrder
      .get(`/orders/${this.props.match.params.orderId}/.json`)
      .then(({ data }) => {
        this.setState((oldState) => ({
          ...oldState,
          orderInfo: { ingredients: data.ingredients, total: data.total },
        }));
      })
      .catch((err) => {
        this.setState((oldState) => ({ ...oldState, error: true }));
      });

*/

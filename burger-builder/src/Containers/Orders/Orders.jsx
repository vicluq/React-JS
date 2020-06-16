import React, { Component } from "react";
import "./Orders.css";
import storeOrder from "../../services/store-order";

import OrderCard from "../../Components/Order/OrderCard/OrderCard";
import Spinner from "../../Components/UI/Spinner/Spinner";

class Orders extends Component {
  state = {
    orders: [],
    noOrders: false,
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    storeOrder
      .get("/orders.json")
      .then(({ data }) => {
        const orders = data ? data : [];
        const noOrders = data ? false : true;
        this.setState((oldState) => ({
          ...oldState,
          orders: Object.values(orders),
          noOrders: noOrders,
          loading: false,
        }));
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    const noOrdersWarning = this.state.noOrders ? (
      <h1>No Orders Have Been Placed So Far!</h1>
    ) : null;

    return (
      <>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className="AllOrders">
            {this.state.orders.length > 0
              ? this.state.orders.map((order, index) => (
                  <OrderCard
                    key={order.date.time}
                    orderSequence={index + 1}
                    ingr={order.orderInfo.ingredients}
                    costumer={order.costumerInfo}
                    price={order.orderInfo.total}
                    date={order.date}
                  />
                ))
              : null}
            {noOrdersWarning}
          </div>
        )}
      </>
    );
  }
}

export default Orders;

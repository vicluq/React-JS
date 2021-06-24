import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import "./Orders.css";

import Spinner from "../../Components/UI/Spinner/Spinner";
import AllOrders from "./AllOrders/AllOrders";
import {
  GET_ORDERS,
  SET_LOADING,
  DELIVER,
} from "../../services/redux-store/actions/orders";

function Orders(props) {
  useEffect(() => {
    props.setLoading(true);
    props.fetchOrders(props.tokenId, props.userId);
  }, []);

  const error = <h1>Something Went Wrong when Fetching the orders...</h1>;
  const orderList =
    props.orders.length > 0 ? (
      <AllOrders
        orders={props.orders}
        deliverOrder={props.deliverOrder}
        tokenId={props.tokenId}
      />
    ) : (
      <h1>No Orders Have Been Placed So Far!</h1>
    );

  const content = props.error ? error : orderList;

  return <>{props.loading ? <Spinner /> : content}</>;
}

const mapPropsFromStore = (store) => {
  return {
    orders: store.ordersRed.orders,
    loading: store.ordersRed.loading,
    error: store.ordersRed.error,
    tokenId: store.authRed.user.token,
    userId: store.authRed.user.userID,
  };
};

const mapActions = (dispatch) => {
  return {
    fetchOrders: (token, userId) => dispatch(GET_ORDERS(token, userId)),
    setLoading: (state) => dispatch(SET_LOADING({ loading: state })),
    deliverOrder: (id, token) => dispatch(DELIVER(id, token)),
  };
};

export default connect(mapPropsFromStore, mapActions)(Orders);

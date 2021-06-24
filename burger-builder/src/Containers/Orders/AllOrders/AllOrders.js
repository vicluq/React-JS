import React from "react";

import OrderCard from "../../../Components/Order/OrderCard/OrderCard";

function AllOrders(props) {
  return (
    <div className="AllOrders">
      {props.orders.map((order, index) => (
        <OrderCard
          key={order.orderId}
          order={order}
          orderSequence={index + 1}
          ingr={order.orderInfo.ingredients}
          price={order.finalTotal.value}
          date={order.date}
          deliver={() => {
            props.deliverOrder(order.orderId, props.tokenId);
          }}
        />
      ))}
    </div>
  );
}

export default AllOrders;

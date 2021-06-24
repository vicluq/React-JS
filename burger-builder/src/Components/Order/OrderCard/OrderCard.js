import React from "react";
import "./OrderCard.css";

const orderCard = (props) => {
  return (
    <div className="OrderCard">
      <h2>
        {`${props.orderSequence}`}: {`${props.order.name.value}`}
      </h2>
      <p className="ingrP">
        <strong>Ingredients:</strong> <br />
        <span>Salad:</span> {props.ingr.salad} <br />
        <span>Bacon:</span> {props.ingr.bacon} <br />
        <span>Cheese:</span> {props.ingr.cheese} <br />
        <span>Meat:</span> {props.ingr.meat}
      </p>
      <p className="priceP">
        Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      <p className="dateP">
        <strong>Date: </strong>
        {props.date.day} at {props.date.time}
      </p>
      <button onClick={props.deliver} className="DeliverButton">
        Deliver
      </button>
    </div>
  );
};

export default orderCard;

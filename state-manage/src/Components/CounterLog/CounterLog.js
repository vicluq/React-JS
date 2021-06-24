import React from "react";
import { connect } from "react-redux";

const counterLog = (props) => {
  const counterLog = props.counter_log.map((value, index) => (
    <li
      key={value + index + Math.floor(Math.random() * 1000)}
      onClick={props.removeLogItem.bind(null, value, index)}
    >
      {`Log ${index + 1}:`} <strong>new value</strong> = <em>{value}</em> |
      <strong>variation</strong> = <em>{props.change_log[index]}</em>
    </li>
  ));

  return (
    <>
      <button onClick={props.clearCounterLog}>Clear all</button>
      <ul className="Previous-Counter-Values">{counterLog}</ul>
    </>
  );
};

const mapPropsFromStore = (store) => {
  return {
    counter_log: store.countRed.counter_log,
    change_log: store.countRed.change_log,
  };
};

const mapActionsFromReducer = (dispatch) => {
  return {
    removeLogItem: (value, index) =>
      dispatch({ type: "REMOVE_LOG_ITEM", index: index, value: value }),
    clearCounterLog: dispatch.bind(null, { type: "CLEAR_LOG" }),
  };
};

export default connect(mapPropsFromStore, mapActionsFromReducer)(counterLog);

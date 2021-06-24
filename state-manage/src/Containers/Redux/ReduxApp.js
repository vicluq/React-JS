import React, { Component, Fragment } from "react";
import { connect } from "react-redux"; //imports to connect redux with react

import * as actionCreators from "../../Services/Store/actions";
import CounterLog from "../../Components/CounterLog/CounterLog";

class ReduxApp extends Component {
  render() {
    return (
      <Fragment>
        <div className="ReduxApp">
          <h1>Redux App</h1>
          <div className="Redux-Content">
            <div className="Counter-div">
              {this.props.counter < 0 ? (
                <h2 style={{ color: "#f00" }}>COUNTER MUST BE HIGHER THAN 0</h2>
              ) : null}
              <h2>Counter: {this.props.counter}</h2>
            </div>
            <div className="Counter-Controls">
              <button onClick={this.props.incrementCounter}>Increment</button>
              <input
                type="number"
                name="add_value"
                onChange={this.props.sendAddValue}
                value={this.props.add_value}
                min="0"
              />
              <button
                onClick={this.props.addition.bind(null, this.props.add_value)}
              >
                Add
              </button>
              <input
                type="number"
                name="sub_value"
                onChange={this.props.sendSubValue}
                min="0"
                value={this.props.sub_value}
              />
              <button
                onClick={this.props.subtraction.bind(
                  null,
                  this.props.sub_value
                )}
              >
                Subtract
              </button>
              <button onClick={this.props.decrementCounter}>Decrement</button>
              <hr />
              <div>
                <button
                  onClick={this.props.displayCounterLog.bind(
                    null,
                    this.props.counter
                  )}
                >
                  {this.props.display_log ? "Hide" : "Display"} Counter's Log
                </button>
                {this.props.display_log ? <CounterLog /> : null}
              </div>
              <hr />
            </div>
            <div className="UserPanel">
              <p>User: {this.props.username}</p>
              <input
                type="text"
                name="username"
                onChange={this.props.setUsername}
                value={this.props.username}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapPropsFromStore = (state) => {
  // the returned store content will be spread as props with the name of the key
  return {
    counter: state.countRed.counter,
    display_log: state.countRed.display_log,
    username: state.countRed.user,
    add_value: state.inputRed.add_value,
    sub_value: state.inputRed.sub_value,
  };
};

const mapActionsToDispatch = (dispatch) => {
  //the returned actions will be spread as props with the name of the key
  return {
    incrementCounter: dispatch.bind(null, actionCreators.plusOneCounter()),
    decrementCounter: dispatch.bind(null, actionCreators.minusOneCounter()),
    addition: (value) => dispatch(actionCreators.addition({ value: value })),
    subtraction: (value) => dispatch({ type: "SUBTRACT", value: value }),
    setUsername: (event) =>
      dispatch({ type: "SET_USERNAME", username: event.target.value }),
    sendSubValue: (event) =>
      dispatch({ type: "GET_SUB_VALUE", value: event.target.value }),
    sendAddValue: (event) =>
      dispatch({ type: "GET_ADD_VALUE", value: event.target.value }),
    displayCounterLog: () => dispatch({ type: "DISPLAY_LOG" }),
  };
};

export default connect(mapPropsFromStore, mapActionsToDispatch)(ReduxApp);

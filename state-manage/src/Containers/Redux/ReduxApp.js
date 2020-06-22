import React, { Component, Fragment } from "react";
import { connect } from "react-redux"; //imports to connect redux with react

class ReduxApp extends Component {
  render() {
    return (
      <Fragment>
        <div className="ReduxApp">
          <h1>Redux App</h1>
          <div className="Redux-Content">
            <div className="Counter-div">
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
              <button onClick={this.props.addition}>Add</button>
              <input
                type="number"
                name="sub_value"
                onChange={this.props.sendSubValue}
                min="0"
                value={this.props.sub_value}
              />
              <button onClick={this.props.subtraction}>Subtract</button>
              <button onClick={this.props.decrementCounter}>Decrement</button>
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
    counter: state.counter,
    username: state.user,
    add_value: state.add_value,
    sub_value: state.sub_value,
  };
};

const mapActionsToDispatch = (dispatch) => {
  //the returned actions will be spread as props with the name of the key
  return {
    incrementCounter: dispatch.bind(null, { type: "PLUS_ONE_COUNT" }),
    decrementCounter: dispatch.bind(null, { type: "MINUS_ONE_COUNT" }),
    addition: dispatch.bind(null, { type: "ADDITION" }),
    subtraction: dispatch.bind(null, { type: "SUBTRACT" }),
    setUsername: (event) =>
      dispatch({ type: "SET_USERNAME", username: event.target.value }),
    sendSubValue: (event) =>
      dispatch({ type: "GET_SUB_VALUE", value: event.target.value }),
    sendAddValue: (event) =>
      dispatch({ type: "GET_ADD_VALUE", value: event.target.value }),
  };
};

export default connect(mapPropsFromStore, mapActionsToDispatch)(ReduxApp);

import React, { Component } from "react";
import "./User.css";

class User extends Component {
  render() {
    return (
      <div id={this.props.id} className={`user ${this.props.theme}`}>
        <span>id: {this.props.id} </span>
        <h2>username: {this.props.username}</h2>
        <h3>Email: {this.props.email}</h3>
        <input type="text" onChange={this.props.changeUN} />
        <button onClick={this.props.click}>Delete {this.props.username}</button>
      </div>
    );
  }
}

export default User;

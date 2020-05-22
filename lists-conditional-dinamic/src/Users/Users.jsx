import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div id={this.props.id} className="user">
        <span>id: {this.props.id} </span>
        <h2>username: {this.props.username}</h2>
        <h3>Email: {this.props.email}</h3>
      </div>
    );
  }
}

export default User;

import React, { Component } from "react";
import Styled from "styled-components";
import "./User.css";

const StyledDiv = Styled.div`
width: 400px;
margin: 20px auto 10px;
border: 3px solid skyblue;
border-radius: 5px;
padding: 8px;

@media (max-width: 360px) {
  width: 100%;
  margin: 0;
}
`;

class User extends Component {
  render() {
    return (
      <StyledDiv id={this.props.id} className={`user ${this.props.theme}`}>
        <span>id: {this.props.id} </span>
        <h2>username: {this.props.username}</h2>
        <h3>Email: {this.props.email}</h3>
        <input type="text" onChange={this.props.changeUN} />
        <button onClick={this.props.click}>Delete {this.props.username}</button>
      </StyledDiv>
    );
  }
}

export default User;

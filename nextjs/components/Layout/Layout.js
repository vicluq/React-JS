import React, { Component } from "react";
import Header from "../Header/Header";
import Router from "next/router";

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Header path={this.props.path} />
        <main className="App-Content">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;

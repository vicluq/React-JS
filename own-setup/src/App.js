import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import WebpackPage from "./containers/WebpackPage/WebpackPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-Content">
          <Route path="/webpack-config" component={WebpackPage} />
          <Route path="/webpack-config" component={""} />
          <Route path="/webpack-config" component={""} />
          <Route path="/webpack-config" component={""} />
          <Redirect exact from="/" to="/webpack-config" />
        </main>
      </div>
    );
  }
}

export default App;

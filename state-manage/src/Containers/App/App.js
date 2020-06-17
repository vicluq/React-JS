import React from "react";
import { RecoilRoot } from "recoil";

import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Header from "../../Components/Header/Header";
import RecoilApp from "../Recoil/RecoilApp";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Content">
        <Switch>
          <Route
            path="/recoil"
            render={(props) => (
              <RecoilRoot>
                <RecoilApp {...props} />
              </RecoilRoot>
            )}
          />
          <Route path="/redux" render={() => <h1>Start Learning</h1>} />
          <Route path="/" exact render={() => <h1>Start Learning</h1>} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

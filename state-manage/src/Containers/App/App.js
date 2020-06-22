import React, { Suspense, lazy } from "react";
import { RecoilRoot } from "recoil";

import { Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import root_reducer from "../../Services/Store/reducers";

import "./App.css";
import Header from "../../Components/Header/Header";
const RecoilApp = lazy(() => import("../Recoil/RecoilApp"));
const ReduxApp = lazy(() => import("../Redux/ReduxApp"));

const reduxStore = createStore(root_reducer);

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Content">
        <Switch>
          <Route
            path="/recoil"
            render={(props) => (
              <Suspense fallback={<h2>Loading...</h2>}>
                <RecoilRoot>
                  <RecoilApp {...props} />
                </RecoilRoot>
              </Suspense>
            )}
          />
          <Route
            path="/redux"
            render={(props) => (
              <Suspense fallback={<h2>Loading...</h2>}>
                <Provider store={reduxStore}>
                  <ReduxApp {...props} />
                </Provider>
              </Suspense>
            )}
          />
          <Route path="/" exact render={() => <h1>Start Learning</h1>} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

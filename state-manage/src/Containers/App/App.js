import React, { Suspense, lazy } from "react";
import { RecoilRoot } from "recoil";

import "./App.css";
import Header from "../../Components/Header/Header";

import { Route, Switch } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import getInputReducer from "../../Services/Store/reducers/get_input_values";
import counterReducer from "../../Services/Store/reducers/counter";

const middleware = function (store) {
  return function (next) {
    return function (action) {
      console.log(`Action Dispatched >> ${action.type}`);
      const nextResult = next(action);
      console.log(nextResult);
      return nextResult;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
  combineReducers({
    countRed: counterReducer,
    inputRed: getInputReducer,
  }),
  composeEnhancers(applyMiddleware(middleware, thunk))
);

const RecoilApp = lazy(() => import("../Recoil/RecoilApp"));
const ReduxApp = lazy(() => import("../Redux/ReduxApp"));

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

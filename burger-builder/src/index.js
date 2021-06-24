import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./index.css";

import App from "./Containers/App";
import contactDataRed from "./services/redux-store/reducers/contactDataReducer";
import orderInfoRed from "./services/redux-store/reducers/orderInfoReducer";
import ordersRed from "./services/redux-store/reducers/ordesReducer";
import authRed from "./services/redux-store/reducers/auth";
import createSagaMiddleware from "redux-saga";

import actionWatcher from "./services/redux-store/sagas";

const combineEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const Sagas = createSagaMiddleware();

const store = createStore(
  combineReducers({
    contactDataRed: contactDataRed,
    orderInfoRed: orderInfoRed,
    ordersRed: ordersRed,
    authRed: authRed,
  }),
  combineEnhancers(applyMiddleware(thunk, Sagas))
);

Sagas.run(actionWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

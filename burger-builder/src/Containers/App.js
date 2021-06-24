import React, { lazy, useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import AsyncComponent from "../HOC/asyncHoc";
import { checkStorageInfo } from "../services/redux-store/actions/auth";

import Layout from "../Components/layout/Layout";
import Modal from "../Components/UI/Modal/Modal";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";

const SignUpForm = lazy(() => import("../Containers/Signup/Signup"));
const LoginForm = lazy(() => import("../Containers/Login/Login.js"));
const Checkout = lazy(() => import("./Checkout/Checkout"));
const Orders = lazy(() => import("./Orders/Orders"));

function App(props) {
  const [showTimeoutModal, setModal] = useState(true);

  useEffect(() => {
    props.checkAuth();
  }, []);

  let orderRoute = null;
  if (props.isAuth) {
    orderRoute = <Route exact path="/orders" render={AsyncComponent(Orders)} />;
  }

  let timeoutModal = null;
  if (props.isTimeout && showTimeoutModal) {
    timeoutModal = (
      <Modal
        type="Timeout"
        showing={showTimeoutModal && props.isTimeout}
        closeModal={() => {
          setModal(false);
        }}
      >
        <h2>TimeOut Exceeded</h2>
        <div className="Timeout-Controls">
          <button>
            <a href="/">Return Home</a>
          </button>
          <button>
            <a href="/login">Login</a>
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <div className="App">
      <Layout isAuth={props.isAuth}>
        {timeoutModal}
        <Switch>
          <Route path="/burger-builder" component={BurgerBuilder} />
          <Route path="/signup" render={AsyncComponent(SignUpForm)} />
          <Route path="/login" render={AsyncComponent(LoginForm)} />
          {orderRoute}
          <Route path="/checkout/" render={AsyncComponent(Checkout)} />
          <Redirect exact from="/" to="/burger-builder" />
          <Route render={() => <h2>ERROR 404: Page not Fount ☹</h2>} />
        </Switch>
      </Layout>
    </div>
  );
}

const mapPropsFromStore = (store) => {
  return {
    isAuth: store.authRed.auth,
    isTimeout: store.authRed.timeout,
  };
};

const mapActions = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkStorageInfo()),
  };
};

export default connect(mapPropsFromStore, mapActions)(App);

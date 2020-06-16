import React, { lazy, Suspense, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Layout from "../Components/layout/Layout";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Spinner from "../Components/UI/Spinner/Spinner";

const Checkout = lazy(() => import("./Checkout/Checkout"));
const Orders = lazy(() => import("./Orders/Orders"));

function App() {
  const [state, setState] = useState({ isAuth: true });

  //FIXME: route only avaliable for auth users
  let orderRoute = null;
  if (state.isAuth) {
    orderRoute = (
      <Route
        exact
        path="/orders"
        render={(props) => (
          <Suspense fallback={<Spinner />}>
            <Orders {...props} />
          </Suspense>
        )}
      />
    );
  }

  return (
    <div className="App">
      <Layout isAuth={state.isAuth}>
        <Switch>
          <Route exact path="/burger-builder" component={BurgerBuilder} />
          {orderRoute}
          <Route
            path="/checkout/"
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <Checkout {...props} />
              </Suspense>
            )}
          />
          <Redirect exact from="/" to="/burger-builder" />
          <Route render={() => <h2>ERROR 404: Page not Fount ☹</h2>} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

import React, { Component, Fragment, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Courses from "../Courses/Courses";
const CoursePage = lazy(() => import("../CoursePage/CoursePage"));

class Website extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
        <div className="Content">
          <Switch>
            <Route
              path="/courses/course"
              render={(props) => (
                <Suspense fallback={<h2>Loading Course...</h2>}>
                  <CoursePage {...props} />
                </Suspense>
              )}
            />
            <Route path="/courses" component={Courses} />
            <Route path="/users" render={() => <h2>USERS PAGE</h2>} />
            <Redirect from="/all-courses" to="/courses" />
            <Redirect from="/" to="/courses" />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default Website;

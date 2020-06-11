import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Courses from "../Courses/Courses";
import CoursePage from "../CoursePage/CoursePage";

class Website extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
        <div className="Content">
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/course" component={CoursePage} />
            <Route path="/users" component={""} />
            <Redirect from="/all-courses" to="/courses" />
            <Redirect from="/" to="/courses" />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default Website;

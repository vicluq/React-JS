import React, { Fragment, Component } from "react";
import classes from "./Layout.module.css";
import Toolbar from "./../Navigation/Toolbar/Toolbar";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer";

class layout extends Component {
  state = {
    showSideDrawer: false,
  };

  showSDHandler = () => {
    this.setState((oldState) => ({ showSideDrawer: !oldState.showSideDrawer }));
  };

  render() {
    return (
      <Fragment>
        <SideDrawer
          open={this.state.showSideDrawer}
          click={this.showSDHandler}
        />
        <Toolbar click={this.showSDHandler} />
        <main className={classes.main}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default layout;

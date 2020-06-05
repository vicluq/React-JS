import React, { Fragment } from "react";
import Logo from "./../../Logo/Logo";
import NavItems from "./../NavItems/NavItems";
import "./SideDrawer.css";
import BackDrop from "../../UI/BackDrop/BackDrop";

const sideDrawer = (props) => {
  return (
    <Fragment>
      <BackDrop showing={props.open} click={props.click} />
      <div className={`SideDrawer ${props.open ? "Open" : "Close"}`}>
        <div className="LogoSD">
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;

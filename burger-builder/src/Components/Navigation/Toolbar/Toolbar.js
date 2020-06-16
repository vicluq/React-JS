import React from "react";
import "./Toolbar.css";
import "./BurgerIcon.css";
import Logo from "./../../Logo/Logo";
import NavItems from "./../NavItems/NavItems";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div className="DrawerToggle" onClick={props.click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="LogoTB">
        <Logo />
      </div>
      <nav className="DesktopOnly">
        <NavItems isAuth={props.isAuth} />
      </nav>
    </header>
  );
};

export default Toolbar;

import React from "react";
import "./NavItems.css";
import NavItem from "./NavItem/NavItem";

const navItems = (props) => {
  return (
    <ul className="NavItems">
      <NavItem link="/burger-builder">Burger Builder</NavItem>
      {props.isAuth ? <NavItem link="/orders">Orders</NavItem> : null}
    </ul>
  );
};

export default navItems;

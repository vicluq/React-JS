import React from "react";
import "./NavItems.css";
import NavItem from "./NavItem/NavItem";

const navItems = (props) => {
  return (
    <ul className="NavItems">
      <NavItem link="/" active={true}>
        Burger Builder
      </NavItem>
      <NavItem link="/" active={false}>
        Checkout
      </NavItem>
    </ul>
  );
};

export default navItems;

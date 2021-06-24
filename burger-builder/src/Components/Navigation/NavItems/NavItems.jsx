import React from "react";
import { useDispatch } from "react-redux";
import "./NavItems.css";

import { INITIATE_LOGOUT_USER } from "../../../services/redux-store/actions/auth";
import NavItem from "./NavItem/NavItem";

const NavItems = (props) => {
  const dispatch = useDispatch();
  return (
    <ul className="NavItems">
      <NavItem link="/burger-builder">Burger Builder</NavItem>
      {props.isAuth ? <NavItem link="/orders">Orders</NavItem> : null}
      {props.isAuth ? (
        <button
          className="LogoutBut"
          onClick={() => {
            dispatch(INITIATE_LOGOUT_USER(false));
            window.location.assign("/");
          }}
        >
          Logout
        </button>
      ) : (
        <NavItem link="/Signup">SignUp</NavItem>
      )}
    </ul>
  );
};

export default NavItems;

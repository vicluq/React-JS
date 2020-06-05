import React from "react";
import Logo from "./../../assets/Images/Logo.png";
import "./Logo.css";

const logo = (props) => {
  return (
    <div className="Logo">
      <img src={Logo} alt="Burger Logo" />
    </div>
  );
};

export default logo;

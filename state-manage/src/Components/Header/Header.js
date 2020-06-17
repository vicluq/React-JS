import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const header = (props) => {
  return (
    <header className="App-header">
      <h1>Using State Management</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/recoil">Recoil</NavLink>
          </li>

          <li>
            <NavLink to="/redux">Redux</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;

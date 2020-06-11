import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = (props) => (
  <header>
    <h1> WebCourses </h1>
    <nav>
      <ul>
        <li>
          <NavLink activeStyle={{ backgroundColor: "skyblue" }} to="/courses">
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ backgroundColor: "skyblue" }} to="/users">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

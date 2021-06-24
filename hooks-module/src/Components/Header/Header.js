import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = (props) => (
  <header>
    <h1>
      Working with <span>React Hooks</span>
    </h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/usestate">useState</NavLink>
        </li>
        <li>
          <NavLink to="/useeffect">useEffect</NavLink>
        </li>
        <li>
          <NavLink to="usecontext">useContext</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

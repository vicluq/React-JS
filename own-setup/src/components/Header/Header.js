import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-Header">
      <h1>Welcome to your own React App Setup!</h1>
      <nav>
        <Link to="/webpack-config">Wepback Config</Link>
        <Link to="/css-config">CSS Setup</Link>
        <Link to="/js-config">JS Setup</Link>
        <Link to="/html-config">HTML Setup</Link>
      </nav>
    </header>
  );
}

export default Header;

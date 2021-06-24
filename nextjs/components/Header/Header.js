import React from "react";
import Link from "next/link";

import classes from "./Header.module.css";

const Header = ({ path }) => (
  <header>
    <h1>This is my app header</h1>
    <nav>
      <Link href="/">
        <a
          className={`${classes["nav-link"]}${
            path === "/" ? ` ${classes.active}` : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/posts">
        <a
          className={`${classes["nav-link"]}${
            path === "/posts" ? ` ${classes.active}` : ""
          }`}
        >
          Posts
        </a>
      </Link>
    </nav>
  </header>
);

export default Header;

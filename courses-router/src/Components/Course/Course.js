import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Course.css";

const Course = (props) => (
  <div className="Course">
    <NavLink style={{ textDecoration: "none" }} to={`/courses/${props.id}`}>
      <h3>{props.title}</h3>
      <p className="price">
        <strong>${props.price}</strong>
      </p>
      <p className="teacher">{props.teacher}</p>
    </NavLink>
  </div>
);

export default Course;

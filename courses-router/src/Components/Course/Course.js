import React from "react";
import { NavLink } from "react-router-dom";
import "./Course.css";

const Course = (props) => (
  <div className="Course">
    <NavLink style={{ textDecoration: "none" }} to={`/courses/${props.id}`}>
      <h3>{props.title}</h3>
      <p className="price">
        <strong>${props.price}</strong>
      </p>
      {props.teacher ? <p className="teacher">{props.teacher}</p> : null}
    </NavLink>
  </div>
);

export default Course;

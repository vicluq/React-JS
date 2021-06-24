import React from "react";

const post = (props) => (
  <li className="Post">
    <div>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  </li>
);

export default post;

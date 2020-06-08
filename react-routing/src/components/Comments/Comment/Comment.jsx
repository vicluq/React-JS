import React from "react";

const comment = (props) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    boxShadow: "2px 3px 3px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#f00060",
    color: "#fff",
  };

  return (
    <article style={style} className="Comment">
      <h3 className="Comment-name">
        <strong>{props.name}</strong>
      </h3>
      <p className="Comment-email">
        <em>{props.email}</em>
      </p>
      <p>{props.body}</p>
    </article>
  );
};

export default comment;

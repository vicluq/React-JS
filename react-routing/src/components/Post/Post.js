import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  return (
    <article className="Post">
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
      <Link
        className="read-more-link"
        to={{
          pathname: `/${props.id}`,
        }}
      >
        Read More...
      </Link>
    </article>
  );
};

export default withRouter(Post);

import React from "react";
import FullPost from "./../../containers/FullPost/FullPost";
import { Route, Link, withRouter } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  return (
    <article className="Post">
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
      <Link
        to={{
          pathname: `/posts/${props.id}`,
        }}
      >
        Read More...
      </Link>
    </article>
  );
};

export default withRouter(Post);

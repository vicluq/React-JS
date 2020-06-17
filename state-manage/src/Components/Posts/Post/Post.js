import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <article>
      <p>
        <strong>Post Id: </strong>
        {props.id}
      </p>
      <p>{props.body}</p>
      <Link to={`/recoil/posts/${props.id}`}>Read More...</Link>
    </article>
  );
};

export default Post;

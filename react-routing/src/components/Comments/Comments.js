import React from "react";
import Comment from "./Comment/Comment";

const comments = (props) => {
  const comment_list = props.comments.map((comment) => (
    <Comment email={comment.email} name={comment.email} body={comment.body} />
  ));

  return comment_list;
};

export default comments;

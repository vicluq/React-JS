import React from "react";

//components
import Post from "./Post/Post";

function Posts(props) {
  const allPosts = props.posts.map((post) => (
    <Post id={post.postId} body={post.body} />
  ));

  return allPosts;
}

export default Posts;

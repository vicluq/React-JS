import React from "react";

import Post from "../Post/Post";

const filteredPosts = ({ posts }) => {
  const filtered = posts.map((post) => (
    <Post key={post.id} title={post.title} body={post.body} />
  ));

  return posts.length > 0 ? <div className="Post-List">{filtered}</div> : null;
};

export default filteredPosts;

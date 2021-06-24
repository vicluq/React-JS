import React from "react";
import { useRouter } from "next/router";

function PostById(props) {
  const router = useRouter();
  return (
    <article className="PostById">
      <h2>Post id is: {router.query.id}</h2>
      <h3>Post title is: {router.query.title}</h3>
    </article>
  );
}

export default PostById;

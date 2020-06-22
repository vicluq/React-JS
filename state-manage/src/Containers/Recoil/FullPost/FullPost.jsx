import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { filteredPosts, postsIds } from "../../../Services/Recoil";

const FullPost = (props) => {
  const [id, setId] = useRecoilState(postsIds); //atom to receive an id for posts
  const [post] = useRecoilValue(filteredPosts); //selector that uses all posts atom and id atom to filter

  useEffect(() => {
    setId(Number(props.match.params.postId));
  }, []);

  useEffect(() => {
    console.log(id, post);
  }, [id]);

  return (
    <article>
      <p>{post.body}</p>
    </article>
  );
};

export default FullPost;

import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import { filteredPosts, postsIds } from "../../../Services/Recoil";

const FullPost = (props) => {
  const [id, setId] = useRecoilState(postsIds);
  const [post] = useRecoilValue(filteredPosts);

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

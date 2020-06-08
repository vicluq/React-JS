import React, { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import "./Posts.css";
import axios from "axios";

const Posts = (props) => {
  const [state, setPosts] = useState({ posts: [], isThereAnError: false });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(({ data }) => {
        const posts = Object.values(data);
        posts.splice(0, 85);
        setPosts((oldState) => ({
          ...oldState,
          posts: posts.reverse(), //output only the 50 most recent
        }));
      })
      .catch((err) => {
        setPosts((oldState) => ({ ...oldState, isThereAnError: true }));
      });
  }, []);

  return (
    <section className="Posts">
      {state.posts.length > 0 ? (
        state.posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author="Victoria"
            post={post}
          />
        ))
      ) : (
        <h2>Loading ...</h2>
      )}
    </section>
  );
};

export default Posts;

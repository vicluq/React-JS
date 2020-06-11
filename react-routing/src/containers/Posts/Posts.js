import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Post from "../../components/Post/Post";
import FullPost from "./../FullPost/FullPost";
import "./Posts.css";

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

  console.log(props);

  return (
    <Fragment>
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
      <Route path={`/posts/:postId`} component={FullPost} />
    </Fragment>
  );
};

export default Posts;

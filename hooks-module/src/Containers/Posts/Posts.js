import React, { useEffect, useReducer } from "react";
import useFetch from "../../Hooks/useFetch";
import Post from "../../Components/Post/Post";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  isError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: [...action.posts],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.loading,
      };
    case "SET_ERROR":
      return {
        ...state,
        isError: action.error,
      };
    default:
      return state;
  }
};

function Posts(props) {
  const { filterPosts, idToFilter } = props;
  const [{ posts }, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { send, isLoading, isError, data, clearAll } = useFetch();

  useEffect(() => {
    send("https://jsonplaceholder.typicode.com/posts", "GET");
  }, []);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      dispatch({ type: "SET_POSTS", posts: data });
      clearAll();
    }
  }, [isLoading, isError, data, clearAll]);

  useEffect(() => {
    const filtered = posts.filter((post) => post.userId === idToFilter);
    filterPosts(filtered);
  }, [idToFilter, filterPosts, posts]);

  let Content = (
    <ul className="Post-List">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </ul>
  );

  if (isError) {
    Content = <h2 style={{ color: "#f00" }}>Failed to load resources</h2>;
  }

  return isLoading ? <h2>Loading...</h2> : Content;
}

export default Posts;

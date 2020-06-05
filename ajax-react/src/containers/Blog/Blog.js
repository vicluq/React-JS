import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import post from "../../components/Post/Post";

class Blog extends Component {
  state = {
    posts: [],
    isThereAnError: false,
    fullPost: null,
  };

  componentDidMount = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then(({ data }) => {
        const posts = Object.values(data);
        posts.splice(0, 85);
        this.setState((oldState) => ({
          ...oldState,
          posts: posts.reverse(), //output only the 50 most recent
        }));
      })
      .catch((err) => {
        this.setState((oldState) => ({ ...oldState, isThereAnError: true }));
      });
  };

  renderFullPostHandler = (postId) => {
    //loop through posts list (test this) or make axios request using id as a parameter
    /* 
      axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(({ data }) => {
        this.setState((oldState) => ({ ...oldState, fullPost: data }));
      })
      .catch((err) => {
        this.setState((oldState) => ({
          ...oldState,
          fullPost: "failed to fetch post",
        }));
      }); 
    */
    const post = this.state.posts.filter((post) => post.id === postId);
    this.setState((oldState) => ({ ...oldState, fullPost: post[0] }));
  };
  // another way: pass the selected post id to FullPost and in there create a function to fetch the post data
  render() {
    return (
      <div>
        <section className="Posts">
          {this.state.posts ? (
            this.state.posts.map((post) => (
              <Post
                key={post.id}
                title={post.title}
                author="Victoria"
                click={this.renderFullPostHandler.bind(null, post.id)}
              />
            ))
          ) : (
            <h2>Loading ...</h2>
          )}
        </section>
        <section>
          <FullPost
            isThereAPost={!!this.state.fullPost}
            post={this.state.fullPost}
          />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;

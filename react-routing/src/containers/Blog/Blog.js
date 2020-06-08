import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Posts from "../Posts/Posts";
import FullPost from "../FullPost/FullPost";
import NewPost from "../NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    isThereAnError: false,
    fullPost: null,
  };

  render() {
    return (
      <div>
        <header className="MainHeader">
          <h1>
            <Link className="mainTitle" to="/">
              Luquet News
            </Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/new-post">New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path={`/posts/:postId`} exact component={FullPost} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;

/* <Route
path="/"
exact
render={() => (
  <FullPost
    isThereAPost={!!this.state.fullPost}
    post={this.state.fullPost}
  />
)}
/> */

import React, { Component, lazy, Suspense } from "react";
import { Route, Link, NavLink, Switch, Redirect } from "react-router-dom";

import Error404 from "../../components/Error404/Error404";
import "./Blog.css";

const Posts = lazy(() => import("./../Posts/Posts"));
const NewPost = lazy(() => import("../NewPost/NewPost"));

class Blog extends Component {
  state = {
    isThereAnError: false,
    fullPost: null,
    auth: false,
  };

  render() {
    console.log(this.props);
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
                <NavLink exact to="/posts">
                  Homepage
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/new-post">
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route
              path="/new-post"
              render={() => (
                <Suspense fallback={<h1>Loading ...</h1>}>
                  {" "}
                  <NewPost />{" "}
                </Suspense>
              )}
            />
          ) : // <Redirect from="/new-post" to="/" />
          null}
          <Route
            path="/posts"
            render={() => (
              <Suspense fallback={<h1>Loading ...</h1>}>
                <Posts />
              </Suspense>
            )}
          />
          <Route component={Error404} />
        </Switch>
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

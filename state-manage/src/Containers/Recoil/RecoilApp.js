import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { NavLink, Route, Switch } from "react-router-dom";

import { posts } from "../../Services/Recoil";
import Posts from "../../Components/Posts/Posts";
import FullPost from "./FullPost/FullPost";

const RecoilApp = (props) => {
  const [recoilPosts, setRecoilPosts] = useRecoilState(posts);

  return (
    <div className="RecoilApp">
      <div>
        <NavLink to={`${props.match.url}/posts`}>Posts</NavLink>
        <NavLink to={`${props.match.url}/posts/new-post`}>New Post</NavLink>
      </div>
      <div className="RecoilContent">
        <Switch>
          <Route
            path={`${props.match.url}/posts/new-post`}
            render={(props) => <h1>New Post</h1>}
          />
          <Route
            path={`${props.match.url}/posts/:postId`}
            component={FullPost}
          />
          <Route
            path={`${props.match.url}/posts`}
            exact
            render={(props) => <Posts {...props} posts={recoilPosts} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default RecoilApp;

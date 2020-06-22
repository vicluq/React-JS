import React from "react";
import { useRecoilState } from "recoil";
import { NavLink, Route, Switch } from "react-router-dom";

import { posts } from "../../Services/Recoil";
import Posts from "../../Components/Posts/Posts";
import FullPost from "./FullPost/FullPost";
import RecoilCodeImg from "../../assets/using-recoil.svg";

const RecoilApp = (props) => {
  const [recoilPosts, setRecoilPosts] = useRecoilState(posts);

  return (
    <div className="RecoilApp">
      <div>
        <NavLink to={`${props.match.url}/posts`}>Posts</NavLink>
        <NavLink to={`${props.match.url}/posts/new-post`}>New Post</NavLink>
      </div>
      <div
        style={{
          width: "100%",
          margin: "30px 0",
          display: "grid",
          gridTemplateColumns: "50% 50%",
        }}
        className="RecoilContent"
      >
        <div>
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
        <div style={{ height: "600px", margin: "auto", width: "650px" }}>
          <img
            height="100%"
            width="100%"
            src={RecoilCodeImg}
            alt="using recoil"
          />
        </div>
      </div>
    </div>
  );
};

export default RecoilApp;

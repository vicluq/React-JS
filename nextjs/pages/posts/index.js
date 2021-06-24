import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class Posts extends Component {
  static getInitialProps(ctx) {
    console.log(ctx);
    return {};
  }
  render() {
    return (
      <div className="Posts-Page">
        <h1>My Posts</h1>
        <section>
          <article>
            <h3>This is a post title</h3>
            <Link href="/posts/2?title=nice post">
              <a>Read More...</a>
            </Link>
          </article>
        </section>
      </div>
    );
  }
}

export default Posts;

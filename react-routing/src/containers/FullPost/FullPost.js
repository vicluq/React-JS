import React, { Component, Fragment } from "react";
import "./FullPost.css";
import Axios from "axios";

class FullPost extends Component {
  state = {
    post: {},
    comments: [],
  };

  componentDidMount() {
    Axios.get(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`
    )
      .then(({ data }) => {
        console.log("got it!");
        this.setState({ post: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    if (`${this.state.post.id}` !== this.props.match.params.postId) {
      console.log("mudou");
      Axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`
      )
        .then(({ data }) => {
          console.log("got it!");
          this.setState({ post: data });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("não mudou");
    }
  }

  deletePostHandler = (postId) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      (res) => {
        console.log(res);
      }
    );
  };

  render() {
    return (
      <section className="FullPostSec">
        <button onClick={this.props.history.goBack}> Back </button>
        <div className="FullPost">
          {Object.keys(this.state.post).length > 0 ? (
            <Fragment>
              <h1>{this.state.post.title}</h1>
              <p>{this.state.post.body}</p>
              <div className="Edit">
                <button
                  className="Delete"
                  onClick={this.deletePostHandler.bind(
                    null,
                    this.state.post.id
                  )}
                >
                  Delete
                </button>
              </div>
            </Fragment>
          ) : (
            <h2>Loading ...</h2>
          )}
        </div>
      </section>
    );
  }
}

export default FullPost;

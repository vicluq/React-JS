import React, { Component } from "react";
import "./FullPost.css";
import Axios from "axios";
import { commentsReq } from "../../services/commentsApi";
import Comments from "./../Comments/Comments";

class FullPost extends Component {
  state = {
    comments: [],
    displayComments: false,
  };

  deletePostHandler = (postId) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
      (res) => {
        console.log(res);
      }
    );
  };

  displayCommentsHandler = (id) => {
    this.setState((oldState) => ({
      displayComments: !oldState.displayComments,
    }));
    this.fetchCommentsHandler(this.props.post.id);
  };

  fetchCommentsHandler = (id) => {
    if (this.state.displayComments) {
      commentsReq.get(`/${id}/comments`).then(({ data }) => {
        this.setState((oldState) => ({ ...oldState, comments: data }));
      });
    }
  };

  render() {
    let comments = this.state.displayComments ? (
      <Comments comments={this.state.comments} />
    ) : null;

    let post = <p className="placeholder-p">Please select a Post!</p>;
    if (this.props.isThereAPost) {
      post = (
        <div className="FullPost">
          <h1>{this.props.post.title}</h1>
          <p>{this.props.post.body}</p>
          <div className="Edit">
            <button
              onClick={this.displayCommentsHandler.bind(
                null,
                this.props.post.id
              )}
            >
              comments +
            </button>
            <button
              className="Delete"
              onClick={this.deletePostHandler.bind(null, this.props.post.id)}
            >
              Delete
            </button>
          </div>
          <div className="comments">{comments}</div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;

import React, { Component } from "react";
import axios from "axios";
import "./NewPost.css";

class NewPost extends Component {
  state = {
    post: {
      title: "",
      body: "",
      author: "Max",
    },
    error: null,
    success: null,
  };

  sendPostHandler = () => {
    const post = { ...this.state.post };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((res) => {
        console.log(res);
        this.setState({ success: true });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err, success: false });
      });
  };

  render() {
    let message = null;
    if (this.state.error && this.state.success === false) {
      message = (
        <p style={{ color: "#ff3000", fontWeight: "bold" }}>
          Something went wrong, please check the url/data and try again
        </p>
      );
    } else if (this.state.success) {
      message = (
        <p style={{ color: "#00f000", fontWeight: "bold" }}>
          Post added successfuly!
        </p>
      );
    }

    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        {message}
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>body</label>
        <textarea
          rows="4"
          value={this.state.body}
          onChange={(event) => this.setState({ body: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
          <option value="Victoria">Victoria</option>
        </select>
        <button onClick={this.sendPostHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;

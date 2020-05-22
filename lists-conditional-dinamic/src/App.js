import React, { Component } from "react";
import "./App.css";
import User from "./Users/Users";

class App extends Component {
  state = {
    users: [
      {
        username: "victoria",
        id: "1332af",
        email: "victoria.tewari@gmail.com",
      },
      {
        username: "Carlos_mag",
        id: "1734ag",
        email: "Carlos_mag123@yahoo.com",
      },
      {
        username: "JulianPeixoto",
        id: "1352jf",
        email: "Julian_1Peixoto@outlook.com",
      },
      { username: "Victor144", id: "4332ui", email: "Victor144@gmail.com" },
    ],
    displayUsers: false,
  };

  displayUsersHandler = (event) => {
    this.state.displayUsers
      ? this.setState({ displayUsers: false })
      : this.setState({ displayUsers: true });
    console.log(this.state.displayUsers);
  };

  render() {
    return (
      <div className="App">
        <h1>Working with conditional render and list render!</h1>
        <button onClick={this.displayUsersHandler}>
          {this.state.displayUsers ? "Close Users List" : "Open Users List"}
        </button>
        <div className="users">
          {this.state.displayUsers
            ? this.state.users.map((user) => (
                <User
                  key={user.id}
                  id={user.id}
                  username={user.username}
                  email={user.email}
                />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default App;

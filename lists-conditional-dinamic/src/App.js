import React, { Component } from "react";
import classes from "./App.css";
import { ButtonStyled } from "./AppStyled";
import UserList from "./Components/UserList/UserList";

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
    darkTheme: false,
  };

  shouldComponentUpdate(newProps, newState) {
    console.table(this.state, newState);

    return true;
  }

  displayUsersHandler = (event) => {
    this.state.displayUsers
      ? this.setState({ displayUsers: false })
      : this.setState({ displayUsers: true });
    console.log(this.state.displayUsers);
  };

  deleteUserHandler = (indexUser) => {
    const newUsers = [...this.state.users];
    newUsers.splice(indexUser, 1); //removes and returns the removed item
    this.setState({ users: newUsers });
  };

  changeUserHandler = (index, event) => {
    const users = [...this.state.users];
    users[index].username = event.target.value;
    this.setState({ users: users });
  };

  themeHandler = () => {
    this.setState({ darkTheme: !this.state.darkTheme });
  };

  render() {
    const theme = this.state.darkTheme ? "dark" : "light"; //App theme

    return (
      <div className={`${classes.App} ${classes[theme]}`}>
        <h1 className={`${classes["Header-Title"]} ${classes[theme]}`}>
          Working with conditional render and list render!
        </h1>
        <button onClick={this.themeHandler}>
          Switch to {this.state.darkTheme ? "Light" : "Dark"} Theme
        </button>
        <div className={`${classes["user-list"]} ${classes[theme]}`}>
          <ButtonStyled
            on={this.state.displayUsers}
            onClick={this.displayUsersHandler}
          >
            {this.state.displayUsers ? "Close Users List" : "Open Users List"}
          </ButtonStyled>
          {this.state.displayUsers ? (
            <UserList
              changeUN={this.changeUserHandler}
              click={this.deleteUserHandler}
              class-name={classes.users}
              users={this.state.users}
              theme={theme}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;

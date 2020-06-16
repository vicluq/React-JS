import React, { Component } from "react";
import classes from "./App.css";
import { ButtonStyled } from "./AppStyled";

import Form from "./Components/Form/Form";
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
    //form inputs
    formInputs: {
      name: {
        inputType: "input",
        type: "text",
        config: { required: true, placeholder: "name..." },
        value: "",
      },
      email: {
        inputType: "input",
        type: "email",
        config: { required: true, placeholder: "e-mail..." },
        value: "",
      },
      rg: {
        inputType: "input",
        type: "text",
        config: { required: true, placeholder: "rg..." },
        value: "",
      },
      age: {
        inputType: "input",
        type: "number",
        config: { required: true, placeholder: "age..." },
        value: "",
      },

      job: {
        inputType: "select",
        type: "select",
        config: { required: true },
        options: [
          { value: "teacher", name: "Teacher" },
          { value: "accountant", name: "Accountant" },
          { value: "doctor", name: "Doctor" },
          { value: "lawyer", name: "Lawyer" },
          { value: "police-officer", name: "Police Officer" },
          { value: "computer-engineer", name: "Computer Engineer" },
        ],
        value: "",
      },
    },
  };

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  displayUsersHandler = (event) => {
    this.state.displayUsers
      ? this.setState({ displayUsers: false })
      : this.setState({ displayUsers: true });
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

  inputChangeHandler = (id, event) => {
    const inputs = { ...this.state.formInputs };
    const inputElement = { ...inputs[id] };
    inputElement.value = event.target.value;
    inputs[id] = inputElement;
    this.setState((oldState) => ({ ...oldState, formInputs: { ...inputs } }));
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
        <Form inputs={this.state.formInputs} change={this.inputChangeHandler} />
      </div>
    );
  }
}

export default App;

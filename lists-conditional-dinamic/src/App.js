import React, { Component } from "react";
import lodash from "lodash";
import "./App.css";
import User from "./User/User";
import Radium from "radium";
// import Validation from "./Validation/Validation";
// import CharComponent from "./CharComponent/CharComponent";

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
    const buttonStyle = {
      // Button style
      width: "130px",
      height: "30px",
      backgroundColor: "#0f0",
      color: "#333",
      transition: "all 0.3s",
      border: "none",
      ":hover": {
        backgroundColor: "#090",
        cursor: "pointer",
        border: "2px solid black",
        width: "150px",
      },
    };

    const theme = this.state.darkTheme ? "dark" : "light"; //App theme

    let users = null;
    if (this.state.displayUsers) {
      users = (
        <div className="users">
          {this.state.displayUsers
            ? this.state.users.map((user, index) => (
                <User
                  key={user.id}
                  id={user.id}
                  username={user.username}
                  email={user.email}
                  click={this.deleteUserHandler.bind(this, index)}
                  changeUN={this.changeUserHandler.bind(this, index)}
                  theme={theme}
                />
              ))
            : null}
        </div>
      );
      buttonStyle.backgroundColor = "#f50";
      buttonStyle[":hover"] = {
        backgroundColor: "#c70900",
        cursor: "pointer",
        border: "2px solid black",
        width: "150px",
      };
    } else {
      users = null;
    }

    return (
      <div className={`App ${theme}`}>
        <h1 className={`Header-Title ${theme}`}>
          Working with conditional render and list render!
        </h1>
        <button onClick={this.themeHandler}>
          Switch to {this.state.darkTheme ? "Light" : "Dark"} Theme
        </button>
        <div className={`user-list ${theme}`}>
          <button onClick={this.displayUsersHandler} style={buttonStyle}>
            {this.state.displayUsers ? "Close Users List" : "Open Users List"}
          </button>
          {users}
        </div>
      </div>
    );
  }
}

export default Radium(App);
// class App extends Component {
//   state = {
//     word: "null",
//     wordlength: 4,
//   };

//   changeTextHandler = (event) => {
//     this.setState({
//       word: event.target.value,
//       wordlength: event.target.value.length,
//     });
//   };

//   deleteLetterHandler = (index) => {
//     //O índex vai dizer quem deve sair, pois cada div Char vai enviar um index
//     const word = [...this.state.word];
//     word.splice(index, 1);
//     this.setState({ word: word.join(""), wordlength: word.length });
//   };

//   render() {
//     const charComps = (
//       <div>
//         {this.state.word.split("").map((char, index) => {
//           return (
//             <CharComponent
//               key={`${char}${lodash.random(1, 1000000, false)}`}
//               char={char}
//               click={this.deleteLetterHandler.bind(this, index)}
//             />
//           );
//         })}
//       </div>
//     );

//     return (
//       <div className="App">
//         <h1>PLAYING WITH WORDS!</h1>
//         <div className="textLengthInput">
//           <label htmlFor="textLength">Text Length</label>
//           <input id="textLength" disabled value={this.state.wordlength} />
//         </div>
//         <p>{this.state.word}</p>
//         <div className="textRealated">
//           <label htmlFor="textLength">Write something else</label>
//           <input onChange={this.changeTextHandler} id="textLength" />
//         </div>
//         <Validation wordLength={this.state.wordlength} />
//         {charComps}
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import "./App.css";

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import ytdl from "ytdl-core";
import fs from "fs";

class App extends Component {
  state = {
    test: "react é massa",
    username: "Victoria Luquet",
  };

  downYT = () => {
    const myDown = ytdl("https://www.youtube.com/watch?v=SC7lsvWq3ng", {
      format: "mp4",
      quality: "highest",
      filter: "audioandvideo",
    });

    let filename = null;

    myDown.on("info", (info) => {
      filename = info.playerResponse.videoDetails.title.replace(
        /[^a-z0-9\-]/gi,
        "_"
      );
      myDown.pipe(fs.createWriteStream(`${filename}.mp4`));
    });

    myDown.on("progress", (chunk, downloaded, total) => {
      console.log(`${Math.floor(downloaded / total)}%`);
    });
  };

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
    console.log(this.state, this.props);
  };
  // {..state, ...newState} --> class comp does that. with hooks you have to do it manually
  render() {
    return (
      <div className="App">
        <h1 className="main-title">User Posts</h1>
        <UserInput
          changeUsername={this.changeUsernameHandler}
          username={this.state.username}
        />
        <div className="posts">
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
        </div>
        <button onClick={this.downYT}>DOWNLOAD</button>
      </div>
    );
  }
}

export default App;

// Here I will import all the main components and those will import other components
// that they use, as well

/* -------- Previous classes ------------ */
// import Car from "./Car/Car";
// import Counter from "./Counter/Counter";

// class App extends Component {
//   //nao tem para que usar props muito, a não ser que eu queira passar algo no ReactDOM.render
//   constructor() {
//     super();
//     this.Buttonstyle = {
//       padding: "5px",
//       backgroundColor: "skyblue",
//       border: "none",
//       cursor: "pointer",
//     };
//   }
//   state = {
//     cars: [
//       { name: "Honda Civic", brand: "Honda", fabYear: "2013" },
//       { name: "Honda Fit", brand: "Honda", fabYear: "2014" },
//       { name: "Sienna", brand: "Fiat", fabYear: "2012" },
//     ],
//     state2:
//       "this won´t change/be substituted if i call setState, only if i was using hooks -> useState",
//     counter: 0,
//   };

//   counter() {
//     //this here refers to global and not to the Class because it is a normal function
//     this.setState((previousState) => {
//       return { ...previousState, counter: previousState.counter + 1 };
//     });
//   }

//   inputHandler = (event) => {
//     this.setState({
//       cars: [
//         { name: event.target.value, brand: "Honda", fabYear: "2013" },
//         { name: "Fit", brand: "Honda", fabYear: "2014" },
//         { name: "Sienna", brand: "Fiat", fabYear: "2012" },
//       ],
//     });
//   };

//   changeHandler = (...params) => {
//     this.setState({
//       cars: [
//         { name: "Honda Civic", brand: "Honda", fabYear: params[0] },
//         { name: "Honda Fit", brand: "Honda", fabYear: params[1] },
//         { name: "Sienna", brand: "Fiat", fabYear: params[2] },
//       ],
//     });
//     console.log(this.state);
//   };

//   render() {
//     // const Buttonstyle = {
//     //   padding: "5px",
//     //   backgroundColor: "skyblue",
//     //   border: "none",
//     //   cursor: "pointer",
//     // };

//     return (
//       <div className="App">
//         <h1>
//           This is my first <mark>React Js</mark> App
//         </h1>
//         <Car
//           name={this.state.cars[0].name}
//           brand={this.state.cars[0].brand}
//           fabYear={this.state.cars[0].fabYear}
//           input={this.inputHandler}
//         >
//           {/* <p>Esse carro é o melhor</p> */}
//           {/* se no componente Car eu não mandar exibir props.children, se um tiver ele não exibe */}
//         </Car>
//         <Car
//           name={this.state.cars[1].name}
//           brand={this.state.cars[1].brand}
//           fabYear={this.state.cars[1].fabYear}
//           click={this.changeHandler.bind(this, 2020, 2017, 2019)}
//         />
//         <Car
//           name={this.state.cars[2].name}
//           brand={this.state.cars[2].brand}
//           fabYear={this.state.cars[2].fabYear}
//         />
//         <button
//           style={this.Buttonstyle}
//           onClick={this.changeHandler.bind(null, 2020, 2017, 2019)}
//         >
//           Change Year
//         </button>

//         <Counter
//           value={this.state.counter}
//           click={this.counter.bind(this, null)}
//         />
//       </div>
//     );
//   }
// }

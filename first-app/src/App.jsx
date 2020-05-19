import React, { Component } from "react";
import "./App.css"; //import App content. webpack will access this because i've imported the App on my index.js (entry)
import Car from "./Car/Car";

class App extends Component {
  //App is a big component with lots of other components inside, so at the ed, React will render a huge component
  render() {
    return (
      <div className="App">
        <h1>
          This is my first <mark>React Js</mark> App
        </h1>
        <Car />
        <Car />
        <Car />
      </div>
    );
  }
}

export default App;

// Here I will import all the main components and those will import other components
// that they use, as well

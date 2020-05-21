import React, { Component } from "react";
import lodash from "lodash";

import "./App.css"; //import App content. webpack will access this because i've imported the App on my index.js (entry)
import Car from "./Car/Car";

class App extends Component {
  //nao tem para que usar props muito, a não ser que eu queira passar algo no ReactDOM.render

  state = {
    cars: [
      { name: "Honda Civic", brand: "Honda", fabYear: "2013" },
      { name: "Honda Fit", brand: "Honda", fabYear: "2014" },
      { name: "Sienna", brand: "Fiat", fabYear: "2012" },
    ],
    state2:
      "this won´t change/be substituted if i call setState, only if i was using hooks -> useState",
    counter: 0,
  };

  counter() {
    this.setState({ counter: ++this.state.counter });
  }

  changeHandler = (...params) => {
    this.setState({
      cars: [
        { name: "Honda Civic", brand: "Honda", fabYear: params[0] },
        { name: "Honda Fit", brand: "Honda", fabYear: params[1] },
        { name: "Sienna", brand: "Fiat", fabYear: params[2] },
      ],
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1>
          This is my first <mark>React Js</mark> App
        </h1>
        <Car
          name={this.state.cars[0].name}
          brand={this.state.cars[0].brand}
          fabYear={this.state.cars[0].fabYear}
        >
          <p>Esse carro é o melhor</p>
          {/* se no componente Car eu não mandar exibir props.children, se um tiver ele não exibe */}
        </Car>
        <Car
          name={this.state.cars[1].name}
          brand={this.state.cars[1].brand}
          fabYear={this.state.cars[1].fabYear}
          click={this.changeHandler}
        />
        <Car
          name={this.state.cars[2].name}
          brand={this.state.cars[2].brand}
          fabYear={this.state.cars[2].fabYear}
        />

        <button onClick={this.changeHandler.bind(null, 2020, 2017, 2019)}>
          Some Event
        </button>
      </div>
    );
  }
}

export default App;

// Here I will import all the main components and those will import other components
// that they use, as well

//FetchData => export data to other file and build component giving to the state the data

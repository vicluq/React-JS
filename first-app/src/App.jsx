import React, { Component } from "react";
import "./App.css"; //import App content. webpack will access this because i've imported the App on my index.js (entry)
import lodash from "lodash";
import Car from "./Car/Car";
//App is a big component with lots of other components inside, so at the end, React will render a huge component

class App extends Component {
  state = {
    cars: [
      { name: "Honda Civic", brand: "Honda", fabYear: "2013" },
      { name: "Honda Fit", brand: "Honda", fabYear: "2014" },
      { name: "Sienna", brand: "Fiat", fabYear: "2012" },
    ],
  };

  changeHandler = (event) => {
    this.setState({ cars: lodash.shuffle(this.state.cars) });
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
        />
        <Car
          name={this.state.cars[2].name}
          brand={this.state.cars[2].brand}
          fabYear={this.state.cars[2].fabYear}
        />

        <button onClick={this.changeHandler}>Some Event</button>
      </div>
    );
  }
}

export default App;

// Here I will import all the main components and those will import other components
// that they use, as well

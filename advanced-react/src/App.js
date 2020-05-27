import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Display from "./components/Display/Display";

const App = (props) => {
  const [state, setCounter] = useState({
    counter: 0,
    counter2: 0,
    display: false,
  });

  useEffect(() => {
    console.log(
      " Só serei executado caso counter1 mude e na primeira vez ",
      state.counter,
      state.counter2
    );
  }, [state.counter]);

  const counterIncrementHandler = (ev) => {
    setCounter((prevState) => ({
      ...prevState,
      counter: prevState.counter + 1,
    }));
  };

  const counter2IncrementHandler = (ev) => {
    setCounter((prevState) => ({
      ...prevState,
      counter2: prevState.counter2 + 1,
    }));
  };

  const displayHandler = (ev) => {
    setCounter((prevState) => ({
      ...prevState,
      display: !prevState.display,
    }));
  };

  let users = null;

  if (state.display) {
    users = <Display counter={state.counter2} />;
  }

  return (
    <div className="App">
      <header>
        <h1>Advanced Component Knowledge</h1>
      </header>
      <p>counter1: {state.counter}</p>
      <button onClick={counterIncrementHandler}> + </button>
      <p>counter2: {state.counter2}</p>
      <button onClick={counter2IncrementHandler}> + </button>
      <br />
      <br />
      <button onClick={displayHandler}>
        Display: {state.display ? "ON" : "OFF"}
      </button>
      {users}
    </div>
  );
};

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <h1>Advanced Component Knowledge</h1>
//         </header>

//       </div>
//     );
//   }
// }

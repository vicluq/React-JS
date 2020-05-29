import React, { useEffect, useState, Fragment, useRef } from "react";
import "./App.css";
import Display from "./components/Display/Display";
import Style from "./components/HOC/Style";

const App = (props) => {
  const [state, setCounter] = useState({
    counter: 0,
    counter2: 0,
    display: false,
  });

  let displayButton = null;
  const increaseBut = useRef();

  useEffect(() => {
    displayButton.click();
    increaseBut.current.click();
  }, []);

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
    <Fragment>
      <header>
        <h1>{props.title}</h1>
      </header>
      <p>counter1: {state.counter}</p>
      <button ref={increaseBut} onClick={counterIncrementHandler}>
        +
      </button>
      <p>counter2: {state.counter2}</p>
      <button onClick={counter2IncrementHandler}> + </button>
      <br />
      <br />
      <button
        ref={(displayBut) => {
          displayButton = displayBut;
        }}
        onClick={displayHandler}
      >
        Display: {state.display ? "ON" : "OFF"}
      </button>
      {users}
    </Fragment>
  );
};

const styleObj = {
  textAlign: "center",
};

export default Style(App, styleObj);
// React passará o mesmo nome pois ele sabe quem pegamos no HOC

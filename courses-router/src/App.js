import React from "react";
import { BrowserRouter } from "react-router-dom";
import Website from "./Containers/Website/Website";

import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">{props.isActive ? <Website /> : null}</div>
    </BrowserRouter>
  );
}

export default App;

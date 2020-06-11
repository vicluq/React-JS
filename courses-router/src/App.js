import React from "react";
import { BrowserRouter } from "react-router-dom";
import Website from "./Containers/Website/Website";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Website />
      </div>
    </BrowserRouter>
  );
}

export default App;

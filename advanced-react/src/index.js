import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App title="Advanced React Components" />,
  document.getElementById("root")
);
registerServiceWorker();

import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import UserContext from "../../services/user-auth";

import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import UseState from "../useState/UseState";
import UseEffect from "../UseEffect/UseEffect";
import UseContext from "../UseContext/UseContext";

function App() {
  const [userAuth, setUserAuth] = useState({
    username: "vicluq",
    userId: "29112001",
  });

  const setNewNameHandler = (e) => {
    const newName = e.target.value;
    setUserAuth((old) => ({ ...old, username: newName }));
  };
  return (
    <UserContext.Provider
      value={{ userData: userAuth, setUserData: setNewNameHandler }}
    >
      <div className="App">
        <Header />
        <main className="App-Main">
          <Switch>
            <Route path="/usecontext" component={UseContext} />
            <Route path="/useeffect" component={UseEffect} />
            <Route path="/usestate" component={UseState} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;

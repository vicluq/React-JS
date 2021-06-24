import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import Store from "./services/store/index";
// import { ProductProvider } from "./services/context/products";

import ProductList from "./containers/ProductList/ProductList";
import Favorited from "./containers/Favorited/Favorited";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <ProductList />
        <Favorited />
      </div>
    </Provider>
  );
}

export default App;

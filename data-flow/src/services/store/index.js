import { createStore, combineReducers } from "redux";
import storeReducer from "./shop-reducer";

const store = createStore(
  combineReducers({
    shop: storeReducer,
  })
);

export default store;

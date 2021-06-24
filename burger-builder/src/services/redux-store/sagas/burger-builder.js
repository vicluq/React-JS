import storeOrder from "../../store-order";
import { put } from "redux-saga/effects";
import {} from "../actions/burger-builder";

export function* SET_PRICES(action) {
  try {
    const response = yield storeOrder.get("/ingredientsPrices.json");
    const ingrPrices = {
      bacon: response.data.bacon,
      cheese: response.data.cheese,
      meat: response.data.meat,
      salad: response.data.salad,
    };
    yield put({
      type: "SET_PRICES",
      prices: ingrPrices,
      basePrice: 3.25,
    });
  } catch (err) {
    console.log(err);
  }
}

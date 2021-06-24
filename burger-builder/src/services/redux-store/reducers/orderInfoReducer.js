import * as actions from "../actions/burger-builder";

const INITIAL_STATE = {
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  },
  prices: {},
  totalPrice: 3.25,
  orderInProgress: false,
};

function reducer(store = INITIAL_STATE, action) {
  if (action.type === actions.SET_INGREDIENTS) {
    const ingr = { ...store.ingredients };
    ingr[action.ingrType] = store.ingredients[action.ingrType] + 1;
    return {
      ...store,
      ingredients: ingr,
      totalPrice: store.totalPrice + store.prices[action.ingrType],
    };
  }

  if (action.type === actions.REMOVE_INGREDIENTS) {
    const ingr = { ...store.ingredients };
    ingr[action.ingrType] = store.ingredients[action.ingrType] - 1;

    return {
      ...store,
      ingredients: ingr,
      totalPrice: store.totalPrice - store.prices[action.ingrType],
    };
  }

  if (action.type === "SET_PRICES") {
    return {
      ...store,
      prices: action.prices,
      totalPrice: action.basePrice,
      orderInProgress: false,
    };
  }
  if (action.type === "RESET_BURGER") {
    return {
      ...INITIAL_STATE,
    };
  }
  if (action.type === "SIGNUP_ORDER_PROGRESS") {
    return {
      ...store,
      orderInProgress: true,
    };
  }

  return store;
}

export default reducer;

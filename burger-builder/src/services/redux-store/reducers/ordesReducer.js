const INITIAL_STATE = {
  orders: [],
  loading: false,
  error: false,
};

const reducer = (store = INITIAL_STATE, action) => {
  if (action.type === "GET_ORDERS") {
    return {
      ...store,
      orders: [...action.orderList],
      loading: action.loading,
      error: action.error,
    };
  }

  if (action.type === "DELIVER") {
    return {
      ...store,
      orders: store.orders.filter((order) => order.id !== action.id),
    };
  }

  if (action.type === "SET_LOADING") {
    return {
      ...store,
      loading: action.loading,
    };
  }
  return store;
};

export default reducer;

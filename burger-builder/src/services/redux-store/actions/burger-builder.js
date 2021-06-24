export const SET_INGREDIENTS = "SET_INGREDIENTS";

export const REMOVE_INGREDIENTS = "REMOVE_INGREDIENTS";

export const SET_PRICES = function () {
  return { type: "START_SET_PRICE" };
};

export const RESET_BURGER = function () {
  return function (dispatch) {
    dispatch({ type: "RESET_BURGER" });
    dispatch(SET_PRICES());
  };
};

export const SIGNUP_ORDER_PROGRESS = function () {
  return {
    type: "SIGNUP_ORDER_PROGRESS",
  };
};

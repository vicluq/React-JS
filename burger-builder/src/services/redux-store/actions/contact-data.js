import storeOrder from "../../store-order";
import { RESET_BURGER } from "./burger-builder";

export const GET_CONTACT_NAME = "GET_CONTACT_NAME";
export const GET_CONTACT_EMAIL = "GET_CONTACT_EMAIL";
export const GET_CONTACT_STREET = "GET_CONTACT_STREET";
export const GET_CONTACT_POSTAL = "GET_CONTACT_POSTAL";
export const GET_CONTACT_NUM = "GET_CONTACT_NUM";
export const GET_CONTACT_DELIVERY_OPT = "GET_CONTACT_DELIVERY_OPT";

export const ORDER_ONGOING = function (bool, modal) {
  return {
    type: "ORDER_ONGOING",
    value: bool,
    modal: modal,
  };
};

export const ORDER_STATUS = function (bool, modal) {
  return {
    type: "ORDER_STATUS",
    status: bool,
    modal: modal,
  };
};

export const RESET_STATE = function () {
  return {
    type: "RESET_STATE",
  };
};

export const MAKE_ORDER = function (order, history, token) {
  return function (dispatch) {
    dispatch(ORDER_ONGOING(true, false));
    storeOrder
      .post(`/orders.json?auth=${token}`, order)
      .then((res) => {
        dispatch(ORDER_ONGOING(false, true));
        dispatch(ORDER_STATUS(true));
        setTimeout(() => {
          history.replace("/burger-builder");
          dispatch(RESET_STATE());
          dispatch(RESET_BURGER());
        }, 2600);
      })
      .catch((err) => {
        dispatch(ORDER_ONGOING(false, true));
        dispatch(ORDER_STATUS(false));
        setTimeout(() => {
          history.replace("/burger-builder");
        }, 2600);
      });
  };
};

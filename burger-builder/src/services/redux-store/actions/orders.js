import storeOrder from "../../store-order";

export const GET_ORDERS = function (token, userId) {
  return function (dispatch) {
    storeOrder
      .get(`/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then(({ data }) => {
        const orders = data ? data : [];
        dispatch({
          type: "GET_ORDERS",
          orderList: addIdToOrder(orders, userId),
          loading: false,
          error: false,
        });
      })
      .catch((err) => {
        if (err) {
          dispatch({
            type: "GET_ORDERS",
            orderList: [],
            loading: false,
            error: true,
          });
        }
      });
  };
};

export const DELIVER = function (id, token) {
  return function (dispatch, getState) {
    storeOrder
      .delete(`/orders/${id}.json?auth=${token}`)
      .then((res) => {
        dispatch({ type: "DELIVER", id: "id" });
        dispatch(GET_ORDERS(getState().authRed.user.token));
      })
      .catch((err) => {});
  };
};

export const SET_LOADING = function (payloads) {
  return {
    type: "SET_LOADING",
    ...payloads,
  };
};

function addIdToOrder(orders, userId) {
  const ordersEntries = Object.entries(orders); // [ [id], [order] ]
  return ordersEntries.map((order) => ({ ...order[1], orderId: order[0] }));
}

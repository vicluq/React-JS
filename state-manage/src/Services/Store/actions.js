import axios from "axios";

// ACTIONS => FUNCTIONS THAT CREATE ACTION
export const plusOneCounter = function (payloads) {
  // ASYNC func => thunk handles
  return async function (dispatch) {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const { data } = await request;
    dispatch({ type: "PLUS_ONE_COUNT", data: data, ...payloads });
  };
};

export const minusOneCounter = function (payloads) {
  return {
    type: "MINUS_ONE_COUNT",
    ...payloads,
  };
};

export const addition = function (payloads) {
  return {
    type: "ADDITION",
    ...payloads,
  };
};

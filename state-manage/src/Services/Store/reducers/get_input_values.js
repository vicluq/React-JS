const INITIAL_STATE = {
  sub_value: 0,
  add_value: 0,
};

const get_input_reducer = (store = INITIAL_STATE, action) => {
  if (action.type === "GET_ADD_VALUE") {
    return {
      ...store,
      add_value: action.value,
    };
  }
  if (action.type === "GET_SUB_VALUE") {
    return {
      ...store,
      sub_value: action.value,
    };
  }
  return store; //if any actions are matched, return the store as default
};

export default get_input_reducer;

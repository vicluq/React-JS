const INIT_STATE = {
  counter: 0,
  sub_value: 0,
  add_value: 0,
  user: "",
};

// TODO timer with redux -> each second an action is dispatched to get a new Date and time

// Store === our state
// action === the dispatched action received by the reducer

const root_reducer = (store = INIT_STATE, action) => {
  if (action.type === "PLUS_ONE_COUNT") {
    return {
      ...store,
      counter: store.counter + 1,
    };
  }
  if (action.type === "MINUS_ONE_COUNT") {
    return {
      ...store,
      counter: store.counter === 0 ? store.counter : store.counter - 1,
    };
  }
  if (action.type === "ADDITION") {
    return {
      ...store,
      counter: store.counter + Number.parseInt(store.add_value),
    };
  }
  if (action.type === "SUBTRACT") {
    return {
      ...store,
      counter:
        store.counter - Number.parseInt(store.sub_value) < 0
          ? store.counter
          : store.counter - Number.parseInt(store.sub_value),
    };
  }
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
  if (action.type === "SET_USERNAME") {
    return {
      ...store,
      user: action.username,
    };
  }

  return store; //if any actions are matched, return the store as default
};

export default root_reducer;

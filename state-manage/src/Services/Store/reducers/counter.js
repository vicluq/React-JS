//  timer with reduce --> dispatches action every 1s, calls set  new Date in store var.
//  Creating filters => Action 'FILTER_POST_BY_ID' receives a payload with post id and filters, storing inside the filtered posts var!
// basically what a selector does, but selectors depend on the posts atom and on the filter atom to be set

const INITIAL_STATE = {
  counter: 0,
  counter_log: [],
  change_log: [],
  display_log: false,
  user: "",
  posts: [],
};

function updateStoreObj(store, newValues) {
  return {
    ...store,
    ...newValues,
  };
}

const counter_reducer = (store = INITIAL_STATE, action) => {
  if (action.type === "PLUS_ONE_COUNT") {
    const newValue = store.counter + 1;
    return updateStoreObj(store, {
      counter: newValue,
      counter_log: [...store.counter_log, newValue],
      change_log: [...store.change_log, 1],
      posts: Object.values(action.data),
    });
  }
  if (action.type === "MINUS_ONE_COUNT") {
    const newValue = store.counter === 0 ? store.counter : store.counter - 1;
    return {
      ...store,
      counter: newValue,
      counter_log: [...store.counter_log, newValue],
      change_log: [...store.change_log, -1],
    };
  }
  if (action.type === "ADDITION") {
    const newValue = store.counter + Number.parseInt(action.value);
    return {
      ...store,
      counter: newValue,
      counter_log: [...store.counter_log, newValue],
      change_log: [...store.change_log, Number.parseInt(action.value)],
    };
  }
  if (action.type === "SUBTRACT") {
    if (store.counter - Number.parseInt(action.value) < 0) {
      return store;
    } else {
      const newValue = store.counter - Number.parseInt(action.value);
      return {
        ...store,
        counter: newValue,
        counter_log: [...store.counter_log, newValue],
        change_log: [...store.change_log, -Number.parseInt(action.value)],
      };
    }
  }

  if (action.type === "DISPLAY_LOG") {
    return updateStoreObj(store, { display_log: !store.display_log });
  }

  if (action.type === "REMOVE_LOG_ITEM") {
    const newValue = store.counter - store.change_log[action.index];

    const newLog = [...store.counter_log];
    newLog.splice(action.index, 1);

    const newChangeLog = [...store.change_log];
    newChangeLog.splice(action.index, 1);

    return updateStoreObj(store, {
      counter: newValue,
      counter_log: newLog,
      change_log: newChangeLog,
    });
  }
  if (action.type === "CLEAR_LOG") {
    return updateStoreObj(store, {
      counter: 0,
      counter_log: [],
      change_log: [],
    });
  }
  if (action.type === "SET_USERNAME") {
    return updateStoreObj(store, { user: action.username });
  }

  return store; //if any actions are matched, return the store as default
};

export default counter_reducer;

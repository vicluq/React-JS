const INITIAL_STATE = {
  auth: false,
  user: {},
  error: {
    signup: "",
    login: "",
  },
  loading: false,
  success: {
    signup: null,
    login: null,
  },
  timeout: false,
};

function reducer(store = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_LOADING_SUCCESS":
      return {
        ...store,
        loading: action.loading,
        success: {
          ...store.success,
          [action.op]: action.success,
        },
        timeout: false,
      };
    case "AUTH_USER":
      return {
        ...store,
        auth: action.auth,
        user: action.user,
        timeout: false,
      };
    case "ERROR_AUTH":
      return {
        ...store,
        error: {
          ...store.error,
          [action.op]: action.err,
        },
      };
    case "LOGOUT_USER":
      return {
        ...INITIAL_STATE,
        timeout: action.timeout,
      };
    default:
      return store;
  }
}

export default reducer;

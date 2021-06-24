import axios from "axios";

export function CLEAR_ALL_AUTH() {
  return {
    type: "CLEAR_ALL_AUTH",
  };
}

export function SET_LOADING_SUCCESS(loadingBool, successBool, operation) {
  return {
    type: "SET_LOADING_SUCCESS",
    loading: loadingBool,
    success: successBool,
    op: operation,
  };
}

export function ERROR_AUTH(err, operation) {
  return {
    type: "ERROR_AUTH",
    err: err,
    op: operation,
  };
}

export function INITIATE_LOGOUT_USER(bool) {
  // return function (dispatch) {
  //   window.localStorage.removeItem("tokenId");
  //   window.localStorage.removeItem("expDate");
  //   dispatch({ type: "LOGOUT_USER", timeout: bool });
  // };
  return { type: "INITIATE_LOGOUT_USER", timeout: bool };
}

export function waitTimeOut(timeout) {
  // return function (dispatch) {
  //   setTimeout(() => {
  //     dispatch(INITIATE_LOGOUT_USER(true));
  //   }, timeout * 1000);
  // };
  return {
    type: "WAIT_TIMEOUT",
    timeout: timeout * 1000,
  };
}

export const authSignup = function ({ email, password }) {
  return { type: "AUTH_SIGNUP", email: email, password: password };

  // function (dispatch) {
  //   dispatch(SET_LOADING_SUCCESS(true, null));

  //   axios
  //     .post(
  //       "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXPa07sXMThbV4VG1NJbACv8zt6Iwtl-k",
  //       { email: email, password: password, returnSecureToken: true }
  //     )
  //     .then((res) => {
  //       dispatch(SET_LOADING_SUCCESS(false, true, "signup"));
  //     })
  //     .catch((err) => {
  //       dispatch(SET_LOADING_SUCCESS(false, false, "signup"));
  //       dispatch(ERROR_AUTH(err.response.data.error.message, "signup"));
  //     });
  // };
};

export const loginUser = function (data) {
  return { type: "START_LOGIN", data: data };

  // function (dispatch) {
  //   dispatch(SET_LOADING_SUCCESS(true, null));

  //   axios
  //     .post(
  //       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXPa07sXMThbV4VG1NJbACv8zt6Iwtl-k",
  //       {
  //         email: data.email,
  //         password: data.password,
  //         returnSecureToken: true,
  //       }
  //     )
  //     .then(({ data }) => {
  //       dispatch(SET_LOADING_SUCCESS(false, true, "login"));
  //       dispatch({
  //         type: "AUTH_USER",
  //         auth: true,
  //         user: {
  //           email: data.email,
  //           token: data.idToken,
  //           userID: data.localId,
  //         },
  //       });
  //       const expDate = new Date(new Date().getTime() + data.expiresIn * 1000);
  //       window.localStorage.setItem("tokenId", JSON.stringify(data.idToken));
  //       window.localStorage.setItem("expDate", JSON.stringify(expDate));
  //       dispatch(waitTimeOut(Number(data.expiresIn)));
  //     })
  //     .catch((err) => {
  //       dispatch(SET_LOADING_SUCCESS(false, false, "login"));
  //       dispatch(ERROR_AUTH(err.response.data.error.message, "login"));
  //     });
  // };
};

export function checkStorageInfo() {
  return function (dispatch) {
    const tokenId = JSON.parse(window.localStorage.getItem("tokenId"));
    const expTime = JSON.parse(window.localStorage.getItem("expDate"));
    if (tokenId && new Date(expTime).getTime() > new Date().getTime()) {
      dispatch(FETCH_USER_DATA(tokenId));
      dispatch(
        waitTimeOut((new Date(expTime).getTime() - new Date().getTime()) / 1000)
      );
    } else {
      dispatch(INITIATE_LOGOUT_USER(false));
    }
  };
}

function FETCH_USER_DATA(token) {
  return function (dispatch) {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCXPa07sXMThbV4VG1NJbACv8zt6Iwtl-k",
        { idToken: token }
      )
      .then(({ data }) => {
        dispatch({
          type: "AUTH_USER",
          auth: true,
          user: {
            email: data.users[0].email,
            token: token,
            userID: data.users[0].localId,
          },
        });
      })
      .catch((err) => {
        dispatch(ERROR_AUTH("Trouble with auto Login", "login"));
      });
  };
}

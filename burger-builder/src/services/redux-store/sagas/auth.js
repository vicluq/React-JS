import { put } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
import {
  INITIATE_LOGOUT_USER,
  SET_LOADING_SUCCESS,
  ERROR_AUTH,
  waitTimeOut,
} from "../actions/auth";
import axios from "axios";

export function* LOGOUT_USER_SAGA(action) {
  console.log(action);
  yield window.localStorage.removeItem("tokenId");
  yield window.localStorage.removeItem("expDate");
  yield put({ type: "LOGOUT_USER", timeout: action.timeout });
}

export function* LOGOUT_TIMEOUT_SAGA(action) {
  yield delay(action.timeout);
  yield put(INITIATE_LOGOUT_USER(true));
}

export function* SIGN_UP_USER_SAGA(action) {
  yield put(SET_LOADING_SUCCESS(true, null));

  try {
    const response = yield axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXPa07sXMThbV4VG1NJbACv8zt6Iwtl-k",
      {
        email: action.email,
        password: action.password,
        returnSecureToken: true,
      }
    );
    yield put(SET_LOADING_SUCCESS(false, true, "signup"));
  } catch (err) {
    yield put(SET_LOADING_SUCCESS(false, false, "signup"));
    yield put(ERROR_AUTH(err.response.data.error.message, "signup"));
  }
}

export function* LOGIN_USER_SAGA(action) {
  yield put(SET_LOADING_SUCCESS(true, null));

  try {
    const resp = yield axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXPa07sXMThbV4VG1NJbACv8zt6Iwtl-k",
      {
        email: action.data.email,
        password: action.data.password,
        returnSecureToken: true,
      }
    );
    yield put(SET_LOADING_SUCCESS(false, true, "login"));
    yield put({
      type: "AUTH_USER",
      auth: true,
      user: {
        email: resp.data.email,
        token: resp.data.idToken,
        userID: resp.data.localId,
      },
    });
    const expDate = new Date(new Date().getTime() + resp.data.expiresIn * 1000);
    yield window.localStorage.setItem(
      "tokenId",
      JSON.stringify(resp.data.idToken)
    );
    yield window.localStorage.setItem("expDate", JSON.stringify(expDate));
    yield put(waitTimeOut(Number(resp.data.expiresIn)));
  } catch (err) {
    yield put(SET_LOADING_SUCCESS(false, false, "login"));
    yield put(ERROR_AUTH(err.response.data.error.message, "login"));
  }
}

//   return function (dispatch) {
//     window.localStorage.removeItem("tokenId");
//     window.localStorage.removeItem("expDate");
//     dispatch({ type: "LOGOUT_USER", timeout: bool });
//   };

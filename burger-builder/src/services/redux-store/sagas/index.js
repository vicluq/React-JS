import { takeEvery } from "redux-saga/effects";
import {
  LOGIN_USER_SAGA,
  SIGN_UP_USER_SAGA,
  LOGOUT_TIMEOUT_SAGA,
  LOGOUT_USER_SAGA,
} from "./auth";
import { SET_PRICES } from "./burger-builder";

export default function* () {
  yield takeEvery("INITIATE_LOGOUT_USER", LOGOUT_USER_SAGA);
  yield takeEvery("WAIT_TIMEOUT", LOGOUT_TIMEOUT_SAGA);
  yield takeEvery("AUTH_SIGNUP", SIGN_UP_USER_SAGA);
  yield takeEvery("START_LOGIN", LOGIN_USER_SAGA);
  yield takeEvery("START_SET_PRICE", SET_PRICES);
}

import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { AuthenSaga } from "./AuthenSaga";

function* rootSaga() {
  yield all([AuthenSaga()]);
}
export default rootSaga
import { call, put, takeLatest } from "@redux-saga/core/effects";
import request from "../../connect/AxiosConfig";
import { URL } from "../../constant/UrlConstant";

function* fetchUser(action) {
  try {
    yield console.log({action})
    const res = yield call(request.post, URL.LOGIN, {
      email: action.payload.email,
      password: action.payload.password,
    });
    yield console.log(res.headers)
    yield localStorage.setItem("TOKEN",res.headers["X-LONGPC-ACCESS-TOKEN".toLowerCase()])
    yield put({ type: "LOGIN_SUCCESS", payload: res });
  } catch (e) {
    console.log(e);
  } finally {
  }
}
export function* AuthenSaga() {
  yield takeLatest("LOGIN", fetchUser);
}

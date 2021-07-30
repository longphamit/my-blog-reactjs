import UserReducer from "./UserReducer"
import { combineReducers } from "redux";
const appReducer = combineReducers({
    UserReducer,
  });
  export default appReducer;
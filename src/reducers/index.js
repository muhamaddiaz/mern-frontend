import { combineReducers } from "redux";

import userReducer from "./userReducer";
import postReducer from "./postReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  user: userReducer,
  posts: postReducer,
  error: errorReducer
});

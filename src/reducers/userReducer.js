import { USER_ACTION } from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case USER_ACTION.AUTH:
      return action.payload;
    case USER_ACTION.CREATE:
      return action.payload;
    case USER_ACTION.DELETE:
      return {};
    default:
      return state;
  }
};

import { ERROR_HANDLER } from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case ERROR_HANDLER.ADD:
      return action.payload;
    case ERROR_HANDLER.REMOVE:
      return {};
    default:
      return state;
  }
};

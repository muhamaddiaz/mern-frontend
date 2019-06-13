import { POST_ACTION } from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case POST_ACTION.FETCH:
      return action.payload;
    case POST_ACTION.CREATE:
      return [...state, action.payload];
    case POST_ACTION.DELETE:
      return state.filter(val => val !== action.payload.id);
    default:
      return state;
  }
};

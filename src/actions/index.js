import { POST_ACTION, USER_ACTION } from "./actionTypes";

export const authUser = form => {};

export const registerUser = form => {
  return {
    type: USER_ACTION.CREATE,
    payload: {
      name: form.name,
      password: form.password,
      email: form.email
    }
  };
};

export const logoutUser = () => {
  return {
    type: USER_ACTION.DELETE
  };
};

export const createPost = form => {
  return {
    type: POST_ACTION.CREATE,
    payload: {
      title: form.title,
      body: form.body
    }
  };
};

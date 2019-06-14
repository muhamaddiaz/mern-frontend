import myserver from "../apis/myserver";

import { POST_ACTION, USER_ACTION, ERROR_HANDLER } from "./actionTypes";

export const registerUser = form => async dispatch => {
  try {
    const { data, status } = await myserver.post("/users", {
      name: form.name,
      email: form.email,
      password: form.password
    });

    if (status !== 200) {
      const err = new Error("Register gagal!");
      err.errorCode = status;
      err.message = "Register gagal!";
      throw err;
    }

    localStorage.setItem("token", data.payload.token);
    dispatch({
      type: USER_ACTION.AUTH,
      payload: {
        ...data.payload
      }
    });
  } catch (error) {
    dispatch({
      type: ERROR_HANDLER.ADD,
      payload: {
        error
      }
    });
  }
};

export const loginUser = form => async dispatch => {
  try {
    const { data, status } = await myserver.post("/users/auth/login", {
      email: form.email,
      password: form.password
    });

    if (status !== 200) {
      const err = new Error("Login gagal!");
      err.errorCode = status;
      err.message = "Login gagal!";
      throw err;
    }

    localStorage.setItem("token", data.payload.token);
    dispatch({
      type: USER_ACTION.AUTH,
      payload: {
        ...data.payload
      }
    });
  } catch (error) {
    dispatch({
      type: ERROR_HANDLER.ADD,
      payload: {
        error
      }
    });
  }
};

export const clearError = () => {
  return {
    type: ERROR_HANDLER.REMOVE
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

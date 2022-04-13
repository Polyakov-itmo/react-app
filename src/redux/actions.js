import { HIDEERR, LOADPOSTS, LOGIN, LOGOUT, SHOWERR } from "./types";

export function Authorization(login) {
  return {
    type: LOGIN,
    payload: login,
  };
}

export function logOff() {
  return {
    type: LOGOUT,
  };
}

export function showError() {
  return (dispatch) => {
    dispatch({
      type: SHOWERR,
    });

    setTimeout(() => {
      dispatch(hideError());
    }, 3000);
  };
}

export function hideError() {
  return {
    type: HIDEERR,
  };
}

export function loadPosts() {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const dataJson = await res.json();
      dispatch({ type: LOADPOSTS, payload: dataJson });
    } catch (error) {
      console.error("there was an error:", error.message);
    }
  };
}

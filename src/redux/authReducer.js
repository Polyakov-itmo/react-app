import { HIDEERR, LOGIN, LOGOUT, SHOWERR } from "./types";

const initialState = {
  authorized: false,
  login: "",
  error: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, authorized: true, login: action.payload };
    case LOGOUT:
      return { ...state, authorized: false, login: "" };
    case SHOWERR:
      return { ...state, error: true };
    case HIDEERR:
      return { ...state, error: false };
    default:
      return state;
  }
};

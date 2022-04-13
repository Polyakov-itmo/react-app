import { LOADPOSTS } from "./types";

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADPOSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

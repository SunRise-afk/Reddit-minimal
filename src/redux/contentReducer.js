import { FETCH_POSTS, SET_POSTS, TOGGLE_IS_LOADING } from "./actionTypes";

const initialState = { posts: null, isLoading: false };
export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...action.payload };
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case TOGGLE_IS_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};

import { CHANGE_SUBREDDIT_NAME, FETCH_SUBREDDITS } from "./actionTypes";

const initialState = {
  stateSubreddits: null,
  stateSubreddit: null,
};
export const subredditReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBREDDITS:
      return { ...state, stateSubreddits: action.payload };
    case CHANGE_SUBREDDIT_NAME:
      return { ...state, stateSubreddit: action.payload };
    default:
      return state;
  }
};

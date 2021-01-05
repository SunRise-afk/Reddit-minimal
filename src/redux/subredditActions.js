import { CHANGE_SUBREDDIT_NAME, FETCH_SUBREDDITS } from "./actionTypes";

export const fetchSubreddits = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://www.reddit.com/subreddits/popular.json"
      );
      const responseJson = await response.json();
      dispatch({ type: FETCH_SUBREDDITS, payload: responseJson.data.children });
    } catch (e) {
      console.log(e);
    }
  };
};

export const changeSubredditNameAC = (value) => {
  return { type: CHANGE_SUBREDDIT_NAME, payload: value };
};

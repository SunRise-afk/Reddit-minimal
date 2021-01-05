import { combineReducers } from "redux";
import { contentReducer } from "./contentReducer";
import { searchReducer } from "./searchReducer";
import { subredditReducer } from "./subredditReducer";

export const rootReduced = combineReducers({
  content: contentReducer,
  subreddit: subredditReducer,
  search: searchReducer,
});

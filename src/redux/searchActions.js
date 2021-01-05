import {
  CHANGE_SEARCHBAR_INPUT_VALUE,
  DISABLE_SEARCH_BUTTON,
  ENABLE_SEARCH_BUTTON,
} from "./actionTypes";

export const enableSearchButton = () => {
  return {
    type: ENABLE_SEARCH_BUTTON,
  };
};
export const disableSearchButton = () => {
  return {
    type: DISABLE_SEARCH_BUTTON,
  };
};
export const changeSearchbarValue = (value) => {
  return {
    type: CHANGE_SEARCHBAR_INPUT_VALUE,
    payload: value,
  };
};

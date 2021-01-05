import {
  CHANGE_SEARCHBAR_INPUT_VALUE,
  DISABLE_SEARCH_BUTTON,
  ENABLE_SEARCH_BUTTON,
} from "./actionTypes";

const initialState = {
  searchState: "",
  searchButtonState: false,
};
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_SEARCH_BUTTON:
      return { ...state, searchButtonState: true };
    case DISABLE_SEARCH_BUTTON:
      return { ...state, searchButtonState: false };
    case CHANGE_SEARCHBAR_INPUT_VALUE:
      return { ...state, searchState: action.payload };

    default:
      return state;
  }
};

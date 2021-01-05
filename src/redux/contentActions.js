import { SET_POSTS, FETCH_POSTS, TOGGLE_IS_LOADING } from "./actionTypes";

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    payload: posts,
  };
};
export const toggleIsLoading = () => {
  return {
    type: TOGGLE_IS_LOADING,
  };
};

export const fetchPosts = (subUrl) => {
  return async (dispatch) => {
    try {
      dispatch(toggleIsLoading());
      const response = await fetch(`${subUrl}`);
      const responseJson = await response.json();
      dispatch({ type: FETCH_POSTS, payload: responseJson.data.children });
      dispatch(toggleIsLoading());
    } catch (e) {
      console.log(e);
    }
  };
};

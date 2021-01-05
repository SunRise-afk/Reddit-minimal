import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/contentActions";
import {
  changeSearchbarValue,
  disableSearchButton,
} from "../../redux/searchActions";
import {
  changeSubredditNameAC,
  fetchSubreddits,
} from "../../redux/subredditActions";
import { Aside } from "../Aside/Aside";
import { Content } from "../Content/Content";
import { LoadingPlugContainer } from "../LoadingPlug/LoadingPlugContainer";
import styles from "./ContentContainer.module.css";

export const ContentContainer = () => {
  const asideRef = useRef(null);
  const toTopRef = useRef(null);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.content.posts);
  const isLoading = useSelector((state) => state.content.isLoading);
  const stateSubreddits = useSelector(
    (state) => state.subreddit.stateSubreddits
  );
  const stateSubreddit = useSelector((state) => state.subreddit.stateSubreddit);
  const searchbarValue = useSelector((state) => state.search.searchState);
  const searchButtonState = useSelector(
    (state) => state.search.searchButtonState
  );
  useEffect(() => {
    dispatch(fetchPosts("https://www.reddit.com/r/popular.json"));
    dispatch(fetchSubreddits());
  }, []);

  useEffect(() => {
    if (stateSubreddit === null) {
      return;
    }
    dispatch(fetchPosts(`https://www.reddit.com/${stateSubreddit}/.json`));
  }, [stateSubreddit]);

  useEffect(() => {
    if (searchButtonState) {
      dispatch(
        fetchPosts(`https://www.reddit.com/search.json?q=${searchbarValue}`)
      );
      dispatch(changeSearchbarValue(""));
      dispatch(disableSearchButton());
    }
    return;
  }, [searchButtonState]);

  const changeSubreddit = (subredditTitle) => {
    dispatch(changeSubredditNameAC(subredditTitle));
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.subredditScroll}
        ref={toTopRef}
        onClick={() => asideRef.current.scrollIntoView({ behavior: "smooth" })}
      >
        Go To Subreddits
      </div>
      <div
        className={styles.to_top_scroll}
        onClick={() => toTopRef.current.scrollIntoView({ behavior: "smooth" })}
      >
        <i className="fas fa-chevron-circle-up"></i>
      </div>
      {isLoading ? (
        <LoadingPlugContainer renderItem="post"></LoadingPlugContainer>
      ) : (
        <Content data={posts}></Content>
      )}
      <Aside
        data={stateSubreddits}
        changeSrHandler={changeSubreddit}
        refProp={asideRef}
      ></Aside>
    </div>
  );
};

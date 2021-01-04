import React, { useEffect, useRef, useState } from "react";
import { Aside } from "../Aside/Aside";
import { Content } from "../Content/Content";
import { LoadingPlugContainer } from "../LoadingPlug/LoadingPlugContainer";
import styles from "./ContentContainer.module.css";

export const ContentContainer = (props) => {
  const [statePosts, setStatePosts] = useState(null);
  const [stateSubreddits, setStateSubreddits] = useState(null);
  const [stateSubreddit, setStateSubreddit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const asideRef = useRef(null);
  const toTopRef = useRef(null);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://www.reddit.com/r/popular.json")
      .then((response) => {
        if (response.ok) {
          const responseJson = response.json();
          return responseJson;
        }
      })
      .then((response) => {
        setStatePosts(response.data.children);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch("https://www.reddit.com/subreddits/popular.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        setStateSubreddits(response.data.children);
      });
  }, []);

  useEffect(() => {
    if (stateSubreddit === null) {
      return;
    }
    setIsLoading(true);
    fetch(`https://www.reddit.com/${stateSubreddit}/.json`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        setStatePosts(response.data.children);
        setIsLoading(false);
      });
  }, [stateSubreddit]);

  useEffect(() => {
    if (props.searchButtonState) {
      setIsLoading(true);
      fetch(`https://www.reddit.com/search.json?q=${props.searchbarValue}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((response) => {
          props.setSearchbarValue("");
          props.setSearchButtonState(false);
          setStatePosts(response.data.children);
          setIsLoading(false);
        });
    }
    return;
  }, [props.searchButtonState]);

  const changeSubreddit = (subredditTitle) => {
    setStateSubreddit(subredditTitle);
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
        <Content data={statePosts}></Content>
      )}
      <Aside
        data={stateSubreddits}
        changeSrHandler={changeSubreddit}
        refProp={asideRef}
      ></Aside>
    </div>
  );
};

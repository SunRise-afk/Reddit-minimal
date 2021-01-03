import React, { useEffect, useState } from "react";
import { Aside } from "../Aside/Aside";
import { Content } from "../Content/Content";
import styles from "./ContentContainer.module.css";

export const ContentContainer = () => {
  const [statePosts, setStatePosts] = useState(null);
  const [stateSubreddits, setStateSubreddits] = useState(null);
  const [stateSubreddit, setStateSubreddit] = useState(null);
  const [isLoadign, setIsLoadign] = useState(false);
  useEffect(() => {
    setIsLoadign(true);
    fetch("https://www.reddit.com/r/popular.json")
      .then((response) => {
        if (response.ok) {
          const responseJson = response.json();
          return responseJson;
        }
      })
      .then((response) => {
        setStatePosts(response.data.children);
        setIsLoadign(false);
        console.log(response);
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
        console.log(response);
      });
  }, []);

  useEffect(() => {
    if (stateSubreddit === null) {
      return;
    }
    console.log("daet");
    setIsLoadign(true);
    fetch(`https://www.reddit.com/${stateSubreddit}/.json`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        console.log(response.data.children);
        setStatePosts(response.data.children);
        setIsLoadign(false);
      });
  }, [stateSubreddit]);

  const changeSubreddit = (subredditTitle) => {
    setStateSubreddit(subredditTitle);
  };
  return (
    <div className={styles.container}>
      <Content data={statePosts}></Content>
      <Aside data={stateSubreddits} changeSrHandler={changeSubreddit}></Aside>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Aside } from "../Aside/Aside";
import { Content } from "../Content/Content";
import styles from "./ContentContainer.module.css";

export const ContentContainer = () => {
  const [state, setstate] = useState(null);
  useEffect(() => {
    fetch("https://www.reddit.com/r/popular.json")
      .then((response) => {
        if (response.ok) {
          const responseJson = response.json();
          return responseJson;
        }
      })
      .then((response) => {
        setstate(response.data.children);
        console.log(response);
      });
  }, []);
  return (
    <div className={styles.container}>
      <Content data={state}></Content>
      <Aside></Aside>
    </div>
  );
};

import React from "react";
import { AsideItem } from "../AsideItem/AsideItem";
import styles from "./Aside.module.css";

export const Aside = (props) => {
  return (
    <div className={styles.aside_container}>
      <h2 className={styles.subreddits_title}>Subreddits</h2>
      {props.data === null
        ? null
        : props.data.map((item) => {
            return (
              <AsideItem
                key={item.data.id}
                title={item.data.display_name}
                icon={item.data.icon_img}
                srUrl={item.data.url}
                changeSrHandler={props.changeSrHandler}
              ></AsideItem>
            );
          })}
    </div>
  );
};

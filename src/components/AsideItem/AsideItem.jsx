import React from "react";
import styles from "./AsideItem.module.css";

export const AsideItem = (props) => {
  return (
    <div className={styles.item_container} onClick={() => {props.changeSrHandler(props.srUrl)}}>
      {props.icon === "" ? null : (
        <div className={styles.icon_img_container}>
          <img src={props.icon} alt="" />
        </div>
      )}
      <p className={styles.item_paragraph}>{props.title}</p>
    </div>
  );
};

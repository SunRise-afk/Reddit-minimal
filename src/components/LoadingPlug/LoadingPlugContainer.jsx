import React from "react";
import { LoadingComments } from "./LoadingComments";
import { LoadingPlug } from "./LoadingPlug";
import styles from "./LoadingPlug.module.css";

export const LoadingPlugContainer = (props) => {
  const isLoadingRenderArray = [1, 2, 3];
  return (
    <div
      className={styles.loading_plug_container}
    >
      {isLoadingRenderArray.map((item) => {
        if (props.renderItem === "post") {
          return <LoadingPlug key={item}></LoadingPlug>;
        } else if (props.renderItem === "comment") {
          return <LoadingComments key={item}></LoadingComments>;
        }
        return null;
      })}
    </div>
  );
};

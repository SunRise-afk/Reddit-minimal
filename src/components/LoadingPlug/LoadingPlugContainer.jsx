import React from "react";
import { LoadingComments } from "./LoadingComments";
import { LoadingPlug } from "./LoadingPlug";

export const LoadingPlugContainer = (props) => {
  const isLoadingRenderArray = [1, 2, 3];
  return (
    <div
      style={{
        flex: "4",
        backgroundColor: "white",
        marginLeft: "20px",
      }}
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

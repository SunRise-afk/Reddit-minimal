import React from "react";
import { LoadingPlug } from "./LoadingPlug";

export const LoadingPlugContainer = () => {
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
        return <LoadingPlug key={item}></LoadingPlug>;
      })}
    </div>
  );
};

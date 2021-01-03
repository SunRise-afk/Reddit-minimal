import React from "react";
import { ContentItem } from "../ContentItem/ContentItem";
import styles from "./Content.module.css";

export const Content = (props) => {
  console.log(props.data);
  return (
    <div className={styles.tmp}>
      {props.data === null
        ? null
        : props.data.map((item) => {
            console.log(Date.now());
            console.log(
              item.data.created_utc *
                `1${new Array(
                  Date.now().toString().length -
                    item.data.created_utc.toString().length
                )
                  .fill(0)
                  .join("")}`
            );
            return (
              <ContentItem
                title={item.data.title}
                postAuthor={item.data.author}
                postImage={item.data.url}
                postUps={item.data.ups}
                postDate={
                  Date.now() -
                  item.data.created_utc *
                    `1${new Array(
                      Date.now().toString().length -
                        item.data.created_utc.toString().length
                    )
                      .fill(0)
                      .join("")}`
                }
                postCommentNum={item.data.num_comments}
                key={item.data.id}
              ></ContentItem>
            );
          })}
    </div>
  );
};

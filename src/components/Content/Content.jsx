import React from "react";
import { ContentItem } from "../ContentItem/ContentItem";
import styles from "./Content.module.css";

export const Content = (props) => {
  return (
    <div className={styles.container}>
      {props.data === null
        ? null
        : props.data.map((item) => {
            const imageUrl =
              item.data.url.includes(".jpg") ||
              item.data.url.includes(".png") ||
              item.data.url.includes(".gif")
                ? item.data.url
                : item.data.thumbnail;
            return (
              <ContentItem
                title={item.data.title}
                data={props.data}
                postAuthor={item.data.author}
                postImage={imageUrl}
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

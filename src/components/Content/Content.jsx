import React from "react";
import { ContentItemContainer } from "../ContentItem/ContentItemContainer";
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
              <ContentItemContainer
                title={item.data.title}
                postAuthor={item.data.author}
                postImage={imageUrl}
                postUps={item.data.ups}
                postDate={
                  Date.now() -
                  item.data.created_utc *
                    `1${"0".repeat(
                      Date.now().toString().length -
                        item.data.created_utc.toString().length
                    )}`
                }
                postCommentNum={item.data.num_comments}
                permalink={item.data.permalink}
                key={item.data.id}
              ></ContentItemContainer>
            );
          })}
    </div>
  );
};

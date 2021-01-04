import React from "react";
import styles from "./CommentItem.module.css";

export const CommentItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.author_container}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.publication_time}>
          {Math.floor(props.publicationTime / 3.6e6) < 1
            ? Math.floor(props.publicationTime / 6e4) + " minutes ago"
            : Math.floor(props.publicationTime / 3.6e6) + " hours ago"}
        </p>
      </div>
      <p className={styles.comment_body}>{props.body}</p>
    </div>
  );
};

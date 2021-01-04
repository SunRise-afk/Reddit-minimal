import React from "react";
import styles from "./LoadingPlug.module.css";

export const LoadingComments = () => {
  return (
    <div className={styles.comments_container}>
      <div className={styles.comment_author_container}>
        <div className={styles.post_author}>
          <div className={styles.cylon_eye}></div>
        </div>
        <div
          className={`${styles.post_created_time_load} ${styles.post_created_time_comment}`}
        >
          <div className={styles.cylon_eye}></div>
        </div>
      </div>
      <div className={`${styles.loading_title} ${styles.loading_title_comment}`}>
        <div className={styles.cylon_eye}></div>
      </div>
    </div>
  );
};

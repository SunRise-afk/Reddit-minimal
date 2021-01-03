import React from "react";
import styles from "./LoadingPlug.module.css";

export const LoadingPlug = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post_container}>
        <div className={styles.ups_container}>
          <button className={`${styles.arrow_button} ${styles.up_button}`}>
            <i className="fas fa-arrow-up"></i>
          </button>
          <div className={styles.ups_paragraph}>
            <div className={styles.cylon_eye}></div>
          </div>
          <button className={`${styles.arrow_button} ${styles.down_button}`}>
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>
        <div className={styles.content_post}>
          <div className={styles.loading_title}>
            <div className={styles.cylon_eye}></div>
          </div>
          <div className={styles.post_image_container}>
            <div className={styles.cylon_eye}></div>
          </div>
        </div>
      </div>
      <div className={styles.post_footer}>
        <div className={styles.post_author}>
          <div className={styles.cylon_eye}></div>
        </div>
        <div className={styles.post_created_time_load}>
          <div className={styles.cylon_eye}></div>
        </div>
        <div className={styles.comment_loading}>
          <div className={styles.cylon_eye}></div>
          <div className={styles.comment_icon}>
            <i className="far fa-comment"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

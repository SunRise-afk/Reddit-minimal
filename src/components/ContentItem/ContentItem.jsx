import React from "react";
import { CommentItem } from "../CommentItem/CommentItem";
import styles from "./ContentItem.module.css";

export const ContentItem = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.post_container}>
        <div className={styles.ups_container}>
          <button className={`${styles.arrow_button} ${styles.up_button}`}>
            <i className="fas fa-arrow-up"></i>
          </button>
          <p className={styles.ups_paragraph}>{props.postUps}</p>
          <button className={`${styles.arrow_button} ${styles.down_button}`}>
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>
        <div className={styles.content_post}>
          <p>{props.title}</p>
          <div className={styles.post_image_container}>
            {props.postImage.includes(".jpg") ||
            props.postImage.includes(".png") ||
            props.postImage.includes(".gif") ? (
              <img
                src={props.postImage}
                className={styles.post_image}
                alt="postImage"
              ></img>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.post_footer}>
        <p>{props.postAuthor}</p>
        <p>
          {Math.floor(props.postDate / 3.6e6) < 1
            ? Math.floor(props.postDate / 6e4) + " minutes ago"
            : Math.floor(props.postDate / 3.6e6) + " hours ago"}
        </p>
        <p
          className={styles.comment_count}
          onClick={() => {
            props.commentBtnClickHandler((prevState) => !prevState);
            if (props.showComments) {
              props.hideComments(false);
            }
          }}
        >
          <span className={styles.comment_icon}>
            <i className="far fa-comment"></i>
          </span>
          {props.postCommentNum}
        </p>
      </div>
      {props.showComments
        ? props.comments.map((item) => {
            if (item.kind !== "t1") {
              return null;
            }
            return (
              <CommentItem
                key={item.data.id}
                author={item.data.author}
                body={item.data.body}
                publicationTime={
                  Date.now() -
                  item.data.created_utc *
                    `1${new Array(
                      Date.now().toString().length -
                        item.data.created_utc.toString().length
                    )
                      .fill(0)
                      .join("")}`
                }
              ></CommentItem>
            );
          })
        : null}
    </div>
  );
};

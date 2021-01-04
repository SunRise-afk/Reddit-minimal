import React, { useEffect, useState } from "react";
import { ContentItem } from "./ContentItem";

export const ContentItemContainer = (props) => {
  const [comments, setComments] = useState(null);
  const [commentsBtnActive, setCommentsBtnActive] = useState(false);
  const [haveComments, setHaveComments] = useState(false);

  useEffect(() => {
    if (commentsBtnActive === false) {
      return;
    }
    fetch(`https://www.reddit.com${props.permalink}.json`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        setComments(response[1].data.children);
        setHaveComments(true);
      });
  }, [commentsBtnActive, props.permalink]);

  return (
    <ContentItem
      title={props.title}
      postAuthor={props.postAuthor}
      postImage={props.postImage}
      postUps={props.postUps}
      postDate={props.postDate}
      postCommentNum={props.postCommentNum}
      showComments={haveComments}
      comments={comments}
      commentsBtnActive={commentsBtnActive}
      commentBtnClickHandler={setCommentsBtnActive}
      hideComments={setHaveComments}
    ></ContentItem>
  );
};

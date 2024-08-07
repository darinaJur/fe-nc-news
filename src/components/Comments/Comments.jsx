import { useEffect, useState } from "react";
import { getComments } from "../../../api";
import CommentCard from "../CommentCard/CommentCard";
import "./Comments.css";

const Comments = ({ article_id, comments, setComments }) => {
  useEffect(() => {
    getComments(article_id).then(({ data }) => {
      setComments(data.comments);
    });
  }, [article_id]);

  return (
    <section className="comments-container">
      <ul>
        {comments.map((commentItem) => {
          return (
            <CommentCard
              key={commentItem.comment_id}
              item={commentItem}
              setComments={setComments}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Comments;

import { useEffect, useState } from "react";
import { getComments } from "../../../api";
import CommentCard from "../CommentCard/CommentCard";
import './Comments.css'

const Comments = ({article_id}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id)
    .then(({data}) => {
      setComments(data.comments)
    });
  }, []);

  return (
    <section className= "comments-container">
    <ul>
      {comments.map((commentItem) => {
        return <CommentCard key={commentItem.comment_id} item={commentItem} />;
      })}
    </ul>
    </section>
  );
};

export default Comments;

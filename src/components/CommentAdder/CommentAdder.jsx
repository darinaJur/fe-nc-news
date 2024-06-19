import { useEffect, useState } from "react";
import "./CommentAdder.css";
import { postComment } from "../../../api";

const CommentAdder = ({ setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const [confirmMessage, setConfirmMessage] = useState(null)

  const handleChange = (event) => {
    event.preventDefault();
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(newComment, article_id)
    .then((newCommentFromApi) => {
        setNewComment("");
        setConfirmMessage('Your comment has been posted')
        setComments((currentComments) => {
            return [newCommentFromApi, ...currentComments];
        });
    })
  };
  return (
    <div>
      <form className="new-comment">
        <textarea value = {newComment} onChange = {handleChange} placeholder="Write your comment here" required />
      </form>
      <button onClick={handleSubmit}>Post comment</button>
    <p>{confirmMessage}</p>
    </div>
  );
};

export default CommentAdder;

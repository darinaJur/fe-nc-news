import { useEffect, useState } from "react";
import "./CommentAdder.css";
import { postComment } from "../../../api";

const CommentAdder = ({ setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const [confirmMessage, setConfirmMessage] = useState(null);
  const [error, setError] = useState(null);
  const [errPopup, setErrPopup] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(newComment, article_id)
      .then((newCommentFromApi) => {
        setNewComment("");
        setConfirmMessage("Your comment has been posted");
        setComments((currentComments) => {
          return [newCommentFromApi, ...currentComments];
        });
      })
      .catch((err) => {
        setError("Something went wrong");
        setErrPopup(true);
        setTimeout(() => {
          setErrPopup(false);
        }, 1500);
      });
  };

  return (
    <div className = "new-comment-container">
      {error ? errPopup && <div className="popup">{error}</div> : null}
      <form className="new-comment">
        <textarea
          value={newComment}
          onChange={handleChange}
          placeholder="Write your comment here..."
          required
        />
      </form>
      <button onClick={handleSubmit}>Post comment</button>
      <p>{confirmMessage}</p>
    </div>
  );
};

export default CommentAdder;

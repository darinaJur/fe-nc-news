import { useContext, useEffect, useState } from "react";
import "./CommentAdder.css";
import { postComment } from "../../../api";
import { UserContext } from "../../contexts/UserContext";

const CommentAdder = ({ setComments, article_id }) => {
  const { user } = useContext(UserContext);

  const [newComment, setNewComment] = useState({
    username: user.username,
    body: "",
  });
  const [confirmMessage, setConfirmMessage] = useState(null);
  const [error, setError] = useState(null);
  const [errPopup, setErrPopup] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setNewComment({ username: user.username, body: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(newComment, article_id)
      .then((newCommentFromApi) => {
        setNewComment({ username: user.username, body: "" });
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
    <div className="new-comment-container">
      {error ? errPopup && <div className="popup">{error}</div> : null}
      <form className="new-comment">
        <textarea
          value={newComment.body}
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

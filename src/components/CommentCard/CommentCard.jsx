import './CommentCard.css'

import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { deleteComment } from '../../../api';

const CommentCard = ({ item, setComments }) => {

  const { user } = useContext(UserContext)
  const [deleteCommentBtn, setDeleteCommentBtn] = useState(false)

  useEffect(() => {
      if (user.username === item.author) {
        setDeleteCommentBtn(true)
      } else {
        setDeleteCommentBtn(false)
      }
  }, [user, item.author])

const handleClick = (comment_id) => {
  deleteComment(comment_id)
  setComments((currentComments) => {
    return currentComments.filter((element) => element.comment_id !== comment_id)
  })
}

  return (
    <li className="comment-card">
      <p>{item.body}</p>
      <div className = "comment-info">
      <div className = "comment-author">by {item.author}</div>
      <div className="votes"> votes: {item.votes}</div>
      {deleteCommentBtn ? <img onClick={() => handleClick(item.comment_id)} className = "delete-button" src="https://img.icons8.com/?size=100&id=4887&format=png&color=000000" alt="delete button" /> : null }
      </div>
    </li>
  );
};

export default CommentCard;

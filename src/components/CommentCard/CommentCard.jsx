import './CommentCard.css'

const CommentCard = ({ item }) => {
  return (
    <li className="comment-card">
      <p>{item.body}</p>
      <div className = "comment-info">
      <div className = "comment-author">by {item.author}</div>
      <div className="votes"> votes: {item.votes}</div>
      </div>
    </li>
  );
};

export default CommentCard;

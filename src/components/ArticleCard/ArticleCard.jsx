import './ArticleCard.css'

const ArticleCard = ({ item }) => {
  return (
    <li className= "article-card">
      <p>{item.title}</p>
      <p>{item.body}</p>
      <div className = "side-info">
      <p>comments: {item.comment_count}</p>
      <p>votes: {item.votes}</p>
      </div>
    </li>
  );
};

export default ArticleCard;

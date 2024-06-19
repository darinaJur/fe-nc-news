import './ArticleCard.css'
import { Link } from 'react-router-dom';

const ArticleCard = ({ item, upVote, downVote }) => {

  return (
    <li className= "article-card">
    <img className = "article-main-image" src={item.article_img_url} alt="" />
    <Link to = {`/articles/${item.article_id}`}>{item.title}</Link>
      <div className = "side-info">
      <p>comments: {item.comment_count}</p>
      <p>votes: {item.votes}</p>
      <img onClick={() => upVote(item.article_id)} className = "upvote-button" src="https://img.icons8.com/?size=100&id=83997&format=png&color=000000" alt="upvote button" />
      <img onClick={() => downVote(item.article_id)}className = "downvote-button" src="src/images/icons8-facebook-like-24.png" alt="downvote button" />
      </div>
    </li>
  );
};

export default ArticleCard;

import './ArticleCard.css'
import { Link } from 'react-router-dom';

const ArticleCard = ({ item }) => {


  return (
    <li className= "article-card">
    <img src={item.article_img_url} alt="" />
    <Link to = {`/articles/${item.article_id}`}>{item.title}</Link>
      <p>{item.body}</p>
      <div className = "side-info">
      <p>comments: {item.comment_count}</p>
      <p>votes: {item.votes}</p>
      </div>
    </li>
  );
};

export default ArticleCard;

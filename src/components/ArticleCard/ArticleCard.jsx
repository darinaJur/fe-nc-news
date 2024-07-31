import "./ArticleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ item }) => {
  return (
    <Link to={`/articles/${item.article_id}`} className="article-card-link">
      <li className="article-card">
        <div className="image-wrapper">
          <img
            className="article-main-image"
            src={item.article_img_url}
            alt=""
          />
          <p>{item.topic}</p>
        </div>
        <div className="content-container">
          <h2>{item.title}</h2>
          <div className="side-info">
            <p>
              <img
                className="comments-image"
                src="https://img.icons8.com/?size=100&id=uMrGly1lK1sv&format=png&color=000000"
                alt="comments image"
              />{" "}
              {item.comment_count}
            </p>
            <p>
              <img
                className="likes-image"
                src="https://img.icons8.com/?size=100&id=83997&format=png&color=000000"
                alt="Likes image"
              />{" "}
              {item.votes}
            </p>
          </div>
          <div className="author">
            <p>created by {item.author}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default ArticleCard;

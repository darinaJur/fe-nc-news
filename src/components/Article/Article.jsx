import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../../api";
import "./Article.css";
import Comments from "../Comments/Comments";
import CommentAdder from "../CommentAdder/CommentAdder";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleById(article_id).then(( data ) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading)
    return (
      <div className="loading-container">
        <p>Loading, please wait</p>
        <img src="https://cdn.pixabay.com/photo/2015/10/31/12/04/bank-1015368_1280.jpg" />
      </div>
    );

  return (
    <div className = "article-page">
    <main className="article-container">
      <img src={article.article_img_url} alt="" />
      <h2>{article.title}</h2>
      <div className="article-body">
        <p>{article.body}</p>
      </div>
      <p>article votes: {article.votes}</p>
    </main>
    <div>
      <CommentAdder setComments={setComments} article_id={article_id} comments={comments}/>
    </div>
    <section className = "comments-container">
        <Comments article_id = {article_id} comments={comments} setComments={setComments}/>
    </section>
    </div>
  );
};

export default Article;

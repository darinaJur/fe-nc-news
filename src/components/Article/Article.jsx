import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../../api";
import "./Article.css";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(article_id).then(({ data }) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading)
    return (
      <div className = "loading-container">
        <p>Loading, please wait</p>
        <img src="https://cdn.pixabay.com/photo/2015/10/31/12/04/bank-1015368_1280.jpg" />
      </div>
    );

  return (
    <main className="article-container">
      <img src={article.article_img_url} alt="" />
      <h2>{article.title}</h2>
      <body className="article-body">
        <p>{article.body}</p>
      </body>
    </main>
  );
};

export default Article;

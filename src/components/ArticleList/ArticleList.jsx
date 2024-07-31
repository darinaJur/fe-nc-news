import { useEffect, useState } from "react";
import { getArticles, patchArticle } from "../../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticleList.css";

const ArticleList = ({ allArticles, setAllArticles }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errPopup, setErrPopup] = useState(false);

  useEffect(() => {
    getArticles().then((articles) => {
      setAllArticles(articles.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  return (
    <section className="article-list">
      {error ? errPopup && <div className="popup">{error}</div> : null}
      <ul>
        {allArticles.map((item) => {
          return <ArticleCard key={item.article_id} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default ArticleList;

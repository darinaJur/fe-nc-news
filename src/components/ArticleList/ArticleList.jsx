import { useEffect, useState } from "react";
import { getArticles } from "../../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticleList.css";

const ArticleList = ({ allArticles, setAllArticles }) => {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles()
        .then(({data}) => {
            setAllArticles(data.articles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading)
    return (
      <div className="loading-container">
        <p>Loading, please wait</p>
        <img src="https://cdn.pixabay.com/photo/2015/10/31/12/04/bank-1015368_1280.jpg" />
      </div>
    )

  return (
    <section className="article-list">
      <ul>
        {allArticles.map((item) => {
          return <ArticleCard key={item.article_id} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default ArticleList;

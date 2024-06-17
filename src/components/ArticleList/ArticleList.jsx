import { useEffect } from "react";
import { getArticles } from "../../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticleList.css";

const ArticleList = ({ allArticles, setAllArticles }) => {

    useEffect(() => {
        getArticles()
        .then(({data}) => {
            setAllArticles(data.articles)
            console.log(data.articles)
        })
    }, [])

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

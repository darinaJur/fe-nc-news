import { useState } from "react";
import ArticleList from "../ArticleList/ArticleList";

const Home = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [article, setArticle] = useState("");

  return (
    <main>
      <ArticleList
        allArticles={allArticles}
        setAllArticles={setAllArticles}
        article={article}
        setArticle={setArticle}
      />
    </main>
  );
};

export default Home;

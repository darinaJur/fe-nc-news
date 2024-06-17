import { useState } from "react";
import ArticleList from "../ArticleList/ArticleList";

const Home = () => {
    const  [allArticles, setAllArticles] = useState([])

  return (
    <main>
      <ArticleList allArticles = {allArticles} setAllArticles = {setAllArticles}/>
    </main>
  );
};

export default Home;

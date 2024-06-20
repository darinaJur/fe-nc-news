import { useState, useEffect } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { getArticles, getTopics } from "../../../api";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [topics, setTopics] = useState([])
  const [searchParams, setSearchParams] = useSearchParams([])

  const topicQuery = searchParams.get("topic") //gets topic value

  useEffect(() => {
    getTopics()
    .then((data) => {
      setTopics(data)
    })

    getArticles(topicQuery)
    .then((data) => {
      setAllArticles(data)
    })
  }, [topicQuery])

  const setQueries = ({topic}) => {
    const newParams = new URLSearchParams(searchParams)
    if (topic) newParams.set("topic", topic)
    setSearchParams(newParams)
  }

  return (
    <main>
      <div>
      <h2>Topics:</h2>
      <div className="topic-list">
        {topics.map((topic, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                  setQueries({ topic: topic.slug });
              }}
            >
              {topic.slug}
            </button>
          );
        })}
      </div>
      </div>
      <ArticleList
        allArticles={allArticles}
        setAllArticles={setAllArticles}
      />
    </main>
  );
};

export default Home;

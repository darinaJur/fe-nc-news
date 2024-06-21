import { useState, useEffect } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { getArticles, getTopics } from "../../../api";
import { useSearchParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Home = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [topics, setTopics] = useState([])
  const [searchParams, setSearchParams] = useSearchParams([])

  const topicQuery = searchParams.get("topic")
  const sortQuery = searchParams.get("sort_by")
  const orderQuery = searchParams.get("order")

  useEffect(() => {
    getTopics()
    .then((data) => {
      setTopics(data)
    })

    getArticles(topicQuery, sortQuery, orderQuery)
    .then((data) => {
      setAllArticles(data)
    })
  }, [topicQuery, sortQuery, orderQuery])

  const setQueries = ({topic, sort_by, order}) => {
    const newParams = new URLSearchParams(searchParams)
    if (topic) newParams.set("topic", topic)
    if (sort_by) newParams.set("sort_by", sort_by)
    if (order) newParams.set("order", order)
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
      <DropdownButton id="dropdown-basic-button" title="Sort By">
        <Dropdown.Item onClick={() => { setQueries({ sort_by: "created_at", order: "asc" }) }}> Date, ascending </Dropdown.Item>
        <Dropdown.Item onClick={() => { setQueries({ sort_by: "created_at", order: "desc" }) }}> Date, descending </Dropdown.Item>
        <Dropdown.Item onClick={() => { setQueries({ sort_by: "votes", order: "asc" }) }}> Votes, ascending </Dropdown.Item>
        <Dropdown.Item onClick={() => { setQueries({ sort_by: "votes", order: "desc" }) }}> Votes, descending </Dropdown.Item>
        <Dropdown.Item onClick={() => { setQueries({ sort_by: "comment_count", order: "asc" }) }}> Comment Count, ascending </Dropdown.Item>
        <Dropdown.Item onClick={() => { setQueries({ sort_by: "comment_count", order: "desc" }) }}> Comment Count, descending </Dropdown.Item>
      </DropdownButton>
      <ArticleList
        allArticles={allArticles}
        setAllArticles={setAllArticles}
      />
    </main>
  );
};

export default Home;

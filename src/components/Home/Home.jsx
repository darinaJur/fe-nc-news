import { useState, useEffect } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { getArticles, getTopics } from "../../../api";
import { useSearchParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import './Home.css'
import Article from "../Article/Article";

const Home = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [topics, setTopics] = useState([])
  const [searchParams, setSearchParams] = useSearchParams([])
  const [isLoading, setIsLoading] = useState(true);

  const topicQuery = searchParams.get("topic")
  const sortQuery = searchParams.get("sort_by")
  const orderQuery = searchParams.get("order")

  useEffect(() => {
    getTopics()
    .then((data) => {
      setTopics(data)
      setIsLoading(false);
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

  if (isLoading)
  return (
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )

  return (
    <main className = "main-container">
      <div className = "topic-container">
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
      <div className = "sorting-articles-container">
      <div className = "sorting-container">
      <h3>LATEST NEWS</h3>
      <div className = 'sorting-buttons'>
      <DropdownButton id="dropdown-basic-button" variant='secondary' title="Sort By">
        <Dropdown.Item onClick={() => { setQueries({ sort_by: "created_at"}) }}> Date </Dropdown.Item>
        <Dropdown.Item onClick={() => { setQueries({ sort_by: "votes"}) }}> Votes </Dropdown.Item>
        <Dropdown.Item onClick={() => { setQueries({ sort_by: "comment_count" }) }}> Comment Count </Dropdown.Item>
      </DropdownButton>
      <DropdownButton id="dropdown-basic-button" variant='secondary' title="Order">
        <Dropdown.Item onClick={() => { setQueries({ order: "asc" }) }}> Ascending </Dropdown.Item>
        <Dropdown.Item onClick={() => { setQueries({ order: "desc" }) }}> Descending </Dropdown.Item>
      </DropdownButton>
      </div>
      </div>
      <ArticleList
        allArticles={allArticles}
        setAllArticles={setAllArticles}
      />
      </div>
    </main>
  );
};

export default Home;
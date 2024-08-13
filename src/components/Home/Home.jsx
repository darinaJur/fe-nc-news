import { useState, useEffect } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { getArticles, getTopics } from "../../../api";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Home.css";
import Article from "../Article/Article";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const location = useLocation()

  const topicQuery = searchParams.get("topic");
  const sortQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");
  const pageQuery = parseInt(searchParams.get("p") || page);
  const limitQuery = searchParams.get("limit") || 9;



  useEffect(() => {
    
    if (pageQuery !== page) {
      setPage(pageQuery);
    }
    getTopics().then((data) => {
      setTopics(data);
      setIsLoading(false);
    });

    getArticles(topicQuery, sortQuery, orderQuery, pageQuery, limitQuery, searchParams).then(
      (data) => {
        setAllArticles(data.articles);
        setTotalCount(data.total_count);
        setIsLoading(false);
      }
    );
  }, [topicQuery, sortQuery, orderQuery, pageQuery, limitQuery, page, location]);

  const setQueries = ({ topic, sort_by, order, p, limit }) => {
    const newParams = new URLSearchParams(searchParams);
    if (topic) {
    newParams.set("p", 1)
    newParams.set("topic", topic);
    }

    if (sort_by) newParams.set("sort_by", sort_by);
    if (order) newParams.set("order", order);
    if (p) newParams.set("p", p);
    if (limit) newParams.set("limit", limit);
    setSearchParams(newParams);
  };

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
    <main className="main-container">
      <div className="topic-container">
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

      <div className="sorting-articles-container">
        <div className="sorting-container">
          <div className="latest-news">
            <h3>LATEST NEWS</h3>
          </div>
          <div className="sorting-buttons">
            <DropdownButton
              id="dropdown-basic-button"
              variant="warning"
              title="Sort By"
            >
              <Dropdown.Item
                onClick={() => {
                  setQueries({ sort_by: "created_at" });
                }}
              >
                {" "}
                Date{" "}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setQueries({ sort_by: "votes" });
                }}
              >
                {" "}
                Votes{" "}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setQueries({ sort_by: "comment_count" });
                }}
              >
                {" "}
                Comment Count{" "}
              </Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              id="dropdown-basic-button"
              variant="warning"
              title="Order"
            >
              <Dropdown.Item
                onClick={() => {
                  setQueries({ order: "asc" });
                }}
              >
                {" "}
                Ascending{" "}
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setQueries({ order: "desc" });
                }}
              >
                {" "}
                Descending{" "}
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="articles-container">
          <ArticleList
            allArticles={allArticles}
            setAllArticles={setAllArticles}
          />
        </div>
        <Pagination
          limit={limitQuery}
          totalCount={totalCount}
          page={page}
          setPage={(newPage) => setQueries({ p: newPage })}
        />
      </div>
    </main>
  );
};

export default Home;

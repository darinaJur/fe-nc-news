import { useEffect, useState } from "react";
import { getArticles, patchArticle } from "../../../api";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticleList.css";

const ArticleList = ({ allArticles, setAllArticles }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [errPopup, setErrPopup] = useState(false);

  useEffect(() => {
    getArticles().then(({ data }) => {
      setAllArticles(data.articles);
      setIsLoading(false);
    });
  }, []);

  const upVote = (article_id) => {
    setAllArticles((allArticles) => {
      return allArticles.map((article) => {
        if (article.article_id === article_id) {
          return { ...article, votes: article.votes + 1 };
        }
        return article;
      });
    });

    patchArticle(article_id, 1).catch((err) => {
      setAllArticles((allArticles) => {
        const revertedVotes = allArticles.map((article) => {
          if (article.article_id === article_id) {
            return { ...article, votes: article.votes - 1 };
          }
          return article;
        });
        return revertedVotes;
      });
      setError("Something went wrong");
      setErrPopup(true);
      setTimeout(() => {
        setErrPopup(false);
      }, 1500);
    });
  };

  const downVote = (article_id) => {
    setAllArticles((allArticles) => {
      return allArticles.map((article) => {
        if (article.article_id === article_id) {
          return { ...article, votes: article.votes - 1 };
        }
        return article;
      });
    });

    patchArticle(article_id, -1).catch((err) => {
      setAllArticles((allArticles) => {
        const revertedVotes = allArticles.map((article) => {
          if (article.article_id === article_id) {
            return { ...article, votes: article.votes + 1 };
          }
          return article;
        });
        return revertedVotes;
      });
      setError("Something went wrong");
      setErrPopup(true);
      setTimeout(() => {
        setErrPopup(false);
      }, 1500);
    });
  };

  if (isLoading)
    return (
      <div className="loading-container">
        <p>Loading, please wait</p>
        <img src="https://cdn.pixabay.com/photo/2015/10/31/12/04/bank-1015368_1280.jpg" />
      </div>
    );

  return (
    <section className="article-list">
      {error ? errPopup && <div className="popup">{error}</div> : null}
      <ul>
        {allArticles.map((item) => {
          return (
            <ArticleCard
              key={item.article_id}
              item={item}
              upVote={upVote}
              downVote={downVote}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default ArticleList;

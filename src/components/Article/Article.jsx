import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteArticle, getArticleById, patchArticle } from "../../../api";
import "./Article.css";
import Comments from "../Comments/Comments";
import CommentAdder from "../CommentAdder/CommentAdder";
import ErrorPage from "../ErrorPage/ErrorPage";
import { UserContext } from "../../contexts/UserContext";

const Article = () => {
  const { article_id } = useParams();
  const { user } = useContext(UserContext);
  const [deleteArticleBtn, setDeleteArticleBtn] = useState(false);
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [articleError, setArticleError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getArticleById(article_id)
      .then((data) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setArticleError(err);
      });
  }, [article_id]);

  useEffect(() => {
    if (user.username === article.author) {
      setDeleteArticleBtn(true);
    } else {
      setDeleteArticleBtn(false);
    }
  }, [user, article.author]);

  if (articleError) {
    return <ErrorPage error={articleError} />;
  }

  const handleDeleteArticle = () => {
    deleteArticle(article.article_id);
    navigate("/");
  };

  const upVote = (article_id) => {
    setArticle(() => {
      return { ...article, votes: article.votes + 1 };
    });

    patchArticle(article_id, 1).catch((err) => {
      setArticle(() => {
        return { ...article, votes: article.votes - 1 };
      });
      setError("Something went wrong");
      setErrPopup(true);
      setTimeout(() => {
        setErrPopup(false);
      }, 1500);
    });
  };

  const downVote = (article_id) => {
    setArticle(() => {
      return { ...article, votes: article.votes - 1 };
    });

    patchArticle(article_id, -1).catch((err) => {
      setArticle(() => {
        return { ...article, votes: article.votes + 1 };
      });
      setError("Something went wrong");
      setErrPopup(true);
      setTimeout(() => {
        setErrPopup(false);
      }, 1500);
    });
  };

  const date = new Date(article.created_at);

  if (isLoading) {
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
  }

  return (
    <div className="article-page">
      <main className="article-container">
        <div className="article-image">
          <img src={article.article_img_url} alt="" />
        </div>
        <div className="article-main-content">
          <div className="title-and-delete">
            <h2>{article.title}</h2>
            {deleteArticleBtn ? (
              <div className="delete-button-container">
                <img
                  onClick={() => handleDeleteArticle(article.article_id)}
                  className="delete-button"
                  src="https://img.icons8.com/?size=100&id=4887&format=png&color=000000"
                  alt="delete button"
                />
              </div>
            ) : null}
          </div>
          <div className="article-body">
            <p>{article.body}</p>
          </div>
          <div className="article-bottom">
            <div>by {article.author}</div>
            <div>posted on {date.toLocaleDateString()}</div>
            <div className="voting-section">
              <p className="vote-element">
                {article.votes} |
                <img
                  onClick={() => upVote(article.article_id)}
                  className="like-button"
                  src="https://img.icons8.com/?size=100&id=83997&format=png&color=000000"
                  alt="Likes image"
                />
                <img
                  onClick={() => downVote(article.article_id)}
                  className="dislike-button"
                  src="https://github.com/darinaJur/fe-nc-news/blob/main/src/images/icons8-facebook-like-24.png?raw=true"
                  alt="downvote button"
                />
              </p>
            </div>
          </div>
        </div>
      </main>
      <div>
        <CommentAdder
          setComments={setComments}
          article_id={article_id}
          comments={comments}
        />
      </div>
      <section className="comments-container">
        <Comments
          article_id={article_id}
          comments={comments}
          setComments={setComments}
        />
      </section>
    </div>
  );
};

export default Article;

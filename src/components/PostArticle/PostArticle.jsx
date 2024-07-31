import { useContext, useState } from "react";
import { postArticle } from "../../../api";
import "./PostArticle.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const PostArticle = () => {
  const { user } = useContext(UserContext);

  const [newPost, setNewPost] = useState({
    author: user.username,
    title: "",
    body: "",
    topic: "",
    article_img_url: "",
  });
  const [error, setError] = useState(null);
  const [errPopup, setErrPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();

    if (event.target.id === "title") {
      setNewPost({
        ...newPost,
        title: event.target.value,
      });
    }
    if (event.target.id === "body") {
      setNewPost({
        ...newPost,
        body: event.target.value,
      });
    }
    if (event.target.id === "topic") {
      setNewPost({
        ...newPost,
        topic: event.target.value,
      });
    }

    if (event.target.id === "image_url") {
      setNewPost({
        ...newPost,
        article_img_url: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postArticle(newPost)
      .then((newPostFromApi) => {
        setNewPost({
          author: user.username,
          title: "",
          body: "",
          topic: "",
          article_img_url: "",
        });
        navigate("/");
      })
      .catch((err) => {
        setError("Something went wrong");
        setErrPopup(true);
        setTimeout(() => {
          setErrPopup(false);
        }, 1500);
      });
  };

  return (
    <div className="post-article-page">
      <h3>Create post</h3>
      <form className="new-post">
        <label>
          <input
            type="text"
            id="title"
            required
            placeholder="Title*"
            onChange={handleChange}
          />
        </label>

        <label>
          <textarea
            type="text"
            id="body"
            required
            placeholder="Body*"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="text"
            id="topic"
            required
            placeholder="Topic*"
            onChange={handleChange}
          />
        </label>

        <label>
          <input
            type="text"
            id="image_url"
            required
            placeholder="Image URL*"
            onChange={handleChange}
          />
        </label>
      </form>
      <button onClick={handleSubmit}>Post article</button>
    </div>
  );
};

export default PostArticle;

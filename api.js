import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-jx1u.onrender.com/api",
});

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticles = (
  topicQuery,
  sortQuery,
  orderQuery,
  pageQuery,
  limitQuery
) => {
  return newsApi
    .get(`/articles`, {
      params: {
        topic: topicQuery,
        sort_by: sortQuery,
        order: orderQuery,
        p: pageQuery,
        limit: 9,
      },
    })
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => console.log(err));
};

export const getComments = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const patchArticle = (article_id, voteValue) => {
  const patchBody = { votes: voteValue };
  return newsApi.patch(`/articles/${article_id}`, patchBody).then((data) => {
    return data;
  });
};

export const postComment = (commentObject, article_id) => {
  console.log(commentObject, "<<commentObject");
  const requestBody = {
    username: commentObject.username,
    body: commentObject.body,
  };
  return newsApi
    .post(`/articles/${article_id}/comments`, requestBody)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).then((data) => {
    return data;
  });
};

export const getTopics = () => {
  return newsApi
    .get("/topics")
    .then(({ data: { topics } }) => {
      return topics;
    })
    .catch((err) => console.log(err));
};

export const postArticle = (articleToPost) => {
  const requestBody = {
    author: articleToPost.author,
    title: articleToPost.title,
    body: articleToPost.body,
    topic: articleToPost.topic,
    article_img_url: articleToPost.article_img_url,
  };

  return newsApi.post("/articles", requestBody).then(({ data }) => {
    return data.article;
  });
};

export const getUsers = () => {
  return newsApi
    .get("/users")
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const deleteArticle = (article_id) => {
  return newsApi
    .delete(`/articles/${article_id}`)
    .catch((err) => console.log(err));
};

export const patchComment = (comment_id, voteValue) => {
  const patchBody = { votes: voteValue };
  return newsApi.patch(`/comments/${comment_id}`, patchBody).then((data) => {
    return data;
  });
};

import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-jx1u.onrender.com/api"
})

export const getArticles = (article_id) => {
    const endpoint = article_id ? `/articles/${article_id}` : "/articles"
    return newsApi
    .get(endpoint)
    .then((data) => {
        return data
    })
    .catch(err => console.log(err))
}

export const getComments = (article_id) => {
    return newsApi
    .get(`/articles/${article_id}/comments`)
    .then((data) => {
        return data
    })
    .catch(err => console.log(err))
}

export const patchArticle = (article_id, voteValue) => {
    const patchBody = { votes: voteValue }
    return newsApi
    .patch(`/articles/${article_id}`, patchBody)
    .then((data) => {
        console.log(data, '<<<apiData')
        return data
    })
}
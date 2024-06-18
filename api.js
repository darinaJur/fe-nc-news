import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-jx1u.onrender.com/api"
})

export const getArticles = (article_id) => {
    const endpoint = article_id ? `/articles/${article_id}` : "/articles"
    return newsApi
    .get(endpoint)
    .then((data) => {
        console.log(data)
        return data
    })
    .catch(err => console.log(err))
}
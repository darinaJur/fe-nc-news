import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-jx1u.onrender.com/api"
})

export const getArticles = () => {
    return newsApi
    .get("/articles")
    .then((data) => {
        console.log(data)
        return data
    })
    .catch(err => console.log(err))
}
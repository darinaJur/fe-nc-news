import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Article from "./components/Article/Article";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import PostArticle from "./components/PostArticle/PostArticle";
import SelectUser from "./components/SelectUser/SelectUser";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/post-article" element={<PostArticle />} />
        <Route path="/select-user" element={<SelectUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Article from './components/Article/Article'

function App() {

  return (
    <div className = "app-container">
    <Header />
    <Routes>
      <Route path = "/" element = { <Home /> } />
      <Route path = "/articles/:article_id" element = { <Article /> } />
    </Routes>
    <NavBar />
    </div>
  )
}

export default App

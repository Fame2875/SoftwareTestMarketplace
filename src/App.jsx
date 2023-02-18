import React from "react";
import NewsContainer from "./NewsContainer";
import { fetchNews, findNews } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import { Link, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  const [news, setNews] = React.useState(null);
  let [search, setSearch] = React.useState("");
  React.useEffect(() => {
    fetchNews(setNews);
  }, []);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  function onSearch() {
    setNews(null);
    findNews(search, setNews);
  }

  return (
    <div>
      <div className="w-screen h-screen">
        <Navbar />
        <Item />

      </div>
    </div>
  )
}

export default App;

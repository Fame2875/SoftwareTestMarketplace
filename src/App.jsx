import React from "react";
import NewsContainer from "./NewsContainer";
import { fetchNews, findNews } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Item from "../src/Page/item/Item";
import Login from "../src/Page/Login/Login";
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {

  return (
     <Router>

    <div>
      <div className="w-screen h-screen">
        <Navbar />
        <Routes>
          <Route path="/item" element={<Item />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/item" />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
     </Router>
  )
}

export default App;

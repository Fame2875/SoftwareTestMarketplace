import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Item from "./Page/item/Item";
import Login from "../src/Page/Login/Login";
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Cart from "./Page/Cart/Cart";
import Home from "./Page/home/home";
import Category from "./Page/Category/Category";
import Footer from "./components/Footer ";

function App() {

  return (
     <Router>

    <div>
      <div className="w-screen h-screen">
        <Navbar />
        <Routes>
          <Route path="/item" element={<Item />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/" element={<Navigate to="/home" />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
     </Router>
  )
}

export default App;

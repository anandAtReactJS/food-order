import React from 'react';
import Header from './component/Header';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Cart from "./component/Cart";
import Menu from './component/menu/Menu';
import AboutUs from './pages/about-us/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/food-order" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="homePage" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="menu" element={<Menu/>} />
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Header from './component/Header';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Login from './component/Login';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Menu from './component/menu/Menu';
import ItemDetails from './component/ItemDetails';

import AboutUs from './pages/about-us/AboutUs';




function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/food-order" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="menu" element={<Menu/>} />
        <Route path="about" element={<AboutUs />} />
        <Route path="/cart/:id" element={<ItemDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;

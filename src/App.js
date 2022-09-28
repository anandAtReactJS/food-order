import React from 'react';
import Header from './component/Header';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Cart from "./component/Cart";
// import Footer from './pages/Footer/Footer'
import Menu from './component/menu/Menu';
import About from './component/About';




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
        <Route path="about" element={<About/>} />
        {/* <Route path="about" element={<About/>} /> */}



        
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;

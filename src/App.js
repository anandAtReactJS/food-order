import React from 'react';
import Header from './component/Header';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './component/Signup';
import Footer from './pages/Footer/Footer'
import Menu from './component/menu/Menu';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

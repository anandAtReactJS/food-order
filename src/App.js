import React from 'react';
import Header from './component/Header';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Signup from "./component/Signup";
import Cart from "./component/Cart";
=======
import Signup from './component/Signup';
import Footer from './pages/Footer/Footer'
import Menu from './component/menu/Menu';

>>>>>>> 7472d0ce703c617216d0cbf0bc5e15072c637ec2

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
<<<<<<< HEAD
        <Route path="/food-order" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="homePage" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="menu" element={<Menu/>} />

=======
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
>>>>>>> 7472d0ce703c617216d0cbf0bc5e15072c637ec2
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

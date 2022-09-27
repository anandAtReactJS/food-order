import React from "react";
import Header from "./component/Header";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Cart from "./component/Cart";

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;

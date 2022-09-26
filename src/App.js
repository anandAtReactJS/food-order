<<<<<<< HEAD
import React from 'react';
import Header from './component/Header';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Burger from './component/burger/Burger';

=======
import React from "react";
import Header from "./component/Header";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
>>>>>>> dc9acc76625403a01b3d94fc9e726327e67a6564

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage />}></Route>
        <Route path='/burgers' element={<Burger/>}></Route>
        <Route path="login" element={<Login />}></Route>
=======
        <Route path="/" element={<Signup />} />
        <Route path="homePage" element={<HomePage />} />
        <Route path="login" element={<Login />} />
>>>>>>> dc9acc76625403a01b3d94fc9e726327e67a6564
      </Routes>
    </BrowserRouter>
  );
}

export default App;

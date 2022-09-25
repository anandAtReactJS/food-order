import React from "react";
import Header from "./component/Header";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="homePage" element={<HomePage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

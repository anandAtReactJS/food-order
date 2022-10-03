import React from 'react';
import Header from './component/Header';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Menu from './component/menu/Menu';
import ItemDetails from './component/ItemDetails';
<<<<<<< HEAD
import About from './component/About';
// import SearchBar from './component/SearchBar';
// import BookData from './component/Data.json'
=======
>>>>>>> ae8066bcc3536bd44b2970fdca02cb9ba1f9a98f
import AboutUs from './pages/about-us/AboutUs';




function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <SearchBar placeholder="Search..." data={BookData} /> */}
      <Routes>
        <Route path="/food-order" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="homePage" element={<HomePage />} />
        {/* <Route path="cart" element={<Cart />} /> */}
<<<<<<< HEAD
        <Route path="menu" element={<Menu/>} />
        <Route path="about" element={<AboutUs />} />
=======
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<AboutUs />} />
>>>>>>> ae8066bcc3536bd44b2970fdca02cb9ba1f9a98f
      <Route path="/cart/:id" element={<ItemDetails/>}/>
        
        {/* <Route path="about" element={<About/>} /> */}



        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

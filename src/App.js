import React from 'react';
import Header from './component/Header';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
<<<<<<< HEAD
// import Cart from "./component/Cart";
// import Footer from './pages/Footer/Footer'
import Menu from './component/menu/Menu';
import ItemDetails from './component/ItemDetails';
import About from './component/About';
// import SearchBar from './component/SearchBar';
// import BookData from './component/Data.json'



=======
import Cart from "./component/Cart";
import Menu from './component/menu/Menu';
import AboutUs from './pages/about-us/AboutUs'
>>>>>>> 4422891dfc91d91833d45e68e060b2038abb0ddb

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
        <Route path="menu" element={<Menu/>} />
<<<<<<< HEAD
        <Route path="about" element={<About />} />
      <Route path="/cart/:id" element={<ItemDetails/>}/>
        
        {/* <Route path="about" element={<About/>} /> */}



        
=======
        <Route path="/about" element={<AboutUs/>}/>
>>>>>>> 4422891dfc91d91833d45e68e060b2038abb0ddb
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import "./Header.css"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      
        <h3 className='logo-h3'>food</h3>
      </div>

      <ul className="classlist">
        <li>Home</li>
        <li>About</li>
      </ul>
      <div className="drpdown">
        <div className="drpdown">Food-list</div>
        
      </div>

      <div className="search"><input type="text" placeholder='Search here' className='searchbar' />
      </div>
      <div className="cart"></div>
      <div className="button">Login</div>
      <div className="button">Sign-up</div>
      <div className="button">Cart <ShoppingBasketIcon /> </div>
      
    </nav>
  )
}

export default Header
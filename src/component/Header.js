import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React, { useState, useEffect } from "react";
import Foodies from "../component/foodie.png";
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Table from 'react-bootstrap/esm/Table';
import Menu from '@mui/material/Menu';
import { DLT } from "../Redux/actions/action";





// import { DLT } from '../redux/actions/action';

const Header = () => {

  const [price, setPrice] = useState(0);
  const getdata = useSelector((state) => state.cartReducer.carts)
  console.log(getdata)
  const dispatch = useDispatch();


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id))
  }




  const total = () => {
    let price = 0;
    getdata.map((dish, k) => {
      price = dish.price * dish.qnty + price
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total])

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <img src={Foodies} alt="" style={{ height: "58.16px" }} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/homePage">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
          </Nav>




          <Nav className="justify-content-between">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/food-order" mr-4>
              Sign-Up
            </Nav.Link>
            <Nav.Link href="" onClick={handleClick}  >
              Cart
              <Badge badgeContent={getdata.length} color="primary"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <ShoppingBasketIcon />
              </Badge>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {
          getdata.length ?
            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
              <Table>
                <thead>
                  <tr>
                    <th> Cart Items</th>
                    <th>  </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    getdata.map((dish) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <NavLink to={`/cart/${dish.id}`} onClick={handleClose}>
                                <img src={dish.pimg} style={{ width: "5rem", height: "5rem" }} alt="" />
                              </NavLink>
                            </td>
                            <td>
                              <p>{dish.name}</p>
                              <p>Price : ???{dish.price}</p>
                              <p>Quantity : {dish.qnty}</p>
                              {/* <p style={{color:"red",fontSize:20,cursor:"pointer"}} >
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p> */}
                            </td>

                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(dish.id)} >
                              <i className='fas fa-trash largetrash'></i>
                            </td>
                          </tr>
                        </>
                      )
                    })
                  }
                  <p className='text-center'>Total :??? {price} </p>
                </tbody>
              </Table>
            </div> :

            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
              <i className='fas fa-close smallclose'
                onClick={handleClose}
                style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
              <p style={{ fontSize: 22 }}>Your cart is empty</p>
              <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
            </div>
        }

      </Menu>
    </Navbar>
  );
}

export default Header;


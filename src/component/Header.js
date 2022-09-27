import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Foodies from "../component/foodie.png";
import { Badge } from "@material-ui/core";

function Header({}) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Foodies/> */}
        <img src={Foodies} alt="" style={{ height: "58.16px" }} />
        {/* <Navbar.Brand href="#home">Foodies</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/homePage">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
          </Nav>

          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                // onChange={handleFilter}
              />
            </Form>
          </Nav>
          <Nav className="justify-content-between">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/food-order" mr-4>
              Sign-Up
            </Nav.Link>
            <Nav.Link eventKey={3} href="/cart">
              Cart
              <Badge badgeContent={4} color="primary">
                <ShoppingBasketIcon />
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

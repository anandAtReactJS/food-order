import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import React from 'react';
import Form from 'react-bootstrap/Form';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">foodies</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/homePage">home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Food-List" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Burger</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pizza</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Chinese</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Shakes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Pure-veg</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Non-veg</NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
          <Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  
                </Form>

          </Nav>
          <Nav className='justify-content-between'>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/" mr-4>Sign-Up</Nav.Link>
            <Nav.Link eventKey={3} href="/cart">Cart <ShoppingBasketIcon/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
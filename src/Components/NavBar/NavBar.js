import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/Posts';


function NavBar() {


  return (
    <Navbar  collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <h2 className="text-light">Posts App</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse  id="basic-navbar-nav">

          <Nav
            className="me-5 my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="fs-5 mt-xxl-2 mt-lg-0  mt-xl-0 text-light ">
              <h3>Home</h3> 
            </Nav.Link>
    
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
} 
export default NavBar;
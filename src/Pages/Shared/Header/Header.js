import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../banner/top-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <Navbar collapseOnSelect expand="lg" className="my-3" bg="#fff" variant="light">
          <Container>
          <Navbar.Brand as={Link} to="/home">
          <img
          src={logo}
          width="190"
          
          className="d-inline-block align-top"
          alt=""
          />
          </Navbar.Brand>
          <Nav className="ms-auto">
               <Nav.Link as={Link} className="mune-link" to="/home">Home</Nav.Link>
               <Nav.Link as={Link} className="mune-link" to="/addBookinng">Add Booking</Nav.Link>
               <Nav.Link as={Link} className="mune-link" to="/addBookinng">Your Booking</Nav.Link>
               <Nav.Link as={Link} className="mune-link" to="/touristArea">Tourist Area</Nav.Link>
               <Nav.Link as={Link} className="mune-link" to="/about">About Agency</Nav.Link>
          </Nav>
          </Container>
          </Navbar>
     );
};

export default Header;
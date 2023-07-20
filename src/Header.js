import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './styles.css'
import image from './photos/logo.png'

const Header = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Omada Capital Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#properties">The Opportunity</Nav.Link>
          <Nav.Link href="#about">The Team</Nav.Link>
          <Nav.Link href="#contact">The Profit</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
 <img class="logos" src={image} alt="logo"></img>

    </>
  );
};

export default Header;

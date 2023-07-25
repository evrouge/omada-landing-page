import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles.css'
import image from './photos/logo.png'

const Header = () => {
  return (
    <>
  <Navbar bg="transparent" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            ><br/>
              <Nav.Link href="#opportunity">The Opportunity</Nav.Link>
              <Nav.Link href="#team">The Team</Nav.Link>
              <Nav.Link href="#profit">The Profit</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 <img class="logos" src={image} alt="logo"></img>

    </>
  );
};

export default Header;

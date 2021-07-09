import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Cart, Signpost } from 'react-bootstrap-icons';

const Header = () => {
 return (
  <header>
   <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
    <Container>
     <Navbar.Brand href='/'>Market</Navbar.Brand>
     <Navbar.Toggle aria-controls='basic-navbar-nav' />
     <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ms-auto'>
       <Nav.Link href='/cart'>
        <Cart /> Cart
       </Nav.Link>
       <Nav.Link href='/login'>
        <Signpost />
        Sign In
       </Nav.Link>
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </header>
 );
};

export default Header;

import React from 'react';
import {Navbar,Container, Nav, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar className='color-nav' fixed="top"  collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand className='logo' href="/" onClick={() => navigate("/")}>
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      WiseWager
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link onClick={() => navigate("/terms-and-condition")}></Nav.Link>
      <Nav.Link onClick={() => navigate("/terms-and-condition")}>Terms and Condition</Nav.Link> */}
    </Nav>
    <Nav>
      <Nav.Link onClick={() => navigate("/login")}>
        <Button variant="success" size="lg">
          LOGIN
        </Button>{' '}
      </Nav.Link>
      <Nav.Link eventKey={2} onClick={() => navigate("/login")}>
      <Button variant="outline-success" size="lg">
          SIGN UP
        </Button>{' '}
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header;
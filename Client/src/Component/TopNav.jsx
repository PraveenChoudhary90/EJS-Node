import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function TopNav() {
  return (
    <>
    
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link}  to="about">About</Nav.Link>
            <Nav.Link as={Link}  to="search">Search</Nav.Link>
            <Nav.Link as={Link}  to="sorting">Sorting</Nav.Link>
            <Nav.Link as={Link}  to="pagination">Pagination</Nav.Link>
            <Nav.Link as={Link}  to="pagination1">Pagination1</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    </>
  )
}
// https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd
export default TopNav
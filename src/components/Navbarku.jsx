import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Navbarku = () => {
  return (
    <div className='navbar-bg'>
      <Navbar bg="info" expand="lg">
      <Container fluid>
        <Navbar.Brand className='navbar-brand' href="#">World Cup</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='two' href="#action1">Home</Nav.Link>
            <Nav.Link className='two' href="#action2">Services</Nav.Link>
            <Nav.Link className='two' href="#action2">About</Nav.Link>
            <Nav.Link className='two' href="#action2">Contact</Nav.Link>
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btn' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarku
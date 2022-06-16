// eslint-disable-next-line

import React from 'react'
import { Button, Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const MainNavbar = () => {
  // const { searchTodos, todoList } = useContext(CardContext)
 
 
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className='text-white'>Todo-List</Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" className="bg-light text-danger" />
          <Navbar.Collapse id="navbarScroll" >
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link as={Link} to='/' className='text-white'>Home</Nav.Link>

              <Nav.Link as={Link} to="/" className='text-white'>Link</Nav.Link>
              
              <Nav.Link as={Link} to="/read-todos" className='text-white'>
                Read Todos
              </Nav.Link>


            </Nav>
            <Form className="d-flex" action="/" method="POST">
              <FormControl
                type="search"
                placeholder="Search Todos by Name"
                className="me-2"
                aria-label="Search"
                name="formSearch"
                 
              />
              <Button variant="outline-success" type="submit" >Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>




    </ >
  )
}

export default MainNavbar   
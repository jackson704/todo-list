import React, { useContext, useState } from 'react'
import { Button, Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import MainForm from './MainForm';
import CardContext from '../context/cardContext'

const MainNavbar = () => {
  const { searchTodos, todoList } = useContext(CardContext)

  const [searchTodoForm, setSearchTodoForm] = useState({
    formSearch: ''
  })
  let filterTodos = (e) => {

    e.preventDefault()

    // let getTodos = (e) => {
    //   // console.log(e.target.value);
    //   todoList.map((value) => {
    //     if (e.target.value === value.name) {
    //       searchTodos(value.name);

    //     }
    //   })
    // }
    // getTodos.apply()
  }

  let getTodos = (e) => {
    console.log("getTodos is called");
    // console.log(e.target.value);
    todoList.filter((valueTodo) => {
      let id = valueTodo._id;
      // return id;
      // console.log("The MainNavbar name is ", valueTodo.name);
      // console.log("The MainNavbar id is ", valueTodo._id);
      // console.log(e.target.name);
      setSearchTodoForm({
        // ...searchTodoForm,
        [e.target.name]: e.target.value
      });
      searchTodos(id, searchTodoForm.formSearch)

      // console.log(searchTodoForm.formSearch.length);
    })
  }

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
              {/* <NavDropdown className='text-white' title="Link" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="#action3" className='text-black'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4" className='text-black'>Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className='text-black'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
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
                onChange={
                  // (e) => {
                  getTodos

                  // todoList.map((valueTodo) => {
                  //   let id = valueTodo._id;
                  //   // return id;
                  //   searchTodos(id, e.target.value)
                  // })
                  // }
                }
              />
              <Button variant="outline-success" type="submit" onClick={filterTodos}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>




    </ >
  )
}

export default MainNavbar   
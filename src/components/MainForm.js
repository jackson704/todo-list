import React, { useState, useContext } from "react";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import AllContent from "./AllContent";
import CardContext from "../context/cardContext";

const MainForm = (props) => {
  const { addTodos, inputFieldsBlank, editTodos } = useContext(CardContext);

  // const [addMyTodos, setAddMyTodos] = useState([])
  let random = Math.random();

  let d = random.toPrecision();
  let uId = d.substr(2);
  const [inputFields, setInputFields] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    desc: "",
  });

  // console.log(blankInput.name);

  let onChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });

  };

  let handleUpdateTodo = (e) => {
    e.preventDefault();
    editTodos(
      inputFields.name,
      inputFields.email,
      inputFields.mobile,
      inputFields.desc,
      (inputFields.id = uId)
    );

    setInputFields({
      // ...inputFields
      name: inputFieldsBlank.name,
      email: inputFieldsBlank.email,
      mobile: inputFieldsBlank.mobile,
      desc: inputFieldsBlank.desc,
    });
  };

  let handleClick = (e) => {
    e.preventDefault();
    // let id_todo = 1;

    addTodos(
      (inputFields.id = uId),
      inputFields.name,
      inputFields.email,
      inputFields.mobile,
      inputFields.desc
    );

    setInputFields({
      // ...inputFields,
      name: inputFieldsBlank.name,
      email: inputFieldsBlank.email,
      mobile: inputFieldsBlank.mobile,
      desc: inputFieldsBlank.desc,
    });
    console.log(inputFields);
  };

  return (
    <div>
      <Form action="/" method="post" name="form1" id="my-form">
        <Container fluid className="bg-light rounded-3 my-4">
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Enter Name</Form.Label>
                <Form.Control
                  onChange={onChange}
                  name="name"
                  type="text"
                  placeholder="Name"
                  id="name"
                  value={inputFields.name}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Enter Email</Form.Label>
                <Form.Control
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={inputFields.email}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="form-label">Mobile No.</Form.Label>
                <Form.Control
                  onChange={onChange}
                  name="mobile"
                  type="tel"
                  placeholder="Mobile"
                  id="mobile"
                  value={inputFields.mobile}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={onChange}
              name="desc"
              as="textarea"
              rows={3}
              id="description"
              value={inputFields.desc}
            />
          </Form.Group>

          {
            <>
              <Button
                variant="primary"
                onClick={handleClick}
                type="submit"
                className="my-3"
              >
                Add Todo
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                variant="success"
                onClick={handleUpdateTodo}
                type="submit"
                className="my-3"
              >
                Now UpdateTodo
              </Button>
            </>
          }
        </Container>
      </Form>

      <div className="row myCard" id="fullRow">
        <AllContent />
      </div>
    </div>
  );
};

export default MainForm;

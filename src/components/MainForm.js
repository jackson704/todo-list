// eslint-disable-next-line

import React, { useContext } from "react";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import AllContent from "./AllContent";
import CardContext from "../context/cardContext";

const MainForm = () => {
  const { addAndUpdateTodo, setTodo, todo, buttonProperty } =
    useContext(CardContext);

  let onChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  let handleClick = (e) => {
    // debugger

    addAndUpdateTodo();
    setTodo({});
    e.preventDefault();
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
                  name="name"
                  type="text"
                  placeholder="Name"
                  id="name"
                  value={todo.name || ""}
                  onChange={onChange}
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
                  value={todo.email || ""}
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
                  value={todo.mobile || ""}
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
              value={todo.desc || ""}
            />
          </Form.Group>

          {
            <>
              <Button
                variant={
                  buttonProperty.backgroundColor === "primary"
                    ? "primary"
                    : "success"
                }
                onClick={handleClick}
                type="submit"
                className="my-3"
              >
                {buttonProperty && buttonProperty.buttonName === "Add Todo"
                  ? "Add Todo"
                  : "Now Update Todo"}
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

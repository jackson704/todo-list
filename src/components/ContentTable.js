// eslint-disable-next-line

import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { HiPencilAlt } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

import CardContext from "../context/cardContext";

// REACT TOASTIFY
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContentTable = (props) => {
  let { name, email, mobile, desc, id } = props.todo;

  const { deleteTodos, setTodo, buttonProperty, setButtonProperty } =
    useContext(CardContext);

  let editForTodo = () => {
    window.location.href = "#my-form";
    setTodo(props.todo);

    if (buttonProperty.buttonName === "Add Todo") {
      setButtonProperty({
        buttonName: "Now Update Todo",
        backgroundColor: "success",
      });
    }
  };

  let deleteForTodo = () => {
    setTodo(props.todo);
    deleteTodos(id);
    if (buttonProperty.buttonName === "Now Update Todo") {
      setButtonProperty({
        buttonName: "Add Todo",
        backgroundColor: "primary",
      });
    }
    toast("Todo Deleted Successfully!");
  };

  return (
    <>
      <Card className="w-25 mx-md-5 my-md-2" id="main-card">
        <Card.Header as="h5">Name - {name}</Card.Header>
        <Card.Header as="h5">Email - {email}</Card.Header>
        <Card.Header as="h5">Mobile - {mobile}</Card.Header>
        <Card.Body>
          <Card.Title>Description - {desc}</Card.Title>
          <Button
            variant="success"
            // Update Todos edit
            onClick={editForTodo}
          >
            <HiPencilAlt className="text-lg-center" />
          </Button>
          &nbsp; &nbsp;
          <Button
            variant="danger"
            // Delete Todo
            onClick={deleteForTodo}
          >
            <AiFillDelete className="text-lg-center " />
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ContentTable;

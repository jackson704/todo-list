import React, { useContext } from "react";
// eslint-disable-next-line
import { Button, Card } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import { HiPencilAlt } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

import CardContext from "../context/cardContext";

const ContentTable = (props) => {
  let { name, email, mobile, desc, _id } = props.todo;
  // console.log(name);

  const { editTodos, deleteTodos, inputFieldsUpdate } = useContext(CardContext);
  // const { editTodos, deleteTodos, inputFieldsUpdate } = context;

  console.log(inputFieldsUpdate.name);
  console.log(name);

  if (
    inputFieldsUpdate !== undefined &&
    inputFieldsUpdate === null &&
    inputFieldsUpdate._uId === _id &&
    inputFieldsUpdate.name === name &&
    inputFieldsUpdate.email === email &&
    inputFieldsUpdate.mobile === mobile &&
    inputFieldsUpdate.desc === desc
  ) {
    return (
      <>
        <Card className="w-25 mx-md-5 my-md-2" id="main-card">
          <Card.Header as="h5">Name - {inputFieldsUpdate.name}</Card.Header>
          <Card.Header as="h5">Email - {inputFieldsUpdate.email}</Card.Header>
          <Card.Header as="h5">Mobile - {inputFieldsUpdate.mobile}</Card.Header>
          <Card.Body>
            <Card.Title>Description - {inputFieldsUpdate.desc}</Card.Title>
            <Button
              variant="success"
              onClick={() => {
                editTodos(
                  props.newName,
                  props.newEmail,
                  props.newMobile,
                  props.newDesc,
                  _id
                );
              }}
            >
              <HiPencilAlt className="text-lg-center" />
            </Button>
            &nbsp; &nbsp;
            <Button
              variant="danger"
              onClick={() => {
                deleteTodos(_id);
              }}
            >
              <AiFillDelete className="text-lg-center " />
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  } else if (name && email && mobile && desc && _id !== "") {
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
              onClick={() => {
                editTodos(
                  props.newName,
                  props.newEmail,
                  props.newMobile,
                  props.newDesc,
                  _id
                );
              }}
            >
              <HiPencilAlt className="text-lg-center" />
            </Button>
            &nbsp; &nbsp;
            <Button
              variant="danger"
              onClick={() => {
                deleteTodos(_id);
              }}
            >
              <AiFillDelete className="text-lg-center " />
            </Button>
          </Card.Body>
        </Card>

        {/* <HiPencilAlt className='text-lg-center' /> */}
      </>
    );
  }
};

export default ContentTable;

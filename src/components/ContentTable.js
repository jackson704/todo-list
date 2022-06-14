import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { HiPencilAlt } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

import CardContext from "../context/cardContext";

const ContentTable = (props) => {
  let { name, email, mobile, desc, _id } = props.todo;

  const { editTodos, deleteTodos, inputFieldsUpdate, myUpdate } =
    useContext(CardContext);

  console.log(inputFieldsUpdate.name);
  console.log(myUpdate.name);
  // console.log(name);

  if (
    inputFieldsUpdate !== undefined &&
    inputFieldsUpdate === null &&
    inputFieldsUpdate._uId === _id &&
    inputFieldsUpdate.name === myUpdate.name &&
    inputFieldsUpdate.email === myUpdate.email &&
    inputFieldsUpdate.mobile === myUpdate.mobile &&
    inputFieldsUpdate.desc === myUpdate.desc
  ) {
    return (
      <>
        <Card className="w-25 mx-md-5 my-md-2" id="main-card">
          <Card.Header as="h5">
            Name - {myUpdate.name || inputFieldsUpdate.name}
          </Card.Header>
          <Card.Header as="h5">
            Email - {myUpdate.email || inputFieldsUpdate.email}
          </Card.Header>
          <Card.Header as="h5">
            Mobile - {myUpdate.mobile || inputFieldsUpdate.mobile}
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Description - {myUpdate.desc || inputFieldsUpdate.desc}
            </Card.Title>
            <Button
              variant="success"
              // Update Todos edit
              onClick={() => {
                editTodos(
                  (inputFieldsUpdate.name = name),
                  (inputFieldsUpdate.email = email),
                  (inputFieldsUpdate.mobile = email),
                  (inputFieldsUpdate.desc = desc),
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
              // Update Todos edit
              onClick={() => {
                editTodos(
                  (inputFieldsUpdate.name = name),
                  (inputFieldsUpdate.email = email),
                  (inputFieldsUpdate.mobile = email),
                  (inputFieldsUpdate.desc = desc),
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

import React, { useState } from "react";
import CardContext from "./cardContext";

const CardState = (props) => {
  const [todoList, setTodoList] = useState([]);

  const [inputFieldsUpdate, setInputFieldsUpdate] = useState({
    name: "",
    email: "",
    mobile: "",
    desc: "",
    _uId: "",
  });

  const [inputFieldsBlank, setInputFieldsBlank] = useState({
    id: 0,
    name: "",
    email: "",
    mobile: "",
    desc: "",
  });

  // Adding Todos
  let addTodos = (id, name, email, mobile, desc) => {
    let todoNotesMain = {
      _id: id,
      name: name,
      email: email,
      mobile: mobile,
      desc: desc,
    };

    // setInputFieldsUpdate({
    //   ...todoNotesMain,
    //   name: todoNotesMain.name,
    //   email: todoNotesMain.email,
    //   mobile: todoNotesMain.mobile,
    //   desc: todoNotesMain.desc,
    // });

    if (
      todoNotesMain._id ||
      todoNotesMain.name ||
      todoNotesMain.email ||
      todoNotesMain.mobile ||
      todoNotesMain.desc !== ""
    ) {
      setTodoList(todoList.concat(todoNotesMain));
      setInputFieldsBlank({
        // ...inputFieldsBlank,
        name: "",
        email: "",
        mobile: "",
        desc: "",
      });
      console.log(id);
    } else {
      alert("Please Fill All & After Add Todo");
      console.log("error");
    }
  };

  // Delete Todos
  let deleteTodos = (id) => {
    // console.log(`Deleting todos ${id}`);
    let newTodos = todoList.filter((newTodo) => {
      return newTodo._id !== id;
    });
    setTodoList(newTodos);
  };
  // Edit Todos
  let editTodos = (name, email, mobile, desc, id) => {
    console.log("edit todos");
    console.log(`The name is ${name} `);
    console.log(`The id is ${id} `);

    window.location.href = "#my-form";
    setInputFieldsUpdate({
      // ...inputFieldsUpdate,
      name: name,
      email: email,
      mobile: mobile,
      desc: desc,
      _uId: id,
    });
    // let updateTodo = todoList.map((value)=>{
    //     console.log(value);
    // })

    // console.log(inputFields.name);
  };

  // Search Todos
  let searchTodos = (id, name) => {
    console.log(name);

    console.log(todoList.length);

    let filterAllTodos = todoList.filter((filter) => {
      console.log(filter._id, id);
      console.log(filter.name, name, name.length);
      return filter.name !== name;
      // if (filter.name !== name && filter._id !== id) {

      //     return (filter.name && filter._id);
      // }
      // return (filter.name === name);
    });
    // let values = filterAllTodos.filter((value) => {
    //     console.log(value);
    //     return value;
    // })
    setTodoList(filterAllTodos);
    // })
    console.log(filterAllTodos);
  };

  const allTodos = {
    todoList,
    inputFieldsBlank,
    addTodos,
    deleteTodos,
    searchTodos,
    editTodos,
    inputFieldsUpdate,
  };
  return (
    <div>
      <CardContext.Provider value={allTodos}>
        {props.children}
      </CardContext.Provider>
    </div>
  );
};

export default CardState;

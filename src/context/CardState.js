// eslint-disable-next-line

import React, { useState } from "react";
import CardContext from "./cardContext";

// REACT TOASTIFY
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardState = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({});
  const [buttonProperty, setButtonProperty] = useState({
    title: "My Todos",
    buttonName: "Add Todo",
    backgroundColor: "primary",
  });

  let random = Math.random();
  let d = random.toPrecision();
  let uniq_id = d.substr(2);

  // Adding Todos
  let addAndUpdateTodo = () => {
    if (todo.id) {
      // Update TodoList
      const tempRecords = todoList.map((t) => (t.id === todo.id ? todo : t));
      setTodoList(tempRecords);
      setTodo({});
      setButtonProperty({
        title: "My Todos",
        buttonName: "Add Todo",
        backgroundColor: "primary",
      });
      toast("Todo Updated Successfully!");
    } else {
      // Add TodoList
      const temp = { ...todo, id: uniq_id };
      console.log(temp);

      if (
        todo.name !== "" &&
        todo.email !== "" &&
        todo.mobile !== "" &&
        todo.desc !== ""
      ) {
        setTodoList([temp, ...todoList]);
        setTodo({});

        toast("Todo Added Successfully!");
      }
    }
  };

  // Delete Todos
  let deleteTodos = (id) => {
    // console.log(`Deleti ng todos ${id}`);
    let newTodos = todoList.filter((newTodo) => {
      return newTodo.id !== id;
    });
    setTodoList(newTodos);
    setTodo({})
  };

  const allTodos = {
    todoList,
    todo,
    buttonProperty,
    setButtonProperty,
    setTodo,
    addAndUpdateTodo,
    deleteTodos,
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

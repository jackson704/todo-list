// eslint-disable-next-line

import React, { useContext } from "react";
import ContentTable from "./ContentTable";

import CardContext from "../context/cardContext";

const AllContent = () => {
  const context = useContext(CardContext);

  const { todoList} = context;
  return (
    <>
       
      {todoList.map((todo) => {
        console.log(todo);
        return <ContentTable key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export default AllContent;

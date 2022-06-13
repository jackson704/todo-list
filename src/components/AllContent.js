import React, { useContext } from "react";
import ContentTable from "./ContentTable";

import CardContext from "../context/cardContext";

const AllContent = (props) => {
  const context = useContext(CardContext);

  const { todoList } = context;

  // console.log(updateDetails);
  
  return (
    <>
      <h1>This is My Todos</h1>
      {todoList.map((todo) => {
        return <ContentTable key={todo._id} todo={todo} />;
      })}
    </>
  );
};

export default AllContent;

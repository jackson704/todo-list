import React, { useContext } from 'react'
// import ContentTable from './ContentTable'
import CardContext from '../context/cardContext'

const ReadTodo = () => {

  const a = useContext(CardContext)
  return (
    <>
      {/* <ContentTable /> */}
      <h1>{a.name}</h1>
      <h1>{a.class}</h1>
    </>

  )
}

export default ReadTodo
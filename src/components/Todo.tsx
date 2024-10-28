import React from 'react'
import { MdOutlineBookmarkRemove, MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

function Todo() {
  return (
  <div className="todo-row">
    <p>ILK TODO</p>
    <div className="icon-c">
        <FaCheck className="edit-icon"  /> 
        <MdEdit className="edit-icon" />
      <MdOutlineBookmarkRemove className="remove-icon"  />
    </div>
  </div>
  )
}

export default Todo
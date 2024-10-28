import React from 'react'
import { MdOutlineBookmarkRemove, MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/slices/TodoSlice';

interface TodoProps{
  todoProps: TodoType
}

function Todo({todoProps}:TodoProps) {
  const {id, content} = todoProps;
  const dispatch = useDispatch();

  const handleRemoveTodo= ():void =>{
    dispatch(removeTodoById(id))
  }

  return (
  <div className="todo-row">
    <p>{content}</p>
    <div className="icon-c">
        <FaCheck className="edit-icon"  /> 
        <MdEdit className="edit-icon" />
      <MdOutlineBookmarkRemove onClick={handleRemoveTodo} className="remove-icon"  />
    </div>
  </div>
  )
}

export default Todo
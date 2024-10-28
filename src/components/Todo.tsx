import React, { useState } from 'react'
import { MdOutlineBookmarkRemove, MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodoById, updateTodoById } from '../redux/slices/TodoSlice';

interface TodoProps{
  todoProps: TodoType
}

function Todo({todoProps}:TodoProps) {
  const {id, content} = todoProps;
  const dispatch = useDispatch();

  const [newTodoContent, setNewTodoContent] = useState<string>(content); 
  const [editable , setEditable] = useState<boolean>(false);

  const handleRemoveTodo= ():void =>{
    dispatch(removeTodoById(id))
  }

  const updateTodo = ():void =>{
    const request:TodoType = {
      id: id,
      content : newTodoContent
    }
    dispatch(updateTodoById(request))
    setEditable(false)
  }


  return (
  <div className="todo-row">
    <p>
      {
        editable?(
          <input 
          className="edit-todo-input"
          value={newTodoContent}
          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
            setNewTodoContent(e.target.value)
          }}
          type="text" />
        ):(content)  
      }
      </p>
    <div className="icon-c">
      {
        editable?(
        <FaCheck onClick={updateTodo} className="edit-icon"  /> 
        ):(
        <MdEdit  onClick={()=>{setEditable(true)}} className="edit-icon" />
      )
      }
      <MdOutlineBookmarkRemove onClick={handleRemoveTodo} className="remove-icon"  />
    </div>
  </div>
  )
}

export default Todo
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/slices/TodoSlice';
import { TodoType } from '../types/Types';

function TodoCreate() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("")
  
  const handleCreateTodo = ():void => {
    if(newTodo.trim().length == 0){
      alert("Todo is empty");
      return;
    }

    const payload:TodoType = {
      id: 0,
      content : newTodo
    }
    dispatch(createTodo(payload))
    setNewTodo("")
  }

  return (
    <div className='todo-create'>
        <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
          setNewTodo(e.target.value)
        }} placeholder='Enter Todo' type="text" />
        <button onClick={handleCreateTodo}>Create</button>
    </div>
  )
}

export default TodoCreate